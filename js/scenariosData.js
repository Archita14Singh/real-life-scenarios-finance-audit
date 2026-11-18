// scenariosData.js - 3 Real-World Industry Scenarios & Targeted Quizzes
// Deep Dives into Enterprise Implementations across Banking, Big Four Audit, and Global Autonomous Finance

window.REAL_LIFE_SCENARIOS = [
  {
    id: "scenario-contract-intelligence",
    number: 1,
    title: "Commercial Contract Intelligence & Debt Covenant Extraction",
    subtitle: "How Tier-1 Corporate Banks Deploy AI to Process Complex Credit Facilities & Syndicated Loans",
    industry: "Corporate & Commercial Banking (Inspired by JPMorgan Chase COiN)",
    primaryTrack: "Finance",
    badgeColor: "#1e3a8a",
    overview: {
      background: "Major commercial banks manage loan portfolios exceeding $500 billion across thousands of corporate borrowers. Commercial credit agreements, syndicated facilities, and promissory notes are among the most complex legal instruments in finance, frequently spanning 150 to 350 pages of bespoke, heavily negotiated legal text.",
      theProblem: "Credit risk analysts and legal associates manually reviewed every loan document to identify and extract key debt covenants (e.g., Minimum Interest Coverage Ratio >= 2.5x, Maximum Total Leverage Ratio <= 3.25x, restricted capital expenditure limits, cross-default clauses, and quarterly financial reporting deadlines). At JPMorgan Chase, this manual review consumed over 360,000 hours of skilled legal and financial analyst time annually. Human review suffered from inconsistency, missed negative covenants, and failed to flag technical defaults before quarterly compliance deadlines.",
      aiSolution: "Deployment of an enterprise Document Intelligence and NLP platform (such as JPMorgan's Contract Intelligence / COiN) powered by multi-modal Transformer models. The system ingests scanned PDF agreements, interprets complex hierarchical legal clauses, cross-references defined terms across multi-page definitions, and extracts structured covenant obligations directly into the bank's core loan accounting systems.",
      architectureSteps: [
        {
          step: "1. Ingestion & Document Decomposition",
          detail: "High-resolution multi-modal OCR ingests 200+ page PDFs, analyzing 2D spatial layout, section headers, nested indented clauses, tables, and signature blocks."
        },
        {
          step: "2. Semantic Clause Extraction & Cross-Referencing",
          detail: "Fine-tuned legal LLMs resolve definitions across disparate sections (e.g. mapping 'Consolidated EBITDA' defined in Section 1.01 to the 'Leverage Ratio' covenant in Section 7.02)."
        },
        {
          step: "3. Grounded Verification & Bounding Box Attribution",
          detail: "Retrieval-Augmented Generation (RAG) grounds every extracted ratio and condition to its exact page coordinate (bounding box), displaying a clickable verification link."
        },
        {
          step: "4. Automated Surveillance & Core Banking Feed",
          detail: "Extracted ratios populate credit monitoring dashboards. When quarterly borrower financials arrive, the system calculates live covenant compliance automatically."
        }
      ],
      metricsImpact: [
        { label: "Annual Manual Hours Saved", value: "360,000+ Hours" },
        { label: "Contract Extraction Time", value: "Seconds (vs 8-12 hrs)" },
        { label: "Extraction Accuracy", value: "99.1% with Human-in-Loop" },
        { label: "Missed Technical Defaults", value: "Reduced by 84%" }
      ],
      governanceAndRisk: "Because commercial loan covenants dictate borrower default declarations, acceleration of debt, and legal disputes, the system operates under strict Model Risk Management (Federal Reserve SR 11-7 / OCC 2011-12). AI outputs never trigger automated loan default notices. Instead, credit officers use a split-screen verification interface where extracted ratios are cross-referenced with highlighted contract text before formal credit committee sign-off."
    },
    diagramSvg: `
      <svg viewBox="0 0 760 210" class="w-full h-auto">
        <!-- Input Document -->
        <rect x="15" y="35" width="135" height="140" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
        <text x="82" y="60" text-anchor="middle" font-weight="700" fill="#0f172a" font-size="12">150-Page PDF</text>
        <text x="82" y="78" text-anchor="middle" fill="#64748b" font-size="10">Syndicated Credit</text>
        <text x="82" y="93" text-anchor="middle" fill="#64748b" font-size="10">Agreement & Ratios</text>
        <line x1="30" y1="110" x2="135" y2="110" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="82" y="130" text-anchor="middle" font-size="10" fill="#0284c7">Dense Covenants</text>
        <text x="82" y="145" text-anchor="middle" font-size="10" fill="#0284c7">Cross-Default Clauses</text>

        <!-- Arrow 1 -->
        <path d="M155 105 L200 105" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

        <!-- Ingestion & OCR -->
        <rect x="205" y="45" width="140" height="120" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <text x="275" y="70" text-anchor="middle" font-weight="700" fill="#0369a1" font-size="12">Layout & NLP Engine</text>
        <text x="275" y="90" text-anchor="middle" fill="#0f172a" font-size="10">LayoutLM & Transformer</text>
        <text x="275" y="108" text-anchor="middle" fill="#0f172a" font-size="10">2D Spatial Token Mapping</text>
        <text x="275" y="126" text-anchor="middle" fill="#0f172a" font-size="10">Cross-Clause Linking</text>

        <!-- Arrow 2 -->
        <path d="M350 105 L395 105" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

        <!-- Verification & RAG -->
        <rect x="400" y="45" width="155" height="120" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
        <text x="477" y="70" text-anchor="middle" font-weight="700" fill="#6d28d9" font-size="12">RAG Bounding Box</text>
        <text x="477" y="90" text-anchor="middle" fill="#0f172a" font-size="10">Confidence Scoring (99%)</text>
        <text x="477" y="108" text-anchor="middle" fill="#0f172a" font-size="10">Direct Source Citation</text>
        <text x="477" y="126" text-anchor="middle" fill="#0f172a" font-size="10">Anti-Hallucination Guard</text>

        <!-- Arrow 3 -->
        <path d="M560 105 L605 105" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

        <!-- Core Banking & Credit Officer -->
        <rect x="610" y="35" width="135" height="140" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <text x="677" y="60" text-anchor="middle" font-weight="700" fill="#065f46" font-size="12">Credit Decision</text>
        <text x="677" y="80" text-anchor="middle" fill="#047857" font-size="10">Credit Officer Review</text>
        <text x="677" y="98" text-anchor="middle" fill="#047857" font-size="10">1-Click Sign-Off</text>
        <line x1="625" y1="112" x2="730" y2="112" stroke="#a7f3d0" stroke-width="1.5"/>
        <text x="677" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#15803d">Automated Alerts</text>
        <text x="677" y="148" text-anchor="middle" font-size="9" fill="#15803d">When Borrower Breaches</text>
      </svg>
    `,
    quiz: [
      {
        id: "q1-1",
        question: "Why do basic optical character recognition (OCR) and keyword search fail when extracting covenants from syndicated loan agreements?",
        options: [
          { id: "A", text: "Legal agreements define ratios across multiple sections with non-standard phrasing and cross-referenced definitions that require contextual semantic comprehension", correct: true },
          { id: "B", text: "OCR software cannot read PDF files that contain more than 10 pages" },
          { id: "C", text: "Federal Reserve regulations prohibit commercial banks from digitizing legal paperwork" },
          { id: "D", text: "Keyword search only works on spreadsheet numbers, not letters" }
        ],
        explanation: "In complex credit facilities, covenants are heavily customized. A ratio like 'Leverage' may be calculated using an intricate definition of 'Adjusted EBITDA' buried 80 pages away in Section 1.01. Only semantic models that parse contextual relationships can extract these accurately."
      },
      {
        id: "q1-2",
        question: "What is the critical danger if an AI system extracts the numerical ratio 'Debt Service Coverage Ratio >= 1.25x' but misses the conditional clause 'unless Senior Secured Debt is under $15M'?",
        options: [
          { id: "A", text: "The bank will mistakenly flag a compliant borrower in technical default, triggering unjustified interest rate penalties and costly legal disputes", correct: true },
          { id: "B", text: "The borrower's bank account will be automatically deleted from the banking network" },
          { id: "C", text: "The loan interest rate will drop to zero percent" },
          { id: "D", text: "The PDF document will be erased from the bank's servers" }
        ],
        explanation: "Partial extraction of legal terms is hazardous in corporate banking. Debt covenants almost always contain negotiated carve-outs, cure periods, or conditional exceptions. Missing these conditions creates false default triggers and severe contractual liabilities."
      },
      {
        id: "q1-3",
        question: "How does Retrieval-Augmented Generation (RAG) with exact page coordinate bounding boxes prevent hallucinations in this banking environment?",
        options: [
          { id: "A", text: "It constrains the AI model to cite only verified text chunks from the contract and provides the credit officer with a 1-click visual link to the exact paragraph on the original PDF page", correct: true },
          { id: "B", text: "It allows the model to invent realistic numbers when the borrower's PDF is blurry" },
          { id: "C", text: "It automatically rewrites the legal contract in plain English" },
          { id: "D", text: "It sends copies of the loan document to social media for public fact-checking" }
        ],
        explanation: "Bounding box grounding ensures complete transparency. The credit officer can click on any extracted covenant in their dashboard and instantly see the highlighted source paragraph on the exact contract page, eliminating black-box guessing."
      },
      {
        id: "q1-4",
        question: "Under bank Model Risk Management (MRM) guidelines (Federal Reserve SR 11-7), what governance control is mandatory for this AI deployment?",
        options: [
          { id: "A", text: "Human-in-the-Loop verification: Certified credit officers must independently review and formally approve all extracted covenants before they become active compliance monitors", correct: true },
          { id: "B", text: "The AI system must be granted full autonomous authority to declare legal defaults without human oversight" },
          { id: "C", text: "All loan documents must be destroyed once the neural network has processed them" },
          { id: "D", text: "Only external software contractors are permitted to view the bank's credit portfolio" }
        ],
        explanation: "Regulatory statutes prohibit autonomous adverse legal actions. Certified human credit officers retain ultimate fiduciary responsibility and must formally sign off on the extracted covenant matrix."
      }
    ]
  },

  {
    id: "scenario-audit-surveillance",
    number: 2,
    title: "100% General Ledger Continuous Audit Surveillance & Anomaly Detection",
    subtitle: "How Big Four Audit Firms (KPMG Clara, PwC Aura) Transition from Statistical Sampling to Full-Population Assurance",
    industry: "External & Internal Audit Assurance (Inspired by KPMG & PwC)",
    primaryTrack: "Audit",
    badgeColor: "#0284c7",
    overview: {
      background: "Statutory audits of multinational corporations involve general ledgers with millions of journal entries across dozens of global business units. Traditional audit methodology relied on testing a sample of 25 to 50 transactions per financial statement line item.",
      theProblem: "Statistical sampling creates a massive assurance gap: over 99.9% of transactions remain completely unexamined. Sophisticated fraud schemes, management overrides of internal controls, and split journal entries easily evade random sampling. When corporate frauds (e.g. Wirecard, Enron, WorldCom) were later investigated, the fraudulent entries were recorded in plain sight within the general ledger—often posted on weekends, to rarely used suspense accounts, or just under approval thresholds—completely untouched by the auditor's sample.",
      aiSolution: "Deployment of AI-powered Continuous Audit platforms (such as KPMG Clara AI and PwC's analytical pipelines). Instead of manual sampling, the audit platform ingests 100% of the client's general ledger entries (1.5M+ transactions) and runs multi-dimensional anomaly detection algorithms across 24 risk vectors (Benford's Law distribution, posting timing, user entitlement anomalies, post-close adjustments, and debit/credit account pairings).",
      architectureSteps: [
        {
          step: "1. Automated Full-Population Ingestion",
          detail: "Secure cloud pipelines extract all 1.5M journal entry records directly from the client's ERP (SAP, Oracle, NetSuite) at month-end."
        },
        {
          step: "2. Multi-Dimensional Risk Stratification",
          detail: "Algorithms evaluate each transaction against 24 risk rules: unusual posting hour (e.g. 2:00 AM Sunday), round-trip reversals, and segregation of duties violations."
        },
        {
          step: "3. Unsupervised Peer-Group Clustering",
          detail: "Isolation Forest and clustering algorithms compare user behavior against departmental peers, separating benign month-end accruals from high-risk anomalies."
        },
        {
          step: "4. Auditor Exception Triage & Evidence Gathering",
          detail: "Auditors receive a risk-stratified testing queue focused on the top 1% highest-risk entries with pre-populated workpaper documentation."
        }
      ],
      metricsImpact: [
        { label: "Population Tested", value: "100% (vs <0.1% via sampling)" },
        { label: "Audit Planning Cycle", value: "Reduced by 45%" },
        { label: "High-Risk Fraud Discovery", value: "3.8x Higher Catch Rate" },
        { label: "Benign False Positive Rate", value: "Reduced from 92% to 18%" }
      ],
      governanceAndRisk: "Under International Standards on Auditing (ISA 200, ISA 500) and PCAOB standards (AS 1105, AS 2401), AI risk scores do not constitute audit evidence by themselves. The auditor must exercise professional skepticism: inspecting independent third-party bank confirmations, corroborating vendor invoices, and evaluating management justifications before reaching an audit conclusion."
    },
    diagramSvg: `
      <svg viewBox="0 0 760 210" class="w-full h-auto">
        <!-- Raw Population -->
        <rect x="15" y="35" width="135" height="140" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
        <text x="82" y="60" text-anchor="middle" font-weight="700" fill="#0f172a" font-size="12">1.5M Journal Entries</text>
        <text x="82" y="78" text-anchor="middle" fill="#64748b" font-size="10">100% GL Population</text>
        <text x="82" y="93" text-anchor="middle" fill="#64748b" font-size="10">SAP / Oracle Ingestion</text>
        <line x1="30" y1="110" x2="135" y2="110" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="82" y="130" text-anchor="middle" font-size="10" fill="#b91c1c">No 25-Sample Limits</text>
        <text x="82" y="145" text-anchor="middle" font-size="10" fill="#b91c1c">Full Surveillance</text>

        <!-- Arrow 1 -->
        <path d="M155 105 L200 105" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

        <!-- Multi-Risk Engine -->
        <rect x="205" y="45" width="150" height="120" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <text x="280" y="70" text-anchor="middle" font-weight="700" fill="#0369a1" font-size="12">KPMG / PwC AI Engine</text>
        <text x="280" y="90" text-anchor="middle" fill="#0f172a" font-size="10">Benford's Law Analysis</text>
        <text x="280" y="108" text-anchor="middle" fill="#0f172a" font-size="10">Temporal & User Anomalies</text>
        <text x="280" y="126" text-anchor="middle" fill="#0f172a" font-size="10">Unsupervised Isolation</text>

        <!-- Arrow 2 -->
        <path d="M360 105 L405 105" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

        <!-- Stratified Risk Queues -->
        <rect x="410" y="45" width="145" height="120" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="482" y="70" text-anchor="middle" font-weight="700" fill="#92400e" font-size="12">Risk Stratification</text>
        <text x="482" y="90" text-anchor="middle" fill="#0f172a" font-size="10">Top 1%: Critical Triage</text>
        <text x="482" y="108" text-anchor="middle" fill="#0f172a" font-size="10">Middle 9%: Targeted Tests</text>
        <text x="482" y="126" text-anchor="middle" fill="#0f172a" font-size="10">Bottom 90%: Low Risk</text>

        <!-- Arrow 3 -->
        <path d="M560 105 L605 105" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

        <!-- Auditor Substantive Review -->
        <rect x="610" y="35" width="135" height="140" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <text x="677" y="60" text-anchor="middle" font-weight="700" fill="#065f46" font-size="12">Auditor Skepticism</text>
        <text x="677" y="80" text-anchor="middle" fill="#047857" font-size="10">Inspect Source Evidence</text>
        <text x="677" y="98" text-anchor="middle" fill="#047857" font-size="10">Direct Confirmations</text>
        <line x1="625" y1="112" x2="730" y2="112" stroke="#a7f3d0" stroke-width="1.5"/>
        <text x="677" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#15803d">Audit Opinion</text>
        <text x="677" y="148" text-anchor="middle" font-size="9" fill="#15803d">ISA / PCAOB Defensible</text>
      </svg>
    `,
    quiz: [
      {
        id: "q2-1",
        question: "Why is traditional statistical sample testing (e.g. testing 25 transactions) vulnerable when auditing against deliberate management fraud?",
        options: [
          { id: "A", text: "Sampling only covers less than 0.1% of transactions, meaning deliberate, low-frequency fraudulent entries posted by executives are statistically almost certain to be missed", correct: true },
          { id: "B", text: "Statistical sampling is prohibited under International Standards on Auditing (ISA)" },
          { id: "C", text: "Computer spreadsheets can only open 25 rows of data at a time" },
          { id: "D", text: "Sampling requires auditors to pay physical visits to every corporate bank branch" }
        ],
        explanation: "Management override of controls typically involves a handful of carefully disguised entries. In a population of 1.5 million journal entries, pulling 25 random samples provides virtually zero statistical likelihood of intercepting targeted fraud."
      },
      {
        id: "q2-2",
        question: "Which combination of transactional features would the continuous audit AI platform flag with the highest composite risk score?",
        options: [
          { id: "A", text: "A manual journal entry posted at 3:00 AM on a Sunday by a Senior Financial Controller, debiting a prepaid asset and crediting revenue for $49,900, followed by an immediate reversal on day 2 of next quarter", correct: true },
          { id: "B", text: "An automated recurring depreciation entry posted on the last Friday of the month matching the 12-month schedule" },
          { id: "C", text: "A routine utility bill payment of $340 approved by an office administrator" },
          { id: "D", text: "A computer hardware purchase order matching a signed master supplier contract" }
        ],
        explanation: "This entry exhibits the classic hallmarks of fraudulent management override: manual posting, non-business hours, executive credentials, an amount just below the $50,000 dual-approval threshold, and an immediate post-close reversal."
      },
      {
        id: "q2-3",
        question: "Under PCAOB Auditing Standard AS 1105 (Audit Evidence), how must the auditor treat an anomaly flagged by the AI surveillance system?",
        options: [
          { id: "A", text: "As an investigative trigger requiring the auditor to independently inspect corroborating source documents (contracts, bank confirmations, shipping records) before concluding", correct: true },
          { id: "B", text: "As conclusive legal proof of financial statement fraud with no further testing needed" },
          { id: "C", text: "As an error that should be immediately deleted from the client's general ledger" },
          { id: "D", text: "As an irrelevant notification that the auditor can ignore to save time" }
        ],
        explanation: "Auditing standards strictly state that an algorithm's output does not constitute self-sufficient audit evidence. The AI flags the high-risk transaction; the auditor must apply professional skepticism and obtain corroborating external evidence."
      },
      {
        id: "q2-4",
        question: "What is 'Automation Bias', and how does it endanger audit quality during an AI-driven financial statement audit?",
        options: [
          { id: "A", text: "The tendency of human auditors to blindly trust algorithmic risk scores, failing to question software omissions or rubber-stamping entries labeled 'Low Risk' without due professional care", correct: true },
          { id: "B", text: "The preference for hybrid cars in the corporate audit fleet" },
          { id: "C", text: "When computer monitors refresh too slowly during audit fieldwork" },
          { id: "D", text: "When software companies charge monthly subscription fees to accounting firms" }
        ],
        explanation: "Automation bias occurs when professionals become intellectually passive, assuming the computer is infallible. If auditors assume that entries not flagged by AI are automatically error-free, blind spots and novel fraud tactics will be missed."
      }
    ]
  },

  {
    id: "scenario-autonomous-close",
    number: 3,
    title: "Autonomous Month-End Close & Intelligent 3-Way Matching",
    subtitle: "How Global Conglomerates (Siemens, Unilever) Automate Multi-Currency Accounts Payable & Continuous Intercompany Reconciliations",
    industry: "Corporate Finance & Global Shared Services (Autonomous Finance)",
    primaryTrack: "Finance & Audit",
    badgeColor: "#059669",
    overview: {
      background: "Multinational corporations operating across 40+ countries handle hundreds of thousands of supplier invoices monthly in dozens of currencies, while balancing massive internal trade between subsidiaries (intercompany transactions).",
      theProblem: "The traditional month-end financial close was a chaotic 10-to-12-day bottleneck. Accounts Payable (AP) clerks manually cross-checked Purchase Orders (PO), Goods Receipts (GR), and invoices (3-way matching), wasting thousands of hours on minor penny rounding variances. Concurrently, intercompany transactions caused balance discrepancies (e.g. Subsidiary A recording a $500,000 receivable while Subsidiary B recorded $480,000 due to currency exchange timing). This delayed board financial reporting, incurred millions in missed vendor discounts, and raised SOX 404 control deficiency risks.",
      aiSolution: "Implementation of an Autonomous Finance architecture combining deterministic rule engines with Generative AI / NLP agents. Invoices in 24 languages are ingested and semantically matched against POs. For intercompany close, autonomous agents continuously reconcile ledger balances in real-time, resolving currency conversion timing differences and auto-generating balanced adjusting accruals for controller review.",
      architectureSteps: [
        {
          step: "1. Multi-Lingual Invoice Ingestion & Extraction",
          detail: "Deep learning models ingest invoices in 24 languages across scanned PDFs, emails, and EDI, extracting line items, unit costs, and tax codes into structured ERP records."
        },
        {
          step: "2. Hybrid 3-Way Matching & Tolerance Resolution",
          detail: "Deterministic rules enforce 100% price/quantity matching. AI resolves non-standard formatting (e.g. 'St.' vs 'Street') and handles micro-rounding differences under policy."
        },
        {
          step: "3. Continuous Intercompany Reconciliation",
          detail: "Autonomous agents match intercompany transactions across SAP and Oracle instances 24/7, pinpointing currency timing gaps before month-end."
        },
        {
          step: "4. Controller Exception Review & Accrual Sign-Off",
          detail: "Controllers review exceptions via an autonomous close dashboard. Approved payments trigger instant electronic disbursements, capturing early-payment vendor discounts."
        }
      ],
      metricsImpact: [
        { label: "Close Cycle Time", value: "Compressed from 12 to 2.5 Days" },
        { label: "Straight-Through AP Rate", value: "88% Touchless Processing" },
        { label: "Cost Per Invoice", value: "Reduced from $12.50 to $1.80" },
        { label: "Early-Payment Discounts Captured", value: "$4.6M Annual Savings" }
      ],
      governanceAndRisk: "Under Sarbanes-Oxley (SOX) Section 404, internal controls over financial reporting (ICFR) must be ironclad. AI agents cannot have unrestricted disbursement authority. Companies establish strict Segregation of Duties (SoD): autonomous agents propose matches and draft accruals, but human disbursement authorizations remain enforced by delegation of authority limits. Tolerance thresholds are audited quarterly to prevent supplier threshold gaming."
    },
    diagramSvg: `
      <svg viewBox="0 0 760 210" class="w-full h-auto">
        <!-- Invoices & Subledger Data -->
        <rect x="15" y="35" width="135" height="140" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
        <text x="82" y="60" text-anchor="middle" font-weight="700" fill="#0f172a" font-size="12">Global Transactions</text>
        <text x="82" y="78" text-anchor="middle" fill="#64748b" font-size="10">500,000 Invoices/mo</text>
        <text x="82" y="93" text-anchor="middle" fill="#64748b" font-size="10">18 Global Currencies</text>
        <line x1="30" y1="110" x2="135" y2="110" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="82" y="130" text-anchor="middle" font-size="10" fill="#0284c7">Multi-Entity Trade</text>
        <text x="82" y="145" text-anchor="middle" font-size="10" fill="#0284c7">24 Languages</text>

        <!-- Arrow 1 -->
        <path d="M155 105 L200 105" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

        <!-- Autonomous Engine -->
        <rect x="205" y="45" width="150" height="120" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="280" y="70" text-anchor="middle" font-weight="700" fill="#166534" font-size="12">Autonomous Engine</text>
        <text x="280" y="90" text-anchor="middle" fill="#0f172a" font-size="10">Hybrid 3-Way Match</text>
        <text x="280" y="108" text-anchor="middle" fill="#0f172a" font-size="10">Tolerance Parameterization</text>
        <text x="280" y="126" text-anchor="middle" fill="#0f172a" font-size="10">Intercompany Auto-Recon</text>

        <!-- Arrow 2 -->
        <path d="M360 105 L405 105" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

        <!-- Real-Time Reconciliations -->
        <rect x="410" y="45" width="145" height="120" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
        <text x="482" y="70" text-anchor="middle" font-weight="700" fill="#0369a1" font-size="12">Continuous Close</text>
        <text x="482" y="90" text-anchor="middle" fill="#0f172a" font-size="10">88% Touchless Pass</text>
        <text x="482" y="108" text-anchor="middle" fill="#0f172a" font-size="10">Auto-Drafted Accruals</text>
        <text x="482" y="126" text-anchor="middle" fill="#0f172a" font-size="10">Dispute Flagging</text>

        <!-- Arrow 3 -->
        <path d="M560 105 L605 105" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow)"/>

        <!-- Financial Controller -->
        <rect x="610" y="35" width="135" height="140" rx="8" fill="#f0f9ff" stroke="#2563eb" stroke-width="2"/>
        <text x="677" y="60" text-anchor="middle" font-weight="700" fill="#1e3a8a" font-size="12">Controller Review</text>
        <text x="677" y="80" text-anchor="middle" fill="#1d4ed8" font-size="10">Exception Dashboard</text>
        <text x="677" y="98" text-anchor="middle" fill="#1d4ed8" font-size="10">SOX 404 Authorized</text>
        <line x1="625" y1="112" x2="730" y2="112" stroke="#bfdbfe" stroke-width="1.5"/>
        <text x="677" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#166534">2.5-Day Close</text>
        <text x="677" y="148" text-anchor="middle" font-size="9" fill="#166534">$4.6M Discounts Saved</text>
      </svg>
    `,
    quiz: [
      {
        id: "q3-1",
        question: "Why is a 'Hybrid Architecture' (combining deterministic rule engines with Generative AI / NLP) essential for Accounts Payable automation?",
        options: [
          { id: "A", text: "Deterministic rules enforce non-negotiable accounting tolerance limits and SOX internal controls, while GenAI handles unstructured invoice text and formatting variations", correct: true },
          { id: "B", text: "Because deterministic rules only function in the morning, while GenAI functions at night" },
          { id: "C", text: "Because hybrid architectures allow software companies to charge double" },
          { id: "D", text: "Because Generative AI is legally prohibited from calculating addition or subtraction" }
        ],
        explanation: "Pure GenAI is probabilistic and can hallucinate numbers, making it unsafe for core accounting calculations. Pure rules are too brittle to read varying invoice layouts. A hybrid design leverages AI for perception and deterministic rules for accounting enforcement."
      },
      {
        id: "q3-2",
        question: "How can unethical suppliers potentially exploit an automated Accounts Payable system with known tolerance thresholds (e.g. auto-approving price variances under $5.00)?",
        options: [
          { id: "A", text: "By systematically adding unauthorized $4.90 surcharges to thousands of invoices, knowing the automated tolerance will bypass human review (Threshold Gaming)", correct: true },
          { id: "B", text: "By shipping physical goods earlier than requested" },
          { id: "C", text: "By offering customers higher early-payment discounts" },
          { id: "D", text: "By printing invoices in non-standard colors" }
        ],
        explanation: "Threshold gaming is a classic control risk in automated AP. If vendors discover that discrepancies under $5.00 pass without human intervention, repeating a $4.90 surcharge across 50,000 orders siphons $245,000 in unauthorized corporate cash."
      },
      {
        id: "q3-3",
        question: "How does continuous AI intercompany reconciliation prevent month-end financial reporting delays?",
        options: [
          { id: "A", text: "By matching cross-subsidiary trades, invoicing timing, and foreign exchange conversions daily, eliminating the multi-day scramble to balance intercompany books at month-end", correct: true },
          { id: "B", text: "By deleting all intercompany transactions before the audit begins" },
          { id: "C", text: "By forcing all global subsidiaries to use only physical cash" },
          { id: "D", text: "By converting all foreign subsidiary debts into company stock" }
        ],
        explanation: "Intercompany discrepancies are the leading cause of close delays. Rather than waiting until day 10 of month-end to discover that European and US subsidiaries disagree on FX rates or delivery timing, autonomous agents reconcile balances continuously."
      },
      {
        id: "q3-4",
        question: "Under Sarbanes-Oxley (SOX 404) Internal Control over Financial Reporting (ICFR), what control must be enforced regarding autonomous disbursement agents?",
        options: [
          { id: "A", text: "Strict Segregation of Duties (SoD) and delegation of authority limits: AI agents may match invoices and draft accruals, but human financial controllers must retain approval for cash disbursements above authorized thresholds", correct: true },
          { id: "B", text: "The AI agent must be registered as a corporate executive with signatory banking rights" },
          { id: "C", text: "No human should ever inspect or audit the automated payment queue" },
          { id: "D", text: "Financial controllers must personally hand-write all supplier checks" }
        ],
        explanation: "SOX 404 mandates that automated systems cannot hold unmonitored disbursement authority. Segregation of duties ensures that software matching recommendations are governed by human authorization limits."
      }
    ]
  }
];
