# B.Sc. (Data Science) — Academic Curriculum & Evidence Portfolio

A static, source-traceable academic curriculum documentation site prepared for German public university Master's admissions evaluation (Data Science, Artificial Intelligence, Data Engineering, Computer Science, and Applied Statistics).

- **Degree:** Bachelor of Science (Data Science)
- **Institution:** Thakur College of Science & Commerce (Empowered Autonomous College permanently affiliated with the University of Mumbai)
- **Location:** Mumbai, Maharashtra, India
- **Programme Duration:** 3 Years (6 Semesters)
- **Total Institutional Credits:** 120 University of Mumbai / TCSC Institutional Credits (20 per semester)
- **Final CGPA:** 8.85 (Grade: A)
- **Medium of Instruction:** English
- **Transcript Issue Date:** 16 October 2025

> **Important Academic Notice:** Institutional credits recorded on the transcript are **not** automatically converted to ECTS. This portfolio presents original records alongside syllabus evidence so receiving German universities and examination boards can conduct an independent assessment.

---

## Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages build & deployment
├── public/                     # Static assets (private transcript PDFs excluded from public UI links)
├── src/
│   ├── components/
│   │   ├── AdmissionsSection.tsx
│   │   ├── CatalogueSection.tsx
│   │   ├── CsEngineeringSection.tsx
│   │   ├── Header.tsx
│   │   ├── OverviewSection.tsx
│   │   ├── QuantDetailSection.tsx
│   │   ├── SourcesVerificationSection.tsx
│   │   ├── SubjectMappingSection.tsx
│   │   ├── TranscriptSection.tsx
│   │   └── WorkloadEctsSection.tsx
│   ├── data/
│   │   ├── analysisData.ts     # 17-area subject mapping, quant/CS matrices, workload, admissions & audit data
│   │   ├── profileData.ts      # Student academic profile, overall audit & JETIR research record
│   │   ├── syllabusData.ts     # Complete official syllabus units, outcomes, hours & references
│   │   └── transcriptData.ts   # Complete 6-semester, 60-course verbatim transcript dataset
│   ├── types/
│   │   └── academic.ts         # TypeScript domain interfaces
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
└── vite.config.ts              # Configured with relative base ('./') for GitHub Pages
```

---

## Local Development & Verification

```bash
# Install dependencies
npm install

# Start local development server on port 3000
npm run dev

# Type-check codebase
npm run lint

# Build production static bundle in ./dist
npm run build

# Preview built static site locally
npm run preview
```

---

## Step-by-Step GitHub Pages Deployment Instructions

1. **Create a new GitHub repository** (e.g., `bsc-data-science-curriculum-dossier`) on GitHub.
2. **Verify privacy before pushing:** Ensure no private personal files (such as raw signed PDFs containing seat numbers, addresses, or signatures) are committed inside `public/` if you want the repository itself to remain completely free of private identifiers.
3. **Push the project to GitHub (`main` branch):**
   ```bash
   git init
   git add .
   git commit -m "Initial academic curriculum portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
4. **Enable GitHub Pages via GitHub Actions:**
   - Open your repository on GitHub and go to **Settings → Pages**.
   - Under **Build and deployment → Source**, select **GitHub Actions**.
5. **Trigger or wait for deployment:**
   - The included workflow (`.github/workflows/deploy.yml`) automatically runs on every push to `main`, installs dependencies, executes `npm run build`, and publishes `./dist` to GitHub Pages.
   - Because `vite.config.ts` sets `base: process.env.VITE_BASE_PATH || './'`, all assets resolve accurately whether deployed at a custom domain or a project subpath (`https://<your-username>.github.io/<your-repo-name>/`).
6. **Verify the live URL:**
   - Once the workflow completes, open the Pages URL displayed in **Settings → Pages** or in the **Actions** run summary.

---

## Data Transparency & Limitations

- All 60 transcript course entries, grades, marks (including `@3` annotations such as `37@3` and `77@3`), SGPI values, and 120 institutional credits match the official transcript verbatim.
- Discrepancies between the transcript and syllabus PDFs (course code prefixes, Semester IV `TCSCUSDS405` syllabus code collision, weekly lecture period differences, Semester V/VI practical vs. project naming) are explicitly flagged in the **Source Documents & Verification** section rather than silently altered.
