import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot, Input, Select } from '../../components/AppShell';

const REPORTS = [
  { id: 'CERT-TR-0091', testId: 'TEST-012', instrument: 'ABC WeighTech WT-100', serial: 'WT100-2026-001', date: '06 Sep 2026', officer: 'M. Sharma', class: 'Class III', status: 'VALID' },
  { id: 'CERT-TR-0090', testId: 'TEST-011', instrument: 'Sartorius Entris II', serial: 'SA-E0018832', date: '04 Sep 2026', officer: 'A. Kumar', class: 'Class II', status: 'VALID' },
  { id: 'CERT-TR-0089', testId: 'TEST-010', instrument: 'Mettler Toledo ME204', serial: 'MT-ME-99120', date: '01 Sep 2026', officer: 'M. Sharma', class: 'Class I', status: 'VALID' },
  { id: 'CERT-TR-0088', testId: 'TEST-009', instrument: 'Ohaus Defender 3000', serial: 'OH-DEF-3129', date: '28 Aug 2026', officer: 'P. Sharma', class: 'Class III', status: 'EXPIRED' },
  { id: 'CERT-TR-0087', testId: 'TEST-008', instrument: 'A&D Weighing GX-600', serial: 'AD-GX6-5541', date: '25 Aug 2026', officer: 'M. Sharma', class: 'Class II', status: 'VALID' },
];

export default function ReportRepository() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [filterClass, setFilterClass] = useState('ALL');

  const filtered = REPORTS.filter(r => {
    const matchQuery = r.id.toLowerCase().includes(query.toLowerCase()) ||
                       r.instrument.toLowerCase().includes(query.toLowerCase()) ||
                       r.testId.toLowerCase().includes(query.toLowerCase());
    const matchClass = filterClass === 'ALL' || r.class === filterClass;
    return matchQuery && matchClass;
  });

  const breadcrumbs = [
    { label: 'REPORTS', path: '/reports/repository' },
    { label: 'CERTIFICATE REPOSITORY' },
  ];

  const actions = (
    <>
      <Btn variant="secondary" icon="layers" onClick={() => navigate('/reports/templates')}>
        Report Templates
      </Btn>
      <Btn variant="primary" icon="add" onClick={() => navigate('/tests/select-instrument')}>
        New Verification Test
      </Btn>
    </>
  );

  return (
    <AppShell
      title="Verification Certificate Repository"
      subtitle="Immutable Statutory Archive of OIML R 76 Calibration & Verification Certificates"
      activePath="/reports/repository"
      actions={actions}
      breadcrumbs={breadcrumbs}
    >
      {/* ── KPI Strip ────────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
        {[
          { label: 'Archived Certificates', val: '1,482 Issued', icon: 'verified', accent: VS.teal },
          { label: 'Current Valid Seals', val: '1,440 Active', icon: 'check_circle', accent: VS.success },
          { label: 'Renewal Required', val: '42 Expired', icon: 'warning', accent: VS.warning },
          { label: 'Accreditation', val: 'ISO/IEC 17025', icon: 'gavel', accent: VS.primary },
        ].map((item, i) => (
          <Card key={i} style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 24, color: item.accent }}>{item.icon}</span>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{item.label}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: item.accent, marginTop: 2 }}>{item.val}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* ── Search & Filter Controls ─────────────────────────────────── */}
      <Card style={{ padding: '16px 20px', marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <Input
              placeholder="Search by Certificate ID, Test ID or Instrument..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <div style={{ width: 180 }}>
            <Select value={filterClass} onChange={e => setFilterClass(e.target.value)}>
              <option value="ALL">All Accuracy Classes</option>
              <option value="Class I">Class I (Special)</option>
              <option value="Class II">Class II (High)</option>
              <option value="Class III">Class III (Medium)</option>
            </Select>
          </div>
          <Btn variant="secondary" icon="download">
            Export Ledger (CSV)
          </Btn>
        </div>
      </Card>

      {/* ── Repository Table ─────────────────────────────────────────── */}
      <Card style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
          <thead>
            <tr style={{ background: VS.cardAlt, borderBottom: `1px solid ${VS.border}` }}>
              {['Certificate ID', 'Test Record', 'Instrument Description', 'Serial Number', 'Issued Date', 'Authorized By', 'Status', 'Actions'].map((h, i) => (
                <th key={i} style={{ padding: '12px 18px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((rep, idx) => (
              <tr key={rep.id} style={{ borderBottom: `1px solid ${VS.borderLight}`, background: idx % 2 === 0 ? '#fff' : VS.cardAlt }}>
                <td style={{ padding: '14px 18px', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, color: VS.primary }}>
                  {rep.id}
                </td>
                <td style={{ padding: '14px 18px' }}>
                  <button
                    type="button"
                    onClick={() => navigate('/tests/workspace')}
                    style={{ background: 'none', border: 'none', padding: 0, color: VS.teal, fontWeight: 600, fontFamily: "'IBM Plex Mono', monospace", cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    {rep.testId}
                  </button>
                </td>
                <td style={{ padding: '14px 18px', fontWeight: 600, color: VS.textMain }}>
                  {rep.instrument}
                  <span style={{ marginLeft: 6, fontSize: 10, background: '#E2E8F0', padding: '1px 6px', borderRadius: 4, fontWeight: 700 }}>
                    {rep.class}
                  </span>
                </td>
                <td style={{ padding: '14px 18px', fontFamily: "'IBM Plex Mono', monospace", color: VS.textMuted, fontSize: 12.5 }}>
                  {rep.serial}
                </td>
                <td style={{ padding: '14px 18px', color: VS.textMuted }}>
                  {rep.date}
                </td>
                <td style={{ padding: '14px 18px', fontWeight: 500 }}>
                  {rep.officer}
                </td>
                <td style={{ padding: '14px 18px' }}>
                  <Badge color={rep.status === 'VALID' ? 'success' : 'error'}>
                    <StatusDot color={rep.status === 'VALID' ? 'success' : 'error'} /> {rep.status}
                  </Badge>
                </td>
                <td style={{ padding: '14px 18px' }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <Btn variant="secondary" icon="visibility" onClick={() => navigate('/reports/generate')} style={{ padding: '4px 8px', fontSize: 12 }}>
                      View
                    </Btn>
                    <button
                      type="button"
                      title="Download PDF"
                      onClick={() => alert(`Downloading ${rep.id}.pdf`)}
                      style={{ background: 'none', border: `1px solid ${VS.border}`, borderRadius: 6, padding: '4px 8px', cursor: 'pointer', color: VS.primary }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
