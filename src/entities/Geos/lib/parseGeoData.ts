import { GeosResponse } from "@/entities/Geos";

export interface ParseGeosReturn {
  name: string,
  country: string,
  coords: [number, number],
}

export const parseGeoData = (geos: GeosResponse | undefined): ParseGeosReturn[] => {
  if(!geos) return []

  return geos.features.map(feature => ({
    name: feature.properties.city,
    country: feature.properties.country,
    coords: feature.geometry.coordinates,
  }))
}