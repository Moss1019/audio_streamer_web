import SongInfo from "./song-info";
import { SongChunkRequest } from "./wav-model";
import { baseUrl } from "./axios";
import axios from "axios";

export function getSongInfo(artist: string, album: string, songName: string, 
        onSuccess: (songInfo: SongInfo) => void, onError: (err: any) => void) {
    axios.get(`${baseUrl}/api/wav-songs/${artist}/${album}/${songName}`)
        .then(res => {
            onSuccess(res.data);
        })
        .catch(onError);
}

export function getSongChunk(req: SongChunkRequest, onSuccess: (chunk: ArrayBuffer) => void, onError: (err: any) => void) {
    axios.get(`${baseUrl}/api/wav-songs/${req.artist}/${req.album}/${req.songName}/${req.length}/${req.offset}`, { 
            responseType: 'arraybuffer',
            headers: {
                'Accept': 'application/octet-stream'
            }
        })
        .then(res => {
            onSuccess(res.data);
        })
        .catch(onError);
}

export function getExample(onSuccess: (data: any) => void, onError: (err: any) => void) {
    axios.get(`${baseUrl}/api/wav-songs/ex`, { 
            responseType: 'arraybuffer',
            headers: {
                'Accept': 'application/octet-stream'
            }
        })
        .then(res => {
            onSuccess(res.data);
        })
        .catch(onError);
}
