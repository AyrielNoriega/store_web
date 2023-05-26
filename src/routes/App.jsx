import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Checkout, Home, Information, NotFount, Payment, Success } from "../containers";
import { Layout } from "../components";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
            {
                path: "/checkout/information",
                element: <Information />,
            },
            {
                path: "/checkout/payment",
                element: <Payment />,
            },
            {
                path: "/checkout/success",
                element: <Success />,
            },
            {
                path: "/*",
                element: <NotFount />,
            },
        ],
    },
]);

export const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <RouterProvider router={router} />
        </AppContext.Provider>
    )
}
