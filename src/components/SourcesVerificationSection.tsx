import React from 'react';
import { ShieldAlert, FileCheck2, AlertTriangle, HelpCircle } from 'lucide-react';
import { DISCREPANCY_RECORDS, SOURCE_DOCUMENTS } from '../data/analysisData';

export const SourcesVerificationSection: React.FC = () => {
  return (
    <section id="sources" className="space-y-6">
      <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-blue-900">
            Section I · Document Provenance, Discrepancies &amp; Privacy Governance
          </p>
          <h2 className="font-serif text-2xl font-semibold text-slate-900 mt-1">
            Source Documents and Verification
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-4xl">
            Complete register of authoritative institutional documents and applicant-prepared audit files used to
            construct this portfolio, together with all source inconsistencies, unverified items, and privacy
            safeguards.
          </p>
        </div>

        {/* Public vs Private Privacy Boundary */}
        <div className="bg-slate-50 border border-slate-200 p-4 text-xs space-y-1.5">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <ShieldAlert className="w-4 h-4 text-blue-900" />
            Privacy &amp; Document Access Boundary (Static Public Deployment Safeguard)
          </div>
          <p className="text-slate-700 leading-relaxed">
            In accordance with personal data protection practices for static GitHub Pages deployments, this public
            website excludes seat numbers, transcript certificate reference codes, date of birth, phone numbers, private
            email addresses, home addresses, institutional signatures, and QR verification graphics. The complete
            original signed transcript PDF (<span className="font-mono">TranscriptOfBachelorDS.pdf</span>) is submitted
            exclusively through official university application portals (e.g., uni-assist / university portals) rather
            than hosted for public download.
          </p>
        </div>

        {/* Authoritative Sources Table */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FileCheck2 className="w-4 h-4 text-blue-900" />
            <h3 className="font-serif text-lg font-semibold text-slate-900">
              Source Document Registry
            </h3>
          </div>
          <div className="overflow-x-auto border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono uppercase">
                  <th className="py-2.5 px-3">Source Document</th>
                  <th className="py-2.5 px-3">Issuing Body / Origin</th>
                  <th className="py-2.5 px-3">Scope / Dates</th>
                  <th className="py-2.5 px-3">Access Classification</th>
                  <th className="py-2.5 px-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 align-top">
                {SOURCE_DOCUMENTS.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50/70">
                    <td className="py-3 px-3 font-medium text-slate-900">
                      <div>{doc.name}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{doc.documentType}</div>
                    </td>
                    <td className="py-3 px-3 text-slate-700">{doc.issuingInstitution}</td>
                    <td className="py-3 px-3 text-slate-700">
                      <div>{doc.dateOrAcademicYear}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{doc.referenceDetails}</div>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-slate-900">
                      {doc.publicStatus}
                    </td>
                    <td className="py-3 px-3 text-slate-600 leading-relaxed">{doc.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Discrepancies Table */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <h3 className="font-serif text-lg font-semibold text-slate-900">
              Documented Source Inconsistencies &amp; Editorial Anomalies ({DISCREPANCY_RECORDS.length} Items)
            </h3>
          </div>
          <p className="text-xs text-slate-600 mb-3">
            Per strict documentation rules, conflicting or ambiguous entries between the transcript and official
            syllabi are never silently corrected; every discrepancy is surfaced below with its portfolio treatment.
          </p>

          <div className="overflow-x-auto border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono uppercase">
                  <th className="py-2.5 px-3 w-44">Issue / Area</th>
                  <th className="py-2.5 px-3 w-36">Scope</th>
                  <th className="py-2.5 px-3">Transcript Record</th>
                  <th className="py-2.5 px-3">Syllabus / Source Record</th>
                  <th className="py-2.5 px-3">Treatment &amp; Verification Needed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 align-top">
                {DISCREPANCY_RECORDS.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-50/70">
                    <td className="py-3 px-3 font-semibold text-slate-900">{d.area}</td>
                    <td className="py-3 px-3 font-mono text-slate-600">{d.semesterOrScope}</td>
                    <td className="py-3 px-3 text-slate-700 leading-relaxed">{d.transcriptRecord}</td>
                    <td className="py-3 px-3 text-slate-700 leading-relaxed">{d.syllabusOrOtherRecord}</td>
                    <td className="py-3 px-3 text-slate-700 leading-relaxed space-y-1">
                      <div>
                        <strong>Treatment:</strong> {d.treatmentInPortfolio}
                      </div>
                      <div className="text-amber-900">
                        <strong>Action:</strong> {d.verificationNeeded}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Unverified Academic Data & Unavailable Workload Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="border border-slate-200 p-4 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-slate-900 text-sm">
              <HelpCircle className="w-4 h-4 text-blue-900" />
              Academic Data Requiring Further Official Verification
            </div>
            <ul className="list-disc pl-4 space-y-1.5 text-slate-700 leading-relaxed">
              <li>
                Exact institutional rule behind the verbatim <span className="font-mono">@3</span> suffix in{' '}
                <span className="font-mono">37@3</span> (<span className="font-mono">UGDS1CSEP320</span>) and{' '}
                <span className="font-mono">77@3</span> (<span className="font-mono">UGDS5BDA0422</span>,{' '}
                <span className="font-mono">UGDS6IOT0522</span>).
              </li>
              <li>
                Formal registrar crosswalk linking transcript <span className="font-mono">UGDS...</span> codes to
                syllabus <span className="font-mono">TCSCUSDS...</span> codes, plus confirmation that{' '}
                <span className="font-mono">UGDS3PAS0420</span> in Semester II is a code-prefix typo for{' '}
                <span className="font-mono">TCSCUSDS204</span>.
              </li>
              <li>
                Official maximum marks and project scope documentation for Semester VI{' '}
                <span className="font-mono">UGDS6PRIP422</span> (Project Implementation, 102 marks obtained), as
                well as scope clarification for Semester V Project Stage I / Seminar Stage I naming differences.
              </li>
              <li>
                Missing Unit V topics in <span className="font-mono">TCSCUSDS205</span> (Python Programming) where
                Unit II text was erroneously duplicated in the FY syllabus PDF, and confirmation of whether VBA was
                practically covered in <span className="font-mono">UGDS1DAS0520</span>.
              </li>
            </ul>
          </div>

          <div className="border border-slate-200 p-4 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-slate-900 text-sm">
              <HelpCircle className="w-4 h-4 text-blue-900" />
              Workload Information Not Available in Uploaded Documents
            </div>
            <ul className="list-disc pl-4 space-y-1.5 text-slate-700 leading-relaxed">
              <li>
                Exact number of instructional weeks per semester actually delivered (necessary to reconcile{' '}
                <span className="font-mono">50 Min × 04</span> on transcript vs.{' '}
                <span className="font-mono">5 periods/week</span> on syllabus).
              </li>
              <li>
                Total semester-wise practical/laboratory contact hours actually attended (and individual lab exercise
                lists beyond &ldquo;10 Practicals covering the syllabus&rdquo;).
              </li>
              <li>
                Independent study hours, homework/assignment hours, tutorial preparation, project work hours, and
                examination preparation hours.
              </li>
              <li>
                Maximum marks per course on the official transcript (and Credits Registered column), plus official
                total student workload hours per Indian credit required for any formal ECTS comparison.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
