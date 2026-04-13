import React from 'react';
import { useSelector } from 'react-redux';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

export default function AnalyticsPage() {
  const { items } = useSelector((state) => state.events);

  const chartData = items.reduce((acc, event) => {
    const date = event.date;
    const existing = acc.find(d => d.date === date);
    if (existing) { existing.count += 1; } 
    else { acc.push({ date, count: 1 }); }
    return acc;
  }, []).sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link to="/" style={{ color: '#4caf50', textDecoration: 'none' }}>← Retour</Link>
        <h1>Statistiques</h1>
      </div>
      
      <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '15px', marginTop: '20px', height: '400px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="date" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none', borderRadius: '8px' }} />
            <Area type="monotone" dataKey="count" stroke="#4caf50" fill="#4caf50" fillOpacity={0.2} strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}