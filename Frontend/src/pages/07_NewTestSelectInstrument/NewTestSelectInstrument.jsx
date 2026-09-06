import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function NewTestSelectInstrument() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <aside className="fixed left-0 top-0 h-screen w-[248px] bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.08)]"><div className="flex flex-col flex-1 min-h-0"><div className="h-16 px-space-base flex items-center gap-space-sm bg-primary border-b border-primary-container/40"><div className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed"><span className="material-symbols-outlined text-[20px]">scale</span></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-primary tracking-wider leading-none">VERISCALE</span><span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest mt-space-2xs leading-none">METROLOGY PLATFORM</span></div></div><div className="flex-1 overflow-y-auto px-space-sm py-space-md"><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Main</div><nav className="flex flex-col gap-space-2xs mb-space-lg" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[18px]">dashboard</span><span>Dashboard</span></a><a aria-current="page" className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-colors bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r" data-path="instruments" href="#"><span className="material-symbols-outlined text-[18px]">scale</span><span>Instruments</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="tests" href="#"><span className="material-symbols-outlined text-[18px]">experiment</span><span>Tests</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="compliance" href="#"><span className="material-symbols-outlined text-[18px]">verified</span><span>Compliance</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[18px]">assignment</span><span>Reports</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="repository" href="#"><span className="material-symbols-outlined text-[18px]">folder_data</span><span>Repository</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="test-history" href="#"><span className="material-symbols-outlined text-[18px]">history</span><span>Test History</span></a></nav><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Administration</div><nav className="flex flex-col gap-space-2xs" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="users" href="#"><span className="material-symbols-outlined text-[18px]">group</span><span>Users</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="audit-trail" href="#"><span className="material-symbols-outlined text-[18px]">receipt_long</span><span>Audit Trail</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[18px]">settings</span><span>Settings</span></a></nav></div></div><div className="p-space-base bg-primary border-t border-primary-container/40 flex items-center justify-between"><div className="flex items-center gap-space-md"><div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary font-label-md text-label-md">MS<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed ring-2 ring-primary"></span></div><div className="flex flex-col"><span className="font-label-md text-label-md text-on-primary leading-none">Manan Sharma</span><span className="font-label-sm text-label-sm text-primary-fixed-dim mt-space-2xs leading-none">Administrator</span></div></div><button aria-label="User options" className="text-primary-fixed-dim hover:text-on-primary transition-colors flex items-center" type="button"><span className="material-symbols-outlined text-[20px]">more_vert</span></button></div></aside><div className="pl-[248px]"><header className="fixed top-0 left-[248px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl z-40 border-b border-surface-variant flex items-center justify-between px-margin-desktop shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="flex items-center gap-space-md"><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">Instrument Management</span><span className="font-label-sm text-label-sm text-secondary">Manage registered weighing instruments and technical specifications</span></div></div><div className="flex items-center gap-space-lg"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span><input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low border border-outline-variant/60 rounded text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search instruments, serial numbers, models..." type="text"/></div><div className="flex items-center gap-space-sm text-secondary"><button aria-label="Notifications" className="relative p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help Documentation" className="p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help_outline</span></button></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-surface-container-high text-on-primary font-label-md text-label-md">MS</div></div></header><main className="w-full pt-16 bg-[#F4F7F9] min-h-screen px-margin-desktop py-space-xl"><div className="flex flex-col w-full max-w-[1240px] mx-auto pb-16">
{/*  Subheader Breadcrumbs & Global Test Header  */}
<div className="flex flex-col gap-space-xs mb-space-lg">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary tracking-wider uppercase">
<a className="hover:text-primary transition-colors" href="#">Tests</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">New Test</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface-variant font-normal">Step 1: Instrument Selection</span>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mt-space-xs">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Start New Test</h1>
<p className="font-body-md text-body-md text-secondary mt-space-2xs">Select the legal-for-trade weighing instrument to initialize the OIML R 76 / ISO 17025 testing workflow.</p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-colors flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">save</span>
<span>Save as Draft</span>
</button>
<button className="px-space-md py-1.5 rounded-lg text-secondary hover:text-error hover:bg-error-container/20 font-label-md text-label-md transition-colors" type="button">
          Cancel
        </button>
</div>
</div>
</div>
{/*  8-Stage Metrology Workflow Stepper  */}
<div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-base mb-space-xl">
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-xs relative">
{/*  Step 1: Active  */}
<div className="flex flex-col gap-space-xs relative">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-tertiary-container text-tertiary-fixed flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            01
          </div>
<div className="h-0.5 flex-1 bg-tertiary-container"></div>
</div>
<div className="flex flex-col pr-space-xs">
<span className="font-label-md text-label-md font-bold text-on-surface leading-tight">Instrument</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold mt-space-2xs">Active Selection</span>
</div>
</div>
{/*  Step 2  */}
<div className="flex flex-col gap-space-xs relative opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            02
          </div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<div className="flex flex-col pr-space-xs">
<span className="font-label-md text-label-md font-medium text-on-surface leading-tight">Conditions</span>
<span className="font-label-sm text-label-sm text-secondary mt-space-2xs">Laboratory</span>
</div>
</div>
{/*  Step 3  */}
<div className="flex flex-col gap-space-xs relative opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            03
          </div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<div className="flex flex-col pr-space-xs">
<span className="font-label-md text-label-md font-medium text-on-surface leading-tight">Test Plan</span>
<span className="font-label-sm text-label-sm text-secondary mt-space-2xs">R 76 Regimes</span>
</div>
</div>
{/*  Step 4  */}
<div className="flex flex-col gap-space-xs relative opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            04
          </div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<div className="flex flex-col pr-space-xs">
<span className="font-label-md text-label-md font-medium text-on-surface leading-tight">Observations</span>
<span className="font-label-sm text-label-sm text-secondary mt-space-2xs">Load Readings</span>
</div>
</div>
{/*  Step 5  */}
<div className="flex flex-col gap-space-xs relative opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            05
          </div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<div className="flex flex-col pr-space-xs">
<span className="font-label-md text-label-md font-medium text-on-surface leading-tight">Compliance</span>
<span className="font-label-sm text-label-sm text-secondary mt-space-2xs">mpe Assessment</span>
</div>
</div>
{/*  Step 6  */}
<div className="flex flex-col gap-space-xs relative opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            06
          </div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<div className="flex flex-col pr-space-xs">
<span className="font-label-md text-label-md font-medium text-on-surface leading-tight">Evidence</span>
<span className="font-label-sm text-label-sm text-secondary mt-space-2xs">Weights &amp; Seals</span>
</div>
</div>
{/*  Step 7  */}
<div className="flex flex-col gap-space-xs relative opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            07
          </div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<div className="flex flex-col pr-space-xs">
<span className="font-label-md text-label-md font-medium text-on-surface leading-tight">Sign-Off</span>
<span className="font-label-sm text-label-sm text-secondary mt-space-2xs">Signatures</span>
</div>
</div>
{/*  Step 8  */}
<div className="flex flex-col gap-space-xs relative opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            08
          </div>
</div>
<div className="flex flex-col pr-space-xs">
<span className="font-label-md text-label-md font-medium text-on-surface leading-tight">Certificate</span>
<span className="font-label-sm text-label-sm text-secondary mt-space-2xs">ISO 17025 PDF</span>
</div>
</div>
</div>
</div>
{/*  Primary Work Area: Instrument Selector Panel  */}
<div className="flex flex-col gap-space-lg">
{/*  Panel Description  */}
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-tertiary-container">scale</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Select Target Instrument</h2>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs max-w-3xl">
        Choose an enrolled weighing instrument to bind metrological specifications (Max, Min, e, accuracy class) directly to the test log. Technical attributes and tolerance calculations are initialized automatically.
      </p>
</div>
{/*  Main Table & Filter Container  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col overflow-hidden">
{/*  Search & Filters Strip  */}
<div className="p-space-base bg-surface-container-lowest flex flex-col gap-space-md">
<div className="flex flex-col lg:flex-row gap-space-base items-stretch lg:items-center justify-between">
{/*  Text Search with minimum char feedback  */}
<div className="flex-1 relative">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[20px]">search</span>
<input className="w-full pl-10 pr-space-md py-2 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm placeholder:text-secondary focus:outline-none focus:bg-surface-container-lowest shadow-inner transition-colors" id="instrument-search" placeholder="Search by model, serial number, tag, or manufacturer..." type="text" defaultValue="WT-100"/>
</div>
<div className="flex items-center gap-space-xs mt-1 px-1">
<span className="material-symbols-outlined text-[13px] text-secondary">info</span>
<span className="font-label-sm text-label-sm text-secondary">Filtering active. Enter at least 2 characters to search across 1,248 enrolled assets.</span>
</div>
</div>
{/*  Quick Filters & Clear Action  */}
<div className="flex flex-wrap items-center gap-space-sm">
{/*  Manufacturer Dropdown  */}
<div className="relative min-w-[170px]">
<select className="w-full appearance-none pl-space-md pr-8 py-2 bg-surface-container-low rounded-lg text-on-surface font-label-md text-label-md cursor-pointer focus:outline-none focus:bg-surface-container-lowest transition-colors">
<option >All Manufacturers</option>
<option>ABC WeighTech Pvt. Ltd.</option>
<option>XYZ Scales Corp</option>
<option>Precision Instruments Ltd</option>
<option>Mettler Tol Industrial</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-secondary">arrow_drop_down</span>
</div>
{/*  Instrument Type Dropdown  */}
<div className="relative min-w-[160px]">
<select className="w-full appearance-none pl-space-md pr-8 py-2 bg-surface-container-low rounded-lg text-on-surface font-label-md text-label-md cursor-pointer focus:outline-none focus:bg-surface-container-lowest transition-colors">
<option >All Types (OIML)</option>
<option>Platform Scale</option>
<option>Precision Balance</option>
<option>Electronic Scale</option>
<option>Weighbridge (NAWI)</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-secondary">arrow_drop_down</span>
</div>
{/*  Status Dropdown  */}
<div className="relative min-w-[140px]">
<select className="w-full appearance-none pl-space-md pr-8 py-2 bg-surface-container-low rounded-lg text-on-surface font-label-md text-label-md cursor-pointer focus:outline-none focus:bg-surface-container-lowest transition-colors">
<option >All Statuses</option>
<option>Active / In-Tolerance</option>
<option>Requires Review</option>
<option>Test Failed / Quarantined</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-secondary">arrow_drop_down</span>
</div>
<button className="px-space-md py-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-colors flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[16px]">filter_alt_off</span>
<span>Clear</span>
</button>
</div>
</div>
</div>
{/*  Instruments Data Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-space-sm pl-space-base pr-space-xs w-12 text-center" scope="col">Select</th>
<th className="py-space-sm px-space-md" scope="col">Manufacturer</th>
<th className="py-space-sm px-space-md" scope="col">Model</th>
<th className="py-space-sm px-space-md" scope="col">Serial Number</th>
<th className="py-space-sm px-space-md" scope="col">Type</th>
<th className="py-space-sm px-space-md text-right" scope="col">Capacity (Max)</th>
<th className="py-space-sm px-space-md text-right" scope="col">Scale Div (e)</th>
<th className="py-space-sm px-space-md" scope="col">Last Test</th>
<th className="py-space-sm pr-space-base pl-space-md text-center" scope="col">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low font-body-md text-body-md text-on-surface">
{/*  Row 1:   */}
<tr className="bg-surface-container-high/40 transition-colors cursor-pointer group">
<td className="py-space-sm pl-space-base pr-space-xs text-center">
<input defaultChecked="" className="w-4 h-4 text-tertiary-container accent-tertiary-container focus:ring-0 cursor-pointer" id="inst-1" name="_instrument" type="radio" value="WT100-2026-001"/>
</td>
<td className="py-space-sm px-space-md font-medium text-on-surface">
                ABC WeighTech Pvt. Ltd.
              </td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-space-xs">
<span className="font-semibold text-primary">WT-100</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-secondary">Class III</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-metric-tabular text-metric-tabular font-mono tracking-tight">WT100-2026-001</span>
</td>
<td className="py-space-sm px-space-md text-secondary">
                Platform Scale
              </td>
<td className="py-space-sm px-space-md text-right font-metric-tabular text-metric-tabular font-semibold text-on-surface">
                100.000 <span className="text-secondary font-normal text-body-sm">kg</span>
</td>
<td className="py-space-sm px-space-md text-right font-metric-tabular text-metric-tabular font-medium text-on-surface">
                10 <span className="text-secondary font-normal text-body-sm">g</span>
</td>
<td className="py-space-sm px-space-md font-body-sm text-body-sm text-secondary">
                06 Sep 2026
              </td>
<td className="py-space-sm pr-space-base pl-space-md text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-tertiary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span>ACTIVE</span>
</span>
</td>
</tr>
{/*  Row 2: PS-500  */}
<tr className="hover:bg-surface-container-low/60 transition-colors cursor-pointer group">
<td className="py-space-sm pl-space-base pr-space-xs text-center">
<input className="w-4 h-4 text-tertiary-container accent-tertiary-container focus:ring-0 cursor-pointer" id="inst-2" name="_instrument" type="radio" value="PS500-2026-145"/>
</td>
<td className="py-space-sm px-space-md font-medium text-on-surface">
                XYZ Scales Corp
              </td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-space-xs">
<span className="font-semibold text-on-surface">PS-500</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-secondary">Class III</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-metric-tabular text-metric-tabular font-mono tracking-tight">PS500-2026-145</span>
</td>
<td className="py-space-sm px-space-md text-secondary">
                Platform Scale
              </td>
<td className="py-space-sm px-space-md text-right font-metric-tabular text-metric-tabular font-semibold text-on-surface">
                500.000 <span className="text-secondary font-normal text-body-sm">kg</span>
</td>
<td className="py-space-sm px-space-md text-right font-metric-tabular text-metric-tabular font-medium text-on-surface">
                50 <span className="text-secondary font-normal text-body-sm">g</span>
</td>
<td className="py-space-sm px-space-md font-body-sm text-body-sm text-secondary">
                04 Sep 2026
              </td>
<td className="py-space-sm pr-space-base pl-space-md text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-tertiary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span>ACTIVE</span>
</span>
</td>
</tr>
{/*  Row 3: PI-50 (Requires Review)  */}
<tr className="hover:bg-surface-container-low/60 transition-colors cursor-pointer group">
<td className="py-space-sm pl-space-base pr-space-xs text-center">
<input className="w-4 h-4 text-tertiary-container accent-tertiary-container focus:ring-0 cursor-pointer" id="inst-3" name="_instrument" type="radio" value="PI50-2025-083"/>
</td>
<td className="py-space-sm px-space-md font-medium text-on-surface">
                Precision Instruments Ltd
              </td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-space-xs">
<span className="font-semibold text-on-surface">PI-50</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-secondary">Class II</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-metric-tabular text-metric-tabular font-mono tracking-tight">PI50-2025-083</span>
</td>
<td className="py-space-sm px-space-md text-secondary">
                Precision Balance
              </td>
<td className="py-space-sm px-space-md text-right font-metric-tabular text-metric-tabular font-semibold text-on-surface">
                50.0000 <span className="text-secondary font-normal text-body-sm">kg</span>
</td>
<td className="py-space-sm px-space-md text-right font-metric-tabular text-metric-tabular font-medium text-on-surface">
                1 <span className="text-secondary font-normal text-body-sm">g</span>
</td>
<td className="py-space-sm px-space-md font-body-sm text-body-sm text-secondary">
                29 Aug 2026
              </td>
<td className="py-space-sm pr-space-base pl-space-md text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[13px]">pending</span>
<span>REVIEW REQ</span>
</span>
</td>
</tr>
{/*  Row 4: WT-200 (Test Failed)  */}
<tr className="hover:bg-surface-container-low/60 transition-colors cursor-pointer group">
<td className="py-space-sm pl-space-base pr-space-xs text-center">
<input className="w-4 h-4 text-tertiary-container accent-tertiary-container focus:ring-0 cursor-pointer" id="inst-4" name="_instrument" type="radio" value="WT200-2026-233"/>
</td>
<td className="py-space-sm px-space-md font-medium text-on-surface">
                ABC WeighTech Pvt. Ltd.
              </td>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-space-xs">
<span className="font-semibold text-on-surface">WT-200</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-secondary">Class III</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-metric-tabular text-metric-tabular font-mono tracking-tight">WT200-2026-233</span>
</td>
<td className="py-space-sm px-space-md text-secondary">
                Electronic Scale
              </td>
<td className="py-space-sm px-space-md text-right font-metric-tabular text-metric-tabular font-semibold text-on-surface">
                200.000 <span className="text-secondary font-normal text-body-sm">kg</span>
</td>
<td className="py-space-sm px-space-md text-right font-metric-tabular text-metric-tabular font-medium text-on-surface">
                20 <span className="text-secondary font-normal text-body-sm">g</span>
</td>
<td className="py-space-sm px-space-md font-body-sm text-body-sm text-secondary">
                20 Aug 2026
              </td>
<td className="py-space-sm pr-space-base pl-space-md text-center">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[13px]">cancel</span>
<span>FAILED</span>
</span>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Footer & Pagination  */}
<div className="px-space-base py-space-sm bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<span className="font-label-sm text-label-sm text-secondary">
          Showing <span className="font-semibold text-on-surface">1–4</span> of <span className="font-semibold text-on-surface">1,248</span> registered instruments
        </span>
<div className="flex items-center gap-space-2xs">
<button className="px-space-sm py-1 rounded bg-surface-container-lowest text-secondary opacity-50 font-label-sm text-label-sm cursor-not-allowed" disabled="" type="button">
            Previous
          </button>
<button className="w-7 h-7 rounded bg-primary text-on-primary font-label-sm text-label-sm font-bold flex items-center justify-center shadow-xs" type="button">
            1
          </button>
<button className="w-7 h-7 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center transition-colors" type="button">
            2
          </button>
<button className="w-7 h-7 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center transition-colors" type="button">
            3
          </button>
<span className="px-1 text-secondary font-label-sm text-label-sm">...</span>
<button className="w-7 h-7 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center transition-colors" type="button">
            125
          </button>
<button className="px-space-sm py-1 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors" type="button">
            Next
          </button>
</div>
</div>
</div>
{/*  Active Selection Verification Panel (Dynamic Metrology Profile)  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-space-base bg-surface-container-high/30 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-tertiary-container text-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">verified</span>
</div>
<div>
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold"> Instrument Specification</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-highest text-tertiary-container font-bold tracking-wide">READY FOR TESTING</span>
</div>
<p className="font-label-sm text-label-sm text-secondary">Verified against metrological enrollment database #REG-2026-WT100</p>
</div>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold hover:underline" href="#">
<span>View Full Instrument Master Card</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
{/*  Specification Matrix Bento  */}
<div className="p-space-base grid grid-cols-2 md:grid-cols-4 gap-space-base">
{/*  Col 1  */}
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Manufacturer</span>
<span className="font-body-md text-body-md font-semibold text-on-surface">ABC WeighTech Pvt. Ltd.</span>
<span className="font-label-sm text-label-sm text-secondary">Origin: Germany / EU</span>
</div>
{/*  Col 2  */}
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Model &amp; Tag</span>
<span className="font-body-md text-body-md font-semibold text-on-surface">WT-100 (Platform NAWI)</span>
<span className="font-label-sm text-label-sm font-mono text-secondary">Tag: LAB-SCALE-04</span>
</div>
{/*  Col 3  */}
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Serial Identifier</span>
<span className="font-metric-tabular text-metric-tabular font-mono font-bold text-on-surface">WT100-2026-001</span>
<span className="font-label-sm text-label-sm text-secondary">Main board v2.4a</span>
</div>
{/*  Col 4  */}
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">OIML Classification</span>
<div className="flex items-center gap-space-xs">
<span className="font-body-md text-body-md font-bold text-on-surface">Class III</span>
<span className="font-label-sm text-label-sm text-secondary">(Medium Accuracy)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">n = 10,000 divisions</span>
</div>
{/*  Col 5: Max Capacity  */}
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Max Capacity (Max)</span>
<div className="flex items-baseline gap-1">
<span className="font-metric-display text-[22px] font-bold text-primary leading-none">100.000</span>
<span className="font-label-md text-label-md font-semibold text-secondary">kg</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Overload limit: 120 kg</span>
</div>
{/*  Col 6: Min Capacity  */}
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Min Capacity (Min)</span>
<div className="flex items-baseline gap-1">
<span className="font-metric-display text-[22px] font-bold text-primary leading-none">0.200</span>
<span className="font-label-md text-label-md font-semibold text-secondary">kg (20 e)</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">OIML R 76 Table 3</span>
</div>
{/*  Col 7: Verification Interval  */}
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Verification Scale Div (e)</span>
<div className="flex items-baseline gap-1">
<span className="font-metric-display text-[22px] font-bold text-tertiary-container leading-none">10.0</span>
<span className="font-label-md text-label-md font-semibold text-secondary">g</span>
</div>
<span className="font-label-sm text-label-sm text-secondary">Actual scale interval d = 2 g</span>
</div>
{/*  Col 8: Calibration Status  */}
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Regulatory Certificate</span>
<span className="font-body-md text-body-md font-semibold text-on-surface">TC-8894-REV3</span>
<span className="font-label-sm text-label-sm text-on-tertiary-container font-semibold">Valid through 12/2027</span>
</div>
</div>
{/*  Legal Metrology Notice Callout Strip  */}
<div className="px-space-base py-space-sm bg-surface-container-high/40 flex items-start gap-space-sm">
<span className="material-symbols-outlined text-[18px] text-tertiary-container mt-0.5">policy</span>
<div className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
<span className="font-semibold text-on-surface">OIML R 76 Auto-Configuration Active:</span>
          Maximum Permissible Error (mpe) envelopes (±0.5 e for 0 ≤ m ≤ 500 e; ±1.0 e for 500 e &lt; m ≤ 2000 e; ±1.5 e for 2000 e &lt; m ≤ 10000 e) have been initialized. All standard test points will populate automatically into Routine Steps 04 and 05.
        </div>
</div>
</div>
{/*  Secondary Action: Register New Asset If Not Found  */}
<div className="p-space-base rounded-xl bg-surface-container-lowest shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">add_circle_outline</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Cannot locate the test instrument?</h3>
<p className="font-body-sm text-body-sm text-secondary mt-space-2xs">Enroll an unlisted balance, load cell platform, or weighbridge into the inventory database before initializing verification runs.</p>
</div>
</div>
<button className="whitespace-nowrap px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-medium transition-colors flex items-center gap-space-xs shadow-xs" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>Register New Instrument</span>
</button>
</div>
</div>
{/*  Persistent Workflow Navigation Bar (Sticky Footer within Slot)  */}
<div className="sticky bottom-4 z-30 mt-space-xl bg-surface-container-lowest rounded-xl shadow-xl p-space-base flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md w-full sm:w-auto justify-between sm:justify-start">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[20px] text-tertiary-container">check_circle</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Step 1 of 8 Complete</span>
</div>
<span className="hidden sm:inline text-secondary font-label-sm text-label-sm">•</span>
<span className="font-label-sm text-label-sm text-secondary">Instrument WT100-2026-001 </span>
</div>
<div className="flex items-center gap-space-md w-full sm:w-auto justify-end">
<button className="px-space-md py-2 rounded-lg bg-surface-container-low text-secondary opacity-50 font-label-md text-label-md cursor-not-allowed flex items-center gap-space-xs" disabled="" type="button">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Back</span>
</button>
<a className="px-space-lg py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-colors flex items-center gap-space-xs shadow-sm" href="#" id="continue-workflow-btn">
<span>Continue to Laboratory Conditions</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</main></div>
    </div>
  );
}
