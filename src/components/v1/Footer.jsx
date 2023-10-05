import React from "react";

const Footer = () => {
    return(
        // <div className="footer fixed-bottom">
        //     <div className="footer_left">
        //     ©2022 by Betongeometria.
        //     </div>
        //     <div className="footer_mid">
        //     <a href="mailto:hello@betongeometria.hu">hello@betongeometria.hu</a>
        //     </div>
        //     <div className="footer_right">
        //         <button className="footerBtn">ÁSZF</button><button className="footerBtn">GDPR</button><button className="footerBtn">Jogi-nyilatkozat</button>
        //     </div>
        // </div>

        //working
        // <div className="footer">
        //     <footer className="text-center text-lg-start fixed-bottom">
        //     <div className="footer_left">
        //      ©2022 by Betongeometria.
        //      </div>
        //      <div className="footer_mid">
        //      <a href="mailto:hello@betongeometria.hu">hello@betongeometria.hu</a>
        //      </div>
        //      <div className="footer_right">
        //          <button className="footerBtn" onClick={()=>{window.location.href="/aszf"}}>ÁSZF</button><button className="footerBtn" onClick={()=>{window.location.href="/gdpr"}}>GDPR</button><button className="footerBtn" onClick={()=>{window.location.href="/joginyilatkozat"}}>Jogi-nyilatkozat</button>
        //      </div>
        //     </footer>
        // </div>

        <div className="footer">
            <footer className="text-center text-lg-start">
            <div className="footer_left">
             ©2022 by Betongeometria.
             </div>
             <div className="footer_mid">
             <a href="mailto:hello@betongeometria.hu">hello@betongeometria.hu</a>
             </div>
             <div className="footer_right">
                 <button className="footerBtn" onClick={()=>{window.location.href="/impresszum"}}>Impresszum</button>
             </div>
            </footer>
        </div>
    );
}

export default Footer;