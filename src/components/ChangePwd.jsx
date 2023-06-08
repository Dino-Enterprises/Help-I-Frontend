import React from "react";
import { Link } from "react-router-dom";

function ChangePwd() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#dcdcdc]">
      <div className="h-[300px] w-[400px] flex flex-col items-center justify-center bg-[#323232] text-white">
        <div className="mb-3">CAMBIAR CONTRASEÑA</div>
        <div>
          <div>
            <div>Contraseña Actual</div>
            <input
              className="rounded outline outline-1 text-black"
              type="text"
            />
          </div>

          <div>
            <div>Contraseña Nueva</div>
            <input
              className="rounded outline outline-1 text-black"
              type="password"
            />
          </div>
          <div>
            <div>Confirma Contraseña Nueva</div>
            <input
              className="rounded outline outline-1 text-black"
              type="password"
            />
          </div>
        </div>
        <Link to={"/user/userpanel"}>
          <div className="mt-5">
            <div className="flex justify-center">
              <button class="bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                CHANGE PASSWORD
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ChangePwd;
