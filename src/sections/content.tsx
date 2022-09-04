import { Box, styled } from "@mui/material";
import ArtistSelection from "../containers/artist-selection";
import SideMenu from "../containers/side-menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AlbumSelection from "../containers/album-selection";
import SongSelection from "../containers/song-selection";
import ContentSearch from "../containers/content-search";

const ContentBox = styled(Box)(() => ({
	height: '85vh',
    display: 'flex',
    justifyContent: 'flex-start'
}));

function Content() {
    return (
        <ContentBox>
            <Router>
                <SideMenu />
                
                <Routes>
                    <Route path="/" element={<ArtistSelection />} />
                    <Route path="/artist" element={<ArtistSelection />} /> 
                    <Route path="/albums" element={<AlbumSelection />} />
                    <Route path="/songs" element={<SongSelection />} />

                    <Route path="/search" element={<ContentSearch />} />
                </Routes>
            </Router>
        </ContentBox>
    );
}

export default Content;
