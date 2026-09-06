import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function ComplianceAssessment() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full">
{/*  Master Metrology Layout Shell  */}
<div className="flex w-full min-h-[calc(100vh-1rem)] bg-background font-body-md text-on-surface">
{/*  LEFT SIDEBAR (Laboratory Navigation Pane: 248px)  */}
<aside className="w-64 flex-shrink-0 bg-primary text-on-primary flex flex-col justify-between shadow-xl select-none">
<div className="flex flex-col">
{/*  VeriScale Brand Header  */}
<div className="px-space-lg py-space-xl flex items-center gap-space-sm bg-inverse-surface/30">
<div className="w-8 h-8 rounded bg-on-tertiary-container flex items-center justify-center text-primary font-headline-md font-bold tracking-tighter shadow-sm">
            VS
          </div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-on-primary font-bold tracking-tight">VeriScale™</span>
<span className="font-label-sm text-primary-fixed-dim uppercase tracking-widest text-[10px]">Metrology Laboratory</span>
</div>
</div>
{/*  Workflow Stage Tracker (8-Stage OIML Lifecycle)  */}
<div className="px-space-md py-space-sm">
<span className="px-space-sm py-space-xs text-[10px] font-label-sm font-bold uppercase tracking-wider text-on-primary-container block mb-space-xs">
            Test Workflow (TEST-012)
          </span>
<nav className="flex flex-col gap-0.5">
{/*  01 Instrument  */}
<div className="flex items-center gap-space-sm px-space-sm py-1.5 rounded text-primary-fixed-dim font-label-md">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>
<span className="truncate">01 Instrument</span>
</div>
{/*  02 Conditions  */}
<div className="flex items-center gap-space-sm px-space-sm py-1.5 rounded text-primary-fixed-dim font-label-md">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>
<span className="truncate">02 Conditions</span>
</div>
{/*  03 Test Selection  */}
<div className="flex items-center gap-space-sm px-space-sm py-1.5 rounded text-primary-fixed-dim font-label-md">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>
<span className="truncate">03 Test Selection</span>
</div>
{/*  04 Observations  */}
<div className="flex items-center gap-space-sm px-space-sm py-1.5 rounded text-primary-fixed-dim font-label-md">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">check_circle</span>
<span className="truncate">04 Observations</span>
</div>
{/*  05 Compliance (ACTIVE)  */}
<div className="flex items-center justify-between px-space-sm py-2 rounded bg-surface-container-lowest/10 text-on-primary font-label-md font-semibold shadow-inner">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-fixed">radio_button_checked</span>
<span className="text-on-primary">05 Compliance</span>
</div>
<span className="w-2 h-2 rounded-full bg-tertiary-fixed shadow-[0_0_8px_#8cf3f3]"></span>
</div>
{/*  06 Evidence  */}
<div className="flex items-center gap-space-sm px-space-sm py-1.5 rounded text-on-primary-container/70 font-label-md">
<span className="material-symbols-outlined text-[16px]">radio_button_unchecked</span>
<span className="truncate">06 Evidence</span>
</div>
{/*  07 Review  */}
<div className="flex items-center gap-space-sm px-space-sm py-1.5 rounded text-on-primary-container/70 font-label-md">
<span className="material-symbols-outlined text-[16px]">radio_button_unchecked</span>
<span className="truncate">07 Review</span>
</div>
{/*  08 Report  */}
<div className="flex items-center gap-space-sm px-space-sm py-1.5 rounded text-on-primary-container/70 font-label-md">
<span className="material-symbols-outlined text-[16px]">radio_button_unchecked</span>
<span className="truncate">08 Certificate &amp; Report</span>
</div>
</nav>
</div>
{/*  Telemetry Diagnostic Widget in Sidebar  */}
<div className="mx-space-md my-space-sm p-space-sm rounded bg-inverse-surface/40 flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-[10px] text-primary-fixed-dim">
<span className="uppercase">Scale I/O</span>
<span className="text-tertiary-fixed font-bold tracking-wide">ONLINE</span>
</div>
<div className="flex items-center justify-between font-metric-tabular text-body-sm text-on-primary">
<span>COM1: 9600 BAUD</span>
<span className="material-symbols-outlined text-[14px] text-tertiary-fixed">sensors</span>
</div>
<div className="text-[10px] font-label-sm text-on-primary-container truncate">
            Kernel: OIML R 76-1 v2026.1
          </div>
</div>
</div>
{/*  User Authentication & Laboratory Node Footer  */}
<div className="p-space-md bg-inverse-surface/60 flex items-center gap-space-sm">
<div className="w-8 h-8 rounded bg-primary-fixed-dim text-on-primary-fixed flex items-center justify-center font-headline-sm font-semibold">
          MS
        </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-on-primary truncate font-semibold">Manan Sharma</span>
<span className="font-body-sm text-[11px] text-primary-fixed-dim truncate">Administrator (ISO/IEC 17025)</span>
</div>
</div>
</aside>
{/*  RIGHT MAIN CONTENT WORKSPACE  */}
<div className="flex-1 flex flex-col min-w-0">
{/*  TOP STATUS & TELEMETRY STRIP  */}
<div className="bg-surface-container-lowest px-space-xl py-space-xs flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-md text-body-sm">
<div className="flex items-center gap-1 text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-[16px] text-on-tertiary-container">router</span>
<span className="font-metric-tabular">COM1: 9600 BAUD [ONLINE]</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1 text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-[16px] text-secondary">gavel</span>
<span>RULE ENGINE: <span className="font-semibold text-primary">OIML R 76 v2026.1 ACTIVE</span></span>
</div>
<span className="text-outline-variant">•</span>
<span className="font-label-sm text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-on-tertiary-container">sync</span> Autosaved 4s ago
          </span>
</div>
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center px-2 py-0.5 rounded font-label-sm text-[11px] font-bold bg-surface-container-high text-primary">
            LEGAL METROLOGY MODE
          </span>
<span className="inline-flex items-center px-2 py-0.5 rounded font-label-sm text-[11px] font-bold bg-surface-container-low text-secondary">
            ISO/IEC 17025 ACCREDITED
          </span>
</div>
</div>
{/*  MAIN HEADER / BREADCRUMB & PRIMARY CONTROLS  */}
<header className="bg-surface-container-lowest px-space-xl py-space-md flex flex-wrap items-center justify-between gap-space-md shadow-sm">
<div className="flex flex-col min-w-0">
<nav className="flex items-center gap-1 font-label-sm text-secondary uppercase tracking-wider text-[11px] mb-1">
<span>Tests</span>
<span className="material-symbols-outlined text-[12px]">chevron_right</span>
<span className="font-semibold text-primary">TEST-012</span>
<span className="material-symbols-outlined text-[12px]">chevron_right</span>
<span className="text-on-surface">Compliance Assessment</span>
</nav>
<div className="flex items-center gap-space-md">
<h1 className="font-headline-lg text-primary tracking-tight">Compliance Assessment</h1>
<span className="px-2.5 py-0.5 rounded font-label-sm text-[11px] font-bold bg-surface-container-high text-primary tracking-wider uppercase">
              Class III NAWI
            </span>
</div>
<p className="font-body-sm text-on-surface-variant mt-0.5">
            Evaluate observed metrological data against legal thresholds mandated by OIML R 76-1:2006.
          </p>
</div>
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-1.5 rounded bg-surface-container-low text-primary font-label-md flex items-center gap-1.5 hover:bg-surface-container-high transition shadow-sm" >
<span className="material-symbols-outlined text-[16px] text-secondary">calculate</span>
<span>Recalculate</span>
</button>
<button className="px-space-md py-1.5 rounded bg-surface-container-low text-on-surface font-label-md flex items-center gap-1.5 hover:bg-surface-container-high transition shadow-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">save</span>
<span>Save Assessment</span>
</button>
<button className="px-space-md py-1.5 rounded bg-surface-container-lowest text-secondary font-label-md flex items-center gap-1 hover:bg-surface-container-low transition">
<span className="material-symbols-outlined text-[16px]">close</span>
<span>Exit</span>
</button>
</div>
</header>
{/*  SCROLLABLE BODY AREA  */}
<div className="flex-1 overflow-y-auto px-space-xl py-space-lg space-y-space-lg">
{/*  TECHNICAL METADATA STRIP  */}
<section className="bg-surface-container-lowest p-space-md rounded shadow-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-space-md text-body-sm">
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider">Test Record ID</span>
<span className="font-metric-tabular font-bold text-primary">TEST-012</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider">Instrument</span>
<span className="font-label-md font-semibold text-on-surface truncate">ABC WeighTech WT-100</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider">Serial Number</span>
<span className="font-metric-tabular text-on-surface">WT100-2026-001</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider">Testing Facility</span>
<span className="font-label-md text-on-surface truncate">XYZ Metrology Lab</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider">Lead Technician</span>
<span className="font-label-md text-on-surface truncate">A. Kumar (TECH-409)</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider">Assessment Date</span>
<span className="font-metric-tabular text-on-surface">06 Sep 2026</span>
</div>
<div className="flex flex-col justify-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-[11px] font-bold bg-surface-container-highest text-primary">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse"></span>
              CALCULATED &amp; VERIFIED
            </span>
</div>
</section>
{/*  OVERALL COMPLIANCE HERO CARD (Restrained Precision Authority)  */}
<section className="bg-surface-container-lowest rounded p-space-lg shadow-sm relative overflow-hidden">
{/*  Subtle top subtle accent stripe  */}
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-on-tertiary-container via-primary to-surface-tint"></div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md">
<div className="flex items-center gap-space-sm text-body-sm text-secondary">
<span className="font-label-sm uppercase font-semibold text-primary">Rule Set:</span>
<span className="font-metric-tabular font-semibold">OIML R 76 — R76-2026.1</span>
<span>•</span>
<span className="font-label-sm uppercase font-semibold text-primary">Program:</span>
<span>Type Evaluation (Class III NAWI)</span>
<span>•</span>
<span className="font-label-sm uppercase font-semibold text-primary">Timestamp:</span>
<span className="font-metric-tabular">06 Sep 2026, 12:46 PM UTC</span>
</div>
<a className="inline-flex items-center gap-1 font-label-sm text-[12px] text-on-tertiary-container font-semibold hover:underline" href="#citation">
<span>Regulatory Citation: OIML R 76-1:2006</span>
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center pt-space-xs">
{/*  Core Metrological Verdict (Col 1-7)  */}
<div className="lg:col-span-7 flex items-center gap-space-lg">
<div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 shadow-inner">
<span className="material-symbols-outlined text-[36px] text-tertiary-container font-bold" style={{"fontVariationSettings":"'FILL' 1"}}>
                  verified
                </span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-metric-display text-primary text-[32px] tracking-tight">✓ PASS</span>
<span className="px-2.5 py-0.5 rounded font-label-sm text-[11px] font-bold bg-surface-container-high text-primary uppercase tracking-wider">
                    Full Compliance Validated
                  </span>
</div>
<p className="font-body-md text-on-surface-variant font-medium mt-1">
                  All 12 evaluated metrological criteria satisfy the maximum permissible error (mpe) limits with zero non-conformances.
                </p>
<div className="flex items-center gap-space-md mt-space-sm text-[12px] font-label-md text-secondary">
<span>Confidence Level: <strong>95% (k=2)</strong></span>
<span>•</span>
<span>Uncertainty Budget: <strong>Enclosed &lt; 0.33 mpe</strong></span>
</div>
</div>
</div>
{/*  Quantitative Metrics Bento Strip (Col 8-12)  */}
<div className="lg:col-span-5 grid grid-cols-4 gap-space-sm p-space-sm bg-surface-container-low rounded">
<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col items-center justify-center text-center shadow-sm">
<span className="font-metric-display text-on-surface text-[22px] leading-6 font-bold">12/12</span>
<span className="font-label-sm text-[11px] text-on-surface-variant uppercase mt-1">Passed (100%)</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col items-center justify-center text-center shadow-sm">
<span className="font-metric-display text-on-surface text-[22px] leading-6 font-bold">0</span>
<span className="font-label-sm text-[11px] text-on-surface-variant uppercase mt-1">Failed</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col items-center justify-center text-center shadow-sm">
<span className="font-metric-display text-on-surface text-[22px] leading-6 font-bold">0</span>
<span className="font-label-sm text-[11px] text-on-surface-variant uppercase mt-1">Warnings</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded flex flex-col items-center justify-center text-center shadow-sm">
<span className="font-metric-display text-secondary text-[22px] leading-6 font-bold">0</span>
<span className="font-label-sm text-[11px] text-on-surface-variant uppercase mt-1">Pending</span>
</div>
</div>
</div>
</section>
{/*  HORIZONTAL PIPELINE: RULE-ENGINE EXECUTION FLOW  */}
<section className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm uppercase tracking-wider text-secondary font-bold text-[11px]">
              Compliance Execution Flow (Rule-Engine Kernel v4.2)
            </span>
<span className="font-metric-tabular text-[11px] text-secondary">Deterministic Pipeline: 5/5 Nodes Active</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm">
{/*  Node 1  */}
<div className="bg-surface-container-low p-space-sm rounded flex flex-col justify-between">
<div className="flex items-center justify-between text-[11px] font-label-sm text-secondary">
<span>01. OBSERVATIONS</span>
<span className="material-symbols-outlined text-[14px] text-on-tertiary-container">check_circle</span>
</div>
<div className="my-1 font-label-md font-semibold text-primary text-[13px]">18 Points Captured</div>
<span className="font-body-sm text-[11px] text-on-surface-variant">Step 04 observations locked</span>
</div>
{/*  Node 2  */}
<div className="bg-surface-container-low p-space-sm rounded flex flex-col justify-between">
<div className="flex items-center justify-between text-[11px] font-label-sm text-secondary">
<span>02. DERIVED DATA</span>
<span className="material-symbols-outlined text-[14px] text-on-tertiary-container">check_circle</span>
</div>
<div className="my-1 font-label-md font-semibold text-primary text-[13px]">Errors, Deltas &amp; Ranges</div>
<span className="font-body-sm text-[11px] text-on-surface-variant">Computed indications (E = I - L)</span>
</div>
{/*  Node 3  */}
<div className="bg-surface-container-low p-space-sm rounded flex flex-col justify-between">
<div className="flex items-center justify-between text-[11px] font-label-sm text-secondary">
<span>03. RULE APPLICATION</span>
<span className="material-symbols-outlined text-[14px] text-on-tertiary-container">check_circle</span>
</div>
<div className="my-1 font-label-md font-semibold text-primary text-[13px]">OIML R 76 Limits</div>
<span className="font-body-sm text-[11px] text-on-surface-variant">Table 6 Class III bounds applied</span>
</div>
{/*  Node 4  */}
<div className="bg-surface-container-low p-space-sm rounded flex flex-col justify-between">
<div className="flex items-center justify-between text-[11px] font-label-sm text-secondary">
<span>04. COMPARISON</span>
<span className="material-symbols-outlined text-[14px] text-on-tertiary-container">check_circle</span>
</div>
<div className="my-1 font-label-md font-semibold text-primary text-[13px]">Acceptance Envelope</div>
<span className="font-body-sm text-[11px] text-on-surface-variant">Observed vs. mpe boundary</span>
</div>
{/*  Node 5  */}
<div className="bg-surface-container p-space-sm rounded flex flex-col justify-between">
<div className="flex items-center justify-between text-[11px] font-label-sm text-primary">
<span className="font-bold">05. DECISION</span>
<span className="material-symbols-outlined text-[16px] text-primary">verified</span>
</div>
<div className="my-1 font-headline-sm text-primary font-bold text-[14px]">12 / 12 Criteria Met</div>
<span className="font-label-sm text-[11px] font-semibold text-on-tertiary-container">ASSESSMENT PASS</span>
</div>
</div>
</section>
{/*  SECTION 1 — COMPLIANCE RESULT MATRIX  */}
<section className="bg-surface-container-lowest rounded shadow-sm overflow-hidden">
<div className="px-space-lg py-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low/40">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">table_chart</span>
<h2 className="font-headline-sm text-primary">Compliance Results by Test Procedure</h2>
<span className="px-2 py-0.5 rounded font-label-sm text-[10px] uppercase font-bold bg-surface-container-highest text-primary">
                6 Metrological Modules
              </span>
</div>
<div className="flex items-center gap-space-sm text-body-sm">
<span className="font-label-sm text-secondary">Evaluation Baseline:</span>
<span className="font-metric-tabular font-bold text-primary">Initial Verification (v=1.0)</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-sm text-[11px] uppercase tracking-wider">
<th className="px-space-md py-space-sm font-semibold">Test Procedure</th>
<th className="px-space-md py-space-sm font-semibold">Observations</th>
<th className="px-space-md py-space-sm font-semibold">Calculated Result</th>
<th className="px-space-md py-space-sm font-semibold">Applicable Requirement</th>
<th className="px-space-md py-space-sm font-semibold">Margin / Delta</th>
<th className="px-space-md py-space-sm font-semibold">Decision</th>
<th className="px-space-md py-space-sm font-semibold text-right">Audit Trace</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container text-body-sm font-metric-tabular">
{/*  Row 1: Accuracy  */}
<tr className="hover:bg-surface-container-low/50 transition">
<td className="px-space-md py-space-sm font-label-md text-primary font-semibold">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
<span>Accuracy / Error of Indication</span>
</div>
</td>
<td className="px-space-md py-space-sm text-on-surface">5 Points Recorded</td>
<td className="px-space-md py-space-sm text-on-surface font-semibold">+0.012 kg <span className="text-secondary text-[11px] font-normal">(at 100 kg Max)</span></td>
<td className="px-space-md py-space-sm text-secondary">mpe ≤ ±0.015 kg <span className="text-[11px] text-on-surface-variant block font-label-sm font-normal">OIML R 76-1 § 3.5.1</span></td>
<td className="px-space-md py-space-sm">
<span className="text-on-tertiary-container font-semibold">+0.003 kg</span>
<span className="text-secondary text-[11px] font-normal block font-label-sm">20% margin</span>
</td>
<td className="px-space-md py-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-[11px] font-bold bg-surface-container-high text-primary">
                      ✓ PASS
                    </span>
</td>
<td className="px-space-md py-space-sm text-right">
<button className="px-2 py-1 rounded text-primary font-label-sm hover:bg-surface-container transition text-[11px] font-semibold" >
                      View Rule
                    </button>
</td>
</tr>
{/*  Row 2: Repeatability  */}
<tr className="hover:bg-surface-container-low/50 transition bg-surface-container-lowest">
<td className="px-space-md py-space-sm font-label-md text-primary font-semibold">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
<span>Repeatability (Clause 3.6.1)</span>
</div>
</td>
<td className="px-space-md py-space-sm text-on-surface">5 Trials (20 kg Load)</td>
<td className="px-space-md py-space-sm text-on-surface font-semibold">Range ΔI = 0.010 kg</td>
<td className="px-space-md py-space-sm text-secondary">Max spread ≤ 0.015 kg <span className="text-[11px] text-on-surface-variant block font-label-sm font-normal">OIML R 76-1 § 3.6.1</span></td>
<td className="px-space-md py-space-sm">
<span className="text-on-tertiary-container font-semibold">+0.005 kg</span>
<span className="text-secondary text-[11px] font-normal block font-label-sm">33% margin</span>
</td>
<td className="px-space-md py-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-[11px] font-bold bg-surface-container-high text-primary">
                      ✓ PASS
                    </span>
</td>
<td className="px-space-md py-space-sm text-right">
<button className="px-2 py-1 rounded text-primary font-label-sm hover:bg-surface-container transition text-[11px] font-semibold" >
                      View Rule
                    </button>
</td>
</tr>
{/*  Row 3: Eccentric Loading  */}
<tr className="hover:bg-surface-container-low/50 transition">
<td className="px-space-md py-space-sm font-label-md text-primary font-semibold">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
<span>Eccentric Loading</span>
</div>
</td>
<td className="px-space-md py-space-sm text-on-surface">5 Positions (P1–P5)</td>
<td className="px-space-md py-space-sm text-on-surface font-semibold">Max Dev = +0.020 kg <span className="text-secondary text-[11px] font-normal">(Pos P2)</span></td>
<td className="px-space-md py-space-sm text-secondary">mpe ≤ ±0.020 kg <span className="text-[11px] text-on-surface-variant block font-label-sm font-normal">OIML R 76-1 § 3.6.2</span></td>
<td className="px-space-md py-space-sm">
<span className="text-secondary font-semibold">0.000 kg</span>
<span className="text-secondary text-[11px] font-normal block font-label-sm">Limit boundary</span>
</td>
<td className="px-space-md py-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-[11px] font-bold bg-surface-container-high text-primary">
                      ✓ PASS
                    </span>
</td>
<td className="px-space-md py-space-sm text-right">
<button className="px-2 py-1 rounded text-primary font-label-sm hover:bg-surface-container transition text-[11px] font-semibold" >
                      View Rule
                    </button>
</td>
</tr>
{/*  Row 4: Zero Operations  */}
<tr className="hover:bg-surface-container-low/50 transition bg-surface-container-lowest">
<td className="px-space-md py-space-sm font-label-md text-primary font-semibold">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
<span>Zero / Zero-Related Checks</span>
</div>
</td>
<td className="px-space-md py-space-sm text-on-surface">3 Steps Recorded</td>
<td className="px-space-md py-space-sm text-on-surface font-semibold">Max Δ = +0.010 kg <span className="text-secondary text-[11px] font-normal">(Off-load)</span></td>
<td className="px-space-md py-space-sm text-secondary">Zero return ≤ 0.25 e <span className="text-[11px] text-on-surface-variant block font-label-sm font-normal">OIML R 76-1 § A.4.4.2</span></td>
<td className="px-space-md py-space-sm">
<span className="text-on-tertiary-container font-semibold">Compliant</span>
<span className="text-secondary text-[11px] font-normal block font-label-sm">Inside 2.5 g tolerance</span>
</td>
<td className="px-space-md py-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-[11px] font-bold bg-surface-container-high text-primary">
                      ✓ PASS
                    </span>
</td>
<td className="px-space-md py-space-sm text-right">
<button className="px-2 py-1 rounded text-primary font-label-sm hover:bg-surface-container transition text-[11px] font-semibold" >
                      View Rule
                    </button>
</td>
</tr>
{/*  Row 5: Tare Operations  */}
<tr className="hover:bg-surface-container-low/50 transition">
<td className="px-space-md py-space-sm font-label-md text-primary font-semibold">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
<span>Tare Operations &amp; Balancing</span>
</div>
</td>
<td className="px-space-md py-space-sm text-on-surface">3 Steps (5 kg Tare)</td>
<td className="px-space-md py-space-sm text-on-surface font-semibold">Settled Offset = +0.010 kg</td>
<td className="px-space-md py-space-sm text-secondary">Subtractive Tare Envelope <span className="text-[11px] text-on-surface-variant block font-label-sm font-normal">OIML R 76-1 § 4.6</span></td>
<td className="px-space-md py-space-sm">
<span className="text-on-tertiary-container font-semibold">Within envelope</span>
<span className="text-secondary text-[11px] font-normal block font-label-sm">ΔNet within 1e</span>
</td>
<td className="px-space-md py-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-[11px] font-bold bg-surface-container-high text-primary">
                      ✓ PASS
                    </span>
</td>
<td className="px-space-md py-space-sm text-right">
<button className="px-2 py-1 rounded text-primary font-label-sm hover:bg-surface-container transition text-[11px] font-semibold" >
                      View Rule
                    </button>
</td>
</tr>
{/*  Row 6: Environmental Influence  */}
<tr className="hover:bg-surface-container-low/50 transition bg-surface-container-lowest">
<td className="px-space-md py-space-sm font-label-md text-primary font-semibold">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
<span>Environmental Influence</span>
</div>
</td>
<td className="px-space-md py-space-sm text-on-surface">3 Temps (23.5°C–28°C)</td>
<td className="px-space-md py-space-sm text-on-surface font-semibold">Max Span Dev = +0.012 kg</td>
<td className="px-space-md py-space-sm text-secondary">Span drift within envelope <span className="text-[11px] text-on-surface-variant block font-label-sm font-normal">OIML R 76-1 § 3.9.2</span></td>
<td className="px-space-md py-space-sm">
<span className="text-on-tertiary-container font-semibold">Within envelope</span>
<span className="text-secondary text-[11px] font-normal block font-label-sm">Stable chamber</span>
</td>
<td className="px-space-md py-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm text-[11px] font-bold bg-surface-container-high text-primary">
                      ✓ PASS
                    </span>
</td>
<td className="px-space-md py-space-sm text-right">
<button className="px-2 py-1 rounded text-primary font-label-sm hover:bg-surface-container transition text-[11px] font-semibold" >
                      View Rule
                    </button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Cryptographic Hash & Verification Tag Strip  */}
<div className="px-space-lg py-space-sm bg-surface-container-low flex flex-wrap items-center justify-between text-[11px] font-label-sm text-secondary">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[14px] text-on-tertiary-container">lock</span>
<span className="font-metric-tabular">SHA-256: 9b2d8fe102a4c876b009eef48b92d6e355c2d3a1f9a1288344e10</span>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-surface-container-highest font-bold text-primary">AUDIT VERIFIED</span>
<span className="font-metric-tabular">Deterministic Calculation Hash</span>
</div>
</div>
</section>
{/*  SECTION 2 — DEEP INSPECTION & CALCULATION TRACEABILITY  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/*  Left Card: Active Rule Evaluation Detail (Col 1-6)  */}
<section className="lg:col-span-6 bg-surface-container-lowest rounded p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">assignment_turned_in</span>
<h3 className="font-headline-sm text-primary" id="detailCardTitle">Active Rule Evaluation Detail</h3>
</div>
<span className="px-2 py-0.5 rounded font-label-sm text-[10px] font-bold bg-surface-container-high text-primary uppercase">
                  Class III Table 6
                </span>
</div>
<p className="font-body-sm text-secondary mb-space-md" id="detailCardSubtitle">
                Accuracy / Indication Error evaluated at maximum nominal capacity load of 100.000 kg.
              </p>
<div className="space-y-space-sm text-body-sm">
<div className="p-space-sm bg-surface-container-low rounded flex items-center justify-between">
<span className="font-label-sm text-secondary uppercase text-[11px]">Metrological Requirement</span>
<span className="font-label-md font-semibold text-primary">Maximum Permissible Error (mpe) at 100 kg</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded flex items-center justify-between">
<span className="font-label-sm text-secondary uppercase text-[11px]">Observed Indication (I)</span>
<span className="font-metric-tabular font-bold text-on-surface">100.012 kg</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded flex items-center justify-between">
<span className="font-label-sm text-secondary uppercase text-[11px]">Calibrated Standard Load (L)</span>
<span className="font-metric-tabular text-on-surface">100.000 kg (Class M1 Standard)</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded flex items-center justify-between">
<span className="font-label-sm text-secondary uppercase text-[11px]">Calculated Error (E = I - L)</span>
<span className="font-metric-tabular font-bold text-primary">+0.012 kg (+1.2 e)</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded flex items-center justify-between">
<span className="font-label-sm text-secondary uppercase text-[11px]">Permissible Error Envelope</span>
<span className="font-metric-tabular font-semibold text-secondary">-0.015 kg ≤ E ≤ +0.015 kg (±1.5 e)</span>
</div>
<div className="p-space-sm bg-surface-container-high/60 rounded flex items-center justify-between">
<span className="font-label-sm text-primary uppercase text-[11px] font-bold">Evaluation Comparison</span>
<span className="font-metric-tabular font-bold text-primary">|+0.012 kg| &lt; 0.015 kg → PASS</span>
</div>
</div>
</div>
<div className="pt-space-md text-[11px] font-label-sm text-secondary flex flex-wrap items-center justify-between gap-2">
<span className="truncate">Citation: OIML R 76-1:2006 Clause 3.5.1 / 2014/31/EU</span>
<span className="font-metric-tabular">Kernel: VeriScale Core v4.2.1</span>
</div>
</section>
{/*  Right Card: Calculation Trace Visualizer (Col 7-12)  */}
<section className="lg:col-span-6 bg-surface-container-lowest rounded p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">schema</span>
<h3 className="font-headline-sm text-primary">Calculation Trace Visualizer</h3>
</div>
<span className="font-label-sm text-[11px] text-on-tertiary-container font-semibold">Mathematical Integrity: Verified</span>
</div>
<p className="font-body-sm text-secondary mb-space-md">
                Algorithmic reduction path from physical transducer readings to legal boundary verdict.
              </p>
{/*  Step-by-Step Arithmetic Breakdown  */}
<div className="p-space-md bg-surface-container-low rounded space-y-2 font-metric-tabular text-body-sm">
<div className="flex items-center justify-between text-on-surface">
<span className="font-label-sm text-secondary uppercase text-[11px]">Indicated Reading (I):</span>
<span className="font-bold text-primary text-[15px]">100.012 kg</span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span className="font-label-sm text-secondary uppercase text-[11px]">− Reference Standard (L):</span>
<span className="font-semibold text-secondary">100.000 kg</span>
</div>
<div className="flex items-center justify-between pt-1 font-bold text-primary">
<span className="font-label-sm uppercase text-[11px]">Derived Indication Error (E):</span>
<span className="text-on-tertiary-container text-[16px]">+0.012 kg</span>
</div>
</div>
{/*  Visual Acceptance Envelope Gauge (SVG)  */}
<div className="mt-space-md p-space-sm bg-surface-container-lowest rounded flex flex-col gap-2">
<div className="flex items-center justify-between text-[11px] font-label-sm font-semibold">
<span className="text-error font-metric-tabular">-0.015 kg (Lower mpe)</span>
<span className="text-secondary font-metric-tabular">0.000 kg (Zero Nominal)</span>
<span className="text-error font-metric-tabular">+0.015 kg (Upper mpe)</span>
</div>
{/*  Custom SVG Visual Range Gauge  */}
<div className="w-full py-1">
<svg className="w-full h-10 overflow-visible" fill="none" viewBox="0 0 400 40" xmlns="http://www.w3.org/2000/svg">
{/*  Permissible Envelope Background  */}
<rect className="fill-surface-container-high" height="8" rx="4" width="320" x="40" y="16"></rect>
<rect className="fill-surface-container-highest" height="8" width="200" x="100" y="16"></rect>
{/*  Center Nominal Axis  */}
<line className="stroke-secondary" strokeDasharray="2 2" strokeWidth="2" x1="200" x2="200" y1="8" y2="32"></line>
{/*  mpe Boundary markers  */}
<line className="stroke-error" strokeWidth="2" x1="100" x2="100" y1="12" y2="28"></line>
<line className="stroke-error" strokeWidth="2" x1="300" x2="300" y1="12" y2="28"></line>
{/*  Observed Marker at +0.012 kg (scale mapped: 200 + (0.012 / 0.015) * 100 = 280)  */}
<circle className="fill-tertiary-container shadow-md" cx="280" cy="20" r="7"></circle>
<circle className="fill-surface-container-lowest" cx="280" cy="20" r="3"></circle>
{/*  Value Label Tag  */}
<g transform="translate(255, -2)">
<rect className="fill-primary" height="15" rx="3" width="50" x="0" y="0"></rect>
<text fill="#FFFFFF" fontFamily="IBM Plex Sans" fontSize="9" fontWeight="600" textAnchor="middle" x="25" y="11">+0.012 kg</text>
</g>
</svg>
</div>
<div className="flex items-center justify-between text-[11px] font-label-sm text-secondary">
<span>Envelope: Class III ±1.5 e</span>
<span className="text-primary font-bold">Observed Point is 80% to limit (PASS)</span>
</div>
</div>
</div>
<div className="pt-space-sm text-[11px] font-body-sm text-secondary">
              Logic dynamically applied based on OIML R 76 test category and instrument verification interval e=10g.
            </div>
</section>
</div>
{/*  SECTION 3 — SUPPORTING CONTEXT PANELS (3-Column Bento Grid)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Panel 1: Instrument Parameters Context  */}
<div className="bg-surface-container-lowest rounded p-space-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-xs mb-space-sm">
<span className="font-headline-sm text-primary text-[15px] flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-secondary">scale</span>
                  Instrument Parameters
                </span>
<span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-surface-container font-bold text-primary">
                  NAWI (III)
                </span>
</div>
<div className="space-y-2 text-body-sm font-metric-tabular">
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Manufacturer:</span>
<span className="text-on-surface font-semibold truncate">ABC WeighTech Pvt. Ltd.</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Model / Type:</span>
<span className="text-on-surface">WT-100 Industrial</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Interval (e / d):</span>
<span className="text-primary font-bold">10 g / 10 g</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Max / Min:</span>
<span className="text-on-surface">100.000 kg / 0.200 kg</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Approval Pattern:</span>
<span className="text-on-surface font-semibold">UK/0126/0049</span>
</div>
</div>
</div>
<div className="pt-space-sm mt-space-sm">
<a className="inline-flex items-center gap-1 font-label-sm text-[12px] text-on-tertiary-container font-semibold hover:underline" href="#">
<span>View Full Instrument Profile</span>
<span className="material-symbols-outlined text-[14px]">arrow_outward</span>
</a>
</div>
</div>
{/*  Panel 2: Laboratory Environmental Conditions  */}
<div className="bg-surface-container-lowest rounded p-space-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-xs mb-space-sm">
<span className="font-headline-sm text-primary text-[15px] flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-secondary">thermostat</span>
                  Laboratory Conditions
                </span>
<span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-surface-container font-bold text-primary">
                  ISO 17025
                </span>
</div>
<div className="space-y-2 text-body-sm font-metric-tabular">
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Mean Chamber Temp:</span>
<span className="text-on-surface font-semibold">23.8 °C (±0.4 °C)</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Relative Humidity:</span>
<span className="text-on-surface">49.2 %RH (Nominal)</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Atmospheric Pressure:</span>
<span className="text-on-surface">1011.8 hPa</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Thermal Stability:</span>
<span className="text-on-tertiary-container font-semibold">Verified (&lt;0.2°C/hr)</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Sensor Reference:</span>
<span className="text-on-surface truncate">Vaisala PTU300 (Cal: Nov 26)</span>
</div>
</div>
</div>
<div className="pt-space-sm mt-space-sm">
<a className="inline-flex items-center gap-1 font-label-sm text-[12px] text-on-tertiary-container font-semibold hover:underline" href="#">
<span>View Environmental Logs</span>
<span className="material-symbols-outlined text-[14px]">arrow_outward</span>
</a>
</div>
</div>
{/*  Panel 3: Rule Set & Governance  */}
<div className="bg-surface-container-lowest rounded p-space-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-xs mb-space-sm">
<span className="font-headline-sm text-primary text-[15px] flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-secondary">policy</span>
                  Rule Set &amp; Governance
                </span>
<span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-surface-container font-bold text-primary">
                  LOCKED
                </span>
</div>
<div className="space-y-2 text-body-sm font-metric-tabular">
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Mandate Standard:</span>
<span className="text-on-surface font-semibold">OIML R 76-1:2006</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Engine Schema:</span>
<span className="text-primary font-bold">R76-2026.1 (Immutable)</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Evaluation Mode:</span>
<span className="text-on-surface">Direct Type Evaluation</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Signature Hash:</span>
<span className="text-on-surface font-mono text-[11px]">a41f8c...902</span>
</div>
<div className="flex justify-between">
<span className="text-secondary font-label-sm">Certificate Schema:</span>
<span className="text-on-surface">Welmec 8.8 Ed. 4</span>
</div>
</div>
</div>
<div className="pt-space-sm mt-space-sm">
<span className="text-[11px] font-body-sm text-secondary">
                Report generation in Step 08 will cryptographically seal this schema.
              </span>
</div>
</div>
</div>
{/*  SECTION 4 — EXCEPTIONS & AUDIT LOG WITH MULTI-STATE SIMULATOR  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/*  Left: Exceptions & Regulatory Warnings with Simulator Tabs (Col 1-7)  */}
<section className="lg:col-span-7 bg-surface-container-lowest rounded p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex flex-wrap items-center justify-between pb-space-sm gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">warning_amber</span>
<h3 className="font-headline-sm text-primary">Exceptions &amp; Metrological Anomalies</h3>
</div>
{/*  Multi-State Simulation Toggle for Quality Audit Demonstration  */}
<div className="flex items-center bg-surface-container-low rounded p-0.5 text-[11px] font-label-sm">
<button className="px-2 py-1 rounded bg-surface-container-lowest text-primary font-bold shadow-sm" id="tabPass" >
                    Default (All PASS)
                  </button>
<button className="px-2 py-1 rounded text-secondary hover:text-primary transition" id="tabWarn" >
                    Sim: Warning
                  </button>
<button className="px-2 py-1 rounded text-secondary hover:text-primary transition" id="tabFail" >
                    Sim: Failure
                  </button>
</div>
</div>
{/*  Dynamic State Display Area  */}
<div className="mt-space-sm" id="simContent">
{/*  PASS DEFAULT STATE  */}
<div className="p-space-md rounded bg-surface-container-low flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px] mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-md font-bold text-primary">No Unresolved Exceptions or Critical Tolerances Flagged</span>
<p className="font-body-sm text-on-surface-variant mt-1">
                      Every measurement series has satisfied the compliance threshold without need for metrological concession or procedural re-test.
                    </p>
<div className="flex items-center gap-space-md mt-space-sm text-[12px] font-label-sm text-secondary">
<span>MPE Buffer: <strong>Minimum 20% clearance maintained</strong></span>
<span>•</span>
<span>Zero Overload: <strong>0 incidents</strong></span>
</div>
</div>
</div>
</div>
</div>
<div className="pt-space-md text-[11px] font-label-sm text-secondary flex items-center justify-between">
<span>Metrological Concession Policy: ISO/IEC 17025 § 7.8.6 Mandatory Guardbanding</span>
<button className="px-2 py-1 rounded text-primary hover:bg-surface-container transition font-semibold">
                Audit Manual Policy
              </button>
</div>
</section>
{/*  Right: Chain-of-Custody & Audit Trace (Col 8-12)  */}
<section className="lg:col-span-5 bg-surface-container-lowest rounded p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">cloud_upload</span>
<h3 className="font-headline-sm text-primary">Chain-of-Custody &amp; Audit Trace</h3>
</div>
<span className="font-metric-tabular text-[11px] text-secondary">6 Events Logged</span>
</div>
{/*  Compact Metrological Audit Timeline  */}
<div className="space-y-space-sm relative before:absolute before:inset-0 before:left-2 before:w-0.5 before:bg-surface-container">
<div className="relative flex items-start gap-space-sm pl-6 text-body-sm">
<span className="absolute left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-on-tertiary-container ring-4 ring-surface-container-lowest"></span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm font-bold text-primary">11:28 AM</span>
<span className="text-[11px] text-secondary font-metric-tabular">TECH-409</span>
</div>
<p className="text-on-surface text-[12px]">Repeatability series completed (5x 20 kg cycles recorded).</p>
</div>
</div>
<div className="relative flex items-start gap-space-sm pl-6 text-body-sm">
<span className="absolute left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-on-tertiary-container ring-4 ring-surface-container-lowest"></span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm font-bold text-primary">11:47 AM</span>
<span className="text-[11px] text-secondary font-metric-tabular">TECH-409</span>
</div>
<p className="text-on-surface text-[12px]">Tare subtraction &amp; zero-tracking tolerances verified.</p>
</div>
</div>
<div className="relative flex items-start gap-space-sm pl-6 text-body-sm">
<span className="absolute left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-on-tertiary-container ring-4 ring-surface-container-lowest"></span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm font-bold text-primary">12:18 PM</span>
<span className="text-[11px] text-secondary font-metric-tabular">TECH-409</span>
</div>
<p className="text-on-surface text-[12px]">Environmental temperature chamber run (23.5°C–28°C) locked.</p>
</div>
</div>
<div className="relative flex items-start gap-space-sm pl-6 text-body-sm">
<span className="absolute left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-surface-container-lowest"></span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm font-bold text-primary">12:46 PM</span>
<span className="text-[11px] text-primary font-bold">KERNEL</span>
</div>
<p className="text-on-surface text-[12px]">OIML R 76 automated compliance pipeline evaluated (12 checks passed).</p>
</div>
</div>
<div className="relative flex items-start gap-space-sm pl-6 text-body-sm">
<span className="absolute left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></span>
<div className="flex-1">
<div className="flex items-center justify-between">
<span className="font-label-sm font-semibold text-secondary">Pending</span>
<span className="text-[11px] text-secondary">STEP 06</span>
</div>
<p className="text-secondary text-[12px]">Calibration weight standard certificates &amp; photo artifacts.</p>
</div>
</div>
</div>
</div>
<div className="pt-space-md text-[11px] font-label-sm text-secondary flex items-center justify-between">
<span>Timestamp: 06-Sep-2026 12:46:22 UTC</span>
<span className="font-metric-tabular">Log Hash: #88F2A0</span>
</div>
</section>
</div>
{/*  SECTION 5: REGULATORY CITATION ANCHOR (OIML R 76-1:2006)  */}
<section className="bg-surface-container-low rounded p-space-md shadow-sm" id="citation">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px] mt-0.5">menu_book</span>
<div className="flex flex-col text-body-sm">
<span className="font-label-md font-bold text-primary">Regulatory Reference: OIML R 76-1:2006 (E) § 3.5 &amp; § 3.6</span>
<p className="text-on-surface-variant text-[12px] mt-1">
                Non-automatic weighing instruments — Part 1: Metrological and technical requirements — Tests. 
                Table 6 governs maximum permissible errors for Class (III) instruments during pattern approval and initial verification. 
                For loads <span className="font-mono font-semibold">0 ≤ m ≤ 500e</span>, mpe = ±0.5e; for <span className="font-mono font-semibold">500e &lt; m ≤ 2000e</span>, mpe = ±1.0e; and for <span className="font-mono font-semibold">2000e &lt; m ≤ 10000e</span>, mpe = ±1.5e.
              </p>
</div>
</div>
</section>
</div>
{/*  STICKY BOTTOM DECISION ACTION BAR  */}
<footer className="bg-surface-container-lowest px-space-xl py-space-sm shadow-xl flex flex-wrap items-center justify-between gap-space-md">
{/*  Left: Back Step  */}
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-2 rounded bg-surface-container-low text-primary font-label-md flex items-center gap-1 hover:bg-surface-container-high transition shadow-sm">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
<span>Back to Observations (Step 04)</span>
</button>
</div>
{/*  Center: Intermediate Draft / Exception Actions  */}
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-2 rounded bg-surface-container text-primary font-label-md hover:bg-surface-container-high transition shadow-sm">
            Save Assessment Draft
          </button>
<button className="px-space-md py-2 rounded bg-surface-container text-secondary font-label-md hover:bg-surface-container-high transition">
            Request Metrological Review (Exception)
          </button>
</div>
{/*  Right: Primary Progression CTAs  */}
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-2 rounded bg-surface-container-low text-secondary font-label-md flex items-center gap-1.5 hover:bg-surface-container-high transition shadow-sm">
<span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
<span>Export Summary (PDF)</span>
</button>
{/*  Primary CTA  */}
<button className="px-space-lg py-2 rounded bg-primary text-on-primary font-label-md font-semibold flex items-center gap-2 hover:bg-primary-container transition shadow-md">
<span>Continue to Step 06 Evidence &amp; Artifacts</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</footer>
{/*  Regulatory Kernel Signature Strip  */}
<div className="bg-surface-container-high px-space-xl py-1 flex items-center justify-between text-[11px] font-label-sm text-secondary">
<span>Evaluated by Lead Metrologist A. Kumar (TECH-409) • 06 Sep 2026, 12:48 PM</span>
<span>VeriScale Metrology Kernel v4.2.1 • OIML Certified Execution Engine</span>
</div>
</div>
</div>
{/*  Interactive JavaScript for Tab Simulations and Dynamic Rule Inspection  */}

</div></main>
    </div>
  );
}
