import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function NewTestSelection() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <aside className="fixed left-0 top-0 h-screen w-[248px] bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.08)]"><div className="flex flex-col flex-1 min-h-0"><div className="h-16 px-space-base flex items-center gap-space-sm bg-primary border-b border-primary-container/40"><div className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-tertiary-fixed"><span className="material-symbols-outlined text-[20px]">scale</span></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-primary tracking-wider leading-none">VERISCALE</span><span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest mt-space-2xs leading-none">METROLOGY PLATFORM</span></div></div><div className="flex-1 overflow-y-auto px-space-sm py-space-md"><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Main</div><nav className="flex flex-col gap-space-2xs mb-space-lg" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[18px]">dashboard</span><span>Dashboard</span></a><a aria-current="page" className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-colors bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r" data-path="instruments" href="#"><span className="material-symbols-outlined text-[18px]">scale</span><span>Instruments</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="tests" href="#"><span className="material-symbols-outlined text-[18px]">experiment</span><span>Tests</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="compliance" href="#"><span className="material-symbols-outlined text-[18px]">verified</span><span>Compliance</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[18px]">assignment</span><span>Reports</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="repository" href="#"><span className="material-symbols-outlined text-[18px]">folder_data</span><span>Repository</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="test-history" href="#"><span className="material-symbols-outlined text-[18px]">history</span><span>Test History</span></a></nav><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Administration</div><nav className="flex flex-col gap-space-2xs" data-active-classes="bg-[#008B8B]/20 text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="users" href="#"><span className="material-symbols-outlined text-[18px]">group</span><span>Users</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="audit-trail" href="#"><span className="material-symbols-outlined text-[18px]">receipt_long</span><span>Audit Trail</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[18px]">settings</span><span>Settings</span></a></nav></div></div><div className="p-space-base bg-primary border-t border-primary-container/40 flex items-center justify-between"><div className="flex items-center gap-space-md"><div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary font-label-md text-label-md">MS<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed ring-2 ring-primary"></span></div><div className="flex flex-col"><span className="font-label-md text-label-md text-on-primary leading-none">Manan Sharma</span><span className="font-label-sm text-label-sm text-primary-fixed-dim mt-space-2xs leading-none">Administrator</span></div></div><button aria-label="User options" className="text-primary-fixed-dim hover:text-on-primary transition-colors flex items-center" type="button"><span className="material-symbols-outlined text-[20px]">more_vert</span></button></div></aside><div className="pl-[248px]"><header className="fixed top-0 left-[248px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl z-40 border-b border-surface-variant flex items-center justify-between px-margin-desktop shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="flex items-center gap-space-md"><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">Instrument Management</span><span className="font-label-sm text-label-sm text-secondary">Manage registered weighing instruments and technical specifications</span></div></div><div className="flex items-center gap-space-lg"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span><input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low border border-outline-variant/60 rounded text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search instruments, serial numbers, models..." type="text"/></div><div className="flex items-center gap-space-sm text-secondary"><button aria-label="Notifications" className="relative p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help Documentation" className="p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help_outline</span></button></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-surface-container-high text-on-primary font-label-md text-label-md">MS</div></div></header><main className="w-full pt-16 bg-[#F4F7F9] min-h-screen px-margin-desktop py-space-xl"><div className="flex flex-col w-full">
{/*  Top Application Path Header  */}
<div className="flex items-center justify-between pb-space-md mb-space-base">
<div className="flex flex-col gap-space-2xs">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary">
<span>Tests</span>
<span className="text-outline">/</span>
<span>New Test</span>
<span className="text-outline">/</span>
<span className="text-primary font-bold">Test Selection</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Select Tests</h1>
<p className="font-body-md text-body-md text-secondary">Choose the applicable test procedures for this instrument and testing program.</p>
</div>
<div className="flex items-center gap-space-md">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-colors flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[16px] text-secondary">save</span>
<span>Save as Draft</span>
</button>
<button className="text-secondary hover:text-error font-label-md text-label-md transition-colors px-space-xs py-1.5" type="button">
        Cancel
      </button>
</div>
</div>
{/*  Linear 8-Stage Workflow Stepper  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg">
<div className="grid grid-cols-8 gap-space-sm relative">
{/*  Stage 01  */}
<div className="flex flex-col gap-space-2xs relative group">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-[#15803D] text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="h-0.5 flex-1 bg-[#15803D]/30"></div>
</div>
<div className="flex flex-col mt-space-2xs">
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">01 Instrument</span>
<span className="font-body-sm text-body-sm text-[#15803D] truncate">WT-100 Verified</span>
</div>
</div>
{/*  Stage 02  */}
<div className="flex flex-col gap-space-2xs relative group">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-[#15803D] text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div className="h-0.5 flex-1 bg-[#15803D]/30"></div>
</div>
<div className="flex flex-col mt-space-2xs">
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">02 Lab &amp; Conditions</span>
<span className="font-body-sm text-body-sm text-[#15803D] truncate">Recorded &amp; Stable</span>
</div>
</div>
{/*  Stage 03 (Active)  */}
<div className="flex flex-col gap-space-2xs relative">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-[#008B8B] text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            03
          </div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<div className="flex flex-col mt-space-2xs">
<span className="font-label-sm text-label-sm text-primary font-bold truncate">03 Test Selection</span>
<span className="font-label-sm text-label-sm text-[#008B8B] font-bold tracking-wider uppercase">ACTIVE STAGE</span>
</div>
</div>
{/*  Stage 04  */}
<div className="flex flex-col gap-space-2xs opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            04
          </div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<div className="flex flex-col mt-space-2xs">
<span className="font-label-sm text-label-sm text-secondary truncate">04 Observations</span>
<span className="font-body-sm text-body-sm text-outline truncate">Pending</span>
</div>
</div>
{/*  Stage 05  */}
<div className="flex flex-col gap-space-2xs opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            05
          </div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<div className="flex flex-col mt-space-2xs">
<span className="font-label-sm text-label-sm text-secondary truncate">05 Compliance</span>
<span className="font-body-sm text-body-sm text-outline truncate">Pending</span>
</div>
</div>
{/*  Stage 06  */}
<div className="flex flex-col gap-space-2xs opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            06
          </div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<div className="flex flex-col mt-space-2xs">
<span className="font-label-sm text-label-sm text-secondary truncate">06 Evidence</span>
<span className="font-body-sm text-body-sm text-outline truncate">Pending</span>
</div>
</div>
{/*  Stage 07  */}
<div className="flex flex-col gap-space-2xs opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            07
          </div>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
<div className="flex flex-col mt-space-2xs">
<span className="font-label-sm text-label-sm text-secondary truncate">07 Review</span>
<span className="font-body-sm text-body-sm text-outline truncate">Pending</span>
</div>
</div>
{/*  Stage 08  */}
<div className="flex flex-col gap-space-2xs opacity-60">
<div className="flex items-center gap-space-xs">
<div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-label-sm text-label-sm font-semibold">
            08
          </div>
</div>
<div className="flex flex-col mt-space-2xs">
<span className="font-label-sm text-label-sm text-secondary truncate">08 Report</span>
<span className="font-body-sm text-body-sm text-outline truncate">Pending</span>
</div>
</div>
</div>
</div>
{/*  Locked Session Context Strip  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">TEST SESSION CONTEXT • LOCKED FROM STEPS 01 &amp; 02</span>
</div>
<a className="font-label-sm text-label-sm text-primary-container font-semibold hover:text-primary flex items-center gap-space-2xs transition-colors" href="#">
        Edit Session Details ↗
      </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-space-md pt-space-xs bg-surface-container-low/40 rounded-lg p-space-sm">
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase">Instrument</span>
<span className="font-label-md text-label-md text-on-surface font-semibold truncate" title="ABC WeighTech WT-100">ABC WeighTech WT-100</span>
<span className="font-body-sm text-body-sm text-secondary truncate">Class III Platform</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase">Serial Number</span>
<span className="font-metric-tabular text-metric-tabular text-on-surface bg-surface-container-high/60 px-1.5 py-0.5 rounded w-fit mt-space-2xs font-semibold">WT100-2026-001</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase">Test Ref ID</span>
<span className="font-label-md text-label-md text-primary font-bold">TEST-012</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase">Facility / Chamber</span>
<span className="font-label-md text-label-md text-on-surface truncate" title="XYZ Metrology Lab (Suite 02)">XYZ Metrology Lab</span>
<span className="font-body-sm text-body-sm text-secondary">Suite 02</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase">Technician</span>
<span className="font-label-md text-label-md text-on-surface font-medium">A. Kumar</span>
<span className="font-body-sm text-body-sm text-secondary">TECH-409</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase">Ambient Conditions</span>
<span className="font-label-md text-label-md text-on-surface truncate">23.5 °C • 48% RH</span>
<span className="font-body-sm text-body-sm text-secondary">1012 hPa (Nominal)</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-secondary uppercase">Test Date</span>
<span className="font-label-md text-label-md text-on-surface font-medium">06 Sep 2026</span>
<span className="font-body-sm text-body-sm text-[#15803D] font-medium">Verified Active</span>
</div>
</div>
</div>
{/*  Two-Column Workflow Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">
{/*  Left Column: Applicable Test Procedures (68% width -> lg:col-span-8)  */}
<div className="lg:col-span-8 flex flex-col gap-space-base">
{/*  Informational Directive  */}
<div className="bg-surface-container-low rounded-lg p-space-md flex items-start gap-space-sm text-on-surface">
<span className="material-symbols-outlined text-[20px] text-primary-container shrink-0 mt-0.5">info</span>
<span className="font-body-md text-body-md text-secondary">
          Applicability is determined from instrument characteristics, configured <strong className="text-on-surface font-semibold">OIML R 76</strong> rules, and the  evaluation program.
        </span>
</div>
{/*  Filter and Bulk Selection Bar  */}
<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm flex-1 min-w-[280px]">
<div className="relative flex items-center flex-1 max-w-sm">
<span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span>
<input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low rounded text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all" id="test-search" placeholder="Search test procedures..." type="text"/>
</div>
<div className="flex items-center gap-space-2xs bg-surface-container-low rounded px-space-sm py-1.5">
<span className="font-label-sm text-label-sm text-secondary">Category:</span>
<select className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer">
<option value="all">All Categories</option>
<option value="metrological">Metrological</option>
<option value="environmental">Environmental</option>
<option value="functional">Functional</option>
</select>
</div>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-primary-container font-label-md text-label-md hover:bg-secondary-container transition-colors flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[16px]">select_all</span>
<span>Select all recommended (4)</span>
</button>
</div>
{/*  2-Column Grid of 8 Test Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-base">
{/*  CARD 1: Accuracy / Error of Indication ()  */}
<div className="bg-[#F0FDFD] rounded-xl p-space-md shadow-sm flex flex-col justify-between transition-all hover:shadow-md relative overflow-hidden" style={{"boxShadow":"inset 0 0 0 1.5px #008B8B"}}>
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-start gap-space-sm">
<input defaultChecked="" className="w-4 h-4 mt-1 rounded accent-[#008B8B] cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Accuracy / Error of Indication</h2>
<div className="flex items-center gap-space-xs mt-space-2xs">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-secondary font-semibold uppercase">METROLOGICAL</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-white text-[#008B8B] font-bold tracking-wider">RECOMMENDED</span>
</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-[#008B8B]">verified</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Evaluate the indication of the instrument against the applicable test load and acceptance criteria across increasing and decreasing load sequences.
            </p>
</div>
<div className="mt-space-base pt-space-sm flex items-center justify-between bg-surface-container-lowest/70 p-space-xs rounded-lg">
<span className="font-label-sm text-label-sm text-secondary truncate max-w-[210px]" title="Required for OIML R 76 Class III evaluation • OIML R 76-1 § A.4.4">
              Class III Req • OIML R 76-1 § A.4.4
            </span>
<button className="font-label-md text-label-md text-primary-container font-semibold hover:text-primary flex items-center gap-space-2xs" type="button">
              Details →
            </button>
</div>
</div>
{/*  CARD 2: Repeatability ()  */}
<div className="bg-[#F0FDFD] rounded-xl p-space-md shadow-sm flex flex-col justify-between transition-all hover:shadow-md relative overflow-hidden" style={{"boxShadow":"inset 0 0 0 1.5px #008B8B"}}>
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-start gap-space-sm">
<input defaultChecked="" className="w-4 h-4 mt-1 rounded accent-[#008B8B] cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Repeatability</h2>
<div className="flex items-center gap-space-xs mt-space-2xs">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-secondary font-semibold uppercase">METROLOGICAL</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-white text-[#008B8B] font-bold tracking-wider">RECOMMENDED</span>
</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-[#008B8B]">sync</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Evaluate consistency of indications across repeated applications of the same test load under identical testing conditions.
            </p>
</div>
<div className="mt-space-base pt-space-sm flex items-center justify-between bg-surface-container-lowest/70 p-space-xs rounded-lg">
<span className="font-label-sm text-label-sm text-secondary truncate max-w-[210px]" title="3 series of 10 loadings at 0.5 Max and Max • OIML R 76-1 § A.4.10">
              3 series @ 0.5 Max &amp; Max • § A.4.10
            </span>
<button className="font-label-md text-label-md text-primary-container font-semibold hover:text-primary flex items-center gap-space-2xs" type="button">
              Details →
            </button>
</div>
</div>
{/*  CARD 3: Eccentric Loading ()  */}
<div className="bg-[#F0FDFD] rounded-xl p-space-md shadow-sm flex flex-col justify-between transition-all hover:shadow-md relative overflow-hidden" style={{"boxShadow":"inset 0 0 0 1.5px #008B8B"}}>
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-start gap-space-sm">
<input defaultChecked="" className="w-4 h-4 mt-1 rounded accent-[#008B8B] cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Eccentric Loading</h2>
<div className="flex items-center gap-space-xs mt-space-2xs">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-secondary font-semibold uppercase">METROLOGICAL</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-white text-secondary font-medium">APPLICABLE</span>
</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-[#008B8B]">grid_view</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Evaluate instrument performance under specified off-center loading positions across 4 quadrants on the platform load receptor.
            </p>
</div>
<div className="mt-space-base pt-space-sm flex items-center justify-between bg-surface-container-lowest/70 p-space-xs rounded-lg">
<span className="font-label-sm text-label-sm text-secondary truncate max-w-[210px]" title="Load at 1/3 (Max + Add'l additive tare) • 5 test positions">
              Load 1/3 Max • 5 positions
            </span>
<button className="font-label-md text-label-md text-primary-container font-semibold hover:text-primary flex items-center gap-space-2xs" type="button">
              Details →
            </button>
</div>
</div>
{/*  CARD 4: Zero / Zero-Related Checks ()  */}
<div className="bg-[#F0FDFD] rounded-xl p-space-md shadow-sm flex flex-col justify-between transition-all hover:shadow-md relative overflow-hidden" style={{"boxShadow":"inset 0 0 0 1.5px #008B8B"}}>
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-start gap-space-sm">
<input defaultChecked="" className="w-4 h-4 mt-1 rounded accent-[#008B8B] cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Zero / Zero-Related Checks</h2>
<div className="flex items-center gap-space-xs mt-space-2xs">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-secondary font-semibold uppercase">METROLOGICAL</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-white text-secondary font-medium">APPLICABLE</span>
</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-[#008B8B]">exposure_zero</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Evaluate zero-setting range, semi-automatic zero-setting accuracy, and zero-tracking device behavior.
            </p>
</div>
<div className="mt-space-base pt-space-sm flex items-center justify-between bg-surface-container-lowest/70 p-space-xs rounded-lg">
<span className="font-label-sm text-label-sm text-secondary truncate max-w-[210px]" title="Zero indication within ±0.25e • OIML R 76-1 § 4.5">
              Zero within ±0.25e • § 4.5
            </span>
<button className="font-label-md text-label-md text-primary-container font-semibold hover:text-primary flex items-center gap-space-2xs" type="button">
              Details →
            </button>
</div>
</div>
{/*  CARD 5: Tare & Pre-set Tare (Unselected)  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-start gap-space-sm">
<input className="w-4 h-4 mt-1 rounded accent-primary-container cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Tare &amp; Pre-set Tare</h2>
<div className="flex items-center gap-space-xs mt-space-2xs">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-secondary font-semibold uppercase">METROLOGICAL</span>
</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">tune</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
              Evaluate subtractive tare mechanism accuracy, tare balancing limits, and tare indication consistency.
            </p>
</div>
<div className="mt-space-base pt-space-sm flex items-center justify-between bg-surface-container-low/50 p-space-xs rounded-lg">
<span className="font-label-sm text-label-sm text-secondary truncate max-w-[210px]" title="Subtractive range: 100% Max • Resolution: 1d">
              Subtractive 100% Max • 1d
            </span>
<button className="font-label-md text-label-md text-secondary font-semibold hover:text-on-surface flex items-center gap-space-2xs" type="button">
              Details →
            </button>
</div>
</div>
{/*  CARD 6: Influence of Environmental Conditions (Unselected)  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-start gap-space-sm">
<input className="w-4 h-4 mt-1 rounded accent-primary-container cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Influence of Environmental Conditions</h2>
<div className="flex items-center gap-space-xs mt-space-2xs">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-secondary font-semibold uppercase">ENVIRONMENTAL</span>
</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">thermostat</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
              Evaluate instrument span stability and zero drift across static temperature envelopes and damp heat cycles.
            </p>
</div>
<div className="mt-space-base pt-space-sm flex items-center justify-between bg-surface-container-low/50 p-space-xs rounded-lg">
<span className="font-label-sm text-label-sm text-secondary truncate max-w-[210px]" title="Chamber limits: -10 °C to +40 °C • RH cycling">
              Chamber: -10°C to +40°C
            </span>
<button className="font-label-md text-label-md text-secondary font-semibold hover:text-on-surface flex items-center gap-space-2xs" type="button">
              Details →
            </button>
</div>
</div>
{/*  CARD 7: Warm-up & Electrical Supply (Unselected)  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-start gap-space-sm">
<input className="w-4 h-4 mt-1 rounded accent-primary-container cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Warm-up &amp; Electrical Supply</h2>
<div className="flex items-center gap-space-xs mt-space-2xs">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-secondary font-semibold uppercase">FUNCTIONAL</span>
</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">bolt</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
              Evaluate zero stability post 30-min warm-up and performance during ±10% AC mains supply fluctuations.
            </p>
</div>
<div className="mt-space-base pt-space-sm flex items-center justify-between bg-surface-container-low/50 p-space-xs rounded-lg">
<span className="font-label-sm text-label-sm text-secondary truncate max-w-[210px]" title="230V AC ±10% / 50Hz • Stability timer">
              230V AC ±10% / 50Hz
            </span>
<button className="font-label-md text-label-md text-secondary font-semibold hover:text-on-surface flex items-center gap-space-2xs" type="button">
              Details →
            </button>
</div>
</div>
{/*  CARD 8: Custom Laboratory Protocol (Unselected)  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-start gap-space-sm">
<input className="w-4 h-4 mt-1 rounded accent-primary-container cursor-pointer" type="checkbox"/>
<div className="flex flex-col">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Custom Laboratory Protocol</h2>
<div className="flex items-center gap-space-xs mt-space-2xs">
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-secondary font-semibold uppercase">OTHER</span>
</div>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-outline">science</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
              Record supplementary custom testing procedures or non-standard client evaluation protocols.
            </p>
</div>
<div className="mt-space-base pt-space-sm flex items-center justify-between bg-surface-container-low/50 p-space-xs rounded-lg">
<span className="font-label-sm text-label-sm text-secondary truncate max-w-[210px]" title="Requires custom SOP attachment">
              Requires custom SOP
            </span>
<button className="font-label-md text-label-md text-primary-container font-semibold hover:text-primary flex items-center gap-space-2xs" type="button">
              Configure SOP →
            </button>
</div>
</div>
</div>
</div>
{/*  Right Column: Rule Set, Selection Summary & Test Execution Sequence (32% width -> lg:col-span-4)  */}
<div className="lg:col-span-4 flex flex-col gap-space-base">
{/*  CARD 1: Applicable Rule Set  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Regulatory Rule Set</h2>
<span className="w-2.5 h-2.5 rounded-full bg-[#15803D]" title="Rule Engine Loaded"></span>
</div>
<div className="flex flex-col gap-space-xs py-space-xs">
<div className="flex justify-between items-baseline">
<span className="font-label-sm text-label-sm text-secondary">Standard</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">OIML R 76-1 (2006 / E)</span>
</div>
<div className="flex justify-between items-baseline">
<span className="font-label-sm text-label-sm text-secondary">Accreditation</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">ISO/IEC 17025:2017 § 7.2</span>
</div>
<div className="flex justify-between items-baseline">
<span className="font-label-sm text-label-sm text-secondary">Program</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Pattern Verification</span>
</div>
<div className="flex justify-between items-baseline">
<span className="font-label-sm text-label-sm text-secondary">Accuracy Bound</span>
<span className="font-label-md text-label-md text-primary font-bold">Class III (Medium)</span>
</div>
</div>
<div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-space-2xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-[#15803D]">check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Rule Engine R76-2026.1 Validated</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
            Governs automated mpe error limits (±0.5e, ±1.0e, ±1.5e) during Step 04 Observations.
          </p>
</div>
<a className="font-label-md text-label-md text-primary-container font-semibold hover:text-primary pt-space-xs flex items-center justify-between" href="#">
<span>Inspect Rule Configuration</span>
<span>↗</span>
</a>
</div>
{/*  CARD 2: Selection Summary & Workload  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Selection Summary</h2>
{/*  Metrics Grid  */}
<div className="grid grid-cols-3 gap-space-xs bg-surface-container-low/60 rounded-lg p-space-sm text-center">
<div className="flex flex-col items-center">
<span className="font-metric-tabular text-headline-md font-bold text-primary">4</span>
<span className="font-label-sm text-label-sm text-secondary uppercase">Tests</span>
</div>
<div className="flex flex-col items-center">
<span className="font-metric-tabular text-headline-md font-bold text-primary">~75m</span>
<span className="font-label-sm text-label-sm text-secondary uppercase">Duration</span>
</div>
<div className="flex flex-col items-center">
<span className="font-metric-tabular text-headline-md font-bold text-[#008B8B]">28</span>
<span className="font-label-sm text-label-sm text-secondary uppercase">Points</span>
</div>
</div>
{/*  Metric Categories Detail  */}
<div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-secondary py-space-xs">
<div className="flex justify-between">
<span>Metrological procedures:</span>
<span className="font-semibold text-on-surface">4 </span>
</div>
<div className="flex justify-between">
<span>Environmental &amp; Chamber:</span>
<span className="font-semibold text-on-surface">0 </span>
</div>
<div className="flex justify-between">
<span>Functional / Supply:</span>
<span className="font-semibold text-on-surface">0 </span>
</div>
</div>
{/*  Breakdown List  */}
<div className="flex flex-col gap-space-2xs pt-space-xs">
<div className="flex items-center justify-between font-label-md text-label-md p-space-xs rounded bg-surface-container-low/40">
<span className="text-on-surface truncate">✓ 1. Error of Indication</span>
<span className="font-metric-tabular text-secondary text-body-sm">10 pts</span>
</div>
<div className="flex items-center justify-between font-label-md text-label-md p-space-xs rounded bg-surface-container-low/40">
<span className="text-on-surface truncate">✓ 2. Repeatability</span>
<span className="font-metric-tabular text-secondary text-body-sm">6 pts</span>
</div>
<div className="flex items-center justify-between font-label-md text-label-md p-space-xs rounded bg-surface-container-low/40">
<span className="text-on-surface truncate">✓ 3. Eccentric Loading</span>
<span className="font-metric-tabular text-secondary text-body-sm">5 pts</span>
</div>
<div className="flex items-center justify-between font-label-md text-label-md p-space-xs rounded bg-surface-container-low/40">
<span className="text-on-surface truncate">✓ 4. Zero-Related Checks</span>
<span className="font-metric-tabular text-secondary text-body-sm">7 pts</span>
</div>
</div>
</div>
{/*  CARD 3: Test Execution Sequence  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Test Sequence</h2>
<span className="font-label-sm text-label-sm text-secondary">Reorderable</span>
</div>
<p className="font-body-sm text-body-sm text-secondary">
          Chronological sequence ensures standard thermal equilibrium across weighing series.
        </p>
<div className="flex flex-col gap-space-xs mt-space-2xs" id="sequence-list">
{/*  Item 1  */}
<div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low/70 rounded-lg hover:bg-surface-container-high/60 cursor-move transition-colors group">
<span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary">drag_indicator</span>
<span className="font-metric-tabular font-bold text-secondary text-label-md">01</span>
<span className="font-label-md text-label-md text-on-surface flex-1 truncate">Accuracy / Error of Indication</span>
<span className="material-symbols-outlined text-[16px] text-secondary">check</span>
</div>
{/*  Item 2  */}
<div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low/70 rounded-lg hover:bg-surface-container-high/60 cursor-move transition-colors group">
<span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary">drag_indicator</span>
<span className="font-metric-tabular font-bold text-secondary text-label-md">02</span>
<span className="font-label-md text-label-md text-on-surface flex-1 truncate">Repeatability</span>
<span className="material-symbols-outlined text-[16px] text-secondary">check</span>
</div>
{/*  Item 3  */}
<div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low/70 rounded-lg hover:bg-surface-container-high/60 cursor-move transition-colors group">
<span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary">drag_indicator</span>
<span className="font-metric-tabular font-bold text-secondary text-label-md">03</span>
<span className="font-label-md text-label-md text-on-surface flex-1 truncate">Eccentric Loading</span>
<span className="material-symbols-outlined text-[16px] text-secondary">check</span>
</div>
{/*  Item 4  */}
<div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low/70 rounded-lg hover:bg-surface-container-high/60 cursor-move transition-colors group">
<span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary">drag_indicator</span>
<span className="font-metric-tabular font-bold text-secondary text-label-md">04</span>
<span className="font-label-md text-label-md text-on-surface flex-1 truncate">Zero / Zero-Related Checks</span>
<span className="material-symbols-outlined text-[16px] text-secondary">check</span>
</div>
</div>
</div>
</div>
</div>
{/*  Validation & Readiness Banner  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md bg-[#F0FDF4]/80">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-[#15803D] text-on-primary flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-[#15803D] font-bold">SELECTION READY (4 PROCEDURES CONFIGURED)</span>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-space-md gap-y-space-2xs mt-space-2xs text-on-surface font-body-sm text-body-sm">
<span className="flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[16px] text-[#15803D]">check_small</span> Core metrological  (4)</span>
<span className="flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[16px] text-[#15803D]">check_small</span> Error-of-indication included</span>
<span className="flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[16px] text-[#15803D]">check_small</span> Chamber conditions linked (Step 02)</span>
<span className="flex items-center gap-space-2xs"><span className="material-symbols-outlined text-[16px] text-[#15803D]">check_small</span> Observation schemas valid</span>
</div>
</div>
</div>
<div className="shrink-0 flex items-center gap-space-xs font-label-md text-label-md text-secondary">
<span className="material-symbols-outlined text-[18px]">lock_clock</span>
<span>Readiness Check #VC-4902</span>
</div>
</div>
{/*  Sticky Bottom Action Bar  */}
<div className="sticky bottom-0 bg-surface-container-lowest/95 backdrop-blur-md rounded-t-xl p-space-md shadow-xl flex items-center justify-between -mx-margin-desktop px-margin-desktop z-30">
<button className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-space-xs" type="button">
<span className="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Back to Laboratory &amp; Conditions</span>
</button>
<div className="flex items-center gap-space-md">
<button className="px-space-md py-2 rounded-lg bg-surface-container text-secondary font-label-md text-label-md hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button">
        Save as Draft
      </button>
<button className="px-space-xl py-2 rounded-lg bg-[#123B5D] text-on-primary font-label-md text-label-md hover:bg-[#008B8B] transition-colors flex items-center gap-space-xs shadow-sm" type="button">
<span>Continue to Observations</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</main></div>
    </div>
  );
}
