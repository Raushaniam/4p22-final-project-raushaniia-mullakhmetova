import "./FlexList.scss";
import * as React from "react";
import { NO_DATA } from "../../constants/Dictionary";

export const FlexList = ({ items }) => {
    return items && items.length ? (
        <div className='FlexList'>{items}</div>
    ) : (
        <div>{NO_DATA}</div>
    );
};
