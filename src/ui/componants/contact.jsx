import React from 'react';

export const Contact = () => {
  
 
  return (
    <div>
      <section id="contact" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Me</h2>
          <form 
            className="max-w-3xl mx-auto bg-gray-900 p-8 shadow-lg rounded-lg"
            
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" 
              rows="4"
            />
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/contactprathamesh-patil/" className="text-blue-500 hover:text-blue-600">LinkedIn</a>
            <a href="https://github.com/Prathamesh4001?tab=repositories" className="text-blue-500 hover:text-blue-600">GitHub</a>
            <a href="https://x.com/?lang=en" className="text-blue-500 hover:text-blue-600">Twitter</a>
          </div>
        </div>
      </section>
    </div>
  );
};
