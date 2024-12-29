import { rtkApi } from "@/shared/api";
import { getGeosByTextQuery } from "@/model/geos/api/queries/getGeosByTextQuery";

export const geosApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getGeosByText: getGeosByTextQuery(build),
  })
})

export const useGetGeosByTextQuery = geosApi.useGetGeosByTextQuery