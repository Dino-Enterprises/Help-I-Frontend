import React from "react";
import { Link } from "react-router-dom";

function GamePage() {
  return (
    <div className="bg-[#161816]">
      <div className="min-w-[1000px] max-w-[1500px] m-auto text-white divide-y divide-[#323232]">
        {/* Juego */}
        <div className="relative">
          <img src="../images/dota_game.jpeg" />
          <Link to={"/user/userpanel"}>
            <div className="col-span-1 flex flex-col justify-start items-start pl-[40px] pt-[40px] absolute top-0">
              <img
                src="../images/homer.jpeg"
                alt="profile"
                className="rounded-full border w-[200px]"
              />
              <div className="text-[40px] font-bold text-center">HOMER</div>
            </div>
          </Link>
        </div>
        {/* Coaches */}
        <div>
          <ul>
            <li>
              <div className="grid grid-cols-3 pt-[25px] pl-[25px] pb-[25px]">
                <div className="col-span-1 flex align-middle justify-start items-center">
                  <img
                    src="../images/fear.png"
                    alt="profile"
                    className="rounded-full border w-[200px]"
                  />
                  <div className="text-[40px] font-bold pl-[25px]">Fear</div>
                </div>
                <div className="col-span-2 flex align-middle justify start items-center text-2xl">
                  Jugador de Dota en la posición de Hard Carry. Ganador de
                  múltiples eventos donde destacan el DAC 2015 y The
                  International 2015.
                </div>
              </div>
            </li>
            <li>
              <div className="grid grid-cols-3 pt-[25px] pl-[25px] pb-[25px]">
                <div className="col-span-1 flex align-middle justify-start items-center">
                  <img
                    src="../images/fear.png"
                    alt="profile"
                    className="rounded-full border w-[200px]"
                  />
                  <div className="text-[40px] font-bold pl-[25px]">Fear</div>
                </div>
                <div className="col-span-2 flex align-middle justify start items-center text-2xl">
                  Jugador de Dota en la posición de Hard Carry. Ganador de
                  múltiples eventos donde destacan el DAC 2015 y The
                  International 2015.
                </div>
              </div>
            </li>
            <li>
              <div className="grid grid-cols-3 pt-[25px] pl-[25px] pb-[25px]">
                <div className="col-span-1 flex align-middle justify-start items-center">
                  <img
                    src="../images/fear.png"
                    alt="profile"
                    className="rounded-full border w-[200px]"
                  />
                  <div className="text-[40px] font-bold pl-[25px]">Fear</div>
                </div>
                <div className="col-span-2 flex align-middle justify start items-center text-2xl">
                  Jugador de Dota en la posición de Hard Carry. Ganador de
                  múltiples eventos donde destacan el DAC 2015 y The
                  International 2015.
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div className="grid grid-cols-3 pt-[25px] pl-[25px] pb-[25px]">
                <div className="col-span-2 flex justify-center items-center text-center text-[65px]">
                  Guía detallada Batrider
                </div>
                <div className="col-span-1 flex align-middle justify-center items-center">
                  <img
                    src="../images/guide_1.png"
                    alt="profile"
                    className=" border w-[350px]"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="grid grid-cols-3 pt-[25px] pl-[25px] pb-[25px]">
                <div className="col-span-2 flex justify-center items-center text-[65px]">
                  Guía detallada Necrohos
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <img
                    src="../images/guide_2.png"
                    alt="profile"
                    className=" border w-[350px]"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div className="grid grid-cols-3 pt-[25px] pl-[25px] pb-[25px]">
                <div className="col-span-1 flex align-middle justify-center items-center">
                  <img
                    src="../images/guide_3.png"
                    alt="profile"
                    className=" border w-[350px]"
                  />
                </div>
                <div className="col-span-2 flex justify-center items-center text-[65px]">
                  Guía básica Juggernaut
                </div>
              </div>
            </li>
            <li>
              <div className="grid grid-cols-3 pt-[25px] pl-[25px] pb-[25px]">
                <div className="col-span-1 flex align-middle justify-center items-center">
                  <img
                    src="../images/guide_4.png"
                    alt="profile"
                    className=" border w-[350px]"
                  />
                </div>
                <div className="col-span-2 flex justify-center items-center text-[65px]">
                  Guía básica Omniknight
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
