import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function Authentication() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full">
<div className="flex flex-col lg:flex-row w-full min-h-screen">
{/*  LEFT SIDE: Technical Brand & Metrology Telemetry (45% on desktop)  */}
<div className="w-full lg:w-[45%] bg-[#0B263D] px-8 sm:px-12 py-10 lg:py-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#194870]">
{/*  Top Brand Header  */}
<div>
<div className="flex items-center gap-3.5">
<img alt="VeriScale Technical Emblem" className="w-9 h-9 object-contain rounded-xs bg-[#123B5D]/40 p-0.5 border border-[#194870]" src="/src/assets/technical-emblem.svg"/>
<div className="flex flex-col">
<span className="font-headline-sm text-white tracking-[0.2em] uppercase font-bold text-lg leading-none">VERISCALE</span>
<span className="font-metric-tabular text-[11px] tracking-wider text-[#008B8B] font-semibold uppercase mt-1">METROLOGY PLATFORM</span>
</div>
</div>
<div className="mt-4">
<span className="inline-flex items-center gap-1.5 font-metric-tabular text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded bg-[#123B5D]/60 text-slate-300 border border-[#194870]">
<span className="w-1.5 h-1.5 rounded-full bg-[#008B8B]"></span>
            OIML R 76 CLASS I–IIII
          </span>
</div>
</div>
{/*  Center Section: Narrative & Schematic Visualizer  */}
<div className="my-8 lg:my-0 max-w-lg">
<h1 className="font-headline-xl text-3xl sm:text-4xl text-white font-bold tracking-tight leading-[1.15] mb-3">
          Precision in<br/>Every Measurement.
        </h1>
<p className="font-body-md text-slate-300 text-sm leading-relaxed mb-6">
          Digitize NAWI testing, automate OIML R 76 compliance, and generate standardized laboratory reports from one secure platform.
        </p>
{/*  Technical Schematic Image  */}
<div className="relative w-full border border-[#194870]/70 rounded-md bg-[#081e30]/60 p-2 shadow-inner">
<div className="flex items-center justify-between pb-1.5 px-1 border-b border-[#194870]/50 text-[10px] font-metric-tabular text-[#5b86a8] uppercase">
<span>DIAGNOSTIC / TELEMETRY BUS</span>
<span className="text-[#008B8B] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#008B8B] animate-pulse"></span>
              LIVE INTERFACE
            </span>
</div>
<img alt="Metrology Calibration Graphic" className="w-full h-auto object-cover rounded mt-1.5" src="/src/assets/technical-emblem.svg"/>
</div>
{/*  Telemetry Data Strip  */}
<div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-[#194870]/60 text-left">
<div>
<span className="block font-metric-tabular text-[9px] uppercase tracking-wider text-[#5b86a8]">System Status</span>
<span className="font-metric-tabular text-[11px] font-semibold text-slate-200 flex items-center gap-1 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#008B8B]"></span>
              CALIBRATED
            </span>
</div>
<div>
<span className="block font-metric-tabular text-[9px] uppercase tracking-wider text-[#5b86a8]">Standard</span>
<span className="font-metric-tabular text-[11px] font-semibold text-slate-200 mt-0.5 block">
              R 76-1:2006
            </span>
</div>
<div>
<span className="block font-metric-tabular text-[9px] uppercase tracking-wider text-[#5b86a8]">Data Integrity</span>
<span className="font-metric-tabular text-[11px] font-semibold text-slate-200 mt-0.5 block">
              SHA-256 VALID
            </span>
</div>
</div>
</div>
{/*  Bottom Left Legal & Footnote  */}
<div className="pt-4 border-t border-[#194870]/50">
<p className="font-body-md text-xs font-medium text-slate-200">
          Built for modern metrology laboratories
        </p>
<p className="font-metric-tabular text-[11px] text-[#5b86a8] mt-0.5">
          OIML R 76 • Test Management • Compliance • Reporting
        </p>
</div>
</div>
{/*  RIGHT SIDE: Authentication Interface (55% on desktop)  */}
<div className="w-full lg:w-[55%] bg-[#F4F7F9] px-6 sm:px-12 py-10 lg:py-12 flex flex-col justify-between items-center">
{/*  Top Accreditation Badge  */}
<div className="w-full flex justify-center">
<span className="font-metric-tabular text-[10px] tracking-wider text-[#5B6B7A] uppercase bg-[#E5ECF2] px-3.5 py-1 rounded border border-[#D7E0E7] flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-sm bg-[#5B6B7A]"></span>
          ACCREDITED LABORATORY SYSTEM // ISO/IEC 17025 COMPLIANT
        </span>
</div>
{/*  Center Authentication Card  */}
<div className="w-full max-w-[440px] my-auto py-6">
<div className="bg-white rounded-lg border border-[#D7E0E7] p-8 shadow-sm">
{/*  Card Header  */}
<div className="mb-6">
<span className="font-metric-tabular text-xs tracking-wider font-semibold text-[#008B8B] uppercase block mb-1.5">
              SECURE LABORATORY ACCESS
            </span>
<h2 className="font-headline-lg text-2xl font-bold text-[#172B3A] tracking-tight mb-1">
              Welcome back
            </h2>
<p className="font-body-md text-sm text-[#5B6B7A]">
              Sign in to continue to VeriScale.
            </p>
</div>
{/*  Login Form  */}
<form className="space-y-4" id="veriscale-login-form" onSubmit="event.preventDefault();">
{/*  Email Input  */}
<div>
<label className="block font-label-md text-xs font-semibold text-[#172B3A] mb-1.5" htmlFor="work-email">
                Email address
              </label>
<input className="w-full font-body-md bg-white border border-[#D7E0E7] rounded-md px-3.5 py-2.5 text-sm text-[#172B3A] placeholder-[#5B6B7A]/60 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-[#008B8B] transition duration-150" id="work-email" name="email" placeholder="Enter your work email" required="" type="email"/>
</div>
{/*  Password Input  */}
<div>
<label className="block font-label-md text-xs font-semibold text-[#172B3A] mb-1.5" htmlFor="password-field">
                Password
              </label>
<div className="relative">
<input className="w-full font-body-md bg-white border border-[#D7E0E7] rounded-md px-3.5 py-2.5 pr-10 text-sm text-[#172B3A] placeholder-[#5B6B7A]/60 focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:border-[#008B8B] transition duration-150" id="password-field" name="password" placeholder="Enter your password" required="" type="password"/>
<button aria-label="Toggle password visibility" className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#5B6B7A] hover:text-[#172B3A] focus:outline-none" id="toggle-password-btn" type="button">
<span className="material-symbols-outlined text-[18px]" id="eye-icon">visibility</span>
</button>
</div>
</div>
{/*  Options Row  */}
<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input className="w-4 h-4 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-[#008B8B] focus:ring-offset-0 transition" name="remember" type="checkbox"/>
<span className="font-body-sm text-xs text-[#5B6B7A]">Remember me</span>
</label>
<a className="font-label-md text-xs font-medium text-[#123B5D] hover:text-[#008B8B] transition-colors" href="#forgot">
                Forgot password?
              </a>
</div>
{/*  Submit CTA  */}
<div className="pt-2">
<button className="w-full py-2.5 px-4 bg-[#123B5D] hover:bg-[#0B263D] active:bg-[#081E30] text-white font-label-lg font-medium text-sm rounded-md shadow-sm transition duration-150 cursor-pointer flex items-center justify-center gap-2" type="submit">
<span>Sign In</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</form>
{/*  Divider & Verification Shield Box  */}
<div className="relative my-5 text-center">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-[#D7E0E7]"></div>
</div>
<div className="relative inline-block bg-white px-3">
<span className="font-metric-tabular text-[10px] tracking-widest text-[#5B6B7A] uppercase">
                Authorized personnel only
              </span>
</div>
</div>
<div className="flex items-start gap-2.5 p-3 bg-[#F4F7F9] rounded border border-[#D7E0E7] text-left">
<span className="material-symbols-outlined text-[#008B8B] text-[18px] shrink-0 mt-0.5">verified_user</span>
<p className="font-body-sm text-xs text-[#5B6B7A] leading-normal">
              Access is protected by role-based permissions and secure authentication.
            </p>
</div>
</div>
</div>
{/*  Right Footer: Version & Legal  */}
<div className="w-full text-center mt-4">
<div className="font-metric-tabular text-xs font-medium text-[#5B6B7A]">
          VeriScale v1.0
        </div>
<div className="font-body-sm text-xs text-[#5B6B7A]/80 mt-0.5">
          © 2026 VeriScale • Laboratory Management Platform
        </div>
</div>
</div>
</div>

</div></main>
    </div>
  );
}
