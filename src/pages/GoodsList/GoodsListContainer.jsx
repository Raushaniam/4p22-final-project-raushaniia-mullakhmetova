import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ROUTES } from "../../common/constants/Routes";
import { getGoodsBySearchableText } from "../../common/logic/getGoodsBySearchableText";
import { GoodsList } from "./GoodsList";

export const GoodsListContainer = ({
    searchableText,
    getGoodsFromBasket,
    saveGoodInBasket,
    removeGoodInBasket,
    goodsFromApi,
}) => {
    const [goods, setGoods] = useState([]);
    const [goodsIdsInBasket, setGoodsIdsInBasket] = useState({});

    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setGoods(goodsFromApi);
    }, [goodsFromApi]);

    useEffect(() => {
        setGoodsIdsInBasket(() => {
            const goodsIds = {};
            getGoodsFromBasket().forEach((id) => {
                goodsIds[id] = id;
            });
            return goodsIds;
        });
    }, []);

    useEffect(() => {
        if (searchableText) {
            setGoods(() => {
                const result = getGoodsBySearchableText(
                    goodsFromApi,
                    searchableText
                );
                return result;
            });
        }
    }, [searchableText, goodsFromApi]);

    useEffect(() => {
        if (!category) {
            setGoods(goodsFromApi);
            return;
        }
        setGoods(() => {
            return goodsFromApi.filter((good) => {
                const categoryName = ROUTES.categories[category].name;
                return good.group === categoryName;
            });
        });
    }, [category]);

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
    const onClickItem = (goodId) => {
        navigate(`${ROUTES.goodDetails.path}/${goodId}`);
    };
    return (
        <GoodsList
            goodsIdsInBasket={goodsIdsInBasket}
            goods={goods}
            onAddInBasket={onAddInBasket}
            onRemoveInBasket={onRemoveInBasket}
            saveGoodInBasket={saveGoodInBasket}
            onClickItem={onClickItem}
        />
    );
};
