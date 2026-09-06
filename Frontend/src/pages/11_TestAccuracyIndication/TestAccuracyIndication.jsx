import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const LOADS = [0, 500, 1000, 2000, 3000, 4000, 5000, 6200];
const MPE = 0.05;

const initObs = LOADS.map(l => ({ load: l, indication: (l + (Math.random() * 0.04 - 0.02)).toFixed(2) }));

export default function TestAccuracyIndication() {
  const navigate = useNavigate();
  const [obs, setObs] = useState(initObs);

  const results = obs.map(o => {
    const err = parseFloat(o.indication) - o.load;
    return { ...o, error: err, pass: Math.abs(err) <= MPE };
  });
  const allPass = results.every(r => r.pass);

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/tests/workspace')}>Back to Workspace</Btn>
      <Btn variant="primary" icon="check" onClick={() => navigate('/tests/eccentricity')}>Next Test</Btn>
    </>
  );

  return (
    <AppShell title="Accuracy / Error of Indication" subtitle="OIML R 76 §3.5 — Maximum Permissible Error evaluation" activePath="/tests/select-instrument" actions={actions}>

      {/* Info Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
        {[
          { label: 'Test Standard', value: 'OIML R 76 §3.5', icon: 'gavel', accent: VS.primary },
          { label: 'Instrument Class', value: 'Class II', icon: 'grade', accent: VS.teal },
          { label: 'MPE (±)', value: `${MPE} g`, icon: 'timeline', accent: '#7C3AED' },
          { label: 'Overall Result', value: allPass ? 'PASS' : 'FAIL', icon: allPass ? 'check_circle' : 'cancel', accent: allPass ? VS.success : VS.error },
        ].map(k => (
          <Card key={k.label} style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 22, color: k.accent }}>{k.icon}</span>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{k.label}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: k.accent, fontVariantNumeric: 'tabular-nums' }}>{k.value}</div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>
        {/* Data Table */}
        <Card style={{ overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: `1px solid ${VS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, margin: 0 }}>Test Observations</h3>
            <div style={{ display: 'flex', gap: 8 }}>
              <Badge color={allPass ? 'success' : 'error'}>
                <StatusDot color={allPass ? 'success' : 'error'} /> {results.filter(r => r.pass).length}/{results.length} PASS
              </Badge>
            </div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: `1px solid ${VS.border}` }}>
                {['#', 'Applied Load (g)', 'Indicated Value (g)', 'Error E = I – L (g)', 'MPE (g)', 'Δ Remaining', 'Result'].map(h => (
                  <th key={h} style={{ padding: '9px 16px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => {
                const margin = MPE - Math.abs(r.error);
                return (
                  <tr key={i} style={{ borderBottom: `1px solid ${VS.borderLight}`, background: r.pass ? 'transparent' : VS.errorLight }}>
                    <td style={{ padding: '11px 16px', fontSize: 12, color: VS.textMuted }}>{i + 1}</td>
                    <td style={{ padding: '11px 16px', fontSize: 13.5, fontWeight: 600, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{r.load.toFixed(2)}</td>
                    <td style={{ padding: '11px 16px', fontSize: 13.5, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>
                      <input
                        type="number" step="0.01" value={r.indication}
                        onChange={e => setObs(o => o.map((oo, ii) => ii === i ? { ...oo, indication: e.target.value } : oo))}
                        style={{
                          width: 100, padding: '4px 8px', border: `1px solid ${VS.border}`, borderRadius: 5,
                          fontSize: 13, fontFamily: 'inherit', color: VS.textMain, outline: 'none', fontVariantNumeric: 'tabular-nums',
                        }}
                      />
                    </td>
                    <td style={{ padding: '11px 16px', fontSize: 13.5, fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: r.pass ? VS.success : VS.error }}>
                      {r.error >= 0 ? '+' : ''}{r.error.toFixed(3)}
                    </td>
                    <td style={{ padding: '11px 16px', fontSize: 13.5, color: VS.textMuted, fontVariantNumeric: 'tabular-nums' }}>±{MPE}</td>
                    <td style={{ padding: '11px 16px', fontSize: 13, color: margin >= 0 ? VS.success : VS.error, fontVariantNumeric: 'tabular-nums' }}>
                      {margin >= 0 ? '+' : ''}{margin.toFixed(3)}
                    </td>
                    <td style={{ padding: '11px 16px' }}>
                      <Badge color={r.pass ? 'success' : 'error'}>{r.pass ? 'PASS' : 'FAIL'}</Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>

        {/* Summary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>Result Summary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Total Observations', value: results.length },
                { label: 'Passed', value: results.filter(r => r.pass).length, color: VS.success },
                { label: 'Failed', value: results.filter(r => !r.pass).length, color: VS.error },
                { label: 'Max Absolute Error', value: `${Math.max(...results.map(r => Math.abs(r.error))).toFixed(3)} g`, color: VS.textMain },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `1px solid ${VS.borderLight}` }}>
                  <span style={{ fontSize: 12.5, color: VS.textMuted }}>{s.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: s.color || VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{s.value}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, padding: '12px 14px', borderRadius: 8, background: allPass ? VS.successLight : VS.errorLight, border: `1px solid ${allPass ? VS.successBorder : VS.errorBorder}` }}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: allPass ? VS.success : VS.error, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{allPass ? 'check_circle' : 'cancel'}</span>
                {allPass ? 'All within MPE — PASS' : 'Exceeds MPE — FAIL'}
              </div>
            </div>
          </Card>

          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: VS.textMain, margin: '0 0 10px' }}>Reference</h3>
            <p style={{ fontSize: 12, color: VS.textMuted, lineHeight: 1.7, margin: 0 }}>
              Per OIML R 76 §3.5, the error of indication E = I − L must not exceed the MPE at any test load. For Class II instruments, MPE = 0.5e for loads up to 5000e.
            </p>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
