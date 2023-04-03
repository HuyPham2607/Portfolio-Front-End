import React, { useEffect } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    useEffect(() => {
        const footerleft = document.getElementById('options-left');
        const footerright = document.getElementById('options-right');

        footerleft.style.opacity = '0';
        footerright.style.opacity = '0';

        setTimeout(() => {
            footerleft.style.opacity = '1';
            footerleft.style.animation = 'footer 1s ease-out';
        }, 2500);
        setTimeout(() => {
            footerright.style.opacity = '1';
            footerright.style.animation = 'footer 1s ease-out';
        }, 3000);
    });

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <footer>
            <div className="options-left" id="options-left">
                <ul>
                    <li>
                        <span onClick={() => openInNewTab('https://www.facebook.com/PNG.Huy/')}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                    </li>
                    <li>
                        <span onClick={() => openInNewTab('https://www.instagram.com/png_huy/')}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </li>
                    <li>
                        <span onClick={() => openInNewTab('https://github.com/HuyPham2607')}>
                            <FontAwesomeIcon icon={faGithub} />
                        </span>
                    </li>

                    <li>
                        <span onClick={() => openInNewTab('https://www.linkedin.com/in/huy-pham-822b2b24b/')}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </span>
                    </li>
                </ul>
            </div>
            <div className="options-right" id="options-right">
                <ul>
                    <li onClick={() => openInNewTab('mailto:pnghuy2000@gmail.com')}>pnghuy2000@gmail.com</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
