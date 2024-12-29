export interface GeoFeature {
  type: string;
  properties: {
    "country": string,
    "country_code": string,
    "region": string,
    "state": string,
    "city": string,
    "lon": number,
    "lat": number,
    "result_type": string,
    "formatted": string,
    "address_line1": string,
    "address_line2": string,
    "category": string,
  }
  "geometry": {
    "type": string,
    "coordinates": [
      number,
      number,
    ]
  },
}


export interface GeosResponse {
  features: GeoFeature[]
}