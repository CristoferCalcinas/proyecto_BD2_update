"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { setCookie } from "cookies-next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const ExtendedFunctionalityModule = ({ tableName, setOpenParam }) => {
  const handleDeleteTable = () => {};
  const handleInsertData = (tableName) => {
    console.log("nombre de la tabla actual", { tableName });
    setCookie("insertDataByFunction", tableName);
    setOpenParam(true);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center text-white hover:text-gray-600">
          <EllipsisVerticalIcon className="h-10 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex flex-col">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={handleDeleteTable}
                >
                  Eliminar Tabla {" => "}
                  <span className="font-bold text-lg">{tableName}</span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={() => handleInsertData(tableName)}
                >
                  Insertar Datos{" => "}
                  <span className="font-bold text-lg">{tableName}</span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Func !1
                </button>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    disabled
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Mas...
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

// export default function OptionsMenu({
//   tableName,
//   // openParam,
//   // setOpenParam,
//   // setDataInputFunction,
// }) {
//   const handleDeleteTable = () => {};
//   const handleInsertData = async () => {
//     setOpenParam(true);
//     const consulta = `
//     SELECT column_name, data_type
//     FROM information_schema.columns
//     WHERE table_name = '${tableName}';
//     `;

//     setDataInputFunction({ dataTableName: tableName, dataInput: data });
//   };

//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button className="flex items-center text-gray-400 hover:text-gray-600">
//           <span className="sr-only">Open options</span>
//           <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1 flex flex-col">
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   className={classNames(
//                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                     "block px-4 py-2 text-sm"
//                   )}
//                   onClick={handleDeleteTable}
//                 >
//                   Eliminar Tabla {" => "}
//                   {tableName}
//                 </button>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   className={classNames(
//                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                     "block px-4 py-2 text-sm"
//                   )}
//                   onClick={handleInsertData}
//                 >
//                   Insertar Datos{" => "}
//                   {tableName}
//                 </button>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   href="#"
//                   className={classNames(
//                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                     "block px-4 py-2 text-sm"
//                   )}
//                 >
//                   Func !1
//                 </button>
//               )}
//             </Menu.Item>
//             <form method="POST" action="#">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     disabled
//                     type="submit"
//                     className={classNames(
//                       active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                       "block w-full px-4 py-2 text-left text-sm"
//                     )}
//                   >
//                     Mas...
//                   </button>
//                 )}
//               </Menu.Item>
//             </form>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }
