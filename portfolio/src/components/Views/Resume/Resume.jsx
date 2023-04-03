import React from 'react';
import resume from '../../../Image-videos/Pham-Nguyen-Gia-Huy-Front-End-Developer.pdf';
import './Resume.css';
const Resume = () => {
    return (
        <>
            <iframe className="my-pdf" src={resume} />
        </>
    );
};

export default Resume;
