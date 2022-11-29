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
    TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";

import { SiteName } from "./components/SiteName/SiteName";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.scss";
import { ROUTES } from "../../common/constants/Routes";
import { Categories } from "./components/Categories/Categories";
import { CATEGORIES } from "../../common/constants/Dictionary";

export const Header = ({
    pages,
    categories,
    onClickMenuItem,
    onCloseMenu,
    anchorElNav,
    onClickMenuButton,
    onSearch,
    onClickCategoriesMenuButton,
    anchorCategoriesMenu,
    onCloseCategoriesMenuButton,
}) => {
    return (
        <AppBar className='Header'>
            <Container>
                <Toolbar className='Toolbar'>
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
                                    <div key={name}>
                                        {name === ROUTES.mainPage.name ? (
                                            <>
                                                <MenuItem
                                                    onClick={onClickMenuItem(
                                                        path
                                                    )}
                                                >
                                                    <Typography textAlign='center'>
                                                        {name}
                                                    </Typography>
                                                </MenuItem>
                                                <div key='Categories'>
                                                    {CATEGORIES}
                                                </div>
                                                <Categories
                                                    key={name}
                                                    categories={categories}
                                                    onClickMenuItem={
                                                        onClickMenuItem
                                                    }
                                                />
                                            </>
                                        ) : (
                                            <MenuItem
                                                key={name}
                                                onClick={onClickMenuItem(path)}
                                            >
                                                <Typography textAlign='center'>
                                                    {name}
                                                </Typography>
                                            </MenuItem>
                                        )}
                                    </div>
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
                            <div key={name}>
                                <Button
                                    key={name}
                                    onClick={onClickMenuItem(path)}
                                    sx={{
                                        my: 2,
                                        color: "white",
                                        display: "block",
                                    }}
                                >
                                    {name}
                                </Button>
                                {name === ROUTES.mainPage.name && (
                                    <>
                                        <Button
                                            key={name}
                                            onClick={
                                                onClickCategoriesMenuButton
                                            }
                                            sx={{
                                                my: 2,
                                                color: "white",
                                                display: "block",
                                            }}
                                        >
                                            {CATEGORIES}
                                        </Button>
                                        <Menu
                                            anchorEl={anchorCategoriesMenu}
                                            keepMounted
                                            open={Boolean(anchorCategoriesMenu)}
                                            onClose={
                                                onCloseCategoriesMenuButton
                                            }
                                        >
                                            <Categories
                                                key={name}
                                                categories={categories}
                                                onClickMenuItem={
                                                    onClickMenuItem
                                                }
                                            />
                                        </Menu>
                                    </>
                                )}
                            </div>
                        ))}
                    </Box>
                    <div className='Search'>
                        <div className='SearchIconWrapper'>
                            <SearchIcon />
                        </div>
                        <TextField
                            onChange={(event) => {
                                onSearch(event.target.value);
                            }}
                            className='TextField'
                            placeholder='Search…'
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
