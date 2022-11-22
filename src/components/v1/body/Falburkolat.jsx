import React from "react";

import Header from "../Header";
import Footer from "../Footer";

const Falburkolat = () => {
    return (
        <div className="falburkolat_page">
            <Header />
            <div className="falburkolat_container">
                <div className="falburkolat_title_div">
                        <div className="falburkolat_title">Falburkolatok</div>
                        <div className="falburkolat_subtitle">a lehetőségeinknek csak a képzelet szabhat határt...</div>
                </div>
                <div className="falburkolat_first_div">
                    <div className="falburkolat_first_div_left"></div>
                    <div className="falburkolat_first_div_right">
                        <div className="falburkolat_first_div_text">
                        Technológiánk sokoldalúságának köszönhetően nem csak színekben, hanem formában is számtalan kombinációs lehetőség rejlik. Az egyszerű poligonoktól a bonyolultabb alakzatokig egyaránt megvalósítható. Termékeink felületét tekintve ütésálló, valamint csúszásgátlós kivitelű igénynek megfelelően, így felhasználási területe kimondottan széleskörű. A beton kiválóan párosítható más anyagokkal is, mint például fával, amely rendkívül jól illeszkedik a környezetéhez. Az általunk gyártott elemekből nem csak falfelületek, padlók állíthatók elő, hanem egyéb lakberendezési tárgyak, bútorok, amelyek otthonunk ékes darabjai lesznek.
                        </div>
                    </div>
                </div>
                <div className="falburkolat_second_div"></div>
                <div className="falburkolat_third_div">
                    <div className="falburkolat_third_div_left">
                        <div className="falburkolat_third_div_text">
                        Fejlett technológiákat alkalmazunk az iparművészeti elemek előállításához. Modern, tágas terekben kiváló plasztikát nyújt egy-egy falbetét. Nagyvonalú belső terek optikáját emeli ez a természetes anyag, melyet egyedi kedve szerint formálhat alkotója. A magas minőségű terek diverzitását fokozza egy-egy szokatlan, speciális anyag használata, ez minden belsőépítész alapvető trükkje.<br/><br/><br/>
                        Vegye fel velünk a kapcsolatot, mondja el sajátos igényeit, s mi testre szabjuk az áhított tárgyat!
                        </div>
                        <div className="beton_contactBtn_div"><button className="contactBtn" onClick={()=>{window.location = "mailto:hello@betongeometria.hu"}}>Kapcsolat</button></div>
                        
                    </div>
                    <div className="falburkolat_third_div_right"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Falburkolat;