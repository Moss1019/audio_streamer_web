import { Box, styled } from "@mui/material";

const SongBox = styled(Box)(() => ({
    width: '75vw',
    padding: '2rem',
}));

function SongSelection() {
    return (
        <SongBox>
            Show songs in little boxes
        </SongBox>
    );
}

export default SongSelection;
