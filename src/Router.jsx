import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./Componentes/LoginForm/LoginForm";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <LoginForm/>
            
        }
    ]
);

export default router;