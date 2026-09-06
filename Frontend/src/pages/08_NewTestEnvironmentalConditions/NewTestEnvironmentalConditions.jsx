import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function NewTestEnvironmentalConditions() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <aside className="fixed left-0 top-0 h-screen w-[248px] bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.08)]"><div className="flex flex-col flex-1 min-h-0"><div className="h-16 px-space-base flex items-center gap-space-sm bg-primary border-b border-primary-container/40"><div className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed"><span className="material-symbols-outlined text-[20px]">scale</span></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-primary tracking-wider leading-none">VERISCALE</span><span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest mt-space-2xs leading-none">METROLOGY PLATFORM</span></div></div><div className="flex-1 overflow-y-auto px-space-sm py-space-md"><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Main</div><nav className="flex flex-col gap-space-2xs mb-space-lg" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[18px]">dashboard</span><span>Dashboard</span></a><a aria-current="page" className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-colors bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r" data-path="instruments" href="#"><span className="material-symbols-outlined text-[18px]">scale</span><span>Instruments</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="tests" href="#"><span className="material-symbols-outlined text-[18px]">experiment</span><span>Tests</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="compliance" href="#"><span className="material-symbols-outlined text-[18px]">verified</span><span>Compliance</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[18px]">assignment</span><span>Reports</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="repository" href="#"><span className="material-symbols-outlined text-[18px]">folder_data</span><span>Repository</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="test-history" href="#"><span className="material-symbols-outlined text-[18px]">history</span><span>Test History</span></a></nav><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Administration</div><nav className="flex flex-col gap-space-2xs" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="users" href="#"><span className="material-symbols-outlined text-[18px]">group</span><span>Users</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="audit-trail" href="#"><span className="material-symbols-outlined text-[18px]">receipt_long</span><span>Audit Trail</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[18px]">settings</span><span>Settings</span></a></nav></div></div><div className="p-space-base bg-primary border-t border-primary-container/40 flex items-center justify-between"><div className="flex items-center gap-space-md"><div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary font-label-md text-label-md">MS<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed ring-2 ring-primary"></span></div><div className="flex flex-col"><span className="font-label-md text-label-md text-on-primary leading-none">Manan Sharma</span><span className="font-label-sm text-label-sm text-primary-fixed-dim mt-space-2xs leading-none">Administrator</span></div></div><button aria-label="User options" className="text-primary-fixed-dim hover:text-on-primary transition-colors flex items-center" type="button"><span className="material-symbols-outlined text-[20px]">more_vert</span></button></div></aside><div className="pl-[248px]"><header className="fixed top-0 left-[248px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl z-40 border-b border-surface-variant flex items-center justify-between px-margin-desktop shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="flex items-center gap-space-md"><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">Instrument Management</span><span className="font-label-sm text-label-sm text-secondary">Manage registered weighing instruments and technical specifications</span></div></div><div className="flex items-center gap-space-lg"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span><input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low border border-outline-variant/60 rounded text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search instruments, serial numbers, models..." type="text"/></div><div className="flex items-center gap-space-sm text-secondary"><button aria-label="Notifications" className="relative p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help Documentation" className="p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help_outline</span></button></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-surface-container-high text-on-primary font-label-md text-label-md">MS</div></div></header><main className="w-full pt-16 bg-[#F4F7F9] min-h-screen px-margin-desktop py-space-xl"><div className="flex flex-col w-full">
{/*  Script to ensure shell sidebar 'Tests' item is active  */}

{/*  Top Context Header & Action Strip  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-lg">
<div className="flex flex-col">
{/*  Metrology Breadcrumb  */}
<nav className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary mb-space-xs uppercase tracking-wider">
<a className="hover:text-primary transition-colors" href="#">Tests</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">New Test</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Laboratory &amp; Conditions</span>
</nav>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
        Laboratory &amp; Environmental Conditions
      </h1>
<p className="font-body-md text-body-md text-secondary mt-space-2xs">
        Record the laboratory and environmental conditions for this testing session in compliance with OIML R 76 and ISO/IEC 17025.
      </p>
</div>
{/*  Header Action CTAs  */}
<div className="flex items-center gap-space-sm self-start md:self-center">
<button className="inline-flex items-center gap-space-xs px-space-md py-2 bg-surface-container-lowest text-secondary hover:text-on-surface hover:bg-surface-container-low rounded-lg shadow-sm transition-colors font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px]">save</span>
<span>Save as Draft</span>
</button>
<button className="inline-flex items-center px-space-md py-2 text-secondary hover:text-error transition-colors font-label-md text-label-md rounded-lg" type="button">
        Cancel
      </button>
</div>
</div>
{/*  Horizontal 8-Step Workflow Tracker  */}
<div className="w-full bg-surface-container-lowest rounded-lg shadow-sm p-space-base mb-space-lg">
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-sm items-center relative">
{/*  Step 01: Completed  */}
<div className="flex items-center gap-space-sm group">
<div className="w-7 h-7 rounded-full bg-tertiary-container flex items-center justify-center text-tertiary-fixed shrink-0">
<span className="material-symbols-outlined text-[16px] font-bold">check</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm font-semibold text-primary truncate">01 Instrument</span>
<span className="font-label-sm text-[10px] text-secondary truncate">WT-100 Verified</span>
</div>
</div>
{/*  Step 02: Active  */}
<div className="flex items-center gap-space-sm group">
<div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md text-label-md shrink-0 shadow-sm">
          02
        </div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm font-bold text-primary truncate">02 Lab &amp; Cond.</span>
<span className="font-label-sm text-[10px] text-tertiary-container font-semibold uppercase tracking-wider truncate">Active Stage</span>
</div>
</div>
{/*  Step 03: Muted  */}
<div className="flex items-center gap-space-sm opacity-55">
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-label-md text-label-md shrink-0">
          03
        </div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary truncate">03 Test Selection</span>
<span className="font-label-sm text-[10px] text-outline truncate">Pending</span>
</div>
</div>
{/*  Step 04: Muted  */}
<div className="flex items-center gap-space-sm opacity-55">
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-label-md text-label-md shrink-0">
          04
        </div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary truncate">04 Observations</span>
<span className="font-label-sm text-[10px] text-outline truncate">Pending</span>
</div>
</div>
{/*  Step 05: Muted  */}
<div className="flex items-center gap-space-sm opacity-55">
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-label-md text-label-md shrink-0">
          05
        </div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary truncate">05 Compliance</span>
<span className="font-label-sm text-[10px] text-outline truncate">Pending</span>
</div>
</div>
{/*  Step 06: Muted  */}
<div className="flex items-center gap-space-sm opacity-55">
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-label-md text-label-md shrink-0">
          06
        </div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary truncate">06 Evidence</span>
<span className="font-label-sm text-[10px] text-outline truncate">Pending</span>
</div>
</div>
{/*  Step 07: Muted  */}
<div className="flex items-center gap-space-sm opacity-55">
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-label-md text-label-md shrink-0">
          07
        </div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary truncate">07 Review</span>
<span className="font-label-sm text-[10px] text-outline truncate">Pending</span>
</div>
</div>
{/*  Step 08: Muted  */}
<div className="flex items-center gap-space-sm opacity-55">
<div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-label-md text-label-md shrink-0">
          08
        </div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary truncate">08 Report</span>
<span className="font-label-sm text-[10px] text-outline truncate">Pending</span>
</div>
</div>
</div>
</div>
{/*  Main Workflow Center Stack  */}
<div className="flex flex-col gap-space-lg max-w-[1240px] w-full mx-auto">
{/*  1. Contextual Locked Instrument Strip  */}
<div className="w-full bg-surface-container-lowest rounded-lg p-space-base shadow-sm">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md min-w-0">
<div className="px-2.5 py-1 bg-primary text-on-primary rounded text-[10px] font-label-sm uppercase tracking-wider font-semibold shrink-0">
             Instrument • OIML R 76 Target
          </div>
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
<span>Locked from Step 1</span>
</div>
</div>
<a className="inline-flex items-center gap-1 text-primary-container hover:text-primary font-label-md text-label-md font-semibold self-start lg:self-center transition-colors" href="#">
<span>View Instrument</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
{/*  Key-Value Telemetry Strip  */}
<div className="mt-space-md pt-space-md bg-surface-container-low/60 rounded-lg p-space-md grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-space-md">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Manufacturer</span>
<span className="font-body-md text-body-md font-semibold text-on-surface truncate">ABC WeighTech Pvt. Ltd.</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Model</span>
<span className="font-body-md text-body-md font-semibold text-on-surface">WT-100</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Serial Number</span>
<span className="font-metric-tabular text-metric-tabular text-primary font-semibold tracking-tight">WT100-2026-001</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Type</span>
<span className="font-body-md text-body-md text-on-surface">Platform Scale</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Capacity (Max / Min)</span>
<span className="font-metric-tabular text-metric-tabular text-on-surface">100 kg / 20 g</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Scale Interval (e / d)</span>
<span className="font-metric-tabular text-metric-tabular text-on-surface">10 g (d = 2 g)</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Metrological State</span>
<span className="inline-flex items-center gap-1 mt-0.5 px-2 py-0.5 rounded bg-green-50 text-green-700 text-[11px] font-semibold w-max">
<span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> ACTIVE
          </span>
</div>
</div>
<div className="mt-space-xs text-right">
<span className="font-label-sm text-[11px] text-secondary">
          Instrument specifications &amp; verification parameters automatically ingested from master registry.
        </span>
</div>
</div>
{/*  2. Section 1 — Test Session Information  */}
<div className="w-full bg-surface-container-lowest rounded-lg p-space-xl shadow-sm">
<div className="flex items-center justify-between pb-space-base mb-space-lg bg-surface-container-low/40 px-space-base py-space-sm rounded">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">badge</span>
</div>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">1. Test Session Information</h2>
<p className="font-body-sm text-body-sm text-secondary">
              Record verified operational metadata and personnel assignments for this session.
            </p>
</div>
</div>
<span className="px-2 py-1 bg-surface-container-high rounded text-secondary font-label-sm text-label-sm">
          ISO/IEC 17025 § 7.4
        </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/*  Field 1: Test Date  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface flex items-center justify-between">
<span>Test Date <span className="text-error">*</span></span>
<span className="text-secondary font-normal font-label-sm text-label-sm">UTC Offset: +05:30</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">calendar_today</span>
<input className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:bg-surface-container-low transition-all" type="text" defaultValue="06 Sep 2026"/>
</div>
<span className="font-body-sm text-body-sm text-secondary">Operational date of actual physical verification run.</span>
</div>
{/*  Field 2: Test Reference ID  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface flex items-center justify-between">
<span>Test Reference ID</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary-container rounded text-[10px] font-mono font-bold">SYSTEM-LOCKED</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">lock</span>
<input className="w-full h-11 pl-10 pr-space-md bg-surface-container-low text-primary font-mono font-bold text-body-md cursor-not-allowed select-all" readOnly="" type="text" defaultValue="TEST-012"/>
</div>
<span className="font-body-sm text-body-sm text-secondary">Generated automatically by the sequential audit register.</span>
</div>
{/*  Field 3: Testing Laboratory  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">
            Testing Laboratory <span className="text-error">*</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">domain</span>
<select className="w-full h-11 pl-10 pr-10 bg-surface-container-lowest rounded text-on-surface font-body-md text-body-md shadow-sm focus:outline-none appearance-none cursor-pointer">
<option >XYZ Metrology Laboratory (Accreditation: ISO/IEC 17025)</option>
<option>National Physical Measurement Annex 4</option>
<option>Legal Metrology Field Verification Unit Beta</option>
</select>
<span className="material-symbols-outlined absolute right-3 text-secondary text-[18px] pointer-events-none">arrow_drop_down</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Active accredited facility repository reference.</span>
</div>
{/*  Field 4: Laboratory Location  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">
            Laboratory Location / Chamber Suite
          </label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">location_on</span>
<input className="w-full h-11 pl-10 pr-space-md bg-surface-container-lowest rounded text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:bg-surface-container-low transition-all" type="text" defaultValue="New Delhi, India — Chamber Suite 02"/>
</div>
<span className="font-body-sm text-body-sm text-secondary">Physical station or chamber identifier.</span>
</div>
{/*  Field 5: Testing Technician  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">
            Testing Technician <span className="text-error">*</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">person</span>
<select className="w-full h-11 pl-10 pr-10 bg-surface-container-lowest rounded text-on-surface font-body-md text-body-md shadow-sm focus:outline-none appearance-none cursor-pointer">
<option >A. Kumar — Senior Metrologist (ID: TECH-409)</option>
<option>S. Venkat — Metrology Lead (ID: TECH-118)</option>
<option>P. Mehta — Certified Verification Officer (ID: TECH-302)</option>
</select>
<span className="material-symbols-outlined absolute right-3 text-secondary text-[18px] pointer-events-none">arrow_drop_down</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Lead metrologist taking sign-off accountability.</span>
</div>
{/*  Field 6: Reviewer  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface flex items-center justify-between">
<span>Designated Reviewer</span>
<span className="text-secondary font-label-sm text-label-sm">Sign-off Authority</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">verified_user</span>
<select className="w-full h-11 pl-10 pr-10 bg-surface-container-lowest rounded text-on-surface font-body-md text-body-md shadow-sm focus:outline-none appearance-none cursor-pointer">
<option >R. Singh — Technical Manager (Assignee)</option>
<option>D. Reynolds — Head of Quality Metrology</option>
<option>Pending assignment during evaluation</option>
</select>
<span className="material-symbols-outlined absolute right-3 text-secondary text-[18px] pointer-events-none">arrow_drop_down</span>
</div>
<span className="font-body-sm text-body-sm text-secondary">Reviewer may be assigned or confirmed prior to final report sign-off.</span>
</div>
</div>
</div>
{/*  3. Section 2 — Environmental Conditions  */}
<div className="w-full bg-surface-container-lowest rounded-lg p-space-xl shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-base mb-space-lg bg-surface-container-low/40 px-space-base py-space-sm rounded gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">thermostat</span>
</div>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">2. Environmental Conditions</h2>
<p className="font-body-sm text-body-sm text-secondary">
              Record environmental conditions observed during the test sequence according to OIML R 76-1 Clause 3.9.
            </p>
</div>
</div>
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 bg-tertiary-container text-tertiary-fixed rounded text-label-sm font-semibold uppercase">
            STABLE ATMOSPHERE
          </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
{/*  Ambient Temperature  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">
            Ambient Temperature <span className="text-error">*</span>
</label>
<div className="flex items-center h-11 bg-surface-container-lowest rounded shadow-sm overflow-hidden">
<input className="w-full h-full px-space-md text-right font-metric-tabular text-metric-tabular font-bold text-on-surface bg-transparent focus:outline-none" id="input-temp" type="text" defaultValue="23.5"/>
<div className="h-full px-3 bg-surface-container-low flex items-center justify-center text-secondary font-label-md text-label-md shrink-0">
              °C
            </div>
</div>
<div className="flex items-center justify-between text-body-sm">
<span className="font-body-sm text-[12px] text-secondary">Tolerance: 20°C ± 5°C</span>
<span className="font-label-sm text-[11px] text-green-700 font-bold">NOMINAL</span>
</div>
</div>
{/*  Relative Humidity  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">
            Relative Humidity <span className="text-error">*</span>
</label>
<div className="flex items-center h-11 bg-surface-container-lowest rounded shadow-sm overflow-hidden">
<input className="w-full h-full px-space-md text-right font-metric-tabular text-metric-tabular font-bold text-on-surface bg-transparent focus:outline-none" id="input-humidity" type="text" defaultValue="48"/>
<div className="h-full px-3 bg-surface-container-low flex items-center justify-center text-secondary font-label-md text-label-md shrink-0">
              % RH
            </div>
</div>
<div className="flex items-center justify-between text-body-sm">
<span className="font-body-sm text-[12px] text-secondary">Range: 30% – 70% RH</span>
<span className="font-label-sm text-[11px] text-green-700 font-bold">COMPLIANT</span>
</div>
</div>
{/*  Atmospheric Pressure  */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md font-semibold text-on-surface">
            Atmospheric Pressure
          </label>
<div className="flex items-center h-11 bg-surface-container-lowest rounded shadow-sm overflow-hidden">
<input className="w-full h-full px-space-md text-right font-metric-tabular text-metric-tabular font-bold text-on-surface bg-transparent focus:outline-none" id="input-pressure" type="text" defaultValue="1012"/>
<div className="h-full px-3 bg-surface-container-low flex items-center justify-center text-secondary font-label-md text-label-md shrink-0">
              hPa
            </div>
</div>
<div className="flex items-center justify-between text-body-sm">
<span className="font-body-sm text-[12px] text-secondary">Barometric baseline</span>
<span className="font-label-sm text-[11px] text-secondary font-medium">Standard</span>
</div>
</div>
{/*  Air Flow / Other Parameter  */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md font-semibold text-on-surface">
              Other Conditions
            </label>
<button className="font-label-sm text-[11px] text-tertiary-container hover:underline font-bold" type="button">
              + Add Parameter
            </button>
</div>
<div className="flex items-center h-11 bg-surface-container-lowest rounded shadow-sm overflow-hidden">
<input className="w-full h-full px-space-md font-body-sm text-body-sm text-on-surface bg-transparent focus:outline-none" placeholder="Air velocity: 0.12 m/s" type="text"/>
<div className="h-full px-2.5 bg-surface-container-low flex items-center justify-center text-secondary font-label-sm text-label-sm shrink-0">
              Note
            </div>
</div>
<span className="font-body-sm text-[12px] text-secondary truncate">Draft shield / isolation table active.</span>
</div>
</div>
{/*  Live Environmental Bar Sparkline / Visual Monitor  */}
<div className="mt-space-lg p-space-md bg-surface-container-low rounded-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary">Continuous Chamber Monitor Stream</span>
<span className="font-body-sm text-body-sm text-secondary">Chamber Suite 02 • Sensor Probe calibrated on 15 Aug 2026</span>
</div>
</div>
<div className="flex items-center gap-space-lg text-secondary font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<span className="text-secondary font-medium">Temp Drift (1h):</span>
<span className="font-mono font-bold text-on-surface">±0.2 °C</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-secondary font-medium">RH Variation:</span>
<span className="font-mono font-bold text-on-surface">±1.1 %</span>
</div>
<div className="flex items-center gap-1.5 text-tertiary-container font-semibold">
<span className="material-symbols-outlined text-[16px]">sensors</span>
<span>Telemetry: Live</span>
</div>
</div>
</div>
</div>
{/*  4. Section 3 & 4 (Two-Column Layout: Condition Verification & Laboratory Summary)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  Section 3: Condition Verification Checklist (7 Cols)  */}
<div className="lg:col-span-7 bg-surface-container-lowest rounded-lg p-space-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm bg-surface-container-low/30 px-space-md py-2 rounded">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">fact_check</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">3. Condition Verification</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary">Pre-Test Protocol</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          Verify and confirm physical pre-conditions prior to executing repeatability and load cycles.
        </p>
{/*  Precision Metrology Checkbox List  */}
<div className="flex flex-col gap-space-sm mt-space-xs">
{/*  Checkbox 1  */}
<label className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked="" className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 focus:outline-none cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">
                Environmental conditions recorded before testing
              </span>
<span className="font-body-sm text-body-sm text-secondary">
                Ambient sensors thermally stabilized for at least 60 minutes inside the chamber.
              </span>
</div>
</label>
{/*  Checkbox 2  */}
<label className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked="" className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 focus:outline-none cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">
                Conditions within laboratory applicable testing range
              </span>
<span className="font-body-sm text-body-sm text-secondary">
                Thermal envelope compliant with Class (III) standard interval specifications.
              </span>
</div>
</label>
{/*  Checkbox 3  */}
<label className="flex items-start gap-space-md p-space-md bg-surface-container-low rounded cursor-pointer hover:bg-surface-container transition-colors">
<input className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 focus:outline-none cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">
                Testing area cleared of environmental disturbances
              </span>
<span className="font-body-sm text-body-sm text-secondary">
                Inspect platform for air drafts, structural vibrations, or electromagnetic interference.
              </span>
</div>
</label>
</div>
{/*  Sub-textarea  */}
<div className="flex flex-col gap-space-xs mt-space-sm">
<label className="font-label-md text-label-md font-semibold text-on-surface">
            Environmental Observations / Stabilization Notes
          </label>
<textarea className="w-full p-space-md bg-surface-container-lowest rounded text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none focus:bg-surface-container-low transition-all resize-none" placeholder="Optional notes about environmental conditions during stabilization, draft screen setup, or floor isolation pad status..." rows="3" />
</div>
</div>
{/*  Section 4: Laboratory Information Summary (5 Cols)  */}
<div className="lg:col-span-5 bg-surface-container-lowest rounded-lg p-space-xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm bg-surface-container-low/30 px-space-md py-2 rounded">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">science</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">4. Laboratory Profile</h3>
</div>
<span className="px-1.5 py-0.5 bg-surface-container text-secondary text-[10px] font-bold rounded">
            SYS RECORD
          </span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          Certified institutional footprint recorded for official certificate issuance.
        </p>
{/*  Technical Field Rows  */}
<div className="flex flex-col divide-y-0 gap-space-xs mt-space-xs">
<div className="p-space-md bg-surface-container-low rounded flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Facility</span>
<span className="font-label-md text-label-md font-semibold text-primary text-right">XYZ Metrology Lab</span>
</div>
<div className="p-space-md bg-surface-container-low rounded flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Lab Accreditation</span>
<span className="font-label-md text-label-md font-mono text-on-surface">LAB-001 (ISO 17025)</span>
</div>
<div className="p-space-md bg-surface-container-low rounded flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Geographic Base</span>
<span className="font-body-md text-body-md text-on-surface">New Delhi, India</span>
</div>
<div className="p-space-md bg-surface-container-low rounded flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Assigned Tech</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">A. Kumar (TECH-409)</span>
</div>
<div className="p-space-md bg-surface-container-low rounded flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Session Token</span>
<span className="font-mono text-[12px] bg-surface-container-high px-2 py-0.5 rounded text-primary font-bold">TEST-012</span>
</div>
<div className="p-space-md bg-surface-container-low rounded flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Sequence Status</span>
<span className="px-2.5 py-1 bg-blue-50 text-blue-800 rounded font-label-sm text-[11px] font-bold">
              STEP 2 OF 8 IN PROGRESS
            </span>
</div>
</div>
<div className="mt-space-xs p-space-md bg-primary text-on-primary rounded flex items-center gap-space-sm">
<span className="material-symbols-outlined text-tertiary-fixed text-[20px]">verified</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-tertiary-fixed font-bold uppercase tracking-wider leading-none">Traceability Intact</span>
<span className="font-body-sm text-[12px] text-primary-fixed-dim mt-0.5 leading-tight">All environmental telemetry is cryptographically logged with session ID.</span>
</div>
</div>
</div>
</div>
{/*  5. Section 5 — Additional Conditions / Notes  */}
<div className="w-full bg-surface-container-lowest rounded-lg p-space-xl shadow-sm">
<div className="flex items-center gap-space-xs pb-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">notes</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">5. Additional Conditions &amp; Test Notes</h3>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-space-md">
        Record any relevant observations about the test setup, chamber nuances, or unusual ambient events.
      </p>
<div className="relative">
<textarea className="w-full p-space-md bg-surface-container-lowest rounded text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:bg-surface-container-low transition-all" placeholder="Record any relevant observations regarding physical stability, foundation vibration dampening, power supply line stability, or thermal conditioning..." rows="4" />
</div>
<div className="flex items-center justify-between mt-space-xs text-secondary font-body-sm text-[12px]">
<span>Notice: Do not enter quantitative scale load deviations or final verification decisions here.</span>
<span>0 / 500 characters</span>
</div>
</div>
{/*  6. Metrological Data Validation Panel  */}
<div className="w-full bg-surface-container-lowest rounded-lg p-space-lg shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm mb-space-md bg-surface-container-low/40 px-space-md py-2 rounded">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-green-700 text-[20px]">check_circle</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Pre-Flight Data Validation</h4>
</div>
<span className="px-2 py-0.5 bg-green-100 text-green-800 rounded font-label-sm text-label-sm font-bold">
          ALL CRITICAL CRITERIA SATISFIED (6/6)
        </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
<div className="flex items-center gap-space-sm p-space-sm bg-green-50 rounded text-green-900">
<span className="material-symbols-outlined text-green-700 text-[18px]">done</span>
<span className="font-label-md text-label-md">Test date specified (06 Sep 2026)</span>
</div>
<div className="flex items-center gap-space-sm p-space-sm bg-green-50 rounded text-green-900">
<span className="material-symbols-outlined text-green-700 text-[18px]">done</span>
<span className="font-label-md text-label-md">Accredited laboratory linked (XYZ Metrology)</span>
</div>
<div className="flex items-center gap-space-sm p-space-sm bg-green-50 rounded text-green-900">
<span className="material-symbols-outlined text-green-700 text-[18px]">done</span>
<span className="font-label-md text-label-md">Lead metrologist assigned (A. Kumar)</span>
</div>
<div className="flex items-center gap-space-sm p-space-sm bg-green-50 rounded text-green-900">
<span className="material-symbols-outlined text-green-700 text-[18px]">done</span>
<span className="font-label-md text-label-md">Temperature nominal (23.5 °C within limit)</span>
</div>
<div className="flex items-center gap-space-sm p-space-sm bg-green-50 rounded text-green-900">
<span className="material-symbols-outlined text-green-700 text-[18px]">done</span>
<span className="font-label-md text-label-md">Humidity compliant (48 % within standard)</span>
</div>
<div className="flex items-center gap-space-sm p-space-sm bg-green-50 rounded text-green-900">
<span className="material-symbols-outlined text-green-700 text-[18px]">done</span>
<span className="font-label-md text-label-md">Numeric units formatted to standard format</span>
</div>
</div>
</div>
{/*  7. Action Footer Navigation Bar  */}
<div className="sticky bottom-4 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-md rounded-lg p-space-base shadow-md flex items-center justify-between">
<a className="inline-flex items-center gap-space-xs px-space-md py-2.5 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low rounded-lg shadow-sm font-label-md text-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Back to Instrument</span>
</a>
<div className="flex items-center gap-space-md">
<button className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-2.5 bg-surface-container-lowest text-secondary hover:text-on-surface hover:bg-surface-container-low rounded-lg shadow-sm font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">save</span>
<span>Save Draft</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-lg py-2.5 bg-primary-container text-on-primary hover:bg-primary rounded-lg font-label-md text-label-md font-semibold shadow-sm transition-all cursor-pointer" id="btn-continue" type="button">
<span>Continue to Test Selection</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Interactive Client-side Micro-Interaction Script  */}

</div></main></div>
    </div>
  );
}
