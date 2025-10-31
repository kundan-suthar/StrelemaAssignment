import WeatherIcon from "../icons/WeatherIcon";
import FlightIcon from "../icons/FlightIcon";
import EventIcon from "../icons/EventIcon";
import CustomizeIcon from "../icons/CustomizeIcon";

import rome from "../assets/rome.png";
import london from "../assets/london.jpg";
import europe from "../assets/europe.png";

export const services = [
    {
        icon: WeatherIcon,
        title: 'Calculated Weather',
        description: 'Built Wicket longer admire do barton vanity itself do in it.',
        highlighted: false,
    },
    {
        icon: FlightIcon,
        title: 'Best Flights',
        description: 'Engrossed listening. Park gate sell they west hard for the.',
        highlighted: false,
    },
    {
        icon: EventIcon,
        title: 'Local Events',
        description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
        highlighted: false,
    },
    {
        icon: CustomizeIcon,
        title: 'Customization',
        description: 'We deliver outsourced aviation services for military customers.',
        highlighted: false,
    },
];



export const destinations = [
    {
        id: 1,
        name: "Rome, Italy",
        price: "$5,42k",
        duration: "10 Days Trip",
        imageUrl: rome,
    },
    {
        id: 2,
        name: "London, UK",
        price: "$4.2k",
        duration: "12 Days Trip",
        imageUrl: london
    },
    {
        id: 3,
        name: "Full Europe",
        price: "$15k",
        duration: "28 Days Trip",
        imageUrl: europe
    },
];