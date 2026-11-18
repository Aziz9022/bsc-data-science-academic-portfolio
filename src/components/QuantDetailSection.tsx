import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { QUANT_TOPIC_LINKS } from '../data/analysisData';

interface QuantDetailSectionProps {
  onNavigateToCourse: (courseCode: string) => void;
}

export const QuantDetailSection: React.FC<QuantDetailSectionProps> = ({
  onNavigateToCourse,
}) => {
  const [filterDiscipline, setFilterDiscipline] = useState<
    'all' | 'Mathematics' | 'Probability and Statistics'
  >('all');

  const mathTopics = QUANT_TOPIC_LINKS.filter((t) => t.discipline === 'Mathematics');
  const statsTopics = QUANT_TOPIC_LINKS.filter(
    (t) => t.discipline === 'Probability and Statistics'
  );

  const visibleTopics =
    filterDiscipline === 'all'
      ? QUANT_TOPIC_LINKS
      : filterDiscipline === 'Mathematics'
      ? mathTopics
      : statsTopics;

  return (
    <section id="quant" className="space-y-6">
      <div className="bg-white border border-slate-200 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-900">
              Section E · Quantitative Foundations Audit
            </p>
            <h2 className="font-serif text-2xl font-semibold text-slate-900 mt-1">
              Mathematics and Statistics Detail
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Evaluates quantitative eligibility separately between pure/applied{' '}
              <strong>Mathematics</strong> (4 primary institutional credits in Sem I) and{' '}
              <strong>Probability &amp; Statistics</strong> (12 primary institutional credits across
              Semesters II, III, and IV). Every topic is linked directly to documented syllabus units.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 shrink-0">
            {(['all', 'Mathematics', 'Probability and Statistics'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilterDiscipline(tab)}
                className={`px-3 py-1.5 text-xs font-medium border cursor-pointer ${
                  filterDiscipline === tab
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                {tab === 'all'
                  ? `All Quantitative Topics (${QUANT_TOPIC_LINKS.length})`
                  : tab === 'Mathematics'
                  ? `Mathematics (${mathTopics.length})`
                  : `Probability & Statistics (${statsTopics.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Summary Split Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-slate-200 bg-slate-50 p-4 text-xs space-y-1.5">
            <div className="font-mono uppercase tracking-wider text-slate-500">
              Mathematics · 4 Primary Institutional Credits
            </div>
            <p className="text-slate-800 leading-relaxed">
              Covered in Semester I via <strong>Linear Algebra and Basics of Calculus</strong> (
              <span className="font-mono">UGDS1LAC0420</span> / <span className="font-mono">UGDS1LACP420</span>).
              Explicitly includes matrix rank/echelon forms, eigenvalues/eigenvectors, Cayley-Hamilton theorem,
              vector spaces, partial derivatives, Jacobian/Hessian matrices, Beta/Gamma functions, and
              double/triple integrals. No standalone Discrete Mathematics or Real Analysis course is present.
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 p-4 text-xs space-y-1.5">
            <div className="font-mono uppercase tracking-wider text-slate-500">
              Probability &amp; Statistics · 12 Primary Institutional Credits
            </div>
            <p className="text-slate-800 leading-relaxed">
              Three-semester progression: <strong>Probability &amp; Statistics</strong> (Sem II:{' '}
              <span className="font-mono">UGDS3PAS0420</span>),{' '}
              <strong>Sampling &amp; Descriptive Statistics</strong> (Sem III:{' '}
              <span className="font-mono">UGDS3SDS0121</span>), and{' '}
              <strong>Statistical Simulation &amp; Multivariate Analysis</strong> (Sem IV:{' '}
              <span className="font-mono">UGDS4SSM0121</span>), each paired with a 2-credit practical.
            </p>
          </div>
        </div>

        {/* Topic Evidence List */}
        <div className="divide-y divide-slate-200">
          {visibleTopics.map((item) => (
            <div key={item.topic} className="py-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-900">
                    {item.discipline} · {item.subCategory}
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 mt-0.5">{item.topic}</h3>
                </div>
                <span className="text-xs font-mono text-slate-600 shrink-0">
                  Status: <strong className="text-slate-900">{item.documentedStatus}</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {item.courseLinks.map((link) => (
                  <div
                    key={`${item.topic}-${link.transcriptCode}`}
                    className="border border-slate-200 p-3.5 text-xs space-y-1.5 bg-white"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onNavigateToCourse(link.transcriptCode)}
                        className="inline-flex items-center gap-1 font-mono font-semibold text-blue-900 hover:underline cursor-pointer"
                      >
                        {link.transcriptCode} · Sem {link.semester}
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-slate-500">{link.unitReference}</span>
                    </div>
                    <div className="font-medium text-slate-900">{link.courseTitle}</div>
                    <p className="text-slate-600 leading-relaxed">{link.evidenceExcerpt}</p>
                  </div>
                ))}
              </div>

              {item.notes && (
                <p className="text-xs text-amber-900 bg-amber-50/50 border border-amber-200 p-3">
                  <strong>Clarification:</strong> {item.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
