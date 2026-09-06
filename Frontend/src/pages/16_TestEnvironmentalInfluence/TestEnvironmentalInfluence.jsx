import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const ENV_OBS = [
  { condition: 'Reference (20°C, 50% RH)', temp: 20.0, humidity: 50, indication: '2000.01' },
  { condition: 'Low Temperature (10°C)', temp: 10.0, humidity: 50, indication: '2000.03' },
  { condition: 'High Temperature (35°C)', temp: 35.0, humidity: 50, indication: '1999.98' },
  { condition: 'High Humidity (85% RH)', temp: 20.0, humidity: 85, indication: '2000.04' },
];
const REF_LOAD = 2000;
const MPE_ENV = 0.1;

export default function TestEnvironmentalInfluence() {
  const navigate = useNavigate();
  const [obs, setObs] = useState(ENV_OBS);

  const refIndication = parseFloat(obs[0].indication);
  const results = obs.map((o, i) => {
    const diff = i === 0 ? 0 : parseFloat(o.indication) - refIndication;
    const pass = Math.abs(diff) <= MPE_ENV;
    return { ...o, diff, pass };
  });
  const allPass = results.slice(1).every(r => r.pass);

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/tests/zero')}>Previous</Btn>
      <Btn variant="teal" icon="verified" onClick={() => navigate('/compliance')}>Submit for Compliance Review</Btn>
    </>
  );

  return (
    <AppShell title="Environmental Influence Test" subtitle="OIML R 76 §4.1 — Effect of temperature and humidity variations" activePath="/tests/select-instrument" actions={actions}>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
        {[
          { label: 'Reference Load', value: `${REF_LOAD} g`, icon: 'fitness_center', accent: VS.primary },
          { label: 'Conditions Tested', value: obs.length, icon: 'thermostat', accent: VS.teal },
          { label: 'Max Deviation', value: `${Math.max(...results.slice(1).map(r => Math.abs(r.diff))).toFixed(3)} g`, icon: 'height', accent: allPass ? VS.success : VS.error },
          { label: 'Overall Result', value: allPass ? 'PASS' : 'FAIL', icon: allPass ? 'check_circle' : 'cancel', accent: allPass ? VS.success : VS.error },
        ].map(k => (
          <Card key={k.label} style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: k.accent }}>{k.icon}</span>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{k.label}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: k.accent }}>{k.value}</div>
            </div>
          </Card>
        ))}
      </div>

      <Card style={{ overflow: 'hidden', marginBottom: 20 }}>
        <div style={{ padding: '14px 20px', borderBottom: `1px solid ${VS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, margin: 0 }}>Environmental Observations</h3>
          <Badge color={allPass ? 'success' : 'error'}><StatusDot color={allPass ? 'success' : 'error'} /> {allPass ? 'PASS' : 'FAIL'}</Badge>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: `1px solid ${VS.border}` }}>
              {['Condition', 'Temp (°C)', 'Humidity (%RH)', 'Applied Load (g)', 'Indication (g)', 'Δ vs. Reference (g)', 'Limit (g)', 'Result'].map(h => (
                <th key={h} style={{ padding: '9px 14px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${VS.borderLight}`, background: i === 0 ? VS.page : (r.pass ? 'transparent' : VS.errorLight) }}>
                <td style={{ padding: '11px 14px', fontSize: 13, fontWeight: i === 0 ? 700 : 500, color: VS.textMain }}>{r.condition}</td>
                <td style={{ padding: '11px 14px', fontSize: 13.5, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{r.temp}</td>
                <td style={{ padding: '11px 14px', fontSize: 13.5, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{r.humidity}</td>
                <td style={{ padding: '11px 14px', fontSize: 13.5, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{REF_LOAD}</td>
                <td style={{ padding: '11px 14px' }}>
                  <input type="number" step="0.01" value={r.indication}
                    onChange={e => setObs(o => o.map((oo, ii) => ii === i ? { ...oo, indication: e.target.value } : oo))}
                    style={{ width: 100, padding: '4px 8px', border: `1px solid ${VS.border}`, borderRadius: 5, fontSize: 13, fontFamily: 'inherit', outline: 'none' }} />
                </td>
                <td style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 700, color: i === 0 ? VS.textMuted : (r.pass ? VS.success : VS.error), fontVariantNumeric: 'tabular-nums' }}>
                  {i === 0 ? '—' : (r.diff >= 0 ? '+' : '') + r.diff.toFixed(3)}
                </td>
                <td style={{ padding: '11px 14px', fontSize: 13.5, color: VS.textMuted }}>±{MPE_ENV}</td>
                <td style={{ padding: '11px 14px' }}>
                  {i === 0 ? <Badge color="primary">Reference</Badge> : <Badge color={r.pass ? 'success' : 'error'}>{r.pass ? 'PASS' : 'FAIL'}</Badge>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: 13, fontWeight: 600, color: VS.textMain }}>All tests complete. </span>
          <span style={{ fontSize: 13, color: VS.textMuted }}>Ready to submit for compliance assessment.</span>
        </div>
        <Btn variant="teal" icon="verified" onClick={() => navigate('/compliance')}>Proceed to Compliance Assessment</Btn>
      </Card>
    </AppShell>
  );
}
