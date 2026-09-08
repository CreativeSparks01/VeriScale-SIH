import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const CRITERIA = [
  { clause: 'OIML R 76-1 §3.5.1', test: 'Error of Indication (Linearity)', mpe: '±0.050 g', observed: '+0.018 g', ratio: '36%', status: 'PASS', critical: true },
  { clause: 'OIML R 76-1 §3.6.2', test: 'Eccentricity (Off-Center Load)', mpe: '±0.050 g', observed: '+0.026 g', ratio: '52%', status: 'PASS', critical: true },
  { clause: 'OIML R 76-1 §3.6.1', test: 'Repeatability (10 Series)', mpe: '≤ 0.050 g', observed: '0.012 g', ratio: '24%', status: 'PASS', critical: true },
  { clause: 'OIML R 76-1 §3.6.3', test: 'Tare Device Effect', mpe: '±0.050 g', observed: '+0.014 g', ratio: '28%', status: 'PASS', critical: false },
  { clause: 'OIML R 76-1 §4.5.1', test: 'Zero-Setting & Zero-Tracking', mpe: '±0.025 g', observed: '0.000 g', ratio: '0%', status: 'PASS', critical: false },
  { clause: 'OIML R 76-1 §3.9.2', test: 'Temperature Influence (+20°C / +40°C)', mpe: '±0.050 g/°C', observed: '0.019 g', ratio: '38%', status: 'PASS', critical: false },
  { clause: 'OIML R 76-1 §3.9.3', test: 'Warm-up Stabilization Time', mpe: '≤ 30 min', observed: '15 min', ratio: '50%', status: 'PASS', critical: false },
  { clause: 'OIML R 76-1 §3.9.4', test: 'Voltage Variation (-15% / +10%)', mpe: '±0.050 g', observed: '+0.011 g', ratio: '22%', status: 'PASS', critical: false },
];

export default function ComplianceAssessment() {
  const navigate = useNavigate();
  const [selectedClause, setSelectedClause] = useState(null);

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/tests/workspace')}>
        Workspace
      </Btn>
      <Btn variant="secondary" icon="attach_file" onClick={() => navigate('/compliance/evidence')}>
        Evidence
      </Btn>
      <Btn variant="primary" icon="verified" onClick={() => navigate('/compliance/approval')}>
        Review & Approval
      </Btn>
    </>
  );

  const breadcrumbs = [
    { label: 'TESTS', path: '/tests/select-instrument' },
    { label: 'TEST-012', path: '/tests/workspace' },
    { label: 'COMPLIANCE ASSESSMENT' },
  ];

  return (
    <AppShell
      title="Compliance Assessment"
      subtitle="OIML R 76-1:2006 Automated Metrological Verification & Evaluation"
      activePath="/compliance"
      actions={actions}
      breadcrumbs={breadcrumbs}
    >
      {/* ── Metadata Strip ──────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginBottom: 20 }}>
        {[
          { label: 'Test Record', value: 'TEST-012', mono: true, accent: VS.teal, path: '/tests/workspace' },
          { label: 'Instrument', value: 'ABC WeighTech WT-100', path: '/instruments/details' },
          { label: 'Serial No.', value: 'WT100-2026-001', mono: true },
          { label: 'Standard', value: 'OIML R 76-1 (Class III)' },
          { label: 'Testing Lab', value: 'XYZ Metrology Lab' },
          { label: 'Evaluation Status', value: 'VERIFIED & PASSED', badge: 'success' },
        ].map((item, i) => (
          <Card key={i} style={{ padding: '12px 14px' }}>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              {item.label}
            </div>
            {item.badge ? (
              <div style={{ marginTop: 4 }}>
                <Badge color={item.badge}><StatusDot color={item.badge} /> {item.value}</Badge>
              </div>
            ) : item.path ? (
              <button
                type="button"
                onClick={() => navigate(item.path)}
                style={{
                  background: 'none', border: 'none', padding: 0, marginTop: 3,
                  fontSize: 13.5, fontWeight: 700, color: item.accent || VS.primary,
                  cursor: 'pointer', textAlign: 'left', fontFamily: item.mono ? "'IBM Plex Mono', monospace" : 'inherit',
                  textDecoration: 'underline', textUnderlineOffset: 2,
                }}
              >
                {item.value}
              </button>
            ) : (
              <div style={{ fontSize: 13.5, fontWeight: 600, color: VS.textMain, marginTop: 3, fontFamily: item.mono ? "'IBM Plex Mono', monospace" : 'inherit' }}>
                {item.value}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* ── Verdict Hero Banner ─────────────────────────────────────────── */}
      <Card style={{
        padding: '24px 28px', marginBottom: 24,
        background: 'linear-gradient(135deg, #0B263D 0%, #123B5D 100%)',
        color: '#fff', border: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%', background: 'rgba(34,197,94,0.18)',
              border: '2px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 16px rgba(34,197,94,0.4)',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 32, color: '#22c55e' }}>verified</span>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, margin: 0, letterSpacing: '-0.02em', color: '#fff' }}>
                  ✓ FULL COMPLIANCE VALIDATED
                </h2>
                <Badge color="success">OIML R 76-1 PASS</Badge>
              </div>
              <p style={{ fontSize: 13.5, color: '#8daec7', margin: '4px 0 0' }}>
                All 8 evaluated clauses strictly meet maximum permissible error limits. Zero non-conformances identified.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { label: 'Evaluated', val: '8 / 8', sub: 'Clauses' },
              { label: 'Passed', val: '8', sub: '100% Pass', green: true },
              { label: 'Defects', val: '0', sub: 'Zero' },
              { label: 'Confidence', val: '95%', sub: 'k = 2.00' },
            ].map(k => (
              <div key={k.label} style={{
                background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '10px 18px',
                textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', minWidth: 80,
              }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: k.green ? '#22c55e' : '#fff' }}>{k.val}</div>
                <div style={{ fontSize: 10.5, color: '#8daec7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* ── Clause-by-Clause Evaluation Table ──────────────────────────── */}
      <Card style={{ overflow: 'hidden', marginBottom: 24 }}>
        <div style={{ padding: '16px 24px', borderBottom: `1px solid ${VS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: VS.textMain, margin: 0 }}>OIML Legal Metrology Clause Breakdown</h3>
            <p style={{ fontSize: 12, color: VS.textMuted, margin: '2px 0 0' }}>Click any clause to inspect raw observations and tolerance margin</p>
          </div>
          <Btn variant="secondary" icon="picture_as_pdf" onClick={() => navigate('/reports/generate')}>
            Generate Official Certificate
          </Btn>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
          <thead>
            <tr style={{ background: VS.cardAlt, borderBottom: `1px solid ${VS.border}` }}>
              {['Standard Clause', 'Test Description', 'Tolerance (MPE)', 'Observed Peak', 'MPE Utilization', 'Verdict', 'Action'].map((h, i) => (
                <th key={i} style={{ padding: '12px 18px', textAlign: i >= 2 && i <= 5 ? 'center' : 'left', fontSize: 11, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CRITERIA.map((row, idx) => {
              const isSelected = selectedClause === idx;
              return (
                <tr
                  key={idx}
                  onClick={() => setSelectedClause(isSelected ? null : idx)}
                  style={{
                    borderBottom: `1px solid ${VS.borderLight}`,
                    background: isSelected ? 'rgba(0,139,139,0.05)' : idx % 2 === 0 ? '#fff' : VS.cardAlt,
                    cursor: 'pointer', transition: 'background 0.12s',
                  }}
                >
                  <td style={{ padding: '14px 18px', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, color: VS.primary, fontSize: 12.5 }}>
                    {row.clause}
                  </td>
                  <td style={{ padding: '14px 18px', fontWeight: 600, color: VS.textMain }}>
                    {row.test}
                    {row.critical && <span style={{ marginLeft: 6, fontSize: 10, background: '#EFF6FF', color: '#1D4ED8', padding: '1px 6px', borderRadius: 4, fontWeight: 700 }}>CRITICAL</span>}
                  </td>
                  <td style={{ padding: '14px 18px', textAlign: 'center', fontFamily: "'IBM Plex Mono', monospace", color: VS.textMuted }}>
                    {row.mpe}
                  </td>
                  <td style={{ padding: '14px 18px', textAlign: 'center', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, color: VS.textMain }}>
                    {row.observed}
                  </td>
                  <td style={{ padding: '14px 18px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 60, height: 6, background: '#E2E8F0', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ width: row.ratio, height: '100%', background: VS.teal, borderRadius: 3 }} />
                      </div>
                      <span style={{ fontSize: 11.5, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, color: VS.textMuted }}>{row.ratio}</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 18px', textAlign: 'center' }}>
                    <Badge color="success">
                      <StatusDot color="success" /> {row.status}
                    </Badge>
                  </td>
                  <td style={{ padding: '14px 18px' }}>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); navigate('/tests/accuracy'); }}
                      style={{
                        background: 'none', border: `1px solid ${VS.border}`, borderRadius: 6,
                        padding: '4px 10px', fontSize: 11.5, fontWeight: 600, color: VS.primary,
                        cursor: 'pointer', fontFamily: 'inherit',
                      }}
                    >
                      Audit Data
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* ── Quick Jump Bar ─────────────────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#fff', borderRadius: 10, border: `1px solid ${VS.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="material-symbols-outlined" style={{ color: VS.teal, fontSize: 20 }}>arrow_back</span>
          <span style={{ fontSize: 13, color: VS.textMuted }}>Need to adjust any test measurements?</span>
          <button
            type="button"
            onClick={() => navigate('/tests/workspace')}
            style={{ background: 'none', border: 'none', color: VS.primary, fontWeight: 700, cursor: 'pointer', fontSize: 13, textDecoration: 'underline' }}
          >
            Return to Test Observations Workspace
          </button>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Btn variant="secondary" icon="description" onClick={() => navigate('/reports/repository')}>
            Repository
          </Btn>
          <Btn variant="primary" icon="assignment_turned_in" onClick={() => navigate('/compliance/approval')}>
            Proceed to Sign-Off
          </Btn>
        </div>
      </div>
    </AppShell>
  );
}
