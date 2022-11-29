import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GOODS_URL } from "../../common/constants/ApiUrls";
import { ROUTES } from "../../common/constants/Routes";
import { getGoodsBySearchableText } from "../../common/logic/getGoodsBySearchableText";
import { GoodsList } from "./GoodsList";

export const GoodsListContainer = ({ searchableText }) => {
    const [goods, setGoods] = useState([]);
    const [goodsFromApi, setGoodsFromApi] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        fetch(GOODS_URL)
            .then((response) => {
                return response.json();
            })
            .then((goods) => {
                setGoodsFromApi(goods);
                setGoods(goods);
            })
            .catch((error) => {
                console.warn(error);
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
