import React from "react";

export const Porfile = () => {
  const user = localStorage.getItem("user");
  return (
    <div className="user-profile">
      <div className="profile-info">
        <p>
          Bienvenido {user.name}, tu cuenta es de {user.type}
        </p>

        {user.type === "STUDENT" && <h3>Has completado las siguientes actividades:</h3>}
      </div>
    </div>
  );
};
