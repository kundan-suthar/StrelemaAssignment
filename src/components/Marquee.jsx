import { LOGOS } from '../constants/constants';

const LogoItem = ({ logo }) => {


    const containerClasses = `
    relative flex items-center justify-center
    h-28 w-60 mx-4
    transition-all duration-300 ease-in-out
  `;

    const logoWrapperClasses = `flex-shrink-0 hover:bg-white hover:rounded-2xl hover:shadow-xl hover:scale-100 hover:p-6 hover:z-10 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out
  `;

    return (
        <div className={containerClasses}>
            <div className={logoWrapperClasses}>
                <img src={logo.image} alt="" width={200} height={100} />
            </div>
        </div>
    );
};

const Marquee = () => {

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            }}
        >
            <div className="group flex w-max items-center ">
                <div className="flex animate-scrolling group-hover:[animation-play-state:paused] items-center" aria-hidden="true">
                    {LOGOS.map((logo) => (
                        <LogoItem key={logo.id} logo={logo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
