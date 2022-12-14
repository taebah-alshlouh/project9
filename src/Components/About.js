import React, { Component } from 'react';
import '../css/main.css';
import { UilFacebookF ,UilLinkedinAlt,UilCheck ,UilGithub} from '@iconscout/react-unicons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class About extends Component {
    state = {  } 
    render() { 
        return (<>
              {/* ======= About Section ======= */}
              <section id="about" className="about mt-5 mb-5">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    {/* <h2>About Us</h2> */}
                    <p style={{margin:'50px auto'}}>
                      Learn More <span>About Us</span>
                    </p>
                  </div>
                  <div className="row gy-4">
                    <div
                      className="col-lg-6 position-relative about-img"
                      style={{ backgroundImage: "url(./img/about.jpg)", height: '638px' }}
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      <div className="call-us position-absolute">
                        <h4>Book a plan</h4>
                        <p>+962 777 777 777</p>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 d-flex align-items-end"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <div className="content ps-0 ps-lg-3" style={{marginTop:'0', paddingTop:'0'}}>
                        <p className=" h4" style={{marginTop:'0', paddingTop:'0'}}>
                        The idea of our restaurant was launched from the need of working individuals to eat healthy meals, and in proportion to their daily need of calories, we offer the best types of food at acceptable prices, and the consumers can choose the food plan that suits them.

                        We have:
                        </p>
                        <ul className='mt-5'>
                          <li>
                            <UilCheck className="bi bi-check2-all" /> Calorie Tracker
                          </li>
                          <li>
                            <UilCheck className="bi bi-check2-all" /> Different selections of Organic food
                          </li>
                          <li>
                            <UilCheck className="bi bi-check2-all" /> Available 24/7
                          </li>
                        </ul>
                        <div className="position-relative mt-5">
                          <img
                            src="./img/about-2.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          {/* <a
                            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                            className="glightbox play-btn" target={'_Blank'}
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End About Section */}


               {/* ======= team Section ======= */}
               <section id="chefs" className="chefs section-bg">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <p style={{marginTop: '50px'}}>
                      Our <span>team</span> 
                    </p>
                  </div>

                  <div className="row gy-4">
                    <div
                      className="col-lg-3 col-md-3 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="chef-member" style={{height: '400px'}}>
                        <div className="member-img" >
                          <img
                            src="./img/team/raghad.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="social">
                            <a href="https://github.com/RaghadKarasneh" target={'_blank'}>
                              <UilGithub className="bi bi-facebook" />
                            </a>
                            <a href="https://www.linkedin.com/in/raghad-alkarasneh/" target={'_blank'}>
                              <UilLinkedinAlt className="bi bi-linkedin" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info">
                          <h4>Raghad Karasneh</h4>
                          <span>Full-stack web developer</span>
                        </div>
                      </div>
                    </div>
                    {/* End Chefs Member */}
                    <div
                      className="col-lg-3 col-md-3 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="chef-member" style={{height: '400px'}}>
                        <div className="member-img">
                          <img
                            src="./img/team/anas.png"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="social">
                            <a href="https://github.com/10-anasAllawafeh" target={'_blank'}>
                              <UilGithub className="bi bi-facebook" />
                            </a>
                            <a href="https://www.linkedin.com/in/anas-al-lawafeh-b05954232/" target={'_blank'}>
                              <UilLinkedinAlt className="bi bi-linkedin" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info">
                          <h4>Anas Allawafeh</h4>
                          <span>Full-stack web developer</span>
                        </div>
                      </div>
                    </div>
                    {/* End Chefs Member */}
                    <div
                      className="col-lg-3 col-md-3 d-flex align-items-stretch"
                      data-aos="fade-up" 
                      data-aos-delay={200}
                    >
                      <div className="chef-member" style={{height: '400px'}}>
                        <div className="member-img" style={{height:'72%'}}>
                          <img
                            src="./img/team/dyar.jpg"
                            className="img-fluid"
                            alt="" 
                          />
                          <div className="social">
                            <a href="https://github.com/Dyarhunaity" target={'_blank'}>
                              <UilGithub className="bi bi-facebook" />
                            </a>
                            <a href="https://www.linkedin.com/in/dyar-hunaity-90a540236/" target={'_blank'}>
                              <UilLinkedinAlt className="bi bi-linkedin" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info" style={{marginTop: '25px'}}>
                          <h4>Dyar hunaity</h4>
                          <span>Product Owner</span>
                        </div>
                      </div>
                    </div>
                    {/* End Chefs Member */}
                    <div
                      className="col-lg-3 col-md-3 d-flex align-items-stretch"
                      data-aos="fade-up" 
                      data-aos-delay={300}
                    >
                      <div className="chef-member" style={{height: '400px'}}>
                        <div className="member-img">
                          <img
                            src="./img/team/taebah.jpg"
                            className="img-fluid"
                            alt=""
                          />
                          <div className="social">
                            <a href="https://github.com/taebah-alshlouh" target={'_blank'}>
                              <UilGithub className="bi bi-facebook mt-2" />
                            </a>
                            <a href="https://www.linkedin.com/in/taebah-shlouh-2b2401146/" target={'_blank'}>
                              <UilLinkedinAlt className="bi bi-linkedin mt-2" />
                            </a>
                          </div>
                        </div>
                        <div className="member-info" >
                          <h4> Taebah Bassam</h4>
                          <span>Scrum Master</span>
                        </div>
                      </div>
                    </div>
                    {/* End Chefs Member */}
                  </div>
                </div>
              </section>
              {/* End Chefs Section */}


</>
)
}
}

export default About;
