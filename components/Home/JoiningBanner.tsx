import Video from "../../public/assets/img/svg/video-bg-2.svg";
import Banner1 from "../../public/assets/img/banner/banner01.png";
import Shape3 from "../../public/assets/img/figure/shape3.png";
import Shape4 from "../../public/assets/img/figure/shape4.png";
import Shape5 from "../../public/assets/img/figure/shape5.png";
import Image from "next/image";
import Link from "next/link";
import { parseCookies } from "nookies";

const JoiningBanner = () => {

    const { token } = parseCookies()

    return (
        <>
        {/* Joining Property Starts Here  */}
        <div className="bg-theme-color w-full">
            <div className="grid grid-cols-2 items-center lg:grid-cols-3 mx-auto width py-10">
                <div className="col-span-2 flex flex-wrap items-center justify-center lg:justify-start mb-5 lg:mb-0 text-white text-base sm:text-xl lg:text-3xl">
                    <span className="icon text-white mdi mdi-account-edit-outline text-6xl lg:text-8xl" /> <span>Register as a developer or<br />property owner</span>
                </div>
                <div className="col-span-2 lg:col-span-1 w-full text-center lg:text-right">
                    <Link href={token ? '/seller' : '/sign-up'}>
                        <a className="dark-btn py-2 text-xl">Register Now</a>
                    </Link>
                </div>
            </div>
        </div>
        {/* Joining Property Ends Here  */}
        </>
    );
};

export default JoiningBanner;
