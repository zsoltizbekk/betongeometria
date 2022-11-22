import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Gdpr = () => {

    const GdprBody = () => {
        return(
            <div className="gdpr_container">
                Adatkezelési nyilatkozat
                <br/><br/>
                Feltöltés alatt...
            </div>
        );
    }

    return(
        <div className="gdpr_page">
            <Header />
            <GdprBody />
            <Footer />
        </div>
    );    
}

export default Gdpr;