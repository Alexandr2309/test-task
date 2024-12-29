
export type Marker = {
  coords: [number, number]
  name: string;
  id: number;
}

export interface MarkersSchema {
  markers: Marker[];
}