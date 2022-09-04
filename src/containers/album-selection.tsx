import { Fragment, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EntryCard from "../controls/entry-card";
import SongContentBox from "../controls/song-content-box";

const createAlbumEntry = (album: any, navigate: (newPath: string) => void) => {
    return (
        <Grid item xs={6} sm={4} md={3}>
            <EntryCard title={album.name} type="album" onClick={() => navigate("/songs")} />
        </Grid>    
    );
}

function AlbumSelection() {
    const navigate = useNavigate();

    const [albums, setAlbums] = useState<any[]>([]);

    useEffect(() => {
        setAlbums([{name: 'Nattvasen'}])
    }, []);

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
