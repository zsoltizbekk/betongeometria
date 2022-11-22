import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const Butor = () => {
    return (
        <div className="butor_page">
            <Header />
            <div className="butor_container">
                <div className="butor_title_div">
                        <div className="butor_title">Bútorok</div>
                        <div className="butor_subtitle">az üzlettől az otthonáig...</div>
                </div>
                <div className="butor_first_div">
                    <div className="butor_first_div_left">
                        <div className="butor_first_line">KORTÁRS • MODERN • MINIMÁL</div>
                        <div className="butor_first_div_text">
                        Termékeink kiválóan és harmonikusan illeszkednek az otthonában. Az egyedi megmunkálásnak köszönhetően méltó dísze lesz lakásának. Cége arculatának megfelelően számtalan lehetőség áll rendelkezésre, hogy a kialakítandó felületeken megjelenjenek cégének arculati elemei. Egyediségével és különlegességével igazi gyöngyeszemként jelenhet meg partnerei és vásárlói előtt. Megrendelőink szívesen kombinálják a belsőépítészeti elemek színeit a beton színezett változataival. A színezés pigmentekkel történik, ezáltal megtartja az eredeti anyag nagyfokú kopásállóságát. A felületkezelésnél lehetőség van matt és fényes kivitelre is, illetve a két felülettípus, valamint a színek szabadon kombinálhatók egymással. Nincs más dolga, mint hátra dőljön a  székében, <a href="mailto:hello@betongeometria.hu">megossza velünk elképzeléseit</a>, munkatársaink pedig megtervezik Önnek a  látványtervet, amit annak megfelelően megvalósítunk.
                        </div>
                    </div>
                    <div className="butor_first_div_right"></div>
                </div>
                <div className="butor_second_div"></div>
                <div className="butor_third_div">
                    <div className="butor_third_div_left"></div>
                    <div className="butor_third_div_right">
                        <div className="butor_third_div_text">
                        A korszerű technológiáknak köszönhetően egyedi grafikai részleteket is megjeleníthetünk egy-egy személyes tárgyon. Minden esetben ezek a részletek nem felületi megoldások, hanem az egyes elemek elválaszthatatlan anyagi részei, kitapintható motívumok.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );

}

export default Butor;