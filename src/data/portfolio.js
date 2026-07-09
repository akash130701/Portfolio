export const profile = {
  name: 'Akash Somasundaran',
  headline: 'MSc Business Analytics student and former Senior Data Analyst',
  location: 'Manchester, UK',
  email: 'akashnair1307@gmail.com',
  phone: '+44 7946 388709',
  linkedin: 'https://www.linkedin.com/in/akash-somasundaran0713/',
  github: 'https://github.com/akash130701?tab=repositories',
  cv: '/Akash-Somasundaran-CV.pdf',
  summary:
    'I build analysis, dashboards and models that help teams move from scattered data to clearer decisions. My background combines 2+ years of client-facing analytics experience at Ganit with MSc training in business analytics, machine learning, forecasting and data-driven problem solving.',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    title: 'Patent Forecasting',
    category: 'Machine Learning | Forecasting | Segmentation',
    domain: 'ml',
    summary:
      'Developed forecasting and segmentation workflows to analyse patent activity patterns, compare aggregate versus cluster-based models and communicate interpretable ML outputs.',
    impact: 'Improved understanding of innovation trends and supported more robust forecasting decisions.',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Decision Tree', 'K-Means', 'NLP', 'BERT', 'TF-IDF'],
  },
  {
    title: 'Collection Summary',
    category: 'Business Intelligence | Power BI | SQL',
    domain: 'bi',
    summary:
      'Delivered Power BI and Amazon Redshift-based collection summary reports for BFSI stakeholders who needed clearer monitoring of home loan and credit card collections, transforming raw collections data into insight-led dashboards for portfolio tracking, performance review, and business decision-making.',
    impact:
      'Automated daily reporting and gave stakeholders a single source of truth for collections performance, reducing manual effort and improving decision velocity.',
    tools: ['Power BI', 'SQL', 'Amazon Redshift', 'PySpark', 'Python', 'AWS EMR', 'Power Query'],
  },
  {
    title: 'Data Lake',
    category: 'Data Engineering | ETL | Cloud Data',
    domain: 'de',
    summary:
      'Designed a centralised data lake and automated reporting pipelines for a QSR client with fragmented operational data across MSSQL, Dynamics 365 and flat files; consolidated and standardised data to enable reliable KPI reporting and improve operational decision-making.',
    impact:
      'Improved operational visibility and reduced time-to-insight by providing teams with consistent, trusted data for KPI tracking and reporting.',
    tools: ['AWS DMS', 'AWS Glue', 'AWS Lambda', 'AWS Athena', 'AWS SNS', 'PySpark', 'Python', 'SQL'],
  },
  {
    title: 'Tariff comparison chatbot',
    category: 'Generative AI | LLMs | NLP',
    domain: 'genai',
    summary:
      'Built GenAI Q&A chatbots for healthcare insurance clients to reduce reliance on manual review of complex policy, product, and business documents and create a tariff-claim comparison chatbot to support rapid comparisons and queries.',
    impact:
      'Reduced manual review effort and improved stakeholder access to policy and tariff information by combining document intelligence with conversational retrieval workflows.',
    tools: [
      'Azure AI Document Intelligence',
      'Azure OpenAI',
      'Cognitive Search',
      'LangChain',
      'Python',
      'Streamlit',
      'Docker',
    ],
  },
]

export const experiences = [
  {
    role: 'Senior Data Analyst',
    company: 'Ganit',
    period: '2+ years',
    description:
      'Worked across CPG, QSR, BFSI, healthcare and fintech projects, combining SQL, Python, BI and stakeholder management to deliver analytics for real business problems.',
    bullets: [
      'Built dashboards and analytical workflows for operational reporting, performance monitoring and client decision-making.',
      'Prepared and joined datasets from multiple business sources using SQL, including Redshift-based reporting pipelines.',
      'Created predictive models and optimisation-led analyses for workforce planning, breach prediction and operational efficiency.',
      'Worked directly with stakeholders and senior leaders in a startup environment, contributing to demos, proposals and project delivery.',
    ],
  },
]

export const skills = [
  {
    group: 'Programming & Analysis',
    items: ['Python', 'SQL', 'R', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    group: 'Business Intelligence',
    items: ['Power BI', 'Tableau', 'Excel', 'Power Query', 'Dashboard Design', 'KPI Reporting', 'Amazon QuickSight'],
  },
  {
    group: 'Data Engineering',
    items: ['PySpark', 'ETL/ELT', 'Data Modelling', 'Amazon Redshift', 'DuckDB', 'Data Quality', 'AWS DMS', 'AWS Glue', 'AWS Lambda', 'AWS Athena', 'AWS SNS', 'AWS EMR'],
  },
  {
    group: 'Generative AI',
    items: ['Azure AI Document Intelligence', 'Azure OpenAI', 'Cognitive Search', 'LangChain', 'Codex', 'RAG'],
  },
  {
    group: 'Machine Learning & Analytics',
    items: ['Forecasting', 'Random Forest', 'Decision Trees', 'Clustering', 'NLP', 'BERT', 'TF-IDF', 'Scenario Analysis', 'Optimisation', 'Regression', 'Neural networks', 'Gradient Boosting'],
  },
  {
    group: 'Cloud & Tools',
    items: ['AWS', 'Azure', 'Git', 'Docker', 'Vite', 'Netlify', 'Databricks'],
  },
]

export const passionProjects = [
  {
    title: 'FreshOps',
    subtitle: 'Weekly produce planning for less waste',
    description: 'Built a Streamlit app to reduce fruit and vegetable waste by planning weekly consumption around quantity and shelf life. Used PuLP-based optimisation logic to allocate produce across the week while respecting expiry constraints, helping users make practical grocery decisions and avoid unnecessary spoilage.',
    highlights: [
      'Optimises weekly produce usage by considering remaining shelf life.',
      'Allocates fruit and vegetables to meals when they will be used best.',
      'Helps users reduce spoilage and make grocery decisions with confidence.',
    ],
    logo: '/freshops-logo.svg',
    link: 'https://freshops.streamlit.app/',
    tools: ['Streamlit', 'Python', 'PuLP', 'Optimisation'],
  },
  {
    title: 'FindMyUniAccomodation',
    subtitle: 'Neighbourhood comparison for student housing',
    description: 'A Streamlit decision analytics app that helps UK students compare neighbourhoods by estimated total monthly cost, rent burden, commute, safety, grocery access, amenities, and student suitability. Built for Manchester using a curated sample dataset, designed as a portfolio project for MSc Business Analytics roles.',
    highlights: [
      'Affordability calculator based on budget, income, savings target, room type, lifestyle, and commute preference.',
      'Weighted neighbourhood scoring model out of 100 with interactive map and ranked recommendations.',
      'Monthly cost breakdown by rent, bills, groceries, transport, phone, gym, eating out, and emergency buffer.',
    ],
    logo: null,
    link: null,
    tools: ['Streamlit', 'Python', 'Pandas', 'Plotly', 'Decision Analytics', 'Data Visualization'],
  },
]

