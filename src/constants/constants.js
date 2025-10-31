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


export const TESTIMONIALS_DATA = [
    {
        id: 1,
        quote: "On the Windows talking pointed pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        name: 'Mike Taylor',
        title: 'Lahore, Pakistan',
        avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: 2,
        quote: "A truly outstanding experience from start to finish. The team's professionalism and attention to detail were second to none. Highly recommended!",
        name: 'Chris Thomas',
        title: 'CEO of Red Button',
        avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
        id: 3,
        quote: "Working with them was a game-changer for our business. Their innovative solutions helped us achieve our goals faster than we ever thought possible.",
        name: 'Jane Cooper',
        title: 'Marketing Director, Basecamp',
        avatarUrl: 'https://randomuser.me/api/portraits/women/25.jpg',
    },
];
