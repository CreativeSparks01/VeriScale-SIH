import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, KpiCard, StatusDot } from '../../components/AppShell';

const kpis = [
  { label: 'Total Instruments', value: '1,248', sub: '+32 this month', icon: 'scale', accent: VS.primary, trend: 2.6 },
  { label: 'Active Tests', value: '47', sub: '12 pending review', icon: 'experiment', accent: VS.teal, trend: 8.3 },
  { label: 'Compliance Rate', value: '94.2%', sub: '3 exceptions open', icon: 'verified', accent: '#15803D', trend: 1.1 },
  { label: 'Reports Issued', value: '312', sub: 'This quarter', icon: 'description', accent: '#7C3AED', trend: 15 },
  { label: 'Pending Review', value: '18', sub: 'Require sign-off', icon: 'pending_actions', accent: '#B45309' },
  { label: 'Lab Health', value: '99.1%', sub: 'Uptime 30 days', icon: 'monitor_heart', accent: '#008B8B' },
];

const recentTests = [
  { id: 'VST-2024-0847', instrument: 'Mettler Toledo XPE205', serial: 'MT-X0022541', type: 'Full OIML R 76', status: 'PASS', operator: 'Manan S.', date: '06 Sep 2026' },
  { id: 'VST-2024-0846', instrument: 'Sartorius Entris II', serial: 'SA-E0018832', type: 'Accuracy + Eccentric', status: 'PASS', operator: 'Priya K.', date: '05 Sep 2026' },
  { id: 'VST-2024-0845', instrument: 'Ohaus Scout SKX', serial: 'OH-S0031120', type: 'Repeatability Only', status: 'REVIEW', operator: 'Arjun V.', date: '05 Sep 2026' },
  { id: 'VST-2024-0844', instrument: 'A&D GF-6002A', serial: 'AD-G0009944', type: 'Full OIML R 76', status: 'FAIL', operator: 'Sneha P.', date: '04 Sep 2026' },
  { id: 'VST-2024-0843', instrument: 'Kern PCB 6000-1', serial: 'KE-P0067203', type: 'Tare + Zero', status: 'PASS', operator: 'Manan S.', date: '04 Sep 2026' },
];

const statusBadge = {
  PASS:   <Badge color="success"><StatusDot color="success" /> PASS</Badge>,
  FAIL:   <Badge color="error"><StatusDot color="error" /> FAIL</Badge>,
  REVIEW: <Badge color="warning"><StatusDot color="warning" /> REVIEW</Badge>,
};

const alerts = [
  { icon: 'warning', color: '#B45309', bg: 'rgba(180,83,9,0.06)', border: 'rgba(180,83,9,0.2)', text: '18 instruments due for re-verification within 30 days.' },
  { icon: 'error', color: '#DC2626', bg: 'rgba(220,38,38,0.06)', border: 'rgba(220,38,38,0.2)', text: '3 compliance exceptions require immediate attention.' },
  { icon: 'info', color: VS.teal, bg: VS.tealLight, border: VS.tealBorder, text: 'OIML R 76:2024 revision available — review rule set update.' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const actions = (
    <>
      <Btn variant="secondary" icon="assessment" onClick={() => navigate('/reports/repository')}>Reports</Btn>
      <Btn variant="primary" icon="add" onClick={() => navigate('/tests/select-instrument')}>New Test</Btn>
    </>
  );

  return (
    <AppShell title="Dashboard" subtitle="Laboratory Operations Overview" activePath="/dashboard" actions={actions}>

      {/* ── ALERTS ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        {alerts.map((a, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
            borderRadius: 8, background: a.bg, border: `1px solid ${a.border}`,
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: a.color, flexShrink: 0 }}>{a.icon}</span>
            <span style={{ fontSize: 13, color: VS.textMain }}>{a.text}</span>
          </div>
        ))}
      </div>

      {/* ── KPI GRID ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 16, marginBottom: 28 }}>
        {kpis.map(k => <KpiCard key={k.label} {...k} />)}
      </div>

      {/* ── MAIN CONTENT ROW ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>

        {/* Recent Tests Table */}
        <Card style={{ overflow: 'hidden' }}>
          <div style={{
            padding: '16px 20px', borderBottom: `1px solid ${VS.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: VS.textMain, margin: 0 }}>Recent Verification Tests</h3>
              <p style={{ fontSize: 12, color: VS.textMuted, margin: '2px 0 0' }}>Latest NAWI test records</p>
            </div>
            <Btn variant="secondary" small icon="open_in_full" onClick={() => navigate('/instruments/history')}>View All</Btn>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: `1px solid ${VS.border}` }}>
                {['Test ID', 'Instrument', 'Serial No.', 'Type', 'Status', 'Operator', 'Date'].map(h => (
                  <th key={h} style={{ padding: '9px 14px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentTests.map((t, i) => (
                <tr
                  key={t.id}
                  onClick={() => navigate('/instruments/history')}
                  style={{ borderBottom: `1px solid ${VS.borderLight}`, cursor: 'pointer', transition: 'background 0.12s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={{ padding: '11px 14px', fontSize: 12.5, fontWeight: 600, color: VS.teal }}>{t.id}</td>
                  <td style={{ padding: '11px 14px', fontSize: 13, color: VS.textMain }}>{t.instrument}</td>
                  <td style={{ padding: '11px 14px', fontSize: 12, color: VS.textMuted, fontVariantNumeric: 'tabular-nums' }}>{t.serial}</td>
                  <td style={{ padding: '11px 14px', fontSize: 12.5, color: VS.textMain }}>{t.type}</td>
                  <td style={{ padding: '11px 14px' }}>{statusBadge[t.status]}</td>
                  <td style={{ padding: '11px 14px', fontSize: 12.5, color: VS.textMuted }}>{t.operator}</td>
                  <td style={{ padding: '11px 14px', fontSize: 12, color: VS.textMuted, fontVariantNumeric: 'tabular-nums' }}>{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Right Sidebar Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Quick Actions */}
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>Quick Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Start New Verification', icon: 'play_circle', path: '/tests/select-instrument', accent: VS.teal },
                { label: 'Register Instrument', icon: 'add_box', path: '/instruments/add', accent: VS.primary },
                { label: 'View Compliance', icon: 'verified', path: '/compliance', accent: '#15803D' },
                { label: 'Generate Report', icon: 'print', path: '/reports/generate', accent: '#7C3AED' },
              ].map(a => (
                <button
                  key={a.label}
                  onClick={() => navigate(a.path)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '9px 12px', borderRadius: 7, border: `1px solid ${VS.border}`,
                    background: '#fff', cursor: 'pointer', fontFamily: VS.font,
                    fontSize: 13, fontWeight: 500, color: VS.textMain, textAlign: 'left',
                    transition: 'all 0.14s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = VS.page; e.currentTarget.style.borderColor = a.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = VS.border; }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 17, color: a.accent }}>{a.icon}</span>
                  {a.label}
                </button>
              ))}
            </div>
          </Card>

          {/* System Status */}
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>System Status</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Database', status: 'Operational', dot: 'success' },
                { label: 'OIML Engine', status: 'Operational', dot: 'success' },
                { label: 'Report Service', status: 'Operational', dot: 'success' },
                { label: 'Backup', status: 'Last: 2h ago', dot: 'teal' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12.5, color: VS.textMuted }}>{s.label}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, fontWeight: 500, color: VS.textMain }}>
                    <StatusDot color={s.dot} /> {s.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Compliance Summary */}
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>Compliance Summary</h3>
            {[
              { label: 'PASS', value: 891, pct: 94, color: '#15803D' },
              { label: 'REVIEW', value: 47, pct: 4, color: '#B45309' },
              { label: 'FAIL', value: 19, pct: 2, color: '#DC2626' },
            ].map(c => (
              <div key={c.label} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 12, color: VS.textMuted, fontWeight: 500 }}>{c.label}</span>
                  <span style={{ fontSize: 12, color: c.color, fontWeight: 700 }}>{c.value}</span>
                </div>
                <div style={{ height: 6, borderRadius: 4, background: VS.borderLight, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${c.pct}%`, background: c.color, borderRadius: 4, transition: 'width 0.6s ease' }} />
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
