import React from 'react';
import { useNavigate } from 'react-router-dom'; // Jeśli używasz react-router v5
// import { useNavigate } from 'react-router-dom'; // Dla react-router v6 // Załóżmy, że masz taki obrazek
import './Contact.scss';

const ContactCTA = () => {
  const navigate = useNavigate();
  // const navigate = useNavigate(); // Dla react-router v6

  const handleNavigate = () => {
    navigate('/contact'); // Dla react-router v5
    // navigate('/kontakt'); // Dla react-router v6
  };

  return (
    <div 
      className="backgroundImage relative text-white text-start p-10"
    >
      <div className='text-container'>
        <h2 className="text-6xl font-bold mb-4">Masz pytania?</h2>
        <p className="mb-8 text-2xl ">Chcesz dowiedzieć się więcej?</p>
        <button
          onClick={handleNavigate}
          className="contact-button text-white font-bold py-2 px-4 rounded"
        >
          Skontaktuj się
        </button>
      </div>
    </div>
  );
};

export default ContactCTA;