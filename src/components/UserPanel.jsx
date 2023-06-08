import React from "react";
import { Link } from "react-router-dom";

function UserPanel() {
  return (
    <div className="bg-[#161816]">
      <div className="h-screen text-white min-w-[1000px] max-w-[1500px] m-auto divide-y divide-[#323232]">
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex flex-col justify-end space-y-8 pb-8">
            {/* Nombre y lista de juegos */}
            <div className="text-[35px]">Homero Simpson</div>
            <Link to={"/user"}>
              <div className="text-[35px]">Seleccionar Juego</div>
            </Link>
          </div>
          <div className="col-span-1 flex flex-col justify-end items-end pt-[40px] pr-[40px]">
            <div className="">
              <div>
                <img
                  src="../images/homer.jpeg"
                  alt="profile"
                  className="rounded-full border w-[200px]"
                />
              </div>
              <div className="text-[40px] font-bold text-center">HOMER</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          {/* Correo, cambiar contraseña y Discord */}
          <div className="col-span-1 flex flex-col space-y-8 pt-8 pb-8">
            <div className="text-[35px]">Game Coins</div>
            <div className="text-[35px]">Correo Electrónico</div>
            <Link to={"/user/changepwd"}>
              <div className="text-[35px]">Cambiar Contraseña</div>
            </Link>
            <Link to={"/user/creditcard"}>
              <div className="text-[35px]">Vincular Tarjeta de crédito</div>
            </Link>
          </div>
          {/* valores */}
          <div className="col-span-2 flex flex-col space-y-8 pt-8 pb-8">
            <div className="text-[35px] font-light">300GC</div>
            <div className="text-[35px] font-light">
              homer_s@springfield.com
            </div>
          </div>
        </div>
        <div>
          <div className="col-span-1 flex flex-col space-y-8 pt-8 pb-8">
            <Link to={"/"}>
              <div className="text-[35px]">Cerrar Sesión</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
