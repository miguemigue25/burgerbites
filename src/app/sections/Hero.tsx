'use client';

// // import AOS
// import AOS from 'aos';

import React, { useEffect } from 'react';
import Glightbox from 'glightbox';
import './Hero.css';
import HeroButton from '../components/HeroButton';


export default function Hero() {
    useEffect(() => {
        new Glightbox({
            selector: '.glightbox',
        });
    }, []);

    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000,
    //         easing: 'ease-in-out',
    //         once: false,
    //         mirror: false,
    //     });
    // }, []);

    return (
        <section id="hero" className="d-flex align-items-center">
            <div
                className="container position-relative text-center text-lg-start"
                data-aos="zoom-in"
                data-aos-delay="100"
            >
                <div className="row">
                    <div className="col-lg-8">
                        <h1>
                            Welcome to Domino <span>Restaurant</span>
                        </h1>
                        <h2>Creating delicious food for more than 18 years!</h2>

                        <div className="btns">
                            <HeroButton name="our menu" target="menu" />
                            <HeroButton name="book a table" target="book-a-table" />
                        </div>
                    </div>
                    <div
                        className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <a
                            href="https://www.youtube.com/watch?v=F3zw1Gvn4Mk"
                            className="glightbox play-btn"
                        ></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
