import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function GlobalSearch() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full flex flex-col">
{/*  Top Telemetry Status Bar  */}
<header className="w-full bg-navy-dark text-white text-xs px-8 py-2.5 flex flex-wrap items-center justify-between border-b border-navy-primary select-none">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-teal-accent">
<span className="inline-block w-2 h-2 rounded-full bg-teal-accent animate-pulse"></span>
<span className="font-medium tracking-wide">COM1: 9600 BAUD [ONLINE]</span>
</div>
<span className="text-gray-500">|</span>
<span className="text-gray-300 font-normal tracking-wide">ISO/IEC 17025 ACCREDITED ENTERPRISE INDEX</span>
<span className="text-gray-500 hidden sm:inline">|</span>
<span className="text-gray-300 hidden sm:flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-teal-accent">lock</span>
<span>SHA-256 LEDGER SYNCED</span>
</span>
</div>
<div className="flex items-center gap-5 text-gray-300 font-mono text-[11px]">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px] text-teal-accent">dns</span>
          SERVER: 06 SEP 2026 13:52:10 UTC
        </span>
<span className="text-gray-500">|</span>
<span className="px-2 py-0.5 rounded bg-navy-primary text-teal-light font-semibold text-[10px]">NODE-UK-04</span>
</div>
</header>
{/*  Workspace Header & Institutional Context  */}
<div className="w-full bg-white border-b border-card-border px-8 py-6">
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<nav className="flex items-center gap-2 text-xs font-medium text-text-muted mb-2">
<span className="hover:text-navy-primary transition-colors cursor-pointer">VeriScale Lab</span>
<span className="material-symbols-outlined text-[13px] text-gray-400">chevron_right</span>
<span className="hover:text-navy-primary transition-colors cursor-pointer">Enterprise Metrology Repository</span>
<span className="material-symbols-outlined text-[13px] text-gray-400">chevron_right</span>
<span className="text-navy-primary font-semibold">Global Search</span>
</nav>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-3">
<h1 className="text-2xl font-bold text-text-main tracking-tight">Global Metrological Search</h1>
<p className="text-sm text-text-muted">Query instruments, calibration test records, verified dossiers, and compliance audits.</p>
</div>
</div>
{/*  Quick Access Indicators  */}
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-bg border border-card-border text-text-muted text-xs">
<span className="material-symbols-outlined text-[16px] text-navy-primary">keyboard</span>
<span>Shortcut:</span>
<kbd className="bg-white px-1.5 py-0.5 rounded border border-card-border font-mono font-semibold text-text-main">Ctrl + K</kbd>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-card-border hover:bg-surface-bg text-text-muted hover:text-text-main text-xs font-medium transition-colors" id="clearSearchBtn" type="button">
<span className="material-symbols-outlined text-[15px]">refresh</span>
<span>Reset</span>
</button>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-teal-light text-teal-accent font-medium text-xs">
<span className="material-symbols-outlined text-[15px]">bolt</span>
<span>Index Online</span>
</div>
</div>
</div>
</div>
{/*  Main Content Container with Deliberate Whitespace  */}
<div className="max-w-[1440px] w-full mx-auto px-8 py-8 flex flex-col gap-8 flex-1">
{/*  Unified Primary Search Console Card  */}
<section className="bg-white rounded-lg border border-card-border shadow-sm p-6 lg:p-7 flex flex-col gap-6">
{/*  Main Search Bar  */}
<div className="flex flex-col sm:flex-row items-stretch gap-3">
<div className="relative flex-1 flex items-center bg-surface-bg rounded-lg border border-card-border focus-within:border-navy-primary focus-within:bg-white focus-within:ring-2 focus-within:ring-navy-primary/10 transition-all">
<span className="material-symbols-outlined text-text-muted pl-4 pr-2 text-[22px]">search</span>
<input className="w-full h-12 bg-transparent text-base font-medium text-text-main placeholder:text-gray-400 focus:outline-none pr-10" id="globalSearchInput" placeholder="Search by Instrument S/N, Pattern Approval, Test ID, Dossier No, or Manufacturer..." spellCheck="false" type="text" defaultValue="WT100-2026-001"/>
<button className="absolute right-3 p-1 text-gray-400 hover:text-alert transition-colors" id="inputClearBtn" title="Clear input" type="button">
<span className="material-symbols-outlined text-[18px]">cancel</span>
</button>
</div>
<button className="h-12 px-7 bg-navy-primary hover:bg-navy-dark text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm shrink-0" type="button">
<span className="material-symbols-outlined text-[18px]">manage_search</span>
<span>Execute Query</span>
</button>
</div>
{/*  Scope Filters & Recent Searches  */}
<div className="flex flex-col gap-4 pt-1">
{/*  Category Pills  */}
<div className="flex flex-wrap items-center gap-2">
<span className="text-xs font-semibold uppercase tracking-wider text-text-muted mr-1">Scope:</span>
<button className="px-3.5 py-1.5 rounded-md bg-navy-primary text-white text-xs font-semibold flex items-center gap-2 shadow-xs" type="button">
<span>All Records</span>
<span className="px-1.5 py-0.2 rounded bg-white/20 text-white font-mono text-[11px]">8</span>
</button>
<button className="px-3.5 py-1.5 rounded-md bg-surface-bg hover:bg-gray-200/70 border border-card-border text-text-main text-xs font-medium flex items-center gap-2 transition-colors" type="button">
<span>Instruments</span>
<span className="px-1.5 py-0.2 rounded bg-white text-text-muted font-mono text-[11px] border border-card-border">3</span>
</button>
<button className="px-3.5 py-1.5 rounded-md bg-surface-bg hover:bg-gray-200/70 border border-card-border text-text-main text-xs font-medium flex items-center gap-2 transition-colors" type="button">
<span>Test Records</span>
<span className="px-1.5 py-0.2 rounded bg-white text-text-muted font-mono text-[11px] border border-card-border">2</span>
</button>
<button className="px-3.5 py-1.5 rounded-md bg-surface-bg hover:bg-gray-200/70 border border-card-border text-text-main text-xs font-medium flex items-center gap-2 transition-colors" type="button">
<span>Reports &amp; Dossiers</span>
<span className="px-1.5 py-0.2 rounded bg-white text-text-muted font-mono text-[11px] border border-card-border">2</span>
</button>
<button className="px-3.5 py-1.5 rounded-md bg-surface-bg hover:bg-gray-200/70 border border-card-border text-text-main text-xs font-medium flex items-center gap-2 transition-colors" type="button">
<span>Compliance</span>
<span className="px-1.5 py-0.2 rounded bg-white text-text-muted font-mono text-[11px] border border-card-border">1</span>
</button>
<button className="px-3.5 py-1.5 rounded-md bg-surface-bg text-gray-400 text-xs font-normal border border-dashed border-gray-300 flex items-center gap-2 cursor-not-allowed opacity-60" disabled="" type="button">
<span>Evidence Artifacts</span>
<span className="px-1.5 py-0.2 rounded bg-gray-100 text-gray-400 font-mono text-[11px]">0</span>
</button>
{/*  Advanced Filter Trigger  */}
<button className="ml-auto text-xs font-semibold text-navy-primary hover:text-teal-accent flex items-center gap-1 transition-colors" id="toggleFilterBtn" type="button">
<span className="material-symbols-outlined text-[16px]" id="filterChevron">tune</span>
<span>Advanced Parameters</span>
</button>
</div>
{/*  Collapsible Filter Panel  */}
<div className="hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4 rounded-md bg-surface-bg border border-card-border mt-2" id="filterMatrix">
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Record Type</label>
<select className="w-full bg-white text-xs text-text-main border border-card-border rounded-md px-2.5 py-2 focus:outline-none focus:border-navy-primary">
<option>All Types</option>
<option>Platform Scale</option>
<option>Bench Scale</option>
<option>Precision Balance</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Manufacturer</label>
<select className="w-full bg-white text-xs text-text-main border border-card-border rounded-md px-2.5 py-2 focus:outline-none focus:border-navy-primary">
<option>Any Manufacturer</option>
<option >ABC WeighTech</option>
<option>XYZ Scales Corp</option>
<option>MetroScale AG</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Verification Status</label>
<select className="w-full bg-white text-xs text-text-main border border-card-border rounded-md px-2.5 py-2 focus:outline-none focus:border-navy-primary">
<option>All Conformance</option>
<option>Pass / Verified</option>
<option>MPE Warning</option>
<option>Failed / Rejected</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Temporal Scope</label>
<select className="w-full bg-white text-xs text-text-main border border-card-border rounded-md px-2.5 py-2 focus:outline-none focus:border-navy-primary">
<option>All Time Records</option>
<option>Current Fiscal Year (2026)</option>
<option>Last 30 Days</option>
<option>Historical Archive</option>
</select>
</div>
<div className="flex items-end gap-2">
<button className="flex-1 py-2 bg-navy-primary text-white text-xs font-semibold rounded-md hover:bg-navy-dark transition-colors" type="button">Apply</button>
<button className="px-3 py-2 bg-white border border-card-border text-text-muted text-xs rounded-md hover:text-text-main transition-colors" type="button">Reset</button>
</div>
</div>
{/*  Understated Recent Queries Strip  */}
<div className="flex flex-wrap items-center gap-2 pt-2 border-t border-card-border/60 text-xs text-text-muted">
<span className="font-medium text-text-muted flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-gray-400">history</span>
              Recent Searches:
            </span>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-bg hover:bg-gray-200 border border-card-border text-text-main transition-colors" type="button">
<span className="font-mono text-navy-primary font-medium">WT100-2026-001</span>
<span className="text-gray-400 text-[10px]">Instrument</span>
</button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-bg hover:bg-gray-200 border border-card-border text-text-main transition-colors" type="button">
<span className="font-mono text-navy-primary font-medium">TR-0091</span>
<span className="text-gray-400 text-[10px]">Report</span>
</button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-bg hover:bg-gray-200 border border-card-border text-text-main transition-colors" type="button">
<span className="font-mono text-navy-primary font-medium">ABC WeighTech</span>
<span className="text-gray-400 text-[10px]">Manufacturer</span>
</button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-bg hover:bg-gray-200 border border-card-border text-text-main transition-colors" type="button">
<span className="font-mono text-navy-primary font-medium">TEST-012</span>
<span className="text-gray-400 text-[10px]">Test ID</span>
</button>
<button className="ml-2 text-text-muted hover:text-alert underline text-xs" type="button">Clear</button>
</div>
</div>
</section>
{/*  Search Meta Strip  */}
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-1">
<div className="text-sm text-text-muted">
          Showing results for <span className="font-mono font-bold text-navy-primary bg-white px-2 py-0.5 rounded border border-card-border">"WT100-2026-001"</span>
<span className="mx-2 text-gray-300">|</span>
          Found <strong className="font-semibold text-text-main">8 records</strong> across 4 metrological partitions
        </div>
<div className="flex items-center gap-4 text-xs text-text-muted self-end sm:self-auto">
<div className="flex items-center gap-2">
<span>Sort By:</span>
<select className="bg-white border border-card-border text-text-main font-medium rounded-md px-2.5 py-1 focus:outline-none">
<option>Relevance Score (BM25 Index)</option>
<option>Execution Date (Newest First)</option>
<option>Execution Date (Oldest First)</option>
<option>Calibration Expiry</option>
</select>
</div>
<div className="flex items-center bg-white border border-card-border rounded-md p-0.5">
<button className="p-1 rounded bg-surface-bg text-navy-primary" title="Grouped View" type="button">
<span className="material-symbols-outlined text-[18px]">view_list</span>
</button>
<button className="p-1 rounded text-gray-400 hover:text-navy-primary" title="Dense Tabular" type="button">
<span className="material-symbols-outlined text-[18px]">table_rows</span>
</button>
</div>
</div>
</div>
{/*  Main Two-Column Layout (Generous 8-Col Results / 4-Col Inspector)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*  Left Results Column (8 cols)  */}
<div className="lg:col-span-8 flex flex-col gap-8">
{/*  Section 1: Instruments  */}
<section className="flex flex-col gap-4">
<div className="flex items-center justify-between border-b border-card-border pb-2.5">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-navy-primary text-[20px]">scale</span>
<h2 className="text-sm font-bold uppercase tracking-wider text-navy-primary">Instruments</h2>
<span className="px-2 py-0.5 rounded-full bg-tag-bg text-navy-primary font-mono font-semibold text-xs">3</span>
</div>
<span className="text-xs text-text-muted">OIML R 76 Hardware</span>
</div>
<div className="flex flex-col gap-4">
{/*  Item 1 (Highlighted / Active Selection)  */}
<article className="bg-white rounded-lg border-2 border-navy-primary/30 p-6 shadow-sm flex flex-col gap-5 relative overflow-hidden transition-all hover:shadow-md">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-navy-primary"></div>
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2 mb-1.5 flex-wrap">
<span className="px-2 py-0.5 rounded bg-surface-bg border border-card-border font-mono text-xs font-semibold text-navy-primary">Class III (Medium)</span>
<span className="text-xs text-text-muted">e = 10 g • Max 100.000 kg</span>
</div>
<h3 className="text-lg font-bold text-text-main">ABC WeighTech Pvt. Ltd. — WT-100 Platform Scale</h3>
</div>
<span className="self-start px-2.5 py-1 rounded-full bg-success-bg text-success font-semibold text-xs tracking-wide">
                    Active in Service
                  </span>
</div>
{/*  Specs Grid  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-surface-bg border border-card-border/80 font-mono text-xs">
<div>
<span className="text-text-muted block text-[11px] mb-0.5">Serial Number</span>
<span className="font-bold text-navy-primary bg-white px-1.5 py-0.5 rounded border border-card-border inline-block">WT100-2026-001</span>
</div>
<div>
<span className="text-text-muted block text-[11px] mb-0.5">Pattern Approval</span>
<span className="font-semibold text-text-main">UK/0126/0049</span>
</div>
<div>
<span className="text-text-muted block text-[11px] mb-0.5">Capacity Range</span>
<span className="text-text-main">Min 20 g / Max 100 kg</span>
</div>
<div>
<span className="text-text-muted block text-[11px] mb-0.5">Verification Interval (e)</span>
<span className="text-text-main">e = 10 g (n = 10,000)</span>
</div>
</div>
{/*  Footer & Action Buttons  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 text-xs">
<div className="flex items-center gap-1.5 text-text-muted">
<span className="material-symbols-outlined text-[16px] text-teal-accent">location_on</span>
<span>Installation: Bay 3 Metrology Lab (Bench Station A)</span>
</div>
<div className="flex items-center gap-2.5 self-end sm:self-auto">
<button className="px-3 py-1.5 rounded-md bg-white border border-card-border hover:bg-surface-bg text-text-main font-medium transition-colors" type="button">
                      View History (12)
                    </button>
<button className="px-4 py-1.5 rounded-md bg-navy-primary hover:bg-navy-dark text-white font-semibold flex items-center gap-1.5 transition-colors shadow-xs" type="button">
<span>Open Details</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
</article>
{/*  Item 2  */}
<article className="bg-white rounded-lg border border-card-border p-5 flex flex-col gap-3 transition-colors hover:border-gray-400">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-1.5 py-0.5 rounded bg-surface-bg text-navy-primary text-xs font-mono font-medium">Class III</span>
<span className="text-xs text-text-muted font-mono">S/N: <strong className="text-text-main">WT100-2025-018</strong></span>
</div>
<h3 className="text-base font-semibold text-text-main">ABC WeighTech Pvt. Ltd. — WT-100 Platform Scale (Unit 018)</h3>
</div>
<div className="flex items-center gap-3 self-start sm:self-auto">
<span className="px-2 py-0.5 rounded-full bg-success-bg text-success text-xs font-semibold">Active</span>
<button className="px-3 py-1.5 rounded-md bg-surface-bg border border-card-border hover:bg-white text-navy-primary font-medium text-xs flex items-center gap-1 transition-colors" type="button">
<span>Open</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
<div className="text-xs text-text-muted flex items-center gap-1.5 pt-1 border-t border-card-border/50">
<span className="material-symbols-outlined text-[15px] text-gray-400">inventory_2</span>
<span>Bay 1 Archive (Storage) • Range: Max 100.000 kg</span>
</div>
</article>
{/*  Item 3  */}
<article className="bg-white rounded-lg border border-card-border p-5 flex flex-col gap-3 opacity-80 hover:opacity-100 transition-opacity">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-1.5 py-0.5 rounded bg-surface-bg text-text-muted text-xs font-mono">Class III</span>
<span className="text-xs text-text-muted font-mono">S/N: <strong className="text-text-main">WT100-2026-009</strong></span>
</div>
<h3 className="text-base font-semibold text-text-main">ABC WeighTech Pvt. Ltd. — WT-100 Platform Scale (Unit 009)</h3>
</div>
<div className="flex items-center gap-3 self-start sm:self-auto">
<span className="px-2 py-0.5 rounded-full bg-surface-bg border border-card-border text-text-muted text-xs font-medium">Decommissioned</span>
<button className="px-3 py-1.5 rounded-md bg-surface-bg border border-card-border hover:bg-white text-text-main font-medium text-xs flex items-center gap-1 transition-colors" type="button">
<span>Open</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
<div className="text-xs text-text-muted flex items-center gap-1.5 pt-1 border-t border-card-border/50">
<span className="material-symbols-outlined text-[15px] text-gray-400">history_toggle_off</span>
<span>Decommissioned: 14 Aug 2026 • Reason: Load Cell Strain Gauge Drift</span>
</div>
</article>
</div>
</section>
{/*  Section 2: Test Records  */}
<section className="flex flex-col gap-4">
<div className="flex items-center justify-between border-b border-card-border pb-2.5">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-navy-primary text-[20px]">fact_check</span>
<h2 className="text-sm font-bold uppercase tracking-wider text-navy-primary">Test Records</h2>
<span className="px-2 py-0.5 rounded-full bg-tag-bg text-navy-primary font-mono font-semibold text-xs">2</span>
</div>
<span className="text-xs text-text-muted">Linked via S/N: WT100-2026-001</span>
</div>
<div className="flex flex-col gap-4">
{/*  Test Record 1  */}
<article className="bg-white rounded-lg border border-card-border p-6 shadow-sm flex flex-col gap-4">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2 mb-1.5">
<span className="px-2 py-0.5 rounded bg-navy-primary text-white font-mono font-bold text-xs">TEST-012</span>
<span className="text-xs text-text-muted font-medium">Unit: WT-100 (S/N: WT100-2026-001)</span>
</div>
<h3 className="text-base font-bold text-text-main">Accuracy / Error of Indication Test (5 load steps up to 100 kg)</h3>
</div>
<span className="self-start px-2.5 py-1 rounded-full bg-success-bg text-success font-semibold text-xs">
                    ✓ Pass
                  </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-md bg-surface-bg border border-card-border/70 text-xs">
<div>
<span className="text-text-muted block text-[11px] mb-0.5">Execution Timestamp</span>
<span className="font-mono text-text-main font-medium">06 Sep 2026 • 13:14 UTC</span>
</div>
<div>
<span className="text-text-muted block text-[11px] mb-0.5">Technician / Reviewer</span>
<span className="text-text-main font-medium">A. Kumar (#T-302) / R. Singh</span>
</div>
<div>
<span className="text-text-muted block text-[11px] mb-0.5">Tolerance Deviation</span>
<span className="font-mono font-semibold text-teal-accent">Max dev: +0.012 kg (MPE ±0.015)</span>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 text-xs">
<div className="flex items-center gap-1.5 text-text-muted">
<span className="material-symbols-outlined text-[16px] text-navy-primary">link</span>
<span>Bound to: <strong className="text-navy-primary font-semibold hover:underline cursor-pointer">Official Report TR-0091</strong></span>
</div>
<button className="px-4 py-1.5 rounded-md bg-surface-bg border border-card-border hover:bg-white text-navy-primary font-semibold self-end sm:self-auto flex items-center gap-1.5 transition-colors" type="button">
<span>Open Workspace</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</article>
{/*  Test Record 2  */}
<article className="bg-white rounded-lg border border-card-border p-6 shadow-sm flex flex-col gap-4">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2 mb-1.5">
<span className="px-2 py-0.5 rounded bg-navy-primary text-white font-mono font-bold text-xs">TEST-011</span>
<span className="text-xs text-text-muted font-medium">Unit: WT-100 (S/N: WT100-2026-001)</span>
</div>
<h3 className="text-base font-bold text-text-main">Repeatability Test (5 consecutive trials @ 20 kg midpoint)</h3>
</div>
<span className="self-start px-2.5 py-1 rounded-full bg-success-bg text-success font-semibold text-xs">
                    ✓ Pass
                  </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-md bg-surface-bg border border-card-border/70 text-xs">
<div>
<span className="text-text-muted block text-[11px] mb-0.5">Execution Timestamp</span>
<span className="font-mono text-text-main font-medium">06 Sep 2026 • 11:45 UTC</span>
</div>
<div>
<span className="text-text-muted block text-[11px] mb-0.5">Technician</span>
<span className="text-text-main font-medium">A. Kumar (#T-302)</span>
</div>
<div>
<span className="text-text-muted block text-[11px] mb-0.5">Observed Variance</span>
<span className="font-mono font-semibold text-teal-accent">Δ = 0.000 kg (Within Limit e)</span>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 text-xs">
<div className="flex items-center gap-1.5 text-text-muted">
<span className="material-symbols-outlined text-[16px] text-navy-primary">link</span>
<span>Bound to: <strong className="text-navy-primary font-semibold hover:underline cursor-pointer">Official Report TR-0091</strong></span>
</div>
<button className="px-4 py-1.5 rounded-md bg-surface-bg border border-card-border hover:bg-white text-navy-primary font-semibold self-end sm:self-auto flex items-center gap-1.5 transition-colors" type="button">
<span>Open Workspace</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</article>
</div>
</section>
{/*  Section 3: Reports & Dossiers  */}
<section className="flex flex-col gap-4">
<div className="flex items-center justify-between border-b border-card-border pb-2.5">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-navy-primary text-[20px]">description</span>
<h2 className="text-sm font-bold uppercase tracking-wider text-navy-primary">Reports &amp; Dossiers</h2>
<span className="px-2 py-0.5 rounded-full bg-tag-bg text-navy-primary font-mono font-semibold text-xs">2</span>
</div>
<span className="text-xs text-text-muted">ISO/IEC 17025 Conformity</span>
</div>
<div className="flex flex-col gap-4">
{/*  Report 1  */}
<article className="bg-white rounded-lg border border-card-border p-6 shadow-sm flex flex-col gap-4">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2 mb-1.5">
<span className="px-2 py-0.5 rounded bg-navy-primary text-white font-mono font-bold text-xs">TR-0091</span>
<span className="text-xs text-teal-accent font-semibold">Approved V1.0 (Legally Sealed)</span>
</div>
<h3 className="text-base font-bold text-text-main">Type Evaluation &amp; Verification Certificate (OIML R 76-1:2006)</h3>
</div>
<span className="self-start px-2.5 py-1 rounded-full bg-teal-light text-teal-accent font-semibold text-xs">
                    Signature Valid
                  </span>
</div>
<div className="p-3.5 rounded-md bg-surface-bg border border-card-border/70 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div className="space-y-0.5 text-text-muted">
<div>Unit: <strong className="text-text-main">ABC WeighTech WT-100</strong> (S/N: WT100-2026-001)</div>
<div>Issued: <span className="font-mono text-text-main">06 Sep 2026</span> • Signatory: <span className="text-navy-primary font-semibold">R. Singh (Technical Lead)</span></div>
</div>
<div className="font-mono text-gray-500 text-[11px] flex items-center gap-1.5 self-start sm:self-auto">
<span className="material-symbols-outlined text-[15px] text-teal-accent">fingerprint</span>
<span>SHA-256: 7f8a92bb...e401</span>
</div>
</div>
<div className="flex items-center justify-end gap-3 pt-1 text-xs">
<button className="px-3.5 py-1.5 rounded-md bg-white border border-card-border hover:bg-surface-bg text-text-muted hover:text-text-main font-medium flex items-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[15px]">download</span>
<span>Download PDF</span>
</button>
<button className="px-4 py-1.5 rounded-md bg-navy-primary hover:bg-navy-dark text-white font-semibold flex items-center gap-1.5 transition-colors shadow-xs" type="button">
<span>Open Official Report</span>
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</button>
</div>
</article>
{/*  Report 2  */}
<article className="bg-white rounded-lg border border-card-border p-5 flex flex-col gap-3">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded bg-surface-bg text-text-muted font-mono font-bold text-xs">TR-0084</span>
<span className="text-xs text-text-muted">Routine Periodic Verification (Quarterly)</span>
</div>
<h3 className="text-base font-semibold text-text-main">Periodic Inspection Dossier</h3>
</div>
<div className="flex items-center gap-3 self-start sm:self-auto">
<span className="px-2 py-0.5 rounded-full bg-success-bg text-success text-xs font-semibold">Pass</span>
<button className="px-3.5 py-1.5 rounded-md bg-surface-bg border border-card-border hover:bg-white text-navy-primary font-medium text-xs flex items-center gap-1 transition-colors" type="button">
<span>Open</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
<div className="text-xs text-text-muted flex items-center gap-2 pt-1 border-t border-card-border/50">
<span>Unit: WT-100 (S/N: WT100-2026-001)</span>
<span className="text-gray-300">•</span>
<span>Date: 20 Aug 2026</span>
</div>
</article>
</div>
</section>
{/*  Section 4: Compliance Assessments  */}
<section className="flex flex-col gap-4">
<div className="flex items-center justify-between border-b border-card-border pb-2.5">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-navy-primary text-[20px]">gavel</span>
<h2 className="text-sm font-bold uppercase tracking-wider text-navy-primary">Compliance Assessments</h2>
<span className="px-2 py-0.5 rounded-full bg-tag-bg text-navy-primary font-mono font-semibold text-xs">1</span>
</div>
<span className="text-xs text-text-muted">Legal Metrology Audit</span>
</div>
<article className="bg-white rounded-lg border border-card-border p-6 shadow-sm flex flex-col gap-4">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
<div>
<div className="flex items-center gap-2 mb-1.5">
<span className="px-2 py-0.5 rounded bg-surface-bg border border-card-border text-navy-primary font-mono font-semibold text-xs">Rule Set R76-2026.1</span>
<span className="text-xs text-text-muted">Target: Test TEST-012</span>
</div>
<h3 className="text-base font-bold text-text-main">OIML R 76 Evaluation — Non-Automatic Weighing Instruments</h3>
</div>
<span className="self-start px-2.5 py-1 rounded-full bg-success-bg text-success font-semibold text-xs">
                  ✓ 12/12 Requirements Met (100%)
                </span>
</div>
<div className="p-3.5 rounded-md bg-surface-bg border border-card-border/70 text-xs flex flex-col gap-1 font-mono">
<div className="flex flex-col sm:flex-row sm:items-center justify-between text-text-muted">
<span>Target Unit: <strong className="text-text-main">WT100-2026-001</strong></span>
<span>Evaluated: 06 Sep 2026 • 12:46 UTC</span>
</div>
<div className="text-text-main pt-1">
                  Engine: Core v4.1 • Verified Sign-off: M. Sharma (#R-109)
                </div>
</div>
<div className="flex items-center justify-end pt-1">
<button className="px-4 py-1.5 rounded-md bg-surface-bg border border-card-border hover:bg-white text-navy-primary font-semibold text-xs flex items-center gap-1.5 transition-colors" type="button">
<span>Open Compliance Dossier</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</article>
</section>
</div>
{/*  Right Column: Contextual Record Inspector (4 cols)  */}
<aside className="lg:col-span-4 flex flex-col gap-6 sticky top-6">
{/*  Inspector Main Card  */}
<div className="bg-white rounded-lg border border-card-border shadow-sm p-6 flex flex-col gap-5">
{/*  Header  */}
<div className="flex items-center justify-between pb-3 border-b border-card-border">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-navy-primary text-[20px]">troubleshoot</span>
<h3 className="text-sm font-bold uppercase tracking-wider text-navy-primary">Record Inspector</h3>
</div>
<span className="px-2 py-0.5 rounded bg-surface-bg border border-card-border text-text-muted text-[11px] font-mono font-medium">Focus Item</span>
</div>
{/*  Active Entity Summary Box  */}
<div className="p-4 rounded-lg bg-surface-bg border border-card-border flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">Platform Scale Entity</span>
<span className="px-2 py-0.5 rounded bg-white border border-card-border text-navy-primary font-bold text-xs font-mono">Class III</span>
</div>
<h4 className="text-base font-bold text-text-main">ABC WeighTech WT-100</h4>
<div className="font-mono text-xs text-text-muted">
                Serial Number: <strong className="text-navy-primary font-bold">WT100-2026-001</strong>
</div>
</div>
{/*  2x2 Parameter Grid  */}
<div className="flex flex-col gap-2">
<span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Metrological Specifications</span>
<div className="grid grid-cols-2 gap-2.5 font-mono">
<div className="p-3 rounded-md bg-surface-bg border border-card-border">
<span className="text-text-muted text-[11px] block">Max Capacity</span>
<span className="font-bold text-navy-primary text-sm">100.000 kg</span>
</div>
<div className="p-3 rounded-md bg-surface-bg border border-card-border">
<span className="text-text-muted text-[11px] block">Min Capacity</span>
<span className="font-bold text-navy-primary text-sm">20 g</span>
</div>
<div className="p-3 rounded-md bg-surface-bg border border-card-border">
<span className="text-text-muted text-[11px] block">Scale Interval (e)</span>
<span className="font-bold text-navy-primary text-sm">10 g</span>
</div>
<div className="p-3 rounded-md bg-surface-bg border border-card-border">
<span className="text-text-muted text-[11px] block">Verified Division (n)</span>
<span className="font-bold text-navy-primary text-sm">10,000</span>
</div>
</div>
</div>
{/*  Location & Conformance  */}
<div className="flex flex-col gap-3 py-1 border-t border-card-border/60 text-xs">
<div className="flex items-start gap-2.5 pt-2">
<span className="material-symbols-outlined text-[18px] text-teal-accent shrink-0 mt-0.5">pin_drop</span>
<div>
<span className="text-text-muted text-[11px] block">Authorized Station</span>
<span className="font-medium text-text-main">Bay 3 Metrology Lab (Bench 04-A)</span>
</div>
</div>
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-[18px] text-success shrink-0 mt-0.5">verified</span>
<div>
<span className="text-text-muted text-[11px] block">Current Conformance</span>
<span className="font-semibold text-success">Pass (OIML R 76 Fully Compliant)</span>
</div>
</div>
</div>
{/*  Connected Relational Data Rows  */}
<div className="flex flex-col gap-2 pt-2 border-t border-card-border/60">
<div className="flex items-center justify-between text-[11px] font-semibold text-text-muted uppercase tracking-wider">
<span>Relational Tree</span>
<span className="text-teal-accent">Graph Synced</span>
</div>
<div className="flex flex-col gap-1.5 text-xs font-mono">
<div className="p-2.5 rounded bg-surface-bg hover:bg-gray-200/80 border border-card-border flex items-center justify-between transition-colors cursor-pointer">
<div className="flex items-center gap-2 truncate">
<span className="material-symbols-outlined text-[16px] text-navy-primary">timeline</span>
<span className="truncate">Latest: <strong className="text-navy-primary">TEST-012</strong></span>
</div>
<span className="material-symbols-outlined text-[14px] text-gray-400">chevron_right</span>
</div>
<div className="p-2.5 rounded bg-surface-bg hover:bg-gray-200/80 border border-card-border flex items-center justify-between transition-colors cursor-pointer">
<div className="flex items-center gap-2 truncate">
<span className="material-symbols-outlined text-[16px] text-teal-accent">verified</span>
<span className="truncate">Dossier: <strong className="text-navy-primary">TR-0091</strong></span>
</div>
<span className="material-symbols-outlined text-[14px] text-gray-400">chevron_right</span>
</div>
<div className="p-2.5 rounded bg-surface-bg hover:bg-gray-200/80 border border-card-border flex items-center justify-between transition-colors cursor-pointer">
<div className="flex items-center gap-2 truncate">
<span className="material-symbols-outlined text-[16px] text-text-muted">security</span>
<span className="truncate">Assessment: <strong className="text-navy-primary">R76-2026.1</strong></span>
</div>
<span className="material-symbols-outlined text-[14px] text-gray-400">chevron_right</span>
</div>
</div>
</div>
{/*  Primary Inspector Action Buttons  */}
<div className="flex flex-col gap-2 pt-2">
<button className="w-full py-2.5 bg-navy-primary hover:bg-navy-dark text-white rounded-md font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs" type="button">
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
<span>Open Full Instrument Record</span>
</button>
<button className="w-full py-2 bg-white border border-card-border hover:bg-surface-bg text-text-main rounded-md font-medium text-xs flex items-center justify-center gap-2 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px] text-text-muted">timeline</span>
<span>Historical Timeline</span>
</button>
</div>
{/*  Role Disclaimer  */}
<div className="p-3 rounded-md bg-surface-bg border border-card-border/70 text-[11px] text-text-muted leading-relaxed flex items-start gap-2">
<span className="material-symbols-outlined text-[15px] text-gray-400 shrink-0 mt-0.5">shield</span>
<div>
                Authorized as Reviewer for <strong className="text-text-main">Manan Sharma (#R-109)</strong>. Query events logged to ISO/IEC 17025 ledger.
              </div>
</div>
</div>
{/*  Historical Drift Trend Card (Crisp & Clean)  */}
<div className="bg-white rounded-lg border border-card-border shadow-sm p-6 flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">Historical Drift Trend</span>
<span className="text-xs font-mono font-bold text-teal-accent">Var &lt; 0.002%</span>
</div>
<p className="text-xs text-text-muted">5-year linearity drift for S/N WT100-2026-001 vs OIML Class III limits:</p>
<div className="w-full py-3">
<svg className="w-full h-14" fill="none" preserveAspectRatio="none" viewBox="0 0 320 60">
{/*  Upper MPE Limit  */}
<line opacity="0.6" stroke="#BA1A1A" strokeDasharray="3 3" strokeWidth="1.2" x1="0" x2="320" y1="12" y2="12"></line>
{/*  Zero Baseline  */}
<line stroke="#CBD5E1" strokeWidth="1" x1="0" x2="320" y1="30" y2="30"></line>
{/*  Lower MPE Limit  */}
<line opacity="0.6" stroke="#BA1A1A" strokeDasharray="3 3" strokeWidth="1.2" x1="0" x2="320" y1="48" y2="48"></line>
{/*  Trend Curve  */}
<polyline fill="none" points="0,31 40,29 80,32 120,28 160,30 200,27 240,29 280,26 320,28" stroke="#123B5D" strokeWidth="2"></polyline>
{/*  Nodes  */}
<circle cx="40" cy="29" fill="#123B5D" r="3"></circle>
<circle cx="120" cy="28" fill="#123B5D" r="3"></circle>
<circle cx="200" cy="27" fill="#123B5D" r="3"></circle>
<circle cx="280" cy="26" fill="#123B5D" r="3"></circle>
<circle cx="320" cy="28" fill="#008B8B" r="3.5"></circle>
</svg>
</div>
<div className="flex items-center justify-between text-[11px] font-mono text-text-muted border-t border-card-border/50 pt-2">
<span>2022 Verified</span>
<span>2024 Re-check</span>
<span className="font-bold text-navy-primary">06 Sep 2026</span>
</div>
</div>
</aside>
</div>
</div>
</main>
    </div>
  );
}
