import * as React from "react";
import "./GoodsList.scss";
import { GoodItem } from "./components/GoodItem/GoodItem";
import { FlexList } from "../../common/components/FlexList/FlexList";

export const GoodsList = ({ goods, onAddInBasket, onRemoveInBasket }) => {
    return (
        <FlexList
            items={goods.map((good) => (
                <GoodItem
                    key={good.id}
                    good={good}
                    onAddInBasket={onAddInBasket}
                    onRemoveInBasket={onRemoveInBasket}
                />
            ))}
        />
    );
};
