import { FC, memo, useMemo } from "react";
import { useGetGeosByTextQuery } from "@/model/geos";
import { parseGeoData, ParseGeosReturn } from "@/entities/Geos/lib/parseGeoData";
import { Button } from "@/shared/ui";
import clsx from "clsx";
import { useAppDispatch } from "@/shared/lib";
import { useEventCallback } from "usehooks-ts";
import { markerAction } from "@/model/markers";

export interface GeosListProps {
  text: string;
}

export const GeosList: FC<GeosListProps> = memo(({text}) => {
  const {data} = useGetGeosByTextQuery({text})
  const dispatch = useAppDispatch()

  const geoDataList = useMemo(() => parseGeoData(data), [data])

  const onClickHandler = useEventCallback(({name, country, coords}: ParseGeosReturn) => {
    dispatch(markerAction.addMarker({coords, name: `${name}, ${country}`, id: }))
  })

  return (
    <div className={clsx('flex', 'flex-col', 'gap-1', 'items-start', 'bg-gray-300', 'mt-2')}>
      {geoDataList.map(it => (
        <Button onClick={() => onClickHandler(it)} variant={'ghost'} className={clsx('w-full')}>
        {it.name}, {it.country}
      </Button>
      ))}
    </div>
  )
})