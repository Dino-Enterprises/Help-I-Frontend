import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser} from "../store/reducers/user/userSlice";
import {useNavigate} from "react-router-dom";
import {useCreateTaskMutation, useGetTasksQuery} from "../store/reducers/security/apiSlice";

function Register() {

    const example = {
        username: "user-01",
        password: "1234",
        email: "user-01@bezkoder.com",
        name: "Pedro",
        number: "997871189",
        lastName: "Gabril Garcia",
        createdDate: "2023/05/05",
        birthday: "1972/08/11"
    }

    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        name: '',
        number: '',
        lastName: '',
        createdDate: '',
        birthday: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    //const [createUser] = useCreateTaskMutation;
    const {data, isError, isLoading, error} = useGetTasksQuery || {};

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log("user handle", user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("aca")
        if (isError) {
            console.log("error", error)
        }
        if (isLoading) {
            console.log("Cargando...")
        } else {
            console.log("data", data)
        }
    }

    return (

        <div className="flex items-center justify-center h-screen bg-[#dcdcdc]">
            <div className="h-[500px] w-[400px] flex flex-col items-center justify-center bg-[#323232] text-white">
                <div className="mb-3">REGISTRO</div>
                <div>
                    <div>
                        <div>Nombres y Apellidos</div>
                        <input
                            name="name"
                            onChange={handleChange}
                            className="rounded outline outline-1 text-black"
                            type="text"
                        />
                    </div>
                    <div>
                        <div>Id del Usuario</div>
                        <input
                            className="rounded outline outline-1 text-black"
                            type="text"
                        />
                    </div>
                    <div>
                        <div>Correo</div>
                        <input
                            name="email"
                            onChange={handleChange}
                            className="rounded outline outline-1 text-black"
                            type="text"
                        />
                    </div>
                    <div>
                        <div>Contraseña</div>
                        <input
                            name="password"
                            onChange={handleChange}
                            className="rounded outline outline-1 text-black"
                            type="password"
                        />
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

                    <div className="flex justify-center -ml-8">
                        <form onSubmit={handleSubmit}>
                            <button
                                class="bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                                REGISTER
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Register;
