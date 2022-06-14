import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contato</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.granpizza} alt="footer_logo" />
        <p className="p__opensans">
          &quot;O Melhor modo de encontrar a si mesmo é se perder servindo aos
          outros.&quot;
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horário de Serviço</h1>
        <p className="p__opensans">Segunda-Quarta:</p>
        <p className="p__opensans">10:00 am - 18:00 pm</p>
        <p className="p__opensans">Sexta-Domingo:</p>
        <p className="p__opensans">16:00 pm - 00:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        2021 Gran Pizza. Todos os direitos reservados.
      </p>
    </div>
  </div>
);

export default Footer;
