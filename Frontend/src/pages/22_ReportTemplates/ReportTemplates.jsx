import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function ReportTemplates() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <aside className="fixed left-0 top-0 h-screen w-[248px] bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.08)]"><div className="flex flex-col flex-1 min-h-0"><div className="h-16 px-space-base flex items-center gap-space-sm bg-primary border-b border-primary-container/40"><img alt="Brand logo. - Primary color: #123b5d
- Font: ibmPlexSans
- Mode: light
- Roundness: rounded-sm
" className="h-8 w-auto object-contain" src="/src/assets/technical-emblem.svg"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-primary tracking-wider leading-none">VERISCALE</span><span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest mt-space-2xs leading-none">METROLOGY PLATFORM</span></div></div><div className="flex-1 overflow-y-auto px-space-sm py-space-md"><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Main</div><nav className="flex flex-col gap-space-2xs mb-space-lg" data-active-classes="bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a aria-current="page" className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-colors bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[18px]">dashboard</span><span>Dashboard</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="instruments" href="#"><span className="material-symbols-outlined text-[18px]">scale</span><span>Instruments</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="tests" href="#"><span className="material-symbols-outlined text-[18px]">experiment</span><span>Tests</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="compliance" href="#"><span className="material-symbols-outlined text-[18px]">verified</span><span>Compliance</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[18px]">assignment</span><span>Reports</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="repository" href="#"><span className="material-symbols-outlined text-[18px]">folder_data</span><span>Repository</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="test-history" href="#"><span className="material-symbols-outlined text-[18px]">history</span><span>Test History</span></a></nav><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Administration</div><nav className="flex flex-col gap-space-2xs" data-active-classes="bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="users" href="#"><span className="material-symbols-outlined text-[18px]">group</span><span>Users</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="audit-trail" href="#"><span className="material-symbols-outlined text-[18px]">receipt_long</span><span>Audit Trail</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[18px]">settings</span><span>Settings</span></a></nav></div></div><div className="p-space-base bg-primary border-t border-primary-container/40 flex items-center justify-between"><div className="flex items-center gap-space-md"><div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary font-label-md text-label-md">MS<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed ring-2 ring-primary"></span></div><div className="flex flex-col"><span className="font-label-md text-label-md text-on-primary leading-none">Manan Sharma</span><span className="font-label-sm text-label-sm text-primary-fixed-dim mt-space-2xs leading-none">Administrator</span></div></div><button aria-label="User options" className="text-primary-fixed-dim hover:text-on-primary transition-colors flex items-center" type="button"><span className="material-symbols-outlined text-[20px]">more_vert</span></button></div></aside><div className="pl-[248px]"><header className="fixed top-0 left-[248px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl z-40 border-b border-surface-variant flex items-center justify-between px-margin-desktop shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="flex items-center gap-space-md"><img alt="Brand logo. - Primary color: #123b5d
- Font: ibmPlexSans
- Mode: light
- Roundness: rounded-sm
" className="h-8 w-auto object-contain md:hidden" src="/src/assets/technical-emblem.svg"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">Dashboard</span><span className="font-label-sm text-label-sm text-secondary">Laboratory Operations Overview</span></div></div><div className="flex items-center gap-space-lg"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span><input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low border border-outline-variant/60 rounded text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search reports, instruments, serial numbers..." type="text"/></div><div className="flex items-center gap-space-sm text-secondary"><button aria-label="Notifications" className="relative p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help Documentation" className="p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help_outline</span></button></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-surface-container-high"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="w-full pt-16 bg-surface min-h-screen px-margin-desktop py-space-xl"><div className="flex flex-col w-full gap-space-lg">
{/*  TOP TELEMETRY & HARDWARE STRIP  */}
<section className="w-full bg-primary text-on-primary px-space-base py-space-sm rounded-lg shadow-sm flex flex-wrap items-center justify-between gap-y-space-xs text-body-sm font-body-sm">
<div className="flex items-center flex-wrap gap-x-space-lg gap-y-space-xs">
<div className="flex items-center gap-space-xs text-tertiary-fixed font-medium">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span className="font-mono text-body-sm tracking-wide">COM1: 9600 BAUD [ONLINE]</span>
</div>
<div className="flex items-center gap-space-xs text-primary-fixed-dim">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified_user</span>
<span className="tracking-wide">ISO/IEC 17025 ACCREDITED REPORT ENGINE</span>
</div>
<div className="flex items-center gap-space-xs text-primary-fixed-dim">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">lock_clock</span>
<span>DOCUMENT ARCHIVE INTEGRITY VERIFIED</span>
</div>
</div>
<div className="flex items-center gap-space-sm text-primary-fixed-dim font-mono text-body-sm">
<span className="material-symbols-outlined text-[16px]">dns</span>
<span>SERVER: 06 SEP 2026 14:20:15 UTC | NODE-UK-04</span>
</div>
</section>
{/*  PAGE HEADER & PRIMARY ACTIONS  */}
<header className="flex flex-col md:flex-row md:items-center md:justify-between gap-space-md">
<div className="flex flex-col">
<nav className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-space-2xs">
<span>Administration</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span>Settings</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-bold">Report Templates</span>
</nav>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
        Report Template Management
      </h1>
<p className="font-body-md text-body-md text-secondary mt-space-2xs">
        Configure, version-bind, and standardize templates used to compile legal-metrology dossiers and calibration test reports.
      </p>
</div>
<div className="flex items-center gap-space-sm flex-wrap self-start md:self-auto">
<button className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest text-primary font-label-md text-label-md rounded shadow-sm hover:bg-surface-container-low transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">file_upload</span>
<span>Import Template</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container-lowest text-primary font-label-md text-label-md rounded shadow-sm hover:bg-surface-container-low transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">file_download</span>
<span>Export Template</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary-container text-on-primary font-label-md text-label-md rounded shadow-sm hover:bg-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>Create Template</span>
</button>
</div>
</header>
{/*  CONTROLLED ACCESS / ADMIN SECURITY BANNER  */}
<section className="bg-surface-container-low rounded-lg p-space-base flex items-start gap-space-md shadow-sm">
<div className="w-9 h-9 rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
</div>
<div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Administrator Access Enforced</h2>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs max-w-4xl">
          Published templates are cryptographically sealed to ensure legal traceability under ISO/IEC 17025 Clause 7.8 and OIML R 76. Active production templates cannot be modified directly; changes require creating a sequenced draft increment.
        </p>
</div>
<div className="shrink-0 flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-space-xs rounded shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">Revision Lock: ENGAGED</span>
</div>
</div>
</section>
{/*  TEMPLATE INVENTORY SUMMARY STRIP  */}
<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider">Templates Total</span>
<span className="font-headline-lg text-headline-lg text-primary font-bold mt-space-xs">6</span>
<span className="font-body-sm text-body-sm text-secondary mt-space-2xs">System Registries</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider">Active Published</span>
<span className="font-headline-lg text-headline-lg text-primary font-bold mt-space-xs">2</span>
<span className="font-body-sm text-body-sm text-tertiary font-medium mt-space-2xs">In Live Production</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider">Pending Drafts</span>
<span className="font-headline-lg text-headline-lg text-secondary font-bold mt-space-xs">1</span>
<span className="font-body-sm text-body-sm text-secondary mt-space-2xs">Under Authoring</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider">Archived / Legacy</span>
<span className="font-headline-lg text-headline-lg text-outline font-bold mt-space-xs">3</span>
<span className="font-body-sm text-body-sm text-secondary mt-space-2xs">Historical Reference</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col lg:col-span-2">
<span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider">Default Generator Template</span>
<div className="flex items-center gap-space-xs mt-space-xs">
<span className="font-headline-sm text-headline-sm text-primary font-semibold truncate">NAWI Type Evaluation</span>
<span className="bg-surface-container-high text-primary font-mono text-body-sm px-1.5 py-0.5 rounded shrink-0">v2.1</span>
</div>
<span className="font-label-sm text-label-sm text-tertiary-container font-semibold mt-space-2xs flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span> 12 Sections Bound &amp; Validated
      </span>
</div>
</section>
{/*  ZONE 1: TEMPLATE REGISTRY & VERSION GOVERNANCE  */}
<section className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col">
{/*  Filters and Table Toolbar  */}
<div className="p-space-base flex flex-col sm:flex-row sm:items-center justify-between gap-space-md bg-surface-container-low/40">
<div className="flex items-center gap-space-xs bg-surface-container-low p-1 rounded">
<button className="px-space-md py-1 bg-surface-container-lowest text-primary font-label-md text-label-md rounded font-semibold shadow-sm" type="button">
          All (6)
        </button>
<button className="px-space-md py-1 text-secondary hover:text-on-surface font-label-md text-label-md rounded transition-colors" type="button">
          Active (2)
        </button>
<button className="px-space-md py-1 text-secondary hover:text-on-surface font-label-md text-label-md rounded transition-colors" type="button">
          Drafts (1)
        </button>
<button className="px-space-md py-1 text-secondary hover:text-on-surface font-label-md text-label-md rounded transition-colors" type="button">
          Archived (3)
        </button>
</div>
<div className="flex items-center gap-space-sm">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-2.5 top-2 text-secondary text-[18px]">filter_list</span>
<input className="w-full pl-8 pr-space-md py-1.5 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded shadow-sm focus:outline-none focus:bg-surface-container-low" placeholder="Filter templates..." type="text"/>
</div>
<button aria-label="Table column settings" className="p-1.5 text-secondary hover:text-primary rounded hover:bg-surface-container-low" type="button">
<span className="material-symbols-outlined text-[20px]">view_column</span>
</button>
</div>
</div>
{/*  Registry Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-low font-label-sm text-label-sm text-secondary uppercase tracking-wider">
<tr>
<th className="py-space-sm px-space-base">Template Name &amp; Scope</th>
<th className="py-space-sm px-space-base">Version</th>
<th className="py-space-sm px-space-base">Lifecycle Status</th>
<th className="py-space-sm px-space-base text-right">Used By</th>
<th className="py-space-sm px-space-base">Last Mod</th>
<th className="py-space-sm px-space-base">Signatory Authority</th>
<th className="py-space-sm px-space-base text-center">Default</th>
<th className="py-space-sm px-space-base text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface font-metric-tabular">
{/*  Row 1:  / Active Default  */}
<tr className="bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
<td className="py-space-sm px-space-base">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">description</span>
<span className="font-headline-sm text-headline-sm text-primary">NAWI Type Evaluation</span>
</div>
<span className="font-label-sm text-label-sm text-secondary block">Scope: OIML R 76 / WELMEC 7.2 Non-Automatic Weighing</span>
</td>
<td className="py-space-sm px-space-base font-mono font-semibold text-primary">v2.1</td>
<td className="py-space-sm px-space-base">
<span className="inline-flex items-center gap-1 bg-surface-container text-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> ACTIVE
              </span>
</td>
<td className="py-space-sm px-space-base text-right font-semibold">87 reports</td>
<td className="py-space-sm px-space-base text-secondary">01 Sep 2026</td>
<td className="py-space-sm px-space-base">
<div className="flex items-center gap-space-xs">
<span className="w-5 h-5 rounded-full bg-primary-container text-on-primary text-[10px] flex items-center justify-center font-bold">MS</span>
<span>M. Sharma (#A-001)</span>
</div>
</td>
<td className="py-space-sm px-space-base text-center">
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-0.5 rounded font-bold">
                ✓ Primary Default
              </span>
</td>
<td className="py-space-sm px-space-base text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="px-space-sm py-1 bg-surface-container-lowest hover:bg-surface-container-high text-primary font-label-sm text-label-sm rounded font-medium shadow-sm transition-colors" type="button">
                  Inspect Structure
                </button>
<button className="px-space-sm py-1 bg-surface-container-lowest hover:bg-surface-container-high text-secondary hover:text-primary font-label-sm text-label-sm rounded font-medium shadow-sm transition-colors" type="button">
                  Clone / Draft
                </button>
</div>
</td>
</tr>
{/*  Row 2: Archived v2.0  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-sm px-space-base">
<div className="flex items-center gap-space-xs text-secondary">
<span className="material-symbols-outlined text-[18px]">inventory_2</span>
<span className="font-headline-sm text-headline-sm">NAWI Type Evaluation</span>
</div>
<span className="font-label-sm text-label-sm text-outline block">Pre-2026 OIML R 76 Revision Framework</span>
</td>
<td className="py-space-sm px-space-base font-mono text-secondary">v2.0</td>
<td className="py-space-sm px-space-base">
<span className="inline-flex items-center gap-1 bg-surface-container-high text-secondary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                ARCHIVED
              </span>
</td>
<td className="py-space-sm px-space-base text-right text-secondary">1,161 reports</td>
<td className="py-space-sm px-space-base text-secondary">01 Jan 2026</td>
<td className="py-space-sm px-space-base text-secondary">M. Sharma (#A-001)</td>
<td className="py-space-sm px-space-base text-center text-outline">—</td>
<td className="py-space-sm px-space-base text-right">
<button className="px-space-sm py-1 bg-surface-container-lowest hover:bg-surface-container-low text-secondary font-label-sm text-label-sm rounded font-medium shadow-sm transition-colors" type="button">
                View Historical
              </button>
</td>
</tr>
{/*  Row 3: Standard Verification v1.4  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-sm px-space-base">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
<span className="font-headline-sm text-headline-sm text-primary">NAWI Standard Verification</span>
</div>
<span className="font-label-sm text-label-sm text-secondary block">Scope: Periodic Field Metrological Verification</span>
</td>
<td className="py-space-sm px-space-base font-mono font-semibold text-primary">v1.4</td>
<td className="py-space-sm px-space-base">
<span className="inline-flex items-center gap-1 bg-surface-container text-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> ACTIVE
              </span>
</td>
<td className="py-space-sm px-space-base text-right font-semibold">43 reports</td>
<td className="py-space-sm px-space-base text-secondary">15 Aug 2026</td>
<td className="py-space-sm px-space-base">
<div className="flex items-center gap-space-xs">
<span className="w-5 h-5 rounded-full bg-secondary text-on-secondary text-[10px] flex items-center justify-center font-bold">RS</span>
<span>R. Singh (#R-109)</span>
</div>
</td>
<td className="py-space-sm px-space-base text-center text-outline">—</td>
<td className="py-space-sm px-space-base text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="px-space-sm py-1 bg-surface-container-lowest hover:bg-surface-container-low text-primary font-label-sm text-label-sm rounded font-medium shadow-sm transition-colors" type="button">
                  Inspect
                </button>
<button className="px-space-sm py-1 bg-surface-container-lowest hover:bg-surface-container-low text-secondary hover:text-primary font-label-sm text-label-sm rounded font-medium shadow-sm transition-colors" type="button">
                  Clone
                </button>
</div>
</td>
</tr>
{/*  Row 4: Draft Revision  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-sm px-space-base">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">edit_note</span>
<span className="font-headline-sm text-headline-sm text-on-surface">NAWI High-Capacity Scale Revision</span>
</div>
<span className="font-label-sm text-label-sm text-secondary block">Specialized Class IIII (&gt;10,000 kg) test matrix addition</span>
</td>
<td className="py-space-sm px-space-base font-mono text-secondary">v0.1</td>
<td className="py-space-sm px-space-base">
<span className="inline-flex items-center gap-1 bg-surface-container-highest text-secondary font-label-sm text-label-sm px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                ○ DRAFT
              </span>
</td>
<td className="py-space-sm px-space-base text-right text-outline">0 reports</td>
<td className="py-space-sm px-space-base text-secondary">05 Sep 2026</td>
<td className="py-space-sm px-space-base">M. Sharma (#A-001)</td>
<td className="py-space-sm px-space-base text-center text-outline">—</td>
<td className="py-space-sm px-space-base text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="px-space-sm py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded font-medium shadow-sm transition-colors" type="button">
                  Edit Draft
                </button>
<button className="px-space-sm py-1 bg-surface-container-lowest hover:bg-surface-container-low text-primary font-label-sm text-label-sm rounded font-medium shadow-sm transition-colors" type="button">
                  Validate
                </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  ZONE 2: 3-COLUMN TEMPLATE BUILDER & A4 CANVAS PREVIEW  */}
<section className="flex flex-col gap-space-sm">
{/*  Active Template Sub-Header  */}
<div className="bg-surface-container-lowest p-space-base rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="p-space-xs rounded bg-surface-container-low text-primary">
<span className="material-symbols-outlined text-[24px]">architecture</span>
</div>
<div>
<div className="flex items-center gap-space-sm">
<h2 className="font-headline-md text-headline-md text-on-surface">
              NAWI Type Evaluation (v2.1)
            </h2>
<span className="bg-primary-container text-on-primary font-label-sm text-label-sm px-2 py-0.5 rounded font-mono">
              LOCKED PRODUCTION RELEASE
            </span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">
            Template locked against runtime changes to prevent retroactive modification of legal verification dossiers.
          </p>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-space-xs bg-surface-container-low p-1 rounded">
<button className="px-space-md py-1 bg-surface-container-lowest text-primary font-label-md text-label-md rounded font-bold shadow-sm" type="button">
            Structure Inspection
          </button>
<button className="px-space-md py-1 text-secondary font-label-md text-label-md rounded hover:text-on-surface transition-colors" type="button">
            Draft Editor Mode
          </button>
</div>
<button className="px-space-md py-1.5 bg-surface-container-low text-secondary font-label-md text-label-md rounded hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">history</span>
<span>View Diffs</span>
</button>
</div>
</div>
{/*  3-Column Interactive Layout  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md items-start">
{/*  COLUMN A: SECTION PALETTE & ORDERING (xl:col-span-3)  */}
<div className="xl:col-span-3 bg-surface-container-lowest rounded-lg p-space-base shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Dossier Architecture</span>
<span className="font-label-sm text-label-sm text-secondary">10 Mandatory • 2 Optional</span>
</div>
<span className="font-mono font-bold text-body-sm bg-surface-container-low px-2 py-0.5 rounded text-primary">
            12/12
          </span>
</div>
<div className="flex flex-col gap-space-xs max-h-[820px] overflow-y-auto pr-1">
{/*  Section 01  */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low/40 rounded hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-outline text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm text-secondary font-semibold">01.</span>
<span className="font-label-md text-label-md text-on-surface truncate">Cover Page</span>
</div>
<span className="font-label-sm text-label-sm text-outline uppercase font-semibold">Locked</span>
</div>
{/*  Section 02 - Active   */}
<div className="flex items-center justify-between p-space-sm bg-surface-container text-primary rounded shadow-sm cursor-pointer">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-primary text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm font-bold">02.</span>
<span className="font-label-md text-label-md font-bold text-primary truncate">Instrument Identification</span>
</div>
<span className="material-symbols-outlined text-primary text-[16px]">arrow_forward</span>
</div>
{/*  Section 03  */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low/40 rounded hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-outline text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm text-secondary font-semibold">03.</span>
<span className="font-label-md text-label-md text-on-surface truncate">Technical Specifications</span>
</div>
<span className="material-symbols-outlined text-tertiary-container text-[16px]">check_circle</span>
</div>
{/*  Section 04  */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low/40 rounded hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-outline text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm text-secondary font-semibold">04.</span>
<span className="font-label-md text-label-md text-on-surface truncate">Environmental Conditions</span>
</div>
<span className="material-symbols-outlined text-tertiary-container text-[16px]">check_circle</span>
</div>
{/*  Section 05  */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low/40 rounded hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-outline text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm text-secondary font-semibold">05.</span>
<span className="font-label-md text-label-md text-on-surface truncate">Metrological Observations</span>
</div>
<span className="material-symbols-outlined text-tertiary-container text-[16px]">check_circle</span>
</div>
{/*  Section 06  */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low/40 rounded hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-outline text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm text-secondary font-semibold">06.</span>
<span className="font-label-md text-label-md text-on-surface truncate">Results &amp; Uncertainty</span>
</div>
<span className="material-symbols-outlined text-tertiary-container text-[16px]">check_circle</span>
</div>
{/*  Section 07  */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low/40 rounded hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-outline text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm text-secondary font-semibold">07.</span>
<span className="font-label-md text-label-md text-on-surface truncate">OIML R 76 Compliance</span>
</div>
<span className="material-symbols-outlined text-tertiary-container text-[16px]">check_circle</span>
</div>
{/*  Section 08  */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low/40 rounded hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-outline text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm text-secondary font-semibold">08.</span>
<span className="font-label-md text-label-md text-on-surface truncate">Photographic Evidence</span>
</div>
<span className="material-symbols-outlined text-tertiary-container text-[16px]">check_circle</span>
</div>
{/*  Section 09 (Optional)  */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low/20 rounded hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-outline text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm text-secondary font-semibold">09.</span>
<span className="font-label-md text-label-md text-secondary truncate">Supporting Documents</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Optional</span>
</div>
{/*  Section 10  */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low/40 rounded hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-outline text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm text-secondary font-semibold">10.</span>
<span className="font-label-md text-label-md text-on-surface truncate">Reviewer Sign-off</span>
</div>
<span className="material-symbols-outlined text-tertiary-container text-[16px]">check_circle</span>
</div>
{/*  Section 11  */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low/40 rounded hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-outline text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm text-secondary font-semibold">11.</span>
<span className="font-label-md text-label-md text-on-surface truncate">Certification Statement</span>
</div>
<span className="material-symbols-outlined text-tertiary-container text-[16px]">check_circle</span>
</div>
{/*  Section 12 (Optional)  */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low/20 rounded hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs min-w-0">
<span className="material-symbols-outlined text-outline text-[18px]">drag_indicator</span>
<span className="font-mono text-body-sm text-secondary font-semibold">12.</span>
<span className="font-label-md text-label-md text-secondary truncate">Appendix: MPE Tables</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Optional</span>
</div>
</div>
<button className="w-full py-space-sm bg-surface-container-low text-outline font-label-md text-label-md rounded flex items-center justify-center gap-1 cursor-not-allowed" disabled="" type="button">
<span className="material-symbols-outlined text-[16px]">lock</span>
<span>Add Custom Section (Locked)</span>
</button>
</div>
{/*  COLUMN B: DOCUMENT PREVIEW CANVAS (xl:col-span-6)  */}
<div className="xl:col-span-6 flex flex-col items-center">
{/*  Canvas Control Strip  */}
<div className="w-full bg-surface-container-lowest p-space-xs px-space-base rounded-t-lg shadow-sm flex items-center justify-between mb-space-xs">
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-secondary">
<span>A4 Document Canvas (210 × 297 mm)</span>
<span className="w-1 h-1 rounded-full bg-outline"></span>
<span className="text-primary font-semibold">Live Renderer Active</span>
</div>
<div className="flex items-center gap-space-xs">
<button aria-label="Zoom out" className="p-1 text-secondary hover:text-primary rounded hover:bg-surface-container-low" type="button">
<span className="material-symbols-outlined text-[18px]">zoom_out</span>
</button>
<span className="font-mono text-body-sm text-on-surface px-1">100%</span>
<button aria-label="Zoom in" className="p-1 text-secondary hover:text-primary rounded hover:bg-surface-container-low" type="button">
<span className="material-symbols-outlined text-[18px]">zoom_in</span>
</button>
<button aria-label="Fullscreen view" className="p-1 text-secondary hover:text-primary rounded hover:bg-surface-container-low" type="button">
<span className="material-symbols-outlined text-[18px]">fullscreen</span>
</button>
</div>
</div>
{/*  Rendered A4 Document Container  */}
<div className="w-full bg-surface-container-lowest shadow-xl rounded p-space-xl flex flex-col min-h-[920px] text-on-surface relative font-body-sm">
{/*  Watermark Preview Overlay  */}
<div className="absolute right-6 top-6 px-3 py-1 bg-surface-container-low text-secondary font-mono text-[10px] tracking-widest uppercase rounded">
            SYNTHETIC DATA PREVIEW
          </div>
{/*  Document Header  */}
<div className="flex items-start justify-between pb-space-md border-b-0">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary font-bold tracking-wider leading-none">VERISCALE</span>
<span className="font-label-sm text-label-sm text-tertiary-container tracking-widest font-semibold mt-1">LEGAL METROLOGY DIVISION</span>
<span className="font-body-sm text-body-sm text-secondary mt-2">Accredited Testing Laboratory UKAS #4029</span>
</div>
<div className="flex flex-col items-end text-right">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Document Record</span>
<span className="font-mono font-bold text-headline-sm text-primary">TR-2026-0091</span>
<span className="font-mono text-[11px] text-outline">OIML R 76-1:2006 (E) / WELMEC 7.2</span>
</div>
</div>
<div className="bg-surface-container-low/70 p-space-sm rounded my-space-md">
<h3 className="font-headline-sm text-headline-sm text-primary text-center uppercase tracking-wide">
              Official Test Report / Type Evaluation Dossier
            </h3>
</div>
{/*  Metadata Box  */}
<div className="bg-surface-container-low/40 p-space-md rounded mb-space-base grid grid-cols-2 gap-y-space-xs gap-x-space-md text-body-sm font-metric-tabular">
<div><span className="text-secondary font-normal">Instrument:</span> <span className="font-semibold text-primary">ABC WeighTech WT-100 Platform</span></div>
<div><span className="text-secondary font-normal">Accuracy Class:</span> <span className="font-mono font-semibold text-primary bg-surface-container-lowest px-1 rounded">Class (III)</span></div>
<div><span className="text-secondary font-normal">Serial Number:</span> <span className="font-mono text-primary font-medium">WT100-2026-001</span></div>
<div><span className="text-secondary font-normal">Metrological Limits:</span> <span className="font-mono text-primary font-medium">Max 100.000 kg | Min 20 g | e = 10 g</span></div>
</div>
{/*  Bound Section 01 Preview  */}
<div className="mb-space-md">
<div className="bg-surface-container-low px-space-sm py-1 rounded flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md font-bold text-primary">1. Instrument Identification &amp; Pattern Verification</span>
<span className="text-[11px] font-mono text-secondary">SECTION_01_BOUND</span>
</div>
<div className="p-space-xs grid grid-cols-2 gap-x-space-md gap-y-1 text-body-sm">
<div><span className="text-secondary">Manufacturer:</span> <span className="font-mono text-on-surface">ABC WeighTech Industrial Ltd.</span></div>
<div><span className="text-secondary">Model Designation:</span> <span className="font-mono text-on-surface">WT-100-Dual</span></div>
<div><span className="text-secondary">Pattern Approval:</span> <span className="font-mono text-on-surface">UK/2026/0412-A</span></div>
<div><span className="text-secondary">Load Cell Module:</span> <span className="font-mono text-on-surface">C3-ShearBeam 200kg (Cert: TC8411)</span></div>
</div>
</div>
{/*  Bound Section 02 Preview (Target Item)  */}
<div className="mb-space-md p-space-xs bg-surface-container/30 rounded">
<div className="bg-surface-container px-space-sm py-1 rounded flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md font-bold text-primary">2. Environmental Testing Conditions</span>
<span className="text-[11px] font-mono text-primary font-semibold"> FOR INSPECTION</span>
</div>
<div className="grid grid-cols-3 gap-space-sm p-space-xs font-mono text-body-sm">
<div className="bg-surface-container-lowest p-space-xs rounded shadow-sm">
<span className="text-secondary text-[11px] block font-sans">Ambient Temp</span>
<span className="font-bold text-primary">20.4 °C</span> <span className="text-[11px] text-outline">(± 0.2 °C)</span>
</div>
<div className="bg-surface-container-lowest p-space-xs rounded shadow-sm">
<span className="text-secondary text-[11px] block font-sans">Relative Humidity</span>
<span className="font-bold text-primary">52.1 % RH</span>
</div>
<div className="bg-surface-container-lowest p-space-xs rounded shadow-sm">
<span className="text-secondary text-[11px] block font-sans">Barometric Press.</span>
<span className="font-bold text-primary">1013.2 hPa</span>
</div>
</div>
</div>
{/*  Bound Section 03 Preview (MPE Table)  */}
<div className="mb-space-md">
<div className="bg-surface-container-low px-space-sm py-1 rounded flex items-center justify-between mb-space-xs">
<span className="font-label-md text-label-md font-bold text-primary">3. Metrological Evaluation Summary (MPE Conformity)</span>
<span className="text-[11px] font-mono text-secondary">SECTION_03_BOUND</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-metric-tabular text-body-sm">
<thead className="bg-surface-container-low text-secondary text-[11px] uppercase">
<tr>
<th className="p-1">Load Range (m)</th>
<th className="p-1">Standard Reference</th>
<th className="p-1">Max Permissible Error (mpe)</th>
<th className="p-1 text-right">Maximum Indication Error</th>
<th className="p-1 text-center">Outcome</th>
</tr>
</thead>
<tbody className="divide-y-0">
<tr className="hover:bg-surface-container-low/30">
<td className="p-1 font-mono">0 ≤ m ≤ 500 e</td>
<td className="p-1 font-mono">0.000 – 5.000 kg</td>
<td className="p-1 font-mono">± 0.5 e (± 5 g)</td>
<td className="p-1 font-mono text-right font-semibold text-primary">+ 0.0 g</td>
<td className="p-1 text-center font-bold text-tertiary text-[11px]">PASS</td>
</tr>
<tr className="hover:bg-surface-container-low/30">
<td className="p-1 font-mono">500 e &lt; m ≤ 2000 e</td>
<td className="p-1 font-mono">5.010 – 20.000 kg</td>
<td className="p-1 font-mono">± 1.0 e (± 10 g)</td>
<td className="p-1 font-mono text-right font-semibold text-primary">+ 2.1 g</td>
<td className="p-1 text-center font-bold text-tertiary text-[11px]">PASS</td>
</tr>
<tr className="hover:bg-surface-container-low/30">
<td className="p-1 font-mono">m &gt; 2000 e</td>
<td className="p-1 font-mono">20.010 – 100.000 kg</td>
<td className="p-1 font-mono">± 1.5 e (± 15 g)</td>
<td className="p-1 font-mono text-right font-semibold text-primary">+ 4.8 g</td>
<td className="p-1 text-center font-bold text-tertiary text-[11px]">PASS</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Bound Section 04 Preview (Signature & Digest)  */}
<div className="mt-auto pt-space-md border-t-0">
<div className="bg-surface-container-low/30 p-space-sm rounded grid grid-cols-2 gap-space-md">
<div>
<span className="text-secondary text-[11px] block uppercase font-semibold">Verification Officer</span>
<span className="font-label-md text-label-md text-on-surface font-bold block mt-1">Manan Sharma (Metrologist #A-001)</span>
<span className="text-[11px] text-outline font-mono">Digital Signature Token: 0x94B2...EE01</span>
</div>
<div className="flex flex-col items-end text-right">
<span className="text-secondary text-[11px] block uppercase font-semibold">Cryptographic Checksum</span>
<span className="font-mono text-[10px] text-primary break-all">SHA256: 7F29B8C1D299E0148FA563B7C...</span>
<span className="text-[11px] text-tertiary-container font-semibold mt-1">Verified Audit Hash Intact</span>
</div>
</div>
{/*  Page Footer  */}
<div className="flex items-center justify-between text-[11px] text-secondary mt-space-sm pt-space-xs font-mono">
<span>Page 1 of 12</span>
<span>ISO/IEC 17025 Form 42-A Approved</span>
<span>CONFIDENTIAL LEGAL RECORD</span>
</div>
</div>
</div>
</div>
{/*  COLUMN C: SECTION PROPERTIES & DATA BINDING MATRIX (xl:col-span-3)  */}
<div className="xl:col-span-3 flex flex-col gap-space-md">
{/*   Section Settings  */}
<div className="bg-surface-container-lowest rounded-lg p-space-base shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Properties Inspector</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Section 02 — Identification</span>
</div>
<span className="material-symbols-outlined text-secondary text-[20px]">tune</span>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Section Display Title</label>
<input className="w-full px-space-sm py-1.5 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded cursor-not-allowed" readOnly="" type="text" defaultValue="Instrument Identification"/>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div className="flex flex-col gap-space-2xs">
<label className="font-label-sm text-label-sm text-secondary">Numbering</label>
<input className="w-full px-space-sm py-1.5 bg-surface-container-low font-mono text-body-sm text-on-surface rounded text-center" readOnly="" type="text" defaultValue="02"/>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-sm text-label-sm text-secondary">TOC Entry</label>
<div className="h-9 px-space-sm bg-surface-container-low rounded flex items-center justify-center">
<span className="font-label-sm text-label-sm text-primary font-bold">Include (Yes)</span>
</div>
</div>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Data Source Provider</label>
<div className="px-space-sm py-1.5 bg-surface-container-low rounded flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[16px]">database</span>
<span className="font-mono text-body-sm text-primary">DB.instruments_profile</span>
</div>
</div>
<div className="flex flex-col gap-space-xs pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Active Bound Variables</span>
<div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto">
<div className="p-space-xs bg-surface-container-low/50 rounded flex items-center justify-between text-body-sm">
<span className="font-mono text-[11px] text-primary">{"{{instrument.serial_number}}"}</span>
<span className="font-label-sm text-label-sm text-secondary font-mono truncate max-w-[110px]">WT100-2026-001</span>
</div>
<div className="p-space-xs bg-surface-container-low/50 rounded flex items-center justify-between text-body-sm">
<span className="font-mono text-[11px] text-primary">{"{{instrument.class}}"}</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">Class (III)</span>
</div>
<div className="p-space-xs bg-surface-container-low/50 rounded flex items-center justify-between text-body-sm">
<span className="font-mono text-[11px] text-primary">{"{{instrument.max_capacity}}"}</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">100.000 kg</span>
</div>
<div className="p-space-xs bg-surface-container-low/50 rounded flex items-center justify-between text-body-sm">
<span className="font-mono text-[11px] text-primary">{"{{instrument.scale_interval_e}}"}</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">10 g</span>
</div>
<div className="p-space-xs bg-surface-container-low/50 rounded flex items-center justify-between text-body-sm">
<span className="font-mono text-[11px] text-primary">{"{{instrument.pattern_approval}}"}</span>
<span className="font-label-sm text-label-sm text-secondary font-mono">UK/2026/0412</span>
</div>
</div>
</div>
</div>
{/*  Document Generation Engine Settings  */}
<div className="bg-surface-container-lowest rounded-lg p-space-base shadow-sm flex flex-col gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface">Compiler Output Setup</span>
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Enabled Render Pipelines</span>
<div className="space-y-1.5">
<label className="flex items-center gap-space-sm text-body-sm text-on-surface cursor-pointer">
<input defaultChecked="" className="accent-primary rounded" disabled="" type="checkbox"/>
<span>PDF/A-1b Archival (ISO 19005-1)</span>
</label>
<label className="flex items-center gap-space-sm text-body-sm text-on-surface cursor-pointer">
<input defaultChecked="" className="accent-primary rounded" disabled="" type="checkbox"/>
<span>Microsoft Word (.docx) OpenXML</span>
</label>
<label className="flex items-center gap-space-sm text-body-sm text-on-surface cursor-pointer">
<input defaultChecked="" className="accent-primary rounded" disabled="" type="checkbox"/>
<span>Direct Raw Spool (Laser / PCL-6)</span>
</label>
</div>
</div>
<div className="flex flex-col gap-space-xs pt-space-xs">
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">File Naming Regex</span>
<div className="px-space-sm py-1.5 bg-surface-container-low font-mono text-body-sm text-primary rounded">
              TR-{YEAR}-{REPORT_ID}
            </div>
<span className="font-body-sm text-body-sm text-secondary">Next sequenced file: <strong className="text-on-surface font-mono">TR-2026-0092.pdf</strong></span>
</div>
<div className="bg-surface-container-low/40 p-space-sm rounded flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold">Sequence Generator:</span>
<span className="font-mono text-body-sm text-primary font-bold">#0092 (AUTO_INC)</span>
</div>
</div>
</div>
</div>
</section>
{/*  SIDEBAR PANELS / FOOTER POLICIES & AUDIT TRACE  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/*  Policy 1: Historical Report Immutability Principle  */}
<div className="bg-surface-container-lowest p-space-base rounded-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs text-primary mb-space-xs">
<span className="material-symbols-outlined text-[20px]">history_edu</span>
<h3 className="font-headline-sm text-headline-sm">Historical Immutability</h3>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          Approved dossiers permanently retain the template architecture active at the moment of electronic sign-off. Archiving v2.0 or upgrading to v2.1 will never perturb archived dossiers <span className="font-mono text-on-surface">TR-0080</span> or <span className="font-mono text-on-surface">TR-0091</span>.
        </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low/40 -mx-space-base -mb-space-base p-space-base rounded-b-lg flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Strict Traceability Principle</span>
</div>
</div>
{/*  Policy 2: Version Promotion Engine  */}
<div className="bg-surface-container-lowest p-space-base rounded-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs text-primary mb-space-xs">
<span className="material-symbols-outlined text-[20px]">alt_route</span>
<h3 className="font-headline-sm text-headline-sm">Lifecycle Pipeline</h3>
</div>
<div className="flex flex-col gap-space-xs my-space-xs font-label-sm text-label-sm">
<div className="flex items-center justify-between text-secondary">
<span>1. Authoring Draft</span>
<span className="font-mono text-primary font-bold">COMPLETE</span>
</div>
<div className="flex items-center justify-between text-secondary">
<span>2. Schema Validation</span>
<span className="font-mono text-primary font-bold">PASS (100%)</span>
</div>
<div className="flex items-center justify-between text-secondary">
<span>3. Metrologist Sign-off</span>
<span className="font-mono text-primary font-bold">APPROVED</span>
</div>
<div className="flex items-center justify-between text-primary font-bold">
<span>4. Production Promotion</span>
<span className="font-mono text-tertiary-container">ACTIVE v2.1</span>
</div>
</div>
</div>
<div className="mt-space-sm text-body-sm text-secondary">
        Zero unbound tokens. Schema passes all 12 validations.
      </div>
</div>
{/*  Policy 3: Header & Footer Control Toggles  */}
<div className="bg-surface-container-lowest p-space-base rounded-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs text-primary mb-space-xs">
<span className="material-symbols-outlined text-[20px]">toggle_on</span>
<h3 className="font-headline-sm text-headline-sm">Controlled Elements</h3>
</div>
<div className="space-y-space-xs pt-1 font-body-sm text-body-sm text-secondary">
<div className="flex items-center justify-between">
<span>Show Legal Report ID</span>
<span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-1.5 py-0.5 rounded">ALWAYS ON</span>
</div>
<div className="flex items-center justify-between">
<span>Stepped Page Numbers</span>
<span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-1.5 py-0.5 rounded">ALWAYS ON</span>
</div>
<div className="flex items-center justify-between">
<span>Document Version Moniker</span>
<span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-1.5 py-0.5 rounded">ALWAYS ON</span>
</div>
<div className="flex items-center justify-between">
<span>ISO 17025 Header Scrim</span>
<span className="font-mono text-[11px] font-bold text-primary bg-surface-container px-1.5 py-0.5 rounded">ALWAYS ON</span>
</div>
</div>
</div>
<div className="mt-space-sm text-body-sm text-outline">
        Layout governance locked to Legal Standard ISO-42A.
      </div>
</div>
{/*  Policy 4: Administrative Permissions & Audit Connection  */}
<div className="bg-surface-container-lowest p-space-base rounded-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs text-primary mb-space-xs">
<span className="material-symbols-outlined text-[20px]">receipt_long</span>
<h3 className="font-headline-sm text-headline-sm">Cryptographic Audit</h3>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          All template structure alterations, version bumps, and promotion events are recorded in the non-repudiation security audit log.
        </p>
<div className="mt-space-xs font-mono text-[11px] text-outline bg-surface-container-low p-space-xs rounded">
          Last Event: #EV-9942 (PROMOTION v2.1 BY A-001)
        </div>
</div>
<a className="mt-space-md inline-flex items-center justify-between text-primary font-label-md text-label-md font-bold hover:underline" href="#">
<span>Open Template Audit Trail</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</section>
</div></main></div>
    </div>
  );
}
