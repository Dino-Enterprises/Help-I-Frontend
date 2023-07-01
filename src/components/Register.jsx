import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [fullName, setFullName] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [promos, setPromos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puede enviar los datos del formulario a un servidor o manejarlos como desee
    console.log({ fullName, userId, email, password, terms, promos });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#dcdcdc]">
      <form onSubmit={handleSubmit} className="h-[500px] w-[400px] flex flex-col items-center justify-center bg-[#323232] text-white">
        <div className="mb-3">REGISTRO</div>
        <div>
          <div>
            <div>Nombres y Apellidos</div>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="rounded outline outline-1 text-black"
              type="text"
            />
          </div>
          <div>
            <div>Id del Usuario</div>
            <input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="rounded outline outline-1 text-black"
              type="text"
            />
          </div>
          <div>
            <div>Correo</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded outline outline-1 text-black"
              type="text"
            />
          </div>
          <div>
            <div>Contraseña</div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded outline outline-1 text-black"
              type="password"
            />
          </div>
        </div>
        <div className="ml-6 mt-5">
          <div className="flex justify-center items-center mb-3">
            <input
              id="terms-checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="terms-checkbox" className="ml-2 text-sm font-medium">
              Acepto los{" "}
              <span className="text-green-500">Téminos y Condiciones</span> y
              las{" "}
              <span className="text-green-500">Políticas de Privacidad</span>,
              soy mayor de 13 años.
            </label>
          </div>
          <div className="flex justify-center items-center mb-4">
            <input
              id="promos-checkbox"
              checked={promos}
              onChange={(e) => setPromos(e.target.checked)}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="promos-checkbox" className="ml-2 text-sm font-medium">
              Me gustaría recibir promociones y noticias de las actualizaciones
              en correo.
            </label>
          </div>
          <Link to={"/login"}>
            <div className="flex justify-center -ml-8">
              <button type="submit" className="bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                REGISTER
              </button>
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
