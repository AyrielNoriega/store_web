import React from "react";
import { Products } from "../components";
import initialState from "../initialState";

export const Home = () => {
    return (
        <>
            <title>
                Platzi Conf Merch
            </title>
            <Products products={initialState.products}/>
        </>
    )
}
