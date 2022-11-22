import React from "react";
import {useMemo} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";


import RouteSwitch from "../RouteSwitch";

import Header from "../Header";
import Footer from "../Footer";
import CarouselDiv from "../CarouselDiv";
import MapDiv from "../MapDiv";

//AIzaSyB5SaUvuKnqXhmQ7bpftMMjTlA29pCn1YM

const Epitesz = () => { 
    return(
        <div className="epitesz_page">
            <Header />
            <div className="epitesz_container">
                <div className="header-Bg-Div"></div>
                <CarouselDiv />
                <div className="epitesz_text_div_1">Az építészettel a jövőbe fektet!</div>
                <div className="epitesz_szolgaltatas">
                    <div className="epitesz_szolgaltatas_div epitesz_szolgaltatas_1">
                        <div className="epitesz_szolgaltatas_img epitesz_szolgaltatas_img_1" ></div>
                        <div className="epitesz_szolgaltatas_text epitesz_szolgaltatas_text_1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                    <div className="epitesz_szolgaltatas_div epitesz_szolgaltatas_2">
                        <div className="epitesz_szolgaltatas_text epitesz_szolgaltatas_text_2" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                        <div className="epitesz_szolgaltatas_img epitesz_szolgaltatas_img_2"></div>
                        
                    </div>
                    <div className="epitesz_szolgaltatas_div epitesz_szolgaltatas_3">
                        <div className="epitesz_szolgaltatas_img epitesz_szolgaltatas_img_3"></div>
                        <div className="epitesz_szolgaltatas_text epitesz_szolgaltatas_text_3" >Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</div>
                    </div>
                    <div className="epitesz_szolgaltatas_div epitesz_szolgaltatas_4">
                        <div className="epitesz_szolgaltatas_text epitesz_szolgaltatas_text_4" >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </div>
                        <div className="epitesz_szolgaltatas_img epitesz_szolgaltatas_img_4"></div>
                    </div>
                </div>
                <MapDiv />
            </div>
            <Footer />
        </div>
    );


}

export default Epitesz;