import * as React from "react";
import "./GoodDetails.scss";
import { GoodItem } from "../../common/components/GoodItem/GoodItem";

export const GoodDetails = ({
    good,
    onAddInBasket,
    onRemoveInBasket,
    isInBasket,
}) => {
    return (
        <div className='GoodDetails'>
            <GoodItem
                good={good}
                onAddInBasket={onAddInBasket}
                onRemoveInBasket={onRemoveInBasket}
                isInBasket={isInBasket}
            />
        </div>
    );
};
