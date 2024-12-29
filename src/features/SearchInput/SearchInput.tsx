import { FC, useState } from "react";
import { Button, Input } from "@/shared/ui";
import { GeosList } from "@/entities/Geos";
import { useDebounceValue } from "usehooks-ts";


export const SearchInput: FC = () => {
  const [text, setText] = useState('')

  const [debouncedText] = useDebounceValue(text, 300)

  return (
    <div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input value={text} onChange={(e) => setText(e.target.value)} type="email" placeholder="Email"/>
        <Button type="submit">Subscribe</Button>
      </div>
      <GeosList text={debouncedText}/>
    </div>
  )
}