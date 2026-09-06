import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function EvidenceAttachments() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full text-on-surface font-body-md antialiased">
<div className="flex w-full min-h-[calc(100vh-10px)]">
{/*  Left Metrology Platform Sidebar (248px)  */}
<aside className="w-[248px] shrink-0 bg-[#0B263D] text-[#E1EFFF] flex flex-col justify-between select-none">
<div className="flex flex-col">
{/*  Brand Header  */}
<div className="px-5 py-4 flex items-center gap-3 border-b border-[#123B5D]/60 bg-[#081C2E]">
<div className="w-8 h-8 rounded bg-[#008B8B] flex items-center justify-center text-white shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">scale</span>
</div>
<div className="flex flex-col min-w-0">
<span className="text-[13px] font-bold tracking-wider text-white uppercase leading-tight font-metric-tabular">VERISCALE</span>
<span className="text-[10px] text-[#A6CAF3] tracking-tight uppercase leading-none mt-0.5">METROLOGY PLATFORM</span>
</div>
</div>
{/*  System Status Pill  */}
<div className="mx-3 my-3 px-2.5 py-1.5 rounded bg-[#123B5D]/40 border border-[#123B5D] flex items-center justify-between text-[11px]">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse"></span>
<span className="font-medium text-[#C6DFFE]">RIG 04 • ONLINE</span>
</div>
<span className="text-[10px] font-mono text-[#82A5CD]">v4.12-PRO</span>
</div>
{/*  Primary Navigation  */}
<nav className="flex flex-col px-2 space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 rounded text-[13px] font-medium text-[#C6DFFE] hover:bg-[#123B5D]/50 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined text-[18px] text-[#82A5CD]">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-[13px] font-medium text-[#C6DFFE] hover:bg-[#123B5D]/50 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined text-[18px] text-[#82A5CD]">precision_manufacturing</span>
<span>Instruments</span>
</a>
{/*  Active Nav Item  */}
<a className="flex items-center justify-between px-3 py-2 rounded bg-[#123B5D] text-white font-semibold text-[13px] shadow-sm" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[18px] text-[#008B8B]">assignment_turned_in</span>
<span>Tests &amp; Calibration</span>
</div>
<span className="w-1.5 h-4 rounded-full bg-[#008B8B]"></span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-[13px] font-medium text-[#C6DFFE] hover:bg-[#123B5D]/50 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined text-[18px] text-[#82A5CD]">verified</span>
<span>Compliance (OIML)</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-[13px] font-medium text-[#C6DFFE] hover:bg-[#123B5D]/50 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined text-[18px] text-[#82A5CD]">description</span>
<span>Reports &amp; Certs</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-[13px] font-medium text-[#C6DFFE] hover:bg-[#123B5D]/50 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined text-[18px] text-[#82A5CD]">folder_open</span>
<span>Artifact Repository</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-[13px] font-medium text-[#C6DFFE] hover:bg-[#123B5D]/50 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined text-[18px] text-[#82A5CD]">history</span>
<span>Test History</span>
</a>
</nav>
{/*  Admin Divider Section  */}
<div className="px-4 pt-5 pb-1">
<span className="text-[10px] uppercase font-bold tracking-wider text-[#6886A5]">Laboratory Administration</span>
</div>
<nav className="flex flex-col px-2 space-y-0.5">
<a className="flex items-center gap-3 px-3 py-1.5 rounded text-[12px] font-medium text-[#C6DFFE] hover:bg-[#123B5D]/40 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined text-[16px] text-[#82A5CD]">manage_accounts</span>
<span>Authorized Users</span>
</a>
<a className="flex items-center gap-3 px-3 py-1.5 rounded text-[12px] font-medium text-[#C6DFFE] hover:bg-[#123B5D]/40 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined text-[16px] text-[#82A5CD]">fact_check</span>
<span>Immutable Audit Trail</span>
</a>
<a className="flex items-center gap-3 px-3 py-1.5 rounded text-[12px] font-medium text-[#C6DFFE] hover:bg-[#123B5D]/40 hover:text-white transition-colors" href="#">
<span className="material-symbols-outlined text-[16px] text-[#82A5CD]">settings_input_component</span>
<span>Rig Telemetry Config</span>
</a>
</nav>
</div>
{/*  Bottom User Account Badge  */}
<div className="p-3 border-t border-[#123B5D]/60 bg-[#081C2E]">
<div className="flex items-center gap-2.5 p-1.5 rounded hover:bg-[#123B5D]/30 transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-[#123B5D] text-white flex items-center justify-center font-bold text-xs border border-[#82A5CD]/40 shrink-0">
            MS
          </div>
<div className="flex flex-col min-w-0">
<span className="text-xs font-semibold text-white truncate">Manan Sharma</span>
<span className="text-[10px] text-[#82A5CD] truncate">Lead Metrologist • ISO 17025</span>
</div>
<span className="material-symbols-outlined text-[16px] text-[#82A5CD] ml-auto">unfold_more</span>
</div>
</div>
</aside>
{/*  Main Workspace Content Area  */}
<div className="flex-1 flex flex-col min-w-0 bg-[#F4F7F9]">
{/*  Top Industrial Telemetry Strip  */}
<header className="h-11 bg-white border-b border-[#D7E0E7] px-6 flex items-center justify-between text-xs shrink-0 select-none shadow-[0_1px_2px_rgba(11,38,61,0.03)]">
{/*  Telemetry Indicators  */}
<div className="flex items-center gap-4 text-[#49607A]">
<div className="flex items-center gap-1.5 font-metric-tabular font-medium">
<span className="inline-block w-2 h-2 rounded-full bg-[#15803D]"></span>
<span className="text-[#0D1D2A] font-semibold">COM1: 9600 BAUD</span>
<span className="px-1 py-0.5 rounded text-[10px] bg-[#F0FDF4] text-[#15803D] font-bold border border-[#BBF7D0]">ONLINE</span>
</div>
<span className="text-[#D7E0E7]">|</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-[#008B8B]">security</span>
<span className="font-medium text-[#123B5D]">ISO/IEC 17025 ACCREDITED</span>
</div>
<span className="text-[#D7E0E7]">|</span>
<div className="flex items-center gap-1 font-mono text-[11px] text-[#49607A]">
<span className="material-symbols-outlined text-[14px] text-[#15803D]">lock</span>
<span>SHA-256 HASH ENGINE: ACTIVE</span>
</div>
<span className="text-[#D7E0E7]">|</span>
<div className="flex items-center gap-1 text-[#73777F]">
<span className="material-symbols-outlined text-[14px]">sync</span>
<span>Autosaved 5s ago</span>
</div>
</div>
{/*  Global Header Quick Actions  */}
<div className="flex items-center gap-2">
<button className="h-7 px-2.5 rounded text-xs font-medium bg-white text-[#172B3A] border border-[#D7E0E7] hover:bg-[#F4F7F9] hover:border-[#123B5D] transition-all flex items-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[15px]">save</span>
<span>Save Draft</span>
</button>
<button className="h-7 px-2.5 rounded text-xs font-medium bg-white text-[#B42318] border border-[#FECACA] hover:bg-[#FEF2F2] transition-all flex items-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[15px]">logout</span>
<span>Exit Test</span>
</button>
</div>
</header>
{/*  Subheader: Breadcrumb & Title  */}
<div className="px-8 pt-5 pb-4 bg-white border-b border-[#D7E0E7]">
{/*  Breadcrumb  */}
<nav className="flex items-center gap-2 text-xs text-[#5B6B7A] mb-1.5 font-medium">
<a className="hover:text-[#123B5D] transition-colors" href="#">Tests</a>
<span className="text-[#A6CAF3]">/</span>
<a className="font-mono text-[#123B5D] hover:underline" href="#">TEST-012</a>
<span className="text-[#A6CAF3]">/</span>
<span className="text-[#0D1D2A] font-semibold">Evidence &amp; Attachments</span>
</nav>
<div className="flex items-end justify-between">
<div>
<h1 className="text-xl font-bold text-[#0B263D] tracking-tight flex items-center gap-2">
<span>Evidence &amp; Attachments</span>
<span className="text-xs px-2 py-0.5 rounded font-mono font-bold bg-[#E1EFFF] text-[#123B5D] border border-[#A6CAF3]/60">STEP 06 / 08</span>
</h1>
<p className="text-xs text-[#5B6B7A] mt-0.5">Attach laboratory photographs, calibration certificates, and supporting traceability documentation required for the official test dossier.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] font-mono text-[#5B6B7A] bg-[#F4F7F9] px-2.5 py-1 rounded border border-[#D7E0E7]">OIML R 76-1: §3.9 Visual &amp; Evidence Clause</span>
</div>
</div>
{/*  Metrology Workflow Stepper (8 Steps)  */}
<div className="mt-4 pt-4 border-t border-[#EAEFF4] grid grid-cols-8 gap-1.5 select-none">
{/*  Step 1  */}
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-xs">
<span className="w-4 h-4 rounded-full bg-[#15803D] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="font-medium text-[#49607A] truncate">01 Instrument</span>
</div>
{/*  Step 2  */}
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-xs">
<span className="w-4 h-4 rounded-full bg-[#15803D] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="font-medium text-[#49607A] truncate">02 Conditions</span>
</div>
{/*  Step 3  */}
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-xs">
<span className="w-4 h-4 rounded-full bg-[#15803D] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="font-medium text-[#49607A] truncate">03 Test Selection</span>
</div>
{/*  Step 4  */}
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-xs">
<span className="w-4 h-4 rounded-full bg-[#15803D] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="font-medium text-[#49607A] truncate">04 Observations</span>
</div>
{/*  Step 5  */}
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-xs">
<span className="w-4 h-4 rounded-full bg-[#15803D] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="font-medium text-[#49607A] truncate">05 Compliance</span>
</div>
{/*  Step 6 (ACTIVE)  */}
<div className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-[#123B5D] text-white text-xs font-semibold shadow-sm">
<span className="w-4 h-4 rounded-full bg-[#008B8B] text-white flex items-center justify-center text-[10px] font-bold">06</span>
<span className="truncate">06 Evidence</span>
</div>
{/*  Step 7  */}
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-white border border-[#D7E0E7] text-xs opacity-60">
<span className="w-4 h-4 rounded-full border border-[#73777F] text-[#73777F] flex items-center justify-center text-[10px] font-bold">07</span>
<span className="font-medium text-[#49607A] truncate">07 Review</span>
</div>
{/*  Step 8  */}
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-white border border-[#D7E0E7] text-xs opacity-60">
<span className="w-4 h-4 rounded-full border border-[#73777F] text-[#73777F] flex items-center justify-center text-[10px] font-bold">08</span>
<span className="font-medium text-[#49607A] truncate">08 Report</span>
</div>
</div>
</div>
{/*  Main Body Container  */}
<div className="flex-1 p-6 space-y-4 max-w-[1720px] w-full mx-auto">
{/*  1. Test Context Bar  */}
<div className="bg-white border border-[#D7E0E7] rounded p-2.5 shadow-sm text-xs grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 font-metric-tabular divide-x divide-[#EAEFF4]">
<div className="pl-1">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Test Identifier</span>
<span className="font-mono font-bold text-[#123B5D] text-[13px]">TEST-012</span>
</div>
<div className="pl-3">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Instrument</span>
<span className="font-semibold text-[#0D1D2A] truncate block" title="ABC WeighTech WT-100">ABC WeighTech WT-100</span>
</div>
<div className="pl-3">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Serial Number</span>
<span className="font-mono text-[#0D1D2A] block">WT100-2026-001</span>
</div>
<div className="pl-3">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Accredited Lab</span>
<span className="text-[#0D1D2A] truncate block" title="XYZ Metrology Lab, Cell B-4">XYZ Metrology Lab</span>
</div>
<div className="pl-3">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Verification Officer</span>
<span className="text-[#0D1D2A] block font-medium">A. Kumar (TECH-409)</span>
</div>
<div className="pl-3">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Execution Date</span>
<span className="text-[#0D1D2A] block">06 Sep 2026</span>
</div>
<div className="pl-3 flex flex-col justify-center">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Metrological Gate</span>
<div className="inline-flex items-center gap-1 text-[#15803D] font-bold text-[11px]">
<span className="material-symbols-outlined text-[14px]">verified</span>
<span>PASS (12/12 Criteria)</span>
</div>
</div>
</div>
{/*  2. Evidence Summary & Metrics Bar  */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
<div className="bg-white border border-[#D7E0E7] rounded p-3 shadow-sm flex items-center justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6B7A]">Total Files</span>
<div className="text-xl font-bold text-[#0B263D] font-metric-tabular">6</div>
</div>
<div className="w-8 h-8 rounded bg-[#F4F7F9] border border-[#D7E0E7] flex items-center justify-center text-[#123B5D]">
<span className="material-symbols-outlined text-[18px]">attachment</span>
</div>
</div>
<div className="bg-white border border-[#D7E0E7] rounded p-3 shadow-sm flex items-center justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6B7A]">Photographs</span>
<div className="text-xl font-bold text-[#0B263D] font-metric-tabular">3 <span className="text-xs font-normal text-[#5B6B7A]">(Hi-Res)</span></div>
</div>
<div className="w-8 h-8 rounded bg-[#F4F7F9] border border-[#D7E0E7] flex items-center justify-center text-[#123B5D]">
<span className="material-symbols-outlined text-[18px]">photo_camera</span>
</div>
</div>
<div className="bg-white border border-[#D7E0E7] rounded p-3 shadow-sm flex items-center justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6B7A]">Certificates / Docs</span>
<div className="text-xl font-bold text-[#0B263D] font-metric-tabular">3 <span className="text-xs font-normal text-[#5B6B7A]">(PDF)</span></div>
</div>
<div className="w-8 h-8 rounded bg-[#F4F7F9] border border-[#D7E0E7] flex items-center justify-center text-[#123B5D]">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
</div>
</div>
<div className="bg-white border border-[#D7E0E7] rounded p-3 shadow-sm flex items-center justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6B7A]">Mandatory SOPs</span>
<div className="text-xl font-bold text-[#15803D] font-metric-tabular">5 / 5 <span className="text-xs font-normal text-[#15803D]">100%</span></div>
</div>
<div className="w-8 h-8 rounded bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#15803D]">
<span className="material-symbols-outlined text-[18px]">task_alt</span>
</div>
</div>
<div className="bg-white border border-[#D7E0E7] rounded p-3 shadow-sm flex items-center justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6B7A]">Audit Integrity</span>
<div className="text-xs font-bold text-[#0B263D] font-mono mt-1">5 VERIFIED • 1 PENDING</div>
</div>
<div className="w-8 h-8 rounded bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-center text-[#B45309]">
<span className="material-symbols-outlined text-[18px]">fact_check</span>
</div>
</div>
<div className="bg-[#123B5D] border border-[#0B263D] rounded p-3 shadow-sm flex items-center justify-between text-white">
<div>
<span className="text-[10px] font-bold uppercase tracking-wider text-[#A6CAF3]">Dossier Status</span>
<div className="text-xs font-bold uppercase tracking-wider text-[#8CF3F3] flex items-center gap-1 mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#008B8B] animate-ping"></span>
                READY FOR REVIEW
              </div>
</div>
<span className="material-symbols-outlined text-[22px] text-[#8CF3F3]">verified_user</span>
</div>
</div>
{/*  3. Two-Column Main Workspace  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
{/*  Left / Main Column (Approx 68% -> 8 columns on lg)  */}
<div className="lg:col-span-8 space-y-4">
{/*  Section 1: Required Evidence Compliance Checklist Table  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm overflow-hidden">
<div className="px-4 py-2.5 bg-[#F4F7F9] border-b border-[#D7E0E7] flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-[#123B5D]">checklist</span>
<span className="text-xs font-bold uppercase tracking-wider text-[#0B263D]">Mandatory OIML R 76 Evidence Checklist Matrix</span>
</div>
<span className="text-[11px] font-mono text-[#5B6B7A]">Clause §3.9.1 to §3.9.4</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse text-xs">
<thead>
<tr className="bg-[#F8FAFC] text-[11px] uppercase tracking-wider font-semibold text-[#5B6B7A] border-b border-[#D7E0E7]">
<th className="py-2.5 px-3">Evidence Item &amp; Description</th>
<th className="py-2.5 px-3">Classification / SOP</th>
<th className="py-2.5 px-2">Mandatory</th>
<th className="py-2.5 px-3">Attached File Ref</th>
<th className="py-2.5 px-3">Integrity Status</th>
<th className="py-2.5 px-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-[#EAEFF4] font-metric-tabular">
{/*  Row 1  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2 px-3 font-semibold text-[#0B263D]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-[#5B6B7A]">photo_camera</span>
<span>Instrument Front Elevation</span>
</div>
</td>
<td className="py-2 px-3 text-[#49607A]">Visual Inspection (Platform &amp; Pan)</td>
<td className="py-2 px-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#E1EFFF] text-[#123B5D] border border-[#A6CAF3]/70">REQUIRED</span>
</td>
<td className="py-2 px-3 font-mono text-[#123B5D] flex items-center gap-1">
<span className="truncate max-w-[150px]">instrument_front_iso.jpg</span>
<span className="text-[10px] text-[#73777F]">(2.4 MB)</span>
</td>
<td className="py-2 px-3">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
<span className="material-symbols-outlined text-[13px]">check_circle</span>
                          Verified
                        </span>
</td>
<td className="py-2 px-3 text-right">
<button className="px-2 py-1 rounded text-[11px] font-semibold text-[#123B5D] bg-[#F4F7F9] border border-[#D7E0E7] hover:bg-white hover:border-[#123B5D] transition-colors" type="button">
                          View
                        </button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2 px-3 font-semibold text-[#0B263D]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-[#5B6B7A]">label</span>
<span>Nameplate &amp; Markings</span>
</div>
</td>
<td className="py-2 px-3 text-[#49607A]">Metrological Plate (Class III / CE/UKCA)</td>
<td className="py-2 px-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#E1EFFF] text-[#123B5D] border border-[#A6CAF3]/70">REQUIRED</span>
</td>
<td className="py-2 px-3 font-mono text-[#123B5D] flex items-center gap-1">
<span className="truncate max-w-[150px]">nameplate_macro_spec.jpg</span>
<span className="text-[10px] text-[#73777F]">(1.8 MB)</span>
</td>
<td className="py-2 px-3">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
<span className="material-symbols-outlined text-[13px]">check_circle</span>
                          Verified
                        </span>
</td>
<td className="py-2 px-3 text-right">
<button className="px-2 py-1 rounded text-[11px] font-semibold text-[#123B5D] bg-[#F4F7F9] border border-[#D7E0E7] hover:bg-white hover:border-[#123B5D] transition-colors" type="button">
                          View
                        </button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2 px-3 font-semibold text-[#0B263D]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-[#5B6B7A]">view_in_ar</span>
<span>Test Setup &amp; Environmental Chamber</span>
</div>
</td>
<td className="py-2 px-3 text-[#49607A]">Rig Leveling &amp; Thermal Shielding</td>
<td className="py-2 px-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#E1EFFF] text-[#123B5D] border border-[#A6CAF3]/70">REQUIRED</span>
</td>
<td className="py-2 px-3 font-mono text-[#123B5D] flex items-center gap-1">
<span className="truncate max-w-[150px]">test_setup_chamber.jpg</span>
<span className="text-[10px] text-[#73777F]">(3.1 MB)</span>
</td>
<td className="py-2 px-3">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
<span className="material-symbols-outlined text-[13px]">check_circle</span>
                          Verified
                        </span>
</td>
<td className="py-2 px-3 text-right">
<button className="px-2 py-1 rounded text-[11px] font-semibold text-[#123B5D] bg-[#F4F7F9] border border-[#D7E0E7] hover:bg-white hover:border-[#123B5D] transition-colors" type="button">
                          View
                        </button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors bg-[#F0F7FF]/50">
<td className="py-2 px-3 font-semibold text-[#0B263D]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-[#008B8B]">workspace_premium</span>
<span>Standard Weights Certificate</span>
</div>
</td>
<td className="py-2 px-3 text-[#49607A]">Traceability to NMI Standards</td>
<td className="py-2 px-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#E1EFFF] text-[#123B5D] border border-[#A6CAF3]/70">REQUIRED</span>
</td>
<td className="py-2 px-3 font-mono text-[#123B5D] font-bold flex items-center gap-1">
<span className="truncate max-w-[150px]">CAL-M1-CERT-2026.pdf</span>
<span className="text-[10px] text-[#73777F]">(648 KB)</span>
</td>
<td className="py-2 px-3">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
<span className="material-symbols-outlined text-[13px]">verified</span>
                          Verified
                        </span>
</td>
<td className="py-2 px-3 text-right">
<button className="px-2 py-1 rounded text-[11px] font-semibold text-white bg-[#123B5D] hover:bg-[#0B263D] transition-colors shadow-xs" type="button">
                          Active
                        </button>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2 px-3 font-semibold text-[#0B263D]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-[#5B6B7A]">menu_book</span>
<span>Manufacturer Technical Specification</span>
</div>
</td>
<td className="py-2 px-3 text-[#49607A]">Nominal Tolerance Envelope</td>
<td className="py-2 px-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#E1EFFF] text-[#123B5D] border border-[#A6CAF3]/70">REQUIRED</span>
</td>
<td className="py-2 px-3 font-mono text-[#123B5D] flex items-center gap-1">
<span className="truncate max-w-[150px]">MFR-WT100-SPEC-v3.pdf</span>
<span className="text-[10px] text-[#73777F]">(1.2 MB)</span>
</td>
<td className="py-2 px-3">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
<span className="material-symbols-outlined text-[13px]">check_circle</span>
                          Verified
                        </span>
</td>
<td className="py-2 px-3 text-right">
<button className="px-2 py-1 rounded text-[11px] font-semibold text-[#123B5D] bg-[#F4F7F9] border border-[#D7E0E7] hover:bg-white hover:border-[#123B5D] transition-colors" type="button">
                          View
                        </button>
</td>
</tr>
{/*  Row 6 (Pending Optional)  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2 px-3 font-semibold text-[#0B263D]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-[#5B6B7A]">tune</span>
<span>Secondary Reference Weights Spec</span>
</div>
</td>
<td className="py-2 px-3 text-[#49607A]">Cross-Calibration Ancillary Sheet</td>
<td className="py-2 px-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F4F7F9] text-[#5B6B7A] border border-[#D7E0E7]">OPTIONAL</span>
</td>
<td className="py-2 px-3 font-mono text-[#123B5D] flex items-center gap-1">
<span className="truncate max-w-[150px]">WT-STANDARDS-REF.pdf</span>
<span className="text-[10px] text-[#73777F]">(530 KB)</span>
</td>
<td className="py-2 px-3">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]">
<span className="material-symbols-outlined text-[13px]">pending</span>
                          Pending Review
                        </span>
</td>
<td className="py-2 px-3 text-right">
<button className="px-2 py-1 rounded text-[11px] font-semibold text-[#B45309] bg-[#FFFBEB] border border-[#FDE68A] hover:bg-white transition-colors" type="button">
                          Review
                        </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Section 2: Compact Professional Upload Dropzone  */}
<div className="bg-white border border-[#D7E0E7] rounded p-4 shadow-sm">
<div className="border-2 border-dashed border-[#D7E0E7] hover:border-[#123B5D] rounded-lg p-4 bg-[#F8FAFC] transition-colors flex flex-col items-center justify-center text-center cursor-pointer">
<div className="w-10 h-10 rounded-full bg-[#E1EFFF] text-[#123B5D] flex items-center justify-center mb-2">
<span className="material-symbols-outlined text-[24px]">cloud_upload</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-[#0B263D]">Drag and drop calibration evidence files here, or</span>
<label className="px-2.5 py-1 rounded bg-[#123B5D] text-white text-xs font-semibold hover:bg-[#0B263D] transition-colors cursor-pointer">
                    Browse Files
                    <input className="hidden" multiple="" type="file"/>
</label>
</div>
<p className="text-[11px] text-[#5B6B7A] mt-1.5">
                  Supported formats: <strong className="text-[#0D1D2A]">JPG, PNG, PDF, DOCX</strong> • Max file size: <strong className="text-[#0D1D2A]">25 MB</strong> per item
                </p>
<div className="mt-2 flex items-center gap-1 text-[10px] text-[#73777F] font-mono">
<span className="material-symbols-outlined text-[12px] text-[#008B8B]">lock</span>
<span>Files are cryptographically hashed (SHA-256) and immutably bound to TEST-012 / WT100-2026-001</span>
</div>
</div>
{/*  Active Upload Progress Pill  */}
<div className="mt-3 p-2.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0 flex-1 mr-4">
<span className="material-symbols-outlined text-[18px] text-[#008B8B] animate-spin">sync</span>
<div className="min-w-0 flex-1">
<div className="flex justify-between items-center text-xs">
<span className="font-mono font-medium text-[#0D1D2A] truncate">chamber_telemetry_raw.csv</span>
<span className="font-mono text-[#5B6B7A] text-[11px]">62% • 1.4 MB / 2.2 MB</span>
</div>
{/*  Slim Teal Progress Line  */}
<div className="w-full bg-[#D7E0E7] h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-[#008B8B] h-full rounded-full w-[62%]"></div>
</div>
</div>
</div>
<button className="text-[#73777F] hover:text-[#B42318] transition-colors p-1" title="Cancel upload" type="button">
<span className="material-symbols-outlined text-[16px]">close</span>
</button>
</div>
</div>
{/*  Section 3: Photographic Evidence Gallery (3 Cards)  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-[#123B5D]">photo_library</span>
<h2 className="text-xs font-bold uppercase tracking-wider text-[#0B263D]">Photographic Verification Gallery (3 Attachments)</h2>
</div>
<button className="px-2.5 py-1 rounded bg-white text-[#123B5D] border border-[#D7E0E7] hover:bg-[#F4F7F9] text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors" type="button">
<span className="material-symbols-outlined text-[14px]">add_a_photo</span>
<span>Add Photograph</span>
</button>
</div>
{/*  3 Photo Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
{/*  Photo Card 1  */}
<div className="border border-[#D7E0E7] rounded overflow-hidden bg-[#F8FAFC] flex flex-col hover:border-[#123B5D] transition-colors group">
<div className="relative h-36 bg-[#CBDCED] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" data-alt="High resolution cleanroom laboratory photograph of precision industrial weighing scale ABC WeighTech WT-100 on granite anti-vibration table, showing leveling bubble centered, polished stainless steel load platter, optical backlit digital indicator, neutral soft clean studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2tSuHnZhf39NrsL9pg_1ava2SJfKGslRylnpOU713PYsHZittrWXHAifmJZLKOAd59-HOVux3BSlgTLqH7SQymQNID45xBMm-p5O-eu8szak4GyQ-mPXGk9P4zWTmc2KVgz7pwhZ_w0WtL12-kogfxp05fsg-o49HVSztx0Wi_D1D8CMOcFfzvqIy2A34pT2EV2JYFg_36xBi4NCTWqDO4j7XGzc_9zwWrf_gHONB9I6KU1TcFOXFSQ"/>
<span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-[#0B263D]/90 text-white font-mono">
                      PHOTO-01
                    </span>
<span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0] shadow-xs flex items-center gap-0.5">
<span className="material-symbols-outlined text-[11px]">check</span>
                      Verified
                    </span>
</div>
<div className="p-2.5 flex-1 flex flex-col justify-between text-xs">
<div>
<div className="font-bold text-[#0B263D] truncate text-[12px]">Instrument Frontal Elevation</div>
<div className="font-mono text-[10px] text-[#5B6B7A] truncate">instrument_front_iso.jpg</div>
<div className="mt-1 text-[10px] text-[#73777F] flex items-center gap-2">
<span>2.4 MB • JPEG</span>
<span>•</span>
<span>06 Sep, 10:15 AM</span>
</div>
</div>
<div className="mt-2.5 pt-2 border-t border-[#EAEFF4] flex items-center justify-between">
<span className="text-[10px] text-[#5B6B7A]">By: A. Kumar</span>
<button className="text-[11px] font-semibold text-[#123B5D] hover:underline flex items-center gap-0.5" type="button">
<span className="material-symbols-outlined text-[13px]">zoom_in</span> Inspect
                      </button>
</div>
</div>
</div>
{/*  Photo Card 2  */}
<div className="border border-[#D7E0E7] rounded overflow-hidden bg-[#F8FAFC] flex flex-col hover:border-[#123B5D] transition-colors group">
<div className="relative h-36 bg-[#CBDCED] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" data-alt="Extreme macro technical photograph of metallic compliance nameplate on industrial weighing scale showing stamped engraved OIML Class III mark, Max 100 kg, Min 0.200 kg, e=10 g, serial number WT100-2026-001, pattern approval number UK 0126 0049, crisp industrial lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCcdv0U5GXeYnDeh8-_zsDsFcMslfGSJpwc-x7raTtm2NUzeqDarRIrgeLUWA8u7I8DZspfStgf38ghrkYe0d2uLwQidNEweJ-cOkKtxB-d3IhqNBtEwjMRoTgBQCTY9CD7OVuyU9JQlCn96xX5GBbw97ScRE4sQwT1_PGspQ917R-clPIwAy0YHisEqZja3f1WTQxRYnyCDpppr_zbmspKLE2F0uXJQbjdVjhNRJ9eDEBG5tm1H_leQ"/>
<span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-[#0B263D]/90 text-white font-mono">
                      PHOTO-02
                    </span>
<span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0] shadow-xs flex items-center gap-0.5">
<span className="material-symbols-outlined text-[11px]">check</span>
                      Verified
                    </span>
</div>
<div className="p-2.5 flex-1 flex flex-col justify-between text-xs">
<div>
<div className="font-bold text-[#0B263D] truncate text-[12px]">Nameplate &amp; OIML Markings</div>
<div className="font-mono text-[10px] text-[#5B6B7A] truncate">nameplate_macro_spec.jpg</div>
<div className="mt-1 text-[10px] text-[#73777F] flex items-center gap-2">
<span>1.8 MB • JPEG</span>
<span>•</span>
<span>06 Sep, 10:18 AM</span>
</div>
</div>
<div className="mt-2.5 pt-2 border-t border-[#EAEFF4] flex items-center justify-between">
<span className="text-[10px] text-[#5B6B7A]">By: A. Kumar</span>
<button className="text-[11px] font-semibold text-[#123B5D] hover:underline flex items-center gap-0.5" type="button">
<span className="material-symbols-outlined text-[13px]">zoom_in</span> Inspect
                      </button>
</div>
</div>
</div>
{/*  Photo Card 3  */}
<div className="border border-[#D7E0E7] rounded overflow-hidden bg-[#F8FAFC] flex flex-col hover:border-[#123B5D] transition-colors group">
<div className="relative h-36 bg-[#CBDCED] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" data-alt="Laboratory cleanroom view of climatic environmental test chamber enclosure housing weighing scale platform loaded with cylindrical brass Class M1 standard weights during temperature stability repeatability calibration, clinical fluorescent lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvLD9kLl5dbGzk6D1q0QyDYlDwYuHu8gMO0tdg9F1HcASDA8LjrsgDofFkNcDf4-prpu9LT1knLKaGDjvjZGvQmiK_S6BIePGaX14E-DlCWkdPVbIuUfF2sS6sOIGqP5Xj8BvpW3434kKgIGC5V_bGrsta8xMXz_wb_GLb5Vc_wr1guevTFBai5dfp6pwyCg_Pb0wXGRnK84VaKyA-Vj0nBQLO6H8ZoGqCHDyhqNyJ6Cc_LWlgFulJYQ"/>
<span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-[#0B263D]/90 text-white font-mono">
                      PHOTO-03
                    </span>
<span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0] shadow-xs flex items-center gap-0.5">
<span className="material-symbols-outlined text-[11px]">check</span>
                      Verified
                    </span>
</div>
<div className="p-2.5 flex-1 flex flex-col justify-between text-xs">
<div>
<div className="font-bold text-[#0B263D] truncate text-[12px]">Chamber Test Setup &amp; Weights</div>
<div className="font-mono text-[10px] text-[#5B6B7A] truncate">test_setup_chamber.jpg</div>
<div className="mt-1 text-[10px] text-[#73777F] flex items-center gap-2">
<span>3.1 MB • JPEG</span>
<span>•</span>
<span>06 Sep, 10:30 AM</span>
</div>
</div>
<div className="mt-2.5 pt-2 border-t border-[#EAEFF4] flex items-center justify-between">
<span className="text-[10px] text-[#5B6B7A]">By: A. Kumar</span>
<button className="text-[11px] font-semibold text-[#123B5D] hover:underline flex items-center gap-0.5" type="button">
<span className="material-symbols-outlined text-[13px]">zoom_in</span> Inspect
                      </button>
</div>
</div>
</div>
</div>
</div>
{/*  Section 4: Supporting Technical Documents Table  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm overflow-hidden">
<div className="px-4 py-2.5 bg-[#F4F7F9] border-b border-[#D7E0E7] flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-[#123B5D]">folder_special</span>
<span className="text-xs font-bold uppercase tracking-wider text-[#0B263D]">Supporting Technical Documents &amp; Traceability Dossier</span>
</div>
<button className="text-xs font-semibold text-[#123B5D] hover:underline flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[15px]">upload_file</span>
<span>Upload Document</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse text-xs">
<thead>
<tr className="bg-[#F8FAFC] text-[11px] uppercase tracking-wider font-semibold text-[#5B6B7A] border-b border-[#D7E0E7]">
<th className="py-2.5 px-3">Document Name</th>
<th className="py-2.5 px-3">Classification Category</th>
<th className="py-2.5 px-2">Type</th>
<th className="py-2.5 px-2">Size</th>
<th className="py-2.5 px-3">Uploaded By</th>
<th className="py-2.5 px-3">Timestamp</th>
<th className="py-2.5 px-3">Verification</th>
<th className="py-2.5 px-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-[#EAEFF4] font-metric-tabular">
{/*  Doc Row 1 (/Active)  */}
<tr className="bg-[#EBF3FB] border-l-4 border-l-[#123B5D]">
<td className="py-2.5 px-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#B42318]">picture_as_pdf</span>
<span className="font-mono font-bold text-[#123B5D]">CAL-M1-CERT-2026.pdf</span>
</div>
</td>
<td className="py-2.5 px-3 font-medium text-[#0D1D2A]">Calibration Certificate (M1)</td>
<td className="py-2.5 px-2 text-[#5B6B7A] font-mono">PDF</td>
<td className="py-2.5 px-2 text-[#5B6B7A]">648 KB</td>
<td className="py-2.5 px-3 text-[#49607A]">A. Kumar</td>
<td className="py-2.5 px-3 text-[#5B6B7A] font-mono text-[11px]">06 Sep 12:51 PM</td>
<td className="py-2.5 px-3">
<span className="px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
                          ✓ Verified
                        </span>
</td>
<td className="py-2.5 px-3 text-right">
<div className="inline-flex items-center gap-1.5 text-xs text-[#123B5D]">
<button className="hover:underline font-semibold" title="View Document" type="button">View</button>
<span className="text-[#D7E0E7]">•</span>
<button className="hover:underline" title="Download" type="button">Get</button>
<span className="text-[#D7E0E7]">•</span>
<button className="text-[#5B6B7A] hover:text-[#0D1D2A]" type="button">
<span className="material-symbols-outlined text-[15px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Doc Row 2  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2.5 px-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#B42318]">picture_as_pdf</span>
<span className="font-mono font-medium text-[#0D1D2A]">MFR-WT100-SPEC-v3.pdf</span>
</div>
</td>
<td className="py-2.5 px-3 text-[#0D1D2A]">Manufacturer Spec Sheet</td>
<td className="py-2.5 px-2 text-[#5B6B7A] font-mono">PDF</td>
<td className="py-2.5 px-2 text-[#5B6B7A]">1.2 MB</td>
<td className="py-2.5 px-3 text-[#49607A]">A. Kumar</td>
<td className="py-2.5 px-3 text-[#5B6B7A] font-mono text-[11px]">06 Sep 12:52 PM</td>
<td className="py-2.5 px-3">
<span className="px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
                          ✓ Verified
                        </span>
</td>
<td className="py-2.5 px-3 text-right">
<div className="inline-flex items-center gap-1.5 text-xs text-[#123B5D]">
<button className="hover:underline font-semibold" title="View Document" type="button">View</button>
<span className="text-[#D7E0E7]">•</span>
<button className="hover:underline" title="Download" type="button">Get</button>
<span className="text-[#D7E0E7]">•</span>
<button className="text-[#5B6B7A] hover:text-[#0D1D2A]" type="button">
<span className="material-symbols-outlined text-[15px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Doc Row 3  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2.5 px-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#B42318]">picture_as_pdf</span>
<span className="font-mono font-medium text-[#0D1D2A]">WT-STANDARDS-REF.pdf</span>
</div>
</td>
<td className="py-2.5 px-3 text-[#0D1D2A]">Secondary Reference Weights</td>
<td className="py-2.5 px-2 text-[#5B6B7A] font-mono">PDF</td>
<td className="py-2.5 px-2 text-[#5B6B7A]">530 KB</td>
<td className="py-2.5 px-3 text-[#49607A]">R. Singh (Auditor)</td>
<td className="py-2.5 px-3 text-[#5B6B7A] font-mono text-[11px]">06 Sep 12:53 PM</td>
<td className="py-2.5 px-3">
<span className="px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]">
                          ⚠ Pending Review
                        </span>
</td>
<td className="py-2.5 px-3 text-right">
<div className="inline-flex items-center gap-1.5 text-xs text-[#123B5D]">
<button className="hover:underline font-semibold" title="Review Document" type="button">Review</button>
<span className="text-[#D7E0E7]">•</span>
<button className="hover:underline" title="Download" type="button">Get</button>
<span className="text-[#D7E0E7]">•</span>
<button className="text-[#5B6B7A] hover:text-[#0D1D2A]" type="button">
<span className="material-symbols-outlined text-[15px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Right Inspector / Governance Column (Approx 32% -> 4 columns on lg)  */}
<div className="lg:col-span-4 space-y-4">
{/*  Active File Detail Inspector  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm overflow-hidden">
<div className="px-4 py-2.5 bg-[#123B5D] text-white flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#8CF3F3]">find_in_page</span>
<span className="text-xs font-bold uppercase tracking-wider"> Artifact Inspector</span>
</div>
<span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#0B263D] text-[#A6CAF3] border border-[#24496C]">ISO 17025</span>
</div>
<div className="p-4 space-y-3.5 text-xs">
{/*  File Overview Header  */}
<div className="flex items-start gap-3 pb-3 border-b border-[#EAEFF4]">
<div className="w-10 h-10 rounded bg-[#FEF2F2] border border-[#FECACA] flex items-center justify-center text-[#B42318] shrink-0 font-bold text-xs">
                    PDF
                  </div>
<div className="min-w-0 flex-1">
<div className="font-mono font-bold text-[#0B263D] truncate text-[13px]">CAL-M1-CERT-2026.pdf</div>
<div className="text-[#5B6B7A] text-[11px]">Primary Standard Calibration Certificate</div>
<div className="mt-1 flex items-center gap-1.5">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">CRYPTOGRAPHICALLY VERIFIED</span>
</div>
</div>
</div>
{/*  Technical Metadata Key-Value List  */}
<div className="space-y-2 font-metric-tabular">
<div className="flex justify-between py-1 border-b border-[#F4F7F9]">
<span className="text-[#5B6B7A]">Certificate Reference</span>
<span className="font-mono font-bold text-[#0D1D2A]">CERT-2026-M1-0891</span>
</div>
<div className="flex justify-between py-1 border-b border-[#F4F7F9]">
<span className="text-[#5B6B7A]">Accredited Body</span>
<span className="text-[#0D1D2A] font-medium">DKD / DAkkS (NMI Recognized)</span>
</div>
<div className="flex justify-between py-1 border-b border-[#F4F7F9]">
<span className="text-[#5B6B7A]">Accuracy Standards Class</span>
<span className="font-mono font-semibold text-[#0B263D]">OIML Class M1 (100 kg)</span>
</div>
<div className="flex justify-between py-1 border-b border-[#F4F7F9]">
<span className="text-[#5B6B7A]">Issuance Date</span>
<span className="text-[#0D1D2A] font-mono">15 Jan 2026</span>
</div>
<div className="flex justify-between py-1 border-b border-[#F4F7F9]">
<span className="text-[#5B6B7A]">Recalibration Expiry</span>
<span className="text-[#15803D] font-mono font-bold">14 Jan 2027 (VALID)</span>
</div>
<div className="flex justify-between py-1 border-b border-[#F4F7F9]">
<span className="text-[#5B6B7A]">File Payload Size</span>
<span className="text-[#0D1D2A]">648.24 KB (663,797 bytes)</span>
</div>
<div className="flex justify-between py-1 border-b border-[#F4F7F9]">
<span className="text-[#5B6B7A]">Uploaded By</span>
<span className="text-[#0D1D2A]">A. Kumar (TECH-409)</span>
</div>
<div className="flex justify-between py-1 border-b border-[#F4F7F9]">
<span className="text-[#5B6B7A]">Ingestion Timestamp</span>
<span className="text-[#5B6B7A] font-mono">06 Sep 2026 • 12:51:34 UTC</span>
</div>
</div>
{/*  SHA-256 Digest Box  */}
<div className="bg-[#F8FAFC] border border-[#D7E0E7] rounded p-2 text-[11px]">
<div className="flex items-center justify-between text-[#5B6B7A] font-semibold text-[10px] uppercase">
<span>SHA-256 Immutable Hash</span>
<span className="text-[#15803D]">● MATCH CONFIRMED</span>
</div>
<div className="font-mono text-[10px] text-[#0B263D] break-all select-all mt-1 bg-white p-1.5 rounded border border-[#EAEFF4]">
                    d5a83b4c9e12078fd14e5900c4391ef140b912c019973a987d6e6f9872e477f0
                  </div>
</div>
{/*  Inspector Actions  */}
<div className="pt-2 space-y-2">
<div className="grid grid-cols-2 gap-2">
<button className="px-3 py-2 rounded bg-[#123B5D] text-white font-semibold text-xs hover:bg-[#0B263D] transition-colors flex items-center justify-center gap-1 shadow-xs" type="button">
<span className="material-symbols-outlined text-[15px]">preview</span>
<span>Preview PDF</span>
</button>
<button className="px-3 py-2 rounded bg-white text-[#172B3A] border border-[#D7E0E7] font-semibold text-xs hover:bg-[#F4F7F9] hover:border-[#123B5D] transition-colors flex items-center justify-center gap-1 shadow-xs" type="button">
<span className="material-symbols-outlined text-[15px]">download</span>
<span>Download</span>
</button>
</div>
<div className="flex items-center justify-between pt-1">
<button className="text-xs text-[#5B6B7A] hover:text-[#123B5D] font-medium flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">swap_horiz</span>
<span>Replace Version</span>
</button>
<button className="text-xs text-[#B42318] hover:underline font-medium flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">delete</span>
<span>Remove</span>
</button>
</div>
<p className="text-[10px] text-[#B42318] bg-[#FEF2F2] p-1.5 rounded border border-[#FECACA] leading-tight">
                    Notice: Removing this required artifact will flag test record TEST-012 non-compliant under Clause 3.9.
                  </p>
</div>
</div>
</div>
{/*  Verification & Stage Completeness Panel  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm p-4 text-xs space-y-3">
<div className="flex items-center justify-between border-b border-[#EAEFF4] pb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-[#15803D]">gavel</span>
<h3 className="font-bold uppercase tracking-wider text-[#0B263D]">Verification &amp; Integrity Gate</h3>
</div>
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">5 / 5 PASS</span>
</div>
<ul className="space-y-2 text-[#0D1D2A]">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-[#15803D] shrink-0 mt-0.5">check_circle</span>
<span>Instrument Frontal Photograph Present &amp; Stamped</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-[#15803D] shrink-0 mt-0.5">check_circle</span>
<span>Nameplate Markings Legible (Class III verified)</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-[#15803D] shrink-0 mt-0.5">check_circle</span>
<span>Environmental Test Setup Enclosure Documented</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-[#15803D] shrink-0 mt-0.5">check_circle</span>
<span>Standard Weights Certificate Valid &amp; Active</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-[#15803D] shrink-0 mt-0.5">check_circle</span>
<span>Manufacturer Tolerance Specification Bound</span>
</li>
</ul>
<div className="p-2.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-[11px] text-[#49607A] leading-relaxed">
<span className="font-bold text-[#0B263D]">Laboratory Governance Rule:</span>
                All uploaded attachments are automatically compiled into the ISO 17025 verification ledger. Fingerprints will appear on final certificate seals.
              </div>
</div>
{/*  Pre-Review Sign-off Checklist  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm p-4 text-xs space-y-2.5">
<div className="flex items-center justify-between border-b border-[#EAEFF4] pb-2">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-[#123B5D]">fact_check</span>
<span className="font-bold uppercase tracking-wider text-[#0B263D]">Pre-Review Sign-off</span>
</div>
<span className="text-[10px] text-[#5B6B7A] font-mono">STAGE GATE</span>
</div>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked="" className="w-3.5 h-3.5 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#0D1D2A] text-[11px]">Required evidence categories complete (5/5)</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked="" className="w-3.5 h-3.5 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#0D1D2A] text-[11px]">All files securely associated with TEST-012</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked="" className="w-3.5 h-3.5 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#0D1D2A] text-[11px]">Photographs inspected for optical clarity</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked="" className="w-3.5 h-3.5 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#0D1D2A] text-[11px]">Standards certs within active validity window</span>
</label>
<label className="flex items-center gap-2 cursor-pointer opacity-70">
<input className="w-3.5 h-3.5 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" disabled="" type="checkbox"/>
<span className="text-[#73777F] text-[11px]">Supervisory Reviewer Verification (Pending Step 07)</span>
</label>
</div>
{/*  Audit Stamp  */}
<div className="pt-2 border-t border-[#EAEFF4] text-[10px] text-[#5B6B7A] font-mono flex justify-between">
<span>AUDIT SIGNATURE: 0x88F2A0...3C91</span>
<span>UTC 12:54:02</span>
</div>
</div>
</div>
</div>
</div>
{/*  4. Bottom Sticky Action Bar  */}
<footer className="sticky bottom-0 bg-white border-t border-[#D7E0E7] px-8 py-3 flex items-center justify-between shadow-[0_-2px_10px_rgba(11,38,61,0.06)] z-20">
<div className="flex items-center gap-3">
<button className="h-9 px-4 rounded text-xs font-semibold bg-white text-[#172B3A] border border-[#D7E0E7] hover:bg-[#F4F7F9] hover:border-[#123B5D] transition-colors flex items-center gap-1.5 shadow-xs" type="button">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
<span>Back to Compliance Assessment (Step 05)</span>
</button>
</div>
<div className="flex items-center gap-3">
<button className="h-9 px-3.5 rounded text-xs font-semibold bg-white text-[#172B3A] border border-[#D7E0E7] hover:bg-[#F4F7F9] transition-colors flex items-center gap-1.5 shadow-xs" type="button">
<span className="material-symbols-outlined text-[16px] text-[#5B6B7A]">save</span>
<span>Save Draft</span>
</button>
<button className="h-9 px-3.5 rounded text-xs font-semibold bg-white text-[#123B5D] border border-[#D7E0E7] hover:bg-[#F4F7F9] transition-colors flex items-center gap-1.5 shadow-xs" type="button">
<span className="material-symbols-outlined text-[16px]">archive</span>
<span>Export Evidence Manifest (JSON/ZIP)</span>
</button>
{/*  Primary CTA  */}
<button className="h-9 px-5 rounded text-xs font-bold bg-[#123B5D] text-white hover:bg-[#0B263D] active:bg-[#071826] transition-all flex items-center gap-2 shadow-sm" type="button">
<span>Continue to Step 07 Review &amp; Approval</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</footer>
</div>
</div>
</div></main>
    </div>
  );
}
