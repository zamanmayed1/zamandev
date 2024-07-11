import React, { useState, useEffect } from 'react';

// Modal component for showing success message
function Modal({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Adjust the timeout as needed for the animation duration

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md max-w-sm">
        <p className="text-green-500 font-bold">{message}</p>
      </div>
    </div>
  );
}

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between animate-fade-in">
      <div className="flex-grow flex items-center justify-center">
        <div className={`p-2 w-full max-w-lg ${isSubmitted ? 'fold-animation' : ''}`}>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <label className="block text-green-500 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 focus:outline-none"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-green-500 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-green-500 bg-white border border-gray-300 focus:outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label className="block text-green-500 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2  bg-white border border-gray-300 focus:outline-none"
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <div>
              <button
                className="w-full bg-green-500 text-white py-2 px-4 font-bold hover:bg-blue-700 focus:outline-none"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Render the modal if isSubmitted is true */}
      {isSubmitted && (
        <Modal message="Thanks for your message. I will reply back soon!" onClose={closeModal} />
      )}
    </div>
  );
}

export default Contact;
