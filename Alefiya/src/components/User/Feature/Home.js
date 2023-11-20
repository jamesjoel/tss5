import React from "react";
import Categories from "../Shared/Categories";
import FullHeader from "../Shared/FullHeader";
import Footer from "../Shared/Footer";
import Topbar from "../Shared/Topbar";

const Home = () => {
    return (
        <>
            <Topbar />
            <FullHeader />
            <Categories />
            <Footer />
        </>
    )
}
export default Home;