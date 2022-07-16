import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode,
}

export interface modalProps{
    modal: boolean,
    handleClose: ()=>void,
    handleBackground: (address:string)=>void,
}

export interface imagesFetch{
    png: string,
    webp: string,
}
export interface vehicleimagesFetch{
    portrait: string,
    landscape: string,
}
export interface destinationsFetch{
    name: string,
    description: string,
    distance: string,
    travel: string,
    images: imagesFetch
}
export interface crewFetch{
    name: string,
    images: imagesFetch,
    role: string,
    bio:string
}
export interface technologyFetch{
    name: string,
    images: vehicleimagesFetch,
    description: string
}
export interface data{
    destinations: destinationsFetch[],
    crew: crewFetch[],
    technology: technologyFetch[],
}
export interface Fetch{
    data: data
    error?: Error,
    loading: boolean 
}

export interface DestinationProps{
    data: destinationsFetch[]
}
export interface crewProps{
    data: crewFetch[]
}
export interface technologyProps{
    data: technologyFetch[]
}
export interface headerProps{
    handleBackground: (address:string)=>void,
}
export interface navbarProps{
    handleBackground:(address:string)=>void,
}