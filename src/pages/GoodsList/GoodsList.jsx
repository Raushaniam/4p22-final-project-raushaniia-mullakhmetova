import * as React from "react";
import "./GoodsList.scss";
import { GoodItem } from "../../common/components/GoodItem/GoodItem";
import { FlexList } from "../../common/components/FlexList/FlexList";

export const GoodsList = ({
    goods,
    onAddInBasket,
    onRemoveInBasket,
    goodsIdsInBasket,
    onClickItem,
}) => {
    return (
        <FlexList
            items={goods.map((good) => (
                <GoodItem
                    onClickItem={() => onClickItem(good.id)}
                    key={good.id}
                    isInBasket={!!goodsIdsInBasket[good.id]}
                    good={good}
                    onAddInBasket={onAddInBasket}
                    onRemoveInBasket={onRemoveInBasket}
                    // onClick={() => (GoodDetails())}
                />
            ))}
        />
    );
};
