import React, { useState, useEffect } from 'react';
import MedicationsForm from '../components/MedicationsForm';

type Metric = {
  systolic: number;
  diastolic: number;
  created_at: string;
};

type Medication = {
  name: string;
  dosage: string;
  frequency: string;
  taken_at: string;
  created_at: string;
};

function Dashboard() {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [message, setMessage] = useState('');
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [medications, setMedications] = useState<Medication[]>([]);

  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = '/';
    return null;
  }

  const fetchMetrics = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/metrics`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setMetrics(data);
      } else {
        console.error('Error fetching metrics:', data.message);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const fetchMedications = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/medications`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setMedications(data);
      } else {
        console.error('Error fetching medications:', data.message);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };  

  useEffect(() => {
    fetchMetrics();
    fetchMedications();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/metrics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ systolic, diastolic }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Metric submitted!');
        setSystolic('');
        setDiastolic('');
        fetchMetrics();
      } else {
        setMessage(data.message || 'Error submitting metric');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setMessage('Something went wrong.');
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/'; 
        }}
        style={{ marginBottom: '1rem' }}
      >
        Logout
      </button>

      <h1>Dashboard</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Systolic:
          <input
            type="number"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label>
          Diastolic:
          <input
            type="number"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Submit Metric</button>
      </form>

      {message && <p>{message}</p>}

      <hr />

      <h2>Submitted Metrics</h2>
      <ul>
        {metrics.map((metric: any, index: number) => (
          <li key={index}>
            Systolic: {metric.systolic}, Diastolic: {metric.diastolic}
            <br />
            <small>Submitted: {new Date(metric.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
      <hr style={{ margin: '2rem 0' }} />

      <hr />

      <h2>Log Medication</h2>
      <MedicationsForm onSuccess={fetchMedications} />

      <h2>Logged Medications</h2>
      <ul>
        {medications.map((med: any, index: number) => (
          <li key={index}>
            {med.name} ({med.dosage}, {med.frequency})
            <br />
            <small>Taken at: {new Date(med.taken_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>


      <h2>Reminders</h2>
      <p>
        Coming soon: You’ll be able to log medications, set check-in alerts, and receive reminders
        about upcoming doses or health checks.
      </p>
    </div>
  );
}

export default Dashboard;
