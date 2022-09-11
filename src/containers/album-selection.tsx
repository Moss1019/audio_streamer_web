import { Fragment, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EntryCard from "../controls/entry-card";
import SongContentBox from "../controls/song-content-box";
import { getAlbums } from "../service.ts/content-client";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeAlbum } from "../store/content";

function AlbumSelection() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const artist = useAppSelector((state) => state.content.currentArtist);

    const [albums, setAlbums] = useState<string[]>([]);

    useEffect(() => {
        getAlbums(artist, setAlbums, console.log);
    }, [artist]);

    const createAlbumEntry = (album: any, navigate: (newPath: string) => void) => {
        return (
            <Grid item xs={6} sm={2} md={4} lg={2}>
                <EntryCard title={album} type="album" onClick={() => { 
                    dispatch(changeAlbum(album));
                    navigate("/songs");
                }} />
            </Grid>    
        );
    }

    return (
        <SongContentBox>
            <Grid container>
                {albums.map((a: any, i: number) => (
                    <Fragment key={i}>
                        {createAlbumEntry(a, navigate)}
                    </Fragment>
                ))}
            </Grid>
        </SongContentBox>
    );
}

export default AlbumSelection;
