import { SyllabusDetail } from '../types/academic';

const STANDARD_INTERNAL = '40 (20 – Test, 10 – Tutorial, 10 – Active Participation)';

export const SYLLABUS_DETAILS: Record<string, SyllabusDetail> = {
  // ================= SEMESTER I =================
  TCSCUSDS101: {
    syllabusCode: 'TCSCUSDS101',
    syllabusTitle: 'Basics of data Science',
    semesterLabelInSource: 'Semester – I (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP101',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Art of Data Science.',
      'This course aims to provide the basics understanding of needs of Data Science.',
    ],
    courseOutcome: ['Understand importance of Data Science.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'The Art of Data Science: Volume, Velocity, Variety, Machine Learning, Supervised and Unsupervised Learning, Predictions and Forecasts, Innovation and Experimentation, The Dark Side Big Errors, Privacy, Theories, Models, Intuition, Causality, Prediction, Correlation. The Very Beginning: Exponentials, Logarithms, Normal Distribution, Poisson Distribution, Moments of a continuous random variable.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Web Scraping, Web crawling, Text Pre Processing, Word Cloud, Extracting data from Twitter, Extracting data from Facebook. Text Classification: Bayes Classifier, Support vector machine, Word count classifier.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Basics of R: What is R?, Features and properties of R, Limitations of R, Benefits of R, R Objects, Matrices, Lists, Factors, Vectors, Arrays, Data Frames, Data Operators in R: Arithmetic, Assignment, Relational, Logical, Special Operators.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Control Structures: if-else, for loop, nested for loop, while loop, repeat loop, break and next. Functions in R. Packages in R: Plyr, lubridate, quantmod, tm, ggplot2, plotrix.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'R-statistics: Mean, median and mode, Linear regression, Normal distribution, Poisson distribution, Time series analysis. R-Plots: Pie chart, Bar chart, Box plot, Histogram, Line graphs, Scatter plots.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Data Science: Theories, Models, Algorithms and Analytics', authors: 'Sanjeev R Das' },
      { title: 'Foundations of Data Science', authors: 'Avrim Blum, John Hopcroft and Ravindran Kannan' },
      { title: 'Doing Data Science', authors: 'Rachel Schutt and Cathy O’Neil', publisher: 'O’Reilly' },
    ],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – I, Course Code TCSCUSDS101 (PDF pages 2–3)',
    discrepancyNote: 'Transcript records title as "Introduction to Data Science" (UGDS1IDS0120).',
  },
  TCSCUSDSP101: {
    syllabusCode: 'TCSCUSDSP101',
    syllabusTitle: 'Basics of data Science Practical',
    semesterLabelInSource: 'Semester – I (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS101',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical implementation corresponding to TCSCUSDS101 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS101).'],
    units: [],
    references: [],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – I, Course Code TCSCUSDSP101 (PDF page 2). Individual lab exercise list is not itemized in the syllabus.',
  },

  TCSCUSDS102: {
    syllabusCode: 'TCSCUSDS102',
    syllabusTitle: 'Essentials of Programming with C',
    semesterLabelInSource: 'Semester – I (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP102',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of programming.',
      'This course aims to provide the basics understanding of procedural programming.',
    ],
    courseOutcome: ['Understand importance of Program writing in C'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction: Types of Programming languages, History, features and application. Simple program logic, program development cycle, pseudo-code statements and flowchart symbols, sentinel value to end a program, programming and user environments, evolution of programming models, desirable program characteristics. Fundamentals: Structure of a program, Compilation and Execution of a Program, Character Set, identifiers and keywords, data types, constants, variables and arrays, declarations, expressions, statements, Variable definition, symbolic constants.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Operators and Expressions: Arithmetic operators, unary operators, relational and logical operators, assignment operators, the conditional operator, library functions. Data Input and output: Single character input and output, entering input data, scanf function, printf function, gets and puts functions, interactive programming.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Conditional Statements and Loops: Decision Making Within A Program, Conditions, Relational Operators, Logical Connectives, If Statement, If-Else Statement, Loops: While Loop, Do While, For Loop, Nested Loops, Infinite Loops, Switch Statement. Functions: Overview, defining a function, accessing a function, passing arguments to a function, specifying argument data types, function prototypes, recursion, modular programming and functions, standard library of C functions, prototype of a function: formal parameter list, return type, function call, block structure, passing arguments to a function: call by reference, call by value.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Program structure: Storage classes, automatic variables, external variables, static variables, multifile programs, more library functions. Preprocessor: Features, #define and #include, Directives and Macros. Arrays: Definition, processing, passing arrays to functions, multidimensional arrays, arrays and strings.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Pointers: Fundamentals, declarations, Pointers Address Operators, Pointer Type Declaration, Pointer Assignment, Pointer Initialization, Pointer Arithmetic, Functions and Pointers, Arrays And Pointers, Pointer Arrays, passing functions to other functions. Structures and Unions: Structure Variables, Initialization, Structure Assignment, Nested Structure, Structures and Functions, Structures and Arrays: Arrays of Structures, Structures Containing Arrays, Unions, Structures and pointers.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Programming with C', authors: 'Byron Gottfried', publisher: 'Tata McGraw-Hill', edition: '2nd', year: '1996' },
      { title: 'Programming Logic and Design', authors: 'Joyce Farrell', publisher: 'Cengage Learning', edition: '8th', year: '2014' },
      { title: '“C” Programming', authors: 'Brian W. Kernighan and Denis M. Ritchie', publisher: 'PHI', edition: '2nd' },
      { title: 'Let us C', authors: 'Yashwant P. Kanetkar', publisher: 'BPB Publication' },
      { title: 'C for beginners', authors: 'Madhusudan Mothe', publisher: 'X-Team Series', edition: '1st', year: '2008' },
      { title: '21st Century C', authors: 'Ben Klemens', publisher: 'O’Reilly', edition: '1st', year: '2012' },
    ],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – I, Course Code TCSCUSDS102 (PDF pages 3–5)',
  },
  TCSCUSDSP102: {
    syllabusCode: 'TCSCUSDSP102',
    syllabusTitle: 'Essentials of Programming with C Practical',
    semesterLabelInSource: 'Semester – I (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS102',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical implementation corresponding to TCSCUSDS102 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS102).'],
    units: [],
    references: [],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – I, Course Code TCSCUSDSP102 (PDF page 4). Individual lab exercise list is not itemized in the syllabus.',
  },

  TCSCUSDS103: {
    syllabusCode: 'TCSCUSDS103',
    syllabusTitle: 'Communication Skill in English',
    semesterLabelInSource: 'Semester – I (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP103',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of skills in communication.',
      'This course aims to provide the basics understanding of technicalities in business communication.',
    ],
    courseOutcome: ['Understand importance of communication in business.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'The Seven Cs of Effective Communication: Completeness, Conciseness, Consideration, Concreteness, Clarity, Courtesy, Correctness. Understanding Business Communication: Nature and Scope of Communication, Non-verbal Communication, Cross-cultural communication, Technology-enabled Business Communication.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Writing Business Messages and Documents: Business writing, Business Correspondence, Instructions Business Reports and Proposals, Career building and Resume writing. Developing Oral Communication Skills for Business: Effective Listening, Business Presentations and Public Speaking, Conversations, Interviews.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Understanding Specific Communication Needs: Corporate Communication, Persuasive Strategies in Business Communication, Ethics in Business Communication, Business Communication Aids.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Presentation Process: Planning the presentations, executing the presentations, Impressing the audience by performing; Planning stage: Brainstorming, mind maps / concept maps; executing stage: chunking theory, creating outlines, Use of templates. Adding graphics to your presentation: Visual communication; Impress stage: use of font, colour, layout, Importance of practice and performance.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Overview and Issues: Problems: Toxins, Power Consumption, Equipment Disposal, Company’s Carbon Footprint: Measuring, Details, reasons to bother, Plan for the Future, Cost Savings: Hardware, Power. Initiatives and Standards: Global Initiatives: United Nations, Basel Action Network, Basel Convention; North America: The United States, Canada, Australia; Europe: WEEE Directive, RoHS, National Adoption; Asia: Japan, China, Korea.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Business Communication', authors: 'Meenakshi Raman and Prakash Singh', publisher: 'Oxford University Press', edition: '2nd' },
      { title: 'Professional Communication', authors: 'Aruna Koneru', publisher: 'Tata McGraw Hill' },
      { title: 'Strategies for improving your business communication', authors: 'Prof. M. S. Rao', publisher: 'Shroff Publishers & Distributors', year: '2016' },
      { title: 'Business Communication', authors: 'Dr. Rishipal and Dr. Jyoti Sheoran', publisher: 'SPD', year: '2014' },
    ],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – I, Course Code TCSCUSDS103 (PDF pages 5–7)',
    discrepancyNote: 'Unit V includes e-waste/green IT standards (WEEE, RoHS, Basel Convention).',
  },
  TCSCUSDSP103: {
    syllabusCode: 'TCSCUSDSP103',
    syllabusTitle: 'Communication Skill in English Practical',
    semesterLabelInSource: 'Semester – I (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS103',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical exercises corresponding to TCSCUSDS103 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS103).'],
    units: [],
    references: [],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – I, Course Code TCSCUSDSP103 (PDF page 6)',
  },

  TCSCUSDS104: {
    syllabusCode: 'TCSCUSDS104',
    syllabusTitle: 'Linear Algebra and Basics of Calculus',
    semesterLabelInSource: 'Semester – I (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP104',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of linear algebra.',
      'This course aims to provide the basics understanding of calculus.',
    ],
    courseOutcome: ['Understand importance of linear algebra.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Determinants and its Properties. Matrices: Inverse of a matrix, addition, multiplication and transpose of a matrix. Types of Matrices (symmetric, skew-symmetric, Hermitian, Skew Hermitian, Unitary, Orthogonal Matrices and properties of Matrices). Rank of a Matrix using Echelon forms, reduction to normal form, Determinants, Properties of determinants. Systems of homogeneous and non-homogeneous linear equations, their consistency and solutions.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Characteristic equation, Eigen values, Eigen vectors and Eigen spaces, properties of Eigen values and Eigen vectors, Cayley-Hamilton theorem (without proof), examples based on verification of Cayley-Hamilton theorem, Similarity of matrices, Diagonalisation of matrices.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Groups, rings, ideals, fields: basic understanding of these abstract structures and their properties. Vectors in n-dimensional vector space: properties, dot product, cross product, norm and distance properties in n-dimensional vector space. Vector spaces over real field, properties of vector spaces over real field, subspaces. Linear independence, dependence and dimension.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Function of Several Variables. Partial Differentiation: Partial derivatives of first and higher order. Total differentials, differentiation of composite and implicit functions. Applications of Partial Differentiation: Maxima and Minima of a function of two independent variables, Jacobian Matrix and Hessian Matrix.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Beta and Gamma functions and its properties. Double integration—definition, Evaluation of Double Integrals. Triple integration definition and evaluation (Cartesian, cylindrical and spherical polar coordinates). Application of double integrals to compute Area. Application of triple integral to compute volume.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'A Course in Abstract Algebra', authors: 'Vijay K Khanna and S K Bhambri', publisher: 'Vikas', edition: '5th', year: '2017' },
      { title: 'Elementary Engineering Mathematics (For I & II Semesters of B. Tech. & Diploma Courses)', authors: 'B. S. Grewal', publisher: 'Khanna', edition: '15th', year: '2004' },
    ],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – I, Course Code TCSCUSDS104 (PDF pages 8–9)',
  },
  TCSCUSDSP104: {
    syllabusCode: 'TCSCUSDSP104',
    syllabusTitle: 'Linear Algebra and Basics of Calculus Practical',
    semesterLabelInSource: 'Semester – I (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS104',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical problem-solving/computation corresponding to TCSCUSDS104 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS104).'],
    units: [],
    references: [],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – I, Course Code TCSCUSDSP104 (PDF page 8)',
  },

  TCSCUSDS105: {
    syllabusCode: 'TCSCUSDS105',
    syllabusTitle: 'Data Analysis using Spread Sheet(VBA)',
    semesterLabelInSource: 'Semester – I (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP105',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Data analysis.',
      'This course aims to provide the basics understanding of using Excel for Data Analysis.',
    ],
    courseOutcome: ['Understand importance of Data analysis using Excel.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'GETTING STARTED WITH EXCEL: Getting Started, Excel and Spreadsheets, Launching Excel, Viewing the Excel Window, Running Excel Commands, Excel Workbooks and Worksheets, Opening a Workbook, Scrolling through a Workbook, Worksheet Cells, Selecting a Cell, Moving Cells, Printing from Excel, Previewing the Print Job, Setting Up the Page, Printing the Page, Saving Your Work, Excel Add-Ins, Unloading an Add-In, Hidden Data, Linked Formulas, Setup Options, Exiting Excel.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'WORKING WITH DATA: Data Entry, Entering Data from the Keyboard, Entering Data with Autofill, Inserting New Data, Data Formats, Formulas and Functions, Inserting a Simple Formula, Inserting an Excel Function, Cell References, Range Names, Sorting Data, Querying Data, Using the AutoFilter, Using the Advanced Filter, Using Calculated Values, Importing Data from Text Files, Importing Data from Databases, Using Excel’s Database Query Wizard, Specifying Criteria and Sorting Data.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'DESCRIBING YOUR DATA: Variables and Descriptive Statistics, Frequency Tables, Creating a Frequency Table, Using Bins in a Frequency Table, Defining Your Own Bin Values, Working with Histograms, Creating a Histogram, Shapes of Distributions, Breaking a Histogram into Categories, Working with Stem and Leaf Plots, Distribution Statistics, Percentiles and Quartiles, Measures of the Center: Means, Medians, and the Mode.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Using the Database Functions: Quickly Reviewing Functions, Understanding function syntax rules, Entering a function manually, Entering a function with the Function command, Using the DAVERAGE Function, Using the DCOUNT and DCOUNTA Functions, Using the DGET Function, Using the DMAX Function, Using the DPRODUCT Function, Using the DSUM Function.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'TABLES: PivotTables, Removing Categories from a PivotTable, Changing the Values Displayed by the PivotTable, Displaying Categorical Data in a Bar Chart, Displaying Categorical Data in a Pie Chart, Two-Way Tables, Computing Expected Counts, The Pearson Chi-Square Statistic, Concept Tutorials: The χ² Distribution, Working with the χ² Distribution in Excel, Breaking Down the Chi-Square Statistic, Other Table Statistics, Validity of the Chi-Square Test with Small Frequencies.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Data Analysis with Microsoft Excel Updated for Office 2007', authors: 'Kenneth N. Berk and Patrick Carey', publisher: 'Microsoft Press' },
      { title: 'Microsoft Excel 2013: Data Analysis and Business Modeling', authors: 'Wayne L. Winston', publisher: 'Microsoft Press' },
      { title: 'Microsoft Excel 2016 Step by Step', authors: 'Curtis Frye', publisher: 'Microsoft Press' },
      { title: 'Excel Data Analysis for Dummies', authors: 'Stephen L. Nelson and E. C. Nelson', publisher: 'Microsoft Press' },
    ],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – I, Course Code TCSCUSDS105 (PDF pages 10–11)',
    discrepancyNote: 'Although titled "Spread Sheet(VBA)", the five documented syllabus units focus on Excel formulas, descriptive statistics, histograms, database functions, PivotTables, and Chi-Square contingency tables; VBA programming is not explicitly itemized in the unit text.',
  },
  TCSCUSDSP105: {
    syllabusCode: 'TCSCUSDSP105',
    syllabusTitle: 'Data Analysis using Spread Sheet(VBA) Practical',
    semesterLabelInSource: 'Semester – I (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS105',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical spreadsheet analysis corresponding to TCSCUSDS105 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS105).'],
    units: [],
    references: [],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – I, Course Code TCSCUSDSP105 (PDF page 10)',
  },

  // ================= SEMESTER II =================
  TCSCUSDS201: {
    syllabusCode: 'TCSCUSDS201',
    syllabusTitle: 'Essentials of Programming with C++',
    semesterLabelInSource: 'Semester – II (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP201',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of C++ programming.',
      'This course aims to provide the basics understanding of object oriented programming.',
    ],
    courseOutcome: ['Understand importance of writing programs in C++.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Object Oriented Methodology: Introduction, Advantages and Disadvantages of Procedure Oriented Languages, what is Object Oriented?, What is Object Oriented Development?, Object Oriented Themes, Benefits and Application of OOPS. Principles of OOPS: OOPS Paradigm, Basic Concepts of OOPS: Objects, Classes, Data Abstraction and Data Encapsulation, Inheritance, Polymorphism, Dynamic Binding, Message Passing.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Classes and Objects: Simple classes (Class specification, class members accessing), Defining member functions, passing object as an argument, Returning object from functions, friend classes, Pointer to object, Array of pointer to object. Constructors and Destructors: Introduction, Default Constructor, Parameterized Constructor and examples, Destructors.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Polymorphism: Concept of function overloading, overloaded operators, overloading unary and binary operators, overloading comparison operator, overloading arithmetic assignment operator, Data Conversion between objects and basic types. Virtual Functions: Introduction and need, Pure Virtual Functions, Static Functions, this Pointer, abstract classes, virtual destructors.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Program development using Inheritance: Introduction, understanding inheritance, Advantages provided by inheritance, choosing the access specifier, Derived class declaration, derived class constructors, class hierarchies, multiple inheritance, multilevel inheritance, containership, hybrid inheritance. Exception Handling: Introduction, Exception Handling Mechanism, Concept of throw & catch with example.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Templates: Introduction, Function Template and examples, Class Template and examples. Working with Files: Introduction, File Operations, Various File Modes, File Pointer and their Manipulation.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Object Oriented Analysis and Design', authors: 'Timothy Budd', publisher: 'TMH', edition: '3rd', year: '2012' },
      { title: 'Mastering C++', authors: 'K R Venugopal, Rajkumar Buyya, T Ravishankar', publisher: 'Tata McGraw Hill', edition: '2nd', year: '2011' },
      { title: 'C++ for beginners', authors: 'B. M. Hirwani', publisher: 'SPD', year: '2013' },
      { title: 'Effective Modern C++', authors: 'Scott Meyers', publisher: 'SPD' },
      { title: 'Object Oriented Programming with C++', authors: 'E. Balagurusamy', publisher: 'Tata McGraw Hill', edition: '4th' },
    ],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – II, Course Code TCSCUSDS201 (PDF pages 12–13)',
  },
  TCSCUSDSP201: {
    syllabusCode: 'TCSCUSDSP201',
    syllabusTitle: 'Essentials of Programming with C++ Practical',
    semesterLabelInSource: 'Semester – II (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS201',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical OOP programming in C++ corresponding to TCSCUSDS201 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS201).'],
    units: [],
    references: [],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – II, Course Code TCSCUSDSP201 (PDF page 12)',
  },

  TCSCUSDS202: {
    syllabusCode: 'TCSCUSDS202',
    syllabusTitle: 'DBMS(Database Management System)',
    semesterLabelInSource: 'Semester – II (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP202',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Database Management System.',
      'This course aims to provide the basics understanding of RDBMS.',
    ],
    courseOutcome: ['Understand importance of programs in DBMS.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction to Databases and Transactions: What is database system, purpose of database system, view of data, relational databases, database architecture, transaction management. Data Models: The importance of data models, Basic building blocks, Business rules, The evolution of data models, Degrees of data abstraction.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Database Design, ER-Diagram and Unified Modeling Language: Database design and ER Model: overview, ER-Model, Constraints, ER Diagrams, ERD Issues, weak entity sets, Codd’s rules, Relational Schemas, Introduction to UML. Relational database model: Logical view of data, keys, integrity rules. Relational Database design: features of good relational database design, atomic domain and Normalization (1NF, 2NF, 3NF, BCNF).',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Relational Algebra and Calculus: Relational algebra: introduction, Selection and projection, set operations, renaming, Joins, Division, syntax, semantics, Operators, grouping and ungrouping, relational comparison. Calculus: Tuple relational calculus, Domain relational Calculus, calculus vs algebra, computational capabilities.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Constraints, Views and SQL: What is constraints, types of constraints, Integrity constraints. Views: Introduction to views, data independence, security, updates on views, comparison between tables and views. SQL: data definition, aggregate function, Null Values, nested sub queries, Joined relations, Triggers.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Transaction management and Concurrency control: Transaction management: ACID properties, serializability and concurrency control, Lock based concurrency control (2PL, Deadlocks), Time stamping methods, optimistic methods, database recovery management.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Database System and Concepts', authors: 'A Silberschatz, H Korth, S Sudarshan', publisher: 'McGraw-Hill', edition: '5th' },
      { title: 'Database Systems', authors: 'Rob, Coronel', publisher: 'Cengage Learning', edition: '7th' },
    ],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – II, Course Code TCSCUSDS202 (PDF pages 14–15)',
  },
  TCSCUSDSP202: {
    syllabusCode: 'TCSCUSDSP202',
    syllabusTitle: 'DBMS(Database Management System) Practical',
    semesterLabelInSource: 'Semester – II (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS202',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical RDBMS & SQL exercises corresponding to TCSCUSDS202 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS202).'],
    units: [],
    references: [],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – II, Course Code TCSCUSDSP202 (PDF page 14)',
  },

  TCSCUSDS203: {
    syllabusCode: 'TCSCUSDS203',
    syllabusTitle: 'Operating Systems',
    semesterLabelInSource: 'Semester – II (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP203',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Operating Systems.',
      'This course aims to provide the basics understanding of different utilities of OS.',
    ],
    courseOutcome: ['Understand importance of operating systems.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction: What is an operating system? History of operating system, computer hardware, different operating systems, operating system concepts, system calls, operating system structure. Processes and Threads: Processes, threads, interprocess communication, scheduling, IPC problems.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Memory Management: No memory abstraction, memory abstraction: address spaces, virtual memory, page replacement algorithms, design issues for paging systems, implementation issues, segmentation. File Systems: Files, directories, file system implementation, file-system management and optimization, MS-DOS file system, UNIX V7 file system, CD ROM file system.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Input-Output: Principles of I/O hardware, Principles of I/O software, I/O software layers, disks, clocks, user interfaces: keyboard, mouse, monitor, thin clients, power management. Deadlocks: Resources, introduction to deadlocks, the ostrich algorithm, deadlock detection and recovery, deadlock avoidance, deadlock prevention, issues.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Virtualization and Cloud: History, requirements for virtualization, type 1 and 2 hypervisors, techniques for efficient virtualization, hypervisor microkernels, memory virtualization, I/O virtualization, Virtual appliances, virtual machines on multicore CPUs, Clouds. Multiple Processor Systems: Multiprocessors, multicomputers, distributed systems.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Case Study on LINUX and ANDROID: History of Unix and Linux, Linux Overview, Processes in Linux, Memory management in Linux, I/O in Linux, Linux file system, security in Linux, Android. Case Study on Windows: History of windows through Windows 10, programming windows, system structure, processes and threads in windows, memory management, caching in windows, I/O in windows, Windows NT file system, Windows power management, Security in windows.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Modern Operating Systems', authors: 'Andrew S. Tanenbaum, Herbert Bos', publisher: 'Pearson', edition: '4th', year: '2014' },
      { title: 'Operating Systems – Internals and Design Principles', authors: 'William Stallings', publisher: 'Pearson', edition: '8th', year: '2009' },
      { title: 'Operating System Concepts', authors: 'Abraham Silberschatz, Peter B. Galvin, Greg Gagne', publisher: 'Wiley', edition: '8th' },
      { title: 'Operating Systems', authors: 'Godbole and Kahate', publisher: 'McGraw Hill', edition: '3rd' },
    ],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – II, Course Code TCSCUSDS203 (PDF pages 16–17)',
  },
  TCSCUSDSP203: {
    syllabusCode: 'TCSCUSDSP203',
    syllabusTitle: 'Operating Systems Practical',
    semesterLabelInSource: 'Semester – II (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS203',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical OS utilities and exercises corresponding to TCSCUSDS203 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS203).'],
    units: [],
    references: [],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – II, Course Code TCSCUSDSP203 (PDF page 16)',
  },

  TCSCUSDS204: {
    syllabusCode: 'TCSCUSDS204',
    syllabusTitle: 'Probability and Statistics',
    semesterLabelInSource: 'Semester – II (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP204',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Probability.',
      'This course aims to provide the basics understanding of Statistics.',
    ],
    courseOutcome: ['Understand importance of statistics & probability.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Concept of population and sample; Types of Characteristics; Primary data, Secondary data, Different methods of collecting Primary and Secondary Data; Types of data: Qualitative and quantitative data; Time series data and Cross section data, Panel data, Discrete and Continuous data; Tabulation; Classification- for two and three attributes; Diagrams- Simple Bar Diagram, Multiple Bar Diagram, Percentage Bar Diagram, Pie Diagram; Frequency distributions for discrete and continuous data; Graphs- Histogram, Frequency Polygon, Frequency Curve, Ogives.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Measures of central tendency: Concept, Arithmetic mean (Simple, weighted mean, combined mean), Geometric Mean, Harmonic Mean; Merits and demerits of using different measures & their applicability. Measures of Dispersion: Concept of dispersion, Requirements of good measure; Absolute and Relative measures of dispersion: Range, Quartile Deviation, Mean Deviation, Standard Deviation, Combined Standard Deviation and their Coefficients; Raw and Central Moments and their relation; Measures of Skewness and Kurtosis.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Elementary Probability Theory: Definitions of Probability; Trial, Random experiment, Sample space, Events, Mutually Exclusive, Exhaustive and Complementary Events; Axioms of probability; Conditional Probability; Independent and Dependent Events; Addition and Multiplication Laws of Probability. Probability Distributions: Random variables, Discrete and continuous random variables; Mathematical Expectation; Properties of Expectation; Binomial Distribution; Normal Distribution.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Statistical Estimation Theory: Estimation of Parameters, Unbiased Estimates, Efficient Estimates, Point Estimates and Interval Estimates; Confidence-Interval Estimates of Population Parameters, Probable Error. Elementary Sampling Theory: Sampling Theory, Random Samples and Random Numbers, Sampling With and Without Replacement. Testing of Hypotheses: Statistical Hypotheses, Type I and Type II Errors, Level of Significance, Power of a test; Two-Tailed and One-Tailed Tests, p value; Large sample tests: Test of One sample mean and proportion, Test of Two sample mean and proportion, Tests Involving Sample Differences; Small sample tests: t and F test; Chi square tests.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Correlation and regression analysis: Scatter Diagram; Pearson’s Product moment correlation coefficient and its properties; Spearman’s Rank correlation (With and without repetition); Concept of linear regression; Principle of least squares; Fitting a straight line by method of Least Squares; Properties of Regression equations.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Fundamental of Mathematical Statistics', authors: 'S.C. Gupta and V.K. Kapoor' },
      { title: 'Statistical Methods, An Introductory Text', authors: 'Medhi J', publisher: 'New Age International Ltd', edition: '2nd' },
      { title: 'Basic Statistics', authors: 'Agarwal B.L', publisher: 'New Age International Ltd' },
      { title: 'Theory and Problems of Statistics (Schaum’s Series)', authors: 'Spiegel M.R', publisher: 'Tata McGraw-Hill' },
      { title: 'Research Methodology', authors: 'Kothari C.R', publisher: 'Wiley Eastern Limited' },
      { title: 'Elementary Probability', authors: 'David S', publisher: 'Cambridge University Press' },
      { title: 'Introduction to Mathematical Statistics', authors: 'Hoel P.G', publisher: 'Asia Publishing House' },
      { title: 'Probability and Statistical Inference', authors: 'Hogg R.V. and Tanis E.P', publisher: 'McMillan Publishing Co.' },
      { title: 'Fundamentals of Statistics, Volume II', authors: 'Goon A.M., Gupta M.K., Dasgupta B', publisher: 'The World Press' },
    ],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – II, Course Code TCSCUSDS204 (PDF pages 18–20)',
    discrepancyNote: 'Transcript lists course code as UGDS3PAS0420 under Semester II (code contains "3" instead of "2").',
  },
  TCSCUSDSP204: {
    syllabusCode: 'TCSCUSDSP204',
    syllabusTitle: 'Probability and Statistics Practical',
    semesterLabelInSource: 'Semester – II (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS204',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical statistical computation corresponding to TCSCUSDS204 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS204).'],
    units: [],
    references: [],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – II, Course Code TCSCUSDSP204 (PDF page 18)',
  },

  TCSCUSDS205: {
    syllabusCode: 'TCSCUSDS205',
    syllabusTitle: 'Python Programming',
    semesterLabelInSource: 'Semester – II (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP205',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of programming in Python.',
      'This course aims to provide the basics understanding of utilities in Python.',
    ],
    courseOutcome: ['Understand importance of programs in Python.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction: The Python Programming Language, History, features, Installing Python, Running Python program, Debugging: Syntax Errors, Runtime Errors, Semantic Errors, Experimental Debugging, Formal and Natural Languages, The Difference Between Brackets, Braces, and Parentheses. Variables and Expressions: Values and Types, Variables, Variable Names and Keywords, Type conversion, Operators and Operands, Expressions, Interactive Mode and Script Mode, Order of Operations. Conditional Statements: if, if-else, nested if-else. Looping: for, while, nested loops. Control statements: Terminating loops, skipping specific conditions.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Functions: Function Calls, Type Conversion Functions, Math Functions, Composition, Adding New Functions, Definitions and Uses, Flow of Execution, Parameters and Arguments, Variables and Parameters Are Local, Stack Diagrams, Fruitful Functions and Void Functions, Why Functions?, Importing with from, Return Values, Incremental Development, Composition, Boolean Functions, More Recursion, Leap of Faith, Checking Types. Strings: A String Is a Sequence, Traversal with a for Loop, String Slices, Strings Are Immutable, Searching, Looping and Counting, String Methods, The in Operator, String Comparison, String Operations.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Lists: Values and Accessing Elements, Lists are mutable, traversing a List, Deleting elements from List, Built-in List Operators, Concatenation, Repetition, In Operator, Built-in List functions and methods. Tuples and Dictionaries: Tuples, Accessing values in Tuples, Tuple Assignment, Tuples as return values, Variable-length argument tuples, Basic tuple operations, Built-in Tuple Functions, Creating a Dictionary, Accessing Values in a dictionary, Updating Dictionary, Deleting Elements from Dictionary, Properties of Dictionary keys, Built-In Dictionary Functions and Methods. Files: Text Files, The File Object Attributes, Directories.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Regular Expressions: Concept of regular expression, various types of regular expressions, using match function. Classes and Objects: Overview of OOP (Object Oriented Programming), Class Definition, Creating Objects, Instances as Arguments, Instances as return values, Built-in Class Attributes, Inheritance, Method Overriding, Data Encapsulation, Data Hiding. Multithreaded Programming: Thread Module, creating a thread, synchronizing threads, multithreaded priority queue. Modules: Importing module, Creating and exploring modules, Math module, Random module, Time module.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          '[Duplicate text printed in official FY syllabus PDF — repeats Unit II verbatim: Functions & Strings.] Note: Official syllabus document duplicates Unit II content inside the Unit V row; no distinct Unit V topic list is documented in the source PDF.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Think Python', authors: 'Allen Downey', publisher: 'O’Reilly', edition: '1st', year: '2012' },
      { title: 'An Introduction to Computer Science using Python 3', authors: 'Jason Montojo, Jennifer Campbell, Paul Gries', publisher: 'SPD', edition: '1st', year: '2014' },
      { title: 'Python GUI Programming Cookbook', authors: 'Burkhard A. Meier', publisher: 'Packt', year: '2015' },
      { title: 'Introduction to Problem Solving with Python', authors: 'E. Balagurusamy', publisher: 'TMH', edition: '1st', year: '2016' },
      { title: 'Murach’s Python programming', authors: 'Joel Murach, Michael Urban', publisher: 'SPD', edition: '1st', year: '2017' },
      { title: 'Object-oriented Programming in Python', authors: 'Michael H. Goldwasser, David Letscher', publisher: 'Pearson Prentice Hall', edition: '1st', year: '2008' },
      { title: 'Exploring Python', authors: 'Budd', publisher: 'TMH', edition: '1st', year: '2016' },
    ],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – II, Course Code TCSCUSDS205 (PDF pages 20–23)',
    discrepancyNote: 'In the official FY syllabus PDF, Unit V duplicates the exact text of Unit II (printing/editing error in source document).',
  },
  TCSCUSDSP205: {
    syllabusCode: 'TCSCUSDSP205',
    syllabusTitle: 'Python Programming Practical',
    semesterLabelInSource: 'Semester – II (F.Y.B.Sc. Revised Syllabus 2020–2021)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS205',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical Python programming corresponding to TCSCUSDS205 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS205).'],
    units: [],
    references: [],
    sourceDocument: 'FY_BSC_DS_2020_Revised_Syllabus_with_course_code / fyds_syllabus.txt',
    sourceSectionNote: 'Semester – II, Course Code TCSCUSDSP205 (PDF page 21)',
  },

  // ================= SEMESTER III =================
  TCSCUSDS301: {
    syllabusCode: 'TCSCUSDS301',
    syllabusTitle: 'Sampling & Descriptive Statistics',
    semesterLabelInSource: 'Semester – III (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP301',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of statistical techniques.',
      'This course aims to provide the basics understanding of Sampling and distribution.',
    ],
    courseOutcome: ['Understand importance of sampling and distribution.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Concept of population and sample, complete enumeration versus sampling, sampling and non-sampling errors. Types of sampling: non-probability and probability sampling, basic principle of sample survey, simple random sampling with and without replacement (SRSWR / SRSWOR), definition and procedure of selecting a sample, Estimates of: population mean, total and proportion, variances of these estimates, estimates of their variances and sample size determination.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Stratified random sampling: Technique, estimates of population mean and total, variances of these estimates, proportional and optimum allocations and their comparison with SRS. Practical difficulties in allocation, estimation of gain in precision, post stratification and its performance. Systematic Sampling: Technique, estimates of population mean and total, variances of these estimates (N = n × k). Comparison of systematic sampling with SRS & stratified sampling in the presence of linear trend and corrections.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Introduction to Ratio and regression methods of estimation, first approximation to the population mean and total (for SRS of large size), MSE of these estimates and estimates of these variances, MSE in terms of correlation coefficient for regression method of estimation and their comparison with SRS. Cluster sampling (equal clusters only) estimation of population mean and its variance, comparison (with and without randomly formed clusters). Concept of sub sampling, Two-stage Sampling, Estimation of Population mean and variance of the estimate.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Introduction to prediction using time-series regression methods with non-seasonal and seasonal data. Smoothing methods for forecasting. Modelling and forecasting using univariate, autoregressive, moving average models. Consumer price Index, Wholesale price index number and index of industrial production.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Analysis of data on two characters: Measures of association and contingency-table. Analysis of categorical data: Fundamental set of frequencies, consistency of data, association of attributes and various measurement of association. Bivariate data: principles of least squares & fitting of first, second and third degree. Concept of correlation coefficient & its properties, correlation ratio, polynomial regression and correlation index. Rank correlation coefficient due to Spearman and Kendall. Partial and multiple correlation.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Sampling Techniques', authors: 'W. G. Cochran', publisher: 'Wiley Eastern', year: '1984' },
      { title: 'Fundamentals of Statistics (Vol 2)', authors: 'Goon A.M., Gupta M.K. and Dasgupta B.', publisher: 'World Press', edition: 'Vol 2', year: '2008' },
      { title: 'Advanced Theory of Statistics', authors: 'Kendall and Stuart', publisher: 'PHI' },
      { title: 'Fundamentals of Mathematical Statistics', authors: 'Gupta & Kapoor', publisher: 'S Chand' },
      { title: 'Sampling Theory & Statistical Methods', authors: 'M. N. Murthy', publisher: 'Statistical Pub. Society', year: '1977' },
      { title: 'Sample Survey Theory', authors: 'Des Raj and P. Chandhok', publisher: 'Narosa Publishing House', year: '1998' },
    ],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – III, Course Code TCSCUSDS301 (PDF pages 2–4)',
  },
  TCSCUSDSP301: {
    syllabusCode: 'TCSCUSDSP301',
    syllabusTitle: 'Sampling & Descriptive Statistics Practical',
    semesterLabelInSource: 'Semester – III (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS301',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical sampling & statistical analysis corresponding to TCSCUSDS301 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS301).'],
    units: [],
    references: [],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – III, Course Code TCSCUSDSP301 (PDF page 2)',
  },

  TCSCUSDS302: {
    syllabusCode: 'TCSCUSDS302',
    syllabusTitle: 'Advance SQL',
    semesterLabelInSource: 'Semester – III (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP302',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of PL/SQL.',
      'This course aims to provide the basics understanding of Queries and programs in database.',
    ],
    courseOutcome: ['Understand importance of software development using Pl/SQL.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Structured Query Language: Writing Basic SQL Select Statements, Restricting and Sorting Data, Single-Row Functions, Multi-table Queries (Joins): Equi-Joins, Parent/Child Queries, Natural Joins, Queries with Three or More Tables, Non-Equi-Joins, Self-Joins, Table Aliases, Multi-table Query Performance, Outer Joins, Left and Right Outer Joins.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Grouped Queries (GROUP BY Clause), Multiple Grouping Columns, HAVING Clause, NULL Values, Enhancements to Group by clause (CUBE, ROLLUP and GROUPING). Sub-queries and Query Expressions: Sub-queries in WHERE and HAVING clauses, Outer References, Comparison Tests, IN, EXISTS, ANY, ALL, Nested and Correlated Sub-queries, Scalar-Valued, Row-Valued and Table-Valued Expressions, Multiple column sub-queries, Sub-queries in FROM clause, WITH Clause, Hierarchical retrieval.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'PL/SQL Control Structures: IF and CASE statements, Loops (LOOP, WHILE, FOR, CONTINUE). Composite data types: PL/SQL records, %ROWTYPE attribute, INDEX BY tables. Explicit Cursors: Declare, Open, Fetch, Close, Cursor FOR loop, %NOTFOUND and %ROWCOUNT attributes, FOR UPDATE and WHERE CURRENT clauses. Exception Handling: Predefined and non-predefined Oracle Server Errors, User-Defined Exceptions, RAISE_APPLICATION_ERROR Procedure.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Stored Procedures, Stored Functions and Packages: Modularized subprogram design, Anonymous Blocks vs Subprograms, Parameters and Parameter Modes, Stored Functions invoked in SQL statements, Debugging subprograms, Packages (Specification and Body), Data Dictionary inspection, Subprogram Overloading, Forward Declarations, Persistent State of Packages and Package Cursors.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Dynamic SQL: Execution Flow of SQL, Cursor Variables, Native Dynamic SQL, DBMS_SQL Package. Triggers: DML Triggers (CREATE TRIGGER), Statement-Level and Row-Level Triggers, INSTEAD OF and Disabled Triggers, Compound Triggers, Mutating Table Error resolution, DDL Triggers, Database-Event and System-Event Triggers, System Privileges.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Murach’s Oracle SQL and PLSQL', authors: 'Joel Murach', publisher: 'Murach and Associates' },
      { title: 'Oracle Database 11g PL/SQL Programming Workbook', authors: 'Michael McLaughlin, John Harper', publisher: 'Tata McGraw-Hill' },
      { title: 'Oracle PL/SQL Programming', authors: 'Steven Feuerstein, Bill Pribyl', publisher: 'O’Reilly', edition: '5th' },
      { title: 'Expert Oracle PL/SQL', authors: 'Ron Hardman, Michael McLaughlin', publisher: 'Tata McGraw-Hill' },
    ],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – III, Course Code TCSCUSDS302 (PDF pages 4–7)',
  },
  TCSCUSDSP302: {
    syllabusCode: 'TCSCUSDSP302',
    syllabusTitle: 'Advance SQL Practical',
    semesterLabelInSource: 'Semester – III (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS302',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical SQL & PL/SQL exercises corresponding to TCSCUSDS302 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS302).'],
    units: [],
    references: [],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – III, Course Code TCSCUSDSP302 (PDF page 5)',
  },

  TCSCUSDS303: {
    syllabusCode: 'TCSCUSDS303',
    syllabusTitle: 'Technical Communication and content writing',
    semesterLabelInSource: 'Semester – III (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP303',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of content writing.',
      'This course aims to provide the basic understanding of technicality in content writing.',
    ],
    courseOutcome: ['Understand importance of technical content writing'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction to Technical Communication: Characteristics and Measures of Excellence in Technical Documents; Writing Technical Documents (Planning, Drafting, Revising, Editing, Proofreading); Introduction to Content Writing (Articles, Blogs, E-Books, Press Releases, Newsletters); Blog Creation, Landing Pages, AMP, UI/UX Experience.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Writing Collaboratively: Project management, meetings, electronic collaboration tools, WordPress, cross-cultural collaboration. Understanding Ethical and Legal Considerations: Ethics, Legal obligations, social media ethics, cross-cultural communication. Organizing and Emphasizing Information.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Creating Graphics: Functions and characteristics of effective graphics, color, multicultural readers. Researching Your Subject: Academic vs Workplace research, secondary and primary research. Research and Documentation: Literature Reviews, Interviewing, Documenting Sources, Copyright, Paraphrasing, Questionnaires. Report Components: Abstracts, Executive Summaries, Feasibility, Investigative, Laboratory, and Test Reports.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Writing Proposals: Logistics, deliverables, persuasion, proposal structure. Writing Informational Reports: Directives, field reports, progress/status reports, incident reports, meeting minutes. Writing Recommendation Reports: Problem-solving model.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Reviewing, Evaluating, and Testing Documents and Websites: Usability Evaluations, Usability Tests, Quality checking tools, Duplicate Content Detector, Plagiarism avoidance. Making Oral Presentations: Prezi, slides, audio editing. Content Writing Tools & Introduction to HTML.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Technical Communication', authors: 'Mike Markel', publisher: 'Bedford/St. Martin’s', edition: '11th', year: '2014' },
      { title: 'Innovation Management and New Product Development', authors: 'Paul Trott', publisher: 'Pearson', edition: '6th', year: '2017' },
      { title: 'Handbook of Technical Writing', authors: 'Gerald J. Alred, Charles T. Brusaw, Walter E. Oliu', publisher: 'Bedford/St. Martin’s', edition: '9th', year: '2008' },
      { title: 'Technical Writing 101', authors: 'Alan S. Pringle and Sarah S. O’Keefe', publisher: 'Scriptorium', edition: '3rd', year: '2009' },
    ],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – III, Course Code TCSCUSDS303 (PDF pages 8–10)',
  },
  TCSCUSDSP303: {
    syllabusCode: 'TCSCUSDSP303',
    syllabusTitle: 'Technical Communication and content writing Practical',
    semesterLabelInSource: 'Semester – III (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS303',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical writing/documentation exercises corresponding to TCSCUSDS303 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS303).'],
    units: [],
    references: [],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – III, Course Code TCSCUSDSP303 (PDF page 8)',
  },

  TCSCUSDS304: {
    syllabusCode: 'TCSCUSDS304',
    syllabusTitle: 'Ad. R Programming',
    semesterLabelInSource: 'Semester – III (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP304',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Advance R Programming.',
      'Understanding the importance of Data science advance level concepts using R.',
    ],
    courseOutcome: [
      'Understand importance of Advance R Programming.',
      'Analyze data using Advance R Concepts.',
    ],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Foundation: Data structures in R (Vectors, Atomic vectors, Lists, Attributes, Factors, Matrices and arrays, Data frames). Subsetting: Subsetting operators, subsetting and assignment, Applications. Vocabulary & I/O, Style guide.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Functions: Function components, Lexical scoping, Special calls, Function arguments. OO field guide: S3, S4, RC, Picking a system. Environments: Environment basics, Recursing over environments, Function environments, Binding names to values, Explicit environments. Debugging, condition handling, and defensive programming.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Functional programming: Anonymous functions, Closures, Lists of functions. Functionals: lapply(), Loop functionals, Manipulating matrices and data frames, Manipulating lists, Mathematical functionals. Function operators: Behavioural, I/O, Combining FOs. Computing on the language: Non-standard evaluation, substitute.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Expressions: Structure of expressions, Names, Calls, Pairlists, Parsing and deparsing, Walking the AST with recursive functions. Domain specific languages (HTML, LaTeX, Customizing graphics). Recommender System: collaborative filtering, Content based, Knowledge-based recommender system, R-package for recommendation, Data exploration, preparation, Evaluating recommender system.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Clustering: Non-hierarchical clustering (k-means), Hierarchical Classification (dendrogram), Comparing those two methods, Density estimation. Performance: Implementation and Language performance, Alternative R implementations. Optimizing code: Memory, High performance functions with Rcpp, Getting started with C++, Attributes and other classes, R’s C interface, The STL, Rcpp sugar.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Advanced R', authors: 'Hadley Wickham (and John M. Chambers, Torsten Hothorn)', publisher: 'Chapman & Hall/CRC', edition: '1st', year: '2015' },
      { title: 'Building a Recommendation System with R', authors: 'Suresh K. Gorakala, Michele Usuelli', publisher: 'Packt Publishing Ltd', edition: '1st', year: '2015' },
      { title: 'Doing Data Science', authors: 'Rachel Schutt and Cathy O’Neil', publisher: 'O’Reilly', edition: '1st', year: '2013' },
    ],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – III, Course Code TCSCUSDS304 (PDF pages 10–12)',
  },
  TCSCUSDSP304: {
    syllabusCode: 'TCSCUSDSP304',
    syllabusTitle: 'Ad. R Programming Practical',
    semesterLabelInSource: 'Semester – III (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS304',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical R programming exercises corresponding to TCSCUSDS304 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS304).'],
    units: [],
    references: [],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – III, Course Code TCSCUSDSP304 (PDF page 11)',
  },

  TCSCUSDS305: {
    syllabusCode: 'TCSCUSDS305',
    syllabusTitle: 'Data Structures and Algorithm',
    semesterLabelInSource: 'Semester – III (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP305',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: ['Not separately printed in the syllabus header box (see Course Outcome).'],
    courseOutcome: ['Understand importance of Data Structures and algorithms in Data applications.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction: Data and Information, Data Structure, Classification, Primitive Data Types, Abstract Data Types, Data structure vs File Organization, Operations, Algorithm, Importance of Algorithm Analysis, Complexity of an Algorithm, Asymptotic Analysis and Notations (Big O, Big Omega Ω, Big Theta Θ), Rate of Growth. Array: 1D & Multidimensional Arrays, Memory Representation, Traversing, Insertion, Deletion, Searching, Sorting, Merging, Sparse Arrays, Sparse Matrix.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Linked List: One-way Linked List, Traversal, Searching, Memory Allocation and De-allocation, Insertion, Deletion, Copying, Merging, Splitting, Reversing, Circular Linked List, Two-way (Doubly) Linked List, Header Linked List, Representation of Polynomials, Storage of Sparse Arrays, Implementing other Data Structures.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Stack: Operations, Array & Memory Representation, Applications (Evaluation of Arithmetic Expression, Matching Parenthesis, Infix and Postfix operations, Recursion). Queue: Operations, Array & Linked List Representation, Circular Queue, Deque, Priority Queue, Applications of Queues.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Sorting and Searching Techniques: Bubble, Selection, Insertion, Merge Sort; Sequential, Binary, Indexed Sequential Searches. Tree: Binary Tree, Properties, Memory Representation, Operations, Reconstruction from Traversals, Huffman Algorithm, Binary Search Tree (BST), Heap, Memory Representation of Heap, Heap Sort. Advanced Tree Structures: Red Black Tree, AVL Tree, 2-3 Tree, B-Tree.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Hashing Techniques: Hash function, Address calculation techniques, Common hashing functions, Collision resolution (Linear probing, Quadratic, Double hashing, Bucket hashing), Deletion and rehashing. Graph: Graph Terminology, Adjacency Matrix & Adjacency List Representation, Operations, Graph Traversal, Reachability, Shortest Path Problems, Spanning Trees.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'A Simplified Approach to Data Structures', authors: 'Lalit Goyal, Vishal Goyal, Pawan Kumar', publisher: 'SPD', edition: '1st', year: '2014' },
      { title: 'An Introduction to Data Structure with Applications', authors: 'Jean-Paul Tremblay and Paul Sorenson', publisher: 'Tata McGraw Hill', edition: '2nd', year: '2007' },
      { title: 'Data Structure and Algorithm', authors: 'Maria Rukadikar', publisher: 'SPD', edition: '1st', year: '2017' },
      { title: 'Schaum’s Outlines Data structure', authors: 'Seymour Lipschutz', publisher: 'Tata McGraw Hill', edition: '2nd', year: '2005' },
      { title: 'Data structure – A Pseudocode Approach with C', authors: 'AM Tanenbaum, Y Langsam, MJ Augenstein', publisher: 'Prentice Hall India', edition: '2nd', year: '2006' },
      { title: 'Data structure and Algorithm Analysis in C', authors: 'Mark Allen Weiss', publisher: 'Addison Wesley', edition: '1st', year: '2006' },
    ],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – III, Course Code TCSCUSDS305 (PDF pages 12–15)',
  },
  TCSCUSDSP305: {
    syllabusCode: 'TCSCUSDSP305',
    syllabusTitle: 'Data Structures and Algorithms Practical',
    semesterLabelInSource: 'Semester – III (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS305',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical implementation of data structures and algorithms corresponding to TCSCUSDS305 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS305).'],
    units: [],
    references: [],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – III, Course Code TCSCUSDSP305 (PDF page 13)',
  },

  // ================= SEMESTER IV =================
  TCSCUSDS401: {
    syllabusCode: 'TCSCUSDS401',
    syllabusTitle: 'Statistical Simulation and Multivariate Analysis',
    semesterLabelInSource: 'Semester – IV (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP401',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of simulation using statistical techniques.',
      'This course aims to provide the basic understanding of multivariate analysis.',
    ],
    courseOutcome: ['Understand importance of simulation using statistics.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Simulation: Using the computer for random number generation (treated as a black box), A brief look at some popular approaches (no mathematical justification needed). Simulating a coin toss, a die roll and a card shuffle.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'CDF inversion method. Simulation from standard distributions. Finding probabilities and moments using simulation.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Monte Carlo integration. Basic idea of importance sampling. (MCMC not included.) Generating from Binomial and Poisson distributions, and comparing the histograms to the PMFs. Generating from Uniform (0,1) distribution, and applying inverse CDF transforms. Simulating Gaussian distribution using Box-Muller method. Approximating the expectation of a given function of a random variable using simulation.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Multivariate Data: multiple regression, multiple and partial correlation coefficients. Random Vector: Probability mass/density functions, Distribution function, mean vector & Dispersion matrix, Marginal & Conditional distributions. Multiple and partial correlation coefficient.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Multivariate Normal distribution and its properties. Multinomial Distribution and its properties. Tests for Multiple and partial correlation coefficients. Applications of Multivariate Analysis: Principal Components Analysis and Factor Analysis (Application Oriented discussion, derivations not required).',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Explorations in Monte Carlo Methods', authors: 'Ronald W. Shonkwiler and Franklin Mendivil', publisher: 'Springer-Verlag New York', year: '2009' },
      { title: 'Monte Carlo Simulation and Re-sampling Methods for Social Science', authors: 'Thomas M. Carsey and Jeffrey J. Harden', publisher: 'icpsr.umich.edu', year: '2014' },
      { title: 'Multivariate Analysis', authors: 'A.M. Kshirsagar', publisher: 'Marcel Dekker', edition: '1st', year: '1972' },
      { title: 'Applied Multivariate Analysis', authors: 'R.A. Johnson and D.W. Wichern', publisher: 'Pearson & Prentice Hall', edition: '6th' },
      { title: 'An Introduction to Multivariate Statistical Analysis', authors: 'T.W. Anderson', publisher: 'John Wiley', edition: '3rd', year: '2003' },
      { title: 'Aspects of Multivariate Statistical Theory', authors: 'Robb J. Muirhead', publisher: 'John Wiley', year: '1982' },
      { title: 'Fundamentals of Statistics, Vol. I', authors: 'A.M. Goon, M.K. Gupta and B. Dasgupta', publisher: 'The World Press', edition: '8th', year: '2002' },
    ],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – IV, Course Code TCSCUSDS401 (PDF pages 15–16)',
  },
  TCSCUSDSP401: {
    syllabusCode: 'TCSCUSDSP401',
    syllabusTitle: 'Statistical Simulation and Multivariate Analysis Practical',
    semesterLabelInSource: 'Semester – IV (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS401',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical simulation and multivariate exercises corresponding to TCSCUSDS401 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS401).'],
    units: [],
    references: [],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – IV, Course Code TCSCUSDSP401 (PDF page 15)',
  },

  TCSCUSDS402: {
    syllabusCode: 'TCSCUSDS402',
    syllabusTitle: 'Data Ware housing and Data mining',
    semesterLabelInSource: 'Semester – IV (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP402',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Data Warehousing.',
      'This course aims to provide the basics understanding of Data Mining.',
    ],
    courseOutcome: ['Understand importance of data warehousing and mining.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Data warehousing Components – Building a Data warehouse – Mapping the Data Warehouse to a Multiprocessor Architecture – DBMS Schemas for Decision Support – Data Extraction, Cleanup, and Transformation Tools – Metadata.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Reporting and Query tools and Applications – Tool Categories – The Need for Applications – Cognos Impromptu – Online Analytical Processing (OLAP) – Need – Multidimensional Data Model – OLAP Guidelines – Multidimensional versus Multirelational OLAP – Categories of Tools – OLAP Tools and the Internet.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Introduction – Data – Types of Data – Data Mining Functionalities – Interestingness of Patterns – Classification of Data Mining Systems – Data Mining Task Primitives – Integration of a Data Mining System with a Data Warehouse – Issues – Data Pre-processing.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Mining Frequent Patterns, Associations and Correlations – Mining Methods – Mining various Kinds of Association Rules – Correlation Analysis – Constraint Based Association Mining – Classification and Prediction – Basic Concepts – Decision Tree Induction – Bayesian Classification – Rule Based Classification – Classification by Back propagation – Support Vector Machines – Associative Classification – Lazy Learners – Other Classification Methods – Prediction.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Cluster Analysis – Types of Data – Categorization of Major Clustering Methods – K-means – Partitioning Methods – Hierarchical Methods – Density-Based Methods – Grid Based Methods – Model-Based Clustering Methods – Clustering High Dimensional Data – Constraint-Based Cluster Analysis – Outlier Analysis – Data Mining Applications.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Data Warehousing, Data Mining and OLAP', authors: 'Alex Berson and Stephen J. Smith', publisher: 'Tata McGraw-Hill', edition: '13th', year: '2008' },
      { title: 'Data Mining Concepts and Techniques', authors: 'Jiawei Han and Micheline Kamber', publisher: 'Elsevier', edition: '3rd', year: '2012' },
      { title: 'Introduction to Data Mining', authors: 'Pang-Ning Tan, Michael Steinbach and Vipin Kumar', publisher: 'Pearson Education', year: '2007' },
      { title: 'Insight into Data Mining Theory and Practice', authors: 'K.P. Soman, Shyam Diwakar and V. Ajay', publisher: 'Prentice Hall of India', year: '2006' },
      { title: 'Introduction to Data Mining with Case Studies', authors: 'G. K. Gupta', publisher: 'Prentice Hall of India', year: '2006' },
      { title: 'Data Mining Methods and Models', authors: 'Daniel T. Larose', publisher: 'Wiley-Interscience', year: '2006' },
    ],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – IV, Course Code TCSCUSDS402 (PDF pages 17–19)',
  },
  TCSCUSDSP402: {
    syllabusCode: 'TCSCUSDSP402',
    syllabusTitle: 'Data Ware housing and Data mining Practical',
    semesterLabelInSource: 'Semester – IV (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS402',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical data warehousing and data mining exercises corresponding to TCSCUSDS402 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS402).'],
    units: [],
    references: [],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – IV, Course Code TCSCUSDSP402 (PDF page 17)',
  },

  TCSCUSDS403: {
    syllabusCode: 'TCSCUSDS403',
    syllabusTitle: 'Agile Software Engineering',
    semesterLabelInSource: 'Semester – IV (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP403',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of software development life cycle.',
      'This course aims to provide the basics understanding of project management.',
    ],
    courseOutcome: ['Understand importance of software engineering and project development life cycle.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction: Software Engineering, SDLC, Requirements Analysis, Software Design, Coding, Testing, Maintenance. Software Requirements: Functional and Non-functional requirements, User/System Requirements, Interface Specification, SRS Documentation. Software Processes & Process Models: Waterfall, Prototyping, Iterative Development, RUP, RAD, Time-boxing. Agile software development: Agile methods, Plan-driven vs agile, Extreme programming, Agile project management, Scaling agile methods.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Socio-technical systems & Systems Engineering; Legacy systems. Critical systems: Dependability, Availability, Reliability, Safety, Security. System Models: Context, Behavioural, Data, Object Models, Structured Methods. Architectural Design: Architectural decisions, System organization, Modular decomposition styles, Control styles, Reference architectures.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Introduction to Software Project Management: Contract vs Technical Project Management, Project Charter, Stakeholders, Project Management Life Cycle. Project Evaluation and Program Management: Business Case, Project Portfolio Management, Cost-benefit Evaluation, Risk Evaluation, Resource Allocation. Working in Teams: Organization and team structures, coordination dependencies, dispersed and virtual teams.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Selection of an Appropriate Project Approach: Build or Buy, DSDM/Atern, Scrum, Lean Software Development. User Interface Design: UI design process, prototyping, interface evaluation. Software Quality: Quality models, ISO 9126, product vs process metrics, capability models. Verification and Validation: Software Inspections, Automated Static Analysis, Verification and Formal Methods, System Testing, Component Testing, Test Case Design, Test Automation.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Process Improvement: Process classification, measurement, analysis, CMMI framework. Service Oriented Software Engineering: Services as reusable components, service engineering. Software reuse: Application frameworks, software product lines, COTS reuse. Distributed software engineering: Distributed systems issues, Client-server computing, Architectural patterns for distributed systems, Software as a service.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Software Engineering', authors: 'Ian Sommerville', publisher: 'Pearson Education', edition: '9th', year: '2011' },
      { title: 'Software Project Management', authors: 'Bob Hughes, Mike Cotterell, Rajib Mall', publisher: 'TMH', edition: '6th', year: '2018' },
    ],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – IV, Course Code TCSCUSDS403 (PDF pages 19–21)',
  },
  TCSCUSDSP403: {
    syllabusCode: 'TCSCUSDSP403',
    syllabusTitle: 'Agile Software Engineering Practical',
    semesterLabelInSource: 'Semester – IV (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS403',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical software engineering exercises corresponding to TCSCUSDS403 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS403).'],
    units: [],
    references: [],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – IV, Course Code TCSCUSDSP403 (PDF page 19)',
  },

  TCSCUSDS405_DAV: {
    syllabusCode: 'TCSCUSDS405 (Data Visualization)',
    syllabusTitle: 'Data Visualization and Data Preparation',
    semesterLabelInSource: 'Semester – IV (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP405_DAV',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Data visualization techniques.',
      'This course aims to provide the basic understanding of data in business intelligence.',
    ],
    courseOutcome: ['Understand importance of data in business intelligence.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'The Importance of Data Visualization in Business Intelligence: Business Decision-Making, Introducing Data Visualization Techniques, Introducing Plots in Python. Data Collection Structures: Lists, Dictionaries, Tuples, Series, Data Frames, Panels. File I/O Processing and Regular Expressions.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Data Gathering and Cleaning: Checking and Handling Missing Values, Reading and Cleaning CSV Data, Merging and Integrating Data, Reading Data from JSON, HTML, and XML Formats. Data Exploring and Analysis: Series and Data Frame Data Structures. Basics of Data Exploration and Visualization with R: tidyverse, filtering, grouping, summarizing, plotting.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Loading Data into R: read.table(), read.csv(), readr. Transforming Data: filter, select(), arrange, mutate(), summarizing and grouping, piping. Creating Tidy Data: Gathering, Spreading, Separating, Uniting.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Basic Data Exploration Techniques in R: Bar charts, Histograms, Box plots, Symbol size, 2D bin and hex charts, Summary Statistics. Basic Data Visualization Techniques: Scatterplots, regression lines, faceting, theming, Violin plots, density plots, Direct Plotting, Seaborn Plotting System, Matplotlib Plot.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Visualizing Geographic Data with ggmap: Basemaps, operational data layers, Shapefiles. R Markdown: Code chunks, header options, caching, Knit output. Case Studies: Wildfire Activity in the Western United States; Single Family Residential Home and Rental Values.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Data Analysis and Visualization Using Python', authors: 'Dr. Ossama Embarak', publisher: 'Apress', edition: '1st', year: '2018' },
      { title: 'Introduction to Data Visualization and Exploration with R', authors: 'Eric Pimpler', publisher: 'Geospatial Training Services', edition: '1st', year: '2017' },
    ],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – IV, Course Code TCSCUSDS405 (PDF pages 24–26)',
    discrepancyNote: 'SY syllabus prints TCSCUSDS405 for both "Advance Python Programming" and "Data Visualization and Data Preparation" (skipping 404). Transcript assigns distinct codes: UGDS4DAV0421 ("Data Visualization") and UGDS4APP0521 ("Advance Python Programming").',
  },
  TCSCUSDSP405_DAV: {
    syllabusCode: 'TCSCUSDSP405 (Data Visualization Practical)',
    syllabusTitle: 'Data Visualization and Data Preparation Practical',
    semesterLabelInSource: 'Semester – IV (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS405_DAV',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical data cleaning and visualization corresponding to Data Visualization and Data Preparation (10 Practicals).'],
    courseOutcome: ['Not separately listed in syllabus.'],
    units: [],
    references: [],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – IV, Course Code TCSCUSDSP405 (PDF page 24)',
  },

  TCSCUSDS405_APP: {
    syllabusCode: 'TCSCUSDS405 (Advance Python)',
    syllabusTitle: 'Advance Python Programming',
    semesterLabelInSource: 'Semester – IV (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP405_APP',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of advanced features of Python.',
      'This course aims to provide the basic understanding of project development using Python.',
    ],
    courseOutcome: ['Understand importance of advanced features of Python.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Sets & FrozenSet in Python: Initialization, List vs Set, Membership tests, Union/Intersect/Difference/Symmetric operations, FrozenSet differences. Python Lambda Functions: Usage with filter, map, reduce.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'NumPy Library: ndarray object, data types, array attributes, creating arrays, indexing/slicing, broadcasting, array manipulation, mathematical/string/arithmetic/statistical functions, sort/search/count, File I/O with NumPy. SciPy Library: Constants, FFT, Interpolate, Linalg, NdImage, Special sub-packages.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Matplotlib Library: 2D visualization (bar graph, histogram, scatter plot, area plot, pie chart). Seaborn Library: Differences vs Matplotlib, relplot, categorical plots, multi-plot grids, color palettes.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Pandas Library: Series, DataFrame, Panel data structures, creating from datasets, descriptive statistics, iteration, sort operations, window functions, aggregation, handling missing data, Group By, merging data.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Socket Programming: Sockets, Client, Servers, Socket Module, simple client-server application. Sending Email in Python: SMTP configuration, simple email, HTML text, attachments.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Core Python Programming', authors: 'R. Nageswara Rao', publisher: 'Dreamtech', edition: '2nd', year: '2018' },
      { title: 'Python for Data Analysis', authors: 'Wes McKinney', publisher: 'O’Reilly', edition: '2nd', year: '2018' },
      { title: 'Python Crash Course', authors: 'Eric Matthes', publisher: 'No Starch / William Pollock', edition: '2nd', year: '2019' },
      { title: 'Let Us Python', authors: 'Yashavant Kanetkar, Aditya Kanetkar', publisher: 'BPB', edition: '1st', year: '2019' },
      { title: 'Python for Data Science for Dummies', authors: 'John Paul Mueller', publisher: 'O’Reilly', edition: '2nd', year: '2019' },
      { title: 'Programming Python', authors: 'Mark Lutz', publisher: 'O’Reilly', edition: '3rd', year: '2018' },
      { title: 'Learning Python Network Programming', authors: 'Dr. M.O. Faruque Sarker', publisher: 'O’Reilly', edition: '1st', year: '2015' },
    ],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – IV, Course Code TCSCUSDS405 (PDF pages 22–23)',
    discrepancyNote: 'SY syllabus prints TCSCUSDS405 for both Advance Python Programming and Data Visualization and Data Preparation.',
  },
  TCSCUSDSP405_APP: {
    syllabusCode: 'TCSCUSDSP405 (Advance Python Practical)',
    syllabusTitle: 'Advance Python Programming Practical',
    semesterLabelInSource: 'Semester – IV (S.Y.B.Sc. Syllabus 2021–2022)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS405_APP',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical Python scientific computing (NumPy, SciPy, Pandas, Matplotlib/Seaborn, Sockets) corresponding to Advance Python Programming (10 Practicals).'],
    courseOutcome: ['Not separately listed in syllabus.'],
    units: [],
    references: [],
    sourceDocument: 'SY_BSC_DS_2021_-_22_REVISED_Syllabus_with_course_code / syds_syllabus.txt',
    sourceSectionNote: 'Semester – IV, Course Code TCSCUSDSP405 (PDF page 22)',
  },

  // ================= SEMESTER V =================
  TCSCUSDS501: {
    syllabusCode: 'TCSCUSDS501',
    syllabusTitle: 'Software Project Management',
    semesterLabelInSource: 'Semester – V (T.Y.B.Sc. Syllabus)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP501',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Project management.',
      'This course aims to provide the basics understanding of how to schedule project with different development strategies.',
    ],
    courseOutcome: ['Understand importance of project development within timeline and maintaining profitability.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction to Software Project Management, Project Evaluation and Programme Management, Overview of Step Wise Project Planning (Steps 0–10: scope, infrastructure, effort, risk, resource allocation, execution).',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Selection of an Appropriate Project Approach (Waterfall, Spiral, Prototyping, Incremental, DSDM, RAD, Agile, XP, Scrum, Lean). Software Effort Estimation (Bottom-up, Top-down, Parametric Models, Expert Judgement, Function Point Analysis, COSMIC, COCOMO II, Cost Estimation).',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Activity Planning (Network planning models, Forward/Backward Pass, Critical Path, Activity Float, Activity-on-Arrow). Risk Management (Risk identification/assessment, Boehm’s Top 10 Risks, PERT, Monte Carlo Simulation, Critical Chain). Resource Allocation and Cost Schedules.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Monitoring and Control (Earned Value Analysis, Change Control, Software Configuration Management). Managing Contracts (Types, stages, acceptance). Managing People in Software Environments (Organizational behaviour, motivation, Oldham-Hackman model, ethics).',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Working in Teams (Team structures, virtual teams, communication plans, leadership). Software Quality (ISO 9126, product/process metrics, capability models, testing, reliability). Project Closeout (Financial closure, closeout report).',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Software Project Management', authors: 'Bob Hughes, Mike Cotterell, Rajib Mall', publisher: 'TMH', edition: '6th', year: '2018' },
      { title: 'Project Management and Tools & Technologies – An overview', authors: 'Shailesh Mehta', publisher: 'SPD', edition: '1st', year: '2017' },
      { title: 'Software Project Management', authors: 'Walker Royce', publisher: 'Pearson', year: '2005' },
    ],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – V, Course Code TCSCUSDS501 (Lines 43–75)',
  },
  TCSCUSDSP501: {
    syllabusCode: 'TCSCUSDSP501',
    syllabusTitle: 'Project Stage I (Syllabus) / Practical of Software Project Management (Transcript)',
    semesterLabelInSource: 'Semester – V (T.Y.B.Sc. Syllabus)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS501',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Listed under Software Project Management in TY syllabus as "Project Stage I" (TCSCUSDSP501).'],
    courseOutcome: ['Not separately listed in syllabus.'],
    units: [],
    references: [],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – V, Course Code TCSCUSDSP501 (Lines 50–55)',
    discrepancyNote: 'Transcript titles this entry "Practical of Software Project Management" (UGDS5SPMP122), whereas TY syllabus labels TCSCUSDSP501 "Project Stage I". Mapping between practical and project stage requires college confirmation.',
  },

  TCSCUSDS502: {
    syllabusCode: 'TCSCUSDS502',
    syllabusTitle: 'Artificial intelligence',
    semesterLabelInSource: 'Semester – V (T.Y.B.Sc. Syllabus)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP502',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Artificial Intelligence.',
      'This course aims to provide the basic understanding of role of AI towards Data Analytics.',
    ],
    courseOutcome: ['Understand importance of AI in Data Science and apply in analytics.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction: What is Artificial Intelligence? Foundations of AI, history, state of the art AI. Intelligent Agents: agents and environment, good behavior, nature of environment, structure of agents.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Solving Problems by Searching: Problem solving agents, uninformed search, informed search strategies, heuristic functions. Beyond Classical Search: local search algorithms, searching with non-deterministic action, searching with partial observations, online search agents and unknown environments.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Adversarial Search: Games, optimal decisions in games, alpha-beta pruning, stochastic games, partially observable games. Logical Agents: Knowledge base agents, The Wumpus world, logic, propositional logic, propositional theorem proving, effective propositional model checking, agents based on propositional logic.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'First Order Logic: Syntax and semantics, using First Order Logic, Knowledge engineering in First Order Logic. Inference in First Order Logic: propositional vs First Order, unification and lifting, forward and backward chaining, resolution.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Planning: Classical Planning, Algorithms for planning as state space search, planning graphs, hierarchical planning, Planning and Acting in Nondeterministic Domains, multiagent planning. Knowledge Representation: Categories and Objects, events, mental events and objects, reasoning systems for categories, reasoning with default information.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Artificial Intelligence: A Modern Approach', authors: 'Stuart Russell and Peter Norvig', publisher: 'Pearson', edition: '3rd', year: '2015' },
      { title: 'A First Course in Artificial Intelligence', authors: 'Deepak Khemani', publisher: 'TMH', edition: '1st', year: '2017' },
      { title: 'Artificial Intelligence: A Rational Approach', authors: 'Rahul Deva', publisher: 'Shroff Publishers', edition: '1st', year: '2018' },
      { title: 'Artificial Intelligence', authors: 'Elaine Rich, Kevin Knight and Shivashankar Nair', publisher: 'TMH', edition: '3rd', year: '2009' },
      { title: 'Artificial Intelligence & Soft Computing for Beginners', authors: 'Anandita Das Bhattacharjee', publisher: 'SPD', edition: '1st', year: '2013' },
    ],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – V, Course Code TCSCUSDS502 (Lines 77–128)',
  },
  TCSCUSDSP502: {
    syllabusCode: 'TCSCUSDSP502',
    syllabusTitle: 'Artificial intelligence Practical',
    semesterLabelInSource: 'Semester – V (T.Y.B.Sc. Syllabus)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS502',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical AI problem solving corresponding to TCSCUSDS502 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS502).'],
    units: [],
    references: [],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – V, Course Code TCSCUSDSP502 (Lines 85–90)',
  },

  TCSCUSDS503: {
    syllabusCode: 'TCSCUSDS503',
    syllabusTitle: 'Business Intelligence and data Visualization using Tableau/Power BI.',
    semesterLabelInSource: 'Semester – V (T.Y.B.Sc. Syllabus)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP503',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Business Intelligence.',
      'Understanding the role of automated business decisions by implementing analytics.',
    ],
    courseOutcome: ['Understand importance of different tools for data analysis.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Business intelligence: Effective and timely decisions, Data, information and knowledge, The role of mathematical models, Business intelligence architectures, Ethics and business intelligence. Decision support systems: Representation of the decision-making process, Evolution of information systems, Development of a decision support system.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Mathematical models for decision making: Structure and classes of mathematical models. Data mining: Representation of input data, Data mining process, Analysis methodologies. Data preparation: Data validation, Data transformation, Data reduction.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Classification: Evaluation of classification models, Bayesian methods, Logistic regression, Neural networks, Support vector machines. Clustering: Partition methods, Hierarchical methods, Evaluation of clustering models.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Business intelligence applications: Marketing models (Relational marketing, Sales force management), Logistic and production models (Supply chain optimization, Revenue management systems), Data envelopment analysis (Efficiency measures, Efficient frontier, CCR model).',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Knowledge Management: Organizational Learning and Transformation, KM Activities, KM Systems Implementation. Artificial Intelligence and Expert Systems: Basic Concepts, Applications, Structure of Expert Systems, Knowledge Engineering, Development of Expert Systems.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Business Intelligence: Data Mining and Optimization for Decision Making', authors: 'Carlo Vercellis', publisher: 'Wiley', edition: '1st', year: '2009' },
      { title: 'Decision Support and Business Intelligence Systems', authors: 'Efraim Turban, Ramesh Sharda, Dursun Delen', publisher: 'Pearson', edition: '9th', year: '2011' },
      { title: 'Fundamentals of Business Intelligence', authors: 'Grossmann W, Rinderle-Ma', publisher: 'Springer', edition: '1st', year: '2015' },
    ],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – V, Course Code TCSCUSDS503 (Lines 131–178)',
  },
  TCSCUSDSP503: {
    syllabusCode: 'TCSCUSDSP503',
    syllabusTitle: 'Business Intelligence and data Visualization using Tableau/Power BI. Practical',
    semesterLabelInSource: 'Semester – V (T.Y.B.Sc. Syllabus)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS503',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical BI & visualization exercises (Tableau/Power BI) corresponding to TCSCUSDS503 (10 Practicals).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS503).'],
    units: [],
    references: [],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – V, Course Code TCSCUSDSP503 (Lines 139–144)',
  },

  TCSCUSDS504: {
    syllabusCode: 'TCSCUSDS504',
    syllabusTitle: 'Big Data Analytics using Hadoop',
    semesterLabelInSource: 'Semester – V (T.Y.B.Sc. Syllabus)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP504',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Big Data Technologies.',
      'Understanding the role of large data in business.',
    ],
    courseOutcome: ['Understand how to use Hadoop for data analysis for tera and peta bytes of data.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction to Big Data: Characteristics, Evolution, Challenges, Data Warehouse vs Big Data, New Big Data Ecosystems. Big Data Analytics: Classification of Analytics, Big Data Technologies, Soft state eventual consistency, Data Analytics Life Cycle.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Analytical Theory and Methods (Part 1): Clustering and Associated Algorithms, Association Rules, Apriori Algorithm, Candidate Rules, Validation and Testing, Diagnostics, Linear Regression, Logistic Regression, Additional Regression Models.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Analytical Theory and Methods (Part 2): Classification, Decision Trees, Naïve Bayes, Diagnostics of Classifiers, Time Series Analysis (Box-Jenkins methodology, ARIMA Model). Text Analysis: Collecting Raw Text, Representing Text, Term Frequency-Inverse Document Frequency (TF-IDF), Topic Categorization, Sentiment Determination.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Building Data Products at Scale with Hadoop: Data Science Pipeline and Hadoop Ecosystem, Hadoop Architecture, Distributed File System (HDFS), Distributed Computation, Framework for Python and Hadoop Streaming, MapReduce with Python, Advanced MapReduce. In-Memory Computing with Spark: Spark Basics, Interactive Spark with PySpark, Writing Spark Applications.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Distributed Analysis and Patterns: Computing with Keys, Design Patterns, Last-Mile Analytics. Data Mining and Warehousing: Structured Data Queries with Hive, HBase. Data Ingestion: Importing Relational data with Sqoop, Ingesting stream data with Flume. Analytics with higher level APIs: Pig, Spark’s higher level APIs.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Big Data and Analytics', authors: 'Subhashini Chellappan, Seema Acharya', publisher: 'Wiley', edition: '1st' },
      { title: 'Data Analytics with Hadoop: An Introduction for Data Scientists', authors: 'Benjamin Bengfort and Jenny Kim', publisher: 'O’Reilly', year: '2016' },
      { title: 'Big Data and Hadoop', authors: 'V.K. Jain', publisher: 'Khanna Publishing', edition: '1st', year: '2018' },
    ],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – V, Course Code TCSCUSDS504 (Lines 181–223)',
  },
  TCSCUSDSP504: {
    syllabusCode: 'TCSCUSDSP504',
    syllabusTitle: 'Big Data Analytics using Hadoop Practical',
    semesterLabelInSource: 'Semester – V (T.Y.B.Sc. Syllabus)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS504',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical Hadoop/Spark/Hive exercises corresponding to TCSCUSDS504 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS504).'],
    units: [],
    references: [],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – V, Course Code TCSCUSDSP504 (Lines 189–194)',
  },

  TCSCUSDS505: {
    syllabusCode: 'TCSCUSDS505',
    syllabusTitle: 'Elective: Business Ethics and Environmental Science (Completed Option)',
    semesterLabelInSource: 'Semester – V (T.Y.B.Sc. Syllabus)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP505',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Social Responsibilities.',
      'Understanding the sustainable business development.',
    ],
    courseOutcome: ['Understand need of maintaining balance between social, ecological and economical development.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction to Environmental Studies: Environmental Education, Literacy, Engineering, Man and Biosphere, Impacts of Development. Initiatives and Standards: UN, Basel Action Network, Basel Convention, WEEE Directive, RoHS.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Social Issues and the Environment: Sustainable Development, Energy/Water Conservation, Environmental Ethics, Acid Rain, Ozone Depletion, Global Warming, Pollution Control Acts in India, EIA, Risk Management, Precautionary & Polluter-Pays Principles, ISO 14000 Series.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Environmental Management: Environmental Impact Assessment methodology, Waste as a Resource, Environmental Laws, Environmental Audit. Sustainable Development: Ethics, Environmental Stress, Self-purification, Computerization and Information Technology.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Recycling & Hardware Considerations: E-waste disposal, Life Cycle, Green Design, Hard Drive Recycling, EPEAT, RoHS, Energy Star, Servers/Blade Servers consolidation, Thin Clients, Planned Obsolescence, Remote Desktop.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Greening Your Information Systems: Improvement calculations, Metrics, Green Supply Chain, PC/Server reduction, Shared Services, Cooling. Staying Green: Organizational check-ups, SMART Goals, Baseline Data, Benchmarking, Audits.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Environmental Studies', authors: 'Benny Joseph', publisher: 'McGraw-Hill', edition: '3rd', year: '2017' },
      { title: 'Principles of Environmental Science and Engineering', authors: 'P. Venugopala Rao', publisher: 'PHI Learning', edition: '6th', year: '2014' },
      { title: 'Introduction to Environmental Engineering', authors: 'Gilbert M. Masters', publisher: 'Pearson', edition: '3rd', year: '2015' },
      { title: 'Environmental Ethics: A Very Short Introduction', authors: 'Robin Attfield', publisher: 'Oxford', edition: '1st', year: '2019' },
      { title: 'Green IT', authors: 'Toby Velte, Anthony Velte, Robert Elsenpeter', publisher: 'McGraw Hill', year: '2008' },
      { title: 'Green Computing: Tools and Techniques', authors: 'Bud E. Smith', publisher: 'CRC Press', year: '2014' },
    ],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – V, Course Code TCSCUSDS505 (Lines 226–325)',
    discrepancyNote: 'The TY syllabus lists two elective options under TCSCUSDS505 ("Marketing and Retail Analytics" and "Business Ethics and Environmental Science"). Transcript UGDS5BEE0522 confirms the student completed Business Ethics and Environmental Science; Marketing and Retail Analytics was not taken.',
  },
  TCSCUSDSP505: {
    syllabusCode: 'TCSCUSDSP505',
    syllabusTitle: 'Seminar Stage I (Syllabus) / Practical of Business Ethics & Environmental Science (Transcript)',
    semesterLabelInSource: 'Semester – V (T.Y.B.Sc. Syllabus)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS505',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: 'Presentation / Case Studies (per syllabus)',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Listed under TCSCUSDS505 in TY syllabus as "Seminar Stage I (On selected topic)" with 3 periods/week (Presentation / Case Studies).'],
    courseOutcome: ['Not separately listed in syllabus.'],
    units: [],
    references: [],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – V, Course Code TCSCUSDSP505 (Lines 234–239)',
    discrepancyNote: 'Transcript titles this entry "Practical of Business Ethics and Environmental Science" (UGDS5BEEP522), whereas TY syllabus labels TCSCUSDSP505 "Seminar Stage I (On selected topic)".',
  },

  // ================= SEMESTER VI =================
  TCSCUSDS601: {
    syllabusCode: 'TCSCUSDS601',
    syllabusTitle: 'Machine learning',
    semesterLabelInSource: 'Semester – VI (T.Y.B.Sc. Syllabus)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP601',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of Machine learning.',
      'This course aims to provide the basic understanding of machine learning towards Artificial Intelligence.',
    ],
    courseOutcome: ['Understand how to make programs so that it learns various facts.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction: Machine learning, Examples of ML Problems, Structure of Learning, Learning vs Designing, Training vs Testing, Characteristics of ML tasks, Predictive and descriptive tasks. Machine learning Models: Geometric, Logical, and Probabilistic Models. Features: Feature types, Feature Construction and Transformation, Feature Selection.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Classification and Regression: Binary Classification, Assessing Classification performance, Class probability Estimation, Multiclass Classification. Regression: Assessing performance (Error measures), Overfitting, Catalysts for Overfitting, Case study of Polynomial Regression. Theory of Generalization: Effective number of hypotheses, Bounding the Growth function, VC Dimensions, Regularization theory.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Linear Models: Least Squares method, Multivariate Linear Regression, Regularized Regression, Using Least Square regression for Classification. Perceptron, Support Vector Machines, Soft Margin SVM, Obtaining probabilities from Linear classifiers, Kernel methods for non-Linearity.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Logic Based and Algebraic Model: Distance Based Models (Neighbours and Examples, Nearest Neighbours Classification, Distance-based clustering – K-means Algorithm, Hierarchical clustering). Rule Based Models (Rule learning for subgroup discovery, Association rule mining). Tree Based Models (Decision Trees, Ranking and Probability estimation Trees, Regression trees, Clustering Trees).',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Probabilistic Model: Normal Distribution and Its Geometric Interpretations, Naïve Bayes Classifier, Discriminative learning with Maximum likelihood, Probabilistic Models with Hidden variables: Expectation-Maximization (EM) Methods, Gaussian Mixtures, Compression-based Models. Trends In Machine Learning: Bagging and Boosting, Multitask learning, Online learning and Sequence Prediction, Data Streams and Active Learning, Deep Learning, Reinforcement Learning.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Machine Learning: The Art and Science of Algorithms that Make Sense of Data', authors: 'Peter Flach', publisher: 'Cambridge University Press', year: '2012' },
      { title: 'Introduction to Statistical Learning with Applications in R', authors: 'Hastie, Tibshirani, Friedman', publisher: 'Springer', edition: '2nd', year: '2012' },
      { title: 'Introduction to Machine Learning', authors: 'Ethem Alpaydin', publisher: 'PHI', edition: '2nd', year: '2013' },
    ],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – VI, Course Code TCSCUSDS601 (Lines 328–376)',
  },
  TCSCUSDSP601: {
    syllabusCode: 'TCSCUSDSP601',
    syllabusTitle: 'Machine learning Practical',
    semesterLabelInSource: 'Semester – VI (T.Y.B.Sc. Syllabus)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS601',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical ML algorithm implementation corresponding to TCSCUSDS601 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS601).'],
    units: [],
    references: [],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – VI, Course Code TCSCUSDSP601 (Lines 337–342)',
  },

  TCSCUSDS602: {
    syllabusCode: 'TCSCUSDS602',
    syllabusTitle: 'Cloud Computing',
    semesterLabelInSource: 'Header states "Semester – IV" (Apparent heading typo; Sem VI in course list & code 602)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP602',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of cloud based computing.',
      'This course aims to provide the basics understanding of utilizing cloud based resources.',
    ],
    courseOutcome: ['Understand importance of using resources from internet.'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction to Cloud Computing: Historical developments, Building Cloud Computing Environments, Principles of Parallel and Distributed Computing (Parallel vs distributed computing, Elements & Technologies). Virtualization: Characteristics, Taxonomy of virtualization techniques, Virtualization and cloud computing, Pros and cons, Logical Network Perimeter, Virtual Server, Cloud Storage Device, Cloud usage monitor, Resource replication.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Cloud Computing Architecture: Fundamental concepts and models, Roles and boundaries, Cloud Characteristics, Cloud Delivery models (IaaS/PaaS/SaaS), Cloud Deployment models, Economics of the cloud, Open challenges. Fundamental Cloud Security: Threat agents, Cloud security threats. Industrial Platforms: Amazon Web Services, Google App Engine, Microsoft Azure.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Specialized Cloud Mechanisms: Automated Scaling listener, Load Balancer, SLA monitor, Pay-per-use monitor, Audit monitor, Failover system, Hypervisor, Resource Centre, Multidevice broker, State Management Database. Cloud Management Mechanisms: Remote administration, Resource/SLA/Billing Management Systems. Cloud Security Mechanisms: Encryption, Hashing, Digital Signature, PKI, IAM, Single Sign-On (SSO), Security Groups, Hardened Virtual Server Images.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Fundamental Cloud Architectures: Workload Distribution, Resource Pooling, Dynamic Scalability, Elastic Resource Capacity, Service Load Balancing, Cloud Bursting, Elastic Disk Provisioning, Redundant Storage. Advanced Cloud Architectures: Hypervisor Clustering, Load Balanced Virtual Server Instances, Non-Disruptive Service Relocation, Zero Downtime, Cloud Balancing, Resource Reservation, Dynamic Failure Detection and Recovery, Bare-Metal & Rapid Provisioning.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Cloud Delivery Model Considerations: Cloud Provider vs Cloud Consumer Perspectives. Cost Metrics and Pricing Models: Business & Cloud Usage Cost Metrics, Cost Management. Service Quality Metrics and SLAs: Service Quality Metrics, SLA Guidelines.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Mastering Cloud Computing: Foundations and Applications Programming', authors: 'Rajkumar Buyya, Christian Vecchiola, S. Thamarai Selvi', publisher: 'Elsevier', year: '2013' },
      { title: 'Cloud Computing: Concepts, Technology & Architecture', authors: 'Thomas Erl, Zaigham Mahmood, Ricardo Puttini', publisher: 'Prentice Hall', year: '2013' },
      { title: 'Distributed and Cloud Computing: From Parallel Processing to the Internet of Things', authors: 'Kai Hwang, Jack Dongarra, Geoffrey Fox', publisher: 'MK Publishers', year: '2012' },
    ],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – VI, Course Code TCSCUSDS602 (Lines 386–431)',
    discrepancyNote: 'TY syllabus table header prints "Semester – IV" above TCSCUSDS602, whereas the TY syllabus Semester VI index, course code 602, and official transcript (Page 6) all place it in Semester VI.',
  },
  TCSCUSDSP602: {
    syllabusCode: 'TCSCUSDSP602',
    syllabusTitle: 'Cloud Computing Practical',
    semesterLabelInSource: 'Semester – VI (T.Y.B.Sc. Syllabus)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS602',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical cloud computing exercises corresponding to TCSCUSDS602 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS602).'],
    units: [],
    references: [],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – VI, Course Code TCSCUSDSP602 (Lines 396–401)',
  },

  TCSCUSDS603: {
    syllabusCode: 'TCSCUSDS603',
    syllabusTitle: 'Enterprise Java',
    semesterLabelInSource: 'Semester – VI (T.Y.B.Sc. Syllabus)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP603',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: [
      'This course aims to provide conceptual understanding of advanced features of Java Programming.',
      'This course aims to provide the basic understanding of project development using Java.',
    ],
    courseOutcome: ['[Source PDF prints: "Understand importance of advanced features of Python." — apparent copy-paste error from Sem IV syllabus.]'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Understanding Java EE: Java EE Technologies, Evolution, Glassfish Server, Java EE Architecture, Server and Containers. Introduction to Java Servlets: Servlet API and Lifecycle, Annotations. Working with Databases: JDBC Architecture, Accessing Database, Servlet GUI and Database Example.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Request Dispatcher Interface; Cookies (Session tracking, creating cookies); HttpSession Lifecycle and Session Tracking; Working with Files (Uploading & Downloading Files); Working with Non-Blocking I/O in Servlets.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Introduction to Java Server Pages (JSP): JSP vs Servlets, Lifecycle, JSP Elements, Action Elements (include, forward, params, JavaBeans), Implicit Objects, Scope and Unified Expression Language (EL), JSP Standard Tag Libraries (JSTL).',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Introduction to Enterprise JavaBeans (EJB): Architecture, Types of Enterprise Beans, Session Beans (Stateful, Stateless, Singleton), Remote/Local Interfaces, Message Driven Beans, Interceptors (@AroundInvoke), Java Naming and Directory Interface (JNDI) & Datasource Resource Definition.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Persistence, Object/Relational Mapping (ORM) and JPA: Java Persistence API Architecture, persistence.xml, Creating database and tables in MySQL, Writing JPA Applications. Introduction to Hibernate: Components, Architecture, Configuration file, Mapping class, Running Hibernate Web Application.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Java EE 7 For Beginners', authors: 'Sharanam Shah, Vaishali Shah', publisher: 'SPD', edition: '1st', year: '2017' },
      { title: 'Java EE 8 Cookbook', authors: 'Elder Moraes', publisher: 'Packt', edition: '1st', year: '2018' },
      { title: 'Advanced Java Programming', authors: 'Uttam Kumar Roy', publisher: 'Oxford Press', year: '2015' },
    ],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – VI, Course Code TCSCUSDS603 (Lines 433–500)',
    discrepancyNote: 'Course Outcome field in official TY syllabus contains a copy-paste error referencing Python instead of Java.',
  },
  TCSCUSDSP603: {
    syllabusCode: 'TCSCUSDSP603',
    syllabusTitle: 'Enterprise Java Practical',
    semesterLabelInSource: 'Semester – VI (T.Y.B.Sc. Syllabus)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS603',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical Java EE / Servlet / JSP / JPA / Hibernate exercises corresponding to TCSCUSDS603 (10 Practicals).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS603).'],
    units: [],
    references: [],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – VI, Course Code TCSCUSDSP603 (Lines 441–446)',
  },

  TCSCUSDS604: {
    syllabusCode: 'TCSCUSDS604',
    syllabusTitle: 'Elective I: Knowledge Management',
    semesterLabelInSource: 'Semester – VI (T.Y.B.Sc. Syllabus)',
    componentType: 'Theory',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: ['[Source PDF prints SDLC/Project Management template text due to copy-paste from Sem IV; actual units cover Knowledge Management.]'],
    courseOutcome: ['[Source PDF prints SDLC template text; unit content covers Knowledge Management.]'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'Introduction to Knowledge Management: Multidisciplinary nature, Tacit vs Explicit knowledge, Concept Analysis Technique, LIS perspectives. Knowledge Sharing and Communities of Practice (CoPs): Sociograms, Social Network Analysis, Virtual CoPs.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'The Knowledge Management Cycle: Meyer & Zack, Bukowitz & Williams, McElroy, Wiig, Integrated KM Cycle. Knowledge Management Models: Von Krogh & Roos, Nonaka & Takeuchi Knowledge Spiral, Choo Sense-Making, Wiig, Boisot I-Space, Complex Adaptive Systems, EFQM, Inukshuk KM Model.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Knowledge Capture and Codification: Tacit Knowledge Capture (Individual, Group, Organizational), Explicit Knowledge Codification, Cognitive Maps, Decision Trees, Knowledge Taxonomies, Relationships among KM, Competitive Intelligence, Business Intelligence, and Strategic Intelligence.',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Knowledge Application: Individual/Group/Organizational application, Bloom’s Taxonomy, Task Analysis and Modeling, Knowledge Reuse, Knowledge Repositories, E-Learning. Knowledge Management Tools: Content Creation, Data Mining and Knowledge Discovery, Content Management, Folksonomies, Personal KM, Intelligent Filtering and Adaptive Technologies.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'The Knowledge Management Team: KM Roles and Responsibilities, Ethics of KM. Future Challenges for Knowledge Management: Search Engine Politics, Organizational Culture, Intellectual Property Issues, Incentives for Knowledge Sharing, Postmodern KM.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Knowledge Management in Theory and Practice', authors: 'Kimiz Dalkir', publisher: 'Elsevier', edition: '3rd', year: '2005' },
    ],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – VI, Course Code TCSCUSDS604 (Lines 503–550)',
    discrepancyNote: 'Syllabus labels Knowledge Management as "Elective I" (TCSCUSDS604), while transcript lists UGDS6KNM0422 directly with no Elective I Practical; instead, slot 9 on transcript is Project Implementation (UGDS6PRIP422). Objectives/Outcomes boxes in source file appear copied from Agile Software Engineering.',
  },

  PROJECT_STAGE_II_UNSPECIFIED: {
    syllabusCode: 'Not specified in syllabus table (Sem VI overview lists "Internship/Project Stage-II")',
    syllabusTitle: 'Project Implementation (Transcript) / Internship/Project Stage-II (Syllabus Overview)',
    semesterLabelInSource: 'Semester – VI (T.Y.B.Sc. Syllabus Overview & Transcript Page 6)',
    componentType: 'Project',
    periodsPerWeek: 'Not specified (-- in transcript)',
    periodDuration: 'Not specified (-- in transcript)',
    credits: 2,
    examHours: 'Not specified in available official documents',
    externalMaxMarks: 'Not stated (Transcript shows 102 marks obtained)',
    internalMaxMarks: 'Not specified in available official documents',
    objectives: ['Not specified in the available official syllabus documents (no dedicated unit table for Project Implementation / Project Stage-II exists in tyds_syllabus.txt).'],
    courseOutcome: ['Not specified in the available official documents.'],
    units: [],
    references: [],
    sourceDocument: 'TranscriptOfBachelorDS (Page 6) & tyds_syllabus.txt (Line 41)',
    sourceSectionNote: 'Transcript UGDS6PRIP422 ("Project Implementation", 2 credits, 102 marks, Grade A). TY syllabus Sem VI bullet list mentions "Internship/Project Stage-II".',
    discrepancyNote: 'Cannot assume equivalence between Transcript "Project Implementation" (102 marks, 2 credits) and syllabus "Internship/Project Stage-II" or "Elective I Practical (TCSCUSDSP604)" without official college confirmation.',
  },

  TCSCUSDS605: {
    syllabusCode: 'TCSCUSDS605',
    syllabusTitle: 'Elective-II: Internet of Things',
    semesterLabelInSource: 'Semester – VI (T.Y.B.Sc. Syllabus)',
    componentType: 'Theory',
    pairedSyllabusCode: 'TCSCUSDSP605',
    periodsPerWeek: '5',
    periodDuration: '50 minutes',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '60',
    internalMaxMarks: '40',
    internalBreakdown: STANDARD_INTERNAL,
    objectives: ['[Source PDF prints Data Visualization template text; actual units cover Internet of Things.]'],
    courseOutcome: ['[Source PDF prints Data Visualization template text; unit content covers Internet of Things.]'],
    units: [
      {
        unit: 'I',
        titleAndTopics:
          'The Internet of Things Overview & Design Principles for Connected Devices: Calm/Ambient technology, Privacy, Web Thinking for Connected Devices, Graceful Degradation. Internet Principles: IP, TCP, TCP/IP Suite, UDP, IP Addresses, DNS, Static/Dynamic IP, IPv6, MAC Addresses, TCP/UDP Ports, HTTP, HTTPS, Application Layer Protocols.',
        lectures: 12,
      },
      {
        unit: 'II',
        titleAndTopics:
          'Thinking About Prototyping: Open Source vs Closed Source, Cloud integration. Prototyping Embedded Devices: Electronics, Sensors, Actuators, Embedded Computing Basics, Microcontrollers, System-on-Chips, Arduino development, Raspberry Pi development.',
        lectures: 12,
      },
      {
        unit: 'III',
        titleAndTopics:
          'Prototyping Physical Design: Laser Cutting, 3D Printing, CNC Milling. Prototyping Online Components: APIs, Mashing Up APIs, Scraping, Writing a New API, Security, Curl testing, Real-Time Reactions (Polling, Comet), Protocols: MQ Telemetry Transport (MQTT), XMPP, Constrained Application Protocol (CoAP).',
        lectures: 12,
      },
      {
        unit: 'IV',
        titleAndTopics:
          'Techniques for Writing Embedded Code: Memory Management, Types of Memory, Making the Most of RAM, Performance and Battery Life, Libraries, Debugging. Business Models: History, Business Model Canvas, IoT Startup Funding.',
        lectures: 12,
      },
      {
        unit: 'V',
        titleAndTopics:
          'Moving to Manufacture: Designing PCBs, Assembly, Testing, Certification, Scaling Up Software, Deployment, Maintainability, Security. Ethics: Privacy, Control, Crowdsourcing, Environment, Open IoT Definition.',
        lectures: 12,
      },
    ],
    references: [
      { title: 'Designing the Internet of Things', authors: 'Adrian McEwen, Hakim Cassimally', publisher: 'WILEY', edition: '1st', year: '2014' },
      { title: 'Internet of Things – Architecture and Design', authors: 'Raj Kamal', publisher: 'McGraw Hill', edition: '1st', year: '2017' },
      { title: 'Getting Started with the Internet of Things', authors: 'Cuno Pfister', publisher: 'O’Reilly', edition: '6th', year: '2018' },
      { title: 'Getting Started with Raspberry Pi', authors: 'Matt Richardson and Shawn Wallace', publisher: 'SPD', edition: '3rd', year: '2016' },
    ],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – VI, Course Code TCSCUSDS605 (Lines 563–608+)',
    discrepancyNote: 'Syllabus labels Internet of Things as "Elective-II", while transcript lists UGDS6IOT0522 ("Internet of things") with marks "77@3" and Grade O.',
  },
  TCSCUSDSP605: {
    syllabusCode: 'TCSCUSDSP605',
    syllabusTitle: 'Elective-II Practical (Internet of Things Practical)',
    semesterLabelInSource: 'Semester – VI (T.Y.B.Sc. Syllabus)',
    componentType: 'Practical',
    pairedSyllabusCode: 'TCSCUSDS605',
    periodsPerWeek: '3',
    periodDuration: '50 minutes',
    practicalCountNote: '10 Practicals covering the syllabus',
    credits: 2,
    examHours: '2½',
    externalMaxMarks: '50',
    internalMaxMarks: 'Not applicable (--)',
    objectives: ['Practical embedded/IoT exercises corresponding to TCSCUSDS605 (10 Practicals covering the syllabus).'],
    courseOutcome: ['Not separately listed in syllabus (paired with TCSCUSDS605).'],
    units: [],
    references: [],
    sourceDocument: 'tyds_syllabus.txt',
    sourceSectionNote: 'Semester – VI, Course Code TCSCUSDSP605 (Lines 571–576)',
  },
};
