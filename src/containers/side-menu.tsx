import { Box, Grid, IconButton, styled } from "@mui/material";
import MenuEntry from "../controls/menu-entry";
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"
import LibIcon from "@mui/icons-material/LibraryMusic"
import FavoriteIcon from "@mui/icons-material/Favorite"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"

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
    return (
        <MenuBox>
            <Box>
                <IconBox>
                    Icon
                </IconBox>

                <LibraryBox>
                    <Grid container>
                        <Grid item sm={12} md={6}>
                            <MenuEntry text="home" icon={HomeIcon} onClick={() => console.log('Show Home')} />
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item sm={12} md={6}>
                            <MenuEntry text="search" icon={SearchIcon} onClick={() => console.log('Searching')} />
                        </Grid>
                    </Grid>
                    
                    <Grid container>
                        <Grid item sm={12} md={6}>
                            <MenuEntry text="library" icon={LibIcon} onClick={() => console.log('Show Library')} />
                        </Grid>
                    </Grid>
                </LibraryBox>

                <Grid container>
                    <Grid item sm={12} md={6}>
                        <MenuEntry text="favorites" icon={FavoriteIcon} onClick={() => console.log('Show Favorites')} />
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <IconButton onClick={() => console.log('changing theme')}>
                    <DarkModeIcon />
                </IconButton>
            </Box>
        </MenuBox>
    );
}

export default SideMenu;
