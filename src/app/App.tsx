import clsx from "clsx";
import { SearchInput } from "@/features/SearchInput";
import { Map } from "@/widgets/Map";
import { UserMarkersList } from "@/entities/Markers";


function App() {
  return (
    <main className={clsx('w-full h-full overflow-y-auto flex flex-col gap-8 items-center justify-center')}>
      <SearchInput />
      <UserMarkersList />
      <Map />
    </main>
  )
}

export default App
