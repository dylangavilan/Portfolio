import React from "react";
import olea from "../imagen/oleaproyecto.jpg";
import Cards from "./Cards";
export default function Proyectos() {
  let foto = olea;
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
      imagen: foto,
    },
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
      imagen: foto,
    },
  ];
  return (
    <div className="py-16 flex flex-wrap" id="proyectos">
      {proyectos?.map((c) => {
        return (
          <div>
            <Cards proyectos={c} />
          </div>
        );
      })}
    </div>
  );
}
