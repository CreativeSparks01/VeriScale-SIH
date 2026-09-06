import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Batch 1: Core Portal & Auth
import Homepage from './pages/01_Homepage/Homepage';
import Authentication from './pages/02_Authentication/Authentication';
import Dashboard from './pages/03_Dashboard/Dashboard';
import InstrumentManagement from './pages/04_InstrumentManagement/InstrumentManagement';

// Batch 2: Instrument Management & Test Initiation
import InstrumentDetails from './pages/05_InstrumentDetails/InstrumentDetails';
import AddInstrument from './pages/06_AddInstrument/AddInstrument';
import NewTestSelectInstrument from './pages/07_NewTestSelectInstrument/NewTestSelectInstrument';
import NewTestEnvironmentalConditions from './pages/08_NewTestEnvironmentalConditions/NewTestEnvironmentalConditions';

// Batch 3: Test Suite & Core OIML Testing Modules
import NewTestSelection from './pages/09_NewTestSelection/NewTestSelection';
import TestObservationsWorkspace from './pages/10_TestObservationsWorkspace/TestObservationsWorkspace';
import TestAccuracyIndication from './pages/11_TestAccuracyIndication/TestAccuracyIndication';
import TestEccentricLoading from './pages/12_TestEccentricLoading/TestEccentricLoading';

// Batch 4: Secondary OIML Testing Modules
import TestRepeatability from './pages/13_TestRepeatability/TestRepeatability';
import TestTare from './pages/14_TestTare/TestTare';
import TestZero from './pages/15_TestZero/TestZero';
import TestEnvironmentalInfluence from './pages/16_TestEnvironmentalInfluence/TestEnvironmentalInfluence';

// Batch 5: Compliance & Certification
import ComplianceAssessment from './pages/17_ComplianceAssessment/ComplianceAssessment';
import ReviewApproval from './pages/18_ReviewApproval/ReviewApproval';
import EvidenceAttachments from './pages/19_EvidenceAttachments/EvidenceAttachments';
import ReportPreview from './pages/20_ReportPreview/ReportPreview';

// Batch 6 & 7: Archives, Templates, Search, Audit & Administration
import ReportRepository from './pages/21_ReportRepository/ReportRepository';
import ReportTemplates from './pages/22_ReportTemplates/ReportTemplates';
import InstrumentTestHistory from './pages/23_InstrumentTestHistory/InstrumentTestHistory';
import GlobalSearch from './pages/24_GlobalSearch/GlobalSearch';
import AuditTrail from './pages/25_AuditTrail/AuditTrail';
import OIMLRules from './pages/26_OIMLRules/OIMLRules';
import AdminSettings from './pages/27_AdminSettings/AdminSettings';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Core & Authentication */}
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Instrument Management */}
        <Route path="/instruments" element={<InstrumentManagement />} />
        <Route path="/instruments/details" element={<InstrumentDetails />} />
        <Route path="/instruments/add" element={<AddInstrument />} />
        <Route path="/instruments/history" element={<InstrumentTestHistory />} />

        {/* Verification Test Pipeline */}
        <Route path="/tests/select-instrument" element={<NewTestSelectInstrument />} />
        <Route path="/tests/environmental-conditions" element={<NewTestEnvironmentalConditions />} />
        <Route path="/tests/test-selection" element={<NewTestSelection />} />
        <Route path="/tests/workspace" element={<TestObservationsWorkspace />} />

        {/* OIML Individual Test Modules */}
        <Route path="/tests/accuracy" element={<TestAccuracyIndication />} />
        <Route path="/tests/eccentricity" element={<TestEccentricLoading />} />
        <Route path="/tests/repeatability" element={<TestRepeatability />} />
        <Route path="/tests/tare" element={<TestTare />} />
        <Route path="/tests/zero" element={<TestZero />} />
        <Route path="/tests/environmental-influence" element={<TestEnvironmentalInfluence />} />

        {/* Compliance Assessment & Officer Sign-Off */}
        <Route path="/compliance" element={<ComplianceAssessment />} />
        <Route path="/compliance/approval" element={<ReviewApproval />} />
        <Route path="/compliance/evidence" element={<EvidenceAttachments />} />

        {/* Reports & Document Management */}
        <Route path="/reports/generate" element={<ReportPreview />} />
        <Route path="/reports/repository" element={<ReportRepository />} />
        <Route path="/reports/templates" element={<ReportTemplates />} />

        {/* Search, Audit & Administration */}
        <Route path="/search" element={<GlobalSearch />} />
        <Route path="/admin/audit-trail" element={<AuditTrail />} />
        <Route path="/admin/rules" element={<OIMLRules />} />
        <Route path="/admin/settings" element={<AdminSettings />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
