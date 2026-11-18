import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { CheckCircle2, ArrowRight, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import {
  AUDIT_CHECKLIST_ITEMS,
  RESEARCH_PUBLICATION,
  STUDENT_PROFILE,
} from '../data/profileData';
import { SEMESTER_SUMMARIES } from '../data/transcriptData';
import { SectionId } from '../types/academic';

interface OverviewSectionProps {
  onNavigateSection: (section: SectionId) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onNavigateSection }) => {
  const chartData = SEMESTER_SUMMARIES.map((s) => ({
    semester: `Sem ${s.roman}`,
    sgpi: s.sgpi,
    marks: s.marksObtainedTotal,
    credits: s.creditsEarned,
  }));

  return (
    <section id="overview" className="space-y-8">
      {/* Institutional Banner */}
      <div className="bg-white border border-slate-200 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-900">
              Academic Evidence &amp; Curriculum Documentation · For German Master’s Admissions Committees
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
              {STUDENT_PROFILE.degreeTitle}
            </h1>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Applicant: <strong className="font-semibold text-slate-900">{STUDENT_PROFILE.applicantName}</strong>
              {' · '}
              {STUDENT_PROFILE.institution} ({STUDENT_PROFILE.institutionStatus}),{' '}
              {STUDENT_PROFILE.location}.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              This portfolio is an evidence-first academic dossier prepared to assist German public university
              admissions officers, examination boards (<em>Prüfungsausschüsse</em>), and credential evaluators in
              assessing undergraduate subject depth, quantitative foundations, computer science coursework, and
              documented contact-hour records. Every credit value is reported strictly in{' '}
              <strong className="font-medium text-slate-900">
                University of Mumbai / TCSC Institutional Credits
              </strong>{' '}
              with no automatic ECTS conversion.
            </p>
          </div>

          <div className="lg:w-80 shrink-0 bg-slate-50 border border-slate-200 p-4 space-y-2 text-xs">
            <div className="font-mono uppercase tracking-wider text-slate-500">
              Evidence Governance
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Official Sources:</strong> Consolidated 6-semester Academic Transcript
              (issued {STUDENT_PROFILE.transcriptIssueDate}) and Official FY/SY/TY B.Sc. Data Science Syllabi.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Applicant-Prepared Layers:</strong> Subject-area mappings, topic links,
              and workload gap summaries are explicitly separated from official records.
            </p>
          </div>
        </div>

        {/* 5 Core Verified KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 pt-6 border-t border-slate-200">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              Completed Semesters
            </div>
            <div className="mt-1 font-mono tabular-nums text-2xl font-semibold text-slate-900">
              {STUDENT_PROFILE.semesterCount}
            </div>
            <div className="text-xs text-slate-600 mt-0.5">Nov 2022 – Apr 2025</div>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              Institutional Credits
            </div>
            <div className="mt-1 font-mono tabular-nums text-2xl font-semibold text-slate-900">
              {STUDENT_PROFILE.totalInstitutionalCredits}
            </div>
            <div className="text-xs text-slate-600 mt-0.5">20 per semester (Not ECTS)</div>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              Transcript Entries
            </div>
            <div className="mt-1 font-mono tabular-nums text-2xl font-semibold text-slate-900">
              {STUDENT_PROFILE.totalTranscriptEntries}
            </div>
            <div className="text-xs text-slate-600 mt-0.5">30 Theory · 29 Lab · 1 Project</div>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              Final CGPA / Grade
            </div>
            <div className="mt-1 font-mono tabular-nums text-2xl font-semibold text-blue-900">
              {STUDENT_PROFILE.finalCgpa} · {STUDENT_PROFILE.finalGrade}
            </div>
            <div className="text-xs text-slate-600 mt-0.5">Scale 0–10 · Total Marks 3,414</div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              Degree Duration
            </div>
            <div className="mt-1 font-mono tabular-nums text-2xl font-semibold text-slate-900">
              3 Years
            </div>
            <div className="text-xs text-slate-600 mt-0.5">Medium: English</div>
          </div>
        </div>
      </div>

      {/* Institutional Metadata & Semester Trajectory */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Profile Metadata Table */}
        <div className="lg:col-span-6 bg-white border border-slate-200 p-6">
          <h2 className="font-serif text-lg font-semibold text-slate-900 mb-4">
            Official Academic Profile
          </h2>
          <dl className="divide-y divide-slate-100 text-sm">
            {[
              ['Degree Awarded', STUDENT_PROFILE.degreeTitle],
              ['Institution', STUDENT_PROFILE.institution],
              ['Institutional Status', STUDENT_PROFILE.institutionStatus],
              ['Affiliating University', STUDENT_PROFILE.affiliatingUniversity],
              ['Location', STUDENT_PROFILE.location],
              ['Credit Framework', `${STUDENT_PROFILE.creditSystem} (20 credits/semester)`],
              ['Graduation Status', STUDENT_PROFILE.graduationStatus],
              ['Transcript Issue Date', STUDENT_PROFILE.transcriptIssueDate],
              ['Medium of Instruction', STUDENT_PROFILE.mediumOfInstruction],
              ['Target Master’s Fields', STUDENT_PROFILE.targetMasterDisciplines.join(' · ')],
            ].map(([label, val]) => (
              <div key={label} className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                <dt className="text-slate-500 shrink-0">{label}</dt>
                <dd className="text-slate-900 font-medium sm:text-right">{val}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* SGPI & Marks Trajectory Chart */}
        <div className="lg:col-span-6 bg-white border border-slate-200 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <h2 className="font-serif text-lg font-semibold text-slate-900">
                Semester-Wise SGPI &amp; Total Marks Trajectory
              </h2>
              <span className="text-xs font-mono text-slate-500">All 6 Semesters Passed</span>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Verifiable progression across Semesters I–VI (20 institutional credits earned in every semester;
              cumulative CG = 1,062 / 120 = 8.85 CGPA).
            </p>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData} margin={{ top: 10, right: 16, left: -12, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="semester" tick={{ fontSize: 12, fill: '#475569' }} />
                <YAxis
                  yAxisId="left"
                  domain={[0, 10]}
                  tick={{ fontSize: 11, fill: '#1E3A8A' }}
                  label={{ value: 'SGPI', angle: -90, position: 'insideLeft', offset: 20, fontSize: 11, fill: '#1E3A8A' }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[0, 750]}
                  tick={{ fontSize: 11, fill: '#475569' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#CBD5E1',
                    fontSize: '12px',
                  }}
                />
                <Bar yAxisId="right" dataKey="marks" name="Total Marks Obtained" fill="#CBD5E1" barSize={28} />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="sgpi"
                  name="SGPI (10-pt scale)"
                  stroke="#1E40AF"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: '#1E40AF' }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigateSection('transcript')}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-900 hover:underline cursor-pointer"
            >
              Inspect Full 60-Course Transcript <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-slate-300">·</span>
            <button
              type="button"
              onClick={() => onNavigateSection('workload')}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-900 hover:underline cursor-pointer"
            >
              Review ECTS &amp; Workload Assessment Info <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Audit Reconciliation + Research Publication Evidence */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-white border border-slate-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-900" />
            <h2 className="font-serif text-lg font-semibold text-slate-900">
              Transcript Reconciliation Summary
            </h2>
          </div>
          <ul className="space-y-3 text-sm">
            {AUDIT_CHECKLIST_ITEMS.map((item) => (
              <li key={item.label} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-900 font-medium">{item.label}</div>
                  <div className="text-xs text-slate-600 font-mono">{item.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 bg-white border border-slate-200 p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-900 mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                Documented Undergraduate Research Evidence (Published Paper)
              </div>
              <h2 className="font-serif text-lg font-semibold text-slate-900">
                {RESEARCH_PUBLICATION.title}
              </h2>
            </div>
            <span className="font-mono text-xs text-slate-600 shrink-0">
              {RESEARCH_PUBLICATION.paperId}
            </span>
          </div>

          <p className="text-xs text-slate-600 mb-3">
            {RESEARCH_PUBLICATION.journal} · {RESEARCH_PUBLICATION.volumeIssue} · ISSN {RESEARCH_PUBLICATION.issn} ·
            Published {RESEARCH_PUBLICATION.publicationDate} · Pages {RESEARCH_PUBLICATION.pages} · Certificate Reg. No.{' '}
            <span className="font-mono">{RESEARCH_PUBLICATION.certificateRegistrationId}</span>
          </p>

          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            {RESEARCH_PUBLICATION.summary}
          </p>

          <div className="bg-slate-50 border border-slate-200 p-3.5 mb-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
              Reported Empirical Results (ODIR-5K Dataset)
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono text-slate-700">
              {RESEARCH_PUBLICATION.keyMetricsReported.map((m) => (
                <li key={m}>· {m}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
            <span>Authors: {RESEARCH_PUBLICATION.authors}</span>
            <a
              href={RESEARCH_PUBLICATION.codeRepositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-900 font-medium hover:underline"
            >
              Paper Code Repository <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
