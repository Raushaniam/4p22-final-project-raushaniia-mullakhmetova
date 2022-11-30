import * as React from "react";
import { GoodDetails } from "./GoodDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NO_DATA } from "../../common/constants/Dictionary";

export const GoodDetailsContainer = ({
    goodsFromApi,
    getGoodsFromBasket,
    saveGoodInBasket,
    removeGoodInBasket,
}) => {
    const { goodId } = useParams();
    const [good, setGoods] = useState(null);
    const [goodsIdsInBasket, setGoodsIdsInBasket] = useState({});

    React.useEffect(() => {
        const goodIndex = goodsFromApi.findIndex((good) => {
            return good.id === goodId;
        });
        if (goodIndex > -1) {
            setGoods(goodsFromApi[goodIndex]);
        }
    }, [goodId]);

    useEffect(() => {
        setGoodsIdsInBasket(() => {
            const goodsIds = {};
            getGoodsFromBasket().forEach((id) => {
                goodsIds[id] = id;
            });
            return goodsIds;
        });
    }, []);

    const onAddInBasket = (id) => {
        saveGoodInBasket(id);
        setGoodsIdsInBasket(() => {
            const goodsIds = {};
            getGoodsFromBasket().forEach((id) => {
                goodsIds[id] = id;
            });
            return goodsIds;
        });
    };
    const onRemoveInBasket = (id) => {
        removeGoodInBasket(id);
        setGoodsIdsInBasket(() => {
            const goodsIds = {};
            getGoodsFromBasket().forEach((id) => {
                goodsIds[id] = id;
            });
            return goodsIds;
        });
    };

    return good ? (
        <GoodDetails
            good={good}
            onAddInBasket={onAddInBasket}
            onRemoveInBasket={onRemoveInBasket}
            isInBasket={!!goodsIdsInBasket[good.id]}
        />
    ) : (
        <div>{NO_DATA}</div>
    );
};
