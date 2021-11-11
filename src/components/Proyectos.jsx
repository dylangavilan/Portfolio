import React from "react";
import olea from "../imagen/oleaproyecto.jpg";
export default function Proyectos() {
  let proyectos = [
    {
      nombre: "FoodFactory",
      descripcion: "SPA",
      tecnologias: [
        "React",
        "Redux",
        "NodeJS",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "CSS Modules",
      ],
      repositorio: "https://github.com/dylangavilan/DyFood-",
      foto: { olea },
    },
  ];
  return (
    <div>
      <h1>Aca</h1>
      {proyectos &&
        proyectos.map((c) => {
          return (
            <div>
              <h1>{c.nombre}</h1>
              <h2>{c.descripcion}</h2>
              <li>
                {c.tecnologias?.map((el) => {
                  return <ul>{el}</ul>;
                })}
              </li>
              <span>
                <a href={c.repositorio} target="_blank">
                  Repo
                </a>
              </span>
              <img src={olea}></img>
            </div>
          );
        })}
    </div>
  );
}
