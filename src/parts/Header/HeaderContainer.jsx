import * as React from "react";
import { useState } from "react";
import { ROUTES } from "../../common/constants/Routes";
import { Header } from "./Header";
import { useLocation, useNavigate } from "react-router-dom";

export const HeaderContainer = ({ onSearch }) => {
    const [pages, setPages] = useState([
        { ...ROUTES.mainPage, isCurrentPage: false },
        { ...ROUTES.basket, isCurrentPage: false },
        { ...ROUTES.feedback, isCurrentPage: false },
    ]);
    const [categories, setCategories] = useState([
        { ...ROUTES.categories.animalHunting, isCurrentPage: false },
        { ...ROUTES.categories.cityLife, isCurrentPage: false },
        { ...ROUTES.categories.cowboys, isCurrentPage: false },
        { ...ROUTES.categories.headhunting, isCurrentPage: false },
        { ...ROUTES.categories.nature, isCurrentPage: false },
    ]);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorCategoriesMenu, setAnchorCategoriesMenu] = useState(null);
    const [isSelectedCategory, setIsSelectedCategory] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        setPages(
            pages.map((page) => {
                let isCurrentPage = location.pathname.indexOf(page.path) > -1;
                isCurrentPage =
                    isCurrentPage &&
                    location.pathname.length === page.path.length;
                if (isCurrentPage) {
                    setIsSelectedCategory(false);
                }
                return {
                    ...page,
                    isCurrentPage,
                };
            })
        );
        setCategories(
            categories.map((category) => {
                const isCurrentPage =
                    location.pathname.indexOf(category.path) > -1;
                if (isCurrentPage) {
                    setIsSelectedCategory(true);
                }

                return {
                    ...category,
                    isCurrentPage,
                };
            })
        );
    }, [location]);

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
            isSelectedCategory={isSelectedCategory}
        />
    );
};
