"use client";
import { useEffect, useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { WatchDatabaseTables, WatchTableData } from "@/actions/actions";
import { ExtendedFunctionalityModule } from "@/components/extraFunctions/ExtendedFunctionalityModule";
import InsertDataFunction from "@/components/extraFunctions/insertData/InsertDataFunction";
import { DeletedTablaFunction } from "@/components/extraFunctions/deletedTables/DeletedTablaFunction";

export const DatabaseTablesListener = () => {
  const [tablesList, setTablesList] = useState([]);
  useEffect(() => {
    const ListDatabaseTables = async () => {
      const resp = await WatchDatabaseTables();
      setTablesList(resp);
    };
    ListDatabaseTables();
  }, []);

  // Hooks para controlar el modal respectivo a cada funcion
  const [InsertData, setInsertData] = useState(false);
  const [DeletedTable, setDeletedTable] = useState(false);

  // refresh tables
  const handleRefreshTables = async () => {
    const resp = await WatchDatabaseTables();
    setTablesList(resp);
  };

  return (
    <div>
      <div
        className="flex justify-center py-5 cursor-pointer"
        onClick={() => handleRefreshTables()}
      >
        <span>
          <ArrowPathIcon
            className="h-6 w-6 shrink-0 text-white"
            aria-hidden="true"
          />
        </span>
      </div>
      <ul>
        {tablesList.map(({ tablename }, index) => (
          <li key={index} className="border border-b-sky-200">
            <TablesListenerList
              tablename={tablename}
              openParam={InsertData}
              setOpenParam={setInsertData}
              setOpenParamDelete={setDeletedTable}
            />
          </li>
        ))}
      </ul>

      <div>
        <InsertDataFunction
          openParam={InsertData}
          setOpenParam={setInsertData}
        />
      </div>
      <div>
        <DeletedTablaFunction
          openParam={DeletedTable}
          setOpenParam={setDeletedTable}
        />
      </div>
    </div>
  );
};

//
const TablesListenerList = ({
  tablename,
  setOpenParam,
  setOpenParamDelete,
}) => {
  const handleDescribeTable = async (tablename) => {
    // Cada click en una tabla, se hace un SELECT de la tabla
    const respSELECT = await WatchTableData(tablename);
    // Tambien podemos manejar las cookies desde aca, en lugar de hacerlo en el server action
  };
  return (
    <div className="min-w-full py-2 align-middle pl-7 pr-4 flex items-center justify-between">
      <div
        onClick={() => handleDescribeTable(tablename)}
        className="cursor-pointer"
      >
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0 text-white"
              >
                {tablename}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="bg-red-500 h-full">
        <ExtendedFunctionalityModule
          tableName={tablename}
          setOpenParam={setOpenParam}
          setOpenParamDelete={setOpenParamDelete}
        />
      </div>
    </div>
  );
};
