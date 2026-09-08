import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot } from '../../components/AppShell';

const TEMPLATES = [
  { id: 'TPL-01', name: 'OIML R 76-1 Statutory Verification Certificate', type: 'Official Legal Metrology', standard: 'OIML R 76-1:2006', updated: '28 Aug 2026', usage: 'Primary (84%)', active: true },
  { id: 'TPL-02', name: 'ISO/IEC 17025 Calibration Report with Uncertainty', type: 'Laboratory Calibration', standard: 'ISO/IEC 17025:2017', updated: '15 Aug 2026', usage: 'High Precision (12%)', active: false },
  { id: 'TPL-03', name: 'Initial Type Approval Evaluation Dossier', type: 'Type Examination', standard: 'WELMEC 7.2 / OIML', updated: '10 Jul 2026', usage: 'Type Testing (3%)', active: false },
  { id: 'TPL-04', name: 'Notice of Metrological Non-Conformance / Rejection', type: 'Statutory Rejection', standard: 'Legal Enforcement', updated: '02 Aug 2026', usage: 'Defects (1%)', active: false },
];

export default function ReportTemplates() {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState(TEMPLATES);
  const [selected, setSelected] = useState(TEMPLATES[0]);

  const breadcrumbs = [
    { label: 'REPORTS', path: '/reports/repository' },
    { label: 'REPORT TEMPLATES' },
  ];

  const actions = (
    <>
      <Btn variant="secondary" icon="arrow_back" onClick={() => navigate('/reports/repository')}>
        Back to Repository
      </Btn>
      <Btn variant="primary" icon="add" onClick={() => alert('New Template Creator opened')}>
        Create Template
      </Btn>
    </>
  );

  return (
    <AppShell
      title="Report & Certificate Templates"
      subtitle="Standardized Report Formats for OIML R 76 and ISO/IEC 17025 Metrology Documentation"
      activePath="/reports/repository"
      actions={actions}
      breadcrumbs={breadcrumbs}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20 }}>
        {/* Template List Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {templates.map(tpl => {
            const isSelected = selected.id === tpl.id;
            return (
              <Card
                key={tpl.id}
                onClick={() => setSelected(tpl)}
                style={{
                  padding: 20, cursor: 'pointer', transition: 'all 0.15s ease',
                  border: isSelected ? `2px solid ${VS.teal}` : `1px solid ${VS.border}`,
                  background: isSelected ? 'rgba(0,139,139,0.02)' : '#fff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 8, background: isSelected ? VS.tealLight : VS.cardAlt,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 24, color: isSelected ? VS.teal : VS.primary }}>
                        description
                      </span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, color: VS.textMain, margin: 0 }}>{tpl.name}</h4>
                      <div style={{ fontSize: 12, color: VS.textMuted, marginTop: 2 }}>{tpl.type} • {tpl.standard}</div>
                    </div>
                  </div>
                  {tpl.active && <Badge color="success"><StatusDot color="success" /> DEFAULT TEMPLATE</Badge>}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12, color: VS.textMuted, borderTop: `1px solid ${VS.borderLight}`, paddingTop: 10 }}>
                  <span>Template Code: <strong>{tpl.id}</strong></span>
                  <span>Usage Rate: <strong>{tpl.usage}</strong></span>
                  <span>Last Updated: {tpl.updated}</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Template Configuration Inspector */}
        <div>
          <Card style={{ padding: 24, position: 'sticky', top: 90 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: VS.textMain, margin: 0 }}>Template Settings</h3>
              <Badge color="teal">{selected.id}</Badge>
            </div>

            <div style={{ fontSize: 13, color: VS.textMuted, marginBottom: 20 }}>
              {selected.name}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: 'Statutory Metrology Seal Block', checked: true },
                { label: 'OIML Clause Compliance Breakdown Table', checked: true },
                { label: 'ISO/IEC 17025 Uncertainty Budget', checked: true },
                { label: 'Cryptographic SHA-256 Digest QR Code', checked: true },
                { label: 'Ambient Temperature / Humidity Datalog', checked: false },
                { label: 'Full Raw Observation Sub-Tables', checked: false },
              ].map((opt, i) => (
                <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: VS.textMain, cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked={opt.checked} style={{ accentColor: VS.teal }} />
                  {opt.label}
                </label>
              ))}

              <div style={{ paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Btn variant="primary" icon="preview" onClick={() => navigate('/reports/generate')} style={{ width: '100%', justifyContent: 'center' }}>
                  Preview with TEST-012 Data
                </Btn>
                <Btn variant="secondary" icon="save" onClick={() => alert('Template preferences updated')} style={{ width: '100%', justifyContent: 'center' }}>
                  Save Configuration
                </Btn>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
