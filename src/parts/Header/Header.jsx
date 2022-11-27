import * as React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    MenuItem,
    Menu,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import "./Header.scss";
import { SiteName } from "./components/SiteName/SiteName";

export const Header = ({
    pages,
    onClickMenuItem,
    onCloseMenu,
    anchorElNav,
    onClickMenuButton,
}) => {
    return (
        <AppBar className='Header' position='sticky'>
            <Container>
                <Toolbar>
                    <SiteName
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton size='large' onClick={onClickMenuButton}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            keepMounted
                            open={Boolean(anchorElNav)}
                            onClose={onCloseMenu}
                        >
                            {pages.map(({ name, path }) => {
                                return (
                                    <MenuItem
                                        key={name}
                                        onClick={onClickMenuItem(path)}
                                    >
                                        <Typography textAlign='center'>
                                            {name}
                                        </Typography>
                                    </MenuItem>
                                );
                            })}
                        </Menu>
                    </Box>

                    <SiteName
                        sx={{
                            display: { xs: "flex", md: "none" },
                        }}
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map(({ name, path }) => (
                            <Button
                                key={name}
                                onClick={onClickMenuItem(path)}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
