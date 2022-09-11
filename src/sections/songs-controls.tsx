import { Box, IconButton, styled } from "@mui/material";
import PlayIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import wavPlayer from "../wav-player/wav-player";
import { useEffect, useMemo, useState } from "react";

const SongControlBox = styled(Box)(() => ({
	height: '15vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

function SongControls() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    
    const playBtnIcon = useMemo(() => {
        return isPlaying ?
            <PauseIcon /> :
            <PlayIcon /> 
    }, [isPlaying])

    const changePlayingState = () => {
        if(isPlaying) {
            wavPlayer.pauseSong();
        } else {
            wavPlayer.resumeSong();
        }
    }

    useEffect(() => {
        wavPlayer.registerOnChange((state) => {
            setIsPlaying(state);
        })
    }, [wavPlayer]);

    return (
        <SongControlBox>
            <IconButton color="primary" onClick={() => changePlayingState()}>
                {playBtnIcon}
            </IconButton>
        </SongControlBox>
    );
}

export default SongControls;
