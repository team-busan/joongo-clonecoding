import "./index.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
    errorElement: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/*
  홈             /
  상세 페이지     /product/:id
  글 등록 페이지  /product/register
  마이페이지      /user/:id
  검색결과       /search?keyword=blabla
  채팅          /
*/
