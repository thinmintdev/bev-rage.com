'use client';

import { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    headCount: '',
    eventType: '',
    additionalInfo: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        date: '',
        time: '',
        headCount: '',
        eventType: '',
        additionalInfo: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form success-message">
        <h3 className="form-title">Thank You!</h3>
        <p className="font-sans text-base text-brown-dark text-center">
          We&apos;ve received your inquiry and will be in touch soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="font-sans text-base md:text-lg bg-transparent text-brown-light border border-brown-light rounded-full no-underline transition-all duration-300 ease-in-out cursor-pointer hover:bg-brown-light hover:text-beige hover:scale-105 mt-6"
          style={{ padding: '0.75rem 2rem' }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="form-title">Request Event Information</h3>

      {status === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errorMessage}
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-input"
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="form-input"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-input"
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="form-input"
            required
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date"
            className="form-input"
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div className="form-group">
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="Time"
            className="form-input"
            required
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <input
            type="number"
            name="headCount"
            value={formData.headCount}
            onChange={handleChange}
            placeholder="Head Count"
            className="form-input"
            min="1"
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div className="form-group">
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="form-input"
            required
            disabled={status === 'submitting'}
          >
            <option value="">Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder="Additional Information"
          className="form-textarea"
          rows={4}
          disabled={status === 'submitting'}
        />
      </div>

      <button
        type="submit"
        className="font-sans text-base text-brown-light opacity-60 bg-transparent border border-brown-light rounded-full no-underline transition-all duration-300 ease-in-out cursor-pointer hover:opacity-100 disabled:opacity-40 disabled:cursor-not-allowed mt-5"
        style={{ padding: '0.75rem 2rem' }}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
}
