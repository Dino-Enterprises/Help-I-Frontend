import React from "react";
import { Link } from "react-router-dom";

function CreditCard() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#dcdcdc]">
      <div className="h-[300px] w-[400px] flex flex-col items-center justify-center bg-[#323232] text-white">
        <div className="mb-3">VINCULAR MEDIO DE PAGO</div>
        <div>
          <div>
            <div>Número de la Tarjeta</div>
            <input
              className="rounded outline outline-1 text-black w-full"
              type="text"
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1 flex items-center">
              <div>
                <div>mes/año</div>
                <input
                  className="rounded outline outline-1 text-black w-[60px]"
                  type="text"
                />
              </div>
            </div>
            <div className="flex col-span-1 justify-end">
              <div>
                <div>CVV</div>
                <input
                  className="rounded outline outline-1 text-black w-[60px]"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div>
            <div>Nombre del titular</div>
            <input
              className="rounded outline outline-1 text-black w-full"
              type="text"
            />
          </div>
        </div>
        <Link to={"/user/userpanel"}>
          <div className="mt-5">
            <div className="flex justify-center">
              <button class="bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                REGISTER
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CreditCard;
