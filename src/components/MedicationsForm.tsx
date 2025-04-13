import React, { useState } from 'react';

type MedicationsFormProps = {
    onSuccess: () => void;
  };  

  const MedicationsForm: React.FC<MedicationsFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    dosage: '',
    frequency: '',
    taken_at: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:3000/api/medications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit medication');
      }

      alert('Medication submitted successfully!');
      setFormData({ name: '', dosage: '', frequency: '', taken_at: '' });
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Error submitting medication:', err);
      alert('Error submitting medication');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log a Medication</h2>

      <label>
        Name:
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Dosage:
        <input name="dosage" value={formData.dosage} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Frequency:
        <input name="frequency" value={formData.frequency} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Time Taken:
        <input
          name="taken_at"
          type="datetime-local"
          value={formData.taken_at}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Submit Medication</button>
    </form>
  );
};

export default MedicationsForm;
