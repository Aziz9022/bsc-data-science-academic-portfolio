import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, Search, AlertCircle, Link2 } from 'lucide-react';
import { TRANSCRIPT_COURSES } from '../data/transcriptData';
import { SYLLABUS_DETAILS } from '../data/syllabusData';
import { SUBJECT_AREA_MAPPINGS } from '../data/analysisData';

interface CatalogueSectionProps {
  focusedCourseCode?: string | null;
  onClearFocusedCourse?: () => void;
}

export const CatalogueSection: React.FC<CatalogueSectionProps> = ({
  focusedCourseCode,
  onClearFocusedCourse,
}) => {
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>('all');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCodes, setExpandedCodes] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (focusedCourseCode) {
      const targetCourse = TRANSCRIPT_COURSES.find((c) => c.courseCode === focusedCourseCode);
      if (targetCourse) {
        setSelectedSemester('all');
        setSelectedSubjectId('all');
        setSearchQuery('');
        setExpandedCodes((prev) => ({ ...prev, [focusedCourseCode]: true }));
        setTimeout(() => {
          const el = document.getElementById(`course-card-${focusedCourseCode}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 60);
      }
    }
  }, [focusedCourseCode]);

  const subjectMap = useMemo(() => {
    const map: Record<string, string> = {};
    for (const s of SUBJECT_AREA_MAPPINGS) {
      map[s.id] = s.name;
    }
    return map;
  }, []);

  const filteredCourses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return TRANSCRIPT_COURSES.filter((c) => {
      if (selectedSemester !== 'all' && c.semester !== selectedSemester) return false;
      if (selectedSubjectId !== 'all' && c.primarySubjectId !== selectedSubjectId) return false;
      if (q) {
        const syl = c.syllabusCode ? SYLLABUS_DETAILS[c.syllabusCode] : undefined;
        const unitMatch = syl?.units.some((u) => u.titleAndTopics.toLowerCase().includes(q));
        if (
          !c.exactTitle.toLowerCase().includes(q) &&
          !c.courseCode.toLowerCase().includes(q) &&
          !(syl?.syllabusCode.toLowerCase().includes(q)) &&
          !(syl?.syllabusTitle.toLowerCase().includes(q)) &&
          !unitMatch
        ) {
          return false;
        }
      }
      return true;
    });
  }, [selectedSemester, selectedSubjectId, searchQuery]);

  const toggleCourse = (code: string) => {
    setExpandedCodes((prev) => ({ ...prev, [code]: !prev[code] }));
    if (onClearFocusedCourse && focusedCourseCode === code) {
      onClearFocusedCourse();
    }
  };

  const expandAllFiltered = () => {
    const next: Record<string, boolean> = {};
    filteredCourses.forEach((c) => {
      next[c.courseCode] = true;
    });
    setExpandedCodes(next);
  };

  const collapseAll = () => setExpandedCodes({});

  return (
    <section id="catalogue" className="space-y-6">
      <div className="bg-white border border-slate-200 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-900">
              Section C · Complete 60-Course Syllabus &amp; Transcript Cross-Reference
            </p>
            <h2 className="font-serif text-2xl font-semibold text-slate-900 mt-1">
              Complete Course Catalogue (Semesters I–VI)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Every one of the 60 transcript entries (30 Theory, 29 Practical, 1 Project Implementation) is preserved
              separately without merging Theory and Practical records, linked to its official syllabus units, teaching
              hours, evaluation breakdown, textbooks, and source provenance.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={expandAllFiltered}
              className="px-3 py-1.5 text-xs font-medium border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              Expand Shown ({filteredCourses.length})
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="px-3 py-1.5 text-xs font-medium border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pb-5 border-b border-slate-200">
          <div className="md:col-span-5 relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course code, title, or syllabus unit topic (e.g. Jacobian, Spark, SVM)..."
              className="w-full pl-8 pr-3 py-2 text-xs border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-blue-800"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedSemester}
              onChange={(e) =>
                setSelectedSemester(e.target.value === 'all' ? 'all' : Number(e.target.value))
              }
              aria-label="Filter catalogue by semester"
              className="w-full px-3 py-2 text-xs border border-slate-300 bg-white text-slate-800"
            >
              <option value="all">All Semesters (60 courses)</option>
              {[1, 2, 3, 4, 5, 6].map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem} (10 courses · 20 credits)
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-4">
            <select
              value={selectedSubjectId}
              onChange={(e) => setSelectedSubjectId(e.target.value)}
              aria-label="Filter catalogue by primary subject area"
              className="w-full px-3 py-2 text-xs border border-slate-300 bg-white text-slate-800"
            >
              <option value="all">All Primary Subject Areas (120 credits)</option>
              {SUBJECT_AREA_MAPPINGS.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.number}. {area.name} ({area.primaryCredits} cr)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Course Accordions */}
        <div className="divide-y divide-slate-200 mt-2">
          {filteredCourses.map((course) => {
            const syl = course.syllabusCode ? SYLLABUS_DETAILS[course.syllabusCode] : undefined;
            const isOpen = !!expandedCodes[course.courseCode];
            const isFocused = focusedCourseCode === course.courseCode;
            const pairedCode = course.pairedPracticalCode || course.pairedTheoryCode;
            const totalUnitLectures = syl?.units.reduce((sum, u) => sum + (u.lectures ?? 0), 0) ?? 0;

            return (
              <article
                key={course.courseCode}
                id={`course-card-${course.courseCode}`}
                className={`py-4 transition-colors ${isFocused ? 'bg-blue-50/40 px-3 -mx-3' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleCourse(course.courseCode)}
                  className="w-full text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer group"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="mt-1 text-slate-400 group-hover:text-slate-700 shrink-0">
                      {isOpen ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-mono text-slate-500">
                        <span className="text-slate-900 font-semibold">{course.courseCode}</span>
                        <span>·</span>
                        <span>Sem {course.semester}</span>
                        <span>·</span>
                        <span>{course.componentType}</span>
                        {syl && (
                          <>
                            <span>·</span>
                            <span>Syllabus {syl.syllabusCode}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-sm sm:text-base font-medium text-slate-900 group-hover:text-blue-900 mt-0.5">
                        {course.exactTitle}
                      </h3>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Primary Area: {subjectMap[course.primarySubjectId] || course.primarySubjectId}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pl-6 sm:pl-0 shrink-0 text-xs font-mono tabular-nums">
                    <div className="text-right">
                      <span className="text-slate-500">Marks </span>
                      <strong className="text-slate-900">{course.marksObtained}</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-500">Grade </span>
                      <strong className="text-blue-900">{course.grade}</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-500">Cr </span>
                      <strong className="text-slate-900">{course.credits}</strong>
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pl-6 sm:pl-7 pr-1 space-y-4 text-xs sm:text-sm">
                    {/* Verification / Discrepancy Note if present */}
                    {(course.verificationNote || syl?.discrepancyNote) && (
                      <div className="bg-amber-50/60 border border-amber-200 p-3 text-xs text-amber-950 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          {course.verificationNote && <p>{course.verificationNote}</p>}
                          {syl?.discrepancyNote && <p>{syl.discrepancyNote}</p>}
                        </div>
                      </div>
                    )}

                    {/* 13-Field Structured Metadata Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-slate-50 border border-slate-200 p-4 text-xs">
                      <div>
                        <div className="text-slate-500 font-mono uppercase text-[10px]">
                          1. Official Course Code(s)
                        </div>
                        <div className="font-mono text-slate-900 mt-0.5">
                          Transcript: {course.courseCode}
                          <br />
                          Syllabus: {syl?.syllabusCode ?? 'Not specified'}
                        </div>
                      </div>

                      <div>
                        <div className="text-slate-500 font-mono uppercase text-[10px]">
                          2. Course Titles &amp; Semester
                        </div>
                        <div className="text-slate-900 mt-0.5">
                          Transcript: {course.exactTitle}
                          <br />
                          Syllabus: {syl?.syllabusTitle ?? 'Not specified'} (Semester {course.semester})
                        </div>
                      </div>

                      <div>
                        <div className="text-slate-500 font-mono uppercase text-[10px]">
                          3. Credits &amp; Grade / Marks
                        </div>
                        <div className="font-mono text-slate-900 mt-0.5">
                          {course.credits} Institutional Credits · Marks {course.marksObtained} · Grade{' '}
                          {course.grade} (GP {course.gradePoint}, CG {course.cg})
                        </div>
                      </div>

                      <div>
                        <div className="text-slate-500 font-mono uppercase text-[10px]">
                          4. Component Type &amp; Pairing
                        </div>
                        <div className="text-slate-900 mt-0.5">
                          {course.componentType}
                          {pairedCode && (
                            <button
                              type="button"
                              onClick={() => {
                                setExpandedCodes((prev) => ({ ...prev, [pairedCode]: true }));
                                const el = document.getElementById(`course-card-${pairedCode}`);
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              }}
                              className="ml-2 inline-flex items-center gap-1 text-blue-900 hover:underline font-mono cursor-pointer"
                            >
                              <Link2 className="w-3 h-3" /> Paired: {pairedCode}
                            </button>
                          )}
                        </div>
                      </div>

                      <div>
                        <div className="text-slate-500 font-mono uppercase text-[10px]">
                          5. Teaching &amp; Practical Hours (Transcript vs. Syllabus)
                        </div>
                        <div className="text-slate-900 mt-0.5">
                          Transcript: {course.transcriptDurationPerSession} × {course.transcriptSessionsPerWeek}/wk
                          <br />
                          Syllabus: {syl ? `${syl.periodsPerWeek} periods/wk (${syl.periodDuration})` : 'Not specified'}
                          {totalUnitLectures > 0 && ` · ${totalUnitLectures} unit lectures (${(totalUnitLectures * 50 / 60).toFixed(1)} hrs)`}
                          {syl?.practicalCountNote && ` · ${syl.practicalCountNote}`}
                        </div>
                      </div>

                      <div>
                        <div className="text-slate-500 font-mono uppercase text-[10px]">
                          6. Examination &amp; Evaluation Structure
                        </div>
                        <div className="text-slate-900 mt-0.5">
                          {syl ? (
                            <>
                              Exam Duration: {syl.examHours} hrs · External Max: {syl.externalMaxMarks} · Internal Max:{' '}
                              {syl.internalMaxMarks}
                              {syl.internalBreakdown && (
                                <span className="block text-slate-600">{syl.internalBreakdown}</span>
                              )}
                            </>
                          ) : (
                            'Not specified in available official documents'
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Objectives & Learning Outcomes */}
                    {syl && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-slate-200 p-3.5">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                            Official Course Objectives (Verbatim)
                          </div>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                            {syl.objectives.map((o, idx) => (
                              <li key={idx}>{o}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="border border-slate-200 p-3.5">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                            Official Course Outcome (Verbatim)
                          </div>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                            {syl.courseOutcome.map((o, idx) => (
                              <li key={idx}>{o}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Units / Topics Table */}
                    {syl && syl.units.length > 0 ? (
                      <div className="border border-slate-200 overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono uppercase">
                              <th className="py-2 px-3 w-20">Unit</th>
                              <th className="py-2 px-3">Official Syllabus Topics</th>
                              <th className="py-2 px-3 text-right w-24">Lectures</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {syl.units.map((u) => (
                              <tr key={u.unit} className="align-top">
                                <td className="py-2.5 px-3 font-mono font-semibold text-slate-900">
                                  Unit {u.unit}
                                </td>
                                <td className="py-2.5 px-3 text-slate-700 leading-relaxed">
                                  {u.titleAndTopics}
                                </td>
                                <td className="py-2.5 px-3 text-right font-mono tabular-nums text-slate-700">
                                  {u.lectures ?? 'N/A'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                        <strong>Unit Breakdown:</strong>{' '}
                        {course.componentType === 'Practical'
                          ? `Practical course paired with ${course.pairedTheoryCode}. Official syllabus specifies "${syl?.practicalCountNote || '10 Practicals covering the syllabus'}" without separately itemizing unit-by-unit lab titles.`
                          : 'Not specified in the available official documents.'}
                      </div>
                    )}

                    {/* References & Source Provenance */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="border border-slate-200 p-3.5">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                          Official Textbook / Reference List
                        </div>
                        {syl && syl.references.length > 0 ? (
                          <ul className="space-y-1 text-slate-700">
                            {syl.references.map((r, i) => (
                              <li key={i}>
                                · <em>{r.title}</em> — {r.authors}
                                {r.publisher ? `, ${r.publisher}` : ''}
                                {r.edition ? ` (${r.edition} ed.)` : ''}
                                {r.year ? `, ${r.year}` : ''}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-slate-500">
                            {course.componentType === 'Practical'
                              ? 'Refer to paired theory course reference list.'
                              : 'Not specified in the available official documents.'}
                          </p>
                        )}
                      </div>

                      <div className="border border-slate-200 p-3.5 space-y-1 text-slate-700">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                          Source Document Provenance
                        </div>
                        <p>
                          <strong>Transcript:</strong> Official Transcript Page {course.sourcePage} ({course.courseCode})
                        </p>
                        <p>
                          <strong>Syllabus:</strong> {syl ? `${syl.sourceDocument} — ${syl.sourceSectionNote}` : 'Not specified'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
