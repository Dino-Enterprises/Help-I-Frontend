import React from "react";
import { Carousel, Questions } from "./";

function HomePage() {
  return (
    <div>
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
            {/* grid datos */}
            <div className="grid grid-cols-3 p-10 space-x-10">
              <div className="flex items-center justify-center  ">
                <div className="items-center">
                  <div className="text-center">Dirección de correo</div>
                  <input className="rounded outline outline-1" type="text" />
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <div>
                  <div className="text-center">Nombre de usuario</div>
                  <input className="rounded outline outline-1" type="text" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div>
                  <div className="text-center">
                    Contraseña (min. 8 caracteres)
                  </div>
                  <input
                    className="rounded outline outline-1"
                    type="password"
                  />
                </div>
              </div>
            </div>
            {/* términos */}
            <div className="ml-10 mr-10">
              <div>
                <div className="flex justify-center items-center mb-3">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Acepto los <span className="text-green-400">Téminos y Condiciones</span> y las <span className="text-green-400">Políticas de Privacidad</span>, soy mayor de 13 años.
                  </label>
                  
                </div>
                <div className="flex justify-center items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Me gustaría recibir promociones y noticias de las actualizaciones en correo.
                  </label>
                </div>
                <div className="flex justify-center">
                  <button class="bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Registrarse</button>
                </div>
              </div>
            </div>
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
