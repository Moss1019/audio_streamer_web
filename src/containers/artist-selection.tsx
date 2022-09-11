import { Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EntryCard from "../controls/entry-card";
import SongContentBox from "../controls/song-content-box";
import { getArtists } from "../service.ts/content-client";
import { changeArtist } from "../store/content";
import { useAppDispatch } from "../store/hooks";

function ArtistSelection() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [artists, setArtists] = useState<string[]>([]);

    useEffect(() => {
        getArtists(setArtists, console.log);
    }, []);

    const createArtistEntry = (artist: any, navigate: (newPath: string) => void) => {
        return (
            <Grid item xs={6} sm={2} md={4} lg={2}>
                <EntryCard title={artist} type="artist" onClick={() => {
                    dispatch(changeArtist(artist));
                    navigate("/albums");
                }} />
            </Grid>
        );
    }

    return (
        <SongContentBox>
            <Grid container>
                {artists.map((a: any, i: number) => (
                    <Fragment key={i}>
                        {createArtistEntry(a, navigate)}
                    </Fragment>
                ))}
            </Grid>
        </SongContentBox>
    );
}

export default ArtistSelection;
