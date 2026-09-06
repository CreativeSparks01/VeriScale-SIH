import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Btn, FormField, Input, Select } from '../../components/AppShell';

const STEPS = ['Basic Information', 'Technical Specifications', 'Environmental Limits', 'Review & Save'];

export default function AddInstrument() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: '', model: '', serial: '', manufacturer: '', approvalNo: '',
    class: 'II', capacity: '', division: '', location: '', purchaseDate: '',
    minTemp: '10', maxTemp: '35', humidity: '85',
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const actions = (
    <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/instruments')}>Back to Instruments</Btn>
  );

  return (
    <AppShell title="Register Instrument" subtitle="Add a new NAWI instrument to the laboratory registry" activePath="/instruments" actions={actions}>

      {/* Stepper */}
      <Card style={{ padding: '20px 28px', marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {STEPS.map((s, i) => (
            <React.Fragment key={s}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: i <= step ? 'pointer' : 'default' }} onClick={() => i < step && setStep(i)}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, flexShrink: 0,
                  background: i < step ? VS.teal : i === step ? VS.primary : VS.borderLight,
                  color: i <= step ? '#fff' : VS.textMuted,
                  border: i === step ? `2px solid ${VS.primary}` : '2px solid transparent',
                  transition: 'all 0.2s',
                }}>
                  {i < step ? <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check</span> : i + 1}
                </div>
                <span style={{ fontSize: 13, fontWeight: i === step ? 700 : 500, color: i <= step ? VS.textMain : VS.textMuted, whiteSpace: 'nowrap' }}>{s}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div style={{ flex: 1, height: 2, background: i < step ? VS.teal : VS.borderLight, margin: '0 12px', minWidth: 20, transition: 'background 0.3s' }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>

        {/* Form Card */}
        <Card style={{ padding: 28 }}>
          {step === 0 && (
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: VS.textMain, margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal }}>info</span>
                Basic Information
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                <FormField label="Instrument Name" required>
                  <Input value={form.name} onChange={e => set('name', e.target.value)} placeholder="e.g., Sartorius Entris II" />
                </FormField>
                <FormField label="Model Number" required>
                  <Input value={form.model} onChange={e => set('model', e.target.value)} placeholder="e.g., BCE6202i" />
                </FormField>
                <FormField label="Serial Number" required>
                  <Input value={form.serial} onChange={e => set('serial', e.target.value)} placeholder="e.g., SA-E0018832" />
                </FormField>
                <FormField label="Manufacturer" required>
                  <Input value={form.manufacturer} onChange={e => set('manufacturer', e.target.value)} placeholder="e.g., Sartorius AG" />
                </FormField>
                <FormField label="OIML Approval No.">
                  <Input value={form.approvalNo} onChange={e => set('approvalNo', e.target.value)} placeholder="e.g., OIML-D28-SA22041" />
                </FormField>
                <FormField label="Laboratory Location" required>
                  <Input value={form.location} onChange={e => set('location', e.target.value)} placeholder="e.g., Laboratory B – Bay 3" />
                </FormField>
                <FormField label="Purchase Date">
                  <Input type="date" value={form.purchaseDate} onChange={e => set('purchaseDate', e.target.value)} />
                </FormField>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: VS.textMain, margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal }}>settings</span>
                Technical Specifications
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                <FormField label="OIML Accuracy Class" required>
                  <Select value={form.class} onChange={e => set('class', e.target.value)}>
                    <option value="I">Class I (Special precision)</option>
                    <option value="II">Class II (High precision)</option>
                    <option value="III">Class III (Medium precision)</option>
                    <option value="IIII">Class IIII (Ordinary)</option>
                  </Select>
                </FormField>
                <FormField label="Maximum Capacity" required hint="Include unit (e.g., 6200 g or 6.2 kg)">
                  <Input value={form.capacity} onChange={e => set('capacity', e.target.value)} placeholder="e.g., 6200 g" />
                </FormField>
                <FormField label="Scale Division (d)" required>
                  <Input value={form.division} onChange={e => set('division', e.target.value)} placeholder="e.g., 0.01 g" />
                </FormField>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: VS.textMain, margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal }}>thermostat</span>
                Environmental Limits
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                <FormField label="Min. Temperature (°C)" required>
                  <Input type="number" value={form.minTemp} onChange={e => set('minTemp', e.target.value)} />
                </FormField>
                <FormField label="Max. Temperature (°C)" required>
                  <Input type="number" value={form.maxTemp} onChange={e => set('maxTemp', e.target.value)} />
                </FormField>
                <FormField label="Max. Humidity (%RH)" required>
                  <Input type="number" value={form.humidity} onChange={e => set('humidity', e.target.value)} max="100" />
                </FormField>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: VS.textMain, margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal }}>fact_check</span>
                Review & Confirm
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { label: 'Name', value: form.name || '—' },
                  { label: 'Model', value: form.model || '—' },
                  { label: 'Serial No.', value: form.serial || '—' },
                  { label: 'Manufacturer', value: form.manufacturer || '—' },
                  { label: 'OIML Class', value: `Class ${form.class}` },
                  { label: 'Capacity', value: form.capacity || '—' },
                  { label: 'Division', value: form.division || '—' },
                  { label: 'Location', value: form.location || '—' },
                ].map(f => (
                  <div key={f.label} style={{ padding: '10px 14px', borderRadius: 8, background: VS.page, border: `1px solid ${VS.border}` }}>
                    <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 3 }}>{f.label}</div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: VS.textMain }}>{f.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: '12px 16px', borderRadius: 8, background: VS.tealLight, border: `1px solid ${VS.tealBorder}`, display: 'flex', gap: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal, flexShrink: 0 }}>info</span>
                <p style={{ fontSize: 12.5, color: VS.teal, margin: 0, lineHeight: 1.6 }}>
                  By registering this instrument, you confirm all technical details are accurate and comply with OIML R 76 requirements.
                </p>
              </div>
            </div>
          )}

          {/* Step navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28, paddingTop: 20, borderTop: `1px solid ${VS.border}` }}>
            <Btn variant="secondary" icon="arrow_back" onClick={() => step > 0 ? setStep(s => s - 1) : navigate('/instruments')}>
              {step === 0 ? 'Cancel' : 'Previous'}
            </Btn>
            {step < STEPS.length - 1 ? (
              <Btn variant="primary" onClick={() => setStep(s => s + 1)}>
                Continue <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </Btn>
            ) : (
              <Btn variant="teal" icon="save" onClick={() => navigate('/instruments')}>Register Instrument</Btn>
            )}
          </div>
        </Card>

        {/* Help Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 12px', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: VS.teal }}>help</span>
              Guidance
            </h3>
            <p style={{ fontSize: 12.5, color: VS.textMuted, lineHeight: 1.7, margin: 0 }}>
              {step === 0 && 'Enter the basic identification details for this weighing instrument. The serial number must be unique within the laboratory registry.'}
              {step === 1 && 'Specify the metrological parameters as declared in the instrument approval certificate. These values are used for OIML R 76 compliance evaluation.'}
              {step === 2 && 'Define the operational environmental limits. These are checked against ambient conditions before each test session.'}
              {step === 3 && 'Review all information carefully before registering. These details will be used in all future test records and compliance certificates.'}
            </p>
          </Card>

          <Card style={{ padding: 20 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain, margin: '0 0 12px' }}>OIML Class Guide</h3>
            {[
              { cls: 'I', desc: 'Special precision, laboratory balances, d ≥ 0.001 mg' },
              { cls: 'II', desc: 'High precision, jewelry/pharmaceutical, d ≥ 1 mg' },
              { cls: 'III', desc: 'Medium precision, commercial trade, d ≥ 0.1 g' },
              { cls: 'IIII', desc: 'Ordinary precision, coarse materials, d ≥ 5 g' },
            ].map(c => (
              <div key={c.cls} style={{ padding: '8px 0', borderBottom: `1px solid ${VS.borderLight}` }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: VS.teal }}>Class {c.cls}</span>
                <p style={{ fontSize: 11.5, color: VS.textMuted, margin: '2px 0 0' }}>{c.desc}</p>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
