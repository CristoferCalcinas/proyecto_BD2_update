"use client";
import { useEffect, useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { WatchDatabaseTables, WatchTableData } from "@/actions/actions";

export const DatabaseTablesListener = () => {
  const [tablesList, setTablesList] = useState([]);
  useEffect(() => {
    const ListDatabaseTables = async () => {
      const resp = await WatchDatabaseTables();
      setTablesList(resp);
    };
    ListDatabaseTables();
  }, []);

  return (
    <div>
      <ul>
        {tablesList.map(({ tablename }, index) => (
          <li key={index} className="border border-b-sky-200">
            <TablesListenerList tablename={tablename} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const TablesListenerList = ({ tablename }) => {
  const handleDescribeTable = async (tablename) => {
    console.log(tablename);
    const respSELECT = await WatchTableData(tablename);
    console.log(respSELECT);
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
        <EllipsisVerticalIcon className="h-10 w-6 text-white" />
      </div>
    </div>
  );
};
