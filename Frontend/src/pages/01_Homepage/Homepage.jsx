import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', organization: '', email: '', role: 'Laboratory Manager' });

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRequestModalOpen(false);
      setFormData({ name: '', organization: '', email: '', role: 'Laboratory Manager' });
    }, 2000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7F9] text-[#172B3A] font-sans antialiased selection:bg-[#008B8B]/20">
      
      {/* ========================================================================= */}
      {/* 1. GLOBAL HEADER / NAVIGATION (Sticky)                                    */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-[#D7E0E7] shadow-[0_1px_4px_rgba(11,38,61,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Left */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-9 h-9 rounded bg-[#123B5D] flex items-center justify-center text-white shadow-sm group-hover:bg-[#0B263D] transition-colors">
              <span className="material-symbols-outlined text-[20px]">scale</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-wider text-[#0B263D]">VERISCALE</span>
              <span className="text-[9px] font-semibold tracking-widest text-[#5B6B7A] uppercase leading-none">METROLOGY PLATFORM</span>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#5B6B7A]">
            <button onClick={() => scrollToSection('platform')} className="hover:text-[#123B5D] transition-colors focus:outline-none">
              Platform
            </button>
            <button onClick={() => scrollToSection('the-approach')} className="hover:text-[#123B5D] transition-colors focus:outline-none">
              Workflow
            </button>
            <button onClick={() => scrollToSection('capabilities')} className="hover:text-[#123B5D] transition-colors focus:outline-none">
              Capabilities
            </button>
            <button onClick={() => scrollToSection('compliance-engine')} className="hover:text-[#123B5D] transition-colors focus:outline-none">
              Compliance
            </button>
            <button onClick={() => scrollToSection('reporting')} className="hover:text-[#123B5D] transition-colors focus:outline-none">
              Reporting
            </button>
            <button onClick={() => scrollToSection('principles')} className="hover:text-[#123B5D] transition-colors focus:outline-none">
              About
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              to="/auth"
              className="px-4 py-2 text-sm font-semibold text-[#123B5D] border border-[#D7E0E7] bg-white hover:border-[#123B5D] hover:bg-[#F4F7F9] rounded transition-all focus:outline-none focus:ring-2 focus:ring-[#123B5D]/20"
            >
              Sign In
            </Link>
            <button
              onClick={() => setRequestModalOpen(true)}
              className="px-4 py-2 text-sm font-semibold text-white bg-[#123B5D] hover:bg-[#0B263D] rounded transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#123B5D]/20"
            >
              Request Access
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="w-full pt-12 pb-16 lg:py-20 bg-white border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content (approx 52%) */}
            <div className="w-full lg:w-[52%] flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#008B8B]/10 text-[#008B8B] text-xs font-bold uppercase tracking-wider mb-5 border border-[#008B8B]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008B8B]"></span>
                INDUSTRIAL METROLOGY SOFTWARE
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold text-[#0B263D] tracking-tight leading-[1.12] mb-6">
                Precision in<br />
                Every Measurement.
              </h1>

              <p className="text-base sm:text-lg text-[#5B6B7A] leading-relaxed mb-8 max-w-xl">
                Digitize NAWI testing, automate calculations and compliance evaluation, and generate standardized laboratory reports from one controlled platform.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  to="/auth"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#123B5D] hover:bg-[#0B263D] rounded shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#123B5D]/30"
                >
                  Sign In &rarr;
                </Link>
                <button
                  onClick={() => scrollToSection('the-approach')}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#172B3A] bg-[#F4F7F9] hover:bg-[#EAEFF4] border border-[#D7E0E7] rounded transition-all focus:outline-none"
                >
                  Explore Platform
                </button>
              </div>

              <div className="pt-6 border-t border-[#D7E0E7] w-full max-w-lg">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#172B3A]">
                  Built for professional metrology laboratories
                </p>
                <p className="text-xs text-[#5B6B7A] mt-1 font-mono">
                  OIML R 76 &bull; Test Management &bull; Compliance &bull; Reporting
                </p>
              </div>
            </div>

            {/* Right Column (approx 48%) — Sophisticated Technical Visual */}
            <div className="w-full lg:w-[48%]">
              <div className="bg-[#0B263D] border border-[#194870] rounded-lg p-6 sm:p-7 shadow-lg relative overflow-hidden">
                
                {/* Engineering Grid Backdrop */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #739ec4 1px, transparent 1px), linear-gradient(to bottom, #739ec4 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Top Telemetry Header */}
                <div className="relative z-10 flex items-center justify-between pb-4 mb-5 border-b border-[#194870]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#008B8B] animate-pulse"></span>
                    <span className="text-xs font-mono tracking-wider text-slate-300">SYSTEM INDICATOR // LIVE</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#008B8B] bg-[#008B8B]/15 px-2 py-0.5 rounded border border-[#008B8B]/30">
                    <span>[-&gt;0&lt;-]</span>
                    <span className="font-semibold">READY</span>
                  </div>
                </div>

                {/* Weighing Platform Silhouette & Digital Metric Display */}
                <div className="relative z-10 bg-[#123B5D]/60 border border-[#194870] rounded p-5 mb-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Indication Value (Gross)</span>
                      <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight tabular-nums mt-0.5">
                        100.000 <span className="text-lg font-medium text-[#008B8B]">kg</span>
                      </div>
                    </div>
                    <div className="text-right text-[11px] font-mono text-slate-300 leading-relaxed">
                      <div>Max: 150.000 kg</div>
                      <div>Min: 1.000 kg</div>
                      <div>e = 5 g | d = 1 g</div>
                    </div>
                  </div>

                  {/* Technical Platform Silhouette Representation */}
                  <div className="w-full pt-3 pb-2 border-t border-[#194870]/60 flex flex-col items-center">
                    <div className="w-48 h-3 bg-slate-300 rounded-sm shadow-inner relative">
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-[#008B8B]"></div>
                    </div>
                    <div className="flex justify-between w-40 mt-1">
                      <div className="w-2 h-3 bg-slate-400"></div>
                      <div className="w-3 h-3 bg-[#008B8B]/60 rounded-xs"></div>
                      <div className="w-2 h-3 bg-slate-400"></div>
                    </div>
                    <div className="w-56 h-1 bg-[#194870] mt-1"></div>
                    <div className="text-[10px] font-mono text-slate-400 mt-2">NAWI RECEPTOR REFERENCE PLANE &bull; CLASS III</div>
                  </div>
                </div>

                {/* Connected Technical Data Elements Pipeline */}
                <div className="relative z-10 pt-2">
                  <div className="text-[11px] uppercase font-mono tracking-wider text-slate-400 mb-2.5">
                    METROLOGY EVALUATION PIPELINE
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    
                    <div className="bg-[#123B5D] border border-[#194870] rounded p-2 text-left">
                      <div className="text-[10px] font-mono text-[#008B8B]">01 // TEST</div>
                      <div className="text-xs font-semibold text-white mt-0.5">Load Data</div>
                    </div>

                    <div className="bg-[#123B5D] border border-[#194870] rounded p-2 text-left">
                      <div className="text-[10px] font-mono text-[#008B8B]">02 // CALC</div>
                      <div className="text-xs font-semibold text-white mt-0.5">Indication Error</div>
                    </div>

                    <div className="bg-[#123B5D] border border-[#194870] rounded p-2 text-left">
                      <div className="text-[10px] font-mono text-[#008B8B]">03 // CHECK</div>
                      <div className="text-xs font-semibold text-white mt-0.5">mpe Limits</div>
                    </div>

                    <div className="bg-[#123B5D] border border-[#008B8B] rounded p-2 text-left bg-[#008B8B]/10">
                      <div className="text-[10px] font-mono text-[#008B8B]">04 // REPORT</div>
                      <div className="text-xs font-semibold text-white mt-0.5">Verified Record</div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRUST STRIP                                                            */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F4F7F9] border-b border-[#D7E0E7] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm font-semibold text-[#172B3A] tracking-tight text-center md:text-left">
              One controlled workflow for modern metrology laboratories
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full md:w-auto">
              
              <div className="flex items-center gap-2 text-xs font-medium text-[#5B6B7A]">
                <span className="material-symbols-outlined text-[18px] text-[#123B5D]">inventory_2</span>
                <span>Instrument Records</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-[#5B6B7A]">
                <span className="material-symbols-outlined text-[18px] text-[#123B5D]">assignment</span>
                <span>Test Procedures</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-[#5B6B7A]">
                <span className="material-symbols-outlined text-[18px] text-[#123B5D]">verified</span>
                <span>Compliance Evaluation</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-[#5B6B7A]">
                <span className="material-symbols-outlined text-[18px] text-[#123B5D]">description</span>
                <span>Standardized Reports</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION — THE PROBLEM                                                  */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-[#EAEFF4]/60 border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B263D] tracking-tight">
              Replace fragmented testing workflows.
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7A] mt-2 leading-relaxed">
              Traditional laboratory reporting often requires observations, spreadsheets, manual calculations, requirement checks, document formatting, and file storage across separate tools.
            </p>
          </div>

          {/* Horizontal BEFORE Workflow Diagram */}
          <div className="bg-white border border-[#D7E0E7] rounded p-6 shadow-sm">
            <div className="text-xs font-mono uppercase tracking-wider text-[#5B6B7A] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              LEGACY FRAGMENTED PROCESS // BEFORE
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 text-center">
              
              {[
                { title: 'Physical Test', icon: 'speed' },
                { title: 'Manual Data Entry', icon: 'edit_note' },
                { title: 'Spreadsheet', icon: 'table_chart' },
                { title: 'Manual Calculation', icon: 'calculate' },
                { title: 'Manual OIML Check', icon: 'rule' },
                { title: 'Word Template', icon: 'article' },
                { title: 'Photos / Docs', icon: 'attachment' },
                { title: 'Final Report', icon: 'picture_as_pdf' },
                { title: 'Folder Storage', icon: 'folder' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center bg-[#F4F7F9] border border-[#D7E0E7] rounded p-3 relative">
                  <span className="material-symbols-outlined text-[20px] text-slate-500 mb-1.5">{item.icon}</span>
                  <span className="text-[11px] font-medium text-[#5B6B7A] leading-snug">{item.title}</span>
                  {idx < 8 && (
                    <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs z-10">&rarr;</span>
                  )}
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION — THE VERISCALE APPROACH                                       */}
      {/* ========================================================================= */}
      <section id="the-approach" className="w-full py-16 lg:py-20 bg-white border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B263D] tracking-tight">
              One controlled workflow. From test to report.
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7A] mt-2">
              End-to-end centralization eliminates transcription errors and manual document assembly.
            </p>
          </div>

          {/* Prominent Process Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            
            {[
              {
                step: 'INPUT',
                desc: 'Instrument + Conditions + Observations',
                icon: 'input',
                tag: 'Step 01'
              },
              {
                step: 'CALCULATE',
                desc: 'Automatic calculations',
                icon: 'calculate',
                tag: 'Step 02'
              },
              {
                step: 'CHECK',
                desc: 'Applicable OIML R 76 rules',
                icon: 'rule',
                tag: 'Step 03'
              },
              {
                step: 'REVIEW',
                desc: 'Reviewer verification',
                icon: 'fact_check',
                tag: 'Step 04'
              },
              {
                step: 'REPORT',
                desc: 'Standardized PDF / Word',
                icon: 'description',
                tag: 'Step 05'
              },
              {
                step: 'STORE',
                desc: 'Repository + history',
                icon: 'inventory',
                tag: 'Step 06'
              }
            ].map((node, i) => (
              <div 
                key={i} 
                className="bg-[#F4F7F9] border border-[#D7E0E7] hover:border-[#123B5D] rounded p-5 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#008B8B] uppercase">{node.tag}</span>
                    <span className="material-symbols-outlined text-[20px] text-[#123B5D] group-hover:text-[#008B8B] transition-colors">{node.icon}</span>
                  </div>
                  <div className="font-bold text-sm text-[#0B263D] tracking-wide mb-1.5">{node.step}</div>
                  <div className="text-xs text-[#5B6B7A] leading-relaxed">{node.desc}</div>
                </div>
                <div className="mt-4 pt-2 border-t border-[#D7E0E7] flex items-center text-[10px] font-mono text-slate-400">
                  <span>CONTROLLED GATEWAY</span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION — HOW VERISCALE WORKS                                          */}
      {/* ========================================================================= */}
      <section id="workflow" className="w-full py-16 lg:py-20 bg-[#F4F7F9] border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B263D] tracking-tight">
              From physical test to controlled digital record.
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7A] mt-2">
              Follow a disciplined, step-by-step procedural workflow designed around legal metrology requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              {
                num: '01',
                title: 'Register Instrument',
                desc: 'Capture manufacturer, model, serial number, capacity and technical parameters.',
                icon: 'app_registration'
              },
              {
                num: '02',
                title: 'Configure Test',
                desc: 'Select the applicable testing procedures for the instrument.',
                icon: 'settings_input_component'
              },
              {
                num: '03',
                title: 'Record Observations',
                desc: 'Enter laboratory measurements and test observations through structured forms.',
                icon: 'table_view'
              },
              {
                num: '04',
                title: 'Calculate & Evaluate',
                desc: 'Automatically calculate derived values and evaluate configured requirements.',
                icon: 'functions'
              },
              {
                num: '05',
                title: 'Review & Approve',
                desc: 'Authorized reviewers verify the completed test record.',
                icon: 'verified_user'
              },
              {
                num: '06',
                title: 'Generate & Store',
                desc: 'Create the standardized report and retain the record in the repository.',
                icon: 'source'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-[#D7E0E7] rounded p-6 shadow-sm hover:border-[#123B5D] transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold font-mono text-[#123B5D]">{step.num}</span>
                  <div className="w-8 h-8 rounded bg-[#F4F7F9] border border-[#D7E0E7] flex items-center justify-center text-[#123B5D]">
                    <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-base text-[#0B263D] mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">{step.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION — CORE CAPABILITIES                                            */}
      {/* ========================================================================= */}
      <section id="capabilities" className="w-full py-16 lg:py-20 bg-white border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B263D] tracking-tight">
              Everything needed for digital metrology workflows.
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7A] mt-2">
              Functional engineering modules built strictly for precision laboratory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-6">
              <div className="w-10 h-10 rounded bg-[#123B5D] text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">scale</span>
              </div>
              <h3 className="text-base font-semibold text-[#0B263D] mb-2">Instrument Management</h3>
              <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                Centralized records for manufacturers, models, serial numbers, capacity and technical specifications.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-6">
              <div className="w-10 h-10 rounded bg-[#123B5D] text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">assignment_turned_in</span>
              </div>
              <h3 className="text-base font-semibold text-[#0B263D] mb-2">Structured Testing</h3>
              <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                Digital workflows for applicable OIML R 76 test procedures and observations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-6">
              <div className="w-10 h-10 rounded bg-[#123B5D] text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">calculate</span>
              </div>
              <h3 className="text-base font-semibold text-[#0B263D] mb-2">Automatic Calculations</h3>
              <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                Reduce manual calculations by deriving applicable values directly from recorded observations.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-6">
              <div className="w-10 h-10 rounded bg-[#123B5D] text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">verified</span>
              </div>
              <h3 className="text-base font-semibold text-[#0B263D] mb-2">Compliance Evaluation</h3>
              <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                Apply configured rules and acceptance criteria to produce transparent test decisions.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-6">
              <div className="w-10 h-10 rounded bg-[#123B5D] text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">attach_file</span>
              </div>
              <h3 className="text-base font-semibold text-[#0B263D] mb-2">Evidence Management</h3>
              <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                Associate photographs, calibration certificates, specifications and supporting documents with test records.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-6">
              <div className="w-10 h-10 rounded bg-[#123B5D] text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">folder_special</span>
              </div>
              <h3 className="text-base font-semibold text-[#0B263D] mb-2">Reporting & Repository</h3>
              <p className="text-xs sm:text-sm text-[#5B6B7A] leading-relaxed">
                Generate standardized reports and retain searchable historical records.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION — TESTING WORKSPACE                                            */}
      {/* ========================================================================= */}
      <section id="platform" className="w-full py-16 lg:py-20 bg-[#F4F7F9] border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Mock UI Observation Table */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white border border-[#D7E0E7] rounded-lg shadow-sm p-6">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D7E0E7]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#008B8B]"></span>
                    <span className="font-bold text-xs font-mono uppercase tracking-wider text-[#0B263D]">
                      REPEATABILITY TEST (CLAUSE A.4.5)
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#008B8B] bg-[#008B8B]/10 px-2 py-0.5 rounded font-semibold border border-[#008B8B]/20">
                    5 / 5 observations complete
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="bg-[#F4F7F9] border-b border-[#D7E0E7] text-[#5B6B7A]">
                        <th className="py-2 px-3 font-semibold">Trial</th>
                        <th className="py-2 px-3 font-semibold">Test Load</th>
                        <th className="py-2 px-3 font-semibold">Observed Indication</th>
                        <th className="py-2 px-3 font-semibold text-right">Calculated</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D7E0E7]">
                      {[
                        { trial: '01', load: '20.000 kg', obs: '20.010 kg', calc: 'Auto (+0.010 kg)' },
                        { trial: '02', load: '20.000 kg', obs: '20.000 kg', calc: 'Auto (0.000 kg)' },
                        { trial: '03', load: '20.000 kg', obs: '20.010 kg', calc: 'Auto (+0.010 kg)' },
                        { trial: '04', load: '20.000 kg', obs: '20.000 kg', calc: 'Auto (0.000 kg)' },
                        { trial: '05', load: '20.000 kg', obs: '20.010 kg', calc: 'Auto (+0.010 kg)' }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-[#008B8B]/5 transition-colors">
                          <td className="py-2.5 px-3 font-bold text-[#123B5D]">{row.trial}</td>
                          <td className="py-2.5 px-3 text-[#172B3A] tabular-nums">{row.load}</td>
                          <td className="py-2.5 px-3 font-semibold text-[#0B263D] tabular-nums bg-teal-50/50">{row.obs}</td>
                          <td className="py-2.5 px-3 text-right font-mono text-[#008B8B] font-semibold">{row.calc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D7E0E7] flex items-center justify-between text-[11px] text-[#5B6B7A] font-mono">
                  <span>Standard Deviation (s): 0.0055 kg</span>
                  <span className="text-[#15803D] font-bold">Max Difference: 0.010 kg &le; 1.0e</span>
                </div>

              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B263D] tracking-tight mb-4">
                Structured testing, not spreadsheets.
              </h2>
              
              <p className="text-base text-[#5B6B7A] leading-relaxed mb-6">
                Technicians enter observations through purpose-built forms rather than maintaining disconnected spreadsheets.
              </p>

              <div className="space-y-4 w-full">
                
                <div className="flex items-start gap-3 p-3.5 rounded bg-white border border-[#D7E0E7]">
                  <span className="material-symbols-outlined text-[#008B8B] text-[20px] mt-0.5">input</span>
                  <div>
                    <div className="text-sm font-semibold text-[#0B263D]">Clear input vs calculated values</div>
                    <div className="text-xs text-[#5B6B7A] mt-0.5">Input cells are strictly separated from system-derived calibration metrics.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded bg-white border border-[#D7E0E7]">
                  <span className="material-symbols-outlined text-[#008B8B] text-[20px] mt-0.5">check_circle</span>
                  <div>
                    <div className="text-sm font-semibold text-[#0B263D]">Automatic validation</div>
                    <div className="text-xs text-[#5B6B7A] mt-0.5">Live boundary checks alert technicians of data format or physical range anomalies.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded bg-white border border-[#D7E0E7]">
                  <span className="material-symbols-outlined text-[#008B8B] text-[20px] mt-0.5">timeline</span>
                  <div>
                    <div className="text-sm font-semibold text-[#0B263D]">Traceable test completion</div>
                    <div className="text-xs text-[#5B6B7A] mt-0.5">Every cycle tracks trial completion timestamps and technician attribution.</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SECTION — COMPLIANCE ENGINE (Dark Navy Full-Width)                    */}
      {/* ========================================================================= */}
      <section id="compliance-engine" className="w-full py-16 lg:py-20 bg-[#0B263D] text-white border-b border-[#194870]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Compliance evaluation with transparent logic.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              VeriScale connects test observations and calculated results with the applicable configured OIML R 76 requirements.
            </p>
          </div>

          {/* Central Technical Pipeline */}
          <div className="max-w-5xl mx-auto bg-[#123B5D]/80 border border-[#194870] rounded-lg p-6 lg:p-8 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center text-center">
              
              <div className="bg-[#0B263D] border border-[#194870] rounded p-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">01. Observation</span>
                <div className="text-lg font-bold font-mono text-white mt-1">10.012 kg</div>
                <div className="text-[10px] font-mono text-slate-400 mt-1">Raw reading</div>
              </div>

              <div className="flex justify-center text-[#008B8B] font-mono text-xl">&rarr;</div>

              <div className="bg-[#0B263D] border border-[#194870] rounded p-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">02. Calculation</span>
                <div className="text-lg font-bold font-mono text-[#008B8B] mt-1">+0.012 kg</div>
                <div className="text-[10px] font-mono text-slate-400 mt-1">Indication delta</div>
              </div>

              <div className="flex justify-center text-[#008B8B] font-mono text-xl">&rarr;</div>

              <div className="bg-[#0B263D] border border-[#194870] rounded p-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">03. Applicable Rule</span>
                <div className="text-xs font-semibold text-slate-200 mt-1">Configured OIML R 76 criterion</div>
                <div className="text-[10px] font-mono text-slate-400 mt-1">Tolerance boundary</div>
              </div>

            </div>

            <div className="mt-6 pt-6 border-t border-[#194870] grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div className="bg-[#0B263D] border border-[#194870] rounded p-3.5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-300">COMPARISON EVALUATION</span>
                <span className="text-xs font-mono font-semibold text-slate-100">Within configured criterion</span>
              </div>

              <div className="bg-[#15803D]/20 border border-[#15803D]/40 rounded p-3.5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-200">VERIFICATION DECISION</span>
                <span className="text-sm font-bold font-mono text-[#4ade80] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  PASS
                </span>
              </div>
            </div>
          </div>

          <p className="text-center text-xs font-mono text-slate-400 mt-8 max-w-2xl mx-auto">
            * Applicable calculations and acceptance criteria depend on instrument characteristics, test conditions, and configured rules.
          </p>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SECTION — ROLE-BASED WORKFLOW                                         */}
      {/* ========================================================================= */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B263D] tracking-tight">
              Every role sees the work they need.
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7A] mt-2">
              Segregation of duties ensures auditability and procedural compliance across teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Technician */}
            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded bg-[#123B5D] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">engineering</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0B263D]">TECHNICIAN</h3>
                    <span className="text-[11px] font-mono text-[#5B6B7A]">Field & Bench Testing</span>
                  </div>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#5B6B7A] mb-3">
                  Core Responsibilities
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#172B3A]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B5D]"></span>
                    Create tests
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B5D]"></span>
                    Enter observations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B5D]"></span>
                    Upload evidence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123B5D]"></span>
                    Save drafts
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#D7E0E7] text-[11px] font-mono text-[#5B6B7A]">
                Role Level: Operational
              </div>
            </div>

            {/* Reviewer */}
            <div className="bg-[#F4F7F9] border border-[#008B8B]/40 rounded p-6 flex flex-col justify-between relative shadow-sm">
              <div className="absolute -top-2.5 right-4 bg-[#008B8B] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                AUTHORITY
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded bg-[#008B8B] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0B263D]">REVIEWER</h3>
                    <span className="text-[11px] font-mono text-[#5B6B7A]">Quality & Sign-Off</span>
                  </div>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#5B6B7A] mb-3">
                  Core Responsibilities
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#172B3A]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008B8B]"></span>
                    Review calculations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008B8B]"></span>
                    Verify evidence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008B8B]"></span>
                    Approve or reject reports
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008B8B]"></span>
                    Request changes
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#D7E0E7] text-[11px] font-mono text-[#008B8B] font-semibold">
                Role Level: Verification Officer
              </div>
            </div>

            {/* Administrator */}
            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded bg-[#0B263D] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0B263D]">ADMINISTRATOR</h3>
                    <span className="text-[11px] font-mono text-[#5B6B7A]">Governance & Rules</span>
                  </div>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#5B6B7A] mb-3">
                  Core Responsibilities
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#172B3A]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B263D]"></span>
                    Manage users
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B263D]"></span>
                    Configure rules
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B263D]"></span>
                    Manage templates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B263D]"></span>
                    Control system settings
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#D7E0E7] text-[11px] font-mono text-[#5B6B7A]">
                Role Level: System Governance
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. SECTION — REPORTING                                                   */}
      {/* ========================================================================= */}
      <section id="reporting" className="w-full py-16 lg:py-20 bg-[#F4F7F9] border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Realistic A4 Report Preview */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md bg-white border border-[#D7E0E7] rounded shadow-md p-6 font-sans text-xs">
                
                {/* Report Header */}
                <div className="flex items-start justify-between pb-4 border-b border-[#D7E0E7]">
                  <div>
                    <div className="font-bold text-sm text-[#0B263D] tracking-wider">VERISCALE</div>
                    <div className="text-[10px] font-mono text-[#5B6B7A]">METROLOGY TEST REPORT</div>
                  </div>
                  <div className="text-right font-mono text-[11px]">
                    <div className="font-bold text-[#123B5D]">Report ID: TR-0091</div>
                    <div className="text-[#5B6B7A]">Date: 06 Sep 2026</div>
                  </div>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-3 py-3 border-b border-[#D7E0E7] text-[11px]">
                  <div>
                    <span className="text-[#5B6B7A]">Instrument:</span>
                    <span className="font-semibold text-[#172B3A] ml-1">WT-100</span>
                  </div>
                  <div>
                    <span className="text-[#5B6B7A]">Serial:</span>
                    <span className="font-mono text-[#172B3A] ml-1">WT100-2026-001</span>
                  </div>
                  <div>
                    <span className="text-[#5B6B7A]">Compliance:</span>
                    <span className="font-bold text-[#15803D] ml-1">&check; PASS</span>
                  </div>
                  <div>
                    <span className="text-[#5B6B7A]">Review:</span>
                    <span className="font-bold text-[#008B8B] ml-1">APPROVED</span>
                  </div>
                </div>

                {/* Report Structure Breakdown */}
                <div className="pt-3 space-y-2 text-[11px]">
                  <div className="flex justify-between py-1 border-b border-dashed border-[#D7E0E7]">
                    <span className="font-medium text-[#172B3A]">1. Instrument Specifications</span>
                    <span className="text-[#15803D] font-mono">&check; Validated</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dashed border-[#D7E0E7]">
                    <span className="font-medium text-[#172B3A]">2. Laboratory Conditions</span>
                    <span className="text-[#15803D] font-mono">21.4 &deg;C / 48% RH</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dashed border-[#D7E0E7]">
                    <span className="font-medium text-[#172B3A]">3. Tests & Observations</span>
                    <span className="text-[#15803D] font-mono">5/5 Executed</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dashed border-[#D7E0E7]">
                    <span className="font-medium text-[#172B3A]">4. Compliance Verdict</span>
                    <span className="text-[#15803D] font-mono">Within mpe limits</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-dashed border-[#D7E0E7]">
                    <span className="font-medium text-[#172B3A]">5. Evidence & Attachments</span>
                    <span className="text-[#5B6B7A] font-mono">4 Documents</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-[#172B3A]">6. Authorized Review</span>
                    <span className="text-[#008B8B] font-mono font-semibold">R. Singh, Officer</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B263D] tracking-tight mb-4">
                Turn completed testing into a standardized report.
              </h2>
              
              <p className="text-base text-[#5B6B7A] leading-relaxed mb-6">
                Instrument information, laboratory conditions, observations, calculations, compliance results, evidence and approval information flow into the final report.
              </p>

              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded bg-white border border-[#D7E0E7] text-xs font-mono font-semibold text-[#123B5D]">
                  PDF
                </span>
                <span className="px-3.5 py-1.5 rounded bg-white border border-[#D7E0E7] text-xs font-mono font-semibold text-[#123B5D]">
                  WORD
                </span>
                <span className="px-3.5 py-1.5 rounded bg-white border border-[#D7E0E7] text-xs font-mono font-semibold text-[#123B5D]">
                  PRINT
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. SECTION — REPORT REPOSITORY                                           */}
      {/* ========================================================================= */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B263D] tracking-tight">
              Keep every report within reach.
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7A] mt-2">
              Searchable history across instruments and reports.
            </p>
          </div>

          {/* Compact Repository Preview */}
          <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded-lg p-6 max-w-4xl shadow-sm">
            
            {/* Search Mock */}
            <div className="flex items-center gap-2 bg-white border border-[#D7E0E7] rounded px-3 py-2 mb-4">
              <span className="material-symbols-outlined text-[18px] text-[#5B6B7A]">search</span>
              <input
                type="text"
                readOnly
                placeholder="Search report ID, model, serial number..."
                className="w-full text-xs font-mono text-[#172B3A] bg-transparent focus:outline-none cursor-default"
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white border border-[#D7E0E7] rounded">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="bg-[#F4F7F9] border-b border-[#D7E0E7] text-[#5B6B7A]">
                    <th className="py-2.5 px-4 font-semibold">Report ID</th>
                    <th className="py-2.5 px-4 font-semibold">Instrument</th>
                    <th className="py-2.5 px-4 font-semibold">Date</th>
                    <th className="py-2.5 px-4 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D7E0E7]">
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#123B5D]">TR-0091</td>
                    <td className="py-3 px-4">WT-100</td>
                    <td className="py-3 px-4 text-[#5B6B7A]">06 Sep 2026</td>
                    <td className="py-3 px-4 text-right font-semibold text-[#15803D]">&check; Approved</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#123B5D]">TR-0090</td>
                    <td className="py-3 px-4">PS-500</td>
                    <td className="py-3 px-4 text-[#5B6B7A]">06 Sep 2026</td>
                    <td className="py-3 px-4 text-right font-semibold text-[#B45309]">Pending Review</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#123B5D]">TR-0089</td>
                    <td className="py-3 px-4">WT-200</td>
                    <td className="py-3 px-4 text-[#5B6B7A]">05 Sep 2026</td>
                    <td className="py-3 px-4 text-right font-semibold text-[#B42318]">&times; Failed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-[#5B6B7A]">
                Searchable history across instruments and reports.
              </span>
              <button
                onClick={() => scrollToSection('capabilities')}
                className="px-4 py-1.5 text-xs font-semibold text-[#123B5D] bg-white border border-[#D7E0E7] hover:border-[#123B5D] rounded transition-colors"
              >
                Explore Repository
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. SECTION — INSTRUMENT HISTORY                                          */}
      {/* ========================================================================= */}
      <section className="w-full py-16 lg:py-20 bg-[#F4F7F9] border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B263D] tracking-tight">
              See the complete history of every instrument.
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7A] mt-2">
              Track calibration cycles, drift records, and audit chronology for individual scales.
            </p>
          </div>

          <div className="bg-white border border-[#D7E0E7] rounded-lg p-6 max-w-xl shadow-sm">
            
            {/* Instrument Header */}
            <div className="pb-4 mb-6 border-b border-[#D7E0E7]">
              <div className="text-xs font-mono uppercase text-[#5B6B7A]">Instrument Profile</div>
              <div className="text-lg font-bold text-[#0B263D]">ABC WeighTech &bull; WT-100</div>
              <div className="text-xs font-mono text-[#123B5D]">Serial: WT100-2026-001</div>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#D7E0E7]">
              
              <div className="relative">
                <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#15803D] ring-4 ring-white"></span>
                <div className="text-xs font-mono text-[#5B6B7A]">2026-09-06</div>
                <div className="text-sm font-semibold text-[#0B263D]">TR-0091</div>
                <div className="text-xs font-bold text-[#15803D] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check</span> PASS
                </div>
              </div>

              <div className="relative">
                <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#B42318] ring-4 ring-white"></span>
                <div className="text-xs font-mono text-[#5B6B7A]">2026-08-20</div>
                <div className="text-sm font-semibold text-[#0B263D]">TR-091</div>
                <div className="text-xs font-bold text-[#B42318] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">close</span> FAIL (mpe deviation)
                </div>
              </div>

              <div className="relative">
                <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#15803D] ring-4 ring-white"></span>
                <div className="text-xs font-mono text-[#5B6B7A]">2026-04-15</div>
                <div className="text-sm font-semibold text-[#0B263D]">TR-038</div>
                <div className="text-xs font-bold text-[#15803D] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check</span> PASS
                </div>
              </div>

              <div className="relative">
                <span className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#15803D] ring-4 ring-white"></span>
                <div className="text-xs font-mono text-[#5B6B7A]">2026-01-10</div>
                <div className="text-sm font-semibold text-[#0B263D]">TR-001</div>
                <div className="text-xs font-bold text-[#15803D] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check</span> PASS (Initial Verification)
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-[#D7E0E7] text-[11px] font-mono text-[#5B6B7A]">
              Instrument-wise test history
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. SECTION — TRACEABILITY                                                */}
      {/* ========================================================================= */}
      <section className="w-full py-16 lg:py-20 bg-[#0B263D] text-white border-b border-[#194870]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Every action stays traceable.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Track who entered, modified, reviewed and approved controlled records.
            </p>
          </div>

          <div className="bg-[#123B5D]/60 border border-[#194870] rounded-lg p-6 max-w-2xl font-mono text-xs shadow-lg">
            <div className="text-[11px] uppercase tracking-wider text-[#008B8B] mb-4 pb-2 border-b border-[#194870]">
              IMMUTABLE AUDIT LOG EXCERPT
            </div>

            <div className="space-y-3">
              
              <div className="flex items-start justify-between py-1.5 border-b border-[#194870]/60">
                <span className="text-slate-400">13:28</span>
                <span className="font-semibold text-slate-200">R. Singh</span>
                <span className="text-[#008B8B]">Approved TR-0091</span>
              </div>

              <div className="flex items-start justify-between py-1.5 border-b border-[#194870]/60">
                <span className="text-slate-400">13:20</span>
                <span className="font-semibold text-slate-200">R. Singh</span>
                <span className="text-slate-300">Reviewed TEST-012</span>
              </div>

              <div className="flex items-start justify-between py-1.5 border-b border-[#194870]/60">
                <span className="text-slate-400">13:15</span>
                <span className="font-semibold text-slate-200">A. Kumar</span>
                <span className="text-slate-300">Uploaded calibration certificate</span>
              </div>

              <div className="flex items-start justify-between py-1.5">
                <span className="text-slate-400">13:05</span>
                <span className="font-semibold text-slate-200">System</span>
                <span className="text-slate-300">Evaluated R76-2026.1</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15. SECTION — WHY VERISCALE                                               */}
      {/* ========================================================================= */}
      <section className="w-full py-16 lg:py-20 bg-white border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B263D] tracking-tight">
              Why laboratories transition to VeriScale.
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7A] mt-2">
              Controlled digital execution eliminates the operational risks inherent in unmanaged spreadsheets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-5">
              <div className="text-xs font-mono uppercase text-[#B45309] font-bold mb-2">MANUAL WORKFLOW</div>
              <div className="text-base font-bold text-[#172B3A] mb-1">Spreadsheets</div>
              <div className="text-xs text-[#5B6B7A]">Fragile formulas, accidental cell overwrites, lack of audit versioning.</div>
            </div>

            <div className="bg-[#F4F7F9] border border-[#008B8B]/40 rounded p-5 bg-teal-50/20">
              <div className="text-xs font-mono uppercase text-[#008B8B] font-bold mb-2">VERISCALE</div>
              <div className="text-base font-bold text-[#0B263D] mb-1">Structured Forms</div>
              <div className="text-xs text-[#5B6B7A]">Purpose-built laboratory data inputs with range and format validation.</div>
            </div>

            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-5">
              <div className="text-xs font-mono uppercase text-[#B45309] font-bold mb-2">MANUAL WORKFLOW</div>
              <div className="text-base font-bold text-[#172B3A] mb-1">Manual Calculations</div>
              <div className="text-xs text-[#5B6B7A]">High error risk in turning points, delta indication, and mpe lookup tables.</div>
            </div>

            <div className="bg-[#F4F7F9] border border-[#008B8B]/40 rounded p-5 bg-teal-50/20">
              <div className="text-xs font-mono uppercase text-[#008B8B] font-bold mb-2">VERISCALE</div>
              <div className="text-base font-bold text-[#0B263D] mb-1">Auto Calculations</div>
              <div className="text-xs text-[#5B6B7A]">Deterministic mathematical derivations computed instantly from raw test points.</div>
            </div>

            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-5">
              <div className="text-xs font-mono uppercase text-[#B45309] font-bold mb-2">MANUAL WORKFLOW</div>
              <div className="text-base font-bold text-[#172B3A] mb-1">Repeated Data Entry</div>
              <div className="text-xs text-[#5B6B7A]">Re-typing serials, scale capacities, and customer details across documents.</div>
            </div>

            <div className="bg-[#F4F7F9] border border-[#008B8B]/40 rounded p-5 bg-teal-50/20">
              <div className="text-xs font-mono uppercase text-[#008B8B] font-bold mb-2">VERISCALE</div>
              <div className="text-base font-bold text-[#0B263D] mb-1">Auto-Populated Records</div>
              <div className="text-xs text-[#5B6B7A]">Single-source-of-truth metadata automatically streams into reports.</div>
            </div>

            <div className="bg-[#F4F7F9] border border-[#D7E0E7] rounded p-5">
              <div className="text-xs font-mono uppercase text-[#B45309] font-bold mb-2">MANUAL WORKFLOW</div>
              <div className="text-base font-bold text-[#172B3A] mb-1">Scattered Files</div>
              <div className="text-xs text-[#5B6B7A]">Reports, photos, certificates stored haphazardly across network drives.</div>
            </div>

            <div className="bg-[#F4F7F9] border border-[#008B8B]/40 rounded p-5 bg-teal-50/20">
              <div className="text-xs font-mono uppercase text-[#008B8B] font-bold mb-2">VERISCALE</div>
              <div className="text-base font-bold text-[#0B263D] mb-1">Centralized Repository</div>
              <div className="text-xs text-[#5B6B7A]">Searchable, audit-proof document vault with permanent traceability.</div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 16. SECTION — KEY PRINCIPLES                                              */}
      {/* ========================================================================= */}
      <section id="principles" className="w-full py-16 lg:py-20 bg-[#F4F7F9] border-b border-[#D7E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B263D] tracking-tight">
              Designed for controlled measurement workflows.
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7A] mt-2">
              Four institutional pillars govern VeriScale's architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white border border-[#D7E0E7] rounded p-6 shadow-sm">
              <span className="material-symbols-outlined text-[24px] text-[#123B5D] mb-3">tune</span>
              <h3 className="font-bold text-base text-[#0B263D] mb-1.5">PRECISION</h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Clear technical data entry and calculation visibility.
              </p>
            </div>

            <div className="bg-white border border-[#D7E0E7] rounded p-6 shadow-sm">
              <span className="material-symbols-outlined text-[24px] text-[#123B5D] mb-3">schema</span>
              <h3 className="font-bold text-base text-[#0B263D] mb-1.5">CONSISTENCY</h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Standardized workflows and reporting.
              </p>
            </div>

            <div className="bg-white border border-[#D7E0E7] rounded p-6 shadow-sm">
              <span className="material-symbols-outlined text-[24px] text-[#123B5D] mb-3">history_edu</span>
              <h3 className="font-bold text-base text-[#0B263D] mb-1.5">TRACEABILITY</h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Controlled records and audit history.
              </p>
            </div>

            <div className="bg-white border border-[#D7E0E7] rounded p-6 shadow-sm">
              <span className="material-symbols-outlined text-[24px] text-[#123B5D] mb-3">extension</span>
              <h3 className="font-bold text-base text-[#0B263D] mb-1.5">EXTENSIBILITY</h3>
              <p className="text-xs text-[#5B6B7A] leading-relaxed">
                Versioned rules and reusable templates for future changes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 17. CTA SECTION (Dark Navy)                                               */}
      {/* ========================================================================= */}
      <section className="w-full py-16 lg:py-20 bg-[#0B263D] text-white border-b border-[#194870]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
            Bring your laboratory workflow into one controlled platform.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Manage instruments, conduct structured tests, evaluate compliance, generate reports, and retain searchable records with VeriScale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/auth"
              className="px-6 py-3 text-sm font-semibold text-white bg-[#008B8B] hover:bg-[#007575] rounded shadow-md transition-all focus:outline-none"
            >
              Sign In &rarr;
            </Link>
            <button
              onClick={() => setRequestModalOpen(true)}
              className="px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-[#123B5D] hover:bg-[#194870] border border-[#194870] rounded transition-all focus:outline-none"
            >
              Request Access
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 18. FOOTER (Dark Navy)                                                    */}
      {/* ========================================================================= */}
      <footer className="w-full bg-[#071826] text-slate-400 py-12 lg:py-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            
            {/* Brand Col */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded bg-[#123B5D] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-[16px]">scale</span>
                </div>
                <span className="font-bold text-sm tracking-wider text-white">VERISCALE</span>
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#008B8B] uppercase mb-3">
                METROLOGY PLATFORM
              </p>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                Industrial metrology workflow software for non-automatic weighing instrument testing and legal verification.
              </p>
            </div>

            {/* Col 1 */}
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Platform</div>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('platform')} className="hover:text-white transition-colors">Platform Overview</button></li>
                <li><button onClick={() => scrollToSection('the-approach')} className="hover:text-white transition-colors">Workflow</button></li>
                <li><button onClick={() => scrollToSection('capabilities')} className="hover:text-white transition-colors">Capabilities</button></li>
                <li><button onClick={() => scrollToSection('reporting')} className="hover:text-white transition-colors">Reporting</button></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Resources</div>
              <ul className="space-y-2">
                <li><span className="text-slate-400 hover:text-white cursor-pointer">Documentation</span></li>
                <li><span className="text-slate-400 hover:text-white cursor-pointer">Technical Overview</span></li>
                <li><span className="text-slate-400 hover:text-white cursor-pointer">Support</span></li>
                <li><Link to="/auth" className="hover:text-white text-[#008B8B] font-semibold">Laboratory Sign In</Link></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <div className="font-semibold text-white uppercase tracking-wider mb-3">Company &amp; Legal</div>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('principles')} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => setRequestModalOpen(true)} className="hover:text-white transition-colors">Request Access</button></li>
                <li><span className="text-slate-400 hover:text-white cursor-pointer">Privacy Policy</span></li>
                <li><span className="text-slate-400 hover:text-white cursor-pointer">Terms of Service</span></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-[#194870]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <div>
              &copy; 2026 VeriScale. All rights reserved.
            </div>
            <div className="font-mono">
              Built for professional metrology workflows.
            </div>
          </div>

        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 19. REQUEST ACCESS INTERACTIVE MODAL                                      */}
      {/* ========================================================================= */}
      {requestModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B263D]/70 backdrop-blur-xs">
          <div className="bg-white border border-[#D7E0E7] rounded-lg shadow-2xl max-w-md w-full p-6 relative">
            
            <button
              onClick={() => setRequestModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 focus:outline-none"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-[#008B8B] text-[20px]">verified</span>
              <h3 className="text-base font-bold text-[#0B263D]">Request Laboratory Access</h3>
            </div>
            <p className="text-xs text-[#5B6B7A] mb-5">
              Submit your organization credentials to schedule technical onboarding for VeriScale.
            </p>

            {submitted ? (
              <div className="bg-[#15803D]/10 border border-[#15803D]/30 rounded p-4 text-center">
                <span className="material-symbols-outlined text-[#15803D] text-[32px] mb-1">check_circle</span>
                <div className="text-sm font-bold text-[#15803D]">Access Request Logged</div>
                <div className="text-xs text-[#5B6B7A] mt-1">
                  A verification link and onboarding documentation have been dispatched.
                </div>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">Officer Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. H. Vance"
                    className="w-full text-xs px-3 py-2 border border-[#D7E0E7] rounded bg-[#F4F7F9] text-[#172B3A] focus:outline-none focus:border-[#123B5D] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">Laboratory / Institution</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. National Metrology Institute"
                    className="w-full text-xs px-3 py-2 border border-[#D7E0E7] rounded bg-[#F4F7F9] text-[#172B3A] focus:outline-none focus:border-[#123B5D] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">Official Institutional Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="officer@nmi-metrology.org"
                    className="w-full text-xs px-3 py-2 border border-[#D7E0E7] rounded bg-[#F4F7F9] text-[#172B3A] focus:outline-none focus:border-[#123B5D] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172B3A] mb-1">Primary Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-[#D7E0E7] rounded bg-[#F4F7F9] text-[#172B3A] focus:outline-none focus:border-[#123B5D] focus:bg-white"
                  >
                    <option value="Laboratory Manager">Laboratory Manager</option>
                    <option value="Verification Officer">Verification Officer</option>
                    <option value="Quality Manager">Quality / Compliance Manager</option>
                    <option value="Calibration Technician">Calibration Technician</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setRequestModalOpen(false)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-[#5B6B7A] hover:bg-[#F4F7F9] rounded transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 text-xs font-semibold text-white bg-[#123B5D] hover:bg-[#0B263D] rounded shadow-sm transition-all"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
