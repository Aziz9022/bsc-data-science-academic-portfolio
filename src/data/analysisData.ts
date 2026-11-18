import {
  AdmissionComparisonRow,
  DiscrepancyRecord,
  SourceDocumentRecord,
  SubjectAreaMapping,
  TopicCourseLink,
  WorkloadEvidenceRow,
} from '../types/academic';

/**
 * 17 REQUIRED SUBJECT AREAS — PRIMARY CREDIT ALLOCATION
 * Strictly reconciles to 120 University of Mumbai / TCSC Institutional Credits
 * with ZERO double-counting across courses. Secondary topic appearances in other
 * courses are listed separately under secondaryCourseCodes.
 */
export const SUBJECT_AREA_MAPPINGS: SubjectAreaMapping[] = [
  {
    id: 'mathematics',
    number: 1,
    name: 'Mathematics',
    primaryCourseCodes: ['UGDS1LAC0420', 'UGDS1LACP420'],
    secondaryCourseCodes: ['UGDS3PAS0420', 'UGDS4SSM0121', 'UGDS6MAL0122'],
    primaryCredits: 4,
    theoryCredits: 2,
    practicalOrProjectCredits: 2,
    relevantTopics: [
      'Determinants and Matrix algebra (Symmetric, Skew-Symmetric, Hermitian, Orthogonal matrices, Rank/Echelon forms, Linear systems)',
      'Eigenvalues, Eigenvectors, Eigenspaces, Cayley-Hamilton theorem, Matrix similarity & Diagonalization',
      'Abstract algebra basics (Groups, Rings, Ideals, Fields) & Real Vector Spaces (n-D vectors, norm, subspaces, linear independence, dimension)',
      'Multivariable Differential Calculus (Partial derivatives, Total differentials, Maxima/Minima of two variables, Jacobian & Hessian matrices)',
      'Integral Calculus & Special Functions (Beta & Gamma functions, Double & Triple integrals in Cartesian, cylindrical, spherical polar coordinates)',
    ],
    theoryPracticalEvidence:
      '1 Theory course (UGDS1LAC0420, 2 credits, 60 documented unit lectures) paired with 1 Practical course (UGDS1LACP420, 2 credits, 10 practicals noted in syllabus). Grade B+ (Theory) and O (Practical).',
    confidence: 'High',
    explanation:
      'Linear Algebra and Multivariable Calculus are explicitly documented in Semester I under TCSCUSDS104 / UGDS1LAC0420. Mathematical optimization, eigenvalues (PCA), and multivariable derivations also underpin later statistics and ML modules.',
    limitations:
      'Only one dedicated Mathematics theory + practical pair exists in the curriculum. Discrete Mathematics, Graph Theory (as a standalone math course), Real Analysis, and Measure Theory are not present as standalone mathematics courses.',
  },
  {
    id: 'probability-statistics',
    number: 2,
    name: 'Probability and Statistics',
    primaryCourseCodes: [
      'UGDS3PAS0420',
      'UGDS2PASP420',
      'UGDS3SDS0121',
      'UGDS3SDSP121',
      'UGDS4SSM0121',
      'UGDS4SSMP121',
    ],
    secondaryCourseCodes: ['UGDS1IDS0120', 'UGDS1DAS0520', 'UGDS5BDA0422', 'UGDS6MAL0122'],
    primaryCredits: 12,
    theoryCredits: 6,
    practicalOrProjectCredits: 6,
    relevantTopics: [
      'Descriptive statistics, moments, skewness, kurtosis, Pearson & Spearman rank correlation, least-squares regression',
      'Probability axioms, conditional probability, independence, random variables, expectation, Binomial & Normal distributions',
      'Estimation theory (unbiasedness, efficiency, confidence intervals) & Hypothesis testing (Type I/II errors, power, p-value, t, F, Chi-square)',
      'Survey sampling designs (SRS, Stratified, Systematic, Ratio & Regression estimation, Cluster & Two-Stage sampling, Non-sampling errors)',
      'Time Series Analysis (Trend, Seasonal, Cyclical, Box-Jenkins, Stationarity, ACF/PACF, ARIMA) & Stochastic Simulation (LCG, Monte Carlo, Box-Muller)',
      'Multivariate Analysis (Multivariate Normal, Multiple & Polynomial Regression, PCA, Factor Analysis, Cluster Analysis)',
    ],
    theoryPracticalEvidence:
      '3 Theory + 3 Practical pairs across Semesters II, III, and IV (total 12 institutional credits). High performance: Grades A/O (Sem II), A+/O (Sem III), O/A (Sem IV).',
    confidence: 'High',
    explanation:
      'Continuous three-semester quantitative sequence progressing from probability axioms and parametric hypothesis testing (Sem II) through survey sampling and time series (Sem III) to Monte Carlo simulation and multivariate methods (Sem IV).',
    limitations:
      'Mathematical proofs are application-oriented rather than measure-theoretic (e.g., sigma-algebras and Lebesgue integration are not included in the syllabus text).',
  },
  {
    id: 'programming',
    number: 3,
    name: 'Programming and Software Development',
    primaryCourseCodes: [
      'UGDS1EPC0220',
      'UGDS1EPCP220',
      'UGDS2EPC0120',
      'UGDS2EPCP120',
      'UGDS2PYP0520',
      'UGDS2PYPP520',
      'UGDS3ARP0421',
      'UGDS3ARPP421',
      'UGDS4APP0521',
      'UGDS4APPP521',
      'UGDS6ENJ0322',
      'UGDS6ENJP322',
    ],
    secondaryCourseCodes: ['UGDS1IDS0120', 'UGDS3DSA0521', 'UGDS5BDA0422', 'UGDS6IOT0522'],
    primaryCredits: 24,
    theoryCredits: 12,
    practicalOrProjectCredits: 12,
    relevantTopics: [
      'Procedural programming in C (pointers, arrays, functions, recursion, structures, unions, preprocessor directives)',
      'Object-Oriented Programming in C++ (classes, operator overloading, virtual functions, multiple inheritance, templates, exceptions, file I/O)',
      'Python Programming (core syntax, OOP, GUI/Tkinter, regex, SQLite connectivity, NumPy, SciPy, Pandas, Matplotlib, Seaborn, Socket programming)',
      'Advanced R Programming (data structures, control flow, tidy/reshape packages, statistical computing, plotting, text mining packages)',
      'Enterprise Java / Java EE (Servlets, JSP, JSTL, JDBC, EJB, JNDI, JPA, Hibernate ORM)',
    ],
    theoryPracticalEvidence:
      '6 Theory + 6 Practical pairs across Semesters I, II, III, IV, and VI (24 institutional credits). Practical marks in C++, Python, R, Advance Python, and Enterprise Java range from 43 to 50.',
    confidence: 'High',
    explanation:
      'Largest single credit group in the degree, covering systems/procedural (C), OOP (C++), scientific data ecosystems (Python, R), and enterprise backend frameworks (Java EE).',
    limitations:
      'In the official FY syllabus for Python Programming (TCSCUSDS205), Unit V contains an editorial duplication of Unit II text; additionally, TCSCUSDS603 (Enterprise Java) Course Outcome text has a copy-paste reference to Python.',
  },
  {
    id: 'algorithms-ds',
    number: 4,
    name: 'Algorithms and Data Structures',
    primaryCourseCodes: ['UGDS3DSA0521', 'UGDS3DSAP521'],
    secondaryCourseCodes: ['UGDS1EPC0220', 'UGDS5ARI0222', 'UGDS6MAL0122'],
    primaryCredits: 4,
    theoryCredits: 2,
    practicalOrProjectCredits: 2,
    relevantTopics: [
      'Asymptotic time and space complexity (Big-O, Big-Omega, Big-Theta, best/worst/average case)',
      'Linear structures: Arrays, Singly/Doubly/Circular Linked Lists, Stacks (infix/postfix/recursion), Queues (circular, priority, dequeue)',
      'Trees & Hashing: Binary Trees, BST, AVL Trees, Binary Heaps, Heap Sort, Hash tables & collision resolution',
      'Searching & Sorting: Linear/Binary Search, Bubble, Selection, Insertion, Shell, Merge, Quick, Radix Sort',
      'Graphs & Paradigms: Adjacency Matrix/List, BFS, DFS, Shortest Path (Dijkstra), MST (Prim, Kruskal), Greedy, Divide & Conquer, Dynamic Programming',
    ],
    theoryPracticalEvidence:
      '1 Theory + 1 Practical pair in Semester III (UGDS3DSA0521 Grade A; UGDS3DSAP521 marks 47, Grade O), using Python implementation per syllabus reference.',
    confidence: 'High',
    explanation:
      'Dedicated undergraduate Data Structures & Algorithms course covering standard linear structures, balanced trees, graph traversals, shortest paths, and core algorithm design paradigms.',
    limitations:
      'Covered in a single 4-credit semester pair rather than multi-semester algorithm engineering, NP-completeness proofs, or randomized/approximation algorithm sequences.',
  },
  {
    id: 'theoretical-cs',
    number: 5,
    name: 'Theoretical Computer Science',
    primaryCourseCodes: [],
    secondaryCourseCodes: ['UGDS2DMS0220', 'UGDS3DSA0521', 'UGDS5ARI0222', 'UGDS6MAL0122'],
    primaryCredits: 0,
    theoryCredits: 0,
    practicalOrProjectCredits: 0,
    relevantTopics: [
      'No standalone Theoretical Computer Science course exists in the curriculum.',
      'Related formal/theoretical topics appear inside other courses: Relational Algebra & Tuple/Domain Relational Calculus (UGDS2DMS0220 Unit III); Asymptotic complexity analysis (UGDS3DSA0521 Unit I); Propositional Logic, First-Order Logic, Unification & Resolution (UGDS5ARI0222 Units III–IV); VC Dimension & Growth Functions (UGDS6MAL0122 Unit II).',
    ],
    theoryPracticalEvidence:
      '0 primary credits. Topic-level coverage only inside DBMS, DSA, AI, and ML.',
    confidence: 'Limited',
    explanation:
      'Because German CS Master’s programmes often distinguish Theoretical Computer Science (Automata, Formal Languages, Computability, Complexity Theory P/NP), this portfolio explicitly assigns 0 primary credits here rather than overstating coverage.',
    limitations:
      'Formal Languages, Finite Automata, Turing Machines, Computability, and NP-Completeness reductions are NOT documented in any syllabus file.',
  },
  {
    id: 'dbms',
    number: 6,
    name: 'Database Management Systems',
    primaryCourseCodes: ['UGDS2DMS0220', 'UGDS2DMSP220', 'UGDS3ADS0221', 'UGDS3ADSP221'],
    secondaryCourseCodes: ['UGDS4DWD0221', 'UGDS5BDA0422', 'UGDS6ENJ0322'],
    primaryCredits: 8,
    theoryCredits: 4,
    practicalOrProjectCredits: 4,
    relevantTopics: [
      'ER/EER modeling, Codd’s rules, Normalization (1NF, 2NF, 3NF, BCNF), Relational Algebra & Calculus',
      'SQL (DDL, DML, joins, nested subqueries, views, integrity constraints, aggregate functions)',
      'Transaction management (ACID, serializability, 2PL, deadlocks, timestamping, recovery)',
      'Advanced SQL & PL/SQL (stored procedures, functions, cursors, triggers, packages), NoSQL & JSON/MongoDB introduction',
      'Distributed & Parallel Databases, Object-Relational concepts, Database security & query optimization',
    ],
    theoryPracticalEvidence:
      '2 Theory + 2 Practical pairs in Semesters II and III (8 institutional credits). Semester III Advance SQL achieved 85/O (Theory) and 50/O (Practical).',
    confidence: 'High',
    explanation:
      'Two-semester database sequence combining theoretical relational modeling, concurrency/recovery, procedural SQL (PL/SQL), and an introduction to NoSQL/distributed databases.',
  },
  {
    id: 'data-engineering',
    number: 7,
    name: 'Data Engineering and Big Data',
    primaryCourseCodes: ['UGDS4DWD0221', 'UGDS4DWDP221', 'UGDS5BDA0422', 'UGDS5BDAP422'],
    secondaryCourseCodes: ['UGDS3ADS0221', 'UGDS6CLC0222'],
    primaryCredits: 8,
    theoryCredits: 4,
    practicalOrProjectCredits: 4,
    relevantTopics: [
      'Data Warehousing architectures, Dimensional modeling (Star, Snowflake, Fact Constellation schemas), OLAP vs OLTP',
      'ETL / Data Extraction, Transformation, Loading & Data Quality / Integration',
      'Data Mining foundations (Frequent itemsets, Apriori, Classification, Clustering) in TCSCUSDS402',
      'Hadoop Ecosystem: HDFS architecture, MapReduce (including Python Hadoop Streaming), YARN/distributed pipeline concepts',
      'Apache Spark & PySpark in-memory processing, Hive, HBase, Pig, Sqoop (RDBMS ingestion), Flume (stream ingestion)',
    ],
    theoryPracticalEvidence:
      '2 Theory + 2 Practical pairs in Semesters IV and V (8 institutional credits). Marks: DW&DM 63(A)/50(O), Big Data Analytics 77@3(O)/50(O).',
    confidence: 'High',
    explanation:
      'Directly addresses data warehousing, ETL pipelines, and distributed big data processing using Hadoop, HDFS, MapReduce, Spark/PySpark, Hive, HBase, Sqoop, and Flume.',
    limitations:
      'Apache Kafka, Airflow, dbt, and Flink are not documented in the uploaded syllabi.',
  },
  {
    id: 'artificial-intelligence',
    number: 8,
    name: 'Artificial Intelligence',
    primaryCourseCodes: ['UGDS5ARI0222', 'UGDS5ARIP222'],
    secondaryCourseCodes: ['UGDS5BIT0322', 'UGDS6MAL0122'],
    primaryCredits: 4,
    theoryCredits: 2,
    practicalOrProjectCredits: 2,
    relevantTopics: [
      'Intelligent agents and task environments',
      'Uninformed and informed/heuristic search, local search, online search agents',
      'Adversarial search & games (Minimax, Alpha-Beta pruning, stochastic & partially observable games)',
      'Propositional logic, model checking, First-Order Logic, unification, forward/backward chaining, resolution',
      'Classical planning, state-space planning, planning graphs, hierarchical & multi-agent planning, Knowledge Representation',
    ],
    theoryPracticalEvidence:
      '1 Theory + 1 Practical pair in Semester V (UGDS5ARI0222: 74 marks, A+; UGDS5ARIP222: 34 marks, A). Textbook: Russell & Norvig.',
    confidence: 'High',
    explanation:
      'Classical symbolic AI, search, game playing, logic, automated planning, and knowledge representation taught in Semester V prior to Semester VI Machine Learning.',
  },
  {
    id: 'machine-learning',
    number: 9,
    name: 'Machine Learning',
    primaryCourseCodes: ['UGDS6MAL0122', 'UGDS6MALP122'],
    secondaryCourseCodes: ['UGDS4DWD0221', 'UGDS5BIT0322', 'UGDS5BDA0422'],
    primaryCredits: 4,
    theoryCredits: 2,
    practicalOrProjectCredits: 2,
    relevantTopics: [
      'ML workflow, Feature Construction, Transformation & Selection, Geometric/Logical/Probabilistic models',
      'Generalization theory: Overfitting, Polynomial Regression, Growth Function, VC Dimension, Regularization',
      'Linear models & Kernels: Least squares, Multivariate Linear/Regularized Regression, Perceptron, Soft Margin SVM, Kernel methods',
      'Instance, Rule & Tree models: k-NN, K-means, Hierarchical Clustering, Association Rules, Decision/Regression/Clustering Trees',
      'Probabilistic & Ensemble models: Naïve Bayes, Maximum Likelihood, EM, Gaussian Mixtures, Bagging, Boosting, Deep Learning & RL overview',
    ],
    theoryPracticalEvidence:
      '1 Theory + 1 Practical pair in Semester VI (UGDS6MAL0122: 72 marks, A+; UGDS6MALP122: 48 marks, O). Textbook: Peter Flach; Hastie, Tibshirani & Friedman.',
    confidence: 'High',
    explanation:
      'Core Machine Learning course complemented by statistical/ML topics introduced earlier in Data Mining (Sem IV), Business Intelligence (Sem V), and Big Data Analytics (Sem V), plus external undergraduate research on Deep Neural Networks (JETIR2503018).',
    limitations:
      'Deep Learning and Reinforcement Learning appear only as survey topics in Unit V of TCSCUSDS601 rather than dedicated semester-long courses.',
  },
  {
    id: 'data-analytics-bi',
    number: 10,
    name: 'Data Analytics and Business Intelligence',
    primaryCourseCodes: [
      'UGDS1IDS0120',
      'UGDS1IDSP120',
      'UGDS1DAS0520',
      'UGDS1DASP520',
      'UGDS5BIT0322',
      'UGDS5BITP322',
    ],
    secondaryCourseCodes: ['UGDS4DWD0221', 'UGDS4DAV0421', 'UGDS5BDA0422'],
    primaryCredits: 12,
    theoryCredits: 6,
    practicalOrProjectCredits: 6,
    relevantTopics: [
      'Data Science lifecycle, volume/velocity/variety, web scraping & text preprocessing, R analytics basics (UGDS1IDS0120)',
      'Spreadsheet modeling, database functions, PivotTables, frequency tables, Chi-square tests in Excel (UGDS1DAS0520)',
      'Decision Support Systems, BI architectures, Data validation/transformation/reduction (UGDS5BIT0322)',
      'BI predictive analytics (Logistic Regression, SVM, Neural Networks, Clustering), Supply Chain/Revenue optimization, DEA (CCR model)',
      'Dashboarding and interactive BI reporting using Tableau / Power BI',
    ],
    theoryPracticalEvidence:
      '3 Theory + 3 Practical pairs in Semesters I and V (12 institutional credits). Note title difference for UGDS1IDS0120 ("Introduction to Data Science" vs "Basics of Data Science") and UGDS1DAS0520 ("Spread Sheet" vs "(VBA)").',
    confidence: 'High',
    explanation:
      'Spans introductory data science concepts, spreadsheet statistical analysis, and enterprise decision support / BI tooling.',
  },
  {
    id: 'data-visualization',
    number: 11,
    name: 'Data Visualization',
    primaryCourseCodes: ['UGDS4DAV0421', 'UGDS4DAVP421'],
    secondaryCourseCodes: ['UGDS1IDS0120', 'UGDS4APP0521', 'UGDS5BIT0322'],
    primaryCredits: 4,
    theoryCredits: 2,
    practicalOrProjectCredits: 2,
    relevantTopics: [
      'Visual encoding, pre-attentive processing, color/scale/form selection, Gestalt design principles',
      'Statistical graphics: bar/line/area charts, histograms, box plots, scatter plots, heatmaps, geospatial/maps, network visuals',
      'Data preparation, cleaning, missing value handling, joins/aggregation, and interactive dashboard storytelling',
    ],
    theoryPracticalEvidence:
      '1 Theory + 1 Practical pair in Semester IV (UGDS4DAV0421: 85 marks, Grade O; UGDS4DAVP421: 46 marks, Grade O).',
    confidence: 'High',
    explanation:
      'Dedicated course on analytical visual design and data preparation in Semester IV, reinforced by Matplotlib/Seaborn (Advance Python) and Tableau/Power BI (Sem V).',
  },
  {
    id: 'operating-systems',
    number: 12,
    name: 'Operating Systems and Computer Systems',
    primaryCourseCodes: ['UGDS2OPS0320', 'UGDS2OPSP320'],
    secondaryCourseCodes: ['UGDS6CLC0222', 'UGDS6IOT0522'],
    primaryCredits: 4,
    theoryCredits: 2,
    practicalOrProjectCredits: 2,
    relevantTopics: [
      'OS structures, system calls, processes, threads, inter-process communication (IPC), CPU scheduling',
      'Memory management: address spaces, virtual memory, paging, page replacement algorithms, segmentation, file system implementation',
      'I/O subsystems, deadlock detection/avoidance/prevention, Type 1 & 2 hypervisors, virtualization, Linux/Android/Windows case studies',
    ],
    theoryPracticalEvidence:
      '1 Theory + 1 Practical pair in Semester II (UGDS2OPS0320: 60 marks, Grade A; UGDS2OPSP320: 50 marks, Grade O). Textbook: Tanenbaum & Bos; Silberschatz.',
    confidence: 'High',
    explanation:
      'Core systems fundamentals covering concurrency/IPC, virtual memory, file systems, deadlocks, and virtualization.',
    limitations:
      'Digital Logic Design, Computer Architecture / Assembly Language, and Compiler Design are not present as standalone courses.',
  },
  {
    id: 'cloud-distributed',
    number: 13,
    name: 'Cloud Computing and Distributed Systems',
    primaryCourseCodes: ['UGDS6CLC0222', 'UGDS6CLCP222'],
    secondaryCourseCodes: ['UGDS2OPS0320', 'UGDS3ADS0221', 'UGDS5BDA0422'],
    primaryCredits: 4,
    theoryCredits: 2,
    practicalOrProjectCredits: 2,
    relevantTopics: [
      'Parallel vs Distributed Computing fundamentals, Virtualization taxonomy, hypervisors, virtual servers & storage',
      'Cloud Service Models (IaaS, PaaS, SaaS), Deployment Models, AWS / Azure / Google App Engine architectures',
      'Cloud Security (PKI, IAM, SSO, encryption, security groups), Load Balancing, Auto-scaling, SLA & failover architectures',
    ],
    theoryPracticalEvidence:
      '1 Theory + 1 Practical pair in Semester VI (UGDS6CLC0222: 72 marks, A+; UGDS6CLCP222: 50 marks, O).',
    confidence: 'High',
    explanation:
      'Focuses on cloud architectures, virtualization, scalability, security, and SLA mechanisms. Parallel distributed data computation also appears in Sem V Big Data Analytics (HDFS/MapReduce/Spark).',
    limitations:
      'Formal distributed consensus protocols (Paxos, Raft, vector clocks) are not itemized in the syllabus units.',
  },
  {
    id: 'software-engineering',
    number: 14,
    name: 'Software Engineering',
    primaryCourseCodes: [
      'UGDS4ASE0321',
      'UGDS4ASEP321',
      'UGDS5SPM0122',
      'UGDS5SPMP122',
      'UGDS6PRIP422',
    ],
    secondaryCourseCodes: ['UGDS6ENJ0322'],
    primaryCredits: 10,
    theoryCredits: 4,
    practicalOrProjectCredits: 6,
    relevantTopics: [
      'Agile Software Engineering: SDLC models, Agile Manifesto, Scrum, Extreme Programming (XP), Kanban, User Stories',
      'Software design, DevOps/CI-CD concepts, Software Testing (unit, integration, system, regression, TDD)',
      'Software Project Management: COCOMO II, Function Points, Critical Path Method (CPM), PERT, Monte Carlo risk simulation, Earned Value Analysis, ISO 9126',
      'Capstone Project Implementation (UGDS6PRIP422 — 2 credits in Semester VI)',
    ],
    theoryPracticalEvidence:
      '2 Theory + 2 Practical pairs across Semesters IV and V (8 credits) plus 1 Project Implementation course in Semester VI (UGDS6PRIP422, 2 credits, 102 marks, Grade A).',
    confidence: 'Medium',
    explanation:
      'Covers agile engineering practices, software estimation, project risk/quality management, and practical project execution.',
    limitations:
      'Two specific documentation ambiguities affect this group: (1) Sem V UGDS5SPMP122 is titled "Practical of Software Project Management" on the transcript but "Project Stage I" in the TY syllabus; (2) Sem VI UGDS6PRIP422 ("Project Implementation", 102 marks) lacks a dedicated unit table in tyds_syllabus.txt (only bulleted as "Internship/Project Stage-II").',
  },
  {
    id: 'networks-iot',
    number: 15,
    name: 'Computer Networks and Internet of Things',
    primaryCourseCodes: ['UGDS6IOT0522', 'UGDS6IOTP522'],
    secondaryCourseCodes: ['UGDS4APP0521', 'UGDS6CLC0222'],
    primaryCredits: 4,
    theoryCredits: 2,
    practicalOrProjectCredits: 2,
    relevantTopics: [
      'TCP/IP suite, IP/IPv6, DNS, MAC addressing, TCP/UDP ports, HTTP/HTTPS',
      'IoT application protocols: MQTT, XMPP, CoAP, APIs, Real-Time Web reactions',
      'Embedded prototyping (Arduino, Raspberry Pi, sensors/actuators, microcontrollers, SoCs), embedded memory/performance, security & IoT privacy',
    ],
    theoryPracticalEvidence:
      '1 Theory + 1 Practical pair in Semester VI (UGDS6IOT0522: 77@3 marks, Grade O; UGDS6IOTP522: 50 marks, Grade O). Also reinforced by Socket Programming in Sem IV Advance Python.',
    confidence: 'Medium',
    explanation:
      'Covers network/application protocols and embedded connected device prototyping under Elective II (Internet of Things).',
    limitations:
      'A standalone Computer Networks course (covering full OSI link-layer framing, BGP/OSPF routing theory, congestion control mathematics) is not present; networking is approached from TCP/IP and IoT protocol foundations.',
  },
  {
    id: 'communication',
    number: 16,
    name: 'Communication and General Education',
    primaryCourseCodes: ['UGDS1CSE0320', 'UGDS1CSEP320', 'UGDS3TCC0321', 'UGDS3TCCP321'],
    secondaryCourseCodes: [],
    primaryCredits: 8,
    theoryCredits: 4,
    practicalOrProjectCredits: 4,
    relevantTopics: [
      'Business & Cross-Cultural Communication, Presentations, Correspondence, Resume/Report Writing (Sem I)',
      'Green IT / E-waste directives (WEEE, RoHS, Basel Convention) in Unit V of Sem I Communication Skills',
      'Technical Writing, User Manuals, API/System Documentation, Proposals, White Papers, Academic/Research Writing & Content Strategy (Sem III)',
    ],
    theoryPracticalEvidence:
      '2 Theory + 2 Practical pairs in Semesters I and III (8 institutional credits). Note verbatim "37@3" on UGDS1CSEP320.',
    confidence: 'High',
    explanation:
      'Included faithfully without omission as part of the full 120-credit degree record. Develops English technical and professional documentation proficiency.',
  },
  {
    id: 'other-interdisciplinary',
    number: 17,
    name: 'Other / Interdisciplinary Subjects',
    primaryCourseCodes: ['UGDS5BEE0522', 'UGDS5BEEP522', 'UGDS6KNM0422'],
    secondaryCourseCodes: [],
    primaryCredits: 6,
    theoryCredits: 4,
    practicalOrProjectCredits: 2,
    relevantTopics: [
      'Environmental Science, EIA, ISO 14000, Green Computing/Data Center Efficiency, Hardware Lifecycle & Business Ethics (UGDS5BEE0522/P)',
      'Knowledge Management: Tacit/Explicit Knowledge, Social Network Analysis, Nonaka & Takeuchi Spiral, Cognitive Maps, Taxonomies, KM Systems & IP Issues (UGDS6KNM0422)',
    ],
    primaryCreditsNote: undefined,
    theoryPracticalEvidence:
      'Sem V Elective Theory + Practical (4 credits) and Sem VI Elective I Theory (2 credits) = 6 institutional credits.',
    confidence: 'Medium',
    explanation:
      'Captures required elective coursework outside core math/CS: Sustainability/Green IT/Ethics in Semester V and Knowledge Management in Semester VI.',
    limitations:
      'UGDS5BEEP522 ("Practical of Business Ethics & Environmental Science" on transcript) corresponds to "Seminar Stage I" in the TY syllabus; Knowledge Management has no paired practical entry on the transcript.',
  } as SubjectAreaMapping,
];

// Verification guard comment: Sum = 4+12+24+4+0+8+8+4+4+12+4+4+4+10+4+8+6 = 120.

export const QUANT_TOPIC_LINKS: TopicCourseLink[] = [
  // ================= MATHEMATICS =================
  {
    topic: 'Linear Algebra: Matrices, Determinants, Rank & Linear Systems',
    discipline: 'Mathematics',
    subCategory: 'Linear Algebra',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS1LAC0420',
        courseTitle: 'Linear Algebra and Basics of Calculus',
        semester: 1,
        unitReference: 'TCSCUSDS104 · Unit I (12 lectures)',
        evidenceExcerpt:
          'Determinants & properties; inverse, transpose, symmetric, skew-symmetric, Hermitian, skew-Hermitian, unitary, orthogonal matrices; rank using echelon/normal forms; homogeneous & non-homogeneous linear systems.',
      },
      {
        transcriptCode: 'UGDS1LACP420',
        courseTitle: 'Practical of UGDS1LAC0420',
        semester: 1,
        unitReference: 'TCSCUSDSP104 (10 practicals)',
        evidenceExcerpt: 'Practical implementation covering matrix operations, systems, and calculus computations.',
      },
    ],
  },
  {
    topic: 'Eigenvalues, Eigenvectors, Cayley-Hamilton Theorem & Diagonalization',
    discipline: 'Mathematics',
    subCategory: 'Linear Algebra',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS1LAC0420',
        courseTitle: 'Linear Algebra and Basics of Calculus',
        semester: 1,
        unitReference: 'TCSCUSDS104 · Unit II (12 lectures)',
        evidenceExcerpt:
          'Characteristic equation, eigenvalues, eigenvectors, eigenspaces, properties, Cayley-Hamilton theorem (without proof), similarity and diagonalisation of matrices.',
      },
      {
        transcriptCode: 'UGDS4SSM0121',
        courseTitle: 'Statistical Simulation and Multivariate Analysis',
        semester: 4,
        unitReference: 'TCSCUSDS401 · Unit V (12 lectures)',
        evidenceExcerpt: 'Applied eigenvalue/eigenvector decomposition in Principal Component Analysis (PCA).',
      },
    ],
  },
  {
    topic: 'Vector Spaces, Subspaces, Linear Independence & Abstract Algebra Intro',
    discipline: 'Mathematics',
    subCategory: 'Linear & Abstract Algebra',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS1LAC0420',
        courseTitle: 'Linear Algebra and Basics of Calculus',
        semester: 1,
        unitReference: 'TCSCUSDS104 · Unit III (12 lectures)',
        evidenceExcerpt:
          'Groups, rings, ideals, fields; vectors in n-dimensional space (dot/cross product, norm, distance); vector spaces over R, subspaces, linear independence, dependence, and dimension.',
      },
    ],
  },
  {
    topic: 'Multivariable Differential Calculus (Partial Derivatives, Jacobian & Hessian)',
    discipline: 'Mathematics',
    subCategory: 'Calculus',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS1LAC0420',
        courseTitle: 'Linear Algebra and Basics of Calculus',
        semester: 1,
        unitReference: 'TCSCUSDS104 · Unit IV (12 lectures)',
        evidenceExcerpt:
          'Functions of several variables, first/higher-order partial derivatives, total differentials, composite & implicit differentiation, maxima/minima of two variables, Jacobian and Hessian matrices.',
      },
    ],
  },
  {
    topic: 'Integral Calculus: Double/Triple Integrals, Beta & Gamma Functions',
    discipline: 'Mathematics',
    subCategory: 'Calculus',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS1LAC0420',
        courseTitle: 'Linear Algebra and Basics of Calculus',
        semester: 1,
        unitReference: 'TCSCUSDS104 · Unit V (12 lectures)',
        evidenceExcerpt:
          'Beta and Gamma functions & properties; double integrals (area computation); triple integrals in Cartesian, cylindrical, and spherical polar coordinates (volume computation).',
      },
    ],
  },
  {
    topic: 'Discrete Mathematics / Graph Theory / Mathematical Proofs',
    discipline: 'Mathematics',
    subCategory: 'Discrete Structures (Clarification)',
    documentedStatus: 'Partial / Application-Oriented',
    courseLinks: [
      {
        transcriptCode: 'UGDS3DSA0521',
        courseTitle: 'Data Structure & Algorithm',
        semester: 3,
        unitReference: 'TCSCUSDS305 · Unit V',
        evidenceExcerpt: 'Graph representations, BFS/DFS traversals, spanning trees (Prim/Kruskal), shortest paths (Dijkstra).',
      },
      {
        transcriptCode: 'UGDS5ARI0222',
        courseTitle: 'Artificial Intelligence',
        semester: 5,
        unitReference: 'TCSCUSDS502 · Units III–IV',
        evidenceExcerpt: 'Propositional logic, First-Order Logic, theorem proving, resolution.',
      },
    ],
    notes:
      'No standalone Discrete Mathematics, Real Analysis, Differential Equations, or Numerical Analysis course exists in the transcript. Algorithmic graph theory and logic appear inside CS/AI courses.',
  },

  // ================= PROBABILITY AND STATISTICS =================
  {
    topic: 'Descriptive Statistics, Moments, Skewness, Kurtosis & Data Types',
    discipline: 'Probability and Statistics',
    subCategory: 'Descriptive Statistics',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS3PAS0420',
        courseTitle: 'Probability and Statistics',
        semester: 2,
        unitReference: 'TCSCUSDS204 · Units I–II (24 lectures)',
        evidenceExcerpt:
          'Arithmetic/Geometric/Harmonic mean, range, quartile/mean/standard deviation, raw & central moments, skewness, kurtosis, frequency curves, ogives.',
      },
      {
        transcriptCode: 'UGDS1DAS0520',
        courseTitle: 'Data analysis using Spread Sheet',
        semester: 1,
        unitReference: 'TCSCUSDS105 · Unit III',
        evidenceExcerpt: 'Histograms, percentiles, quartiles, mean, median, mode in Excel.',
      },
    ],
  },
  {
    topic: 'Probability Axioms, Conditional Probability, Random Variables & Distributions',
    discipline: 'Probability and Statistics',
    subCategory: 'Probability Theory',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS3PAS0420',
        courseTitle: 'Probability and Statistics',
        semester: 2,
        unitReference: 'TCSCUSDS204 · Unit III (12 lectures)',
        evidenceExcerpt:
          'Axioms of probability, sample space, conditional probability, independent events, addition/multiplication laws, discrete/continuous RVs, expectation, Binomial & Normal distributions.',
      },
      {
        transcriptCode: 'UGDS1IDS0120',
        courseTitle: 'Introduction to Data Science',
        semester: 1,
        unitReference: 'TCSCUSDS101 · Units I & V',
        evidenceExcerpt: 'Normal distribution, Poisson distribution, moments of a continuous random variable.',
      },
    ],
  },
  {
    topic: 'Statistical Estimation Theory & Parametric/Non-Parametric Hypothesis Testing',
    discipline: 'Probability and Statistics',
    subCategory: 'Inferential Statistics',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS3PAS0420',
        courseTitle: 'Probability and Statistics',
        semester: 2,
        unitReference: 'TCSCUSDS204 · Unit IV (12 lectures)',
        evidenceExcerpt:
          'Unbiased & efficient estimators, point/interval estimates, confidence intervals, Type I/II errors, power, p-value, large sample Z-tests, small-sample t-test, F-test, Chi-square test.',
      },
      {
        transcriptCode: 'UGDS1DAS0520',
        courseTitle: 'Data analysis using Spread Sheet',
        semester: 1,
        unitReference: 'TCSCUSDS105 · Unit V',
        evidenceExcerpt: 'Two-way contingency tables, Pearson Chi-Square statistic, Chi-square distribution.',
      },
    ],
  },
  {
    topic: 'Correlation & Simple Linear Regression (Least Squares)',
    discipline: 'Probability and Statistics',
    subCategory: 'Regression & Correlation',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS3PAS0420',
        courseTitle: 'Probability and Statistics',
        semester: 2,
        unitReference: 'TCSCUSDS204 · Unit V (12 lectures)',
        evidenceExcerpt:
          'Scatter diagrams, Pearson product-moment correlation, Spearman rank correlation, principle of least squares, fitting linear regression lines.',
      },
    ],
  },
  {
    topic: 'Survey Sampling Theory (SRS, Stratified, Systematic, Cluster & Two-Stage)',
    discipline: 'Probability and Statistics',
    subCategory: 'Sampling Theory',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS3SDS0121',
        courseTitle: 'Sampling & Descriptive Statistics',
        semester: 3,
        unitReference: 'TCSCUSDS301 · Units I–III (36 lectures)',
        evidenceExcerpt:
          'Sampling vs census, SRSWR/SRSWOR, Neyman/proportional stratified allocation, systematic sampling, ratio/regression estimation, cluster & two-stage sampling, non-sampling errors.',
      },
    ],
  },
  {
    topic: 'Time Series Analysis & Forecasting (Decomposition, ACF/PACF, ARIMA)',
    discipline: 'Probability and Statistics',
    subCategory: 'Time Series',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS3SDS0121',
        courseTitle: 'Sampling & Descriptive Statistics',
        semester: 3,
        unitReference: 'TCSCUSDS301 · Units IV–V (24 lectures)',
        evidenceExcerpt:
          'Additive/multiplicative decomposition, moving averages, exponential smoothing, stationarity, ACF/PACF, AR, MA, ARMA, and ARIMA models.',
      },
      {
        transcriptCode: 'UGDS5BDA0422',
        courseTitle: 'Big data analytics using Hadoop',
        semester: 5,
        unitReference: 'TCSCUSDS504 · Unit III',
        evidenceExcerpt: 'Box-Jenkins methodology and ARIMA model in analytics.',
      },
    ],
  },
  {
    topic: 'Stochastic Simulation, Pseudo-Random Generation & Monte Carlo Methods',
    discipline: 'Probability and Statistics',
    subCategory: 'Statistical Simulation',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS4SSM0121',
        courseTitle: 'Statistical Simulation and Multivariate Analysis',
        semester: 4,
        unitReference: 'TCSCUSDS401 · Units I–III (36 lectures)',
        evidenceExcerpt:
          'Linear congruential generators, Kolmogorov-Smirnov & Chi-square uniformity tests, inverse transform method, Box-Muller transform, acceptance-rejection, Monte Carlo integration, variance reduction, discrete-event & Markov chain simulation.',
      },
    ],
  },
  {
    topic: 'Multivariate Analysis: Multivariate Normal, Multiple Regression, PCA & Factor Analysis',
    discipline: 'Probability and Statistics',
    subCategory: 'Multivariate Statistics',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS4SSM0121',
        courseTitle: 'Statistical Simulation and Multivariate Analysis',
        semester: 4,
        unitReference: 'TCSCUSDS401 · Units IV–V (24 lectures)',
        evidenceExcerpt:
          'Mean vector, covariance/correlation matrix, multivariate normal distribution, multiple & polynomial regression, multicollinearity/VIF, PCA, Factor Analysis, Cluster Analysis.',
      },
    ],
  },
];

export const CS_DE_TOPIC_LINKS: TopicCourseLink[] = [
  {
    topic: 'C & C++ Programming (Systems & Object-Oriented)',
    discipline: 'Computer Science',
    subCategory: 'Programming Languages',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS1EPC0220',
        courseTitle: 'Essentials of Programming With C',
        semester: 1,
        unitReference: 'TCSCUSDS102 · Units I–V',
        evidenceExcerpt: 'Arrays, recursion, storage classes, preprocessor macros, pointers, pointer arithmetic, structures & unions.',
      },
      {
        transcriptCode: 'UGDS2EPC0120',
        courseTitle: 'Essentials of Programming with C++',
        semester: 2,
        unitReference: 'TCSCUSDS201 · Units I–V',
        evidenceExcerpt: 'OOP classes, friend classes, operator overloading, virtual functions, multiple inheritance, exception handling, function/class templates, file streams.',
      },
    ],
  },
  {
    topic: 'Python Scientific Computing Ecosystem (Core Python, NumPy, SciPy, Pandas, Sockets)',
    discipline: 'Computer Science',
    subCategory: 'Programming & Scientific Stack',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS2PYP0520',
        courseTitle: 'Python Programming-I',
        semester: 2,
        unitReference: 'TCSCUSDS205 · Units I–IV',
        evidenceExcerpt: 'Core Python data structures (lists, tuples, dicts), functions, file handling, OOP.',
      },
      {
        transcriptCode: 'UGDS4APP0521',
        courseTitle: 'Advance Python Programming',
        semester: 4,
        unitReference: 'TCSCUSDS405 · Units I–V',
        evidenceExcerpt: 'Tkinter GUI, SQLite DB connectivity, regex, NumPy arrays/linalg, SciPy stats, Pandas DataFrames/time-series, Matplotlib/Seaborn, TCP/UDP socket programming.',
      },
    ],
  },
  {
    topic: 'R Programming & Statistical Computing',
    discipline: 'Computer Science',
    subCategory: 'Statistical Programming',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS1IDS0120',
        courseTitle: 'Introduction to Data Science',
        semester: 1,
        unitReference: 'TCSCUSDS101 · Units III–V',
        evidenceExcerpt: 'R vectors, matrices, lists, factors, data frames, plyr, ggplot2, statistical summaries & plots.',
      },
      {
        transcriptCode: 'UGDS3ARP0421',
        courseTitle: 'Adv. R Programming',
        semester: 3,
        unitReference: 'TCSCUSDS304 · Units I–V',
        evidenceExcerpt: 'Functional programming, apply family, dplyr/tidyr/reshape2, data manipulation, and statistical computing.',
      },
    ],
  },
  {
    topic: 'Enterprise Java (Java EE, Servlets, JSP, JDBC, EJB, JPA, Hibernate)',
    discipline: 'Computer Science',
    subCategory: 'Enterprise Software Engineering',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS6ENJ0322',
        courseTitle: 'Enterprise Java',
        semester: 6,
        unitReference: 'TCSCUSDS603 · Units I–V',
        evidenceExcerpt: 'Java EE containers, Servlets, Cookies/Sessions, Non-Blocking I/O, JSP/JSTL, EJB, JNDI, JPA ORM, Hibernate with MySQL.',
      },
    ],
  },
  {
    topic: 'Data Structures & Algorithms',
    discipline: 'Computer Science',
    subCategory: 'Algorithms & Complexity',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS3DSA0521',
        courseTitle: 'Data Structure & Algorithm',
        semester: 3,
        unitReference: 'TCSCUSDS305 · Units I–V',
        evidenceExcerpt:
          'Asymptotic analysis (Big-O/Omega/Theta), linked lists, stacks, queues, BST, AVL trees, heaps, hashing, sorting (Quick/Merge/Heap/Radix), graphs (BFS/DFS/Dijkstra/Prim/Kruskal), Greedy, Divide & Conquer, Dynamic Programming.',
      },
    ],
  },
  {
    topic: 'Operating Systems & Virtualization',
    discipline: 'Computer Science',
    subCategory: 'Systems',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS2OPS0320',
        courseTitle: 'Operating Systems',
        semester: 2,
        unitReference: 'TCSCUSDS203 · Units I–V',
        evidenceExcerpt:
          'Processes, threads, IPC, CPU scheduling, virtual memory/paging, file systems, deadlocks, Type 1/2 hypervisors, Linux/Windows/Android internals.',
      },
    ],
  },
  {
    topic: 'Database Management Systems, SQL, PL/SQL & NoSQL Intro',
    discipline: 'Data Engineering',
    subCategory: 'Databases',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS2DMS0220',
        courseTitle: 'Database Management System',
        semester: 2,
        unitReference: 'TCSCUSDS202 · Units I–V',
        evidenceExcerpt: 'ER modeling, 1NF–BCNF normalization, Relational Algebra & Calculus, SQL DDL/DML, ACID, 2PL, recovery.',
      },
      {
        transcriptCode: 'UGDS3ADS0221',
        courseTitle: 'Advance SQL',
        semester: 3,
        unitReference: 'TCSCUSDS302 · Units I–V',
        evidenceExcerpt: 'PL/SQL procedures, functions, cursors, triggers, packages, NoSQL/MongoDB/JSON concepts, distributed databases, query optimization.',
      },
    ],
  },
  {
    topic: 'Data Warehousing, OLAP, Dimensional Modeling & ETL',
    discipline: 'Data Engineering',
    subCategory: 'Data Warehousing',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS4DWD0221',
        courseTitle: 'Data Warehousing and data Mining',
        semester: 4,
        unitReference: 'TCSCUSDS402 · Units I–III',
        evidenceExcerpt: 'Star/Snowflake/Fact Constellation schemas, OLAP cubes (roll-up, drill-down, slice, dice), ETL extraction, transformation, loading & data quality.',
      },
    ],
  },
  {
    topic: 'Hadoop Ecosystem: HDFS, MapReduce, Spark / PySpark, Hive, HBase, Sqoop & Flume',
    discipline: 'Data Engineering',
    subCategory: 'Big Data Processing',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS5BDA0422',
        courseTitle: 'Big data analytics using Hadoop',
        semester: 5,
        unitReference: 'TCSCUSDS504 · Units I, IV & V',
        evidenceExcerpt:
          'HDFS architecture, Hadoop Streaming & MapReduce with Python, Spark basics & interactive PySpark applications, Hive querying, HBase, Sqoop (relational import), Flume (streaming ingestion), Pig.',
      },
    ],
  },
  {
    topic: 'Cloud Computing Architectures & Security',
    discipline: 'Data Engineering',
    subCategory: 'Cloud Infrastructure',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS6CLC0222',
        courseTitle: 'Cloud Computing',
        semester: 6,
        unitReference: 'TCSCUSDS602 · Units I–V',
        evidenceExcerpt: 'IaaS/PaaS/SaaS, AWS/Azure/GAE overview, load balancing, auto-scaling, failover, PKI/IAM/SSO security, SLAs.',
      },
    ],
  },
  {
    topic: 'Software Engineering, Testing & Project Management',
    discipline: 'Computer Science',
    subCategory: 'Software Engineering',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS4ASE0321',
        courseTitle: 'Agile Software Engineering',
        semester: 4,
        unitReference: 'TCSCUSDS403 · Units I–V',
        evidenceExcerpt: 'SDLC, Agile/Scrum/XP/Kanban, design principles, unit/integration/regression testing, CI/CD & DevOps concepts.',
      },
      {
        transcriptCode: 'UGDS5SPM0122',
        courseTitle: 'Software Project Management',
        semester: 5,
        unitReference: 'TCSCUSDS501 · Units I–V',
        evidenceExcerpt: 'COCOMO II, Function Points, CPM, PERT, Monte Carlo simulation, Earned Value Analysis, ISO 9126.',
      },
    ],
  },
  {
    topic: 'Artificial Intelligence & Machine Learning Foundations',
    discipline: 'Computer Science',
    subCategory: 'AI & ML',
    documentedStatus: 'Documented',
    courseLinks: [
      {
        transcriptCode: 'UGDS5ARI0222',
        courseTitle: 'Artificial Intelligence',
        semester: 5,
        unitReference: 'TCSCUSDS502 · Units I–V',
        evidenceExcerpt: 'Intelligent agents, heuristic & adversarial search, propositional & first-order logic, resolution, planning.',
      },
      {
        transcriptCode: 'UGDS6MAL0122',
        courseTitle: 'Machine Learning',
        semester: 6,
        unitReference: 'TCSCUSDS601 · Units I–V',
        evidenceExcerpt: 'VC dimension, regularization, linear/kernel SVM, decision trees, clustering, Naïve Bayes, EM, GMM, bagging/boosting, intro to Deep Learning & RL.',
      },
    ],
  },
];

export const WORKLOAD_EVIDENCE_ROWS: WorkloadEvidenceRow[] = [
  {
    item: 'Theory teaching schedule per course',
    syllabusStatement: '5 periods per week, 50 minutes per period (across FY, SY, TY syllabi).',
    transcriptStatement: '04 lectures per week, 50 minutes per lecture ("50 Min · 04").',
    safelyDerived:
      'Discrepancy recorded directly between syllabus blueprint (250 min/week) and transcript header (200 min/week). Both are displayed verbatim.',
    missingOrNotEstablished:
      'Exact number of instructional weeks per semester actually delivered (e.g., 12, 14, or 15 weeks) is not stated in either transcript or syllabus.',
  },
  {
    item: 'Theory lecture count per syllabus unit',
    syllabusStatement: '5 Units per theory course × 12 lectures per unit = 60 lectures listed in every theory syllabus table.',
    transcriptStatement: 'Does not record total lectures per semester; records weekly lectures ("04").',
    safelyDerived:
      'At 50 minutes per lecture, 60 documented lectures correspond to 50.0 clock hours of scheduled classroom lectures per theory course (1,500 clock hours across 30 theory courses).',
    missingOrNotEstablished:
      'Whether all 60 lectures were delivered under the 4/week transcript pattern (15 weeks × 4 = 60) vs. 5/week syllabus pattern (12 weeks × 5 = 60) is not explicitly stated.',
  },
  {
    item: 'Practical / laboratory schedule per course',
    syllabusStatement: '3 periods per week, 50 minutes per period, plus "10 Practicals covering the syllabus" (150 min/week).',
    transcriptStatement: '1 session per week of 1½ Hours ("1½ Hrs · 1") = 90 min/week (except UGDS6PRIP422 recorded as "--").',
    safelyDerived:
      '29 Practical courses record 1½ Hrs/week on transcript (vs. 150 min/week in syllabus). 1 Project course (UGDS6PRIP422) records "--".',
    missingOrNotEstablished:
      'Total practical clock hours per semester, number of lab weeks, and whether lab preparation/journal writing hours were tracked externally.',
  },
  {
    item: 'Independent study, assignments, projects & exam prep',
    syllabusStatement: 'Lists 40-mark internal evaluation (Test, Tutorial, Active Participation) and Project Stage I/II references without hour allocations.',
    transcriptStatement: 'Not recorded.',
    safelyDerived: 'None — self-study workload cannot be empirically derived from the transcript or syllabus alone.',
    missingOrNotEstablished:
      'Total independent-study hours, tutorial prep hours, assignment/project coding hours, and examination preparation hours are NOT specified in available official documents.',
  },
  {
    item: 'Assessment structure & maximum marks',
    syllabusStatement: 'Theory: 60 External (2 or 2½ hrs exam) + 40 Internal = 100 marks. Practical: 50 External (2½ hrs exam), Internal "--".',
    transcriptStatement: 'Records marks obtained per course (plus totals 490, 560, 581, 569, 562, 652), without printing maximum marks.',
    safelyDerived:
      'Standard syllabus maximums align with transcript scores except Sem VI UGDS6PRIP422 ("Project Implementation"), which shows 102 marks obtained.',
    missingOrNotEstablished:
      'Official maximum marks for UGDS6PRIP422 (102 obtained) and official transcript definition of "@3" in 37@3 and 77@3.',
  },
  {
    item: 'Institutional credits & ECTS relationship',
    syllabusStatement: '2 institutional credits per Theory course and 2 per Practical course = 20 per semester, 120 total.',
    transcriptStatement: '120 Total Credits Earned (20 per semester across 6 semesters); Credits Registered not stated.',
    safelyDerived: '120 University of Mumbai / TCSC Institutional Credits (60 Theory + 58 Practical + 2 Project Implementation).',
    missingOrNotEstablished:
      'No official ECTS conversion ratio, German university recognition decision, or total student workload hours per Indian credit exist in the source files.',
  },
];

export const ADMISSION_REQUIREMENT_AREAS = [
  {
    area: 'Mathematics (Linear Algebra, Calculus, Multivariable Optimization)',
    status: 'Documented relevant coursework' as const,
    credits: '4 primary institutional credits (+ embedded mathematical methods in Statistics & ML)',
    summary:
      'Explicitly covers matrices, determinants, eigenvalues/eigenvectors, Cayley-Hamilton, vector spaces, partial derivatives, Jacobians, Hessians, Beta/Gamma functions, and double/triple integration (Sem I).',
    gapNote: 'No standalone Discrete Mathematics, Real Analysis, or Differential Equations course.',
  },
  {
    area: 'Probability & Statistics',
    status: 'Documented relevant coursework' as const,
    credits: '12 primary institutional credits (3 Theory + 3 Practical pairs)',
    summary:
      'Strong three-semester progression: probability axioms, Binomial/Normal distributions, hypothesis testing (t, F, Chi-square), sampling theory, ARIMA time series, Monte Carlo simulation, and multivariate analysis (PCA, Factor Analysis, Multiple Regression).',
    gapNote: 'Application-oriented rather than measure-theoretic probability.',
  },
  {
    area: 'Programming & Software Development',
    status: 'Documented relevant coursework' as const,
    credits: '24 primary institutional credits (6 Theory + 6 Practical pairs)',
    summary:
      'Extensive multi-language foundation in C, C++, Python (including NumPy, SciPy, Pandas, Matplotlib, Seaborn, Sockets), R, and Enterprise Java (Servlets, JSP, EJB, JPA, Hibernate).',
    gapNote: 'Substantial practical assessment scores (43–50 across C++, Python, R, Java labs).',
  },
  {
    area: 'Algorithms & Data Structures',
    status: 'Documented relevant coursework' as const,
    credits: '4 primary institutional credits (1 Theory + 1 Practical pair)',
    summary:
      'Asymptotic analysis (Big-O/Omega/Theta), lists, stacks, queues, BST/AVL trees, heaps, hashing, sorting, graph algorithms (BFS/DFS/Dijkstra/Prim/Kruskal), Greedy, Divide & Conquer, and Dynamic Programming.',
    gapNote: 'Single-semester 4-credit sequence; formal NP-completeness theory is not documented.',
  },
  {
    area: 'Theoretical Computer Science (Automata, Formal Languages, Computability)',
    status: 'No identified coursework' as const,
    credits: '0 primary institutional credits',
    summary:
      'No standalone Theoretical Computer Science course exists. Only relational algebra/calculus (DBMS), asymptotic notation (DSA), propositional/FOL logic (AI), and VC dimension (ML) appear as course sub-units.',
    gapNote:
      'Critical checkpoint for German M.Sc. Computer Science programmes requiring formal Automata / Computability credits; requires university evaluation.',
  },
  {
    area: 'Databases & Data Engineering / Big Data',
    status: 'Documented relevant coursework' as const,
    credits: '16 primary institutional credits (DBMS 8 + Data Engineering/Big Data 8)',
    summary:
      'Covers ER modeling, BCNF, Relational Algebra/Calculus, SQL, PL/SQL, transactions, NoSQL/MongoDB, Data Warehousing (Star/Snowflake, OLAP, ETL), Hadoop HDFS, MapReduce, Spark/PySpark, Hive, HBase, Sqoop, and Flume.',
    gapNote: 'Well aligned with Data Science & Data Engineering tracks.',
  },
  {
    area: 'Artificial Intelligence & Machine Learning',
    status: 'Documented relevant coursework' as const,
    credits: '8 primary institutional credits (AI 4 + ML 4)',
    summary:
      'Covers search, adversarial games, FOL, planning (Sem V AI) and generalization/VC dimension, SVM/kernels, trees, clustering, EM, GMM, boosting (Sem VI ML), supported by peer-reviewed DNN empirical research (JETIR2503018).',
    gapNote: 'Deep Learning is introductory in Sem VI syllabus; research paper provides external empirical evidence.',
  },
  {
    area: 'Operating Systems & Systems Architecture',
    status: 'Partial content match' as const,
    credits: '4 primary institutional credits (Operating Systems + Practical)',
    summary:
      'Covers processes, threads, IPC, scheduling, virtual memory/paging, file systems, deadlocks, and virtualization (Sem II).',
    gapNote: 'Computer Architecture / Digital Logic / Hardware Organization is not a standalone course.',
  },
  {
    area: 'Research / Thesis & Capstone Evidence',
    status: 'Requires university evaluation' as const,
    credits: '2 primary institutional credits (Project Implementation UGDS6PRIP422) + Peer-Reviewed Publication',
    summary:
      'Transcript lists Project Implementation (102 marks, Grade A, Sem VI) and optional Seminar/Project naming in Sem V. Externally, co-authored JETIR2503018 on Deep Neural Networks for ocular disease detection.',
    gapNote:
      'Official syllabus lacks detailed unit/scope descriptions and German-equivalent thesis workload (hours/weeks) for Project Implementation.',
  },
];

export const INITIAL_COMPARISON_ROWS: AdmissionComparisonRow[] = [
  {
    id: 'cmp-1',
    universityRequirement: 'Linear Algebra & Calculus Foundations',
    relevantCourseCodes: ['UGDS1LAC0420', 'UGDS1LACP420'],
    syllabusEvidence: 'TCSCUSDS104 Units I–V: Matrices, Eigenvalues/Cayley-Hamilton, Vector Spaces, Jacobian/Hessian, Multiple Integrals.',
    institutionalCredits: '4 (2 Theory + 2 Practical)',
    workloadEvidence: '60 documented theory lectures (50h); 10 syllabus practicals; transcript weekly format 50m×4 / 90m×1.',
    evaluation: 'Documented relevant coursework',
  },
  {
    id: 'cmp-2',
    universityRequirement: 'Probability & Mathematical/Applied Statistics',
    relevantCourseCodes: ['UGDS3PAS0420', 'UGDS2PASP420', 'UGDS3SDS0121', 'UGDS3SDSP121', 'UGDS4SSM0121', 'UGDS4SSMP121'],
    syllabusEvidence: 'TCSCUSDS204, 301, 401: Distributions, Estimation, Hypothesis Testing, Survey Sampling, ARIMA, Monte Carlo, PCA.',
    institutionalCredits: '12 (6 Theory + 6 Practical)',
    workloadEvidence: '180 documented theory lectures across 3 semesters (150h); self-study hours not documented.',
    evaluation: 'Documented relevant coursework',
  },
  {
    id: 'cmp-3',
    universityRequirement: 'Programming, Algorithms & Data Structures',
    relevantCourseCodes: ['UGDS1EPC0220', 'UGDS2EPC0120', 'UGDS2PYP0520', 'UGDS3DSA0521', 'UGDS4APP0521'],
    syllabusEvidence: 'TCSCUSDS102, 201, 205, 305, 405: C, C++, Python (NumPy/SciPy/Pandas), Big-O, Trees, Hashing, Graphs, DP.',
    institutionalCredits: '20 shown (out of 28 Programming+DSA credits)',
    workloadEvidence: '60 documented lectures per theory course + paired lab modules; total lab weeks unspecified.',
    evaluation: 'Documented relevant coursework',
  },
  {
    id: 'cmp-4',
    universityRequirement: 'Theoretical Computer Science (Automata, Formal Languages, Complexity)',
    relevantCourseCodes: [],
    syllabusEvidence: 'No standalone course; partial logic in TCSCUSDS502, Big-O in TCSCUSDS305, relational calculus in TCSCUSDS202.',
    institutionalCredits: '0 primary credits',
    workloadEvidence: 'Sub-unit coverage only; formal Automata & Computability absent.',
    evaluation: 'No identified coursework',
  },
  {
    id: 'cmp-5',
    universityRequirement: 'Data Engineering, Databases & Machine Learning',
    relevantCourseCodes: ['UGDS2DMS0220', 'UGDS3ADS0221', 'UGDS4DWD0221', 'UGDS5BDA0422', 'UGDS5ARI0222', 'UGDS6MAL0122'],
    syllabusEvidence: 'SQL/PL-SQL, BCNF, DW/ETL, Hadoop/Spark/Hive, AI Search/Logic, ML (SVM, Trees, EM, Ensembles).',
    institutionalCredits: '24 (across DBMS, Big Data, AI, ML)',
    workloadEvidence: '6 Theory + 6 Practical courses; total student workload hours require university assessment.',
    evaluation: 'Documented relevant coursework',
  },
  {
    id: 'cmp-6',
    universityRequirement: 'Bachelor Thesis / Independent Research Equivalence',
    relevantCourseCodes: ['UGDS6PRIP422'],
    syllabusEvidence: 'Transcript lists Project Implementation (102 marks); syllabus mentions Project Stage-II without unit specification. External JETIR2503018 paper available.',
    institutionalCredits: '2 (Project Implementation)',
    workloadEvidence: 'Transcript shows "--" for lectures/duration; total thesis hours not established in official documents.',
    evaluation: 'Requires university evaluation',
  },
];

export const SOURCE_DOCUMENTS: SourceDocumentRecord[] = [
  {
    id: 'src-transcript-pdf',
    name: 'TranscriptOfBachelorDS.pdf (Official Academic Transcript)',
    issuingInstitution: 'Thakur College of Science & Commerce (Empowered Autonomous College, University of Mumbai)',
    documentType: 'Official Consolidated Semester-Wise Academic Transcript (Pages 1–6)',
    dateOrAcademicYear: 'Issued 16 October 2025 (Academic Examinations Nov 2022 – Apr 2025)',
    referenceDetails: '60 course records, 120 credits, 3,414 total marks, Final CGPA 8.85, Grade A. Signatures & QR verification present on original.',
    publicStatus: 'Private Original (Submit via Portal Only)',
    notes: 'Original PDF is excluded from public downloads and seat/personal identifiers are redacted on this public portfolio to protect applicant privacy.',
  },
  {
    id: 'src-transcript-txt',
    name: 'transcript-summary.txt',
    issuingInstitution: 'Applicant-prepared structured summary',
    documentType: 'Plain-text reconciliation of official transcript',
    dateOrAcademicYear: 'Derived from TranscriptOfBachelorDS.pdf',
    referenceDetails: 'Cross-checked directly line-by-line against all 6 pages of TranscriptOfBachelorDS.pdf.',
    publicStatus: 'Public Academic Summary',
    notes: 'Where raw PDF layout and text summary agree, records are reconciled; original PDF images take precedence.',
  },
  {
    id: 'src-fy-pdf',
    name: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code.docx.pdf (+ fyds_syllabus.txt)',
    issuingInstitution: 'Thakur College of Science & Commerce / University of Mumbai',
    documentType: 'Official First Year (Semesters I & II) Revised Syllabus',
    dateOrAcademicYear: 'W.e.f. 2020–2021 (26 pages)',
    referenceDetails: 'Course codes TCSCUSDS101–105, TCSCUSDS201–205 & practical codes TCSCUSDSP101–205.',
    publicStatus: 'Public Academic Summary',
    notes: 'Extracted verbatim into the Course Catalogue.',
  },
  {
    id: 'src-sy-pdf',
    name: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code.docx-1.pdf (+ syds_syllabus.txt)',
    issuingInstitution: 'Thakur College of Science & Commerce / University of Mumbai',
    documentType: 'Official Second Year (Semesters III & IV) Revised Syllabus',
    dateOrAcademicYear: 'W.e.f. 2021–2022 (26 pages)',
    referenceDetails: 'Course codes TCSCUSDS301–305, TCSCUSDS401–405 & practical codes TCSCUSDSP301–405.',
    publicStatus: 'Public Academic Summary',
    notes: 'Includes code collision where TCSCUSDS405 appears on two distinct Semester IV courses.',
  },
  {
    id: 'src-ty-txt',
    name: 'tyds_syllabus.txt (+ all_Syllabus.txt)',
    issuingInstitution: 'Thakur College of Science & Commerce / University of Mumbai',
    documentType: 'Third Year (Semesters V & VI) Official Syllabus Extract',
    dateOrAcademicYear: 'T.Y.B.Sc. Data Science (Semesters V & VI)',
    referenceDetails: 'Course codes TCSCUSDS501–505, TCSCUSDS601–605 & practical codes TCSCUSDSP501–605.',
    publicStatus: 'Public Academic Summary',
    notes: 'Covers elective definitions, Project Stage-I/II overview, and unit tables.',
  },
  {
    id: 'src-stage2-txt',
    name: 'BSc_Syllabus_Analysis_Stage2_Extracted.txt',
    issuingInstitution: 'Applicant-prepared curriculum audit working file',
    documentType: 'Cross-mapping & verification worksheet',
    dateOrAcademicYear: 'Prepared for application review',
    referenceDetails: 'Documented audit of 60 entries, discrepancies, and topic mappings.',
    publicStatus: 'Public Academic Summary',
    notes: 'Treated strictly as supporting working notes, subordinate to official transcript and syllabi.',
  },
  {
    id: 'src-jetir',
    name: 'JETIR2503018.pdf & JETIR2503018_Certificate.pdf',
    issuingInstitution: 'Journal of Emerging Technologies and Innovative Research (ISSN: 2349-5162)',
    documentType: 'Published Undergraduate Research Paper & Publication Certificate (Reg. No. 556189)',
    dateOrAcademicYear: 'Volume 12, Issue 3 · 4 March 2025 (Pages a136–a145)',
    referenceDetails: 'Comparative Analysis of Deep Neural Networks for Automated Ocular Disease Detection.',
    publicStatus: 'Published Open Access Paper',
    notes: 'Extracurricular / research evidence produced alongside final-year undergraduate studies.',
  },
];

export const DISCREPANCY_RECORDS: DiscrepancyRecord[] = [
  {
    id: 'disc-1',
    area: 'Unusual "@3" marks suffix',
    semesterOrScope: 'Sem I (UGDS1CSEP320: 37@3), Sem V (UGDS5BDA0422: 77@3), Sem VI (UGDS6IOT0522: 77@3)',
    transcriptRecord: 'Marks printed verbatim as 37@3, 77@3, and 77@3; printed semester totals (490, 562, 652) equal base + 3.',
    syllabusOrOtherRecord: 'Footer legend on transcript pages explains @ for grace/ordinance in general cases or omits "@3" specifically.',
    treatmentInPortfolio: 'Displayed verbatim as 37@3 and 77@3 with explicit verification notes; never silently altered.',
    verificationNeeded: 'Confirm institutional definition of "@3" (e.g., Ordinance 0.5043 / grace marks) with TCSC Examination Section if required by evaluator.',
  },
  {
    id: 'disc-2',
    area: 'Weekly teaching hours: Transcript vs. Syllabus',
    semesterOrScope: 'All 6 Semesters',
    transcriptRecord: 'Theory: "50 Min · 04" (200 min/week); Practical: "1½ Hrs · 1" (90 min/week).',
    syllabusOrOtherRecord: 'Theory: "5 periods/week (50 min)" (250 min/week); Practical: "3 periods/week (50 min)" (150 min/week).',
    treatmentInPortfolio: 'Both figures are presented side by side in Workload Assessment & Course Catalogue without averaging or altering.',
    verificationNeeded: 'Confirm delivered weekly contact schedule and exact teaching weeks per semester with college.',
  },
  {
    id: 'disc-3',
    area: 'Course code system difference',
    semesterOrScope: 'All 6 Semesters',
    transcriptRecord: 'Uses UGDS... codes (e.g., UGDS1LAC0420, UGDS6MAL0122).',
    syllabusOrOtherRecord: 'Uses TCSCUSDS... / TCSCUSDSP... codes (e.g., TCSCUSDS104, TCSCUSDS601).',
    treatmentInPortfolio: 'Both code sets are shown on every course card via exact title/semester alignment.',
    verificationNeeded: 'An official registrar crosswalk letter is not included in the uploaded files.',
  },
  {
    id: 'disc-4',
    area: 'Sem II Probability & Statistics code prefix anomaly',
    semesterOrScope: 'Semester II',
    transcriptRecord: 'Records Theory code as "UGDS3PAS0420" (containing "3") on Page 2, alongside Practical "UGDS2PASP420".',
    syllabusOrOtherRecord: 'FY syllabus places Probability & Statistics in Semester II as TCSCUSDS204 / TCSCUSDSP204.',
    treatmentInPortfolio: 'Preserved verbatim as UGDS3PAS0420 in Semester II with explicit anomaly flag.',
    verificationNeeded: 'Confirm typographical prefix on transcript ("3" vs "2") if questioned by admissions board.',
  },
  {
    id: 'disc-5',
    area: 'Sem I course title differences',
    semesterOrScope: 'Semester I',
    transcriptRecord: 'UGDS1IDS0120: "Introduction to Data Science"; UGDS1DAS0520: "Data analysis using Spread Sheet".',
    syllabusOrOtherRecord: 'TCSCUSDS101: "Basics of data Science"; TCSCUSDS105: "Data Analysis using Spread Sheet(VBA)" (VBA omitted in unit text).',
    treatmentInPortfolio: 'Both official titles are shown without silently renaming either source.',
    verificationNeeded: 'Clarify whether VBA macros were taught in lab exercises outside the printed theory units.',
  },
  {
    id: 'disc-6',
    area: 'Sem II Python syllabus Unit V duplication',
    semesterOrScope: 'Semester II (TCSCUSDS205)',
    transcriptRecord: 'UGDS2PYP0520: "Python Programming-I" (69 marks, Grade A).',
    syllabusOrOtherRecord: 'Official FY syllabus PDF prints identical Unit II text ("Control Structures, Loops, Functions...") inside Unit V.',
    treatmentInPortfolio: 'Reproduced accurately with explicit editorial-error note in TCSCUSDS205.',
    verificationNeeded: 'Request corrected Unit V topics from department if needed.',
  },
  {
    id: 'disc-7',
    area: 'Sem IV syllabus duplicate course code TCSCUSDS405',
    semesterOrScope: 'Semester IV',
    transcriptRecord: 'Distinctly codes UGDS4DAV0421 (Data Visualization) and UGDS4APP0521 (Advance Python Programming).',
    syllabusOrOtherRecord: 'SY syllabus PDF prints "TCSCUSDS405 / TCSCUSDSP405" for BOTH courses and skips 404.',
    treatmentInPortfolio: 'Internally keyed separately while displaying exact syllabus string TCSCUSDS405 and noting collision.',
    verificationNeeded: 'None required for transcript authenticity; note explains syllabus numbering typo.',
  },
  {
    id: 'disc-8',
    area: 'Sem V Practical vs. Project Stage I / Seminar Stage I',
    semesterOrScope: 'Semester V',
    transcriptRecord: 'UGDS5SPMP122 ("Practical of Software Project Management") and UGDS5BEEP522 ("Practical of Business Ethics and Environmental Science").',
    syllabusOrOtherRecord: 'TY syllabus defines TCSCUSDSP501 as "Project Stage I" and TCSCUSDSP505 as "Seminar Stage I (On selected topic)".',
    treatmentInPortfolio: 'Both names displayed explicitly; Project Stage I vs. Practical distinction flagged.',
    verificationNeeded: 'Confirm scope of Sem V project/seminar work with department.',
  },
  {
    id: 'disc-9',
    area: 'Sem V Elective completion record',
    semesterOrScope: 'Semester V',
    transcriptRecord: 'Records UGDS5BEE0522 ("Business Ethics and Environmental Science").',
    syllabusOrOtherRecord: 'TY syllabus lists two TCSCUSDS505 choices: Marketing & Retail Analytics OR Business Ethics & Environmental Science.',
    treatmentInPortfolio: 'Only the completed elective (Business Ethics & Environmental Science) is credited; Marketing & Retail Analytics is excluded.',
    verificationNeeded: 'Verified directly by official transcript.',
  },
  {
    id: 'disc-10',
    area: 'Sem VI Project Implementation (102 marks) & missing syllabus unit table',
    semesterOrScope: 'Semester VI',
    transcriptRecord: 'UGDS6PRIP422 ("Project Implementation"): 102 marks, Grade A, 2 credits, lectures/duration "--". No Knowledge Management practical.',
    syllabusOrOtherRecord: 'TY syllabus Sem VI list mentions "Internship/Project Stage-II", but omits a dedicated syllabus table and marks breakdown.',
    treatmentInPortfolio: 'Classified under Software Engineering with explicit note that maximum marks and project guidelines are not specified in uploaded files.',
    verificationNeeded: 'Obtain official maximum marks (e.g., 150 or 200) and project synopsis/certificate if required for thesis equivalence.',
  },
  {
    id: 'disc-11',
    area: 'Sem VI syllabus header & copy-paste typos',
    semesterOrScope: 'Semester VI (TCSCUSDS602, 603, 604, 605)',
    transcriptRecord: 'Cleanly places Machine Learning, Cloud Computing, Enterprise Java, Knowledge Management, and IoT in Semester VI.',
    syllabusOrOtherRecord: 'TCSCUSDS602 prints "Semester – IV" in table header; TCSCUSDS603–605 contain copied Objective/Outcome sentences from Python/Agile/Data Vis.',
    treatmentInPortfolio: 'Exact syllabus anomalies flagged transparently without hiding original wording.',
    verificationNeeded: 'Unit topic tables themselves are accurate to the actual courses.',
  },
];

export const TRANSCRIPT_GRADING_SCALE = [
  { grade: 'O', marksRange: '80 & Above', gradePoint: 10, description: 'Outstanding' },
  { grade: 'A+', marksRange: '70 to 79.99', gradePoint: 9, description: 'Excellent' },
  { grade: 'A', marksRange: '60 to 69.99', gradePoint: 8, description: 'Very Good' },
  { grade: 'B+', marksRange: '55 to 59.99', gradePoint: 7, description: 'Good' },
  { grade: 'B', marksRange: '50 to 54.99', gradePoint: 6, description: 'Above Average' },
  { grade: 'C', marksRange: '45 to 49.99', gradePoint: 5, description: 'Average' },
  { grade: 'D', marksRange: '40 to 44.99', gradePoint: 4, description: 'Pass' },
  { grade: 'F', marksRange: 'Less than 40', gradePoint: 0, description: 'Fail' },
];
