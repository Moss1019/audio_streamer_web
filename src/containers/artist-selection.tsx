import { Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EntryCard from "../controls/entry-card";
import SongContentBox from "../controls/song-content-box";

const createArtistEntry = (artist: any, navigate: (newPath: string) => void) => {
    return (
        <Grid item xs={6} sm={4} md={3}>
            <EntryCard title={artist.name} type="artist" onClick={() => navigate("/albums")} />
        </Grid>
    );
}

function ArtistSelection() {
    const navigate = useNavigate();

    const [artists, setArtists] = useState<any[]>([]);

    useEffect(() => {
        setArtists([{name: 'Manegarm'}]);
    }, []);

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
