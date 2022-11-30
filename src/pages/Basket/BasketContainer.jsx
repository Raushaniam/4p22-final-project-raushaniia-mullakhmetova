import * as React from "react";
import { useState, useEffect } from "react";
import { Basket } from "./Basket";

export const BasketContainer = ({
    getGoodsFromBasket,
    removeGoodInBasket,
    goodsFromApi,
}) => {
    const [goods, setGoods] = useState([]);
    const [goodsIdsInBasket, setGoodsIdsInBasket] = useState(null);

    useEffect(() => {
        setGoodsIdsInBasket(() => {
            const goodsIds = {};
            getGoodsFromBasket().forEach((id) => {
                goodsIds[id] = id;
            });
            setGoods(
                goodsFromApi.filter((good) => {
                    return !!goodsIds[good.id];
                })
            );
            return goodsIds;
        });
    }, [goodsFromApi]);

    const onRemoveInBasket = (id) => {
        removeGoodInBasket(id);
        setGoodsIdsInBasket(() => {
            const goodsIds = {};
            getGoodsFromBasket().forEach((id) => {
                goodsIds[id] = id;
            });
            setGoods(
                goodsFromApi.filter((good) => {
                    return !!goodsIds[good.id];
                })
            );
            return goodsIds;
        });
    };
    return (
        <Basket
            onRemoveInBasket={onRemoveInBasket}
            goodsIdsInBasket={goodsIdsInBasket}
            goods={goods}
        />
    );
};
