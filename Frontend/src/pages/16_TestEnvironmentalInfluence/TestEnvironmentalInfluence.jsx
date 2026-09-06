import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function TestEnvironmentalInfluence() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full text-on-surface">
{/*  TOP LIVE TELEMETRY / INSTRUMENTATION STRIP  */}
<div className="w-full bg-primary text-on-primary px-margin-desktop py-2 flex flex-wrap items-center justify-between text-label-sm font-label-sm shadow-md">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-1.5 bg-primary-container/80 px-2 py-0.5 rounded">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span className="tracking-wide">COM1: 9600 BAUD</span>
<span className="text-tertiary-fixed font-bold">[ONLINE]</span>
</div>
<div className="hidden md:flex items-center space-x-1 bg-primary-container/40 px-2 py-0.5 rounded text-surface-variant">
<span className="material-symbols-outlined text-[14px]">sensors</span>
<span>ENV SENSOR LINKED: <strong className="text-on-primary">VAISALA PTU300</strong></span>
</div>
<div className="flex items-center space-x-2 text-surface">
<span className="text-surface-variant font-medium">LIVE TELEMETRY:</span>
<span className="font-metric-tabular font-bold tracking-tight text-tertiary-fixed">25.0 °C</span>
<span className="text-surface-variant">•</span>
<span className="font-metric-tabular font-bold tracking-tight text-tertiary-fixed">50 %RH</span>
<span className="text-surface-variant">•</span>
<span className="font-metric-tabular font-bold tracking-tight text-tertiary-fixed">1011 hPa</span>
</div>
</div>
<div className="flex items-center space-x-3 mt-1 sm:mt-0">
<div className="flex items-center space-x-1 text-surface-variant">
<span className="material-symbols-outlined text-tertiary-fixed text-[16px]">cloud_done</span>
<span>Autosave: Saved 7s ago</span>
</div>
<button className="bg-primary-container hover:bg-primary-container/70 text-on-primary px-2.5 py-1 rounded text-label-sm font-label-sm transition">
        Save Draft
      </button>
<button className="bg-surface-variant/20 hover:bg-surface-variant/30 text-surface px-2.5 py-1 rounded text-label-sm font-label-sm transition">
        Exit Test
      </button>
</div>
</div>
{/*  CONTEXTUAL METROLOGY BREADCRUMB & HEADER PANEL  */}
<div className="w-full bg-surface-container-lowest px-margin-desktop py-space-md shadow-sm">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-sm">
<div>
<nav className="flex items-center space-x-2 text-label-sm font-label-sm text-secondary mb-1">
<span>Tests</span>
<span>/</span>
<span className="text-on-surface font-semibold">TEST-012</span>
<span>/</span>
<span>Observations</span>
<span>/</span>
<span className="text-primary-container font-semibold">Environmental Influence</span>
</nav>
<div className="flex items-center space-x-3">
<h1 className="text-headline-lg font-headline-lg text-primary tracking-tight">Environmental Influence Test</h1>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-high text-primary-container font-label-sm text-label-sm uppercase font-bold tracking-wider">
            ROUTINE 05 OF 05
          </span>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container text-secondary font-label-sm text-label-sm">
            EXECUTION MODE: OIML R 76-1 Clause A.5
          </span>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-label-sm text-label-sm font-bold">
            ● IN PROGRESS
          </span>
</div>
<p className="text-body-sm font-body-sm text-secondary mt-0.5">
          Record instrument observations under the applicable environmental conditions.
        </p>
</div>
{/*  Compact Metrological Context Tag  */}
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-wrap items-center gap-x-4 gap-y-1 text-label-sm font-label-sm">
<div>
<span className="text-secondary">Instrument:</span>
<span className="text-on-surface font-semibold ml-1">ABC WeighTech WT-100</span>
<span className="font-metric-tabular text-secondary ml-0.5">(Class III NAWI)</span>
</div>
<div className="text-outline-variant">•</div>
<div>
<span className="text-secondary">S/N:</span>
<span className="font-metric-tabular text-on-surface font-semibold ml-1">WT100-2026-001</span>
</div>
<div className="text-outline-variant">•</div>
<div>
<span className="text-secondary">Technician:</span>
<span className="text-on-surface font-medium ml-1">A. Kumar (TECH-409)</span>
</div>
<a className="text-primary-container font-semibold hover:underline flex items-center ml-auto" href="#instrument-profile">
          Profile <span className="material-symbols-outlined text-[14px] ml-0.5">north_east</span>
</a>
</div>
</div>
{/*  WORKFLOW STEPPER  */}
<div className="mt-space-md pt-space-sm bg-surface-container-low/50 rounded p-2 overflow-x-auto">
<div className="flex items-center min-w-[860px] justify-between text-label-sm font-label-sm">
<div className="flex items-center space-x-1.5 text-secondary">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-800 text-[12px] font-bold">✓</span>
<span className="font-medium">01 Instrument</span>
</div>
<div className="w-6 h-[1px] bg-outline-variant"></div>
<div className="flex items-center space-x-1.5 text-secondary">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-800 text-[12px] font-bold">✓</span>
<span className="font-medium">02 Lab Conditions</span>
</div>
<div className="w-6 h-[1px] bg-outline-variant"></div>
<div className="flex items-center space-x-1.5 text-secondary">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-800 text-[12px] font-bold">✓</span>
<span className="font-medium">03 Selection</span>
</div>
<div className="w-6 h-[1px] bg-outline-variant"></div>
<div className="flex items-center space-x-2 bg-primary-container text-on-primary px-3 py-1 rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
<span className="font-bold tracking-wide uppercase">04 Observations</span>
</div>
<div className="w-6 h-[1px] bg-outline-variant"></div>
<div className="flex items-center space-x-1.5 text-outline">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-surface-container text-outline text-[12px]">○</span>
<span>05 Compliance</span>
</div>
<div className="w-6 h-[1px] bg-outline-variant"></div>
<div className="flex items-center space-x-1.5 text-outline">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-surface-container text-outline text-[12px]">○</span>
<span>06 Evidence</span>
</div>
<div className="w-6 h-[1px] bg-outline-variant"></div>
<div className="flex items-center space-x-1.5 text-outline">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-surface-container text-outline text-[12px]">○</span>
<span>07 Review</span>
</div>
<div className="w-6 h-[1px] bg-outline-variant"></div>
<div className="flex items-center space-x-1.5 text-outline">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-surface-container text-outline text-[12px]">○</span>
<span>08 Report</span>
</div>
</div>
</div>
</div>
{/*  MAIN DUAL-PANE TEST WORKSPACE  */}
<div className="p-margin-desktop space-y-space-lg">
{/*  METROLOGICAL METADATA CARD (R 76 COMPLIANCE HEADER)  */}
<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
<div className="flex flex-wrap items-center justify-between text-label-sm font-label-sm text-secondary pb-space-sm">
<div className="flex items-center space-x-2">
<span className="bg-surface-container px-2 py-0.5 rounded font-bold text-primary tracking-wider">
            METROLOGICAL • CONFIGURED PROCEDURE • OIML R 76 EVALUATION
          </span>
<span className="text-outline">|</span>
<span>Legal Metrology Directive 2014/31/EU</span>
</div>
<div className="text-tertiary font-medium">Chamber Program: ISO-17025-CYCLE-A</div>
</div>
<div className="mt-space-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm">
<div className="bg-surface-container-low p-2 rounded">
<span className="text-label-sm font-label-sm text-secondary block">Scale Interval (e)</span>
<span className="text-headline-sm font-headline-sm text-primary font-metric-tabular">10 g</span>
</div>
<div className="bg-surface-container-low p-2 rounded">
<span className="text-label-sm font-label-sm text-secondary block">Accuracy Class</span>
<span className="text-headline-sm font-headline-sm text-primary font-metric-tabular">( III ) Medium</span>
</div>
<div className="bg-surface-container-low p-2 rounded">
<span className="text-label-sm font-label-sm text-secondary block">Max Capacity (Max)</span>
<span className="text-headline-sm font-headline-sm text-primary font-metric-tabular">100.000 kg</span>
</div>
<div className="bg-surface-container-low p-2 rounded">
<span className="text-label-sm font-label-sm text-secondary block">Reference Test Load</span>
<span className="text-headline-sm font-headline-sm text-primary font-metric-tabular">10.000 kg (M1)</span>
</div>
<div className="bg-surface-container-low p-2 rounded col-span-2 sm:col-span-1">
<span className="text-label-sm font-label-sm text-secondary block">Test Configuration</span>
<span className="text-label-md font-label-md text-primary font-bold">Static Ramp Mode</span>
</div>
</div>
<div className="mt-space-sm p-2 rounded bg-surface-container-high/60 text-body-sm font-body-sm text-secondary flex items-start space-x-2">
<span className="material-symbols-outlined text-[18px] text-primary-container mt-0.5">info</span>
<span>
<strong>Metrological Guidance:</strong> Applicable environmental conditions, dwell tolerances, and evaluation criteria are determined by the configured test program. Official regulatory compliance envelope is evaluated in Step 05.
        </span>
</div>
</div>
{/*  SECTION 1: CONFIGURATION CONTROLS  */}
<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between pb-space-sm gap-2">
<div>
<h2 className="text-headline-sm font-headline-sm text-primary">Section 1 — Environmental Test Configuration</h2>
<p className="text-body-sm font-body-sm text-secondary">
            Use the environmental conditions and observation sequence configured for this evaluation.
          </p>
</div>
<button className="self-start md:self-auto bg-surface-container hover:bg-surface-container-high text-primary px-3 py-1.5 rounded font-label-md text-label-md flex items-center space-x-1.5 transition">
<span className="material-symbols-outlined text-[16px]">tune</span>
<span>Load from Chamber Program</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm pt-space-xs">
<div>
<label className="block text-label-sm font-label-sm text-secondary mb-1">Condition Sequence</label>
<div className="bg-surface-container-low text-on-surface font-label-md text-label-md px-3 py-2 rounded">
            Configured (Controlled Ramp)
          </div>
</div>
<div>
<label className="block text-label-sm font-label-sm text-secondary mb-1">Number of Conditions</label>
<div className="bg-surface-container-low text-on-surface font-label-md text-label-md px-3 py-2 rounded">
            3 Conditions
          </div>
</div>
<div>
<label className="block text-label-sm font-label-sm text-secondary mb-1">Stabilization Dwell</label>
<div className="bg-surface-container-low text-on-surface font-label-md text-label-md px-3 py-2 rounded">
            30 min Stabilization Dwell
          </div>
</div>
<div>
<label className="block text-label-sm font-label-sm text-secondary mb-1">Reference Test Load</label>
<div className="bg-surface-container-low text-on-surface font-label-md text-label-md px-3 py-2 rounded font-metric-tabular">
            10.000 kg (Nominal 10% Max)
          </div>
</div>
<div className="flex items-end pb-2">
<label className="flex items-center space-x-2 text-label-sm font-label-sm text-primary font-medium cursor-pointer">
<input defaultChecked="" className="w-4 h-4 rounded text-primary-container" disabled="" type="checkbox"/>
<span>Active Telemetry Sync</span>
</label>
</div>
</div>
</div>
{/*  CORE METROLOGY DUAL COLUMNS: CHAMBER CONDITIONS (LEFT) VS OBSERVATIONS (RIGHT)  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
{/*  COLUMN 1 (5 Cols): Chamber Conditions Table  */}
<div className="xl:col-span-5 bg-surface-container-lowest rounded-lg shadow-sm flex flex-col justify-between overflow-hidden">
<div className="p-space-md">
<div className="flex items-center justify-between mb-space-sm">
<div>
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 2</span>
<h3 className="text-headline-sm font-headline-sm text-primary">Environmental Chamber Conditions</h3>
</div>
<span className="text-label-sm font-label-sm px-2 py-0.5 rounded bg-surface-container-high text-primary-container font-semibold">
              3 STEPS CONFIGURED
            </span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-body-sm font-body-sm">
<thead className="bg-surface-container-low text-secondary text-label-sm font-label-sm uppercase">
<tr>
<th className="py-2 px-2.5">Step</th>
<th className="py-2 px-2.5">Condition Target</th>
<th className="py-2 px-2.5 text-right">Temp</th>
<th className="py-2 px-2.5 text-right">%RH</th>
<th className="py-2 px-2.5 text-right">Dwell</th>
<th className="py-2 px-2.5 text-center">Telemetry</th>
</tr>
</thead>
<tbody className="text-on-surface">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-low/40">
<td className="py-2.5 px-2.5 font-metric-tabular font-bold text-primary">01</td>
<td className="py-2.5 px-2.5">
<span className="font-semibold block text-primary">Initial / Ref Baseline</span>
<span className="text-label-sm text-secondary">20°C Nominal</span>
</td>
<td className="py-2.5 px-2.5 font-metric-tabular text-right font-medium">23.5 °C</td>
<td className="py-2.5 px-2.5 font-metric-tabular text-right">48 %</td>
<td className="py-2.5 px-2.5 font-metric-tabular text-right text-secondary">45m</td>
<td className="py-2.5 px-2.5 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-green-50 text-green-700">
                      RECORDED ✓
                    </span>
</td>
</tr>
{/*  Row 2 - Active  */}
<tr className="bg-surface-container-low/80">
<td className="py-2.5 px-2.5 font-metric-tabular font-bold text-primary">02</td>
<td className="py-2.5 px-2.5">
<span className="font-semibold block text-primary">Elevated Temp</span>
<span className="text-label-sm text-secondary">25°C Target</span>
</td>
<td className="py-2.5 px-2.5 font-metric-tabular text-right font-bold text-primary">25.0 °C</td>
<td className="py-2.5 px-2.5 font-metric-tabular text-right">50 %</td>
<td className="py-2.5 px-2.5 font-metric-tabular text-right text-secondary">35m</td>
<td className="py-2.5 px-2.5 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-tertiary text-on-tertiary">
                      ACTIVE TARGET ●
                    </span>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low/40">
<td className="py-2.5 px-2.5 font-metric-tabular font-bold text-primary">03</td>
<td className="py-2.5 px-2.5">
<span className="font-semibold block text-primary">Thermal Stress Peak</span>
<span className="text-label-sm text-secondary">28°C Target</span>
</td>
<td className="py-2.5 px-2.5 font-metric-tabular text-right font-medium">28.0 °C</td>
<td className="py-2.5 px-2.5 font-metric-tabular text-right">55 %</td>
<td className="py-2.5 px-2.5 font-metric-tabular text-right text-secondary">40m</td>
<td className="py-2.5 px-2.5 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-green-50 text-green-700">
                      RECORDED ✓
                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-surface-container-low p-space-sm text-label-sm font-label-sm text-secondary flex items-center justify-between">
<div className="flex items-center space-x-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary">device_thermostat</span>
<span>Chamber Probe: Vaisala PTU300 (Calibrated valid to Nov 2026)</span>
</div>
<span className="font-metric-tabular">Stability: ±0.05 °C/h</span>
</div>
</div>
{/*  COLUMN 2 (7 Cols): Instrument Observations Table  */}
<div className="xl:col-span-7 bg-surface-container-lowest rounded-lg shadow-sm flex flex-col justify-between overflow-hidden">
<div className="p-space-md">
<div className="flex items-center justify-between mb-space-sm">
<div>
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 3</span>
<h3 className="text-headline-sm font-headline-sm text-primary">Instrument Observations at Environmental State</h3>
</div>
<span className="text-label-sm font-label-sm text-secondary font-metric-tabular">
              Mandatory Load: 10.000 kg
            </span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-body-md font-body-md">
<thead className="bg-surface-container-low text-secondary text-label-sm font-label-sm uppercase">
<tr>
<th className="py-2.5 px-3">Step</th>
<th className="py-2.5 px-3">Test Condition</th>
<th className="py-2.5 px-3 text-right">Reference Load (L)</th>
<th className="py-2.5 px-3 text-right">Observed Indication (I)</th>
<th className="py-2.5 px-3 text-right">Deviation (E = I - L)</th>
<th className="py-2.5 px-3 text-center">State</th>
</tr>
</thead>
<tbody className="text-on-surface divide-y-0">
{/*  Observation 1  */}
<tr className="hover:bg-surface-container-low/30">
<td className="py-3 px-3 font-metric-tabular font-bold text-primary">01</td>
<td className="py-3 px-3">
<span className="font-medium">Ref Baseline</span>
<span className="block text-label-sm text-secondary">23.5 °C • 48% RH</span>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-block bg-surface-container px-2.5 py-1 rounded font-metric-tabular font-medium text-secondary">
                      10.000 kg
                    </span>
</td>
<td className="py-3 px-3 text-right">
<div className="inline-flex items-center shadow-sm rounded overflow-hidden">
<input className="w-24 px-2 py-1 text-right font-metric-tabular font-bold text-primary bg-surface-container-lowest focus:outline-none" readOnly="" type="text" defaultValue="10.005"/>
<span className="bg-surface-container px-1.5 py-1 text-label-sm font-bold text-secondary">kg</span>
</div>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-flex items-center space-x-1 bg-surface-container-low px-2 py-1 rounded font-metric-tabular text-green-700 font-bold">
<span>+0.005 kg</span>
<span className="text-[10px] uppercase text-secondary bg-surface-container px-1 rounded">AUTO</span>
</span>
</td>
<td className="py-3 px-3 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-green-50 text-green-700">
                      RECORDED ✓
                    </span>
</td>
</tr>
{/*  Observation 2  */}
<tr className="bg-surface-container-low/50">
<td className="py-3 px-3 font-metric-tabular font-bold text-primary">02</td>
<td className="py-3 px-3">
<span className="font-semibold text-primary">Elevated Temp</span>
<span className="block text-label-sm text-secondary">25.0 °C • 50% RH</span>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-block bg-surface-container px-2.5 py-1 rounded font-metric-tabular font-medium text-secondary">
                      10.000 kg
                    </span>
</td>
<td className="py-3 px-3 text-right">
<div className="inline-flex items-center shadow-sm rounded overflow-hidden">
<input className="w-24 px-2 py-1 text-right font-metric-tabular font-bold text-primary bg-surface-container-lowest focus:outline-none" readOnly="" type="text" defaultValue="10.008"/>
<span className="bg-surface-container px-1.5 py-1 text-label-sm font-bold text-secondary">kg</span>
</div>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-flex items-center space-x-1 bg-surface-container-low px-2 py-1 rounded font-metric-tabular text-green-700 font-bold">
<span>+0.008 kg</span>
<span className="text-[10px] uppercase text-secondary bg-surface-container px-1 rounded">AUTO</span>
</span>
</td>
<td className="py-3 px-3 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-green-50 text-green-700">
                      RECORDED ✓
                    </span>
</td>
</tr>
{/*  Observation 3  */}
<tr className="hover:bg-surface-container-low/30">
<td className="py-3 px-3 font-metric-tabular font-bold text-primary">03</td>
<td className="py-3 px-3">
<span className="font-medium">Thermal Stress</span>
<span className="block text-label-sm text-secondary">28.0 °C • 55% RH</span>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-block bg-surface-container px-2.5 py-1 rounded font-metric-tabular font-medium text-secondary">
                      10.000 kg
                    </span>
</td>
<td className="py-3 px-3 text-right">
<div className="inline-flex items-center shadow-sm rounded overflow-hidden">
<input className="w-24 px-2 py-1 text-right font-metric-tabular font-bold text-primary bg-surface-container-lowest focus:outline-none" readOnly="" type="text" defaultValue="10.012"/>
<span className="bg-surface-container px-1.5 py-1 text-label-sm font-bold text-secondary">kg</span>
</div>
</td>
<td className="py-3 px-3 text-right">
<span className="inline-flex items-center space-x-1 bg-surface-container-low px-2 py-1 rounded font-metric-tabular text-green-700 font-bold">
<span>+0.012 kg</span>
<span className="text-[10px] uppercase text-secondary bg-surface-container px-1 rounded">AUTO</span>
</span>
</td>
<td className="py-3 px-3 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-green-50 text-green-700">
                      RECORDED ✓
                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="bg-surface-container-low p-space-sm flex flex-wrap items-center justify-between text-label-sm font-label-sm text-secondary">
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-[16px] text-green-700">verified_user</span>
<span>Cryptographic Hash SHA-256: <code className="font-metric-tabular text-on-surface font-semibold">3c9b2f1a...8e44</code></span>
<span className="text-green-700 font-bold">[AUDIT HASH VALID]</span>
</div>
<span className="text-secondary text-[11px]">Enforced Formula: E = I - L</span>
</div>
</div>
</div>
{/*  MIDDLE INSPECTION & VERIFICATION DECK (3 CARDS)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  SECTION 4: Condition Detail Inspector  */}
<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm">
<div>
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 4</span>
<h4 className="text-headline-sm font-headline-sm text-primary">Condition Detail Inspector</h4>
</div>
<span className="px-2 py-0.5 rounded bg-primary-container text-on-primary text-[11px] font-bold tracking-wide">
            ACTIVE STEP 02
          </span>
</div>
<div className="space-y-2 mt-2 text-body-sm font-body-sm">
<div className="flex justify-between py-1 bg-surface-container-low/40 px-2 rounded">
<span className="text-secondary">Chamber Temperature:</span>
<span className="font-metric-tabular font-bold text-primary">25.0 °C (Probe PT100)</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/40 px-2 rounded">
<span className="text-secondary">Relative Humidity:</span>
<span className="font-metric-tabular font-bold text-primary">50.2 %RH</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/40 px-2 rounded">
<span className="text-secondary">Barometric Pressure:</span>
<span className="font-metric-tabular font-bold text-primary">1011.4 hPa</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/40 px-2 rounded">
<span className="text-secondary">Applied Reference Load:</span>
<span className="font-metric-tabular font-bold text-primary">10.000 kg</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/40 px-2 rounded">
<span className="text-secondary">Observed Indication:</span>
<span className="font-metric-tabular font-bold text-primary">10.008 kg</span>
</div>
<div className="flex justify-between py-1 bg-surface-container px-2 rounded font-semibold">
<span className="text-secondary">Calculated Deviation:</span>
<span className="font-metric-tabular text-green-700">+0.008 kg (AUTO-CALC)</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-secondary">
<span className="flex items-center space-x-1">
<span className="material-symbols-outlined text-[16px] text-primary-container">lock</span>
<span>State: Locked for Step 05</span>
</span>
<span className="text-green-700 font-bold">RECORDED ✓</span>
</div>
</div>
{/*  SECTION 5: Condition Stability Verification  */}
<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm">
<div>
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 5</span>
<h4 className="text-headline-sm font-headline-sm text-primary">Stability Verification</h4>
</div>
<span className="material-symbols-outlined text-green-700">task_alt</span>
</div>
<p className="text-body-sm font-body-sm text-secondary mb-3">
          Metrological thermal equilibrium validation matrix:
        </p>
<div className="space-y-2">
<div className="flex items-center justify-between p-1.5 bg-surface-container-low rounded">
<span className="text-label-sm font-label-sm text-on-surface">Chamber Temp Stable:</span>
<div className="inline-flex rounded shadow-xs overflow-hidden">
<span className="px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm font-bold">● Yes</span>
<span className="px-2 py-0.5 bg-surface-container text-secondary font-label-sm text-label-sm">No</span>
</div>
</div>
<div className="flex items-center justify-between p-1.5 bg-surface-container-low rounded">
<span className="text-label-sm font-label-sm text-on-surface">Humidity Stable:</span>
<div className="inline-flex rounded shadow-xs overflow-hidden">
<span className="px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm font-bold">● Yes</span>
<span className="px-2 py-0.5 bg-surface-container text-secondary font-label-sm text-label-sm">No</span>
</div>
</div>
<div className="flex items-center justify-between p-1.5 bg-surface-container-low rounded">
<span className="text-label-sm font-label-sm text-on-surface">Barometric Pressure Stable:</span>
<div className="inline-flex rounded shadow-xs overflow-hidden">
<span className="px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm font-bold">● Yes</span>
<span className="px-2 py-0.5 bg-surface-container text-secondary font-label-sm text-label-sm">No</span>
</div>
</div>
<div className="flex items-center justify-between p-1.5 bg-surface-container-low rounded">
<span className="text-label-sm font-label-sm text-on-surface">Scale Zero &amp; Pan Stable:</span>
<div className="inline-flex rounded shadow-xs overflow-hidden">
<span className="px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm font-bold">● Yes</span>
<span className="px-2 py-0.5 bg-surface-container text-secondary font-label-sm text-label-sm">No</span>
</div>
</div>
</div>
<div className="mt-3 p-2 bg-surface-container-high/40 rounded flex items-start space-x-2">
<input defaultChecked="" className="mt-0.5 rounded text-primary" disabled="" type="checkbox"/>
<span className="text-[11px] text-secondary leading-tight">
            Observation recorded strictly after thermal equilibrium achieved (ΔT &lt; 0.2°C/hr).
          </span>
</div>
</div>
{/*  SECTION 6: Chamber & Test Traceability Timeline  */}
<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm">
<div>
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 6</span>
<h4 className="text-headline-sm font-headline-sm text-primary">Execution Timeline</h4>
</div>
<span className="material-symbols-outlined text-secondary text-[20px]">history</span>
</div>
<div className="relative pl-4 space-y-3 text-body-sm font-body-sm mt-2">
<div className="absolute left-1.5 top-1 bottom-1 w-[2px] bg-outline-variant"></div>
<div className="relative flex items-start space-x-2">
<div className="w-2 h-2 rounded-full bg-primary mt-1 -ml-[13px]"></div>
<div>
<span className="font-metric-tabular font-bold text-primary">10:45 AM</span>
<p className="text-label-sm text-secondary">Initial 23.5°C Reference recorded (+0.005 kg)</p>
</div>
</div>
<div className="relative flex items-start space-x-2">
<div className="w-2 h-2 rounded-full bg-primary mt-1 -ml-[13px]"></div>
<div>
<span className="font-metric-tabular font-bold text-primary">11:20 AM</span>
<p className="text-label-sm text-secondary">Target Condition 2 (25.0°C) reached in chamber</p>
</div>
</div>
<div className="relative flex items-start space-x-2">
<div className="w-2 h-2 rounded-full bg-tertiary mt-1 -ml-[13px]"></div>
<div>
<span className="font-metric-tabular font-bold text-tertiary">11:25 AM</span>
<p className="text-label-sm text-secondary">Instrument &amp; shield stabilized (30m soak)</p>
</div>
</div>
<div className="relative flex items-start space-x-2">
<div className="w-2 h-2 rounded-full bg-primary mt-1 -ml-[13px]"></div>
<div>
<span className="font-metric-tabular font-bold text-primary">11:30 AM</span>
<p className="text-label-sm text-secondary">Step 02 observation recorded (10.008 kg)</p>
</div>
</div>
<div className="relative flex items-start space-x-2">
<div className="w-2 h-2 rounded-full bg-green-700 mt-1 -ml-[13px]"></div>
<div>
<span className="font-metric-tabular font-bold text-green-700">12:10 PM</span>
<p className="text-label-sm text-secondary">Final observation recorded &amp; synchronized</p>
</div>
</div>
</div>
</div>
</div>
{/*  LOWER METRICS, DATA TREND & REGULATORY VALIDATION ROW  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/*  SECTION 7: Environmental Test Summary (4 Cols)  */}
<div className="lg:col-span-4 bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col justify-between">
<div>
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 7</span>
<h4 className="text-headline-sm font-headline-sm text-primary mb-space-sm">Environmental Test Summary</h4>
<div className="space-y-2 text-body-sm font-body-sm">
<div className="flex justify-between py-1 bg-surface-container-low/50 px-2.5 rounded">
<span className="text-secondary">Conditions Completed:</span>
<span className="font-metric-tabular font-bold text-primary">3 / 3 (100%)</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/50 px-2.5 rounded">
<span className="text-secondary">Temperature Span:</span>
<span className="font-metric-tabular font-bold text-primary">23.5 °C — 28.0 °C (Δ 4.5 °C)</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/50 px-2.5 rounded">
<span className="text-secondary">Humidity Span:</span>
<span className="font-metric-tabular font-bold text-primary">48 % — 55 %RH (Δ 7 %RH)</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/50 px-2.5 rounded">
<span className="text-secondary">Pressure Span:</span>
<span className="font-metric-tabular font-bold text-primary">1010 hPa — 1012 hPa (Δ 2 hPa)</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/50 px-2.5 rounded">
<span className="text-secondary">Baseline Indication:</span>
<span className="font-metric-tabular font-bold text-primary">10.005 kg</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low/50 px-2.5 rounded">
<span className="text-secondary">Max Observed Deviation:</span>
<span className="font-metric-tabular font-bold text-green-700">+0.012 kg</span>
</div>
<div className="flex justify-between py-1 bg-surface-container px-2.5 rounded">
<span className="text-secondary font-medium">Max Thermal Sensitivity:</span>
<span className="font-metric-tabular font-bold text-primary">+0.0016 kg/°C [AUTO]</span>
</div>
</div>
</div>
<div className="mt-space-md p-space-sm bg-surface-container-high rounded text-center">
<span className="text-label-sm font-label-sm font-bold text-primary-container tracking-wider uppercase block">
            REGULATORY DISPOSITION: PENDING STEP 05 COMPLIANCE
          </span>
</div>
</div>
{/*  SECTION 8: Trend Visualization SVG (4 Cols)  */}
<div className="lg:col-span-4 bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<div>
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 8</span>
<h4 className="text-headline-sm font-headline-sm text-primary">Observation Trend</h4>
</div>
<span className="text-label-sm font-label-sm text-secondary font-metric-tabular">Δ Deviation vs Temp</span>
</div>
{/*  Technical Restrained SVG Plot  */}
<div className="bg-surface-container-low p-space-sm rounded">
<svg className="w-full h-40 text-primary" viewBox="0 0 320 160">
{/*  Grid lines  */}
<line stroke="#c2c7cf" strokeDasharray="2,2" strokeWidth="0.5" x1="35" x2="310" y1="20" y2="20"></line>
<line stroke="#c2c7cf" strokeDasharray="2,2" strokeWidth="0.5" x1="35" x2="310" y1="60" y2="60"></line>
<line stroke="#c2c7cf" strokeDasharray="2,2" strokeWidth="0.5" x1="35" x2="310" y1="100" y2="100"></line>
<line stroke="#73777f" strokeWidth="1" x1="35" x2="310" y1="140" y2="140"></line>
{/*  Axis labels  */}
<text fill="#5B6B7A" fontFamily="IBM Plex Sans" fontSize="8" x="5" y="24">10.015</text>
<text fill="#5B6B7A" fontFamily="IBM Plex Sans" fontSize="8" x="5" y="64">10.010</text>
<text fill="#5B6B7A" fontFamily="IBM Plex Sans" fontSize="8" x="5" y="104">10.005</text>
<text fill="#5B6B7A" fontFamily="IBM Plex Sans" fontSize="8" x="5" y="144">10.000</text>
{/*  Reference Nominal Line (10.000 kg)  */}
<line stroke="#123B5D" strokeDasharray="4,3" strokeWidth="1.5" x1="35" x2="310" y1="140" y2="140"></line>
{/*  Data Curve & Shading  */}
<polygon fill="#004040" fillOpacity="0.08" points="60,100 170,76 280,44 280,140 60,140"></polygon>
<polyline fill="none" points="60,100 170,76 280,44" stroke="#004040" strokeWidth="2.5"></polyline>
{/*  Point 1 (23.5°C / 10.005 kg)  */}
<circle cx="60" cy="100" fill="#004040" r="4.5"></circle>
<circle cx="60" cy="100" fill="#ffffff" r="2"></circle>
<text fill="#172B3A" fontFamily="IBM Plex Sans" fontSize="9" fontWeight="600" x="45" y="154">23.5°C</text>
<text fill="#004040" fontFamily="IBM Plex Sans" fontSize="8" fontWeight="bold" x="50" y="92">+5g</text>
{/*  Point 2 (25.0°C / 10.008 kg)  */}
<circle cx="170" cy="76" fill="#004040" r="4.5"></circle>
<circle cx="170" cy="76" fill="#ffffff" r="2"></circle>
<text fill="#172B3A" fontFamily="IBM Plex Sans" fontSize="9" fontWeight="600" x="155" y="154">25.0°C</text>
<text fill="#004040" fontFamily="IBM Plex Sans" fontSize="8" fontWeight="bold" x="160" y="68">+8g</text>
{/*  Point 3 (28.0°C / 10.012 kg)  */}
<circle cx="280" cy="44" fill="#004040" r="4.5"></circle>
<circle cx="280" cy="44" fill="#ffffff" r="2"></circle>
<text fill="#172B3A" fontFamily="IBM Plex Sans" fontSize="9" fontWeight="600" x="265" y="154">28.0°C</text>
<text fill="#004040" fontFamily="IBM Plex Sans" fontSize="8" fontWeight="bold" x="268" y="36">+12g</text>
</svg>
</div>
</div>
<div className="mt-space-sm flex items-center justify-between text-[11px] text-secondary">
<span>-- Nominal Reference (10.000 kg)</span>
<span className="text-tertiary font-bold">— Recorded Indication Profile</span>
</div>
</div>
{/*  SECTION 9 & 12: Data Validation Gate & Applicable Rules (4 Cols)  */}
<div className="lg:col-span-4 space-y-space-lg">
{/*  Data Validation Gate Card  */}
<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm">
<div>
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 9</span>
<h4 className="text-headline-sm font-headline-sm text-primary">Data Validation Gate</h4>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-green-50 text-green-700">
              5/5 CHECKS PASSED
            </span>
</div>
<div className="space-y-1.5 text-label-sm font-label-sm text-on-surface">
<div className="flex items-center space-x-2">
<span className="text-green-700 font-bold">✓</span>
<span>3 required observations recorded</span>
</div>
<div className="flex items-center space-x-2">
<span className="text-green-700 font-bold">✓</span>
<span>All chamber readings inside valid range</span>
</div>
<div className="flex items-center space-x-2">
<span className="text-green-700 font-bold">✓</span>
<span>Reference standard verified (Class M1)</span>
</div>
<div className="flex items-center space-x-2">
<span className="text-green-700 font-bold">✓</span>
<span>Derived deviations auto-synchronized</span>
</div>
<div className="flex items-center space-x-2">
<span className="text-green-700 font-bold">✓</span>
<span>Stabilization soak dwell verified</span>
</div>
</div>
<div className="mt-space-sm p-2 rounded bg-green-50 text-green-800 text-label-sm font-label-sm font-bold flex items-center space-x-2">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>OBSERVATIONS VALIDATED • READY FOR SIGN-OFF</span>
</div>
</div>
{/*  SECTION 12: Applicable Rules Card  */}
<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-xs">
<div>
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 12</span>
<h4 className="text-headline-sm font-headline-sm text-primary">Applicable Evaluation Rules</h4>
</div>
<a className="text-primary-container hover:underline text-label-sm font-label-sm flex items-center" href="#rules">
              Info <span className="material-symbols-outlined text-[14px] ml-0.5">north_east</span>
</a>
</div>
<div className="text-body-sm font-body-sm space-y-1 mt-1">
<div className="text-primary font-semibold">OIML R 76-1:2006 (NAWI)</div>
<div className="text-secondary">Clause A.5 / Clause 3.9.2 (Static Environmental Influence)</div>
<div className="text-secondary text-label-sm">Span Drift with Temperature Range 10°C to 40°C</div>
<div className="mt-2 text-tertiary font-bold text-label-sm">
              Status: Pending Step 05 Compliance Assessment
            </div>
</div>
</div>
</div>
</div>
{/*  FIELD CONFIRMATIONS, NARRATIVE LOG & EVIDENCE STAGING (3 CARDS)  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
{/*  SECTION 10: Procedure Execution Checklist  */}
<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 10</span>
<h4 className="text-headline-sm font-headline-sm text-primary mb-space-sm">Procedure Execution Checklist</h4>
<div className="space-y-2 text-body-sm font-body-sm">
<label className="flex items-start space-x-2 cursor-pointer">
<input defaultChecked="" className="mt-1 rounded text-primary" disabled="" type="checkbox"/>
<span className="text-on-surface">Environmental conditions established and stabilized prior to loading.</span>
</label>
<label className="flex items-start space-x-2 cursor-pointer">
<input defaultChecked="" className="mt-1 rounded text-primary" disabled="" type="checkbox"/>
<span className="text-on-surface">Instrument allowed to thermally equilibrate inside sealed chamber.</span>
</label>
<label className="flex items-start space-x-2 cursor-pointer">
<input defaultChecked="" className="mt-1 rounded text-primary" disabled="" type="checkbox"/>
<span className="text-on-surface">Calibrated reference sensor (Vaisala PTU300) synced at moment of indication.</span>
</label>
<label className="flex items-start space-x-2 cursor-pointer">
<input defaultChecked="" className="mt-1 rounded text-primary" disabled="" type="checkbox"/>
<span className="text-on-surface">Test sequence executed in accordance with laboratory SOP-ENV-R76.</span>
</label>
</div>
</div>
{/*  SECTION 11: Field Notes & Observations  */}
<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col justify-between">
<div>
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 11</span>
<h4 className="text-headline-sm font-headline-sm text-primary mb-space-sm">Technician Field Notes</h4>
<div className="bg-surface-container-low p-space-sm rounded text-body-sm font-body-sm text-on-surface italic">
            "Chamber door remained sealed during ramp from 23.5°C to 28.0°C. Instrument displayed negligible zero drift during soak phase. Scale draft shields locked. Digital filter damping mode set to Metrology High."
          </div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-label-sm font-label-sm text-secondary">
<span>Author: <strong>A. Kumar (TECH-409)</strong></span>
<span className="font-metric-tabular">Token: 0x98E2...F11C</span>
</div>
</div>
{/*  SECTION 13: Stage 06 Evidence Notice  */}
<div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex flex-col justify-between">
<div>
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider block">Section 13</span>
<h4 className="text-headline-sm font-headline-sm text-primary mb-space-sm">Stage 06 Evidence Staging</h4>
<p className="text-body-sm font-body-sm text-secondary mb-space-sm">
            Chamber calibration certificate (CAL-CHAMB-2025), Vaisala sensor logs (.csv), and chamber setup photos will be digitally attached and sealed during Step 06 Evidence.
          </p>
<div className="space-y-1 text-label-sm font-label-sm text-primary-container">
<div className="flex items-center space-x-1.5">
<span className="material-symbols-outlined text-[16px]">attach_file</span>
<span>CAL-CHAMB-2025.pdf (Queued)</span>
</div>
<div className="flex items-center space-x-1.5">
<span className="material-symbols-outlined text-[16px]">table_chart</span>
<span>ptu300-telemetry-20260906.csv (Queued)</span>
</div>
</div>
</div>
<button className="mt-space-sm w-full bg-surface-container hover:bg-surface-container-high text-primary px-3 py-1.5 rounded text-label-sm font-label-sm font-semibold transition">
          Add Attachments Later
        </button>
</div>
</div>
{/*  TEST ROUTINE INVENTORY STRIP (ALL 5 ROUTINES VISIBLE)  */}
<div className="bg-surface-container-lowest rounded-lg p-space-sm shadow-sm flex flex-wrap items-center justify-between gap-2 text-label-sm font-label-sm">
<span className="text-secondary font-bold uppercase tracking-wider">Test Routine Registry:</span>
<div className="flex flex-wrap items-center gap-3">
<span className="text-green-700 flex items-center">
<span className="material-symbols-outlined text-[15px] mr-1">check_circle</span>
          1. Accuracy / Indication
        </span>
<span className="text-green-700 flex items-center">
<span className="material-symbols-outlined text-[15px] mr-1">check_circle</span>
          2. Repeatability
        </span>
<span className="text-green-700 flex items-center">
<span className="material-symbols-outlined text-[15px] mr-1">check_circle</span>
          3. Eccentric Loading
        </span>
<span className="text-green-700 flex items-center">
<span className="material-symbols-outlined text-[15px] mr-1">check_circle</span>
          4. Tare &amp; Zero
        </span>
<span className="bg-primary text-on-primary px-2.5 py-0.5 rounded-full font-bold flex items-center shadow-xs">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed mr-1.5"></span>
          5. Environmental Influence (3/3 Complete)
        </span>
</div>
</div>
</div>
{/*  STICKY BOTTOM ACTION FOOTER  */}
<div className="sticky bottom-0 w-full bg-surface-container-lowest py-space-sm px-margin-desktop shadow-xl z-20 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<button className="w-full sm:w-auto bg-surface-container hover:bg-surface-container-high text-primary px-4 py-2 rounded font-label-md text-label-md flex items-center justify-center space-x-2 transition">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Previous Test: Tare</span>
</button>
<div className="text-center text-label-sm font-label-sm text-secondary">
<div>Last modified by <strong>A. Kumar</strong> • 06 Sep 2026, 12:18 PM</div>
<div className="text-[11px] text-outline">Autosave active • VeriScale Engine v4.2.1 • OIML Certified Kernel</div>
</div>
<div className="w-full sm:w-auto flex items-center space-x-3">
<button className="w-full sm:w-auto bg-surface-container-low hover:bg-surface-container text-primary px-4 py-2 rounded font-label-md text-label-md font-medium transition">
        ✓ Mark Test Complete
      </button>
<button className="w-full sm:w-auto bg-primary-container hover:bg-primary text-on-primary px-5 py-2.5 rounded font-label-md text-label-md font-bold flex items-center justify-center space-x-2 shadow-md transition">
<span>Continue to Step 05 Compliance Assessment</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div></main>
    </div>
  );
}
