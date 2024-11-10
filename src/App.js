import { createBrowserRouter } from "react-router-dom"
import {RouterProvider} from "react-router-dom";
import Layout from "./component/Layout/Layout"
import Home from "./component/Home/Home"
import Notfound from "./component/Notfound/Notfound";
import Categories from "./component/Categories/Categories";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";






const data = createHashRouter([
  {path:'' , element:<Layout/> ,children:[
    {index: true, element: <Home/>},
    {path: 'categories' ,element: <Categories/>},
    {path: 'login' ,element: <Login/>},
    {path: 'register' ,element: <Register/>},
    {path: '*' ,element: <Notfound/>},
  ]}
  
]);
export default function App(){

  return<RouterProvider router={data}></RouterProvider>
  
}
