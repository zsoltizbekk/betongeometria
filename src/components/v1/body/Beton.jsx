import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const Beton = () => {
    return(
        <div className="beton_page">
            <Header />
            <div className="beton_container">
                <div className="beton_bemutatkozas">
                    <div className="beton_title">Betongeometria</div>
                    <div className="beton_subtitle">átírjuk a betonról alkotott elképzeléseit...</div>
                    <div className="beton_first_div">
                        <div className="beton_first_div_left"></div>
                        <div className="beton_first_div_right">
                            <div className="beton_first_line">RÓLUNK</div>
                            <div className="beton_first_div_text">
                                Víz, homok, cement: Ezek a nyersanyagok, amelyek inspirálnak és kihívások elé állítanak minket. Technológiánkat közel 20 éve tökéletesítjük, hogy minden képzeletét túlszárnyalva megvalósítsuk mindazt, ami a termékeinket harmonikussá, időtállóvá és egyedivé teszi. Üzletének, otthonának vagy külső környezetének megálmodott formát, színvilágot szeretné, hogy időjárástól és használattól függetlenül hosszúévekig gyönyörködhessen benne? Gyártástechnológiánknak köszönhetően, igény esetén a tervezési folyamattól a kivitelezésig egyedül csak a képzelet szabhat határt.
                                Hogyan valósítható meg mindez? A felhasznált betonunk, bár ugyanúgy tartalmaz homokot, cementet és vizet, mint bármelyik közönséges beton, ezek arányai, minősége és a hozzáadott adalékanyagok teszik alkalmassá arra, ami pár éve még megvalósíthatatlannak tűnt. Így a beton alapvető jellemzőit(időtálló, masszív) megtartva olyan új tulajdonságokkal tudjuk ellátni, mely a legmodernebb belsőépítészeti kihívásoknak is tökéletesen megfelel.
                            </div>
                            <div className="beton_contactBtn_div"><button className="contactBtn" onClick={()=>{window.location = "mailto:hello@betongeometria.hu"}}>Kapcsolat</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Beton;