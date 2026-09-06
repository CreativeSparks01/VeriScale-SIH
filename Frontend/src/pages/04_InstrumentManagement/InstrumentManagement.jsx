import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function InstrumentManagement() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <aside className="fixed left-0 top-0 h-screen w-[248px] bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.08)]"><div className="flex flex-col flex-1 min-h-0"><div className="h-16 px-space-base flex items-center gap-space-sm bg-primary border-b border-primary-container/40"><div className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed"><span className="material-symbols-outlined text-[20px]">scale</span></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-primary tracking-wider leading-none">VERISCALE</span><span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest mt-space-2xs leading-none">METROLOGY PLATFORM</span></div></div><div className="flex-1 overflow-y-auto px-space-sm py-space-md"><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Main</div><nav className="flex flex-col gap-space-2xs mb-space-lg" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[18px]">dashboard</span><span>Dashboard</span></a><a aria-current="page" className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-colors bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r" data-path="instruments" href="#"><span className="material-symbols-outlined text-[18px]">scale</span><span>Instruments</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="tests" href="#"><span className="material-symbols-outlined text-[18px]">experiment</span><span>Tests</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="compliance" href="#"><span className="material-symbols-outlined text-[18px]">verified</span><span>Compliance</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[18px]">assignment</span><span>Reports</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="repository" href="#"><span className="material-symbols-outlined text-[18px]">folder_data</span><span>Repository</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="test-history" href="#"><span className="material-symbols-outlined text-[18px]">history</span><span>Test History</span></a></nav><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Administration</div><nav className="flex flex-col gap-space-2xs" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="users" href="#"><span className="material-symbols-outlined text-[18px]">group</span><span>Users</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="audit-trail" href="#"><span className="material-symbols-outlined text-[18px]">receipt_long</span><span>Audit Trail</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[18px]">settings</span><span>Settings</span></a></nav></div></div><div className="p-space-base bg-primary border-t border-primary-container/40 flex items-center justify-between"><div className="flex items-center gap-space-md"><div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary font-label-md text-label-md">MS<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed ring-2 ring-primary"></span></div><div className="flex flex-col"><span className="font-label-md text-label-md text-on-primary leading-none">Manan Sharma</span><span className="font-label-sm text-label-sm text-primary-fixed-dim mt-space-2xs leading-none">Administrator</span></div></div><button aria-label="User options" className="text-primary-fixed-dim hover:text-on-primary transition-colors flex items-center" type="button"><span className="material-symbols-outlined text-[20px]">more_vert</span></button></div></aside><div className="pl-[248px]"><header className="fixed top-0 left-[248px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl z-40 border-b border-surface-variant flex items-center justify-between px-margin-desktop shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="flex items-center gap-space-md"><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">Instrument Management</span><span className="font-label-sm text-label-sm text-secondary">Manage registered weighing instruments and technical specifications</span></div></div><div className="flex items-center gap-space-lg"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span><input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low border border-outline-variant/60 rounded text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search instruments, serial numbers, models..." type="text"/></div><div className="flex items-center gap-space-sm text-secondary"><button aria-label="Notifications" className="relative p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help Documentation" className="p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help_outline</span></button></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-surface-container-high text-on-primary font-label-md text-label-md">MS</div></div></header><main className="w-full pt-16 bg-[#F4F7F9] min-h-screen px-margin-desktop py-space-xl"><div className="flex flex-col w-full font-body-md text-on-surface">
{/*  1. HEADER AREA & ACTIONS  */}
<header className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
<div className="flex flex-col">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Instrument Management</h1>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">View and manage weighing instruments registered in the laboratory under ISO/IEC 17025 and OIML R 76 protocols.</p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto">
{/*  Secondary Action  */}
<button className="inline-flex items-center gap-space-xs px-space-md py-1.5 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors rounded shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">file_download</span>
<span className="font-label-lg text-label-lg">Export</span>
</button>
{/*  Primary Action CTA  */}
<button className="inline-flex items-center gap-space-xs px-space-base py-2 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>Add Instrument</span>
</button>
</div>
</header>
{/*  2. COMPACT INFORMATION STRIP & METROLOGY KPI METRICS  */}
<section className="grid grid-cols-1 xl:grid-cols-12 gap-space-md mb-space-lg">
{/*  Registry Summary Telemetry Bar  */}
<div className="xl:col-span-4 bg-surface-container-lowest rounded p-space-base shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Registry Status</span>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-primary text-label-sm font-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Live Sync
        </span>
</div>
<div className="mt-space-md flex items-baseline gap-space-sm">
<span className="font-metric-display text-metric-display text-on-surface">1,248</span>
<span className="font-body-sm text-body-sm text-secondary">registered units</span>
</div>
<div className="mt-space-sm pt-space-sm bg-surface-container-low/50 -mx-space-base -mb-space-base px-space-base py-space-sm flex items-center justify-between text-body-sm">
<span className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-[16px] text-secondary">trending_up</span>
<span className="font-metric-tabular font-semibold text-on-surface">32</span> added this month
        </span>
<span className="flex items-center gap-1.5 text-error">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span className="font-metric-tabular font-semibold text-error">14</span> require attention
        </span>
</div>
</div>
{/*  Distribution Breakdown Cards  */}
<div className="xl:col-span-8 bg-surface-container-lowest rounded p-space-base shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Verification Health Distribution</span>
<span className="font-label-sm text-label-sm text-secondary font-metric-tabular">100% Accounted</span>
</div>
{/*  Metric distribution row  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md">
{/*  Active  */}
<div className="flex flex-col bg-surface-container-low/40 p-space-sm rounded">
<div className="flex items-center justify-between mb-space-2xs">
<span className="font-label-sm text-label-sm text-secondary">Active</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container-highest text-[#15803D] text-[10px] font-bold">96.5%</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface font-metric-tabular">1,204</span>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-space-xs overflow-hidden">
<div className="bg-[#15803D] h-full rounded-full" style={{"width":"96.5%"}}></div>
</div>
</div>
{/*  Under Testing  */}
<div className="flex flex-col bg-surface-container-low/40 p-space-sm rounded">
<div className="flex items-center justify-between mb-space-2xs">
<span className="font-label-sm text-label-sm text-secondary">Under Test</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-secondary-container text-primary-container text-[10px] font-bold">1.7%</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary-container font-metric-tabular">21</span>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-space-xs overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"1.7%"}}></div>
</div>
</div>
{/*  Requires Review  */}
<div className="flex flex-col bg-surface-container-low/40 p-space-sm rounded">
<div className="flex items-center justify-between mb-space-2xs">
<span className="font-label-sm text-label-sm text-secondary">Review</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#B45309] text-[10px] font-bold">1.1%</span>
</div>
<span className="font-headline-sm text-headline-sm text-[#B45309] font-metric-tabular">14</span>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-space-xs overflow-hidden">
<div className="bg-[#B45309] h-full rounded-full" style={{"width":"1.1%"}}></div>
</div>
</div>
{/*  Inactive  */}
<div className="flex flex-col bg-surface-container-low/40 p-space-sm rounded">
<div className="flex items-center justify-between mb-space-2xs">
<span className="font-label-sm text-label-sm text-secondary">Decommissioned</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container text-secondary text-[10px] font-bold">0.7%</span>
</div>
<span className="font-headline-sm text-headline-sm text-secondary font-metric-tabular">9</span>
<div className="w-full bg-surface-container-highest h-1 rounded-full mt-space-xs overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"0.7%"}}></div>
</div>
</div>
</div>
</div>
</section>
{/*  3. FILTERING & SEARCH TOOLBAR  */}
<section className="bg-surface-container-lowest rounded p-space-base shadow-sm mb-space-md">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
{/*  Left Controls: Search + Select Boxes  */}
<div className="flex flex-wrap items-center gap-space-sm flex-1">
{/*  Search Field  */}
<div className="relative w-full sm:w-72">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[18px]">search</span>
<input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors" placeholder="Search manufacturer, model or SN..." type="text"/>
</div>
{/*  Select Manufacturer  */}
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm pl-space-md pr-8 py-1.5 rounded focus:outline-none focus:bg-surface-container-lowest cursor-pointer">
<option>All Manufacturers</option>
<option>ABC WeighTech</option>
<option>XYZ Scales</option>
<option>Precision Instruments</option>
<option>MetroScale Systems</option>
<option>Sartorius Lab</option>
<option>Mettler Toledo</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-secondary text-[16px] pointer-events-none">expand_more</span>
</div>
{/*  Select Instrument Type  */}
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm pl-space-md pr-8 py-1.5 rounded focus:outline-none focus:bg-surface-container-lowest cursor-pointer">
<option>All Instrument Types</option>
<option>Platform Scale</option>
<option>Precision Balance</option>
<option>Electronic Scale</option>
<option>Industrial Scale</option>
<option>Analytical Balance</option>
<option>Micro Balance</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-secondary text-[16px] pointer-events-none">expand_more</span>
</div>
{/*  Select Status  */}
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm pl-space-md pr-8 py-1.5 rounded focus:outline-none focus:bg-surface-container-lowest cursor-pointer">
<option>All Verification Statuses</option>
<option>Active</option>
<option>Requires Review</option>
<option>Test Failed</option>
<option>Inactive</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-secondary text-[16px] pointer-events-none">expand_more</span>
</div>
{/*  Select Capacity  */}
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm pl-space-md pr-8 py-1.5 rounded focus:outline-none focus:bg-surface-container-lowest cursor-pointer">
<option>All Capacities</option>
<option>≤ 50 kg</option>
<option>50 – 200 kg</option>
<option>200 – 1000 kg</option>
<option>&gt; 1000 kg</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-secondary text-[16px] pointer-events-none">expand_more</span>
</div>
{/*  More Filters toggle  */}
<button className="inline-flex items-center gap-1 px-space-sm py-1.5 bg-surface-container text-on-surface-variant hover:bg-surface-container-high rounded text-body-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">tune</span>
<span>More</span>
</button>
</div>
{/*  Right Action: Reset  */}
<div className="flex items-center justify-end">
<button className="inline-flex items-center gap-1 font-body-sm text-body-sm text-secondary hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">restart_alt</span>
<span>Clear filters</span>
</button>
</div>
</div>
</section>
{/*  4. BULK ACTION CONTEXT BANNER  */}
<div className="bg-primary text-on-primary rounded p-space-sm mb-space-md flex flex-wrap items-center justify-between gap-space-md shadow-sm" id="bulk-action-banner">
<div className="flex items-center gap-space-sm pl-space-xs">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary-container text-primary font-bold text-[11px]">3</span>
<span className="font-label-md text-label-md">instruments </span>
<span className="text-secondary-fixed-dim text-body-sm ml-2">Applies to batch certification and audit reports</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-1 bg-primary-container hover:bg-surface-tint text-on-primary font-label-sm text-label-sm rounded transition-colors inline-flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">file_download</span>
        Export 
      </button>
<button className="px-space-md py-1 bg-primary-container hover:bg-surface-tint text-on-primary font-label-sm text-label-sm rounded transition-colors inline-flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">published_with_changes</span>
        Update Status
      </button>
<button className="px-space-md py-1 bg-primary-container hover:bg-surface-tint text-on-primary font-label-sm text-label-sm rounded transition-colors inline-flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">archive</span>
        Archive
      </button>
<button className="px-space-md py-1 text-primary-fixed-dim hover:text-on-primary font-label-sm text-label-sm rounded transition-colors ml-2" type="button">
        Deselect All
      </button>
</div>
</div>
{/*  5. ENTERPRISE REGISTERED INSTRUMENTS DATA TABLE  */}
<div className="bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col">
{/*  Table Header Toolbar  */}
<div className="px-space-lg py-space-md flex items-center justify-between bg-surface-container-lowest">
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Registered Instruments</h2>
<span className="font-body-sm text-body-sm text-secondary">All certified industrial measuring devices assigned to active inspection protocols</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary font-metric-tabular">Showing 8 of 1,248</span>
<button aria-label="Refresh Registry" className="p-1.5 text-secondary hover:text-on-surface hover:bg-surface-container rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">refresh</span>
</button>
<button aria-label="Configure Columns" className="p-1.5 text-secondary hover:text-on-surface hover:bg-surface-container rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">view_column</span>
</button>
</div>
</div>
{/*  Scrollable Dense Table Matrix  */}
<div className="overflow-x-auto w-full">
<table className="w-full text-left font-body-sm text-body-sm">
{/*  Table Header (36px lock)  */}
<thead>
<tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<th className="w-10 px-space-md py-2 text-center" scope="col">
<input defaultChecked="" className="rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox"/>
</th>
<th className="px-space-md py-2" scope="col">
<div className="inline-flex items-center gap-1 cursor-pointer hover:text-on-surface">
<span>Instrument / Identifier</span>
<span className="material-symbols-outlined text-[14px]">arrow_downward</span>
</div>
</th>
<th className="px-space-md py-2" scope="col">Manufacturer</th>
<th className="px-space-md py-2" scope="col">Model</th>
<th className="px-space-md py-2" scope="col">Serial Number</th>
<th className="px-space-md py-2" scope="col">Type</th>
<th className="px-space-md py-2 text-right" scope="col">Capacity (Max)</th>
<th className="px-space-md py-2 text-right" scope="col">Interval (e/d)</th>
<th className="px-space-md py-2" scope="col">Last Test</th>
<th className="px-space-md py-2" scope="col">Status</th>
<th className="px-space-md py-2 text-right" scope="col">Action</th>
</tr>
</thead>
{/*  Table Body Rows  */}
<tbody className="divide-y divide-surface-container">
{/*  Row 1 ()  */}
<tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/20">
<td className="px-space-md py-2.5 text-center">
<input defaultChecked="" className="rounded text-primary cursor-pointer accent-primary" type="checkbox"/>
</td>
<td className="px-space-md py-2.5">
<div className="font-headline-sm text-body-md text-on-surface">ABC WeighTech WT-100</div>
<div className="font-label-sm text-[11px] text-secondary">Class III • Station Bench 04</div>
</td>
<td className="px-space-md py-2.5 text-on-surface">ABC WeighTech</td>
<td className="px-space-md py-2.5 font-medium text-on-surface">WT-100</td>
<td className="px-space-md py-2.5">
<span className="font-metric-tabular text-body-sm px-1.5 py-0.5 rounded bg-surface-container font-mono text-on-surface">WT100-2026-001</span>
</td>
<td className="px-space-md py-2.5 text-secondary">Platform Scale</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular font-medium text-on-surface">100 kg</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular text-secondary">10 g</td>
<td className="px-space-md py-2.5 text-secondary font-metric-tabular">06 Sep 2026</td>
<td className="px-space-md py-2.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#DCFCE7] text-[#15803D] text-[11px] font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Active</span>
</span>
</td>
<td className="px-space-md py-2.5 text-right">
<button className="inline-flex items-center gap-0.5 text-primary hover:text-secondary font-label-md text-label-md transition-colors" type="button">
<span>View</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</td>
</tr>
{/*  Row 2 ()  */}
<tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/20">
<td className="px-space-md py-2.5 text-center">
<input defaultChecked="" className="rounded text-primary cursor-pointer accent-primary" type="checkbox"/>
</td>
<td className="px-space-md py-2.5">
<div className="font-headline-sm text-body-md text-on-surface">XYZ Scales PS-500</div>
<div className="font-label-sm text-[11px] text-secondary">Class III • Heavy Receiving</div>
</td>
<td className="px-space-md py-2.5 text-on-surface">XYZ Scales</td>
<td className="px-space-md py-2.5 font-medium text-on-surface">PS-500</td>
<td className="px-space-md py-2.5">
<span className="font-metric-tabular text-body-sm px-1.5 py-0.5 rounded bg-surface-container font-mono text-on-surface">PS500-2026-145</span>
</td>
<td className="px-space-md py-2.5 text-secondary">Platform Scale</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular font-medium text-on-surface">500 kg</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular text-secondary">50 g</td>
<td className="px-space-md py-2.5 text-secondary font-metric-tabular">04 Sep 2026</td>
<td className="px-space-md py-2.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#DCFCE7] text-[#15803D] text-[11px] font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Active</span>
</span>
</td>
<td className="px-space-md py-2.5 text-right">
<button className="inline-flex items-center gap-0.5 text-primary hover:text-secondary font-label-md text-label-md transition-colors" type="button">
<span>View</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</td>
</tr>
{/*  Row 3 ()  */}
<tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/20">
<td className="px-space-md py-2.5 text-center">
<input defaultChecked="" className="rounded text-primary cursor-pointer accent-primary" type="checkbox"/>
</td>
<td className="px-space-md py-2.5">
<div className="font-headline-sm text-body-md text-on-surface">Precision Instruments PI-50</div>
<div className="font-label-sm text-[11px] text-secondary">Class II • Cleanroom Bay B</div>
</td>
<td className="px-space-md py-2.5 text-on-surface">Precision Instruments</td>
<td className="px-space-md py-2.5 font-medium text-on-surface">PI-50</td>
<td className="px-space-md py-2.5">
<span className="font-metric-tabular text-body-sm px-1.5 py-0.5 rounded bg-surface-container font-mono text-on-surface">PI50-2025-083</span>
</td>
<td className="px-space-md py-2.5 text-secondary">Precision Balance</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular font-medium text-on-surface">50 kg</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular text-secondary">1 g</td>
<td className="px-space-md py-2.5 text-secondary font-metric-tabular">29 Aug 2026</td>
<td className="px-space-md py-2.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FEF3C7] text-[#B45309] text-[11px] font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span>Requires Review</span>
</span>
</td>
<td className="px-space-md py-2.5 text-right">
<button className="inline-flex items-center gap-0.5 text-primary hover:text-secondary font-label-md text-label-md transition-colors" type="button">
<span>View</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="px-space-md py-2.5 text-center">
<input className="rounded text-primary cursor-pointer accent-primary" type="checkbox"/>
</td>
<td className="px-space-md py-2.5">
<div className="font-headline-sm text-body-md text-on-surface">ABC WeighTech WT-200</div>
<div className="font-label-sm text-[11px] text-secondary">Class III • Packaging Line 2</div>
</td>
<td className="px-space-md py-2.5 text-on-surface">ABC WeighTech</td>
<td className="px-space-md py-2.5 font-medium text-on-surface">WT-200</td>
<td className="px-space-md py-2.5">
<span className="font-metric-tabular text-body-sm px-1.5 py-0.5 rounded bg-surface-container font-mono text-on-surface">WT200-2026-233</span>
</td>
<td className="px-space-md py-2.5 text-secondary">Electronic Scale</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular font-medium text-on-surface">200 kg</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular text-secondary">20 g</td>
<td className="px-space-md py-2.5 text-secondary font-metric-tabular">20 Aug 2026</td>
<td className="px-space-md py-2.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FEE2E2] text-[#B42318] text-[11px] font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">cancel</span>
<span>Test Failed</span>
</span>
</td>
<td className="px-space-md py-2.5 text-right">
<button className="inline-flex items-center gap-0.5 text-primary hover:text-secondary font-label-md text-label-md transition-colors" type="button">
<span>View</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="px-space-md py-2.5 text-center">
<input className="rounded text-primary cursor-pointer accent-primary" type="checkbox"/>
</td>
<td className="px-space-md py-2.5">
<div className="font-headline-sm text-body-md text-on-surface">MetroScale Systems MS-1000</div>
<div className="font-label-sm text-[11px] text-secondary">Class III • Loading Dock South</div>
</td>
<td className="px-space-md py-2.5 text-on-surface">MetroScale Systems</td>
<td className="px-space-md py-2.5 font-medium text-on-surface">MS-1000</td>
<td className="px-space-md py-2.5">
<span className="font-metric-tabular text-body-sm px-1.5 py-0.5 rounded bg-surface-container font-mono text-on-surface">MS1000-2026-041</span>
</td>
<td className="px-space-md py-2.5 text-secondary">Industrial Scale</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular font-medium text-on-surface">1000 kg</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular text-secondary">100 g</td>
<td className="px-space-md py-2.5 text-secondary font-metric-tabular">18 Aug 2026</td>
<td className="px-space-md py-2.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#DCFCE7] text-[#15803D] text-[11px] font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Active</span>
</span>
</td>
<td className="px-space-md py-2.5 text-right">
<button className="inline-flex items-center gap-0.5 text-primary hover:text-secondary font-label-md text-label-md transition-colors" type="button">
<span>View</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</td>
</tr>
{/*  Row 6  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="px-space-md py-2.5 text-center">
<input className="rounded text-primary cursor-pointer accent-primary" type="checkbox"/>
</td>
<td className="px-space-md py-2.5">
<div className="font-headline-sm text-body-md text-on-surface">XYZ Scales PS-100</div>
<div className="font-label-sm text-[11px] text-secondary">Class III • Assembly Line A</div>
</td>
<td className="px-space-md py-2.5 text-on-surface">XYZ Scales</td>
<td className="px-space-md py-2.5 font-medium text-on-surface">PS-100</td>
<td className="px-space-md py-2.5">
<span className="font-metric-tabular text-body-sm px-1.5 py-0.5 rounded bg-surface-container font-mono text-on-surface">PS100-2026-018</span>
</td>
<td className="px-space-md py-2.5 text-secondary">Platform Scale</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular font-medium text-on-surface">100 kg</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular text-secondary">10 g</td>
<td className="px-space-md py-2.5 text-secondary font-metric-tabular">10 Aug 2026</td>
<td className="px-space-md py-2.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#DCFCE7] text-[#15803D] text-[11px] font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Active</span>
</span>
</td>
<td className="px-space-md py-2.5 text-right">
<button className="inline-flex items-center gap-0.5 text-primary hover:text-secondary font-label-md text-label-md transition-colors" type="button">
<span>View</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</td>
</tr>
{/*  Row 7  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="px-space-md py-2.5 text-center">
<input className="rounded text-primary cursor-pointer accent-primary" type="checkbox"/>
</td>
<td className="px-space-md py-2.5">
<div className="font-headline-sm text-body-md text-on-surface">Sartorius Quintix 125</div>
<div className="font-label-sm text-[11px] text-secondary">Class I • Chemical Synthesis</div>
</td>
<td className="px-space-md py-2.5 text-on-surface">Sartorius Lab</td>
<td className="px-space-md py-2.5 font-medium text-on-surface">QX-125D</td>
<td className="px-space-md py-2.5">
<span className="font-metric-tabular text-body-sm px-1.5 py-0.5 rounded bg-surface-container font-mono text-on-surface">SN-2026-8821</span>
</td>
<td className="px-space-md py-2.5 text-secondary">Analytical Balance</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular font-medium text-on-surface">120 g</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular text-secondary">0.01 mg</td>
<td className="px-space-md py-2.5 text-secondary font-metric-tabular">08 Aug 2026</td>
<td className="px-space-md py-2.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#DCFCE7] text-[#15803D] text-[11px] font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>Active</span>
</span>
</td>
<td className="px-space-md py-2.5 text-right">
<button className="inline-flex items-center gap-0.5 text-primary hover:text-secondary font-label-md text-label-md transition-colors" type="button">
<span>View</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</td>
</tr>
{/*  Row 8  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="px-space-md py-2.5 text-center">
<input className="rounded text-primary cursor-pointer accent-primary" type="checkbox"/>
</td>
<td className="px-space-md py-2.5">
<div className="font-headline-sm text-body-md text-on-surface">Mettler Toledo XPR</div>
<div className="font-label-sm text-[11px] text-secondary">Class I • Reference Metrology</div>
</td>
<td className="px-space-md py-2.5 text-on-surface">Mettler Toledo</td>
<td className="px-space-md py-2.5 font-medium text-on-surface">XPR205</td>
<td className="px-space-md py-2.5">
<span className="font-metric-tabular text-body-sm px-1.5 py-0.5 rounded bg-surface-container font-mono text-on-surface">MT-XPR-0492</span>
</td>
<td className="px-space-md py-2.5 text-secondary">Micro Balance</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular font-medium text-on-surface">220 g</td>
<td className="px-space-md py-2.5 text-right font-metric-tabular text-secondary">0.01 mg</td>
<td className="px-space-md py-2.5 text-secondary font-metric-tabular">02 Aug 2026</td>
<td className="px-space-md py-2.5">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FEF3C7] text-[#B45309] text-[11px] font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px]">schedule</span>
<span>Requires Review</span>
</span>
</td>
<td className="px-space-md py-2.5 text-right">
<button className="inline-flex items-center gap-0.5 text-primary hover:text-secondary font-label-md text-label-md transition-colors" type="button">
<span>View</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  6. COMPREHENSIVE PAGINATION  */}
<footer className="px-space-lg py-space-sm bg-surface-container-low/30 flex flex-col sm:flex-row items-center justify-between gap-space-md">
{/*  Left: Pagination Info & Row Selector  */}
<div className="flex items-center gap-space-lg text-body-sm text-secondary">
<span>Showing <strong className="text-on-surface font-semibold">1</strong> to <strong className="text-on-surface font-semibold">10</strong> of <strong className="text-on-surface font-semibold">1,248</strong> instruments</span>
<div className="flex items-center gap-space-xs">
<span>Rows per page:</span>
<select className="bg-surface-container-lowest text-on-surface font-body-sm text-body-sm px-2 py-1 rounded focus:outline-none cursor-pointer">
<option>10</option>
<option>25</option>
<option>50</option>
<option>100</option>
</select>
</div>
</div>
{/*  Right: Numeric Pagination Controls  */}
<div className="flex items-center gap-1">
{/*  Previous Button  */}
<button className="px-space-sm py-1 rounded text-secondary hover:text-on-surface hover:bg-surface-container text-body-sm font-medium transition-colors flex items-center gap-1" disabled="" type="button">
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
<span>Previous</span>
</button>
{/*  Pages  */}
<button className="w-8 h-8 rounded bg-primary text-on-primary text-label-md font-semibold flex items-center justify-center" type="button">1</button>
<button className="w-8 h-8 rounded text-on-surface hover:bg-surface-container text-label-md font-medium flex items-center justify-center transition-colors" type="button">2</button>
<button className="w-8 h-8 rounded text-on-surface hover:bg-surface-container text-label-md font-medium flex items-center justify-center transition-colors" type="button">3</button>
<span className="w-8 h-8 flex items-center justify-center text-secondary font-label-md">...</span>
<button className="w-8 h-8 rounded text-on-surface hover:bg-surface-container text-label-md font-medium flex items-center justify-center transition-colors" type="button">125</button>
{/*  Next Button  */}
<button className="px-space-sm py-1 rounded text-secondary hover:text-on-surface hover:bg-surface-container text-body-sm font-medium transition-colors flex items-center gap-1" type="button">
<span>Next</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</footer>
</div>
</div>
</main></div>
    </div>
  );
}
