import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contato" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Onde Residimos
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Horário de Funcionamento
        </p>
        <p className="p__opensans">Segunda - Quarta: 10:00 am - 18:00 pm</p>
        <p className="p__opensans">Sexta - Domingo: 16:00 pm - 00:00 pm</p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Visite-nos
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
