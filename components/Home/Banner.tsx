import Image from "next/image";
import CoverImage from "/public/img/cover-img.png"
import SearchSection from "../Includes/SearchSection";
import Link from "next/link";

const Banner = () => {

    return (
        <>
        <div>
            <SearchSection />

            {/* Start of Hero Section  */}
            <div className="width m-auto herosection">
                <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2">
                    <div className="lg:text-left text-center">
                        <h1 className="heading">Off Plan Property<br /> Investing For<br /> Everyone Online.</h1>
                        <p className="tagline">The Handover is the world&apos;s first and largest Off-plan
                            investing marketplace</p>
                        <p className="tagline">Explore <strong>marketplace</strong> as</p>
                        <div className="block mt-10">
                            <Link href={'/sign-in'}><a className="dark-btn mr-2">Developer</a></Link>
                            <Link href={'/sign-in'}><a className="inverse-dark-btn">Investor</a></Link>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 text-center">
                        <Image src={CoverImage.src} width={CoverImage.width} height={CoverImage.height} className="cover-img mx-auto" alt={'cover-image'} />
                    </div>
                </div>
            </div>
            {/* END OF Hero Section  */}
        </div>
        </>
    );
};

export default Banner;