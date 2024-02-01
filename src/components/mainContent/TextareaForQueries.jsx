"use client";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { CreateTableAndRefresh, ProcessDatabaseQuery } from "@/actions/actions";

setCookie("userDatabase", "postgres");
setCookie("passwordDatabase", "8066");

export const TextareaForQueries = () => {
  const [textAreaContent, setTextAreaContent] = useState("");

  // Cambia los valores del textarea
  const handleTextAreaChange = (e) => {
    setTextAreaContent(e.target.value);
  };

  const onSubmitDatabase = async () => {
    if (textAreaContent.trim().length === 0) return;
    try {
      const consultas = textAreaContent.split(";").map((query) => query.trim());

      // Eliminar consultas vacías
      const consultasValidas = consultas.filter((query) => query.length > 0);

      console.log(consultasValidas);
      for (const consulta of consultasValidas) {
        if (
          consulta.toLowerCase().includes("create table") ||
          consulta.toLowerCase().includes("drop table")
        ) {
          const resp = await CreateTableAndRefresh(consulta);
        } else {
          const resp = await ProcessDatabaseQuery(consulta);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const countLines = (text) => {
    return text.split("\n").length;
  };
  const lines = countLines(textAreaContent);
  const lineNumbers = Array.from({ length: lines }, (_, i) => i + 1);

  const handleTabKeyPress = (e) => {
    if (e.key === "Tab") {
      e.preventDefault(); // Evita el comportamiento predeterminado de cambiar de foco
      const { selectionStart, selectionEnd } = e.target;
      const newValue =
        textAreaContent.substring(0, selectionStart) +
        "\t" +
        textAreaContent.substring(selectionEnd);
      settextArea(newValue);
    }
  };

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <span className="block text-xl font-extrabold leading-6 text-gray-900 tracking-tight">
          Escribe SQL
        </span>

        <button
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => {
            setTextAreaContent("");
          }}
        >
          Limpiar
        </button>

        <button
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={onSubmitDatabase}
        >
          Ejecutar/Enviar
        </button>
      </div>

      <div className="mt-2 flex">
        <div className="w-10 text-right text-gray-800 container py-5 flex flex-col justify-start items-center font-bold">
          {lineNumbers.map((lineNumber) => (
            <div key={lineNumber}>{lineNumber}</div>
          ))}
        </div>
        <textarea
          rows={10}
          className="block w-full rounded-md border-0 text-blue-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6 p-5 resize-none tracking-widest font-bold"
          value={textAreaContent}
          onChange={handleTextAreaChange}
          onKeyDown={handleTabKeyPress}
        />
      </div>
    </div>
  );
};
