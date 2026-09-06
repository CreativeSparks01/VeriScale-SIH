import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function TestTare() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full font-body-md text-on-surface antialiased">
{/*  TOP TELEMETRY STRIP  */}
<header className="w-full bg-primary text-on-primary px-space-xl py-space-sm flex flex-wrap items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-space-lg flex-wrap">
<div className="flex items-center gap-space-xs bg-primary-container px-space-sm py-space-2xs rounded-lg text-primary-fixed text-label-sm font-label-sm tracking-wider">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span>COM1: 9600 BAUD [ONLINE]</span>
</div>
<div className="flex items-center gap-space-xs bg-tertiary text-tertiary-fixed px-space-sm py-space-2xs rounded-lg text-label-sm font-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">tune</span>
<span>[-&gt;T&lt;- NET ACTIVE]</span>
</div>
<div className="text-label-md font-label-md text-surface-container-highest flex items-center gap-space-xs">
<span className="text-on-primary-container">LIVE TELEMETRY:</span>
<span className="text-tertiary-fixed font-metric-tabular text-headline-sm font-semibold">0.000 kg NET</span>
<span className="text-surface-container-high text-body-sm">(GROSS: 5.000 kg)</span>
</div>
</div>
<div className="flex items-center gap-space-md text-body-sm text-surface-container-highest">
<div className="flex items-center gap-space-xs text-surface-tint">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed">cloud_done</span>
<span>Saved 4 seconds ago</span>
</div>
<div className="h-4 w-px bg-primary-container"></div>
<button className="px-space-md py-1 rounded bg-primary-container hover:bg-surface-tint text-on-primary text-label-sm font-label-sm transition-colors" type="button">
        Save Draft
      </button>
<button className="px-space-md py-1 rounded bg-error/20 hover:bg-error/30 text-error-container text-label-sm font-label-sm transition-colors" type="button">
        Exit Test
      </button>
</div>
</header>
{/*  TITLE & BREADCRUMB HEADER  */}
<section className="w-full bg-surface-container-lowest px-space-xl py-space-lg shadow-sm">
<nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-label-sm font-label-sm text-secondary mb-space-xs">
<span>Tests</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span>TEST-012</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span>Observations</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Tare</span>
</nav>
<div className="flex flex-wrap items-end justify-between gap-space-md">
<div>
<h1 className="text-headline-xl font-headline-xl text-primary tracking-tight">Tare Test</h1>
<p className="text-secondary text-body-md font-body-md mt-space-2xs">
          Record the configured tare operation and the resulting instrument indications.
        </p>
</div>
<div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-lg">
<span className="text-label-sm font-label-sm text-secondary uppercase">Execution Mode:</span>
<span className="text-label-sm font-label-sm text-primary font-semibold">OIML R 76-1 Clause A.4.6</span>
</div>
</div>
</section>
{/*  8-STAGE WORKFLOW STEPPER  */}
<nav aria-label="Workflow Stages" className="w-full bg-surface px-space-xl py-space-sm overflow-x-auto shadow-sm">
<ol className="flex items-center min-w-[980px] justify-between gap-space-sm text-label-sm font-label-sm">
<li className="flex items-center gap-space-xs text-primary font-semibold">
<span className="w-5 h-5 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center text-[10px]">✓</span>
<span className="text-secondary">01 Instrument:</span>
<span className="text-on-surface">WT-100 Verified</span>
</li>
<span className="text-outline-variant">/</span>
<li className="flex items-center gap-space-xs text-primary font-semibold">
<span className="w-5 h-5 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center text-[10px]">✓</span>
<span className="text-secondary">02 Lab:</span>
<span className="text-on-surface">20.4°C • Stable</span>
</li>
<span className="text-outline-variant">/</span>
<li className="flex items-center gap-space-xs text-primary font-semibold">
<span className="w-5 h-5 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center text-[10px]">✓</span>
<span className="text-secondary">03 Selection:</span>
<span className="text-on-surface">4 </span>
</li>
<span className="text-outline-variant">/</span>
<li className="flex items-center gap-space-xs bg-primary text-on-primary px-space-md py-1 rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
<span className="font-bold">04 Observations: TARE</span>
<span className="bg-tertiary text-tertiary-fixed text-[10px] px-1.5 py-0.5 rounded font-semibold uppercase">Active</span>
</li>
<span className="text-outline-variant">/</span>
<li className="flex items-center gap-space-xs text-outline">
<span className="w-5 h-5 rounded-full bg-surface-container text-outline flex items-center justify-center text-[10px]">○</span>
<span>05 Compliance</span>
</li>
<span className="text-outline-variant">/</span>
<li className="flex items-center gap-space-xs text-outline">
<span className="w-5 h-5 rounded-full bg-surface-container text-outline flex items-center justify-center text-[10px]">○</span>
<span>06 Evidence</span>
</li>
<span className="text-outline-variant">/</span>
<li className="flex items-center gap-space-xs text-outline">
<span className="w-5 h-5 rounded-full bg-surface-container text-outline flex items-center justify-center text-[10px]">○</span>
<span>07 Review</span>
</li>
<span className="text-outline-variant">/</span>
<li className="flex items-center gap-space-xs text-outline">
<span className="w-5 h-5 rounded-full bg-surface-container text-outline flex items-center justify-center text-[10px]">○</span>
<span>08 Report</span>
</li>
</ol>
</nav>
{/*  READ-ONLY TEST CONTEXT STRIP  */}
<section className="w-full bg-surface-container-low px-space-xl py-space-sm flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-xl flex-wrap">
<div className="flex items-center gap-space-xs text-body-sm font-body-sm">
<span className="text-secondary uppercase text-[11px] font-semibold">Instrument:</span>
<span className="text-primary font-semibold">ABC WeighTech WT-100</span>
<span className="px-1.5 py-0.5 bg-surface-container-highest text-primary font-metric-tabular text-[11px] rounded font-semibold">(III) NAWI</span>
</div>
<div className="flex items-center gap-space-xs text-body-sm font-body-sm">
<span className="text-secondary uppercase text-[11px] font-semibold">S/N:</span>
<span className="font-metric-tabular text-on-surface">WT100-2026-001</span>
</div>
<div className="flex items-center gap-space-xs text-body-sm font-body-sm">
<span className="text-secondary uppercase text-[11px] font-semibold">Test ID &amp; Lab:</span>
<span className="text-on-surface">TEST-012 • XYZ Metrology Lab</span>
</div>
<div className="flex items-center gap-space-xs text-body-sm font-body-sm">
<span className="text-secondary uppercase text-[11px] font-semibold">Technician:</span>
<span className="text-on-surface">A. Kumar (TECH-409) • 06 Sep 2026 11:47 AM</span>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5 px-space-sm py-0.5 bg-secondary-container text-on-secondary-container rounded text-label-sm font-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span>IN PROGRESS</span>
</div>
<a className="text-label-sm font-label-sm text-primary hover:underline flex items-center gap-0.5" href="#">
<span>View Instrument Profile</span>
<span className="material-symbols-outlined text-[14px]">north_east</span>
</a>
</div>
</section>
{/*  MAIN SCROLLABLE TEST WORKSPACE  */}
<div className="w-full px-space-xl py-space-xl flex flex-col gap-space-xl bg-background">
{/*  TEST HEADER & TECHNICAL METADATA  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex flex-wrap items-start justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-sm mb-space-xs">
<span className="px-space-sm py-0.5 bg-tertiary-container text-tertiary-fixed text-label-sm font-label-sm rounded font-semibold uppercase tracking-wider">
              METROLOGICAL • CONFIGURED PROCEDURE • OIML R 76 EVALUATION
            </span>
</div>
<h2 className="text-headline-lg font-headline-lg text-primary font-semibold">Tare Evaluation Routine</h2>
<p className="text-secondary text-body-md font-body-md">
            Evaluate instrument behavior during and after application of configured tare load under laboratory test protocols.
          </p>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-lg text-body-sm text-secondary">
<span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
<span>Legal Metrology Directive 2014/31/EU</span>
</div>
</div>
{/*  Specification Grid  */}
<div className="grid grid-cols-2 md:grid-cols-5 gap-space-md pt-space-sm">
<div className="bg-surface p-space-md rounded-lg">
<span className="text-secondary text-label-sm font-label-sm block mb-1">Scale Interval (e)</span>
<span className="text-primary font-metric-tabular text-headline-sm font-semibold">10 g</span>
</div>
<div className="bg-surface p-space-md rounded-lg">
<span className="text-secondary text-label-sm font-label-sm block mb-1">Accuracy Class</span>
<span className="text-primary font-metric-tabular text-headline-sm font-semibold">( III ) Medium</span>
</div>
<div className="bg-surface p-space-md rounded-lg">
<span className="text-secondary text-label-sm font-label-sm block mb-1">Maximum Capacity (Max)</span>
<span className="text-primary font-metric-tabular text-headline-sm font-semibold">100.000 kg</span>
</div>
<div className="bg-surface p-space-md rounded-lg">
<span className="text-secondary text-label-sm font-label-sm block mb-1">Minimum Capacity (Min)</span>
<span className="text-primary font-metric-tabular text-headline-sm font-semibold">0.200 kg <span className="text-label-sm text-secondary font-normal">(20 e)</span></span>
</div>
<div className="bg-surface-container-high p-space-md rounded-lg">
<span className="text-primary text-label-sm font-label-sm font-semibold block mb-1">Configured Tare Load</span>
<span className="text-tertiary font-metric-tabular text-headline-sm font-bold">5.000 kg</span>
</div>
</div>
{/*  Callout Notice  */}
<div className="flex items-center gap-space-sm bg-surface-container-low p-space-sm rounded-lg text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-tertiary text-[20px] shrink-0">info</span>
<span>
          Applicable tare conditions and evaluation criteria are determined by the configured test program. Official regulatory compliance envelope is evaluated in Step 05.
        </span>
</div>
</section>
{/*  SECTION 1 — TARE TEST CONFIGURATION  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-md">
<div>
<h3 className="text-headline-md font-headline-md text-primary">Tare Test Configuration</h3>
<p className="text-secondary text-body-sm font-body-sm">
            Use the laboratory-configured tare procedure and applicable test conditions.
          </p>
</div>
<button className="flex items-center gap-space-xs bg-surface-container px-space-md py-space-xs rounded-lg text-primary text-label-sm font-label-sm font-semibold hover:bg-surface-container-highest transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">sync_saved_locally</span>
<span>Load from Test Program</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-md">
<div>
<label className="block text-label-sm font-label-sm text-secondary uppercase mb-1">Reference Load</label>
<div className="flex rounded-lg overflow-hidden shadow-sm">
<input className="w-full bg-surface-container-lowest px-space-sm py-space-xs text-on-surface font-metric-tabular text-right focus:outline-none" type="text" defaultValue="5.000"/>
<span className="bg-surface-container px-space-sm py-space-xs text-secondary text-label-sm font-label-sm flex items-center">kg ▾</span>
</div>
</div>
<div>
<label className="block text-label-sm font-label-sm text-secondary uppercase mb-1">Tare Mode</label>
<select className="w-full bg-surface px-space-sm py-space-xs rounded-lg text-on-surface text-body-md font-body-md focus:outline-none shadow-sm">
<option >Configured Tare (Subtractive)</option>
<option>Additive Tare Device</option>
<option>Tare-Weighing Device</option>
<option>Preset Tare (Key-in)</option>
</select>
</div>
<div>
<label className="block text-label-sm font-label-sm text-secondary uppercase mb-1">Number of Observations</label>
<input className="w-full bg-surface px-space-sm py-space-xs rounded-lg text-on-surface font-metric-tabular focus:outline-none shadow-sm" type="number" defaultValue="3"/>
</div>
<div>
<label className="block text-label-sm font-label-sm text-secondary uppercase mb-1">Test Sequence</label>
<select className="w-full bg-surface px-space-sm py-space-xs rounded-lg text-on-surface text-body-md font-body-md focus:outline-none shadow-sm">
<option >Standard Tare &amp; Net Indication</option>
<option>Multi-point Tare Linearity</option>
<option>Extended Dwell Tare Drift</option>
</select>
</div>
<div>
<label className="block text-label-sm font-label-sm text-secondary uppercase mb-1">Starting Condition</label>
<select className="w-full bg-surface px-space-sm py-space-xs rounded-lg text-on-surface text-body-md font-body-md focus:outline-none shadow-sm">
<option >Gross Zero Reference</option>
<option>Pre-Loaded Pan Reference</option>
</select>
</div>
</div>
</section>
{/*  SECTION 2 — INITIAL CONDITION  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="text-headline-md font-headline-md text-primary">Initial Condition</h3>
<p className="text-secondary text-body-sm font-body-sm">
            Record instrument state before applying tare load.
          </p>
</div>
<span className="px-space-sm py-0.5 bg-surface-container text-primary font-label-sm font-semibold rounded">STAGE INITIALIZED</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
<div className="bg-surface p-space-sm rounded-lg">
<label className="block text-label-sm font-label-sm text-secondary uppercase mb-1">Initial Indication</label>
<div className="flex items-center justify-between bg-surface-container-lowest px-space-sm py-space-xs rounded shadow-sm">
<span className="text-primary font-metric-tabular text-headline-sm font-semibold">0.000</span>
<span className="text-label-sm font-label-sm text-secondary">kg</span>
</div>
<span className="text-[11px] text-tertiary mt-1 block">✓ Center of Zero verified</span>
</div>
<div className="bg-surface p-space-sm rounded-lg">
<label className="block text-label-sm font-label-sm text-secondary uppercase mb-1">Initial Condition Flag</label>
<select className="w-full bg-surface-container-lowest px-space-sm py-space-xs rounded text-on-surface text-body-md font-body-md focus:outline-none shadow-sm">
<option >Stable [-&gt;0&lt;- Center Zero]</option>
<option>Stable Off-Center Zero</option>
<option>Non-Zero Adjusted</option>
</select>
<span className="text-[11px] text-secondary mt-1 block">OIML R 76-1 Clause 4.5.1</span>
</div>
<div className="bg-surface p-space-sm rounded-lg md:col-span-1">
<label className="block text-label-sm font-label-sm text-secondary uppercase mb-1">Tare Device / Artifact</label>
<input className="w-full bg-surface-container-lowest px-space-sm py-space-xs rounded text-on-surface text-body-md font-body-md focus:outline-none shadow-sm" type="text" defaultValue="Standard M1 Calibration Weight Set"/>
<span className="text-[11px] text-secondary mt-1 block">Asset: CAL-M1-SET-08</span>
</div>
<div className="bg-surface-container-high p-space-sm rounded-lg flex flex-col justify-between">
<div>
<label className="block text-label-sm font-label-sm text-primary font-semibold uppercase mb-1">Tare Load (Reference)</label>
<span className="text-headline-sm font-metric-tabular font-bold text-primary">5.000 kg</span>
</div>
<span className="text-[11px] text-primary">System verified calibrated reference</span>
</div>
</div>
<div className="bg-surface p-space-sm rounded-lg">
<label className="block text-label-sm font-label-sm text-secondary uppercase mb-1">Technician Initial Setup Notes</label>
<p className="text-body-sm font-body-sm text-on-surface-variant">
          Load receptor cleared and leveled. Instrument powered on for 45 min thermal stabilization. Initial zero verified stable.
        </p>
</div>
</section>
{/*  SECTION 3 — TARE OPERATION SEQUENCE  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-md">
<div>
<h3 className="text-headline-md font-headline-md text-primary">Tare Operation Sequence</h3>
<p className="text-secondary text-body-sm font-body-sm">
            Follow sequential laboratory protocol for subtractive tare verification.
          </p>
</div>
<div className="px-space-md py-1 bg-surface-container text-primary text-label-sm font-label-sm font-bold rounded-full">
          Operation Sequence: 4 / 4 Completed ✓
        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
{/*  Step 1  */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="text-label-sm font-label-sm font-bold text-primary">STEP 1</span>
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
</div>
<h4 className="text-body-md font-body-md font-semibold text-primary mb-1">Apply Configured Tare Load</h4>
<p className="text-body-sm font-body-sm text-secondary">Apply 5.000 kg calibrated M1 mass centered on load receptor.</p>
</div>
<span className="mt-space-md text-[11px] text-primary font-metric-tabular">Tare load applied at 11:42:10 UTC</span>
</div>
{/*  Step 2  */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="text-label-sm font-label-sm font-bold text-primary">STEP 2</span>
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
</div>
<h4 className="text-body-md font-body-md font-semibold text-primary mb-1">Allow Indication to Stabilize</h4>
<p className="text-body-sm font-body-sm text-secondary">Verify motion detector extinguishing and no vibration interference.</p>
</div>
<span className="mt-space-md text-[11px] text-primary font-metric-tabular">Indication stabilized within 1.4s</span>
</div>
{/*  Step 3  */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="text-label-sm font-label-sm font-bold text-primary">STEP 3</span>
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
</div>
<h4 className="text-body-md font-body-md font-semibold text-primary mb-1">Activate Tare Device</h4>
<p className="text-body-sm font-body-sm text-secondary">Actuate Tare key on front panel, confirm annunciator [NET].</p>
</div>
<span className="mt-space-md text-[11px] text-primary font-metric-tabular">SOP Tare key actuated, [-&gt;T&lt;-] displayed</span>
</div>
{/*  Step 4  */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col justify-between shadow-sm">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="text-label-sm font-label-sm font-bold text-primary">STEP 4</span>
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
</div>
<h4 className="text-body-md font-body-md font-semibold text-primary mb-1">Record Indication &amp; Net</h4>
<p className="text-body-sm font-body-sm text-secondary">Log telemetry observations across tare dwell test cycles.</p>
</div>
<span className="mt-space-md text-[11px] text-primary font-metric-tabular">Observation matrix recorded</span>
</div>
</div>
</section>
{/*  SECTION 4 — TARE OBSERVATIONS TABLE (PRIMARY)  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
{/*  Table Header & Toolbar  */}
<div className="p-space-lg flex flex-wrap items-center justify-between gap-space-md bg-surface-container-lowest">
<div>
<div className="flex items-center gap-space-xs">
<h3 className="text-headline-md font-headline-md text-primary">Tare Observations</h3>
<span className="px-space-sm py-0.5 bg-surface-container text-primary text-label-sm font-label-sm rounded font-bold">3 / 3 Configured Logged</span>
</div>
<p className="text-secondary text-body-sm font-body-sm mt-0.5">
            Sequential observation log with enforced auto-computation of net offsets.
          </p>
</div>
<div className="flex items-center gap-space-xs">
<button className="flex items-center gap-1 px-space-sm py-space-xs bg-surface-container hover:bg-surface-container-high text-primary text-label-sm font-label-sm rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">add</span>
<span>Add Observation</span>
</button>
<button className="flex items-center gap-1 px-space-sm py-space-xs bg-surface-container-low hover:bg-surface-container text-secondary text-label-sm font-label-sm rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">delete</span>
<span>Remove </span>
</button>
<button className="flex items-center gap-1 px-space-sm py-space-xs bg-surface-container-low hover:bg-surface-container text-secondary text-label-sm font-label-sm rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">clear_all</span>
<span>Clear Observations</span>
</button>
</div>
</div>
{/*  Data Table  */}
<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary text-label-sm font-label-sm uppercase tracking-wider">
<th className="py-space-sm px-space-md w-12 text-center">OBS #</th>
<th className="py-space-sm px-space-md min-w-[200px]">Tare Condition / Stage</th>
<th className="py-space-sm px-space-md text-right w-36">Reference Load</th>
<th className="py-space-sm px-space-md text-right w-44">Observed Indication</th>
<th className="py-space-sm px-space-md text-right w-40">Derived Value</th>
<th className="py-space-sm px-space-md text-center w-28">Stability State</th>
<th className="py-space-sm px-space-md text-center w-36">Status</th>
<th className="py-space-sm px-space-md min-w-[280px]">Technician Remarks</th>
</tr>
</thead>
<tbody className="text-body-md font-body-md divide-y divide-surface-container">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-sm px-space-md text-center font-metric-tabular text-primary font-bold">01</td>
<td className="py-space-sm px-space-md text-primary font-medium">
                Pre-Tare Load Indication (Gross)
                <span className="block text-[11px] text-secondary font-normal">Tare weight physically loaded on platter</span>
</td>
<td className="py-space-sm px-space-md text-right font-metric-tabular bg-surface-container-low/30 text-secondary">
                5.000 kg
              </td>
<td className="py-space-sm px-space-md text-right">
<div className="inline-flex items-center rounded overflow-hidden shadow-sm bg-surface-container-lowest">
<input className="w-20 text-right px-2 py-1 font-metric-tabular text-primary font-bold focus:outline-none" type="text" defaultValue="5.000"/>
<span className="bg-surface-container px-2 py-1 text-label-sm text-secondary">kg</span>
</div>
</td>
<td className="py-space-sm px-space-md text-right font-metric-tabular bg-surface-container-low/50">
<span className="text-primary font-bold">0.000 kg</span>
<span className="ml-1 text-[10px] bg-surface-container text-secondary px-1 py-0.5 rounded">AUTO</span>
</td>
<td className="py-space-sm px-space-md text-center">
<span className="inline-flex items-center gap-1 text-[12px] text-tertiary font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Stable
                </span>
</td>
<td className="py-space-sm px-space-md text-center">
<span className="inline-block px-2 py-0.5 bg-surface-container-high text-primary font-label-sm font-bold rounded">
                  RECORDED ✓
                </span>
</td>
<td className="py-space-sm px-space-md text-body-sm text-on-surface-variant">
                Gross reading exactly matches nominal 5 kg Class M1 reference
              </td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-sm px-space-md text-center font-metric-tabular text-primary font-bold">02</td>
<td className="py-space-sm px-space-md text-primary font-medium">
                Tare Device Actuated (Net Indication)
                <span className="block text-[11px] text-secondary font-normal">Front panel tare trigger initiated</span>
</td>
<td className="py-space-sm px-space-md text-right font-metric-tabular bg-surface-container-low/30 text-secondary">
                5.000 kg
              </td>
<td className="py-space-sm px-space-md text-right">
<div className="inline-flex items-center rounded overflow-hidden shadow-sm bg-surface-container-lowest">
<input className="w-20 text-right px-2 py-1 font-metric-tabular text-primary font-bold focus:outline-none" type="text" defaultValue="0.000"/>
<span className="bg-surface-container px-2 py-1 text-label-sm text-secondary">kg</span>
</div>
</td>
<td className="py-space-sm px-space-md text-right font-metric-tabular bg-surface-container-low/50">
<span className="text-primary font-bold">0.000 kg</span>
<span className="ml-1 text-[10px] bg-surface-container text-secondary px-1 py-0.5 rounded">AUTO</span>
</td>
<td className="py-space-sm px-space-md text-center">
<span className="inline-flex items-center gap-1 text-[12px] text-tertiary font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Stable
                </span>
</td>
<td className="py-space-sm px-space-md text-center">
<span className="inline-block px-2 py-0.5 bg-surface-container-high text-primary font-label-sm font-bold rounded">
                  RECORDED ✓
                </span>
</td>
<td className="py-space-sm px-space-md text-body-sm text-on-surface-variant">
                Immediate zeroing upon tare button press; NET annunciator illuminated
              </td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-space-sm px-space-md text-center font-metric-tabular text-primary font-bold">03</td>
<td className="py-space-sm px-space-md text-primary font-medium">
                After Configured Test Cycle (Settled Net Zero)
                <span className="block text-[11px] text-secondary font-normal">15-second dwell verification</span>
</td>
<td className="py-space-sm px-space-md text-right font-metric-tabular bg-surface-container-low/30 text-secondary">
                5.000 kg
              </td>
<td className="py-space-sm px-space-md text-right">
<div className="inline-flex items-center rounded overflow-hidden shadow-sm bg-surface-container-lowest">
<input className="w-20 text-right px-2 py-1 font-metric-tabular text-primary font-bold focus:outline-none" type="text" defaultValue="0.010"/>
<span className="bg-surface-container px-2 py-1 text-label-sm text-secondary">kg</span>
</div>
</td>
<td className="py-space-sm px-space-md text-right font-metric-tabular bg-surface-container-low/50">
<span className="text-tertiary font-bold">+0.010 kg</span>
<span className="ml-1 text-[10px] bg-surface-container text-secondary px-1 py-0.5 rounded">AUTO</span>
</td>
<td className="py-space-sm px-space-md text-center">
<span className="inline-flex items-center gap-1 text-[12px] text-tertiary font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Stable
                </span>
</td>
<td className="py-space-sm px-space-md text-center">
<span className="inline-block px-2 py-0.5 bg-surface-container-high text-primary font-label-sm font-bold rounded">
                  RECORDED ✓
                </span>
</td>
<td className="py-space-sm px-space-md text-body-sm text-on-surface-variant">
                Post-cycle reading settled after 15s dwell
              </td>
</tr>
</tbody>
</table>
</div>
{/*  Table Cryptographic & Rule Footer  */}
<div className="p-space-md bg-surface-container-low flex flex-wrap items-center justify-between gap-space-md text-label-sm font-label-sm text-secondary">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
<span>Enforced Formula: Derived Value auto-computed based on configured tare delta rules.</span>
</div>
<div className="font-metric-tabular flex items-center gap-space-xs text-primary">
<span className="text-secondary">Cryptographic Hash:</span>
<span>SHA-256: 7d49b1e7...c92a</span>
<span className="px-1.5 py-0.5 bg-secondary-container text-on-secondary-container rounded text-[10px] font-bold">AUDIT HASH VALID</span>
</div>
</div>
</section>
{/*  BOTTOM PANELS (4-COLUMN GRID)  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/*  1. Tare Observation Summary  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<h4 className="text-headline-sm font-headline-sm text-primary font-semibold">Tare Observation Summary</h4>
<span className="material-symbols-outlined text-primary text-[18px]">analytics</span>
</div>
<div className="space-y-space-xs text-body-sm font-body-sm">
<div className="flex justify-between py-1 border-b border-surface-container-low">
<span className="text-secondary">Observations Completed:</span>
<span className="font-metric-tabular font-semibold text-primary">3 / 3</span>
</div>
<div className="flex justify-between py-1 border-b border-surface-container-low">
<span className="text-secondary">Initial Zero Indication:</span>
<span className="font-metric-tabular text-on-surface">0.000 kg</span>
</div>
<div className="flex justify-between py-1 border-b border-surface-container-low">
<span className="text-secondary">Tare Load Applied:</span>
<span className="font-metric-tabular font-semibold text-primary">5.000 kg</span>
</div>
<div className="flex justify-between py-1 border-b border-surface-container-low">
<span className="text-secondary">Final Recorded Indication:</span>
<span className="font-metric-tabular font-semibold text-on-surface">+0.010 kg</span>
</div>
<div className="flex justify-between py-1">
<span className="text-secondary">Derived Net Offset:</span>
<span className="font-metric-tabular font-bold text-tertiary">+0.010 kg</span>
</div>
</div>
</div>
<div className="mt-space-md p-space-xs bg-surface-container-high rounded text-center">
<span className="text-[11px] font-label-sm font-bold text-primary tracking-wider uppercase">
            Regulatory Disposition: Pending Step 05 Compliance
          </span>
</div>
</div>
{/*  2. Indication Sequence (Visual Reference)  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<h4 className="text-headline-sm font-headline-sm text-primary font-semibold">Indication Sequence</h4>
<span className="text-[11px] text-secondary font-label-sm uppercase font-semibold">Stage Plot</span>
</div>
{/*  Step Plot Inline SVG  */}
<div className="w-full bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
<svg className="w-full h-24" fill="none" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
{/*  Tolerance band background  */}
<rect className="text-surface-container-high" fill="currentColor" height="12" rx="2" width="220" x="10" y="36"></rect>
{/*  Reference guide lines  */}
<line className="text-outline-variant" stroke="currentColor" strokeDasharray="2 2" x1="10" x2="230" y1="42" y2="42"></line>
{/*  Sequence plot line: 0 kg (y=65) -> 5 kg (y=15) -> 0 kg Net (y=42) -> +0.010 kg (y=40)  */}
<path className="text-primary" d="M 20 65 L 75 15 L 145 42 L 215 40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
{/*  Points  */}
<circle className="text-primary" cx="20" cy="65" fill="currentColor" r="3.5"></circle>
<circle className="text-primary" cx="75" cy="15" fill="currentColor" r="3.5"></circle>
<circle className="text-tertiary" cx="145" cy="42" fill="currentColor" r="3.5"></circle>
<circle className="text-tertiary" cx="215" cy="40" fill="currentColor" r="3.5"></circle>
{/*  Labels inside chart  */}
<text className="text-secondary" fill="currentColor" fontSize="8" textAnchor="middle" x="20" y="76">Initial</text>
<text className="text-primary font-bold" fill="currentColor" fontSize="8" textAnchor="middle" x="75" y="10">Gross</text>
<text className="text-secondary" fill="currentColor" fontSize="8" textAnchor="middle" x="145" y="55">Tare</text>
<text className="text-tertiary font-bold" fill="currentColor" fontSize="8" textAnchor="middle" x="215" y="55">Settled</text>
</svg>
<div className="flex justify-between text-[10px] text-secondary font-metric-tabular">
<span>0.000 kg</span>
<span>5.000 kg</span>
<span>0.000 kg</span>
<span>+0.010 kg</span>
</div>
</div>
</div>
<p className="text-[11px] text-secondary mt-space-sm italic">
          Operational indicator only; official compliance tolerance evaluated downstream in Step 05.
        </p>
</div>
{/*  3. Data Validation Gate  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<h4 className="text-headline-sm font-headline-sm text-primary font-semibold">Data Validation Gate</h4>
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
</div>
<ul className="space-y-space-xs text-body-sm font-body-sm">
<li className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-tertiary text-[16px]">check_box</span>
<span>3 required observations captured</span>
</li>
<li className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-tertiary text-[16px]">check_box</span>
<span>Values numeric &amp; within resolution (10 g)</span>
</li>
<li className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-tertiary text-[16px]">check_box</span>
<span>Tare load verified against reference</span>
</li>
<li className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-tertiary text-[16px]">check_box</span>
<span>Derived values synchronized</span>
</li>
</ul>
</div>
<div className="mt-space-md p-space-xs bg-surface-container text-primary rounded text-center font-label-sm text-[11px] font-bold">
          OBSERVATIONS VALIDATED ✓ READY FOR SIGN-OFF
        </div>
</div>
{/*  4. Applicable Evaluation Rules  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<h4 className="text-headline-sm font-headline-sm text-primary font-semibold">Applicable Evaluation Rules</h4>
<span className="material-symbols-outlined text-secondary text-[18px]">gavel</span>
</div>
<div className="space-y-space-xs text-body-sm font-body-sm">
<div>
<span className="text-secondary text-label-sm block">Standard</span>
<span className="font-semibold text-primary">OIML R 76-1:2006</span>
</div>
<div>
<span className="text-secondary text-label-sm block">Rule Set</span>
<span className="font-metric-tabular text-on-surface">R76-2026.1-NAWI Clause 4.6.3</span>
</div>
<div>
<span className="text-secondary text-label-sm block">Evaluation Scope</span>
<span className="text-on-surface">Tare Mechanism &amp; Net Accuracy</span>
</div>
<div>
<span className="text-secondary text-label-sm block">Status</span>
<span className="text-primary font-semibold">Pending Step 05 Compliance</span>
</div>
</div>
</div>
<a className="mt-space-md text-label-sm font-label-sm text-primary hover:underline flex items-center justify-between" href="#">
<span>View Rule Information</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</section>
{/*  PROCEDURE EXECUTION CHECKLIST & FIELD NOTES  */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
{/*  Left: Checklist  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<h3 className="text-headline-md font-headline-md text-primary">Procedure Execution Checklist</h3>
<span className="px-space-sm py-0.5 bg-surface-container text-primary font-label-sm font-semibold rounded">SOP COMPLIANCE</span>
</div>
<div className="space-y-space-sm mt-space-md">
<label className="flex items-start gap-space-sm text-body-md text-on-surface cursor-pointer">
<input defaultChecked="" className="mt-1 rounded text-primary focus:ring-0" type="checkbox"/>
<span>Tare load applied according to laboratory SOP-TARE-R76 without dynamic shock.</span>
</label>
<label className="flex items-start gap-space-sm text-body-md text-on-surface cursor-pointer">
<input defaultChecked="" className="mt-1 rounded text-primary focus:ring-0" type="checkbox"/>
<span>Indication allowed to thermally and mechanically stabilize before recording observation.</span>
</label>
<label className="flex items-start gap-space-sm text-body-md text-on-surface cursor-pointer">
<input defaultChecked="" className="mt-1 rounded text-primary focus:ring-0" type="checkbox"/>
<span>Applicable subtractive tare mechanism functioned smoothly without error annunciators.</span>
</label>
<label className="flex items-start gap-space-sm text-body-md text-on-surface cursor-pointer">
<input defaultChecked="" className="mt-1 rounded text-primary focus:ring-0" type="checkbox"/>
<span>Net observation recorded immediately following configured dwell cycle.</span>
</label>
</div>
</div>
<div className="mt-space-lg pt-space-md border-t border-surface-container-low flex items-center gap-space-xs text-body-sm text-secondary">
<span className="material-symbols-outlined text-[16px] text-tertiary">verified_user</span>
<span>Checklist verified by testing metrologist under ISO/IEC 17025 accredited standard.</span>
</div>
</div>
{/*  Right: Field Notes & Cryptographic Sign-Off  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<h3 className="text-headline-md font-headline-md text-primary">Technician Field Notes &amp; Observations</h3>
<span className="text-label-sm font-label-sm text-secondary">LOG NOTE #TN-409-12</span>
</div>
<textarea className="w-full bg-surface-container-low p-space-sm rounded-lg text-body-md font-body-md text-on-surface focus:outline-none focus:bg-surface-container shadow-inner resize-none" rows="4" defaultValue={"Tare mechanism tested using calibrated 5.000 kg Class M1 cylindrical weight set. Net indication transitioned smoothly to 0.000 kg within 0.8 seconds of tare actuation. Digital display stability flag maintained throughout test cycle."} />
</div>
<div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg flex flex-wrap items-center justify-between gap-space-sm text-label-sm font-label-sm">
<div className="flex items-center gap-space-xs text-primary font-medium">
<span className="material-symbols-outlined text-[16px]">badge</span>
<span>Author: A. Kumar (TECH-409)</span>
</div>
<div className="font-metric-tabular text-secondary">
<span>Token: 0x82FA...C419</span>
</div>
</div>
</div>
</section>
{/*  STAGE 06 EVIDENCE REMINDER BANNER  */}
<section className="bg-surface-container rounded-xl p-space-md flex flex-wrap items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">photo_camera</span>
</div>
<div>
<h4 className="text-body-lg font-body-lg font-semibold text-primary">Stage 06 Evidence Reminder</h4>
<p className="text-body-sm font-body-sm text-secondary">
            Calibration certificates for tare test weights and scale display photos will be attached during Step 06 Evidence.
          </p>
</div>
</div>
<button className="px-space-md py-space-xs bg-surface-container-lowest text-primary text-label-sm font-label-sm font-semibold rounded-lg shadow-sm hover:bg-surface-container-high transition-colors" type="button">
        Add Attachments Later
      </button>
</section>
</div>
{/*  BOTTOM FIXED ACTION BAR  */}
<footer className="w-full bg-surface-container-lowest px-space-xl py-space-sm flex flex-wrap items-center justify-between gap-space-md shadow-lg sticky bottom-0 z-10">
<div>
<button className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-label-md font-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
<span>Previous Test: Zero Checks</span>
</button>
</div>
<div className="text-body-sm font-body-sm text-secondary flex items-center gap-space-sm">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Last modified by A. Kumar • 06 Sep 2026, 11:47 AM • Autosave active • VeriScale Engine v4.2.1</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface text-label-md font-label-md rounded-lg transition-colors" type="button">
        Save Draft
      </button>
<button className="flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container text-primary hover:bg-surface-container-high text-label-md font-label-md font-semibold rounded-lg transition-colors" type="button">
<span className="material-symbols-outlined text-[16px] text-tertiary">task_alt</span>
<span>Mark Test Complete</span>
</button>
<button className="flex items-center gap-space-xs px-space-lg py-space-xs bg-primary hover:bg-primary-container text-on-primary text-label-md font-label-md font-bold rounded-lg shadow-sm transition-colors" type="button">
<span>Next: Step 05 Compliance Assessment</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</footer>
</div></main>
    </div>
  );
}
