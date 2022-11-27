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
            sx={{ width: 300, height: 300 }}
        >
            <CardMedia component='img' image={good.img} alt={good.name} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {good.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {good.description}
                </Typography>
            </CardContent>
            <CardActions>
                {!isInBasket ? (
                    <Button size='small' onClick={onAddInBasket}>
                        {ADD_GOOD_IN_BASKET}
                    </Button>
                ) : (
                    <Button size='small' onClick={onRemoveInBasket}>
                        {REMOVE_GOOD_IN_BASKET}
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};
