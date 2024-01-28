"use client";

import { WatchDatabaseName } from "@/actions/actions";
import { useEffect, useState } from "react";

export const CurrentDatabase = () => {
  const [nameDatabase, setNameDatabase] = useState('No database selected');
  useEffect(() => {
    const getNameDatabase = async () => {
      const name = await WatchDatabaseName();
      setNameDatabase(name);
    };
    getNameDatabase();
  }, []);

  return (
    <div className="text-gray-700">
      <h1>{nameDatabase}</h1>
    </div>
  );
};
