import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot, Input, Select } from '../../components/AppShell';

const LOGS = [
  { id: 'LOG-9401', time: '06 Sep 2026, 12:46:10 UTC', user: 'Manan Sharma (VER-001)', action: 'RECORD_FINALIZED', target: 'TEST-012', hash: 'e3b0c44298fc1c149afbf4c8996fb924', details: 'Finalized OIML R 76 evaluation; status marked PASS' },
  { id: 'LOG-9400', time: '06 Sep 2026, 12:42:04 UTC', user: 'A. Kumar (TECH-409)', action: 'OBSERVATIONS_SUBMITTED', target: 'TEST-012', hash: '8f434346648f6b96df89dda901c5176b', details: 'Submitted 8 raw observation modules for WT-100' },
  { id: 'LOG-9399', time: '06 Sep 2026, 11:35:18 UTC', user: 'A. Kumar (TECH-409)', action: 'EVIDENCE_UPLOADED', target: 'TEST-012', hash: 'ca978112ca1bbdcafac231b39a23dc4d', details: 'Attached E2 standard weight certificate and photos' },
  { id: 'LOG-9398', time: '06 Sep 2026, 10:14:00 UTC', user: 'A. Kumar (TECH-409)', action: 'ENVIRONMENT_RECORDED', target: 'TEST-012', hash: '7d793037a0760186574b0282f2f435e7', details: 'Ambient: 21.4°C, 48.2% RH, 1013.2 hPa' },
  { id: 'LOG-9397', time: '05 Sep 2026, 16:20:11 UTC', user: 'Manan Sharma (VER-001)', action: 'INSTRUMENT_REGISTERED', target: 'WT100-2026-001', hash: '6a29df14d84b2b3a1a9e8b7c6d5e4f3a', details: 'ABC WeighTech WT-100 registered as Class III' },
  { id: 'LOG-9396', time: '04 Sep 2026, 14:10:55 UTC', user: 'A. Kumar (TECH-409)', action: 'CERTIFICATE_GENERATED', target: 'CERT-TR-0090', hash: '2b4c6e8a0f1d3c5e7b9a1c3e5f7a9b1d', details: 'Statutory certificate issued for Sartorius Entris II' },
];

export default function AuditTrail() {
  const navigate = useNavigate();
  const [filterUser, setFilterUser] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = LOGS.filter(l => {
    const matchSearch = l.target.toLowerCase().includes(search.toLowerCase()) ||
                        l.action.toLowerCase().includes(search.toLowerCase()) ||
                        l.details.toLowerCase().includes(search.toLowerCase());
    const matchUser = filterUser === 'ALL' || l.user.includes(filterUser);
    return matchSearch && matchUser;
  });

  const breadcrumbs = [
    { label: 'ADMINISTRATION', path: '/admin/settings' },
    { label: 'AUDIT TRAIL' },
  ];

  const actions = (
    <>
      <Btn variant="secondary" icon="refresh" onClick={() => alert('Audit Ledger Synchronized')}>
        Sync Ledger
      </Btn>
      <Btn variant="primary" icon="download" onClick={() => alert('Exporting cryptographic audit ledger')}>
        Export Audit Log (JSON-LD)
      </Btn>
    </>
  );

  return (
    <AppShell
      title="Statutory Metrology Audit Trail"
      subtitle="Immutable ISO/IEC 17025 Append-Only Cryptographic Audit Ledger"
      activePath="/admin/audit-trail"
      actions={actions}
      breadcrumbs={breadcrumbs}
    >
      {/* ── Metric Header Cards ───────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
        {[
          { label: 'Integrity Verification', val: 'SHA-256 HASH CHAIN', icon: 'shield', accent: VS.teal },
          { label: 'Total Audit Entries', val: '9,401 Events', icon: 'receipt_long', accent: VS.primary },
          { label: 'Tamper Protection', val: 'Zero Discrepancies', icon: 'verified', accent: VS.success },
          { label: 'Compliance Mandate', val: 'ISO/IEC 17025 §8.4', icon: 'gavel', accent: '#7C3AED' },
        ].map((item, i) => (
          <Card key={i} style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 24, color: item.accent }}>{item.icon}</span>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{item.label}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: item.accent, marginTop: 2 }}>{item.val}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* ── Search & Filter ───────────────────────────────────────────── */}
      <Card style={{ padding: '16px 20px', marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 14 }}>
          <div style={{ flex: 1 }}>
            <Input
              placeholder="Search by Target Entity (e.g. TEST-012), Action, or Details..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div style={{ width: 220 }}>
            <Select value={filterUser} onChange={e => setFilterUser(e.target.value)}>
              <option value="ALL">All Authorized Personnel</option>
              <option value="Manan Sharma">Manan Sharma (Officer)</option>
              <option value="A. Kumar">A. Kumar (Technician)</option>
            </Select>
          </div>
        </div>
      </Card>

      {/* ── Audit Ledger Table ────────────────────────────────────────── */}
      <Card style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: VS.cardAlt, borderBottom: `1px solid ${VS.border}` }}>
              {['Log ID', 'Timestamp (UTC)', 'Authorized Operator', 'Action Code', 'Target Entity', 'Event Details', 'Cryptographic Digest'].map((h, i) => (
                <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((log, idx) => (
              <tr key={log.id} style={{ borderBottom: `1px solid ${VS.borderLight}`, background: idx % 2 === 0 ? '#fff' : VS.cardAlt }}>
                <td style={{ padding: '12px 16px', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, color: VS.primary }}>
                  {log.id}
                </td>
                <td style={{ padding: '12px 16px', color: VS.textMuted, fontSize: 12, whiteSpace: 'nowrap' }}>
                  {log.time}
                </td>
                <td style={{ padding: '12px 16px', fontWeight: 600, color: VS.textMain }}>
                  {log.user}
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <Badge color={log.action.includes('FINAL') ? 'success' : log.action.includes('UPLOAD') ? 'teal' : 'default'}>
                    {log.action}
                  </Badge>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <button
                    type="button"
                    onClick={() => log.target.startsWith('TEST') ? navigate('/compliance') : navigate('/instruments/details')}
                    style={{ background: 'none', border: 'none', padding: 0, color: VS.teal, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    {log.target}
                  </button>
                </td>
                <td style={{ padding: '12px 16px', color: VS.textMain }}>
                  {log.details}
                </td>
                <td style={{ padding: '12px 16px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: VS.textMuted }}>
                  <span style={{ background: '#F1F5F9', padding: '2px 6px', borderRadius: 4 }}>
                    {log.hash.substring(0, 10)}...
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
