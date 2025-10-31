

import mic from "../assets/mic.png";
const EventIcon = () => {
    return (
        <div className=" flex items-center justify-center w-40 h-40">

            <svg width="67" height="75" viewBox="0 0 67 75" fill="none" overflow="visible" >
                <path d="M67 18C67 8.05887 58.9411 7.04529e-07 49 1.57361e-06L22 3.93403e-06C19.2386 4.17544e-06 17 2.23858 17 5L17 39C17 44.5228 21.4772 49 27 49L62 49C64.7614 49 67 46.7614 67 44L67 18Z" fill="#FFF1DA" />
                <path d="M0 6H40V56.5385C40 66.7345 31.7345 75 21.5385 75C9.6431 75 0 65.3569 0 53.4615V6Z" fill="url(#pattern0_1_1504)" />


                <image href={mic} x="-10" y="10" width="70" height="70" />
            </svg>



        </div>
    )
}

export default EventIcon
