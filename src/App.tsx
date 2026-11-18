import { useEffect, useState } from 'react';
import { Header, SECTION_NAV_ITEMS } from './components/Header';
import { OverviewSection } from './components/OverviewSection';
import { TranscriptSection } from './components/TranscriptSection';
import { CatalogueSection } from './components/CatalogueSection';
import { SubjectMappingSection } from './components/SubjectMappingSection';
import { QuantDetailSection } from './components/QuantDetailSection';
import { CsEngineeringSection } from './components/CsEngineeringSection';
import { WorkloadEctsSection } from './components/WorkloadEctsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { SourcesVerificationSection } from './components/SourcesVerificationSection';
import { SectionId } from './types/academic';
import { STUDENT_PROFILE } from './data/profileData';

const VALID_SECTIONS = new Set<SectionId>(SECTION_NAV_ITEMS.map((s) => s.id));

function parseHashToSection(): SectionId {
  if (typeof window === 'undefined') return 'overview';
  const raw = window.location.hash.replace('#', '') as SectionId;
  return VALID_SECTIONS.has(raw) ? raw : 'overview';
}

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>(parseHashToSection);
  const [fullDossierMode, setFullDossierMode] = useState<boolean>(false);
  const [focusedCourseCode, setFocusedCourseCode] = useState<string | null>(null);

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHashToSection();
      setActiveSection(next);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleSelectSection = (section: SectionId) => {
    setFullDossierMode(false);
    setActiveSection(section);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${section}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToCourse = (courseCode: string) => {
    setFocusedCourseCode(courseCode);
    if (!fullDossierMode) {
      setActiveSection('catalogue');
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', '#catalogue');
      }
    } else {
      const el = document.getElementById(`course-card-${courseCode}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handlePrint = () => {
    setFullDossierMode(true);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const showSection = (id: SectionId) => fullDossierMode || activeSection === id;

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans flex flex-col">
      <Header
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        fullDossierMode={fullDossierMode}
        onToggleFullDossier={() => setFullDossierMode((prev) => !prev)}
        onPrint={handlePrint}
      />

      {/* Print-only Cover Header */}
      <div className="hidden print:block border-b-2 border-slate-900 pb-4 mb-6 px-4 pt-2">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-600">
          Academic Curriculum &amp; Evidence Dossier
        </p>
        <h1 className="font-serif text-2xl font-bold text-slate-900 mt-1">
          {STUDENT_PROFILE.degreeTitle} — {STUDENT_PROFILE.applicantName}
        </h1>
        <p className="text-xs text-slate-700 mt-1">
          {STUDENT_PROFILE.institution} ({STUDENT_PROFILE.affiliatingUniversity}) · 120 Institutional Credits (Not ECTS) · Final CGPA {STUDENT_PROFILE.finalCgpa} ({STUDENT_PROFILE.finalGrade})
        </p>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {showSection('overview') && (
          <OverviewSection onNavigateSection={handleSelectSection} />
        )}

        {showSection('transcript') && (
          <TranscriptSection onNavigateToCourse={handleNavigateToCourse} />
        )}

        {showSection('catalogue') && (
          <CatalogueSection
            focusedCourseCode={focusedCourseCode}
            onClearFocusedCourse={() => setFocusedCourseCode(null)}
          />
        )}

        {showSection('subjects') && (
          <SubjectMappingSection onNavigateToCourse={handleNavigateToCourse} />
        )}

        {showSection('quant') && (
          <QuantDetailSection onNavigateToCourse={handleNavigateToCourse} />
        )}

        {showSection('cs-de') && (
          <CsEngineeringSection onNavigateToCourse={handleNavigateToCourse} />
        )}

        {showSection('workload') && <WorkloadEctsSection />}

        {showSection('admissions') && (
          <AdmissionsSection onNavigateToCourse={handleNavigateToCourse} />
        )}

        {showSection('sources') && <SourcesVerificationSection />}
      </main>

      <footer className="border-t border-slate-200 bg-white mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            <strong className="text-slate-800">{STUDENT_PROFILE.degreeTitle}</strong> ·{' '}
            {STUDENT_PROFILE.institution} ({STUDENT_PROFILE.affiliatingUniversity}) · Transcript Issued{' '}
            {STUDENT_PROFILE.transcriptIssueDate}
          </div>
          <div className="font-mono">
            120 Institutional Credits · No Automatic ECTS Conversion · Static Evaluation Portfolio
          </div>
        </div>
      </footer>
    </div>
  );
}
