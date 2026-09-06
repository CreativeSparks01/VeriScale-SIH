import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function TestEccentricLoading() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full text-on-surface bg-background antialiased selection:bg-secondary-container selection:text-primary">
{/*  TOP TELEMETRY & SYSTEM UTILITY STRIP  */}
<div className="w-full bg-primary text-on-primary px-margin-mobile lg:px-margin-desktop py-space-xs flex flex-wrap items-center justify-between gap-space-sm text-label-sm shadow-md">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-2xs tracking-wider">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
<span className="font-metric-tabular uppercase text-surface-container-high">COM1: 9600 BAUD [ONLINE]</span>
</div>
<div className="h-3 w-px bg-secondary opacity-40"></div>
<div className="flex items-center gap-1 font-metric-tabular text-tertiary-fixed font-semibold tracking-wider">
<span className="material-symbols-outlined text-[15px]">center_focus_strong</span>
<span>[-&gt;0&lt;-] STABLE ZERO</span>
</div>
<div className="h-3 w-px bg-secondary opacity-40"></div>
<div className="flex items-center gap-1.5 font-metric-tabular">
<span className="text-surface-container-high">LIVE WEIGHT:</span>
<span className="text-on-primary font-bold px-1.5 py-0.5 rounded bg-tertiary-container text-tertiary-fixed">20.020 kg NET</span>
</div>
</div>
<div className="flex items-center gap-space-md ml-auto">
<span className="text-secondary-fixed-dim font-body-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">history</span>
        Saved 6 seconds ago
      </span>
<button className="bg-surface-container-low/10 hover:bg-surface-container-low/20 text-on-primary px-space-sm py-1 rounded text-label-sm transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">save</span>
        Save Draft
      </button>
<button className="bg-error/80 hover:bg-error text-on-error px-space-sm py-1 rounded text-label-sm transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">close</span>
        Exit Test
      </button>
</div>
</div>
{/*  BREADCRUMB & PRIMARY CONTEXT STRIP  */}
<div className="w-full bg-surface-container-lowest shadow-sm px-margin-mobile lg:px-margin-desktop py-space-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs text-label-sm text-secondary">
<span className="hover:text-primary cursor-pointer">Tests</span>
<span className="text-outline-variant">/</span>
<span className="font-metric-tabular font-medium text-primary">TEST-012</span>
<span className="text-outline-variant">/</span>
<span className="hover:text-primary cursor-pointer">Observations</span>
<span className="text-outline-variant">/</span>
<span className="text-on-surface font-semibold">Eccentric Loading</span>
</div>
<div className="flex items-center gap-2">
<span className="bg-surface-container-high text-primary font-metric-tabular text-label-sm px-space-sm py-0.5 rounded font-semibold tracking-wider">ROUTINE 03 OF 04</span>
<span className="bg-secondary-container text-on-secondary-container text-label-sm px-space-sm py-0.5 rounded font-semibold">OIML R 76-1 § A.4.7</span>
</div>
</div>
<div className="mt-space-xs flex flex-col md:flex-row md:items-baseline justify-between gap-2">
<div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">Eccentric Loading Test</h1>
<p className="font-body-md text-body-md text-secondary">Record indications at the applicable loading positions on the load receptor in accordance with OIML R 76-1 § A.4.7 / Clause 3.6.2.</p>
</div>
<div className="flex items-center gap-space-xs shrink-0 self-start md:self-auto">
<span className="inline-flex items-center px-2 py-0.5 rounded text-label-sm font-semibold bg-tertiary-fixed-dim/20 text-tertiary-container">
          CLASS III NAWI
        </span>
</div>
</div>
</div>
{/*  8-STAGE WORKFLOW STEPPER  */}
<div className="w-full bg-surface-container-low px-margin-mobile lg:px-margin-desktop py-space-sm overflow-x-auto shadow-inner">
<div className="flex items-center min-w-[960px] justify-between gap-space-xs">
{/*  Step 1  */}
<div className="flex items-center gap-1.5 text-label-sm text-primary font-medium opacity-90">
<span className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="truncate">01 INSTRUMENT: WT-100 Verified</span>
</div>
<span className="text-outline-variant text-[10px]">▶</span>
{/*  Step 2  */}
<div className="flex items-center gap-1.5 text-label-sm text-primary font-medium opacity-90">
<span className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="truncate">02 LAB CONDITIONS: Stable</span>
</div>
<span className="text-outline-variant text-[10px]">▶</span>
{/*  Step 3  */}
<div className="flex items-center gap-1.5 text-label-sm text-primary font-medium opacity-90">
<span className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">✓</span>
<span className="truncate">03 SELECTION: 4 </span>
</div>
<span className="text-outline-variant text-[10px]">▶</span>
{/*  Step 4 Active  */}
<div className="flex items-center gap-2 bg-primary-container text-on-primary px-space-sm py-1.5 rounded shadow-sm">
<span className="w-5 h-5 rounded-full bg-tertiary-fixed text-tertiary font-bold flex items-center justify-center text-[11px]">04</span>
<span className="font-semibold text-label-sm">OBSERVATIONS</span>
<span className="bg-tertiary text-tertiary-fixed px-1.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">Eccentric</span>
</div>
<span className="text-outline-variant text-[10px]">▶</span>
{/*  Step 5  */}
<div className="flex items-center gap-1.5 text-label-sm text-secondary opacity-60">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-[10px] font-semibold">05</span>
<span className="truncate">COMPLIANCE</span>
</div>
<span className="text-outline-variant text-[10px]">▶</span>
{/*  Step 6  */}
<div className="flex items-center gap-1.5 text-label-sm text-secondary opacity-60">
<span className="w-5 h-5 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center text-[10px] font-semibold">06</span>
<span className="truncate">EVIDENCE</span>
</div>
<span className="text-outline-variant text-[10px]">▶</span>
{/*  Step 7 & 8  */}
<div className="flex items-center gap-1 text-label-sm text-secondary opacity-40">
<span>07 REVIEW</span>
<span>/</span>
<span>08 REPORT</span>
</div>
</div>
</div>
{/*  MAIN VIEWPORT GRID  */}
<div className="w-full px-margin-mobile lg:px-margin-desktop py-space-md flex flex-col gap-space-md">
{/*  INSTRUMENT SPECIFICATION & CONTEXT STRIP  */}
<div className="w-full bg-surface-container-lowest rounded shadow-sm p-space-sm grid grid-cols-2 md:grid-cols-5 gap-space-sm text-body-sm items-center">
<div>
<span className="block text-label-sm text-secondary font-medium uppercase tracking-wider">Instrument</span>
<span className="font-semibold text-primary">ABC WeighTech WT-100</span>
<span className="text-[11px] text-secondary block font-metric-tabular">(Class III NAWI)</span>
</div>
<div>
<span className="block text-label-sm text-secondary font-medium uppercase tracking-wider">Serial Number</span>
<span className="font-metric-tabular font-medium text-on-surface">WT100-2026-001</span>
</div>
<div>
<span className="block text-label-sm text-secondary font-medium uppercase tracking-wider">Test ID &amp; Lab</span>
<span className="font-metric-tabular font-medium text-on-surface">TEST-012</span>
<span className="text-[11px] text-secondary block truncate">XYZ Metrology Lab</span>
</div>
<div>
<span className="block text-label-sm text-secondary font-medium uppercase tracking-wider">Technician / Stamp</span>
<span className="font-medium text-on-surface">A. Kumar (TECH-409)</span>
<span className="text-[11px] text-secondary block font-metric-tabular">06 Sep 2026 11:36 AM</span>
</div>
<div className="flex flex-col md:items-end justify-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-secondary-container text-on-secondary-container mb-1">
          IN PROGRESS
        </span>
<a className="text-label-sm text-primary-container font-semibold hover:underline flex items-center gap-0.5" href="#">
          View Profile <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
</a>
</div>
</div>
{/*  ROUTINE SPECIFICATION BANNER  */}
<div className="w-full bg-surface-container rounded shadow-sm p-space-md flex flex-col lg:flex-row justify-between gap-space-md items-start lg:items-center">
<div className="max-w-2xl">
<div className="flex items-center gap-space-xs flex-wrap mb-1">
<span className="font-headline-sm text-headline-sm text-primary font-bold">Eccentric Loading Routine</span>
<span className="bg-primary text-on-primary text-label-sm px-2 py-0.5 rounded font-mono font-medium">OIML R 76-1 § A.4.7</span>
<span className="bg-tertiary-container text-tertiary-fixed text-label-sm px-2 py-0.5 rounded font-bold">5 / 5 Complete ✓</span>
</div>
<p className="text-body-sm text-secondary">
          Evaluate the effect of eccentric loading by applying the specified test load to off-center positions across the load receptor surface.
        </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm w-full lg:w-auto">
<div className="bg-surface-container-lowest p-2 rounded shadow-sm">
<span className="block text-[10px] text-secondary uppercase font-semibold">Scale Interval (e)</span>
<span className="font-metric-tabular text-body-md font-bold text-primary">10 g</span>
</div>
<div className="bg-surface-container-lowest p-2 rounded shadow-sm">
<span className="block text-[10px] text-secondary uppercase font-semibold">Accuracy Class</span>
<span className="font-metric-tabular text-body-md font-bold text-primary">( III ) Medium</span>
</div>
<div className="bg-surface-container-lowest p-2 rounded shadow-sm">
<span className="block text-[10px] text-secondary uppercase font-semibold">Max Capacity</span>
<span className="font-metric-tabular text-body-md font-bold text-primary">100.000 kg</span>
</div>
<div className="bg-surface-container-lowest p-2 rounded shadow-sm">
<span className="block text-[10px] text-secondary uppercase font-semibold">Min Capacity</span>
<span className="font-metric-tabular text-body-md font-bold text-primary">0.200 kg</span>
</div>
<div className="bg-tertiary-container text-on-tertiary p-2 rounded shadow-sm col-span-2 sm:col-span-1">
<span className="block text-[10px] text-tertiary-fixed uppercase font-semibold">Applied Test Load</span>
<span className="font-metric-tabular text-body-md font-bold text-tertiary-fixed">20.000 kg</span>
</div>
</div>
</div>
{/*  SECTION 1: ECCENTRIC LOADING CONFIGURATION  */}
<div className="w-full bg-surface-container-lowest rounded shadow-sm p-space-md">
<div className="flex items-center justify-between mb-space-sm">
<h2 className="font-headline-sm text-headline-sm text-primary font-bold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[20px] text-primary-container">tune</span>
          Eccentric Loading Configuration
        </h2>
<button className="text-label-sm font-semibold text-primary-container bg-surface-container hover:bg-surface-container-high px-space-sm py-1 rounded transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">sync</span>
          Load from Test Program
        </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
<div className="flex flex-col gap-1">
<label className="text-label-sm text-secondary font-medium">Test Load (L)</label>
<div className="flex items-center bg-surface-container-low rounded overflow-hidden shadow-inner">
<input className="w-full bg-transparent px-space-sm py-1.5 font-metric-tabular text-primary font-bold text-right outline-none" readOnly="" type="text" defaultValue="20.000"/>
<span className="bg-surface-container px-2 py-1.5 text-label-sm font-medium text-secondary">kg</span>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="text-label-sm text-secondary font-medium">Loading Pattern</label>
<div className="bg-surface-container-low rounded px-space-sm py-1.5 text-body-sm font-medium text-on-surface truncate">
            5-Point Rectangular (Corners + Center)
          </div>
</div>
<div className="flex flex-col gap-1">
<label className="text-label-sm text-secondary font-medium">Number of Positions</label>
<div className="bg-surface-container-low rounded px-space-sm py-1.5 text-body-sm font-metric-tabular font-bold text-on-surface">
            5 Positions (P1 - P5)
          </div>
</div>
<div className="flex flex-col gap-1">
<label className="text-label-sm text-secondary font-medium">Reference Position</label>
<div className="bg-surface-container-low rounded px-space-sm py-1.5 text-body-sm font-medium text-on-surface">
            Center (P3 / Zero Ref)
          </div>
</div>
<div className="flex flex-col gap-1">
<label className="text-label-sm text-secondary font-medium">Load Receptor Type</label>
<div className="bg-surface-container-low rounded px-space-sm py-1.5 text-body-sm font-medium text-on-surface">
            Rectangular (600 × 800 mm)
          </div>
</div>
</div>
<p className="mt-space-sm text-[11px] text-secondary flex items-center gap-1 font-metric-tabular">
<span className="material-symbols-outlined text-[14px]">info</span>
        Loading positions and arrangement configured according to OIML R 76-1 § A.4.7.1 for instruments with 4 points of support. Nominal load: ~1/3 Max capacity.
      </p>
</div>
{/*  SECTION 2: INTERACTIVE SCHEMATIC & ACTIVE POSITION INSPECTOR  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
{/*  Schematic View (7 Cols)  */}
<div className="lg:col-span-7 bg-surface-container-lowest rounded shadow-sm p-space-md flex flex-col justify-between">
<div className="flex items-center justify-between mb-space-sm">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Load Receptor Schematic</h3>
<p className="text-[11px] text-secondary">Top-Down Engineering Representation (OIML R 76-1 § A.4.7.1)</p>
</div>
<div className="flex items-center gap-space-sm text-[11px] font-metric-tabular">
<span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-variant"></span> </span>
<span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-primary"></span> Recorded (5)</span>
<span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> Center Ref</span>
</div>
</div>
{/*  Technical Platform Graphic Container (Inspired by Metrology Blueprint Visual)  */}
<div className="relative w-full h-80 bg-surface-container-low rounded overflow-hidden flex items-center justify-center p-space-sm shadow-inner">
{/*  Metrology Grid Blueprint Background  */}
<svg className="absolute inset-0 w-full h-full text-surface-container-highest" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="grid" patternUnits="userSpaceOnUse" width="24">
<path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeDasharray="2 2" strokeWidth="0.75"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" opacity="0.6" width="100%"></rect>
</svg>
{/*  Receptor Outer Shell Representation  */}
<div className="relative w-5/6 h-64 bg-surface-container-lowest shadow-md rounded-xl p-4 flex flex-col justify-between">
{/*  Dimension Guidelines / Offsets  */}
<div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-px bg-secondary opacity-30"></div>
<div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-px bg-secondary opacity-30"></div>
{/*  OIML 1/4 Offset Boundary Dashed Box  */}
<div className="absolute inset-10 rounded border-dashed bg-surface-container-low/20 pointer-events-none flex items-center justify-center">
<span className="text-[10px] font-metric-tabular text-secondary opacity-40 uppercase tracking-widest">1/4 Zone Boundaries</span>
</div>
{/*  Quadrant Labels  */}
<span className="absolute top-2 left-3 text-[10px] font-metric-tabular text-secondary">FRONT-LEFT (Q2)</span>
<span className="absolute top-2 right-3 text-[10px] font-metric-tabular text-secondary">FRONT-RIGHT (Q1)</span>
<span className="absolute bottom-2 left-3 text-[10px] font-metric-tabular text-secondary">REAR-LEFT (Q3)</span>
<span className="absolute bottom-2 right-3 text-[10px] font-metric-tabular text-secondary">REAR-RIGHT (Q4)</span>
{/*  Position Markers (P1 to P5)  */}
{/*  P1: Front Left  */}
<div className="absolute top-12 left-14 flex flex-col items-center cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-metric-tabular font-bold text-xs shadow-md transition-transform group-hover:scale-110">
                P1
              </div>
<span className="text-[10px] font-metric-tabular font-semibold text-primary mt-1">20.010 kg</span>
</div>
{/*  P2: Front Right (Active/Targeted)  */}
<div className="absolute top-12 right-14 flex flex-col items-center cursor-pointer group">
<div className="relative flex items-center justify-center">
<span className="absolute w-12 h-12 rounded-full bg-tertiary-fixed-dim animate-ping opacity-40"></span>
<div className="w-9 h-9 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-metric-tabular font-bold text-xs shadow-lg transition-transform group-hover:scale-110 ring-2 ring-tertiary-fixed ring-offset-2">
                  P2
                </div>
</div>
<span className="text-[11px] font-metric-tabular font-bold text-tertiary-container mt-1 bg-surface-container px-1 rounded">20.020 kg</span>
</div>
{/*  P3: Center Reference  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-metric-tabular font-bold text-xs shadow-md group-hover:scale-110">
                P3
              </div>
<span className="text-[10px] font-metric-tabular font-semibold text-secondary mt-1">Ref 20.005 kg</span>
</div>
{/*  P4: Rear Left  */}
<div className="absolute bottom-12 left-14 flex flex-col items-center cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-metric-tabular font-bold text-xs shadow-md group-hover:scale-110">
                P4
              </div>
<span className="text-[10px] font-metric-tabular font-semibold text-primary mt-1">20.015 kg</span>
</div>
{/*  P5: Rear Right  */}
<div className="absolute bottom-12 right-14 flex flex-col items-center cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-metric-tabular font-bold text-xs shadow-md group-hover:scale-110">
                P5
              </div>
<span className="text-[10px] font-metric-tabular font-semibold text-primary mt-1">20.010 kg</span>
</div>
</div>
</div>
<div className="mt-space-sm flex items-center justify-between text-label-sm text-secondary">
<span>Platform Dimensions: 600 mm × 800 mm</span>
<span className="font-metric-tabular">Target Center Offset: ±200 mm X / ±250 mm Y</span>
</div>
</div>
{/*  Active Position Inspector (5 Cols)  */}
<div className="lg:col-span-5 bg-surface-container-lowest rounded shadow-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="w-7 h-7 rounded bg-tertiary-container text-tertiary-fixed font-bold font-metric-tabular flex items-center justify-center text-sm">P2</span>
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Active Position Inspector</h3>
<span className="text-[11px] text-secondary font-medium">Front-Right Quadrant (Q1)</span>
</div>
</div>
<span className="bg-surface-container text-primary font-metric-tabular text-label-sm px-2 py-0.5 rounded font-semibold">
              RECORDED ✓
            </span>
</div>
{/*  Position Telemetry Attributes  */}
<div className="space-y-space-sm text-body-sm">
<div className="flex justify-between items-center p-2 rounded bg-surface-container-low">
<span className="text-secondary font-medium">Spatial Coordinates:</span>
<span className="font-metric-tabular text-on-surface font-semibold">dx: +200 mm, dy: -250 mm</span>
</div>
<div className="flex justify-between items-center p-2 rounded bg-surface-container-low">
<span className="text-secondary font-medium">Applied Reference Load (L):</span>
<span className="font-metric-tabular text-on-surface font-bold">20.000 kg</span>
</div>
<div className="flex justify-between items-center p-2 rounded bg-surface-container-low">
<span className="text-secondary font-medium">Observed Indication (I):</span>
<span className="font-metric-tabular text-primary font-bold text-headline-sm">20.020 kg</span>
</div>
<div className="flex justify-between items-center p-2.5 rounded bg-tertiary-container text-tertiary-fixed">
<div>
<span className="block text-[11px] text-tertiary-fixed-dim uppercase tracking-wider font-semibold">Computed Error (E = I - L)</span>
<span className="font-metric-display text-metric-display leading-tight font-bold">+0.020 kg</span>
</div>
<span className="bg-tertiary text-tertiary-fixed px-2 py-1 rounded text-label-sm font-metric-tabular font-bold">
                AUTO-CALC
              </span>
</div>
<div className="p-space-sm rounded bg-surface-container-low text-body-sm">
<span className="text-secondary block text-[11px] uppercase font-semibold mb-1">Local Remark</span>
<p className="text-on-surface italic">"Corner deflection within mechanical limits; settled quickly without platform contact."</p>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm pt-space-md">
<button className="flex-1 bg-surface-container hover:bg-surface-container-high text-primary py-2 px-space-sm rounded text-label-sm font-semibold transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">swap_horiz</span>
            Switch Position
          </button>
<button className="flex-1 bg-primary-container hover:bg-primary text-on-primary py-2 px-space-sm rounded text-label-sm font-semibold transition-colors flex items-center justify-center gap-1 shadow-sm">
<span className="material-symbols-outlined text-[16px]">refresh</span>
            Re-test P2
          </button>
</div>
</div>
</div>
{/*  SECTION 3: POSITION OBSERVATIONS DATA TABLE  */}
<div className="w-full bg-surface-container-lowest rounded shadow-sm p-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-md">
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Position Observations</h3>
<span className="bg-surface-container text-primary text-label-sm font-metric-tabular px-2 py-0.5 rounded font-semibold">5 Configured Positions</span>
</div>
<p className="text-body-sm text-secondary">
            Enter indicated value recorded for each loading position. Deviation (E = I - L) is computed automatically with cryptographic audit verification.
          </p>
</div>
<div className="flex items-center gap-2 flex-wrap">
<button className="bg-surface-container hover:bg-surface-container-high text-primary text-label-sm font-semibold px-space-sm py-1.5 rounded transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">add</span>
            Add Custom Point
          </button>
<button className="bg-surface-container hover:bg-surface-container-high text-secondary text-label-sm font-semibold px-space-sm py-1.5 rounded transition-colors">
            Remove 
          </button>
<button className="bg-surface-container hover:bg-surface-container-high text-error text-label-sm font-semibold px-space-sm py-1.5 rounded transition-colors">
            Clear Observations
          </button>
</div>
</div>
{/*  Compact Technical Data Table  */}
<div className="w-full overflow-x-auto">
<table className="w-full text-left font-metric-tabular text-body-sm border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary text-label-sm uppercase tracking-wider">
<th className="py-2.5 px-3 font-semibold">Pos</th>
<th className="py-2.5 px-3 font-semibold">Loading Location</th>
<th className="py-2.5 px-3 font-semibold text-right">Reference (L)</th>
<th className="py-2.5 px-3 font-semibold text-right">Indication (I)</th>
<th className="py-2.5 px-3 font-semibold text-right">Deviation (E = I - L)</th>
<th className="py-2.5 px-3 font-semibold text-center">Unit</th>
<th className="py-2.5 px-3 font-semibold text-center">Status</th>
<th className="py-2.5 px-3 font-semibold">Technician Remarks</th>
</tr>
</thead>
<tbody className="divide-y-0">
{/*  Row P1  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-2 px-3 font-bold text-primary">P1</td>
<td className="py-2 px-3 font-body-md text-on-surface">Front Left Quadrant</td>
<td className="py-2 px-3 text-right bg-surface-container-low/50 text-secondary font-medium">20.000</td>
<td className="py-2 px-3 text-right">
<div className="inline-flex items-center bg-surface-container-lowest shadow-sm rounded px-2 py-1">
<span className="font-bold text-on-surface">20.010</span>
</div>
</td>
<td className="py-2 px-3 text-right bg-surface-container-low/30">
<span className="text-tertiary-container font-bold">+0.010</span>
<span className="text-[9px] bg-secondary-container text-on-secondary-container px-1 py-0.5 rounded ml-1 font-sans font-bold">AUTO</span>
</td>
<td className="py-2 px-3 text-center text-secondary">kg</td>
<td className="py-2 px-3 text-center">
<span className="inline-block bg-tertiary-container/10 text-tertiary-container text-[11px] font-bold px-2 py-0.5 rounded">
                  RECORDED ✓
                </span>
</td>
<td className="py-2 px-3 text-secondary font-body-sm truncate max-w-xs">Stable indication; no corner tipping detected</td>
</tr>
{/*  Row P2 Active Highlight  */}
<tr className="bg-surface-container-high/40 transition-colors">
<td className="py-2 px-3 font-bold text-tertiary-container flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> P2
              </td>
<td className="py-2 px-3 font-body-md text-on-surface font-semibold">Front Right Quadrant</td>
<td className="py-2 px-3 text-right bg-surface-container-low/50 text-secondary font-medium">20.000</td>
<td className="py-2 px-3 text-right">
<div className="inline-flex items-center bg-surface-container-lowest shadow-sm rounded px-2 py-1">
<span className="font-bold text-primary">20.020</span>
</div>
</td>
<td className="py-2 px-3 text-right bg-surface-container-low/30">
<span className="text-tertiary-container font-bold">+0.020</span>
<span className="text-[9px] bg-secondary-container text-on-secondary-container px-1 py-0.5 rounded ml-1 font-sans font-bold">AUTO</span>
</td>
<td className="py-2 px-3 text-center text-secondary font-bold">kg</td>
<td className="py-2 px-3 text-center">
<span className="inline-block bg-tertiary text-on-tertiary text-[11px] font-bold px-2 py-0.5 rounded">
                  ACTIVE REF ✓
                </span>
</td>
<td className="py-2 px-3 text-secondary font-body-sm truncate max-w-xs">Corner deflection within mechanical limits</td>
</tr>
{/*  Row P3  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-2 px-3 font-bold text-primary">P3</td>
<td className="py-2 px-3 font-body-md text-on-surface">Geometric Center (Ref)</td>
<td className="py-2 px-3 text-right bg-surface-container-low/50 text-secondary font-medium">20.000</td>
<td className="py-2 px-3 text-right">
<div className="inline-flex items-center bg-surface-container-lowest shadow-sm rounded px-2 py-1">
<span className="font-bold text-on-surface">20.005</span>
</div>
</td>
<td className="py-2 px-3 text-right bg-surface-container-low/30">
<span className="text-tertiary-container font-bold">+0.005</span>
<span className="text-[9px] bg-secondary-container text-on-secondary-container px-1 py-0.5 rounded ml-1 font-sans font-bold">AUTO</span>
</td>
<td className="py-2 px-3 text-center text-secondary">kg</td>
<td className="py-2 px-3 text-center">
<span className="inline-block bg-tertiary-container/10 text-tertiary-container text-[11px] font-bold px-2 py-0.5 rounded">
                  RECORDED ✓
                </span>
</td>
<td className="py-2 px-3 text-secondary font-body-sm truncate max-w-xs">Geometric center baseline reading</td>
</tr>
{/*  Row P4  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-2 px-3 font-bold text-primary">P4</td>
<td className="py-2 px-3 font-body-md text-on-surface">Rear Left Quadrant</td>
<td className="py-2 px-3 text-right bg-surface-container-low/50 text-secondary font-medium">20.000</td>
<td className="py-2 px-3 text-right">
<div className="inline-flex items-center bg-surface-container-lowest shadow-sm rounded px-2 py-1">
<span className="font-bold text-on-surface">20.015</span>
</div>
</td>
<td className="py-2 px-3 text-right bg-surface-container-low/30">
<span className="text-tertiary-container font-bold">+0.015</span>
<span className="text-[9px] bg-secondary-container text-on-secondary-container px-1 py-0.5 rounded ml-1 font-sans font-bold">AUTO</span>
</td>
<td className="py-2 px-3 text-center text-secondary">kg</td>
<td className="py-2 px-3 text-center">
<span className="inline-block bg-tertiary-container/10 text-tertiary-container text-[11px] font-bold px-2 py-0.5 rounded">
                  RECORDED ✓
                </span>
</td>
<td className="py-2 px-3 text-secondary font-body-sm truncate max-w-xs">Smooth load transfer; settled in 2.1s</td>
</tr>
{/*  Row P5  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-2 px-3 font-bold text-primary">P5</td>
<td className="py-2 px-3 font-body-md text-on-surface">Rear Right Quadrant</td>
<td className="py-2 px-3 text-right bg-surface-container-low/50 text-secondary font-medium">20.000</td>
<td className="py-2 px-3 text-right">
<div className="inline-flex items-center bg-surface-container-lowest shadow-sm rounded px-2 py-1">
<span className="font-bold text-on-surface">20.010</span>
</div>
</td>
<td className="py-2 px-3 text-right bg-surface-container-low/30">
<span className="text-tertiary-container font-bold">+0.010</span>
<span className="text-[9px] bg-secondary-container text-on-secondary-container px-1 py-0.5 rounded ml-1 font-sans font-bold">AUTO</span>
</td>
<td className="py-2 px-3 text-center text-secondary">kg</td>
<td className="py-2 px-3 text-center">
<span className="inline-block bg-tertiary-container/10 text-tertiary-container text-[11px] font-bold px-2 py-0.5 rounded">
                  RECORDED ✓
                </span>
</td>
<td className="py-2 px-3 text-secondary font-body-sm truncate max-w-xs">Final corner verification complete</td>
</tr>
</tbody>
</table>
</div>
{/*  AUDIT HASH SIGNATURE STRIP  */}
<div className="mt-space-sm bg-surface-container-low p-2 rounded flex flex-col md:flex-row items-center justify-between text-[11px] text-secondary gap-1">
<div className="flex items-center gap-1 font-metric-tabular">
<span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
<span>Formula Enforced: Deviation (E) = Indication (I) - Reference Load (L). Manual overriding restricted.</span>
</div>
<div className="font-metric-tabular text-primary font-medium">
          SHA-256: 3d7a9b0c...8e21 • AUDIT HASH VALID
        </div>
</div>
</div>
{/*  SECTIONS 4 & 5: COMPARATIVE STATISTICS & VISUAL DISPERSION (4-CARD GRID)  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/*  Card 1: Calculated Summary  */}
<div className="bg-surface-container-lowest rounded shadow-sm p-space-md flex flex-col justify-between">
<div>
<h4 className="text-label-sm font-semibold uppercase text-secondary tracking-wider mb-2">Calculated Summary</h4>
<div className="space-y-2 text-body-sm font-metric-tabular">
<div className="flex justify-between">
<span className="text-secondary">Highest Indication:</span>
<span className="font-bold text-primary">20.020 kg <span className="text-[10px] font-normal text-secondary">(P2)</span></span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Lowest Indication:</span>
<span className="font-bold text-primary">20.005 kg <span className="text-[10px] font-normal text-secondary">(P3)</span></span>
</div>
<div className="flex justify-between bg-surface-container-low p-1.5 rounded">
<span className="text-secondary font-semibold">Observed Spread (Δ):</span>
<span className="font-bold text-tertiary-container">0.015 kg</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Mean Indication:</span>
<span className="font-medium text-on-surface">20.012 kg</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Max Abs Deviation:</span>
<span className="font-bold text-on-surface">+0.020 kg</span>
</div>
</div>
</div>
<div className="mt-space-md pt-2 text-[10px] text-secondary font-metric-tabular">
          Computed across n = 5 verified positions
        </div>
</div>
{/*  Card 2: Indication by Position (Visual Scatter/Plot)  */}
<div className="bg-surface-container-lowest rounded shadow-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-1">
<h4 className="text-label-sm font-semibold uppercase text-secondary tracking-wider">Indication by Position</h4>
<span className="text-[10px] font-metric-tabular text-tertiary font-bold">Δ = 0.015 kg</span>
</div>
<p className="text-[11px] text-secondary mb-3">Quadrant dispersion relative to baseline</p>
{/*  Restrained Metrology Scatter Chart (Inline SVG)  */}
<div className="w-full h-28 bg-surface-container-low rounded p-2 flex flex-col justify-between relative shadow-inner">
<svg className="w-full h-full" fill="none" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
{/*  Zero Baseline  */}
<line className="text-outline-variant" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1" x1="10" x2="230" y1="65" y2="65"></line>
<text className="text-[8px] font-metric-tabular text-secondary" fill="currentColor" x="12" y="75">Nominal (20.000)</text>
{/*  Gaussian Curve Visual Accent per inspiration  */}
<path className="text-secondary-fixed-dim" d="M 20 65 Q 120 15 220 65" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
{/*  Points P1 to P5  */}
{/*  P1 (+0.010)  */}
<circle className="fill-primary" cx="45" cy="45" r="3.5"></circle>
<text className="text-[8px] font-metric-tabular fill-primary font-bold" x="40" y="38">P1</text>
{/*  P2 (+0.020) Peak  */}
<circle className="fill-tertiary" cx="90" cy="25" r="4.5"></circle>
<text className="text-[8px] font-metric-tabular fill-tertiary-container font-bold" x="85" y="18">P2</text>
{/*  P3 (+0.005)  */}
<circle className="fill-secondary" cx="130" cy="55" r="3.5"></circle>
<text className="text-[8px] font-metric-tabular fill-secondary font-bold" x="126" y="48">P3</text>
{/*  P4 (+0.015)  */}
<circle className="fill-primary" cx="170" cy="35" r="3.5"></circle>
<text className="text-[8px] font-metric-tabular fill-primary font-bold" x="165" y="28">P4</text>
{/*  P5 (+0.010)  */}
<circle className="fill-primary" cx="210" cy="45" r="3.5"></circle>
<text className="text-[8px] font-metric-tabular fill-primary font-bold" x="205" y="38">P5</text>
</svg>
</div>
</div>
<div className="mt-2 text-[10px] text-secondary font-metric-tabular flex justify-between">
<span>Receptor Quad Dispersion</span>
<span className="font-semibold text-primary">n = 5 positions</span>
</div>
</div>
{/*  Card 3: Data Validation Gate  */}
<div className="bg-surface-container-lowest rounded shadow-sm p-space-md flex flex-col justify-between">
<div>
<h4 className="text-label-sm font-semibold uppercase text-secondary tracking-wider mb-2">Data Validation Gate</h4>
<div className="space-y-1.5 text-body-sm">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
<span className="text-[12px]">5 required positions captured</span>
</div>
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
<span className="text-[12px]">Values within resolution (10 g)</span>
</div>
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
<span className="text-[12px]">Eccentric distribution valid</span>
</div>
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">check_circle</span>
<span className="text-[12px]">Deviations auto-synchronized</span>
</div>
</div>
</div>
<div className="mt-space-md p-2 bg-tertiary-container/10 rounded">
<span className="block text-[11px] font-bold text-tertiary-container uppercase tracking-wider text-center">
            OBSERVATIONS VALIDATED ✓ READY FOR SIGN-OFF
          </span>
</div>
</div>
{/*  Card 4: Rule Standard Link  */}
<div className="bg-surface-container-lowest rounded shadow-sm p-space-md flex flex-col justify-between">
<div>
<h4 className="text-label-sm font-semibold uppercase text-secondary tracking-wider mb-2">Rule Standard Link</h4>
<div className="space-y-1 text-body-sm font-metric-tabular mb-3">
<div className="flex justify-between">
<span className="text-secondary">Reference Load:</span>
<span className="font-bold text-primary">20.000 kg (1/3 Max)</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Observed Spread:</span>
<span className="font-bold text-primary">0.015 kg</span>
</div>
<div className="flex justify-between">
<span className="text-secondary">Largest Deviation:</span>
<span className="font-bold text-primary">+0.020 kg</span>
</div>
</div>
<div className="p-2 bg-surface-container-high rounded text-[11px] text-secondary">
<span className="font-bold text-primary block mb-0.5">PENDING COMPLIANCE ASSESSMENT</span>
            Evaluated in Step 05 with mpe thresholds for off-center loading per OIML R 76-1 § 3.6.2.
          </div>
</div>
<div className="mt-2 text-[10px] text-secondary font-metric-tabular flex justify-between">
<span>Rule Set: R76-2026.1</span>
<span className="font-semibold text-primary">Class III Verification</span>
</div>
</div>
</div>
{/*  SECTION 6: PROCEDURE CONFIRMATION CHECKLIST & FIELD NOTES  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
{/*  Checklist Panel  */}
<div className="bg-surface-container-lowest rounded shadow-sm p-space-md">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-1">Procedure Execution Checklist</h3>
<p className="text-body-sm text-secondary mb-space-sm">Regulatory confirmations required prior to laboratory sign-off</p>
<div className="space-y-2.5">
<label className="flex items-start gap-2.5 p-2 rounded hover:bg-surface-container-low cursor-pointer">
<input defaultChecked="" className="mt-0.5 rounded text-primary focus:ring-primary accent-primary w-4 h-4" type="checkbox"/>
<span className="text-body-sm text-on-surface">Load applied precisely at indicated quadrant centers (1/4 distance from receptor edges).</span>
</label>
<label className="flex items-start gap-2.5 p-2 rounded hover:bg-surface-container-low cursor-pointer">
<input defaultChecked="" className="mt-0.5 rounded text-primary focus:ring-primary accent-primary w-4 h-4" type="checkbox"/>
<span className="text-body-sm text-on-surface">Instrument indication allowed to thermally and mechanically stabilize before logging.</span>
</label>
<label className="flex items-start gap-2.5 p-2 rounded hover:bg-surface-container-low cursor-pointer">
<input defaultChecked="" className="mt-0.5 rounded text-primary focus:ring-primary accent-primary w-4 h-4" type="checkbox"/>
<span className="text-body-sm text-on-surface">Test load lifted vertically without lateral dragging across the platform surface.</span>
</label>
<label className="flex items-start gap-2.5 p-2 rounded hover:bg-surface-container-low cursor-pointer">
<input defaultChecked="" className="mt-0.5 rounded text-primary focus:ring-primary accent-primary w-4 h-4" type="checkbox"/>
<span className="text-body-sm text-on-surface">Zero-setting and tare-tracking remained locked throughout 5-position sequence.</span>
</label>
</div>
</div>
{/*  Technician Notes Field  */}
<div className="bg-surface-container-lowest rounded shadow-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-1">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Technician Field Notes</h3>
<span className="text-[11px] text-secondary font-metric-tabular">268 / 500 characters</span>
</div>
<p className="text-body-sm text-secondary mb-2">Record environmental anomalies or mechanical remarks.</p>
<textarea className="w-full bg-surface-container-low rounded p-2.5 text-body-sm font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container shadow-inner" placeholder="Enter test observation notes..." rows="4" defaultValue={"Class M1 20 kg cylindrical weight applied sequentially to positions P1 through P5. Draft shield enclosed; vibration isolation dampers active. Maximum corner variance observed at P2 (+20g), well within preliminary mechanical tolerances."} />
</div>
<p className="mt-2 text-[11px] text-secondary italic">
          * Note: Do not manually enter calculated results or legal compliance decisions in field notes.
        </p>
</div>
</div>
{/*  EVIDENCE & ARTIFACTS REMINDER BANNER  */}
<div className="w-full bg-surface-container rounded shadow-sm p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">attachment</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Stage 06 Prerequisite Artifacts</h4>
<p className="text-body-sm text-secondary">
            Calibration standard weight certificates, eccentric load quadrant placement photographs, and platform level bubble verification will be reviewed and digitally signed during Step 06 Evidence.
          </p>
<a className="text-label-sm font-semibold text-primary hover:underline mt-1 inline-block" href="#">
            Pending Load Receptor Setup Photo &amp; Certificate Link (CAL-WT-2024) ↗
          </a>
</div>
</div>
<button className="shrink-0 bg-surface-container-lowest hover:bg-surface-container-high text-primary font-semibold text-label-sm px-space-md py-2 rounded shadow-sm transition-colors">
        Add Attachments Later
      </button>
</div>
{/*  PERSISTENT WORKFLOW ACTION BAR / FOOTER  */}
<div className="w-full bg-surface-container-lowest rounded shadow-md p-space-md flex flex-col md:flex-row items-center justify-between gap-space-md my-space-sm">
<div className="flex flex-col">
<span className="text-body-sm text-secondary font-medium">
          Last modified by <strong className="text-on-surface">A. Kumar</strong> • 06 Sep 2026 • 11:36 AM
        </span>
<span className="text-[11px] text-tertiary-container font-semibold flex items-center gap-1">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
          Auto-save active • VeriScale OIML Engine v4.2.1
        </span>
</div>
<div className="flex items-center gap-space-sm flex-wrap w-full md:w-auto justify-end">
<button className="bg-surface-container hover:bg-surface-container-high text-primary px-space-md py-2 rounded text-label-sm font-semibold transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Previous: Repeatability
        </button>
<button className="bg-surface-container-low hover:bg-surface-container text-secondary px-space-md py-2 rounded text-label-sm font-semibold transition-colors">
          Save Draft
        </button>
<button className="bg-tertiary-container hover:bg-tertiary text-on-tertiary px-space-md py-2 rounded text-label-sm font-bold transition-colors flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary-fixed">done_all</span>
          Mark Test Complete
        </button>
<button className="bg-primary hover:bg-primary-container text-on-primary px-space-lg py-2 rounded text-label-sm font-bold transition-colors flex items-center gap-1.5 shadow-md">
          Next Test: Zero Checks
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
