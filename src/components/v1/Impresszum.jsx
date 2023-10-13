import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Impresszum = () => {

    const ImpresszumBody = ( )=> {
        return (
            <div className="impresszum_container">
                <div>Jelen weboldalon található termékek és szolgáltatások jogtulajdonosa az alábbi cég:</div>
                <div>
                    BETONGEOMETRIA Kft.<br/>
                    1096 Budapest,<br/>
                    Haller utca 8-18. A ép. 5. lph. 1/72.<br/><br/>
                </div>
                <div>
                Irodánk, ahol egy kávé vagy tea mellett beszélgethetünk:<br/>
                1077 Budapest,<br/>
                Izabella utca 33. 2/2.<br/><br/>

                Adószám: 26599878-2-43<br/>
                Közösségi adószám: HU26599878<br/>
                Cégjegyzékszám: 01-09-334323<br/><br/>

                E-mail: hello@betongeometria.hu<br/>
                Telefon: +36 20 / 420 63 81<br/>
                Számlaszám: Erste Bank 11600006-00000001-97167423<br/>
                SWIFT/BIC: GIBAHUHB<br/><br/>

                A tárhelyszolgáltató: rackhost.hu<br/>
                Rackhost Zrt.<br/>
                6722 Szeged, Tisza Lajos körút 41.<br/><br/>

                Adatkezelési és cookie tájékoztató:<br/><br/>

                Az üzemeltető a weboldal használata során a rendelkezésére bocsátott személyes adatokat bizalmasan kezeli, és nem adja ki kívülálló harmadik személy számára, kivéve abban az esetben amennyiben alvállalkozója számára az szükségszerá (Pl: szakági feldolgozás).<br/>
                A weboldal böngészése során technikai információk kerülnek rögzítésre statisztikai célokból. (IP cím, látogatás időtartama, stb). Ezen adatokat a jogtulajdonos kizárólag jogilag hitelesen indokolt, és alátámasztott esetben adja át a hatóságok részére. A szolgáltatás igénybevételéhez cookie-k engedélyezése szükséges. Amennyiben nem szeretné engedélyezi a cookie-k használatát, letilthatja a böngészője beállításaiban. Cookie-k tiltása esetén a szolgáltatás bizonyos elemei csak részben, vagy egyáltalán nem használhatóak. A cookie egy olyan fájl, amelyet a szerver küld a felhasználó böngészőjének, és amelyet a felhasználó számítógépe tárol. A cookie-ban személyes adat nem kerül tárolásra. Adatai törlését, módosítását bármikor kérheti írásban.<br/><br/>

                Az ügymenet (szerződés, ügyintézés) során esetlegesen személyes adatait tárolhatják az alábbi globális online szolgáltatók:<br/>
                - Google LLC (Mail, Drive, Maps)<br/>
                - Atlassian Pty Ltd. (Trello projektkísérő szoftver)<br/>
                - Billingo Technologies Zrt. (számlázó szoftver)<br/><br/>

                Köszönjük, hogy látogatásával megtisztelte oldalunkat!

                </div>
                
            </div>
        )
    }

    return(
        <div className="impresszum_page">
            <Header />
            <ImpresszumBody />
            <Footer />
        </div>
    );
}

export default Impresszum;