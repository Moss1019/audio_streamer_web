import { Box, Grid, styled } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EntryCard from "../controls/entry-card";
import { getSongs } from "../service.ts/content-client";
import { getSongInfo } from "../service.ts/wav-client";
import { useAppSelector } from "../store/hooks";
import wavPlayer from "../wav-player/wav-player";

const SongBox = styled(Box)(() => ({
    width: '75vw',
    padding: '2rem',
}));

function SongSelection() {
    const navigate = useNavigate();

    const artist = useAppSelector((state) => state.content.currentArtist);
    const album = useAppSelector((state) => state.content.currentAlbum);

    const [songs, setSongs] = useState<any[]>([]);

    useEffect(() => {
        if(artist.length === 0 || album.length === 0) {
            navigate('/');
        }
        getSongs(artist, album, setSongs, console.log);
    }, [artist, album, navigate]);

    const playSong = (songName: string) => {
        getSongInfo(artist, album, songName, (songInfo) => {
            wavPlayer.playSong(songInfo);
        }, console.log);
    }

    const createSongEntry = (s: string) => {
        return (
            <Grid item xs={6} sm={2} md={4} lg={2}>
                <EntryCard title={s} type="song" onClick={() => { 
                    playSong(s);
                }} />
            </Grid>
        );
    }

    return (
        <SongBox>
            <Grid container>
                {songs.map((s: any, i: number) => (
                    <Fragment key={i}>
                        {createSongEntry(s)}
                    </Fragment>
                ))}
            </Grid>
        </SongBox>
    );
}

export default SongSelection;
