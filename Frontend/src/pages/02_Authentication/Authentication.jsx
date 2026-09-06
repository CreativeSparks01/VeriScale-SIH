import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Authentication() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 900);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', fontFamily: "'IBM Plex Sans', sans-serif",
      background: '#F4F7F9',
    }}>

      {/* ── LEFT PANEL ── */}
      <div style={{
        width: '45%', minHeight: '100vh',
        background: 'linear-gradient(160deg, #0B263D 0%, #123B5D 60%, #0d3350 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '40px 48px', borderRight: '1px solid #1a3a55', position: 'relative', overflow: 'hidden',
      }}>

        {/* Background grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        {/* Brand */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10, background: '#008B8B',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span className="material-symbols-outlined" style={{ color: '#fff', fontSize: 22 }}>scale</span>
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, letterSpacing: '0.16em' }}>VERISCALE</div>
              <div style={{ color: '#008B8B', fontSize: 9, letterSpacing: '0.2em', fontWeight: 600, textTransform: 'uppercase' }}>METROLOGY PLATFORM</div>
            </div>
          </div>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '3px 10px', borderRadius: 5, fontSize: 10, fontWeight: 600,
            background: 'rgba(0,139,139,0.15)', color: '#008B8B', border: '1px solid rgba(0,139,139,0.3)',
            textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#008B8B', display: 'inline-block' }} />
            OIML R 76 CLASS I–IIII
          </span>
        </div>

        {/* Center copy */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: '#fff', fontSize: 36, fontWeight: 700, lineHeight: 1.15, marginBottom: 16, letterSpacing: '-0.01em' }}>
            Precision in<br />Every Measurement.
          </h1>
          <p style={{ color: '#8daec7', fontSize: 14, lineHeight: 1.7, marginBottom: 32, maxWidth: 380 }}>
            Digitize NAWI testing, automate OIML R 76 compliance evaluation, and generate standardized laboratory reports from one secure platform.
          </p>

          {/* Feature grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { icon: 'scale', label: 'Instrument Registry' },
              { icon: 'science', label: 'OIML Test Suite' },
              { icon: 'verified', label: 'Auto Compliance' },
              { icon: 'description', label: 'Report Generation' },
            ].map(f => (
              <div key={f.label} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 12px', borderRadius: 8,
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#008B8B' }}>{f.icon}</span>
                <span style={{ fontSize: 12, color: '#c8d8e8', fontWeight: 500 }}>{f.label}</span>
              </div>
            ))}
          </div>

          {/* Telemetry strip */}
          <div style={{
            marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8, overflow: 'hidden',
          }}>
            {[
              { label: 'System Status', value: 'CALIBRATED', dot: '#22c55e' },
              { label: 'Standard', value: 'R 76-1:2006', dot: null },
              { label: 'Data Integrity', value: 'SHA-256 ✓', dot: null },
            ].map((t, i) => (
              <div key={t.label} style={{
                padding: '10px 14px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{ fontSize: 9, fontWeight: 600, color: '#5b86a8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{t.label}</div>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: '#e2ecf5', display: 'flex', alignItems: 'center', gap: 5 }}>
                  {t.dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.dot, display: 'inline-block' }} />}
                  {t.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#5b86a8', fontSize: 11.5, margin: 0 }}>
            Built for modern metrology laboratories • ISO/IEC 17025
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: '40px 48px', background: '#F4F7F9',
      }}>

        {/* Badge */}
        <div style={{ marginBottom: 32 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '4px 12px', borderRadius: 5, fontSize: 10, fontWeight: 600,
            background: '#fff', color: '#5B6B7A', border: '1px solid #D7E0E7',
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 2, background: '#5B6B7A', display: 'inline-block' }} />
            Accredited Laboratory System // ISO/IEC 17025 Compliant
          </span>
        </div>

        {/* Card */}
        <div style={{
          background: '#fff', borderRadius: 14, border: '1px solid #D7E0E7',
          padding: '36px 40px', width: '100%', maxWidth: 440,
          boxShadow: '0 4px 24px rgba(11,38,61,0.08)',
        }}>
          <div style={{ marginBottom: 28 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#008B8B', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 6 }}>
              Secure Laboratory Access
            </span>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#172B3A', margin: 0, letterSpacing: '-0.01em' }}>Welcome back</h2>
            <p style={{ fontSize: 13.5, color: '#5B6B7A', margin: '6px 0 0' }}>Sign in to continue to VeriScale.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: '#172B3A', marginBottom: 6 }}>
                Email address
              </label>
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Enter your work email"
                style={{
                  width: '100%', padding: '10px 14px', borderRadius: 8,
                  border: '1px solid #D7E0E7', fontSize: 13.5, color: '#172B3A',
                  background: '#fff', outline: 'none', boxSizing: 'border-box',
                  fontFamily: 'inherit', transition: 'border-color 0.15s',
                }}
                onFocus={e => e.target.style.borderColor = '#008B8B'}
                onBlur={e => e.target.style.borderColor = '#D7E0E7'}
              />
            </div>

            {/* Password */}
            <div>
              <label style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: '#172B3A', marginBottom: 6 }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPass ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={{
                    width: '100%', padding: '10px 40px 10px 14px', borderRadius: 8,
                    border: '1px solid #D7E0E7', fontSize: 13.5, color: '#172B3A',
                    background: '#fff', outline: 'none', boxSizing: 'border-box',
                    fontFamily: 'inherit', transition: 'border-color 0.15s',
                  }}
                  onFocus={e => e.target.style.borderColor = '#008B8B'}
                  onBlur={e => e.target.style.borderColor = '#D7E0E7'}
                />
                <button
                  type="button" onClick={() => setShowPass(p => !p)}
                  style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#5B6B7A', padding: 0, display: 'flex' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{showPass ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 12.5, color: '#5B6B7A' }}>
                <input type="checkbox" style={{ width: 14, height: 14, accentColor: '#008B8B' }} />
                Remember me
              </label>
              <button type="button" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12.5, fontWeight: 600, color: '#123B5D', fontFamily: 'inherit' }}>
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit" disabled={loading}
              style={{
                width: '100%', padding: '11px 20px', borderRadius: 8,
                background: loading ? '#5B6B7A' : '#123B5D', color: '#fff',
                fontSize: 14, fontWeight: 600, border: 'none', cursor: loading ? 'wait' : 'pointer',
                fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'background 0.15s', boxShadow: '0 2px 8px rgba(18,59,93,0.25)',
              }}
            >
              {loading ? (
                <>
                  <span style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                  Authenticating…
                </>
              ) : (
                <>Sign In <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span></>
              )}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
            <div style={{ flex: 1, height: 1, background: '#D7E0E7' }} />
            <span style={{ fontSize: 10, color: '#5B6B7A', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Authorized Personnel Only</span>
            <div style={{ flex: 1, height: 1, background: '#D7E0E7' }} />
          </div>

          {/* Security note */}
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: 10,
            padding: '12px 14px', borderRadius: 8, background: '#F4F7F9', border: '1px solid #D7E0E7',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#008B8B', flexShrink: 0, marginTop: 1 }}>verified_user</span>
            <p style={{ fontSize: 12, color: '#5B6B7A', margin: 0, lineHeight: 1.6 }}>
              Access is protected by role-based permissions and secure authentication.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: '#5B6B7A', margin: 0 }}>VeriScale v1.0 • © 2026 VeriScale Laboratory Management Platform</p>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
