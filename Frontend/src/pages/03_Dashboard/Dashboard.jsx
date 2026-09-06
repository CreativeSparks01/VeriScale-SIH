import React from 'react';
import { useMetrologyRouter } from '../../utils/navigation';

export default function Dashboard() {
  const { handleGlobalClick, navigate } = useMetrologyRouter();

  return (
    <div 
      className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased select-none"
      onClick={handleGlobalClick}
    >
      <aside className="fixed left-0 top-0 h-screen w-[248px] bg-primary text-on-primary z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.08)]"><div className="flex flex-col flex-1 min-h-0"><div className="h-16 px-space-base flex items-center gap-space-sm bg-primary border-b border-primary-container/40"><img alt="Brand logo. - Primary color: #123b5d
- Font: ibmPlexSans
- Mode: light
- Roundness: rounded-sm
" className="h-8 w-auto object-contain" src="/src/assets/technical-emblem.svg" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-primary tracking-wider leading-none">VERISCALE</span><span className="font-label-sm text-label-sm text-tertiary-fixed tracking-widest mt-space-2xs leading-none">METROLOGY PLATFORM</span></div></div><div className="flex-1 overflow-y-auto px-space-sm py-space-md"><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Main</div><nav className="flex flex-col gap-space-2xs mb-space-lg" data-active-classes="bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a aria-current="page" className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-colors bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r" data-path="dashboard" href="#"><span className="material-symbols-outlined text-[18px]">dashboard</span><span className="">Dashboard</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="instruments" href="#"><span className="material-symbols-outlined text-[18px]">scale</span><span className="">Instruments</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="tests" href="#"><span className="material-symbols-outlined text-[18px]">experiment</span><span className="">Tests</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="compliance" href="#"><span className="material-symbols-outlined text-[18px]">verified</span><span className="">Compliance</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="reports" href="#"><span className="material-symbols-outlined text-[18px]">assignment</span><span className="">Reports</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="repository" href="#"><span className="material-symbols-outlined text-[18px]">folder_data</span><span className="">Repository</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="test-history" href="#"><span className="material-symbols-outlined text-[18px]">history</span><span className="">Test History</span></a></nav><div className="px-space-sm mb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim/70">Administration</div><nav className="flex flex-col gap-space-2xs" data-active-classes="bg-primary-container text-on-primary font-label-md font-bold shadow-sm relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-5 before:bg-tertiary-fixed-dim before:rounded-r"><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="users" href="#"><span className="material-symbols-outlined text-[18px]">group</span><span className="">Users</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="audit-trail" href="#"><span className="material-symbols-outlined text-[18px]">receipt_long</span><span className="">Audit Trail</span></a><a className="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-colors" data-path="settings" href="#"><span className="material-symbols-outlined text-[18px]">settings</span><span className="">Settings</span></a></nav></div></div><div className="p-space-base bg-primary border-t border-primary-container/40 flex items-center justify-between"><div className="flex items-center gap-space-md"><div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary font-label-md text-label-md">MS<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-tertiary-fixed ring-2 ring-primary"></span></div><div className="flex flex-col"><span className="font-label-md text-label-md text-on-primary leading-none">Manan Sharma</span><span className="font-label-sm text-label-sm text-primary-fixed-dim mt-space-2xs leading-none">Administrator</span></div></div><button aria-label="User options" className="text-primary-fixed-dim hover:text-on-primary transition-colors flex items-center" type="button"><span className="material-symbols-outlined text-[20px]">more_vert</span></button></div></aside><div className="pl-[248px]"><header className="fixed top-0 left-[248px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl z-40 border-b border-surface-variant flex items-center justify-between px-margin-desktop shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="flex items-center gap-space-md"><img alt="Brand logo. - Primary color: #123b5d
- Font: ibmPlexSans
- Mode: light
- Roundness: rounded-sm
" className="h-8 w-auto object-contain md:hidden" src="/src/assets/technical-emblem.svg" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">Dashboard</span><span className="font-label-sm text-label-sm text-secondary">Laboratory Operations Overview</span></div></div><div className="flex items-center gap-space-lg"><div className="relative flex items-center w-80"><span className="material-symbols-outlined absolute left-3 text-secondary text-[18px]">search</span><input className="w-full pl-9 pr-space-md py-1.5 bg-surface-container-low border border-outline-variant/60 rounded text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container focus:bg-surface-container-lowest transition-all" placeholder="Search reports, instruments, serial numbers..." type="text" /></div><div className="flex items-center gap-space-sm text-secondary"><button aria-label="Notifications" className="relative p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help Documentation" className="p-1.5 hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help_outline</span></button></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-surface-container-high"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="w-full pt-16 bg-surface min-h-screen px-margin-desktop py-space-xl overflow-x-hidden"><div className="flex flex-col w-full gap-space-lg">
{/*  Sub-Header / Control Strip  */}
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md pb-space-md border-b border-[#D7E0E7]">
<div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary uppercase tracking-wider">
<span className="">ISO/IEC 17025 ACCREDITED LAB</span>
<span className="text-[#D7E0E7]">•</span>
<span className="text-[#15803D] font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span> TELEMETRY ONLINE
        </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-[#123B5D] mt-space-2xs tracking-tight">Laboratory Operations Overview</h1>
</div>
<div className="flex items-center gap-space-sm">
<button className="inline-flex items-center gap-space-xs px-space-md py-2 bg-[#FFFFFF] border border-[#D7E0E7] rounded text-[#172B3A] font-label-md text-label-md hover:bg-[#F4F7F9] hover:border-[#123B5D] transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-[#49607a]">assignment</span>
<span className="">View Reports</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-2 bg-[#123B5D] border border-[#0B263D] rounded text-[#FFFFFF] font-label-md text-label-md hover:bg-[#0B263D] transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">add</span>
<span className="">New Test</span>
</button>
</div>
</div>
{/*  SECTION 1: KPI Summary Cards (6 Compact Cards)  */}
<section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-space-md">{/*  Card 1  */}
<div className="bg-[#FFFFFF] border border-[#D7E0E7] rounded-lg p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden transition-all hover:shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-[#123B5D]"></div>
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm text-[#49607a] uppercase font-semibold tracking-wider">Total Reports</span>
<span className="material-symbols-outlined text-[#49607a] text-[18px]">folder_open</span>
</div>
<div className="mt-space-sm">
<span className="font-metric-display text-headline-lg text-[#172B3A] font-bold font-metric-tabular leading-none block">1,248</span>
<p className="font-body-sm text-body-sm text-[#49607a] mt-space-xs">All laboratory reports</p>
</div>
</div>
{/*  Card 2  */}
<div className="bg-[#FFFFFF] border border-[#D7E0E7] rounded-lg p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden transition-all hover:shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-[#15803D]"></div>
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm text-[#49607a] uppercase font-semibold tracking-wider">Completed</span>
<span className="material-symbols-outlined text-[#15803D] text-[18px]">check_circle</span>
</div>
<div className="mt-space-sm">
<span className="font-metric-display text-headline-lg text-[#15803D] font-bold font-metric-tabular leading-none block">980</span>
<p className="font-body-sm text-body-sm text-[#49607a] mt-space-xs">78.5% of total</p>
</div>
</div>
{/*  Card 3  */}
<div className="bg-[#FFFFFF] border border-[#D7E0E7] rounded-lg p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden transition-all hover:shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-[#008B8B]"></div>
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm text-[#49607a] uppercase font-semibold tracking-wider">In Progress</span>
<span className="material-symbols-outlined text-[#008B8B] text-[18px]">hourglass_top</span>
</div>
<div className="mt-space-sm">
<span className="font-metric-display text-headline-lg text-[#008B8B] font-bold font-metric-tabular leading-none block">215</span>
<p className="font-body-sm text-body-sm text-[#49607a] mt-space-xs">Currently being tested</p>
</div>
</div>
{/*  Card 4  */}
<div className="bg-[#FFFFFF] border border-[#D7E0E7] rounded-lg p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden transition-all hover:shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B45309]"></div>
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm text-[#49607a] uppercase font-semibold tracking-wider">Pending Review</span>
<span className="material-symbols-outlined text-[#B45309] text-[18px]">pending_actions</span>
</div>
<div className="mt-space-sm">
<span className="font-metric-display text-headline-lg text-[#B45309] font-bold font-metric-tabular leading-none block">53</span>
<p className="font-body-sm text-body-sm text-[#49607a] mt-space-xs">Requires reviewer action</p>
</div>
</div>
{/*  Card 5  */}
<div className="bg-[#FFFFFF] border border-[#D7E0E7] rounded-lg p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden transition-all hover:shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-[#B42318]"></div>
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm text-[#49607a] uppercase font-semibold tracking-wider">Failed Tests</span>
<span className="material-symbols-outlined text-[#B42318] text-[18px]">error</span>
</div>
<div className="mt-space-sm">
<span className="font-metric-display text-headline-lg text-[#B42318] font-bold font-metric-tabular leading-none block">31</span>
<p className="font-body-sm text-body-sm text-[#49607a] mt-space-xs">Requires attention</p>
</div>
</div>
{/*  Card 6  */}
<div className="bg-[#FFFFFF] border border-[#D7E0E7] rounded-lg p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden transition-all hover:shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
<div className="absolute top-0 left-0 right-0 h-[2px] bg-[#123B5D]"></div>
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm text-[#49607a] uppercase font-semibold tracking-wider">This Month</span>
<span className="material-symbols-outlined text-[#49607a] text-[18px]">calendar_today</span>
</div>
<div className="mt-space-sm">
<span className="font-metric-display text-headline-lg text-[#172B3A] font-bold font-metric-tabular leading-none block">87</span>
<p className="font-body-sm text-body-sm text-[#49607a] mt-space-xs">Reports generated</p>
</div>
</div></section>
{/*  SECTION 2 & 3: MID SECTION (Testing Activity & Testing Pipeline)  */}
<section className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
{/*  Section 2: Testing Activity Chart (8 cols)  */}
<div className="xl:col-span-8 bg-[#FFFFFF] border border-[#D7E0E7] rounded-lg p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm border-b border-[#D7E0E7]">
<div>
<h2 className="font-headline-sm text-headline-sm text-[#123B5D]">Testing Activity</h2>
<p className="font-body-sm text-body-sm text-[#49607a]">Tests and reports generated over the last 30 days</p>
</div>
<div className="flex items-center gap-space-sm">
<div className="flex items-center bg-[#F4F7F9] border border-[#D7E0E7] rounded px-2.5 py-1 text-[#172B3A] font-label-sm text-label-sm">
<span className="mr-1 text-[#49607a]">Range:</span>
<span className="font-semibold">Last 30 days</span>
<span className="material-symbols-outlined text-[16px] ml-1 text-[#49607a]">expand_more</span>
</div>
</div>
</div>
{/*  Metric summary callout  */}
<div className="flex items-center gap-space-lg py-space-sm">
<div>
<span className="font-label-sm text-label-sm text-[#49607a] uppercase">Generated Volume</span>
<div className="font-metric-tabular font-headline-md text-headline-md text-[#172B3A] font-bold">87 reports generated</div>
</div>
<div className="border-l border-[#D7E0E7] pl-space-lg">
<span className="font-label-sm text-label-sm text-[#49607a] uppercase">Period Velocity</span>
<div className="font-metric-tabular font-headline-md text-headline-md text-[#15803D] font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">trending_up</span> +12.4% <span className="font-body-sm text-body-sm text-[#49607a] font-normal">vs prev period</span>
</div>
</div>
</div>
</div>
{/*  Technical SVG Area & Line Chart  */}
<div className="w-full mt-space-sm">
<svg className="w-full h-44 overflow-visible" preserveAspectRatio="none" viewBox="0 0 760 170">
<defs>
<linearGradient id="tealGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#008B8B" stopOpacity="0.18"></stop>
<stop offset="100%" stopColor="#008B8B" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
{/*  Subtle Horizontal Grid Lines  */}
<line stroke="#D7E0E7" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="750" y1="20" y2="20"></line>
<line stroke="#D7E0E7" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="750" y1="55" y2="55"></line>
<line stroke="#D7E0E7" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="750" y1="90" y2="90"></line>
<line stroke="#D7E0E7" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="750" y1="125" y2="125"></line>
<line stroke="#D7E0E7" strokeWidth="1" x1="40" x2="750" y1="150" y2="150"></line>
{/*  Y-Axis Labels  */}
<text fill="#73777f" fontFamily="IBM Plex Sans" fontSize="10" textAnchor="end" x="30" y="24">15</text>
<text fill="#73777f" fontFamily="IBM Plex Sans" fontSize="10" textAnchor="end" x="30" y="59">10</text>
<text fill="#73777f" fontFamily="IBM Plex Sans" fontSize="10" textAnchor="end" x="30" y="94">5</text>
<text fill="#73777f" fontFamily="IBM Plex Sans" fontSize="10" textAnchor="end" x="30" y="129">2</text>
<text fill="#73777f" fontFamily="IBM Plex Sans" fontSize="10" textAnchor="end" x="30" y="153">0</text>
{/*  Chart Area Fill  */}
<polygon fill="url(#tealGrad)" points="
            45,150
            45,135
            75,120
            110,130
            145,110
            180,95
            215,100
            250,85
            285,75
            320,80
            355,60
            390,70
            425,50
            460,55
            495,45
            530,35
            565,40
            600,30
            635,38
            670,25
            705,30
            740,18
            740,150
          "></polygon>
{/*  Chart Stroke Line  */}
<polyline fill="none" points="
            45,135
            75,120
            110,130
            145,110
            180,95
            215,100
            250,85
            285,75
            320,80
            355,60
            390,70
            425,50
            460,55
            495,45
            530,35
            565,40
            600,30
            635,38
            670,25
            705,30
            740,18
          " stroke="#008B8B" strokeWidth="2"></polyline>
{/*  Precise Metrology Data Points  */}
<circle cx="180" cy="95" fill="#FFFFFF" r="3" stroke="#008B8B" strokeWidth="1.5"></circle>
<circle cx="355" cy="60" fill="#FFFFFF" r="3" stroke="#008B8B" strokeWidth="1.5"></circle>
<circle cx="530" cy="35" fill="#FFFFFF" r="3" stroke="#008B8B" strokeWidth="1.5"></circle>
<circle cx="740" cy="18" fill="#008B8B" r="3.5" stroke="#FFFFFF" strokeWidth="1.5"></circle>
{/*  X-Axis Date Ticks  */}
<text fill="#73777f" fontFamily="IBM Plex Sans" fontSize="10" x="45" y="166">08 Aug</text>
<text fill="#73777f" fontFamily="IBM Plex Sans" fontSize="10" x="180" y="166">15 Aug</text>
<text fill="#73777f" fontFamily="IBM Plex Sans" fontSize="10" x="355" y="166">22 Aug</text>
<text fill="#73777f" fontFamily="IBM Plex Sans" fontSize="10" x="530" y="166">29 Aug</text>
<text fill="#73777f" fontFamily="IBM Plex Sans" fontSize="10" textAnchor="end" x="735" y="166">06 Sep</text>
</svg>
</div>
</div>
{/*  Section 3: Testing Pipeline Card (4 cols)  */}
<div className="xl:col-span-4 bg-[#FFFFFF] border border-[#D7E0E7] rounded-lg p-space-lg shadow-sm flex flex-col justify-between">
<div className="pb-space-sm border-b border-[#D7E0E7]">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-[#123B5D]">Testing Pipeline</h2>
<span className="font-label-sm text-label-sm bg-[#F4F7F9] border border-[#D7E0E7] px-2 py-0.5 rounded text-[#49607a]">Live Queue</span>
</div>
<p className="font-body-sm text-body-sm text-[#49607a]">Current laboratory workload distribution</p>
</div>
{/*  Pipeline Operational Stages  */}
<div className="flex flex-col gap-space-sm my-auto py-space-sm">
{/*  Stage 1  */}
<div className="flex items-center justify-between p-space-xs px-space-sm bg-[#F4F7F9] border border-[#D7E0E7] rounded">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded flex items-center justify-center bg-[#FFFFFF] border border-[#D7E0E7] font-label-sm text-label-sm font-bold text-[#49607a]">01</span>
<span className="font-label-md text-label-md font-semibold text-[#172B3A]">DRAFT SPECIFICATION</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-metric-tabular font-headline-sm text-headline-sm text-[#172B3A]">18</span>
<span className="material-symbols-outlined text-[16px] text-[#49607a]">arrow_forward</span>
</div>
</div>
{/*  Stage 2  */}
<div className="flex items-center justify-between p-space-xs px-space-sm bg-[#ECF4FF] border border-[#C6DFFE] rounded">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded flex items-center justify-center bg-[#008B8B] text-[#FFFFFF] font-label-sm text-label-sm font-bold">02</span>
<span className="font-label-md text-label-md font-semibold text-[#123B5D]">ACTIVE TESTING</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-metric-tabular font-headline-sm text-headline-sm text-[#008B8B] font-bold">42</span>
<span className="material-symbols-outlined text-[16px] text-[#008B8B]">arrow_forward</span>
</div>
</div>
{/*  Stage 3  */}
<div className="flex items-center justify-between p-space-xs px-space-sm bg-[#FFFBEB] border border-[#FDE68A] rounded">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded flex items-center justify-center bg-[#B45309] text-[#FFFFFF] font-label-sm text-label-sm font-bold">03</span>
<span className="font-label-md text-label-md font-semibold text-[#B45309]">METROLOGICAL REVIEW</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-metric-tabular font-headline-sm text-headline-sm text-[#B45309] font-bold">12</span>
<span className="material-symbols-outlined text-[16px] text-[#B45309]">arrow_forward</span>
</div>
</div>
{/*  Stage 4  */}
<div className="flex items-center justify-between p-space-xs px-space-sm bg-[#F0FDF4] border border-[#BBF7D0] rounded">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded flex items-center justify-center bg-[#15803D] text-[#FFFFFF] font-label-sm text-label-sm font-bold">04</span>
<span className="font-label-md text-label-md font-semibold text-[#15803D]">VERIFIED &amp; APPROVED</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-metric-tabular font-headline-sm text-headline-sm text-[#15803D] font-bold">87</span>
<span className="material-symbols-outlined text-[16px] text-[#15803D]">arrow_forward</span>
</div>
</div>
{/*  Stage 5  */}
<div className="flex items-center justify-between p-space-xs px-space-sm bg-[#FFFFFF] border border-[#D7E0E7] rounded">
<div className="flex items-center gap-space-sm">
<span className="w-6 h-6 rounded flex items-center justify-center bg-[#F4F7F9] border border-[#D7E0E7] font-label-sm text-label-sm font-semibold text-[#49607a]">05</span>
<span className="font-label-md text-label-md font-semibold text-[#49607a]">SEALED &amp; ARCHIVED</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-metric-tabular font-headline-sm text-headline-sm text-[#49607a]">1,248</span>
<span className="material-symbols-outlined text-[16px] text-[#49607a]">inventory_2</span>
</div>
</div>
</div>
<div className="pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-[#49607a] border-t border-[#D7E0E7]">
<span className="">Avg Cycle Duration: <strong className="text-[#172B3A] font-metric-tabular">4.2 hrs</strong></span>
<span className="">Batch Throughput: <strong className="text-[#172B3A] font-metric-tabular">98.2%</strong></span>
</div>
</div>
</section>
{/*  SECTIONS 4, 5, 6: LOWER BALANCED LAYOUT (70% Table, 30% Stacked Panels)  */}
<section className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
{/*  Left Column: Recent Reports Table (70% - 8/12 or 8.5/12 cols)  */}
<div className="xl:col-span-8 bg-[#FFFFFF] border border-[#D7E0E7] rounded-lg shadow-sm flex flex-col overflow-hidden">
<div className="p-space-md border-b border-[#D7E0E7] flex items-center justify-between">
<div>
<h2 className="font-headline-sm text-headline-sm text-[#123B5D]">Recent Reports</h2>
<p className="font-body-sm text-body-sm text-[#49607a]">Audited metrological test executions</p>
</div>
<a className="font-label-md text-label-md text-[#123B5D] hover:underline flex items-center gap-1 font-semibold" href="#">
          View all reports <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
{/*  High-density Metrology Data Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-[#F4F7F9] border-b border-[#D7E0E7] font-label-sm text-label-sm text-[#5B6B7A] uppercase tracking-wider">
<th className="py-2.5 px-space-md font-semibold">Report ID</th>
<th className="py-2.5 px-space-md font-semibold">Instrument</th>
<th className="py-2.5 px-space-md font-semibold">Model</th>
<th className="py-2.5 px-space-md font-semibold">Technician</th>
<th className="py-2.5 px-space-md font-semibold">Date</th>
<th className="py-2.5 px-space-md font-semibold">Status</th>
<th className="py-2.5 px-space-md font-semibold text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-[#D7E0E7] font-body-sm text-body-sm">{/*  Row 1  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-3 px-space-md font-metric-tabular font-semibold text-[#123B5D]">TR-0091</td>
<td className="py-3 px-space-md text-[#172B3A] font-medium">ABC WeighTech</td>
<td className="py-3 px-space-md text-[#49607a] font-metric-tabular">WT-100</td>
<td className="py-3 px-space-md text-[#172B3A]">A. Kumar</td>
<td className="py-3 px-space-md text-[#49607a] font-metric-tabular">06 Sep 2026</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[13px]">check</span> APPROVED
</span>
</td>
<td className="py-3 px-space-md text-right">
<button className="px-2.5 py-1 text-[#123B5D] bg-[#F4F7F9] border border-[#D7E0E7] hover:border-[#123B5D] rounded font-label-sm text-label-sm font-medium transition-colors" type="button">
View
</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-3 px-space-md font-metric-tabular font-semibold text-[#123B5D]">TR-0090</td>
<td className="py-3 px-space-md text-[#172B3A] font-medium">XYZ Scales</td>
<td className="py-3 px-space-md text-[#49607a] font-metric-tabular">PS-500</td>
<td className="py-3 px-space-md text-[#172B3A]">R. Singh</td>
<td className="py-3 px-space-md text-[#49607a] font-metric-tabular">06 Sep 2026</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309] font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[13px]">schedule</span> PENDING REVIEW
</span>
</td>
<td className="py-3 px-space-md text-right">
<button className="px-2.5 py-1 text-[#FFFFFF] bg-[#123B5D] hover:bg-[#0B263D] rounded font-label-sm text-label-sm font-medium transition-colors shadow-sm" type="button">
Review
</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-3 px-space-md font-metric-tabular font-semibold text-[#123B5D]">TR-0089</td>
<td className="py-3 px-space-md text-[#172B3A] font-medium">ABC WeighTech</td>
<td className="py-3 px-space-md text-[#49607a] font-metric-tabular">WT-200</td>
<td className="py-3 px-space-md text-[#172B3A]">S. Gupta</td>
<td className="py-3 px-space-md text-[#49607a] font-metric-tabular">05 Sep 2026</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#FEF2F2] border border-[#FECACA] text-[#B42318] font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[13px]">close</span> FAILED
</span>
</td>
<td className="py-3 px-space-md text-right">
<button className="px-2.5 py-1 text-[#123B5D] bg-[#F4F7F9] border border-[#D7E0E7] hover:border-[#123B5D] rounded font-label-sm text-label-sm font-medium transition-colors" type="button">
View
</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-3 px-space-md font-metric-tabular font-semibold text-[#123B5D]">TR-0088</td>
<td className="py-3 px-space-md text-[#172B3A] font-medium">Precision Instruments</td>
<td className="py-3 px-space-md text-[#49607a] font-metric-tabular">PI-50</td>
<td className="py-3 px-space-md text-[#172B3A]">M. Verma</td>
<td className="py-3 px-space-md text-[#49607a] font-metric-tabular">05 Sep 2026</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#ECF4FF] border border-[#C6DFFE] text-[#008B8B] font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[13px] animate-spin">progress_activity</span> IN PROGRESS
</span>
</td>
<td className="py-3 px-space-md text-right">
<button className="px-2.5 py-1 text-[#FFFFFF] bg-[#008B8B] hover:bg-[#007373] rounded font-label-sm text-label-sm font-medium transition-colors shadow-sm" type="button">
Continue
</button>
</td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-[#F4F7F9]/70 transition-colors">
<td className="py-3 px-space-md font-metric-tabular font-semibold text-[#123B5D]">TR-0087</td>
<td className="py-3 px-space-md text-[#172B3A] font-medium">XYZ Scales</td>
<td className="py-3 px-space-md text-[#49607a] font-metric-tabular">PS-100</td>
<td className="py-3 px-space-md text-[#172B3A]">A. Kumar</td>
<td className="py-3 px-space-md text-[#49607a] font-metric-tabular">04 Sep 2026</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[13px]">check</span> APPROVED
</span>
</td>
<td className="py-3 px-space-md text-right">
<button className="px-2.5 py-1 text-[#123B5D] bg-[#F4F7F9] border border-[#D7E0E7] hover:border-[#123B5D] rounded font-label-sm text-label-sm font-medium transition-colors" type="button">
View
</button>
</td>
</tr></tbody>
</table>
</div>
<div className="p-space-sm border-t border-[#D7E0E7] bg-[#F4F7F9] flex items-center justify-between font-label-sm text-label-sm text-[#49607a]">
<span className="">Showing 5 of 1,248 total verifications</span>
<div className="flex items-center gap-2 font-metric-tabular">
<span className="">OIML R 76 Compliance Criteria Active</span>
</div>
</div>
</div>
{/*  Right Column: Quick Actions & Recent Activity (30% - 4/12 cols)  */}
<div className="xl:col-span-4 flex flex-col gap-space-lg">
{/*  Panel 1: Quick Actions  */}
<div className="bg-[#FFFFFF] border border-[#D7E0E7] rounded-lg p-space-md shadow-sm">
<h2 className="font-headline-sm text-headline-sm text-[#123B5D] pb-space-xs border-b border-[#D7E0E7] mb-space-sm">Quick Actions</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-space-xs">
{/*  Action 1  */}
<a className="flex items-center justify-between p-2.5 rounded border border-[#D7E0E7] hover:border-[#123B5D] hover:bg-[#F4F7F9] transition-all group" href="#">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-[#123B5D]">add_circle</span>
<span className="font-label-md text-label-md font-medium text-[#172B3A]">New Test</span>
</div>
<span className="material-symbols-outlined text-[16px] text-[#49607a] group-hover:translate-x-0.5 transition-transform">chevron_right</span>
</a>
{/*  Action 2  */}
<a className="flex items-center justify-between p-2.5 rounded border border-[#D7E0E7] hover:border-[#123B5D] hover:bg-[#F4F7F9] transition-all group" href="#">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-[#123B5D]">scale</span>
<span className="font-label-md text-label-md font-medium text-[#172B3A]">Add Instrument</span>
</div>
<span className="material-symbols-outlined text-[16px] text-[#49607a] group-hover:translate-x-0.5 transition-transform">chevron_right</span>
</a>
{/*  Action 3  */}
<a className="flex items-center justify-between p-2.5 rounded border border-[#D7E0E7] hover:border-[#123B5D] hover:bg-[#F4F7F9] transition-all group" href="#">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-[#123B5D]">post_add</span>
<span className="font-label-md text-label-md font-medium text-[#172B3A]">Generate Report</span>
</div>
<span className="material-symbols-outlined text-[16px] text-[#49607a] group-hover:translate-x-0.5 transition-transform">chevron_right</span>
</a>
{/*  Action 4  */}
<a className="flex items-center justify-between p-2.5 rounded border border-[#D7E0E7] hover:border-[#123B5D] hover:bg-[#F4F7F9] transition-all group" href="#">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-[#123B5D]">saved_search</span>
<span className="font-label-md text-label-md font-medium text-[#172B3A]">Search Repository</span>
</div>
<span className="material-symbols-outlined text-[16px] text-[#49607a] group-hover:translate-x-0.5 transition-transform">chevron_right</span>
</a>
</div>
</div>
{/*  Panel 2: Recent Activity Timeline  */}
<div className="bg-[#FFFFFF] border border-[#D7E0E7] rounded-lg p-space-md shadow-sm flex flex-col">
<div className="flex items-center justify-between pb-space-xs border-b border-[#D7E0E7] mb-space-md">
<h2 className="font-headline-sm text-headline-sm text-[#123B5D]">Recent Activity</h2>
<span className="material-symbols-outlined text-[#49607a] text-[18px]">history</span>
</div>
<div className="relative pl-6 space-y-space-md before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#D7E0E7]">
{/*  Event 1  */}
<div className="relative">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-[#15803D] ring-4 ring-[#FFFFFF]"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-[#172B3A]">TR-0091 approved</span>
<div className="font-body-sm text-body-sm text-[#49607a] flex items-center gap-1 mt-0.5">
<span className="">Reviewer: R. Singh</span>
<span className="">•</span>
<span className="font-metric-tabular">8 minutes ago</span>
</div>
</div>
</div>
{/*  Event 2  */}
<div className="relative">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-[#008B8B] ring-4 ring-[#FFFFFF]"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-[#172B3A]">Repeatability test completed</span>
<div className="font-body-sm text-body-sm text-[#49607a] flex items-center gap-1 mt-0.5">
<span className="">Instrument: WT-100</span>
<span className="">•</span>
<span className="font-metric-tabular">24 minutes ago</span>
</div>
</div>
</div>
{/*  Event 3  */}
<div className="relative">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-[#123B5D] ring-4 ring-[#FFFFFF]"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-[#172B3A]">New instrument registered</span>
<div className="font-body-sm text-body-sm text-[#49607a] flex items-center gap-1 mt-0.5">
<span className="">ABC WeighTech WT-200</span>
<span className="">•</span>
<span className="font-metric-tabular">1 hour ago</span>
</div>
</div>
</div>
{/*  Event 4  */}
<div className="relative">
<span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-[#B42318] ring-4 ring-[#FFFFFF]"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-[#B42318]">TR-0089 marked failed</span>
<div className="font-body-sm text-body-sm text-[#49607a] flex items-center gap-1 mt-0.5">
<span className="">Instrument: WT-200</span>
<span className="">•</span>
<span className="font-metric-tabular">2 hours ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div></main></div>
    </div>
  );
}
