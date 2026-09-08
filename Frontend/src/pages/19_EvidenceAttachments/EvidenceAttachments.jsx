import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const ATTACHMENTS = [
  { id: 'ATT-001', name: 'E2_Standard_Weights_Cert_2026.pdf', size: '2.4 MB', type: 'PDF Document', hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', date: '06 Sep 2026, 10:14 AM', category: 'Calibration Certificate' },
  { id: 'ATT-002', name: 'Thermohygrometer_Lab4_Traceability.pdf', size: '1.1 MB', type: 'PDF Document', hash: '7d793037a0760186574b0282f2f435e70d1d2a123b5deeaeff4d7e0e75b6b7a', date: '06 Sep 2026, 10:16 AM', category: 'Environmental Traceability' },
  { id: 'ATT-003', name: 'WT100_Front_Display_Zero_Photo.jpg', size: '3.8 MB', type: 'High-Res Photo', hash: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4', date: '06 Sep 2026, 11:30 AM', category: 'Instrument Photo' },
  { id: 'ATT-004', name: 'Eccentric_Loading_Position_Grid.png', size: '1.9 MB', type: 'Sensor Diagram', hash: 'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb', date: '06 Sep 2026, 11:45 AM', category: 'Test Setup Evidence' },
];

export default function EvidenceAttachments() {
  const navigate = useNavigate();
  const [files, setFiles] = useState(ATTACHMENTS);

  const breadcrumbs = [
    { label: 'TESTS', path: '/tests/select-instrument' },
    { label: 'TEST-012', path: '/tests/workspace' },
    { label: 'COMPLIANCE', path: '/compliance' },
    { label: 'EVIDENCE ATTACHMENTS' },
  ];

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/compliance')}>
        Back to Compliance
      </Btn>
      <Btn variant="primary" icon="verified" onClick={() => navigate('/compliance/approval')}>
        Proceed to Sign-Off
      </Btn>
    </>
  );

  return (
    <AppShell
      title="Evidence & Metrological Attachments"
      subtitle="Cryptographically Hashed Laboratory Artifacts for TEST-012 (ISO/IEC 17025 Traceability)"
      activePath="/compliance"
      actions={actions}
      breadcrumbs={breadcrumbs}
    >
      {/* ── Info Strip ──────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
        {[
          { label: 'Associated Test', val: 'TEST-012', icon: 'scale', accent: VS.teal, path: '/tests/workspace' },
          { label: 'Total Artifacts', val: `${files.length} Secure Files`, icon: 'folder_zip', accent: VS.primary },
          { label: 'Security Standard', val: 'SHA-256 Immutable', icon: 'lock', accent: '#7C3AED' },
          { label: 'Audit Integrity', val: '100% Verified', icon: 'verified', accent: VS.success },
        ].map((item, i) => (
          <Card key={i} style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 24, color: item.accent }}>{item.icon}</span>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{item.label}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: item.accent, marginTop: 2 }}>{item.val}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* ── Drag & Drop Upload Zone ──────────────────────────────────── */}
      <Card style={{ padding: 24, marginBottom: 24, border: `2px dashed ${VS.border}`, background: '#FAFCFD', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: VS.tealLight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 24, color: VS.teal }}>cloud_upload</span>
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: VS.textMain }}>Drag & Drop Metrology Evidence Files</div>
          <div style={{ fontSize: 12.5, color: VS.textMuted, maxWidth: 460 }}>
            Supports PDF calibration sheets, high-resolution photographs of instrument displays and raw load cell datalogs. All uploads are hashed via SHA-256.
          </div>
          <div style={{ marginTop: 8 }}>
            <Btn variant="primary" icon="upload_file" onClick={() => alert('Artifact file browser opened')}>
              Select Files from Workstation
            </Btn>
          </div>
        </div>
      </Card>

      {/* ── Attachments Table ────────────────────────────────────────── */}
      <Card style={{ overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: `1px solid ${VS.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: VS.textMain, margin: 0 }}>Registered Test Dossier Attachments</h3>
            <p style={{ fontSize: 12, color: VS.textMuted, margin: '2px 0 0' }}>Cryptographically bound to record TEST-012</p>
          </div>
          <Badge color="success">
            <StatusDot color="success" /> All 4 Hashes Match
          </Badge>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
          <thead>
            <tr style={{ background: VS.cardAlt, borderBottom: `1px solid ${VS.border}` }}>
              {['Attachment Name & Category', 'Type / Size', 'Cryptographic SHA-256 Digest', 'Upload Timestamp', 'Actions'].map((h, i) => (
                <th key={i} style={{ padding: '12px 18px', textAlign: 'left', fontSize: 11, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {files.map((file, idx) => (
              <tr key={file.id} style={{ borderBottom: `1px solid ${VS.borderLight}`, background: idx % 2 === 0 ? '#fff' : VS.cardAlt }}>
                <td style={{ padding: '14px 18px' }}>
                  <div style={{ fontWeight: 700, color: VS.textMain, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal }}>
                      {file.name.endsWith('.pdf') ? 'picture_as_pdf' : 'image'}
                    </span>
                    {file.name}
                  </div>
                  <div style={{ fontSize: 11.5, color: VS.textMuted, marginTop: 2 }}>{file.category}</div>
                </td>
                <td style={{ padding: '14px 18px', color: VS.textMuted }}>
                  <div>{file.type}</div>
                  <div style={{ fontSize: 11.5 }}>{file.size}</div>
                </td>
                <td style={{ padding: '14px 18px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: VS.primary }}>
                  <span title={file.hash} style={{ background: '#F1F5F9', padding: '2px 6px', borderRadius: 4 }}>
                    {file.hash.substring(0, 16)}...{file.hash.substring(file.hash.length - 8)}
                  </span>
                </td>
                <td style={{ padding: '14px 18px', fontSize: 12, color: VS.textMuted }}>
                  {file.date}
                </td>
                <td style={{ padding: '14px 18px' }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      type="button"
                      title="Download artifact"
                      style={{ background: 'none', border: `1px solid ${VS.border}`, borderRadius: 6, padding: '4px 8px', cursor: 'pointer', color: VS.primary }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
                    </button>
                    <button
                      type="button"
                      title="Verify SHA-256 Hash"
                      onClick={() => alert(`SHA-256 Validated: ${file.hash}`)}
                      style={{ background: 'none', border: `1px solid ${VS.border}`, borderRadius: 6, padding: '4px 8px', cursor: 'pointer', color: VS.teal }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>verified</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
