import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Hello from '../pages/Hello';
import Cuatro from '../pages/Four';
import { Red } from "../pages/Red";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/4",
        element: <Cuatro />,
    },
    {
        path: "/hello",
        element: <Hello />,
    },
    {
        path: "/hello/blue/red",
        element: <Red />,
    },
    
]);