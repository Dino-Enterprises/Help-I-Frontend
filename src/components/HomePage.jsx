import React from "react";
import { Carousel, CarouselVids, Questions } from "./";

function HomePage() {
  return (
    <div className="bg-[#161816] text-white">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div>
          {/* ResumenAcción */}
          <div className="grid grid-cols-3 p-10 space-x-10">
            <div>
              <div className="text-xl font-bold text-center">
                Escoge tu juego
              </div>
              <div className="text-base text-center p-5">
                Elige el videojuego en el que quieras mejorar
              </div>
            </div>
            <div >
              <div className="text-xl font-bold text-center">
                Elige tu coach
              </div>
              <div className="text-base text-center p-5">
                Escoge al mejor mentor de la comunidad.
              </div>
            </div>
            <div >
              <div className="text-xl font-bold text-center">
                Gana tus partidas
              </div>
              <div className="text-base text-center p-5">
                Gracias a la tutoría personal que te ofrecemos prepárate para
                mejorar y ganar
              </div>
            </div>
          </div>
          {/* Registro */}
          <div >
            {/* Carrusel videos */}
            <CarouselVids/>
            {/* términos */}
            
          </div>
          {/* Preguntas */}
          <div>
            <Questions/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
