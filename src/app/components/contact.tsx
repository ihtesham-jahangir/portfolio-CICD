import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [validationErrors, setValidationErrors] = useState<{ email?: string; message?: string }>({});

  // Email validation regex
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    setValidationErrors({});

    // Client-side validation
    const errors: { email?: string; message?: string } = {};
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!message.trim()) {
      errors.message = 'Message is required';
    } else if (message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/sendEmail', { 
        email: email.trim(),
        message: message.trim()
      });
      
      setSuccess('Message sent successfully!');
      setEmail('');
      setMessage('');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccess('');
      }, 5000);
      
    } catch (err) {
      const errorObj = err as any;
      const errorMessage = errorObj.response?.data?.message ||
        (errorObj.message === 'Network Error'
          ? 'Failed to connect to server'
          : 'Error sending message');
      setError(errorMessage);
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
          
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md animate-fade-in-down">
              {success}
            </div>
          )}
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`w-full px-4 py-2 border rounded-md ${
                  validationErrors.email 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                }`}
                aria-invalid={validationErrors.email ? 'true' : 'false'}
                aria-describedby={validationErrors.email ? 'email-error' : undefined}
              />
              {validationErrors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {validationErrors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you today?"
                rows={5}
                className={`w-full px-4 py-2 border rounded-md ${
                  validationErrors.message 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                }`}
                aria-invalid={validationErrors.message ? 'true' : 'false'}
                aria-describedby={validationErrors.message ? 'message-error' : undefined}
              />
              {validationErrors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600">
                  {validationErrors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full px-6 py-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;