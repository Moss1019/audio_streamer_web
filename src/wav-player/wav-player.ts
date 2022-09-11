import SongInfo from "../service.ts/song-info";
import { getSongChunk } from "../service.ts/wav-client";
import { SongChunkRequest } from "../service.ts/wav-model";

class WavPlayer {
    sampleRate: number;

    channels: number;

    totalPlayed: number;

    chunkSeconds: number;

    chunkByteLength: number;

    currentIndex: number;

    context: AudioContext;

    startTimes: number[];

    primaryBuffer: AudioBuffer | undefined;

    onChange: (isPlaying: boolean) => void;

    constructor() {
        this.sampleRate = 44100;
        this.channels = 2;
        this.totalPlayed = 0;
        this.chunkSeconds = 3;
        this.chunkByteLength = this.chunkSeconds * this.sampleRate * this.channels * 2;
        this.currentIndex = 0;
        this.context = new AudioContext({ sampleRate: this.sampleRate });
        this.startTimes = [];
        this.onChange = (s) => {};
    }

    registerOnChange(onChangeCallback: (isPlaying: boolean) => void) {
        this.onChange = onChangeCallback;
    }

    isPlaying() {
        return this.context.state === 'running';
    }

    pauseSong() {
        if(this.context.state === 'running') {
            this.context.suspend();
            this.onChange(false);
        }
    }

    resumeSong() {
        if(this.context.state === 'suspended') {
            this.context.resume();
            this.onChange(true);
        }
    }

    playSong(songInfo: SongInfo) {
        if(this.context.state === 'running') {
            this.context.suspend();
        }
        if(this.context.state === 'suspended') {
            this.context.close();
            this.context = new AudioContext({ sampleRate: this.sampleRate });
        }
        const createSongRequest = (): SongChunkRequest => {
            return {
                length: this.chunkByteLength,
                offset: this.totalPlayed,
                songName: songInfo.songName,
                album: songInfo.album,
                artist: songInfo.artist
            };
        }
        const createAudioBuffer = (chunk: ArrayBuffer) => {
            const audioData = new Int16Array(chunk);
            const ch1 = new Float32Array(audioData.length / 2);
            const ch2 = new Float32Array(audioData.length / 2);
            const buffer = this.context.createBuffer(this.channels, ch1.length, this.sampleRate);
            for(let i = 0, j = 0; i < audioData.length; i += 2, ++j) {
                ch1[j] = audioData[i] / 32767.0;
                ch2[j] = audioData[i + 1] / 32767.0;
            }
            buffer.copyToChannel(ch1, 0);
            buffer.copyToChannel(ch2, 1);
            const bufferSource = this.context.createBufferSource();
            bufferSource.buffer = buffer;
            return bufferSource;
        }
        const setupOnEnded = (b: AudioBufferSourceNode) => {
            getSongChunk(createSongRequest(), chunk => {
                const source = createAudioBuffer(chunk);
                b.addEventListener('ended', (ev) => {
                    source.connect(this.context.destination);
                    this.totalPlayed += chunk.byteLength;
                    source.start(this.startTimes[this.currentIndex++]);
                    if(this.totalPlayed < songInfo.audioFileSize) {
                        setupOnEnded(source);
                    }
                })
            }, console.log);
        };
        this.totalPlayed = 0;
        this.currentIndex = 0;
        this.startTimes.splice(0, this.startTimes.length);
        const numberIterations = Math.round(songInfo.audioFileSize / this.chunkByteLength);
        for(let i = 0; i < numberIterations; ++i) {
            this.startTimes.push(i * this.chunkSeconds);
        }
        getSongChunk(createSongRequest(), chunk => {
            const sourceFirst = createAudioBuffer(chunk);
            sourceFirst.connect(this.context.destination);
            this.totalPlayed += chunk.byteLength;
            sourceFirst.start(this.startTimes[this.currentIndex++]);
            getSongChunk(createSongRequest(), chunk => {
                const sourceSecond = createAudioBuffer(chunk);
                sourceSecond.connect(this.context.destination);
                this.totalPlayed += chunk.byteLength;
                sourceSecond.start(this.startTimes[this.currentIndex++]);
                setupOnEnded(sourceFirst);
            }, console.log);
            this.onChange(true);
        }, console.log)
    }
}

const wavPlayer = new WavPlayer();
export default wavPlayer;
