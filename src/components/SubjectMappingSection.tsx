import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { ArrowUpRight, AlertCircle } from 'lucide-react';
import { SUBJECT_AREA_MAPPINGS } from '../data/analysisData';

interface SubjectMappingSectionProps {
  onNavigateToCourse: (courseCode: string) => void;
}

export const SubjectMappingSection: React.FC<SubjectMappingSectionProps> = ({
  onNavigateToCourse,
}) => {
  const [confidenceFilter, setConfidenceFilter] = useState<'all' | 'High' | 'Medium' | 'Limited'>('all');

  const totalPrimaryCredits = SUBJECT_AREA_MAPPINGS.reduce((sum, s) => sum + s.primaryCredits, 0);

  const chartData = SUBJECT_AREA_MAPPINGS.map((s) => ({
    name: `${s.number}. ${s.name.length > 28 ? `${s.name.slice(0, 26)}…` : s.name}`,
    fullName: s.name,
    theory: s.theoryCredits,
    practical: s.practicalOrProjectCredits,
    total: s.primaryCredits,
  }));

  const filteredAreas = SUBJECT_AREA_MAPPINGS.filter((s) =>
    confidenceFilter === 'all' ? true : s.confidence === confidenceFilter
  );

  return (
    <section id="subjects" className="space-y-6">
      <div className="bg-white border border-slate-200 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-900">
              Section D · Applicant-Prepared Curriculum Classification (Non-Duplicated)
            </p>
            <h2 className="font-serif text-2xl font-semibold text-slate-900 mt-1">
              Subject Area Mapping (All 17 Evaluative Domains)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Every completed course is assigned to exactly one primary subject area so that primary credit allocations
              sum strictly to <strong>{totalPrimaryCredits} University of Mumbai / TCSC Institutional Credits</strong>{' '}
              without double-counting. Secondary topic appearances across other courses are shown separately.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 text-xs font-mono text-slate-700 shrink-0">
            Reconciled Primary Sum: <strong className="text-slate-900">{totalPrimaryCredits}</strong> / 120 Inst. Credits
          </div>
        </div>

        {/* Horizontal Stacked Bar Chart */}
        <div className="border border-slate-200 p-4 sm:p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <h3 className="text-sm font-semibold text-slate-900">
              Primary Institutional Credit Distribution (Theory vs. Practical / Project)
            </h3>
            <span className="text-xs font-mono text-slate-500">
              Unit: University of Mumbai / TCSC Institutional Credits (NOT ECTS)
            </span>
          </div>

          <div className="h-[440px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 5, right: 24, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" horizontal={false} />
                <XAxis type="number" domain={[0, 26]} tick={{ fontSize: 11, fill: '#475569' }} />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={220}
                  tick={{ fontSize: 11, fill: '#0F172A' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#CBD5E1',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="theory" stackId="a" name="Theory Credits" fill="#1E40AF" barSize={16} />
                <Bar
                  dataKey="practical"
                  stackId="a"
                  name="Practical / Project Credits"
                  fill="#64748B"
                  barSize={16}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Confidence Filter */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div className="text-xs text-slate-600">
            Filter subject areas by documentation confidence:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(['all', 'High', 'Medium', 'Limited'] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setConfidenceFilter(lvl)}
                className={`px-3 py-1 text-xs font-medium border cursor-pointer ${
                  confidenceFilter === lvl
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                {lvl === 'all' ? 'All 17 Areas' : `${lvl} Confidence`}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Area Detail Rows */}
        <div className="divide-y divide-slate-200">
          {filteredAreas.map((area) => (
            <div key={area.id} className="py-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-slate-900">
                    {area.number}. {area.name}
                  </h3>
                  <div className="text-xs font-mono text-slate-500 mt-0.5">
                    Confidence: <span className="text-slate-900 font-medium">{area.confidence}</span>
                    {' · '}
                    Primary Institutional Credits:{' '}
                    <span className="text-blue-900 font-semibold">{area.primaryCredits}</span>{' '}
                    ({area.theoryCredits} Theory + {area.practicalOrProjectCredits} Practical/Project)
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">{area.explanation}</p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
                <div className="lg:col-span-7 border border-slate-200 bg-slate-50 p-3.5">
                  <div className="font-mono uppercase tracking-wider text-slate-500 text-[10px] mb-1.5">
                    Documented Syllabus Topics
                  </div>
                  <ul className="space-y-1 text-slate-700">
                    {area.relevantTopics.map((topic, idx) => (
                      <li key={idx}>· {topic}</li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5 border border-slate-200 p-3.5 space-y-2.5">
                  <div>
                    <div className="font-mono uppercase tracking-wider text-slate-500 text-[10px] mb-1">
                      Primary Courses (Counted Toward {area.primaryCredits} Credits)
                    </div>
                    {area.primaryCourseCodes.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5">
                        {area.primaryCourseCodes.map((code) => (
                          <button
                            key={code}
                            type="button"
                            onClick={() => onNavigateToCourse(code)}
                            className="inline-flex items-center gap-0.5 font-mono text-[11px] px-2 py-0.5 border border-slate-300 bg-white text-blue-900 hover:bg-blue-50 cursor-pointer"
                          >
                            {code}
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="font-mono text-slate-700">None (0 primary credits allocated)</p>
                    )}
                  </div>

                  {area.secondaryCourseCodes.length > 0 && (
                    <div>
                      <div className="font-mono uppercase tracking-wider text-slate-500 text-[10px] mb-1">
                        Secondary / Overlapping Coverage (Credits Counted Elsewhere)
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {area.secondaryCourseCodes.map((code) => (
                          <button
                            key={code}
                            type="button"
                            onClick={() => onNavigateToCourse(code)}
                            className="inline-flex items-center gap-0.5 font-mono text-[11px] px-2 py-0.5 border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 cursor-pointer"
                          >
                            {code}
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="font-mono uppercase tracking-wider text-slate-500 text-[10px] mb-0.5">
                      Theory vs. Practical Evidence
                    </div>
                    <p className="text-slate-700">{area.theoryPracticalEvidence}</p>
                  </div>
                </div>
              </div>

              {area.limitations && (
                <div className="bg-amber-50/50 border border-amber-200 p-3 text-xs text-amber-950 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Scope Limitation:</strong> {area.limitations}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
