import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function TestAccuracyIndication() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full text-on-surface">
{/*  TOP APP SHELL WRAPPER WITH INTEGRATED LEFT SIDEBAR & WORKSPACE  */}
<div className="flex flex-row w-full min-h-screen bg-surface">
{/*  248px DEEP NAVY METROLOGY SIDEBAR  */}
<aside className="w-64 flex-shrink-0 bg-primary text-on-primary flex flex-col justify-between select-none shadow-md">
<div className="flex flex-col">
{/*  Brand Header  */}
<div className="px-space-base py-space-lg bg-inverse-surface/40 flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed font-headline-sm">
<span className="material-symbols-outlined text-lg">balance</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm tracking-tight text-white leading-tight">VERISCALE</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">Metrology OS</span>
</div>
</div>
{/*  Sidebar Navigation Groups  */}
<div className="px-space-sm py-space-md flex flex-col gap-space-xs">
<div className="px-space-sm py-space-xs text-label-sm font-label-sm uppercase tracking-wider text-on-primary-container/70">Workspace</div>
<a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-body-md font-body-md text-surface-container-high hover:bg-primary-container transition-colors" href="#">
<span className="material-symbols-outlined text-lg">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-body-md font-body-md text-surface-container-high hover:bg-primary-container transition-colors" href="#">
<span className="material-symbols-outlined text-lg">tune</span>
<span>Instruments</span>
</a>
{/*  Active Nav Item with Accent Teal Indicator  */}
<div className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-primary-container text-white font-label-lg shadow-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-tertiary-fixed text-lg">verified</span>
<span>Tests</span>
</div>
<div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></div>
</div>
<a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-body-md font-body-md text-surface-container-high hover:bg-primary-container transition-colors" href="#">
<span className="material-symbols-outlined text-lg">gavel</span>
<span>Compliance</span>
</a>
<a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-body-md font-body-md text-surface-container-high hover:bg-primary-container transition-colors" href="#">
<span className="material-symbols-outlined text-lg">description</span>
<span>Reports</span>
</a>
<a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-body-md font-body-md text-surface-container-high hover:bg-primary-container transition-colors" href="#">
<span className="material-symbols-outlined text-lg">folder_data</span>
<span>Repository</span>
</a>
<a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-body-md font-body-md text-surface-container-high hover:bg-primary-container transition-colors" href="#">
<span className="material-symbols-outlined text-lg">history</span>
<span>Test History</span>
</a>
<div className="pt-space-md mt-space-sm px-space-sm py-space-xs text-label-sm font-label-sm uppercase tracking-wider text-on-primary-container/70">Administration</div>
<a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-body-md font-body-md text-surface-container-high hover:bg-primary-container transition-colors" href="#">
<span className="material-symbols-outlined text-lg">group</span>
<span>Users</span>
</a>
<a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-body-md font-body-md text-surface-container-high hover:bg-primary-container transition-colors" href="#">
<span className="material-symbols-outlined text-lg">policy</span>
<span>Audit Trail</span>
</a>
<a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-body-md font-body-md text-surface-container-high hover:bg-primary-container transition-colors" href="#">
<span className="material-symbols-outlined text-lg">settings</span>
<span>Settings</span>
</a>
</div>
</div>
{/*  User Bottom Panel  */}
<div className="p-space-base bg-inverse-surface/30 flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-primary-container text-tertiary-fixed flex items-center justify-center font-headline-sm text-sm">
          MS
        </div>
<div className="flex flex-col min-w-0">
<span className="text-body-md font-label-lg text-white truncate">Manan Sharma</span>
<span className="text-body-sm font-body-sm text-surface-variant/70 truncate">Administrator</span>
</div>
</div>
</aside>
{/*  RIGHT MAIN CONTENT WORKSPACE  */}
<div className="flex-1 flex flex-col min-w-0">
{/*  TOP METROLOGICAL HEADER  */}
<header className="bg-surface-container-lowest px-space-xl py-space-md shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
{/*  Breadcrumbs  */}
<div className="flex items-center gap-space-xs text-body-sm font-body-sm text-secondary">
<span>Tests</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="font-metric-tabular">TEST-012</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span>Observations</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-primary font-label-md">Accuracy</span>
</div>
{/*  Top Action Utilities  */}
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-low text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm text-tertiary-container">cloud_done</span>
<span>Saved 8 seconds ago</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-highest transition-colors" type="button">
              Save Draft
            </button>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-error font-label-md text-label-md hover:bg-error-container hover:text-on-error-container transition-colors" type="button">
              Exit Test
            </button>
</div>
</div>
<div className="flex items-baseline justify-between mt-space-xs">
<div>
<h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">Accuracy / Error of Indication</h1>
<p className="text-body-sm font-body-sm text-secondary">Record test-load indications and calculate the observed error in compliance with legal metrology directives.</p>
</div>
</div>
</header>
{/*  8-STEP HORIZONTAL PIPELINE WORKFLOW STEPPER  */}
<nav className="bg-surface-container-low px-space-xl py-space-sm shadow-sm overflow-x-auto">
<div className="flex items-center justify-between min-w-[860px] gap-2">
{/*  Step 01  */}
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-label-sm">✓</div>
<span className="text-body-sm font-body-sm text-secondary">01 Instrument</span>
</div>
<div className="h-0.5 w-6 bg-surface-variant flex-shrink-0"></div>
{/*  Step 02  */}
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-label-sm">✓</div>
<span className="text-body-sm font-body-sm text-secondary">02 Lab Conditions</span>
</div>
<div className="h-0.5 w-6 bg-surface-variant flex-shrink-0"></div>
{/*  Step 03  */}
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-label-sm">✓</div>
<span className="text-body-sm font-body-sm text-secondary">03 Test Selection</span>
</div>
<div className="h-0.5 w-6 bg-surface-variant flex-shrink-0"></div>
{/*  Step 04 ACTIVE  */}
<div className="flex items-center gap-2 px-space-sm py-1 rounded-lg bg-surface-container-lowest shadow-sm">
<div className="w-6 h-6 rounded-full bg-tertiary text-tertiary-fixed flex items-center justify-center text-xs font-headline-sm">04</div>
<span className="text-body-sm font-headline-sm text-primary">Observations</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-headline-sm uppercase tracking-wider">Active</span>
</div>
<div className="h-0.5 w-6 bg-surface-variant flex-shrink-0"></div>
{/*  Step 05  */}
<div className="flex items-center gap-2 opacity-60">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-xs font-label-sm">05</div>
<span className="text-body-sm font-body-sm text-secondary">Compliance</span>
</div>
<div className="h-0.5 w-6 bg-surface-variant flex-shrink-0"></div>
{/*  Step 06  */}
<div className="flex items-center gap-2 opacity-60">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-xs font-label-sm">06</div>
<span className="text-body-sm font-body-sm text-secondary">Evidence</span>
</div>
<div className="h-0.5 w-6 bg-surface-variant flex-shrink-0"></div>
{/*  Step 07  */}
<div className="flex items-center gap-2 opacity-60">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-xs font-label-sm">07</div>
<span className="text-body-sm font-body-sm text-secondary">Review</span>
</div>
<div className="h-0.5 w-6 bg-surface-variant flex-shrink-0"></div>
{/*  Step 08  */}
<div className="flex items-center gap-2 opacity-60">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-xs font-label-sm">08</div>
<span className="text-body-sm font-body-sm text-secondary">Report</span>
</div>
</div>
</nav>
{/*  TEST CONTEXT BAR (METROLOGICAL INFO STRIP)  */}
<div className="bg-surface-container-lowest px-space-xl py-space-sm shadow-sm flex flex-wrap items-center justify-between gap-space-md text-body-sm">
<div className="flex flex-wrap items-center gap-space-lg">
<div className="flex items-center gap-space-xs">
<span className="text-secondary font-label-sm text-label-sm">Instrument:</span>
<span className="font-headline-sm text-primary">ABC WeighTech WT-100</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-secondary-container font-label-sm text-[11px]">(III) NAWI</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="text-secondary font-label-sm text-label-sm">Serial No:</span>
<span className="font-metric-tabular text-on-surface">WT100-2026-001</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="text-secondary font-label-sm text-label-sm">Test ID:</span>
<span className="font-metric-tabular text-on-surface">TEST-012</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="text-secondary font-label-sm text-label-sm">Technician:</span>
<span className="font-label-md text-on-surface">A. Kumar (TECH-409)</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="text-secondary font-label-sm text-label-sm">Timestamp:</span>
<span className="font-metric-tabular text-on-surface">06 Sep 2026 • 11:15 AM</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<span className="px-2.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase tracking-wide">In Progress</span>
<a className="text-primary font-label-md text-label-md hover:underline flex items-center gap-0.5" href="#">
<span>View Instrument Profile</span>
<span className="material-symbols-outlined text-xs">open_in_new</span>
</a>
</div>
</div>
{/*  MAIN BODY DATA & MEASUREMENT VIEW  */}
<div className="flex-1 p-space-xl flex flex-col gap-space-lg">
{/*  TOP TEST OVERVIEW PANEL  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-space-base">
<div>
<div className="flex items-center gap-space-sm mb-1">
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-[11px] uppercase tracking-wider">
                  METROLOGICAL • OIML R 76-1 § A.4.4 / Clause 3.5.1
                </span>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-[11px]">Type Approval Verified</span>
</div>
<h2 className="text-headline-md font-headline-md text-primary">Accuracy / Error of Indication Test Routine</h2>
<p className="text-body-md font-body-md text-secondary mt-1 max-w-3xl">
                Compare the instrument indication with the corresponding reference test load across nominal verification points to evaluate non-linearity and calibration deviation.
              </p>
</div>
{/*  Progress Pill  */}
<div className="flex items-center gap-space-md bg-surface-container-low px-space-base py-space-sm rounded-xl flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-tertiary text-tertiary-fixed flex items-center justify-center font-headline-sm">
<span className="material-symbols-outlined text-xl">fact_check</span>
</div>
<div className="flex flex-col">
<span className="text-label-sm font-label-sm uppercase text-secondary">Observation Matrix</span>
<span className="text-headline-sm font-headline-sm text-primary">5 / 5 Test Points Complete ✓</span>
</div>
</div>
</div>
{/*  Parameter Strip Matrix  */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md pt-space-md bg-surface-container-low/50 p-space-md rounded-lg">
<div className="flex flex-col">
<span className="text-label-sm font-label-sm text-secondary">Scale Interval (e)</span>
<span className="text-body-md font-headline-sm text-on-surface">10 g <span className="text-label-sm font-body-sm text-secondary">(Verification div)</span></span>
</div>
<div className="flex flex-col">
<span className="text-label-sm font-label-sm text-secondary">Accuracy Class</span>
<span className="text-body-md font-headline-sm text-on-surface">III <span className="text-label-sm font-body-sm text-secondary">(Medium Accuracy)</span></span>
</div>
<div className="flex flex-col">
<span className="text-label-sm font-label-sm text-secondary">Max Capacity (Max)</span>
<span className="text-body-md font-headline-sm text-on-surface">100.000 kg <span className="text-label-sm font-body-sm text-secondary">(Lim 120 kg)</span></span>
</div>
<div className="flex flex-col">
<span className="text-label-sm font-label-sm text-secondary">Min Capacity (Min)</span>
<span className="text-body-md font-headline-sm text-on-surface">0.200 kg <span className="text-label-sm font-body-sm text-secondary">(20 e)</span></span>
</div>
<div className="flex flex-col">
<span className="text-label-sm font-label-sm text-secondary">Applied Test Load Range</span>
<span className="text-body-md font-headline-sm text-on-surface">1.000 kg – 20.000 kg</span>
</div>
</div>
</div>
{/*  TEST CONFIGURATION PANEL  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="text-headline-sm font-headline-sm text-primary">Test Configuration</h3>
<p className="text-body-sm font-body-sm text-secondary">Configure test-load points and sequence required by the accredited calibration SOP.</p>
</div>
<button className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-base">sync</span>
<span>Load from Test Program</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md items-end">
{/*  Test Load Unit  */}
<div className="flex flex-col gap-1">
<label className="text-label-sm font-label-sm text-secondary">Test Load Unit</label>
<div className="relative">
<select className="w-full bg-surface-container-low text-on-surface font-body-md rounded-lg px-space-md py-2 appearance-none pr-8 focus:bg-surface-container-lowest focus:outline-none">
<option >kg (Kilograms)</option>
<option>g (Grams)</option>
<option>lb (Pounds)</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-2.5 pointer-events-none text-secondary text-lg">arrow_drop_down</span>
</div>
</div>
{/*  Test Sequence  */}
<div className="flex flex-col gap-1">
<label className="text-label-sm font-label-sm text-secondary">Test Sequence</label>
<div className="relative">
<select className="w-full bg-surface-container-low text-on-surface font-body-md rounded-lg px-space-md py-2 appearance-none pr-8 focus:bg-surface-container-lowest focus:outline-none">
<option >Ascending (Increasing Load)</option>
<option>Descending (Decreasing Load)</option>
<option>Ascending &amp; Descending (Hysteresis)</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-2.5 pointer-events-none text-secondary text-lg">arrow_drop_down</span>
</div>
</div>
{/*  Number of Test Points  */}
<div className="flex flex-col gap-1">
<label className="text-label-sm font-label-sm text-secondary">Number of Test Points</label>
<input className="w-full bg-surface-container-low text-on-surface font-metric-tabular rounded-lg px-space-md py-2 focus:bg-surface-container-lowest focus:outline-none" max="20" min="3" type="number" defaultValue="5"/>
</div>
{/*  Zero Reference Checkbox  */}
<div className="flex items-center gap-space-sm h-10 px-space-md bg-surface-container-low rounded-lg">
<input defaultChecked="" className="w-4 h-4 accent-primary rounded" id="zeroRef" type="checkbox"/>
<label className="text-body-sm font-label-md text-on-surface cursor-pointer select-none" htmlFor="zeroRef">
                Include Zero Ref (Tare Verified)
              </label>
</div>
</div>
<div className="text-body-sm font-body-sm text-secondary flex items-center gap-1.5 pt-space-xs">
<span className="material-symbols-outlined text-sm text-tertiary-container">info</span>
<span>Test points configured according to ISO/IEC 17025 accredited calibration schedule for Class III balances.</span>
</div>
</div>
{/*  OBSERVATION TABLE (CORE COMPONENT)  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
{/*  Table Action Bar  */}
<div className="px-space-lg py-space-md bg-surface-container-lowest flex flex-wrap items-center justify-between gap-space-md shadow-sm">
<div>
<div className="flex items-center gap-space-sm">
<h3 className="text-headline-sm font-headline-sm text-primary">Indication Observations</h3>
<span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-metric-tabular text-label-sm">5 Configured Points</span>
</div>
<p className="text-body-sm font-body-sm text-secondary mt-0.5">
                Enter observed indication for each reference test load. Error (E = I - L) is computed automatically with cryptographic audit verification.
              </p>
</div>
<div className="flex items-center gap-space-sm">
<button className="flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-sm">add</span>
<span>Add Test Point</span>
</button>
<button className="flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-sm">delete</span>
<span>Remove </span>
</button>
<button className="flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-error font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-sm">clear_all</span>
<span>Clear Observations</span>
</button>
</div>
</div>
{/*  The Metrological Table  */}
<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary text-label-sm font-label-sm uppercase tracking-wider h-9">
<th className="px-space-md py-2 w-16 text-center">Point</th>
<th className="px-space-md py-2 min-w-[160px]">Reference Test Load (L)</th>
<th className="px-space-md py-2 min-w-[200px]">Observed Indication (I)</th>
<th className="px-space-md py-2 min-w-[170px]">Error (E = I − L)</th>
<th className="px-space-md py-2 w-20 text-center">Unit</th>
<th className="px-space-md py-2 w-32">Status</th>
<th className="px-space-md py-2 min-w-[280px]">Technician Field Remarks / Notes</th>
</tr>
</thead>
<tbody className="divide-y-0 text-body-md font-body-md">
{/*  Row 01  */}
<tr className="hover:bg-surface-container-lowest/70 transition-colors h-11">
<td className="px-space-md py-2 text-center font-metric-tabular text-secondary">01</td>
<td className="px-space-md py-2">
<span className="font-metric-tabular font-bold text-on-surface bg-surface-container-low px-2 py-1 rounded">1.000</span>
</td>
<td className="px-space-md py-2">
<div className="flex items-center rounded-lg bg-surface-container-lowest shadow-sm max-w-[170px] overflow-hidden">
<input className="w-full px-2 py-1 font-metric-tabular text-right text-primary font-headline-sm focus:outline-none bg-surface-container-lowest" type="text" defaultValue="1.005"/>
<span className="px-2 py-1 bg-surface-container text-secondary text-xs font-metric-tabular select-none">kg</span>
</div>
</td>
<td className="px-space-md py-2">
<div className="flex items-center gap-space-xs">
<span className="font-metric-tabular font-headline-sm text-tertiary-container bg-surface-container-low px-2 py-1 rounded">+0.005 kg</span>
<span className="px-1 py-0.5 rounded bg-surface-container text-secondary text-[10px] font-label-sm">AUTO</span>
</div>
</td>
<td className="px-space-md py-2 text-center font-metric-tabular text-secondary">kg</td>
<td className="px-space-md py-2">
<div className="flex items-center gap-1.5 text-tertiary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span>Recorded</span>
</div>
</td>
<td className="px-space-md py-2">
<input className="w-full text-body-sm font-body-sm text-on-surface bg-transparent focus:bg-surface-container-lowest px-2 py-1 rounded focus:outline-none" type="text" defaultValue="Zero return verified prior to load"/>
</td>
</tr>
{/*  Row 02  */}
<tr className="bg-surface-container-low/30 hover:bg-surface-container-lowest/70 transition-colors h-11">
<td className="px-space-md py-2 text-center font-metric-tabular text-secondary">02</td>
<td className="px-space-md py-2">
<span className="font-metric-tabular font-bold text-on-surface bg-surface-container-low px-2 py-1 rounded">2.000</span>
</td>
<td className="px-space-md py-2">
<div className="flex items-center rounded-lg bg-surface-container-lowest shadow-sm max-w-[170px] overflow-hidden">
<input className="w-full px-2 py-1 font-metric-tabular text-right text-primary font-headline-sm focus:outline-none bg-surface-container-lowest" type="text" defaultValue="2.008"/>
<span className="px-2 py-1 bg-surface-container text-secondary text-xs font-metric-tabular select-none">kg</span>
</div>
</td>
<td className="px-space-md py-2">
<div className="flex items-center gap-space-xs">
<span className="font-metric-tabular font-headline-sm text-tertiary-container bg-surface-container-low px-2 py-1 rounded">+0.008 kg</span>
<span className="px-1 py-0.5 rounded bg-surface-container text-secondary text-[10px] font-label-sm">AUTO</span>
</div>
</td>
<td className="px-space-md py-2 text-center font-metric-tabular text-secondary">kg</td>
<td className="px-space-md py-2">
<div className="flex items-center gap-1.5 text-tertiary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span>Recorded</span>
</div>
</td>
<td className="px-space-md py-2">
<input className="w-full text-body-sm font-body-sm text-on-surface bg-transparent focus:bg-surface-container-lowest px-2 py-1 rounded focus:outline-none" type="text" defaultValue="Stable center pan placement"/>
</td>
</tr>
{/*  Row 03  */}
<tr className="hover:bg-surface-container-lowest/70 transition-colors h-11">
<td className="px-space-md py-2 text-center font-metric-tabular text-secondary">03</td>
<td className="px-space-md py-2">
<span className="font-metric-tabular font-bold text-on-surface bg-surface-container-low px-2 py-1 rounded">5.000</span>
</td>
<td className="px-space-md py-2">
<div className="flex items-center rounded-lg bg-surface-container-lowest shadow-sm max-w-[170px] overflow-hidden">
<input className="w-full px-2 py-1 font-metric-tabular text-right text-primary font-headline-sm focus:outline-none bg-surface-container-lowest" type="text" defaultValue="5.015"/>
<span className="px-2 py-1 bg-surface-container text-secondary text-xs font-metric-tabular select-none">kg</span>
</div>
</td>
<td className="px-space-md py-2">
<div className="flex items-center gap-space-xs">
<span className="font-metric-tabular font-headline-sm text-tertiary-container bg-surface-container-low px-2 py-1 rounded">+0.015 kg</span>
<span className="px-1 py-0.5 rounded bg-surface-container text-secondary text-[10px] font-label-sm">AUTO</span>
</div>
</td>
<td className="px-space-md py-2 text-center font-metric-tabular text-secondary">kg</td>
<td className="px-space-md py-2">
<div className="flex items-center gap-1.5 text-tertiary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span>Recorded</span>
</div>
</td>
<td className="px-space-md py-2">
<input className="w-full text-body-sm font-body-sm text-on-surface bg-transparent focus:bg-surface-container-lowest px-2 py-1 rounded focus:outline-none" type="text" defaultValue="Draft shield enclosed; stable"/>
</td>
</tr>
{/*  Row 04  */}
<tr className="bg-surface-container-low/30 hover:bg-surface-container-lowest/70 transition-colors h-11">
<td className="px-space-md py-2 text-center font-metric-tabular text-secondary">04</td>
<td className="px-space-md py-2">
<span className="font-metric-tabular font-bold text-on-surface bg-surface-container-low px-2 py-1 rounded">10.000</span>
</td>
<td className="px-space-md py-2">
<div className="flex items-center rounded-lg bg-surface-container-lowest shadow-sm max-w-[170px] overflow-hidden">
<input className="w-full px-2 py-1 font-metric-tabular text-right text-primary font-headline-sm focus:outline-none bg-surface-container-lowest" type="text" defaultValue="10.006"/>
<span className="px-2 py-1 bg-surface-container text-secondary text-xs font-metric-tabular select-none">kg</span>
</div>
</td>
<td className="px-space-md py-2">
<div className="flex items-center gap-space-xs">
<span className="font-metric-tabular font-headline-sm text-tertiary-container bg-surface-container-low px-2 py-1 rounded">+0.006 kg</span>
<span className="px-1 py-0.5 rounded bg-surface-container text-secondary text-[10px] font-label-sm">AUTO</span>
</div>
</td>
<td className="px-space-md py-2 text-center font-metric-tabular text-secondary">kg</td>
<td className="px-space-md py-2">
<div className="flex items-center gap-1.5 text-tertiary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span>Recorded</span>
</div>
</td>
<td className="px-space-md py-2">
<input className="w-full text-body-sm font-body-sm text-on-surface bg-transparent focus:bg-surface-container-lowest px-2 py-1 rounded focus:outline-none" type="text" defaultValue="Class M1 reference weights applied"/>
</td>
</tr>
{/*  Row 05  */}
<tr className="hover:bg-surface-container-lowest/70 transition-colors h-11">
<td className="px-space-md py-2 text-center font-metric-tabular text-secondary">05</td>
<td className="px-space-md py-2">
<span className="font-metric-tabular font-bold text-on-surface bg-surface-container-low px-2 py-1 rounded">20.000</span>
</td>
<td className="px-space-md py-2">
<div className="flex items-center rounded-lg bg-surface-container-lowest shadow-sm max-w-[170px] overflow-hidden">
<input className="w-full px-2 py-1 font-metric-tabular text-right text-primary font-headline-sm focus:outline-none bg-surface-container-lowest" type="text" defaultValue="20.012"/>
<span className="px-2 py-1 bg-surface-container text-secondary text-xs font-metric-tabular select-none">kg</span>
</div>
</td>
<td className="px-space-md py-2">
<div className="flex items-center gap-space-xs">
<span className="font-metric-tabular font-headline-sm text-tertiary-container bg-surface-container-low px-2 py-1 rounded">+0.012 kg</span>
<span className="px-1 py-0.5 rounded bg-surface-container text-secondary text-[10px] font-label-sm">AUTO</span>
</div>
</td>
<td className="px-space-md py-2 text-center font-metric-tabular text-secondary">kg</td>
<td className="px-space-md py-2">
<div className="flex items-center gap-1.5 text-tertiary-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span>Recorded</span>
</div>
</td>
<td className="px-space-md py-2">
<input className="w-full text-body-sm font-body-sm text-on-surface bg-transparent focus:bg-surface-container-lowest px-2 py-1 rounded focus:outline-none" type="text" defaultValue="Nominal 20% span verified"/>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Footer Regulatory Constraint Note  */}
<div className="p-space-md bg-surface-container-low flex items-center justify-between text-body-sm">
<div className="flex items-center gap-space-xs text-secondary">
<span className="material-symbols-outlined text-base text-primary">lock</span>
<span className="font-body-sm">
                Formula Enforced: <strong className="text-on-surface">Error (E) = Indication (I) − Reference Load (L)</strong>. Manual overriding of computed error is strictly restricted by audit policy.
              </span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span>
<span className="text-label-sm font-label-sm text-secondary uppercase">Cryptographic Hashes Valid</span>
</div>
</div>
</div>
{/*  CALCULATED ERROR EXPLANATION & SUMMARY PANELS (4-CARD GRID)  */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/*  Card 1: Calculated Error Transparency  */}
<div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5 text-primary font-headline-sm text-headline-sm">
<span className="material-symbols-outlined text-lg text-tertiary-container">calculate</span>
<span>Error Transparency</span>
</div>
<p className="text-body-sm font-body-sm text-secondary">Formula definition &amp; worked indication delta</p>
<div className="bg-surface-container-low p-space-sm rounded-lg mt-2 font-metric-tabular text-body-sm">
<span className="text-secondary">E = I − L</span>
<div className="text-primary font-bold mt-1">10.006 kg − 10.000 kg = +0.006 kg</div>
</div>
</div>
<p className="text-label-sm font-label-sm text-secondary mt-space-md">
              Actual permissible error envelopes (mpe) and final compliance decisions are evaluated downstream during Step 05 Compliance Assessment.
            </p>
</div>
{/*  Card 2: Measurement Summary  */}
<div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5 text-primary font-headline-sm text-headline-sm">
<span className="material-symbols-outlined text-lg text-tertiary-container">analytics</span>
<span>Measurement Summary</span>
</div>
<p className="text-body-sm font-body-sm text-secondary">Aggregated test point deviations</p>
<div className="grid grid-cols-2 gap-2 mt-2 font-metric-tabular text-body-sm">
<div className="bg-surface-container-low p-2 rounded flex flex-col">
<span className="text-[11px] text-secondary">Min Error</span>
<span className="font-bold text-on-surface">+0.005 kg</span>
</div>
<div className="bg-surface-container-low p-2 rounded flex flex-col">
<span className="text-[11px] text-secondary">Max Error</span>
<span className="font-bold text-on-surface">+0.015 kg</span>
</div>
<div className="bg-surface-container-low p-2 rounded flex flex-col">
<span className="text-[11px] text-secondary">Avg Error</span>
<span className="font-bold text-on-surface">+0.0092 kg</span>
</div>
<div className="bg-surface-container-low p-2 rounded flex flex-col">
<span className="text-[11px] text-secondary">|E|max</span>
<span className="font-bold text-primary">0.015 kg</span>
</div>
</div>
</div>
<div className="flex items-center justify-between text-label-sm font-label-sm text-secondary mt-space-md pt-2">
<span>Points Captured:</span>
<span className="font-headline-sm text-primary">5 / 5 Complete</span>
</div>
</div>
{/*  Card 3: Data Validation Gate  */}
<div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5 text-primary font-headline-sm text-headline-sm">
<span className="material-symbols-outlined text-lg text-tertiary-container">verified_user</span>
<span>Data Validation Gate</span>
</div>
<p className="text-body-sm font-body-sm text-secondary">System integrity preconditions</p>
<ul className="flex flex-col gap-1.5 text-body-sm font-body-sm text-on-surface mt-2">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-base text-tertiary-container">check</span>
<span>5 required test points entered</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-base text-tertiary-container">check</span>
<span>Within scale resolution (10 g)</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-base text-tertiary-container">check</span>
<span>Load units consistent (kg)</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-base text-tertiary-container">check</span>
<span>Computed error matrix synced</span>
</li>
</ul>
</div>
<div className="px-2.5 py-1.5 rounded-lg bg-surface-container-low text-tertiary-container font-headline-sm text-[11px] uppercase tracking-wide text-center mt-space-md">
              Observations Validated • Ready for Sign-Off
            </div>
</div>
{/*  Card 4: Applicable Evaluation Rules  */}
<div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5 text-primary font-headline-sm text-headline-sm">
<span className="material-symbols-outlined text-lg text-tertiary-container">rule</span>
<span>Applicable Rules</span>
</div>
<p className="text-body-sm font-body-sm text-secondary">Standard reference baseline</p>
<div className="flex flex-col gap-1.5 mt-2 text-body-sm">
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Standard:</span>
<span className="font-headline-sm text-primary">OIML R 76-1 (2006/E)</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Rule Set:</span>
<span className="font-metric-tabular text-on-surface">R76-2026.1 (Class III)</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Program:</span>
<span className="font-body-sm text-on-surface">Type Verification</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Status:</span>
<span className="text-tertiary-container font-label-sm">Rule configuration linked</span>
</div>
</div>
</div>
<a className="text-primary font-label-md text-label-md hover:underline flex items-center justify-between mt-space-md pt-2" href="#">
<span>View Rule Details</span>
<span className="material-symbols-outlined text-xs">open_in_new</span>
</a>
</div>
</div>
{/*  TECHNICIAN NOTES & EVIDENCE REMINDER  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
{/*  Field Notes  */}
<div className="lg:col-span-2 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<label className="text-headline-sm font-headline-sm text-primary flex items-center gap-2" htmlFor="techNotes">
<span className="material-symbols-outlined text-lg">edit_note</span>
<span>Technician Field Notes</span>
</label>
<span className="text-label-sm font-metric-tabular text-secondary">238 / 500 characters</span>
</div>
<textarea className="w-full p-space-md rounded-lg bg-surface-container-low text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none resize-none" id="techNotes" rows="3" defaultValue={"Reference standard weights calibrated under Certificate CAL-WT-2024 (Class M1 traceability). Ambient temperature maintained at 23.5 °C throughout test series. Scale zero verified before and after test sequence."} />
<div className="flex items-center gap-1.5 text-label-sm font-label-sm text-secondary">
<span className="material-symbols-outlined text-xs text-primary">warning</span>
<span>Notice: Do not enter manual compliance determinations here. Official compliance decisions execute in Step 05.</span>
</div>
</div>
{/*  Evidence Artifacts Reminder  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-xl">photo_camera</span>
</div>
<h4 className="text-headline-sm font-headline-sm text-primary">Test Evidence &amp; Artifacts</h4>
<p className="text-body-sm font-body-sm text-secondary">
                Weight calibration certificates, environmental loggers, and scale display photographs will be attached in <strong>Step 06 Evidence</strong>.
              </p>
</div>
<button className="w-full mt-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors" type="button">
              Add Attachments Later
            </button>
</div>
</div>
</div>
{/*  BOTTOM ACTION NAVIGATION BAR (METROLOGICAL PROCESS FOOTER)  */}
<footer className="sticky bottom-0 bg-surface-container-lowest px-space-xl py-space-md shadow-md flex flex-wrap items-center justify-between gap-space-md z-10">
{/*  Previous Step  */}
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-base">arrow_back</span>
<span>Previous: Test Selection (Step 03)</span>
</button>
{/*  Center Save Draft Status  */}
<div className="hidden sm:flex items-center gap-space-xs text-body-sm font-body-sm text-secondary">
<span className="material-symbols-outlined text-sm text-tertiary-container">sync</span>
<span>Auto-save active (06 Sep 2026 • 11:15:24)</span>
</div>
{/*  Right Advancements  */}
<div className="flex items-center gap-space-md">
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-base">check</span>
<span>Mark Test Complete</span>
</button>
<button className="flex items-center gap-1.5 px-space-lg py-2 rounded-lg bg-primary hover:bg-primary-container text-white font-label-lg text-label-lg shadow-sm transition-colors" type="button">
<span>Next Test: Repeatability</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</button>
</div>
{/*  Compliance Requirement Footnote  */}
<div className="w-full text-center text-label-sm font-label-sm text-secondary pt-1">
          All  test procedures must be completed before advancing to Step 05 Compliance Assessment.
        </div>
</footer>
</div>
</div>
</div>
</main>
    </div>
  );
}
