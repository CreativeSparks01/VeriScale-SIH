import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const instruments = [
  { id: 'INS-001', name: 'Mettler Toledo XPE205', serial: 'MT-X0022541', class: 'I', capacity: '220 g', location: 'Lab A', status: 'ACTIVE', lastVerified: '12 Aug 2026' },
  { id: 'INS-002', name: 'Sartorius Entris II', serial: 'SA-E0018832', class: 'II', capacity: '6200 g', location: 'Lab B', status: 'ACTIVE', lastVerified: '04 Sep 2026' },
  { id: 'INS-005', name: 'Kern PCB 6000-1', serial: 'KE-P0067203', class: 'III', capacity: '6000 g', location: 'Lab B', status: 'ACTIVE', lastVerified: '25 Aug 2026' },
  { id: 'INS-006', name: 'Shimadzu UX6200H', serial: 'SH-U0041875', class: 'II', capacity: '6200 g', location: 'Lab A', status: 'ACTIVE', lastVerified: '18 Aug 2026' },
];

export default function NewTestSelectInstrument() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = instruments.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase()) || i.serial.toLowerCase().includes(search.toLowerCase())
  );

  const actions = (
    <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/instruments')}>Back</Btn>
  );

  return (
    <AppShell title="New Verification Test" subtitle="Step 1 of 4 — Select Instrument" activePath="/tests/select-instrument" actions={actions}>

      {/* Progress bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 24 }}>
        {['Select Instrument', 'Environmental Conditions', 'Test Selection', 'Execute Tests'].map((s, i) => (
          <React.Fragment key={s}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: i === 0 ? VS.primary : VS.borderLight,
                color: i === 0 ? '#fff' : VS.textMuted, fontSize: 12, fontWeight: 700,
              }}>{i + 1}</div>
              <span style={{ fontSize: 12.5, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? VS.textMain : VS.textMuted, whiteSpace: 'nowrap' }}>{s}</span>
            </div>
            {i < 3 && <div style={{ flex: 1, height: 2, background: VS.borderLight, margin: '0 10px', minWidth: 16 }} />}
          </React.Fragment>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
        {/* Instrument List */}
        <Card style={{ overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${VS.border}` }}>
            <h3 style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, margin: '0 0 12px' }}>Select an Instrument to Verify</h3>
            <div style={{ position: 'relative' }}>
              <span className="material-symbols-outlined" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: VS.textMuted }}>search</span>
              <input
                value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search by name or serial number…"
                style={{
                  width: '100%', paddingLeft: 34, paddingRight: 12, height: 38,
                  border: `1px solid ${VS.border}`, borderRadius: 7, fontSize: 13,
                  color: VS.textMain, background: VS.page, outline: 'none',
                  fontFamily: 'inherit', boxSizing: 'border-box',
                }}
              />
            </div>
          </div>
          <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {filtered.map(ins => (
              <div
                key={ins.id}
                onClick={() => setSelected(ins)}
                style={{
                  padding: '14px 16px', borderRadius: 10, border: `2px solid`,
                  borderColor: selected?.id === ins.id ? VS.teal : VS.border,
                  background: selected?.id === ins.id ? VS.tealLight : '#fff',
                  cursor: 'pointer', transition: 'all 0.15s ease',
                  display: 'flex', alignItems: 'center', gap: 14,
                }}
                onMouseEnter={e => { if (selected?.id !== ins.id) e.currentTarget.style.borderColor = VS.textMuted; }}
                onMouseLeave={e => { if (selected?.id !== ins.id) e.currentTarget.style.borderColor = VS.border; }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: selected?.id === ins.id ? 'rgba(0,139,139,0.2)' : VS.page,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: selected?.id === ins.id ? VS.teal : VS.textMuted }}>scale</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: VS.textMain, marginBottom: 2 }}>{ins.name}</div>
                  <div style={{ fontSize: 12, color: VS.textMuted }}>{ins.serial} • Class {ins.class} • {ins.capacity} • {ins.location}</div>
                  <div style={{ fontSize: 11.5, color: VS.textMuted, marginTop: 3 }}>Last verified: {ins.lastVerified}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                  <Badge color="success"><StatusDot color="success" /> Active</Badge>
                  {selected?.id === ins.id && (
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: VS.teal }}>check_circle</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Selection Summary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>Selection Summary</h3>
            {selected ? (
              <div>
                <div style={{ padding: 14, borderRadius: 8, background: VS.tealLight, border: `1px solid ${VS.tealBorder}`, marginBottom: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: VS.teal, marginBottom: 4 }}>{selected.name}</div>
                  <div style={{ fontSize: 12, color: VS.textMuted }}>{selected.serial}</div>
                </div>
                {[
                  { label: 'OIML Class', value: `Class ${selected.class}` },
                  { label: 'Capacity', value: selected.capacity },
                  { label: 'Location', value: selected.location },
                  { label: 'Last Verified', value: selected.lastVerified },
                ].map(f => (
                  <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: `1px solid ${VS.borderLight}` }}>
                    <span style={{ fontSize: 12, color: VS.textMuted }}>{f.label}</span>
                    <span style={{ fontSize: 12.5, fontWeight: 600, color: VS.textMain }}>{f.value}</span>
                  </div>
                ))}
                <Btn
                  variant="primary" icon="arrow_forward"
                  onClick={() => navigate('/tests/environmental-conditions')}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}
                >
                  Continue
                </Btn>
              </div>
            ) : (
              <div style={{ padding: '24px 16px', textAlign: 'center', color: VS.textMuted }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, display: 'block', marginBottom: 10, opacity: 0.4 }}>scale</span>
                <p style={{ fontSize: 13, margin: 0 }}>Select an instrument from the list to begin verification</p>
              </div>
            )}
          </Card>

          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: VS.textMain, margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15, color: VS.teal }}>info</span>
              Before You Begin
            </h3>
            <ul style={{ fontSize: 12, color: VS.textMuted, margin: 0, paddingLeft: 16, lineHeight: 2 }}>
              <li>Ensure calibration weights are available</li>
              <li>Check that environmental conditions are within limits</li>
              <li>Allow instrument to warm up for at least 30 minutes</li>
              <li>Level the instrument before testing</li>
            </ul>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
