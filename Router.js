import { createBrowserRouter,Route,createRoutesFromElements, RouterProvider } from "react-router-dom";

//layout

import Dashlayout from "./layout/Dashlayout";
import Rootlayout from "./layout/Rootlayout";

//screen
import Notificatio from "./screen/dashboard/Notificatio";
import Message from "./screen/dashboard/Message";
import Home  from "./screen/Home";
import Signup  from "./screen/Signup";

const router = createBrowserRouter (
    createRoutesFromElements(
        <Route path="/" element={<Rootlayout />}>
            <Route index element={<Signup/>} />
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashlayout/>}>
                <Route path='message' element={<Message/>}/>
                <Route path='notification' element={<Notificatio/>}/>
            </Route>
        </Route>
    )
)


function Router (){
    return(
        <RouterProvider router={router}/>
    )
}
export default Router;