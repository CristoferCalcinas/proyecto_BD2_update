"use client";
import { ProcessDatabaseQuery } from "@/actions/actions";
import { RenderTablesDatabase, TextareaForQueries } from "@/components";

export default function Home() {
  const enviarQuery = async () => {
    const queryTest = `
    SELECT * FROM public.administrador
    ORDER BY id_administrador ASC
    `;
    const resp = await ProcessDatabaseQuery(queryTest);
    console.log(resp);
  };
  return (
    <div className="flex items-center justify-center">
      <div>
        <TextareaForQueries />
      </div>
      <div>
        <button
          type="button"
          className="rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={enviarQuery}
        >
          Button
        </button>
      </div>
      <div>
        <RenderTablesDatabase />
      </div>
    </div>
  );
}
