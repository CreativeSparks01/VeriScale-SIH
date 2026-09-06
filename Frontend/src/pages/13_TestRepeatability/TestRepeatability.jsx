import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const TEST_LOAD = 3000;
const NUM_REPS = 6;
const MPE = 0.05;
const initObs = Array.from({ length: NUM_REPS }, (_, i) => ({
  rep: i + 1,
  indication: (TEST_LOAD + (Math.random() * 0.04 - 0.02)).toFixed(2),
}));

export default function TestRepeatability() {
  const navigate = useNavigate();
  const [obs, setObs] = useState(initObs);

  const vals = obs.map(o => parseFloat(o.indication));
  const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
  const maxDiff = Math.max(...vals) - Math.min(...vals);
  const allPass = maxDiff <= MPE;

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/tests/eccentricity')}>Previous</Btn>
      <Btn variant="primary" icon="arrow_forward" onClick={() => navigate('/tests/tare')}>Next Test</Btn>
    </>
  );

  return (
    <AppShell title="Repeatability Test" subtitle="OIML R 76 §3.7 — Consistency of readings under identical conditions" activePath="/tests/select-instrument" actions={actions}>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
        {[
          { label: 'Test Load', value: `${TEST_LOAD} g`, icon: 'fitness_center', accent: VS.primary },
          { label: 'Repetitions', value: NUM_REPS, icon: 'replay', accent: VS.teal },
          { label: 'Max Spread (R)', value: `${maxDiff.toFixed(3)} g`, icon: 'height', accent: maxDiff <= MPE ? VS.success : VS.error },
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
        <Card style={{ overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: `1px solid ${VS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, margin: 0 }}>Repeatability Observations</h3>
            <Badge color={allPass ? 'success' : 'error'}><StatusDot color={allPass ? 'success' : 'error'} /> Max Spread: {maxDiff.toFixed(3)} g</Badge>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: `1px solid ${VS.border}` }}>
                {['Rep.', 'Applied Load (g)', 'Indicated Value (g)', 'Dev. from Mean (g)', 'Result'].map(h => (
                  <th key={h} style={{ padding: '9px 16px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {obs.map((o, i) => {
                const dev = parseFloat(o.indication) - mean;
                return (
                  <tr key={i} style={{ borderBottom: `1px solid ${VS.borderLight}` }}>
                    <td style={{ padding: '11px 16px', fontSize: 13, fontWeight: 600, color: VS.textMuted }}>{o.rep}</td>
                    <td style={{ padding: '11px 16px', fontSize: 13.5, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{TEST_LOAD}</td>
                    <td style={{ padding: '11px 16px' }}>
                      <input
                        type="number" step="0.01" value={o.indication}
                        onChange={e => setObs(ob => ob.map((oo, ii) => ii === i ? { ...oo, indication: e.target.value } : oo))}
                        style={{ width: 110, padding: '4px 8px', border: `1px solid ${VS.border}`, borderRadius: 5, fontSize: 13, fontFamily: 'inherit', color: VS.textMain, outline: 'none' }}
                      />
                    </td>
                    <td style={{ padding: '11px 16px', fontSize: 13.5, fontWeight: 600, color: Math.abs(dev) > MPE / 2 ? VS.warning : VS.success, fontVariantNumeric: 'tabular-nums' }}>
                      {dev >= 0 ? '+' : ''}{dev.toFixed(3)}
                    </td>
                    <td style={{ padding: '11px 16px' }}>
                      <Badge color={allPass ? 'success' : 'warning'}>{allPass ? 'PASS' : 'REVIEW'}</Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr style={{ background: '#F8FAFC', borderTop: `2px solid ${VS.border}` }}>
                <td colSpan={2} style={{ padding: '9px 16px', fontSize: 12.5, fontWeight: 700, color: VS.textMuted }}>STATISTICS</td>
                <td style={{ padding: '9px 16px', fontSize: 12.5, fontWeight: 700, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>Mean: {mean.toFixed(3)}</td>
                <td style={{ padding: '9px 16px', fontSize: 12.5, fontWeight: 700, color: allPass ? VS.success : VS.error, fontVariantNumeric: 'tabular-nums' }}>R = {maxDiff.toFixed(3)}</td>
                <td style={{ padding: '9px 16px' }}>
                  <Badge color={allPass ? 'success' : 'error'}>{allPass ? 'PASS' : 'FAIL'}</Badge>
                </td>
              </tr>
            </tfoot>
          </table>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>Statistical Summary</h3>
            {[
              { label: 'Mean', value: `${mean.toFixed(3)} g` },
              { label: 'Min', value: `${Math.min(...vals).toFixed(3)} g` },
              { label: 'Max', value: `${Math.max(...vals).toFixed(3)} g` },
              { label: 'Range (R)', value: `${maxDiff.toFixed(3)} g`, color: allPass ? VS.success : VS.error },
              { label: 'MPE Limit', value: `${MPE} g` },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `1px solid ${VS.borderLight}` }}>
                <span style={{ fontSize: 12.5, color: VS.textMuted }}>{s.label}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: s.color || VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{s.value}</span>
              </div>
            ))}
            <div style={{ marginTop: 16, padding: '12px 14px', borderRadius: 8, background: allPass ? VS.successLight : VS.errorLight, border: `1px solid ${allPass ? VS.successBorder : VS.errorBorder}` }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: allPass ? VS.success : VS.error, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{allPass ? 'check_circle' : 'cancel'}</span>
                {allPass ? 'Range within MPE — PASS' : 'Range exceeds MPE — FAIL'}
              </div>
            </div>
          </Card>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: VS.textMain, margin: '0 0 10px' }}>Reference</h3>
            <p style={{ fontSize: 12, color: VS.textMuted, lineHeight: 1.7, margin: 0 }}>
              OIML R 76 §3.7: Apply same load {NUM_REPS} times. Range R = Max − Min must not exceed MPE for the applied load.
            </p>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
