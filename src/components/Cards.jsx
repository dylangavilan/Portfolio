import React from "react";

export default function Cards({ proyectos }) {
  return (
    <div className="mb-8 mx-16 md:mb-12">
      <div className="bg-white dark:bg-gray-700 shadow-md hover:shadow-lg rounded-xl w-80 m-2 md:m-4 p-4 text-left space-y-4">
        <h3 className="text-4xl font-azeret text-center text-purple-600">
          {proyectos.nombre}
        </h3>
        <div className="inline justify-center items-center">
          <div className="flex justify-center">
            <img
              src={proyectos.imagen}
              alt="proyecto"
              className="h-66 w-96"
            ></img>
          </div>
          <div className="text-center">
            <h4>{proyectos.descripcion}</h4>
            <div className="text-gray-800 text-base font-semibold">
              {proyectos.tecnologias?.map((c, i) => {
                if (i === 0) {
                  return <span>{c}</span>;
                }
                return <span>{" - " + c}</span>;
              })}
            </div>
            <div className="py-3">
              <a href={proyectos.repositorio} target="_blank" rel="noreferrer">
                View repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
