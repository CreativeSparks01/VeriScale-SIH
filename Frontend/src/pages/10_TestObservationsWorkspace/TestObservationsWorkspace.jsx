import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const MODULES = [
  { id: 'accuracy',      label: 'Accuracy',      icon: 'analytics',  path: '/tests/accuracy',              status: 'PENDING' },
  { id: 'eccentricity',  label: 'Eccentric',     icon: 'crop_rotate', path: '/tests/eccentricity',          status: 'PENDING' },
  { id: 'repeatability', label: 'Repeatability', icon: 'replay',     path: '/tests/repeatability',          status: 'PENDING' },
  { id: 'tare',          label: 'Tare',           icon: 'exposure_zero', path: '/tests/tare',               status: 'PENDING' },
  { id: 'zero',          label: 'Zero',           icon: 'adjust',     path: '/tests/zero',                   status: 'PENDING' },
];

const statusColors = { PENDING: 'default', RUNNING: 'teal', PASS: 'success', FAIL: 'error' };
const statusDots   = { PENDING: 'gray', RUNNING: 'teal', PASS: 'success', FAIL: 'error' };

export default function TestObservationsWorkspace() {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState('accuracy');
  const [moduleStatuses, setModuleStatuses] = useState({ accuracy: 'RUNNING' });

  const markStatus = (id, status) => setModuleStatuses(s => ({ ...s, [id]: status }));

  const actions = (
    <>
      <Btn variant="secondary" icon="save">Save Progress</Btn>
      <Btn variant="primary" icon="check" onClick={() => navigate('/compliance')}>Finalize & Submit</Btn>
    </>
  );

  return (
    <AppShell title="Test Observations Workspace" subtitle="Sartorius Entris II — SA-E0018832 | Full OIML R 76 Suite" activePath="/tests/select-instrument" actions={actions}>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 280px', gap: 20 }}>

        {/* Module Sidebar */}
        <Card style={{ padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0 6px', marginBottom: 6 }}>Test Modules</div>
          {MODULES.map(m => {
            const st = moduleStatuses[m.id] || 'PENDING';
            const isActive = activeModule === m.id;
            return (
              <button
                key={m.id}
                onClick={() => { setActiveModule(m.id); if (st === 'PENDING') markStatus(m.id, 'RUNNING'); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '10px 10px', borderRadius: 8, border: `1px solid ${isActive ? VS.teal : 'transparent'}`,
                  background: isActive ? VS.tealLight : 'transparent',
                  cursor: 'pointer', fontFamily: VS.font, textAlign: 'left', width: '100%',
                  transition: 'all 0.14s',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = VS.page; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 17, color: isActive ? VS.teal : VS.textMuted }}>{m.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: isActive ? 700 : 500, color: VS.textMain }}>{m.label}</div>
                  <div style={{ fontSize: 11, color: VS.textMuted, marginTop: 1, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <StatusDot color={statusDots[st]} /> {st}
                  </div>
                </div>
                {st === 'PASS' && <span className="material-symbols-outlined" style={{ fontSize: 16, color: VS.success }}>check_circle</span>}
                {st === 'FAIL' && <span className="material-symbols-outlined" style={{ fontSize: 16, color: VS.error }}>cancel</span>}
              </button>
            );
          })}

          <div style={{ marginTop: 12, borderTop: `1px solid ${VS.border}`, paddingTop: 12 }}>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0 6px', marginBottom: 8 }}>Progress</div>
            {[
              { label: 'Completed', value: Object.values(moduleStatuses).filter(s => s === 'PASS' || s === 'FAIL').length, color: VS.teal },
              { label: 'Passed', value: Object.values(moduleStatuses).filter(s => s === 'PASS').length, color: VS.success },
              { label: 'Failed', value: Object.values(moduleStatuses).filter(s => s === 'FAIL').length, color: VS.error },
            ].map(p => (
              <div key={p.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 6px' }}>
                <span style={{ fontSize: 12, color: VS.textMuted }}>{p.label}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: p.color }}>{p.value}</span>
              </div>
            ))}
            <div style={{ margin: '8px 6px 0', height: 6, background: VS.borderLight, borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(Object.values(moduleStatuses).filter(s => s === 'PASS' || s === 'FAIL').length / MODULES.length) * 100}%`, background: VS.teal, borderRadius: 4, transition: 'width 0.4s ease' }} />
            </div>
          </div>
        </Card>

        {/* Test Area */}
        <Card style={{ padding: 24 }}>
          {activeModule === 'accuracy' && <AccuracyModule navigate={navigate} markStatus={markStatus} />}
          {activeModule !== 'accuracy' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400, textAlign: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 48, color: VS.textDim, marginBottom: 16 }}>
                {MODULES.find(m => m.id === activeModule)?.icon}
              </span>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: VS.textMain, margin: '0 0 8px' }}>
                {MODULES.find(m => m.id === activeModule)?.label} Test
              </h3>
              <p style={{ fontSize: 13.5, color: VS.textMuted, marginBottom: 24 }}>Click the button below to navigate to the dedicated test module.</p>
              <div style={{ display: 'flex', gap: 10 }}>
                <Btn variant="primary" icon="open_in_new" onClick={() => navigate(MODULES.find(m => m.id === activeModule)?.path)}>Open Test Module</Btn>
                <Btn variant="secondary" icon="check" onClick={() => markStatus(activeModule, 'PASS')}>Mark as Pass</Btn>
                <Btn variant="danger" icon="close" onClick={() => markStatus(activeModule, 'FAIL')}>Mark as Fail</Btn>
              </div>
            </div>
          )}
        </Card>

        {/* Info Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ padding: 18 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: VS.textMain, margin: '0 0 12px' }}>Instrument</h3>
            <div style={{ fontSize: 13, fontWeight: 600, color: VS.teal, marginBottom: 4 }}>Sartorius Entris II</div>
            <div style={{ fontSize: 12, color: VS.textMuted }}>SA-E0018832 • Class II</div>
            <div style={{ fontSize: 12, color: VS.textMuted, marginTop: 2 }}>Max: 6200 g • d = 0.01 g</div>
          </Card>
          <Card style={{ padding: 18 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: VS.textMain, margin: '0 0 12px' }}>Environment</h3>
            {[['Temperature', '22.4 °C'], ['Humidity', '55% RH'], ['Pressure', '1013.2 hPa']].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: `1px solid ${VS.borderLight}` }}>
                <span style={{ fontSize: 12, color: VS.textMuted }}>{l}</span>
                <span style={{ fontSize: 12.5, fontWeight: 600, color: VS.textMain }}>{v}</span>
              </div>
            ))}
          </Card>
          <Card style={{ padding: 18 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: VS.textMain, margin: '0 0 12px' }}>Quick Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Btn variant="secondary" small icon="analytics" onClick={() => navigate('/tests/accuracy')} style={{ width: '100%', justifyContent: 'flex-start' }}>Accuracy Test</Btn>
              <Btn variant="secondary" small icon="crop_rotate" onClick={() => navigate('/tests/eccentricity')} style={{ width: '100%', justifyContent: 'flex-start' }}>Eccentric Test</Btn>
              <Btn variant="secondary" small icon="replay" onClick={() => navigate('/tests/repeatability')} style={{ width: '100%', justifyContent: 'flex-start' }}>Repeatability Test</Btn>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function AccuracyModule({ navigate, markStatus }) {
  const [observations, setObservations] = useState([
    { load: '0', indication: '0.00', error: '0.00' },
    { load: '500', indication: '500.01', error: '+0.01' },
    { load: '1000', indication: '1000.02', error: '+0.02' },
    { load: '2000', indication: '2000.00', error: '0.00' },
    { load: '4000', indication: '3999.99', error: '-0.01' },
    { load: '6200', indication: '6200.03', error: '+0.03' },
  ]);

  const mpe = 0.05; // grams
  const allPass = observations.every(o => Math.abs(parseFloat(o.error)) <= mpe);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: VS.textMain, margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal }}>analytics</span>
            Accuracy / Error of Indication
          </h3>
          <p style={{ fontSize: 12, color: VS.textMuted, margin: '4px 0 0' }}>OIML R 76 §3.5 • MPE: ±{mpe} g (Class II)</p>
        </div>
        <Badge color={allPass ? 'success' : 'error'}>
          <StatusDot color={allPass ? 'success' : 'error'} /> {allPass ? 'WITHIN MPE' : 'EXCEEDS MPE'}
        </Badge>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 20 }}>
        <thead>
          <tr style={{ background: '#F8FAFC', borderBottom: `1px solid ${VS.border}` }}>
            {['Applied Load (g)', 'Indicated Value (g)', 'Error E = I–L (g)', 'MPE (g)', 'Result'].map(h => (
              <th key={h} style={{ padding: '8px 14px', textAlign: 'left', fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {observations.map((o, i) => {
            const err = parseFloat(o.error);
            const pass = Math.abs(err) <= mpe;
            return (
              <tr key={i} style={{ borderBottom: `1px solid ${VS.borderLight}` }}>
                <td style={{ padding: '10px 14px', fontSize: 13.5, fontWeight: 600, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{o.load}</td>
                <td style={{ padding: '10px 14px', fontSize: 13.5, color: VS.textMain, fontVariantNumeric: 'tabular-nums' }}>{o.indication}</td>
                <td style={{ padding: '10px 14px', fontSize: 13.5, fontWeight: 700, color: pass ? VS.success : VS.error, fontVariantNumeric: 'tabular-nums' }}>{o.error}</td>
                <td style={{ padding: '10px 14px', fontSize: 13.5, color: VS.textMuted, fontVariantNumeric: 'tabular-nums' }}>±{mpe}</td>
                <td style={{ padding: '10px 14px' }}>
                  <Badge color={pass ? 'success' : 'error'}>{pass ? 'PASS' : 'FAIL'}</Badge>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ display: 'flex', gap: 10 }}>
        <Btn variant="teal" icon="check" onClick={() => { markStatus('accuracy', 'PASS'); navigate('/tests/workspace'); }}>Confirm PASS</Btn>
        <Btn variant="danger" icon="close" onClick={() => markStatus('accuracy', 'FAIL')}>Record FAIL</Btn>
        <Btn variant="secondary" icon="open_in_full" onClick={() => navigate('/tests/accuracy')}>Full Test View</Btn>
      </div>
    </div>
  );
}
