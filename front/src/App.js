import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import ProductDetail from "./Pages/ProductDetail";
import ProductRegister from "./Pages/ProductRegister";
import User from "./Pages/User";
import Search from "./Pages/Search";
import Sign from "./Pages/Sign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "sign",
        element: <Sign />,
      },
      {
        path: "product/",
        children: [
          {
            path: ":id",
            element: <ProductDetail />,
          },
          {
            path: "register",
            element: <ProductRegister />,
          },
        ],
      },
      {
        path: "user/:id",
        element: <User />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/*
  홈             /
  로그인         /sign?form=in
  회원가입       /sign?form=up
  상세 페이지     /product/:id
  글 등록 페이지  /product/register
  마이페이지      /user/:id
  검색결과       /search?keyword=blabla
  채팅          /
*/
