import React, { useMemo, useState } from 'react';
import { Search, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { SEMESTER_SUMMARIES, TRANSCRIPT_COURSES } from '../data/transcriptData';
import { TRANSCRIPT_GRADING_SCALE } from '../data/analysisData';

interface TranscriptSectionProps {
  onNavigateToCourse: (courseCode: string) => void;
}

export const TranscriptSection: React.FC<TranscriptSectionProps> = ({ onNavigateToCourse }) => {
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredCourses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return TRANSCRIPT_COURSES.filter((c) => {
      if (selectedSemester !== 'all' && c.semester !== selectedSemester) return false;
      if (selectedGrade !== 'all' && c.grade !== selectedGrade) return false;
      if (selectedType !== 'all' && c.componentType !== selectedType) return false;
      if (
        q &&
        !c.exactTitle.toLowerCase().includes(q) &&
        !c.courseCode.toLowerCase().includes(q) &&
        !(c.syllabusCode && c.syllabusCode.toLowerCase().includes(q))
      ) {
        return false;
      }
      return true;
    });
  }, [selectedSemester, searchQuery, selectedGrade, selectedType]);

  const filteredCreditSum = filteredCourses.reduce((acc, c) => acc + c.credits, 0);

  return (
    <section id="transcript" className="space-y-6">
      <div className="bg-white border border-slate-200 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-900">
              Section B · Official Record Verbatim Reconciliation
            </p>
            <h2 className="font-serif text-2xl font-semibold text-slate-900 mt-1">
              Academic Transcript (Semesters I–VI)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Verbatim transcription of all 60 course entries from Pages 1–6 of the official University of Mumbai /
              Thakur College of Science &amp; Commerce consolidated marksheets (issued 16 October 2025). Unusual
              notations (<span className="font-mono">37@3</span>, <span className="font-mono">77@3</span>,{' '}
              <span className="font-mono">UGDS3PAS0420</span>, <span className="font-mono">102</span>) are preserved
              exactly as printed.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200 px-3 py-2 shrink-0">
            Credits Displayed: <strong className="text-slate-900">{filteredCreditSum}</strong> / 120 Institutional Credits
          </div>
        </div>

        {/* Semester Reconciliation Summary Table */}
        <div className="overflow-x-auto mb-6 border border-slate-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono uppercase">
                <th className="py-2.5 px-3">Semester</th>
                <th className="py-2.5 px-3">Exam Session</th>
                <th className="py-2.5 px-3 text-right">Entries</th>
                <th className="py-2.5 px-3 text-right">Credits Earned</th>
                <th className="py-2.5 px-3 text-right">Marks Total</th>
                <th className="py-2.5 px-3 text-right">Σ (C×G)</th>
                <th className="py-2.5 px-3 text-right">SGPI</th>
                <th className="py-2.5 px-3 text-center">Grade</th>
                <th className="py-2.5 px-3">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {SEMESTER_SUMMARIES.map((s) => (
                <tr key={s.semester} className="hover:bg-slate-50/70">
                  <td className="py-2 px-3 font-medium text-slate-900">
                    Sem {s.roman} <span className="text-slate-500 font-normal">({s.academicYearLevel})</span>
                  </td>
                  <td className="py-2 px-3 text-slate-700">{s.examSession}</td>
                  <td className="py-2 px-3 text-right font-mono tabular-nums">{s.courseCount}</td>
                  <td className="py-2 px-3 text-right font-mono tabular-nums font-medium">{s.creditsEarned}</td>
                  <td className="py-2 px-3 text-right font-mono tabular-nums">{s.marksObtainedTotal}</td>
                  <td className="py-2 px-3 text-right font-mono tabular-nums">{s.cgTotal}</td>
                  <td className="py-2 px-3 text-right font-mono tabular-nums font-semibold text-blue-900">
                    {s.sgpi.toFixed(2)}
                  </td>
                  <td className="py-2 px-3 text-center font-mono font-semibold text-slate-900">{s.grade}</td>
                  <td className="py-2 px-3 text-emerald-800 font-medium">{s.resultStatus}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-slate-50 border-t border-slate-200 font-semibold text-slate-900">
                <td className="py-2.5 px-3" colSpan={2}>
                  Degree Reconciliation Total (Pages 1–6)
                </td>
                <td className="py-2.5 px-3 text-right font-mono tabular-nums">60</td>
                <td className="py-2.5 px-3 text-right font-mono tabular-nums">120</td>
                <td className="py-2.5 px-3 text-right font-mono tabular-nums">3,414</td>
                <td className="py-2.5 px-3 text-right font-mono tabular-nums">1,062</td>
                <td className="py-2.5 px-3 text-right font-mono tabular-nums text-blue-900">CGPA 8.85</td>
                <td className="py-2.5 px-3 text-center font-mono">A</td>
                <td className="py-2.5 px-3 text-emerald-800">Successful</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedSemester('all')}
              className={`px-3 py-1.5 text-xs font-medium border cursor-pointer ${
                selectedSemester === 'all'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              All Semesters (60)
            </button>
            {SEMESTER_SUMMARIES.map((s) => (
              <button
                key={s.semester}
                type="button"
                onClick={() => setSelectedSemester(s.semester)}
                className={`px-3 py-1.5 text-xs font-medium border cursor-pointer ${
                  selectedSemester === s.semester
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                Sem {s.roman}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search code or title..."
                className="pl-8 pr-3 py-1.5 text-xs border border-slate-300 bg-white text-slate-900 w-52 focus:outline-none focus:border-blue-800"
              />
            </div>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              aria-label="Filter by component type"
              className="px-2.5 py-1.5 text-xs border border-slate-300 bg-white text-slate-800"
            >
              <option value="all">All Types</option>
              <option value="Theory">Theory (30)</option>
              <option value="Practical">Practical (29)</option>
              <option value="Project">Project (1)</option>
            </select>

            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              aria-label="Filter by grade"
              className="px-2.5 py-1.5 text-xs border border-slate-300 bg-white text-slate-800"
            >
              <option value="all">All Grades</option>
              {['O', 'A+', 'A', 'B+', 'B', 'D'].map((g) => (
                <option key={g} value={g}>
                  Grade {g}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Course Entries Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-mono uppercase">
                <th className="py-2.5 px-2">Sem</th>
                <th className="py-2.5 px-2">Transcript Code</th>
                <th className="py-2.5 px-2">Exact Transcript Course Title</th>
                <th className="py-2.5 px-2">Type</th>
                <th className="py-2.5 px-2">Transcript Schedule</th>
                <th className="py-2.5 px-2 text-right">Marks</th>
                <th className="py-2.5 px-2 text-right">Max (Transcript)</th>
                <th className="py-2.5 px-2 text-center">Grade</th>
                <th className="py-2.5 px-2 text-right">GP</th>
                <th className="py-2.5 px-2 text-right">Inst. Cr</th>
                <th className="py-2.5 px-2 text-right">C×G</th>
                <th className="py-2.5 px-2 text-right">Syllabus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCourses.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 align-top">
                  <td className="py-2.5 px-2 font-mono text-slate-500">S{c.semester}</td>
                  <td className="py-2.5 px-2 font-mono text-slate-900 whitespace-nowrap">
                    {c.courseCode}
                    {c.verificationNote && (
                      <span
                        title={c.verificationNote}
                        className="inline-block ml-1 text-amber-700 align-middle"
                      >
                        <AlertTriangle className="w-3 h-3 inline" />
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-2 text-slate-900">
                    <div className="font-medium">{c.exactTitle}</div>
                    {c.verificationNote && (
                      <div className="text-[11px] text-amber-800 mt-0.5">{c.verificationNote}</div>
                    )}
                  </td>
                  <td className="py-2.5 px-2 text-slate-700">{c.componentType}</td>
                  <td className="py-2.5 px-2 font-mono text-slate-600 whitespace-nowrap">
                    {c.transcriptDurationPerSession} × {c.transcriptSessionsPerWeek}/wk
                  </td>
                  <td className="py-2.5 px-2 text-right font-mono tabular-nums font-medium text-slate-900">
                    {c.marksObtained}
                  </td>
                  <td className="py-2.5 px-2 text-right text-slate-500">{c.maxMarksInTranscript}</td>
                  <td className="py-2.5 px-2 text-center font-mono font-semibold text-blue-900">
                    {c.grade}
                  </td>
                  <td className="py-2.5 px-2 text-right font-mono tabular-nums">{c.gradePoint}</td>
                  <td className="py-2.5 px-2 text-right font-mono tabular-nums font-medium">{c.credits}</td>
                  <td className="py-2.5 px-2 text-right font-mono tabular-nums">{c.cg}</td>
                  <td className="py-2.5 px-2 text-right">
                    <button
                      type="button"
                      onClick={() => onNavigateToCourse(c.courseCode)}
                      className="inline-flex items-center gap-0.5 text-blue-900 hover:underline font-medium cursor-pointer"
                    >
                      Inspect <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grading Scale Legend from Transcript */}
        <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs">
          <div className="lg:col-span-7">
            <h3 className="font-mono uppercase tracking-wider text-slate-500 mb-2">
              Official Transcript Grading Scale (Printed on Pages 1–6)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TRANSCRIPT_GRADING_SCALE.map((g) => (
                <div key={g.grade} className="border border-slate-200 bg-slate-50 p-2">
                  <div className="font-mono font-semibold text-slate-900">
                    {g.grade} · GP {g.gradePoint}
                  </div>
                  <div className="text-slate-600">{g.marksRange}</div>
                  <div className="text-slate-500">{g.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 bg-amber-50/50 border border-amber-200 p-4 space-y-2 text-slate-700">
            <div className="font-medium text-amber-950">
              Transcript Documentation Notes
            </div>
            <p>
              1. Maximum marks per course are not printed on the official transcript (recorded as &ldquo;Not stated&rdquo;
              above). Syllabus documents specify 100 marks (60 Ext + 40 Int) for Theory and 50 marks for Practical, but
              Semester VI <span className="font-mono">UGDS6PRIP422</span> records <span className="font-mono">102</span> marks.
            </p>
            <p>
              2. Verbatim <span className="font-mono">@3</span> suffixes appear on{' '}
              <span className="font-mono">UGDS1CSEP320</span> (37@3),{' '}
              <span className="font-mono">UGDS5BDA0422</span> (77@3), and{' '}
              <span className="font-mono">UGDS6IOT0522</span> (77@3) and are not defined in the footer legend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
