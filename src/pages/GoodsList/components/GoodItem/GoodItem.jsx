import * as React from "react";
import "./GoodItem.scss";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@mui/material";
import {
    ADD_GOOD_IN_BASKET,
    REMOVE_GOOD_IN_BASKET,
} from "../../../../common/constants/Dictionary";

export const GoodItem = ({
    isInBasket = false,
    onAddInBasket,
    onRemoveInBasket,
    good,
}) => {
    return (
        <Card
            key={good.id}
            className='GoodItem'
            sx={{ width: 300, height: 320 }}
        >
            <CardMedia
                className='ImgGoodItem'
                component='img'
                image={good.img}
                alt={good.name}
            />
            <CardContent className='ContentGoodItem'>
                <Typography
                    className='HeaderGoodItem'
                    gutterBottom
                    variant='h5'
                    component='div'
                >
                    {good.name}
                </Typography>
                <Typography
                    className='DescriptionGoodItem'
                    variant='body2'
                    color='text.secondary'
                >
                    {good.description}
                </Typography>
            </CardContent>
            <CardActions className='CardActionsGoodItem'>
                {!isInBasket ? (
                    <Button
                        className='ButtonGoodItem'
                        size='small'
                        onClick={onAddInBasket}
                    >
                        {ADD_GOOD_IN_BASKET}
                    </Button>
                ) : (
                    <Button
                        className='ButtonGoodItem'
                        size='small'
                        onClick={onRemoveInBasket}
                    >
                        {REMOVE_GOOD_IN_BASKET}
                    </Button>
                )}
                <span>&#128176; {good.price}</span>
            </CardActions>
        </Card>
    );
};
