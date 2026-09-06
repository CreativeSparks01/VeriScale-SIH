import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn } from '../../components/AppShell';

const TEST_MODULES = [
  {
    id: 'accuracy', label: 'Accuracy / Error of Indication', icon: 'analytics', path: '/tests/accuracy',
    standard: 'OIML R 76 §3.5', required: true,
    desc: 'Tests the difference between the indicated value and the actual load. Core compliance test.',
  },
  {
    id: 'eccentricity', label: 'Eccentric Loading', icon: 'crop_rotate', path: '/tests/eccentricity',
    standard: 'OIML R 76 §3.6', required: true,
    desc: 'Assesses the effect of off-centre loading on indicated values using corner load positions.',
  },
  {
    id: 'repeatability', label: 'Repeatability', icon: 'replay', path: '/tests/repeatability',
    standard: 'OIML R 76 §3.7', required: true,
    desc: 'Evaluates consistency of readings when same load is applied multiple times under identical conditions.',
  },
  {
    id: 'tare', label: 'Tare Device Test', icon: 'exposure_zero', path: '/tests/tare',
    standard: 'OIML R 76 §3.8', required: false,
    desc: 'Verifies the performance of the tare device across various load ranges.',
  },
  {
    id: 'zero', label: 'Zero Setting / Indication', icon: 'adjust', path: '/tests/zero',
    standard: 'OIML R 76 §3.9', required: false,
    desc: 'Tests the zero indication and automatic zero-setting mechanism performance.',
  },
  {
    id: 'environmental', label: 'Environmental Influence', icon: 'thermostat', path: '/tests/environmental-influence',
    standard: 'OIML R 76 §4.1', required: false,
    desc: 'Evaluates instrument response to temperature and humidity variations.',
  },
];

export default function NewTestSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(new Set(['accuracy', 'eccentricity', 'repeatability']));

  const toggle = (id) => {
    const m = TEST_MODULES.find(t => t.id === id);
    if (m.required) return; // Can't deselect required
    setSelected(s => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const selectedModules = TEST_MODULES.filter(t => selected.has(t.id));

  const actions = (
    <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/tests/environmental-conditions')}>Back</Btn>
  );

  return (
    <AppShell title="New Verification Test" subtitle="Step 3 of 4 — Test Suite Selection" activePath="/tests/select-instrument" actions={actions}>

      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 24 }}>
        {['Select Instrument', 'Environmental Conditions', 'Test Selection', 'Execute Tests'].map((s, i) => (
          <React.Fragment key={s}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: i < 2 ? VS.teal : i === 2 ? VS.primary : VS.borderLight,
                color: i <= 2 ? '#fff' : VS.textMuted, fontSize: 12, fontWeight: 700,
              }}>
                {i < 2 ? <span className="material-symbols-outlined" style={{ fontSize: 14 }}>check</span> : i + 1}
              </div>
              <span style={{ fontSize: 12.5, fontWeight: i === 2 ? 700 : 400, color: i <= 2 ? VS.textMain : VS.textMuted, whiteSpace: 'nowrap' }}>{s}</span>
            </div>
            {i < 3 && <div style={{ flex: 1, height: 2, background: i < 2 ? VS.teal : VS.borderLight, margin: '0 10px', minWidth: 16 }} />}
          </React.Fragment>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>

        {/* Module Selection */}
        <div>
          <Card style={{ padding: '16px 20px', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain }}>Select Test Modules</span>
              <span style={{ fontSize: 12, color: VS.textMuted, marginLeft: 8 }}>Required modules are pre-selected and cannot be deselected</span>
            </div>
            <Badge color="teal">{selected.size} of {TEST_MODULES.length} selected</Badge>
          </Card>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {TEST_MODULES.map(t => {
              const isSelected = selected.has(t.id);
              return (
                <div
                  key={t.id}
                  onClick={() => toggle(t.id)}
                  style={{
                    padding: '16px 18px', borderRadius: 10,
                    border: `2px solid ${isSelected ? VS.teal : VS.border}`,
                    background: isSelected ? VS.tealLight : '#fff',
                    cursor: t.required ? 'default' : 'pointer',
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    background: isSelected ? 'rgba(0,139,139,0.2)' : VS.page,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: isSelected ? VS.teal : VS.textMuted }}>{t.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: VS.textMain }}>{t.label}</span>
                      {t.required && <Badge color="primary" style={{ fontSize: 10 }}>Required</Badge>}
                      <Badge color="default" style={{ fontSize: 10 }}>{t.standard}</Badge>
                    </div>
                    <p style={{ fontSize: 12.5, color: VS.textMuted, margin: 0, lineHeight: 1.6 }}>{t.desc}</p>
                  </div>
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                    background: isSelected ? VS.teal : VS.page,
                    border: `2px solid ${isSelected ? VS.teal : VS.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.15s',
                  }}>
                    {isSelected && <span className="material-symbols-outlined" style={{ fontSize: 13, color: '#fff' }}>check</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 14px' }}>Test Suite Summary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
              {selectedModules.map(t => (
                <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: VS.textMain }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: VS.teal }}>check_circle</span>
                  {t.label}
                </div>
              ))}
            </div>
            <div style={{ padding: '10px 12px', borderRadius: 8, background: VS.page, border: `1px solid ${VS.border}`, fontSize: 12, color: VS.textMuted }}>
              Estimated duration: ~{selectedModules.length * 15}–{selectedModules.length * 25} minutes
            </div>
            <Btn
              variant="primary" icon="play_arrow"
              onClick={() => navigate('/tests/workspace')}
              style={{ width: '100%', justifyContent: 'center', marginTop: 14 }}
            >
              Start Testing
            </Btn>
          </Card>

          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: VS.textMain, margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15, color: VS.teal }}>info</span>
              Note
            </h3>
            <p style={{ fontSize: 12, color: VS.textMuted, lineHeight: 1.7, margin: 0 }}>
              For full OIML R 76 type approval, all three required tests (Accuracy, Eccentric Loading, Repeatability) must be completed successfully.
            </p>
          </Card>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
        <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/tests/environmental-conditions')}>Previous</Btn>
        <Btn variant="primary" icon="play_arrow" onClick={() => navigate('/tests/workspace')}>Start Test Execution</Btn>
      </div>
    </AppShell>
  );
}
