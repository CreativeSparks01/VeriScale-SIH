import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function TestObservationsWorkspace() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full font-body-md text-on-surface bg-background">
{/*  Top Metrology Workspace Header  */}
<header className="w-full bg-surface-container-lowest px-margin-desktop py-space-md shadow-sm">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-secondary font-label-sm uppercase tracking-wider">
<span>Verification Tests</span>
<span className="material-symbols-outlined text-outline" style={{"fontSize":"14px"}}>chevron_right</span>
<span className="font-metric-tabular">TEST-012</span>
<span className="material-symbols-outlined text-outline" style={{"fontSize":"14px"}}>chevron_right</span>
<span className="text-primary font-semibold">Observations</span>
</div>
<div className="flex items-baseline gap-space-sm mt-space-2xs">
<h1 className="font-headline-lg text-primary tracking-tight">Test Observations</h1>
<span className="font-body-sm text-secondary hidden sm:inline">Record measurements and verified indications for the  legal-metrology test procedures.</span>
</div>
</div>
<div className="flex items-center gap-space-md self-end md:self-auto">
<div className="flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-low rounded-lg text-secondary font-label-md">
<span className="material-symbols-outlined text-primary text-[18px]">cloud_done</span>
<span>Saved 12s ago</span>
</div>
<button className="px-space-md py-1.5 bg-surface-container-high hover:bg-surface-container text-primary font-label-md rounded-lg transition-colors" type="button">
          Save Draft
        </button>
<button className="px-space-sm py-1.5 text-secondary hover:text-error font-label-md rounded-lg transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">logout</span>
          Exit Test
        </button>
</div>
</div>
</header>
{/*  8-Step OIML Workflow Stepper Strip  */}
<section className="w-full bg-surface-container-low px-margin-desktop py-space-sm shadow-sm overflow-x-auto">
<div className="max-w-[1600px] mx-auto min-w-[960px] flex items-center justify-between gap-space-xs">
{/*  Step 1  */}
<div className="flex items-center gap-2 text-secondary opacity-90">
<span className="w-5 h-5 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-label-sm">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<span className="font-label-sm uppercase font-semibold">01 Instrument</span>
</div>
<span className="h-0.5 w-6 bg-surface-variant"></span>
{/*  Step 2  */}
<div className="flex items-center gap-2 text-secondary opacity-90">
<span className="w-5 h-5 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-label-sm">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<span className="font-label-sm uppercase font-semibold">02 Laboratory &amp; Conditions</span>
</div>
<span className="h-0.5 w-6 bg-surface-variant"></span>
{/*  Step 3  */}
<div className="flex items-center gap-2 text-secondary opacity-90">
<span className="w-5 h-5 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-label-sm">
<span className="material-symbols-outlined text-[14px]">check</span>
</span>
<span className="font-label-sm uppercase font-semibold">03 Test Selection</span>
</div>
<span className="h-0.5 w-6 bg-primary"></span>
{/*  Step 4 ACTIVE  */}
<div className="flex items-center gap-2 px-space-sm py-1 bg-surface-container-lowest rounded-full shadow-sm">
<span className="w-5 h-5 rounded-full bg-tertiary-container text-tertiary-fixed flex items-center justify-center font-label-sm">
<span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings":"'FILL' 1"}}>fiber_manual_record</span>
</span>
<span className="font-label-sm uppercase font-bold text-primary">04 Observations</span>
<span className="px-1.5 py-0.2 bg-tertiary text-tertiary-fixed text-[10px] font-bold rounded">ACTIVE</span>
</div>
<span className="h-0.5 w-6 bg-surface-variant"></span>
{/*  Step 5  */}
<div className="flex items-center gap-2 text-outline">
<span className="w-5 h-5 rounded-full bg-surface-variant flex items-center justify-center font-label-sm text-secondary">05</span>
<span className="font-label-sm uppercase font-medium">Compliance</span>
</div>
<span className="h-0.5 w-6 bg-surface-variant"></span>
{/*  Step 6  */}
<div className="flex items-center gap-2 text-outline">
<span className="w-5 h-5 rounded-full bg-surface-variant flex items-center justify-center font-label-sm text-secondary">06</span>
<span className="font-label-sm uppercase font-medium">Evidence</span>
</div>
<span className="h-0.5 w-6 bg-surface-variant"></span>
{/*  Step 7  */}
<div className="flex items-center gap-2 text-outline">
<span className="w-5 h-5 rounded-full bg-surface-variant flex items-center justify-center font-label-sm text-secondary">07</span>
<span className="font-label-sm uppercase font-medium">Review</span>
</div>
<span className="h-0.5 w-6 bg-surface-variant"></span>
{/*  Step 8  */}
<div className="flex items-center gap-2 text-outline">
<span className="w-5 h-5 rounded-full bg-surface-variant flex items-center justify-center font-label-sm text-secondary">08</span>
<span className="font-label-sm uppercase font-medium">Report</span>
</div>
</div>
</section>
{/*  Session Context Bar (Locked Metadata)  */}
<section className="w-full bg-surface-container px-margin-desktop py-space-xs">
<div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-y-2 text-secondary font-label-md">
<div className="flex flex-wrap items-center gap-x-space-lg gap-y-1">
<div className="flex items-center gap-1.5">
<span className="font-bold text-primary">Instrument:</span>
<span className="text-on-surface">ABC WeighTech WT-100</span>
<span className="px-1.5 py-0.5 bg-surface-container-high rounded text-[11px] font-metric-tabular text-primary font-semibold">(III) Non-Automatic</span>
</div>
<div className="flex items-center gap-1.5">
<span className="font-bold text-primary">Serial:</span>
<span className="font-metric-tabular text-on-surface">WT100-2026-001</span>
</div>
<div className="flex items-center gap-1.5">
<span className="font-bold text-primary">Lab:</span>
<span className="text-on-surface">XYZ Metrology Lab • Suite 02</span>
</div>
<div className="flex items-center gap-1.5">
<span className="font-bold text-primary">Inspector:</span>
<span className="text-on-surface">A. Kumar (TECH-409)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="font-bold text-primary">Started:</span>
<span className="font-metric-tabular text-on-surface">06 Sep 2026 • 10:42 AM</span>
</div>
<div className="flex items-center">
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-label-sm font-bold uppercase rounded-full tracking-wider">
            In Progress
          </span>
</div>
</div>
<a className="text-primary hover:text-secondary flex items-center gap-1 font-semibold text-[13px] group" href="#">
<span>View Full Instrument Profile</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">north_east</span>
</a>
</div>
</section>
{/*  Main Split Body Workspace  */}
<main className="w-full max-w-[1600px] mx-auto px-margin-desktop py-space-lg flex-1">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT COLUMN: Test Procedure Navigation List (Approx 280-300px on desktop)  */}
<aside className="lg:col-span-3 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-primary">Test Procedures</h2>
<span className="font-label-sm uppercase font-bold text-secondary">2 of 4 Done</span>
</div>
{/*  Progress Bar Component  */}
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width":"50%"}}></div>
</div>
<p className="font-body-sm text-secondary">Procedures must be completed sequentially per test plan configuration.</p>
{/*  Navigation List Items  */}
<nav className="flex flex-col gap-space-xs mt-space-xs">
{/*  Procedure 01: Completed  */}
<button className="w-full text-left p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex items-start gap-space-sm" type="button">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">check</span>
</span>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md font-semibold text-primary truncate">01 Accuracy / Error</span>
<span className="font-label-sm text-primary font-bold">Passed</span>
</div>
<div className="font-body-sm text-secondary mt-0.5 flex items-center gap-1">
<span className="font-metric-tabular">10/10</span> points verified
                </div>
</div>
</button>
{/*  Procedure 02: ACTIVE CURRENT SELECTION  */}
<div className="w-full p-space-sm rounded-lg bg-surface-container-high shadow-sm flex items-start gap-space-sm relative">
<span className="absolute left-0 top-2 bottom-2 w-1 bg-primary rounded-r"></span>
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings":"'FILL' 1"}}>play_arrow</span>
</span>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md font-bold text-primary truncate">02 Repeatability</span>
<span className="px-1.5 py-0.2 bg-primary text-on-primary text-[10px] font-bold rounded uppercase">Active</span>
</div>
<div className="font-body-sm text-primary mt-0.5 flex items-center gap-1 font-medium">
<span className="font-metric-tabular">5/5</span> trials recorded
                </div>
</div>
</div>
{/*  Procedure 03: Pending  */}
<button className="w-full text-left p-space-sm rounded-lg bg-surface hover:bg-surface-container-low transition-colors flex items-start gap-space-sm opacity-80" type="button">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]">lock</span>
</span>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md font-medium text-secondary truncate">03 Eccentric Loading</span>
<span className="font-label-sm text-outline">Pending</span>
</div>
<div className="font-body-sm text-secondary mt-0.5">
                  5 positions required
                </div>
</div>
</button>
{/*  Procedure 04: Pending  */}
<button className="w-full text-left p-space-sm rounded-lg bg-surface hover:bg-surface-container-low transition-colors flex items-start gap-space-sm opacity-80" type="button">
<span className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[14px]">radio_button_unchecked</span>
</span>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md font-medium text-secondary truncate">04 Zero Tracking &amp; Tare</span>
<span className="font-label-sm text-outline">Pending</span>
</div>
<div className="font-body-sm text-secondary mt-0.5">
                  4 checks pending
                </div>
</div>
</button>
</nav>
<div className="mt-space-xs p-space-sm bg-surface-container rounded-lg text-secondary font-body-sm">
<span className="font-semibold text-primary">Procedure Schema:</span>
            Sequence established in Step 03. All trials strictly lock against active scale tare calibration.
          </div>
</div>
{/*  Metrology Hardware Status Telemetry Card  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between text-secondary font-label-sm uppercase font-semibold">
<span>Telemetry Indicator</span>
<span className="flex items-center gap-1 text-primary font-bold">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
              LIVE RS-232
            </span>
</div>
<div className="mt-1 bg-surface-container-high rounded-lg p-space-sm flex flex-col items-center justify-center">
<div className="font-label-sm text-secondary uppercase tracking-widest">[ -&gt;0&lt;- STABLE ]</div>
<div className="font-metric-display text-primary tracking-tight font-metric-tabular my-1">20.010 <span className="font-headline-sm text-secondary">kg</span></div>
<div className="text-[11px] font-metric-tabular text-secondary">GROSS LOAD • COM4 9600-8-N-1</div>
</div>
<button className="w-full mt-space-xs py-2 bg-surface-container-highest hover:bg-surface-container text-primary font-label-md font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">input</span>
            Fetch Instant Reading
          </button>
</div>
</aside>
{/*  RIGHT COLUMN: Active Test Workspace ("Repeatability")  */}
<section className="lg:col-span-9 flex flex-col gap-space-lg">
{/*  1. Test Header & Parameter Strip  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm bg-surface-container-low p-space-md rounded-lg">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 bg-primary text-on-primary font-label-sm font-bold uppercase rounded">
                  METROLOGICAL • OIML R 76-1 § A.4.10
                </span>
<span className="font-label-sm text-secondary font-metric-tabular font-medium">Clause 3.6.1</span>
</div>
<h2 className="font-headline-lg text-primary">Repeatability Test (Clause A.4.10)</h2>
<p className="font-body-md text-secondary mt-1">
                Evaluate consistency of indications across repeated applications of the specified test load under identical measurement conditions.
              </p>
</div>
<div className="flex flex-col sm:items-end gap-1 shrink-0">
<div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-highest rounded-full text-primary font-label-sm font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                In Progress
              </div>
<span className="font-label-sm text-primary font-semibold flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                5 / 5 Trials Input Complete
              </span>
</div>
</div>
{/*  Parameter Configuration Summary Grid  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
<span className="font-label-sm text-secondary uppercase font-semibold">Test Load (L)</span>
<span className="font-headline-md text-primary font-metric-tabular mt-0.5">20.000 <span className="font-body-sm text-secondary">kg</span></span>
<span className="text-[11px] text-secondary font-medium mt-0.5">Nominal 0.2 Max (20% Range)</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
<span className="font-label-sm text-secondary uppercase font-semibold">Scale Interval (e)</span>
<span className="font-headline-md text-primary font-metric-tabular mt-0.5">0.010 <span className="font-body-sm text-secondary">kg</span></span>
<span className="text-[11px] text-secondary font-medium mt-0.5">Verification Scale Div = 10 g</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
<span className="font-label-sm text-secondary uppercase font-semibold">Max Permissible Error (mpe)</span>
<span className="font-headline-md text-primary font-metric-tabular mt-0.5">± 0.010 <span className="font-body-sm text-secondary">kg</span></span>
<span className="text-[11px] text-secondary font-medium mt-0.5">Zone I (±1.0e Tolerance)</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
<span className="font-label-sm text-secondary uppercase font-semibold">Required Cycles</span>
<span className="font-headline-md text-primary font-metric-tabular mt-0.5">5 <span className="font-body-sm text-secondary">runs</span></span>
<span className="text-[11px] text-secondary font-medium mt-0.5">Mandated by Class III table</span>
</div>
</div>
</div>
{/*  2. Observation Entry Table (High-Density Metrology Matrix)  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-space-md bg-surface-container-lowest flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div>
<h3 className="font-headline-sm text-primary">Observation Data Matrix</h3>
<p className="font-body-sm text-secondary">
                Enter indicated readouts observed during repetitive manual loading. Error <span className="font-metric-tabular font-semibold text-primary">(E = I - L)</span> and standard deviation are dynamically reconciled.
              </p>
</div>
<div className="flex items-center gap-2 text-secondary text-xs">
<span className="flex items-center gap-1"><span className="w-3 h-3 bg-surface-container-lowest shadow-sm rounded"></span> Technician Input</span>
<span className="flex items-center gap-1"><span className="w-3 h-3 bg-surface-container-low rounded"></span> Auto-Calculated</span>
</div>
</div>
{/*  Table Container  */}
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm border-collapse">
<thead>
<tr className="bg-surface-container font-label-sm text-secondary uppercase tracking-wider">
<th className="py-2.5 px-space-md text-center w-16">Trial</th>
<th className="py-2.5 px-space-md text-right">Standard Load (L)</th>
<th className="py-2.5 px-space-md w-64">Indicated Value (I)</th>
<th className="py-2.5 px-space-md text-right w-44">Error (E = I - L)</th>
<th className="py-2.5 px-space-md text-center w-40">mpe Limit Check</th>
<th className="py-2.5 px-space-md">Technician Field Remarks</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-2.5 px-space-md text-center font-metric-tabular font-bold text-primary">01</td>
<td className="py-2.5 px-space-md text-right font-metric-tabular font-semibold text-secondary">20.000 kg</td>
<td className="py-2 px-space-md">
<div className="flex items-center rounded-lg bg-surface-container-lowest shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-primary">
<input className="w-full px-2.5 py-1.5 text-right font-metric-tabular font-bold text-primary bg-transparent focus:outline-none" type="text" defaultValue="20.010"/>
<span className="bg-surface-container-high px-2 py-1.5 text-secondary font-metric-tabular font-medium text-xs">kg</span>
</div>
</td>
<td className="py-2.5 px-space-md text-right bg-surface-container-low/60">
<div className="flex items-center justify-end gap-1 font-metric-tabular font-bold text-primary">
<span>+0.010</span>
<span className="text-[11px] text-secondary">kg</span>
<span className="ml-1 px-1 py-0.2 bg-surface-container text-[10px] text-secondary rounded font-label-sm font-bold">AUTO</span>
</div>
</td>
<td className="py-2.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-container-high text-primary rounded text-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">check</span> ≤ ±10 g
                    </span>
</td>
<td className="py-2 px-space-md">
<input className="w-full px-2.5 py-1 text-xs text-on-surface bg-surface-container-low rounded focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="Stable reading; center-loaded"/>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-2.5 px-space-md text-center font-metric-tabular font-bold text-primary">02</td>
<td className="py-2.5 px-space-md text-right font-metric-tabular font-semibold text-secondary">20.000 kg</td>
<td className="py-2 px-space-md">
<div className="flex items-center rounded-lg bg-surface-container-lowest shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-primary">
<input className="w-full px-2.5 py-1.5 text-right font-metric-tabular font-bold text-primary bg-transparent focus:outline-none" type="text" defaultValue="20.000"/>
<span className="bg-surface-container-high px-2 py-1.5 text-secondary font-metric-tabular font-medium text-xs">kg</span>
</div>
</td>
<td className="py-2.5 px-space-md text-right bg-surface-container-low/60">
<div className="flex items-center justify-end gap-1 font-metric-tabular font-bold text-primary">
<span>0.000</span>
<span className="text-[11px] text-secondary">kg</span>
<span className="ml-1 px-1 py-0.2 bg-surface-container text-[10px] text-secondary rounded font-label-sm font-bold">AUTO</span>
</div>
</td>
<td className="py-2.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-container-high text-primary rounded text-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">check</span> ≤ ±10 g
                    </span>
</td>
<td className="py-2 px-space-md">
<input className="w-full px-2.5 py-1 text-xs text-on-surface bg-surface-container-low rounded focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="Stable reading"/>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-2.5 px-space-md text-center font-metric-tabular font-bold text-primary">03</td>
<td className="py-2.5 px-space-md text-right font-metric-tabular font-semibold text-secondary">20.000 kg</td>
<td className="py-2 px-space-md">
<div className="flex items-center rounded-lg bg-surface-container-lowest shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-primary">
<input className="w-full px-2.5 py-1.5 text-right font-metric-tabular font-bold text-primary bg-transparent focus:outline-none" type="text" defaultValue="20.010"/>
<span className="bg-surface-container-high px-2 py-1.5 text-secondary font-metric-tabular font-medium text-xs">kg</span>
</div>
</td>
<td className="py-2.5 px-space-md text-right bg-surface-container-low/60">
<div className="flex items-center justify-end gap-1 font-metric-tabular font-bold text-primary">
<span>+0.010</span>
<span className="text-[11px] text-secondary">kg</span>
<span className="ml-1 px-1 py-0.2 bg-surface-container text-[10px] text-secondary rounded font-label-sm font-bold">AUTO</span>
</div>
</td>
<td className="py-2.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-container-high text-primary rounded text-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">check</span> ≤ ±10 g
                    </span>
</td>
<td className="py-2 px-space-md">
<input className="w-full px-2.5 py-1 text-xs text-on-surface bg-surface-container-low rounded focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="Smooth load application; dampening clear"/>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-2.5 px-space-md text-center font-metric-tabular font-bold text-primary">04</td>
<td className="py-2.5 px-space-md text-right font-metric-tabular font-semibold text-secondary">20.000 kg</td>
<td className="py-2 px-space-md">
<div className="flex items-center rounded-lg bg-surface-container-lowest shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-primary">
<input className="w-full px-2.5 py-1.5 text-right font-metric-tabular font-bold text-primary bg-transparent focus:outline-none" type="text" defaultValue="20.000"/>
<span className="bg-surface-container-high px-2 py-1.5 text-secondary font-metric-tabular font-medium text-xs">kg</span>
</div>
</td>
<td className="py-2.5 px-space-md text-right bg-surface-container-low/60">
<div className="flex items-center justify-end gap-1 font-metric-tabular font-bold text-primary">
<span>0.000</span>
<span className="text-[11px] text-secondary">kg</span>
<span className="ml-1 px-1 py-0.2 bg-surface-container text-[10px] text-secondary rounded font-label-sm font-bold">AUTO</span>
</div>
</td>
<td className="py-2.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-container-high text-primary rounded text-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">check</span> ≤ ±10 g
                    </span>
</td>
<td className="py-2 px-space-md">
<input className="w-full px-2.5 py-1 text-xs text-on-surface bg-surface-container-low rounded focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="Normal return to zero confirmed"/>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-2.5 px-space-md text-center font-metric-tabular font-bold text-primary">05</td>
<td className="py-2.5 px-space-md text-right font-metric-tabular font-semibold text-secondary">20.000 kg</td>
<td className="py-2 px-space-md">
<div className="flex items-center rounded-lg bg-surface-container-lowest shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-primary">
<input className="w-full px-2.5 py-1.5 text-right font-metric-tabular font-bold text-primary bg-transparent focus:outline-none" type="text" defaultValue="20.010"/>
<span className="bg-surface-container-high px-2 py-1.5 text-secondary font-metric-tabular font-medium text-xs">kg</span>
</div>
</td>
<td className="py-2.5 px-space-md text-right bg-surface-container-low/60">
<div className="flex items-center justify-end gap-1 font-metric-tabular font-bold text-primary">
<span>+0.010</span>
<span className="text-[11px] text-secondary">kg</span>
<span className="ml-1 px-1 py-0.2 bg-surface-container text-[10px] text-secondary rounded font-label-sm font-bold">AUTO</span>
</div>
</td>
<td className="py-2.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-container-high text-primary rounded text-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">check</span> ≤ ±10 g
                    </span>
</td>
<td className="py-2 px-space-md">
<input className="w-full px-2.5 py-1 text-xs text-on-surface bg-surface-container-low rounded focus:bg-surface-container-lowest focus:outline-none" type="text" defaultValue="Final trial verified; zero verified at finish"/>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Bottom Footer Helper of Table  */}
<div className="p-space-sm bg-surface-container-low flex flex-col sm:flex-row items-center justify-between text-xs text-secondary gap-2">
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 font-medium text-primary">
<span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
                Formula Locked: E = I - L + 0.5e - ΔL
              </span>
<span>•</span>
<span>Rounding mode: Half-Up metrological step</span>
</div>
<div className="font-metric-tabular">
              Series Duration: 4m 18s • Cycle Pace: 51.6s/run
            </div>
</div>
</div>
{/*  3. Derived Metrological Results & Validation Grid (3-Panel Bento Layout)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Panel A: Calculated Statistical Results  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-2">
<h4 className="font-label-lg font-bold text-primary">Calculated Results</h4>
<span className="text-[10px] px-1.5 py-0.5 bg-surface-container font-bold text-secondary uppercase rounded">Automated</span>
</div>
<div className="space-y-2 mt-2 font-body-sm">
<div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
<span className="text-secondary">Max Error (E_max):</span>
<span className="font-metric-tabular font-bold text-primary">+0.010 kg (+10 g)</span>
</div>
<div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
<span className="text-secondary">Min Error (E_min):</span>
<span className="font-metric-tabular font-bold text-primary">0.000 kg (0 g)</span>
</div>
<div className="flex items-center justify-between py-1 bg-surface-container-highest px-2 rounded">
<span className="font-semibold text-primary">Range (E_max - E_min):</span>
<span className="font-metric-tabular font-bold text-primary">0.010 kg (10 g)</span>
</div>
<div className="flex items-center justify-between py-1 px-2">
<span className="text-secondary">Arithmetic Mean (x̄):</span>
<span className="font-metric-tabular text-on-surface">20.006 kg</span>
</div>
<div className="flex items-center justify-between py-1 px-2">
<span className="text-secondary">Sample Std Dev (s):</span>
<span className="font-metric-tabular text-on-surface">0.0055 kg</span>
</div>
</div>
</div>
<div className="mt-space-sm pt-2 text-[11px] text-secondary">
              Derived pursuant to OIML R 76-1 § 3.6.1. Range ≤ maximum permissible error for load.
            </div>
</div>
{/*  Panel B: Data Integrity & Validation Gate  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-2">
<h4 className="font-label-lg font-bold text-primary">Validation Gate</h4>
<span className="text-[10px] px-1.5 py-0.5 bg-surface-container-high text-primary font-bold uppercase rounded">Gate Verified</span>
</div>
<div className="space-y-2 mt-2">
<div className="flex items-start gap-2 text-xs">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
<span className="text-on-surface">5 of 5 mandated trials physically captured.</span>
</div>
<div className="flex items-start gap-2 text-xs">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
<span className="text-on-surface">Valid 3-decimal resolution (0.001 kg precision).</span>
</div>
<div className="flex items-start gap-2 text-xs">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
<span className="text-on-surface">Zero-load tracking verified prior to run 01.</span>
</div>
<div className="flex items-start gap-2 text-xs">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
<span className="text-on-surface">Errors conform within ±1.0e (10 g) envelope.</span>
</div>
</div>
</div>
<div className="mt-space-sm p-2 bg-surface-container rounded text-center">
<div className="font-label-sm uppercase font-bold text-primary tracking-wider">
                Metrological Criteria Satisfied
              </div>
<div className="text-[11px] text-secondary mt-0.5">Ready for procedure sign-off</div>
</div>
</div>
{/*  Panel C: Technician Notes & Environmental Log  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-2">
<h4 className="font-label-lg font-bold text-primary">Procedure Execution Log</h4>
<span className="material-symbols-outlined text-secondary text-[18px]">history_edu</span>
</div>
<div className="mt-2">
<label className="block text-[11px] uppercase font-bold text-secondary mb-1">Technician Environmental Remarks</label>
<textarea className="w-full p-2 text-xs bg-surface-container-low text-on-surface rounded-lg focus:outline-none focus:bg-surface-container-lowest transition-colors resize-none" rows="4" defaultValue={"Load applied centrally on platform receptor using calibrated M1 standard weights (Set ID: CAL-WT-2024). Ambient conditions remained stable at 23.5°C and 48% RH throughout the 5 repetitions."} />
</div>
</div>
<div className="mt-2 text-[11px] text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock</span>
              Permanently committed to verification ledger upon completion.
            </div>
</div>
</div>
{/*  4. Evidence Step Reminder Strip  */}
<div className="bg-surface-container-low rounded-xl p-space-md flex items-center justify-between gap-space-sm shadow-sm">
<div className="flex items-center gap-space-sm">
<span className="w-9 h-9 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">photo_camera</span>
</span>
<div>
<div className="font-label-md font-bold text-primary">Evidence &amp; Physical Artifacts Required</div>
<div className="font-body-sm text-secondary">Calibration standard weight certificates, scale level vial photos, and seal integrity photos will be attached in Step 06 Evidence.</div>
</div>
</div>
<button className="px-space-md py-1.5 bg-surface-container-lowest hover:bg-surface-container text-primary font-label-md font-semibold rounded-lg shadow-sm shrink-0 transition-colors" type="button">
            Add Attachments Later
          </button>
</div>
</section>
</div>
</main>
{/*  Sticky Workflow Bottom Action Dock  */}
<footer className="sticky bottom-0 w-full bg-surface-container-lowest px-margin-desktop py-space-sm shadow-xl z-20">
<div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="px-space-md py-2 bg-surface-container-high hover:bg-surface-container text-primary font-label-md font-semibold rounded-lg flex items-center gap-1 transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Previous: 01 Accuracy Test
        </button>
</div>
<div className="hidden md:flex items-center gap-2 text-secondary font-body-sm">
<span className="material-symbols-outlined text-primary text-[18px]">info</span>
<span>All 4 test procedures must be marked complete before advancing to Step 05 Compliance.</span>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
<button className="px-space-md py-2 bg-surface-container-lowest hover:bg-surface-container-low text-primary font-label-md font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[18px]">save</span>
          Save Draft
        </button>
<button className="px-space-md py-2 bg-surface-container-highest hover:bg-surface-container text-primary font-label-md font-bold rounded-lg shadow-sm transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
          Mark Test 02 Complete
        </button>
<button className="px-space-lg py-2 bg-primary hover:bg-primary-container text-on-primary font-label-md font-bold rounded-lg shadow transition-colors flex items-center gap-1.5" type="button">
<span>Next: Eccentric Loading</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</footer>
</div>
</main>
    </div>
  );
}
