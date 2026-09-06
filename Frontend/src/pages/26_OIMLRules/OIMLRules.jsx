import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function OIMLRules() {
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
" className="h-8 w-auto object-contain md:hidden" src="/src/assets/technical-emblem.svg"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">Dashboard</span><span className="font-label-sm text-label-sm text-secondary">Laboratory Operations Overview</span></div></div><div className="flex items-center gap-space-lg"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span><input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low border border-outline-variant/60 rounded text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search reports, instruments, serial numbers..." type="text"/></div><div className="flex items-center gap-space-sm text-secondary"><button aria-label="Notifications" className="relative p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help Documentation" className="p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help_outline</span></button></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-surface-container-high"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="w-full pt-16 bg-surface min-h-screen px-margin-desktop py-space-xl"><div className="flex flex-col w-full gap-space-lg text-on-surface">
{/*  TOP BREADCRUMB & CONTEXTUAL HEADER  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col gap-space-2xs">
<nav className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary">
<span>Administration</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span>Settings</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-medium">Rule &amp; Version Management</span>
</nav>
<div className="flex items-baseline gap-space-md">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Rule &amp; Version Management</h1>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-lg bg-surface-container-high text-on-secondary-container">OIML R 76 Compliance Engine</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Manage configured compliance rule sets, parameter constraints, and immutable standards used by the deterministic VeriScale metrology rules engine.</p>
</div>
{/*  ACTION BUTTON GROUP  */}
<div className="flex items-center gap-space-sm self-start md:self-auto shrink-0">
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors shadow-sm font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">upload_file</span>
<span>Import Rule Set</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors shadow-sm font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">download</span>
<span>Export Configuration</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-colors shadow-sm font-label-md text-label-md font-semibold" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>+ Create Draft Version</span>
</button>
</div>
</div>
{/*  1. SECURITY & IMMUTABILITY GOVERNANCE BANNER  */}
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
<div className="flex items-center gap-space-md">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-container text-on-primary shrink-0">
<span className="material-symbols-outlined text-[22px]">verified_user</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs font-label-md text-label-md font-semibold text-primary">
<span>Administrator Access Level: Authenticated Metrology Officer</span>
<span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
<span className="text-secondary font-normal font-metric-tabular text-body-sm">ISO/IEC 17025 §8.4 Traceability</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Rule parameters govern legal metrology evaluations. Published rule versions are tamper-sealed and strictly immutable. Changes require creating an isolated draft version.
        </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs shrink-0 self-stretch lg:self-auto pt-space-xs lg:pt-0">
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container text-on-secondary-container font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
<span className="font-medium">Engine: Operational</span>
</div>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container text-on-secondary-container font-label-sm text-label-sm">
<span className="text-secondary">Active Schema:</span>
<span className="font-metric-tabular font-semibold text-primary">R76-2026.1</span>
</div>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container text-on-secondary-container font-label-sm text-label-sm">
<span className="text-secondary">Queue:</span>
<span className="font-metric-tabular font-semibold text-primary">0 pending</span>
</div>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-metric-tabular" title="Full SHA-256: 6d90a789ef7c4d51b369c0d128ba7fec590a88019ab7234a">
<span className="material-symbols-outlined text-[14px]">fingerprint</span>
<span>SHA: 6d90a789ef...34a</span>
</div>
</div>
</div>
{/*  2. ACTIVE RULE SET SUMMARY STRIP  */}
<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-container"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-on-secondary-container">Current Live Evaluation Standard</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
            ACTIVE PRODUCTION
          </span>
<span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface font-metric-tabular font-semibold text-body-sm">
            OIML R 76-1:2006 (NAWI)
          </span>
</div>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight flex items-center gap-space-sm">
<span>Non-Automatic Weighing Instruments</span>
<span className="text-secondary font-metric-tabular text-body-md font-normal">— Version R76-2026.1</span>
</h2>
<div className="flex flex-wrap items-center gap-y-1 gap-x-space-md font-body-sm text-body-sm text-secondary pt-0.5">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">event_available</span>
            Effective: <strong className="text-on-surface font-metric-tabular">01 Sep 2026</strong>
</span>
<span className="text-outline-variant">•</span>
<span>Published: <span className="font-metric-tabular text-on-surface">28 Aug 2026</span></span>
<span className="text-outline-variant">•</span>
<span>By: <span className="text-on-surface font-medium">M. Sharma (Administrator #A-001)</span></span>
<span className="text-outline-variant">•</span>
<span>Scope: <span className="text-on-surface">Class I, II, III &amp; IIII Type Evaluation &amp; Verification</span></span>
</div>
</div>
{/*  Quick Metrics & Status Pills  */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0 pt-space-xs lg:pt-0">
<div className="grid grid-cols-3 gap-space-sm p-space-sm bg-surface-container-low rounded-lg text-center min-w-[280px]">
<div className="flex flex-col">
<span className="font-metric-tabular text-headline-sm font-bold text-primary">87</span>
<span className="font-label-sm text-label-sm text-secondary">Dossiers</span>
</div>
<div className="flex flex-col border-x border-outline-variant/30">
<span className="font-metric-tabular text-headline-sm font-bold text-primary">318</span>
<span className="font-label-sm text-label-sm text-secondary">Bound Tests</span>
</div>
<div className="flex flex-col">
<span className="font-metric-tabular text-headline-sm font-bold text-emerald-700">0</span>
<span className="font-label-sm text-label-sm text-secondary">Conflicts</span>
</div>
</div>
<div className="flex flex-col gap-1.5 justify-center">
<div className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[15px]">lock</span>
<span>Version Locked &amp; Immutable</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium transition-colors" type="button">
              Compare with Draft
            </button>
<button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md font-medium transition-colors" type="button">
              Inspect Rules
            </button>
</div>
</div>
</div>
</div>
</div>
{/*  3. MAIN WORKSPACE (70 / 30 GRID)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/*  LEFT WORKSPACE: 70% (8 Cols of 12)  */}
<div className="lg:col-span-8 flex flex-col gap-space-lg min-w-0">
{/*  a. CONFIGURED RULE SETS TABLE  */}
<div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
{/*  Search, Filter & Controls Header  */}
<div className="p-space-base flex flex-col sm:flex-row sm:items-center justify-between gap-space-md bg-surface-container-lowest">
<div className="flex flex-col gap-space-2xs">
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">Configured Rule Sets</h3>
<p className="font-body-sm text-body-sm text-secondary">Registry of regulatory standards, schemas, and calibration tolerance models.</p>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary">Standard:</span>
<div className="relative inline-flex items-center">
<select className="pl-space-sm pr-7 py-1 bg-surface-container-low text-on-surface rounded font-label-md text-label-md appearance-none focus:outline-none focus:bg-surface-container">
<option >OIML R 76 (NAWI)</option>
<option>OIML R 111 (Weights)</option>
<option>NIST Handbook 44</option>
<option>EURAMET cg-18</option>
</select>
<span className="material-symbols-outlined text-[16px] text-secondary absolute right-2 pointer-events-none">expand_more</span>
</div>
</div>
</div>
{/*  Filter Pills & Search Input  */}
<div className="px-space-base pb-space-md flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm">
<div className="relative flex-1">
<span className="material-symbols-outlined text-[18px] text-secondary absolute left-3 top-1/2 -translate-y-1/2">search</span>
<input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low rounded font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="Search rule sets, standards, or versions..." type="text"/>
</div>
<div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
<button className="px-2.5 py-1 rounded font-label-sm text-label-sm bg-primary text-on-primary font-medium" type="button">All (4)</button>
<button className="px-2.5 py-1 rounded font-label-sm text-label-sm bg-surface-container text-secondary hover:text-on-surface font-medium" type="button">Active (1)</button>
<button className="px-2.5 py-1 rounded font-label-sm text-label-sm bg-surface-container text-secondary hover:text-on-surface font-medium" type="button">Draft (1)</button>
<button className="px-2.5 py-1 rounded font-label-sm text-label-sm bg-surface-container text-secondary hover:text-on-surface font-medium" type="button">Archived (1)</button>
<button className="px-2.5 py-1 rounded font-label-sm text-label-sm bg-surface-container text-secondary hover:text-on-surface font-medium" type="button">Deprecated (1)</button>
</div>
</div>
{/*  Dense Enterprise Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm whitespace-nowrap">
<thead className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<tr>
<th className="py-2.5 px-space-base">Rule Set ID</th>
<th className="py-2.5 px-space-md">Standard Reference</th>
<th className="py-2.5 px-space-md">Version</th>
<th className="py-2.5 px-space-md">Status</th>
<th className="py-2.5 px-space-md">Effective Timeline</th>
<th className="py-2.5 px-space-md">Bound Reports</th>
<th className="py-2.5 px-space-md">Last Updated</th>
<th className="py-2.5 px-space-base text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high/40">
{/*  Row 1: Active  */}
<tr className="bg-surface-container-low/40 hover:bg-surface-container-low transition-colors">
<td className="py-space-sm px-space-base font-metric-tabular font-semibold text-primary">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-emerald-600"></span>
<span>OIML-R76</span>
</div>
</td>
<td className="py-space-sm px-space-md font-body-md text-body-md text-on-surface">OIML R 76-1:2006</td>
<td className="py-space-sm px-space-md">
<span className="font-metric-tabular font-bold text-primary px-2 py-0.5 rounded bg-surface-container">R76-2026.1</span>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[13px]">check</span> Active
                  </span>
</td>
<td className="py-space-sm px-space-md font-metric-tabular text-on-surface">01 Sep 2026 – Indefinite</td>
<td className="py-space-sm px-space-md font-metric-tabular text-primary font-medium">87 dossiers</td>
<td className="py-space-sm px-space-md font-metric-tabular text-secondary text-body-sm">06 Sep 2026 14:02</td>
<td className="py-space-sm px-space-base text-right">
<div className="inline-flex items-center gap-space-xs">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-medium transition-colors" type="button">Inspect</button>
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-medium transition-colors" type="button">Compare</button>
</div>
</td>
</tr>
{/*  Row 2: Draft  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-space-sm px-space-base font-metric-tabular font-semibold text-primary">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span>OIML-R76</span>
</div>
</td>
<td className="py-space-sm px-space-md font-body-md text-body-md text-on-surface">OIML R 76-1:2006</td>
<td className="py-space-sm px-space-md">
<span className="font-metric-tabular font-semibold text-on-secondary-container px-2 py-0.5 rounded bg-amber-50 text-amber-900">R76-DRAFT-02</span>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-label-sm text-label-sm font-medium">
<span className="material-symbols-outlined text-[13px]">edit</span> Draft
                  </span>
</td>
<td className="py-space-sm px-space-md text-secondary font-label-sm text-label-sm">Pending (Target Q1 2027)</td>
<td className="py-space-sm px-space-md font-metric-tabular text-secondary">0 dossiers</td>
<td className="py-space-sm px-space-md font-metric-tabular text-secondary text-body-sm">05 Sep 2026 18:30</td>
<td className="py-space-sm px-space-base text-right">
<div className="inline-flex items-center gap-space-xs">
<button className="px-2 py-1 rounded bg-primary-container text-on-primary hover:bg-primary font-label-sm text-label-sm font-medium transition-colors" type="button">Edit Draft</button>
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-medium transition-colors" type="button">Validate</button>
</div>
</td>
</tr>
{/*  Row 3: Archived  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-space-sm px-space-base font-metric-tabular font-semibold text-secondary">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-slate-400"></span>
<span>OIML-R76</span>
</div>
</td>
<td className="py-space-sm px-space-md font-body-md text-body-md text-secondary">OIML R 76-1:2006</td>
<td className="py-space-sm px-space-md">
<span className="font-metric-tabular font-medium text-secondary px-2 py-0.5 rounded bg-surface-container-high">R76-2026.0</span>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm font-medium">
<span className="material-symbols-outlined text-[13px]">inventory_2</span> Archived
                  </span>
</td>
<td className="py-space-sm px-space-md font-metric-tabular text-secondary">01 Jan 2026 – 31 Aug 2026</td>
<td className="py-space-sm px-space-md font-metric-tabular text-secondary">1,161 dossiers</td>
<td className="py-space-sm px-space-md font-metric-tabular text-secondary text-body-sm">28 Aug 2026 11:15</td>
<td className="py-space-sm px-space-base text-right">
<div className="inline-flex items-center gap-space-xs">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-secondary font-label-sm text-label-sm font-medium transition-colors" type="button">View Spec</button>
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-secondary font-label-sm text-label-sm font-medium transition-colors" type="button">Audit Log</button>
</div>
</td>
</tr>
{/*  Row 4: Deprecated  */}
<tr className="hover:bg-surface-container-low/60 transition-colors opacity-80">
<td className="py-space-sm px-space-base font-metric-tabular font-semibold text-secondary">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-rose-400"></span>
<span>OIML-R76-PRE</span>
</div>
</td>
<td className="py-space-sm px-space-md font-body-md text-body-md text-secondary">OIML R 76 (1992 Legacy)</td>
<td className="py-space-sm px-space-md">
<span className="font-metric-tabular font-medium text-secondary px-2 py-0.5 rounded bg-surface-container-high">R76-LEGACY-v3</span>
</td>
<td className="py-space-sm px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-50 text-rose-800 font-label-sm text-label-sm font-medium">
<span className="material-symbols-outlined text-[13px]">warning</span> Deprecated
                  </span>
</td>
<td className="py-space-sm px-space-md font-metric-tabular text-secondary">Superseded 31 Dec 2025</td>
<td className="py-space-sm px-space-md font-metric-tabular text-secondary">412 dossiers</td>
<td className="py-space-sm px-space-md font-metric-tabular text-secondary text-body-sm">01 Jan 2026 00:00</td>
<td className="py-space-sm px-space-base text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-secondary font-label-sm text-label-sm font-medium transition-colors" type="button">View Archive</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  b. RULES ENGINE EXECUTION FLOW (TECHNICAL ARCHITECTURE)  */}
<div className="flex flex-col bg-surface-container-lowest rounded-xl p-space-base shadow-sm">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-tertiary-container">account_tree</span>
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">Deterministic Rules Engine Execution Pipeline</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">Stage Isolation &amp; Immutability Flow</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-space-base">
          Metrological observation data remains pure and detached from logic alterations. Rule sets act as functional evaluators at Stages 5, 6, and 7 without mutating stored raw load cell values.
        </p>
{/*  Pipeline Diagram  */}
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 p-space-sm bg-surface-container-low rounded-lg text-center font-label-sm text-label-sm">
<div className="flex flex-col items-center justify-between p-2 rounded bg-surface-container-lowest shadow-2xs">
<span className="text-secondary font-metric-tabular text-[10px]">STAGE 1</span>
<span className="font-medium text-on-surface mt-1">Instrument Specs</span>
<span className="text-[10px] text-secondary mt-1">Max, Min, e, d</span>
</div>
<div className="flex flex-col items-center justify-between p-2 rounded bg-surface-container-lowest shadow-2xs">
<span className="text-secondary font-metric-tabular text-[10px]">STAGE 2</span>
<span className="font-medium text-on-surface mt-1">Test Setup</span>
<span className="text-[10px] text-secondary mt-1">Standard weights</span>
</div>
<div className="flex flex-col items-center justify-between p-2 rounded bg-surface-container-lowest shadow-2xs">
<span className="text-secondary font-metric-tabular text-[10px]">STAGE 3</span>
<span className="font-medium text-on-surface mt-1">Observations</span>
<span className="text-[10px] text-secondary mt-1">Raw indications</span>
</div>
<div className="flex flex-col items-center justify-between p-2 rounded bg-surface-container-lowest shadow-2xs">
<span className="text-secondary font-metric-tabular text-[10px]">STAGE 4</span>
<span className="font-medium text-on-surface mt-1">Validation</span>
<span className="text-[10px] text-secondary mt-1">Bounds &amp; formats</span>
</div>
<div className="flex flex-col items-center justify-between p-2 rounded bg-primary-container text-on-primary shadow-xs">
<span className="text-tertiary-fixed font-metric-tabular text-[10px] font-bold">STAGE 5 *</span>
<span className="font-semibold mt-1">Rule Selection</span>
<span className="text-[10px] text-primary-fixed-dim mt-1">Active standard</span>
</div>
<div className="flex flex-col items-center justify-between p-2 rounded bg-primary-container text-on-primary shadow-xs">
<span className="text-tertiary-fixed font-metric-tabular text-[10px] font-bold">STAGE 6 *</span>
<span className="font-semibold mt-1">Calculations</span>
<span className="text-[10px] text-primary-fixed-dim mt-1">MPE &amp; E = I - L</span>
</div>
<div className="flex flex-col items-center justify-between p-2 rounded bg-primary-container text-on-primary shadow-xs">
<span className="text-tertiary-fixed font-metric-tabular text-[10px] font-bold">STAGE 7 *</span>
<span className="font-semibold mt-1">Acceptance</span>
<span className="text-[10px] text-primary-fixed-dim mt-1">|E| ≤ MPE band</span>
</div>
<div className="flex flex-col items-center justify-between p-2 rounded bg-surface-container-lowest shadow-2xs">
<span className="text-secondary font-metric-tabular text-[10px]">STAGE 8</span>
<span className="font-bold text-emerald-800 mt-1">Decision</span>
<span className="text-[10px] text-emerald-700 mt-1">Pass / Fail / Rev</span>
</div>
</div>
<div className="flex items-center justify-between mt-space-sm pt-space-xs font-label-sm text-label-sm text-secondary">
<span className="flex items-center gap-1 text-primary font-medium">
<span className="inline-block w-2 h-2 rounded-full bg-primary-container"></span>
            * Governed by Version R76-2026.1
          </span>
<span>Zero calculation drift guarantee: Hash verified across execution nodes</span>
</div>
</div>
{/*  c. CONFIGURED RULE CATEGORIES & RULE MATRIX  */}
<div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="p-space-base flex items-center justify-between bg-surface-container-lowest">
<div className="flex flex-col gap-space-2xs">
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">Active Rule Modules (R76-2026.1)</h3>
<p className="font-body-sm text-body-sm text-secondary">Modular verification rules applied during automated assessment workflows.</p>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-metric-tabular font-medium text-body-sm">6 Modules Active</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<tr>
<th className="py-2.5 px-space-base">Rule Module</th>
<th className="py-2.5 px-space-md">Metrological Responsibility</th>
<th className="py-2.5 px-space-md">Config Status</th>
<th className="py-2.5 px-space-md">Last Committed</th>
<th className="py-2.5 px-space-base text-right">Details</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high/40">
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-base font-medium text-primary flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container">checklist</span>
<span>Test Applicability</span>
</td>
<td className="py-3 px-space-md text-on-surface-variant">Determines mandated routines: Accuracy, Repeatability, Eccentricity, Tare, and Zero stability per accuracy class.</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-emerald-800">
<span className="material-symbols-outlined text-[14px]">check</span> Configured
                  </span>
</td>
<td className="py-3 px-space-md font-metric-tabular text-secondary text-body-sm">28 Aug 2026</td>
<td className="py-3 px-space-base text-right">
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-medium transition-colors" type="button">Inspect</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-base font-medium text-primary flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container">fact_check</span>
<span>Input Validation</span>
</td>
<td className="py-3 px-space-md text-on-surface-variant">Strict boundary checks: Max capacity exceedance, tare range, rounding interval verification (d ≤ e), monotonic sequence integrity.</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-emerald-800">
<span className="material-symbols-outlined text-[14px]">check</span> Configured
                  </span>
</td>
<td className="py-3 px-space-md font-metric-tabular text-secondary text-body-sm">28 Aug 2026</td>
<td className="py-3 px-space-base text-right">
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-medium transition-colors" type="button">Inspect</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-base font-medium text-primary flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container">calculate</span>
<span>Calculation Rules</span>
</td>
<td className="py-3 px-space-md text-on-surface-variant">Computes theoretical MPE, corrected indication E = I + 0.5e - ΔL - L, rounding corrections, standard deviation (s) for n=10 runs.</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-emerald-800">
<span className="material-symbols-outlined text-[14px]">check</span> Configured
                  </span>
</td>
<td className="py-3 px-space-md font-metric-tabular text-secondary text-body-sm">28 Aug 2026</td>
<td className="py-3 px-space-base text-right">
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-medium transition-colors" type="button">Inspect</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-base font-medium text-primary flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container">rule</span>
<span>Acceptance Criteria</span>
</td>
<td className="py-3 px-space-md text-on-surface-variant">Executes evaluation against stepped MPE envelopes: ±0.5e (0 to 500e), ±1.0e (500 to 2000e), ±1.5e (&gt; 2000e) for Class III.</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-emerald-800">
<span className="material-symbols-outlined text-[14px]">check</span> Configured
                  </span>
</td>
<td className="py-3 px-space-md font-metric-tabular text-secondary text-body-sm">28 Aug 2026</td>
<td className="py-3 px-space-base text-right">
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-medium transition-colors" type="button">Inspect</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-base font-medium text-primary flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container">thermostat</span>
<span>Environmental Cond.</span>
</td>
<td className="py-3 px-space-md text-on-surface-variant">Enforces ambient operational parameters: Temp bounds (15°C–25°C Class II; -10°C–40°C Class III) and RH rate-of-change ceilings.</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-emerald-800">
<span className="material-symbols-outlined text-[14px]">check</span> Configured
                  </span>
</td>
<td className="py-3 px-space-md font-metric-tabular text-secondary text-body-sm">28 Aug 2026</td>
<td className="py-3 px-space-base text-right">
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-medium transition-colors" type="button">Inspect</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-base font-medium text-primary flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container">gavel</span>
<span>Decision Engine</span>
</td>
<td className="py-3 px-space-md text-on-surface-variant">Synthesizes aggregate verdict, formats legal seal authorization payload, and gates official certificate generation.</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold text-emerald-800">
<span className="material-symbols-outlined text-[14px]">check</span> Configured
                  </span>
</td>
<td className="py-3 px-space-md font-metric-tabular text-secondary text-body-sm">28 Aug 2026</td>
<td className="py-3 px-space-base text-right">
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-medium transition-colors" type="button">Inspect</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  d. VERSION COMPARISON MATRIX (R76-2026.0 vs R76-2026.1)  */}
<div className="flex flex-col bg-surface-container-lowest rounded-xl p-space-base shadow-sm">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-primary">difference</span>
<h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">Configuration Delta Matrix</h3>
</div>
<span className="font-metric-tabular font-label-sm text-label-sm text-secondary">Diff: R76-2026.0 → R76-2026.1 (Active)</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-space-md">
          Line-by-line configuration differentials between the current active standard and the prior archived release.
        </p>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<tr>
<th className="py-2 px-space-sm">Component</th>
<th className="py-2 px-space-sm">Archived (R76-2026.0)</th>
<th className="py-2 px-space-sm">Active (R76-2026.1)</th>
<th className="py-2 px-space-sm">Evaluation Impact / Audit Note</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high/40 font-body-sm">
<tr className="hover:bg-surface-container-low/30">
<td className="py-2.5 px-space-sm font-medium text-primary">Test Applicability</td>
<td className="py-2.5 px-space-sm text-secondary font-metric-tabular">Tare stable: 5.0 s window</td>
<td className="py-2.5 px-space-sm font-semibold text-primary font-metric-tabular">Tare stable: 3.5 s window</td>
<td className="py-2.5 px-space-sm">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium">
                    Tightened tare stability criterion to reduce vibration latency
                  </span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/30">
<td className="py-2.5 px-space-sm font-medium text-primary">Calculation Engine</td>
<td className="py-2.5 px-space-sm text-secondary font-metric-tabular">Rounding step: 0.2 d</td>
<td className="py-2.5 px-space-sm font-semibold text-primary font-metric-tabular">Rounding step: 0.1 d</td>
<td className="py-2.5 px-space-sm">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium">
                    Normalized rounding precision to standard 0.1d resolution
                  </span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/30">
<td className="py-2.5 px-space-sm font-medium text-primary">Acceptance Criteria</td>
<td className="py-2.5 px-space-sm text-secondary font-metric-tabular">Bracket 3: &gt; 2000e</td>
<td className="py-2.5 px-space-sm font-semibold text-primary font-metric-tabular">Bracket 3: 2001e to 10000e</td>
<td className="py-2.5 px-space-sm">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded bg-amber-50 text-amber-900 font-medium">
                    Explicit cap added for ultra-high-capacity Class III instruments
                  </span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/30">
<td className="py-2.5 px-space-sm font-medium text-primary">Environmental Rules</td>
<td className="py-2.5 px-space-sm text-secondary font-metric-tabular">Class II: 15°C–25°C</td>
<td className="py-2.5 px-space-sm text-secondary font-metric-tabular">Class II: 15°C–25°C</td>
<td className="py-2.5 px-space-sm">
<span className="font-label-sm text-label-sm text-secondary">Identical / Unchanged</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low/30">
<td className="py-2.5 px-space-sm font-medium text-primary">Decision Logic</td>
<td className="py-2.5 px-space-sm text-secondary font-metric-tabular">Tolerance margin: 95%</td>
<td className="py-2.5 px-space-sm font-semibold text-primary font-metric-tabular">Tolerance margin: 90%</td>
<td className="py-2.5 px-space-sm">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium">
                    Review escalation triggered when error reaches 90% of MPE
                  </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  RIGHT WORKSPACE: 30% (4 Cols of 12) - INSPECTOR & GOVERNANCE DRAWER  */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/*  a.  RULE VERSION INSPECTOR  */}
<div className="flex flex-col bg-surface-container-lowest rounded-xl p-space-base shadow-sm">
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/60">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-tertiary-container">shield</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Version Inspector</h3>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-label-sm text-label-sm font-semibold">LOCKED</span>
</div>
<div className="flex flex-col gap-space-md pt-space-base">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase"> Specification</span>
<div className="flex items-baseline justify-between mt-0.5">
<h4 className="font-headline-md text-headline-md font-metric-tabular text-primary font-bold">R76-2026.1</h4>
<span className="font-label-sm text-label-sm text-secondary font-metric-tabular">rev #4</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">OIML R 76-1:2006 Production Rule Set</p>
</div>
{/*  Metadata List  */}
<div className="flex flex-col gap-space-xs p-space-sm bg-surface-container-low rounded-lg font-body-sm text-body-sm">
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Effective From:</span>
<span className="font-medium font-metric-tabular text-primary">01 Sep 2026</span>
</div>
<div className="flex justify-between items-center py-1 border-t border-surface-container-high/60">
<span className="text-secondary">Published:</span>
<span className="font-medium font-metric-tabular text-primary">28 Aug 2026 (14:02 UTC)</span>
</div>
<div className="flex justify-between items-center py-1 border-t border-surface-container-high/60">
<span className="text-secondary">Published By:</span>
<span className="font-medium text-primary">M. Sharma (#A-001)</span>
</div>
<div className="flex justify-between items-center py-1 border-t border-surface-container-high/60">
<span className="text-secondary">Bound Evidence:</span>
<span className="font-metric-tabular font-bold text-primary">87 reports (318 tests)</span>
</div>
<div className="flex flex-col gap-1 py-1 border-t border-surface-container-high/60">
<span className="text-secondary font-label-sm text-label-sm">Cryptographic Digest (SHA-256):</span>
<span className="font-metric-tabular text-label-sm text-on-surface-variant break-all select-all bg-surface-container-lowest p-1 rounded font-mono">
                6d90a789ef7c4d51b369c0d128ba7fec590a88019ab7234a
              </span>
</div>
</div>
{/*  Security Immutability Alert  */}
<div className="flex items-start gap-space-xs p-space-sm rounded-lg bg-surface-container text-on-surface-variant">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">lock_clock</span>
<div className="text-body-sm font-body-sm">
<strong className="text-primary font-medium">Immutable Record:</strong> This version is sealed in production. Parameter modifications require creating an incremental draft copy.
            </div>
</div>
{/*  Inspector CTAs  */}
<div className="flex flex-col gap-space-xs pt-space-xs">
<button className="w-full flex items-center justify-center gap-space-xs px-space-md py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md font-semibold transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">content_copy</span>
<span>Clone as New Draft Version</span>
</button>
<button className="w-full flex items-center justify-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md font-medium transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">file_download</span>
<span>Export Metrology Schema (.JSON)</span>
</button>
</div>
</div>
</div>
{/*  b. CONTROLLED PROMOTION & DRAFT WORKFLOW  */}
<div className="flex flex-col bg-surface-container-lowest rounded-xl p-space-base shadow-sm">
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/60">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-primary">alt_route</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Controlled Promotion Engine</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">Lifecycle</span>
</div>
<div className="flex flex-col gap-space-md pt-space-base">
{/*  Step Tracker  */}
<div className="flex items-center justify-between font-label-sm text-label-sm">
<div className="flex flex-col items-center gap-1">
<div className="w-6 h-6 rounded-full bg-amber-500 text-on-primary flex items-center justify-center font-bold text-[11px]">1</div>
<span className="font-semibold text-amber-900">Draft</span>
</div>
<div className="h-0.5 flex-1 bg-surface-container-highest mx-1"></div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-bold text-[11px]">2</div>
<span className="text-secondary">Validate</span>
</div>
<div className="h-0.5 flex-1 bg-surface-container-highest mx-1"></div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-bold text-[11px]">3</div>
<span className="text-secondary">Sign-off</span>
</div>
<div className="h-0.5 flex-1 bg-surface-container-highest mx-1"></div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-bold text-[11px]">4</div>
<span className="text-secondary">Publish</span>
</div>
</div>
{/*  Pending Draft Card  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-semibold text-primary">Current Open Candidate:</span>
<span className="font-metric-tabular font-bold text-amber-800 text-body-sm">R76-DRAFT-02</span>
</div>
<div className="flex items-center gap-1.5 text-emerald-800 font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[15px]">check_circle</span>
<span>4/4 Structural Schema Checks Passed</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">Dependency integrity intact, 0 orphan parameters detected, MPE tables contiguous.</p>
</div>
<div className="flex flex-col gap-space-xs">
<button className="w-full flex items-center justify-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-medium transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">rule</span>
<span>Run Automated Schema Validator</span>
</button>
<button className="w-full flex items-center justify-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-low font-label-md text-label-md font-medium transition-colors shadow-2xs" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">how_to_reg</span>
<span>Request Peer Reviewer Sign-off</span>
</button>
</div>
</div>
</div>
{/*  c. HISTORICAL EVALUATION INTEGRITY NOTICE  */}
<div className="flex flex-col bg-surface-container-lowest rounded-xl p-space-base shadow-sm">
<div className="flex items-center gap-space-xs pb-space-sm border-b border-surface-container-high/60">
<span className="material-symbols-outlined text-[20px] text-primary">history_edu</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Metrological Integrity Principle</h3>
</div>
<div className="flex flex-col gap-space-sm pt-space-base">
<div className="p-space-sm rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-space-xs">
<p className="leading-relaxed">
              Historical calibration dossiers retain <strong>permanent cryptographic association</strong> with the exact rule version effective at the timestamp of physical testing.
            </p>
<div className="p-2 rounded bg-surface-container-lowest font-metric-tabular text-body-sm text-primary flex flex-col gap-1">
<div className="flex justify-between">
<span>Dossier TR-0091:</span>
<span className="font-semibold text-emerald-800">Locked to R76-2026.1</span>
</div>
<div className="flex justify-between text-secondary">
<span>Dossier TR-0080:</span>
<span className="font-medium">Locked to R76-2026.0</span>
</div>
</div>
<p className="font-label-sm text-label-sm text-secondary">
              Publishing newer rule revisions never mutates or triggers retroactive recalculation of historic legal compliance documents.
            </p>
</div>
</div>
</div>
{/*  d. AUDIT LEDGER LINK & ROLES MATRIX  */}
<div className="flex flex-col bg-surface-container-lowest rounded-xl p-space-base shadow-sm">
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high/60">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-primary">receipt_long</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Audit Authority &amp; Access</h3>
</div>
<span className="font-label-sm text-label-sm text-emerald-800 font-medium">Sync: Verified</span>
</div>
<div className="flex flex-col gap-space-md pt-space-base">
<p className="font-body-sm text-body-sm text-secondary">
            All configuration updates, schema diffs, and promotion events are permanently recorded into the platform's write-once audit trail.
          </p>
{/*  Permissions Matrix Table  */}
<div className="overflow-hidden rounded-lg bg-surface-container-low">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="text-secondary font-label-sm text-label-sm uppercase bg-surface-container">
<tr>
<th className="py-1.5 px-space-sm">Role</th>
<th className="py-1.5 px-space-sm text-center">Draft</th>
<th className="py-1.5 px-space-sm text-center">Review</th>
<th className="py-1.5 px-space-sm text-center">Publish</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high/40 text-on-surface">
<tr>
<td className="py-1.5 px-space-sm font-medium">Administrator</td>
<td className="py-1.5 px-space-sm text-center text-emerald-700 font-bold">✓</td>
<td className="py-1.5 px-space-sm text-center text-emerald-700 font-bold">✓</td>
<td className="py-1.5 px-space-sm text-center text-emerald-700 font-bold">✓</td>
</tr>
<tr>
<td className="py-1.5 px-space-sm font-medium">Chief Metrologist</td>
<td className="py-1.5 px-space-sm text-center text-emerald-700 font-bold">✓</td>
<td className="py-1.5 px-space-sm text-center text-emerald-700 font-bold">✓</td>
<td className="py-1.5 px-space-sm text-center text-secondary">×</td>
</tr>
<tr>
<td className="py-1.5 px-space-sm font-medium">Test Officer</td>
<td className="py-1.5 px-space-sm text-center text-secondary">×</td>
<td className="py-1.5 px-space-sm text-center text-secondary">×</td>
<td className="py-1.5 px-space-sm text-center text-secondary">×</td>
</tr>
</tbody>
</table>
</div>
<a className="inline-flex items-center justify-between font-label-md text-label-md text-primary font-semibold hover:underline pt-1" href="#">
<span>Inspect Rule Configuration Audit Trail</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
}
