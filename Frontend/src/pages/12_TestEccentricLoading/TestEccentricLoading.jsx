import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

// Corner positions for eccentric loading
const CORNERS = ['Center', 'Position 1 (NW)', 'Position 2 (NE)', 'Position 3 (SE)', 'Position 4 (SW)'];
const TEST_LOAD = 2000; // g
const MPE = 0.05;

const initObs = CORNERS.map(c => ({
  corner: c,
  indication: (TEST_LOAD + (Math.random() * 0.06 - 0.03)).toFixed(2),
}));

export default function TestEccentricLoading() {
  const navigate = useNavigate();
  const [obs, setObs] = useState(initObs);

  const results = obs.map((o, i) => {
    const refCenter = parseFloat(obs[0].indication);
    const diff = i === 0 ? 0 : parseFloat(o.indication) - refCenter;
    return { ...o, diff, pass: Math.abs(diff) <= MPE };
  });
  const allPass = results.every(r => r.pass);

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/tests/accuracy')}>Previous</Btn>
      <Btn variant="primary" icon="arrow_forward" onClick={() => navigate('/tests/repeatability')}>Next Test</Btn>
    </>
  );

  return (
    <AppShell title="Eccentric Loading Test" subtitle="OIML R 76 §3.6 — Corner load assessment at 5 positions" activePath="/tests/select-instrument" actions={actions}>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
        {[
          { label: 'Test Load', value: `${TEST_LOAD} g`, icon: 'fitness_center', accent: VS.primary },
          { label: 'Test Standard', value: 'OIML R 76 §3.6', icon: 'gavel', accent: VS.teal },
          { label: 'Max Diff. vs. Center', value: `${Math.max(...results.slice(1).map(r => Math.abs(r.diff))).toFixed(3)} g`, icon: 'compare_arrows', accent: '#7C3AED' },
          { label: 'Overall Result', value: allPass ? 'PASS' : 'FAIL', icon: allPass ? 'check_circle' : 'cancel', accent: allPass ? VS.success : VS.error },
        ].map(k => (
          <Card key={k.label} style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: k.accent }}>{k.icon}</span>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{k.label}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: k.accent, fontVariantNumeric: 'tabular-nums' }}>{k.value}</div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>

        {/* Observations */}
        <Card style={{ overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: `1px solid ${VS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, margin: 0 }}>Load Position Observations</h3>
            <Badge color={allPass ? 'success' : 'error'}><StatusDot color={allPass ? 'success' : 'error'} /> {allPass ? 'PASS' : 'FAIL'}</Badge>
          </div>

          {/* Diagram */}
          <div style={{ padding: '20px', borderBottom: `1px solid ${VS.border}`, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 200, height: 160 }}>
              {/* Platform outline */}
              <div style={{ position: 'absolute', inset: 0, border: `2px solid ${VS.border}`, borderRadius: 8, background: VS.page }} />
              {/* Positions */}
              {[
                { label: 'C', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', key: 0 },
                { label: '1', left: '20%', top: '20%', transform: 'translate(-50%,-50%)', key: 1 },
                { label: '2', left: '80%', top: '20%', transform: 'translate(-50%,-50%)', key: 2 },
                { label: '3', left: '80%', top: '80%', transform: 'translate(-50%,-50%)', key: 3 },
                { label: '4', left: '20%', top: '80%', transform: 'translate(-50%,-50%)', key: 4 },
              ].map(p => (
                <div key={p.key} style={{
                  position: 'absolute', left: p.left, top: p.top, transform: p.transform,
                  width: 32, height: 32, borderRadius: '50%',
                  background: results[p.key]?.pass ? VS.successLight : VS.errorLight,
                  border: `2px solid ${results[p.key]?.pass ? VS.success : VS.error}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700,
                  color: results[p.key]?.pass ? VS.success : VS.error,
                }}>
                  {p.label}
                </div>
              ))}
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: `1px solid ${VS.border}` }}>
                {['Position', 'Applied Load (g)', 'Indicated (g)', 'Diff vs. Center (g)', 'MPE (g)', 'Result'].map(h => (
                  <th key={h} style={{ padding: '9px 16px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${VS.borderLight}`, background: r.pass ? 'transparent' : VS.errorLight }}>
                  <td style={{ padding: '11px 16px', fontSize: 13.5, fontWeight: 600, color: VS.textMain }}>{r.corner}</td>
                  <td style={{ padding: '11px 16px', fontSize: 13.5, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{TEST_LOAD}</td>
                  <td style={{ padding: '11px 16px' }}>
                    <input
                      type="number" step="0.01" value={r.indication}
                      onChange={e => setObs(o => o.map((oo, ii) => ii === i ? { ...oo, indication: e.target.value } : oo))}
                      style={{ width: 100, padding: '4px 8px', border: `1px solid ${VS.border}`, borderRadius: 5, fontSize: 13, fontFamily: 'inherit', color: VS.textMain, outline: 'none' }}
                    />
                  </td>
                  <td style={{ padding: '11px 16px', fontSize: 13.5, fontWeight: 700, color: i === 0 ? VS.textMuted : (r.pass ? VS.success : VS.error), fontVariantNumeric: 'tabular-nums' }}>
                    {i === 0 ? '—' : (r.diff >= 0 ? '+' : '') + r.diff.toFixed(3)}
                  </td>
                  <td style={{ padding: '11px 16px', fontSize: 13.5, color: VS.textMuted }}>±{MPE}</td>
                  <td style={{ padding: '11px 16px' }}>
                    {i === 0 ? <Badge color="primary">Reference</Badge> : <Badge color={r.pass ? 'success' : 'error'}>{r.pass ? 'PASS' : 'FAIL'}</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Summary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>Result Summary</h3>
            {[
              { label: 'Positions Tested', value: CORNERS.length },
              { label: 'Passed', value: results.filter(r => r.pass).length, color: VS.success },
              { label: 'Failed', value: results.filter(r => !r.pass).length, color: VS.error },
              { label: 'Max Deviation', value: `${Math.max(...results.slice(1).map(r => Math.abs(r.diff))).toFixed(3)} g` },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `1px solid ${VS.borderLight}` }}>
                <span style={{ fontSize: 12.5, color: VS.textMuted }}>{s.label}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: s.color || VS.textMain }}>{s.value}</span>
              </div>
            ))}
            <div style={{ marginTop: 16, padding: '12px 14px', borderRadius: 8, background: allPass ? VS.successLight : VS.errorLight, border: `1px solid ${allPass ? VS.successBorder : VS.errorBorder}` }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: allPass ? VS.success : VS.error, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{allPass ? 'check_circle' : 'cancel'}</span>
                {allPass ? 'Eccentricity within MPE — PASS' : 'Exceeds MPE — FAIL'}
              </div>
            </div>
          </Card>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: VS.textMain, margin: '0 0 10px' }}>Reference</h3>
            <p style={{ fontSize: 12, color: VS.textMuted, lineHeight: 1.7, margin: 0 }}>
              OIML R 76 §3.6: Apply test load at 5 positions (center + 4 corners). Difference between any corner reading and center must not exceed MPE.
            </p>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
