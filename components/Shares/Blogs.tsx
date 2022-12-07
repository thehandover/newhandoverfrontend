import Image from "next/image";
import Blog1 from "../../public/assets/img/blog/blog01.jpg";
import Blog2 from "../../public/assets/img/blog/blog02.jpg";
import Blog3 from "../../public/assets/img/blog/blog03.jpg";

const BlogSection = () => {
    return (
        <section className="blog-wrap1" style={{ backgroundColor: '#eaf7f4' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-8">
                        <div className="item-heading-left">
                            <span className="section-subtitle">What’s New Trending</span>
                            <h2 className="section-title">Latest Blog & Posts</h2>
                            <div className="bg-title-wrap" style={{ display: "block" }}>
                                <span className="background-title solid">Blogs</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-6 col-sm-4">
                    <div className="heading-button">
                    <a href="blog1.html" className="heading-btn">
                        See All Blogs
                    </a>
                    </div>
                </div> */}
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-box1 wow fadeInUp" data-wow-delay=".4s">
                            <div className="item-img">
                                <a href="blog1.html" className="d-flex">
                                    <Image src={Blog1.src} alt="blog" width="520" height="350" />
                                </a>
                            </div>
                            <div className="thumbnail-date">
                                <div className="popup-date">
                                    <span className="day">13</span>
                                    <span className="month">Aug</span>
                                </div>
                            </div>
                            <div className="item-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <a href="blog2.html">Apartment, Room</a>
                                        </li>
                                        <li>
                                            <a href="blog2.html">5 min</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="heading-title">
                                    <h3>
                                        <a href="blog1.html">
                                            How To Do Market Research For to Sell Faster
                                        </a>
                                    </h3>
                                </div>
                                <div className="blog-button">
                                    <a href="blog1.html" className="item-btn">
                                        Read More<i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-box1 wow fadeInUp" data-wow-delay=".3s">
                            <div className="item-img">
                                <a href="blog1.html" className="d-flex">
                                    <Image src={Blog2.src} alt="blog" width="520" height="350" />
                                </a>
                            </div>
                            <div className="thumbnail-date">
                                <div className="popup-date">
                                    <span className="day">13</span>
                                    <span className="month">Aug</span>
                                </div>
                            </div>
                            <div className="item-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <a href="blog2.html">Building, Room</a>
                                        </li>
                                        <li>
                                            <a href="blog2.html">4 min</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="heading-title">
                                    <h3>
                                        <a href="blog1.html">
                                            Develop Relationships With Human Resource
                                        </a>
                                    </h3>
                                </div>
                                <div className="blog-button">
                                    <a href="blog1.html" className="item-btn">
                                        Read More<i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-box1 wow fadeInUp" data-wow-delay=".2s">
                            <div className="item-img">
                                <a href="blog1.html" className="d-flex">
                                    <Image src={Blog3.src} alt="blog" width="520" height="350" />
                                </a>
                            </div>
                            <div className="thumbnail-date">
                                <div className="popup-date">
                                    <span className="day">13</span>
                                    <span className="month">Aug</span>
                                </div>
                            </div>
                            <div className="item-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <a href="blog2.html">Entertainment, Room</a>
                                        </li>
                                        <li>
                                            <a href="blog2.html">3 min</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="heading-title">
                                    <h3>
                                        <a href="blog1.html">
                                            Unique Real Estate Marketing: Have A Tent Business Card
                                        </a>
                                    </h3>
                                </div>
                                <div className="blog-button">
                                    <a href="blog1.html" className="item-btn">
                                        Read More<i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
