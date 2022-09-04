import { Box, styled } from "@mui/material";

const SongControlBox = styled(Box)(() => ({
	height: '15vh'
}));

function SongControls() {
    return (
        <SongControlBox>
            Song controls, play, pause, favorite
        </SongControlBox>
    );
}

export default SongControls;
