"use client";
import { useEffect, useState } from "react";
import { WatchDatabaseTables } from "@/actions/actions";

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
      <ul className="flex flex-col items-center">
        {tablesList.map(({ tablename }, index) => (
          <li key={index}>
            <TablesListenerList tablename={tablename} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const TablesListenerList = ({ tablename }) => {
  return (
    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
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
  );
};
