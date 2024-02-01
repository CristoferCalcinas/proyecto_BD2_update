"use client";

import { useState } from "react";
import { CreateNewUserDatabase } from "@/actions/actions";
// import { toast } from "sonner";

export default function AddUserDatabase() {
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleUserChange = (e) => {
    setInputUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (inputUser.trim().length === 0 || inputPassword.trim().length === 0) {
      return;
    }
    const respNewUser = await CreateNewUserDatabase(`
      CREATE USER ${inputUser} WITH PASSWORD '${inputPassword}';
    `);
    // toast.success(`Usuario | ${inputUser} | se a creado con éxito`);
    console.log(respNewUser);
    setInputUser("");
    setInputPassword("");
  };

  return (
    <form action="#" className="mt-6 flex justify-between" onSubmit={onSubmit}>
      <div className="space-y-2">
        <input
          type="text"
          name="newUser"
          id="newUser"
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Ingresa un nuevo usuario"
          value={inputUser}
          onChange={handleUserChange}
          required
        />
        <input
          type="text"
          name="newPassword"
          id="newPassword"
          className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Ingresa una contraseña"
          value={inputPassword}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button
        type="submit"
        className="ml-4 flex-shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Crear nuevo usuario
      </button>
    </form>
  );
}
