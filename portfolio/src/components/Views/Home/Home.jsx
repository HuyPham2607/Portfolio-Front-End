import React, { useEffect, useState } from 'react';
import Carousel from '../../Carousel/Carousel';
import Navbar from '../../Layouts/Navbar/Navbar';
import BackgroundPlayer from '../Background/BackgroundPlayer';
import './Home.css';
import Loading from '../Loader/Loader';
import About from '../../About/About';
import Experience from '../../Experience/Experience';
import Footer from '../../Layouts/Footer/Footer';
import Contact from '../../Contact/Contact';
import Building from '../../Building/Building';

const Home = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    });

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <Navbar />
                    <BackgroundPlayer />
                    <About />
                    <Experience />
                    <Building />
                    <Contact />
                    <Carousel />
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Home;
