import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function AdminSettings() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <aside className="fixed left-0 top-0 h-screen w-[248px] bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.08)]"><div className="flex flex-col flex-1 min-h-0"><div className="h-16 px-space-base flex items-center gap-space-sm bg-primary border-b border-primary-container/40"><img alt="Brand logo" className="h-8 w-auto object-contain" src="/src/assets/technical-emblem.svg"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-primary tracking-wider leading-none">VERISCALE</span><span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest mt-space-2xs leading-none">METROLOGY PLATFORM</span></div></div><div className="flex-1 overflow-y-auto px-space-sm py-space-md"><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Main</div><nav className="flex flex-col gap-space-2xs mb-space-lg" data-active-classes="bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="dashboard" href="#"><span>Dashboard</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="instruments" href="#"><span>Instruments</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="tests" href="#"><span>Tests</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="compliance" href="#"><span>Compliance</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="reports" href="#"><span>Reports</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="repository" href="#"><span>Repository</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="test-history" href="#"><span>Test History</span></a></nav><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Administration</div><nav className="flex flex-col gap-space-2xs" data-active-classes="bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-[#008B8B] before:rounded-r"><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="users" href="#"><span>Users</span></a><a aria-current="page" className="flex items-center px-space-md py-space-sm rounded-lg transition-colors bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-[#008B8B] before:rounded-r" data-path="audit-trail" href="#"><span>Audit Trail</span></a><a className="flex items-center px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="settings" href="#"><span>Settings</span></a></nav></div></div><div className="p-space-base bg-primary border-t border-primary-container/40 flex items-center justify-between"><div className="flex items-center gap-space-md"><div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary font-label-md text-label-md">MS<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed ring-2 ring-primary"></span></div><div className="flex flex-col"><span className="font-label-md text-label-md text-on-primary leading-none">Manan Sharma</span><span className="font-label-sm text-label-sm text-primary-fixed-dim mt-space-2xs leading-none">Administrator</span></div></div><button aria-label="User options" className="text-primary-fixed-dim hover:text-on-primary transition-colors flex items-center" type="button"><span className="material-symbols-outlined text-[20px]">more_vert</span></button></div></aside><div className="pl-[248px]"><header className="fixed top-0 left-[248px] right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-xl border-b border-surface-variant flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="h-8 px-margin-desktop bg-primary text-on-primary flex items-center justify-between text-[11px] font-metric-tabular font-medium tracking-wide border-b border-primary-container/60"><div className="flex items-center gap-space-lg"><div className="flex items-center gap-space-xs"><span className="w-2 h-2 rounded-full bg-[#6fd7d6] animate-pulse"></span><span className="text-[#8cf3f3]">COM1: 9600 BAUD [ONLINE]</span></div><span className="text-primary-fixed-dim/50">|</span><span className="text-primary-fixed tracking-wider uppercase">ISO/IEC 17025 ACCREDITED AUDIT LEDGER</span><span className="text-primary-fixed-dim/50">|</span><span className="text-tertiary-fixed font-semibold">SHA-256 IMMUTABLE LOG APPEND-ONLY</span></div><div className="flex items-center gap-space-md text-primary-fixed-dim"><span className="font-metric-tabular">SERVER: 06 SEP 2026 13:52:10 UTC | NODE-UK-04</span></div></div><div className="h-16 px-margin-desktop flex items-center justify-between"><div className="flex flex-col justify-center"><div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm mb-space-2xs"><span>Administration</span><span className="material-symbols-outlined text-[14px]">chevron_right</span><span className="text-on-surface font-medium">Audit Trail</span></div><div className="flex items-baseline gap-space-sm"><h1 className="font-headline-sm text-headline-sm text-on-surface leading-none">Audit Trail</h1><span className="font-body-sm text-body-sm text-secondary leading-none">Track changes and actions across controlled laboratory records.</span></div></div><div className="flex items-center gap-space-md"><button className="inline-flex items-center gap-space-xs px-space-md py-1.5 bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md text-label-md rounded transition-colors shadow-sm" type="button"><span className="material-symbols-outlined text-[18px] text-secondary">refresh</span><span>Refresh</span></button><button className="inline-flex items-center gap-space-xs px-space-md py-1.5 bg-primary text-on-primary hover:bg-[#0b263d] font-label-md text-label-md rounded transition-colors shadow-sm" type="button"><span className="material-symbols-outlined text-[18px] text-tertiary-fixed">download</span><span>Export Audit Log</span></button></div></div></header><main className="w-full pt-24 bg-surface min-h-screen px-margin-desktop py-space-xl"><div className="flex flex-col w-full">
{/*  Interactive Feedback Banner  */}
<div className="hidden fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-space-base py-space-md rounded-lg shadow-xl flex items-center gap-space-md border border-tertiary-fixed/30" id="saveToast">
<span className="material-symbols-outlined text-tertiary-fixed text-[20px]">verified</span>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-primary text-[13px]">Configuration Persisted</span>
<span className="font-body-sm text-body-sm text-primary-fixed-dim text-[11px]">Ledger Entry ID: EVT-20260906-0885 • Checksum valid</span>
</div>
</div>
{/*  Global Action Bar (Synchronized with App Shell)  */}
<div className="flex flex-wrap items-center justify-between gap-space-base pb-space-lg mb-space-base">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-metric-tabular text-label-sm uppercase tracking-wider">Config Mode</span>
<span className="text-secondary font-label-sm text-label-sm">System Parameter State: <strong className="text-on-surface font-semibold">Synchronized with Node UK-04</strong></span>
</div>
<div className="flex items-center gap-space-md">
<button className="inline-flex items-center gap-space-xs px-space-md py-1.5 bg-surface-container-lowest text-secondary hover:text-on-surface font-label-md text-label-md rounded shadow-sm hover:bg-surface-container-low transition-colors" id="btnDiscard" type="button">
<span className="material-symbols-outlined text-[18px]">undo</span>
<span>Discard Changes</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-lg py-1.5 bg-primary text-on-primary hover:bg-[#071826] font-label-md text-label-md rounded shadow-md transition-all" id="btnSave" type="button">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed">check_circle</span>
<span>Save Configuration</span>
</button>
</div>
</div>
{/*  Administration Summary Strip  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-base mb-space-xl">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-base items-center divide-y lg:divide-y-0 lg:divide-x divide-surface-container-high/60">
<div className="flex flex-col px-space-xs pt-space-xs lg:pt-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-2xs">Accredited Facility</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface truncate">XYZ Metrology Lab</span>
<span className="font-metric-tabular text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-primary font-semibold">LAB-001</span>
</div>
</div>
<div className="flex flex-col px-space-sm pt-space-xs lg:pt-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-2xs">Authorized Users</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-metric-display text-[22px] leading-none text-on-surface">24</span>
<span className="font-body-sm text-body-sm text-secondary">total</span>
<span className="font-label-sm text-label-sm text-[#15803D] font-semibold ml-space-xs">(21 active)</span>
</div>
</div>
<div className="flex flex-col px-space-sm pt-space-xs lg:pt-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-2xs">Governing Metrology Code</span>
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface">OIML R 76</span>
<span className="font-metric-tabular text-[11px] text-secondary font-mono">(NAWI)</span>
</div>
</div>
<div className="flex flex-col px-space-sm pt-space-xs lg:pt-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-2xs">Active Rule Matrix</span>
<div className="flex items-center gap-space-xs">
<span className="font-metric-tabular text-label-md text-on-surface font-semibold">R76-2026.1</span>
<span className="px-1.5 py-0.2 rounded text-[10px] bg-[#F0FDF4] text-[#15803D] font-semibold uppercase">Active</span>
</div>
</div>
<div className="flex flex-col px-space-sm pt-space-xs lg:pt-0">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-space-2xs">Core Subsystems</span>
<div className="flex items-center gap-space-xs text-[#15803D]">
<span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse"></span>
<span className="font-label-md text-label-md font-semibold text-[#15803D]">Operational</span>
<span className="font-body-sm text-body-sm text-secondary text-[11px]">(All 8 synced)</span>
</div>
</div>
</div>
</section>
{/*  Two-Column Architecture  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-xl items-start">
{/*  Left Navigation Spine (approx 260px)  */}
<aside className="xl:col-span-3 bg-surface-container-lowest rounded-xl shadow-sm p-space-md">
<div className="flex items-center justify-between px-space-sm pb-space-sm mb-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Preferences Directory</span>
<span className="material-symbols-outlined text-[16px] text-secondary">tune</span>
</div>
{/*  Category: General  */}
<div className="mb-space-md">
<div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-widest text-secondary/70">General</div>
<nav className="flex flex-col gap-0.5">
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-[#008B8B] before:rounded-r" href="#section-lab-profile">
<span className="flex items-center gap-space-sm font-semibold">
<span className="material-symbols-outlined text-[18px] text-[#008B8B]">apartment</span>
<span>Laboratory Profile</span>
</span>
<span className="material-symbols-outlined text-[16px] text-primary opacity-60">chevron_right</span>
</a>
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-regional">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">public</span>
<span>Regional &amp; Localization</span>
</span>
</a>
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-notifications">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">notifications</span>
<span>Notifications</span>
</span>
</a>
</nav>
</div>
{/*  Category: Access & Security  */}
<div className="mb-space-md">
<div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-widest text-secondary/70">Access &amp; Security</div>
<nav className="flex flex-col gap-0.5">
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-governance">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">badge</span>
<span>Users &amp; Roles</span>
</span>
<span className="font-metric-tabular text-[11px] px-1.5 py-0.5 rounded-full bg-surface-container text-primary font-semibold">24</span>
</a>
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-governance">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">fingerprint</span>
<span>Authentication &amp; SSO</span>
</span>
</a>
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-governance">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">shield</span>
<span>Sessions &amp; Policy</span>
</span>
</a>
</nav>
</div>
{/*  Category: Reporting  */}
<div className="mb-space-md">
<div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-widest text-secondary/70">Reporting</div>
<nav className="flex flex-col gap-0.5">
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-report-identity">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">description</span>
<span>Report Configuration</span>
</span>
</a>
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-report-identity">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">pin</span>
<span>Document Numbering</span>
</span>
</a>
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-report-identity">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
<span>Templates &amp; Formats</span>
</span>
</a>
</nav>
</div>
{/*  Category: Compliance  */}
<div className="mb-space-md">
<div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-widest text-secondary/70">Compliance</div>
<nav className="flex flex-col gap-0.5">
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-governance">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">gavel</span>
<span>Rule Sets (OIML R 76)</span>
</span>
</a>
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-governance">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span>Rule Versions &amp; Mappings</span>
</span>
</a>
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-governance">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span>Acceptance Criteria</span>
</span>
</a>
</nav>
</div>
{/*  Category: System & Infrastructure  */}
<div>
<div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-widest text-secondary/70">System &amp; Infra</div>
<nav className="flex flex-col gap-0.5">
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-governance">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">database</span>
<span>Data Management</span>
</span>
</a>
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-governance">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">cloud_sync</span>
<span>Storage &amp; Retention</span>
</span>
</a>
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-governance">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">hub</span>
<span>Hardware Telemetry</span>
</span>
</a>
<a className="group flex items-center justify-between px-space-md py-2 rounded-lg text-secondary hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors" href="#section-maintenance">
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]">warning</span>
<span>System Maintenance</span>
</span>
</a>
</nav>
</div>
{/*  Node Signature Mini-card  */}
<div className="mt-space-lg p-space-sm rounded-lg bg-surface-container-low text-secondary flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="font-bold text-on-surface">LEDGER INTEGRITY</span>
<span className="text-[#15803D] font-mono">100% VALID</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-[#008B8B] h-1.5 rounded-full w-full"></div>
</div>
<span className="text-[10px] font-metric-tabular text-secondary/80 mt-1 truncate">ANCHOR: 8f4e2...c82a</span>
</div>
</aside>
{/*  Right Main Settings Workspace (approx 70%)  */}
<main className="xl:col-span-9 flex flex-col gap-space-xl">
{/*  Primary Panel: Laboratory Profile  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg" id="section-lab-profile">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md mb-space-lg">
<div>
<div className="flex items-center gap-space-xs mb-space-2xs">
<h2 className="font-headline-md text-headline-md text-on-surface">Laboratory Profile</h2>
<span className="px-2 py-0.5 rounded bg-surface-container text-primary font-metric-tabular text-label-sm font-semibold">ISO 17025 ID: LAB-001</span>
</div>
<p className="font-body-md text-body-md text-secondary max-w-3xl">
              Configure the laboratory identity used throughout test records, calibration certificates, and generated legal metrology reports.
            </p>
</div>
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center gap-1 text-[12px] font-label-md px-2 py-1 rounded bg-[#F0FDF4] text-[#15803D] font-medium">
<span className="material-symbols-outlined text-[14px]">verified</span> Accredited Site
            </span>
</div>
</div>
{/*  Structured Form Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between" htmlFor="labName">
<span>Laboratory Name <span className="text-error">*</span></span>
<span className="text-secondary font-normal text-[11px]">Primary Certificate Header</span>
</label>
<input className="w-full bg-surface-container-lowest px-space-md py-2 rounded-lg text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20" id="labName" type="text" defaultValue="XYZ Metrology Laboratory"/>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between" htmlFor="labId">
<span>Laboratory Identifier</span>
<span className="text-secondary font-normal text-[11px]">Locked System Unique ID</span>
</label>
<div className="flex items-center bg-surface-container-low px-space-md py-2 rounded-lg text-secondary font-metric-tabular text-body-md shadow-inner justify-between">
<span>LAB-001</span>
<span className="material-symbols-outlined text-[16px] text-secondary/70">lock</span>
</div>
</div>
<div className="md:col-span-2 flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="labAddress">Physical Laboratory Address <span className="text-error">*</span></label>
<input className="w-full bg-surface-container-lowest px-space-md py-2 rounded-lg text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20" id="labAddress" type="text" defaultValue="Plot 42, OIML Reference Center, Industrial Area Phase II, New Delhi, India"/>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="labCountry">Jurisdiction / Country</label>
<div className="relative">
<select className="w-full appearance-none bg-surface-container-lowest px-space-md py-2 pr-8 rounded-lg text-on-surface font-body-md text-body-md shadow-sm focus:outline-none" id="labCountry">
<option  value="IN">India (Legal Metrology Dept)</option>
<option value="UK">United Kingdom (NMO)</option>
<option value="DE">Germany (PTB)</option>
<option value="FR">France (LNE)</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[18px]">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="labPhone">Official Contact Telephone</label>
<input className="w-full bg-surface-container-lowest px-space-md py-2 rounded-lg text-on-surface font-metric-tabular text-body-md shadow-sm focus:outline-none" id="labPhone" type="text" defaultValue="+91 11 2345 6789"/>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="labEmail">Verified Metrology Email</label>
<input className="w-full bg-surface-container-lowest px-space-md py-2 rounded-lg text-on-surface font-body-md text-body-md shadow-sm focus:outline-none" id="labEmail" type="email" defaultValue="laboratory@example.gov.in"/>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="labRegistry">Public Registry &amp; Verification URL</label>
<input className="w-full bg-surface-container-lowest px-space-md py-2 rounded-lg text-on-surface font-body-md text-body-md shadow-sm focus:outline-none" id="labRegistry" type="url" defaultValue="https://example.gov.in"/>
</div>
</div>
{/*  Sub-section: Report Identity & Serial Sequence  */}
<div className="mt-space-xl pt-space-lg bg-surface-container-low/50 -mx-space-lg px-space-lg pb-space-md rounded-b-xl" id="section-report-identity">
<div className="flex items-center justify-between mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Report Identity &amp; Serial Sequence</h3>
<span className="font-body-sm text-body-sm text-secondary">Immutable token pattern assigned during digital sealing routine.</span>
</div>
<div className="flex items-center gap-space-xs px-2.5 py-1 rounded bg-surface-container-highest/80 text-primary font-metric-tabular text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px] text-[#008B8B]">lock_clock</span>
<span>Next Ledger Slot: 0092</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-md">
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Report Prefix Code</label>
<input className="bg-surface-container-lowest px-space-md py-2 rounded-lg font-metric-tabular text-body-md text-on-surface shadow-sm focus:outline-none uppercase" type="text" defaultValue="TR"/>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Next Sequence Number</label>
<div className="flex items-center bg-surface-container-low px-space-md py-2 rounded-lg text-secondary font-metric-tabular text-body-md shadow-inner justify-between">
<span>0092</span>
<span className="material-symbols-outlined text-[16px] text-secondary/60">lock</span>
</div>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Serial Pattern Template</label>
<input className="bg-surface-container-lowest px-space-md py-2 rounded-lg font-metric-tabular text-body-md text-on-surface shadow-sm focus:outline-none" type="text" defaultValue="TR-{YYYY}-{NUMBER}"/>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-md p-space-md rounded-lg bg-surface-container-lowest shadow-sm">
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider">Live Preview Output:</span>
<span className="px-3 py-1 rounded bg-primary text-on-primary font-metric-tabular text-body-md tracking-wider font-semibold shadow-inner">
                TR-2026-0092
              </span>
</div>
<p className="font-body-sm text-body-sm text-secondary flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-[#008B8B]">security</span>
<span>Report identifiers are sequentially issued and cryptographically hashed upon approval.</span>
</p>
</div>
</div>
{/*  Sub-section: Primary Metrological Signatory & Contact  */}
<div className="mt-space-lg pt-space-md">
<div className="flex items-center justify-between mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Primary Metrological Signatory &amp; Contact</h3>
<span className="font-body-sm text-body-sm text-secondary">Authorized personnel designated for digital certificate verification seals under ISO/IEC 17025.</span>
</div>
<span className="material-symbols-outlined text-secondary text-[20px]">draw</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Official Signatory Name</label>
<input className="bg-surface-container-lowest px-space-md py-2 rounded-lg text-on-surface font-body-md text-body-md shadow-sm focus:outline-none" type="text" defaultValue="Dr. R. Singh"/>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Official Designation &amp; Accreditation ID</label>
<input className="bg-surface-container-lowest px-space-md py-2 rounded-lg text-on-surface font-body-md text-body-md shadow-sm focus:outline-none" type="text" defaultValue="Lead Metrologist / Authorized Reviewer (#R-109)"/>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Official Email</label>
<input className="bg-surface-container-lowest px-space-md py-2 rounded-lg text-on-surface font-body-md text-body-md shadow-sm focus:outline-none" type="email" defaultValue="reviewer@example.gov.in"/>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Emergency Duty Telephone</label>
<input className="bg-surface-container-lowest px-space-md py-2 rounded-lg text-on-surface font-metric-tabular text-body-md shadow-sm focus:outline-none" type="text" defaultValue="+91 98110 12345"/>
</div>
</div>
</div>
</section>
{/*  Compact Regional & Localization Panel  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg" id="section-regional">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-primary">language</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Regional &amp; Localization</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary font-metric-tabular">UTC OFFSET ACTIVE: +05:30</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-secondary">Time Zone Reference</label>
<div className="p-space-sm bg-surface-container-low rounded-lg text-on-surface font-metric-tabular text-label-md font-semibold">
              Asia/Kolkata (UTC+05:30)
            </div>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-secondary">Date Formatting</label>
<div className="p-space-sm bg-surface-container-low rounded-lg text-on-surface font-metric-tabular text-label-md font-semibold">
              DD MMM YYYY (06 Sep 2026)
            </div>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-secondary">Chronometer Format</label>
<div className="p-space-sm bg-surface-container-low rounded-lg text-on-surface font-metric-tabular text-label-md font-semibold">
              24-hour UTC + Local Offset
            </div>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-secondary">Primary Units Base</label>
<div className="p-space-sm bg-surface-container-low rounded-lg text-on-surface font-metric-tabular text-label-md font-semibold">
              Metric (SI - kg, g, mg)
            </div>
</div>
<div className="flex flex-col gap-space-2xs md:col-span-2">
<label className="font-label-md text-label-md text-secondary">Interface Metrological Dictionary</label>
<div className="p-space-sm bg-surface-container-low rounded-lg text-on-surface font-body-md text-label-md font-semibold flex items-center justify-between">
<span>English (UK / Metrological Glossary OIML V 1)</span>
<span className="material-symbols-outlined text-[16px] text-[#008B8B]">check</span>
</div>
</div>
</div>
</section>
{/*  Administrative Governance Overviews (Bento Grid Structure)  */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg" id="section-governance">
{/*  Tile 1: Security & Role Access Summary  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-primary">security</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Security &amp; Role Access</h4>
</div>
<a className="font-label-sm text-label-sm text-primary font-bold hover:underline flex items-center gap-0.5" href="#">
<span>Manage Users &amp; Roles</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
{/*  Roles Distribution Table  */}
<div className="w-full bg-surface-container-low rounded-lg overflow-hidden my-space-md">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container text-secondary text-[11px] uppercase tracking-wider font-semibold">
<tr>
<th className="px-space-md py-2">Role Title</th>
<th className="px-space-md py-2">Headcount</th>
<th className="px-space-md py-2">Assigned Responsibilities</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-variant/40">
<tr className="hover:bg-surface-container-lowest/70 transition-colors">
<td className="px-space-md py-2.5 font-semibold text-on-surface">Technician</td>
<td className="px-space-md py-2.5 font-metric-tabular">14 users</td>
<td className="px-space-md py-2.5 text-secondary">Routine testing &amp; field load input</td>
</tr>
<tr className="hover:bg-surface-container-lowest/70 transition-colors">
<td className="px-space-md py-2.5 font-semibold text-on-surface">Reviewer</td>
<td className="px-space-md py-2.5 font-metric-tabular">7 users</td>
<td className="px-space-md py-2.5 text-secondary">Verification, sign-off &amp; approvals</td>
</tr>
<tr className="hover:bg-surface-container-lowest/70 transition-colors">
<td className="px-space-md py-2.5 font-semibold text-on-surface">Administrator</td>
<td className="px-space-md py-2.5 font-metric-tabular">3 users</td>
<td className="px-space-md py-2.5 text-secondary">System policies &amp; certificate root keys</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="pt-space-sm flex flex-wrap items-center justify-between gap-2 text-[11px] font-metric-tabular text-secondary">
<span>Session: <strong>30m Idle Lock</strong></span>
<span>MFA: <strong className="text-[#15803D]">Mandatory (TOTP)</strong></span>
<span>Audit: <strong className="text-primary">Append-Only Active</strong></span>
</div>
</div>
{/*  Tile 2: Compliance Rule Configuration  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-primary">rule</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Compliance Rule Set</h4>
</div>
<a className="font-label-sm text-label-sm text-primary font-bold hover:underline flex items-center gap-0.5" href="#">
<span>Manage Rule Versions</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
<p className="font-body-md text-body-md text-secondary mb-space-md">
              Current metrological verification standard enforced across all Class I, II, III &amp; IIII instruments.
            </p>
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Accreditation Base:</span>
<span className="font-headline-sm text-headline-sm text-on-surface">OIML R 76-1:2006 (E)</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Active Build Profile:</span>
<span className="font-metric-tabular text-label-md text-primary font-semibold">R76-2026.1-PROD</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary">Immutable Traceability:</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-[#15803D] font-bold">
<span className="material-symbols-outlined text-[14px]">task_alt</span> Archived Hash Intact
                </span>
</div>
</div>
</div>
<div className="pt-space-sm text-[11px] font-metric-tabular text-secondary flex items-center justify-between">
<span>SHA: 6d90a789ef...34a</span>
<span>Next Mandate Review: Q1 2027</span>
</div>
</div>
{/*  Tile 3: Data & Storage Health  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-primary">dns</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Data &amp; Storage Health</h4>
</div>
<span className="px-2 py-0.5 rounded bg-[#F0FDF4] text-[#15803D] font-metric-tabular text-[11px] font-semibold">ZERO CORRUPTION</span>
</div>
<div className="grid grid-cols-3 gap-space-sm my-space-md text-center">
<div className="p-space-sm rounded bg-surface-container-low flex flex-col items-center">
<span className="material-symbols-outlined text-[#15803D] text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold mt-1">Core DB</span>
<span className="text-[10px] text-secondary font-metric-tabular">Connected</span>
</div>
<div className="p-space-sm rounded bg-surface-container-low flex flex-col items-center">
<span className="material-symbols-outlined text-[#15803D] text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold mt-1">Doc Store</span>
<span className="text-[10px] text-secondary font-metric-tabular">Connected</span>
</div>
<div className="p-space-sm rounded bg-surface-container-low flex flex-col items-center">
<span className="material-symbols-outlined text-[#15803D] text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold mt-1">Evidence</span>
<span className="text-[10px] text-secondary font-metric-tabular">Connected</span>
</div>
</div>
</div>
<div className="pt-space-sm flex flex-wrap items-center justify-between text-[11px] font-metric-tabular text-secondary">
<span>Last Snapshot: <strong>06 Sep 2026 • 02:00 UTC</strong></span>
<span className="text-[#15803D] font-semibold">Integrity Verified (0 Errors)</span>
</div>
</div>
{/*  Tile 4: System Services & Integrations  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-primary">terminal</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Subsystem Microservices</h4>
</div>
<span className="text-[11px] font-metric-tabular text-secondary">ENGINE VER: v4.8.2</span>
</div>
<div className="flex flex-col gap-space-xs my-space-md">
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low/70">
<span className="font-label-md text-label-md text-on-surface">Application Runtime Engine</span>
<span className="inline-flex items-center gap-1 text-[11px] text-[#15803D] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>ONLINE</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low/70">
<span className="font-label-md text-label-md text-on-surface">Tolerance / Rules Calculator</span>
<span className="inline-flex items-center gap-1 text-[11px] text-[#15803D] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>ONLINE</span>
</div>
<div className="flex items-center justify-between p-2 rounded bg-surface-container-low/70">
<span className="font-label-md text-label-md text-on-surface">Cryptographic Signature Broker</span>
<span className="inline-flex items-center gap-1 text-[11px] text-[#008B8B] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#008B8B]"></span>SEALED</span>
</div>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between text-[11px] font-metric-tabular text-secondary">
<span>Hardware COM Daemon: <strong>Active</strong></span>
<span>Queue: <strong>0 Pending</strong></span>
</div>
</div>
</section>
{/*  Section: Enterprise Notification Channels  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg" id="section-notifications">
<div className="flex items-center justify-between mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Administrative Notification Dispatches</h3>
<span className="font-body-sm text-body-sm text-secondary">Determine platform alert triggers sent to laboratory technicians and supervisory staff.</span>
</div>
<span className="material-symbols-outlined text-secondary text-[20px]">outgoing_mail</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex items-center justify-between p-space-md rounded-lg bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Email Digest Alerts</span>
<span className="font-body-sm text-body-sm text-secondary text-[12px]">Broadcast daily metrological activity summary</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#008B8B]"></div>
</label>
</div>
<div className="flex items-center justify-between p-space-md rounded-lg bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Review Assignments</span>
<span className="font-body-sm text-body-sm text-secondary text-[12px]">Notify reviewer immediately when test batch completes</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#008B8B]"></div>
</label>
</div>
<div className="flex items-center justify-between p-space-md rounded-lg bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Certificate Generation Alerts</span>
<span className="font-body-sm text-body-sm text-secondary text-[12px]">Dispatches link upon PDF seal generation</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#008B8B]"></div>
</label>
</div>
<div className="flex items-center justify-between p-space-md rounded-lg bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Audit Exception Escalation</span>
<span className="font-body-sm text-body-sm text-secondary text-[12px]">Instant alert on calibration failure or data tamper flag</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#008B8B]"></div>
</label>
</div>
</div>
</section>
{/*  Configuration Change Control & Audit Stamp  */}
<section className="p-space-base bg-surface-container-low rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md shadow-inner">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">history</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Audit Ledger Anchor Stamp</span>
<span className="font-body-sm text-body-sm text-secondary">
              Last edit recorded by <strong className="text-on-surface">M. Sharma (Administrator #A-001)</strong> on 06 Sep 2026 • 14:10 UTC.
            </span>
</div>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
<span className="font-metric-tabular text-label-sm text-primary font-mono font-semibold">EVT-20260906-0884</span>
<span className="material-symbols-outlined text-[16px] text-[#15803D]">verified</span>
</div>
</section>
{/*  Advanced System Maintenance (Restrained Danger Zone)  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg" id="section-maintenance">
<div className="flex items-center gap-space-xs text-error mb-space-xs">
<span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
<h3 className="font-headline-sm text-headline-sm text-error">Advanced System Maintenance &amp; Node Recalibration</h3>
</div>
<p className="font-body-md text-body-md text-secondary mb-space-md">
          High-privilege actions requiring secondary cryptographic hardware key validation. These actions impact laboratory accreditation continuity.
        </p>
<div className="flex flex-wrap items-center justify-between gap-space-md p-space-md rounded-lg bg-error-container/20">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-error-container font-semibold">Purge In-Memory Calibration Buffers</span>
<span className="font-body-sm text-body-sm text-secondary text-[12px]">Clears uncommitted digital balances without disrupting immutable logs.</span>
</div>
<button className="px-space-md py-1.5 rounded bg-surface-container-high text-secondary/50 font-label-md text-label-md cursor-not-allowed shadow-none" disabled="" type="button">
            Restricted to Root Metrologist
          </button>
</div>
</section>
</main>
</div>
{/*  Interactive Client-side Script  */}

</div></main></div>
    </div>
  );
}
