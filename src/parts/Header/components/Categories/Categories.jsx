import * as React from "react";
import { Typography, MenuItem } from "@mui/material";
import { ROUTES } from "../../../../common/constants/Routes";

export const Categories = ({ categories, onClickMenuItem }) => {
    return (
        <>
            
            {categories.map(({ name, path }) => {
                return (
                    <MenuItem
                        key={name}
                        onClick={() => {
                            onClickMenuItem(
                                ROUTES.mainPage.path + "/" + path
                            )();
                        }}
                    >
                        <Typography textAlign='center'>{name}</Typography>
                    </MenuItem>
                );
            })}
        </>
    );
};
