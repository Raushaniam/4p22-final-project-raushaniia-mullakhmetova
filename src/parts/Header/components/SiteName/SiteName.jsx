import * as React from "react";
import "./SiteName.scss";
import { Typography } from "@mui/material";
import { APP_NAME } from "./../../../../common/constants/Dictionary";

export const SiteName = ({ sx }) => {
    return (
        <Typography className='SiteName' sx={sx}>
            {APP_NAME}
        </Typography>
    );
};
