import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Catagory from "../Pages/Catagory";

export const router = createBrowserRouter([
  {
    path: "/",
   Component:HomeLayout,
   children:[
    {path:'',Component:Home},
    {path:'about',Component:About},
    {path:'career',Component:Career},
    {path:'/catagory/:id',
      Component:Catagory,
    loader:()=>fetch('/news.json').then(res=>res.json())
  },
    
   ],
  },
{
  path:'*/',element:<h1>error 404</h1>
}
]);
