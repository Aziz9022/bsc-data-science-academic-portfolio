import React from 'react';
import { FileText, Printer, Layers } from 'lucide-react';
import { SectionId } from '../types/academic';

interface HeaderProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  fullDossierMode: boolean;
  onToggleFullDossier: () => void;
  onPrint: () => void;
}

export const SECTION_NAV_ITEMS: { id: SectionId; code: string; label: string }[] = [
  { id: 'overview', code: 'A', label: 'Overview' },
  { id: 'transcript', code: 'B', label: 'Transcript' },
  { id: 'catalogue', code: 'C', label: 'Course Catalogue' },
  { id: 'subjects', code: 'D', label: 'Subject Areas' },
  { id: 'quant', code: 'E', label: 'Math & Statistics' },
  { id: 'cs-de', code: 'F', label: 'CS & Data Eng.' },
  { id: 'workload', code: 'G', label: 'Workload & ECTS' },
  { id: 'admissions', code: 'H', label: 'German Master’s Fit' },
  { id: 'sources', code: 'I', label: 'Sources & Audit' },
];

const TOP_BAR_LINKS: { id: SectionId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'transcript', label: 'Transcript' },
  { id: 'catalogue', label: 'Catalogue (60)' },
  { id: 'workload', label: 'Workload & ECTS' },
  { id: 'sources', label: 'Sources & Audit' },
];

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onSelectSection,
  fullDossierMode,
  onToggleFullDossier,
  onPrint,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 print:hidden">
      {/* Strict 3-zone top bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onSelectSection('overview')}
          className="flex items-center gap-3 text-left shrink-0 group cursor-pointer"
        >
          <span className="w-8 h-8 border border-slate-300 bg-slate-900 text-white flex items-center justify-center font-serif font-semibold text-sm tracking-tight">
            DS
          </span>
          <span className="flex flex-col">
            <span className="font-serif font-semibold text-slate-900 text-sm sm:text-base tracking-tight whitespace-nowrap">
              Academic Curriculum Dossier
            </span>
            <span className="text-[11px] text-slate-500 font-mono whitespace-nowrap hidden sm:block">
              B.Sc. (Data Science) · University of Mumbai / TCSC
            </span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary sections">
          {TOP_BAR_LINKS.map((item) => {
            const isActive = !fullDossierMode && activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectSection(item.id)}
                className={`text-sm font-medium whitespace-nowrap shrink-0 pb-1 border-b-2 transition-colors cursor-pointer ${
                  isActive
                    ? 'border-blue-800 text-blue-900'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleFullDossier}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap cursor-pointer ${
              fullDossierMode
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
            title="View all 9 sections sequentially for complete review or printing"
          >
            <Layers className="w-3.5 h-3.5" />
            {fullDossierMode ? 'Exit Full Dossier' : 'All 9 Sections'}
          </button>
          <button
            type="button"
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium bg-blue-900 text-white hover:bg-blue-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / PDF
          </button>
        </div>
      </div>

      {/* Evaluator 9-section index strip */}
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 overflow-x-auto py-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-mono text-slate-500 mr-2 shrink-0">
              <FileText className="w-3 h-3" />
              Sections
            </span>
            {SECTION_NAV_ITEMS.map((sec) => {
              const active = !fullDossierMode && activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => onSelectSection(sec.id)}
                  className={`px-2.5 py-1 text-xs font-medium whitespace-nowrap shrink-0 border transition-colors cursor-pointer ${
                    active
                      ? 'bg-white text-blue-900 border-blue-800 shadow-xs'
                      : 'bg-transparent text-slate-600 border-transparent hover:bg-white hover:border-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span className="font-mono text-slate-400 mr-1">{sec.code}.</span>
                  {sec.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
