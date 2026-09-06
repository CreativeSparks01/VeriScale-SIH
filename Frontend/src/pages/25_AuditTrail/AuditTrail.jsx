import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function AuditTrail() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <aside className="fixed left-0 top-0 h-screen w-[248px] bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.08)]"><div className="flex flex-col flex-1 min-h-0"><div className="h-16 px-space-base flex items-center gap-space-sm bg-primary border-b border-primary-container/40"><img alt="Brand logo" className="h-8 w-auto object-contain" src="/src/assets/technical-emblem.svg"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-primary tracking-wider leading-none">VERISCALE</span><span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest mt-space-2xs leading-none">METROLOGY PLATFORM</span></div></div><div className="flex-1 overflow-y-auto px-space-sm py-space-md"><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Main</div><nav className="flex flex-col gap-space-2xs mb-space-lg" data-active-classes="bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="dashboard" href="#"><span>Dashboard</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="instruments" href="#"><span>Instruments</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="tests" href="#"><span>Tests</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="compliance" href="#"><span>Compliance</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="reports" href="#"><span>Reports</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="repository" href="#"><span>Repository</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="test-history" href="#"><span>Test History</span></a></nav><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Administration</div><nav className="flex flex-col gap-space-2xs" data-active-classes="bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-[#008B8B] before:rounded-r"><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="users" href="#"><span>Users</span></a><a aria-current="page" className="flex items-center px-space-md py-space-sm rounded-lg transition-colors bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-[#008B8B] before:rounded-r" data-path="audit-trail" href="#"><span>Audit Trail</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="settings" href="#"><span>Settings</span></a></nav></div></div><div className="p-space-base bg-primary border-t border-primary-container/40 flex items-center justify-between"><div className="flex items-center gap-space-md"><div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary font-label-md text-label-md">MS<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed ring-2 ring-primary"></span></div><div className="flex flex-col"><span className="font-label-md text-label-md text-on-primary leading-none">Manan Sharma</span><span className="font-label-sm text-label-sm text-primary-fixed-dim mt-space-2xs leading-none">Administrator</span></div></div><button aria-label="User options" className="text-primary-fixed-dim hover:text-on-primary transition-colors flex items-center" type="button"><span className="material-symbols-outlined text-[20px]">more_vert</span></button></div></aside><div className="pl-[248px]"><header className="fixed top-0 left-[248px] right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-xl border-b border-surface-variant flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="h-8 px-margin-desktop bg-primary text-on-primary flex items-center justify-between text-[11px] font-metric-tabular font-medium tracking-wide border-b border-primary-container/60"><div className="flex items-center gap-space-lg"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-[#6fd7d6] animate-pulse"></span><span className="text-[#8cf3f3]">COM1: 9600 BAUD [ONLINE]</span></div><span className="text-primary-fixed-dim/50">|</span><span className="text-primary-fixed tracking-wider uppercase">ISO/IEC 17025 ACCREDITED AUDIT LEDGER</span><span className="text-primary-fixed-dim/50">|</span><span className="text-tertiary-fixed font-semibold">SHA-256 IMMUTABLE LOG APPEND-ONLY</span></div><div className="flex items-center gap-space-md text-primary-fixed-dim"><span className="font-metric-tabular">SERVER: 06 SEP 2026 13:52:10 UTC | NODE-UK-04</span></div></div><div className="h-16 px-margin-desktop flex items-center justify-between"><div className="flex flex-col justify-center"><div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm mb-space-2xs"><span>Administration</span><span className="material-symbols-outlined text-[14px]">chevron_right</span><span className="text-on-surface font-medium">Audit Trail</span></div><div className="flex items-baseline gap-space-sm"><h1 className="font-headline-sm text-headline-sm text-on-surface leading-none">Audit Trail</h1><span className="font-body-sm text-body-sm text-secondary leading-none">Track changes and actions across controlled laboratory records.</span></div></div><div className="flex items-center gap-space-md"><button className="inline-flex items-center gap-space-xs px-space-md py-1.5 bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md text-label-md rounded transition-colors shadow-sm" type="button"><span className="material-symbols-outlined text-[18px] text-secondary">refresh</span><span>Refresh</span></button><button className="inline-flex items-center gap-space-xs px-space-md py-1.5 bg-primary text-on-primary hover:bg-[#0b263d] font-label-md text-label-md rounded transition-colors shadow-sm" type="button"><span className="material-symbols-outlined text-[18px] text-tertiary-fixed">download</span><span>Export Audit Log</span></button></div></div></header><main className="w-full pt-24 bg-surface min-h-screen px-margin-desktop py-space-xl"><div className="flex flex-col w-full">
{/*  1. Executive Audit Metric Summary Strip  */}
<section className="mb-space-lg">
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm">
{/*  Metric 1  */}
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Events Today</span>
<span className="material-symbols-outlined text-secondary text-[18px]">receipt_long</span>
</div>
<div className="mt-space-xs flex items-baseline gap-space-xs">
<span className="font-metric-display text-metric-display text-on-surface">184</span>
<span className="font-label-sm text-label-sm text-secondary">Append-only</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">Total ledger occurrences</p>
</div>
{/*  Metric 2  */}
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">User Actions</span>
<span className="material-symbols-outlined text-secondary text-[18px]">badge</span>
</div>
<div className="mt-space-xs flex items-baseline gap-space-xs">
<span className="font-metric-display text-metric-display text-on-surface">143</span>
<span className="font-label-sm text-label-sm text-secondary">77.7%</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">Operator &amp; reviewer initiated</p>
</div>
{/*  Metric 3  */}
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">System Events</span>
<span className="material-symbols-outlined text-secondary text-[18px]">precision_manufacturing</span>
</div>
<div className="mt-space-xs flex items-baseline gap-space-xs">
<span className="font-metric-display text-metric-display text-on-surface">41</span>
<span className="font-label-sm text-label-sm text-secondary">Rules &amp; Sync</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">Automated check sequences</p>
</div>
{/*  Metric 4 (Critical)  */}
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-error">Critical Events</span>
<span className="material-symbols-outlined text-error text-[18px]">gpp_maybe</span>
</div>
<div className="mt-space-xs flex items-baseline gap-space-xs">
<span className="font-metric-display text-metric-display text-error">3</span>
<span className="bg-error-container text-on-error-container px-1 py-0.5 rounded font-label-sm text-label-sm">Requires Attention</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">Auth warnings &amp; limit thresholds</p>
</div>
{/*  Metric 5  */}
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Pending Reviews</span>
<span className="material-symbols-outlined text-secondary text-[18px]">pending_actions</span>
</div>
<div className="mt-space-xs flex items-baseline gap-space-xs">
<span className="font-metric-display text-metric-display text-on-surface">7</span>
<span className="font-label-sm text-label-sm text-secondary">Awaiting Lead</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">Supervisory sign-off queue</p>
</div>
</div>
{/*  Ledger Integrity Banner  */}
<div className="mt-space-sm bg-surface-container-low px-space-md py-2 rounded flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px]">lock</span>
<span className="font-label-md text-label-md text-on-surface font-semibold tracking-wide">
          Append-Only Ledger • Tamper-Evident SHA-256 Chain
        </span>
<span className="hidden md:inline text-secondary text-body-sm">• Active Genesis Root: 0x82f0...394d • Block Sequence #401,924</span>
</div>
<div className="flex items-center gap-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Ledger Height: Sync Verified
        </span>
<span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">ISO/IEC 17025 §8.4</span>
</div>
</div>
</section>
{/*  2. Search and Category Filter Toolbar  */}
<section className="bg-surface-container-lowest p-space-md rounded shadow-sm mb-space-lg flex flex-col gap-space-md">
{/*  Category Pills & View Mode Toggle  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex flex-wrap items-center gap-1.5" id="categoryFilterContainer">
<button className="px-space-sm py-1 rounded text-label-sm font-label-sm bg-primary text-on-primary" type="button">ALL (184)</button>
<button className="px-space-sm py-1 rounded text-label-sm font-label-sm bg-surface-container-low text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" type="button">USER ACTIONS (143)</button>
<button className="px-space-sm py-1 rounded text-label-sm font-label-sm bg-surface-container-low text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" type="button">TESTING (68)</button>
<button className="px-space-sm py-1 rounded text-label-sm font-label-sm bg-surface-container-low text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" type="button">REPORTING (24)</button>
<button className="px-space-sm py-1 rounded text-label-sm font-label-sm bg-surface-container-low text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" type="button">COMPLIANCE (18)</button>
<button className="px-space-sm py-1 rounded text-label-sm font-label-sm bg-surface-container-low text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" type="button">DOCUMENTS (12)</button>
<button className="px-space-sm py-1 rounded text-label-sm font-label-sm bg-surface-container-low text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" type="button">ADMINISTRATION (9)</button>
<button className="px-space-sm py-1 rounded text-label-sm font-label-sm bg-surface-container-low text-secondary hover:bg-surface-container hover:text-on-surface transition-colors" type="button">SYSTEM (41)</button>
</div>
{/*  Table / Timeline Toggle  */}
<div className="flex items-center bg-surface-container-low p-0.5 rounded">
<button className="px-space-sm py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface shadow-sm flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">table_rows</span> Table
        </button>
<button className="px-space-sm py-1 rounded font-label-sm text-label-sm text-secondary hover:text-on-surface flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">timeline</span> Timeline
        </button>
</div>
</div>
{/*  Prominent Search Bar  */}
<div className="flex flex-col sm:flex-row items-center gap-space-sm">
<div className="relative flex-1 w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">search</span>
<input className="w-full pl-10 pr-24 py-2 bg-surface-container-lowest text-on-surface placeholder:text-secondary rounded text-body-md font-body-md shadow-sm focus:outline-none focus:bg-surface-container-low" placeholder="Search by user, record ID, serial number, hash, or regulatory clause..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="font-metric-tabular text-body-sm text-secondary px-1.5 py-0.5 bg-surface-container rounded">⌘K</span>
</div>
</div>
<div className="flex items-center gap-space-xs w-full sm:w-auto">
<button className="w-full sm:w-auto px-space-md py-2 bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1" type="button">
<span>Search</span>
</button>
<button className="px-space-sm py-2 bg-surface-container-low text-secondary hover:text-on-surface font-label-md text-label-md rounded transition-colors" title="Clear Search Query" type="button">
<span>Clear</span>
</button>
</div>
</div>
{/*  Granular Filters Bar  */}
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-space-xs pt-space-xs">
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-secondary uppercase mb-1">Date Range</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low text-on-surface py-1.5 px-2.5 pr-6 rounded font-body-sm text-body-sm truncate focus:outline-none focus:bg-surface-container">
<option>Last 7 Days (01–06 Sep)</option>
<option>Today (06 Sep 2026)</option>
<option>Last 30 Days</option>
<option>Custom ISO Window...</option>
</select>
<span className="material-symbols-outlined absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-[16px] text-secondary">expand_more</span>
</div>
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-secondary uppercase mb-1">User</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low text-on-surface py-1.5 px-2.5 pr-6 rounded font-body-sm text-body-sm truncate focus:outline-none focus:bg-surface-container">
<option>All Users</option>
<option>R. Singh (#R-109)</option>
<option>A. Kumar (#T-302)</option>
<option>M. Sharma (#A-001)</option>
<option>System Automation</option>
</select>
<span className="material-symbols-outlined absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-[16px] text-secondary">expand_more</span>
</div>
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-secondary uppercase mb-1">Role</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low text-on-surface py-1.5 px-2.5 pr-6 rounded font-body-sm text-body-sm truncate focus:outline-none focus:bg-surface-container">
<option>All Roles</option>
<option>Reviewer</option>
<option>Technician</option>
<option>Administrator</option>
<option>System Engine</option>
</select>
<span className="material-symbols-outlined absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-[16px] text-secondary">expand_more</span>
</div>
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-secondary uppercase mb-1">Action Type</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low text-on-surface py-1.5 px-2.5 pr-6 rounded font-body-sm text-body-sm truncate focus:outline-none focus:bg-surface-container">
<option>All Actions</option>
<option>Approved</option>
<option>Reviewed</option>
<option>Updated</option>
<option>Uploaded</option>
<option>Rule Evaluated</option>
<option>Rejected</option>
</select>
<span className="material-symbols-outlined absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-[16px] text-secondary">expand_more</span>
</div>
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-secondary uppercase mb-1">Record Type</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low text-on-surface py-1.5 px-2.5 pr-6 rounded font-body-sm text-body-sm truncate focus:outline-none focus:bg-surface-container">
<option>All Types</option>
<option>Report</option>
<option>Compliance</option>
<option>Test</option>
<option>Evidence</option>
<option>Instrument</option>
</select>
<span className="material-symbols-outlined absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-[16px] text-secondary">expand_more</span>
</div>
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-secondary uppercase mb-1">Severity</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-low text-on-surface py-1.5 px-2.5 pr-6 rounded font-body-sm text-body-sm truncate focus:outline-none focus:bg-surface-container">
<option>All Severities</option>
<option>Info</option>
<option>Normal</option>
<option>Warning</option>
<option>Critical</option>
</select>
<span className="material-symbols-outlined absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-[16px] text-secondary">expand_more</span>
</div>
</div>
<div className="flex items-end gap-1">
<button className="flex-1 py-1.5 px-2 bg-surface-container text-on-surface font-label-sm text-label-sm rounded hover:bg-surface-variant transition-colors flex items-center justify-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">tune</span> More
        </button>
<button className="py-1.5 px-2 text-secondary hover:text-on-surface font-label-sm text-label-sm rounded" title="Reset All Filters" type="button">
<span className="material-symbols-outlined text-[16px]">restart_alt</span>
</button>
</div>
</div>
</section>
{/*  3. Main Workspace: Two Column Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  Left Column: Main Audit Table (approx 72% / 8 or 9 cols)  */}
<div className="lg:col-span-8 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded shadow-sm overflow-hidden">
{/*  Table Control Header  */}
<div className="p-space-md bg-surface-container-lowest flex flex-wrap items-center justify-between gap-space-sm">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Audit Events</h2>
<p className="font-body-sm text-body-sm text-secondary">Chronological record of actions performed across VeriScale legal metrology platform.</p>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-metric-tabular text-body-sm text-secondary">Showing 1–8 of 184 events (Page 1 of 8)</span>
<button className="p-1 text-secondary hover:text-on-surface rounded hover:bg-surface-container-low transition-colors" title="Export current view to CSV/JSON" type="button">
<span className="material-symbols-outlined text-[18px]">file_download</span>
</button>
</div>
</div>
{/*  Dense Data Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-2.5 px-3">Timestamp (UTC)</th>
<th className="py-2.5 px-3">User &amp; Role</th>
<th className="py-2.5 px-3">Action</th>
<th className="py-2.5 px-3">Record Type</th>
<th className="py-2.5 px-3">Record ID</th>
<th className="py-2.5 px-3">Description</th>
<th className="py-2.5 px-3">Result</th>
<th className="py-2.5 px-3 text-right">Details</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low/60 text-on-surface" id="auditTableBody">
{/*  Row 1 (Active/ Row)  */}
<tr className="bg-surface-container-low/70 hover:bg-surface-container transition-colors cursor-pointer" data-event-id="EVT-20260906-0891">
<td className="py-2 px-3 font-metric-tabular text-body-sm whitespace-nowrap font-medium text-primary">
                  06 Sep 2026<br/><span className="text-secondary text-[11px]">13:28:14 UTC</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<div className="font-medium text-on-surface">R. Singh</div>
<div className="text-secondary text-[11px] font-metric-tabular">Reviewer (#R-109)</div>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="material-symbols-outlined text-[#15803D] text-[16px]">check_circle</span> Approved
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Report</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="font-metric-tabular font-semibold text-primary underline decoration-primary/40 underline-offset-2">TR-0091</span>
</td>
<td className="py-2 px-3 max-w-[220px] truncate text-on-surface-variant" title="Test report approved for release and SHA-256 sealed">
                  Test report approved for release and SHA-256 sealed
                </td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#F0FDF4] text-[#15803D] font-label-sm text-label-sm font-semibold">
                    ✓ SUCCESS
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap text-right">
<button className="text-primary font-label-md text-label-md font-semibold hover:underline inline-flex items-center gap-0.5" type="button">
                    Inspect <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer" data-event-id="EVT-20260906-0890">
<td className="py-2 px-3 font-metric-tabular text-body-sm whitespace-nowrap">
                  06 Sep 2026<br/><span className="text-secondary text-[11px]">13:20:05 UTC</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<div className="font-medium text-on-surface">R. Singh</div>
<div className="text-secondary text-[11px] font-metric-tabular">Reviewer (#R-109)</div>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="material-symbols-outlined text-secondary text-[16px]">find_in_page</span> Reviewed
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Compliance</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="font-metric-tabular font-medium text-secondary hover:text-primary">TEST-012</span>
</td>
<td className="py-2 px-3 max-w-[220px] truncate text-on-surface-variant" title="Compliance assessment reviewed against OIML R 76-1">
                  Compliance assessment reviewed against OIML R 76-1
                </td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#F0FDF4] text-[#15803D] font-label-sm text-label-sm font-semibold">
                    ✓ SUCCESS
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap text-right">
<button className="text-secondary hover:text-primary font-label-md text-label-md inline-flex items-center gap-0.5" type="button">
                    Inspect <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer" data-event-id="EVT-20260906-0889">
<td className="py-2 px-3 font-metric-tabular text-body-sm whitespace-nowrap">
                  06 Sep 2026<br/><span className="text-secondary text-[11px]">13:15:22 UTC</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<div className="font-medium text-on-surface">A. Kumar</div>
<div className="text-secondary text-[11px] font-metric-tabular">Technician (#T-302)</div>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="material-symbols-outlined text-secondary text-[16px]">upload_file</span> Uploaded
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Evidence</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="font-metric-tabular font-medium text-secondary hover:text-primary">TEST-012</span>
</td>
<td className="py-2 px-3 max-w-[220px] truncate text-on-surface-variant" title="CalibrationCertificate_E2_Weights.pdf attached to dossier">
                  CalibrationCertificate_E2_Weights.pdf attached to dossier
                </td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#F0FDF4] text-[#15803D] font-label-sm text-label-sm font-semibold">
                    ✓ SUCCESS
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap text-right">
<button className="text-secondary hover:text-primary font-label-md text-label-md inline-flex items-center gap-0.5" type="button">
                    Inspect <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer" data-event-id="EVT-20260906-0888">
<td className="py-2 px-3 font-metric-tabular text-body-sm whitespace-nowrap">
                  06 Sep 2026<br/><span className="text-secondary text-[11px]">13:05:49 UTC</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<div className="font-medium text-on-surface">System</div>
<div className="text-secondary text-[11px] font-metric-tabular">Rules Engine v4.1</div>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="material-symbols-outlined text-tertiary-container text-[16px]">verified</span> Rule Evaluated
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Compliance</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="font-metric-tabular font-medium text-secondary hover:text-primary">TEST-012</span>
</td>
<td className="py-2 px-3 max-w-[220px] truncate text-on-surface-variant" title="R76-2026.1 algorithmic evaluation completed (12/12 pass)">
                  R76-2026.1 algorithmic evaluation completed (12/12 pass)
                </td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#F0FDF4] text-[#15803D] font-label-sm text-label-sm font-semibold">
                    ✓ SUCCESS
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap text-right">
<button className="text-secondary hover:text-primary font-label-md text-label-md inline-flex items-center gap-0.5" type="button">
                    Inspect <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer" data-event-id="EVT-20260906-0887">
<td className="py-2 px-3 font-metric-tabular text-body-sm whitespace-nowrap">
                  06 Sep 2026<br/><span className="text-secondary text-[11px]">12:58:10 UTC</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<div className="font-medium text-on-surface">A. Kumar</div>
<div className="text-secondary text-[11px] font-metric-tabular">Technician (#T-302)</div>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="material-symbols-outlined text-secondary text-[16px]">edit</span> Updated
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Test</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="font-metric-tabular font-medium text-secondary hover:text-primary">TEST-012</span>
</td>
<td className="py-2 px-3 max-w-[220px] truncate text-on-surface-variant" title="Observation data updated (Step 3 load cell readout corrected)">
                  Observation data updated (Step 3 load cell readout corrected)
                </td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#F0FDF4] text-[#15803D] font-label-sm text-label-sm font-semibold">
                    ✓ SUCCESS
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap text-right">
<button className="text-secondary hover:text-primary font-label-md text-label-md inline-flex items-center gap-0.5" type="button">
                    Inspect <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</td>
</tr>
{/*  Row 6  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer" data-event-id="EVT-20260906-0886">
<td className="py-2 px-3 font-metric-tabular text-body-sm whitespace-nowrap">
                  06 Sep 2026<br/><span className="text-secondary text-[11px]">12:42:33 UTC</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<div className="font-medium text-on-surface">A. Kumar</div>
<div className="text-secondary text-[11px] font-metric-tabular">Technician (#T-302)</div>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="material-symbols-outlined text-[#15803D] text-[16px]">task_alt</span> Completed
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Test</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="font-metric-tabular font-medium text-secondary hover:text-primary">TEST-012</span>
</td>
<td className="py-2 px-3 max-w-[220px] truncate text-on-surface-variant" title="Environmental influence observations completed in chamber">
                  Environmental influence observations completed in chamber
                </td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#F0FDF4] text-[#15803D] font-label-sm text-label-sm font-semibold">
                    ✓ SUCCESS
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap text-right">
<button className="text-secondary hover:text-primary font-label-md text-label-md inline-flex items-center gap-0.5" type="button">
                    Inspect <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</td>
</tr>
{/*  Row 7  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer" data-event-id="EVT-20260906-0885">
<td className="py-2 px-3 font-metric-tabular text-body-sm whitespace-nowrap">
                  06 Sep 2026<br/><span className="text-secondary text-[11px]">11:32:18 UTC</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<div className="font-medium text-on-surface">M. Sharma</div>
<div className="text-secondary text-[11px] font-metric-tabular">Administrator (#A-001)</div>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface">
<span className="material-symbols-outlined text-secondary text-[16px]">edit_location</span> Updated
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Instrument</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="font-metric-tabular font-medium text-secondary hover:text-primary">WT100-2026-001</span>
</td>
<td className="py-2 px-3 max-w-[220px] truncate text-on-surface-variant" title="Instrument calibration station reassigned to Bay 3 Bench A">
                  Instrument calibration station reassigned to Bay 3 Bench A
                </td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#F0FDF4] text-[#15803D] font-label-sm text-label-sm font-semibold">
                    ✓ SUCCESS
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap text-right">
<button className="text-secondary hover:text-primary font-label-md text-label-md inline-flex items-center gap-0.5" type="button">
                    Inspect <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</td>
</tr>
{/*  Row 8 (Rejected / Warning Row)  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer bg-error-container/10" data-event-id="EVT-20260906-0884">
<td className="py-2 px-3 font-metric-tabular text-body-sm whitespace-nowrap">
                  06 Sep 2026<br/><span className="text-secondary text-[11px]">10:15:02 UTC</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<div className="font-medium text-on-surface">R. Singh</div>
<div className="text-secondary text-[11px] font-metric-tabular">Reviewer (#R-109)</div>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 font-label-md text-label-md text-error">
<span className="material-symbols-outlined text-error text-[16px]">cancel</span> Rejected
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Report</span>
</td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="font-metric-tabular font-medium text-secondary hover:text-primary">TR-0089</span>
</td>
<td className="py-2 px-3 max-w-[220px] truncate text-on-surface-variant" title="Report returned for correction (Zero tracking residual exceeded MPE)">
                  Report returned for correction (Zero tracking residual exceeded MPE)
                </td>
<td className="py-2 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#FFFBEB] text-[#B45309] font-label-sm text-label-sm font-semibold">
                    ⚠ ACTION REQUIRED
                  </span>
</td>
<td className="py-2 px-3 whitespace-nowrap text-right">
<button className="text-secondary hover:text-primary font-label-md text-label-md inline-flex items-center gap-0.5" type="button">
                    Inspect <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Pagination Controls  */}
<div className="p-space-md bg-surface-container-lowest flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm text-body-sm text-secondary">
<span>Rows per page:</span>
<select className="bg-surface-container-low text-on-surface py-1 px-2 rounded font-metric-tabular text-body-sm focus:outline-none">
<option>8</option>
<option >25</option>
<option>50</option>
<option>100</option>
</select>
<span className="font-metric-tabular">Showing 1–8 of 184</span>
</div>
<div className="flex items-center gap-1">
<button className="px-space-sm py-1 bg-surface-container-low text-secondary rounded font-label-sm text-label-sm hover:bg-surface-container hover:text-on-surface transition-colors disabled:opacity-40" disabled="" type="button">
              Previous
            </button>
<button className="w-7 h-7 bg-primary text-on-primary rounded font-label-sm text-label-sm font-semibold flex items-center justify-center" type="button">1</button>
<button className="w-7 h-7 bg-surface-container-low text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-container flex items-center justify-center" type="button">2</button>
<button className="w-7 h-7 bg-surface-container-low text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-container flex items-center justify-center" type="button">3</button>
<span className="text-secondary font-label-sm px-1">...</span>
<button className="w-7 h-7 bg-surface-container-low text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-container flex items-center justify-center" type="button">8</button>
<button className="px-space-sm py-1 bg-surface-container-low text-secondary rounded font-label-sm text-label-sm hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
              Next
            </button>
</div>
</div>
</div>
{/*  Governance & Compliance Notes Card  */}
<div className="bg-surface-container-low p-space-md rounded text-body-sm flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-[18px]">verified_user</span> Metrological Regulatory Compliance Declarations
        </div>
<ul className="list-disc list-inside text-secondary space-y-1 pl-1">
<li><strong className="text-on-surface font-medium">Segregation of Records:</strong> Audit records are maintained separately from editable record data and cannot be overwritten.</li>
<li><strong className="text-on-surface font-medium">Append-Only Invariant:</strong> Audit events are strictly append-only. Existing entries cannot be altered, reordered, or purged through the application interface.</li>
<li><strong className="text-on-surface font-medium">Access Control Standard:</strong> Audit visibility and export operations adhere to ISO/IEC 17025:2017 §8.4 and FDA 21 CFR Part 11 electronic records protocols.</li>
</ul>
</div>
</div>
{/*  Right Column: Contextual Event Details Panel (focused on Row 1)  */}
<div className="lg:col-span-4 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded shadow-sm overflow-hidden sticky top-28">
{/*  Details Header  */}
<div className="p-space-md bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Inspection View</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Audit Event Details</h3>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F0FDF4] text-[#15803D] font-label-sm text-label-sm font-semibold">
            ✓ SUCCESS
          </span>
</div>
<div className="p-space-md flex flex-col gap-space-md">
{/*  Event Core Metadata  */}
<div className="flex flex-col gap-space-xs bg-surface-container-lowest rounded">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Event ID</span>
<span className="font-metric-tabular text-body-sm font-semibold text-primary">EVT-20260906-0891</span>
</div>
<div className="grid grid-cols-2 gap-x-space-md gap-y-2 pt-1 font-body-sm">
<div>
<span className="text-secondary text-[11px] block uppercase">Action Performed</span>
<span className="font-medium text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[#15803D] text-[16px]">check_circle</span> Approved
                </span>
</div>
<div>
<span className="text-secondary text-[11px] block uppercase">Record Target</span>
<a className="font-metric-tabular font-semibold text-primary underline decoration-primary/40 hover:text-primary-container" href="#">
                  TR-0091 (Report)
                </a>
</div>
<div>
<span className="text-secondary text-[11px] block uppercase">Operator</span>
<span className="font-medium text-on-surface">R. Singh (#R-109)</span>
</div>
<div>
<span className="text-secondary text-[11px] block uppercase">Timestamp</span>
<span className="font-metric-tabular text-[12px] text-on-surface">06 Sep 2026 13:28:14</span>
</div>
<div className="col-span-2">
<span className="text-secondary text-[11px] block uppercase">Client Session &amp; Origin</span>
<span className="font-metric-tabular text-body-sm text-on-surface">192.168.4.112 • TLS 1.3 Verified • Terminal Bay-04A</span>
</div>
<div className="col-span-2">
<span className="text-secondary text-[11px] block uppercase">Source Module</span>
<span className="font-body-sm text-on-surface">Metrology Review &amp; Official Approval Workflow</span>
</div>
</div>
</div>
{/*  Metrological Calibration / Approval Block  */}
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">Verification Release Seal</span>
<span className="font-label-sm text-label-sm text-[#15803D] font-bold">6/6 CHECKS PASSED</span>
</div>
<div className="space-y-1.5 mt-1 font-body-sm text-body-sm">
<div className="flex justify-between">
<span className="text-secondary">Applied Rule Matrix:</span>
<span className="font-medium text-on-surface">OIML R 76-1:2006 (R76-2026.1)</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Bound Instrument:</span>
<span className="font-metric-tabular font-medium text-on-surface">WT100-2026-001 (Class III)</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Associated Test Run:</span>
<span className="font-metric-tabular font-semibold text-primary">TEST-012</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Supervisory Authority:</span>
<span className="font-medium text-on-surface">Legal Metrology Officer</span>
</div>
</div>
{/*  Cryptographic Digest Hash  */}
<div className="mt-space-xs pt-space-xs bg-surface-container-lowest p-2 rounded">
<span className="font-label-sm text-label-sm text-secondary uppercase block mb-1">SHA-256 Ledger Digest</span>
<code className="font-metric-tabular text-[11px] text-primary break-all block leading-tight">
                7f8a92bb9402ac37b01de49a1c0d8923bc49281a7b68e401
              </code>
<span className="text-[10px] text-[#15803D] font-semibold flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[12px]">verified</span> Immutable Ledger Block Confirmed
              </span>
</div>
</div>
{/*  Linked Field Change Record (Collapsible Demonstration)  */}
<div className="rounded bg-surface-container-low p-space-sm">
<div className="flex items-center justify-between cursor-pointer" id="toggleChangeDetails">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[18px]">history_edu</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Audited Value Delta (Step 3)</span>
</div>
<span className="material-symbols-outlined text-secondary text-[18px]">expand_less</span>
</div>
<div className="mt-space-sm pt-space-xs space-y-2 font-body-sm text-body-sm" id="changeDetailsBody">
<div className="flex justify-between text-[12px]">
<span className="text-secondary">Parameter Target:</span>
<span className="font-metric-tabular text-on-surface font-medium">Observed Indication @ 20.000 kg</span>
</div>
<div className="grid grid-cols-2 gap-2 bg-surface-container-lowest p-2 rounded">
<div>
<span className="text-[10px] uppercase text-secondary block">Previous Value</span>
<span className="font-metric-tabular text-[#B42318] line-through">20.005 kg</span>
</div>
<div>
<span className="text-[10px] uppercase text-secondary block">Corrected Value</span>
<span className="font-metric-tabular text-[#15803D] font-semibold">20.010 kg</span>
</div>
</div>
<div className="text-[12px]">
<span className="text-secondary block">Attributed Justification:</span>
<span className="text-on-surface italic">"Corrected observation entry from digital tare ledger readout buffer."</span>
</div>
<div className="text-[11px] text-secondary flex justify-between font-metric-tabular">
<span>Ref Event: EVT-0887</span>
<span>User: A. Kumar (12:58 UTC)</span>
</div>
</div>
</div>
{/*  Contextual Action Buttons  */}
<div className="flex flex-col gap-space-xs pt-space-xs">
<button className="w-full py-2 bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
<span>View Related Record (TR-0091)</span>
</button>
<button className="w-full py-2 bg-surface-container-low text-on-surface font-label-md text-label-md rounded hover:bg-surface-container transition-colors shadow-sm flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-secondary text-[18px]">download_for_offline</span>
<span>Download Cryptographic Event Proof</span>
</button>
</div>
<div className="text-center pt-space-2xs">
<span className="font-label-sm text-label-sm text-secondary inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[#15803D] text-[14px]">cloud_done</span> Central Metrology Archive Synced
            </span>
</div>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
}
