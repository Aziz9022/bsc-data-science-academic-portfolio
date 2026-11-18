export const STUDENT_PROFILE = {
  applicantName: 'Kanoor Abdulaziz Mehmood Dilshad',
  degreeTitle: 'Bachelor of Science (Data Science)',
  specialisation: 'Data Science',
  institution: 'Thakur College of Science & Commerce',
  institutionStatus:
    'Empowered autonomous college permanently affiliated with the University of Mumbai',
  affiliatingUniversity: 'University of Mumbai',
  location: 'Mumbai, Maharashtra, India',
  programmeDuration: '3 Years (6 Semesters)',
  semesterCount: 6,
  graduationStatus: 'Successfully Completed (April 2025 Examination)',
  transcriptIssueDate: '16 October 2025',
  creditSystem: 'Choice Based Credit System (CBCS)',
  totalInstitutionalCredits: 120,
  creditsPerSemester: 20,
  totalTranscriptEntries: 60,
  finalCgpa: '8.85',
  finalGrade: 'A',
  mediumOfInstruction: 'English',
  totalMarksObtained: 3414,
  targetMasterDisciplines: [
    'Data Science',
    'Artificial Intelligence',
    'Data Engineering',
    'Computer Science',
    'Applied Statistics',
  ],
};

export const RESEARCH_PUBLICATION = {
  title: 'Comparative Analysis of Deep Neural Networks for Automated Ocular Disease Detection',
  journal: 'Journal of Emerging Technologies and Innovative Research (JETIR)',
  issn: '2349-5162',
  volumeIssue: 'Volume 12, Issue 3',
  publicationDate: '4 March 2025',
  paperId: 'JETIR2503018',
  pages: 'a136–a145',
  authors: 'Manas Negi, Abdul Aziz Kanoor (UG Students); Mentor: Asst. Prof. Femenca Noronha',
  affiliation: 'Department of Data Science, Thakur College of Science & Commerce, Mumbai',
  summary:
    'Empirical benchmark evaluating VGG16, ResNet50, DenseNet121, and InceptionV3 on the ODIR-5K retinal fundus image dataset (5,000 patients, 8 diagnostic classes) using TensorFlow tf.data pipelines, mixed-precision GPU training, standardized preprocessing, and ROC AUC / F1 / parameter-efficiency analysis.',
  keyMetricsReported: [
    'DenseNet121: 66.21% validation accuracy, 0.9048 ROC AUC, 8,620,104 parameters',
    'InceptionV3: 63.75% validation accuracy, 0.9070 ROC AUC, 24,438,056 parameters',
    'VGG16: 57.49% validation accuracy, 0.8751 ROC AUC, 15,770,952 parameters',
    'ResNet50: 45.68% validation accuracy, 0.7582 ROC AUC, 26,222,984 parameters',
  ],
  certificateRegistrationId: '556189',
  codeRepositoryUrl:
    'https://github.com/Tempest-Kohaku/Comparative-Study-of-DNN-for-Ocular-Disease-Detection.git',
};

export const AUDIT_CHECKLIST_ITEMS = [
  { label: 'Semesters documented', value: '6 / 6 (Semesters I–VI)', verified: true },
  { label: 'Transcript course entries', value: '60 / 60 (10 per semester)', verified: true },
  { label: 'Credits per semester', value: '20 University of Mumbai / TCSC Institutional Credits', verified: true },
  { label: 'Total institutional credits', value: '120 (60 Theory + 58 Practical + 2 Project)', verified: true },
  { label: 'Final CGPA / Final Grade', value: '8.85 / A (SGPI range 8.00–9.20)', verified: true },
  { label: 'Failed semesters or backlogs', value: '0 indicated (All 6 semesters marked Successful)', verified: true },
  { label: 'Automatic ECTS conversion', value: 'None applied (Prohibited — independent assessment only)', verified: true },
];
