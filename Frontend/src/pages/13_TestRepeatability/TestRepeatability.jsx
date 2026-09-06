import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function TestRepeatability() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full">
<div className="flex w-full min-h-screen bg-background text-on-surface">
{/*  LEFT SIDEBAR: Deep Navy Metrology Navigation  */}
<aside className="w-64 flex-shrink-0 bg-primary flex flex-col justify-between select-none shadow-md z-20">
<div className="flex flex-col">
{/*  Brand / Identity  */}
<div className="px-5 py-5 flex items-center gap-3 bg-[#0B263D]">
<div className="w-8 h-8 rounded bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary-fixed-dim">
<span className="material-symbols-outlined text-[20px]">scale</span>
</div>
<div className="flex flex-col leading-tight">
<span className="font-headline-sm text-sm tracking-wider uppercase text-on-primary font-bold">VeriScale</span>
<span className="font-label-sm text-[10px] text-surface-container-high tracking-widest uppercase opacity-80">Metrology Platform</span>
</div>
</div>
{/*  System State / Verification Standard Tag  */}
<div className="px-5 py-2.5 bg-primary-container/40 flex items-center justify-between text-surface-container-highest">
<span className="font-label-sm text-[10px] tracking-wide uppercase font-semibold">OIML R 76-1 / ISO 17025</span>
<span className="inline-flex items-center gap-1 font-label-sm text-[10px] text-tertiary-fixed-dim">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim animate-pulse"></span> SYSTEM READY
          </span>
</div>
{/*  Navigation Links  */}
<nav className="px-3 py-4 flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded text-surface-container-high hover:text-on-primary hover:bg-primary-container/50 font-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-surface-container-high hover:text-on-primary hover:bg-primary-container/50 font-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
<span>Instruments</span>
</a>
{/*  Active Link: Tests  */}
<a className="flex items-center justify-between px-3 py-2 rounded bg-primary-container text-on-primary font-label-md shadow-sm" href="#">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">biotech</span>
<span className="font-semibold tracking-wide">Tests</span>
</div>
<span className="w-1.5 h-4 rounded-full bg-tertiary-fixed-dim"></span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-surface-container-high hover:text-on-primary hover:bg-primary-container/50 font-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Compliance</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-surface-container-high hover:text-on-primary hover:bg-primary-container/50 font-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">description</span>
<span>Reports</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-surface-container-high hover:text-on-primary hover:bg-primary-container/50 font-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">inventory_2</span>
<span>Repository</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-surface-container-high hover:text-on-primary hover:bg-primary-container/50 font-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">history</span>
<span>Test History</span>
</a>
<div className="my-2 px-3">
<div className="h-px bg-primary-container/60 w-full"></div>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded text-surface-container-high hover:text-on-primary hover:bg-primary-container/50 font-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">group</span>
<span>Users</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-surface-container-high hover:text-on-primary hover:bg-primary-container/50 font-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">policy</span>
<span>Audit Trail</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded text-surface-container-high hover:text-on-primary hover:bg-primary-container/50 font-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span>Settings</span>
</a>
</nav>
</div>
{/*  Bottom Profile Card  */}
<div className="p-3 bg-[#0B263D] m-3 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2.5 min-w-0">
<div className="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center font-headline-sm text-xs font-semibold flex-shrink-0">
            MS
          </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-xs font-semibold text-on-primary truncate">Manan Sharma</span>
<span className="font-label-sm text-[10px] text-surface-container-high truncate">Administrator • Lead Verifier</span>
</div>
</div>
<button className="text-surface-container-high hover:text-on-primary p-1">
<span className="material-symbols-outlined text-[18px]">logout</span>
</button>
</div>
</aside>
{/*  RIGHT MAIN CONTENT WORKSPACE  */}
<div className="flex-1 flex flex-col min-w-0 bg-background overflow-x-hidden">
{/*  TOP UTILITY / LIVE INDICATOR STRIP  */}
<div className="w-full bg-surface-container-lowest px-8 py-2.5 flex items-center justify-between shadow-sm z-10">
<div className="flex items-center gap-6 text-on-surface-variant font-label-md">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
<span className="text-on-surface font-semibold text-xs tracking-wider">COM1: 9600 BAUD [ONLINE]</span>
</div>
<span className="text-outline-variant font-light">|</span>
<div className="flex items-center gap-1 text-xs">
<span className="bg-surface-container px-1.5 py-0.5 rounded font-metric-tabular font-bold text-primary">-&gt;0&lt;-</span>
<span className="text-on-surface font-medium ml-1">STABLE ZERO</span>
</div>
<span className="text-outline-variant font-light">|</span>
<div className="flex items-center gap-1.5 text-xs">
<span className="font-label-sm uppercase tracking-wide text-on-surface-variant">Live Weight:</span>
<span className="font-headline-sm text-primary font-bold font-metric-tabular tracking-tight">20.010 kg</span>
<span className="text-[10px] uppercase font-semibold bg-surface-container-high text-primary px-1 rounded">NET</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-xs">
<span className="material-symbols-outlined text-[15px] text-tertiary-fixed-dim">cloud_done</span>
<span>Saved 6 seconds ago</span>
</div>
<button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md rounded text-xs transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">save</span>
            Save Draft
          </button>
<button className="px-3 py-1.5 bg-surface-container-low hover:bg-error-container hover:text-error text-on-surface font-label-md rounded text-xs transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">close</span>
            Exit Test
          </button>
</div>
</div>
{/*  MAIN HEADER & BREADCRUMBS  */}
<div className="px-8 pt-5 pb-3">
<nav className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant mb-1">
<a className="hover:text-primary" href="#">Tests</a>
<span>/</span>
<a className="hover:text-primary font-metric-tabular" href="#">TEST-012</a>
<span>/</span>
<span>Observations</span>
<span>/</span>
<span className="text-primary font-semibold">Repeatability</span>
</nav>
<div className="flex items-end justify-between">
<div>
<h1 className="font-headline-xl text-primary font-bold tracking-tight">Repeatability Test</h1>
<p className="font-body-md text-on-surface-variant mt-0.5">Record repeated indications for the applicable test load in accordance with statutory verification protocols.</p>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 bg-surface-container-high rounded text-primary font-label-sm font-semibold tracking-wider">ROUTINE 03 OF 04</span>
</div>
</div>
</div>
{/*  8-STAGE WORKFLOW STEPPER  */}
<div className="px-8 py-3">
<div className="bg-surface-container-lowest p-3 rounded-lg shadow-sm flex items-center justify-between gap-2 overflow-x-auto">
{/*  Step 1  */}
<div className="flex items-center gap-2 min-w-max px-2 py-1">
<div className="w-6 h-6 rounded-full bg-[#15803D] text-on-primary flex items-center justify-center font-label-sm text-xs font-bold">✓</div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-semibold">01 Instrument</span>
<span className="font-label-md text-xs font-medium text-on-surface">WT-100 Verified</span>
</div>
</div>
<span className="text-outline-variant font-light">›</span>
{/*  Step 2  */}
<div className="flex items-center gap-2 min-w-max px-2 py-1">
<div className="w-6 h-6 rounded-full bg-[#15803D] text-on-primary flex items-center justify-center font-label-sm text-xs font-bold">✓</div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-semibold">02 Lab Conditions</span>
<span className="font-label-md text-xs font-medium text-on-surface">Recorded &amp; Stable</span>
</div>
</div>
<span className="text-outline-variant font-light">›</span>
{/*  Step 3  */}
<div className="flex items-center gap-2 min-w-max px-2 py-1">
<div className="w-6 h-6 rounded-full bg-[#15803D] text-on-primary flex items-center justify-center font-label-sm text-xs font-bold">✓</div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-semibold">03 Selection</span>
<span className="font-label-md text-xs font-medium text-on-surface">4 </span>
</div>
</div>
<span className="text-outline-variant font-light">›</span>
{/*  Step 4: Active  */}
<div className="flex items-center gap-2 min-w-max bg-primary-container px-3 py-1.5 rounded-md shadow-sm">
<div className="w-6 h-6 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed flex items-center justify-center font-label-sm text-xs font-bold">04</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-sm text-[10px] text-surface-container-high uppercase font-semibold">Observations</span>
<span className="px-1 py-0.2 rounded bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-sm text-[9px] font-bold tracking-wider">ACTIVE</span>
</div>
<span className="font-label-md text-xs font-semibold text-on-primary">Repeatability</span>
</div>
</div>
<span className="text-outline-variant font-light">›</span>
{/*  Step 5  */}
<div className="flex items-center gap-2 min-w-max px-2 py-1 opacity-50">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-xs font-semibold">05</div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-semibold">05 Compliance</span>
<span className="font-label-md text-xs text-on-surface-variant">Pending Step 4</span>
</div>
</div>
<span className="text-outline-variant font-light">›</span>
{/*  Step 6  */}
<div className="flex items-center gap-2 min-w-max px-2 py-1 opacity-50">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-xs font-semibold">06</div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-semibold">06 Evidence</span>
<span className="font-label-md text-xs text-on-surface-variant">Artifacts &amp; Seals</span>
</div>
</div>
<span className="text-outline-variant font-light">›</span>
{/*  Step 7  */}
<div className="flex items-center gap-2 min-w-max px-2 py-1 opacity-50">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-xs font-semibold">07</div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-semibold">07 Review</span>
<span className="font-label-md text-xs text-on-surface-variant">Officer Sign-Off</span>
</div>
</div>
<span className="text-outline-variant font-light">›</span>
{/*  Step 8  */}
<div className="flex items-center gap-2 min-w-max px-2 py-1 opacity-50">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-xs font-semibold">08</div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-semibold">08 Report</span>
<span className="font-label-md text-xs text-on-surface-variant">Certificate Issuance</span>
</div>
</div>
</div>
</div>
{/*  READ-ONLY TEST CONTEXT STRIP  */}
<div className="px-8 py-1">
<div className="bg-surface-container-low rounded-lg p-3 shadow-sm flex items-center justify-between flex-wrap gap-4 text-xs">
<div className="flex items-center gap-5 flex-wrap">
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">Instrument Specification</span>
<span className="font-label-md font-semibold text-primary">ABC WeighTech WT-100 <span className="font-normal font-metric-tabular text-on-surface-variant">(Class III NAWI)</span></span>
</div>
<div className="h-6 w-px bg-outline-variant/60"></div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">Serial Number</span>
<span className="font-metric-tabular font-semibold text-on-surface">WT100-2026-001</span>
</div>
<div className="h-6 w-px bg-outline-variant/60"></div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">Test ID &amp; Laboratory</span>
<span className="font-label-md text-on-surface"><strong className="font-metric-tabular text-primary">TEST-012</strong> • XYZ Metrology Laboratory</span>
</div>
<div className="h-6 w-px bg-outline-variant/60"></div>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">Technician &amp; Timestamp</span>
<span className="font-label-md text-on-surface">A. Kumar <span className="text-on-surface-variant font-metric-tabular">(TECH-409)</span> • 06 Sep 2026 11:28 AM</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E6FFFA] text-[#0D9488] font-label-sm text-xs font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]"></span> IN PROGRESS
            </span>
<a className="font-label-sm font-semibold text-primary-container hover:underline flex items-center gap-0.5" href="#">
              View Instrument Profile ↗
            </a>
</div>
</div>
</div>
{/*  MAIN TEST CONTENT CONTAINER  */}
<div className="px-8 py-4 space-y-4">
{/*  TEST PROCEDURE HEADER & SPECS CARD  */}
<div className="bg-surface-container-lowest rounded-lg p-5 shadow-sm">
<div className="flex items-start justify-between pb-3">
<div className="space-y-1">
<div className="flex items-center gap-2.5">
<h2 className="font-headline-md text-primary font-bold">Repeatability Test Routine</h2>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-[11px] font-semibold tracking-wide">
                  METROLOGICAL • OIML R 76-1 § A.4.10 / Clause 3.6.1
                </span>
</div>
<p className="font-body-md text-on-surface-variant text-sm">
                Evaluate consistency of the instrument indication across repeated applications of the applicable test load under unchanged laboratory conditions.
              </p>
</div>
<span className="px-3 py-1 rounded bg-[#F0FDF4] text-[#15803D] font-label-sm text-xs font-semibold tracking-wide flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">check_circle</span> 5 / 5 Trials Input Complete ✓
            </span>
</div>
{/*  Metadata Spec Strip  */}
<div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-3 bg-surface-container-low rounded p-3">
<div>
<div className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">Scale Interval (e)</div>
<div className="font-metric-tabular font-bold text-sm text-on-surface mt-0.5">10 g <span className="text-xs font-normal text-on-surface-variant">(Verification div)</span></div>
</div>
<div>
<div className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">Accuracy Class</div>
<div className="font-metric-tabular font-bold text-sm text-on-surface mt-0.5 font-mono">(III) <span className="text-xs font-normal text-on-surface-variant">Medium</span></div>
</div>
<div>
<div className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">Max Capacity (Max)</div>
<div className="font-metric-tabular font-bold text-sm text-on-surface mt-0.5">100.000 kg</div>
</div>
<div>
<div className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">Min Capacity (Min)</div>
<div className="font-metric-tabular font-bold text-sm text-on-surface mt-0.5">0.200 kg <span className="text-xs font-normal text-on-surface-variant">(20 e)</span></div>
</div>
<div className="bg-surface-container rounded px-2.5 py-1">
<div className="font-label-sm text-[10px] text-primary uppercase font-bold">Applied Test Load</div>
<div className="font-metric-tabular font-bold text-sm text-primary mt-0.5">20.000 kg <span className="text-xs font-normal text-on-surface-variant">(Nominal 0.2 Max)</span></div>
</div>
</div>
</div>
{/*  SECTION 1: REPEATABILITY CONFIGURATION PANEL  */}
<div className="bg-surface-container-lowest rounded-lg p-5 shadow-sm">
<div className="flex items-center justify-between pb-3">
<div>
<h3 className="font-headline-sm text-primary font-bold">Repeatability Configuration</h3>
<p className="font-body-sm text-on-surface-variant text-xs">Configure the observation sequence according to the applicable test program schedule.</p>
</div>
<button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-xs font-semibold rounded flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-[15px]">sync_alt</span>
              Load from Test Program
            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
{/*  Test Load Input  */}
<div>
<label className="block font-label-sm text-xs text-on-surface font-medium mb-1">Test Load (L)</label>
<div className="flex rounded shadow-sm bg-surface-container-low overflow-hidden">
<input className="w-full bg-surface-container-low px-2.5 py-1.5 font-metric-tabular text-sm text-right text-on-surface font-semibold focus:outline-none" readOnly="" type="text" defaultValue="20.000"/>
<span className="bg-surface-container px-2 py-1.5 font-label-sm text-xs text-on-surface-variant font-medium flex items-center">kg</span>
</div>
</div>
{/*  Number of Trials  */}
<div>
<label className="block font-label-sm text-xs text-on-surface font-medium mb-1">Number of Trials</label>
<input className="w-full bg-surface-container-low px-2.5 py-1.5 font-metric-tabular text-sm text-center text-on-surface font-semibold rounded focus:outline-none" readOnly="" type="number" defaultValue="5"/>
</div>
{/*  Test Sequence  */}
<div>
<label className="block font-label-sm text-xs text-on-surface font-medium mb-1">Test Sequence</label>
<div className="relative">
<select className="w-full bg-surface-container-lowest px-2.5 py-1.5 font-label-md text-xs text-on-surface rounded shadow-sm appearance-none focus:outline-none">
<option>Standard (Sequential Load/Unload)</option>
<option>Continuous Zero Return</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-2 text-[16px] text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
{/*  Load Application Condition  */}
<div>
<label className="block font-label-sm text-xs text-on-surface font-medium mb-1">Load Application Condition</label>
<div className="relative">
<select className="w-full bg-surface-container-lowest px-2.5 py-1.5 font-label-md text-xs text-on-surface rounded shadow-sm appearance-none focus:outline-none">
<option>Centered on Receptor (Standard)</option>
<option>Evenly Distributed</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-2 text-[16px] text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
{/*  Test Position / Setup  */}
<div>
<label className="block font-label-sm text-xs text-on-surface font-medium mb-1">Test Position / Setup</label>
<input className="w-full bg-surface-container-lowest px-2.5 py-1.5 font-body-sm text-xs text-on-surface rounded shadow-sm focus:outline-none" type="text" defaultValue="Center platform, draft shield verified"/>
</div>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant mt-2.5 italic">
            Test load and trial counts configured in accordance with OIML R 76-1 § A.4.10 testing schedule for Class III balances (≥ 3 series at nominal 50% &amp; 100% capacity; 5 cycles recorded).
          </p>
</div>
{/*  SECTION 2: CORE OBSERVATION TABLE (PRIMARY COMPONENT)  */}
<div className="bg-surface-container-lowest rounded-lg p-5 shadow-sm">
<div className="flex items-center justify-between pb-3">
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-primary font-bold">Repeated Observations</h3>
<span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[11px] font-bold">5 Configured Trials</span>
</div>
<p className="font-body-sm text-on-surface-variant text-xs mt-0.5">
                Enter the indicated value recorded for each trial. Deviation (<span className="font-metric-tabular font-medium">E = I - L</span>) is computed automatically with cryptographic audit verification.
              </p>
</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-xs font-semibold rounded flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[14px]">add</span> Add Trial
              </button>
<button className="px-2.5 py-1 bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-sm text-xs font-medium rounded flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[14px]">delete</span> Remove 
              </button>
<button className="px-2.5 py-1 bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-sm text-xs font-medium rounded flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[14px]">restart_alt</span> Clear
              </button>
</div>
</div>
{/*  OIML Table Container  */}
<div className="overflow-x-auto rounded bg-surface-container-lowest">
<table className="w-full text-left font-body-sm text-xs">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider select-none">
<th className="px-3 py-2.5 text-center w-16">Trial</th>
<th className="px-4 py-2.5 text-right w-44">Reference Load (L)</th>
<th className="px-4 py-2.5 text-right w-52">Observed Indication (I)</th>
<th className="px-4 py-2.5 text-right w-48">Deviation (E = I - L)</th>
<th className="px-3 py-2.5 text-center w-16">Unit</th>
<th className="px-3 py-2.5 text-center w-28">Status</th>
<th className="px-4 py-2.5">Technician Field Remarks / Notes</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
{/*  Trial 01  */}
<tr className="hover:bg-surface-container-lowest/80 transition-colors">
<td className="px-3 py-2 text-center font-metric-tabular font-bold text-on-surface-variant bg-surface-container-low/40">01</td>
<td className="px-4 py-2 text-right font-metric-tabular text-on-surface-variant bg-surface-container-low/30">20.000</td>
<td className="px-4 py-2 text-right">
<div className="flex items-center justify-end gap-1">
<input className="w-28 text-right px-2 py-1 font-metric-tabular font-bold text-on-surface rounded bg-surface-container-lowest shadow-sm focus:outline-none focus:bg-surface-container-low" type="text" defaultValue="20.010"/>
<span className="text-[10px] text-on-surface-variant font-medium">kg</span>
</div>
</td>
<td className="px-4 py-2 text-right">
<div className="inline-flex items-center gap-1.5 font-metric-tabular font-bold text-[#15803D] bg-[#F0FDF4] px-2 py-0.5 rounded">
<span>+0.010 kg</span>
<span className="text-[9px] px-1 bg-[#BBF7D0] text-[#15803D] font-mono rounded">AUTO</span>
</div>
</td>
<td className="px-3 py-2 text-center font-label-sm text-on-surface-variant">kg</td>
<td className="px-3 py-2 text-center">
<span className="px-2 py-0.5 bg-[#F0FDF4] text-[#15803D] rounded font-label-sm text-[10px] font-bold uppercase">Recorded ✓</span>
</td>
<td className="px-4 py-2 text-on-surface font-body-sm text-xs">Stable reading; zero verified</td>
</tr>
{/*  Trial 02  */}
<tr className="hover:bg-surface-container-lowest/80 transition-colors">
<td className="px-3 py-2 text-center font-metric-tabular font-bold text-on-surface-variant bg-surface-container-low/40">02</td>
<td className="px-4 py-2 text-right font-metric-tabular text-on-surface-variant bg-surface-container-low/30">20.000</td>
<td className="px-4 py-2 text-right">
<div className="flex items-center justify-end gap-1">
<input className="w-28 text-right px-2 py-1 font-metric-tabular font-bold text-on-surface rounded bg-surface-container-lowest shadow-sm focus:outline-none focus:bg-surface-container-low" type="text" defaultValue="20.000"/>
<span className="text-[10px] text-on-surface-variant font-medium">kg</span>
</div>
</td>
<td className="px-4 py-2 text-right">
<div className="inline-flex items-center gap-1.5 font-metric-tabular font-bold text-on-surface bg-surface-container-low px-2 py-0.5 rounded">
<span>0.000 kg</span>
<span className="text-[9px] px-1 bg-surface-container text-on-surface-variant font-mono rounded">AUTO</span>
</div>
</td>
<td className="px-3 py-2 text-center font-label-sm text-on-surface-variant">kg</td>
<td className="px-3 py-2 text-center">
<span className="px-2 py-0.5 bg-[#F0FDF4] text-[#15803D] rounded font-label-sm text-[10px] font-bold uppercase">Recorded ✓</span>
</td>
<td className="px-4 py-2 text-on-surface font-body-sm text-xs">Return to stable center tare</td>
</tr>
{/*  Trial 03  */}
<tr className="hover:bg-surface-container-lowest/80 transition-colors">
<td className="px-3 py-2 text-center font-metric-tabular font-bold text-on-surface-variant bg-surface-container-low/40">03</td>
<td className="px-4 py-2 text-right font-metric-tabular text-on-surface-variant bg-surface-container-low/30">20.000</td>
<td className="px-4 py-2 text-right">
<div className="flex items-center justify-end gap-1">
<input className="w-28 text-right px-2 py-1 font-metric-tabular font-bold text-on-surface rounded bg-surface-container-lowest shadow-sm focus:outline-none focus:bg-surface-container-low" type="text" defaultValue="20.010"/>
<span className="text-[10px] text-on-surface-variant font-medium">kg</span>
</div>
</td>
<td className="px-4 py-2 text-right">
<div className="inline-flex items-center gap-1.5 font-metric-tabular font-bold text-[#15803D] bg-[#F0FDF4] px-2 py-0.5 rounded">
<span>+0.010 kg</span>
<span className="text-[9px] px-1 bg-[#BBF7D0] text-[#15803D] font-mono rounded">AUTO</span>
</div>
</td>
<td className="px-3 py-2 text-center font-label-sm text-on-surface-variant">kg</td>
<td className="px-3 py-2 text-center">
<span className="px-2 py-0.5 bg-[#F0FDF4] text-[#15803D] rounded font-label-sm text-[10px] font-bold uppercase">Recorded ✓</span>
</td>
<td className="px-4 py-2 text-on-surface font-body-sm text-xs">Smooth hydraulic load cycle</td>
</tr>
{/*  Trial 04  */}
<tr className="hover:bg-surface-container-lowest/80 transition-colors">
<td className="px-3 py-2 text-center font-metric-tabular font-bold text-on-surface-variant bg-surface-container-low/40">04</td>
<td className="px-4 py-2 text-right font-metric-tabular text-on-surface-variant bg-surface-container-low/30">20.000</td>
<td className="px-4 py-2 text-right">
<div className="flex items-center justify-end gap-1">
<input className="w-28 text-right px-2 py-1 font-metric-tabular font-bold text-on-surface rounded bg-surface-container-lowest shadow-sm focus:outline-none focus:bg-surface-container-low" type="text" defaultValue="20.000"/>
<span className="text-[10px] text-on-surface-variant font-medium">kg</span>
</div>
</td>
<td className="px-4 py-2 text-right">
<div className="inline-flex items-center gap-1.5 font-metric-tabular font-bold text-on-surface bg-surface-container-low px-2 py-0.5 rounded">
<span>0.000 kg</span>
<span className="text-[9px] px-1 bg-surface-container text-on-surface-variant font-mono rounded">AUTO</span>
</div>
</td>
<td className="px-3 py-2 text-center font-label-sm text-on-surface-variant">kg</td>
<td className="px-3 py-2 text-center">
<span className="px-2 py-0.5 bg-[#F0FDF4] text-[#15803D] rounded font-label-sm text-[10px] font-bold uppercase">Recorded ✓</span>
</td>
<td className="px-4 py-2 text-on-surface font-body-sm text-xs">Normal pan release</td>
</tr>
{/*  Trial 05  */}
<tr className="hover:bg-surface-container-lowest/80 transition-colors">
<td className="px-3 py-2 text-center font-metric-tabular font-bold text-on-surface-variant bg-surface-container-low/40">05</td>
<td className="px-4 py-2 text-right font-metric-tabular text-on-surface-variant bg-surface-container-low/30">20.000</td>
<td className="px-4 py-2 text-right">
<div className="flex items-center justify-end gap-1">
<input className="w-28 text-right px-2 py-1 font-metric-tabular font-bold text-on-surface rounded bg-surface-container-lowest shadow-sm focus:outline-none focus:bg-surface-container-low" type="text" defaultValue="20.010"/>
<span className="text-[10px] text-on-surface-variant font-medium">kg</span>
</div>
</td>
<td className="px-4 py-2 text-right">
<div className="inline-flex items-center gap-1.5 font-metric-tabular font-bold text-[#15803D] bg-[#F0FDF4] px-2 py-0.5 rounded">
<span>+0.010 kg</span>
<span className="text-[9px] px-1 bg-[#BBF7D0] text-[#15803D] font-mono rounded">AUTO</span>
</div>
</td>
<td className="px-3 py-2 text-center font-label-sm text-on-surface-variant">kg</td>
<td className="px-3 py-2 text-center">
<span className="px-2 py-0.5 bg-[#F0FDF4] text-[#15803D] rounded font-label-sm text-[10px] font-bold uppercase">Recorded ✓</span>
</td>
<td className="px-4 py-2 text-on-surface font-body-sm text-xs">Final repeat trial verified</td>
</tr>
</tbody>
</table>
</div>
{/*  Cryptographic Hash Audit Footer  */}
<div className="mt-3 px-3 py-2 rounded bg-surface-container-low flex items-center justify-between text-[11px] text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[15px] text-primary">verified_user</span>
<span><strong>Formula Enforced:</strong> Deviation (E) = Indication (I) - Reference Load (L). Manual overriding of computed deviation is restricted.</span>
</div>
<span className="font-mono text-[10px] font-semibold text-primary">SHA-256: 8f4c...3e19 • AUDIT HASH VALID</span>
</div>
</div>
{/*  STATISTICAL SUMMARY, DISTRIBUTION VISUALIZATION & VALIDATION PANELS (4-Card Grid)  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
{/*  Card A: Calculated Summary  */}
<div className="bg-surface-container-lowest rounded-lg p-4 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-2">
<h4 className="font-label-lg font-bold text-primary">Calculated Summary</h4>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">calculate</span>
</div>
<div className="space-y-1.5 font-metric-tabular text-xs">
<div className="flex justify-between py-1 bg-surface-container-low/40 px-2 rounded">
<span className="text-on-surface-variant font-label-sm">Highest Indication:</span>
<span className="font-bold text-on-surface">20.010 kg</span>
</div>
<div className="flex justify-between py-1 px-2">
<span className="text-on-surface-variant font-label-sm">Lowest Indication:</span>
<span className="font-bold text-on-surface">20.000 kg</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/40 px-2 rounded">
<span className="text-on-surface-variant font-label-sm font-semibold text-primary">Indication Range (ΔI):</span>
<span className="font-bold text-primary">0.010 kg</span>
</div>
<div className="flex justify-between py-1 px-2">
<span className="text-on-surface-variant font-label-sm">Mean Indication (x̄):</span>
<span className="font-semibold text-on-surface">20.006 kg</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/40 px-2 rounded">
<span className="text-on-surface-variant font-label-sm">Sample Std Dev (s):</span>
<span className="font-semibold text-on-surface">0.0055 kg</span>
</div>
</div>
</div>
<div className="text-[10px] text-on-surface-variant pt-2 opacity-80">
              Calculated automatically from recorded observations.
            </div>
</div>
{/*  Card B: Indication Distribution Plot  */}
<div className="bg-surface-container-lowest rounded-lg p-4 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-2">
<h4 className="font-label-lg font-bold text-primary">Indication Distribution</h4>
<span className="text-[10px] font-mono text-on-surface-variant">Δ = 0.010 kg</span>
</div>
<p className="font-body-sm text-[11px] text-on-surface-variant mb-3">Trial dispersion relative to test nominal.</p>
{/*  Clean Metrology Inline SVG Chart  */}
<div className="w-full bg-surface-container-low p-3 rounded flex flex-col items-center justify-center">
<svg className="w-full h-16 text-primary" viewBox="0 0 240 70">
{/*  Axis Line  */}
<line opacity="0.4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" x1="20" x2="220" y1="45" y2="45"></line>
{/*  Reference Mark 20.000 kg  */}
<line stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.5" x1="60" x2="60" y1="20" y2="52"></line>
<text fill="currentColor" fontFamily="IBM Plex Sans" fontSize="8" textAnchor="middle" x="60" y="62">20.000</text>
{/*  Mark 20.010 kg  */}
<line stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.5" x1="180" x2="180" y1="20" y2="52"></line>
<text fill="currentColor" fontFamily="IBM Plex Sans" fontSize="8" textAnchor="middle" x="180" y="62">20.010</text>
{/*  Span range indicator line  */}
<line stroke="#004040" strokeWidth="1" x1="60" x2="180" y1="18" y2="18"></line>
<text fill="#004040" fontFamily="IBM Plex Sans" fontSize="7" fontWeight="600" textAnchor="middle" x="120" y="14">ΔI = 0.010 kg (1 e)</text>
{/*  Clustered Data Points (Trial 2, 4 at 20.000)  */}
<circle cx="60" cy="45" fill="#123b5d" r="4.5"></circle>
<circle cx="60" cy="36" fill="#123b5d" r="4.5"></circle>
<text fill="currentColor" fontFamily="IBM Plex Sans" fontSize="7" x="45" y="42">2× (0g)</text>
{/*  Clustered Data Points (Trial 1, 3, 5 at 20.010)  */}
<circle cx="180" cy="45" fill="#0D9488" r="4.5"></circle>
<circle cx="180" cy="36" fill="#0D9488" r="4.5"></circle>
<circle cx="180" cy="27" fill="#0D9488" r="4.5"></circle>
<text fill="#0D9488" fontFamily="IBM Plex Sans" fontSize="7" x="198" y="38">3× (+10g)</text>
</svg>
</div>
</div>
<div className="flex items-center justify-between text-[10px] text-on-surface-variant pt-2">
<span>Bimodal / Stable Zero Return</span>
<span className="font-mono">n = 5</span>
</div>
</div>
{/*  Card C: Data Validation Gate  */}
<div className="bg-surface-container-lowest rounded-lg p-4 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-2">
<h4 className="font-label-lg font-bold text-primary">Data Validation Gate</h4>
<span className="material-symbols-outlined text-[16px] text-[#15803D]">rule</span>
</div>
<ul className="space-y-2 font-label-sm text-xs pt-1">
<li className="flex items-center gap-2 text-[#15803D]">
<span className="material-symbols-outlined text-[15px]">check_circle</span>
<span className="text-on-surface">5 required trials captured</span>
</li>
<li className="flex items-center gap-2 text-[#15803D]">
<span className="material-symbols-outlined text-[15px]">check_circle</span>
<span className="text-on-surface">Within resolution limit (10 g)</span>
</li>
<li className="flex items-center gap-2 text-[#15803D]">
<span className="material-symbols-outlined text-[15px]">check_circle</span>
<span className="text-on-surface">Load units consistent (kg)</span>
</li>
<li className="flex items-center gap-2 text-[#15803D]">
<span className="material-symbols-outlined text-[15px]">check_circle</span>
<span className="text-on-surface">Computed deviation synced</span>
</li>
</ul>
</div>
<div className="mt-3 p-2 bg-[#F0FDF4] rounded text-center">
<span className="font-label-sm text-[10px] text-[#15803D] font-bold uppercase tracking-wider block">
                OBSERVATIONS VALIDATED • READY FOR SIGN-OFF
              </span>
</div>
</div>
{/*  Card D: Consistency Check & Rule Link  */}
<div className="bg-surface-container-lowest rounded-lg p-4 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-2">
<h4 className="font-label-lg font-bold text-primary">Rule Standard Link</h4>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">gavel</span>
</div>
<div className="space-y-1.5 font-label-sm text-xs">
<div className="flex justify-between text-on-surface-variant">
<span>Reference Load:</span>
<span className="font-metric-tabular font-medium text-on-surface">20.000 kg</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Observed Range:</span>
<span className="font-metric-tabular font-bold text-on-surface">0.010 kg</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Largest Deviation:</span>
<span className="font-metric-tabular font-medium text-[#15803D]">+0.010 kg</span>
</div>
<div className="pt-1">
<div className="px-2 py-1.5 bg-[#FFFBEB] rounded text-center">
<span className="font-label-sm text-[10px] font-bold text-[#B45309] uppercase tracking-wider">
                      Pending Compliance Assessment
                    </span>
<span className="block text-[9px] text-[#B45309] mt-0.5">Evaluated in Step 05 with mpe thresholds</span>
</div>
</div>
</div>
</div>
<div className="text-[10px] text-on-surface-variant pt-2">
<span className="font-mono">Standard: OIML R 76-1 (2006/E)</span>
<span className="block font-mono">Rule Set: R76-2026.1 (Class III)</span>
</div>
</div>
</div>
{/*  TECHNICIAN NOTES & EVIDENCE REMINDER  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Left: Technician Field Notes  */}
<div className="bg-surface-container-lowest rounded-lg p-5 shadow-sm">
<div className="flex items-center justify-between pb-2">
<h3 className="font-headline-sm text-primary font-bold">Technician Field Notes</h3>
<span className="font-label-sm text-[10px] text-on-surface-variant font-mono">245 / 500 characters</span>
</div>
<textarea className="w-full bg-surface-container-low p-2.5 rounded font-body-sm text-xs text-on-surface focus:outline-none focus:bg-surface-container-lowest shadow-sm leading-relaxed" placeholder="Add technical observations..." rows="3" defaultValue={"Standard test weight set CAL-WT-2024 (Class M1) applied centrally on platform receptor. Zero tracking remained active and ambient draft shield remained closed throughout all 5 trial cycles. Stable balance indicator acknowledged before each logging."} />
<p className="font-body-sm text-[11px] text-on-surface-variant mt-2 italic">
              Note: Do not manually enter calculated results or legal compliance decisions in notes. Use Step 05 for regulatory disposition.
            </p>
</div>
{/*  Right: Test Evidence & Artifacts  */}
<div className="bg-surface-container-lowest rounded-lg p-5 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-2">
<h3 className="font-headline-sm text-primary font-bold">Test Evidence &amp; Artifacts</h3>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[10px] font-semibold">STAGE 06 PREREQUISITE</span>
</div>
<p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                Calibration standard weight certificates, scale level vial alignment photographs, and environmental verification logs will be reviewed and digitally signed during <strong>Step 06 Evidence</strong>.
              </p>
<div className="flex items-center gap-3 mt-3 bg-surface-container-low p-2.5 rounded">
<span className="material-symbols-outlined text-primary text-[22px]">attachment</span>
<div className="flex flex-col">
<span className="font-label-sm text-xs font-semibold text-primary">Pending Weight Standard Certificate Link</span>
<span className="font-body-sm text-[10px] text-on-surface-variant">Traceability: NIST/NPL Standard M1-4820</span>
</div>
</div>
</div>
<div className="flex justify-end pt-3">
<button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-xs font-medium rounded transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">more_horiz</span>
                Add Attachments Later
              </button>
</div>
</div>
</div>
</div>
{/*  BOTTOM ACTION BAR & AUDIT FOOTER  */}
<div className="mt-auto px-8 py-4 bg-surface-container-lowest shadow-md flex items-center justify-between flex-wrap gap-4 z-10">
<div className="flex items-center gap-2 text-xs text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary">history_toggle_off</span>
<span>Last modified by <strong>A. Kumar</strong> • 06 Sep 2026 • 11:28 AM • <span className="text-[#15803D]">Auto-save active</span></span>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-xs font-semibold rounded transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Previous: Accuracy / Error of Indication
          </button>
<button className="px-4 py-2 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-xs font-medium rounded transition-colors">
            Save Draft
          </button>
<button className="px-4 py-2 bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-md text-xs font-semibold rounded transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">check</span>
            Mark Test Complete
          </button>
<button className="px-5 py-2 bg-primary hover:bg-[#0B263D] text-on-primary font-label-md text-xs font-bold rounded shadow-sm transition-colors flex items-center gap-1.5">
<span>Next Test: Eccentric Loading</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
<div className="px-8 py-2 text-center text-[10px] text-on-surface-variant bg-surface-container-low">
        All  test procedures must be completed before advancing to Step 05 Compliance Assessment • VeriScale OIML Engine v4.2.1
      </div>
</div>
</div>
</div></main>
    </div>
  );
}
