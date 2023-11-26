import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import IndexPage from "./pages/indexPage";
import { UserContextProvider } from "./UserContext";
import CreatePostPage from "./pages/createPostPage";
import SinglePostPage from "./pages/singlePostPage";
import EditPost from "./pages/editPostPage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/create-post"} element={<CreatePostPage />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
