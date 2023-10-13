import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const azepiteszImg = require("../../../assets/azepitesz.png");
const betongeometriaImg = require("../../../assets/betongeometria.png");

const enterior_logo = require("../../../assets/epitesztervezes_logo/enterior_logo.png");
const koordinalas_logo = require("../../../assets/epitesztervezes_logo/koordinalas_logo.png");
const muvezetes_logo = require("../../../assets/epitesztervezes_logo/muvezetes_logo.png");
const nagyberuhazas_logo = require("../../../assets/epitesztervezes_logo/nagyberuhazas_logo.png");
const otthon_logo = require("../../../assets/epitesztervezes_logo/otthon_logo.png");
const reszlettervezes_logo = require("../../../assets/epitesztervezes_logo/reszlettervezes_logo.png");
const tanacsadas_logo = require("../../../assets/epitesztervezes_logo/tanacsadas_logo.png");
const arculattervezes_logo = require("../../../assets/epitesztervezes_logo/splash.png");

const StartingPage = () => {
    return (
        <div className="starting_page_page">
            <Header />
            <div className="starting_page_container">
                <div className="starting_page_body">
                <div onClick={()=>{window.location.href="/epitesz"}} className="starting_page_epitesztervezes">
                    <div className="starting_page_epitesztervezes_content">Építésztervezés</div>
                    </div>
                    <div className="starting_page_betontermekek">
                        <div onClick={()=>{window.location.href="/beton"}} className="starting_page_betontermekek_content">Betontermékek</div>
                    </div>
                    <div className="starting_page_szolgaltatas">Információ
                        <div className="szolgaltatas_logo">
                            <img className="szolgaltatas_logo_imgs" src={enterior_logo} alt="" />
                            <img className="szolgaltatas_logo_imgs" src={koordinalas_logo} alt="" />
                            <img className="szolgaltatas_logo_imgs" src={muvezetes_logo} alt="" />
                            <img className="szolgaltatas_logo_imgs" src={nagyberuhazas_logo} alt="" />
                            <img className="szolgaltatas_logo_imgs" src={otthon_logo} alt="" />
                            <img className="szolgaltatas_logo_imgs" src={reszlettervezes_logo} alt="" />
                            <img className="szolgaltatas_logo_imgs" src={tanacsadas_logo} alt="" />
                            <img className="szolgaltatas_logo_imgs" src={arculattervezes_logo} alt="" />

                        </div>

                    </div>
                    <div className="starting_page_iras">Írás</div>
                </div>
                

            </div>
            <Footer />
        </div>
    );
}

export default StartingPage;