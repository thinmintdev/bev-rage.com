'use client';

import { useState } from 'react';

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="form-title">Request Information</h3>

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
          />
        </div>

        <div className="form-group">
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Event Type</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Event</option>
            <option value="birthday">Birthday Party</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
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
        />
      </div>

      <button type="submit" className="form-submit">
        Submit Request →
      </button>
    </form>
  );
}
