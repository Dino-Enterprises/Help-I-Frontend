import React from 'react'

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#dcdcdc]">
      <div className="h-[300px] w-[400px] flex flex-col items-center justify-center bg-[#323232] text-white">
        <div className="mb-3">LOGEATE</div>
        <div>
       
        <div>
          <div>Id del Usuario</div>
          <input className="rounded outline outline-1 text-black" type="text" />
        </div>
        
        <div>
          <div>Contraseña</div>
          <input className="rounded outline outline-1 text-black" type="password" />
        </div>

        </div>        
        <div className="mt-5">          
          <div className="flex justify-center">
            <button class="bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login