import { Box, Grid, IconButton, styled } from "@mui/material";
import MenuEntry from "../controls/menu-entry";
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"
import LibIcon from "@mui/icons-material/LibraryMusic"
import FavoriteIcon from "@mui/icons-material/Favorite"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeTheme } from "../store/theme";

const MenuBox = styled(Box)(() => ({
    width: '25vw',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}));

const IconBox = styled(Box)(() => ({
    marginBottom: '1rem'
}));

const LibraryBox = styled(Box)(() => ({
    marginBottom: '1rem'
}));

function SideMenu() {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const isLight = useAppSelector((state) => state.theme.value);

    return (
        <MenuBox>
            <Box>
                <IconBox>
                    Icon
                </IconBox>

                <LibraryBox>
                    {/* <Grid container>
                        <Grid item sm={12} md={6}>
                            <MenuEntry text="home" icon={HomeIcon} onClick={() => navigate('/')} />
                        </Grid>
                    </Grid> */}

                    {/* <Grid container>
                        <Grid item sm={12} md={6}>
                            <MenuEntry text="search" icon={SearchIcon} onClick={() => navigate('search')} />
                        </Grid>
                    </Grid> */}
                    
                    <Grid container>
                        <Grid item sm={12} md={6}>
                            <MenuEntry text="library" icon={LibIcon} onClick={() => navigate('artist')} />
                        </Grid>
                    </Grid>
                </LibraryBox>

                <Grid container>
                    <Grid item sm={12} md={6}>
                        <MenuEntry text="theme" icon={isLight ? LightModeIcon : DarkModeIcon} onClick={() => dispatch(changeTheme())} />
                    </Grid>
                </Grid>

                {/* <Grid container>
                    <Grid item sm={12} md={6}>
                        <MenuEntry text="favorites" icon={FavoriteIcon} onClick={() => console.log('Show Favorites')} />
                    </Grid>
                </Grid> */}
            </Box>
        </MenuBox>
    );
}

export default SideMenu;
