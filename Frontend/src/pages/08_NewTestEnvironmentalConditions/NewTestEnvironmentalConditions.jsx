import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Btn, FormField, Input } from '../../components/AppShell';

export default function NewTestEnvironmentalConditions() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    temperature: '22.4', humidity: '55', pressure: '1013.2', lightLevel: 'Normal',
    noVibration: true, noAirDraft: true, stableVoltage: true,
    technician: 'Manan Sharma', startTime: new Date().toISOString().slice(0,16),
    notes: '',
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const tempOk = parseFloat(form.temperature) >= 10 && parseFloat(form.temperature) <= 35;
  const humOk = parseFloat(form.humidity) <= 85;
  const conditionsOk = tempOk && humOk && form.noVibration && form.noAirDraft && form.stableVoltage;

  const actions = (
    <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/tests/select-instrument')}>Back</Btn>
  );

  return (
    <AppShell title="New Verification Test" subtitle="Step 2 of 4 — Environmental Conditions" activePath="/tests/select-instrument" actions={actions}>

      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 24 }}>
        {['Select Instrument', 'Environmental Conditions', 'Test Selection', 'Execute Tests'].map((s, i) => (
          <React.Fragment key={s}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: i === 0 ? VS.teal : i === 1 ? VS.primary : VS.borderLight,
                color: i <= 1 ? '#fff' : VS.textMuted, fontSize: 12, fontWeight: 700,
              }}>
                {i === 0 ? <span className="material-symbols-outlined" style={{ fontSize: 14 }}>check</span> : i + 1}
              </div>
              <span style={{ fontSize: 12.5, fontWeight: i === 1 ? 700 : 400, color: i <= 1 ? VS.textMain : VS.textMuted, whiteSpace: 'nowrap' }}>{s}</span>
            </div>
            {i < 3 && <div style={{ flex: 1, height: 2, background: i === 0 ? VS.teal : VS.borderLight, margin: '0 10px', minWidth: 16 }} />}
          </React.Fragment>
        ))}
      </div>

      {/* Status Banner */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px', borderRadius: 10,
        marginBottom: 24,
        background: conditionsOk ? VS.successLight : VS.warningLight,
        border: `1px solid ${conditionsOk ? VS.successBorder : VS.warningBorder}`,
      }}>
        <span className="material-symbols-outlined" style={{ fontSize: 22, color: conditionsOk ? VS.success : VS.warning }}>
          {conditionsOk ? 'check_circle' : 'warning'}
        </span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: conditionsOk ? VS.success : VS.warning }}>
            {conditionsOk ? 'All conditions within acceptable limits — safe to proceed' : 'One or more conditions are outside acceptable limits'}
          </div>
          <div style={{ fontSize: 12, color: VS.textMuted, marginTop: 2 }}>OIML R 76-1 §3.9 — Environmental requirements for verification</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>

        {/* Measurements */}
        <Card style={{ padding: 24 }}>
          <h3 style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal }}>device_thermostat</span>
            Measured Conditions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FormField label="Temperature (°C)" required hint="Acceptable: 10 °C – 35 °C (OIML R 76 §3.9.3)">
              <div style={{ position: 'relative' }}>
                <Input type="number" step="0.1" value={form.temperature} onChange={e => set('temperature', e.target.value)}
                  style={{ borderColor: tempOk ? VS.border : VS.error }} />
                {!tempOk && <span style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: VS.error }}>error</span>
                </span>}
              </div>
            </FormField>
            <FormField label="Relative Humidity (%RH)" required hint="Maximum: 85% RH">
              <Input type="number" step="1" max="100" value={form.humidity} onChange={e => set('humidity', e.target.value)}
                style={{ borderColor: humOk ? VS.border : VS.error }} />
            </FormField>
            <FormField label="Barometric Pressure (hPa)">
              <Input type="number" step="0.1" value={form.pressure} onChange={e => set('pressure', e.target.value)} />
            </FormField>
          </div>
        </Card>

        {/* Checklist */}
        <Card style={{ padding: 24 }}>
          <h3 style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal }}>checklist</span>
            Pre-Test Checklist
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { key: 'noVibration', label: 'No mechanical vibrations or shocks in the area', hint: 'OIML R 76 §3.9.4' },
              { key: 'noAirDraft', label: 'No air drafts or significant air movement', hint: 'OIML R 76 §3.9.5' },
              { key: 'stableVoltage', label: 'Stable power supply / voltage within ±10%', hint: 'OIML R 76 §3.9.6' },
            ].map(c => (
              <label key={c.key} style={{
                display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer',
                padding: '10px 12px', borderRadius: 8,
                background: form[c.key] ? VS.successLight : VS.page,
                border: `1px solid ${form[c.key] ? VS.successBorder : VS.border}`,
                transition: 'all 0.15s',
              }}>
                <input type="checkbox" checked={form[c.key]} onChange={e => set(c.key, e.target.checked)}
                  style={{ width: 15, height: 15, accentColor: VS.teal, marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: VS.textMain }}>{c.label}</div>
                  <div style={{ fontSize: 11, color: VS.textMuted, marginTop: 2 }}>{c.hint}</div>
                </div>
              </label>
            ))}
          </div>

          <div style={{ marginTop: 20 }}>
            <FormField label="Technician / Metrologist" required>
              <Input value={form.technician} onChange={e => set('technician', e.target.value)} />
            </FormField>
          </div>
          <div style={{ marginTop: 14 }}>
            <FormField label="Test Start Time">
              <Input type="datetime-local" value={form.startTime} onChange={e => set('startTime', e.target.value)} />
            </FormField>
          </div>
        </Card>
      </div>

      {/* Notes */}
      <Card style={{ padding: 24, marginBottom: 20 }}>
        <FormField label="Observations / Notes">
          <textarea
            value={form.notes} onChange={e => set('notes', e.target.value)}
            placeholder="Record any relevant observations about the test environment…"
            rows={3}
            style={{
              width: '100%', padding: '9px 12px', border: `1px solid ${VS.border}`,
              borderRadius: 7, fontSize: 13.5, color: VS.textMain, fontFamily: 'inherit',
              resize: 'vertical', outline: 'none', boxSizing: 'border-box',
            }}
          />
        </FormField>
      </Card>

      {/* Footer Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/tests/select-instrument')}>Previous</Btn>
        <Btn variant="primary" icon="arrow_forward" onClick={() => navigate('/tests/test-selection')}>
          Continue to Test Selection
        </Btn>
      </div>
    </AppShell>
  );
}
