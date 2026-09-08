import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

export default function ReportPreview() {
  const navigate = useNavigate();

  const breadcrumbs = [
    { label: 'REPORTS', path: '/reports/repository' },
    { label: 'TEST-012', path: '/tests/workspace' },
    { label: 'REPORT PREVIEW' },
  ];

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/compliance/approval')}>
        Approval Sign-Off
      </Btn>
      <Btn variant="secondary" icon="print" onClick={() => window.print()}>
        Print Certificate
      </Btn>
      <Btn variant="primary" icon="folder_open" onClick={() => navigate('/reports/repository')}>
        Go to Repository
      </Btn>
    </>
  );

  return (
    <AppShell
      title="Verification Certificate Preview"
      subtitle="Official Statutory Metrological Verification Certificate TR-0091 (OIML R 76-1:2006)"
      activePath="/reports/repository"
      actions={actions}
      breadcrumbs={breadcrumbs}
    >
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        {/* Certificate Paper Sheet */}
        <Card style={{
          padding: '48px 56px', background: '#ffffff',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          border: `1px solid ${VS.border}`, borderRadius: 8,
          fontFamily: "'IBM Plex Sans', sans-serif",
        }}>
          {/* Certificate Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderBottom: `2px solid ${VS.primary}`, paddingBottom: 24, marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 52, height: 52, borderRadius: 10, background: VS.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 32 }}>scale</span>
              </div>
              <div>
                <h1 style={{ fontSize: 20, fontWeight: 800, color: VS.primary, letterSpacing: '0.08em', margin: 0 }}>
                  NATIONAL METROLOGY SERVICE
                </h1>
                <div style={{ fontSize: 11.5, color: VS.textMuted, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 }}>
                  Statutory Legal Metrology Verification Laboratory • ISO/IEC 17025
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <Badge color="success"><StatusDot color="success" /> CERTIFICATE VALID</Badge>
              <div style={{ fontSize: 13, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, color: VS.primary, marginTop: 6 }}>
                CERT-TR-0091
              </div>
            </div>
          </div>

          {/* Certificate Title */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: VS.textMain, margin: '0 0 6px', letterSpacing: '-0.01em' }}>
              CERTIFICATE OF METROLOGICAL VERIFICATION
            </h2>
            <div style={{ fontSize: 13, color: VS.textMuted, fontWeight: 500 }}>
              Issued in accordance with OIML Recommendation R 76-1 (Edition 2006) for Non-Automatic Weighing Instruments
            </div>
          </div>

          {/* Instrument & Test Parameters Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px 32px', background: VS.cardAlt, padding: '20px 24px', borderRadius: 8, border: `1px solid ${VS.borderLight}`, marginBottom: 28 }}>
            {[
              { label: 'Instrument Type', val: 'Non-Automatic Weighing Instrument (NAWI)' },
              { label: 'Manufacturer & Model', val: 'ABC WeighTech WT-100 Precision' },
              { label: 'Serial Number', val: 'WT100-2026-001' },
              { label: 'Accuracy Class', val: 'Class III (Medium Accuracy)' },
              { label: 'Max Capacity (Max)', val: '6200 g' },
              { label: 'Verification Interval (e)', val: '0.1 g (d = 0.01 g)' },
              { label: 'Environmental Temp / RH', val: '21.4 °C | 48.2% RH' },
              { label: 'Primary Standard Weights', val: 'Class E2 Set (NPL Traceable Ref 4021)' },
            ].map((p, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dashed ${VS.borderLight}`, paddingBottom: 6 }}>
                <span style={{ fontSize: 12, color: VS.textMuted, fontWeight: 600 }}>{p.label}:</span>
                <span style={{ fontSize: 12.5, color: VS.textMain, fontWeight: 700, fontFamily: p.val.includes('WT100') ? "'IBM Plex Mono', monospace" : 'inherit' }}>{p.val}</span>
              </div>
            ))}
          </div>

          {/* Metrological Test Results Summary Table */}
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: VS.textMain, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
              Summary of OIML Test Observations & Compliance Evaluation
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
              <thead>
                <tr style={{ background: VS.primary, color: '#fff' }}>
                  {['OIML Clause', 'Verification Test', 'Tolerance (MPE)', 'Max Error Found', 'Status'].map((th, i) => (
                    <th key={i} style={{ padding: '10px 14px', textAlign: i >= 2 ? 'center' : 'left', fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { clause: '§3.5.1', name: 'Accuracy of Indication (Linearity)', mpe: '±0.05 g', found: '+0.018 g', pass: true },
                  { clause: '§3.6.2', name: 'Eccentricity Loading (1/3 Max)', mpe: '±0.05 g', found: '+0.026 g', pass: true },
                  { clause: '§3.6.1', name: 'Repeatability (10 cycles)', mpe: '≤ 0.05 g', found: '0.012 g', pass: true },
                  { clause: '§3.6.3', name: 'Tare Mechanism Compensation', mpe: '±0.05 g', found: '+0.014 g', pass: true },
                  { clause: '§4.5.1', name: 'Zero-Setting & Tracking Accuracy', mpe: '±0.025 g', found: '0.000 g', pass: true },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: `1px solid ${VS.borderLight}`, background: idx % 2 === 0 ? '#fff' : VS.cardAlt }}>
                    <td style={{ padding: '10px 14px', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, color: VS.primary }}>{row.clause}</td>
                    <td style={{ padding: '10px 14px', fontWeight: 600 }}>{row.name}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'center', fontFamily: "'IBM Plex Mono', monospace" }}>{row.mpe}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'center', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}>{row.found}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'center' }}>
                      <span style={{ color: VS.success, fontWeight: 700 }}>✓ PASS</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legal Certification Statement */}
          <div style={{ padding: '16px 20px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, marginBottom: 32 }}>
            <div style={{ fontSize: 12.5, color: '#166534', lineHeight: 1.5, fontWeight: 500 }}>
              <strong>Official Declaration:</strong> The weighing instrument described above was verified under ambient laboratory conditions and found to conform to the statutory requirements of OIML Recommendation R 76-1. The verification stamp is hereby conferred.
            </div>
          </div>

          {/* Signatures & Seal Block */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, paddingTop: 16, borderTop: `1px solid ${VS.border}` }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase' }}>Testing Metrologist</div>
              <div style={{ height: 40, borderBottom: `1px solid ${VS.border}`, margin: '8px 0', display: 'flex', alignItems: 'flex-end' }}>
                <span style={{ fontFamily: 'cursive', fontSize: 18, color: VS.primary }}>A. Kumar</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: VS.textMain }}>A. Kumar (TECH-409)</div>
              <div style={{ fontSize: 11, color: VS.textMuted }}>Date: 06 Sep 2026</div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase' }}>Statutory Verification Officer</div>
              <div style={{ height: 40, borderBottom: `1px solid ${VS.border}`, margin: '8px 0', display: 'flex', alignItems: 'flex-end' }}>
                <span style={{ fontFamily: 'cursive', fontSize: 18, color: VS.teal }}>Manan Sharma</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: VS.textMain }}>Manan Sharma (VER-001)</div>
              <div style={{ fontSize: 11, color: VS.textMuted }}>Official Seal Enclosed</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: `1px dashed ${VS.border}`, borderRadius: 8, padding: 12 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 40, color: VS.primary }}>qr_code_2</span>
              <div style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", color: VS.textMuted, marginTop: 4 }}>
                VERIFIED: TR-0091-SHA256
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
