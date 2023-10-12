import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";

                                
import epitesz_szolgaltatas_1 from '../../../assets/epitesztervezes_logo/otthon_logo.png';
import epitesz_szolgaltatas_2 from '../../../assets/epitesztervezes_logo/muvezetes_logo.png';
import epitesz_szolgaltatas_3 from '../../../assets/epitesztervezes_logo/nagyberuhazas_logo.png';
import epitesz_szolgaltatas_4 from '../../../assets/epitesztervezes_logo/koordinalas_logo.png';
import epitesz_szolgaltatas_5 from '../../../assets/epitesztervezes_logo/enterior_logo.png';
import epitesz_szolgaltatas_6 from '../../../assets/epitesztervezes_logo/tanacsadas_logo.png';
import epitesz_szolgaltatas_7 from '../../../assets/epitesztervezes_logo/reszlettervezes_logo.png';
import epitesz_szolgaltatas_8 from '../../../assets/epitesztervezes_logo/splash.png';

import csapat_1 from '../../../assets/epitesztervezes_csapat/1.jpg';
import csapat_2 from '../../../assets/epitesztervezes_csapat/2.jpg';
import csapat_3 from '../../../assets/epitesztervezes_csapat/3.jpg';

import budakalasz from "../../../assets/referencia/budakalasz-muvezetes.JPG";
import gorog from "../../../assets/referencia/budakeszi-gorog.JPG";
import makkosi from "../../../assets/referencia/budakeszi-makkosi150.jpg";
import rozsonyo12 from "../../../assets/referencia/budakeszi-rozsnyo12.JPG";
import rozsonyo17 from "../../../assets/referencia/budakeszi-rozsnyo17.JPG";
import mpetrol1 from "../../../assets/referencia/mpetrol-monor-mk1 - Kép1.jpg";
import mpetrol2 from "../../../assets/referencia/mpetrol-monor-mk1 - Kép2.jpg";
import mpetrol3 from "../../../assets/referencia/mpetrol.JPG";
import breuer from "../../../assets/referencia/pecs-breuer-palyazat.jpg";
import szekesfehervar from "../../../assets/referencia/szekesfehervar-krivanyi.JPG";
import tiszafured1 from "../../../assets/referencia/tiszafured-sip-daruzas1.jpg";
import tiszafured2 from "../../../assets/referencia/tiszafured-sip-kontener.jpg";
import tiszafured3 from "../../../assets/referencia/tiszafured-sip-nyaralo.jpg";


import RouteSwitch from "../RouteSwitch";

import Header from "../Header";
import Footer from "../Footer";
import CarouselDiv from "../CarouselDiv";
import MapDiv from "../MapDiv";

const Epitesz = () => { 
    return(
        <div className="epitesz_page">
            <Header />
            <div className="epitesz_container">
                <div className="header-Bg-Div"></div>
                <div className="epitesz_text_div_1">Az építészettel a jövőbe fektet!</div>
                <div className="epitesz_text_div_2">
                    <div className="epitesz_szolgaltatas_text_1">
                        Számunkra nincs kicsi vagy nagy feladat, ami Önnek fontos az nekünk is. Legyen az egy kisebb lakás felújítása, új családi otthon, vagy akár nagyobb léptékű beruházások, társasháztól az ipari- és középületekig.
                        A tervezési folyamat részünkről mindig párbeszéd alapú, minden esetben a tervet addig csiszoljuk, amíg az adott jogszabályi kereteken belül a tisztelt Megbízónak megfelelő épület áll össze. Nincs megkötöttség a technológiák kapcsán sem, hagyományos építéstechnikától a legújabb anyagok alkalmazásáig minden szóba kerülhet. A mi feladatunk, hogy az előnyök és hátrányok ismertetését követően a megfelelő építtetői döntést segítsük szakmai tudásunkkal. Cél, hogy a tervezés során minden lépés miértjére választ kapjon az építtető, és megértse a különböző folyamatokat, mit miért tervezünk úgy, ahogy. Nincs rossz kérdés, csak az, amit nem tesznek fel.
                    </div>
                </div>
                <CarouselDiv />
                <div className="epitesz_text_div_3">
                    <div className="epitesz_szolgaltatas_text_1">
                        Szolgáltatásunk a műszaki tanácsadástól az épületek dokumentálásán át a teljes komplex tervezésig terjed. Szakmai kapcsolataink révén minden szakági munkarészhez tudunk kapcsolatot biztosítani.
                        Bár székhelyünk és irodánk is a fővárosban található, hazánk egész területén tevékenykedünk. Referenciáink között a vízparti nyaralóktól, családi otthonoktól számos üzemanyagtöltő állomáson át, közintézményekig – úgy, mint piac vagy bölcsőde - talál megvalósult projekteket.    
                    </div>
                </div>
                <div className="epitesz_szolgaltatas">
                    <div className="epitesz_text_div_1">Szolgáltatásaink</div>
                    <div className="epitesz_szolgaltatas_container">
                        <div className="epitesz_szolgaltatas_div epitesz_szolgaltatas_group_1">
                            <div className="epitesz_szolgaltatas_1 epitesz_szolgaltatas_all">
                                <div className="epitesz_szolgaltatas_picture_div"><img className="epitesz_szolgaltatas_picture" src={epitesz_szolgaltatas_1} alt="Családi házak, otthonok tervezése" /></div>
                                <div className="epitesz_szolgaltatas_text">Családi házak, otthonok tervezése</div>
                            </div>
                            <div className="epitesz_szolgaltatas_2 epitesz_szolgaltatas_all">
                                <div className="epitesz_szolgaltatas_picture_div"><img className="epitesz_szolgaltatas_picture" src={epitesz_szolgaltatas_2} alt="Családi házak, otthonok tervezése" /></div>
                                <div className="epitesz_szolgaltatas_text">Tervezői művezetés, építésszervezés</div>
                            </div>
                        </div>
                        <div className="epitesz_szolgaltatas_div  epitesz_szolgaltatas_group_2">
                            <div className="epitesz_szolgaltatas_3 epitesz_szolgaltatas_all">
                                <div className="epitesz_szolgaltatas_picture_div"><img className="epitesz_szolgaltatas_picture" src={epitesz_szolgaltatas_3} alt="Nagyobb léptékű beruházások, középületek tervezése" /></div>
                                <div className="epitesz_szolgaltatas_text">Nagyobb léptékű beruházások, középületek tervezése</div>
                            </div>
                            <div className="epitesz_szolgaltatas_4 epitesz_szolgaltatas_all">
                                <div className="epitesz_szolgaltatas_picture_div"><img className="epitesz_szolgaltatas_picture" src={epitesz_szolgaltatas_4} alt="Szakági koordináció" /></div>
                                <div className="epitesz_szolgaltatas_text">Szakági koordináció</div>
                            </div>        
                        </div>
                        <div className="epitesz_szolgaltatas_div  epitesz_szolgaltatas_group_3">
                            <div className="epitesz_szolgaltatas_5 epitesz_szolgaltatas_all">
                                <div className="epitesz_szolgaltatas_picture_div"><img className="epitesz_szolgaltatas_picture" src={epitesz_szolgaltatas_5} alt="Enteriőr dizájn és bútortervezés" /></div>
                                <div className="epitesz_szolgaltatas_text">Enteriőr dizájn és bútortervezés</div>
                            </div>
                            <div className="epitesz_szolgaltatas_6 epitesz_szolgaltatas_all">
                                <div className="epitesz_szolgaltatas_picture_div"><img className="epitesz_szolgaltatas_picture" src={epitesz_szolgaltatas_6} alt="Műszaki tanácsadás vásárlás előtt vagy után" /></div>
                                <div className="epitesz_szolgaltatas_text">Műszaki tanácsadás vásárlás előtt vagy után</div>
                            </div>        
                        </div>

                        <div className="epitesz_szolgaltatas_div  epitesz_szolgaltatas_group_4">
                            <div className="epitesz_szolgaltatas_7 epitesz_szolgaltatas_all">
                                <div className="epitesz_szolgaltatas_picture_div"><img className="epitesz_szolgaltatas_picture" src={epitesz_szolgaltatas_7} alt="Gyártmány- és részlettervezés" /></div>
                                <div className="epitesz_szolgaltatas_text">Gyártmány- és részlettervezés</div>
                            </div>
                            <div className="epitesz_szolgaltatas_8 epitesz_szolgaltatas_all">
                                <div className="epitesz_szolgaltatas_picture_div"><img className="epitesz_szolgaltatas_picture" src={epitesz_szolgaltatas_8} alt="Arculattervezés és grafika" /></div>
                                <div className="epitesz_szolgaltatas_text">Arculattervezés és grafika</div>
                            </div>        
                        </div>
                    </div>
                </div>
                <div className="csapatunk">
                    <div className="epitesz_text_div_1">Csapatunk</div>
                    <div className="csapat_container">
                        <div className="csapat_div">
                            <div className="csapat_picture_div"><img className="csapat_picture" src={csapat_1} alt="" /></div>
                            <div className="csapat_leiras">
                                <div className="csapat_nev">Angelidisz Aphrodite</div>
                                <div className="csapat_beosztas">építész gyarkornok</div>
                            </div>
                        </div>
                        <div className="csapat_div">
                            <div className="csapat_picture_div"><img className="csapat_picture" src={csapat_2} alt="" /></div>
                            <div className="csapat_leiras">
                                <div className="csapat_nev">Szilágyi Ádám</div>
                                <div className="csapat_beosztas">ügyvezető, okleveles építészmérnök</div>
                            </div>
                        </div>
                        <div className="csapat_div">
                            <div className="csapat_picture_div"><img className="csapat_picture" src={csapat_3} alt="" /></div>
                            <div className="csapat_leiras">
                                <div className="csapat_nev">Sziráki Gergő</div>
                                <div className="csapat_beosztas">okleveles építész</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="referenciak">
                    <div className="epitesz_text_div_1">Referenciák</div>
                    <div className="referencia_text">Feltöltés alatt...</div>

                    <div className="referenciak_div">
                            <div className="referece_carusel">
                                <Carousel controls={false} indicators={false} indicatorLabels={true}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={budakalasz}
                                        alt="Budakalasz"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">Budakalász_Művezetés_2023</h5>
                                        </Carousel.Caption>
                                        
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="referece_carusel">
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={rozsonyo12}
                                        alt="Budakeszi"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">Budakeszi Rozsonyo u. 12_Művezetés_2023</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="referece_carusel">
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={makkosi}
                                        alt="Budakeszi"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">Budakeszi Makkosi u._Művezetés_2023</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="referece_carusel">
                                <Carousel controls={false} indicators={true} fade={true} touch={true} interval={3000}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={mpetrol1}
                                        alt="Budakeszi"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">M.Petrol</h5>
                                            <h5 className="reference_text">Építésztervezés</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={mpetrol2}
                                        alt="Budakeszi"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">M.Petrol</h5>
                                            <h5 className="reference_text">Építésztervezés</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={mpetrol3}
                                        alt="Budakeszi"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">M.Petrol</h5>
                                            <h5 className="reference_text">Építésztervezés</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="referece_carusel">
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={gorog}
                                        alt="Budakeszi"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">Budakeszi Görög u.</h5>
                                            <h5 className="reference_text">Művezetés</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="referece_carusel">
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={rozsonyo17}
                                        alt="Budakeszi"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">Budakeszi Rozsonyo u. 17.</h5>
                                            <h5 className="reference_text">Művezetés</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="referece_carusel">
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={breuer}
                                        alt="Breuer"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">Breuer Pécs.</h5>
                                            <h5 className="reference_text">Pályázati munka</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            
                            <div className="referece_carusel">
                                <Carousel controls={false} indicators={true} fade={true} touch={true} interval={3000}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={tiszafured1}
                                        alt="Tiszafüred"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">Tiszafüred</h5>
                                            <h5 className="reference_text">Művezetés</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={tiszafured2}
                                        alt="Tiszafüred"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">Tiszafüred</h5>
                                            <h5 className="reference_text">Művezetés</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={tiszafured3}
                                        alt="Tiszafüred"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">Tiszafüred</h5>
                                            <h5 className="reference_text">Művezetés</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="referece_carusel">
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"   
                                        src={szekesfehervar}
                                        alt="Székesfehérvár"
                                        />
                                        <Carousel.Caption>
                                            <h5 className="reference_text">Szekesfehérvár Kriványi u.</h5>
                                            <h5 className="reference_text">Művezetés</h5>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        </div>
                </div>
                


                <div className="partnereink">
                <div className="epitesz_text_div_1">Partnereink
                   <div className="partnereink_text">Mobil Petrol cégcsoport • 
                    Fodor Tamás @Forengs statika • 
                    Varsányi Brigitta @Olinda Home • 
                    Grabsits Viktor, statika @Grabau Kft. • 
                    Mártonffy István, építészmérnök • 
                    Varga Márton, épületgépészet @Renergon Kft. • 
                    Incze Sándor, épületvillamosság • 
                    Fekete Gábor @BLCD mérnökiroda • 
                    SIP Europe s.r.o. • 
                    Scaling Hub Zrt. • 
                    GreenQuest Kft. • 
                    La Terrazza • 
                    Skytech-Invest Kft. • 
                    Papp László faanyagvédelem @Faprotekt Bt. • 
                    Kvarc Ingatlankezelő Kft. • 
                    Varibon Kft.</div> 
                </div>
                </div>

                
            <Footer />
        </div>
    );


}

export default Epitesz;