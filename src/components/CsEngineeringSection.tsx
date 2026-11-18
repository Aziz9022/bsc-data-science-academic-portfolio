import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CS_DE_TOPIC_LINKS } from '../data/analysisData';

interface CsEngineeringSectionProps {
  onNavigateToCourse: (courseCode: string) => void;
}

export const CsEngineeringSection: React.FC<CsEngineeringSectionProps> = ({
  onNavigateToCourse,
}) => {
  const [filterDiscipline, setFilterDiscipline] = useState<'all' | 'Computer Science' | 'Data Engineering'>('all');

  const visibleTopics = CS_DE_TOPIC_LINKS.filter((t) =>
    filterDiscipline === 'all' ? true : t.discipline === filterDiscipline
  );

  return (
    <section id="cs-de" className="space-y-6">
      <div className="bg-white border border-slate-200 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-900">
              Section F · Computing Systems, Languages &amp; Data Pipelines
            </p>
            <h2 className="font-serif text-2xl font-semibold text-slate-900 mt-1">
              Computer Science and Data Engineering Detail
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Documents only programming languages, systems, databases, big data frameworks, and AI/ML tools
              explicitly verified in the uploaded syllabi—linked directly to official courses and syllabus units.
              Tools absent from the official syllabi are not claimed.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 shrink-0">
            {(['all', 'Computer Science', 'Data Engineering'] as const).map((tab) => (
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
                {tab === 'all' ? `All Topics (${CS_DE_TOPIC_LINKS.length})` : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Verified Technology Coverage Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 text-xs">
          <div className="border border-slate-200 bg-slate-50 p-3.5">
            <div className="font-mono uppercase text-[10px] text-slate-500 mb-1">
              Languages Documented
            </div>
            <div className="text-slate-900 font-medium">
              C · C++ · Python · R · Java (Java EE) · SQL · PL/SQL
            </div>
          </div>
          <div className="border border-slate-200 bg-slate-50 p-3.5">
            <div className="font-mono uppercase text-[10px] text-slate-500 mb-1">
              Python &amp; R Libraries Listed
            </div>
            <div className="text-slate-900 font-medium">
              NumPy · SciPy · Pandas · Matplotlib · Seaborn · Tkinter · SQLite3 · dplyr · tidyr · ggplot2
            </div>
          </div>
          <div className="border border-slate-200 bg-slate-50 p-3.5">
            <div className="font-mono uppercase text-[10px] text-slate-500 mb-1">
              Big Data &amp; Storage Ecosystem
            </div>
            <div className="text-slate-900 font-medium">
              Hadoop · HDFS · MapReduce · Spark · PySpark · Hive · HBase · Pig · Sqoop · Flume · MongoDB
            </div>
          </div>
          <div className="border border-slate-200 bg-slate-50 p-3.5">
            <div className="font-mono uppercase text-[10px] text-slate-500 mb-1">
              BI, Cloud &amp; IoT Protocols
            </div>
            <div className="text-slate-900 font-medium">
              Tableau · Power BI · AWS/Azure/GAE · MQTT · CoAP · XMPP · Arduino/RPi
            </div>
          </div>
        </div>

        {/* Topic Breakdown */}
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
                  {item.documentedStatus}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {item.courseLinks.map((link) => (
                  <div
                    key={`${item.topic}-${link.transcriptCode}`}
                    className="border border-slate-200 p-3.5 text-xs space-y-1.5"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
