import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import './SignUp.css'
import App from "./App";


const Main =()=>{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}