import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 p-6 shadow-xl rounded-xl bg-grey">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Do you have any questions? <br /> contact us!
      </h2>
      <form id="contactForm">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message:</label>
          <textarea 
            id="message" 
            name="message"
            maxLength={500} 
            required 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32 resize-none">
          </textarea>
        </div>

        <div className="text-right">
          <button 
            type="submit" 
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;