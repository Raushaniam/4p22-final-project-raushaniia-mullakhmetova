import * as React from "react";
import { useState } from "react";
import { ROUTES } from "../../common/constants/Routes";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

export const HeaderContainer = ({ onSearch }) => {
    const [pages] = useState([ROUTES.mainPage, ROUTES.basket, ROUTES.feedback]);
    const [categories] = useState([
        ROUTES.categories.animalHunting,
        ROUTES.categories.cityLife,
        ROUTES.categories.cowboys,
        ROUTES.categories.headhunting,
        ROUTES.categories.nature,
    ]);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorCategoriesMenu, setAnchorCategoriesMenu] = useState(null);
    const navigate = useNavigate();

    const onClickMenuItem = (path) => () => {
        navigate(path);
    };
    const onCloseMenu = () => {
        setAnchorElNav(null);
    };
    const onClickMenuButton = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const onClickCategoriesMenuButton = (event) => {
        setAnchorCategoriesMenu(event.currentTarget);
    };
    const onCloseCategoriesMenuButton = () => {
        setAnchorCategoriesMenu(null);
    };

    return (
        <Header
            pages={pages}
            categories={categories}
            onClickMenuItem={onClickMenuItem}
            onCloseMenu={onCloseMenu}
            anchorElNav={anchorElNav}
            onClickMenuButton={onClickMenuButton}
            onSearch={onSearch}
            onClickCategoriesMenuButton={onClickCategoriesMenuButton}
            onCloseCategoriesMenuButton={onCloseCategoriesMenuButton}
            anchorCategoriesMenu={anchorCategoriesMenu}
        />
    );
};
