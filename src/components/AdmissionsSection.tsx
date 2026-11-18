import React, { useState } from 'react';
import { ArrowUpRight, Plus, RotateCcw, Download, Trash2 } from 'lucide-react';
import { ADMISSION_REQUIREMENT_AREAS, INITIAL_COMPARISON_ROWS } from '../data/analysisData';
import { AdmissionComparisonRow, EvaluationStatus } from '../types/academic';

interface AdmissionsSectionProps {
  onNavigateToCourse: (courseCode: string) => void;
}

const EVALUATION_OPTIONS: EvaluationStatus[] = [
  'Documented relevant coursework',
  'Partial content match',
  'Insufficient evidence',
  'No identified coursework',
  'Requires university evaluation',
];

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  onNavigateToCourse,
}) => {
  const [rows, setRows] = useState<AdmissionComparisonRow[]>(INITIAL_COMPARISON_ROWS);
  const [targetProgramName, setTargetProgramName] = useState<string>(
    'Target German M.Sc. Programme (e.g., Data Science / Computer Science / AI)'
  );

  const handleRowChange = (
    id: string,
    field: keyof AdmissionComparisonRow,
    value: string
  ) => {
    setRows((prev) =>
      prev.map((row) => {
        if (row.id !== id) return row;
        if (field === 'relevantCourseCodes') {
          return {
            ...row,
            relevantCourseCodes: value
              .split(',')
              .map((s) => s.trim())
              .filter(Boolean),
          };
        }
        return { ...row, [field]: value };
      })
    );
  };

  const addBlankRow = () => {
    setRows((prev) => [
      ...prev,
      {
        id: `cmp-${Date.now()}`,
        universityRequirement: 'Enter German university module / subject requirement...',
        relevantCourseCodes: [],
        syllabusEvidence: 'Enter verified syllabus units / topics...',
        institutionalCredits: 'e.g., 4 Institutional Credits',
        workloadEvidence: 'Contact hours / gaps...',
        evaluation: 'Requires university evaluation',
      },
    ]);
  };

  const removeRow = (id: string) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const resetRows = () => {
    setRows(INITIAL_COMPARISON_ROWS);
    setTargetProgramName('Target German M.Sc. Programme (e.g., Data Science / Computer Science / AI)');
  };

  const exportCsv = () => {
    const headers = [
      'Target Programme',
      'University Requirement',
      'Relevant Undergraduate Course Codes',
      'Syllabus Evidence',
      'Institutional Credits (Mumbai/TCSC)',
      'Workload Evidence',
      'Evaluation Status',
    ];
    const escapeCsv = (val: string) => `"${val.replace(/"/g, '""')}"`;
    const csvLines = [
      headers.map(escapeCsv).join(','),
      ...rows.map((r) =>
        [
          targetProgramName,
          r.universityRequirement,
          r.relevantCourseCodes.join('; '),
          r.syllabusEvidence,
          r.institutionalCredits,
          r.workloadEvidence,
          r.evaluation,
        ]
          .map(escapeCsv)
          .join(',')
      ),
    ];
    const blob = new Blob([csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'german-masters-curriculum-comparison.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="admissions" className="space-y-6">
      {/* Subject Readiness Matrix */}
      <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-blue-900">
            Section H · Subject-Matter Mapping &amp; Self-Assessment Template
          </p>
          <h2 className="font-serif text-2xl font-semibold text-slate-900 mt-1">
            German Master’s Admission Relevance
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-4xl">
            Structured alignment across core disciplinary areas typically reviewed by German public university
            admissions boards for M.Sc. programmes in Data Science, Artificial Intelligence, Data Engineering,
            Computer Science, and Applied Statistics. Classifications use strictly neutral documentation statuses and
            do not predict or assert admission eligibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADMISSION_REQUIREMENT_AREAS.map((item) => (
            <div key={item.area} className="border border-slate-200 p-4 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-blue-900">
                  {item.status}
                </div>
                <h3 className="text-sm font-semibold text-slate-900">{item.area}</h3>
                <div className="text-xs font-mono text-slate-600">{item.credits}</div>
                <p className="text-xs text-slate-700 leading-relaxed pt-1">{item.summary}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-amber-900">
                <strong>Evaluator Note:</strong> {item.gapNote}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive University Comparison Framework */}
      <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-900">
              Interactive Evaluation Worksheet (Customizable for Specific Universities)
            </p>
            <h3 className="font-serif text-xl font-semibold text-slate-900 mt-1">
              University Admission Requirement Comparison Framework
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-3xl">
              Edit cells directly, add custom requirement rows for a specific German university’s{' '}
              <em>Zugangsvoraussetzungen</em> / <em>Fachspezifische Bestimmungen</em>, or export as CSV for
              application portals. Pre-filled example rows reflect verified curriculum evidence.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              type="button"
              onClick={addBlankRow}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add Requirement Row
            </button>
            <button
              type="button"
              onClick={resetRows}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Template
            </button>
            <button
              type="button"
              onClick={exportCsv}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-blue-900 text-white hover:bg-blue-800 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Export CSV
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs bg-slate-50 border border-slate-200 p-3">
          <label htmlFor="target-prog" className="font-mono uppercase text-slate-500 shrink-0">
            Target Programme Label:
          </label>
          <input
            id="target-prog"
            type="text"
            value={targetProgramName}
            onChange={(e) => setTargetProgramName(e.target.value)}
            className="w-full px-2.5 py-1 border border-slate-300 bg-white text-slate-900 font-medium"
          />
        </div>

        <div className="overflow-x-auto border border-slate-200">
          <table className="w-full text-left text-xs border-collapse min-w-[920px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono uppercase">
                <th className="py-2.5 px-3 w-48">University Requirement</th>
                <th className="py-2.5 px-3 w-44">Relevant Undergraduate Course(s)</th>
                <th className="py-2.5 px-3">Syllabus Evidence</th>
                <th className="py-2.5 px-3 w-36">Institutional Credits</th>
                <th className="py-2.5 px-3 w-48">Workload Evidence</th>
                <th className="py-2.5 px-3 w-48">Evaluation</th>
                <th className="py-2.5 px-2 w-10 print:hidden"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 align-top">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/50">
                  <td className="p-2">
                    <textarea
                      rows={3}
                      value={row.universityRequirement}
                      onChange={(e) => handleRowChange(row.id, 'universityRequirement', e.target.value)}
                      className="w-full p-1.5 border border-slate-200 bg-white text-slate-900 font-medium resize-y"
                    />
                  </td>
                  <td className="p-2 space-y-1.5">
                    <input
                      type="text"
                      value={row.relevantCourseCodes.join(', ')}
                      onChange={(e) => handleRowChange(row.id, 'relevantCourseCodes', e.target.value)}
                      placeholder="Comma-separated codes"
                      className="w-full p-1.5 border border-slate-200 bg-white font-mono text-[11px] text-slate-900"
                    />
                    <div className="flex flex-wrap gap-1">
                      {row.relevantCourseCodes.map((code) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => onNavigateToCourse(code)}
                          className="inline-flex items-center gap-0.5 font-mono text-[10px] text-blue-900 hover:underline cursor-pointer"
                        >
                          {code} <ArrowUpRight className="w-2.5 h-2.5" />
                        </button>
                      ))}
                    </div>
                  </td>
                  <td className="p-2">
                    <textarea
                      rows={3}
                      value={row.syllabusEvidence}
                      onChange={(e) => handleRowChange(row.id, 'syllabusEvidence', e.target.value)}
                      className="w-full p-1.5 border border-slate-200 bg-white text-slate-700 resize-y"
                    />
                  </td>
                  <td className="p-2">
                    <textarea
                      rows={3}
                      value={row.institutionalCredits}
                      onChange={(e) => handleRowChange(row.id, 'institutionalCredits', e.target.value)}
                      className="w-full p-1.5 border border-slate-200 bg-white font-mono text-slate-900 resize-y"
                    />
                  </td>
                  <td className="p-2">
                    <textarea
                      rows={3}
                      value={row.workloadEvidence}
                      onChange={(e) => handleRowChange(row.id, 'workloadEvidence', e.target.value)}
                      className="w-full p-1.5 border border-slate-200 bg-white text-slate-700 resize-y"
                    />
                  </td>
                  <td className="p-2">
                    <select
                      value={row.evaluation}
                      onChange={(e) => handleRowChange(row.id, 'evaluation', e.target.value)}
                      className="w-full p-1.5 border border-slate-200 bg-white text-slate-900 font-medium"
                    >
                      {EVALUATION_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-2 text-center print:hidden">
                    <button
                      type="button"
                      onClick={() => removeRow(row.id)}
                      title="Remove row"
                      className="p-1 text-slate-400 hover:text-red-700 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
