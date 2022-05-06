import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footerreused from './reusedFooter';

class Footer extends Component {
    externalLink(link) {
        window.location.href = link;
    }
    render() {
        return (
            <>
                <footer class="main-footer">
                    <div class="auto-container">

                        <div class="widgets-section">
                            <div class="row clearfix">


                                <div class="column col-lg-4">
                                    <div class="footer-widget logo-widget">
                                        <div class="widget-content">
                                            <div class="footer-logo">
                                                <Link to="index.html"><img class="" src={require('../../assets/images/footer-logo.png')} alt="" /></Link>
                                            </div>
                                            <div class="text">Clear Fit software consulting can help your business over the finish line. Any software project or cloud architecture we can handle it with ease.</div>
                                            <ul class="social-links clearfix">
                                                <li><Link onClick={() => this.externalLink('https://www.facebook.com/Alien4Hire')} to={''}><span class="fab fa-facebook-f"></span></Link></li>
                                                <li><Link onClick={() => this.externalLink('https://twitter.com/ClearFitLLC')} to={''}><span class="fab fa-twitter"></span></Link></li>
                                                <li><Link onClick={() => this.externalLink('https://www.linkedin.com/in/jason-maynard-54b538ba/')} to={''}><span class="fab fa-linkedin"></span></Link></li>
                                                <li><Link onClick={() => this.externalLink('https://www.instagram.com/alien4hire12/')} to={''}><span class="fab fa-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <Footerreused></Footerreused>
                            </div>

                        </div>
                    </div>

                    <div class="auto-container">
                        <div class="footer-bottom">
                            <div class="copyright">Copyright By<Link to={'/#'}> ClearFit</Link> - 2021</div>
                        </div>
                    </div>
                </footer>


            </>
        );
    }
}

export default Footer;