import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home} from "../containers";
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
