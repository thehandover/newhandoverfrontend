import Link from "next/link";
import Banner3 from "../../public/assets/img/banner/banner03.jpg";

const PropertyBanner = () => {
    return (
        <section className="" data-bg-image={Banner3.src} style={{
            background: `linear-gradient(0deg,#ffffff8c,#ffffff), url(${Banner3.src}) no-repeat center center / cover`,
        }} >
        <div className="width mx-auto">
            <div className="flex flex-wrap items-center justify-between py-10">
                <div className="py-5">
                    <div className="text-base theme-color">Invest like a millionaire</div>
                    <h3 className="item-title">Search upcoming projects and bid as a new project launches!</h3>
                </div>
                <div className="">
                    <div className="bg-title-wrap" style={{ display: "block" }}>
                        <Link href={'/opportunities'}>
                            <a className="cursor-pointer bg-theme-color py-2 px-5 text-white rounded-3xl block">Property For All</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default PropertyBanner;