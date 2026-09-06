import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const MPE = 0.5; // d = 0.01g, MPE for zero = 0.5d
const ZERO_OBS = [
  { label: 'Initial Zero (empty)', applied: 0, indication: '0.00' },
  { label: 'After Tare Reset (empty)', applied: 0, indication: '0.00' },
  { label: 'After 5min warm-up', applied: 0, indication: '0.01' },
  { label: 'After eccentric test', applied: 0, indication: '0.00' },
];

export default function TestZero() {
  const navigate = useNavigate();
  const [obs, setObs] = useState(ZERO_OBS);
  const [autoZero, setAutoZero] = useState(true);
  const [semiAuto, setSemiAuto] = useState(false);

  const results = obs.map(o => {
    const err = parseFloat(o.indication);
    const pass = Math.abs(err) <= MPE;
    return { ...o, err, pass };
  });
  const allPass = results.every(r => r.pass);

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/tests/tare')}>Previous</Btn>
      <Btn variant="primary" icon="arrow_forward" onClick={() => navigate('/tests/environmental-influence')}>Next Test</Btn>
    </>
  );

  return (
    <AppShell title="Zero Setting & Indication Test" subtitle="OIML R 76 §3.9 — Zero-setting device performance" activePath="/tests/select-instrument" actions={actions}>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
        {[
          { label: 'Zero Observations', value: obs.length, icon: 'adjust', accent: VS.primary },
          { label: 'MPE (±)', value: `${MPE} g`, icon: 'timeline', accent: VS.teal },
          { label: 'Auto Zero', value: autoZero ? 'Enabled' : 'Disabled', icon: 'auto_mode', accent: autoZero ? VS.success : VS.textMuted },
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>
        <Card style={{ overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: `1px solid ${VS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, margin: 0 }}>Zero Indication Observations</h3>
            <Badge color={allPass ? 'success' : 'error'}><StatusDot color={allPass ? 'success' : 'error'} /> {allPass ? 'ALL PASS' : 'FAIL'}</Badge>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: `1px solid ${VS.border}` }}>
                {['Condition', 'Applied Load (g)', 'Zero Indication (g)', 'Error (g)', 'MPE (g)', 'Result'].map(h => (
                  <th key={h} style={{ padding: '9px 16px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${VS.borderLight}`, background: r.pass ? 'transparent' : VS.errorLight }}>
                  <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 500, color: VS.textMain }}>{r.label}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13.5, color: VS.textMuted, fontVariantNumeric: 'tabular-nums' }}>0</td>
                  <td style={{ padding: '11px 16px' }}>
                    <input type="number" step="0.01" value={r.indication}
                      onChange={e => setObs(o => o.map((oo, ii) => ii === i ? { ...oo, indication: e.target.value } : oo))}
                      style={{ width: 90, padding: '4px 8px', border: `1px solid ${VS.border}`, borderRadius: 5, fontSize: 13, fontFamily: 'inherit', outline: 'none' }} />
                  </td>
                  <td style={{ padding: '11px 16px', fontSize: 13.5, fontWeight: 700, color: r.pass ? VS.success : VS.error, fontVariantNumeric: 'tabular-nums' }}>
                    {r.err >= 0 ? '+' : ''}{r.err.toFixed(2)}
                  </td>
                  <td style={{ padding: '11px 16px', fontSize: 13.5, color: VS.textMuted }}>±{MPE}</td>
                  <td style={{ padding: '11px 16px' }}>
                    <Badge color={r.pass ? 'success' : 'error'}>{r.pass ? 'PASS' : 'FAIL'}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>Zero Device Configuration</h3>
            {[
              { label: 'Automatic Zero-Setting (AZT)', value: autoZero, toggle: setAutoZero },
              { label: 'Semi-Automatic Zero (SAZT)', value: semiAuto, toggle: setSemiAuto },
            ].map(c => (
              <label key={c.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${VS.borderLight}`, cursor: 'pointer' }}>
                <span style={{ fontSize: 12.5, color: VS.textMain }}>{c.label}</span>
                <div
                  onClick={() => c.toggle(v => !v)}
                  style={{
                    width: 36, height: 20, borderRadius: 10, background: c.value ? VS.teal : VS.borderLight,
                    position: 'relative', cursor: 'pointer', transition: 'background 0.2s',
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 3, left: c.value ? 18 : 3, width: 14, height: 14,
                    borderRadius: '50%', background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  }} />
                </div>
              </label>
            ))}
          </Card>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>Result Summary</h3>
            {[
              { label: 'Tests Passed', value: results.filter(r => r.pass).length, color: VS.success },
              { label: 'Tests Failed', value: results.filter(r => !r.pass).length, color: VS.error },
              { label: 'Max Zero Error', value: `${Math.max(...results.map(r => Math.abs(r.err))).toFixed(2)} g` },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `1px solid ${VS.borderLight}` }}>
                <span style={{ fontSize: 12.5, color: VS.textMuted }}>{s.label}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: s.color || VS.textMain }}>{s.value}</span>
              </div>
            ))}
          </Card>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: VS.textMain, margin: '0 0 10px' }}>Reference</h3>
            <p style={{ fontSize: 12, color: VS.textMuted, lineHeight: 1.7, margin: 0 }}>
              OIML R 76 §3.9: Zero indication must not exceed ±0.5d. AZT must operate within ±0.5d range per §3.9.4.
            </p>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
