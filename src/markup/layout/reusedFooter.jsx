import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footerreused extends Component {
    render() {
        return (
            <>
            
                                <div class="column col-lg-4">
                                    <div class="footer-widget links-widget">
                                        <div class="widget-content">
                                            <h3>Links</h3>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <ul>
                                                        <li><Link to={'/'}>Home</Link></li>
                                                        <li><Link to={'/about'}>About</Link></li>
                                                        <li><Link to={'/services-1'}>Services</Link></li>
                                                        <li><Link to={'/portfolio-1'}>Portfolio</Link></li>
                                                        <li><Link to={'/contact'}>Pricing</Link></li>
                                                        <li><Link to={'/contact'}>Contact</Link></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-6">
                                                    <ul>
                                                        <li><Link to={'/blog-standard'}>News</Link></li>
                                                        <li><Link to={'/about'}>Technologies</Link></li>
                                                        <li><Link to={'/services-1'}>Case Study</Link></li>
                                                        <li><Link to={'/faq'}>Terms</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="column col-lg-4">
                                    <div class="footer-widget instagram-widget">
                                        <h3>Photo Showcase</h3>
                                        <div class="inner-box">
                                            <div class="wrapper-box">
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-1.jpg')} alt="" />
                                                    
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-1.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-2.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-2.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-3.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-3.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-4.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-4.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-5.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-5.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-6.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-6.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-7.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-7.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-8.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-8.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-9.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-9.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



            </>
        );
    }
}

export default Footerreused;