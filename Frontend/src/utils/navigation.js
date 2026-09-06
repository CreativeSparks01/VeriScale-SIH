import { useNavigate } from 'react-router-dom';

export function useMetrologyRouter() {
  const navigate = useNavigate();

  const handleGlobalClick = (e) => {
    const target = e.target.closest('a, button, tr, [data-path]');
    if (!target) return;

    // Ignore direct submit buttons if inside form handling
    const text = (target.textContent || '').trim().toLowerCase();
    const dataPath = (target.getAttribute('data-path') || '').toLowerCase();
    const ariaLabel = (target.getAttribute('aria-label') || '').toLowerCase();
    const title = (target.getAttribute('title') || '').toLowerCase();
    const combined = `${text} ${dataPath} ${ariaLabel} ${title}`;

    if (combined.includes('dashboard') || dataPath === 'dashboard') {
      e.preventDefault();
      navigate('/dashboard');
    } else if (combined.includes('add instrument') || combined.includes('register instrument') || combined.includes('new instrument')) {
      e.preventDefault();
      navigate('/instruments/add');
    } else if (combined.includes('details') || combined.includes('view specifications') || (target.tagName.toLowerCase() === 'tr' && target.closest('tbody'))) {
      e.preventDefault();
      navigate('/instruments/details');
    } else if (combined.includes('history') || dataPath === 'test-history') {
      e.preventDefault();
      navigate('/instruments/history');
    } else if (combined.includes('instrument') || dataPath === 'instruments') {
      e.preventDefault();
      navigate('/instruments');
    } else if (combined.includes('environmental conditions') || combined.includes('ambient conditions')) {
      e.preventDefault();
      navigate('/tests/environmental-conditions');
    } else if (combined.includes('test selection') || combined.includes('suite selection')) {
      e.preventDefault();
      navigate('/tests/test-selection');
    } else if (combined.includes('accuracy') || combined.includes('error of indication')) {
      e.preventDefault();
      navigate('/tests/accuracy');
    } else if (combined.includes('eccentric') || combined.includes('corner load')) {
      e.preventDefault();
      navigate('/tests/eccentricity');
    } else if (combined.includes('repeatability')) {
      e.preventDefault();
      navigate('/tests/repeatability');
    } else if (combined.includes('tare')) {
      e.preventDefault();
      navigate('/tests/tare');
    } else if (combined.includes('zero')) {
      e.preventDefault();
      navigate('/tests/zero');
    } else if (combined.includes('environmental influence')) {
      e.preventDefault();
      navigate('/tests/environmental-influence');
    } else if (combined.includes('new test') || combined.includes('start verification') || combined.includes('execute test') || combined.includes('run verification') || combined.includes('select instrument')) {
      e.preventDefault();
      navigate('/tests/select-instrument');
    } else if (dataPath === 'tests' || combined.includes('test workspace') || combined.includes('workspace')) {
      e.preventDefault();
      navigate('/tests/workspace');
    } else if (combined.includes('approval') || combined.includes('sign-off') || combined.includes('review & approval')) {
      e.preventDefault();
      navigate('/compliance/approval');
    } else if (combined.includes('evidence') || combined.includes('attachments')) {
      e.preventDefault();
      navigate('/compliance/evidence');
    } else if (combined.includes('compliance') || dataPath === 'compliance') {
      e.preventDefault();
      navigate('/compliance');
    } else if (combined.includes('template') || combined.includes('report templates')) {
      e.preventDefault();
      navigate('/reports/templates');
    } else if (combined.includes('generate report') || combined.includes('report preview') || combined.includes('issue certificate')) {
      e.preventDefault();
      navigate('/reports/generate');
    } else if (dataPath === 'repository' || dataPath === 'reports' || combined.includes('repository') || combined.includes('report repository') || combined.includes('reports archive')) {
      e.preventDefault();
      navigate('/reports/repository');
    } else if (combined.includes('search') || dataPath === 'search') {
      e.preventDefault();
      navigate('/search');
    } else if (dataPath === 'audit-trail' || combined.includes('audit trail') || combined.includes('audit log')) {
      e.preventDefault();
      navigate('/admin/audit-trail');
    } else if (combined.includes('rule') || combined.includes('oiml') || combined.includes('standards')) {
      e.preventDefault();
      navigate('/admin/rules');
    } else if (dataPath === 'settings' || dataPath === 'users' || combined.includes('settings') || combined.includes('admin settings') || combined.includes('users')) {
      e.preventDefault();
      navigate('/admin/settings');
    } else if (combined.includes('logout') || combined.includes('sign out') || combined.includes('exit session')) {
      e.preventDefault();
      navigate('/auth');
    } else if (combined.includes('public gateway') || combined.includes('home') || combined.includes('veriscale legal')) {
      e.preventDefault();
      navigate('/');
    }
  };

  return { handleGlobalClick, navigate };
}
