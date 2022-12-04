import * as React from "react";
import "./App.scss";
import { useState, useEffect } from "react";
import { RouterContainer } from "./parts/Router/RouterContainer";
import { GOODS_URL } from "./common/constants/ApiUrls";

const BASKET_KEY = "BASKET_KEY";

function App() {
    const [searchableText, setSearchableText] = useState();
    const [goodsFromApi, setGoodsFromApi] = useState([]);

    useEffect(() => {
        fetch(GOODS_URL)
            .then((response) => {
                return response.json();
            })
            .then((goods) => {
                setGoodsFromApi(goods);
            })
            .catch((error) => {
                console.warn(error);
            });
    }, []);

    const getGoodsFromBasket = () => {
        const goods = localStorage.getItem(BASKET_KEY);
        return goods ? JSON.parse(goods) : [];
    };

    const saveGoodInBasket = (goodsId) => {
        const goods = getGoodsFromBasket();
        const index = goods.indexOf(goodsId);
        if (index < 0) {
            goods.push(goodsId);
        }

        localStorage.setItem(BASKET_KEY, JSON.stringify(goods));
    };

    const removeGoodInBasket = (goodsId) => {
        const goods = getGoodsFromBasket();
        const index = goods.indexOf(goodsId);
        if (index > -1) {
            goods.splice(index, 1);
        }
        localStorage.setItem(BASKET_KEY, JSON.stringify(goods));
    };

    const onSearch = (text) => {
        setSearchableText(text);
    };

    return (
        <div className='App'>
            <RouterContainer
                searchableText={searchableText}
                onSearch={onSearch}
                getGoodsFromBasket={getGoodsFromBasket}
                saveGoodInBasket={saveGoodInBasket}
                removeGoodInBasket={removeGoodInBasket}
                goodsFromApi={goodsFromApi}
            />
        </div>
    );
}

export default App;
