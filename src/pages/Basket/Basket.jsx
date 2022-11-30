import * as React from "react";
import { BOUGHT } from "../../common/constants/Dictionary";
import { GoodsList } from "../GoodsList/GoodsList";
import { Button } from "@mui/material";
import "./Basket.scss";

export const Basket = ({ onRemoveInBasket, goods, goodsIdsInBasket }) => {
    return (
        <div className='Basket'>
            {goodsIdsInBasket && goods && (
                <GoodsList
                    onRemoveInBasket={onRemoveInBasket}
                    goods={goods}
                    goodsIdsInBasket={goodsIdsInBasket}
                />
            )}
            <Button
                disabled={goods.length === 0}
                className='ButtonGoodItem'
                size='small'
                onClick={() => {
                    console.log(goods);
                }}
                sx={{
                    display: "block",
                }}
            >
                {BOUGHT}
            </Button>
        </div>
    );
};
