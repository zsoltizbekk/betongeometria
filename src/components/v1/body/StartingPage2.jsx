import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const azepiteszImg = require("../../../assets/azepitesz.png");
const betongeometriaImg = require("../../../assets/betongeometria.png");

const StartingPage2 = () => {
    return (
        <div className="starting_page_2_page">
            <Header />
            <div className="starting_page_2_container">
                <div className="starting_page_2_body">
                <div onClick={()=>{window.location.href="/epitesz"}} className="starting_page_2_epitesztervezes">
                    <div className="starting_page_2_epitesztervezes_content">Éptésztervezés</div>
                    </div>
                    <div className="starting_page_2_betontermekek">
                        <div onClick={()=>{window.location.href="/beton"}} className="starting_page_2_betontermekek_content">Betontermékek</div>
                    </div>
                </div>
                

            </div>
            <Footer />
        </div>
    );
}

export default StartingPage2;