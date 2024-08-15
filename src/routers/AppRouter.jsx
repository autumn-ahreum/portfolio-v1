import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom"

// components 
import Header from "../components/Header";
import Footer from "../components/Footer";

// pages
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import WorksPage from "../pages/WorksPage";
import SingleWorkPage from "../pages/SingleWorkPage";
import NotFoundPage from "../pages/NotFoundPage";


const AppRouter = () => {

  return ( 
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/works" element={<WorksPage />}/>
            <Route path="/works/:slug" element={<SingleWorkPage />} />            
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default AppRouter