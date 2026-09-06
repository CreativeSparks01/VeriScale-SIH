import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function AddInstrument() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <aside className="fixed left-0 top-0 h-screen w-[248px] bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.08)]"><div className="flex flex-col flex-1 min-h-0"><div className="h-16 px-space-base flex items-center gap-space-sm bg-primary border-b border-primary-container/40"><div className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed"><span className="material-symbols-outlined text-[20px]">scale</span></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-primary tracking-wider leading-none">VERISCALE</span><span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest mt-space-2xs leading-none">METROLOGY PLATFORM</span></div></div><div className="flex-1 overflow-y-auto px-space-sm py-space-md"><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Main</div><nav className="flex flex-col gap-space-2xs mb-space-lg" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[18px]">dashboard</span><span>Dashboard</span></a><a aria-current="page" className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-colors bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r" data-path="instruments" href="#"><span className="material-symbols-outlined text-[18px]">scale</span><span>Instruments</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="tests" href="#"><span className="material-symbols-outlined text-[18px]">experiment</span><span>Tests</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="compliance" href="#"><span className="material-symbols-outlined text-[18px]">verified</span><span>Compliance</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[18px]">assignment</span><span>Reports</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="repository" href="#"><span className="material-symbols-outlined text-[18px]">folder_data</span><span>Repository</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="test-history" href="#"><span className="material-symbols-outlined text-[18px]">history</span><span>Test History</span></a></nav><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Administration</div><nav className="flex flex-col gap-space-2xs" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="users" href="#"><span className="material-symbols-outlined text-[18px]">group</span><span>Users</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="audit-trail" href="#"><span className="material-symbols-outlined text-[18px]">receipt_long</span><span>Audit Trail</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[18px]">settings</span><span>Settings</span></a></nav></div></div><div className="p-space-base bg-primary border-t border-primary-container/40 flex items-center justify-between"><div className="flex items-center gap-space-md"><div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary font-label-md text-label-md">MS<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed ring-2 ring-primary"></span></div><div className="flex flex-col"><span className="font-label-md text-label-md text-on-primary leading-none">Manan Sharma</span><span className="font-label-sm text-label-sm text-primary-fixed-dim mt-space-2xs leading-none">Administrator</span></div></div><button aria-label="User options" className="text-primary-fixed-dim hover:text-on-primary transition-colors flex items-center" type="button"><span className="material-symbols-outlined text-[20px]">more_vert</span></button></div></aside><div className="pl-[248px]"><header className="fixed top-0 left-[248px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl z-40 border-b border-surface-variant flex items-center justify-between px-margin-desktop shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="flex items-center gap-space-md"><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">Instrument Management</span><span className="font-label-sm text-label-sm text-secondary">Manage registered weighing instruments and technical specifications</span></div></div><div className="flex items-center gap-space-lg"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span><input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low border border-outline-variant/60 rounded text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search instruments, serial numbers, models..." type="text"/></div><div className="flex items-center gap-space-sm text-secondary"><button aria-label="Notifications" className="relative p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help Documentation" className="p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help_outline</span></button></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-surface-container-high text-on-primary font-label-md text-label-md">MS</div></div></header><main className="w-full pt-16 bg-[#F4F7F9] min-h-screen px-margin-desktop py-space-xl"><div className="flex flex-col w-full">
{/*  Top Header Sub-Bar & Breadcrumb Navigation  */}
<div className="flex flex-wrap items-center justify-between gap-space-md mb-space-lg">
<div className="flex flex-col gap-space-2xs">
<nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary">
<a className="hover:text-primary transition-colors" href="#">Instruments</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Add Instrument</span>
</nav>
<div className="flex items-center gap-space-sm mt-space-2xs">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Add New Instrument</h1>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-low text-secondary font-label-sm text-label-sm font-semibold uppercase tracking-wider">
          OIML R 76 / ISO 17025
        </span>
</div>
<p className="font-body-md text-body-md text-secondary">Register a non-automatic weighing instrument (NAWI) for laboratory verification routine and compliance certification.</p>
</div>
{/*  Live Telemetry / Direct Quick Actions  */}
<div className="flex items-center gap-space-md bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<div className="flex items-center gap-space-sm px-space-sm py-1 bg-surface-container-low rounded">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Bench Interface:</span>
<span className="font-metric-tabular text-metric-tabular text-on-surface font-semibold">COM-4 (9600 8N1)</span>
</div>
<div className="h-6 w-[1px] bg-outline-variant/60"></div>
<button className="px-space-md py-1.5 rounded text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
        Discard Entry
      </button>
</div>
</div>
{/*  Linear Workflow Tracker Anchor (Non-wizard reference index)  */}
<div className="w-full bg-surface-container-lowest p-space-base rounded-lg shadow-sm mb-space-xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg relative">
{/*  Step 01  */}
<div className="flex items-center gap-space-md relative">
<div className="w-8 h-8 rounded bg-tertiary-container text-tertiary-fixed flex items-center justify-center font-label-md text-label-md font-bold">
          01
        </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider font-bold">Active Registration</span>
<span className="font-headline-sm text-headline-sm text-primary">Instrument Identification</span>
</div>
<div className="hidden md:block absolute -right-space-md top-1/2 -translate-y-1/2 text-outline-variant">
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</div>
</div>
{/*  Step 02  */}
<div className="flex items-center gap-space-md relative">
<div className="w-8 h-8 rounded bg-surface-container-high text-secondary flex items-center justify-center font-label-md text-label-md font-semibold">
          02
        </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Step Required</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Metrological Parameters</span>
</div>
<div className="hidden md:block absolute -right-space-md top-1/2 -translate-y-1/2 text-outline-variant">
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</div>
</div>
{/*  Step 03  */}
<div className="flex items-center gap-space-md">
<div className="w-8 h-8 rounded bg-surface-container-high text-secondary flex items-center justify-center font-label-md text-label-md font-semibold">
          03
        </div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Reference &amp; Specs</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Technical Reference &amp; Audit</span>
</div>
</div>
</div>
</div>
{/*  Form Workflow Wrapper  */}
<form className="flex flex-col gap-space-xl pb-24" id="instrumentForm">
{/*  SECTION 1: IDENTIFICATION  */}
<div className="bg-surface-container-lowest p-space-xl rounded-lg shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md mb-space-lg bg-surface-container-low/40 -mx-space-xl -mt-space-xl p-space-lg rounded-t-lg">
<div>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">badge</span>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">Instrument Identification</h2>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">Enter the precise legal nameplate ratings and manufacturer markings affixed to the chassis.</p>
</div>
<div className="flex items-center gap-space-xs text-outline font-label-sm text-label-sm mt-space-xs md:mt-0">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
<span>Mandatory for OIML Approval</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/*  Manufacturer  */}
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
            Manufacturer Name <span className="text-error font-bold">*</span>
</label>
<div className="relative">
<input className="w-full h-11 px-space-md bg-surface-container-lowest rounded font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="e.g. Sartorius Lab Instruments GmbH" required="" type="text" defaultValue="Mettler Toledo Precision AG"/>
</div>
<span className="font-label-sm text-label-sm text-secondary">Affixed on physical equipment badge</span>
</div>
{/*  Model  */}
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
            Model Designation <span className="text-error font-bold">*</span>
</label>
<input className="w-full h-11 px-space-md bg-surface-container-lowest rounded font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="e.g. XPR205 Analytical Balance" required="" type="text" defaultValue="XP-2004 Industrial High-Cap"/>
<span className="font-label-sm text-label-sm text-secondary">Must match the type-examination certificate</span>
</div>
{/*  Serial Number  */}
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
            Serial Number (Chassis S/N) <span className="text-error font-bold">*</span>
</label>
<div className="relative">
<input className="w-full h-11 px-space-md bg-surface-container-lowest rounded font-metric-tabular text-metric-tabular text-on-surface uppercase tracking-wider focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="e.g. MT-2026-X89201" required="" type="text" defaultValue="WT100-2026-0044"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-secondary text-[18px]">fingerprint</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Unique chassis tracking stamp</span>
</div>
{/*  Instrument Type  */}
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
            Instrument Classification <span className="text-error font-bold">*</span>
</label>
<div className="relative">
<select className="w-full h-11 px-space-md pr-10 bg-surface-container-lowest rounded font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer">
<option  value="platform_scale">Platform Scale (Industrial Floor / Bench)</option>
<option value="precision_balance">Precision Balance (Laboratory Cleanroom)</option>
<option value="analytical_balance">Analytical Balance (Microgram / Class I)</option>
<option value="electronic_scale">Electronic Commercial Scale</option>
<option value="weighbridge">Weighbridge / Heavy Road Vehicle System</option>
<option value="hopper_scale">Hopper / Silo Automated Vessel</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">expand_more</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Defines automated eccentric load positions</span>
</div>
{/*  Address  */}
<div className="md:col-span-2 flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Manufacturer Laboratory / Physical Facility Address</label>
<textarea className="w-full p-space-md bg-surface-container-lowest rounded font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all resize-none" placeholder="Enter complete physical facility street, industrial zone, postal routing, and accredited calibration suite location..." rows="2" defaultValue={"Im Langacher 44, CH-8606 Greifensee, Canton of Zurich, Switzerland"} />
</div>
{/*  Country of Origin  */}
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Country of Manufacture</label>
<div className="relative">
<select className="w-full h-11 px-space-md pr-10 bg-surface-container-lowest rounded font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer">
<option  value="CH">Switzerland (CH)</option>
<option value="DE">Germany (DE)</option>
<option value="US">United States (US)</option>
<option value="JP">Japan (JP)</option>
<option value="IN">India (IN)</option>
<option value="GB">United Kingdom (GB)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">expand_more</span>
</div>
</div>
{/*  Assigned Sub-department  */}
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Testing Laboratory Assignment</label>
<div className="relative">
<select className="w-full h-11 px-space-md pr-10 bg-surface-container-lowest rounded font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer">
<option  value="lab4">Metrology Testing Suite 4 (Cleanroom B)</option>
<option value="lab1">Primary Mass Standards Lab (Vault 1)</option>
<option value="field">Field Inspection Team (Mobile Rig A)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">expand_more</span>
</div>
</div>
</div>
</div>
{/*  SECTION 2: CAPACITY & METROLOGICAL PARAMETERS  */}
<div className="bg-surface-container-lowest p-space-xl rounded-lg shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md mb-space-lg bg-surface-container-low/40 -mx-space-xl -mt-space-xl p-space-lg rounded-t-lg">
<div>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">tune</span>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">Capacity &amp; Scale Parameters</h2>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">Governs automated maximum permissible error (mpe) calculations in accordance with OIML R 76-1.</p>
</div>
<div className="flex items-center gap-space-xs px-2.5 py-1 bg-surface-container-high rounded text-primary font-metric-tabular text-metric-tabular">
<span>n = Max / e = </span>
<span className="font-bold text-on-tertiary-container" id="divisionIndicator">10,000 divisions</span>
</div>
</div>
{/*  4-Column High Density Metric Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
{/*  Min Capacity  */}
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
<span>Minimum (Min) <span className="text-error font-bold">*</span></span>
<span className="text-secondary font-label-sm text-label-sm font-normal">20 e</span>
</label>
<div className="flex h-11 rounded overflow-hidden shadow-sm">
<input className="w-full px-space-md bg-surface-container-lowest font-metric-tabular text-metric-tabular text-right text-on-surface focus:outline-none" required="" step="any" type="number" defaultValue="20"/>
<div className="bg-surface-container-high px-space-md flex items-center justify-center font-label-md text-label-md text-on-surface font-semibold">
              g
            </div>
</div>
<span className="font-label-sm text-label-sm text-secondary">Lower limit of valid testing</span>
</div>
{/*  Max Capacity  */}
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
<span>Maximum (Max) <span className="text-error font-bold">*</span></span>
<span className="text-secondary font-label-sm text-label-sm font-normal">Full Scale</span>
</label>
<div className="flex h-11 rounded overflow-hidden shadow-sm">
<input className="w-full px-space-md bg-surface-container-lowest font-metric-tabular text-metric-tabular text-right text-on-surface focus:outline-none" required="" step="any" type="number" defaultValue="100"/>
<div className="bg-surface-container-high px-space-md flex items-center justify-center font-label-md text-label-md text-on-surface font-semibold">
              kg
            </div>
</div>
<span className="font-label-sm text-label-sm text-secondary">Maximum non-destructive load</span>
</div>
{/*  Verification Scale Interval (e)  */}
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
<span>Interval (e) <span className="text-error font-bold">*</span></span>
<span className="text-secondary font-label-sm text-label-sm font-normal">Legal Value</span>
</label>
<div className="flex h-11 rounded overflow-hidden shadow-sm">
<input className="w-full px-space-md bg-surface-container-lowest font-metric-tabular text-metric-tabular text-right text-on-surface focus:outline-none" required="" step="any" type="number" defaultValue="10"/>
<div className="bg-surface-container-high px-space-md flex items-center justify-center font-label-md text-label-md text-on-surface font-semibold">
              g
            </div>
</div>
<span className="font-label-sm text-label-sm text-secondary">Verification interval</span>
</div>
{/*  Actual Scale Interval (d)  */}
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
<span>Interval (d) <span className="text-error font-bold">*</span></span>
<span className="text-secondary font-label-sm text-label-sm font-normal">Readout</span>
</label>
<div className="flex h-11 rounded overflow-hidden shadow-sm">
<input className="w-full px-space-md bg-surface-container-lowest font-metric-tabular text-metric-tabular text-right text-on-surface focus:outline-none" required="" step="any" type="number" defaultValue="10"/>
<div className="bg-surface-container-high px-space-md flex items-center justify-center font-label-md text-label-md text-on-surface font-semibold">
              g
            </div>
</div>
<span className="font-label-sm text-label-sm text-secondary">Display graduation value</span>
</div>
</div>
{/*  Second Row: Accuracy Class & Tare Provisions  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mt-space-lg pt-space-lg bg-surface-container-low/20 -mx-space-xl px-space-xl">
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Accuracy Class (OIML R 76-1)</label>
<div className="relative">
<select className="w-full h-11 px-space-md pr-10 bg-surface-container-lowest rounded font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer font-medium">
<option value="class_1">Class I (Special Accuracy) [ I ]</option>
<option value="class_2">Class II (High Accuracy) [ II ]</option>
<option  value="class_3">Class III (Medium Accuracy) [ III ]</option>
<option value="class_4">Class IIII (Ordinary Accuracy) [ IIII ]</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">expand_more</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Governs standard error envelopes (±0.5e, ±1.0e, ±1.5e)</span>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Number of Ranges / Multi-Interval</label>
<div className="relative">
<select className="w-full h-11 px-space-md pr-10 bg-surface-container-lowest rounded font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all appearance-none cursor-pointer">
<option  value="single">Single-Interval Instrument</option>
<option value="multi_interval">Multi-Interval Instrument (W1, W2)</option>
<option value="multiple_range">Multiple Range (Independent Tare)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">expand_more</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Discrete range switching boundaries</span>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Dead Load / Pre-load Allowance</label>
<div className="flex h-11 rounded overflow-hidden shadow-sm">
<input className="w-full px-space-md bg-surface-container-lowest font-metric-tabular text-metric-tabular text-right text-on-surface focus:outline-none" type="number" defaultValue="0.0"/>
<div className="bg-surface-container-high px-space-md flex items-center justify-center font-label-md text-label-md text-on-surface font-semibold">
              kg
            </div>
</div>
<span className="font-label-sm text-label-sm text-secondary">Permanent fixture or hopper tare</span>
</div>
</div>
{/*  Regulatory Notification Strip  */}
<div className="mt-space-lg flex items-start gap-space-md p-space-md bg-surface-container-low rounded">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">info</span>
<div className="flex flex-col gap-space-2xs">
<span className="font-label-md text-label-md text-primary font-bold">Metrological Rule Verification (ISO/IEC 17025)</span>
<p className="font-body-sm text-body-sm text-on-surface">
            Max capacity (<strong className="font-semibold">100 kg</strong>) exceeds Min (<strong className="font-semibold">0.020 kg</strong>). Calculated resolution of <strong className="font-semibold">10,000 divisions</strong> complies with Class III limits (<span className="font-metric-tabular">500 ≤ n ≤ 10,000</span>). Live automated tolerance bands will be anchored to ±5g (0-5kg), ±10g (5-20kg), and ±15g (&gt;20kg).
          </p>
</div>
</div>
</div>
{/*  SECTION 3: TECHNICAL SPECIFICATIONS & OPERATIONAL ATTRIBUTES  */}
<div className="bg-surface-container-lowest p-space-xl rounded-lg shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md mb-space-lg bg-surface-container-low/40 -mx-space-xl -mt-space-xl p-space-lg rounded-t-lg">
<div>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">thermostat</span>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">Technical Specifications &amp; Environmental Limits</h2>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">Define boundary environmental states required during verification and repeatability runs.</p>
</div>
<button className="mt-space-sm md:mt-0 inline-flex items-center gap-space-xs px-space-md py-1.5 bg-surface-container-lowest text-primary hover:bg-surface-container-high rounded font-label-md text-label-md font-semibold transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">add</span>
<span>Add Custom Parameter</span>
</button>
</div>
{/*  Specification Matrix  */}
<div className="flex flex-col divide-y divide-surface-container-high">
{/*  Row 1: Temperature  */}
<div className="py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="w-full md:w-1/3">
<span className="font-label-md text-label-md text-on-surface font-semibold">Operating Temperature Range</span>
<p className="font-body-sm text-body-sm text-secondary">Standard metrological chamber boundaries</p>
</div>
<div className="w-full md:w-1/3 flex items-center gap-space-sm">
<input className="w-full h-10 px-space-md bg-surface-container-lowest rounded font-metric-tabular text-metric-tabular text-on-surface text-right focus:outline-none" type="text" defaultValue="-10 to +40"/>
<div className="w-16 h-10 bg-surface-container-high rounded flex items-center justify-center font-label-md text-label-md text-on-surface font-semibold">
              °C
            </div>
</div>
<div className="w-full md:w-1/3 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary">OIML standard rated thermal envelope</span>
<span className="material-symbols-outlined text-outline-variant text-[18px]">lock</span>
</div>
</div>
{/*  Row 2: Warm-up Time  */}
<div className="py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="w-full md:w-1/3">
<span className="font-label-md text-label-md text-on-surface font-semibold">Warm-up Stabilization Time</span>
<p className="font-body-sm text-body-sm text-secondary">Required power soak before zero setting</p>
</div>
<div className="w-full md:w-1/3 flex items-center gap-space-sm">
<input className="w-full h-10 px-space-md bg-surface-container-lowest rounded font-metric-tabular text-metric-tabular text-on-surface text-right focus:outline-none" type="number" defaultValue="30"/>
<div className="w-16 h-10 bg-surface-container-high rounded flex items-center justify-center font-label-md text-label-md text-on-surface font-semibold">
              min
            </div>
</div>
<div className="w-full md:w-1/3 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary">Automatic zero lock timer enforcement</span>
<button className="text-outline hover:text-error transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">delete_outline</span>
</button>
</div>
</div>
{/*  Row 3: Tare Range  */}
<div className="py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="w-full md:w-1/3">
<span className="font-label-md text-label-md text-on-surface font-semibold">Subtractive Tare Range (T-)</span>
<p className="font-body-sm text-body-sm text-secondary">Maximum compensatory container tare</p>
</div>
<div className="w-full md:w-1/3 flex items-center gap-space-sm">
<input className="w-full h-10 px-space-md bg-surface-container-lowest rounded font-metric-tabular text-metric-tabular text-on-surface text-right focus:outline-none" type="number" defaultValue="100"/>
<div className="w-16 h-10 bg-surface-container-high rounded flex items-center justify-center font-label-md text-label-md text-on-surface font-semibold">
              % Max
            </div>
</div>
<div className="w-full md:w-1/3 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary">Full rated load subtractive tare mechanism</span>
<button className="text-outline hover:text-error transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">delete_outline</span>
</button>
</div>
</div>
{/*  Row 4: Power Supply  */}
<div className="py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="w-full md:w-1/3">
<span className="font-label-md text-label-md text-on-surface font-semibold">Electrical Supply Rating</span>
<p className="font-body-sm text-body-sm text-secondary">Power line stability tolerance</p>
</div>
<div className="w-full md:w-1/3 flex items-center gap-space-sm">
<input className="w-full h-10 px-space-md bg-surface-container-lowest rounded font-metric-tabular text-metric-tabular text-on-surface text-right focus:outline-none" type="text" defaultValue="230V AC ±10% / 50Hz"/>
<div className="w-16 h-10 bg-surface-container-high rounded flex items-center justify-center font-label-md text-label-md text-on-surface font-semibold">
              VAC
            </div>
</div>
<div className="w-full md:w-1/3 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-secondary">Internal UPS buffer integrated</span>
<button className="text-outline hover:text-error transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">delete_outline</span>
</button>
</div>
</div>
</div>
</div>
{/*  SECTION 4: DOCUMENTATION & TYPE CERTS  */}
<div className="bg-surface-container-lowest p-space-xl rounded-lg shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md mb-space-lg bg-surface-container-low/40 -mx-space-xl -mt-space-xl p-space-lg rounded-t-lg">
<div>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">verified_user</span>
<h2 className="font-headline-md text-headline-md text-primary tracking-tight">Certification &amp; Legal Approvals</h2>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">Cross-reference regulatory dossiers and factory conformity certificates.</p>
</div>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">Audit Traceable</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Manufacturer Spec Ref</label>
<input className="w-full h-11 px-space-md bg-surface-container-lowest rounded font-metric-tabular text-metric-tabular text-on-surface focus:outline-none" type="text" defaultValue="DS-WT100-REV3-2026"/>
<span className="font-label-sm text-label-sm text-secondary">Datasheet revision code</span>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">Calibration Routine ID</label>
<input className="w-full h-11 px-space-md bg-surface-container-lowest rounded font-metric-tabular text-metric-tabular text-on-surface focus:outline-none" type="text" defaultValue="ISO17025-CAL-IND-409"/>
<span className="font-label-sm text-label-sm text-secondary">Accredited testing SOP protocol</span>
</div>
<div className="flex flex-col gap-space-2xs">
<label className="font-label-md text-label-md text-on-surface font-semibold">OIML Type Approval Number</label>
<input className="w-full h-11 px-space-md bg-surface-container-lowest rounded font-metric-tabular text-metric-tabular text-on-surface focus:outline-none font-bold text-primary" type="text" defaultValue="R76/2006-A-NL1-26.01"/>
<span className="font-label-sm text-label-sm text-secondary">Pattern approval certificate ID</span>
</div>
</div>
</div>
{/*  SECTION 5: AUTOMATED VALIDATION SUMMARY & SYSTEM METADATA  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/*  Pre-Registration Checklist  */}
<div className="lg:col-span-7 bg-surface-container-lowest p-space-xl rounded-lg shadow-sm">
<div className="flex items-center gap-space-sm mb-space-md">
<span className="material-symbols-outlined text-on-tertiary-container text-[20px]">fact_check</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Pre-registration Validation Gate</h3>
</div>
<p className="font-body-sm text-body-sm text-secondary mb-space-base">System automatic verification against OIML R 76 rules before committing instrument to active laboratory registry.</p>
<div className="space-y-space-sm">
<div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-[#15803D]">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface flex-1">Mandatory identification tags, model, and serial verified</span>
<span className="font-label-sm text-label-sm text-[#15803D] uppercase font-bold">Valid</span>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-[#15803D]">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface flex-1">Capacity parameters mathematically consistent (Max 100 kg &gt; Min 20 g)</span>
<span className="font-label-sm text-label-sm text-[#15803D] uppercase font-bold">Valid</span>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-[#15803D]">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface flex-1">Verification division count (n = 10,000) inside Class III range</span>
<span className="font-label-sm text-label-sm text-[#15803D] uppercase font-bold">Valid</span>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-[#15803D]">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface flex-1">OIML R 76 Type Approval certificate format confirmed</span>
<span className="font-label-sm text-label-sm text-[#15803D] uppercase font-bold">Valid</span>
</div>
<div className="flex items-center gap-space-sm p-space-sm rounded bg-surface-container-high/40">
<span className="material-symbols-outlined text-[18px] text-secondary">radio_button_unchecked</span>
<span className="font-body-sm text-body-sm text-secondary flex-1">External PDF dossier upload (optional)</span>
<span className="font-label-sm text-label-sm text-secondary uppercase font-medium">Pending Upload</span>
</div>
</div>
</div>
{/*  Record Governance & Metadata  */}
<div className="lg:col-span-5 bg-surface-container-lowest p-space-xl rounded-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">admin_panel_settings</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Record Governance</h3>
</div>
<span className="px-2.5 py-0.5 rounded bg-[#F0FDF4] text-[#15803D] font-label-sm text-label-sm font-bold tracking-wider uppercase">
              STATUS: READY
            </span>
</div>
<div className="space-y-space-md text-body-sm">
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Created By</span>
<span className="font-medium text-on-surface">Manan Sharma (Administrator)</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Registration UTC</span>
<span className="font-metric-tabular text-metric-tabular text-on-surface">06 Sep 2026, 14:30 UTC</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Assigned Lab</span>
<span className="font-medium text-on-surface">Metrology Testing Suite 4</span>
</div>
<div className="flex justify-between items-center py-1">
<span className="text-secondary">Accreditation Mandate</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">ISO/IEC 17025:2017</span>
</div>
</div>
</div>
<div className="mt-space-lg p-space-md bg-surface-container-low rounded flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">shield</span>
<span className="font-label-sm text-label-sm text-secondary">
            Submission writes an immutable audit record to the tamper-evident metrology ledger.
          </span>
</div>
</div>
</div>
{/*  STICKY ACTION FOOTER BAR  */}
<div className="fixed bottom-0 left-[248px] right-0 bg-surface-container-lowest/95 backdrop-blur-md px-margin-desktop py-space-md flex items-center justify-between shadow-[0_-2px_12px_rgba(0,0,0,0.06)] z-40">
<div className="flex items-center gap-space-sm">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Fields marked with an asterisk (<strong className="text-error">*</strong>) are strictly required for calibration generation.</span>
</div>
<div className="flex items-center gap-space-md">
<button className="px-space-lg h-10 rounded bg-surface-container-low text-secondary hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md font-semibold transition-all" type="button">
          Cancel
        </button>
<button className="px-space-lg h-10 rounded bg-surface-container-lowest text-primary hover:bg-surface-container-low font-label-md text-label-md font-semibold shadow-sm transition-all" type="button">
          Save Draft
        </button>
<button className="px-space-xl h-10 rounded bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md font-semibold flex items-center gap-space-sm shadow-md transition-all" type="submit">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Register Instrument</span>
</button>
</div>
</div>
</form>
</div>
</main></div>
    </div>
  );
}
