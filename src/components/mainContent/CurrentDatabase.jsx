"use client";

import { useEffect, useState } from "react";
import { WatchDatabaseName } from "@/actions/actions";
import { TableCellsIcon } from "@heroicons/react/20/solid";

export const CurrentDatabase = () => {
  const [nameDatabase, setNameDatabase] = useState("No database selected");
  useEffect(() => {
    const getNameDatabase = async () => {
      const name = await WatchDatabaseName();
      setNameDatabase(name);
    };
    getNameDatabase();
  }, []);

  return (
    <div className="flex items-center justify-center space-x-1">
      <TableCellsIcon className="h-6 w-6" />
      <h1>{nameDatabase}</h1>
    </div>
  );
};
