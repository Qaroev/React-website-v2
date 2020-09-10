import React from "react";
import HeroSection from "../../HeroSection";
import {homeObjOne, homeObjFour} from './Data'

function Products() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Products
