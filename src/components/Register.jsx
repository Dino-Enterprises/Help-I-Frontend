import React from "react";

function Register() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#dcdcdc]">
      <div className="h-[500px] w-[400px] flex flex-col items-center justify-center bg-[#323232] text-white">
        <div className="mb-3">REGISTRO</div>
        <div>
        <div>
          <div>Nombres y Apellidos</div>
          <input className="rounded outline outline-1 text-black" type="text" />
        </div>
        <div>
          <div>Id del Usuario</div>
          <input className="rounded outline outline-1 text-black" type="text" />
        </div>
        <div>
          <div>Correo</div>
          <input className="rounded outline outline-1 text-black" type="text" />
        </div>
        <div>
          <div>Contraseña</div>
          <input className="rounded outline outline-1 text-black" type="password" />
        </div>

        </div>        
        <div className="ml-6 mt-5">
          <div className="flex justify-center items-center mb-3">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="default-checkbox" className="ml-2 text-sm font-medium">
              Acepto los{" "}
              <span className="text-green-500">Téminos y Condiciones</span> y
              las{" "}
              <span className="text-green-500">Políticas de Privacidad</span>,
              soy mayor de 13 años.
            </label>
          </div>
          <div className="flex justify-center items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="default-checkbox" className="ml-2 text-sm font-medium">
              Me gustaría recibir promociones y noticias de las actualizaciones
              en correo.
            </label>
          </div>
          <div className="flex justify-center">
            <button class="bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              Regístrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
