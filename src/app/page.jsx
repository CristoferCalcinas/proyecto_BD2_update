import { TextareaForQueries } from "@/components/mainContent/TextareaForQueries";
import { RenderTablesDatabase } from "@/components/mainContent/RenderTablesDatabase";

export default function Home() {
  return (
    <div className="">
      <div>
        <TextareaForQueries />
      </div>
      <div>
        <RenderTablesDatabase />
      </div>
    </div>
  );
}
