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
import { AlertTriangle, Info, Calculator } from 'lucide-react';
import { WORKLOAD_EVIDENCE_ROWS } from '../data/analysisData';

export const WorkloadEctsSection: React.FC = () => {
  // Optional informational scenario explorer — ALL assumptions disclosed, ZERO official ECTS claim
  const [weeksPerSem, setWeeksPerSem] = useState<number>(15);
  const [selfStudyRatio, setSelfStudyRatio] = useState<number>(1.5);
  const [hoursPerRefUnit, setHoursPerRefUnit] = useState<number>(30);

  // Documented theory lectures across degree: 30 theory courses × 60 lectures (50 min each) = 1,500 clock hrs
  const documentedTheoryHours = 30 * 60 * (50 / 60); // 1,500 h
  // Transcript practical schedule: 29 practicals × 1.5 hrs/wk × assumed weeks (project UGDS6PRIP422 shows "--")
  const scenarioPracticalHours = 29 * 1.5 * weeksPerSem;
  const totalContactScenario = documentedTheoryHours + scenarioPracticalHours;
  const estimatedSelfStudyScenario = totalContactScenario * selfStudyRatio;
  const totalScenarioHours = totalContactScenario + estimatedSelfStudyScenario;
  const hypotheticalWorkloadIndex = totalScenarioHours / hoursPerRefUnit;

  const scheduleComparisonData = [
    {
      component: 'Theory (per course / wk)',
      Transcript: 200,
      Syllabus: 250,
    },
    {
      component: 'Practical (per course / wk)',
      Transcript: 90,
      Syllabus: 150,
    },
  ];

  return (
    <section id="workload" className="space-y-6">
      {/* Mandatory Dedicated Section Heading */}
      <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-blue-900">
            Section G · Workload Transparency &amp; Non-Conversion Policy
          </p>
          <h2 className="font-serif text-2xl font-semibold text-slate-900 mt-1">
            ECTS and Workload Assessment Information
          </h2>
          <p className="text-sm text-slate-700 mt-2 max-w-4xl leading-relaxed">
            The official transcript records{' '}
            <strong>120 University of Mumbai / TCSC Institutional Credits</strong> (20 per semester across 6
            semesters). Indian CBCS institutional credits are <strong>not automatically equivalent to ECTS</strong>.
            Because European Credit Transfer and Accumulation System (ECTS) weighting measures total student workload
            (lectures, practicals, projects, assignments, independent study, and exam preparation), this section
            provides verified contact-hour evidence alongside explicit documentation gaps so that a German
            university’s admissions committee or examination board can perform its own independent evaluation.
          </p>
        </div>

        {/* Strict Non-Equivalence Statement */}
        <div className="bg-amber-50/60 border border-amber-200 p-4 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-semibold">
              Explicit Non-Conversion &amp; Non-Recognition Statement
            </div>
            <ul className="list-disc pl-4 space-y-0.5 text-xs">
              <li>
                All degree totals are stated strictly as <strong>120 University of Mumbai / TCSC Institutional Credits</strong>.
              </li>
              <li>
                No 1:1 conversion to ECTS is implied, and no claim is made that this degree equals 180 ECTS or 240 ECTS.
              </li>
              <li>
                No claim is made that any German university or state recognition body has pre-recognized these credits.
              </li>
            </ul>
          </div>
        </div>

        {/* Summary Split Cards + Discrepancy Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="border border-slate-200 bg-slate-50 p-4">
              <div className="font-mono uppercase text-[10px] text-slate-500">
                Documented Theory Lectures (Syllabus)
              </div>
              <div className="font-mono tabular-nums text-2xl font-semibold text-slate-900 mt-1">
                1,800 lectures
              </div>
              <p className="text-slate-600 mt-1">
                30 theory courses × 5 units × 12 lectures/unit = 1,800 lectures (at 50 min = <strong>1,500.0 clock hours</strong>).
              </p>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-4">
              <div className="font-mono uppercase text-[10px] text-slate-500">
                Documented Credits Breakdown
              </div>
              <div className="font-mono tabular-nums text-2xl font-semibold text-slate-900 mt-1">
                60 + 58 + 2
              </div>
              <p className="text-slate-600 mt-1">
                60 Theory credits (30 courses) + 58 Practical credits (29 courses) + 2 Project Implementation credits.
              </p>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-4">
              <div className="font-mono uppercase text-[10px] text-slate-500">
                Practical Component Specification
              </div>
              <div className="font-mono tabular-nums text-2xl font-semibold text-slate-900 mt-1">
                29 Labs + 1 Proj
              </div>
              <p className="text-slate-600 mt-1">
                Syllabi note &ldquo;10 Practicals covering the syllabus&rdquo; per lab; transcript lists{' '}
                <span className="font-mono">1½ Hrs × 1/wk</span> (and <span className="font-mono">--</span> for Project).
              </p>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-4">
              <div className="font-mono uppercase text-[10px] text-slate-500">
                Missing Workload Evidence
              </div>
              <div className="font-mono text-lg font-semibold text-amber-900 mt-1">
                Not Documented
              </div>
              <p className="text-slate-600 mt-1">
                Semester teaching weeks, self-study hours, homework/project prep hours, and thesis duration are not stated.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 border border-slate-200 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Source Discrepancy: Weekly Minutes per Course (Transcript vs. Syllabus)
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 mb-3">
                Transcript records 4×50m (200 min/wk) theory and 1×90m (90 min/wk) lab, while syllabus headers print
                5×50m (250 min/wk) theory and 3×50m (150 min/wk) lab.
              </p>
            </div>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scheduleComparisonData} margin={{ top: 8, right: 16, left: -12, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="component" tick={{ fontSize: 11, fill: '#475569' }} />
                  <YAxis
                    tick={{ fontSize: 11, fill: '#475569' }}
                    label={{ value: 'Min / Wk', angle: -90, position: 'insideLeft', offset: 20, fontSize: 11, fill: '#475569' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      borderColor: '#CBD5E1',
                      fontSize: '12px',
                    }}
                  />
                  <Bar dataKey="Transcript" name="Transcript Schedule (min/wk)" fill="#1E40AF" barSize={32} />
                  <Bar dataKey="Syllabus" name="Syllabus Header (min/wk)" fill="#64748B" barSize={32} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Documented vs Derived vs Missing Table */}
        <div className="overflow-x-auto border border-slate-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono uppercase">
                <th className="py-2.5 px-3 w-44">Workload Dimension</th>
                <th className="py-2.5 px-3">Official Syllabus Statement</th>
                <th className="py-2.5 px-3">Official Transcript Statement</th>
                <th className="py-2.5 px-3">Safely Derived Fact</th>
                <th className="py-2.5 px-3">Missing / Not Established</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 align-top">
              {WORKLOAD_EVIDENCE_ROWS.map((row) => (
                <tr key={row.item} className="hover:bg-slate-50/70">
                  <td className="py-3 px-3 font-semibold text-slate-900">{row.item}</td>
                  <td className="py-3 px-3 text-slate-700 leading-relaxed">{row.syllabusStatement}</td>
                  <td className="py-3 px-3 text-slate-700 leading-relaxed">{row.transcriptStatement}</td>
                  <td className="py-3 px-3 text-slate-800 leading-relaxed">{row.safelyDerived}</td>
                  <td className="py-3 px-3 text-amber-900 leading-relaxed">{row.missingOrNotEstablished}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Optional Informational Workload Calculation Explorer */}
        <div className="border border-slate-200 bg-slate-50 p-5 space-y-4">
          <div className="flex items-start gap-2.5">
            <Calculator className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Optional Informational Workload Sensitivity Framework (Non-Official)
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                For evaluator scenario exploration only. Adjust the three undocumented assumptions below to inspect
                how different semester lengths and independent-study multipliers affect total estimated hours.{' '}
                <strong>Outputs are hypothetical estimates and NOT an official ECTS equivalence.</strong>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <label className="block bg-white border border-slate-200 p-3">
              <div className="flex justify-between font-medium text-slate-800 mb-1">
                <span>Assumed Lab Weeks / Sem</span>
                <span className="font-mono text-blue-900">{weeksPerSem} weeks</span>
              </div>
              <input
                type="range"
                min={10}
                max={16}
                step={1}
                value={weeksPerSem}
                onChange={(e) => setWeeksPerSem(Number(e.target.value))}
                className="w-full accent-blue-900"
              />
              <div className="text-[11px] text-slate-500 mt-1">
                Assumption: 1.5 hrs/wk (transcript) applied across {weeksPerSem} wks for 29 labs (Project excluded).
              </div>
            </label>

            <label className="block bg-white border border-slate-200 p-3">
              <div className="flex justify-between font-medium text-slate-800 mb-1">
                <span>Assumed Independent Study Ratio</span>
                <span className="font-mono text-blue-900">{selfStudyRatio.toFixed(1)}× contact</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={2.5}
                step={0.25}
                value={selfStudyRatio}
                onChange={(e) => setSelfStudyRatio(Number(e.target.value))}
                className="w-full accent-blue-900"
              />
              <div className="text-[11px] text-slate-500 mt-1">
                Assumption: Self-study, tutorials, assignments &amp; exam prep per hour of contact time (not in docs).
              </div>
            </label>

            <label className="block bg-white border border-slate-200 p-3">
              <div className="flex justify-between font-medium text-slate-800 mb-1">
                <span>Reference Workload Divisor</span>
                <span className="font-mono text-blue-900">{hoursPerRefUnit} hrs / unit</span>
              </div>
              <select
                value={hoursPerRefUnit}
                onChange={(e) => setHoursPerRefUnit(Number(e.target.value))}
                className="w-full mt-1 px-2 py-1 border border-slate-300 bg-white text-slate-900 font-mono"
              >
                <option value={25}>25 hours per reference unit</option>
                <option value={27.5}>27.5 hours per reference unit</option>
                <option value={30}>30 hours per reference unit</option>
              </select>
              <div className="text-[11px] text-slate-500 mt-1.5">
                Divisor selected purely for transparent arithmetic illustration.
              </div>
            </label>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs bg-white border border-slate-200 p-4">
            <div>
              <div className="text-slate-500 font-mono text-[10px] uppercase">Documented Theory Hours</div>
              <div className="font-mono tabular-nums text-lg font-semibold text-slate-900">
                {documentedTheoryHours.toFixed(0)} h
              </div>
              <div className="text-[11px] text-slate-500">From 1,800 syllabus lectures</div>
            </div>
            <div>
              <div className="text-slate-500 font-mono text-[10px] uppercase">Scenario Contact Total</div>
              <div className="font-mono tabular-nums text-lg font-semibold text-slate-900">
                {totalContactScenario.toFixed(1)} h
              </div>
              <div className="text-[11px] text-slate-500">Theory + {scenarioPracticalHours.toFixed(1)}h lab</div>
            </div>
            <div>
              <div className="text-slate-500 font-mono text-[10px] uppercase">Scenario Total Workload</div>
              <div className="font-mono tabular-nums text-lg font-semibold text-slate-900">
                {totalScenarioHours.toFixed(0)} h
              </div>
              <div className="text-[11px] text-slate-500">Includes unverified self-study</div>
            </div>
            <div>
              <div className="text-slate-500 font-mono text-[10px] uppercase">Illustrative Hour Ratio</div>
              <div className="font-mono tabular-nums text-lg font-semibold text-blue-900">
                {hypotheticalWorkloadIndex.toFixed(1)} units
              </div>
              <div className="text-[11px] text-amber-800 flex items-center gap-1">
                <Info className="w-3 h-3 shrink-0" /> Informational only — NOT ECTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
