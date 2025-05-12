import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('/api/sendEmail', { email, message });
      setSuccess('Email sent successfully!');
      setEmail('');
      setMessage('');
    } catch (error) {
      setError('Error sending email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <h2 className="text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h2>
          <p className="leading-relaxed mb-5">We'd love to hear from you! Please reach out with any questions or feedback.</p>
          {success && <p className="text-green-500 mb-4">{success}</p>}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows={4}
              required
            />
            <button
              type="submit"
              className={`w-full px-6 py-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
