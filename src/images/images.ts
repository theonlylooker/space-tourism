import EUROPA from "../assets/destination/image-europa.png"
import MARS from "../assets/destination/image-mars.png"
import MOON from "../assets/destination/image-moon.png"
import TITAN from "../assets/destination/image-titan.png"
import ANOUSHEHANSARI from "../assets/crew/image-anousheh-ansari.png"
import DOUGLASHURLEY from "../assets/crew/image-douglas-hurley.png"
import MARKSHUTTLEWORTH from "../assets/crew/image-mark-shuttleworth.png"
import VICTORGLOVER from "../assets/crew/image-victor-glover.png"
import LAUNCHVEHICLE from "../assets/technology/image-launch-vehicle-portrait.jpg"
import SPACECAPSULE from "../assets/technology/image-space-capsule-portrait.jpg"
import SPACEPORT from "../assets/technology/image-spaceport-portrait.jpg"

type a = {
    [key:string]: string,
}

const images:a ={
    EUROPA:EUROPA,
    MARS:MARS,
    MOON: MOON,
    TITAN:TITAN,
    DOUGLASHURLEY:DOUGLASHURLEY,
    MARKSHUTTLEWORTH:MARKSHUTTLEWORTH,
    VICTORGLOVER:VICTORGLOVER,
    ANOUSHEHANSARI:ANOUSHEHANSARI,
    LAUNCHVEHICLE:LAUNCHVEHICLE,
    SPACEPORT:SPACEPORT,
    SPACECAPSULE:SPACECAPSULE,
}
export default images;

