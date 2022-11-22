import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const Kulterielemek = () => {
    return (
        <div className="kulterielemek_page">
            <Header />
            <div className="kulterielemek_container">
                <div className="kulterielemek_title_div">
                        <div className="kulterielemek_title">Kültéri elemek</div>
                        <div className="kulterielemek_subtitle">időtállóság, egyediség nemcsak beltérben...</div>
                </div>
                <div className="kulterielemek_first_div">
                    <div className="kulterielemek_first_div_left"></div>
                    <div className="kulterielemek_first_div_right">
                        <div className="kulterielemek_first_div_text">
                        Rendkívül magas kopásállóságának köszönhetően tökéletesen alkalmas arra, hogy az időjárás és a rendszeres használat hatásainak kitéve is tartós díszeként szolgálhat kültéri elemként. A matt vagy fényes felületkezelés és a színezés ugyanúgy alkalmazható és kombinálható, mint beltérben. A termékeink anyagát tekintve fagyállók, felhasználás módja szerint vízálló lehet. A felhasználás egyszerű, beépítéséhez nem szükséges különleges eljárás. Az elemek egyedileg kézzel készülnek, ennek köszönhetően kis darab számú mennyiség is rendelhető.
                        </div>
                    </div>
                </div>
                <div className="kulterielemek_second_div"></div>
                <div className="kulterielemek_third_div">
                    <div className="kulterielemek_third_div_left">
                        <div className="kulterielemek_third_div_text">
                        Műszaki háttértámogatásért és további felmerülő kérdései kapcsán írjon nekünk bizalommal!
                        <div className="beton_contactBtn_div kulterielemek_third_div_btn"><button className="contactBtn" onClick={()=>{window.location = "mailto:hello@betongeometria.hu"}}>Kapcsolat</button></div>
                        </div>
                        
                        
                    </div>
                    <div className="kulterielemek_third_div_right"></div>
                </div>
                <div className="kulterielemek_fourth_div"></div>
            </div>
            <Footer />
        </div>
    );
}

export default Kulterielemek;