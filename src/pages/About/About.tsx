import React from "react";

const About = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">About Us</h2>
        <div className="mt-4 text-gray-600 text-lg">
          <p>
            We are a passionate team dedicated to providing the best possible service to our clients. 
            We bring creative, technical, and strategic expertise to every project we undertake.
          </p>
          <p className="mt-4">
            Our mission is to make meaningful impacts in our field and to be at the forefront of innovation. 
            With years of experience under our belt, we're proud to have a track record of satisfied clients and successful projects.
          </p>
        </div>
        <div className="mt-8">
          <img 
            src='https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano-1024x663.jpg'
            alt="About Us" 
            className="w-full object-cover object-center rounded-lg shadow-md h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default About;