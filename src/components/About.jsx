import React from "react";
export default function About() {
  return (
    <div className="px-10 min-w-screen pb-20 bg-fondo " id="about">
      <div className="text-2xl  ">
        <h2 className="font-marven text-center pt-10 pb-20 text-5xl text-rosa ">
          About me
        </h2>
        <p className="font-azeret text-clarito">
          Hi! <span className="text-rosa">I'm Dylan Gavilan</span>, i was born
          in Buenos Aires, Argentina. I'm 20 years old.
          <br />I am a programming fan, since I was very young
          <span className="text-rosa">
            {" "}
            I liked everything related to solving problems
          </span>
          , challenges, etc. I love to research and learn new technologies on my
          free time. I am an organized, team worker and fast learner person. I
          believe that you can go further{" "}
          <span className="text-rosa">
            {" "}
            in a team than if you go on your own.{" "}
          </span>
        </p>
      </div>
    </div>
  );
}
