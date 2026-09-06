import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function TestZero() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full text-on-surface">
{/*  TOP TELEMETRY STRIP & HEADER CONSOLE  */}
<div className="w-full bg-surface-container-lowest shadow-sm">
{/*  Metrological Telemetry Ribbon  */}
<div className="px-6 py-2 bg-primary text-on-primary flex flex-wrap items-center justify-between gap-4 text-label-sm font-label-sm">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span className="text-secondary-fixed tracking-wider font-semibold">COM1: 9600 BAUD [ONLINE]</span>
</div>
<span className="text-outline">/</span>
<div className="px-2 py-0.5 bg-surface-container-highest/20 rounded font-metric-tabular text-tertiary-fixed">
          [-&gt;0&lt;- STABLE ZERO]
        </div>
<span className="text-outline">/</span>
<div className="font-metric-tabular tracking-wide text-on-primary">
          LIVE TELEMETRY: <span className="text-tertiary-fixed font-bold">0.000 kg NET</span> (GROSS: 0.000 kg)
        </div>
</div>
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-1 text-surface-variant">
<span className="material-symbols-outlined text-[14px]">history</span>
<span>Autosave: 5s ago</span>
</div>
<div className="flex items-center space-x-2">
<button className="px-2.5 py-1 bg-surface-container-highest/20 hover:bg-surface-container-highest/30 text-on-primary rounded font-label-sm transition">
            Save Draft
          </button>
<button className="px-2.5 py-1 bg-error-container text-on-error-container hover:opacity-90 rounded font-label-sm transition">
            Exit Test
          </button>
</div>
</div>
</div>
{/*  Master Inspection Breadcrumb & Headline  */}
<div className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<div className="flex items-center space-x-2 text-label-sm text-secondary font-label-sm">
<span>Verification Routine</span>
<span className="text-outline-variant">/</span>
<span>TEST-012</span>
<span className="text-outline-variant">/</span>
<span>Observations</span>
<span className="text-outline-variant">/</span>
<span className="text-primary font-semibold">Zero Checks</span>
</div>
<div className="flex items-center space-x-3 mt-1">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Zero / Zero-Related Checks</h1>
<span className="px-2 py-0.5 bg-surface-container-high text-primary font-label-sm rounded uppercase font-semibold">Routine 04 of 04</span>
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-label-sm rounded uppercase font-semibold">SOP: ZERO-OIML-R76</span>
</div>
<p className="text-body-sm font-body-sm text-secondary mt-0.5">
          Record observations associated with the instrument's zero condition under configured testing protocols.
        </p>
</div>
{/*  Quick Summary Metric Pill  */}
<div className="flex items-center space-x-4 bg-surface-container-low px-4 py-2.5 rounded-xl shadow-inner">
<div className="text-right">
<div className="text-label-sm font-label-sm text-secondary uppercase">Baseline Reference</div>
<div className="font-metric-tabular text-headline-sm text-primary font-bold">0.000 kg</div>
</div>
<div className="w-px h-8 bg-outline-variant"></div>
<div className="text-right">
<div className="text-label-sm font-label-sm text-secondary uppercase">Max Delta (Obs)</div>
<div className="font-metric-tabular text-headline-sm text-tertiary font-bold">+0.010 kg</div>
</div>
<div className="w-px h-8 bg-outline-variant"></div>
<div className="flex items-center space-x-1.5 px-2.5 py-1 bg-surface-container-lowest rounded shadow-sm text-tertiary">
<span className="material-symbols-outlined text-sm font-bold">verified</span>
<span className="font-label-sm uppercase tracking-wider font-bold">VALIDATED</span>
</div>
</div>
</div>
</div>
{/*  WORKFLOW PROGRESS STEPPER (8-STAGE PIPELINE)  */}
<div className="w-full bg-surface-container-low py-3 px-6 shadow-sm overflow-x-auto">
<div className="flex items-center min-w-[1020px] justify-between text-body-sm font-body-sm">
{/*  Step 01  */}
<div className="flex items-center space-x-2">
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-label-sm">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface font-semibold">01 Instrument</span>
<span className="text-label-sm text-secondary">WT-100 Verified</span>
</div>
</div>
<div className="flex-1 h-0.5 bg-primary mx-3"></div>
{/*  Step 02  */}
<div className="flex items-center space-x-2">
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-label-sm">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface font-semibold">02 Lab Conditions</span>
<span className="text-label-sm text-secondary">20.4°C • Stable</span>
</div>
</div>
<div className="flex-1 h-0.5 bg-primary mx-3"></div>
{/*  Step 03  */}
<div className="flex items-center space-x-2">
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-label-sm">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface font-semibold">03 Selection</span>
<span className="text-label-sm text-secondary">4 </span>
</div>
</div>
<div className="flex-1 h-0.5 bg-primary mx-3"></div>
{/*  Step 04 ACTIVE  */}
<div className="flex items-center space-x-2 bg-primary-container px-3 py-1.5 rounded-lg shadow-sm">
<div className="w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-label-sm">
          04
        </div>
<div className="flex flex-col text-on-primary">
<span className="font-label-sm font-bold text-tertiary-fixed">Observations</span>
<span className="text-label-sm text-on-primary-container">ZERO CHECKS [ACTIVE]</span>
</div>
</div>
<div className="flex-1 h-0.5 bg-outline-variant mx-3"></div>
{/*  Step 05 Pending  */}
<div className="flex items-center space-x-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-label-sm font-semibold">
          05
        </div>
<div className="flex flex-col">
<span className="font-label-sm text-secondary font-semibold">Compliance</span>
<span className="text-label-sm text-outline">Pending Step 4</span>
</div>
</div>
<div className="flex-1 h-0.5 bg-outline-variant mx-3"></div>
{/*  Step 06 Evidence  */}
<div className="flex items-center space-x-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-label-sm font-semibold">
          06
        </div>
<div className="flex flex-col">
<span className="font-label-sm text-secondary font-semibold">Evidence</span>
<span className="text-label-sm text-outline">Artifacts &amp; Seals</span>
</div>
</div>
<div className="flex-1 h-0.5 bg-outline-variant mx-3"></div>
{/*  Step 07 Review  */}
<div className="flex items-center space-x-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-label-sm font-semibold">
          07
        </div>
<div className="flex flex-col">
<span className="font-label-sm text-secondary font-semibold">Review</span>
<span className="text-label-sm text-outline">Supervisory Gate</span>
</div>
</div>
<div className="flex-1 h-0.5 bg-outline-variant mx-3"></div>
{/*  Step 08 Report  */}
<div className="flex items-center space-x-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-label-sm font-semibold">
          08
        </div>
<div className="flex flex-col">
<span className="font-label-sm text-secondary font-semibold">Report</span>
<span className="text-label-sm text-outline">OIML Certificate</span>
</div>
</div>
</div>
</div>
{/*  CONTEXT METADATA BAR  */}
<div className="px-6 py-2.5 bg-surface-container-lowest text-secondary font-body-sm text-body-sm flex flex-wrap items-center justify-between gap-4 shadow-sm">
<div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
<div>
<span className="text-outline uppercase text-label-sm font-semibold">Instrument:</span>
<span className="font-semibold text-primary ml-1">ABC WeighTech WT-100 (Class III NAWI)</span>
</div>
<span className="text-outline-variant">|</span>
<div>
<span className="text-outline uppercase text-label-sm font-semibold">Serial No:</span>
<span className="font-metric-tabular font-medium text-on-surface ml-1">WT100-2026-001</span>
</div>
<span className="text-outline-variant">|</span>
<div>
<span className="text-outline uppercase text-label-sm font-semibold">Verification Record:</span>
<span className="font-medium text-on-surface ml-1">TEST-012 • XYZ Metrology Lab</span>
</div>
<span className="text-outline-variant">|</span>
<div>
<span className="text-outline uppercase text-label-sm font-semibold">Technician / Stamp:</span>
<span className="font-medium text-on-surface ml-1">A. Kumar (TECH-409) • 06 Sep 2026 11:32 AM</span>
</div>
<span className="text-outline-variant">|</span>
<div className="flex items-center space-x-1.5">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm uppercase font-semibold text-tertiary">IN PROGRESS</span>
</div>
</div>
<a className="inline-flex items-center text-primary-container hover:text-primary font-label-sm font-semibold transition" href="#">
<span>View Instrument Profile</span>
<span className="material-symbols-outlined text-[16px] ml-1">north_east</span>
</a>
</div>
{/*  MAIN VIEWPORT GRID  */}
<div className="p-6 space-y-6">
{/*  1. PROCEDURE CONFIGURATION & OIML METROLOGICAL CONTEXT  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="p-5 bg-gradient-to-r from-surface-container-low to-surface-container-lowest flex flex-wrap items-center justify-between gap-4">
<div>
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary text-[20px]">tune</span>
<h2 className="font-headline-sm text-headline-sm text-primary font-semibold">Zero / Zero-Related Checks Routine</h2>
</div>
<p className="text-body-sm font-body-sm text-secondary mt-0.5">
            Configured protocol evaluation under OIML R 76-1 Clause A.4.4. Testing zero stability, drift, and return to zero without zero-tracking interference.
          </p>
</div>
<div className="flex items-center space-x-2">
<span className="px-2.5 py-1 bg-surface-container-high text-primary font-label-sm rounded uppercase font-bold tracking-wider">
            METROLOGICAL • CONFIGURED PROCEDURE • OIML R 76 EVALUATION
          </span>
</div>
</div>
{/*  Spec Metrics Badges Strip  */}
<div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4 bg-surface-container-low/50">
<div className="p-3 bg-surface-container-lowest rounded-lg shadow-sm">
<div className="text-label-sm font-label-sm text-secondary">Verification Interval (e)</div>
<div className="font-metric-tabular text-headline-sm text-primary font-bold mt-1">10 g</div>
</div>
<div className="p-3 bg-surface-container-lowest rounded-lg shadow-sm">
<div className="text-label-sm font-label-sm text-secondary">Accuracy Class</div>
<div className="flex items-center space-x-1.5 mt-1">
<span className="font-metric-tabular text-headline-sm text-primary font-bold">( III )</span>
<span className="text-label-sm text-secondary uppercase font-medium">Medium</span>
</div>
</div>
<div className="p-3 bg-surface-container-lowest rounded-lg shadow-sm">
<div className="text-label-sm font-label-sm text-secondary">Maximum Capacity (Max)</div>
<div className="font-metric-tabular text-headline-sm text-primary font-bold mt-1">100.000 kg</div>
</div>
<div className="p-3 bg-surface-container-lowest rounded-lg shadow-sm">
<div className="text-label-sm font-label-sm text-secondary">Min Capacity (Min = 20 e)</div>
<div className="font-metric-tabular text-headline-sm text-primary font-bold mt-1">0.200 kg</div>
</div>
<div className="p-3 bg-surface-container-lowest rounded-lg shadow-sm">
<div className="text-label-sm font-label-sm text-secondary">Target Condition</div>
<div className="font-metric-tabular text-headline-sm text-tertiary font-bold mt-1">Gross Zero</div>
</div>
</div>
{/*  Config Sub-matrix & SOP Directive  */}
<div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<div className="text-label-sm font-label-sm text-secondary uppercase tracking-wider">Test Variant &amp; Protocol</div>
<div className="text-body-md font-body-md font-semibold text-primary">Standard Zero-Tracking &amp; Zero-Setting Test</div>
<div className="text-body-sm font-body-sm text-secondary">Observation Sequence: Sequential Zero Verification</div>
</div>
<div className="space-y-2">
<div className="text-label-sm font-label-sm text-secondary uppercase tracking-wider">Operational Parameter</div>
<div className="text-body-md font-body-md font-semibold text-primary">Indication &amp; Stability Monitoring (e/4 resolution)</div>
<div className="text-body-sm font-body-sm text-secondary">Reference State: No Load / Deadweight Tare Removed</div>
</div>
<div className="bg-surface-container-low p-3.5 rounded-lg flex items-start space-x-3">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">info</span>
<div className="text-body-sm font-body-sm text-on-surface">
            Applicable observation steps and acceptance criteria are determined by the configured test program and rule set. The system records observed values and calculates delta; regulatory compliance envelope is evaluated in Step 05.
          </div>
</div>
</div>
</div>
{/*  2. SECTION 2 — INITIAL ZERO CONDITION PANEL  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-6">
<div className="flex items-center justify-between pb-4">
<div>
<h2 className="font-headline-sm text-headline-sm text-primary font-semibold flex items-center space-x-2">
<span>Initial Zero Condition</span>
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
</h2>
<p className="text-body-sm font-body-sm text-secondary mt-0.5">
            Record the baseline instrument state before applying load cycles or zero-setting operations.
          </p>
</div>
<div className="flex items-center space-x-2 bg-surface-container-low px-3 py-1.5 rounded-lg text-label-sm font-label-sm text-secondary">
<span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
<span>Logged: 06 Sep 2026, 11:30:15 UTC</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
{/*  Instrument State Selector  */}
<div>
<label className="block text-label-sm font-label-sm font-semibold text-primary mb-1.5">
            Instrument Stability Flag
          </label>
<div className="relative">
<select className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md px-3 py-2 rounded-md appearance-none focus:bg-surface-container-lowest transition cursor-pointer">
<option >Stable [-&gt;0&lt;- Indicator Active]</option>
<option>Motion Active [Transient / Settling]</option>
<option>Center of Zero Indicator Inactive</option>
<option>Gross Zero Outside Normal Band</option>
</select>
<span className="material-symbols-outlined text-secondary absolute right-2.5 top-2.5 pointer-events-none text-[18px]">expand_more</span>
</div>
<span className="text-label-sm font-label-sm text-secondary mt-1 block">Visual indication verified by observer</span>
</div>
{/*  Initial Indication Input  */}
<div>
<label className="block text-label-sm font-label-sm font-semibold text-primary mb-1.5">
            Initial Zero Indication
          </label>
<div className="flex items-center bg-surface-container-low rounded-md overflow-hidden">
<input className="w-full bg-transparent px-3 py-2 text-right font-metric-tabular text-body-lg font-bold text-primary focus:outline-none" type="text" defaultValue="0.000"/>
<span className="px-3 py-2 bg-surface-container-high text-label-md font-label-md text-secondary font-semibold">kg</span>
</div>
<span className="text-label-sm font-label-sm text-secondary mt-1 block">Baseline offset for relative delta computation</span>
</div>
{/*  Mechanism Actuated Checkbox  */}
<div className="flex flex-col justify-center">
<label className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-surface-container-low transition">
<input defaultChecked="" className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox"/>
<div className="flex flex-col">
<span className="font-label-md font-label-md text-primary font-semibold">Zero-Setting Device Actuated</span>
<span className="text-body-sm font-body-sm text-secondary mt-0.5">SOP zero-key pressed prior to recording baseline indication</span>
</div>
</label>
</div>
</div>
{/*  Environmental / Receptor Observation  */}
<div className="mt-4 pt-4">
<label className="block text-label-sm font-label-sm font-semibold text-primary mb-1.5">
          Zero-Setting &amp; Environmental Field Notes
        </label>
<div className="p-3 bg-surface-container-low rounded-lg text-body-sm font-body-sm text-on-surface">
          Receptor clear of dust/particulates; optical draft shields latched. Zero settled within 1.2s of tare release. Ambient temperature logged at 20.4°C with relative humidity 48%.
        </div>
</div>
</div>
{/*  3. SECTION 3 — MAIN OBSERVATION SEQUENCE TABLE  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<div className="flex items-center space-x-2">
<h2 className="font-headline-sm text-headline-sm text-primary font-semibold">Zero Observations Sequence</h2>
<span className="px-2 py-0.5 bg-surface-container-high text-primary font-metric-tabular text-label-sm rounded font-bold">3 / 3 LOGGED</span>
</div>
<p className="text-body-sm font-body-sm text-secondary mt-0.5">
            Record the observed indication for each configured observation step. Change from initial is auto-calculated with cryptographic audit tracking.
          </p>
</div>
{/*  Table Operations  */}
<div className="flex items-center space-x-2">
<button className="px-3 py-1.5 bg-surface-container-low hover:bg-surface-container-high text-primary text-label-sm font-label-sm font-semibold rounded transition flex items-center space-x-1">
<span className="material-symbols-outlined text-[16px]">add</span>
<span>Add Step</span>
</button>
<button className="px-3 py-1.5 bg-surface-container-low hover:bg-surface-container-high text-secondary text-label-sm font-label-sm font-semibold rounded transition flex items-center space-x-1">
<span className="material-symbols-outlined text-[16px]">delete</span>
<span>Remove </span>
</button>
<button className="px-3 py-1.5 bg-surface-container-low hover:bg-surface-container-high text-secondary text-label-sm font-label-sm font-semibold rounded transition flex items-center space-x-1">
<span className="material-symbols-outlined text-[16px]">restart_alt</span>
<span>Reset Observations</span>
</button>
</div>
</div>
{/*  Interactive Data Grid  */}
<div className="overflow-x-auto">
<table className="w-full text-left font-body-md text-body-md">
<thead>
<tr className="bg-surface-container-low text-secondary text-label-sm font-label-sm uppercase tracking-wider">
<th className="py-3 px-4 w-16 text-center">Step</th>
<th className="py-3 px-4">Condition / Procedure Step</th>
<th className="py-3 px-4 w-44 text-right">Observed Indication</th>
<th className="py-3 px-4 w-44 text-right">Change from Initial</th>
<th className="py-3 px-4 w-36 text-center">Stability State</th>
<th className="py-3 px-4 w-32 text-center">Status</th>
<th className="py-3 px-4">Technician Remarks</th>
<th className="py-3 px-3 w-12 text-center"></th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
{/*  Row 01  */}
<tr className="hover:bg-surface-container-low/40 transition">
<td className="py-3 px-4 text-center font-metric-tabular font-bold text-primary">01</td>
<td className="py-3 px-4">
<div className="font-semibold text-primary">Initial Zero Baseline</div>
<div className="text-label-sm text-secondary">Pre-load reference condition</div>
</td>
<td className="py-3 px-4 text-right">
<div className="inline-flex items-center bg-surface-container-low rounded px-2.5 py-1">
<input className="w-20 bg-transparent text-right font-metric-tabular font-bold text-primary focus:outline-none" type="text" defaultValue="0.000"/>
<span className="text-label-sm text-secondary ml-1.5 font-medium">kg</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<span className="font-metric-tabular font-bold text-secondary">0.000 kg</span>
<span className="text-label-sm text-outline ml-1">[REF]</span>
</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 bg-surface-container-low text-primary font-label-sm rounded font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-1.5"></span>
                  Stable
                </span>
</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded font-label-sm font-bold bg-surface-container-low text-tertiary">
                  RECORDED ✓
                </span>
</td>
<td className="py-3 px-4 text-body-sm font-body-sm text-secondary">
                Center zero indicator illuminated; verified optical display
              </td>
<td className="py-3 px-3 text-center">
<button className="text-outline hover:text-primary transition">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
{/*  Row 02  */}
<tr className="hover:bg-surface-container-low/40 transition">
<td className="py-3 px-4 text-center font-metric-tabular font-bold text-primary">02</td>
<td className="py-3 px-4">
<div className="font-semibold text-primary">After Configured Load Operation (Off-load)</div>
<div className="text-label-sm text-secondary">Unloaded post 20 kg dwell period (15 seconds)</div>
</td>
<td className="py-3 px-4 text-right">
<div className="inline-flex items-center bg-surface-container-low rounded px-2.5 py-1">
<input className="w-20 bg-transparent text-right font-metric-tabular font-bold text-primary focus:outline-none" type="text" defaultValue="0.010"/>
<span className="text-label-sm text-secondary ml-1.5 font-medium">kg</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<span className="font-metric-tabular font-bold text-tertiary">+0.010 kg</span>
<span className="text-label-sm text-outline ml-1">[AUTO]</span>
</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 bg-surface-container-low text-primary font-label-sm rounded font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-1.5"></span>
                  Stable
                </span>
</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded font-label-sm font-bold bg-surface-container-low text-tertiary">
                  RECORDED ✓
                </span>
</td>
<td className="py-3 px-4 text-body-sm font-body-sm text-secondary">
                Immediate return post-cycle; no hysteresis hang observed
              </td>
<td className="py-3 px-3 text-center">
<button className="text-outline hover:text-primary transition">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
{/*  Row 03  */}
<tr className="hover:bg-surface-container-low/40 transition">
<td className="py-3 px-4 text-center font-metric-tabular font-bold text-primary">03</td>
<td className="py-3 px-4">
<div className="font-semibold text-primary">Return to Zero Condition (Settled)</div>
<div className="text-label-sm text-secondary">Final stabilized rest state after 30s elapsed</div>
</td>
<td className="py-3 px-4 text-right">
<div className="inline-flex items-center bg-surface-container-low rounded px-2.5 py-1">
<input className="w-20 bg-transparent text-right font-metric-tabular font-bold text-primary focus:outline-none" type="text" defaultValue="0.000"/>
<span className="text-label-sm text-secondary ml-1.5 font-medium">kg</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<span className="font-metric-tabular font-bold text-secondary">0.000 kg</span>
<span className="text-label-sm text-outline ml-1">[AUTO]</span>
</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 bg-surface-container-low text-primary font-label-sm rounded font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-1.5"></span>
                  Stable
                </span>
</td>
<td className="py-3 px-4 text-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded font-label-sm font-bold bg-surface-container-low text-tertiary">
                  RECORDED ✓
                </span>
</td>
<td className="py-3 px-4 text-body-sm font-body-sm text-secondary">
                Final baseline restabilized cleanly; auto zero-track dormant
              </td>
<td className="py-3 px-3 text-center">
<button className="text-outline hover:text-primary transition">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Cryptographic Audit Footnote  */}
<div className="px-5 py-3 bg-surface-container-low flex flex-wrap items-center justify-between text-label-sm font-label-sm text-secondary">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
<span>Enforced Formula: Change = Indication(n) - Initial Zero Indication. Manual calculation override restricted.</span>
</div>
<div className="font-metric-tabular text-on-surface">
          SHA-256: <span className="font-bold">e4f82a90...4d17</span> • <span className="text-tertiary font-bold">AUDIT HASH VALID</span>
</div>
</div>
</div>
{/*  4. LOWER 4-COLUMN TECHNICAL & METROLOGICAL METRICS  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{/*  Col 1: Calculated Summary  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-5 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-3">
<h3 className="font-headline-sm text-headline-sm text-primary font-semibold">Calculated Summary</h3>
<span className="material-symbols-outlined text-secondary text-[20px]">calculate</span>
</div>
<div className="space-y-3 pt-2">
<div className="flex items-center justify-between">
<span className="text-body-sm font-body-sm text-secondary">Observations Completed</span>
<span className="font-metric-tabular font-bold text-primary">3 / 3</span>
</div>
<div className="flex items-center justify-between">
<span className="text-body-sm font-body-sm text-secondary">Initial Zero Indication</span>
<span className="font-metric-tabular font-bold text-on-surface">0.000 kg</span>
</div>
<div className="flex items-center justify-between">
<span className="text-body-sm font-body-sm text-secondary">Final Recorded Indication</span>
<span className="font-metric-tabular font-bold text-on-surface">0.000 kg</span>
</div>
<div className="flex items-center justify-between">
<span className="text-body-sm font-body-sm text-secondary">Max Change from Initial</span>
<span className="font-metric-tabular font-bold text-tertiary">+0.010 kg</span>
</div>
<div className="flex items-center justify-between">
<span className="text-body-sm font-body-sm text-secondary">Stable Indications</span>
<span className="font-metric-tabular font-bold text-primary">3 / 3 (100%)</span>
</div>
</div>
</div>
<div className="mt-4 pt-3 text-label-sm font-label-sm text-secondary bg-surface-container-low p-2 rounded">
          Calculated automatically from recorded raw observations.
        </div>
</div>
{/*  Col 2: Zero Condition Stability Visualizer  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-5 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-2">
<h3 className="font-headline-sm text-headline-sm text-primary font-semibold">Zero Stability Baseline</h3>
<span className="text-label-sm font-label-sm text-secondary">Window: 10s</span>
</div>
<p className="text-body-sm font-body-sm text-secondary mb-3">Relative drift envelope &amp; return behavior</p>
{/*  Technical Sparkline Chart  */}
<div className="w-full h-28 bg-surface-container-low rounded-lg p-3 relative flex flex-col justify-between overflow-hidden">
{/*  Reference band  */}
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-surface-container-highest/40 pointer-events-none"></div>
<div className="absolute inset-x-0 top-1/2 h-px bg-outline-variant"></div>
<div className="flex justify-between text-label-sm font-label-sm text-secondary z-10">
<span>+0.020 kg (+2e)</span>
<span className="text-tertiary font-bold">TOLERANCE BAND</span>
</div>
{/*  Inline SVG Curve  */}
<svg className="w-full h-12 z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 200 40">
{/*  Path from 0 (20) to +0.010 (12) to 0 (20)  */}
<path className="text-tertiary" d="M 10,20 L 60,20 Q 90,20 100,10 T 140,20 L 190,20" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
{/*  Data Points  */}
<circle className="fill-primary stroke-surface-container-lowest" cx="20" cy="20" r="3.5" strokeWidth="2"></circle>
<circle className="fill-tertiary stroke-surface-container-lowest" cx="100" cy="10" r="3.5" strokeWidth="2"></circle>
<circle className="fill-primary stroke-surface-container-lowest" cx="180" cy="20" r="3.5" strokeWidth="2"></circle>
</svg>
<div className="flex justify-between text-label-sm font-label-sm text-secondary z-10">
<span>Step 01 (0.000)</span>
<span>Step 02 (+0.010)</span>
<span>Step 03 (0.000)</span>
</div>
</div>
</div>
<div className="mt-3 flex items-center space-x-1.5 text-label-sm font-label-sm text-tertiary font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Stable • Indication settled within window</span>
</div>
</div>
{/*  Col 3: Data Validation Gate  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-5 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-3">
<h3 className="font-headline-sm text-headline-sm text-primary font-semibold">Validation Gate</h3>
<span className="material-symbols-outlined text-tertiary text-[20px]">fact_check</span>
</div>
<div className="space-y-2 pt-1">
<div className="flex items-center space-x-2 text-body-sm font-body-sm text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[18px]">done</span>
<span>3 required observations captured</span>
</div>
<div className="flex items-center space-x-2 text-body-sm font-body-sm text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[18px]">done</span>
<span>Values conform to resolution (10 g)</span>
</div>
<div className="flex items-center space-x-2 text-body-sm font-body-sm text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[18px]">done</span>
<span>Stability active during captures</span>
</div>
<div className="flex items-center space-x-2 text-body-sm font-body-sm text-on-surface">
<span className="material-symbols-outlined text-tertiary text-[18px]">done</span>
<span>Derived deltas auto-synchronized</span>
</div>
</div>
</div>
<div className="mt-4 p-2.5 bg-surface-container-low rounded-lg text-center font-label-sm font-label-sm text-tertiary font-bold tracking-wider">
          OBSERVATIONS VALIDATED ✓ READY
        </div>
</div>
{/*  Col 4: Applicable Evaluation Rules Panel  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-5 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-3">
<h3 className="font-headline-sm text-headline-sm text-primary font-semibold">Evaluation Rules</h3>
<span className="material-symbols-outlined text-secondary text-[20px]">gavel</span>
</div>
<div className="space-y-2.5 pt-1 text-body-sm font-body-sm">
<div className="flex justify-between">
<span className="text-secondary">Standard</span>
<span className="font-semibold text-primary">OIML R 76-1</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Rule Set</span>
<span className="font-semibold text-primary">R76-2026.1-NAWI</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Evaluation</span>
<span className="font-semibold text-primary">Type Evaluation (Class III)</span>
</div>
</div>
<div className="mt-4 p-2 bg-surface-container-low rounded text-center text-label-sm font-label-sm font-bold text-secondary uppercase">
            Pending Step 05 Compliance
          </div>
</div>
<div className="mt-3 text-label-sm font-label-sm text-secondary">
          Official zero-setting and zero-tracking maximum permissible error thresholds evaluated downstream.
        </div>
</div>
</div>
{/*  5. PROCEDURE EXECUTION CHECKLIST & TECHNICIAN FIELD NOTES  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Checklist  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-5">
<h3 className="font-headline-sm text-headline-sm text-primary font-semibold mb-3 flex items-center space-x-2">
<span>Execution Attestation Checklist</span>
<span className="material-symbols-outlined text-[18px] text-tertiary">checklist</span>
</h3>
<div className="space-y-3">
<label className="flex items-start space-x-3 cursor-pointer">
<input defaultChecked="" className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox"/>
<span className="text-body-sm font-body-sm text-on-surface">
              Instrument was in the configured no-load zero condition prior to cycle start.
            </span>
</label>
<label className="flex items-start space-x-3 cursor-pointer">
<input defaultChecked="" className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox"/>
<span className="text-body-sm font-body-sm text-on-surface">
              Indication was allowed to stabilize with stable zero symbol active before recording observations.
            </span>
</label>
<label className="flex items-start space-x-3 cursor-pointer">
<input defaultChecked="" className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox"/>
<span className="text-body-sm font-body-sm text-on-surface">
              Applicable zero-setting procedure was executed in strict accordance with laboratory SOP ZERO-OIML-R76.
            </span>
</label>
<label className="flex items-start space-x-3 cursor-pointer">
<input defaultChecked="" className="mt-1 w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary" type="checkbox"/>
<span className="text-body-sm font-body-sm text-on-surface">
              Observations were recorded immediately after each configured step without secondary adjustments.
            </span>
</label>
</div>
</div>
{/*  Technician Notes  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-5 flex flex-col justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-semibold mb-2 flex items-center justify-between">
<span>Technician Field Notes &amp; Observations</span>
<span className="text-label-sm font-label-sm text-secondary font-normal">Audit Logged</span>
</h3>
<textarea className="w-full bg-surface-container-low text-body-sm font-body-sm text-on-surface p-3 rounded-lg focus:outline-none focus:bg-surface-container-lowest transition resize-none" rows="4" defaultValue={"Tested zero return behavior after full-span 20kg pre-loading sequence. Digital filter response time nominal; zero tracking mechanism operational without zero creep. All 3 cycles settled rapidly."} />
</div>
<div className="mt-2 flex items-center justify-between text-label-sm font-label-sm text-secondary">
<span>Author: A. Kumar (TECH-409)</span>
<span>Digital Signature Token: 0x93FA...A29C</span>
</div>
</div>
</div>
{/*  6. STAGE 06 EVIDENCE PREREQUISITE CALLOUT  */}
<div className="bg-surface-container-low rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-start space-x-3">
<span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">attachment</span>
<div>
<div className="font-semibold text-primary font-label-lg text-label-lg">Stage 06 Evidence Notice</div>
<div className="text-body-sm font-body-sm text-secondary mt-0.5">
            Calibration standard weight certificates, zero display photos, and physical seal integrity will be reviewed and digitally signed during Step 06 Evidence.
          </div>
</div>
</div>
<button className="px-4 py-2 bg-surface-container-lowest hover:bg-surface-container-high text-primary font-label-sm font-label-sm font-semibold rounded-lg shadow-sm transition shrink-0">
        Add Attachments Later
      </button>
</div>
</div>
{/*  STICKY BOTTOM ACTIONS & COMPLIANCE TRANSITION BAR  */}
<div className="sticky bottom-0 z-20 w-full bg-surface-container-lowest shadow-xl px-6 py-4">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
{/*  Left: Back Navigation  */}
<button className="inline-flex items-center space-x-2 text-secondary hover:text-primary font-label-md font-label-md font-semibold transition">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Previous Test: Eccentric Loading</span>
</button>
{/*  Center: Audit Stamp & State  */}
<div className="text-label-sm font-label-sm text-secondary text-center">
        Last modified by <span className="font-semibold text-primary">A. Kumar</span> • 06 Sep 2026, 11:32 AM • <span className="text-tertiary font-semibold">Auto-save active</span> • VeriScale Metrology Engine v4.2.1
      </div>
{/*  Right: Main Workflow CTAs  */}
<div className="flex items-center space-x-3">
<button className="px-4 py-2 bg-surface-container-low hover:bg-surface-container-high text-primary font-label-md font-label-md font-semibold rounded transition">
          Save Draft
        </button>
<button className="px-4 py-2 bg-surface-container-low hover:bg-surface-container-high text-tertiary font-label-md font-label-md font-bold rounded transition flex items-center space-x-1.5">
<span className="material-symbols-outlined text-[18px]">check</span>
<span>Mark Test Complete</span>
</button>
<button className="px-5 py-2.5 bg-primary hover:bg-primary-container text-on-primary font-label-md font-label-md font-bold rounded shadow transition flex items-center space-x-2">
<span>Next: Step 05 Compliance Assessment</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div></main>
    </div>
  );
}
