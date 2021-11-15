import React from "react";
import Cards from "./Cards";
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
      repositorio: "https://github.com/dylangavilan/FoodFactory",
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
      deploy: "https://somosolea.vercel.app",
    },
    {
      nombre: "Wave Portal",
      descripcion: "Smart Contract",
      tecnologias: ["React", "Solidity", "Web3", "CSS Modules"],
      repositorio: "https://github.com/dylangavilan/portal-eth",
      imagen:
        "https://res.cloudinary.com/oleaproyecto2021/image/upload/v1637012048/wobwfxumchpc5yff5hih.png",
      deploy: "https://portal-eth.vercel.app/",
    },
  ];
  return (
    <div>
      <h1 className="text-center text-4xl  text-white font-azeret mb-8 mx-16 md:mb-12 ">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center" id="proyectos">
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
