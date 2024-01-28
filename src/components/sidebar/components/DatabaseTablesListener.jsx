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
      <ul className="space-y-1">
        {tablesList.map((item, index) => (
          <li key={index}>
            <div>{item.tablename}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
