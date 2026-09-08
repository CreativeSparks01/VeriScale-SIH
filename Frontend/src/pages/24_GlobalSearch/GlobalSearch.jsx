import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppShell, { VS, Card, Badge, Btn, StatusDot, Input } from '../../components/AppShell';

const SEARCH_DATA = [
  { id: 'TEST-012', type: 'Test Record', title: 'Full OIML R 76 Evaluation (WT-100)', path: '/compliance', badge: 'TEST', date: '06 Sep 2026', meta: 'Pass • Class III' },
  { id: 'WT100-2026-001', type: 'Instrument', title: 'ABC WeighTech WT-100 Precision Balance', path: '/instruments/details', badge: 'INSTRUMENT', date: 'Active', meta: 'Class III • Max 6200g' },
  { id: 'CERT-TR-0091', type: 'Certificate', title: 'Statutory Metrological Verification Certificate', path: '/reports/generate', badge: 'CERTIFICATE', date: '06 Sep 2026', meta: 'Valid • Officer M. Sharma' },
  { id: 'SA-E0018832', type: 'Instrument', title: 'Sartorius Entris II Precision Lab Balance', path: '/instruments/details', badge: 'INSTRUMENT', date: 'Active', meta: 'Class II • Max 2200g' },
  { id: 'TEST-011', type: 'Test Record', title: 'Periodic Metrological Inspection (Sartorius)', path: '/compliance', badge: 'TEST', date: '04 Sep 2026', meta: 'Pass • Class II' },
  { id: 'OIML R 76-1', type: 'Regulatory Standard', title: 'Non-Automatic Weighing Instruments - Metrological & Technical Requirements', path: '/admin/rules', badge: 'STANDARD', date: 'Edition 2006', meta: 'Statutory Reference' },
  { id: 'E2-SET-4021', type: 'Standard Weights', title: 'Class E2 Stainless Steel Working Standard Mass Set (1mg - 5kg)', path: '/compliance/evidence', badge: 'CALIBRATION', date: 'Cal Due Oct 2026', meta: 'Traceable to NPL' },
];

export default function GlobalSearch() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('ALL');

  const filtered = SEARCH_DATA.filter(item => {
    const matchesQuery = item.id.toLowerCase().includes(query.toLowerCase()) ||
                         item.title.toLowerCase().includes(query.toLowerCase()) ||
                         item.type.toLowerCase().includes(query.toLowerCase()) ||
                         item.meta.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === 'ALL' || item.type === category;
    return matchesQuery && matchesCategory;
  });

  const breadcrumbs = [
    { label: 'PORTAL', path: '/dashboard' },
    { label: 'GLOBAL SEARCH' },
  ];

  return (
    <AppShell
      title="Global Metrology Directory Search"
      subtitle="Universal Index for Instruments, Test Dossiers, Statutory Certificates & Traceability Artifacts"
      activePath="/search"
      breadcrumbs={breadcrumbs}
    >
      {/* Search Input Box */}
      <Card style={{ padding: '24px 28px', marginBottom: 24, background: 'linear-gradient(135deg, #0B263D 0%, #123B5D 100%)', color: '#fff', border: 'none' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>
            Universal Metrology Search
          </h2>
          <p style={{ fontSize: 13, color: '#8daec7', margin: '0 0 20px' }}>
            Enter any Instrument Serial, Test Record (e.g. TEST-012), Certificate ID or OIML Clause
          </p>
          <div style={{ position: 'relative' }}>
            <span className="material-symbols-outlined" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 22, color: VS.textMuted }}>
              search
            </span>
            <input
              type="text"
              autoFocus
              placeholder="Search across all 1,482 laboratory records..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                width: '100%', height: 48, paddingLeft: 50, paddingRight: 20,
                borderRadius: 8, border: 'none', fontSize: 15,
                color: VS.textMain, background: '#fff', outline: 'none',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)', boxSizing: 'border-box',
              }}
            />
          </div>
        </div>
      </Card>

      {/* Category Pills */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {['ALL', 'Instrument', 'Test Record', 'Certificate', 'Regulatory Standard', 'Standard Weights'].map(cat => {
          const isActive = category === cat;
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                padding: '6px 14px', borderRadius: 20, border: `1px solid ${isActive ? VS.teal : VS.border}`,
                background: isActive ? VS.teal : '#fff', color: isActive ? '#fff' : VS.textMain,
                fontSize: 12.5, fontWeight: 600, cursor: 'pointer', transition: 'all 0.12s ease',
              }}
            >
              {cat === 'ALL' ? 'All Metrology Records' : cat}
            </button>
          );
        })}
      </div>

      {/* Search Results List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.length === 0 ? (
          <Card style={{ padding: 40, textAlign: 'center', color: VS.textMuted }}>
            <span className="material-symbols-outlined" style={{ fontSize: 40, marginBottom: 10, color: VS.border }}>search_off</span>
            <div>No metrological records match "{query}".</div>
          </Card>
        ) : (
          filtered.map(item => (
            <Card
              key={item.id}
              onClick={() => navigate(item.path)}
              style={{
                padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                cursor: 'pointer', transition: 'all 0.14s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = VS.teal}
              onMouseLeave={e => e.currentTarget.style.borderColor = VS.border}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 8, background: VS.cardAlt,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ color: VS.teal, fontSize: 22 }}>
                    {item.type === 'Instrument' ? 'scale' : item.type === 'Certificate' ? 'verified' : item.type === 'Regulatory Standard' ? 'gavel' : 'description'}
                  </span>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 13, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, color: VS.primary }}>
                      {item.id}
                    </span>
                    <Badge color="teal">{item.badge}</Badge>
                    <span style={{ fontSize: 12, color: VS.textMuted }}>{item.date}</span>
                  </div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: VS.textMain, marginTop: 2 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 12, color: VS.textMuted, marginTop: 1 }}>
                    {item.meta}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, color: VS.teal, fontWeight: 600 }}>Open Record</span>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: VS.teal }}>arrow_forward</span>
              </div>
            </Card>
          ))
        )}
      </div>
    </AppShell>
  );
}
