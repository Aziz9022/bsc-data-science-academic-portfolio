export type SectionId =
  | 'overview'
  | 'transcript'
  | 'catalogue'
  | 'subjects'
  | 'quant'
  | 'cs-de'
  | 'workload'
  | 'admissions'
  | 'sources';

export type CourseComponentType = 'Theory' | 'Practical' | 'Project';

export type ConfidenceLevel = 'High' | 'Medium' | 'Limited';

export type EvaluationStatus =
  | 'Documented relevant coursework'
  | 'Partial content match'
  | 'Insufficient evidence'
  | 'No identified coursework'
  | 'Requires university evaluation';

export interface TranscriptCourse {
  id: string;
  semester: 1 | 2 | 3 | 4 | 5 | 6;
  courseCode: string;
  exactTitle: string;
  componentType: CourseComponentType;
  pairedTheoryCode?: string;
  pairedPracticalCode?: string;
  credits: number;
  marksObtained: string;
  maxMarksInTranscript: string;
  grade: string;
  gradePoint: number;
  cg: number;
  transcriptDurationPerSession: string;
  transcriptSessionsPerWeek: string;
  sourcePage: number;
  primarySubjectId: string;
  syllabusCode?: string;
  verificationNote?: string;
}

export interface SemesterSummary {
  semester: 1 | 2 | 3 | 4 | 5 | 6;
  roman: string;
  academicYearLevel: string;
  examSession: string;
  courseCount: number;
  creditsRegistered: string;
  creditsEarned: number;
  sumOfCourseCredits: number;
  marksObtainedTotal: number;
  cgTotal: number;
  sgpi: number;
  grade: string;
  resultStatus: 'Successful';
  sourcePage: number;
}

export interface SyllabusUnit {
  unit: string;
  titleAndTopics: string;
  lectures: number | null;
}

export interface BookReference {
  title: string;
  authors: string;
  publisher?: string;
  edition?: string;
  year?: string;
}

export interface SyllabusDetail {
  syllabusCode: string;
  syllabusTitle: string;
  semesterLabelInSource: string;
  componentType: CourseComponentType;
  pairedSyllabusCode?: string;
  periodsPerWeek: string;
  periodDuration: string;
  practicalCountNote?: string;
  credits: number;
  examHours: string;
  externalMaxMarks: string;
  internalMaxMarks: string;
  internalBreakdown?: string;
  objectives: string[];
  courseOutcome: string[];
  units: SyllabusUnit[];
  references: BookReference[];
  sourceDocument: string;
  sourceSectionNote: string;
  discrepancyNote?: string;
}

export interface SubjectAreaMapping {
  id: string;
  number: number;
  name: string;
  primaryCourseCodes: string[];
  secondaryCourseCodes: string[];
  primaryCredits: number;
  theoryCredits: number;
  practicalOrProjectCredits: number;
  relevantTopics: string[];
  theoryPracticalEvidence: string;
  confidence: ConfidenceLevel;
  explanation: string;
  limitations?: string;
}

export interface TopicCourseLink {
  topic: string;
  discipline: 'Mathematics' | 'Probability and Statistics' | 'Computer Science' | 'Data Engineering';
  subCategory: string;
  documentedStatus: 'Documented' | 'Partial / Application-Oriented';
  courseLinks: {
    transcriptCode: string;
    courseTitle: string;
    semester: number;
    unitReference: string;
    evidenceExcerpt: string;
  }[];
  notes?: string;
}

export interface WorkloadEvidenceRow {
  item: string;
  syllabusStatement: string;
  transcriptStatement: string;
  safelyDerived: string;
  missingOrNotEstablished: string;
}

export interface SourceDocumentRecord {
  id: string;
  name: string;
  issuingInstitution: string;
  documentType: string;
  dateOrAcademicYear: string;
  referenceDetails: string;
  publicStatus: 'Public Academic Summary' | 'Private Original (Submit via Portal Only)' | 'Published Open Access Paper';
  notes: string;
}

export interface DiscrepancyRecord {
  id: string;
  area: string;
  semesterOrScope: string;
  transcriptRecord: string;
  syllabusOrOtherRecord: string;
  treatmentInPortfolio: string;
  verificationNeeded: string;
}

export interface AdmissionComparisonRow {
  id: string;
  universityRequirement: string;
  relevantCourseCodes: string[];
  syllabusEvidence: string;
  institutionalCredits: string;
  workloadEvidence: string;
  evaluation: EvaluationStatus;
}
