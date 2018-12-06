import React from "react";
import PageTitle from "Components/Type/PageTitle";
import ContentSection from "Components/Type/ContentSection";
import roadmapImg from "./assets/roadmap.png";
import articleImg1 from "./assets/article1.png";
import articleImg2 from "./assets/article2.png";
import articleImg3 from "./assets/article3.png";

function AboutPage(props) {
    const s1Text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. `;
    const s2Text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut pretium pretium tempor.Ut eget imperdiet neque.In volutpat ante semper diam molestie, et aliquam erat laoreet.. `;
    
    
    return (
        <div>
            <PageTitle title="About"/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 m-auto">
                        <ContentSection 
                            title="About Us"
                            content={s1Text}/>
                            <hr/>
                        <ContentSection
                            title="RoadMap"
                            content={s2Text} />
                        
                    </div>
                </div>
            </div>
            {/* Roadmap Graphic*/}
            <section className="bg-detail bg-detail-square">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 m-auto text-center">
                            <img src={roadmapImg} alt="" className="img-fluid my-4"/>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-sm-10 m-auto">
                        <ContentSection
                            title="Blog"
                            content={s1Text} />
                        <div className="d-flex align-items-center justify-content-around mt-3 mb-5">
                            <img src={articleImg1} alt="" />
                            <img src={articleImg2} alt="" />
                            <img src={articleImg3} alt="" />
                        </div>
                        <hr/>
                        <ContentSection
                            title="More Information"
                            content={s2Text} />
                    </div>
                </div>
            </div>
            

            <div className="bg-detail bg-end-gradient py-5"></div>
        </div>
    );
}

export default AboutPage;
