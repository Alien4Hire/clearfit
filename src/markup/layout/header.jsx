import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'
import Menu from './menu'

const options = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Bengli', label: 'Bengli' }
]


class Header extends Component {

    state = {
        scrolled: false
    };

    componentDidMount() {
        var btn = document.querySelector('.mobile-nav-toggler');
        var closeBtn = document.querySelector('.close-btn');
        var body = document.getElementsByTagName('body')[0];

        function addFunc() {
            return body.classList.add("mobile-menu-visible");
        }
        function closeFunc() {
            return body.classList.remove("mobile-menu-visible");
        }

        btn.addEventListener('click', addFunc);
        closeBtn.addEventListener('click', closeFunc);

        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = event => {
        if (window.scrollY > 100) {
            this.setState({ scrolled: true });
        }
        else {
            this.setState({ scrolled: false });
        }
    };

    externalLink(link) {
        window.location.href = link;
    }

    render() {
        const { scrolled } = this.state;
        return (
            <>
                <header class={scrolled ? "main-header fixed-header" : "main-header"}>
                    <div class="header-top">
                        <div class="auto-container">
                            <div class="inner">
                                <div class="top-left">


                                    <div class="logo-box">
                                        <div class="logo"><Link to={'/#'}><img src={require('../../assets/images/header-logo.png')} alt="" /></Link></div>
                                    </div>
                                </div>

                                <div class="top-middile">
                                    <div class="language">
                                        <span>Language:</span>
                                        <form action="#" class="language-switcher">
                                            <Select options={options} />
                                        </form>
                                    </div>
                                    <div class="contact-info">
                                        <div class="single-info">
                                            <div class="icon-box"><i class="flaticon-call-1"></i></div>
                                            <div class="text">Phone Number</div>

                                            <h4><Link to={'/tel:8333664285"'}>(833) 366-4285</Link></h4>
                                        </div>
                                        <div class="single-info">
                                            <div class="icon-box"><i class="flaticon-email-4"></i></div>
                                            <div class="text">Email Address</div>
                                            <h4><Link to={'mailto:info@webmail.com'}>info@clearfitllc.com</Link></h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="top-right">
                                    <Link to={'/contact'} class="theme-btn btn-style-two"><span class="btn-title">Get A Quote</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="header-upper">
                        <div class="auto-container">
                            <div class="inner-container">


                                <div class="nav-outer clearfix">

                                    <div class="mobile-nav-toggler"><span class="icon fal fa-bars"></span></div>

                                    <nav class="main-menu navbar-expand-md navbar-light">
                                        <Menu />
                                    </nav>



                                    <ul class="social-links clearfix">
                                        <li onClick={() => this.externalLink('https://www.facebook.com/Alien4Hire')}><Link to={''}><span class="fab fa-facebook-f"></span></Link></li>
                                        <li onClick={() => this.externalLink('https://twitter.com/ClearFitLLC')}><Link to={''}><span class="fab fa-twitter"></span></Link></li>
                                        <li onClick={() => this.externalLink('https://www.linkedin.com/in/jason-maynard-54b538ba/')}><Link to={''}><span class="fab fa-linkedin-in"></span></Link></li>
                                        <li onClick={() => this.externalLink('https://www.instagram.com/alien4hire12/')}><Link to={''}><span class="fab fa-instagram"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class={scrolled ? "sticky-header animated slideInDown" : "sticky-header"}>
                        <div class="auto-container clearfix">

                            <div class="logo pull-left">
                                <Link to={'/#'} title=""><img src={require('../../assets/images/footer-logo.png')} alt="" title="" /></Link>
                            </div>

                            <div class="pull-right">
                                <nav class="main-menu clearfix">
                                    <Menu />
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div class="mobile-menu">
                        <div class="menu-backdrop mobile-menu"></div>
                        <div class="close-btn"><span class="icon flaticon-cancel"></span></div>

                        <nav class="menu-box">
                            <div class="nav-logo"><Link to={'/#'}><img src="assets/images/logo.png" alt="" title="" /></Link></div>
                            <div class="menu-outer">
                                <Menu />
                            </div>
                            <div class="social-links">
                                <ul class="clearfix">
                                    <li onClick={() => this.externalLink('https://twitter.com/ClearFitLLC')}><Link to={''}><span class="fab fa-twitter"></span></Link></li>
                                    <li onClick={() => this.externalLink('https://www.facebook.com/Alien4Hire')}><Link to={''}><span class="fab fa-facebook-square"></span></Link></li>
                                    <li onClick={() => this.externalLink('https://www.linkedin.com/in/jason-maynard-54b538ba/')}><Link to={''}><span class="fab fa-linkedin"></span></Link></li>
                                    <li onClick={() => this.externalLink('https://www.instagram.com/alien4hire12/')}><Link to={''}><span class="fab fa-instagram"></span></Link></li>
                                    <li onClick={() => this.externalLink('https://www.youtube.com/channel/UCthx_5MwrqQjd6_THnHPNzw')}><Link to={''}><span class="fab fa-youtube"></span></Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                </header>

            </>
        )
    }
}
export default Header;


