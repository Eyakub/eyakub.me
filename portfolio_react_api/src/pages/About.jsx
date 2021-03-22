import React from 'react';
import ProfileSection from '../components/Avator/Profile';
import DetailSection from '../components/Avator/Details';

const About = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4">
                <ProfileSection />
            </div>
            <div className="col-span-8">
                <DetailSection />
            </div>
        </div>
    )
}

export default About;