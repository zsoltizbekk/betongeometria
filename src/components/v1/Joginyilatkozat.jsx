import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const JogiNyilatkozat = () => {
    const JogiNyilatkozatBody = () => {
        return(
        <div className="joginyilatkozat_container">
            Jogi nyilatkozat
            <br/>
            <br/>
            Általános szabály
            <br/>
            <br/>
            A BETONGEOMETRIA Kft. honlapjára történő belépéssel és a honlap használatával tevőlegesen hozzájárul az „Adatkezelési nyilatkozat”-ban olvasható általános adatkezeléshez, valamint tudomásul veszi és betartja az alábbiakban olvasható jogi és adatkezelési nyilatkozatokat. A terület specifikus adatkezelésekhez az adott adatkezelés előtt egy checkbox (jelölő négyzet) kipipálásával járul hozzá, melynek szabályozását jelen „Adatkezelési nyilatkozat” tartalmazza.
            <br/>
            <br/>

            Szerzői jog
            <br/>
            <br/>
            A BETONGEOMETRIA Kft. honlapja szerzői jogvédelem alatt áll. A BETONGEOMETRIA Kft. tulajdonosai vagy a feljogosított használói a honlapon található bármely szöveggel, képpel, hanggal, saját fejlesztésű szoftverrel és más anyaggal kapcsolatosan szerzőként rendelkezhetnek, azokat kezelhetik, sokszorosíthatják, módosíthatják. Korlátozásokkal ezt harmadik személynek is engedélyezhetik. Ön jogosult a BETONGEOMETRIA Kft. honlapját olvasni, arról nyomtatással, lemezre történő letöltéssel és más személy részére történő továbbítással kivonatos másolatot készíteni, azonban minden esetben kizárólag személyes, tájékozódó jelleggel, nem kereskedelmi céllal. Tilos a honlap bármely részének másolatát értékesíteni vagy továbbítani kereskedelmi haszonért! Tilos továbbá a honlap bármely részének megváltoztatása vagy bármely más műbe, publikációba, honlapba építése, akár elektronikus, akár hagyományos formában.
            <br/>
            A weblapon publikált valamennyi termék a BETONGEOMETRIA Kft. terméke, amelyek szerzői jogvédelem alatt állnak. Engedély nélküli felhasználásuk, valamint másolásuk jogkövetkezményekkel jár.
            <br/>
            <br/>
            A honlap tartalma
            <br/>
            <br/>
            A honlapon található információk jóhiszeműen kerültek felhelyezésre, azonban azok kizárólag tájékoztató célt szolgálnak. A tájékozódáson kívüli egyéb célok érdekében nem lehet ezen információkra építeni, és az információk pontosságára, teljességére a BETONGEOMETRIA Kft. nem vállal garanciát. Sem a BETONGEOMETRIA Kft., sem alkalmazottai, sem megbízottai nem vállalnak felelősséget azokért az esetleges veszteségekért, károkért, költségekért (beleértve, korlátozás nélkül, bármilyen elmaradt profitot, közvetett, járulékos vagy következményi veszteséget is), amelyek a BETONGEOMETRIA Kft. honlapjára történő belépésből vagy azok használatából erednek. A BETONGEOMETRIA Kft. a honlap tartalmának változtatási jogát fenntartja, hogy bármikor, amikor szükségesnek tartja, bármilyen változtatást, javítást végezzen a honlapján előzetes figyelmeztetés nélkül.
            <br/>
            <br/>
            Kapcsolódó honlapok
            <br/>
            <br/>

            A BETONGEOMETRIA Kft. honlapja tartalmazhat olyan kapcsolódási pontokat (ún. hiperlinkek vagy hiperhivatkozások), amelyek más internetes honlapokhoz nyújtanak automatikus kapcsolódási lehetőséget. Ezek a kapcsolódó honlapok harmadik személyek tulajdonában, kezelésében állnak. A kapcsolódó honlapokhoz a BETONGEOMETRIA Kft. csupán hozzáférést közvetít, azonban sem a BETONGEOMETRIA Kft. sem az alkalmazottai, sem megbízottai nem vállalnak semmilyen természetű kötelezettséget, felelősséget ezekért a honlapokért vagy az azokon elhelyezett információkért abban az esetben sem, ha azokat a BETONGEOMETRIA Kft. vagy valamely alkalmazottja, megbízottja átnézte vagy jóváhagyta.
        </div>
        );
    }
    
    return(
        <div className="joginyilatkozat_page">
            <Header />
            <JogiNyilatkozatBody />
            <Footer />
        </div>
    );
}

export default JogiNyilatkozat;