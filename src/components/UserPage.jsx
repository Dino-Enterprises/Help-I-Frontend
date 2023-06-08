import React from "react";
import { Link } from "react-router-dom";

function UserPage() {
  return (
    <div className="bg-[#161816]">
      <div className="h-screen text-white min-w-[1000px] max-w-[1500px] m-auto">
        {/* Top */}
        <div className="grid grid-cols-3 pt-[40px]">
          {/* portrait */}
          <Link to={"/user/userpanel"}>
            <div className="flex col-span-1">
              <div>
                <img
                  src="../images/homer.jpeg"
                  alt="profile"
                  className="rounded-full border w-[200px]"
                />
              </div>
              <div className="flex col-span-2 justify-center text-center text-[40px] m-auto font-bold">
                HOMER
              </div>
            </div>
          </Link>
        </div>
        {/* Middle */}
        <div className=" divide-y divide-[#323232]">
          <div className="flex justify-center items-center">
            <div className="text-[60px] font-bold">Selecciona tu Juego</div>
          </div>
          {/* Bottom */}
          <div className="flex items-center justify-between pt-[75px] mt-[20px]">
            <div>
              <Link to={"/user/gamepage"}>
                <img className="w-[250px]" src="../images/dota_prof.png" />
              </Link>
            </div>
            <div>
              <img className="w-[250px]" src="../images/apex_prof.png" />
            </div>
            <div>
              <img className="w-[250px]" src="../images/lol_prof.png" />
            </div>
            <div>
              <img className="w-[250px]" src="../images/cod_prof.png" />
            </div>
          </div>
          {/* Foot */}
          <div className="text-center mt-[75px] pt-[75px] text-xl">
            <div>
              Aplica para ser un <span className="text-[#22c55c]">Coach</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
