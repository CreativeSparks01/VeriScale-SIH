import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function InstrumentTestHistory() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <main className="min-h-screen w-full bg-background p-0"><div className="flex flex-col w-full">
{/*  INDUSTRIAL TELEMETRY TOP BAR  */}
<header className="w-full bg-primary text-surface-container-low px-space-lg py-space-xs text-label-sm font-label-sm flex flex-wrap items-center justify-between gap-space-sm shadow-sm select-none">
<div className="flex items-center gap-space-md">
<span className="flex items-center gap-1.5 text-tertiary-fixed font-metric-tabular">
<span className="inline-block w-2 h-2 rounded-full bg-tertiary-fixed"></span>
        COM1: 9600 BAUD [ONLINE]
      </span>
<span className="text-outline">/</span>
<span className="tracking-wider uppercase">ISO/IEC 17025 ACCREDITED LIFECYCLE LEDGER</span>
<span className="text-outline">/</span>
<span className="text-surface-variant font-metric-tabular">SHA-256 LEDGER SYNCED</span>
</div>
<div className="flex items-center gap-space-md font-metric-tabular text-surface-variant">
<span>SERVER: 06 SEP 2026 13:48:10 UTC</span>
<span className="px-1.5 py-0.5 bg-primary-container text-surface-container-low rounded">NODE-UK-04</span>
</div>
</header>
{/*  MAIN WORKSPACE CONTAINER  */}
<div className="flex w-full min-h-[calc(100vh-2.25rem)]">
{/*  LEFT COMPACT PERSISTENT LABORATORY SIDEBAR  */}
<aside className="w-64 bg-primary text-surface-container-low flex flex-col justify-between shrink-0 shadow-md">
<div className="flex flex-col">
{/*  PLATFORM IDENTITY  */}
<div className="px-space-md py-space-lg bg-inverse-surface flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-fixed text-headline-sm">precision_manufacturing</span>
<span className="font-headline-sm text-headline-sm text-surface tracking-tight uppercase">VeriScale</span>
</div>
<span className="text-label-sm font-label-sm text-outline-variant uppercase tracking-widest pl-7">Industrial Metrology</span>
</div>
{/*  NAVIGATION LINKS  */}
<nav className="py-space-md flex flex-col text-label-md font-label-md">
<div className="px-space-md pb-1 text-label-sm font-label-sm text-outline-variant uppercase tracking-wider">Operation Controls</div>
<a className="flex items-center gap-3 px-space-md py-2 text-surface-container hover:bg-primary-container" href="#">
<span className="material-symbols-outlined text-body-lg">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-space-md py-2 text-surface-container hover:bg-primary-container" href="#">
<span className="material-symbols-outlined text-body-lg">scale</span>
<span>Instruments</span>
</a>
<a className="flex items-center gap-3 px-space-md py-2 text-surface-container hover:bg-primary-container" href="#">
<span className="material-symbols-outlined text-body-lg">science</span>
<span>Tests</span>
</a>
<a className="flex items-center gap-3 px-space-md py-2 text-surface-container hover:bg-primary-container" href="#">
<span className="material-symbols-outlined text-body-lg">verified_user</span>
<span>Compliance</span>
</a>
<a className="flex items-center gap-3 px-space-md py-2 text-surface-container hover:bg-primary-container" href="#">
<span className="material-symbols-outlined text-body-lg">folder_shared</span>
<span>Reports &amp; Dossiers</span>
</a>
<a className="flex items-center gap-3 px-space-md py-2 bg-primary-container text-tertiary-fixed font-headline-sm pl-4 shadow-sm" href="#">
<span className="material-symbols-outlined text-body-lg text-tertiary-fixed">history_edu</span>
<span>Test History</span>
<span className="ml-auto text-label-sm px-1.5 py-0.2 bg-tertiary-container text-tertiary-fixed rounded font-metric-tabular">P.21</span>
</a>
<a className="flex items-center gap-3 px-space-md py-2 text-surface-container hover:bg-primary-container" href="#">
<span className="material-symbols-outlined text-body-lg">dataset</span>
<span>Repository</span>
</a>
<div className="px-space-md pt-space-lg pb-1 text-label-sm font-label-sm text-outline-variant uppercase tracking-wider">Governance</div>
<a className="flex items-center gap-3 px-space-md py-2 text-surface-container hover:bg-primary-container" href="#">
<span className="material-symbols-outlined text-body-lg">group</span>
<span>Personnel &amp; Roles</span>
</a>
<a className="flex items-center gap-3 px-space-md py-2 text-surface-container hover:bg-primary-container" href="#">
<span className="material-symbols-outlined text-body-lg">rule</span>
<span>Audit Trail Ledger</span>
</a>
<a className="flex items-center gap-3 px-space-md py-2 text-surface-container hover:bg-primary-container" href="#">
<span className="material-symbols-outlined text-body-lg">tune</span>
<span>Laboratory Config</span>
</a>
</nav>
</div>
{/*  ACTIVE AUTHENTICATED TECHNICIAN FOOTER  */}
<div className="p-space-md bg-inverse-surface flex items-center gap-3">
<div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center font-headline-sm text-label-md text-tertiary-fixed uppercase">
          MS
        </div>
<div className="flex flex-col overflow-hidden">
<span className="font-headline-sm text-label-md text-surface truncate">Manan Sharma</span>
<span className="text-label-sm font-label-sm text-outline-variant truncate">Technical Reviewer #R-109</span>
</div>
<span className="material-symbols-outlined text-outline-variant ml-auto text-body-md">lock</span>
</div>
</aside>
{/*  CENTER-RIGHT WORKSPACE  */}
<div className="flex-1 flex flex-col bg-background overflow-x-hidden p-space-lg gap-space-lg">
{/*  SUB-HEADER / ACTIONS / BREADCRUMB  */}
<section className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-lg shadow-sm">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-label-md font-label-md text-secondary">
<span>Test History</span>
<span className="text-outline">/</span>
<span>ABC WeighTech</span>
<span className="text-outline">/</span>
<span>WT-100</span>
<span className="text-outline">/</span>
<span className="text-primary font-headline-sm font-metric-tabular">WT100-2026-001</span>
</div>
<h1 className="text-headline-lg font-headline-lg text-primary tracking-tight">Instrument Test History</h1>
<p className="text-body-md font-body-md text-secondary">
            Chronological testing lifecycle, evaluation records, and regulatory report traceability for serial <span className="font-metric-tabular text-on-surface font-headline-sm">WT100-2026-001</span>.
          </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<div className="relative inline-block text-left">
<button className="px-space-md py-2 bg-surface-container-lowest hover:bg-surface-container-low text-primary font-label-md text-label-md rounded shadow-sm flex items-center gap-2" id="exportDropdownBtn" type="button">
<span className="material-symbols-outlined text-headline-sm text-secondary">file_download</span>
<span>Export History</span>
<span className="material-symbols-outlined text-body-sm text-secondary">arrow_drop_down</span>
</button>
<div className="hidden absolute right-0 mt-1 w-48 bg-surface-container-lowest shadow-md rounded z-20 py-1 font-label-md text-label-md" id="exportMenu">
<a className="flex items-center gap-2 px-space-md py-2 hover:bg-surface-container-low text-on-surface" href="#">
<span className="material-symbols-outlined text-headline-sm text-error">picture_as_pdf</span> PDF Audit Ledger
              </a>
<a className="flex items-center gap-2 px-space-md py-2 hover:bg-surface-container-low text-on-surface" href="#">
<span className="material-symbols-outlined text-headline-sm text-primary">table_view</span> CSV Raw Data
              </a>
<a className="flex items-center gap-2 px-space-md py-2 hover:bg-surface-container-low text-on-surface" href="#">
<span className="material-symbols-outlined text-headline-sm text-secondary">verified</span> ISO 17025 XML Schema
              </a>
</div>
</div>
<button className="px-space-lg py-2 bg-primary-container hover:bg-primary text-surface font-label-md text-label-md rounded shadow-sm flex items-center gap-2" type="button">
<span className="material-symbols-outlined text-headline-sm">add_box</span>
<span>+ Start New Test</span>
</button>
</div>
</section>
{/*  INSTRUMENT IDENTITY & LIFECYCLE BANNER  */}
<section className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col xl:flex-row gap-space-lg justify-between">
<div className="flex flex-col gap-2 flex-1">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="px-2 py-0.5 bg-surface-container font-metric-tabular font-label-sm text-label-sm text-primary rounded uppercase">
              REGISTERED INSTRUMENT
            </span>
<span className="px-2 py-0.5 bg-surface-container-high text-primary font-headline-sm font-metric-tabular text-label-sm rounded">
              ( III ) CLASS III MEDIUM
            </span>
<span className="px-2 py-0.5 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded font-metric-tabular">
              Pattern Approval: UK/0126/0049
            </span>
</div>
<h2 className="text-headline-md font-headline-md text-primary mt-1">
            ABC WeighTech Pvt. Ltd. — WT-100 Platform Scale
          </h2>
<div className="flex flex-wrap items-center gap-x-space-md gap-y-1 text-label-md font-label-md text-secondary font-metric-tabular">
<span>Serial: <strong className="text-on-surface font-headline-sm">WT100-2026-001</strong></span>
<span className="text-outline">|</span>
<span>Max: <strong className="text-on-surface font-headline-sm">100.000 kg</strong></span>
<span className="text-outline">|</span>
<span>Min: <strong className="text-on-surface font-headline-sm">20 g</strong></span>
<span className="text-outline">|</span>
<span>e = <strong className="text-on-surface font-headline-sm">10 g</strong></span>
<span className="text-outline">|</span>
<span>Location: <strong className="text-on-surface font-headline-sm">Bay 3 Metrology Lab</strong></span>
</div>
<a className="text-label-md font-headline-sm text-secondary hover:text-primary flex items-center gap-1 mt-1" href="#">
<span>View Complete Instrument Metrology Profile</span>
<span className="material-symbols-outlined text-body-md">arrow_forward</span>
</a>
</div>
{/*  RIGHT SIDE: ACTIVE PILL & MILESTONES  */}
<div className="flex flex-col md:flex-row xl:flex-col justify-between items-start xl:items-end gap-space-md p-space-md bg-surface-container-low rounded">
<div className="flex items-center gap-2">
<span className="px-3 py-1 bg-surface-container-lowest text-primary font-headline-sm text-label-md rounded flex items-center gap-1.5 shadow-sm">
<span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
              ✓ ACTIVE
            </span>
<span className="text-label-sm font-label-sm text-secondary uppercase font-metric-tabular">OIML R 76 VERIFIED</span>
</div>
<div className="flex flex-col text-right font-metric-tabular text-label-sm font-label-sm text-secondary gap-1">
<span>Registered: <strong className="text-on-surface font-headline-sm">15 Jan 2026</strong></span>
<span>First Test: <strong className="text-on-surface font-headline-sm">22 Jan 2026</strong></span>
<span>Latest Test: <strong className="text-primary font-headline-sm">06 Sep 2026 (PASS)</strong></span>
<span>Total Completed Tests: <strong className="text-primary font-headline-sm">12 Evaluations</strong></span>
</div>
</div>
</section>
{/*  5-CARD KEY METRIC BAR  */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider">Total Tests</span>
<div className="flex items-baseline justify-between mt-2">
<span className="text-headline-xl font-headline-xl font-metric-tabular text-primary">12</span>
<span className="text-label-sm font-label-sm text-secondary font-metric-tabular">100% Run</span>
</div>
<div className="w-full bg-surface-container h-1 mt-2 rounded">
<div className="bg-primary h-1 rounded w-full"></div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider">Compliant Passed</span>
<div className="flex items-baseline justify-between mt-2">
<span className="text-headline-xl font-headline-xl font-metric-tabular text-primary">11</span>
<span className="text-label-sm font-headline-sm text-primary font-metric-tabular">91.7%</span>
</div>
<div className="w-full bg-surface-container h-1 mt-2 rounded">
<div className="bg-primary-container h-1 rounded" style={{"width":"91.7%"}}></div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider">Non-Compliant Failed</span>
<div className="flex items-baseline justify-between mt-2">
<span className="text-headline-xl font-headline-xl font-metric-tabular text-error">1</span>
<span className="text-label-sm font-headline-sm text-error font-metric-tabular">8.3%</span>
</div>
<div className="w-full bg-surface-container h-1 mt-2 rounded">
<div className="bg-error h-1 rounded" style={{"width":"8.3%"}}></div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider">Reports Generated</span>
<div className="flex items-baseline justify-between mt-2">
<span className="text-headline-xl font-headline-xl font-metric-tabular text-primary">12</span>
<span className="text-label-sm font-label-sm text-secondary">Dossiers Sealed</span>
</div>
<div className="w-full bg-surface-container h-1 mt-2 rounded">
<div className="bg-secondary h-1 rounded w-full"></div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider">Latest Test</span>
<div className="flex flex-col mt-2">
<span className="text-headline-sm font-headline-sm font-metric-tabular text-primary">06 Sep 2026</span>
<span className="text-label-sm font-label-sm text-secondary font-metric-tabular">TR-0091 • A. Kumar</span>
</div>
<span className="text-label-sm font-headline-sm text-primary mt-1">✓ PASS Indication</span>
</div>
</section>
{/*  TWO-COLUMN WORKSPACE: LEFT 68% | RIGHT 32%  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT COLUMN (8 cols of 12)  */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/*  INSPIRATION GRAPHIC INTEGRATION: TECHNICAL SCHEMATIC BALANCING DIAGRAM  */}
<div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col">
<div className="flex flex-wrap items-center justify-between pb-space-sm">
<div className="flex items-center gap-2">
<span className="font-metric-tabular text-label-sm text-secondary uppercase tracking-wider">CAL_REF // NAWI-OIML-R76-E1</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-metric-tabular text-label-sm rounded font-headline-sm">LEGAL-METROLOGY REFERENCE SYSTEM</span>
</div>
<span className="font-metric-tabular text-label-sm text-primary font-headline-sm">PRECISION: ±0.0001g</span>
</div>
{/*  In-browser Vector Balancing Diagram inspired by target schematics  */}
<div className="w-full bg-surface-container-low rounded-lg p-space-md overflow-x-auto relative">
<svg className="w-full h-56 min-w-[620px] select-none" viewBox="0 0 880 320" xmlns="http://www.w3.org/2000/svg">
{/*  Outer precision ticks & bounding box  */}
<rect className="stroke-outline-variant" fill="none" height="280" rx="10" strokeDasharray="0" strokeWidth="1.5" width="840" x="20" y="20"></rect>
{/*  Coordinate Grid  */}
<defs>
<pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D7E0E7" strokeWidth="0.75"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="278" width="838" x="21" y="21"></rect>
{/*  Top Precision Vernier Ticks  */}
<g className="stroke-primary" strokeWidth="1.5">
<line x1="80" x2="80" y1="20" y2="30"></line>
<line x1="120" x2="120" y1="20" y2="26"></line>
<line x1="160" x2="160" y1="20" y2="26"></line>
<line x1="200" x2="200" y1="20" y2="26"></line>
<line strokeWidth="2" x1="240" x2="240" y1="20" y2="34"></line>
<line x1="280" x2="280" y1="20" y2="26"></line>
<line x1="320" x2="320" y1="20" y2="26"></line>
<line x1="360" x2="360" y1="20" y2="26"></line>
<line strokeWidth="2" x1="400" x2="400" y1="20" y2="34"></line>
<line x1="440" x2="440" y1="20" y2="26"></line>
<line x1="480" x2="480" y1="20" y2="26"></line>
<line x1="520" x2="520" y1="20" y2="26"></line>
<line strokeWidth="2" x1="560" x2="560" y1="20" y2="34"></line>
<line x1="600" x2="600" y1="20" y2="26"></line>
<line x1="640" x2="640" y1="20" y2="26"></line>
<line x1="680" x2="680" y1="20" y2="26"></line>
<line x1="720" x2="720" y1="20" y2="30"></line>
<line x1="760" x2="760" y1="20" y2="26"></line>
<line x1="800" x2="800" y1="20" y2="26"></line>
</g>
{/*  Upper Status Guideline  */}
<line className="stroke-primary-container" strokeDasharray="6,6" strokeWidth="1.5" x1="50" x2="830" y1="70" y2="70"></line>
<circle className="fill-primary" cx="160" cy="70" r="4"></circle>
<text className="fill-secondary font-metric-tabular" fontFamily="IBM Plex Sans" fontSize="11" x="175" y="66">CH-01: TARE STABLE</text>
<circle className="fill-primary" cx="440" cy="70" r="4"></circle>
<text className="fill-secondary font-metric-tabular" fontFamily="IBM Plex Sans" fontSize="11" x="450" y="66">FILTER: CLASS III</text>
<circle className="fill-primary" cx="720" cy="70" r="4"></circle>
<text className="fill-secondary font-metric-tabular" fontFamily="IBM Plex Sans" fontSize="11" x="730" y="66">SIGMA: 0.002</text>
{/*  Center Lever Pivot & Symmetrical Balance  */}
{/*  Semicircular spirit bubble indicator  */}
<path className="stroke-primary" d="M 410 115 A 30 30 0 0 1 470 115" fill="none" strokeDasharray="3,3" strokeWidth="1.5"></path>
<line className="stroke-tertiary" strokeWidth="2" x1="440" x2="440" y1="105" y2="120"></line>
{/*  Main Beam  */}
<line className="stroke-secondary" strokeLinecap="round" strokeWidth="4" x1="210" x2="670" y1="120" y2="120"></line>
{/*  Fulcrum Triangle  */}
<polygon className="fill-primary" points="440,124 425,138 455,138"></polygon>
{/*  Vertical Column & Vernier Graduations  */}
<line className="stroke-primary" strokeWidth="2.5" x1="440" x2="440" y1="138" y2="265"></line>
<line className="stroke-primary" strokeWidth="1.5" x1="430" x2="450" y1="155" y2="155"></line>
<line className="stroke-primary" strokeWidth="1.5" x1="432" x2="448" y1="175" y2="175"></line>
<line className="stroke-primary" strokeWidth="1.5" x1="430" x2="450" y1="195" y2="195"></line>
<line className="stroke-primary" strokeWidth="1.5" x1="432" x2="448" y1="215" y2="215"></line>
<line className="stroke-primary" strokeWidth="2" x1="425" x2="455" y1="235" y2="235"></line>
{/*  Left Suspension, Mass & Pan  */}
<line className="stroke-secondary" strokeDasharray="3,2" strokeWidth="1.5" x1="245" x2="245" y1="120" y2="175"></line>
<rect className="fill-primary" height="28" rx="2" width="38" x="226" y="162"></rect>
<text className="fill-surface font-metric-tabular" fontSize="10" fontWeight="600" x="236" y="180">m₀</text>
<path className="fill-secondary opacity-75" d="M 190 185 Q 245 200 300 185 Z"></path>
{/*  Right Suspension, Mass & Pan  */}
<line className="stroke-secondary" strokeDasharray="3,2" strokeWidth="1.5" x1="635" x2="635" y1="120" y2="175"></line>
<rect className="fill-primary-container" height="24" rx="2" width="38" x="616" y="166"></rect>
<text className="fill-surface font-metric-tabular" fontSize="10" fontWeight="600" x="626" y="182">m₁</text>
<path className="fill-secondary opacity-75" d="M 580 185 Q 635 200 690 185 Z"></path>
{/*  Gaussian Error Curve at base (Tolerance Envelope)  */}
<path className="stroke-primary-container opacity-40" d="M 90 290 Q 250 290 350 270 Q 440 240 530 270 Q 630 290 800 290" fill="none" strokeWidth="3"></path>
<path className="stroke-primary" d="M 270 270 Q 360 250 440 248 Q 520 250 610 270" fill="none" strokeWidth="2.5"></path>
<circle className="fill-surface stroke-primary" cx="440" cy="248" r="6" strokeWidth="3"></circle>
<circle className="fill-primary" cx="350" cy="262" r="3.5"></circle>
<circle className="fill-primary" cx="530" cy="262" r="3.5"></circle>
{/*  Base Platform Alignment Lines  */}
<line className="stroke-secondary" strokeWidth="3" x1="260" x2="620" y1="275" y2="275"></line>
<line className="stroke-primary-container" strokeWidth="2" x1="315" x2="565" y1="281" y2="281"></line>
{/*  Metrological Annotation Labels  */}
<text className="fill-primary font-headline-sm font-metric-tabular" fontSize="12" x="455" y="248">Δe ≤ 0.2 d [PASS]</text>
<text className="fill-secondary font-metric-tabular" fontSize="11" x="80" y="284">ZERO_PT</text>
<text className="fill-secondary font-metric-tabular" fontSize="11" x="740" y="284">MAX_CAP</text>
</svg>
</div>
<div className="flex items-center justify-between text-label-sm font-label-sm text-secondary pt-space-xs">
<span>Standard Verification Routine: OIML R 76-1 Non-Automatic Weighing Instrument (NAWI)</span>
<span className="font-metric-tabular">Dynamic Reference Model v2.4 • Bay 3</span>
</div>
</div>
{/*  A. TEST RESULT SEQUENCE (12 Discrete Events)  */}
<div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div>
<h3 className="text-headline-sm font-headline-sm text-primary">Test Result Sequence (Last 12 Evaluations)</h3>
<p className="text-label-md font-label-md text-secondary">Discrete chronological pass/fail records — non-continuous verification events.</p>
</div>
<span className="text-label-sm font-metric-tabular text-secondary">Jan 2026 → Sep 2026</span>
</div>
{/*  Sequence Node Strip  */}
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2">
{/*  Node 1  */}
<div className="bg-surface-container-low p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-secondary font-headline-sm">#001</span>
<span className="text-[10px] text-secondary font-metric-tabular">22 JAN</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-headline-sm text-[10px] rounded">✓ PASS</span>
<span className="text-[9px] text-secondary truncate w-full" title="Routine Accuracy">Accuracy</span>
</div>
{/*  Node 2  */}
<div className="bg-surface-container-low p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-secondary font-headline-sm">#002</span>
<span className="text-[10px] text-secondary font-metric-tabular">14 FEB</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-headline-sm text-[10px] rounded">✓ PASS</span>
<span className="text-[9px] text-secondary truncate w-full" title="Repeatability">Repeat.</span>
</div>
{/*  Node 3  */}
<div className="bg-surface-container-low p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-secondary font-headline-sm">#003</span>
<span className="text-[10px] text-secondary font-metric-tabular">03 MAR</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-headline-sm text-[10px] rounded">✓ PASS</span>
<span className="text-[9px] text-secondary truncate w-full" title="Eccentricity">Eccentr.</span>
</div>
{/*  Node 4  */}
<div className="bg-surface-container-low p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-secondary font-headline-sm">#004</span>
<span className="text-[10px] text-secondary font-metric-tabular">18 APR</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-headline-sm text-[10px] rounded">✓ PASS</span>
<span className="text-[9px] text-secondary truncate w-full" title="Accuracy">Accuracy</span>
</div>
{/*  Node 5  */}
<div className="bg-surface-container-low p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-secondary font-headline-sm">#005</span>
<span className="text-[10px] text-secondary font-metric-tabular">10 MAY</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-headline-sm text-[10px] rounded">✓ PASS</span>
<span className="text-[9px] text-secondary truncate w-full" title="Repeatability">Repeat.</span>
</div>
{/*  Node 6  */}
<div className="bg-surface-container-low p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-secondary font-headline-sm">#006</span>
<span className="text-[10px] text-secondary font-metric-tabular">28 JUN</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-headline-sm text-[10px] rounded">✓ PASS</span>
<span className="text-[9px] text-secondary truncate w-full" title="Thermal Test">Environ.</span>
</div>
{/*  Node 7  */}
<div className="bg-surface-container-low p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-secondary font-headline-sm">#007</span>
<span className="text-[10px] text-secondary font-metric-tabular">10 AUG</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-headline-sm text-[10px] rounded">✓ PASS</span>
<span className="text-[9px] text-secondary truncate w-full" title="Periodic Accuracy">Accuracy</span>
</div>
{/*  Node 8  */}
<div className="bg-surface-container-low p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-secondary font-headline-sm">#008</span>
<span className="text-[10px] text-secondary font-metric-tabular">20 AUG</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-headline-sm text-[10px] rounded">✓ PASS</span>
<span className="text-[9px] text-secondary truncate w-full" title="Environmental">Environ.</span>
</div>
{/*  Node 9 (FAIL)  */}
<div className="bg-error-container p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-error font-headline-sm">#009</span>
<span className="text-[10px] text-error font-metric-tabular font-headline-sm">05 SEP</span>
<span className="px-1.5 py-0.5 bg-surface-container-lowest text-error font-headline-sm text-[10px] rounded">✕ FAIL</span>
<span className="text-[9px] text-error font-headline-sm truncate w-full" title="Zero / Tare">Tare/Zero</span>
</div>
{/*  Node 10  */}
<div className="bg-surface-container-low p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-secondary font-headline-sm">#010</span>
<span className="text-[10px] text-secondary font-metric-tabular">05 SEP</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-headline-sm text-[10px] rounded">✓ PASS</span>
<span className="text-[9px] text-secondary truncate w-full" title="Eccentric Loading">Eccentr.</span>
</div>
{/*  Node 11  */}
<div className="bg-surface-container-low p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-secondary font-headline-sm">#011</span>
<span className="text-[10px] text-secondary font-metric-tabular">06 SEP</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-headline-sm text-[10px] rounded">✓ PASS</span>
<span className="text-[9px] text-secondary truncate w-full" title="Repeatability">Repeat.</span>
</div>
{/*  Node 12  */}
<div className="bg-primary-container text-surface-container-lowest p-2 rounded flex flex-col items-center text-center gap-1 shadow-sm">
<span className="text-label-sm font-metric-tabular text-tertiary-fixed font-headline-sm">#012</span>
<span className="text-[10px] text-surface-variant font-metric-tabular">06 SEP</span>
<span className="px-1.5 py-0.5 bg-surface-container text-primary font-headline-sm text-[10px] rounded">✓ PASS</span>
<span className="text-[9px] text-tertiary-fixed font-headline-sm truncate w-full" title="Accuracy / Error of Indication">Accuracy</span>
</div>
</div>
</div>
{/*  B. TESTING TIMELINE (NEWEST TO OLDEST)  */}
<div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col gap-space-md">
<div>
<h3 className="text-headline-sm font-headline-sm text-primary">Testing Timeline</h3>
<p className="text-label-md font-label-md text-secondary">Chronological inspection audit trail and regulatory report association (Newest to Oldest).</p>
</div>
<div className="relative pl-6 space-y-6">
{/*  Timeline vertical connecting line  */}
<div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-surface-container"></div>
{/*  TIMELINE ITEM 1: TEST-012  */}
<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-surface shadow-sm">
<span className="material-symbols-outlined text-xs">check</span>
</div>
<div className="flex-1 bg-surface-container-low p-space-md rounded flex flex-col gap-2 shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="text-headline-sm font-headline-sm text-primary font-metric-tabular">TEST-012: Accuracy / Error of Indication</span>
<span className="px-2 py-0.5 bg-surface-container text-primary font-headline-sm text-label-sm rounded font-metric-tabular">✓ PASS</span>
</div>
<span className="text-label-sm font-label-sm text-secondary font-metric-tabular">06 SEP 2026 • 13:14 UTC</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-label-md font-label-md text-secondary">
<div>Technician: <strong className="text-on-surface">A. Kumar (TECH-409)</strong></div>
<div>Reviewer: <strong className="text-on-surface">R. Singh (Approved)</strong></div>
<div>Linked Dossier: <a className="text-primary font-headline-sm hover:underline" href="#">Report TR-0091</a></div>
</div>
<div className="flex flex-wrap items-center justify-between pt-1 text-label-sm font-label-sm">
<span className="text-secondary font-metric-tabular">Measurement Delta: Max deviation <strong className="text-primary font-headline-sm">+0.012 kg</strong> (MPE ±0.015 kg, Class III)</span>
<button className="text-primary font-headline-sm hover:underline flex items-center gap-1" type="button">
<span>Open Report TR-0091</span>
<span className="material-symbols-outlined text-body-md">open_in_new</span>
</button>
</div>
</div>
</div>
{/*  TIMELINE ITEM 2: TEST-011  */}
<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-surface shadow-sm">
<span className="material-symbols-outlined text-xs">check</span>
</div>
<div className="flex-1 bg-surface-container-low p-space-md rounded flex flex-col gap-2 shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="text-headline-sm font-headline-sm text-primary font-metric-tabular">TEST-011: Repeatability Test</span>
<span className="px-2 py-0.5 bg-surface-container text-primary font-headline-sm text-label-sm rounded font-metric-tabular">✓ PASS</span>
</div>
<span className="text-label-sm font-label-sm text-secondary font-metric-tabular">06 SEP 2026 • 11:45 UTC</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-label-md font-label-md text-secondary">
<div>Technician: <strong className="text-on-surface">A. Kumar</strong></div>
<div>Reviewer: <strong className="text-on-surface">R. Singh (Approved)</strong></div>
<div>Linked Dossier: <a className="text-primary font-headline-sm hover:underline" href="#">Report TR-0091</a></div>
</div>
<div className="flex flex-wrap items-center justify-between pt-1 text-label-sm font-label-sm">
<span className="text-secondary font-metric-tabular">Range of 10 Cycles: <strong className="text-primary font-headline-sm">0.010 kg</strong> (Tolerance ≤ 0.015 kg)</span>
<button className="text-primary font-headline-sm hover:underline flex items-center gap-1" type="button">
<span>View Details</span>
<span className="material-symbols-outlined text-body-md">visibility</span>
</button>
</div>
</div>
</div>
{/*  TIMELINE ITEM 3: TEST-010  */}
<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-surface shadow-sm">
<span className="material-symbols-outlined text-xs">check</span>
</div>
<div className="flex-1 bg-surface-container-low p-space-md rounded flex flex-col gap-2 shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="text-headline-sm font-headline-sm text-primary font-metric-tabular">TEST-010: Eccentric Loading</span>
<span className="px-2 py-0.5 bg-surface-container text-primary font-headline-sm text-label-sm rounded font-metric-tabular">✓ PASS</span>
</div>
<span className="text-label-sm font-label-sm text-secondary font-metric-tabular">05 SEP 2026 • 16:20 UTC</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-label-md font-label-md text-secondary">
<div>Technician: <strong className="text-on-surface">A. Kumar</strong></div>
<div>Reviewer: <strong className="text-on-surface">R. Singh (Approved)</strong></div>
<div>Linked Dossier: <a className="text-primary font-headline-sm hover:underline" href="#">Report TR-0090</a></div>
</div>
<div className="flex flex-wrap items-center justify-between pt-1 text-label-sm font-label-sm">
<span className="text-secondary font-metric-tabular">4 Corner Load Shift: Max dev <strong className="text-primary font-headline-sm">+0.020 kg</strong> (≤ MPE)</span>
<button className="text-primary font-headline-sm hover:underline flex items-center gap-1" type="button">
<span>Open Report TR-0090</span>
<span className="material-symbols-outlined text-body-md">open_in_new</span>
</button>
</div>
</div>
</div>
{/*  TIMELINE ITEM 4: TEST-009 (FAILED)  */}
<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-error flex items-center justify-center text-surface shadow-sm">
<span className="material-symbols-outlined text-xs">close</span>
</div>
<div className="flex-1 bg-error-container p-space-md rounded flex flex-col gap-2 shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="text-headline-sm font-headline-sm text-error font-metric-tabular">TEST-009: Zero / Tare Checks</span>
<span className="px-2 py-0.5 bg-surface-container-lowest text-error font-headline-sm text-label-sm rounded font-metric-tabular">✕ FAIL</span>
</div>
<span className="text-label-sm font-label-sm text-error font-metric-tabular">05 SEP 2026 • 14:10 UTC</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-label-md font-label-md text-error">
<div>Technician: <strong>A. Kumar</strong></div>
<div>Reviewer: <strong>R. Singh (Rejected)</strong></div>
<div>Linked Dossier: <a className="font-headline-sm hover:underline underline" href="#">Report TR-0089</a></div>
</div>
<div className="bg-surface-container-lowest p-2 rounded text-label-sm font-label-sm text-error flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<span>Defect: Zero tracking offset exceeded ±0.25e boundary (+0.010 kg). Recalibration triggered.</span>
<button className="px-2 py-1 bg-error text-surface font-headline-sm rounded flex items-center gap-1 self-start sm:self-auto shrink-0" type="button">
<span>Inspect Failure Log</span>
<span className="material-symbols-outlined text-body-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  TIMELINE ITEM 5: TEST-008  */}
<div className="relative flex items-start gap-3">
<div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-surface shadow-sm">
<span className="material-symbols-outlined text-xs">check</span>
</div>
<div className="flex-1 bg-surface-container-low p-space-md rounded flex flex-col gap-2 shadow-sm">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="text-headline-sm font-headline-sm text-primary font-metric-tabular">TEST-008: Environmental Influence</span>
<span className="px-2 py-0.5 bg-surface-container text-primary font-headline-sm text-label-sm rounded font-metric-tabular">✓ PASS</span>
</div>
<span className="text-label-sm font-label-sm text-secondary font-metric-tabular">20 AUG 2026 • 10:30 UTC</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-label-md font-label-md text-secondary">
<div>Technician: <strong className="text-on-surface">S. Gupta</strong></div>
<div>Reviewer: <strong className="text-on-surface">R. Singh (Approved)</strong></div>
<div>Linked Dossier: <a className="text-primary font-headline-sm hover:underline" href="#">Report TR-0088</a></div>
</div>
<div className="flex flex-wrap items-center justify-between pt-1 text-label-sm font-label-sm">
<span className="text-secondary font-metric-tabular">Chamber cycle (10°C to 40°C): Thermal shift <strong className="text-primary font-headline-sm">+0.005 kg / 5°C</strong></span>
<button className="text-primary font-headline-sm hover:underline" type="button">Open Report TR-0088</button>
</div>
</div>
</div>
</div>
</div>
{/*  C. COMPLETE DETAILED TEST RECORDS TABLE  */}
<div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div>
<h3 className="text-headline-sm font-headline-sm text-primary">Detailed Test Records</h3>
<p className="text-label-md font-label-md text-secondary">Tabular audit ledger of all 12 laboratory test entries and certifications.</p>
</div>
<span className="px-2.5 py-1 bg-surface-container text-primary font-headline-sm text-label-sm rounded font-metric-tabular">
                12 Records Total
              </span>
</div>
{/*  FILTER CONTROLS BAR  */}
<div className="bg-surface-container-low p-space-md rounded flex flex-wrap items-center gap-space-sm">
<div className="relative flex-1 min-w-[200px]">
<span className="material-symbols-outlined absolute left-2.5 top-2.5 text-secondary text-body-md">search</span>
<input className="w-full pl-9 pr-3 py-1.5 text-label-md font-label-md bg-surface-container-lowest rounded text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Search test ID, report ID, procedure..." type="text"/>
</div>
<select className="px-2.5 py-1.5 text-label-md font-label-md bg-surface-container-lowest text-on-surface rounded shadow-sm focus:outline-none">
<option>Date: All Time (12)</option>
<option>Last 30 Days (4)</option>
<option>Last 6 Months (12)</option>
</select>
<select className="px-2.5 py-1.5 text-label-md font-label-md bg-surface-container-lowest text-on-surface rounded shadow-sm focus:outline-none">
<option>Type: All Procedures</option>
<option>Accuracy / Error of Indication</option>
<option>Repeatability</option>
<option>Eccentric Loading</option>
<option>Zero / Tare Operations</option>
<option>Environmental Influence</option>
</select>
<select className="px-2.5 py-1.5 text-label-md font-label-md bg-surface-container-lowest text-on-surface rounded shadow-sm focus:outline-none">
<option>Result: All (12)</option>
<option>Compliant PASS (11)</option>
<option>Non-Compliant FAIL (1)</option>
</select>
<button className="px-3 py-1.5 text-label-sm font-label-sm text-secondary hover:text-primary font-headline-sm" type="button">
                Clear Filters
              </button>
</div>
{/*  DATA TABLE  */}
<div className="overflow-x-auto">
<table className="w-full text-left font-metric-tabular border-collapse text-label-md">
<thead>
<tr className="bg-surface-container text-secondary text-label-sm font-label-sm uppercase tracking-wider">
<th className="py-2.5 px-3">Test ID</th>
<th className="py-2.5 px-3">Report ID</th>
<th className="py-2.5 px-3">Test Type</th>
<th className="py-2.5 px-3">Date &amp; Time (UTC)</th>
<th className="py-2.5 px-3">Technician</th>
<th className="py-2.5 px-3">Reviewer</th>
<th className="py-2.5 px-3 text-center">Result</th>
<th className="py-2.5 px-3 text-center">Dossier</th>
<th className="py-2.5 px-3">Rule Set</th>
<th className="py-2.5 px-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container text-on-surface">
{/*  Row 12  */}
<tr className="hover:bg-surface-container-low transition-colors bg-surface-container-low/40">
<td className="py-2.5 px-3 font-headline-sm text-primary">TEST-012</td>
<td className="py-2.5 px-3"><a className="text-primary font-headline-sm hover:underline" href="#">TR-0091</a></td>
<td className="py-2.5 px-3 text-on-surface">Accuracy / Error</td>
<td className="py-2.5 px-3 text-secondary">06 Sep 2026 13:14</td>
<td className="py-2.5 px-3">A. Kumar</td>
<td className="py-2.5 px-3">R. Singh</td>
<td className="py-2.5 px-3 text-center">
<span className="px-2 py-0.5 bg-surface-container text-primary font-headline-sm text-label-sm rounded inline-block">✓ PASS</span>
</td>
<td className="py-2.5 px-3 text-center text-label-sm text-primary font-headline-sm">✓ Approved</td>
<td className="py-2.5 px-3 text-secondary text-label-sm">OIML R 76</td>
<td className="py-2.5 px-3 text-right whitespace-nowrap">
<button className="text-primary font-headline-sm hover:underline mr-2 text-label-sm">View</button>
<button className="text-secondary hover:text-on-surface text-label-sm">⋮</button>
</td>
</tr>
{/*  Row 11  */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-3 font-headline-sm text-primary">TEST-011</td>
<td className="py-2.5 px-3"><a className="text-primary font-headline-sm hover:underline" href="#">TR-0091</a></td>
<td className="py-2.5 px-3 text-on-surface">Repeatability</td>
<td className="py-2.5 px-3 text-secondary">06 Sep 2026 11:45</td>
<td className="py-2.5 px-3">A. Kumar</td>
<td className="py-2.5 px-3">R. Singh</td>
<td className="py-2.5 px-3 text-center">
<span className="px-2 py-0.5 bg-surface-container text-primary font-headline-sm text-label-sm rounded inline-block">✓ PASS</span>
</td>
<td className="py-2.5 px-3 text-center text-label-sm text-primary font-headline-sm">✓ Approved</td>
<td className="py-2.5 px-3 text-secondary text-label-sm">OIML R 76</td>
<td className="py-2.5 px-3 text-right whitespace-nowrap">
<button className="text-primary font-headline-sm hover:underline mr-2 text-label-sm">View</button>
<button className="text-secondary hover:text-on-surface text-label-sm">⋮</button>
</td>
</tr>
{/*  Row 10  */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-3 font-headline-sm text-primary">TEST-010</td>
<td className="py-2.5 px-3"><a className="text-primary font-headline-sm hover:underline" href="#">TR-0090</a></td>
<td className="py-2.5 px-3 text-on-surface">Eccentric Loading</td>
<td className="py-2.5 px-3 text-secondary">05 Sep 2026 16:20</td>
<td className="py-2.5 px-3">A. Kumar</td>
<td className="py-2.5 px-3">R. Singh</td>
<td className="py-2.5 px-3 text-center">
<span className="px-2 py-0.5 bg-surface-container text-primary font-headline-sm text-label-sm rounded inline-block">✓ PASS</span>
</td>
<td className="py-2.5 px-3 text-center text-label-sm text-primary font-headline-sm">✓ Approved</td>
<td className="py-2.5 px-3 text-secondary text-label-sm">OIML R 76</td>
<td className="py-2.5 px-3 text-right whitespace-nowrap">
<button className="text-primary font-headline-sm hover:underline mr-2 text-label-sm">View</button>
<button className="text-secondary hover:text-on-surface text-label-sm">⋮</button>
</td>
</tr>
{/*  Row 09 (FAIL)  */}
<tr className="hover:bg-error-container/30 bg-error-container/15 transition-colors">
<td className="py-2.5 px-3 font-headline-sm text-error">TEST-009</td>
<td className="py-2.5 px-3"><a className="text-error font-headline-sm hover:underline" href="#">TR-0089</a></td>
<td className="py-2.5 px-3 text-error">Zero / Tare Ops</td>
<td className="py-2.5 px-3 text-error">05 Sep 2026 14:10</td>
<td className="py-2.5 px-3 text-error">A. Kumar</td>
<td className="py-2.5 px-3 text-error">R. Singh</td>
<td className="py-2.5 px-3 text-center">
<span className="px-2 py-0.5 bg-surface-container-lowest text-error font-headline-sm text-label-sm rounded inline-block">✕ FAIL</span>
</td>
<td className="py-2.5 px-3 text-center text-label-sm text-error font-headline-sm">✕ Rejected</td>
<td className="py-2.5 px-3 text-secondary text-label-sm">OIML R 76 §4</td>
<td className="py-2.5 px-3 text-right whitespace-nowrap">
<button className="text-error font-headline-sm hover:underline mr-2 text-label-sm">Audit</button>
<button className="text-secondary hover:text-on-surface text-label-sm">⋮</button>
</td>
</tr>
{/*  Row 08  */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-3 font-headline-sm text-primary">TEST-008</td>
<td className="py-2.5 px-3"><a className="text-primary font-headline-sm hover:underline" href="#">TR-0088</a></td>
<td className="py-2.5 px-3 text-on-surface">Environmental</td>
<td className="py-2.5 px-3 text-secondary">20 Aug 2026 10:30</td>
<td className="py-2.5 px-3">S. Gupta</td>
<td className="py-2.5 px-3">R. Singh</td>
<td className="py-2.5 px-3 text-center">
<span className="px-2 py-0.5 bg-surface-container text-primary font-headline-sm text-label-sm rounded inline-block">✓ PASS</span>
</td>
<td className="py-2.5 px-3 text-center text-label-sm text-primary font-headline-sm">✓ Approved</td>
<td className="py-2.5 px-3 text-secondary text-label-sm">ISO 17025</td>
<td className="py-2.5 px-3 text-right whitespace-nowrap">
<button className="text-primary font-headline-sm hover:underline mr-2 text-label-sm">View</button>
<button className="text-secondary hover:text-on-surface text-label-sm">⋮</button>
</td>
</tr>
{/*  Row 07  */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-2.5 px-3 font-headline-sm text-primary">TEST-007</td>
<td className="py-2.5 px-3"><a className="text-primary font-headline-sm hover:underline" href="#">TR-0087</a></td>
<td className="py-2.5 px-3 text-on-surface">Routine Accuracy</td>
<td className="py-2.5 px-3 text-secondary">10 Aug 2026 09:15</td>
<td className="py-2.5 px-3">S. Gupta</td>
<td className="py-2.5 px-3">R. Singh</td>
<td className="py-2.5 px-3 text-center">
<span className="px-2 py-0.5 bg-surface-container text-primary font-headline-sm text-label-sm rounded inline-block">✓ PASS</span>
</td>
<td className="py-2.5 px-3 text-center text-label-sm text-primary font-headline-sm">✓ Approved</td>
<td className="py-2.5 px-3 text-secondary text-label-sm">OIML R 76</td>
<td className="py-2.5 px-3 text-right whitespace-nowrap">
<button className="text-primary font-headline-sm hover:underline mr-2 text-label-sm">View</button>
<button className="text-secondary hover:text-on-surface text-label-sm">⋮</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  PAGINATION BAR  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs font-metric-tabular text-label-sm font-label-sm text-secondary">
<div className="flex items-center gap-2">
<span>Showing 1–6 of 12 records</span>
<span className="text-outline">|</span>
<span>Rows per page: 6</span>
</div>
<div className="flex items-center gap-1">
<button className="px-2.5 py-1 bg-surface-container text-secondary rounded hover:bg-surface-container-high" disabled="">Previous</button>
<button className="px-2.5 py-1 bg-primary text-surface rounded font-headline-sm">1</button>
<button className="px-2.5 py-1 bg-surface-container text-on-surface rounded hover:bg-surface-container-high">2</button>
<button className="px-2.5 py-1 bg-surface-container text-on-surface rounded hover:bg-surface-container-high">Next</button>
</div>
</div>
</div>
</div>
{/*  RIGHT COLUMN (4 cols of 12) - ANALYTICS & DOSSIER INSPECTOR  */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/*  A. HISTORICAL RESULTS SUMMARY CARD  */}
<div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col gap-space-md">
<h3 className="text-headline-sm font-headline-sm text-primary">Historical Performance Summary</h3>
<div className="flex items-center justify-between bg-surface-container-low p-space-md rounded">
<div className="flex flex-col">
<span className="text-label-sm font-label-sm text-secondary uppercase">Historical Pass Ratio</span>
<span className="text-headline-lg font-headline-lg font-metric-tabular text-primary">91.7%</span>
</div>
<div className="text-right font-metric-tabular text-label-sm">
<div className="text-primary font-headline-sm">11 / 12 PASS</div>
<div className="text-error">1 / 12 FAIL</div>
</div>
</div>
<p className="text-body-sm font-body-sm text-secondary bg-surface-container p-2 rounded">
<strong className="text-on-surface">Regulatory Note:</strong> Historical proportion of recorded evaluations; not an official legal-metrology pass mark. Each inspection stands as an isolated compliance event under ISO 17025.
            </p>
<div className="flex flex-col gap-1 text-label-sm font-metric-tabular text-secondary">
<div className="flex justify-between">
<span>Total Evaluations:</span>
<span className="font-headline-sm text-on-surface">12 Cycles</span>
</div>
<div className="flex justify-between">
<span>Instrument Conformance:</span>
<span className="font-headline-sm text-primary">CURRENTLY COMPLIANT</span>
</div>
<div className="flex justify-between">
<span>Latest Run Result:</span>
<span className="font-headline-sm text-primary">PASS (06 Sep 2026)</span>
</div>
</div>
</div>
{/*  B. TESTS BY PROCEDURE TYPE BREAKDOWN  */}
<div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col gap-space-md">
<h3 className="text-headline-sm font-headline-sm text-primary">Procedures Conducted</h3>
<div className="flex flex-col gap-3 font-metric-tabular text-label-sm font-label-sm">
{/*  Item 1  */}
<div>
<div className="flex justify-between mb-1">
<span className="text-on-surface font-headline-sm">Accuracy / Error of Indication</span>
<span className="text-secondary">4 tests (33%)</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded">
<div className="bg-primary-container h-1.5 rounded" style={{"width":"33%"}}></div>
</div>
</div>
{/*  Item 2  */}
<div>
<div className="flex justify-between mb-1">
<span className="text-on-surface font-headline-sm">Repeatability Verification</span>
<span className="text-secondary">3 tests (25%)</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded">
<div className="bg-primary-container h-1.5 rounded" style={{"width":"25%"}}></div>
</div>
</div>
{/*  Item 3  */}
<div>
<div className="flex justify-between mb-1">
<span className="text-on-surface font-headline-sm">Eccentric Loading Check</span>
<span className="text-secondary">2 tests (17%)</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded">
<div className="bg-primary h-1.5 rounded" style={{"width":"17%"}}></div>
</div>
</div>
{/*  Item 4  */}
<div>
<div className="flex justify-between mb-1">
<span className="text-on-surface font-headline-sm">Environmental &amp; Thermal Shift</span>
<span className="text-secondary">2 tests (17%)</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded">
<div className="bg-primary h-1.5 rounded" style={{"width":"17%"}}></div>
</div>
</div>
{/*  Item 5  */}
<div>
<div className="flex justify-between mb-1">
<span className="text-on-surface font-headline-sm">Zero / Tare Operations</span>
<span className="text-secondary">1 test (8%)</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded">
<div className="bg-error h-1.5 rounded" style={{"width":"8%"}}></div>
</div>
</div>
</div>
</div>
{/*  C. LAST FAILED TEST AUDIT BOX  */}
<div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col gap-space-sm border-l-4 border-l-error">
<div className="flex items-center justify-between">
<span className="text-label-sm font-label-sm text-error uppercase font-headline-sm tracking-wide">Last Non-Conformance</span>
<span className="px-2 py-0.5 bg-error-container text-error font-headline-sm text-label-sm rounded font-metric-tabular">
                ✕ FAIL
              </span>
</div>
<h4 className="text-headline-sm font-headline-sm text-primary font-metric-tabular">
              TEST-009 (Zero / Tare) • 05 Sep 2026
            </h4>
<div className="text-body-sm font-body-sm text-on-surface bg-surface-container-low p-space-sm rounded">
<strong className="text-error">Recorded Defect:</strong> Zero tracking residual offset exceeded ±0.25e maximum permissible error during continuous 3-cycle unload test.
            </div>
<div className="flex flex-col gap-1 text-label-sm font-metric-tabular text-secondary">
<div>Affected Dossier: <strong className="text-error font-headline-sm">TR-0089 (Status: REJECTED)</strong></div>
<div>Audit Metrologist: <strong className="text-on-surface">R. Singh</strong></div>
<div className="text-[11px] text-secondary mt-1">
<strong>Corrective Action:</strong> Subsequent recalibration &amp; strain gauge leveling performed before TEST-010 passed.
              </div>
</div>
<a className="text-label-sm font-headline-sm text-error hover:underline flex items-center gap-1 mt-1" href="#">
<span>View Full Failure Report TR-0089</span>
<span className="material-symbols-outlined text-body-md">arrow_forward</span>
</a>
</div>
{/*  D.  TEST SUMMARY INSPECTOR  */}
<div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<h3 className="text-headline-sm font-headline-sm text-primary">Active Inspection Dossier</h3>
<span className="px-2 py-0.5 bg-primary-container text-surface-container-low font-headline-sm text-label-sm rounded font-metric-tabular">
                : TEST-012
              </span>
</div>
<div className="flex flex-col gap-2 font-metric-tabular text-label-sm">
<div className="flex justify-between py-1 bg-surface-container-low px-2 rounded">
<span className="text-secondary">Report Dossier:</span>
<span className="font-headline-sm text-primary">TR-0091 (Approved v1.0)</span>
</div>
<div className="flex justify-between py-1 px-2">
<span className="text-secondary">Procedure:</span>
<span className="font-headline-sm text-on-surface">Accuracy / Error (OIML §3.5)</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low px-2 rounded">
<span className="text-secondary">Execution Date:</span>
<span className="font-headline-sm text-on-surface">06 Sep 2026 • 13:14 UTC</span>
</div>
<div className="flex justify-between py-1 px-2">
<span className="text-secondary">Testing Officer:</span>
<span className="font-headline-sm text-on-surface">A. Kumar (TECH-409)</span>
</div>
<div className="flex justify-between py-1 bg-surface-container-low px-2 rounded">
<span className="text-secondary">Supervisory Sign-off:</span>
<span className="font-headline-sm text-on-surface">R. Singh (Lead Metrologist)</span>
</div>
<div className="flex justify-between py-1 px-2">
<span className="text-secondary">Standard Rule:</span>
<span className="font-headline-sm text-on-surface">OIML R 76 — R76-2026.1</span>
</div>
</div>
<div className="flex flex-col gap-2 pt-space-xs">
<button className="w-full py-2 bg-primary hover:bg-primary-container text-surface font-label-md text-label-md rounded shadow-sm flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-body-md">science</span>
<span>Open Test Data Workspace</span>
</button>
<button className="w-full py-2 bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md rounded shadow-sm flex items-center justify-center gap-2" type="button">
<span className="material-symbols-outlined text-body-md">verified</span>
<span>View Official Certificate</span>
</button>
</div>
</div>
{/*  E. TRACEABILITY & RECORDKEEPING NOTICE  */}
<div className="bg-surface-container p-space-md rounded flex gap-3 text-label-sm font-label-sm text-secondary">
<span className="material-symbols-outlined text-primary text-headline-sm shrink-0">policy</span>
<p>
              History records are immutably associated with instrument serial number <strong className="text-primary font-metric-tabular">WT100-2026-001</strong>. Historical records are retained as controlled laboratory test records and are not overwritten by subsequent testing per <strong className="text-primary">ISO/IEC 17025 §8.4</strong>.
            </p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
