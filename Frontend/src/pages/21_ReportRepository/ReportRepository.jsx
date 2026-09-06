import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function ReportRepository() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full text-on-surface bg-background antialiased min-h-screen">
{/*  TOP METROLOGICAL TELEMETRY BANNER  */}
<div className="w-full bg-surface-container-low px-margin-desktop py-space-xs flex flex-wrap items-center justify-between gap-space-sm text-label-sm border-b border-outline-variant/30">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5 text-on-surface-variant font-medium">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary-fixed-variant animate-pulse"></span>
<span>COM1: 9600 BAUD [ONLINE]</span>
</div>
<span className="text-outline-variant">|</span>
<div className="flex items-center gap-1 text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-[14px]">verified</span>
<span>ISO/IEC 17025 ACCREDITED REPOSITORY</span>
</div>
<span className="text-outline-variant">|</span>
<div className="flex items-center gap-1 text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span>SHA-256 LEDGER SYNCED</span>
</div>
</div>
<div className="flex items-center gap-space-md font-metric-tabular text-on-surface-variant">
<span>SERVER: 06 SEP 2026 13:42:19 UTC</span>
<span className="bg-surface-container-high px-1.5 py-0.5 rounded text-primary text-[10px] tracking-wider font-bold">NODE-UK-04</span>
</div>
</div>
{/*  WORKSPACE WRAPPER: SIDEBAR + MAIN STAGE  */}
<div className="flex w-full flex-1 min-h-[calc(100vh-29px)]">
{/*  PERSISTENT SIDEBAR (~248px)  */}
<aside className="w-64 bg-primary shrink-0 flex flex-col justify-between select-none text-on-primary border-r border-primary-container">
<div>
{/*  BRANDING HEADER  */}
<div className="px-space-md py-space-lg flex items-center gap-space-sm border-b border-primary-container/60">
<div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-tertiary-fixed border border-tertiary-fixed/30">
<span className="material-symbols-outlined text-[20px]">scale</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-label-lg tracking-wide uppercase font-bold text-on-primary leading-tight">VERISCALE</span>
<span className="text-[10px] tracking-widest text-on-primary-container font-semibold uppercase">Metrology Platform</span>
</div>
</div>
{/*  NAVIGATION TREE  */}
<nav className="p-space-sm space-y-space-md">
<div>
<div className="px-space-sm py-1 text-[11px] font-bold uppercase tracking-wider text-on-primary-container/80">Main</div>
<ul className="mt-1 space-y-0.5">
<li>
<a className="flex items-center gap-2.5 px-space-sm py-2 rounded text-label-md text-on-primary/75 hover:bg-primary-container/40 hover:text-on-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">dashboard</span>
<span>Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-2.5 px-space-sm py-2 rounded text-label-md text-on-primary/75 hover:bg-primary-container/40 hover:text-on-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
<span>Instruments</span>
</a>
</li>
<li>
<a className="flex items-center gap-2.5 px-space-sm py-2 rounded text-label-md text-on-primary/75 hover:bg-primary-container/40 hover:text-on-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">biotech</span>
<span>Tests</span>
</a>
</li>
<li>
<a className="flex items-center gap-2.5 px-space-sm py-2 rounded text-label-md text-on-primary/75 hover:bg-primary-container/40 hover:text-on-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">policy</span>
<span>Compliance</span>
</a>
</li>
<li>
<a className="flex items-center gap-2.5 px-space-sm py-2 rounded text-label-md text-on-primary/75 hover:bg-primary-container/40 hover:text-on-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">analytics</span>
<span>Reports</span>
</a>
</li>
<li>
{/*  ACTIVE NAV ITEM  */}
<a className="flex items-center justify-between px-space-sm py-2 rounded bg-tertiary text-on-tertiary font-medium relative shadow-sm" href="#">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed">folder_special</span>
<span className="text-label-md tracking-tight">Repository</span>
</div>
<span className="w-1.5 h-4 rounded-full bg-tertiary-fixed-dim"></span>
</a>
</li>
<li>
<a className="flex items-center gap-2.5 px-space-sm py-2 rounded text-label-md text-on-primary/75 hover:bg-primary-container/40 hover:text-on-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">history</span>
<span>Test History</span>
</a>
</li>
</ul>
</div>
<div>
<div className="px-space-sm py-1 text-[11px] font-bold uppercase tracking-wider text-on-primary-container/80">Administration</div>
<ul className="mt-1 space-y-0.5">
<li>
<a className="flex items-center gap-2.5 px-space-sm py-2 rounded text-label-md text-on-primary/75 hover:bg-primary-container/40 hover:text-on-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">group</span>
<span>Users</span>
</a>
</li>
<li>
<a className="flex items-center gap-2.5 px-space-sm py-2 rounded text-label-md text-on-primary/75 hover:bg-primary-container/40 hover:text-on-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
<span>Audit Trail</span>
</a>
</li>
<li>
<a className="flex items-center gap-2.5 px-space-sm py-2 rounded text-label-md text-on-primary/75 hover:bg-primary-container/40 hover:text-on-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span>Settings</span>
</a>
</li>
</ul>
</div>
</nav>
</div>
{/*  BOTTOM USER PROFILE  */}
<div className="p-space-sm border-t border-primary-container/60 bg-primary/80">
<div className="flex items-center gap-2.5 p-1.5 rounded hover:bg-primary-container/40 transition-colors">
<div className="w-8 h-8 rounded bg-tertiary-fixed text-primary font-bold flex items-center justify-center text-label-md shrink-0 shadow-sm">
            MS
          </div>
<div className="flex flex-col min-w-0">
<span className="text-label-md font-medium text-on-primary truncate">Manan Sharma</span>
<span className="text-[11px] text-on-primary-container truncate">Lead Reviewer (Metrology)</span>
</div>
</div>
</div>
</aside>
{/*  CONTENT STAGE  */}
<div className="flex-1 flex flex-col min-w-0 bg-background">
{/*  HEADER ACTION BAR  */}
<header className="bg-surface-container-lowest border-b border-outline-variant/30 px-space-xl py-space-md flex flex-wrap items-center justify-between gap-space-md shadow-sm">
<div>
<div className="flex items-center gap-1.5 text-body-sm text-on-surface-variant font-label-md">
<span>Reports</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Repository</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary mt-0.5">Report Repository</h1>
<p className="text-body-sm text-on-surface-variant">Search, review, and retrieve accredited laboratory test reports &amp; verification dossiers.</p>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex items-center gap-1.5 px-3 py-2 text-label-lg font-medium text-primary bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low transition-colors rounded">
<span className="material-symbols-outlined text-[18px]">file_download</span>
<span>Export</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low transition-colors rounded" title="Refresh data">
<span className="material-symbols-outlined text-[18px]">refresh</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 text-label-lg font-medium text-on-primary bg-primary hover:bg-primary-container transition-colors rounded shadow-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>+ New Test</span>
</button>
</div>
</header>
{/*  MAIN SCROLLABLE BODY  */}
<div className="flex-1 p-space-lg space-y-space-md overflow-x-hidden">
{/*  1. REPOSITORY SUMMARY METRIC STRIP  */}
<section className="bg-surface-container-lowest p-space-md rounded border border-outline-variant/30 shadow-sm">
<div className="grid grid-cols-2 md:grid-cols-5 gap-space-md mb-space-sm">
{/*  Total Reports  */}
<div className="p-space-sm bg-surface-container-low/40 rounded border border-outline-variant/20">
<span className="text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Total Reports</span>
<div className="mt-1 flex items-baseline justify-between">
<span className="font-metric-display text-[26px] font-bold text-primary">1,248</span>
<span className="text-body-sm text-on-surface-variant font-label-md">100%</span>
</div>
</div>
{/*  Completed  */}
<div className="p-space-sm bg-surface-container-low/40 rounded border border-outline-variant/20">
<div className="flex items-center justify-between">
<span className="text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Completed</span>
<span className="material-symbols-outlined text-[14px] text-tertiary-fixed-variant">check_circle</span>
</div>
<div className="mt-1 flex items-baseline justify-between">
<span className="font-metric-display text-[26px] font-bold text-tertiary-container">980</span>
<span className="text-body-sm font-medium text-tertiary-container">78.5%</span>
</div>
</div>
{/*  In Process  */}
<div className="p-space-sm bg-surface-container-low/40 rounded border border-outline-variant/20">
<div className="flex items-center justify-between">
<span className="text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">In Process</span>
<span className="material-symbols-outlined text-[14px] text-on-tertiary-container">sync</span>
</div>
<div className="mt-1 flex items-baseline justify-between">
<span className="font-metric-display text-[26px] font-bold text-tertiary-container">215</span>
<span className="text-body-sm font-medium text-on-tertiary-container">17.2%</span>
</div>
</div>
{/*  Pending Review  */}
<div className="p-space-sm bg-surface-container-low/40 rounded border border-outline-variant/20">
<div className="flex items-center justify-between">
<span className="text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Pending Review</span>
<span className="material-symbols-outlined text-[14px] text-secondary">hourglass_empty</span>
</div>
<div className="mt-1 flex items-baseline justify-between">
<span className="font-metric-display text-[26px] font-bold text-secondary">53</span>
<span className="text-body-sm font-medium text-secondary">4.3%</span>
</div>
</div>
{/*  Failed / Rejected  */}
<div className="p-space-sm bg-surface-container-low/40 rounded border border-outline-variant/20">
<div className="flex items-center justify-between">
<span className="text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Failed / Rejected</span>
<span className="material-symbols-outlined text-[14px] text-error">cancel</span>
</div>
<div className="mt-1 flex items-baseline justify-between">
<span className="font-metric-display text-[26px] font-bold text-error">31</span>
<span className="text-body-sm font-medium text-error">2.5%</span>
</div>
</div>
</div>
{/*  Micro Proportion Distribution Bar  */}
<div className="w-full flex flex-col gap-1">
<div className="w-full h-2 rounded overflow-hidden flex bg-surface-container-high">
<div className="h-full bg-tertiary-container" style={{"width":"78.53%"}} title="Completed: 980 (78.5%)"></div>
<div className="h-full bg-tertiary-fixed-dim" style={{"width":"17.23%"}} title="In Process: 215 (17.2%)"></div>
<div className="h-full bg-secondary" style={{"width":"4.24%"}} title="Pending Review: 53 (4.2%)"></div>
<div className="h-full bg-error" style={{"width":"2.48%"}} title="Failed: 31 (2.5%)"></div>
</div>
<div className="flex justify-between items-center text-[10px] text-on-surface-variant font-metric-tabular">
<span>LEDGER COMPOSITION: 1,248 CERTIFICATES</span>
<span>CALIBRATION CYCLE: 2026-Q3</span>
</div>
</div>
</section>
{/*  2. GLOBAL REPOSITORY SEARCH BAR  */}
<section className="bg-surface-container-lowest p-space-md rounded border border-outline-variant/30 shadow-sm">
<div className="flex items-center gap-2">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3 top-2.5 text-[20px] text-outline">search</span>
<input className="w-full pl-10 pr-10 py-2 bg-surface-container-lowest border border-outline-variant text-body-md text-on-surface rounded focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container font-body-md" placeholder="Search by report ID, manufacturer, model, serial number, or technician..." type="text" defaultValue="WT-100 ABC WeighTech"/>
<button className="absolute right-3 top-2.5 text-outline hover:text-on-surface">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
<button className="px-5 py-2 bg-primary text-on-primary font-medium text-label-lg rounded hover:bg-primary-container transition-colors shrink-0">
              Search
            </button>
</div>
<p className="text-[11px] text-on-surface-variant mt-1.5 flex items-center gap-1 font-body-sm">
<span className="material-symbols-outlined text-[13px]">format_image_left</span>
            Search across report metadata, instrument configurations, and cryptographic verification logs.
          </p>
</section>
{/*  3. FILTER TOOLBAR & ACTIVE TOKENS  */}
<section className="bg-surface-container-lowest p-space-sm rounded border border-outline-variant/30 shadow-sm space-y-space-sm">
<div className="flex flex-wrap items-center gap-2 text-label-sm">
{/*  Status Dropdown  */}
<div className="flex items-center gap-1 px-2.5 py-1.5 bg-surface-container-low rounded border border-outline-variant/40">
<span className="text-on-surface-variant font-medium">Status:</span>
<select className="bg-transparent text-primary font-semibold focus:outline-none cursor-pointer">
<option>All Statuses</option>
<option >Approved</option>
<option>Completed</option>
<option>In Process</option>
<option>Pending Review</option>
<option>Failed / Rejected</option>
</select>
</div>
{/*  Manufacturer Dropdown  */}
<div className="flex items-center gap-1 px-2.5 py-1.5 bg-surface-container-low rounded border border-outline-variant/40">
<span className="text-on-surface-variant font-medium">Manufacturer:</span>
<select className="bg-transparent text-primary font-semibold focus:outline-none cursor-pointer">
<option>All</option>
<option >ABC WeighTech</option>
<option>XYZ Scales</option>
<option>Precision Instruments</option>
<option>MetroScale Systems</option>
</select>
</div>
{/*  Instrument Type Dropdown  */}
<div className="flex items-center gap-1 px-2.5 py-1.5 bg-surface-container-low rounded border border-outline-variant/40">
<span className="text-on-surface-variant font-medium">Type:</span>
<select className="bg-transparent text-primary font-semibold focus:outline-none cursor-pointer">
<option >All Types</option>
<option>Platform Scale</option>
<option>Bench Scale</option>
<option>Precision Balance</option>
<option>Crane Scale</option>
</select>
</div>
{/*  Date Range Dropdown  */}
<div className="flex items-center gap-1 px-2.5 py-1.5 bg-surface-container-low rounded border border-outline-variant/40">
<span className="text-on-surface-variant font-medium">Date:</span>
<select className="bg-transparent text-primary font-semibold focus:outline-none cursor-pointer">
<option>Today</option>
<option>Last 7 Days</option>
<option >Last 30 Days</option>
<option>This Month</option>
<option>Custom Range</option>
</select>
</div>
{/*  Technician Dropdown  */}
<div className="flex items-center gap-1 px-2.5 py-1.5 bg-surface-container-low rounded border border-outline-variant/40">
<span className="text-on-surface-variant font-medium">Technician:</span>
<select className="bg-transparent text-primary font-semibold focus:outline-none cursor-pointer">
<option >All Technicians</option>
<option>A. Kumar</option>
<option>S. Gupta</option>
<option>M. Verma</option>
<option>R. Singh</option>
</select>
</div>
{/*  Reviewer Dropdown  */}
<div className="flex items-center gap-1 px-2.5 py-1.5 bg-surface-container-low rounded border border-outline-variant/40">
<span className="text-on-surface-variant font-medium">Reviewer:</span>
<select className="bg-transparent text-primary font-semibold focus:outline-none cursor-pointer">
<option >All Reviewers</option>
<option>R. Singh</option>
<option>M. Sharma</option>
</select>
</div>
{/*  Rule Version Dropdown  */}
<div className="flex items-center gap-1 px-2.5 py-1.5 bg-surface-container-low rounded border border-outline-variant/40">
<span className="text-on-surface-variant font-medium">Rule Version:</span>
<select className="bg-transparent text-primary font-semibold focus:outline-none cursor-pointer">
<option >All Versions</option>
<option>R76-2026.1</option>
<option>R76-2020.2</option>
</select>
</div>
<div className="flex items-center gap-2 ml-auto">
<button className="flex items-center gap-1 text-primary hover:text-primary-container font-medium text-label-sm">
<span className="material-symbols-outlined text-[16px]">tune</span>
<span>More Filters</span>
</button>
<span className="text-outline-variant">|</span>
<button className="text-on-surface-variant hover:text-error text-label-sm">Clear</button>
</div>
</div>
{/*  Active Filter Chips  */}
<div className="flex flex-wrap items-center gap-2 pt-1 border-t border-outline-variant/20">
<span className="text-[11px] uppercase font-bold text-on-surface-variant tracking-wider">Active:</span>
<div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-primary text-label-sm border border-secondary-container">
<span>Status: <strong>Approved</strong></span>
<button className="text-on-surface-variant hover:text-error flex items-center"><span className="material-symbols-outlined text-[14px]">close</span></button>
</div>
<div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-primary text-label-sm border border-secondary-container">
<span>Manufacturer: <strong>ABC WeighTech</strong></span>
<button className="text-on-surface-variant hover:text-error flex items-center"><span className="material-symbols-outlined text-[14px]">close</span></button>
</div>
<div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-primary text-label-sm border border-secondary-container">
<span>Date: <strong>Last 30 Days</strong></span>
<button className="text-on-surface-variant hover:text-error flex items-center"><span className="material-symbols-outlined text-[14px]">close</span></button>
</div>
<button className="text-[11px] text-error hover:underline ml-1 font-medium">Clear all</button>
</div>
</section>
{/*  4. TWO-COLUMN WORKSTATION LAYOUT (TABLE + INSPECTOR PANEL)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
{/*  LEFT / CENTER (~72% - 8-9 cols)  */}
<div className="lg:col-span-8 flex flex-col space-y-2">
{/*  CONTEXTUAL SELECTION BAR  */}
<div className="bg-surface-container-high px-space-md py-2 rounded flex flex-wrap items-center justify-between gap-2 text-label-sm border border-secondary-container">
<div className="flex items-center gap-2">
<span className="flex items-center justify-center w-5 h-5 rounded bg-primary text-on-primary font-bold text-[11px]">3</span>
<span className="font-semibold text-primary">Reports </span>
<span className="text-on-surface-variant text-[11px]">(TR-0091, TR-0087, TR-0086)</span>
</div>
<div className="flex items-center gap-1.5">
<button className="px-2.5 py-1 rounded bg-surface-container-lowest text-primary border border-outline-variant hover:bg-surface-container-low font-medium text-[12px] flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">folder_zip</span>
<span>Download PDF (.zip)</span>
</button>
<button className="px-2.5 py-1 rounded bg-surface-container-lowest text-primary border border-outline-variant hover:bg-surface-container-low font-medium text-[12px] flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">table_view</span>
<span>Export CSV</span>
</button>
<button className="px-2.5 py-1 rounded bg-surface-container-lowest text-primary border border-outline-variant hover:bg-surface-container-low font-medium text-[12px] flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">person_add</span>
<span>Assign Reviewer</span>
</button>
<button className="px-2.5 py-1 rounded bg-surface-container-lowest text-error border border-outline-variant hover:bg-error-container/30 font-medium text-[12px] flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">archive</span>
<span>Archive</span>
</button>
</div>
</div>
{/*  MAIN REPORTS DATA TABLE  */}
<div className="bg-surface-container-lowest rounded border border-outline-variant/40 overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left text-body-sm border-collapse font-body-md">
<thead>
<tr className="bg-surface-container-low/60 text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant border-b border-outline-variant/30 select-none">
<th className="p-2.5 w-8 text-center">
<input defaultChecked="" className="rounded border-outline text-primary focus:ring-0" type="checkbox"/>
</th>
<th className="p-2.5 hover:text-primary cursor-pointer">
<div className="flex items-center gap-1">
<span>Report ID</span>
<span className="material-symbols-outlined text-[13px]">unfold_more</span>
</div>
</th>
<th className="p-2.5 hover:text-primary cursor-pointer">
<div className="flex items-center gap-1">
<span>Instrument &amp; Model</span>
<span className="material-symbols-outlined text-[13px]">unfold_more</span>
</div>
</th>
<th className="p-2.5">Serial Number</th>
<th className="p-2.5">Manufacturer</th>
<th className="p-2.5 hover:text-primary cursor-pointer">
<div className="flex items-center gap-1">
<span>Test Date</span>
<span className="material-symbols-outlined text-[13px] text-primary">arrow_downward</span>
</div>
</th>
<th className="p-2.5">Tech</th>
<th className="p-2.5">Status</th>
<th className="p-2.5">Rule</th>
<th className="p-2.5 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 font-metric-tabular">
{/*  ROW 1: TR-0091 ( & INSPECTED)  */}
<tr className="bg-surface-container-low/50 hover:bg-surface-container-low transition-colors border-l-4 border-l-primary">
<td className="p-2.5 text-center">
<input defaultChecked="" className="rounded border-outline text-primary focus:ring-0" type="checkbox"/>
</td>
<td className="p-2.5 font-bold text-primary">
<span className="hover:underline cursor-pointer">TR-0091</span>
</td>
<td className="p-2.5">
<div className="font-semibold text-on-surface">WT-100</div>
<div className="text-[11px] text-on-surface-variant font-body-sm">Platform Scale (Class III)</div>
</td>
<td className="p-2.5 text-on-surface font-metric-tabular">WT100-2026-001</td>
<td className="p-2.5 text-on-surface-variant font-body-sm">ABC WeighTech</td>
<td className="p-2.5 whitespace-nowrap">06 Sep 2026</td>
<td className="p-2.5 whitespace-nowrap font-body-sm">A. Kumar</td>
<td className="p-2.5 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-surface-container text-tertiary-container border border-tertiary-fixed">
<span className="material-symbols-outlined text-[13px]">check_circle</span>
<span>Approved</span>
</span>
</td>
<td className="p-2.5 text-[11px] text-on-surface-variant">R76-2026.1</td>
<td className="p-2.5 text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2 py-1 bg-surface-container text-primary text-[11px] font-medium rounded hover:bg-surface-container-high border border-outline-variant/30">View</button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">download</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">more_vert</span></button>
</div>
</td>
</tr>
{/*  ROW 2: TR-0090  */}
<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="p-2.5 text-center">
<input className="rounded border-outline text-primary focus:ring-0" type="checkbox"/>
</td>
<td className="p-2.5 font-bold text-primary">
<span className="hover:underline cursor-pointer">TR-0090</span>
</td>
<td className="p-2.5">
<div className="font-semibold text-on-surface">PS-500</div>
<div className="text-[11px] text-on-surface-variant font-body-sm">Bench Scale (Class III)</div>
</td>
<td className="p-2.5 text-on-surface font-metric-tabular">PS500-2026-145</td>
<td className="p-2.5 text-on-surface-variant font-body-sm">XYZ Scales</td>
<td className="p-2.5 whitespace-nowrap">06 Sep 2026</td>
<td className="p-2.5 whitespace-nowrap font-body-sm">R. Singh</td>
<td className="p-2.5 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-surface-container-high text-secondary border border-secondary-fixed">
<span className="material-symbols-outlined text-[13px]">hourglass_top</span>
<span>Pending Review</span>
</span>
</td>
<td className="p-2.5 text-[11px] text-on-surface-variant">R76-2026.1</td>
<td className="p-2.5 text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2 py-1 bg-primary text-on-primary text-[11px] font-medium rounded hover:bg-primary-container">Review</button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">more_vert</span></button>
</div>
</td>
</tr>
{/*  ROW 3: TR-0089  */}
<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="p-2.5 text-center">
<input className="rounded border-outline text-primary focus:ring-0" type="checkbox"/>
</td>
<td className="p-2.5 font-bold text-primary">
<span className="hover:underline cursor-pointer">TR-0089</span>
</td>
<td className="p-2.5">
<div className="font-semibold text-on-surface">WT-200</div>
<div className="text-[11px] text-on-surface-variant font-body-sm">Platform Scale (Class III)</div>
</td>
<td className="p-2.5 text-on-surface font-metric-tabular">WT200-2026-233</td>
<td className="p-2.5 text-on-surface-variant font-body-sm">ABC WeighTech</td>
<td className="p-2.5 whitespace-nowrap">05 Sep 2026</td>
<td className="p-2.5 whitespace-nowrap font-body-sm">S. Gupta</td>
<td className="p-2.5 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-error-container text-on-error-container border border-error">
<span className="material-symbols-outlined text-[13px]">cancel</span>
<span>Failed</span>
</span>
</td>
<td className="p-2.5 text-[11px] text-on-surface-variant">R76-2026.1</td>
<td className="p-2.5 text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2 py-1 bg-surface-container text-error text-[11px] font-medium rounded hover:bg-surface-container-high border border-outline-variant/30">Audit</button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">more_vert</span></button>
</div>
</td>
</tr>
{/*  ROW 4: TR-0088  */}
<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="p-2.5 text-center">
<input className="rounded border-outline text-primary focus:ring-0" type="checkbox"/>
</td>
<td className="p-2.5 font-bold text-primary">
<span className="hover:underline cursor-pointer">TR-0088</span>
</td>
<td className="p-2.5">
<div className="font-semibold text-on-surface">PI-50</div>
<div className="text-[11px] text-on-surface-variant font-body-sm">Precision Balance (Class II)</div>
</td>
<td className="p-2.5 text-on-surface font-metric-tabular">PI50-2025-083</td>
<td className="p-2.5 text-on-surface-variant font-body-sm">Precision Instruments</td>
<td className="p-2.5 whitespace-nowrap">05 Sep 2026</td>
<td className="p-2.5 whitespace-nowrap font-body-sm">M. Verma</td>
<td className="p-2.5 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-surface-container-high text-tertiary-container border border-outline-variant">
<span className="material-symbols-outlined text-[13px] animate-spin">refresh</span>
<span>In Process</span>
</span>
</td>
<td className="p-2.5 text-[11px] text-on-surface-variant">R76-2026.1</td>
<td className="p-2.5 text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2 py-1 bg-surface-container text-tertiary-container text-[11px] font-medium rounded hover:bg-surface-container-high border border-outline-variant/30">Continue</button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">more_vert</span></button>
</div>
</td>
</tr>
{/*  ROW 5: TR-0087  */}
<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="p-2.5 text-center">
<input defaultChecked="" className="rounded border-outline text-primary focus:ring-0" type="checkbox"/>
</td>
<td className="p-2.5 font-bold text-primary">
<span className="hover:underline cursor-pointer">TR-0087</span>
</td>
<td className="p-2.5">
<div className="font-semibold text-on-surface">PS-100</div>
<div className="text-[11px] text-on-surface-variant font-body-sm">Bench Scale (Class III)</div>
</td>
<td className="p-2.5 text-on-surface font-metric-tabular">PS100-2026-018</td>
<td className="p-2.5 text-on-surface-variant font-body-sm">XYZ Scales</td>
<td className="p-2.5 whitespace-nowrap">04 Sep 2026</td>
<td className="p-2.5 whitespace-nowrap font-body-sm">A. Kumar</td>
<td className="p-2.5 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-surface-container text-tertiary-container border border-outline-variant">
<span className="material-symbols-outlined text-[13px]">task_alt</span>
<span>Completed</span>
</span>
</td>
<td className="p-2.5 text-[11px] text-on-surface-variant">R76-2026.1</td>
<td className="p-2.5 text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2 py-1 bg-surface-container text-primary text-[11px] font-medium rounded hover:bg-surface-container-high border border-outline-variant/30">View</button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">download</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">more_vert</span></button>
</div>
</td>
</tr>
{/*  ROW 6: TR-0086  */}
<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="p-2.5 text-center">
<input defaultChecked="" className="rounded border-outline text-primary focus:ring-0" type="checkbox"/>
</td>
<td className="p-2.5 font-bold text-primary">
<span className="hover:underline cursor-pointer">TR-0086</span>
</td>
<td className="p-2.5">
<div className="font-semibold text-on-surface">MS-1000</div>
<div className="text-[11px] text-on-surface-variant font-body-sm">Crane Scale (Class III)</div>
</td>
<td className="p-2.5 text-on-surface font-metric-tabular">MS1000-2026-041</td>
<td className="p-2.5 text-on-surface-variant font-body-sm">MetroScale Systems</td>
<td className="p-2.5 whitespace-nowrap">03 Sep 2026</td>
<td className="p-2.5 whitespace-nowrap font-body-sm">R. Singh</td>
<td className="p-2.5 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-surface-container text-tertiary-container border border-tertiary-fixed">
<span className="material-symbols-outlined text-[13px]">check_circle</span>
<span>Approved</span>
</span>
</td>
<td className="p-2.5 text-[11px] text-on-surface-variant">R76-2026.1</td>
<td className="p-2.5 text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2 py-1 bg-surface-container text-primary text-[11px] font-medium rounded hover:bg-surface-container-high border border-outline-variant/30">View</button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">download</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">more_vert</span></button>
</div>
</td>
</tr>
{/*  ROW 7: TR-0085  */}
<tr className="hover:bg-surface-container-low/30 transition-colors opacity-80">
<td className="p-2.5 text-center">
<input className="rounded border-outline text-primary focus:ring-0" type="checkbox"/>
</td>
<td className="p-2.5 font-bold text-on-surface-variant">
<span className="hover:underline cursor-pointer">TR-0085</span>
</td>
<td className="p-2.5">
<div className="font-semibold text-on-surface">WT-100</div>
<div className="text-[11px] text-on-surface-variant font-body-sm">Platform Scale (Class III)</div>
</td>
<td className="p-2.5 text-on-surface font-metric-tabular">WT100-2026-009</td>
<td className="p-2.5 text-on-surface-variant font-body-sm">ABC WeighTech</td>
<td className="p-2.5 whitespace-nowrap">02 Sep 2026</td>
<td className="p-2.5 whitespace-nowrap font-body-sm">A. Kumar</td>
<td className="p-2.5 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-surface-container-high text-on-surface-variant border border-outline-variant">
<span className="material-symbols-outlined text-[13px]">inventory_2</span>
<span>Archived</span>
</span>
</td>
<td className="p-2.5 text-[11px] text-on-surface-variant">R76-2020.2</td>
<td className="p-2.5 text-right whitespace-nowrap">
<div className="flex items-center justify-end gap-1">
<button className="px-2 py-1 bg-surface-container text-primary text-[11px] font-medium rounded hover:bg-surface-container-high border border-outline-variant/30">Restore</button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">visibility</span></button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded"><span className="material-symbols-outlined text-[16px]">more_vert</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  PAGINATION STRIP  */}
<div className="p-space-sm bg-surface-container-low/40 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-space-sm text-label-sm">
<div className="flex items-center gap-space-md text-on-surface-variant">
<span>Showing <strong>1–7</strong> of <strong>1,248</strong> reports</span>
<div className="flex items-center gap-1">
<span>Rows per page:</span>
<select className="bg-surface-container-lowest border border-outline-variant/50 rounded px-1.5 py-0.5 text-primary font-semibold">
<option >10</option>
<option>25</option>
<option>50</option>
<option>100</option>
</select>
</div>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-1 rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-low disabled:opacity-50" disabled="">
<span className="material-symbols-outlined text-[16px] align-middle">chevron_left</span> Previous
                  </button>
<button className="w-7 h-7 rounded bg-primary text-on-primary font-bold text-center">1</button>
<button className="w-7 h-7 rounded border border-outline-variant hover:bg-surface-container-low text-on-surface font-medium text-center">2</button>
<button className="w-7 h-7 rounded border border-outline-variant hover:bg-surface-container-low text-on-surface font-medium text-center">3</button>
<span className="px-1 text-on-surface-variant">…</span>
<button className="w-8 h-7 rounded border border-outline-variant hover:bg-surface-container-low text-on-surface font-medium text-center">125</button>
<button className="px-2 py-1 rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-low">
                    Next <span className="material-symbols-outlined text-[16px] align-middle">chevron_right</span>
</button>
</div>
</div>
</div>
{/*  REGULATORY RECORD NOTICE  */}
<div className="p-space-sm bg-surface-container-low/50 rounded border border-outline-variant/20 flex items-start gap-2 text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">verified_user</span>
<span><strong>Audit Compliance:</strong> Reports in this repository are digitally stamped and immutable according to OIML D 31 &amp; WELMEC 7.2 software verification criteria. Periodic cryptographic hashing run at 00:00 UTC daily.</span>
</div>
</div>
{/*  RIGHT COLUMN (~28% - 3-4 cols) - REPORT DETAILS INSPECTOR PANEL  */}
<div className="lg:col-span-4 flex flex-col space-y-space-md">
<div className="bg-surface-container-lowest rounded border border-outline-variant/40 shadow-sm overflow-hidden">
{/*  INSPECTOR HEADER  */}
<div className="bg-surface-container-low/60 p-space-md border-b border-outline-variant/30 flex items-center justify-between">
<div>
<span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant"> Dossier</span>
<h2 className="text-headline-sm font-bold text-primary flex items-center gap-1.5">
<span>Report: TR-0091</span>
</h2>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-surface-container text-tertiary-container border border-tertiary-fixed">
<span className="material-symbols-outlined text-[12px]">verified</span>
<span>Approved v1.0</span>
</span>
</div>
{/*  INSPECTOR ACTION BAR  */}
<div className="p-space-sm border-b border-outline-variant/20 flex items-center gap-1.5 bg-surface-container-lowest">
<button className="flex-1 py-1.5 px-2 bg-primary hover:bg-primary-container text-on-primary rounded text-label-sm font-semibold flex items-center justify-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
<span>Open Full Report</span>
</button>
<button className="py-1.5 px-2.5 bg-surface-container hover:bg-surface-container-high text-primary rounded border border-outline-variant/30 text-label-sm font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
<span>PDF</span>
</button>
<button className="p-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary rounded border border-outline-variant/30" title="Print Dossier">
<span className="material-symbols-outlined text-[16px]">print</span>
</button>
</div>
<div className="p-space-md space-y-space-md font-metric-tabular">
{/*  TECHNICAL SPECIFICATIONS CARD  */}
<div className="space-y-space-xs">
<span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">straighten</span>
                    Technical Specifications
                  </span>
<div className="bg-surface-container-low/30 rounded p-space-sm space-y-1.5 border border-outline-variant/20 text-body-sm">
<div className="flex justify-between">
<span className="text-on-surface-variant font-body-sm">Test Procedure ID:</span>
<span className="font-semibold text-primary">TEST-012</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant font-body-sm">Instrument:</span>
<span className="font-medium text-on-surface">ABC WeighTech WT-100</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant font-body-sm">Serial Number:</span>
<span className="font-metric-tabular font-medium text-on-surface">WT100-2026-001</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant font-body-sm">Capacity (Max / Min):</span>
<span className="font-medium text-on-surface">100.000 kg / 20 g</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant font-body-sm">Scale Interval (e):</span>
<span className="font-medium text-on-surface">10 g <span className="text-[11px] text-on-surface-variant">(Class III)</span></span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant font-body-sm">Accredited Lab:</span>
<span className="font-medium text-on-surface">XYZ Metrology Lab</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant font-body-sm">Testing Location:</span>
<span className="font-medium text-on-surface">Bay 3, Cambridgeshire</span>
</div>
</div>
</div>
{/*  TRACEABILITY & SIGN-OFF CARD  */}
<div className="space-y-space-xs">
<span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">history_edu</span>
                    Traceability &amp; Regulatory Seal
                  </span>
<div className="bg-surface-container-low/30 rounded p-space-sm space-y-2 border border-outline-variant/20 text-body-sm">
<div className="flex items-center justify-between">
<span className="text-on-surface-variant font-body-sm">Lead Technician:</span>
<span className="font-medium text-on-surface">A. Kumar <span className="text-[11px] text-on-surface-variant font-metric-tabular">(TECH-409)</span></span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant font-body-sm">Reviewing Signatory:</span>
<span className="font-semibold text-primary">R. Singh <span className="text-[11px] text-on-surface-variant font-normal">(Quality Lead)</span></span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant font-body-sm">Execution Date:</span>
<span className="font-medium text-on-surface">06 Sep 2026</span>
</div>
<div className="flex items-center justify-between">
<span className="text-on-surface-variant font-body-sm">Approval Stamp:</span>
<span className="font-metric-tabular font-medium text-tertiary-container">06 Sep 2026 • 13:14 UTC</span>
</div>
{/*  Cryptographic Hash Box  */}
<div className="p-2 bg-surface-container-lowest rounded border border-outline-variant/30 space-y-1">
<div className="flex items-center justify-between text-[11px]">
<span className="text-on-surface-variant font-semibold uppercase">SHA-256 Checksum</span>
<span className="text-tertiary-container font-bold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[13px]">verified</span> Validated
                        </span>
</div>
<div className="text-[10px] font-mono break-all text-on-surface bg-surface-container-low/60 p-1 rounded select-all">
                        7f8a92bb9402ac37b01de49479b183621415f01e8932faec88b901a0521be401
                      </div>
</div>
<div className="flex items-center justify-between text-[11px]">
<span className="text-on-surface-variant">Rule Scheme:</span>
<span className="font-semibold text-primary">OIML R 76-1:2006 (R76-2026.1)</span>
</div>
<div className="flex items-center justify-between text-[11px]">
<span className="text-on-surface-variant">Dossier Bindings:</span>
<span className="font-semibold text-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">attachment</span>
                        6 / 6 Attachments bound
                      </span>
</div>
</div>
</div>
{/*  RECENTLY ACCESSED MICRO-LIST  */}
<div className="space-y-space-xs pt-1 border-t border-outline-variant/20">
<span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">schedule</span>
                    Recently Accessed
                  </span>
<ul className="space-y-1 text-[12px] font-body-sm">
<li className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container-low/60 transition-colors cursor-pointer">
<div className="flex items-center gap-1.5">
<span className="font-semibold text-primary">TR-0091</span>
<span className="text-on-surface-variant">(WT-100)</span>
</div>
<span className="text-[11px] text-on-surface-variant font-metric-tabular">4m ago</span>
</li>
<li className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container-low/60 transition-colors cursor-pointer">
<div className="flex items-center gap-1.5">
<span className="font-semibold text-primary">TR-0087</span>
<span className="text-on-surface-variant">(PS-100)</span>
</div>
<span className="text-[11px] text-on-surface-variant font-metric-tabular">21m ago</span>
</li>
<li className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container-low/60 transition-colors cursor-pointer">
<div className="flex items-center gap-1.5">
<span className="font-semibold text-primary">TR-0086</span>
<span className="text-on-surface-variant">(MS-1000)</span>
</div>
<span className="text-[11px] text-on-surface-variant font-metric-tabular">1h ago</span>
</li>
</ul>
</div>
{/*  REGULATORY FOOTNOTE  */}
<div className="pt-2 border-t border-outline-variant/20 text-[10px] text-on-surface-variant leading-normal font-body-sm">
<span className="font-semibold text-primary">Compliance Note:</span> ISO/IEC 17025 §7.8 &amp; §8.4 compliant electronic archive. Alterations require authorized amendment revision workflow with audit ledger recordation.
                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div></main>
    </div>
  );
}
