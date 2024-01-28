"use client";
import { useState } from "react";

export const TextareaForQueries = () => {
//   const [textAreaContent, setTextAreaContent] = useState("");
//   const onSubmitDatabase = async () => {
//     if (textArea === "") {
//       return;
//     }
//     try {
//       const consultas = textArea.split(";").map((query) => query.trim());

//       // Eliminar consultas vacías
//       const consultasValidas = consultas.filter((query) => query.length > 0);

//       for (const consulta of consultasValidas) {
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const countLines = (text) => {
//     return text.split("\n").length;
//   };
//   const lines = countLines(textArea);
//   const lineNumbers = Array.from({ length: lines }, (_, i) => i + 1);

//   const handleTabKeyPress = (e) => {
//     if (e.key === "Tab") {
//       e.preventDefault(); // Evita el comportamiento predeterminado de cambiar de foco
//       const { selectionStart, selectionEnd } = e.target;
//       const newValue =
//         textArea.substring(0, selectionStart) +
//         "\t" +
//         textArea.substring(selectionEnd);
//       settextArea(newValue);
//     }
//   };

  return (
    // <div>
    //   <div className="flex justify-between">
    //     <label className="block text-xl font-medium leading-6 text-gray-900">
    //       Ingresa tu Consulta SQL
    //     </label>
    //     <button
    //       onClick={() => {
    //         settextArea("");
    //       }}
    //       textButton={"Limpiar"}
    //     ></button>
    //     <button
    //       onClick={onSubmitDatabase}
    //       textButton={"Ejecutar/Enviar"}
    //     />
    //   </div>
    //   <div className="mt-2 flex">
    //     <div className="w-10 text-right text-gray-800 container py-5 flex flex-col justify-start items-center font-bold">
    //       {lineNumbers.map((lineNumber) => (
    //         <div key={lineNumber}>{lineNumber}</div>
    //       ))}
    //     </div>
    //     <textarea
    //       rows={10}
    //       className="block w-full rounded-md border-0 text-blue-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6 p-5 resize-none tracking-widest font-bold"
    //       value={textArea}
    //       onChange={onChange}
    //       onKeyDown={handleTabKeyPress}
    //     />
    //   </div>
    // </div>
    <div>
        <div>holas</div>
    </div>
  );
};
