import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot, Input, Select, FormField } from '../../components/AppShell';

const RULES = [
  { clause: 'Clause 3.5.1', title: 'Maximum Permissible Errors (MPE)', desc: 'Error of indication shall not exceed statutory MPE on loading or unloading.', limits: '±0.5 e (0-500e), ±1.0 e (500-2000e), ±1.5 e (>2000e)', status: 'ACTIVE' },
  { clause: 'Clause 3.6.1', title: 'Repeatability Verification', desc: 'The difference between the results of several weighings of the same load shall not be greater than the absolute value of the MPE of the instrument for that load.', limits: 'Max spread ≤ |MPE| (typically 10 series)', status: 'ACTIVE' },
  { clause: 'Clause 3.6.2', title: 'Eccentric Loading (Off-Center)', desc: 'The indications for different positions of a load shall not exceed the MPE for the applied load.', limits: 'Load = 1/3 Max, placed at 4 quadrants', status: 'ACTIVE' },
  { clause: 'Clause 3.6.3', title: 'Tare Mechanism Accuracy', desc: 'The tare device shall not introduce errors exceeding the MPE for any tare value.', limits: 'Net indication error ≤ MPE for net load', status: 'ACTIVE' },
  { clause: 'Clause 4.5.1', title: 'Zero-Setting & Zero-Tracking Range', desc: 'Effect of zero-setting device shall not alter maximum weighing capacity and zero indication error shall not exceed ±0.25 e.', limits: 'Zero error ≤ ±0.25 e (Class I-IIII)', status: 'ACTIVE' },
  { clause: 'Clause 3.9.2', title: 'Temperature Influence', desc: 'The instrument shall comply with metrological requirements at ambient temperatures between -10°C and +40°C unless specified otherwise.', limits: 'Temperature coefficient ≤ 1 e per 5°C', status: 'ACTIVE' },
];

export default function OIMLRules() {
  const navigate = useNavigate();
  const [calcClass, setCalcClass] = useState('Class III');
  const [calcE, setCalcE] = useState('0.1');
  const [calcLoad, setCalcLoad] = useState('1000');

  // Compute MPE
  const eVal = parseFloat(calcE) || 0.1;
  const loadVal = parseFloat(calcLoad) || 0;
  const loadInE = loadVal / eVal;
  let mpeFactor = 0.5;
  if (loadInE > 2000) mpeFactor = 1.5;
  else if (loadInE > 500) mpeFactor = 1.0;
  const computedMpe = (mpeFactor * eVal).toFixed(3);

  const breadcrumbs = [
    { label: 'ADMINISTRATION', path: '/admin/settings' },
    { label: 'OIML RULES' },
  ];

  const actions = (
    <>
      <Btn variant="secondary" icon="settings" onClick={() => navigate('/admin/settings')}>
        Admin Settings
      </Btn>
      <Btn variant="primary" icon="experiment" onClick={() => navigate('/tests/select-instrument')}>
        Launch Verification Test
      </Btn>
    </>
  );

  return (
    <AppShell
      title="OIML Regulatory Rule Book & Tolerances"
      subtitle="Standard Legal Metrology Requirements — OIML Recommendation R 76-1 Edition 2006 (E)"
      activePath="/admin/rules"
      actions={actions}
      breadcrumbs={breadcrumbs}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 20 }}>
        {/* Rules Directory */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {RULES.map(rule => (
            <Card key={rule.clause} style={{ padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, color: VS.primary, fontSize: 13 }}>
                    {rule.clause}
                  </span>
                  <Badge color="success"><StatusDot color="success" /> {rule.status}</Badge>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: VS.teal }}>gavel</span>
              </div>

              <h3 style={{ fontSize: 15, fontWeight: 700, color: VS.textMain, margin: '0 0 6px' }}>
                {rule.title}
              </h3>
              <p style={{ fontSize: 13, color: VS.textMuted, margin: '0 0 12px', lineHeight: 1.4 }}>
                {rule.desc}
              </p>

              <div style={{ background: VS.cardAlt, padding: '10px 14px', borderRadius: 6, border: `1px solid ${VS.borderLight}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase' }}>Statutory Limit:</span>
                <span style={{ fontSize: 12.5, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, color: VS.primary }}>
                  {rule.limits}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Live MPE Calculator Widget */}
        <div>
          <Card style={{ padding: 24, position: 'sticky', top: 90, borderTop: `4px solid ${VS.teal}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 24, color: VS.teal }}>calculate</span>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: VS.textMain, margin: 0 }}>
                Interactive MPE Evaluator
              </h3>
            </div>
            <p style={{ fontSize: 12.5, color: VS.textMuted, margin: '0 0 18px' }}>
              Compute official Maximum Permissible Error (MPE) under OIML R 76-1 Table 6.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <FormField label="Instrument Accuracy Class">
                <Select value={calcClass} onChange={e => setCalcClass(e.target.value)}>
                  <option value="Class I">Class I (Special Accuracy)</option>
                  <option value="Class II">Class II (High Accuracy)</option>
                  <option value="Class III">Class III (Medium Accuracy)</option>
                  <option value="Class IIII">Class IIII (Ordinary Accuracy)</option>
                </Select>
              </FormField>

              <FormField label="Verification Scale Interval e (g)">
                <Input type="number" step="0.01" value={calcE} onChange={e => setCalcE(e.target.value)} />
              </FormField>

              <FormField label="Applied Test Load m (g)">
                <Input type="number" step="10" value={calcLoad} onChange={e => setCalcLoad(e.target.value)} />
              </FormField>

              {/* Result Callout */}
              <div style={{ background: VS.tealLight, border: `1px solid ${VS.tealBorder}`, padding: 16, borderRadius: 8, marginTop: 6, textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase' }}>
                  Statutory Tolerance (± MPE)
                </div>
                <div style={{ fontSize: 24, fontWeight: 800, color: VS.teal, margin: '4px 0', fontFamily: "'IBM Plex Mono', monospace" }}>
                  ± {computedMpe} g
                </div>
                <div style={{ fontSize: 11, color: VS.textMuted }}>
                  Load in units of e: {loadInE.toFixed(1)} e ({mpeFactor} e bracket)
                </div>
              </div>

              <Btn variant="primary" icon="experiment" onClick={() => navigate('/tests/select-instrument')} style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
                Apply to Verification Test
              </Btn>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
