import { RenderTablesDatabase } from "@/components/mainContent/RenderTablesDatabase";
import { TextareaForQueries } from "@/components/mainContent/TextareaForQueries";

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
