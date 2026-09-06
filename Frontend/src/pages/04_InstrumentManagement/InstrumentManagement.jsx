import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const instruments = [
  { id: 'INS-001', name: 'Mettler Toledo XPE205', model: 'XPE205', serial: 'MT-X0022541', class: 'I', capacity: '220 g', division: '0.01 mg', status: 'ACTIVE', lastVerified: '12 Aug 2026', nextDue: '12 Aug 2027', location: 'Lab A' },
  { id: 'INS-002', name: 'Sartorius Entris II', model: 'BCE6202i', serial: 'SA-E0018832', class: 'II', capacity: '6200 g', division: '0.01 g', status: 'ACTIVE', lastVerified: '04 Sep 2026', nextDue: '04 Sep 2027', location: 'Lab B' },
  { id: 'INS-003', name: 'Ohaus Scout SKX', model: 'SKX6201', serial: 'OH-S0031120', class: 'III', capacity: '6200 g', division: '0.1 g', status: 'TESTING', lastVerified: '01 Sep 2026', nextDue: '01 Sep 2027', location: 'Lab A' },
  { id: 'INS-004', name: 'A&D GF-6002A', model: 'GF-6002A', serial: 'AD-G0009944', class: 'II', capacity: '6200 g', division: '0.01 g', status: 'EXPIRED', lastVerified: '10 Jan 2026', nextDue: '10 Jan 2026', location: 'Lab C' },
  { id: 'INS-005', name: 'Kern PCB 6000-1', model: 'PCB 6000-1', serial: 'KE-P0067203', class: 'III', capacity: '6000 g', division: '1 g', status: 'ACTIVE', lastVerified: '25 Aug 2026', nextDue: '25 Aug 2027', location: 'Lab B' },
  { id: 'INS-006', name: 'Shimadzu UX6200H', model: 'UX6200H', serial: 'SH-U0041875', class: 'II', capacity: '6200 g', division: '0.01 g', status: 'ACTIVE', lastVerified: '18 Aug 2026', nextDue: '18 Aug 2027', location: 'Lab A' },
  { id: 'INS-007', name: 'Radwag AS 220/C/2', model: 'AS220/C/2', serial: 'RW-A0023301', class: 'I', capacity: '220 g', division: '0.01 mg', status: 'MAINTENANCE', lastVerified: '30 Jul 2026', nextDue: '30 Jul 2027', location: 'Lab C' },
];

const statusMap = {
  ACTIVE:      { color: 'success', label: 'Active' },
  TESTING:     { color: 'teal',    label: 'Testing' },
  EXPIRED:     { color: 'error',   label: 'Expired' },
  MAINTENANCE: { color: 'warning', label: 'Maintenance' },
};

const kpis = [
  { label: 'Total', value: 1248, icon: 'scale', accent: VS.primary },
  { label: 'Active', value: 1085, icon: 'check_circle', accent: '#15803D' },
  { label: 'Under Testing', value: 63, icon: 'science', accent: VS.teal },
  { label: 'Expired', value: 14, icon: 'timer_off', accent: '#DC2626' },
];

export default function InstrumentManagement() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL');

  const filtered = instruments.filter(ins => {
    const matchSearch = ins.name.toLowerCase().includes(search.toLowerCase()) || ins.serial.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'ALL' || ins.status === filter;
    return matchSearch && matchFilter;
  });

  const actions = (
    <>
      <Btn variant="secondary" icon="file_download">Export</Btn>
      <Btn variant="primary" icon="add" onClick={() => navigate('/instruments/add')}>Add Instrument</Btn>
    </>
  );

  return (
    <AppShell title="Instrument Management" subtitle="Manage registered NAWI instruments and technical specifications" activePath="/instruments" actions={actions}>

      {/* KPI Strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 24 }}>
        {kpis.map(k => (
          <Card key={k.label} style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }} hover>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: `${k.accent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, color: k.accent }}>{k.icon}</span>
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: VS.textMain, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{k.value.toLocaleString()}</div>
              <div style={{ fontSize: 12, color: VS.textMuted, marginTop: 2 }}>{k.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Table Card */}
      <Card style={{ overflow: 'hidden' }}>
        {/* Toolbar */}
        <div style={{
          padding: '14px 20px', borderBottom: `1px solid ${VS.border}`,
          display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
        }}>
          {/* Search */}
          <div style={{ position: 'relative', flex: 1, minWidth: 220 }}>
            <span className="material-symbols-outlined" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: VS.textMuted }}>search</span>
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search by name or serial number…"
              style={{
                width: '100%', paddingLeft: 34, paddingRight: 12, height: 36,
                border: `1px solid ${VS.border}`, borderRadius: 7, fontSize: 13,
                color: VS.textMain, background: VS.page, outline: 'none', fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: 6, background: VS.page, padding: 4, borderRadius: 8, border: `1px solid ${VS.border}` }}>
            {['ALL', 'ACTIVE', 'TESTING', 'EXPIRED', 'MAINTENANCE'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '4px 12px', borderRadius: 5, fontSize: 12, fontWeight: 600,
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.12s',
                  background: filter === f ? VS.primary : 'transparent',
                  color: filter === f ? '#fff' : VS.textMuted,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: `1px solid ${VS.border}` }}>
                {['Instrument', 'Serial No.', 'Class', 'Capacity / Division', 'Location', 'Status', 'Last Verified', 'Next Due', ''].map(h => (
                  <th key={h} style={{ padding: '9px 14px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(ins => {
                const s = statusMap[ins.status];
                return (
                  <tr
                    key={ins.id}
                    onClick={() => navigate('/instruments/details')}
                    style={{ borderBottom: `1px solid ${VS.borderLight}`, cursor: 'pointer', transition: 'background 0.12s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <td style={{ padding: '12px 14px' }}>
                      <div style={{ fontSize: 13.5, fontWeight: 600, color: VS.textMain }}>{ins.name}</div>
                      <div style={{ fontSize: 11.5, color: VS.textMuted, marginTop: 2 }}>{ins.model}</div>
                    </td>
                    <td style={{ padding: '12px 14px', fontSize: 12.5, color: VS.textMuted, fontVariantNumeric: 'tabular-nums' }}>{ins.serial}</td>
                    <td style={{ padding: '12px 14px' }}>
                      <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 11.5, fontWeight: 700, background: VS.tealLight, color: VS.teal, border: `1px solid ${VS.tealBorder}` }}>Class {ins.class}</span>
                    </td>
                    <td style={{ padding: '12px 14px', fontSize: 12.5, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>
                      <div>{ins.capacity}</div>
                      <div style={{ fontSize: 11.5, color: VS.textMuted }}>d = {ins.division}</div>
                    </td>
                    <td style={{ padding: '12px 14px', fontSize: 12.5, color: VS.textMuted }}>{ins.location}</td>
                    <td style={{ padding: '12px 14px' }}>
                      <Badge color={s.color}><StatusDot color={s.color} /> {s.label}</Badge>
                    </td>
                    <td style={{ padding: '12px 14px', fontSize: 12.5, color: VS.textMuted, fontVariantNumeric: 'tabular-nums' }}>{ins.lastVerified}</td>
                    <td style={{ padding: '12px 14px', fontSize: 12.5, color: ins.status === 'EXPIRED' ? VS.error : VS.textMuted, fontWeight: ins.status === 'EXPIRED' ? 600 : 400 }}>{ins.nextDue}</td>
                    <td style={{ padding: '12px 14px' }}>
                      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: VS.textMuted, display: 'flex', alignItems: 'center', padding: 4, borderRadius: 4 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_right</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination strip */}
        <div style={{ padding: '12px 20px', borderTop: `1px solid ${VS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 12.5, color: VS.textMuted }}>Showing {filtered.length} of 1,248 instruments</span>
          <div style={{ display: 'flex', gap: 4 }}>
            {['chevron_left', 'chevron_right'].map(icon => (
              <button key={icon} style={{ background: VS.page, border: `1px solid ${VS.border}`, borderRadius: 6, padding: '4px 8px', cursor: 'pointer', color: VS.textMuted, display: 'flex', alignItems: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{icon}</span>
              </button>
            ))}
          </div>
        </div>
      </Card>
    </AppShell>
  );
}
