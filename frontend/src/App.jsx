import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Container from "./components/Container";
import DashHome from "./pages/DashHome";

import MainNavbar from "./components/MainNavbar";
import Profile from "./pages/Profile";
import AllBlogs from "./pages/AllBlogs";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="dash-home" element={<DashHome />} />
            <Route path="all-blogs" element={<AllBlogs />} />
            <Route path="create-blog" element={<CreateBlog />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
