import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../common/constants/Routes";
import { BasketContainer } from "../../pages/Basket/BasketContainer";
import { FeedbackContainer } from "../../pages/Feedback/FeedbackContainer";
import { GoodDetailsContainer } from "../../pages/GoodDetails/GoodDetailsContainer";
import { GoodsListContainer } from "../../pages/GoodsList/GoodsListContainer";
import { NotFound } from "../../pages/NotFound/NotFound";
import { FooterContainer } from "../Footer/FooterContainer";
import { HeaderContainer } from "../Header/HeaderContainer";

export const RouterContainer = ({ searchableText, onSearch }) => {
    return (
        <BrowserRouter>
            <HeaderContainer onSearch={onSearch} />
            <Routes>
                <Route
                    path='/'
                    element={
                        <GoodsListContainer searchableText={searchableText} />
                    }
                />
                <Route
                    path={ROUTES.mainPage.path}
                    element={
                        <GoodsListContainer searchableText={searchableText} />
                    }
                    errorElement={<NotFound />}
                >
                    <Route
                        path={":category"}
                        element={
                            <GoodsListContainer
                                searchableText={searchableText}
                            />
                        }
                        errorElement={<NotFound />}
                    />
                </Route>
                <Route
                    path={ROUTES.basket.path}
                    element={<BasketContainer />}
                />
                <Route
                    path={ROUTES.feedback.path}
                    element={<FeedbackContainer />}
                />
                <Route
                    path={ROUTES.goodDetails.path}
                    element={<GoodDetailsContainer />}
                />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <FooterContainer />
        </BrowserRouter>
    );
};
