import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PageContent from "./components/PageContent/PageContent";
import SideBar from "./components/SideBar/SideBar";
import GlobalStyle from "./GlobalStyle";
import Footer from "./components/Footer/Footer";
import SideBarContext from "./context/SideBarContext";
import { useState } from "react";

const App: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <SideBarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen}}>
          <Nav />
          { isSideBarOpen && <SideBar />}
        </SideBarContext.Provider>
        <PageContent>
          <Routes>
            <Route path="/" element={<div>Home page</div>} />
            <Route path="/cart" element={<div>shopping cart</div>} />
            <Route path="/wishlist" element={<div>wishlist</div>} />
            <Route path="/category" element={<div>category page</div>} />
            <Route path="/product" element={<div>product</div>} />
            <Route path="/*" element={<div>404 page</div>} />
          </Routes>
        </PageContent>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
