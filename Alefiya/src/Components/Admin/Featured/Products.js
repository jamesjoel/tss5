import React from "react";
import Product1 from "../../User/Shared/Product1";
import Product2 from "../../User/Shared/Product2";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Products = () => {
    return (
        <><Header />
            <Product1 />
            <Product2 />
            <Footer />
        </>
    )
}

export default Products;
