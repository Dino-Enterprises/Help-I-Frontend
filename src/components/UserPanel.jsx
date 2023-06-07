import React from "react";

function UserPanel() {
  return (
    <div className="bg-[#161816]">
      <div className="h-screen text-white min-w-[1000px] max-w-[1500px] m-auto">
        <div>
          <div className="flex flex-col justify-end items-end pt-[40px] pr-[40px]">
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
      </div>
    </div>
  );
}

export default UserPanel;
