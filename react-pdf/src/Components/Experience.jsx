import "../assets/css/joehunter.css";
const Experience = () => {
    return (
        <section id="experience" className="skills">
            <div className="container">
                <h2 className="content-center">Professional Experience</h2>
                <div className="card card-flex">
                    <div
                        className="col-lg-3 col-md-3 card-hero background-green content-center"
                    >
                        <div className="card-hero-heading">
                            <small>JUNE 2015 - NOVEMBER 2021</small>
                            <h2 className="heading-job-title">Web Developer</h2>
                            <h3>CLC World Resorts &amp; Hotels</h3>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 card-description">
                        <div className="container">
                            <p>
                                It was my responsibility to{" "}
                                <strong>develop online infrastructure </strong>within CLC World. My
                                projects have included <strong>Booking engines;</strong> data driven{" "}
                                <strong>dashboards</strong> for Reporting, Social media and Email
                                and involvement in the creative department’s Media Library. In 2018,
                                I was privileged to be the creator of critical business solutions,
                                like <strong>REST</strong> apis for lead actioning the company’s
                                vital data services. At the same time, I continued to maintain the
                                large fleet of company marketing sites.
                            </p>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <p>
                                    Design: <i className="icon-embed2 pull-right"></i>
                                </p>
                                <ul>
                                    <li>Media Library</li>
                                    <li>WP Theming</li>
                                    <li>Email Templates</li>
                                    <li>UX</li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <p>
                                    Solutions: <i className="icon-cogs pull-right"></i>
                                </p>
                                <ul>
                                    <li>Data Dashboards</li>
                                    <li>Lead capture</li>
                                    <li>Payment Gateways</li>
                                    <li>Signups Strategies</li>
                                    <li>Booking Engines</li>
                                    <li>WP Plugins</li>
                                    <li>Transactional email API </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <p>
                                    Management: <i className="icon-terminal pull-right"></i>
                                </p>
                                <ul>
                                    <li>Cloud Deployment</li>
                                    <li>Git Repo</li>
                                    <li>Google Analytics (Tag Manager)</li>
                                    <li>Digital Marketing</li>
                                    <li>Emarsys (Email Suite) </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
