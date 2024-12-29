import clsx from "clsx";
import { reactify, YMap, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer, YMapMarker } from "@/shared/lib";
import { Icon } from "@/shared/ui";
import { useSelector } from "react-redux";
import { getMarkers } from "@/model/markers";
import { memo } from "react";
import { getCurrentCoords } from "@/model/coords/model";

export const Map = memo(() => {
  const markers = useSelector(getMarkers);
  const currentCoords = useSelector(getCurrentCoords)


 return (
   <div className={clsx('w-5/6', 'h-2/3', 'border-2', 'rounded-lg', 'shadow-lg')}>
    <YMap location={reactify.useDefault({center: currentCoords, zoom: 9})} >
      <YMapDefaultSchemeLayer/>
      <YMapDefaultFeaturesLayer/>
      {
        markers.length > 0 && markers.map(({coords}) => (
          <YMapMarker  coordinates={reactify.useDefault(coords)} draggable={true}>
            <Icon name={'marker'} size={[64, 64]} />
          </YMapMarker>
        ))
      }
    </YMap>
  </div>
 )
})