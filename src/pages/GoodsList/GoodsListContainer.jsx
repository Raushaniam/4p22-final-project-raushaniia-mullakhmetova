import * as React from "react";
import { useState, useEffect } from "react";
import { GOODS_URL } from "../../common/constants/ApiUrls";
import { GoodsList } from "./GoodsList";

export const GoodsListContainer = () => {
    const [goods, setGoods] = useState([]);
    useEffect(() => {
        fetch(GOODS_URL)
            .then((response) => {
                return response.json();
            })
            .then((goods) => {
                setGoods(goods);
            })
            .catch((error) => {
                console.warn(error);
            });
    }, []);
    const onAddInBasket = () => {};
    const onRemoveInBasket = () => {};
    return (
        <GoodsList
            goods={goods}
            onAddInBasket={onAddInBasket}
            onRemoveInBasket={onRemoveInBasket}
        />
    );
};
