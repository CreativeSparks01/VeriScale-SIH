import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function ReportPreview() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full font-body-md text-on-surface bg-background">
{/*  TOP TELEMETRY STRIP  */}
<div className="w-full bg-primary text-on-primary px-space-lg py-space-xs flex flex-wrap items-center justify-between text-label-sm font-label-sm border-b border-primary-container">
<div className="flex items-center space-x-space-md">
<div className="flex items-center space-x-space-xs">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span className="font-metric-tabular text-tertiary-fixed tracking-wider">COM1: 9600 BAUD [ONLINE]</span>
</div>
<span className="text-secondary-fixed-dim font-bold">|</span>
<span className="text-surface-bright uppercase">ISO/IEC 17025 ACCREDITED FACILITY #MET-9082</span>
<span className="text-secondary-fixed-dim font-bold">|</span>
<div className="flex items-center space-x-space-xs text-secondary-fixed">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span>SHA-256 HASH ENGINE: LOCKED &amp; ACTIVE</span>
</div>
</div>
<div className="flex items-center space-x-space-md text-surface-container-high">
<span className="font-metric-tabular">RECORD: TEST-012</span>
<span className="bg-tertiary-container text-tertiary-fixed px-space-xs py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">Approved Document TR-0091</span>
</div>
</div>
{/*  MAIN HEADER BAR  */}
<div className="w-full bg-surface-container-lowest px-space-lg py-space-md shadow-sm flex flex-wrap items-center justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center space-x-space-xs text-label-sm font-label-sm text-secondary mb-0.5">
<span className="hover:text-primary cursor-pointer">Verification Tests</span>
<span className="material-symbols-outlined text-[12px]">chevron_right</span>
<span className="hover:text-primary cursor-pointer">TEST-012</span>
<span className="material-symbols-outlined text-[12px]">chevron_right</span>
<span className="text-primary font-semibold">Report Preview</span>
</div>
<div className="flex items-center space-x-space-md">
<h1 className="text-headline-lg font-headline-lg text-primary tracking-tight">Test Report — TR-0091</h1>
<span className="bg-surface-container-low text-primary px-2.5 py-0.5 rounded-full text-label-sm font-label-sm font-bold border border-outline-variant/40">OIML R 76-1:2006</span>
</div>
<p className="text-body-sm font-body-sm text-secondary mt-0.5">Official legal-metrology certificate generated from approved record TEST-012 under ISO/IEC 17025 accreditation.</p>
</div>
<div className="flex items-center space-x-space-sm">
<button className="bg-surface-container-low hover:bg-surface-container text-secondary hover:text-primary px-space-md py-2 rounded text-label-md font-label-md transition-colors flex items-center space-x-1.5 shadow-sm">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
<span>Back to Review</span>
</button>
<button className="bg-surface-container-lowest hover:bg-surface-container-low text-on-surface px-space-md py-2 rounded text-label-md font-label-md border border-outline-variant/60 hover:border-outline transition-colors flex items-center space-x-1.5 shadow-sm" >
<span className="material-symbols-outlined text-[16px]">print</span>
<span>Print Report</span>
</button>
<button className="bg-surface-container-lowest hover:bg-surface-container-low text-on-surface px-space-md py-2 rounded text-label-md font-label-md border border-outline-variant/60 hover:border-outline transition-colors flex items-center space-x-1.5 shadow-sm">
<span className="material-symbols-outlined text-[16px]">description</span>
<span>Export (.docx)</span>
</button>
<button className="bg-primary hover:bg-primary-container text-on-primary px-space-lg py-2 rounded text-label-md font-label-md transition-all flex items-center space-x-2 shadow-md hover:shadow-lg" id="downloadPdfBtn">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed">picture_as_pdf</span>
<span className="font-semibold">Download Official PDF</span>
<span className="bg-surface-container-lowest/20 text-on-primary text-[10px] px-1.5 py-0.5 rounded font-mono">2.4MB</span>
</button>
</div>
</div>
{/*  8-STAGE WORKFLOW STEPPER  */}
<div className="w-full bg-surface-container-low border-y border-outline-variant/40 px-space-lg py-space-xs overflow-x-auto">
<div className="flex items-center justify-between min-w-[980px] gap-2">
{/*  Step 01  */}
<div className="flex items-center space-x-2 text-secondary opacity-90">
<div className="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">✓</div>
<span className="text-label-sm font-label-sm font-medium">01 Instrument</span>
</div>
<div className="w-6 h-0.5 bg-outline-variant/50"></div>
{/*  Step 02  */}
<div className="flex items-center space-x-2 text-secondary opacity-90">
<div className="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">✓</div>
<span className="text-label-sm font-label-sm font-medium">02 Lab Conditions</span>
</div>
<div className="w-6 h-0.5 bg-outline-variant/50"></div>
{/*  Step 03  */}
<div className="flex items-center space-x-2 text-secondary opacity-90">
<div className="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">✓</div>
<span className="text-label-sm font-label-sm font-medium">03 Test Selection</span>
</div>
<div className="w-6 h-0.5 bg-outline-variant/50"></div>
{/*  Step 04  */}
<div className="flex items-center space-x-2 text-secondary opacity-90">
<div className="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">✓</div>
<span className="text-label-sm font-label-sm font-medium">04 Observations</span>
</div>
<div className="w-6 h-0.5 bg-outline-variant/50"></div>
{/*  Step 05  */}
<div className="flex items-center space-x-2 text-secondary opacity-90">
<div className="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">✓</div>
<span className="text-label-sm font-label-sm font-medium">05 Compliance</span>
</div>
<div className="w-6 h-0.5 bg-outline-variant/50"></div>
{/*  Step 06  */}
<div className="flex items-center space-x-2 text-secondary opacity-90">
<div className="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">✓</div>
<span className="text-label-sm font-label-sm font-medium">06 Evidence</span>
</div>
<div className="w-6 h-0.5 bg-outline-variant/50"></div>
{/*  Step 07  */}
<div className="flex items-center space-x-2 text-secondary opacity-90">
<div className="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[10px] font-bold">✓</div>
<span className="text-label-sm font-label-sm font-medium">07 Review</span>
</div>
<div className="w-6 h-0.5 bg-tertiary"></div>
{/*  Step 08 (ACTIVE)  */}
<div className="flex items-center space-x-2 bg-primary text-on-primary px-3 py-1 rounded shadow-sm">
<div className="w-4 h-4 rounded-full bg-tertiary-fixed text-primary flex items-center justify-center text-[9px] font-bold">8</div>
<span className="text-label-sm font-label-sm font-bold text-surface-bright tracking-wide">08 Report (Controlled)</span>
</div>
</div>
</div>
{/*  CONTROLLED METADATA STRIP  */}
<div className="w-full bg-surface-container-lowest border-b border-outline-variant/40 px-space-lg py-2 flex flex-wrap items-center justify-between gap-y-2 text-label-sm font-label-sm">
<div className="flex flex-wrap items-center gap-x-space-lg gap-y-1 text-on-surface">
<div className="flex items-center space-x-1.5">
<span className="text-secondary font-medium">Report:</span>
<span className="font-metric-tabular font-bold text-primary">TR-0091</span>
</div>
<div className="flex items-center space-x-1.5">
<span className="text-secondary font-medium">Instrument:</span>
<span className="font-semibold text-primary">ABC WeighTech WT-100</span>
<span className="font-mono text-[11px] text-secondary">(S/N: WT100-2026-001)</span>
</div>
<div className="flex items-center space-x-1.5">
<span className="text-secondary font-medium">Status:</span>
<span className="bg-surface-container-high text-primary px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider flex items-center space-x-1">
<span className="material-symbols-outlined text-[13px] text-tertiary">verified</span>
<span>Approved</span>
</span>
</div>
<div className="flex items-center space-x-1.5 text-secondary">
<span>Signatory:</span>
<span className="font-semibold text-primary">R. Singh</span>
<span>• 06 Sep 2026 • 13:14 UTC</span>
</div>
<div className="flex items-center space-x-1.5">
<span className="text-secondary font-medium">Standard:</span>
<span className="font-mono font-bold text-primary bg-surface-container-low px-1.5 py-0.5 rounded text-[11px]">OIML R 76-2026.1</span>
</div>
</div>
<div className="flex items-center space-x-2 text-[11px] text-secondary font-mono bg-surface-container-low px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px] text-primary">fingerprint</span>
<span>SHA-256: 7f8a92bb9402a...e401 (IMMUTABLE SEAL)</span>
</div>
</div>
{/*  WORKSTATION BODY: 3-COLUMN LAYOUT  */}
<div className="w-full flex flex-col lg:flex-row min-h-[calc(100vh-190px)]">
{/*  LEFT COLUMN: Report Contents & Outline  */}
<aside className="w-full lg:w-[260px] shrink-0 bg-surface-container-lowest border-r border-outline-variant/40 flex flex-col p-space-md">
<div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/30">
<div className="flex items-center space-x-1.5 text-primary font-headline-sm text-headline-sm">
<span className="material-symbols-outlined text-[18px]">account_tree</span>
<span>Report Contents</span>
</div>
<span className="text-label-sm font-label-sm text-secondary bg-surface-container-low px-1.5 py-0.5 rounded">11 Pages</span>
</div>
{/*  Outline Search  */}
<div className="mt-space-sm relative">
<span className="material-symbols-outlined absolute left-2.5 top-2 text-[16px] text-secondary">search</span>
<input className="w-full bg-surface-container-low/50 text-body-sm font-body-sm text-on-surface pl-8 pr-2 py-1.5 rounded border border-outline-variant/50 focus:outline-none focus:border-primary focus:bg-surface-container-lowest" placeholder="Find in report... [Ctrl+F]" type="text"/>
</div>
{/*  Navigation Tree  */}
<div className="flex-1 mt-space-md overflow-y-auto space-y-1 pr-1 text-label-sm font-label-sm" id="toc-container">
{/*  Active item  */}
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded bg-primary text-on-primary font-medium text-left shadow-sm group">
<div className="flex items-center space-x-2 truncate">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed">description</span>
<span className="truncate">01 Cover &amp; Certificate</span>
</div>
<span className="text-[10px] bg-primary-container text-tertiary-fixed font-mono px-1.5 py-0.5 rounded">p.1</span>
</button>
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded text-on-surface hover:bg-surface-container-low font-normal text-left transition-colors group">
<div className="flex items-center space-x-2 truncate text-secondary group-hover:text-primary">
<span className="material-symbols-outlined text-[16px]">qr_code_2</span>
<span className="truncate">02 Instrument Identification</span>
</div>
<span className="text-[10px] text-secondary font-mono">p.2</span>
</button>
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded text-on-surface hover:bg-surface-container-low font-normal text-left transition-colors group">
<div className="flex items-center space-x-2 truncate text-secondary group-hover:text-primary">
<span className="material-symbols-outlined text-[16px]">tune</span>
<span className="truncate">03 Technical Specifications</span>
</div>
<span className="text-[10px] text-secondary font-mono">p.2</span>
</button>
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded text-on-surface hover:bg-surface-container-low font-normal text-left transition-colors group">
<div className="flex items-center space-x-2 truncate text-secondary group-hover:text-primary">
<span className="material-symbols-outlined text-[16px]">thermostat</span>
<span className="truncate">04 Environmental Conditions</span>
</div>
<span className="text-[10px] text-secondary font-mono">p.3</span>
</button>
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded text-on-surface hover:bg-surface-container-low font-normal text-left transition-colors group">
<div className="flex items-center space-x-2 truncate text-secondary group-hover:text-primary">
<span className="material-symbols-outlined text-[16px]">fact_check</span>
<span className="truncate">05 Scope &amp; Test Procedures</span>
</div>
<span className="text-[10px] text-secondary font-mono">p.4</span>
</button>
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded text-on-surface hover:bg-surface-container-low font-normal text-left transition-colors group">
<div className="flex items-center space-x-2 truncate text-secondary group-hover:text-primary">
<span className="material-symbols-outlined text-[16px]">grid_on</span>
<span className="truncate">06 Observations Matrix</span>
</div>
<span className="text-[10px] text-secondary font-mono">p.5</span>
</button>
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded text-on-surface hover:bg-surface-container-low font-normal text-left transition-colors group">
<div className="flex items-center space-x-2 truncate text-secondary group-hover:text-primary">
<span className="material-symbols-outlined text-[16px]">functions</span>
<span className="truncate">07 Derived Calculations &amp; Error</span>
</div>
<span className="text-[10px] text-secondary font-mono">p.6</span>
</button>
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded text-on-surface hover:bg-surface-container-low font-normal text-left transition-colors group">
<div className="flex items-center space-x-2 truncate text-secondary group-hover:text-primary">
<span className="material-symbols-outlined text-[16px]">gavel</span>
<span className="truncate">08 OIML R 76 Compliance</span>
</div>
<span className="text-[10px] text-secondary font-mono">p.7</span>
</button>
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded text-on-surface hover:bg-surface-container-low font-normal text-left transition-colors group">
<div className="flex items-center space-x-2 truncate text-secondary group-hover:text-primary">
<span className="material-symbols-outlined text-[16px]">photo_library</span>
<span className="truncate">09 Photographic Evidence</span>
</div>
<span className="text-[10px] text-secondary font-mono">p.8</span>
</button>
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded text-on-surface hover:bg-surface-container-low font-normal text-left transition-colors group">
<div className="flex items-center space-x-2 truncate text-secondary group-hover:text-primary">
<span className="material-symbols-outlined text-[16px]">link</span>
<span className="truncate">10 Calibration Traceability</span>
</div>
<span className="text-[10px] text-secondary font-mono">p.9</span>
</button>
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded text-on-surface hover:bg-surface-container-low font-normal text-left transition-colors group">
<div className="flex items-center space-x-2 truncate text-secondary group-hover:text-primary">
<span className="material-symbols-outlined text-[16px]">history_edu</span>
<span className="truncate">11 Supervisory Sign-off</span>
</div>
<span className="text-[10px] text-secondary font-mono">p.10</span>
</button>
<button className="w-full flex items-center justify-between px-2.5 py-2 rounded text-on-surface hover:bg-surface-container-low font-normal text-left transition-colors group">
<div className="flex items-center space-x-2 truncate text-secondary group-hover:text-primary">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="truncate">12 Scope &amp; Legal Conclusion</span>
</div>
<span className="text-[10px] text-secondary font-mono">p.11</span>
</button>
</div>
{/*  Outline Footer  */}
<div className="pt-space-md border-t border-outline-variant/30 text-[11px] text-secondary flex flex-col gap-1">
<div className="flex justify-between">
<span>Sections Structured:</span>
<span className="font-bold text-on-surface">12 of 12</span>
</div>
<div className="flex justify-between">
<span>Standard Form:</span>
<span className="font-bold text-on-surface">FORM 76-CAL (v4)</span>
</div>
<div className="mt-1 bg-surface-container-low p-2 rounded text-[10px] leading-tight text-secondary">
<span className="font-semibold text-primary">Conforming Document:</span> All dynamic fields verified against lab standards ISO/IEC 17025 §7.8.
        </div>
</div>
</aside>
{/*  CENTER COLUMN: A4 Document Viewer Workspace  */}
<section className="flex-1 bg-surface-container-low/40 flex flex-col items-center overflow-y-auto px-space-md py-space-md">
{/*  Document Viewer Utility Toolbar  */}
<div className="w-full max-w-[820px] bg-surface-container-lowest border border-outline-variant/50 rounded-t shadow-sm px-space-md py-2 flex flex-wrap items-center justify-between gap-y-2 mb-[-1px] z-10">
{/*  Page Navigation  */}
<div className="flex items-center space-x-1.5 text-label-sm font-label-sm">
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-low text-secondary hover:text-primary">
<span className="material-symbols-outlined text-[16px]">first_page</span>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-low text-secondary hover:text-primary">
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
</button>
<div className="flex items-center space-x-1 px-1">
<span className="text-secondary">Page</span>
<input className="w-8 text-center bg-surface-container-low text-primary font-bold py-0.5 rounded border border-outline-variant/60 font-metric-tabular" type="text" defaultValue="1"/>
<span className="text-secondary">of 11</span>
</div>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-low text-secondary hover:text-primary">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-low text-secondary hover:text-primary">
<span className="material-symbols-outlined text-[16px]">last_page</span>
</button>
</div>
{/*  Zoom Controls  */}
<div className="flex items-center space-x-2 text-label-sm font-label-sm border-x border-outline-variant/30 px-space-md">
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-low text-secondary hover:text-primary">
<span className="material-symbols-outlined text-[16px]">remove</span>
</button>
<span className="font-metric-tabular font-bold text-primary px-1">100%</span>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-low text-secondary hover:text-primary">
<span className="material-symbols-outlined text-[16px]">add</span>
</button>
<div className="h-4 w-[1px] bg-outline-variant/40 mx-1"></div>
<button className="text-[11px] px-2 py-1 bg-surface-container-low hover:bg-surface-container text-primary rounded font-medium">Fit Page</button>
<button className="text-[11px] px-2 py-1 bg-surface-container-low hover:bg-surface-container text-primary rounded font-medium">Fit Width</button>
</div>
{/*  Utility Icons  */}
<div className="flex items-center space-x-1">
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-low text-secondary hover:text-primary" title="Rotate View">
<span className="material-symbols-outlined text-[16px]">rotate_right</span>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded hover:bg-surface-container-low text-secondary hover:text-primary" title="Full Viewport">
<span className="material-symbols-outlined text-[16px]">fullscreen</span>
</button>
</div>
</div>
{/*  A4 PAPER SHEET CONTAINER (820px standard ratio width, calibrated white sheet)  */}
<div className="w-full max-w-[820px] bg-surface-container-lowest border border-outline-variant/80 shadow-md p-10 flex flex-col relative text-[#172B3A]">
{/*  TOP LAB HEADER STRIP  */}
<div className="border-t-4 border-b-2 border-primary pt-2 pb-3 mb-6">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-[24px]">balance</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">VERISCALE METROLOGY LABORATORY</span>
</div>
<span className="text-[11px] font-semibold text-secondary tracking-wide uppercase">ISO/IEC 17025 ACCREDITED CALIBRATION &amp; TESTING FACILITY • ACCREDITATION ID: MET-9082</span>
<span className="text-[10px] text-secondary">National Legal Metrology Directorate Authorized Verification Center • Unit 4B Industrial Park, Cambridge, CB24 9ZR</span>
</div>
<div className="text-right flex flex-col items-end">
<span className="font-mono text-[11px] font-bold text-primary">DOC REF: TR-0091-R76</span>
<span className="font-mono text-[10px] text-secondary">PAGE 1 OF 11</span>
<span className="font-mono text-[10px] text-secondary">ISSUE: 01 (ORIGINAL)</span>
</div>
</div>
</div>
{/*  FORMAL DOCUMENT TITLE  */}
<div className="text-center mb-6">
<span className="inline-block bg-primary-container text-surface-bright text-[10px] font-mono uppercase tracking-widest px-3 py-0.5 rounded font-bold mb-2">OFFICIAL METROLOGICAL RECORD — FORM 76-CAL</span>
<h2 className="text-headline-md font-headline-md text-primary tracking-tight uppercase">TYPE EVALUATION &amp; VERIFICATION REPORT</h2>
<p className="text-body-sm font-body-sm text-secondary font-medium tracking-wide mt-0.5">NON-AUTOMATIC WEIGHING INSTRUMENT (NAWI) — ACCORDING TO OIML R 76-1:2006</p>
</div>
{/*  PROMINENT APPROVAL STATUS & VERDICT BOX  */}
<div className="bg-surface-container-low/70 border border-outline-variant/60 rounded p-4 mb-6 flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 rounded bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[30px] text-tertiary">verified</span>
</div>
<div>
<div className="text-[10px] font-mono uppercase tracking-wider text-secondary font-semibold">FINAL METROLOGICAL DETERMINATION</div>
<div className="text-headline-sm font-headline-sm font-bold text-primary">VERDICT: APPROVED / COMPLIANT WITH OIML R 76 (CLASS III)</div>
<div className="text-[11px] text-secondary">All required testing protocols executed without non-conformance. Permissible tolerances sustained under laboratory conditions.</div>
</div>
</div>
<div className="text-right border-l border-outline-variant/50 pl-4 shrink-0">
<div className="text-[9px] font-mono text-secondary uppercase">SECURITY VERIFICATION STAMP</div>
<div className="font-mono text-[11px] font-bold text-primary">06-SEP-2026 13:14:22Z</div>
<div className="text-[10px] font-mono text-secondary">CRC: 0x8C74D901</div>
</div>
</div>
{/*  PRIMARY METADATA MATRIX (FORMAL TABLE)  */}
<div className="mb-6">
<div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1.5 flex items-center space-x-1">
<span className="material-symbols-outlined text-[14px]">table_rows</span>
<span>1. Instrument &amp; Verification General Reference</span>
</div>
<div className="border border-outline-variant text-[11px]">
<div className="grid grid-cols-4 bg-surface-container-low/40 border-b border-outline-variant">
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Test Report Number:</div>
<div className="p-2 font-mono font-bold text-primary border-r border-outline-variant">TR-0091</div>
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Test Record ID:</div>
<div className="p-2 font-mono font-bold text-primary">TEST-012</div>
</div>
<div className="grid grid-cols-4 border-b border-outline-variant">
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Instrument Type:</div>
<div className="p-2 col-span-3 font-medium text-primary">Non-Automatic Platform Weighing Instrument (NAWI)</div>
</div>
<div className="grid grid-cols-4 bg-surface-container-low/40 border-b border-outline-variant">
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Manufacturer:</div>
<div className="p-2 font-medium text-primary border-r border-outline-variant">ABC WeighTech Pvt. Ltd.</div>
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Model Designator:</div>
<div className="p-2 font-bold text-primary">WT-100</div>
</div>
<div className="grid grid-cols-4 border-b border-outline-variant">
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Serial Number:</div>
<div className="p-2 font-mono font-bold text-primary border-r border-outline-variant">WT100-2026-001</div>
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Accuracy Class:</div>
<div className="p-2 font-bold text-primary flex items-center space-x-1">
<span className="border border-outline-variant px-1 rounded bg-surface-container-lowest font-mono">Class (III)</span>
<span className="text-secondary text-[10px]">Medium</span>
</div>
</div>
<div className="grid grid-cols-4 bg-surface-container-low/40 border-b border-outline-variant">
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Max Capacity (Max):</div>
<div className="p-2 font-mono text-primary font-semibold border-r border-outline-variant">100.000 kg</div>
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Min Capacity (Min):</div>
<div className="p-2 font-mono text-primary font-semibold">20 g (0.020 kg)</div>
</div>
<div className="grid grid-cols-4 border-b border-outline-variant">
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Verification Interval (e):</div>
<div className="p-2 font-mono text-primary font-semibold border-r border-outline-variant">10 g (e = d = 10 g)</div>
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Pattern Approval Ref:</div>
<div className="p-2 font-mono text-primary font-semibold">UK/0126/0049</div>
</div>
<div className="grid grid-cols-4 bg-surface-container-low/40">
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Testing Location:</div>
<div className="p-2 text-primary border-r border-outline-variant">Bay 3, Metrology Lab 2</div>
<div className="p-2 font-semibold text-secondary border-r border-outline-variant">Ambient Temperature:</div>
<div className="p-2 font-mono text-primary font-semibold">23.5 °C (±0.4 °C) • 48% RH</div>
</div>
</div>
</div>
{/*  FORMAL EXECUTIVE SUMMARY  */}
<div className="mb-6 bg-surface-container-low/30 border-l-2 border-primary p-3">
<div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">2. Executive Metrological Summary</div>
<p className="text-body-sm font-body-sm text-on-surface leading-relaxed text-justify">
            This verification report certifies that the above-identified weighing instrument underwent formal type evaluation testing in full conformity with OIML R 76-1 (2006) and legal metrology directives. All evaluated metrological parameters—including Error of Indication, Repeatability, Eccentricity, Zero Stability, Tare Operations, and Environmental Influence—demonstrated measurement consistency strictly within the specified Maximum Permissible Error (mpe) limits for Class III instruments. No non-conformances were detected during the examination cycle.
          </p>
</div>
{/*  PROCEDURAL COVER RESULTS MATRIX  */}
<div className="mb-6">
<div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1.5 flex items-center justify-between">
<span className="flex items-center space-x-1">
<span className="material-symbols-outlined text-[14px]">checklist</span>
<span>3. Primary Test Procedures &amp; Compliance Verdicts</span>
</span>
<span className="text-[10px] text-secondary font-mono">ALL 6 PROCEDURES PASS</span>
</div>
<table className="w-full text-left border-collapse border border-outline-variant text-[11px]">
<thead>
<tr className="bg-surface-container-low text-secondary border-b border-outline-variant">
<th className="p-2 font-semibold border-r border-outline-variant">Clause &amp; Test Procedure</th>
<th className="p-2 font-semibold border-r border-outline-variant">Scope / Target Load</th>
<th className="p-2 font-semibold border-r border-outline-variant">Observed Deviation</th>
<th className="p-2 font-semibold border-r border-outline-variant">Applicable MPE Limit</th>
<th className="p-2 font-semibold text-center">Verdict</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr>
<td className="p-2 font-medium text-primary border-r border-outline-variant">§3.5 Error of Indication</td>
<td className="p-2 text-secondary border-r border-outline-variant">5 steps (0 to 100 kg)</td>
<td className="p-2 font-mono font-semibold text-primary border-r border-outline-variant">+0.012 kg</td>
<td className="p-2 font-mono text-secondary border-r border-outline-variant">±0.015 kg (Table 6)</td>
<td className="p-2 text-center font-bold text-primary bg-surface-container-low/40">✓ PASS</td>
</tr>
<tr className="bg-surface-container-low/20">
<td className="p-2 font-medium text-primary border-r border-outline-variant">§3.6.1 Repeatability</td>
<td className="p-2 text-secondary border-r border-outline-variant">5 trials @ 20 kg (Max/5)</td>
<td className="p-2 font-mono font-semibold text-primary border-r border-outline-variant">Range: 0.010 kg</td>
<td className="p-2 font-mono text-secondary border-r border-outline-variant">≤ 0.015 kg (1.5e)</td>
<td className="p-2 text-center font-bold text-primary bg-surface-container-low/40">✓ PASS</td>
</tr>
<tr>
<td className="p-2 font-medium text-primary border-r border-outline-variant">§3.6.2 Eccentric Loading</td>
<td className="p-2 text-secondary border-r border-outline-variant">5 points @ 33 kg (Max/3)</td>
<td className="p-2 font-mono font-semibold text-primary border-r border-outline-variant">Max: +0.020 kg</td>
<td className="p-2 font-mono text-secondary border-r border-outline-variant">±0.020 kg (2.0e)</td>
<td className="p-2 text-center font-bold text-primary bg-surface-container-low/40">✓ PASS</td>
</tr>
<tr className="bg-surface-container-low/20">
<td className="p-2 font-medium text-primary border-r border-outline-variant">§4.5 Zero-Setting Accuracy</td>
<td className="p-2 text-secondary border-r border-outline-variant">3 cycles @ Net=0</td>
<td className="p-2 font-mono font-semibold text-primary border-r border-outline-variant">Max: +0.002 kg</td>
<td className="p-2 font-mono text-secondary border-r border-outline-variant">≤ ±0.0025 kg (±0.25e)</td>
<td className="p-2 text-center font-bold text-primary bg-surface-container-low/40">✓ PASS</td>
</tr>
<tr>
<td className="p-2 font-medium text-primary border-r border-outline-variant">§4.6 Tare Balance Mechanics</td>
<td className="p-2 text-secondary border-r border-outline-variant">3 preset tare loads</td>
<td className="p-2 font-mono font-semibold text-primary border-r border-outline-variant">Residual: 0.000 kg</td>
<td className="p-2 font-mono text-secondary border-r border-outline-variant">Within MPE envelope</td>
<td className="p-2 text-center font-bold text-primary bg-surface-container-low/40">✓ PASS</td>
</tr>
<tr className="bg-surface-container-low/20">
<td className="p-2 font-medium text-primary border-r border-outline-variant">§3.9.2 Thermal Stability</td>
<td className="p-2 text-secondary border-r border-outline-variant">20.0 °C to 25.0 °C shift</td>
<td className="p-2 font-mono font-semibold text-primary border-r border-outline-variant">Span: +0.005 kg</td>
<td className="p-2 font-mono text-secondary border-r border-outline-variant">≤ 1.0e per 5 °C</td>
<td className="p-2 text-center font-bold text-primary bg-surface-container-low/40">✓ PASS</td>
</tr>
</tbody>
</table>
</div>
{/*  FORMAL ATTESTATION & SIGNATURE BLOCKS  */}
<div className="mt-4 pt-4 border-t border-outline-variant">
<div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-3">4. Metrological Authorization &amp; Endorsement</div>
<div className="grid grid-cols-2 gap-6">
{/*  Left Block: Lead Technician  */}
<div className="border border-outline-variant p-3 bg-surface-container-low/20 rounded">
<div className="text-[10px] uppercase font-bold text-secondary tracking-wider mb-2">Tested &amp; Recorded By:</div>
<div className="flex items-center space-x-3 mb-2">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-label-md">AK</div>
<div>
<div className="text-label-md font-label-md font-bold text-primary">A. Kumar</div>
<div className="text-[11px] text-secondary">Lead Verification Technician • TECH-409</div>
</div>
</div>
<div className="space-y-1 text-[10px] font-mono text-secondary border-t border-outline-variant/40 pt-2">
<div className="flex justify-between">
<span>Execution Date:</span>
<span className="font-bold text-primary">06 Sep 2026</span>
</div>
<div className="flex justify-between">
<span>Signature Digest:</span>
<span className="text-primary truncate">0x98E2...F11C (VERIFIED)</span>
</div>
</div>
</div>
{/*  Right Block: Reviewer / Signatory  */}
<div className="border border-outline-variant p-3 bg-surface-container-low/20 rounded">
<div className="text-[10px] uppercase font-bold text-secondary tracking-wider mb-2">Reviewed, Verified &amp; Approved By:</div>
<div className="flex items-center space-x-3 mb-2">
<div className="w-10 h-10 rounded-full bg-primary text-tertiary-fixed flex items-center justify-center font-bold text-label-md">RS</div>
<div>
<div className="text-label-md font-label-md font-bold text-primary">R. Singh</div>
<div className="text-[11px] text-secondary">Technical Lead &amp; Quality Signatory • ISO 17025</div>
</div>
</div>
<div className="space-y-1 text-[10px] font-mono text-secondary border-t border-outline-variant/40 pt-2">
<div className="flex justify-between">
<span>Approval Timestamp:</span>
<span className="font-bold text-primary">06-Sep-2026 13:14 UTC</span>
</div>
<div className="flex justify-between">
<span>Cryptographic Seal:</span>
<span className="text-primary truncate">SHA-256: d5a83b...477f0</span>
</div>
</div>
</div>
</div>
</div>
{/*  A4 FOOTER  */}
<div className="mt-8 pt-3 border-t border-outline-variant text-[10px] text-secondary flex justify-between items-center font-mono">
<span>VERISCALE™ METROLOGY PLATFORM • LEGAL CALIBRATION CERTIFICATE</span>
<span className="text-center font-sans uppercase text-[9px] text-error font-semibold">CONFIDENTIAL • UNAUTHORIZED ALTERATION VOIDS ACCREDITATION</span>
<span>PAGE 1 OF 11</span>
</div>
</div>
</section>
{/*  RIGHT COLUMN: Actions, Metadata & Release Gate  */}
<aside className="w-full lg:w-[300px] shrink-0 bg-surface-container-lowest border-l border-outline-variant/40 p-space-md flex flex-col space-y-space-md overflow-y-auto">
{/*  Panel 1: Document Actions & Export  */}
<div className="bg-surface-container-lowest border border-outline-variant/60 rounded p-space-md shadow-sm">
<div className="text-label-sm font-label-sm font-bold text-primary uppercase tracking-wider mb-space-sm flex items-center justify-between">
<span>Document Actions</span>
<span className="material-symbols-outlined text-[16px] text-secondary">file_download</span>
</div>
<div className="space-y-2">
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2.5 px-3 rounded text-label-md font-label-md transition-all flex items-center justify-between shadow-sm">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed">picture_as_pdf</span>
<span className="font-bold">Download Official PDF</span>
</div>
<span className="text-[10px] bg-primary-container text-surface-bright px-1.5 py-0.5 rounded font-mono">2.4 MB</span>
</button>
<button className="w-full bg-surface-container-lowest hover:bg-surface-container-low text-on-surface border border-outline-variant/60 py-2 px-3 rounded text-label-md font-label-md transition-colors flex items-center justify-between">
<div className="flex items-center space-x-2 text-secondary">
<span className="material-symbols-outlined text-[18px]">edit_document</span>
<span className="text-on-surface">Export Editable (.docx)</span>
</div>
<span className="text-[10px] text-secondary font-mono">Word</span>
</button>
<button className="w-full bg-surface-container-lowest hover:bg-surface-container-low text-on-surface border border-outline-variant/60 py-2 px-3 rounded text-label-md font-label-md transition-colors flex items-center space-x-2" >
<span className="material-symbols-outlined text-[18px] text-secondary">print</span>
<span>Print Official Hardcopy</span>
</button>
</div>
<div className="mt-3 pt-3 border-t border-outline-variant/40">
<button className="w-full text-center text-label-sm font-label-sm text-secondary hover:text-primary py-1 transition-colors flex items-center justify-center space-x-1" id="regenVersionBtn">
<span className="material-symbols-outlined text-[14px]">history</span>
<span>Regenerate Version (Increments v1.1)</span>
</button>
</div>
</div>
{/*  Panel 2: Report Metadata & Cryptography  */}
<div className="bg-surface-container-low/50 border border-outline-variant/50 rounded p-space-md">
<div className="text-label-sm font-label-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center justify-between">
<span>Cryptographic Seal</span>
<span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
</div>
<div className="space-y-1.5 text-label-sm font-label-sm">
<div className="flex justify-between">
<span className="text-secondary">Document ID:</span>
<span className="font-mono font-bold text-primary">TR-0091</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Version:</span>
<span className="font-mono font-bold text-primary">1.0 (Final Release)</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Generated:</span>
<span className="text-on-surface">06 Sep 2026, 13:28 UTC</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Signatory:</span>
<span className="font-semibold text-primary">R. Singh (Technical Lead)</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">SHA-256 State:</span>
<span className="text-primary font-bold">Validated ✓</span>
</div>
<div className="pt-2 border-t border-outline-variant/30">
<span className="text-[10px] text-secondary block mb-1">RECORD HASH:</span>
<div className="font-mono text-[10px] bg-surface-container-lowest p-1.5 rounded border border-outline-variant text-secondary select-all break-all leading-tight">
              7f8a92bb9402ac37b01d33458ef110992a7e2831c55bc674d812b1a50462e401
            </div>
</div>
<div className="flex justify-between items-center pt-1 text-[11px]">
<span className="text-secondary">Watermark State:</span>
<span className="text-primary font-medium">Final (No Draft)</span>
</div>
</div>
</div>
{/*  Panel 3: Technical Output Readiness  */}
<div className="bg-surface-container-lowest border border-outline-variant/60 rounded p-space-md shadow-sm">
<div className="text-label-sm font-label-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center justify-between">
<span>Engine Pre-Flight</span>
<span className="text-[10px] font-mono text-tertiary font-bold">3/3 READY</span>
</div>
<div className="space-y-2 text-label-sm font-label-sm">
<div className="flex items-center justify-between bg-surface-container-low/40 p-1.5 rounded">
<span className="text-on-surface">PDF / A-1b Renderer</span>
<span className="text-primary font-bold text-[11px] flex items-center space-x-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>300 DPI Vector</span>
</span>
</div>
<div className="flex items-center justify-between bg-surface-container-low/40 p-1.5 rounded">
<span className="text-on-surface">XML Schema Pack</span>
<span className="text-primary font-bold text-[11px] flex items-center space-x-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>ISO 17025 XML</span>
</span>
</div>
<div className="flex items-center justify-between bg-surface-container-low/40 p-1.5 rounded">
<span className="text-on-surface">Physical Spooler</span>
<span className="text-primary font-bold text-[11px] flex items-center space-x-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Duplex Ready</span>
</span>
</div>
</div>
</div>
{/*  Panel 4: Release & Compliance Verification Checklist  */}
<div className="bg-surface-container-lowest border border-outline-variant/60 rounded p-space-md shadow-sm">
<div className="text-label-sm font-label-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center justify-between">
<span>Release Gate</span>
<span className="bg-surface-container-high text-primary text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Verified</span>
</div>
<div className="space-y-1.5 text-label-sm font-label-sm text-secondary">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-[16px]">check_box</span>
<span className="text-on-surface text-[12px]">Instrument identity cryptographically locked</span>
</div>
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-[16px]">check_box</span>
<span className="text-on-surface text-[12px]">6/6 test procedures passed (OIML R 76)</span>
</div>
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-[16px]">check_box</span>
<span className="text-on-surface text-[12px]">Tolerance engine mpe envelopes sealed</span>
</div>
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-[16px]">check_box</span>
<span className="text-on-surface text-[12px]">6 calibration weight standards referenced</span>
</div>
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-[16px]">check_box</span>
<span className="text-on-surface text-[12px]">Digital reviewer signature confirmed</span>
</div>
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-[16px]">check_box</span>
<span className="text-on-surface text-[12px]">Permanent archive record created</span>
</div>
</div>
<div className="mt-3 pt-3 border-t border-outline-variant/40">
<div className="w-full bg-surface-container-low text-primary text-center py-1.5 rounded text-label-sm font-label-sm font-bold border border-outline-variant/50">
            STATUS: APPROVED FOR FORMAL RELEASE
          </div>
</div>
</div>
{/*  Panel 5: Controlled Legal Metrology Notice  */}
<div className="bg-surface-container-low/70 border border-outline-variant/60 rounded p-space-md text-[11px] text-secondary leading-relaxed">
<div className="flex items-center space-x-1 text-primary font-bold mb-1">
<span className="material-symbols-outlined text-[14px]">shield</span>
<span>Controlled Legal Document</span>
</div>
        This certified test document is bound to ISO/IEC 17025 traceability requirements. Any subsequent post-approval adjustments necessitate a formal revision cycle which will increment this record to Version 1.1 and trigger laboratory re-sign-off.
      </div>
</aside>
</div>
</div>
</main>
    </div>
  );
}
