import React from 'react';
import { useSelector } from 'react-redux';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

export default function AnalyticsPage() {
  const { items } = useSelector((state) => state.events);

  // Агрегація даних (рахуємо події по датах)
  const chartData = items.reduce((acc, event) => {
    const date = event.date;
    const existing = acc.find(d => d.date === date);
    if (existing) { existing.count += 1; } 
    else { acc.push({ date, count: 1 }); }
    return acc;
  }, []).sort((a, b) => new Date(a.date) - new Date(b.date));

  // Розрахунки для карток
  const totalEvents = items.length;
  const uniqueDates = chartData.length;
  const average = totalEvents > 0 ? (totalEvents / (uniqueDates || 1)).toFixed(1) : 0;

  return (
    <div className="container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
        <Link to="/" style={{ color: '#4caf50', textDecoration: 'none', fontWeight: 'bold' }}>← Retour</Link>
        <h1 style={{ margin: 0 }}>Statistiques</h1>
      </div>
      
      {/* 📈 ГРАФІК */}
      <div style={{ 
        backgroundColor: '#1a1a1a', 
        padding: '25px', 
        borderRadius: '15px', 
        height: '350px', 
        border: '1px solid #333',
        marginBottom: '30px'
      }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis dataKey="date" stroke="#888" tick={{fontSize: 12}} />
            <YAxis stroke="#888" tick={{fontSize: 12}} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#222', border: '1px solid #444', borderRadius: '8px', color: '#fff' }} 
              itemStyle={{ color: '#4caf50' }}
            />
            <Area type="monotone" dataKey="count" stroke="#4caf50" fill="#4caf50" fillOpacity={0.2} strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 📊 ТІ САМІ КАРТКИ (Total, Villes, Moyenne) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        <div className="card" style={{ textAlign: 'center', padding: '30px', background: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
          <h4 style={{ color: '#888', margin: 0, fontSize: '16px', textTransform: 'uppercase' }}>Total Événements</h4>
          <h2 style={{ color: '#4caf50', fontSize: '42px', margin: '10px 0' }}>{totalEvents}</h2>
        </div>
        
        <div className="card" style={{ textAlign: 'center', padding: '30px', background: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
          <h4 style={{ color: '#888', margin: 0, fontSize: '16px', textTransform: 'uppercase' }}>Villes Actives</h4>
          <h2 style={{ color: '#4caf50', fontSize: '42px', margin: '10px 0' }}>3</h2>
        </div>

        <div className="card" style={{ textAlign: 'center', padding: '30px', background: '#1a1a1a', borderRadius: '15px', border: '1px solid #333' }}>
          <h4 style={{ color: '#888', margin: 0, fontSize: '16px', textTransform: 'uppercase' }}>Moyenne / Jour</h4>
          <h2 style={{ color: '#4caf50', fontSize: '42px', margin: '10px 0' }}>{average}</h2>
        </div>
      </div>
    </div>
  );
}