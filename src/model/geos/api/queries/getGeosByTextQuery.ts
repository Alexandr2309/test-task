import {AppRTKEndpointBuilder} from '@/shared/api'
import { GeosResponse } from "@/entities/Geos";

interface GetGeosByTextQueryArgs {
  text: string
}

export const getGeosByTextQuery = (build: AppRTKEndpointBuilder) =>
  build.query<GeosResponse, GetGeosByTextQueryArgs>({
    query: ({text}) => ({
      url: `?apiKey=bcf3e1bcbbaa45a59e1718e08cbf874a&text=${text}`,
    })
  })