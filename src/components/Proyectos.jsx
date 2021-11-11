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
      imagen:
        "https://res.cloudinary.com/oleaproyecto2021/image/upload/v1636650428/unjdx0kupw7xbbzpiege.jpg",
    },
    {
      nombre: "Olea",
      descripcion: "E-Commerce",
      tecnologias: [
        "React",
        "Redux",
        "NodeJS",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "CSS Modules",
        "Jwt",
        "Socket.io",
      ],
      repositorio: "https://github.com/dylangavilan/PG-Olea",
      imagen:
        "https://res.cloudinary.com/oleaproyecto2021/image/upload/v1636649407/dppqhwdvehstgrqcgz5r.jpg",
    },
  ];
  return (
    <div>
      <h1 className="text-center text-4xl  text-white font-azeret">Projects</h1>
      <div className="flex flex-wrap justify-center  " id="proyectos">
        {proyectos?.map((c) => {
          return (
            <div>
              <Cards proyectos={c} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
