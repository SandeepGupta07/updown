import React from 'react';

const Home = () => {
    return (
        <div>
            <section id="hero">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 py-5 py-lg-0 order-2 order-lg-1">
                            <h1>Your first choice for traveling anywhere</h1>
                            <h2>We’re specialized in providing a high quality service</h2>
                            <a href="{#about}" className="btn-get-started scrollto">Get Application</a>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                            <img src="/_car-big.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </section >

            <main id="main">
                <section id="clients" className="clients section-bg">
                <div className="container">

                    <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

                    <div className="col-lg-2 col-md-4 col-6">
                        <div className="client-logo">
                        <img src="/assets/img/clients/client-1.png" className="img-fluid" alt="" data-aos="flip-right"/>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                        <div className="client-logo">
                        <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="100"/>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                        <div className="client-logo">
                        <img src="/assets/img/clients/client-3.png" className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="200"/>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                        <div className="client-logo">
                        <img src="/assets/img/clients/client-4.png" className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="300"/>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                        <div className="client-logo">
                        <img src="/assets/img/clients/client-5.png" className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="400"/>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6">
                        <div className="client-logo">
                        <img src="/assets/img/clients/client-6.png" className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="500"/>
                        </div>
                    </div>

                    </div>

                </div>
                </section>

                <section id="about" className="about section-bg">
                <div className="container">

                    <div className="row gy-4">
                    <div className="image col-xl-5"></div>
                    <div className="col-xl-7">
                        <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
                        <h3 data-aos="fade-in" data-aos-delay="100">Welcome to the most trusted company</h3>
                        <p data-aos="fade-in">
                        There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don't look even slightly believable you are going to use a passage.
                        </p>
                        <div className="row gy-4 mt-3">
                            <div className="col-md-6 icon-box" data-aos="fade-up">
                            <i className="bx bx-receipt"></i>
                            <h4><a href="#">Safe</a></h4>
                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                            </div>
                            <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <i className="bx bx-cube-alt"></i>
                            <h4><a href="#">Fast</a></h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                            </div>
                            <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <i className="bx bx-images"></i>
                            <h4><a href="#">Quick</a></h4>
                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                            </div>
                            <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                            <i className="bx bx-shield"></i>
                            <h4><a href="#">Insurance</a></h4>
                            <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                </section>

                <section id="services" className="services section-bg">
                <div className="container">

                    <div className="section-title">
                    <h2 data-aos="fade-in">Services</h2>
                    <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                    <div className="col-md-3 d-flex" data-aos="fade-right">
                        <div className="card">
                        <div className="card-img">
                            <img src="assets/img/services-1.jpg" alt="..."/>
                        </div>
                        <h4 className='text-center mt-2'><a href="#"> Move anywhere you want</a></h4>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex" data-aos="fade-left">
                        <div className="card">
                        <div className="card-img">
                            <img src="assets/img/services-2.jpg" alt="..."/>
                        </div>
                        <h4 className='text-center mt-2'><a href="#"> Credit booking</a></h4>
                        </div>

                    </div>
                    <div className="col-md-3 d-flex" data-aos="fade-right">
                        <div className="card">
                        <div className="card-img">
                            <img src="assets/img/services-3.jpg" alt="..."/>
                        </div>
                        <h4 className='text-center mt-2'><a href="#"> Home Pickups</a></h4>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex" data-aos="fade-left">
                        <div className="card">
                        <div className="card-img">
                            <img src="assets/img/services-4.jpg" alt="..."/>
                        </div>
                        <h4 className='text-center mt-2'><a href="#"> Long travels</a></h4>
                        </div>
                    </div>
                    </div>

                </div>
                </section>


                <section id="features" className="features section-bg">
                <div className="container">

                    <div className="row content">
                    <div className="col-md-5" data-aos="fade-right">
                        <img src="assets/img/phone_one.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-4" data-aos="fade-left">
                        <h3>Get a free mobile application</h3>
                        <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </p>
                        <ul>
                        <li><i className="bi bi-check"></i>Quick & Easy Booking</li>
                        <li><i className="bi bi-check"></i>24/7 Service Available</li>
                        <li><i className="bi bi-check"></i>Reliable GPS Enabled</li>
                        <li><i className="bi bi-check"></i>Cost Effective</li>
                        <li><i className="bi bi-check"></i>Inclusive Rates</li>
                        <li><i className="bi bi-check"></i>Easy Searching</li>
                        </ul>
                        <a href="" className='btn btn-warning'>Download App</a>
                    </div>
                        
                    </div>

                    <div className="row content">
                    <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                        <img src="assets/img/features-4.svg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                        <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                        <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        </p>
                        <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                    </div>

                </div>
                </section>

                <section id="faq" className="faq section-bg">
                <div className="container">

                    <div className="section-title">
                    <h2 data-aos="fade-in">Frequently Asked Questions</h2>
                    <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. </p>
                    </div>

                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up">
                    <div className="col-lg-5">
                        <i className="bx bx-help-circle"></i>
                        <h4>Non consectetur a erat nam at lectus urna duis?</h4>
                    </div>
                    <div className="col-lg-7">
                        <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.</p>
                    </div>
                    </div>

                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-5">
                        <i className="bx bx-help-circle"></i>
                        <h4>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h4>
                    </div>
                    <div className="col-lg-7">
                        <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices.</p>
                    </div>
                    </div>

                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-5">
                        <i className="bx bx-help-circle"></i>
                        <h4>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</h4>
                    </div>
                    <div className="col-lg-7">
                        <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim.</p>
                    </div>
                    </div>

                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                    <div className="col-lg-5">
                        <i className="bx bx-help-circle"></i>
                        <h4>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h4>
                    </div>
                    <div className="col-lg-7">
                        <p>
                        Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident.
                        </p>
                    </div>
                    </div>

                    <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                    <div className="col-lg-5">
                        <i className="bx bx-help-circle"></i>
                        <h4>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h4>
                    </div>
                    <div className="col-lg-7">
                        <p>
                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nun.
                        </p>
                    </div>
                    </div>

                </div>
                </section>

                <section id="contact" className="contact section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>Contact</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur</p>
                    </div>

                    <div className="row">

                    <div className="col-lg-6">

                        <div className="row">
                        <div className="col-md-12">
                            <div className="info-box" data-aos="fade-up">
                            <i className="bx bx-map"></i>
                            <h3>Our Address</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                            <i className="bx bx-envelope"></i>
                            <h3>Email Us</h3>
                            <p>info@example.com<br/>contact@example.com</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                            <i className="bx bx-phone-call"></i>
                            <h3>Call Us</h3>
                            <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form w-100" data-aos="fade-up">
                        <div className="row">
                            <div className="col-md-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                    </div>

                </div>
                </section>
            </main>

        </div >
    );
}

export default Home;
