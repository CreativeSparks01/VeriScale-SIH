import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const HISTORY = [
  { id: 'TEST-012', type: 'Periodic Verification (Full OIML R 76)', date: '06 Sep 2026', cert: 'CERT-TR-0091', maxError: '+0.018 g', mpe: '±0.050 g', officer: 'M. Sharma', result: 'PASS' },
  { id: 'TEST-008', type: 'Annual Recalibration & Routine Inspection', date: '04 Jan 2026', cert: 'CERT-TR-0044', maxError: '+0.022 g', mpe: '±0.050 g', officer: 'A. Kumar', result: 'PASS' },
  { id: 'TEST-004', type: 'Post-Maintenance Zero Drift Recalibration', date: '12 Sep 2025', cert: 'CERT-TR-0028', maxError: '+0.031 g', mpe: '±0.050 g', officer: 'P. Sharma', result: 'PASS' },
  { id: 'TEST-001', type: 'Initial Statutory Verification / Commissioning', date: '15 Jul 2025', cert: 'CERT-TR-0012', maxError: '+0.015 g', mpe: '±0.050 g', officer: 'M. Sharma', result: 'PASS' },
];

export default function InstrumentTestHistory() {
  const navigate = useNavigate();

  const breadcrumbs = [
    { label: 'INSTRUMENTS', path: '/instruments' },
    { label: 'WT-100', path: '/instruments/details' },
    { label: 'TEST HISTORY' },
  ];

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/instruments/details')}>
        Instrument Details
      </Btn>
      <Btn variant="primary" icon="add" onClick={() => navigate('/tests/select-instrument')}>
        Initiate New Test
      </Btn>
    </>
  );

  return (
    <AppShell
      title="Instrument Verification Lifecycle History"
      subtitle="Complete Historical Metrological Record for ABC WeighTech WT-100 (WT100-2026-001)"
      activePath="/instruments"
      actions={actions}
      breadcrumbs={breadcrumbs}
    >
      {/* ── Instrument Header Card ────────────────────────────────────── */}
      <Card style={{ padding: 20, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 10, background: VS.tealLight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 26, color: VS.teal }}>scale</span>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: VS.textMain, margin: 0 }}>ABC WeighTech WT-100</h3>
              <Badge color="success"><StatusDot color="success" /> VERIFIED & IN TOLERANCE</Badge>
            </div>
            <div style={{ fontSize: 12.5, color: VS.textMuted, marginTop: 3 }}>
              Serial: <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, color: VS.primary }}>WT100-2026-001</span> • Class III • Max: 6200 g • e = 0.1 g
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <Btn variant="secondary" icon="tune" onClick={() => navigate('/instruments/details')}>
            Specifications
          </Btn>
          <Btn variant="primary" icon="history_edu" onClick={() => navigate('/compliance')}>
            Latest Compliance (TEST-012)
          </Btn>
        </div>
      </Card>

      {/* ── Historical Timeline Table ─────────────────────────────────── */}
      <Card style={{ overflow: 'hidden', marginBottom: 24 }}>
        <div style={{ padding: '16px 20px', borderBottom: `1px solid ${VS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: VS.textMain, margin: 0 }}>Chronological Metrological Ledger</h4>
            <p style={{ fontSize: 12, color: VS.textMuted, margin: '2px 0 0' }}>All 4 statutory evaluations on record passed OIML R 76 tolerances</p>
          </div>
          <Badge color="teal">4 Audited Sessions</Badge>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
          <thead>
            <tr style={{ background: VS.cardAlt, borderBottom: `1px solid ${VS.border}` }}>
              {['Test Record ID', 'Evaluation Purpose', 'Verification Date', 'Assigned Certificate', 'Max Observed Error', 'Authorized By', 'Verdict', 'Action'].map((h, i) => (
                <th key={i} style={{ padding: '12px 18px', textAlign: i === 4 ? 'center' : 'left', fontSize: 11, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {HISTORY.map((item, idx) => (
              <tr key={item.id} style={{ borderBottom: `1px solid ${VS.borderLight}`, background: idx % 2 === 0 ? '#fff' : VS.cardAlt }}>
                <td style={{ padding: '14px 18px', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, color: VS.primary }}>
                  {item.id}
                </td>
                <td style={{ padding: '14px 18px', fontWeight: 600, color: VS.textMain }}>
                  {item.type}
                </td>
                <td style={{ padding: '14px 18px', color: VS.textMuted }}>
                  {item.date}
                </td>
                <td style={{ padding: '14px 18px' }}>
                  <button
                    type="button"
                    onClick={() => navigate('/reports/generate')}
                    style={{ background: 'none', border: 'none', padding: 0, color: VS.teal, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    {item.cert}
                  </button>
                </td>
                <td style={{ padding: '14px 18px', textAlign: 'center', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}>
                  {item.maxError} <span style={{ fontSize: 11, color: VS.textMuted, fontWeight: 400 }}>({item.mpe})</span>
                </td>
                <td style={{ padding: '14px 18px', color: VS.textMain }}>
                  {item.officer}
                </td>
                <td style={{ padding: '14px 18px' }}>
                  <Badge color="success"><StatusDot color="success" /> {item.result}</Badge>
                </td>
                <td style={{ padding: '14px 18px' }}>
                  <Btn variant="secondary" icon="visibility" onClick={() => item.id === 'TEST-012' ? navigate('/compliance') : navigate('/reports/generate')} style={{ padding: '4px 8px', fontSize: 12 }}>
                    Dossier
                  </Btn>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
