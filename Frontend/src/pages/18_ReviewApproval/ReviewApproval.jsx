import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function ReviewApproval() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-[#F4F7F9] p-0">
<div className="flex flex-col w-full text-[#0D1D2A] antialiased">
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
{/*  Admin Section  */}
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
{/*  Bottom User Account Badge: R. Singh (Reviewer)  */}
<div className="p-3 border-t border-[#123B5D]/60 bg-[#081C2E]">
<div className="flex items-center gap-2.5 p-1.5 rounded hover:bg-[#123B5D]/30 transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-[#123B5D] text-white flex items-center justify-center font-bold text-xs border border-[#82A5CD]/40 shrink-0">
          RS
        </div>
<div className="flex flex-col min-w-0">
<span className="text-xs font-semibold text-white truncate">R. Singh</span>
<span className="text-[10px] text-[#82A5CD] truncate">Reviewer • Technical Lead</span>
</div>
<span className="material-symbols-outlined text-[16px] text-[#82A5CD] ml-auto">unfold_more</span>
</div>
</div>
</aside>
{/*  Main Workspace Area  */}
<div className="flex-1 flex flex-col min-w-0 bg-[#F4F7F9]">
{/*  Top Telemetry Strip  */}
<header className="h-11 bg-white border-b border-[#D7E0E7] px-6 flex items-center justify-between text-xs shrink-0 select-none shadow-[0_1px_2px_rgba(11,38,61,0.03)]">
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
<span>Autosaved 4s ago</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="h-7 px-2.5 rounded text-xs font-medium bg-white text-[#172B3A] border border-[#D7E0E7] hover:bg-[#F4F7F9] hover:border-[#123B5D] transition-all flex items-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[15px]">save</span>
<span>Save Review</span>
</button>
<button className="h-7 px-2.5 rounded text-xs font-medium bg-white text-[#B42318] border border-[#FECACA] hover:bg-[#FEF2F2] transition-all flex items-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[15px]">logout</span>
<span>Exit</span>
</button>
</div>
</header>
{/*  Subheader: Breadcrumb, Title & 8-stage Stepper  */}
<div className="px-8 pt-5 pb-4 bg-white border-b border-[#D7E0E7]">
<nav className="flex items-center gap-2 text-xs text-[#5B6B7A] mb-1.5 font-medium">
<a className="hover:text-[#123B5D] transition-colors" href="#">Tests</a>
<span className="text-[#A6CAF3]">/</span>
<a className="font-mono text-[#123B5D] hover:underline" href="#">TEST-012</a>
<span className="text-[#A6CAF3]">/</span>
<span className="text-[#0D1D2A] font-semibold">Review</span>
</nav>
<div className="flex items-end justify-between">
<div>
<h1 className="text-xl font-bold text-[#0B263D] tracking-tight flex items-center gap-2">
<span>Review &amp; Approval</span>
<span className="text-xs px-2 py-0.5 rounded font-mono font-bold bg-[#E1EFFF] text-[#123B5D] border border-[#A6CAF3]/60">STEP 07 / 08</span>
</h1>
<p className="text-xs text-[#5B6B7A] mt-0.5">Verify the completed test record before final report generation.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] font-mono text-[#5B6B7A] bg-[#F4F7F9] px-2.5 py-1 rounded border border-[#D7E0E7]">OIML R 76-1: §4 Approval &amp; Record Verification</span>
</div>
</div>
{/*  Metrology Stepper (8 Stages: Step 07 ACTIVE)  */}
<div className="mt-4 pt-4 border-t border-[#EAEFF4] grid grid-cols-8 gap-1.5 select-none">
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-xs">
<span className="w-4 h-4 rounded-full bg-[#15803D] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="font-medium text-[#49607A] truncate">01 Instrument</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-xs">
<span className="w-4 h-4 rounded-full bg-[#15803D] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="font-medium text-[#49607A] truncate">02 Conditions</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-xs">
<span className="w-4 h-4 rounded-full bg-[#15803D] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="font-medium text-[#49607A] truncate">03 Test Sel.</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-xs">
<span className="w-4 h-4 rounded-full bg-[#15803D] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="font-medium text-[#49607A] truncate">04 Observations</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-xs">
<span className="w-4 h-4 rounded-full bg-[#15803D] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="font-medium text-[#49607A] truncate">05 Compliance</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] text-xs">
<span className="w-4 h-4 rounded-full bg-[#15803D] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="font-medium text-[#49607A] truncate">06 Evidence</span>
</div>
{/*  Step 07 Active  */}
<div className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-[#0B263D] text-white text-xs font-semibold shadow-sm border border-[#123B5D]">
<span className="w-4 h-4 rounded-full bg-[#008B8B] text-white flex items-center justify-center text-[10px] font-bold">07</span>
<span className="truncate font-bold">07 Review</span>
</div>
{/*  Step 08 Pending  */}
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-white border border-[#D7E0E7] text-xs opacity-60">
<span className="w-4 h-4 rounded-full border border-[#73777F] text-[#73777F] flex items-center justify-center text-[10px] font-bold">08</span>
<span className="font-medium text-[#49607A] truncate">08 Report</span>
</div>
</div>
</div>
{/*  Main Workspace Body  */}
<div className="flex-1 p-6 space-y-4 max-w-[1720px] w-full mx-auto">
{/*  2. Review Header Panel (White card, border #D7E0E7)  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm p-3.5 text-xs grid grid-cols-1 xl:grid-cols-12 gap-4 font-metric-tabular items-center">
{/*  Left Metadata (Approx 60%)  */}
<div className="xl:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[#EAEFF4]">
<div className="pr-2">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Test Report</span>
<span className="font-mono font-bold text-[#123B5D] text-[13px]">TR-0091</span>
</div>
<div className="sm:pl-3">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Test ID</span>
<span className="font-mono font-bold text-[#0D1D2A] text-[13px]">TEST-012</span>
</div>
<div className="sm:pl-3">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Instrument</span>
<span className="font-semibold text-[#0D1D2A] truncate block" title="ABC WeighTech WT-100">ABC WT-100</span>
</div>
<div className="sm:pl-3">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Serial Number</span>
<span className="font-mono text-[#0D1D2A] truncate block">WT100-2026-001</span>
</div>
<div className="sm:pl-3">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Accredited Lab</span>
<span className="text-[#0D1D2A] truncate block font-medium" title="XYZ Metrology Lab">XYZ Metrology Lab</span>
</div>
</div>
{/*  Right Metadata Badges (Approx 40%)  */}
<div className="xl:col-span-5 flex flex-wrap items-center justify-start xl:justify-end gap-2.5 pt-2 xl:pt-0 border-t xl:border-t-0 border-[#EAEFF4]">
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] font-bold text-[11px]">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>PASS</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#E1EFFF] border border-[#A6CAF3] text-[#123B5D] font-bold text-[11px]">
<span className="material-symbols-outlined text-[14px]">attach_file</span>
<span>EVIDENCE: COMPLETE (6/6)</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309] font-bold text-[11px]">
<span className="w-1.5 h-1.5 rounded-full bg-[#B45309] animate-ping"></span>
<span>PENDING REVIEW</span>
</div>
<div className="text-[11px] text-[#5B6B7A] font-mono border-l border-[#D7E0E7] pl-2.5">
            Rev: <span className="font-semibold text-[#0D1D2A]">R. Singh</span> • 06 Sep 2026
          </div>
</div>
</div>
{/*  3. Review Progress Strip (Horizontal Process Bar)  */}
<div className="bg-white border border-[#D7E0E7] rounded px-4 py-2.5 shadow-sm text-xs select-none">
<div className="flex items-center justify-between text-[11px] font-metric-tabular overflow-x-auto gap-2">
<div className="flex items-center gap-1 text-[#15803D] font-semibold whitespace-nowrap">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Instrument: Complete</span>
</div>
<span className="text-[#D7E0E7]">→</span>
<div className="flex items-center gap-1 text-[#15803D] font-semibold whitespace-nowrap">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Laboratory: Complete</span>
</div>
<span className="text-[#D7E0E7]">→</span>
<div className="flex items-center gap-1 text-[#15803D] font-semibold whitespace-nowrap">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Tests: Complete</span>
</div>
<span className="text-[#D7E0E7]">→</span>
<div className="flex items-center gap-1 text-[#15803D] font-semibold whitespace-nowrap">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Compliance: Complete</span>
</div>
<span className="text-[#D7E0E7]">→</span>
<div className="flex items-center gap-1 text-[#15803D] font-semibold whitespace-nowrap">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Evidence: Complete</span>
</div>
<span className="text-[#D7E0E7]">→</span>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#008B8B]/10 border border-[#008B8B] text-[#008B8B] font-bold whitespace-nowrap">
<span className="w-1.5 h-1.5 rounded-full bg-[#008B8B]"></span>
<span>Review: Current</span>
</div>
<span className="text-[#D7E0E7]">→</span>
<div className="flex items-center gap-1 text-[#73777F] whitespace-nowrap opacity-60">
<span className="material-symbols-outlined text-[14px]">radio_button_unchecked</span>
<span>Report: Pending</span>
</div>
</div>
</div>
{/*  4. Two-Column Workspace Layout (72% Left, 28% Right)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
{/*  LEFT COLUMN (Approx 72% -> 8.5 cols, set 8 on 12-grid, md 8/12)  */}
<div className="lg:col-span-8 space-y-4">
{/*  Section 1 — Instrument Summary (Compact technical grid, read-only)  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm overflow-hidden">
<div className="px-4 py-2 bg-[#F4F7F9] border-b border-[#D7E0E7] flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#123B5D]">scale</span>
<span className="text-xs font-bold uppercase tracking-wider text-[#0B263D]">Section 01 — Instrument Specification</span>
</div>
<a className="text-xs font-semibold text-[#123B5D] hover:underline flex items-center gap-0.5" href="#">
<span>View Instrument</span>
<span className="material-symbols-outlined text-[13px]">arrow_outward</span>
</a>
</div>
<div className="p-3.5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-metric-tabular">
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Manufacturer</span>
<span className="font-semibold text-[#0D1D2A] mt-0.5 block">ABC WeighTech Pvt. Ltd.</span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Model Designation</span>
<span className="font-mono font-semibold text-[#0D1D2A] mt-0.5 block">WT-100</span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Serial Number</span>
<span className="font-mono text-[#0D1D2A] mt-0.5 block">WT100-2026-001</span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Instrument Type</span>
<span className="text-[#0D1D2A] mt-0.5 block">Platform Scale</span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Maximum Capacity (Max)</span>
<span className="font-mono font-bold text-[#123B5D] mt-0.5 block">100.000 kg</span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Minimum Capacity (Min)</span>
<span className="font-mono text-[#0D1D2A] mt-0.5 block">20 g (0.020 kg)</span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Verification Scale Interval (e)</span>
<span className="font-mono text-[#0D1D2A] mt-0.5 block">10 g</span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Accuracy Class</span>
<span className="font-bold text-[#008B8B] mt-0.5 block">Class III Medium</span>
</div>
</div>
</div>
{/*  Section 2 — Laboratory & Environmental Conditions  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm overflow-hidden">
<div className="px-4 py-2 bg-[#F4F7F9] border-b border-[#D7E0E7] flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#123B5D]">thermostat</span>
<span className="text-xs font-bold uppercase tracking-wider text-[#0B263D]">Section 02 — Laboratory &amp; Environmental Conditions</span>
</div>
<a className="text-xs font-semibold text-[#123B5D] hover:underline flex items-center gap-0.5" href="#">
<span>View Conditions</span>
<span className="material-symbols-outlined text-[13px]">arrow_outward</span>
</a>
</div>
<div className="p-3.5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-metric-tabular">
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Accredited Facility</span>
<span className="font-semibold text-[#0D1D2A] truncate mt-0.5 block" title="XYZ Metrology Laboratory (New Delhi)">XYZ Metrology (ND)</span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Technician</span>
<span className="font-medium text-[#0D1D2A] truncate mt-0.5 block">A. Kumar (TECH-409)</span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Test Date</span>
<span className="font-mono text-[#0D1D2A] mt-0.5 block">06 Sep 2026</span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Ambient Temp</span>
<span className="font-mono font-bold text-[#0D1D2A] mt-0.5 block">23.5 °C <span className="text-[10px] text-[#5B6B7A] font-normal">(±0.4 °C)</span></span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Relative Humidity</span>
<span className="font-mono text-[#0D1D2A] mt-0.5 block">48.0 %RH</span>
</div>
<div className="p-2 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Barometric Press.</span>
<span className="font-mono text-[#0D1D2A] mt-0.5 block">1012.0 hPa</span>
</div>
</div>
</div>
{/*  Section 3 — Test Results Matrix (6 procedures)  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm overflow-hidden">
<div className="px-4 py-2 bg-[#F4F7F9] border-b border-[#D7E0E7] flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#123B5D]">analytics</span>
<span className="text-xs font-bold uppercase tracking-wider text-[#0B263D]">Section 03 — Test Results Matrix (6 Executed Procedures)</span>
</div>
<span className="text-[11px] font-mono text-[#15803D] font-bold">6/6 Procedures Passed</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse text-xs">
<thead>
<tr className="bg-[#F8FAFC] text-[11px] uppercase tracking-wider font-semibold text-[#5B6B7A] border-b border-[#D7E0E7]">
<th className="py-2.5 px-3">Procedure Name</th>
<th className="py-2.5 px-3">Scope / Steps</th>
<th className="py-2.5 px-3">Key Observed Metric</th>
<th className="py-2.5 px-2">Decision</th>
<th className="py-2.5 px-3">Status</th>
<th className="py-2.5 px-3 text-right">Clause Rule</th>
</tr>
</thead>
<tbody className="divide-y divide-[#EAEFF4] font-metric-tabular">
{/*  Row 1  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2.5 px-3 font-semibold text-[#0B263D]">
                      Accuracy / Error of Indication
                    </td>
<td className="py-2.5 px-3 text-[#5B6B7A]">5 points</td>
<td className="py-2.5 px-3 font-mono text-[#123B5D] font-bold">+0.012 kg (at 100 kg Max)</td>
<td className="py-2.5 px-2">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
                        ✓ PASS
                      </span>
</td>
<td className="py-2.5 px-3 text-[#15803D] text-[11px]">Verified</td>
<td className="py-2.5 px-3 text-right">
<a className="text-[11px] text-[#123B5D] hover:underline font-semibold" href="#">View Rule ↗</a>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2.5 px-3 font-semibold text-[#0B263D]">
                      Repeatability (Clause 3.6.1)
                    </td>
<td className="py-2.5 px-3 text-[#5B6B7A]">5 trials</td>
<td className="py-2.5 px-3 font-mono text-[#123B5D] font-bold">Range ΔI = 0.010 kg</td>
<td className="py-2.5 px-2">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
                        ✓ PASS
                      </span>
</td>
<td className="py-2.5 px-3 text-[#15803D] text-[11px]">Verified</td>
<td className="py-2.5 px-3 text-right">
<a className="text-[11px] text-[#123B5D] hover:underline font-semibold" href="#">View Rule ↗</a>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2.5 px-3 font-semibold text-[#0B263D]">
                      Eccentric Loading
                    </td>
<td className="py-2.5 px-3 text-[#5B6B7A]">5 positions</td>
<td className="py-2.5 px-3 font-mono text-[#123B5D] font-bold">Max Dev = +0.020 kg</td>
<td className="py-2.5 px-2">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
                        ✓ PASS
                      </span>
</td>
<td className="py-2.5 px-3 text-[#15803D] text-[11px]">Verified</td>
<td className="py-2.5 px-3 text-right">
<a className="text-[11px] text-[#123B5D] hover:underline font-semibold" href="#">View Rule ↗</a>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2.5 px-3 font-semibold text-[#0B263D]">
                      Zero / Zero-Related Checks
                    </td>
<td className="py-2.5 px-3 text-[#5B6B7A]">3 steps</td>
<td className="py-2.5 px-3 font-mono text-[#123B5D] font-bold">Max Δ = +0.010 kg</td>
<td className="py-2.5 px-2">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
                        ✓ PASS
                      </span>
</td>
<td className="py-2.5 px-3 text-[#15803D] text-[11px]">Verified</td>
<td className="py-2.5 px-3 text-right">
<a className="text-[11px] text-[#123B5D] hover:underline font-semibold" href="#">View Rule ↗</a>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2.5 px-3 font-semibold text-[#0B263D]">
                      Tare Operations &amp; Balancing
                    </td>
<td className="py-2.5 px-3 text-[#5B6B7A]">3 steps</td>
<td className="py-2.5 px-3 font-mono text-[#123B5D] font-bold">Settled Offset = +0.010 kg</td>
<td className="py-2.5 px-2">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
                        ✓ PASS
                      </span>
</td>
<td className="py-2.5 px-3 text-[#15803D] text-[11px]">Verified</td>
<td className="py-2.5 px-3 text-right">
<a className="text-[11px] text-[#123B5D] hover:underline font-semibold" href="#">View Rule ↗</a>
</td>
</tr>
{/*  Row 6  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-2.5 px-3 font-semibold text-[#0B263D]">
                      Environmental Influence
                    </td>
<td className="py-2.5 px-3 text-[#5B6B7A]">3 temps</td>
<td className="py-2.5 px-3 font-mono text-[#123B5D] font-bold">Max Span Dev = +0.012 kg</td>
<td className="py-2.5 px-2">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#F0FDF4] text-[#15803D] border border-[#BBF7D0]">
                        ✓ PASS
                      </span>
</td>
<td className="py-2.5 px-3 text-[#15803D] text-[11px]">Verified</td>
<td className="py-2.5 px-3 text-right">
<a className="text-[11px] text-[#123B5D] hover:underline font-semibold" href="#">View Rule ↗</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Section 4 — Compliance Assessment Summary  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm overflow-hidden">
<div className="px-4 py-2 bg-[#F4F7F9] border-b border-[#D7E0E7] flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#15803D]">verified</span>
<span className="text-xs font-bold uppercase tracking-wider text-[#0B263D]">Section 04 — Compliance Assessment Summary</span>
</div>
<a className="text-xs font-semibold text-[#123B5D] hover:underline flex items-center gap-0.5" href="#">
<span>View Compliance Assessment</span>
<span className="material-symbols-outlined text-[13px]">arrow_outward</span>
</a>
</div>
<div className="p-4 grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-metric-tabular">
<div className="p-2.5 rounded bg-[#F0FDF4] border border-[#BBF7D0]">
<span className="text-[10px] uppercase font-bold text-[#15803D] block">Overall Decision</span>
<div className="flex items-center gap-1 mt-1 font-bold text-base text-[#15803D]">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>PASS</span>
</div>
</div>
<div className="p-2.5 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Evaluated Requirements</span>
<span className="font-bold text-base text-[#0D1D2A] mt-1 block">12 / 12 Passed</span>
</div>
<div className="p-2.5 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Failed / Pending</span>
<span className="font-bold text-base text-[#0D1D2A] mt-1 block">0 <span className="text-xs font-normal text-[#5B6B7A]">/ 0</span></span>
</div>
<div className="p-2.5 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Rule Set</span>
<span className="font-mono font-semibold text-[#123B5D] mt-1 block truncate" title="OIML R 76 — R76-2026.1">OIML R 76</span>
<span className="text-[10px] text-[#73777F] font-mono">vR76-2026.1</span>
</div>
<div className="p-2.5 rounded bg-[#F8FAFC] border border-[#EAEFF4]">
<span className="text-[10px] uppercase font-bold text-[#5B6B7A] block">Engine Evaluation</span>
<span className="text-[#0D1D2A] mt-1 block font-medium">06 Sep • 12:46 PM</span>
<span className="text-[10px] text-[#73777F]">Kernel Engine</span>
</div>
</div>
</div>
{/*  Section 5 — Supporting Evidence List  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm overflow-hidden">
<div className="px-4 py-2 bg-[#F4F7F9] border-b border-[#D7E0E7] flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#123B5D]">folder_open</span>
<span className="text-xs font-bold uppercase tracking-wider text-[#0B263D]">Section 05 — Supporting Evidence Files</span>
</div>
<a className="text-xs font-semibold text-[#123B5D] hover:underline flex items-center gap-0.5" href="#">
<span>View Evidence</span>
<span className="material-symbols-outlined text-[13px]">arrow_outward</span>
</a>
</div>
<div className="divide-y divide-[#EAEFF4] text-xs">
{/*  Item 1  */}
<div className="px-4 py-2 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[18px] text-[#5B6B7A]">photo_camera</span>
<div>
<span className="font-mono font-semibold text-[#0D1D2A]">instrument.jpg</span>
<span className="text-[#5B6B7A] text-[11px] ml-2">Instrument Photograph • 2.4 MB</span>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[#15803D] font-semibold text-[11px]">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Verified
                </span>
</div>
{/*  Item 2  */}
<div className="px-4 py-2 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[18px] text-[#5B6B7A]">label</span>
<div>
<span className="font-mono font-semibold text-[#0D1D2A]">nameplate.jpg</span>
<span className="text-[#5B6B7A] text-[11px] ml-2">Nameplate Photograph • 1.8 MB</span>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[#15803D] font-semibold text-[11px]">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Verified
                </span>
</div>
{/*  Item 3  */}
<div className="px-4 py-2 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[18px] text-[#5B6B7A]">view_in_ar</span>
<div>
<span className="font-mono font-semibold text-[#0D1D2A]">test_setup.jpg</span>
<span className="text-[#5B6B7A] text-[11px] ml-2">Test Setup Photograph • 3.1 MB</span>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[#15803D] font-semibold text-[11px]">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Verified
                </span>
</div>
{/*  Item 4  */}
<div className="px-4 py-2 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[18px] text-[#B42318]">picture_as_pdf</span>
<div>
<span className="font-mono font-semibold text-[#123B5D]">CAL-M1-CERT-2026.pdf</span>
<span className="text-[#5B6B7A] text-[11px] ml-2">Calibration Certificate • 648 KB</span>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[#15803D] font-semibold text-[11px]">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Verified
                </span>
</div>
{/*  Item 5  */}
<div className="px-4 py-2 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[18px] text-[#B42318]">picture_as_pdf</span>
<div>
<span className="font-mono font-semibold text-[#0D1D2A]">MFR-WT100-SPEC-v3.pdf</span>
<span className="text-[#5B6B7A] text-[11px] ml-2">Manufacturer Specification • 1.2 MB</span>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[#15803D] font-semibold text-[11px]">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Verified
                </span>
</div>
{/*  Item 6 (Pending)  */}
<div className="px-4 py-2 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors bg-[#FFFBEB]/40">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[18px] text-[#B45309]">description</span>
<div>
<span className="font-mono font-semibold text-[#0D1D2A]">WT-STANDARDS-REF.pdf</span>
<span className="text-[#5B6B7A] text-[11px] ml-2">Additional Supporting Document • 530 KB</span>
</div>
</div>
<span className="inline-flex items-center gap-1 text-[#B45309] font-semibold text-[11px]">
<span className="material-symbols-outlined text-[14px]">pending</span>
                  Pending Verification
                </span>
</div>
</div>
</div>
{/*  Section 6 — Review Checklist  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm p-4 text-xs">
<div className="flex items-center justify-between border-b border-[#EAEFF4] pb-2.5 mb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#123B5D]">fact_check</span>
<span className="font-bold uppercase tracking-wider text-[#0B263D]">Section 06 — Mandatory Review Checklist</span>
</div>
<span className="text-[11px] font-mono text-[#5B6B7A]">7/8 ITEMS CHECKED</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
<label className="flex items-center gap-2.5 p-1.5 rounded hover:bg-[#F8FAFC] cursor-pointer">
<input defaultChecked="" className="w-4 h-4 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#0D1D2A] font-medium">Instrument identification verified</span>
</label>
<label className="flex items-center gap-2.5 p-1.5 rounded hover:bg-[#F8FAFC] cursor-pointer">
<input defaultChecked="" className="w-4 h-4 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#0D1D2A] font-medium">Technical specifications reviewed</span>
</label>
<label className="flex items-center gap-2.5 p-1.5 rounded hover:bg-[#F8FAFC] cursor-pointer">
<input defaultChecked="" className="w-4 h-4 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#0D1D2A] font-medium">Laboratory/environment information reviewed</span>
</label>
<label className="flex items-center gap-2.5 p-1.5 rounded hover:bg-[#F8FAFC] cursor-pointer">
<input defaultChecked="" className="w-4 h-4 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#0D1D2A] font-medium">Test observations reviewed</span>
</label>
<label className="flex items-center gap-2.5 p-1.5 rounded hover:bg-[#F8FAFC] cursor-pointer">
<input defaultChecked="" className="w-4 h-4 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#0D1D2A] font-medium">Calculations reviewed</span>
</label>
<label className="flex items-center gap-2.5 p-1.5 rounded hover:bg-[#F8FAFC] cursor-pointer">
<input defaultChecked="" className="w-4 h-4 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#0D1D2A] font-medium">Compliance results reviewed</span>
</label>
<label className="flex items-center gap-2.5 p-1.5 rounded hover:bg-[#F8FAFC] cursor-pointer">
<input defaultChecked="" className="w-4 h-4 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#0D1D2A] font-medium">Required evidence reviewed</span>
</label>
<label className="flex items-center gap-2.5 p-1.5 rounded hover:bg-[#F8FAFC] cursor-pointer bg-[#F8FAFC] border border-[#EAEFF4]">
<input className="w-4 h-4 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0" type="checkbox"/>
<span className="text-[#123B5D] font-semibold">Final report content reviewed</span>
</label>
</div>
</div>
{/*  Section 7 — Reviewer Comments  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm p-4 text-xs space-y-3">
<div className="flex items-center justify-between border-b border-[#EAEFF4] pb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#123B5D]">comment</span>
<span className="font-bold uppercase tracking-wider text-[#0B263D]">Section 07 — Reviewer Observations &amp; Log</span>
</div>
<span className="text-[10px] text-[#5B6B7A] font-mono">FORM RECORD</span>
</div>
<div>
<label className="block font-semibold text-[#0D1D2A] mb-1.5" htmlFor="reviewer-notes">Add Reviewer Comments</label>
<textarea className="w-full h-20 p-2.5 border border-[#D7E0E7] rounded text-xs text-[#0D1D2A] focus:ring-1 focus:ring-[#123B5D] focus:border-[#123B5D] font-body resize-none" id="reviewer-notes" placeholder="Enter comments, observations, or required corrections..." />
</div>
{/*  Previous comment card  */}
<div className="p-3 rounded bg-[#F8FAFC] border border-[#EAEFF4] space-y-1">
<div className="flex items-center justify-between text-[11px]">
<div className="flex items-center gap-1.5">
<span className="w-5 h-5 rounded-full bg-[#123B5D] text-white flex items-center justify-center font-bold text-[9px]">RS</span>
<span className="font-bold text-[#0D1D2A]">R. Singh</span>
<span className="text-[#5B6B7A]">(Reviewer)</span>
</div>
<span className="font-mono text-[#5B6B7A] text-[10px]">06 Sep 2026 • 1:14 PM</span>
</div>
<p className="text-xs text-[#49607A] pt-1 leading-relaxed">
                "All recorded observations and calculations reviewed. No discrepancies identified."
              </p>
</div>
</div>
</div>
{/*  RIGHT COLUMN (Review Decision & Governance Panel, 28%)  */}
<div className="lg:col-span-4 space-y-4">
{/*  Section: Review Decision (Current State: PENDING REVIEW)  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm overflow-hidden">
<div className="px-4 py-2.5 bg-[#0B263D] text-white flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#8CF3F3]">gavel</span>
<span className="text-xs font-bold uppercase tracking-wider">Review Decision</span>
</div>
<span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#123B5D] text-[#8CF3F3] border border-[#24496C]">PENDING REVIEW</span>
</div>
<div className="p-4 space-y-3.5 text-xs">
<p className="text-[#5B6B7A] text-[11px] leading-relaxed">
                Authorize or return the dossier. Making an approval binds your identity to this calibration certificate record.
              </p>
{/*  3 Decision Buttons  */}
<div className="grid grid-cols-3 gap-2">
<button className="py-2 px-2 rounded bg-[#123B5D] text-white font-bold text-[11px] hover:bg-[#0B263D] transition-colors flex items-center justify-center gap-1 shadow-xs" type="button">
<span className="material-symbols-outlined text-[15px]">done_all</span>
<span>APPROVE</span>
</button>
<button className="py-2 px-1.5 rounded bg-white text-[#49607A] border border-[#D7E0E7] font-semibold text-[11px] hover:bg-[#F4F7F9] hover:border-[#123B5D] transition-colors flex items-center justify-center gap-1" type="button">
<span className="material-symbols-outlined text-[15px]">refresh</span>
<span>CHANGES</span>
</button>
<button className="py-2 px-2 rounded bg-white text-[#B42318] border border-[#FECACA] font-semibold text-[11px] hover:bg-[#FEF2F2] transition-colors flex items-center justify-center gap-1" type="button">
<span className="material-symbols-outlined text-[15px]">close</span>
<span>REJECT</span>
</button>
</div>
{/*  Approval Confirmation Panel  */}
<div className="p-3 rounded bg-[#F8FAFC] border border-[#D7E0E7] space-y-2.5">
<div className="text-[11px] text-[#49607A] leading-tight">
                  Approving this record confirms that the reviewer has verified the instrument information, test results, compliance assessment, and required evidence.
                </div>
<label className="flex items-start gap-2 cursor-pointer pt-1">
<input className="w-4 h-4 rounded border-[#D7E0E7] text-[#123B5D] focus:ring-0 mt-0.5 shrink-0" type="checkbox"/>
<span className="text-[11px] font-semibold text-[#0D1D2A] leading-snug">
                    I confirm that the test record has been reviewed and is ready for report generation.
                  </span>
</label>
<button className="w-full py-2 px-3 rounded bg-[#123B5D]/30 text-[#123B5D] font-bold text-xs border border-[#123B5D]/40 flex items-center justify-center gap-1.5 cursor-not-allowed" disabled="" type="button">
<span className="material-symbols-outlined text-[15px]">check_circle</span>
<span>Approve &amp; Generate Report</span>
</button>
</div>
{/*  Request Changes Section  */}
<div className="pt-2 border-t border-[#EAEFF4] space-y-2">
<span className="text-[11px] font-bold uppercase tracking-wider text-[#5B6B7A] block">Request Specific Changes</span>
<div>
<select className="w-full p-2 border border-[#D7E0E7] rounded text-xs text-[#0D1D2A] bg-white focus:ring-1 focus:ring-[#123B5D]">
<option>Select Section to Revise...</option>
<option>Section 01: Instrument Information</option>
<option>Section 02: Conditions &amp; Lab Data</option>
<option>Section 03: Test Observations</option>
<option>Section 05: Compliance Evaluation</option>
<option>Section 06: Evidence &amp; Attachments</option>
</select>
</div>
<input className="w-full p-2 border border-[#D7E0E7] rounded text-xs text-[#0D1D2A] focus:ring-1 focus:ring-[#123B5D]" placeholder="Specify correction instructions..." type="text"/>
</div>
{/*  Digital Signature  */}
<div className="pt-2 border-t border-[#EAEFF4] space-y-2">
<div className="flex items-center justify-between text-[11px]">
<span className="font-bold text-[#0D1D2A]">Digital Signature</span>
<span className="text-[#73777F] font-mono text-[10px]">Optional</span>
</div>
<div className="p-2.5 rounded bg-[#F4F7F9] border border-[#D7E0E7] flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-[#5B6B7A]">
<span className="material-symbols-outlined text-[17px] text-[#73777F]">draw</span>
<span>Signature not configured</span>
</div>
<button className="px-2 py-1 rounded bg-white text-[#123B5D] border border-[#D7E0E7] font-semibold text-[10px] hover:bg-[#F4F7F9]" type="button">
                    Sign Digitally
                  </button>
</div>
</div>
</div>
</div>
{/*  Review Status Timeline  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm p-4 text-xs space-y-3">
<div className="flex items-center justify-between border-b border-[#EAEFF4] pb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#123B5D]">history</span>
<span className="font-bold uppercase tracking-wider text-[#0B263D]">Review Status Timeline</span>
</div>
<span className="text-[10px] font-mono text-[#5B6B7A]">AUDIT TRAIL</span>
</div>
<div className="relative pl-5 space-y-3.5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#D7E0E7] font-metric-tabular text-[11px]">
<div className="relative">
<span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-[#15803D] ring-4 ring-white"></span>
<div className="font-semibold text-[#0D1D2A]">12:46 PM: Compliance Completed</div>
<div className="text-[#73777F] text-[10px]">Kernel Engine (Auto Evaluation)</div>
</div>
<div className="relative">
<span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-[#15803D] ring-4 ring-white"></span>
<div className="font-semibold text-[#0D1D2A]">12:54 PM: Evidence Completed</div>
<div className="text-[#73777F] text-[10px]">A. Kumar (TECH-409)</div>
</div>
<div className="relative">
<span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-[#15803D] ring-4 ring-white"></span>
<div className="font-semibold text-[#0D1D2A]">12:58 PM: Submitted for Review</div>
<div className="text-[#73777F] text-[10px]">A. Kumar (TECH-409)</div>
</div>
<div className="relative">
<span className="absolute -left-5 top-1 w-2.5 h-2.5 rounded-full bg-[#008B8B] ring-4 ring-white animate-pulse"></span>
<div className="font-semibold text-[#008B8B]">1:10 PM: Review Started</div>
<div className="text-[#5B6B7A] text-[10px]">R. Singh (Technical Lead)</div>
</div>
</div>
</div>
{/*  Review Readiness Checklist Panel  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm p-4 text-xs space-y-3">
<div className="flex items-center justify-between border-b border-[#EAEFF4] pb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[17px] text-[#15803D]">rule</span>
<span className="font-bold uppercase tracking-wider text-[#0B263D]">Review Readiness</span>
</div>
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#E1EFFF] text-[#123B5D] border border-[#A6CAF3]">READY</span>
</div>
<ul className="space-y-2 text-[#0D1D2A] text-[11px]">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[15px] text-[#15803D]">check_circle</span>
<span>Instrument information complete</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[15px] text-[#15803D]">check_circle</span>
<span>Required tests complete</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[15px] text-[#15803D]">check_circle</span>
<span>Compliance evaluation complete</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[15px] text-[#15803D]">check_circle</span>
<span>Required evidence present</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[15px] text-[#15803D]">check_circle</span>
<span>No unresolved validation errors</span>
</li>
</ul>
<div className="pt-2 border-t border-[#EAEFF4] flex items-center justify-between">
<span className="text-[11px] font-semibold text-[#5B6B7A]">Readiness Gate:</span>
<span className="px-2 py-0.5 rounded bg-[#008B8B]/10 text-[#008B8B] font-bold text-[10px] border border-[#008B8B]/30">
                READY FOR DECISION
              </span>
</div>
</div>
{/*  Rule Version & Immutability Notice  */}
<div className="bg-white border border-[#D7E0E7] rounded shadow-sm p-3.5 text-xs space-y-2 font-metric-tabular">
<div className="flex items-center justify-between text-[11px] font-semibold text-[#0B263D]">
<span>Rule Set: OIML R 76</span>
<span className="font-mono text-[#5B6B7A]">Version: R76-2026.1</span>
</div>
<div className="flex items-center gap-1.5 text-[11px] text-[#15803D] font-bold">
<span className="material-symbols-outlined text-[14px]">done</span>
<span>Compliance: Completed</span>
</div>
<p className="text-[10px] text-[#5B6B7A] bg-[#F8FAFC] p-2 rounded border border-[#EAEFF4] leading-relaxed">
<strong>Notice:</strong> Approval records the current version of this test record. Changes after approval require the configured revision workflow.
            </p>
</div>
</div>
</div>
</div>
{/*  5. Bottom Sticky Action Bar  */}
<footer className="sticky bottom-0 bg-white border-t border-[#D7E0E7] px-8 py-3 flex items-center justify-between shadow-[0_-2px_10px_rgba(11,38,61,0.06)] z-20">
<div className="flex items-center gap-3">
<button className="h-9 px-4 rounded text-xs font-semibold bg-white text-[#172B3A] border border-[#D7E0E7] hover:bg-[#F4F7F9] hover:border-[#123B5D] transition-colors flex items-center gap-1.5 shadow-xs" type="button">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
<span>Back to Evidence</span>
</button>
</div>
<div className="flex items-center gap-3">
<button className="h-9 px-3.5 rounded text-xs font-semibold bg-white text-[#172B3A] border border-[#D7E0E7] hover:bg-[#F4F7F9] transition-colors flex items-center gap-1.5 shadow-xs" type="button">
<span className="material-symbols-outlined text-[16px] text-[#5B6B7A]">save</span>
<span>Save Review Draft</span>
</button>
<button className="h-9 px-3.5 rounded text-xs font-semibold bg-white text-[#49607A] border border-[#D7E0E7] hover:bg-[#F4F7F9] transition-colors flex items-center gap-1.5 shadow-xs" type="button">
<span className="material-symbols-outlined text-[16px]">refresh</span>
<span>Request Changes</span>
</button>
<button className="h-9 px-3.5 rounded text-xs font-semibold bg-white text-[#B42318] border border-[#FECACA] hover:bg-[#FEF2F2] transition-colors flex items-center gap-1.5 shadow-xs" type="button">
<span className="material-symbols-outlined text-[16px]">close</span>
<span>Reject</span>
</button>
{/*  Primary CTA  */}
<button className="h-9 px-5 rounded text-xs font-bold bg-[#123B5D] text-white hover:bg-[#0B263D] active:bg-[#071826] transition-all flex items-center gap-2 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Approve &amp; Generate Report</span>
</button>
</div>
</footer>
</div>
</div>
</div>
</main>
    </div>
  );
}
