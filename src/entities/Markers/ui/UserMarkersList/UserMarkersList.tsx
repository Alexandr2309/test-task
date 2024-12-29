import { FC } from "react";
import { useSelector } from "react-redux";
import { getMarkers } from "@/model/markers";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import clsx from "clsx";


export const UserMarkersList: FC = () => {
  const markers = useSelector(getMarkers)

  return (
    <Card className={clsx("w-2/3")}>
      <CardHeader>
        <CardTitle>Список маркеров</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={clsx('flex', 'flex-col', 'gap-2')}>
          {markers.map((marker) => (
            <span>{marker.name}, Координаты: [{marker.coords}]</span>
          ))}
        </div>
      </CardContent>
    </Card>
  )

}