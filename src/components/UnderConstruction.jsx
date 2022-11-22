import React from "react";
//import imgSrc from "../assets/underconstructions.jpg"
const imgSrc = require("../assets/underconstructions.jpg")

const UnderConstruction = () => {
    return (
        <div className="mainDiv">    
            <div className="container_under_construction">
                <img className="img_under_construction" src={imgSrc} alt=""/>
                <div className="centered">Hoppá! Itt nincs semmi látnivaló... 🙁 <br />
                Oldalunk hamarosan megújul, <br />
                kérjük térjen vissza később!
                </div>
            </div>
            <div className="footerDiv">
                    <div className="bottom-left">
                        BETONGEOMETRIA Kft. <br/>
                        Adószám: 26599878-2-43
                    </div>
                    <div className="bottom-center"><a href="mailto:hello@betongeometria.hu">hello@betongeometria.hu</a> © 2022</div>
                    <div className="bottom-right">
                        1096 Budapest, Haller utca 8-18. <br/>
                        A. ép. 5. lház. 1. emelet 72.
                    </div>
                    
                    

                </div>
        </div>
    );
}

export default UnderConstruction;