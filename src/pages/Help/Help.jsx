import React from "react";

export const Help = () => {
  return (
    <div className="help-container">
      <div className="help-section">
        <h2>No tengo acceso a la aplicación</h2>
        <p>
          AppCálculo no es una app pública per se, está enfocada a centros
          educativos y profesores cuyo método de aprendizaje esté basado en el
          método ABN, ellos nos solicitan el acceso y nosotros les damos unas
          credenciales de acceso, tanto a profesores, alumnos y su respectivo
          tutor legal.
        </p>
      </div>
      <div className="help-section">
        <h2>
          Mis credenciales no me funcionan / Me da error al intentar iniciar
          sesión
        </h2>
        <p>
          Como suele ser habitual en estos casos, comprueba que tu contraseña y
          usuario son correctos. Las contraseñas contienen, mínimo, una
          mayúscula, minúscula, un número y un carácter especial; además de 8
          caracteres de longitud mínima. Si aún no consigues acceder, mándanos
          un email a ApiCalculo@gmail.com y te daremos nuevos credenciales de
          acceso.
        </p>
      </div>
      <div className="help-section">
        <h2>Mi problema no está aquí listado</h2>
        <p>
          Mándanos un email con tu nombre, centro y profesor a
          ApiCalculo@gmail.com
          <a href="/about">contacta con nosotros</a>
        </p>
      </div>
    </div>
  );
};
