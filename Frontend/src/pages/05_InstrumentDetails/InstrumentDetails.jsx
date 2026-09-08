import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const instrument = {
  id: 'INS-002', name: 'Sartorius Entris II', model: 'BCE6202i', serial: 'SA-E0018832',
  manufacturer: 'Sartorius AG', class: 'II', capacity: '6200 g', division: '0.01 g',
  status: 'ACTIVE', location: 'Laboratory B – Bay 3', lastVerified: '04 Sep 2026',
  nextDue: '04 Sep 2027', purchaseDate: '15 Mar 2022', approvalNo: 'OIML-D28-SA22041',
  maxTemp: '35 °C', minTemp: '10 °C', humidity: '85% RH',
};

const testHistory = [
  { id: 'VST-2024-0846', date: '04 Sep 2026', type: 'Full OIML R 76', status: 'PASS', operator: 'Priya K.' },
  { id: 'VST-2024-0791', date: '12 Jun 2026', type: 'Accuracy + Eccentric', status: 'PASS', operator: 'Manan S.' },
  { id: 'VST-2024-0712', date: '18 Mar 2026', type: 'Repeatability Only', status: 'REVIEW', operator: 'Arjun V.' },
];

const specs = [
  { label: 'Capacity', value: '6200 g' }, { label: 'Min. Load', value: '20 g' },
  { label: 'Scale Division (d)', value: '0.01 g' }, { label: 'Verification Division (e)', value: '0.01 g' },
  { label: 'OIML Class', value: 'Class II' }, { label: 'Approval No.', value: 'OIML-D28-SA22041' },
  { label: 'Max Temperature', value: '35 °C' }, { label: 'Min Temperature', value: '10 °C' },
  { label: 'Max Humidity', value: '85% RH' },
];

export default function InstrumentDetails() {
  const navigate = useNavigate();

  const actions = (
    <>
      <Btn variant="secondary" icon="edit" onClick={() => navigate('/instruments/add')}>Edit</Btn>
      <Btn variant="primary" icon="experiment" onClick={() => navigate('/tests/select-instrument')}>Start Test</Btn>
    </>
  );

  return (
    <AppShell 
      title="Instrument Details" 
      subtitle={`${instrument.name} — ${instrument.serial}`} 
      activePath="/instruments" 
      actions={actions}
      breadcrumbs={[
        { label: 'INSTRUMENTS', path: '/instruments' },
        { label: instrument.name }
      ]}
    >

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
        {/* LEFT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* Identity Card */}
          <Card style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: VS.tealLight, border: `1px solid ${VS.tealBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 28, color: VS.teal }}>scale</span>
                </div>
                <div>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: VS.textMain, margin: '0 0 4px' }}>{instrument.name}</h2>
                  <p style={{ fontSize: 13, color: VS.textMuted, margin: 0 }}>Model: {instrument.model} • {instrument.manufacturer}</p>
                  <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    <Badge color="success"><StatusDot color="success" /> Active</Badge>
                    <Badge color="teal">Class {instrument.class}</Badge>
                    <Badge color="primary">{instrument.approvalNo}</Badge>
                  </div>
                </div>
              </div>
              <Badge color="default" style={{ fontSize: 12, padding: '4px 10px' }}>{instrument.id}</Badge>
            </div>

            {/* Quick info row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
              {[
                { label: 'Serial Number', value: instrument.serial },
                { label: 'Location', value: instrument.location },
                { label: 'Last Verified', value: instrument.lastVerified },
                { label: 'Next Due', value: instrument.nextDue },
              ].map(f => (
                <div key={f.label} style={{ padding: '12px 14px', borderRadius: 8, background: VS.page, border: `1px solid ${VS.border}` }}>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>{f.label}</div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: VS.textMain }}>{f.value}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Technical Specifications */}
          <Card style={{ padding: 24 }}>
            <h3 style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, margin: '0 0 18px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal }}>settings</span>
              Technical Specifications
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
              {specs.map(s => (
                <div key={s.label} style={{ padding: '12px 14px', borderRadius: 8, background: VS.page, border: `1px solid ${VS.border}` }}>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{s.value}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Test History */}
          <Card style={{ overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${VS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal }}>history</span>
                Verification History
              </h3>
              <Btn variant="secondary" small icon="open_in_full" onClick={() => navigate('/instruments/history')}>Full History</Btn>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: `1px solid ${VS.border}` }}>
                  {['Test ID', 'Date', 'Type', 'Status', 'Operator'].map(h => (
                    <th key={h} style={{ padding: '9px 16px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {testHistory.map(t => (
                  <tr key={t.id} style={{ borderBottom: `1px solid ${VS.borderLight}`, cursor: 'pointer', transition: 'background 0.12s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    onClick={() => navigate('/instruments/history')}
                  >
                    <td style={{ padding: '12px 16px', fontSize: 12.5, fontWeight: 600, color: VS.teal }}>{t.id}</td>
                    <td style={{ padding: '12px 16px', fontSize: 13, color: VS.textMuted }}>{t.date}</td>
                    <td style={{ padding: '12px 16px', fontSize: 13, color: VS.textMain }}>{t.type}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <Badge color={t.status === 'PASS' ? 'success' : t.status === 'FAIL' ? 'error' : 'warning'}><StatusDot color={t.status === 'PASS' ? 'success' : t.status === 'FAIL' ? 'error' : 'warning'} /> {t.status}</Badge>
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: 13, color: VS.textMuted }}>{t.operator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>

        {/* RIGHT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 16px' }}>Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Start New Verification', icon: 'play_circle', path: '/tests/select-instrument', variant: 'primary' },
                { label: 'View Test History', icon: 'history', path: '/instruments/history', variant: 'secondary' },
                { label: 'Edit Instrument', icon: 'edit', path: '/instruments/add', variant: 'secondary' },
                { label: 'View Reports', icon: 'description', path: '/reports/repository', variant: 'secondary' },
                { label: 'View Compliance', icon: 'verified', path: '/compliance', variant: 'secondary' },
              ].map(a => (
                <Btn key={a.label} variant={a.variant} icon={a.icon} onClick={() => navigate(a.path)} style={{ width: '100%', justifyContent: 'flex-start' }}>
                  {a.label}
                </Btn>
              ))}
            </div>
          </Card>

          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>Calibration Status</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: VS.textMuted }}>Calibration valid until</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#15803D' }}>04 Sep 2027</span>
                </div>
                <div style={{ height: 8, background: VS.borderLight, borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '2%', background: '#15803D', borderRadius: 4 }} />
                </div>
                <div style={{ fontSize: 11, color: VS.textMuted, marginTop: 4 }}>Verified 2 days ago</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderRadius: 8, background: VS.successLight, border: `1px solid ${VS.successBorder}` }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#15803D' }}>check_circle</span>
                <span style={{ fontSize: 12.5, color: '#15803D', fontWeight: 500 }}>Certificate is current and valid</span>
              </div>
            </div>
          </Card>

          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>Environmental Limits</h3>
            {[
              { label: 'Temperature Range', value: `${instrument.minTemp} – ${instrument.maxTemp}` },
              { label: 'Max Humidity', value: instrument.humidity },
              { label: 'Purchase Date', value: instrument.purchaseDate },
            ].map(f => (
              <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${VS.borderLight}` }}>
                <span style={{ fontSize: 12.5, color: VS.textMuted }}>{f.label}</span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: VS.textMain }}>{f.value}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
