import * as React from "react";
import { useState } from "react";
import { ROUTES } from "../../common/constants/Routes";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

export const HeaderContainer = () => {
    const [pages] = useState([ROUTES.mainPage, ROUTES.basket, ROUTES.feedback]);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
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

    return (
        <Header
            pages={pages}
            onClickMenuItem={onClickMenuItem}
            onCloseMenu={onCloseMenu}
            anchorElNav={anchorElNav}
            onClickMenuButton={onClickMenuButton}
        />
    );
};
