import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot, FormField, Input, Select } from '../../components/AppShell';

export default function AdminSettings() {
  const navigate = useNavigate();
  const [labName, setLabName] = useState('National Metrology Institute - Laboratory 04');
  const [accreditation, setAccreditation] = useState('ISO/IEC 17025:2017 #NABL-M-4891');
  const [comPort, setComPort] = useState('COM1 (9600 BAUD, 8-N-1)');
  const [autoHash, setAutoHash] = useState(true);

  const breadcrumbs = [
    { label: 'ADMINISTRATION', path: '/admin/settings' },
    { label: 'SETTINGS' },
  ];

  const actions = (
    <>
      <Btn variant="secondary" icon="receipt_long" onClick={() => navigate('/admin/audit-trail')}>
        Audit Trail
      </Btn>
      <Btn variant="primary" icon="save" onClick={() => alert('Platform Settings Saved Successfully')}>
        Save Changes
      </Btn>
    </>
  );

  return (
    <AppShell
      title="Platform & Metrology Laboratory Settings"
      subtitle="Configure Laboratory Accreditation, RS-232 / USB Serial Balance Connections & Security"
      activePath="/admin/settings"
      actions={actions}
      breadcrumbs={breadcrumbs}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
        {/* Laboratory Profile Card */}
        <Card style={{ padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 42, height: 42, borderRadius: 8, background: VS.tealLight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: VS.teal }}>business</span>
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: VS.textMain, margin: 0 }}>Laboratory Accreditation</h3>
              <p style={{ fontSize: 12, color: VS.textMuted, margin: '2px 0 0' }}>Statutory parameters displayed on issued verification certificates</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FormField label="Authorized Laboratory Facility Name" required>
              <Input value={labName} onChange={e => setLabName(e.target.value)} />
            </FormField>

            <FormField label="Accreditation Certificate Reference" required>
              <Input value={accreditation} onChange={e => setAccreditation(e.target.value)} />
            </FormField>

            <FormField label="Primary Legal Metrology Jurisdiction">
              <Select defaultValue="INDIA_W&M">
                <option value="INDIA_W&M">India - Legal Metrology (General) Rules / OIML</option>
                <option value="EU_WELMEC">European Union (WELMEC / NAWI Directive)</option>
                <option value="US_NIST">United States (NIST Handbook 44)</option>
                <option value="GLOBAL_OIML">International OIML Member State</option>
              </Select>
            </FormField>

            <FormField label="Lead Statutory Metrology Officer">
              <Input defaultValue="Manan Sharma (VER-001)" readOnly style={{ background: VS.cardAlt }} />
            </FormField>
          </div>
        </Card>

        {/* Hardware & RS-232 Connection */}
        <Card style={{ padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 42, height: 42, borderRadius: 8, background: VS.tealLight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 22, color: VS.teal }}>settings_input_component</span>
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: VS.textMain, margin: 0 }}>Instrument Serial Connection</h3>
              <p style={{ fontSize: 12, color: VS.textMuted, margin: '2px 0 0' }}>Direct digital balance reading over RS-232 or USB HID</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FormField label="COM Serial Port Binding">
              <Select value={comPort} onChange={e => setComPort(e.target.value)}>
                <option value="COM1 (9600 BAUD, 8-N-1)">COM1: 9600 BAUD [ONLINE - WT-100]</option>
                <option value="COM2 (19200 BAUD, 8-N-1)">COM2: 19200 BAUD [STANDBY]</option>
                <option value="USB_VIRTUAL">USB Virtual CDC Datalogger</option>
              </Select>
            </FormField>

            <div style={{ padding: 14, background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <div style={{ fontSize: 12.5, color: '#166534', fontWeight: 600 }}>
                COM1 Connected: Receiving stable streaming data from ABC WeighTech WT-100
              </div>
            </div>

            <FormField label="Data Capture Mode">
              <Select defaultValue="STREAM">
                <option value="STREAM">Continuous Stream (Capture on Stability Flag)</option>
                <option value="POLL">Command Polling (Query 'SI' every 200ms)</option>
                <option value="MANUAL">Manual Keystroke Entry Only</option>
              </Select>
            </FormField>

            <FormField label="Ambient Sensor Integration">
              <Input defaultValue="Rotronic HygroLog HL-1D (USB-03)" readOnly style={{ background: VS.cardAlt }} />
            </FormField>
          </div>
        </Card>

        {/* Cryptographic & Compliance Policies */}
        <Card style={{ padding: 24, gridColumn: 'span 2' }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: VS.textMain, margin: '0 0 16px' }}>
            Cryptographic Integrity & Data Governance Policies
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { title: 'SHA-256 Digest Appending', desc: 'Compute and append cryptographic checksums to each recorded observation row.', checked: autoHash, toggle: () => setAutoHash(!autoHash) },
              { title: 'ISO 17025 Audit Locking', desc: 'Lock test records from retrospective editing once certificate is stamped.', checked: true },
              { title: 'Automatic Backup to Cloud', desc: 'Sync test dossiers with secure off-site immutable archive every 60 minutes.', checked: true },
            ].map((p, idx) => (
              <div key={idx} style={{ padding: 16, border: `1px solid ${VS.borderLight}`, borderRadius: 8, background: VS.cardAlt }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked={p.checked} style={{ accentColor: VS.teal, marginTop: 3 }} />
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: VS.textMain }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: VS.textMuted, marginTop: 4, lineHeight: 1.3 }}>{p.desc}</div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
