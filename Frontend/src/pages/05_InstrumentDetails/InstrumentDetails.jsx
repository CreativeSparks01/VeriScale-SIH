import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function InstrumentDetails() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <aside className="fixed left-0 top-0 h-screen w-[248px] bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.08)]"><div className="flex flex-col flex-1 min-h-0"><div className="h-16 px-space-base flex items-center gap-space-sm bg-primary border-b border-primary-container/40"><div className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed"><span className="material-symbols-outlined text-[20px]">scale</span></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-primary tracking-wider leading-none">VERISCALE</span><span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest mt-space-2xs leading-none">METROLOGY PLATFORM</span></div></div><div className="flex-1 overflow-y-auto px-space-sm py-space-md"><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Main</div><nav className="flex flex-col gap-space-2xs mb-space-lg" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[18px]">dashboard</span><span>Dashboard</span></a><a aria-current="page" className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-colors bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r" data-path="instruments" href="#"><span className="material-symbols-outlined text-[18px]">scale</span><span>Instruments</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="tests" href="#"><span className="material-symbols-outlined text-[18px]">experiment</span><span>Tests</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="compliance" href="#"><span className="material-symbols-outlined text-[18px]">verified</span><span>Compliance</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[18px]">assignment</span><span>Reports</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="repository" href="#"><span className="material-symbols-outlined text-[18px]">folder_data</span><span>Repository</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="test-history" href="#"><span className="material-symbols-outlined text-[18px]">history</span><span>Test History</span></a></nav><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Administration</div><nav className="flex flex-col gap-space-2xs" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="users" href="#"><span className="material-symbols-outlined text-[18px]">group</span><span>Users</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="audit-trail" href="#"><span className="material-symbols-outlined text-[18px]">receipt_long</span><span>Audit Trail</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[18px]">settings</span><span>Settings</span></a></nav></div></div><div className="p-space-base bg-primary border-t border-primary-container/40 flex items-center justify-between"><div className="flex items-center gap-space-md"><div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary font-label-md text-label-md">MS<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed ring-2 ring-primary"></span></div><div className="flex flex-col"><span className="font-label-md text-label-md text-on-primary leading-none">Manan Sharma</span><span className="font-label-sm text-label-sm text-primary-fixed-dim mt-space-2xs leading-none">Administrator</span></div></div><button aria-label="User options" className="text-primary-fixed-dim hover:text-on-primary transition-colors flex items-center" type="button"><span className="material-symbols-outlined text-[20px]">more_vert</span></button></div></aside><div className="pl-[248px]"><header className="fixed top-0 left-[248px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl z-40 border-b border-surface-variant flex items-center justify-between px-margin-desktop shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="flex items-center gap-space-md"><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">Instrument Management</span><span className="font-label-sm text-label-sm text-secondary">Manage registered weighing instruments and technical specifications</span></div></div><div className="flex items-center gap-space-lg"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span><input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low border border-outline-variant/60 rounded text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search instruments, serial numbers, models..." type="text"/></div><div className="flex items-center gap-space-sm text-secondary"><button aria-label="Notifications" className="relative p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help Documentation" className="p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help_outline</span></button></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-surface-container-high text-on-primary font-label-md text-label-md">MS</div></div></header><main className="w-full pt-16 bg-[#F4F7F9] min-h-screen px-margin-desktop py-space-xl"><div className="flex flex-col w-full">
{/*  Top Breadcrumb & Quick Telemetry Pill  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
<nav aria-label="Breadcrumbs" className="flex items-center gap-space-xs font-body-sm text-body-sm text-secondary">
<a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[16px]">home</span>
<span>Instruments</span>
</a>
<span className="text-outline-variant">/</span>
<span className="hover:text-primary transition-colors">ABC WeighTech</span>
<span className="text-outline-variant">/</span>
<span className="text-on-surface font-label-md text-label-md bg-surface-container-high px-space-xs py-0.5 rounded">WT-100</span>
</nav>
<div className="flex items-center gap-space-md font-metric-tabular text-body-sm bg-surface-container-lowest px-space-md py-1 rounded shadow-sm">
<div className="flex items-center gap-1.5 text-secondary">
<span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">sensors</span>
<span>Telemetry Port 04: <span className="text-on-surface font-semibold">ONLINE (9600-8N1)</span></span>
</div>
<span className="text-surface-variant">|</span>
<div className="flex items-center gap-1.5 text-secondary">
<span className="font-label-sm text-label-sm uppercase bg-surface-container text-secondary px-1.5 py-0.5 rounded font-bold">Stable</span>
<span className="text-on-surface font-medium">[ 0.000 kg ]</span>
</div>
</div>
</div>
{/*  1. Profile Header Card  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm mb-space-lg overflow-hidden">
<div className="p-space-lg flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary font-bold">Registered Instrument</span>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-label-sm uppercase text-on-surface bg-surface-container px-2 py-0.5 rounded font-mono font-bold tracking-tight">OIML R 76-1</span>
</div>
<div className="flex flex-wrap items-baseline gap-space-sm">
<h1 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">WT-100</h1>
<span className="font-body-lg text-body-lg text-secondary">ABC WeighTech • Platform Scale</span>
<span className="font-metric-tabular text-body-sm bg-surface-container-low text-on-surface px-2.5 py-0.5 rounded font-mono font-medium">Serial No. WT100-2026-001</span>
</div>
<div className="flex items-center gap-space-md mt-space-xs">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm uppercase tracking-wide bg-surface-container-low text-on-primary-fixed-variant font-bold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
            Active
          </span>
<span className="font-body-sm text-body-sm text-secondary">Last verified routine: <strong className="text-on-surface font-medium">06 Sep 2026</strong></span>
<span className="text-surface-variant">•</span>
<span className="font-body-sm text-body-sm text-secondary">Location: <span className="text-on-surface">Inspection Bay 2A</span></span>
</div>
</div>
{/*  Header CTAs  */}
<div className="flex flex-wrap items-center gap-space-sm self-start lg:self-center">
<button className="bg-primary hover:bg-primary-container text-on-primary px-4 py-2 rounded font-label-md text-label-md flex items-center gap-2 shadow-sm transition-all active:scale-[0.98]" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Start New Test</span>
</button>
<button className="bg-surface-container-lowest hover:bg-surface-container-low text-on-surface px-3.5 py-2 rounded font-label-md text-label-md flex items-center gap-2 shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">edit</span>
<span>Edit Instrument</span>
</button>
<div className="relative inline-block">
<button aria-label="More options" className="bg-surface-container-lowest hover:bg-surface-container-low text-secondary hover:text-on-surface p-2 rounded font-label-md shadow-sm transition-colors flex items-center" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
</div>
{/*  Metadata Bottom Strip  */}
<div className="bg-surface-container-low px-space-lg py-space-sm grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-space-md text-body-sm">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary">Manufacturer</span>
<span className="font-metric-tabular text-on-surface font-medium truncate">ABC WeighTech Pvt. Ltd.</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary">Model</span>
<span className="font-metric-tabular text-on-surface font-medium">WT-100</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary">Serial Number</span>
<span className="font-metric-tabular text-on-surface font-mono font-medium truncate">WT100-2026-001</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary">Instrument Type</span>
<span className="font-metric-tabular text-on-surface font-medium">Platform Scale</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary">Accuracy Class</span>
<span className="font-metric-tabular text-on-surface font-semibold font-mono">Class III (NAWI)</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary">Max / Min Capacity</span>
<span className="font-metric-tabular text-on-surface font-medium">100 kg / 20 g</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary">Verif. Interval (e)</span>
<span className="font-metric-tabular text-on-surface font-semibold">10 g</span>
</div>
</div>
</section>
{/*  2. Tab Navigation Bar  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm mb-space-lg px-space-md flex flex-wrap items-center justify-between gap-space-sm overflow-x-auto">
<div className="flex items-center gap-space-xs" role="tablist">
<button aria- className="font-label-md text-label-md font-semibold text-primary py-space-md px-space-md relative transition-colors" role="tab">
<span>Overview</span>
<span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t"></span>
</button>
<button aria- className="font-label-md text-label-md text-secondary hover:text-on-surface py-space-md px-space-md transition-colors" role="tab">
<span>Technical Specifications</span>
</button>
<button aria- className="font-label-md text-label-md text-secondary hover:text-on-surface py-space-md px-space-md transition-colors flex items-center gap-1.5" role="tab">
<span>Test History</span>
<span className="bg-surface-container font-label-sm text-label-sm px-1.5 py-0.2 rounded-full text-secondary font-bold">12</span>
</button>
<button aria- className="font-label-md text-label-md text-secondary hover:text-on-surface py-space-md px-space-md transition-colors flex items-center gap-1.5" role="tab">
<span>Attachments</span>
<span className="bg-surface-container font-label-sm text-label-sm px-1.5 py-0.2 rounded-full text-secondary font-bold">4</span>
</button>
<button aria- className="font-label-md text-label-md text-secondary hover:text-on-surface py-space-md px-space-md transition-colors" role="tab">
<span>Audit Trail</span>
</button>
</div>
<div className="hidden sm:flex items-center gap-space-xs text-secondary font-body-sm py-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified</span>
<span>OIML Traceability Chain Intact</span>
</div>
</div>
{/*  3. Main Content Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT COLUMN (~68%, cols 8 on desktop)  */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/*  Section 1: Instrument Summary & Core Parameters  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-md bg-surface-container-low/40 -mx-space-lg -mt-space-lg px-space-lg pt-space-lg rounded-t-xl">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Instrument Summary</h2>
<p className="font-body-sm text-body-sm text-secondary">General registry identification and operational classification parameters</p>
</div>
<span className="font-label-sm text-label-sm uppercase font-mono px-2 py-0.5 rounded bg-surface-container-high text-on-surface">ID: REG-2026-9812</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-xl gap-y-space-xs text-body-md">
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Manufacturer</span>
<span className="font-metric-tabular text-on-surface font-medium">ABC WeighTech Pvt. Ltd.</span>
</div>
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Model</span>
<span className="font-metric-tabular text-on-surface font-medium">WT-100</span>
</div>
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Serial Number</span>
<span className="font-metric-tabular text-on-surface font-mono font-medium">WT100-2026-001</span>
</div>
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Instrument Type</span>
<span className="font-metric-tabular text-on-surface font-medium">Platform Scale</span>
</div>
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Maximum Capacity (Max)</span>
<span className="font-metric-tabular text-on-surface font-bold">100 kg</span>
</div>
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Minimum Capacity (Min)</span>
<span className="font-metric-tabular text-on-surface font-medium">20 g</span>
</div>
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Scale Interval (d = e)</span>
<span className="font-metric-tabular text-on-surface font-semibold">10 g</span>
</div>
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Accuracy Class</span>
<span className="font-metric-tabular text-on-surface font-medium">Class III (Medium Accuracy)</span>
</div>
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Registration Date</span>
<span className="font-metric-tabular text-on-surface font-medium">15 Jan 2026</span>
</div>
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Registered By</span>
<span className="font-metric-tabular text-on-surface font-medium">Administrator (Manan Sharma)</span>
</div>
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Verification Standard</span>
<span className="font-metric-tabular text-on-surface font-medium">OIML R 76-1:2006</span>
</div>
<div className="flex items-center justify-between py-2 px-space-xs hover:bg-surface-container-low/50 rounded transition-colors">
<span className="text-secondary font-body-sm">Calibration Interval</span>
<span className="font-metric-tabular text-on-surface font-medium">12 Months (Annual)</span>
</div>
</div>
</section>
{/*  Section 2: Technical Specifications Table  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">tune</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Technical Specifications &amp; Verification Parameters</h2>
<p className="font-body-sm text-body-sm text-secondary">Operational tolerances, intervals, and compliance thresholds</p>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-low px-2 py-1 rounded">ISO/IEC 17025 Compliant</span>
</div>
<div className="overflow-x-auto rounded bg-surface-container-low/30">
<table className="w-full text-left font-body-sm text-body-sm border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-2.5 px-space-md font-semibold">Parameter</th>
<th className="py-2.5 px-space-md font-semibold">Value</th>
<th className="py-2.5 px-space-md font-semibold">Unit</th>
<th className="py-2.5 px-space-md font-semibold">Source</th>
</tr>
</thead>
<tbody className="divide-y-0 text-on-surface">
<tr className="h-9 hover:bg-surface-container-high/40 transition-colors">
<td className="px-space-md font-medium">Maximum Capacity</td>
<td className="px-space-md font-metric-tabular font-semibold">100</td>
<td className="px-space-md font-metric-tabular text-secondary">kg</td>
<td className="px-space-md text-secondary">Manufacturer Specification</td>
</tr>
<tr className="h-9 bg-surface-container-low/20 hover:bg-surface-container-high/40 transition-colors">
<td className="px-space-md font-medium">Minimum Capacity</td>
<td className="px-space-md font-metric-tabular font-semibold">20</td>
<td className="px-space-md font-metric-tabular text-secondary">g</td>
<td className="px-space-md text-secondary">Manufacturer Specification</td>
</tr>
<tr className="h-9 hover:bg-surface-container-high/40 transition-colors">
<td className="px-space-md font-medium">Scale Interval (e)</td>
<td className="px-space-md font-metric-tabular font-semibold">10</td>
<td className="px-space-md font-metric-tabular text-secondary">g</td>
<td className="px-space-md text-secondary">Manufacturer Specification</td>
</tr>
<tr className="h-9 bg-surface-container-low/20 hover:bg-surface-container-high/40 transition-colors">
<td className="px-space-md font-medium">Scale Interval (d)</td>
<td className="px-space-md font-metric-tabular font-semibold">10</td>
<td className="px-space-md font-metric-tabular text-secondary">g</td>
<td className="px-space-md text-secondary">Manufacturer Specification</td>
</tr>
<tr className="h-9 hover:bg-surface-container-high/40 transition-colors">
<td className="px-space-md font-medium">Number of Verification Intervals (n)</td>
<td className="px-space-md font-metric-tabular font-semibold text-primary">10,000</td>
<td className="px-space-md font-metric-tabular text-secondary">—</td>
<td className="px-space-md text-secondary">Calculated (Max/e)</td>
</tr>
<tr className="h-9 bg-surface-container-low/20 hover:bg-surface-container-high/40 transition-colors">
<td className="px-space-md font-medium">Accuracy Class</td>
<td className="px-space-md font-metric-tabular font-semibold font-mono">Class III</td>
<td className="px-space-md font-metric-tabular text-secondary">—</td>
<td className="px-space-md text-secondary">Instrument Configuration</td>
</tr>
<tr className="h-9 hover:bg-surface-container-high/40 transition-colors">
<td className="px-space-md font-medium">Operating Temperature</td>
<td className="px-space-md font-metric-tabular text-secondary">—</td>
<td className="px-space-md font-metric-tabular text-secondary">°C</td>
<td className="px-space-md text-secondary italic">Not specified (Standard 20±2°C)</td>
</tr>
<tr className="h-9 bg-surface-container-low/20 hover:bg-surface-container-high/40 transition-colors">
<td className="px-space-md font-medium">Tare Range</td>
<td className="px-space-md font-metric-tabular font-semibold">100% Max (100 kg)</td>
<td className="px-space-md font-metric-tabular text-secondary">kg</td>
<td className="px-space-md text-secondary">Manufacturer Specification</td>
</tr>
<tr className="h-9 hover:bg-surface-container-high/40 transition-colors">
<td className="px-space-md font-medium">Warm-up Time</td>
<td className="px-space-md font-metric-tabular font-semibold">30</td>
<td className="px-space-md font-metric-tabular text-secondary">min</td>
<td className="px-space-md text-secondary">Technical Manual</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-space-md pt-space-sm flex justify-between items-center bg-surface-container-low px-space-md py-2 rounded">
<span className="font-body-sm text-body-sm text-secondary">Document Reference: DS-WT100-REV3</span>
<a className="font-label-md text-label-md font-medium text-primary hover:text-primary-container flex items-center gap-1 transition-colors" href="#">
<span>View complete technical datasheet</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</section>
{/*  Section 3: Recent Test History Table  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">history</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Recent Test History</h2>
<p className="font-body-sm text-body-sm text-secondary">Latest 5 verification runs recorded for WT-100</p>
</div>
</div>
<a className="font-label-md text-label-md font-semibold text-primary hover:text-primary-container flex items-center gap-1" href="#">
<span>View full history (12)</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
<div className="overflow-x-auto rounded">
<table className="w-full text-left font-body-sm text-body-sm">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-2.5 px-space-md font-semibold">Test ID</th>
<th className="py-2.5 px-space-md font-semibold">Test Type</th>
<th className="py-2.5 px-space-md font-semibold">Date</th>
<th className="py-2.5 px-space-md font-semibold">Result</th>
<th className="py-2.5 px-space-md font-semibold">Review Status</th>
<th className="py-2.5 px-space-md font-semibold text-right">Action</th>
</tr>
</thead>
<tbody className="text-on-surface">
{/*  Row 1  */}
<tr className="h-10 hover:bg-surface-container-low/50 transition-colors">
<td className="px-space-md font-metric-tabular font-mono font-medium text-primary">TEST-012</td>
<td className="px-space-md font-medium">Accuracy (Weighing Performance)</td>
<td className="px-space-md font-metric-tabular text-secondary">06 Sep 2026</td>
<td className="px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-label-sm font-bold bg-surface-container-low text-on-primary-fixed-variant">
<span className="material-symbols-outlined text-[13px]">check</span>
                    PASS
                  </span>
</td>
<td className="px-space-md">
<span className="inline-flex items-center gap-1.5 font-body-sm text-secondary">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                    Approved
                  </span>
</td>
<td className="px-space-md text-right">
<a className="font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container" href="#">View →</a>
</td>
</tr>
{/*  Row 2  */}
<tr className="h-10 bg-surface-container-low/20 hover:bg-surface-container-low/50 transition-colors">
<td className="px-space-md font-metric-tabular font-mono font-medium text-primary">TEST-011</td>
<td className="px-space-md font-medium">Repeatability Test</td>
<td className="px-space-md font-metric-tabular text-secondary">06 Sep 2026</td>
<td className="px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-label-sm font-bold bg-surface-container-low text-on-primary-fixed-variant">
<span className="material-symbols-outlined text-[13px]">check</span>
                    PASS
                  </span>
</td>
<td className="px-space-md">
<span className="inline-flex items-center gap-1.5 font-body-sm text-secondary">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                    Approved
                  </span>
</td>
<td className="px-space-md text-right">
<a className="font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container" href="#">View →</a>
</td>
</tr>
{/*  Row 3  */}
<tr className="h-10 hover:bg-surface-container-low/50 transition-colors">
<td className="px-space-md font-metric-tabular font-mono font-medium text-primary">TEST-010</td>
<td className="px-space-md font-medium">Eccentric Loading Test</td>
<td className="px-space-md font-metric-tabular text-secondary">05 Sep 2026</td>
<td className="px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-label-sm font-bold bg-surface-container-low text-on-primary-fixed-variant">
<span className="material-symbols-outlined text-[13px]">check</span>
                    PASS
                  </span>
</td>
<td className="px-space-md">
<span className="inline-flex items-center gap-1.5 font-body-sm text-secondary">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                    Approved
                  </span>
</td>
<td className="px-space-md text-right">
<a className="font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container" href="#">View →</a>
</td>
</tr>
{/*  Row 4  */}
<tr className="h-10 bg-error-container/20 hover:bg-error-container/30 transition-colors">
<td className="px-space-md font-metric-tabular font-mono font-medium text-error">TEST-009</td>
<td className="px-space-md font-medium text-on-surface">Zero / Tare Setting Test</td>
<td className="px-space-md font-metric-tabular text-secondary">05 Sep 2026</td>
<td className="px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-label-sm font-bold bg-error-container text-on-error-container">
<span className="material-symbols-outlined text-[13px]">close</span>
                    FAIL
                  </span>
</td>
<td className="px-space-md">
<span className="inline-flex items-center gap-1.5 font-body-sm text-error">
<span className="w-2 h-2 rounded-full bg-error"></span>
                    Rejected
                  </span>
</td>
<td className="px-space-md text-right">
<a className="font-label-sm text-label-sm font-semibold text-error hover:underline" href="#">View →</a>
</td>
</tr>
{/*  Row 5  */}
<tr className="h-10 hover:bg-surface-container-low/50 transition-colors">
<td className="px-space-md font-metric-tabular font-mono font-medium text-primary">TEST-008</td>
<td className="px-space-md font-medium">Environmental Influence Test</td>
<td className="px-space-md font-metric-tabular text-secondary">04 Sep 2026</td>
<td className="px-space-md">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-label-sm font-bold bg-surface-container-low text-on-primary-fixed-variant">
<span className="material-symbols-outlined text-[13px]">check</span>
                    PASS
                  </span>
</td>
<td className="px-space-md">
<span className="inline-flex items-center gap-1.5 font-body-sm text-secondary">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                    Approved
                  </span>
</td>
<td className="px-space-md text-right">
<a className="font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container" href="#">View →</a>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Section 4: Supporting Documents & Attachments  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-7 h-7 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">attachment</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Supporting Documents &amp; Calibration Certificates</h2>
<p className="font-body-sm text-body-sm text-secondary">Official manufacturer documentation, ISO/IEC 17025 seals, and technical photographs</p>
</div>
</div>
<button className="font-label-sm text-label-sm font-medium text-primary bg-surface-container-low hover:bg-surface-container px-2.5 py-1 rounded transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[15px]">upload_file</span>
<span>Upload New</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/*  Item 1  */}
<div className="p-space-md rounded bg-surface-container-low/40 hover:bg-surface-container-low transition-colors flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm flex-shrink-0">
<span className="material-symbols-outlined text-[22px]">image</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">instrument.jpg</span>
<span className="font-body-sm text-body-sm text-secondary">Instrument photograph • JPG • 2.4 MB</span>
<span className="font-label-sm text-label-sm text-secondary mt-1">Uploaded 15 Jan 2026</span>
</div>
</div>
<div className="flex items-center gap-1 text-primary">
<button aria-label="View instrument image" className="p-1.5 hover:bg-surface-container rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button aria-label="Download instrument image" className="p-1.5 hover:bg-surface-container rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
{/*  Item 2  */}
<div className="p-space-md rounded bg-surface-container-low/40 hover:bg-surface-container-low transition-colors flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm flex-shrink-0">
<span className="material-symbols-outlined text-[22px]">badge</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">nameplate.jpg</span>
<span className="font-body-sm text-body-sm text-secondary">Technical nameplate photograph • JPG • 1.8 MB</span>
<span className="font-label-sm text-label-sm text-secondary mt-1">Uploaded 15 Jan 2026</span>
</div>
</div>
<div className="flex items-center gap-1 text-primary">
<button aria-label="View nameplate" className="p-1.5 hover:bg-surface-container rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button aria-label="Download nameplate" className="p-1.5 hover:bg-surface-container rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
{/*  Item 3  */}
<div className="p-space-md rounded bg-surface-container-low/40 hover:bg-surface-container-low transition-colors flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center text-error shadow-sm flex-shrink-0">
<span className="material-symbols-outlined text-[22px]">picture_as_pdf</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">CalibrationCertificate.pdf</span>
<span className="font-body-sm text-body-sm text-secondary">ISO/IEC 17025 Certificate • PDF • 648 KB</span>
<span className="font-label-sm text-label-sm text-secondary mt-1">Uploaded 06 Sep 2026</span>
</div>
</div>
<div className="flex items-center gap-1 text-primary">
<button aria-label="View calibration certificate" className="p-1.5 hover:bg-surface-container rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button aria-label="Download calibration certificate" className="p-1.5 hover:bg-surface-container rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
{/*  Item 4  */}
<div className="p-space-md rounded bg-surface-container-low/40 hover:bg-surface-container-low transition-colors flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm flex-shrink-0">
<span className="material-symbols-outlined text-[22px]">menu_book</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">ManufacturerSpecification.pdf</span>
<span className="font-body-sm text-body-sm text-secondary">Manufacturer manual &amp; specs • PDF • 1.2 MB</span>
<span className="font-label-sm text-label-sm text-secondary mt-1">Uploaded 15 Jan 2026</span>
</div>
</div>
<div className="flex items-center gap-1 text-primary">
<button aria-label="View specs manual" className="p-1.5 hover:bg-surface-container rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button aria-label="Download specs manual" className="p-1.5 hover:bg-surface-container rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
</div>
<div className="mt-space-md pt-space-xs text-right">
<a className="font-label-md text-label-md font-semibold text-primary hover:text-primary-container inline-flex items-center gap-1" href="#">
<span>View all attachments (4)</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</section>
</div>
{/*  RIGHT COLUMN (~32%, cols 4 on desktop)  */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/*  Widget 1: Verification Health & Status  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">verified_user</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Verification Health</h3>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm uppercase font-bold bg-surface-container-low text-on-primary-fixed-variant">
<span className="material-symbols-outlined text-[12px]">check</span>
            Active
          </span>
</div>
<div className="space-y-space-sm text-body-sm">
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Current Status</span>
<span className="font-medium text-on-surface">Certified Operational</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Last Test Date</span>
<span className="font-metric-tabular font-medium text-on-surface">06 Sep 2026</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Last Result</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-label-sm font-bold bg-surface-container-low text-on-primary-fixed-variant">
              PASS
            </span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Next Review</span>
<span className="text-secondary italic">Not scheduled</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Verification Authority</span>
<span className="font-medium text-on-surface">Metrology Lab Unit 4</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Compliance Standard</span>
<span className="font-mono font-medium text-on-surface text-label-sm">OIML R 76 / ISO 17025</span>
</div>
</div>
<div className="mt-space-md p-space-sm rounded bg-surface-container-low flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-primary">lock</span>
<div className="flex flex-col text-body-sm">
<span className="font-label-sm text-label-sm font-bold text-on-surface uppercase">Metrological Seal #99281-B</span>
<span className="text-secondary text-label-sm">Intact • Tamper-evident secure wire lock</span>
</div>
</div>
</section>
{/*  Widget 2: Test Performance Metric  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-primary">analytics</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Test Performance Record</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold">12 Total Runs</span>
</div>
<div className="flex items-baseline justify-between mt-space-sm">
<div>
<span className="font-metric-display text-metric-display text-on-surface leading-none">91.7%</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mt-1">Compliance Rate</span>
</div>
<div className="text-right font-metric-tabular text-body-sm">
<span className="text-primary font-bold">11 Passed</span>
<span className="text-secondary mx-1">/</span>
<span className="text-error font-bold">1 Failed</span>
</div>
</div>
{/*  Segmented Bar  */}
<div className="w-full h-3 bg-surface-container rounded-full overflow-hidden flex my-space-md shadow-inner">
<div className="h-full bg-primary" style={{"width":"91.7%"}} title="91.7% Passed (11)"></div>
<div className="h-full bg-error" style={{"width":"8.3%"}} title="8.3% Failed (1)"></div>
</div>
{/*  Inline Visual Sparkline / Micro Chart  */}
<div className="p-space-sm bg-surface-container-low/60 rounded">
<div className="flex items-center justify-between text-body-sm text-secondary mb-1">
<span className="font-label-sm text-label-sm uppercase">Recent Error Delta (g)</span>
<span className="font-metric-tabular font-bold text-on-surface">Max mpe: ±10g</span>
</div>
<div className="h-10 w-full flex items-end gap-1 px-1 pt-2">
<div className="flex-1 bg-primary/40 rounded-t h-[30%]" title="T-008: +0.2g"></div>
<div className="flex-1 bg-error rounded-t h-[95%]" title="T-009: +14.2g (FAIL)"></div>
<div className="flex-1 bg-primary rounded-t h-[40%]" title="T-010: +0.3g"></div>
<div className="flex-1 bg-primary rounded-t h-[25%]" title="T-011: +0.1g"></div>
<div className="flex-1 bg-primary rounded-t h-[35%]" title="T-012: +0.2g"></div>
</div>
<div className="flex justify-between text-[10px] font-mono text-secondary mt-1 px-1">
<span>T-008</span>
<span>T-009</span>
<span>T-010</span>
<span>T-011</span>
<span>T-012</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-sm">
          Latest verification executed: <span className="text-on-surface font-semibold">PASS</span> (06 Sep 2026). Instrument remains in calibration tolerance.
        </p>
</section>
{/*  Widget 3: Operational Workload Status  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Operational Workload</h3>
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
</div>
<div className="grid grid-cols-2 gap-space-sm mb-space-md">
<div className="p-space-sm rounded bg-surface-container-low text-center">
<span className="font-metric-display text-metric-display text-on-surface leading-none">0</span>
<span className="font-label-sm text-label-sm text-secondary uppercase block mt-1">Open Tests</span>
</div>
<div className="p-space-sm rounded bg-surface-container-low text-center">
<span className="font-metric-display text-metric-display text-on-surface leading-none">0</span>
<span className="font-label-sm text-label-sm text-secondary uppercase block mt-1">Pending Review</span>
</div>
</div>
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-2.5 px-4 rounded font-label-md text-label-md flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.99]" type="button">
<span className="material-symbols-outlined text-[18px]">add_task</span>
<span>+ Start New Test</span>
</button>
</section>
{/*  Widget 4: Recent Audit Trail  */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-primary">receipt_long</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Recent Activity Log</h3>
</div>
</div>
{/*  Clean Vertical Timeline  */}
<div className="relative pl-6 space-y-space-md before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container">
{/*  Event 1  */}
<div className="relative text-body-sm">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-surface-container-lowest"></span>
<span className="font-label-sm text-label-sm text-secondary block font-metric-tabular">06 Sep 2026, 14:32</span>
<p className="text-on-surface font-medium mt-0.5">Accuracy test completed by <span className="text-primary font-semibold">A. Kumar</span> (Technician)</p>
</div>
{/*  Event 2  */}
<div className="relative text-body-sm">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim ring-4 ring-surface-container-lowest"></span>
<span className="font-label-sm text-label-sm text-secondary block font-metric-tabular">06 Sep 2026, 11:15</span>
<p className="text-on-surface font-medium mt-0.5">Verification report approved by <span className="text-primary font-semibold">R. Singh</span> (Reviewer)</p>
</div>
{/*  Event 3  */}
<div className="relative text-body-sm">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></span>
<span className="font-label-sm text-label-sm text-secondary block font-metric-tabular">05 Sep 2026, 16:40</span>
<p className="text-on-surface font-medium mt-0.5">Instrument details updated by <span className="text-primary font-semibold">M. Sharma</span> (Admin)</p>
</div>
{/*  Event 4  */}
<div className="relative text-body-sm">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-error ring-4 ring-surface-container-lowest"></span>
<span className="font-label-sm text-label-sm text-secondary block font-metric-tabular">05 Sep 2026, 10:20</span>
<p className="text-on-surface font-medium mt-0.5">Zero/Tare test failed - marked for recalibration</p>
</div>
</div>
<div className="mt-space-md pt-space-sm">
<a className="font-label-md text-label-md font-semibold text-primary hover:text-primary-container flex items-center justify-between" href="#">
<span>View full audit log</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</section>
</div>
</div>
</div></main></div>
    </div>
  );
}
