import React from "react";
import { GrLinkedin, GrGithub } from "react-icons/gr";

export const About = () => {
  return (
    <div className="container-about">
      <div className="container-about-content">
        <h1>Sobre App calculo ABN</h1>
        <p>
          Esta app fue creada como proyecto final en React para Upgrade Hub,
          además de utilizar Node.js para el backend y librerías de JavaScript
          como MathJS, GraphJS o EmailJS.
        </p>
        <h2>Sobre el método ABN</h2>
        <p>
          El autor del Método ABN es Jaime Martínez Montero, maestro y doctor en
          Filosofía y Ciencias de la Educación, que explica: “La idea de crearlo
          es más el resultado de toda una vida profesional en la que se ha
          trabajado con especial intensidad la didáctica de las matemáticas, que
          algo que se le ocurre a uno de repente”. En este sentido, Martínez
          Montero ha escrito varios libros relacionados con el tema, que son una
          interesante fuente de consulta para los docentes como:
          <a href="https://www.casadellibro.com/libro-una-didactica-del-calculo-para-el-siglo-xxi/9788471976369/731202">
            - Una nueva didáctica del cálculo para el siglo XXI
          </a>
          <a href="https://www.casadellibro.com/libro-competencias-basicas-en-matematicas-una-nueva-practica/9788471979063/1239445">
            - Competencias básicas en matemáticas. Una nueva práctica{" "}
          </a>
          Su aplicación se inició por primera vez en un aula de 1º de Primaria
          del CEIP Andalucía (Cádiz, curso 2008-2009).
        </p>
        <p>
          Más información sobre este método en:
          <a href="https://calculoabn.com/nosotros/metodo/">- página web.</a>
        </p>
      </div>
      <h2>Desarrolladores</h2>
      <div className="profile-container">
        <div className="profile-card">
          <h1>Pedro González</h1>
          <h2>pedrogonzalezfernandez@gmail.com</h2>
          <div className="socials">
            <a href="https://www.linkedin.com/in/pedrogonzalezfernandez">
              <GrLinkedin />
            </a>
            <a href="https://github.com/pedrogf84">
              <GrGithub />
            </a>
          </div>
        </div>
        <div className="profile-card">
          <h1>Xulio Xaviert Rojas Teixeira</h1>
          <h2>xulioxaviert@gmail.com</h2>
          <div className="socials">
            <a href="https://www.linkedin.com/in/xulio-xaviert-rojas-teixeira/">
              <GrLinkedin />
            </a>
            <a href="https://github.com/xulioxaviert">
              <GrGithub />
            </a>
          </div>
        </div>
        <div className="profile-card">
          <h1>Raúl Ruiz</h1>
          <h2>raul.dev.rm@gmail.com</h2>
          <div className="socials">
            <a href="https://www.linkedin.com/in/raul-ruiz-manglano">
              <GrLinkedin />
            </a>
            <a href="https://github.com/KeywizZ">
              <GrGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
