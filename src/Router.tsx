import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { MovieSearch } from "./pages/MovieSearch";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true
            },
            {
                path: "/movie",
                element: <MovieSearch />
            }
        ]
    }
])