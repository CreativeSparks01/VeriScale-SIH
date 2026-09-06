import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const TARE_LOADS = [500, 1000, 2000, 3500, 5000];
const MPE = 0.05;
const initObs = TARE_LOADS.map(l => ({
  tareLoad: l,
  preIndication: (l + (Math.random() * 0.03 - 0.015)).toFixed(2),
  testLoad: 1000,
  postIndication: (1000 + (Math.random() * 0.04 - 0.02)).toFixed(2),
}));

export default function TestTare() {
  const navigate = useNavigate();
  const [obs, setObs] = useState(initObs);

  const results = obs.map(o => {
    const tareError = parseFloat(o.preIndication) - o.tareLoad;
    const netError = parseFloat(o.postIndication) - o.testLoad;
    const pass = Math.abs(tareError) <= MPE && Math.abs(netError) <= MPE;
    return { ...o, tareError, netError, pass };
  });
  const allPass = results.every(r => r.pass);

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/tests/repeatability')}>Previous</Btn>
      <Btn variant="primary" icon="arrow_forward" onClick={() => navigate('/tests/zero')}>Next Test</Btn>
    </>
  );

  return (
    <AppShell title="Tare Device Test" subtitle="OIML R 76 §3.8 — Tare performance across load range" activePath="/tests/select-instrument" actions={actions}>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
        {[
          { label: 'Tare Positions', value: TARE_LOADS.length, icon: 'exposure_zero', accent: VS.primary },
          { label: 'Test Load', value: '1000 g', icon: 'fitness_center', accent: VS.teal },
          { label: 'MPE (±)', value: `${MPE} g`, icon: 'timeline', accent: '#7C3AED' },
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

      <Card style={{ overflow: 'hidden' }}>
        <div style={{ padding: '14px 20px', borderBottom: `1px solid ${VS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, margin: 0 }}>Tare Observations</h3>
          <Badge color={allPass ? 'success' : 'error'}><StatusDot color={allPass ? 'success' : 'error'} /> {allPass ? 'ALL PASS' : 'FAIL'}</Badge>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: `1px solid ${VS.border}` }}>
              {['Tare Load (g)', 'Pre-Tare Indication (g)', 'Tare Error (g)', 'Test Load (g)', 'Post-Tare Indication (g)', 'Net Error (g)', 'Result'].map(h => (
                <th key={h} style={{ padding: '9px 14px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${VS.borderLight}`, background: r.pass ? 'transparent' : VS.errorLight }}>
                <td style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 600, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{r.tareLoad}</td>
                <td style={{ padding: '11px 14px' }}>
                  <input type="number" step="0.01" value={r.preIndication}
                    onChange={e => setObs(o => o.map((oo, ii) => ii === i ? { ...oo, preIndication: e.target.value } : oo))}
                    style={{ width: 100, padding: '4px 8px', border: `1px solid ${VS.border}`, borderRadius: 5, fontSize: 13, fontFamily: 'inherit', outline: 'none' }} />
                </td>
                <td style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 700, color: Math.abs(r.tareError) <= MPE ? VS.success : VS.error, fontVariantNumeric: 'tabular-nums' }}>
                  {r.tareError >= 0 ? '+' : ''}{r.tareError.toFixed(3)}
                </td>
                <td style={{ padding: '11px 14px', fontSize: 13.5, color: VS.textMain }}>{r.testLoad}</td>
                <td style={{ padding: '11px 14px' }}>
                  <input type="number" step="0.01" value={r.postIndication}
                    onChange={e => setObs(o => o.map((oo, ii) => ii === i ? { ...oo, postIndication: e.target.value } : oo))}
                    style={{ width: 100, padding: '4px 8px', border: `1px solid ${VS.border}`, borderRadius: 5, fontSize: 13, fontFamily: 'inherit', outline: 'none' }} />
                </td>
                <td style={{ padding: '11px 14px', fontSize: 13.5, fontWeight: 700, color: Math.abs(r.netError) <= MPE ? VS.success : VS.error, fontVariantNumeric: 'tabular-nums' }}>
                  {r.netError >= 0 ? '+' : ''}{r.netError.toFixed(3)}
                </td>
                <td style={{ padding: '11px 14px' }}>
                  <Badge color={r.pass ? 'success' : 'error'}>{r.pass ? 'PASS' : 'FAIL'}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
