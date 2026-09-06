import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// ─── Design Tokens (mirroring homepage) ────────────────────────────────────
const C = {
  sidebar: '#0B263D',
  sidebarBorder: '#1a3a55',
  sidebarActive: 'rgba(0,139,139,0.18)',
  sidebarHover: 'rgba(255,255,255,0.06)',
  sidebarText: '#8daec7',
  sidebarTextActive: '#ffffff',
  teal: '#008B8B',
  primary: '#123B5D',
  primaryDark: '#0B263D',
  page: '#F4F7F9',
  card: '#FFFFFF',
  border: '#D7E0E7',
  textMain: '#172B3A',
  textMuted: '#5B6B7A',
  topbar: 'rgba(255,255,255,0.95)',
};

const NAV_ITEMS = [
  { label: 'Dashboard',    icon: 'dashboard',      path: '/dashboard' },
  { label: 'Instruments',  icon: 'scale',           path: '/instruments' },
  { label: 'New Test',     icon: 'experiment',      path: '/tests/select-instrument' },
  { label: 'Compliance',   icon: 'verified',        path: '/compliance' },
  { label: 'Reports',      icon: 'description',     path: '/reports/repository' },
  { label: 'Search',       icon: 'search',          path: '/search' },
];

const ADMIN_ITEMS = [
  { label: 'Audit Trail',  icon: 'receipt_long',   path: '/admin/audit-trail' },
  { label: 'OIML Rules',   icon: 'gavel',          path: '/admin/rules' },
  { label: 'Settings',     icon: 'settings',       path: '/admin/settings' },
];

export default function AppShell({ children, title, subtitle, activePath, actions }) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = activePath || location.pathname;

  const isActive = (path) => currentPath === path || currentPath.startsWith(path + '/');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: C.page, fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* ═══════════════════════════════════════════════
          SIDEBAR
      ═══════════════════════════════════════════════ */}
      <aside style={{
        position: 'fixed', left: 0, top: 0, bottom: 0, width: 260,
        background: C.sidebar, display: 'flex', flexDirection: 'column',
        zIndex: 50, borderRight: `1px solid ${C.sidebarBorder}`,
        boxShadow: '4px 0 24px rgba(0,0,0,0.12)',
      }}>

        {/* Brand */}
        <div style={{
          height: 64, padding: '0 20px', display: 'flex', alignItems: 'center', gap: 12,
          borderBottom: `1px solid ${C.sidebarBorder}`,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: C.teal, display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span className="material-symbols-outlined" style={{ color: '#fff', fontSize: 20 }}>scale</span>
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, letterSpacing: '0.12em', lineHeight: 1 }}>
              VERISCALE
            </div>
            <div style={{ color: C.teal, fontSize: 9, letterSpacing: '0.18em', fontWeight: 600, textTransform: 'uppercase', marginTop: 3 }}>
              METROLOGY PLATFORM
            </div>
          </div>
        </div>

        {/* Nav */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 12px' }}>

          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.sidebarText, padding: '0 8px', marginBottom: 6 }}>
            Main
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 20 }}>
            {NAV_ITEMS.map(item => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '9px 12px', borderRadius: 8,
                    background: active ? C.sidebarActive : 'transparent',
                    color: active ? '#fff' : C.sidebarText,
                    fontWeight: active ? 600 : 400, fontSize: 13.5,
                    border: active ? `1px solid rgba(0,139,139,0.3)` : '1px solid transparent',
                    cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s ease',
                    position: 'relative', width: '100%',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = C.sidebarHover; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                >
                  {active && (
                    <span style={{
                      position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                      width: 3, height: 20, background: C.teal, borderRadius: '0 2px 2px 0',
                    }} />
                  )}
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: active ? C.teal : C.sidebarText }}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.sidebarText, padding: '0 8px', marginBottom: 6 }}>
            Administration
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {ADMIN_ITEMS.map(item => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '9px 12px', borderRadius: 8,
                    background: active ? C.sidebarActive : 'transparent',
                    color: active ? '#fff' : C.sidebarText,
                    fontWeight: active ? 600 : 400, fontSize: 13.5,
                    border: active ? `1px solid rgba(0,139,139,0.3)` : '1px solid transparent',
                    cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s ease',
                    position: 'relative', width: '100%',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = C.sidebarHover; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                >
                  {active && (
                    <span style={{
                      position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
                      width: 3, height: 20, background: C.teal, borderRadius: '0 2px 2px 0',
                    }} />
                  )}
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: active ? C.teal : C.sidebarText }}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Footer */}
        <div style={{
          padding: '14px 16px', borderTop: `1px solid ${C.sidebarBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: C.teal, display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 12, fontWeight: 700, position: 'relative', flexShrink: 0,
            }}>
              MS
              <span style={{
                position: 'absolute', bottom: 0, right: 0, width: 10, height: 10,
                borderRadius: '50%', background: '#22c55e', border: '2px solid ' + C.sidebar,
              }} />
            </div>
            <div>
              <div style={{ color: '#fff', fontSize: 13, fontWeight: 600, lineHeight: 1.2 }}>Manan Sharma</div>
              <div style={{ color: C.sidebarText, fontSize: 11, marginTop: 2 }}>Administrator</div>
            </div>
          </div>
          <button
            onClick={() => navigate('/auth')}
            title="Sign Out"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.sidebarText, padding: 4, borderRadius: 4 }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>logout</span>
          </button>
        </div>
      </aside>

      {/* ═══════════════════════════════════════════════
          MAIN CONTENT AREA
      ═══════════════════════════════════════════════ */}
      <div style={{ marginLeft: 260, flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        {/* TOPBAR */}
        <header style={{
          position: 'sticky', top: 0, height: 64, background: C.topbar,
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${C.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 32px', zIndex: 40,
          boxShadow: '0 1px 8px rgba(11,38,61,0.04)',
        }}>
          {/* Page Title */}
          <div>
            <h1 style={{ fontSize: 17, fontWeight: 700, color: C.textMain, lineHeight: 1.2, margin: 0 }}>
              {title}
            </h1>
            {subtitle && (
              <p style={{ fontSize: 12, color: C.textMuted, margin: '2px 0 0', lineHeight: 1 }}>
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Actions slot */}
            {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{actions}</div>}

            <div style={{ width: 1, height: 28, background: C.border }} />

            {/* Search */}
            <div style={{ position: 'relative' }}>
              <span className="material-symbols-outlined" style={{
                position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
                fontSize: 16, color: C.textMuted, pointerEvents: 'none',
              }}>search</span>
              <input
                placeholder="Search…"
                style={{
                  paddingLeft: 32, paddingRight: 12, height: 34, width: 200,
                  border: `1px solid ${C.border}`, borderRadius: 6, fontSize: 13,
                  color: C.textMain, background: C.page, outline: 'none', fontFamily: 'inherit',
                }}
              />
            </div>

            {/* Notifications */}
            <button style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: 6, borderRadius: 6, color: C.textMuted }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>notifications</span>
              <span style={{
                position: 'absolute', top: 4, right: 4, width: 8, height: 8,
                borderRadius: '50%', background: '#ef4444', border: '2px solid #fff',
              }} />
            </button>

            {/* Avatar */}
            <div style={{
              width: 34, height: 34, borderRadius: '50%', background: C.primary,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer',
              boxShadow: `0 0 0 2px ${C.border}`,
            }}>
              MS
            </div>
          </div>
        </header>

        {/* PAGE BODY */}
        <main style={{ flex: 1, padding: '28px 32px', background: C.page }}>
          {children}
        </main>
      </div>
    </div>
  );
}

// ─── Design constants exported for pages ─────────────────────────────────────
export const VS = {
  // colors
  page: '#F4F7F9',
  card: '#FFFFFF',
  cardAlt: '#F8FAFC',
  border: '#D7E0E7',
  borderLight: '#EAF0F5',
  primary: '#123B5D',
  primaryDark: '#0B263D',
  teal: '#008B8B',
  tealLight: 'rgba(0,139,139,0.08)',
  tealBorder: 'rgba(0,139,139,0.2)',
  textMain: '#172B3A',
  textMuted: '#5B6B7A',
  textDim: '#8A9AAA',
  success: '#15803D',
  successLight: 'rgba(21,128,61,0.08)',
  successBorder: 'rgba(21,128,61,0.2)',
  warning: '#B45309',
  warningLight: 'rgba(180,83,9,0.08)',
  warningBorder: 'rgba(180,83,9,0.2)',
  error: '#DC2626',
  errorLight: 'rgba(220,38,38,0.08)',
  errorBorder: 'rgba(220,38,38,0.2)',
  // typography
  font: "'IBM Plex Sans', sans-serif",
  // shadows
  shadow: '0 1px 6px rgba(11,38,61,0.06)',
  shadowMd: '0 2px 12px rgba(11,38,61,0.08)',
  shadowLg: '0 4px 24px rgba(11,38,61,0.10)',
};

// ─── Reusable UI Primitives ────────────────────────────────────────────────

export function Card({ children, style = {}, hover = false }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => hover && setHov(false)}
      style={{
        background: VS.card, border: `1px solid ${VS.border}`, borderRadius: 10,
        boxShadow: hov ? VS.shadowMd : VS.shadow,
        transition: 'box-shadow 0.18s ease, transform 0.18s ease',
        transform: hov ? 'translateY(-1px)' : 'none',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Badge({ children, color = 'default', style = {} }) {
  const variants = {
    default:  { bg: '#F1F5F9', text: '#5B6B7A', border: '#D7E0E7' },
    success:  { bg: VS.successLight, text: VS.success, border: VS.successBorder },
    warning:  { bg: VS.warningLight, text: VS.warning, border: VS.warningBorder },
    error:    { bg: VS.errorLight, text: VS.error, border: VS.errorBorder },
    teal:     { bg: VS.tealLight, text: VS.teal, border: VS.tealBorder },
    primary:  { bg: 'rgba(18,59,93,0.08)', text: VS.primary, border: 'rgba(18,59,93,0.2)' },
  };
  const v = variants[color] || variants.default;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '2px 8px', borderRadius: 5, fontSize: 11, fontWeight: 600,
      background: v.bg, color: v.text, border: `1px solid ${v.border}`,
      letterSpacing: '0.03em', ...style,
    }}>
      {children}
    </span>
  );
}

export function Btn({ children, variant = 'primary', icon, onClick, style = {}, type = 'button', small = false }) {
  const [hov, setHov] = useState(false);
  const variants = {
    primary: {
      base: { background: VS.primary, color: '#fff', border: `1px solid ${VS.primaryDark}` },
      hover: { background: VS.primaryDark },
    },
    secondary: {
      base: { background: VS.card, color: VS.textMain, border: `1px solid ${VS.border}` },
      hover: { background: VS.page },
    },
    teal: {
      base: { background: VS.teal, color: '#fff', border: `1px solid #006f6f` },
      hover: { background: '#006f6f' },
    },
    ghost: {
      base: { background: 'transparent', color: VS.textMuted, border: '1px solid transparent' },
      hover: { background: VS.page, color: VS.textMain },
    },
    danger: {
      base: { background: '#fff', color: VS.error, border: `1px solid ${VS.errorBorder}` },
      hover: { background: VS.errorLight },
    },
  };
  const v = variants[variant] || variants.primary;
  const merged = hov ? { ...v.base, ...v.hover } : v.base;
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: small ? '5px 12px' : '8px 16px',
        borderRadius: 7, fontSize: small ? 12 : 13.5, fontWeight: 600,
        cursor: 'pointer', fontFamily: VS.font, transition: 'all 0.15s ease',
        boxShadow: variant === 'primary' || variant === 'teal' ? VS.shadow : 'none',
        ...merged, ...style,
      }}
    >
      {icon && <span className="material-symbols-outlined" style={{ fontSize: small ? 15 : 17 }}>{icon}</span>}
      {children}
    </button>
  );
}

export function SectionHeader({ title, subtitle, style = {} }) {
  return (
    <div style={{ marginBottom: 20, ...style }}>
      <h2 style={{ fontSize: 15, fontWeight: 700, color: VS.textMain, margin: 0 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 12.5, color: VS.textMuted, margin: '4px 0 0' }}>{subtitle}</p>}
    </div>
  );
}

export function StatusDot({ color = 'success' }) {
  const colors = { success: '#22c55e', warning: '#f59e0b', error: '#ef4444', teal: '#008B8B', gray: '#94a3b8' };
  return (
    <span style={{
      display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
      background: colors[color] || colors.gray, flexShrink: 0,
    }} />
  );
}

export function KpiCard({ label, value, sub, icon, accent = VS.teal, trend }) {
  return (
    <Card style={{ padding: 20, position: 'relative', overflow: 'hidden' }} hover>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: accent, borderRadius: '10px 10px 0 0' }} />
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: VS.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
        {icon && (
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: accent, opacity: 0.7 }}>{icon}</span>
        )}
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color: VS.textMain, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </div>
      {(sub || trend) && (
        <div style={{ marginTop: 8, fontSize: 12, color: VS.textMuted, display: 'flex', alignItems: 'center', gap: 6 }}>
          {trend && (
            <span style={{ color: trend > 0 ? VS.success : VS.error, fontWeight: 600 }}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </span>
          )}
          {sub}
        </div>
      )}
    </Card>
  );
}

export function TableHeader({ columns }) {
  return (
    <thead>
      <tr style={{ borderBottom: `1px solid ${VS.border}` }}>
        {columns.map((col, i) => (
          <th key={i} style={{
            padding: '10px 16px', textAlign: col.align || 'left',
            fontSize: 11, fontWeight: 700, color: VS.textMuted,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            background: VS.cardAlt, whiteSpace: 'nowrap',
          }}>
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function Td({ children, style = {} }) {
  return (
    <td style={{ padding: '12px 16px', fontSize: 13.5, color: VS.textMain, borderBottom: `1px solid ${VS.borderLight}`, ...style }}>
      {children}
    </td>
  );
}

export function FormField({ label, required, children, hint }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 12.5, fontWeight: 600, color: VS.textMain }}>
        {label} {required && <span style={{ color: VS.error }}>*</span>}
      </label>
      {children}
      {hint && <p style={{ fontSize: 11.5, color: VS.textMuted, margin: 0 }}>{hint}</p>}
    </div>
  );
}

export const inputStyle = {
  padding: '8px 12px', border: `1px solid ${VS.border}`, borderRadius: 7,
  fontSize: 13.5, color: VS.textMain, background: '#fff', outline: 'none',
  fontFamily: "'IBM Plex Sans', sans-serif", width: '100%', boxSizing: 'border-box',
  transition: 'border-color 0.15s ease',
};

export function Input({ style = {}, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      onFocus={e => { setFocused(true); props.onFocus && props.onFocus(e); }}
      onBlur={e => { setFocused(false); props.onBlur && props.onBlur(e); }}
      style={{ ...inputStyle, borderColor: focused ? VS.teal : VS.border, boxShadow: focused ? `0 0 0 3px ${VS.tealLight}` : 'none', ...style }}
    />
  );
}

export function Select({ style = {}, children, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ ...inputStyle, borderColor: focused ? VS.teal : VS.border, boxShadow: focused ? `0 0 0 3px ${VS.tealLight}` : 'none', cursor: 'pointer', ...style }}
    >
      {children}
    </select>
  );
}
