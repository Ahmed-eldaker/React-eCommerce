import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Main/Main";

import { Provider } from "react-redux";
import store from "./Components/store";
import HomeDisplay from "./Components/Home/HomeDisplay";

import ViewProduct from "./Components/ViewProduct/ViewProduct";

import DisplayAllProducts from "./Components/AllProducts/DisplayAllProducts";

import Error from "./Components/Error/Error";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Main />,
      children: [
        { path: "", element: <HomeDisplay /> },
        { path: "/home", element: <HomeDisplay /> },

        { path: "/viewproduct", element: <ViewProduct /> },
        { path: "/allproducts", element: <DisplayAllProducts /> },
        {
          path: "viewproduct",
          element: <ViewProduct />,
          children: [
            { children: [{ path: ":id" }] }, // 3lshan ab3t parameter fe l url
          ],
        },

        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  );
};

export default App;
