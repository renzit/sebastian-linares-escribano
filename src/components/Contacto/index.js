import React from "react";
import FA from "react-fontawesome";

const Contacto = ({ data }) => (
  <div className="columns mt-4">
    <div className="column is-half">
      <p>
        <b>Contacto:</b>
      </p>
      <p className="mr-3 py-2">
        <a href="mailto:esclinaresmayer@gmail.com" className="button">
        <FA name="envelope"/>
        <span className="pl-1">
          Email:{" "}
          esclinaresmayer@gmail.com
          </span>
        </a>
      </p>
      <p className="my-2">
        <a href="tel:+59899300738" className="button mr-2 my-2">
          <FA name="phone" />{" "}
          <span className="pl-1">Teléfono: 099 300 738</span>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=59899300738"
          className="button my-2"
          target="_blank"
        >
          <FA name="whatsapp" />
          <span className="pl-1"> Whatsapp 24 horas.</span>
        </a>
      </p>
      <p className="my-2">
        <FA name="clock" /> Horario de Atención: Lunes a Viernes de 09 a 18 hrs.
      </p>
      <p>Consulta sin compromiso.</p>
    </div>
    <div className="column is-half">
      <p>
        <b>Escribano Público en {" "}
        <a
          href="https://www.facebook.com/EstudioCLAM/"
          target="_blank"
          className="has-text-white"
        >Estudio CLAM</a></b>
      </p>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/EstudioCLAM/"
        data-width="380"
        data-hide-cover="false"
        data-show-facepile="false"
      ></div>
    </div>
    <div className="column"></div>
  </div>
);

export default Contacto;
