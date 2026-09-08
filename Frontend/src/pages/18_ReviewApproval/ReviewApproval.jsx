import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot, FormField, Input } from '../../components/AppShell';

export default function ReviewApproval() {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');
  const [remarks, setRemarks] = useState('');
  const [signed, setSigned] = useState(false);

  const breadcrumbs = [
    { label: 'TESTS', path: '/tests/select-instrument' },
    { label: 'TEST-012', path: '/tests/workspace' },
    { label: 'COMPLIANCE', path: '/compliance' },
    { label: 'REVIEW & APPROVAL' },
  ];

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/compliance')}>
        Back to Compliance
      </Btn>
      <Btn variant="primary" icon="verified_user" onClick={() => { setSigned(true); navigate('/reports/generate'); }}>
        Authorize & Release Certificate
      </Btn>
    </>
  );

  return (
    <AppShell
      title="Review & Verification Sign-Off"
      subtitle="OIML R 76-1:2006 Statutory Officer Authorization & Verification Dossier"
      activePath="/compliance"
      actions={actions}
      breadcrumbs={breadcrumbs}
    >
      {/* ── Progress Stepper Strip ────────────────────────────────────── */}
      <Card style={{ padding: '14px 20px', marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 24, color: VS.teal }}>verified</span>
            <div>
              <span style={{ fontSize: 13, fontWeight: 700, color: VS.textMain }}>OIML Legal Metrology Verification Stage 07 / 08</span>
              <span style={{ fontSize: 12, color: VS.textMuted, marginLeft: 8 }}>Record: TEST-012 (WT-100)</span>
            </div>
          </div>
          <Badge color={signed ? 'success' : 'teal'}>
            <StatusDot color={signed ? 'success' : 'teal'} /> {signed ? 'AUTHORIZED' : 'PENDING OFFICIAL STAMP'}
          </Badge>
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 20 }}>
        {/* Left Column: Dossier Summary & Approvals */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Dossier Card */}
          <Card style={{ padding: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: VS.textMain, margin: '0 0 16px' }}>
              Verification Dossier Overview
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 20 }}>
              {[
                { label: 'Instrument Description', val: 'ABC WeighTech WT-100 (Non-Automatic)' },
                { label: 'Serial & Lab Asset ID', val: 'WT100-2026-001 | LAB-DEV-04' },
                { label: 'Accuracy Class', val: 'Class III (e = 0.1 g, Max = 6200 g)' },
                { label: 'Testing Standard', val: 'OIML R 76-1:2006 (Type Evaluation)' },
                { label: 'Evaluation Verdict', val: 'FULL COMPLIANCE (12/12 Criteria Pass)', color: VS.success },
                { label: 'Calculated Uncertainty', val: 'U = 0.015 g (k = 2, 95% Confidence)' },
              ].map((item, idx) => (
                <div key={idx} style={{ borderBottom: `1px solid ${VS.borderLight}`, paddingBottom: 10 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: item.color || VS.textMain, marginTop: 3 }}>
                    {item.val}
                  </div>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: 14, fontWeight: 700, color: VS.textMain, margin: '16px 0 10px' }}>
              Verification Sign-Off Chain
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { role: 'Testing Metrologist', name: 'A. Kumar (TECH-409)', date: '06 Sep 2026, 12:48 PM', status: 'SIGNED', icon: 'check_circle', color: 'success' },
                { role: 'Quality Assurance Lead', name: 'P. Sharma (QA-104)', date: '06 Sep 2026, 13:15 PM', status: 'VERIFIED', icon: 'check_circle', color: 'success' },
                { role: 'Statutory Metrology Officer', name: 'Manan Sharma (VER-001)', date: signed ? '06 Sep 2026, 14:02 PM' : 'Pending Action', status: signed ? 'APPROVED' : 'AWAITING PIN', icon: signed ? 'check_circle' : 'pending', color: signed ? 'success' : 'teal' },
              ].map((sig, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: VS.cardAlt, borderRadius: 8, border: `1px solid ${VS.borderLight}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span className="material-symbols-outlined" style={{ color: sig.color === 'success' ? VS.success : VS.teal, fontSize: 20 }}>
                      {sig.icon}
                    </span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: VS.textMain }}>{sig.role}</div>
                      <div style={{ fontSize: 11.5, color: VS.textMuted }}>{sig.name} • {sig.date}</div>
                    </div>
                  </div>
                  <Badge color={sig.color}>
                    <StatusDot color={sig.color} /> {sig.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Authorization Signature Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Card style={{ padding: 24, borderTop: `4px solid ${VS.teal}` }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: VS.textMain, margin: '0 0 12px' }}>
              Officer Cryptographic Stamp
            </h3>
            <p style={{ fontSize: 12.5, color: VS.textMuted, margin: '0 0 16px', lineHeight: 1.4 }}>
              By submitting your metrology credentials, you legally verify that the test results satisfy OIML R 76 requirements under ISO/IEC 17025.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <FormField label="Officer ID">
                <Input value="VER-001 (Manan Sharma)" readOnly style={{ background: VS.cardAlt }} />
              </FormField>

              <FormField label="Cryptographic Signing PIN">
                <Input
                  type="password"
                  placeholder="Enter 6-digit PIN"
                  value={pin}
                  onChange={e => setPin(e.target.value)}
                />
              </FormField>

              <FormField label="Verification Remarks (Optional)">
                <Input
                  placeholder="e.g. Standard calibration verified"
                  value={remarks}
                  onChange={e => setRemarks(e.target.value)}
                />
              </FormField>

              <div style={{ paddingTop: 8, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Btn
                  variant="primary"
                  icon="assignment_turned_in"
                  onClick={() => { setSigned(true); alert('Test Record TEST-012 Approved. Redirecting to Certificate...'); navigate('/reports/generate'); }}
                  style={{ width: '100%', justifyContent: 'center', height: 40 }}
                >
                  Approve & Release Certificate
                </Btn>
                <Btn
                  variant="secondary"
                  icon="attach_file"
                  onClick={() => navigate('/compliance/evidence')}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Inspect Attached Evidence (3)
                </Btn>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
