export type CoreItem = {
  id: string;
  code: string;
  title: string;
  body: string;
  email: string;
  href?: string;
};

export const cores: CoreItem[] = [
  {
    id: "admin",
    code: "Admin",
    title: "Administrative Core",
    body: "Coordinates program operations, evaluation, and reporting across all RCMI cores and pilot awards.",
    email: "admin@howard.edu",
    href: "/admin",
  },
  {
    id: "cec-core",
    code: "CEC Core",
    title: "Community Engagement Core",
    body: "Bridges investigators with D.C.-area communities to co-design studies that are relevant, ethical, and trusted.",
    email: "cec@howard.edu",
    href: "/cec",
  },
  {
    id: "idc-core",
    code: "IDC Core",
    title: "Investigator Development Core",
    body: "Mentors early-career and underrepresented scientists through structured training and career-development support.",
    email: "idc@howard.edu",
    href: "/idc",
  },
  {
    id: "ipa",
    code: "IPA",
    title: "Institutional Pilot Awards",
    body: "Seed funding and mentored review for early-stage projects aimed at extramural R-series funding.",
    email: "ipa@howard.edu",
  },
  {
    id: "ric-core",
    code: "RIC Core",
    title: "Research Infrastructure Core",
    body: "Shared instrumentation and computational resources — sequencing, imaging, and biostatistics support — available to all Howard investigators.",
    email: "ric@howard.edu",
    href: "/ric",
  },
  {
    id: "vadsti-3-0",
    code: "VADSTI 3.0",
    title: "VADSTI 3.0",
    body: "The program's current data-science and training initiative, supporting investigators across the RCMI cores.",
    email: "vadsti@howard.edu",
  },
];

export type CardItem = {
  code: string;
  title: string;
  body: string;
  meta: string;
};

export const projects: CardItem[] = [
  {
    code: "IPA · CEC Core",
    title: "Housing Stability & Cardiovascular Risk in D.C. Neighborhoods",
    body: "A five-year community cohort study linking housing stability to long-term cardiovascular outcomes.",
    meta: "PI: Dr. — · 2026 Cohort",
  },
  {
    code: "IPA · RIC Core",
    title: "Genomic Signatures of Treatment-Resistant Hypertension",
    body: "Whole-genome sequencing pipeline identifying variants associated with resistant hypertension in Black adults.",
    meta: "PI: Dr. — · 2025 Cohort",
  },
  {
    code: "IPA · RIC Core",
    title: "Statistical Modeling of Multi-Site Diabetes Outcomes",
    body: "Bayesian hierarchical models for pooled diabetes-outcomes data across three D.C. clinics.",
    meta: "PI: Dr. — · 2026 Cohort",
  },
  {
    code: "IPA · CEC Core",
    title: "Community Health Worker-Led Maternal Health Navigation",
    body: "Co-designed navigation program to reduce maternal-health disparities in Wards 7 and 8.",
    meta: "PI: Dr. — · 2025 Cohort",
  },
  {
    code: "IPA · RIC Core",
    title: "High-Resolution Imaging of Tumor Microenvironments",
    body: "Confocal and multiplex imaging protocol mapping immune-cell infiltration in breast-cancer biopsies.",
    meta: "PI: Dr. — · 2026 Cohort",
  },
  {
    code: "IPA · IDC Core",
    title: "Early-Career R21 Readiness Cohort",
    body: "Structured mock-study-section program preparing junior faculty for first R21 submissions.",
    meta: "PI: Dr. — · 2025–2026",
  },
];

export const services: CardItem[] = [
  {
    code: "RIC Core",
    title: "Sequencing & Variant Analysis",
    body: "Whole-genome and exome sequencing runs plus computational variant-calling pipelines for precision-health studies.",
    meta: "Typical turnaround: 3–4 weeks",
  },
  {
    code: "RIC Core",
    title: "Biostatistics Consulting",
    body: "One-on-one power analysis, study-design review, and analysis-plan support from proposal through publication.",
    meta: "Typical turnaround: 1–2 weeks",
  },
  {
    code: "CEC Core",
    title: "Community Engagement Design",
    body: "Facilitated co-design sessions connecting investigators with D.C. community partners and IRB-ready engagement plans.",
    meta: "Typical turnaround: 2–3 weeks",
  },
  {
    code: "IPA",
    title: "Pilot Award Review",
    body: "Mentored review of pilot-funding applications, including mock study sections ahead of submission.",
    meta: "Turnaround: Rolling, per cycle",
  },
  {
    code: "RIC Core",
    title: "Imaging Time & Technician Support",
    body: "Scheduled instrument time on confocal and multiplex imaging systems with trained technician support.",
    meta: "Booking lead time: ~1 week",
  },
  {
    code: "IDC Core",
    title: "Grant-Writing Workshops",
    body: "Structured workshops and specific-aims review for new and early-career investigators.",
    meta: "Monthly cohort start",
  },
];

export type Publication = {
  year: number;
  category: string;
  title: string;
  citation: string;
  url: string;
};

export const publications: Publication[] = [
  {
    year: 2019,
    category: "Admin",
    title: "The Angiotensin Type 1 Receptor Antagonist Losartan Prevents Ovariectomy-Induced Cognitive Dysfunction and Anxiety-Like Behavior in Long Evans Rats.",
    citation: "Campos GV, de Souza AMA, Ji H, West CA, Wu X, Lee DL, Aguilar BL, Forcelli PA, de Menezes RC, Sandberg K. Cell Mol Neurobiol. 2020 Apr;40(3):407-420. doi: 10.1007/s10571-019-00744-x. Epub 2019 Oct 21. PubMed PMID: 31637567; PubMed Central PMCID: PMC7056686.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/31637567",
  },
  {
    year: 2019,
    category: "CCBB",
    title: "Cannabidiol promotes apoptosis via regulation of XIAP/Smac in gastric cancer.",
    citation: "Jeong S, Jo MJ, Yun HK, Kim DY, Kim BR, Kim JL, Park SH, Na YJ, Jeong YA, Kim BG, Ashktorab H, Smoot DT, Heo JY, Han J, Il Lee S, Do Kim H, Kim DH, Oh SC, Lee DH. Cell Death Dis. 2019 Nov 7;10(11):846. doi: 10.1038/s41419-019-2001-7. PubMed PMID: 31699976; PubMed Central PMCID: PMC6838113.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/31699976",
  },
  {
    year: 2019,
    category: "CCBB",
    title: "Molecular Characterization of Sessile Serrated Adenoma/Polyps From a Large African American Cohort.",
    citation: "Ashktorab H, Delker D, Kanth P, Goel A, Carethers JM, Brim H. Gastroenterology. 2019 Aug;157(2):572-574. doi: 10.1053/j.gastro.2019.04.015. Epub 2019 Apr 17. PubMed PMID: 31004568; PubMed Central PMCID: PMC6980432.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/31004568",
  },
  {
    year: 2019,
    category: "CCBB",
    title: "Genipin induces mitochondrial dysfunction and apoptosis via downregulation of Stat3/mcl-1 pathway in gastric cancer.",
    citation: "Jo MJ, Jeong S, Yun HK, Kim DY, Kim BR, Kim JL, Na YJ, Park SH, Jeong YA, Kim BG, Ashktorab H, Smoot DT, Heo JY, Han J, Lee DH, Oh SC. BMC Cancer. 2019 Jul 27;19(1):739. doi: 10.1186/s12885-019-5957-x. PubMed PMID: 31351462; PubMed Central PMCID: PMC6661087.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/31351462",
  },
  {
    year: 2019,
    category: "CCBB",
    title: "Population genetic evidence for positive and purifying selection acting at the human IFN-γ locus in Africa.",
    citation: "Campbell MC, Smith LT, Harvey J. Genes Immun. 2019 Feb;20(2):143-157. doi: 10.1038/s41435-018-0016-1. Epub 2018 Mar 29. PubMed PMID: 29599512; PubMed Central PMCID: PMC7089600.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/29599512",
  },
  {
    year: 2019,
    category: "CCBB",
    title: "Inhibition of dengue virus by curcuminoids.",
    citation: "Balasubramanian A, Pilankatta R, Teramoto T, Sajith AM, Nwulia E, Kulkarni A, Padmanabhan R. Antiviral Res. 2019 Feb;162:71-78. doi: 10.1016/j.antiviral.2018.12.002. Epub 2018 Dec 6. PubMed PMID: 30529358; PubMed Central PMCID: PMC6541004.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/30529358",
  },
  {
    year: 2019,
    category: "CCBB",
    title: "Zika virus NS5 protein antagonizes type I interferon production via blocking TBK1 activation.",
    citation: "Lin S, Yang S, He J, Guest JD, Ma Z, Yang L, Pierce BG, Tang Q, Zhang YJ. Virology. 2019 Jan 15;527:180-187. doi: 10.1016/j.virol.2018.11.009. Epub 2018 Dec 6. PubMed PMID: 30530224; PubMed Central PMCID: PMC6340140.",
    url: "https://https://www.ncbi.nlm.nih.gov/pubmed/30530224",
  },
  {
    year: 2019,
    category: "CCBB",
    title: "Comparison of Chiral Recognition of Binaphthyl Derivatives with l-Undecyl-Leucine Surfactants in the Presence of Arginine and Sodium Counterions.",
    citation: "Ramos Z, Rothbauer GA, Turner J, Lewis C, Morris K, Billiot E, Billiot F, Fang Y. J Chromatogr Sci. 2019 Jan 1;57(1):54-62. doi: 10.1093/chromsci/bmy080. PubMed PMID: 30165510; NIHMSID:NIHMS991356.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/30165510",
  },
  {
    year: 2019,
    category: "Imaging",
    title: "Inhibition of MEK suppresses hepatocellular carcinoma growth through independent MYC and BIM regulation.",
    citation: "Zhou X, Zhu A, Gu X, Xie G. Cell Oncol (Dordr). 2019 Jun;42(3):369-380. doi: 10.1007/s13402-019-00432-4. Epub 2019 Feb 20. PubMed PMID: 30788663; NIHMSID:NIHMS1059033.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/30788663",
  },
  {
    year: 2019,
    category: "Imaging",
    title: "Cetacean Orbital Muscles: Anatomy and Function of the Circular Layers.",
    citation: "Meshida K, Lin S, Domning DP, Reidenberg JS, Wang P, Gilland E. Anat Rec (Hoboken). 2019 Oct 6;. doi: 10.1002/ar.24278. [Epub ahead of print] PubMed PMID: 31587496; PubMed Central PMCID: PMC7131895.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/31587496",
  },
  {
    year: 2019,
    category: "Imaging",
    title: "Sirtuin 6 Attenuates Kaposi’s Sarcoma-Associated Herpesvirus Reactivation by Suppressing Ori-Lyt Activity and Expression of RTA.",
    citation: "Hu M, Armstrong N, Seto E, Li W, Zhu F, Wang PC, Tang Q. J Virol. 2019 Apr 1;93(7). doi: 10.1128/JVI.02200-18. Print 2019 Apr 1. PubMed PMID: 30651359; PubMed Central PMCID: PMC6430549.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/30651359",
  },
  {
    year: 2019,
    category: "Projects",
    title: "Differential expression of efferocytosis and phagocytosis associated genes in tumor associated macrophages exposed to African American patient derived prostate cancer microenvironment.",
    citation: "Banerjee H, Krauss C, Worthington M, Banerjee N, Walker RS, Hodges S, Chen L, Rawat K, Dasgupta S, Ghosh S, Mandal S. J Solid Tumors. 2019 Oct;9(2):22-27. doi: 10.5430/jst.v9n2p22. Epub 2019 Jun 27. PubMed PMID: 31447959; PubMed Central PMCID: PMC6707537.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/31447959",
  },
  {
    year: 2019,
    category: "Projects",
    title: "Nonmuscle myosin IIA and IIB differentially modulate migration and alter gene expression in primary mouse tumorigenic cells.",
    citation: "Halder D, Saha S, Singh RK, Ghosh I, Mallick D, Dey SK, Ghosh A, Das BB, Ghosh S, Jana SS. Mol Biol Cell. 2019 Jun 1;30(12):1463-1476. doi: 10.1091/mbc.E18-12-0790. Epub 2019 Apr 17. PubMed PMID: 30995168; PubMed Central PMCID: PMC6724700.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/30995168",
  },
  {
    year: 2019,
    category: "Proteomics",
    title: "Global phosphoproteomic analysis of Ebola virions reveals a novel role for VP35 phosphorylation-dependent regulation of genome transcription.",
    citation: "Ivanov A, Ramanathan P, Parry C, Ilinykh PA, Lin X, Petukhov M, Obukhov Y, Ammosova T, Amarasinghe GK, Bukreyev A, Nekhai S. Mol Biol Cell. 2019 Jun 1;30(12):1463-1476. doi: 10.1091/mbc.E18-12-0790. Epub 2019 Apr 17. PubMed PMID: 30995168; PubMed Central PMCID: PMC6724700.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/31562565",
  },
  {
    year: 2019,
    category: "Outcomes",
    title: "Socioeconomic disparities in the complexity of hernias evaluated at Emergency Departments across the United States.",
    citation: "Nunez MF, Ortega G, Souza Mota LG, Olufajo OA, Altema DW, Fullum TM, Tran D. Am J Surg. 2019 Sep;218(3):551-559. doi: 10.1016/j.amjsurg.2018.11.042. Epub 2018 Dec 14. PubMed PMID: 30587331; PubMed Central PMCID: PMC6886249.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/30587331",
  },
  {
    year: 2019,
    category: "Outcomes",
    title: "The effect of income and insurance on the likelihood of major leg amputation.",
    citation: "Hughes K, Mota L, Nunez M, Sehgal N, Ortega G. J Vasc Surg. 2019 Aug;70(2):580-587. doi: 10.1016/j.jvs.2018.11.028. Epub 2019 Mar 8. PubMed PMID: 30853385; PubMed Central PMCID: PMC6886256.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/30853385",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "The diversity and disparity in biomedical informatics (DDBI) workshop.",
    citation: "Southerland WM, Swamidass SJ, Payne PRO, Wiley L, Williams-DeVane C. Pac Symp Biocomput. 2018;23:614-617. PubMed PMID: 29218919; PubMed Central PMCID: PMC5964987.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/29218919",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Inhibition of histone/lysine acetyltransferase activity kills CoCl2-treated and hypoxia-exposed gastric cancer cells and reduces their invasiveness.",
    citation: "Inhibition of histone/lysine acetyltransferase activity kills CoCl 2 -treated and hypoxia-exposed gastric cancer cells and reduces their invasiveness. Rath S, Das L, Kokate SB, Ghosh N, Dixit P, Rout N, Singh SP, Chattopadhyay S, Ashktorab H, Smoot DT, Swamy MM, Kundu TK, Crowe SE, Bhattacharyya A. Int J Biochem Cell Biol. 2017 Jan;82:28-40. doi: 10.1016/j.biocel.2016.11.014. Epub 2016 Nov 23. PubMed PMID: 27890795; PubMed Central PMCID: PMC5718055.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27890795",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Heterodimeric interaction between GKN2 and TFF1 entails synergistic antiproliferative and pro-apoptotic effects on gastric cancer cells",
    citation: "Kim O, Yoon JH, Choi WS, Ashktorab H, Smoot DT, Nam SW, Lee JY, Park WS. Gastric Cancer. 2017 Sep;20(5):772-783. doi: 10.1007/s10120-017-0692-y. Epub 2017 Feb 1. PubMed PMID: 28150071; PubMed Central PMCID: PMC5718056.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28150071",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "IL1B-CGTC haplotype is associated with colorectal cancer in admixed individuals with increased African ancestry.",
    citation: "Sanabria-Salas MC, Hernández-Suárez G, Umaña-Pérez A, Rawlik K, Tenesa A, Serrano-López ML, Sánchez de Gómez M, Rojas MP, Bravo LE, Albis R, Plata JL, Green H, Borgovan T, Li L, Majumdar S, Garai J, Lee E, Ashktorab H, Brim H, Li L, Margolin D, Fejerman L, Zabaleta J.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28157220",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Targeted exome sequencing reveals distinct pathogenic variants in Iranians with colorectal cancer.",
    citation: "Ashktorab H, Mokarram P, Azimi H, Olumi H, Varma S, Nickerson ML, Brim H. Oncotarget. 2017 Jan 31;8(5):7852-7866. doi: 10.18632/oncotarget.13977. PubMed PMID: 28002797; PubMed Central PMCID: PMC5341754.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28002797",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Racial Disparity in Gastrointestinal Cancer Risk.",
    citation: "Ashktorab H, Kupfer SS, Brim H, Carethers JM. Gastroenterology. 2017 Oct;153(4):910-923. doi: 10.1053/j.gastro.2017.08.018. Epub 2017 Aug 12. Review. PubMed PMID: 28807841; PubMed Central PMCID: PMC5623134.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28807841",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Clinical and Pathological Risk Factors Associated with Liver Fibrosis and Steatosis in African-Americans with Chronic Hepatitis C.",
    citation: "Afsari A, Lee E, Shokrani B, Boortalary T, Sherif ZA, Nouraie M, Laiyemo AO, Alkhalloufi K, Brim H, Ashktorab H. Dig Dis Sci. 2017 Aug;62(8):2159-2165. doi: 10.1007/s10620-017-4626-7. Epub 2017 Jun 13. PubMed PMID: 28612194; PubMed Central PMCID: PMC5706543.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28612194",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Epigenetic Mechanisms of Integrative Medicine.",
    citation: "Kanherkar RR, Stair SE, Bhatia-Dey N, Mills PJ, Chopra D, Csoka AB. Evid Based Complement Alternat Med. 2017;2017:4365429. doi: 10.1155/2017/4365429. Epub 2017 Feb 21. Review. PubMed PMID: 28316635; PubMed Central PMCID: PMC5339524.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28316635",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "APOEε4 impacts up-regulation of brain-derived neurotrophic factor after a six-month stretch and aerobic exercise intervention in mild cognitively impaired elderly African Americans: A pilot study.",
    citation: "Allard JS, Ntekim O, Johnson SP, Ngwa JS, Bond V, Pinder D, Gillum RF, Fungwe TV, Kwagyan J, Obisesan TO.  Exp Gerontol. 2017 Jan;87(Pt A):129-136. doi: 10.1016/j.exger.2016.11.001. Epub 2016 Nov 15. PubMed PMID: 27864047; PubMed Central PMCID: PMC5193139.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27864047",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Identifying tagging SNPs for African specific genetic variation from the African Diaspora Genome.",
    citation: "Johnston HR, Hu YJ, Gao J, O’Connor TD, Abecasis GR, Wojcik GL, Gignoux CR, Gourraud PA, Lizee A, Hansen M, Genuario R, Bullis D, Lawley C, Kenny EE, Bustamante C, Beaty TH, Mathias RA, Barnes KC, Qin ZS; CAAPA Consortium.. Sci Rep. 2017 Apr 21;7:46398. doi: 10.1038/srep46398. PubMed PMID: 28429804; PubMed Central PMCID: PMC5399604.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28429804",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "In silicoanalysis of pathways activation landscape in oral squamous cell carcinoma and oral leukoplakia.",
    citation: "In silico analysis of pathways activation landscape in oral squamous cell carcinoma and oral leukoplakia. Makarev E, Schubert AD, Kanherkar RR, London N, Teka M, Ozerov I, Lezhnina K, Bedi A, Ravi R, Mehra R, Hoque MO, Sloma I, Gaykalova DA, Csoka AB, Sidransky D, Zhavoronkov A, Izumchenko E. Cell Death Discov. 2017 May 22;3:17022. doi: 10.1038/cddiscovery.2017.22. eCollection 2017. PubMed PMID: 28580171; PubMed Central PMCID: PMC5439156.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28580171",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Transferability of genome-wide associated loci for asthma in African Americans.",
    citation: "Faruque MU, Chen G, Doumatey AP, Zhou J, Huang H, Shriner D, Adeyemo AA, Rotimi CN, Dunston GM. J Asthma. 2017 Jan 2;54(1):1-8. doi: 10.1080/02770903.2016.1188941. Epub 2016 May 13. PubMed PMID: 27177148; PubMed Central PMCID: PMC5300042.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27177148",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Core Canonical Pathways Involved in Developing Human Glioblastoma Multiforme (GBM).",
    citation: "Ghosh S, Dutta S, Thorne G, Boston A, Barfield A, Banerjee N, Walker R, Banerjee HN. Int J Sci Res Sci Eng Technol. 2017 Feb;3(1):458-465. Epub 2017 Feb 1. PubMed PMID: 28523289; PubMed Central PMCID: PMC5432965.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28523289",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Effects of social deprivation on social and depressive-like behaviors and the numbers of oxytocin expressing neurons in rats.",
    citation: "Gilles YD, Polston EK. Behav Brain Res. 2017 Jun 15;328:28-38. doi: 10.1016/j.bbr.2017.03.036. Epub 2017 Apr 1. PubMed PMID: 28377259; PubMed Central PMCID: PMC5479571.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28377259",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Next Generation Sequencing Reveals High Prevalence of BRCA1 and BRCA2 Variants of Unknown Significance in Early-Onset Breast Cancer in African American Women.",
    citation: "Ricks-Santi L, McDonald JT, Gold B, Dean M, Thompson N, Abbas M, Wilson B, Kanaan Y, Naab TJ, Dunston G. Ethn Dis. 2017 Apr 20;27(2):169-178. doi: 10.18865/ed.27.2.169. eCollection 2017 Spring. PubMed PMID: 28439188; PubMed Central PMCID: PMC5398176.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28439188",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Clinicopathological and Functional Significance of RECQL1 Helicase in Sporadic Breast Cancers.",
    citation: "Arora A, Parvathaneni S, Aleskandarany MA, Agarwal D, Ali R, Abdel-Fatah T, Green AR, Ball GR, Rakha EA, Ellis IO, Sharma S, Madhusudan S. Mol Cancer Ther. 2017 Jan;16(1):239-250. doi: 10.1158/1535-7163.MCT-16-0290. Epub 2016 Nov 11. PubMed PMID: 27837030; PubMed Central PMCID: PMC5222686.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27837030",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "A new sub-pathway of long-patch base excision repair involving 5′ gap formation.",
    citation: "Woodrick J, Gupta S, Camacho S, Parvathaneni S, Choudhury S, Cheema A, Bai Y, Khatkar P, Erkizan HV, Sami F, Su Y, Schärer OD, Sharma S, Roy R. EMBO J. 2017 Jun 1;36(11):1605-1622. doi: 10.15252/embj.201694920. Epub 2017 Apr 3. PubMed PMID: 28373211; PubMed Central PMCID: PMC5452013.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28373211",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Long Noncoding RNA PURPL Suppresses Basal p53 Levels and Promotes Tumorigenicity in Colorectal Cancer.",
    citation: "Li XL, Subramanian M, Jones MF, Chaudhary R, Singh DK, Zong X, Gryder B, Sindri S, Mo M, Schetter A, Wen X, Parvathaneni S, Kazandjian D, Jenkins LM, Tang W, Elloumi F, Martindale JL, Huarte M, Zhu Y, Robles AI, Frier SM, Rigo F, Cam M, Ambs S, Sharma S, Harris CC, Dasso M, Prasanth KV, Lal A. Cell Rep. 2017 Sep 5;20(10):2408-2423. doi: 10.1016/j.celrep.2017.08.041. PubMed PMID: 28877474; PubMed Central PMCID: PMC5777516.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28877474",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "RECQ1 expression is upregulated in response to DNA damage and in a p53-dependent manner.",
    citation: "Parvathaneni S, Lu X, Chaudhary R, Lal A, Madhusudan S, Sharma S. Oncotarget. 2017 May 27;8(44):75924-75942. doi: 10.18632/oncotarget.18237. eCollection 2017 Sep 29. PubMed PMID: 29100281; PubMed Central PMCID: PMC5652675.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/29100281",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "CXCR4 and CXCR7 play distinct roles in cardiac lineage specification and pharmacologic β-adrenergic response.",
    citation: "Ceholski DK, Turnbull IC, Pothula V, Lecce L, Jarrah AA, Kho C, Lee A, Hadri L, Costa KD, Hajjar RJ, Tarzami ST. Stem Cell Res. 2017 Aug;23:77-86. doi: 10.1016/j.scr.2017.06.015. Epub 2017 Jul 8. PubMed PMID: 28711757; PubMed Central PMCID: PMC5859259.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28711757",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Role of cortical alpha-2 adrenoceptors in alcohol withdrawal-induced depression and tricyclic antidepressants.",
    citation: "Getachew B, Hauser SR, Csoka AB, Taylor RE, Tizabi Y. Drug Alcohol Depend. 2017 Jun 1;175:133-139. doi: 10.1016/j.drugalcdep.2017.03.004. Epub 2017 Apr 4. PubMed PMID: 28414989; PubMed Central PMCID: PMC5483174.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28414989",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Quionolone carboxylic acid derivatives as HIV-1 integrase inhibitors: Docking-based HQSAR and topomer CoMFA analyses.",
    citation: "Tong J, Zhan P, Wang XS, Wu Y. J Chemom. 2017 Dec;31(12). pii: e2934. doi: 10.1002/cem.2934. Epub 2017 Aug 29. PubMed PMID: 29606793; PubMed Central PMCID: PMC5875935.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/29606793",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "Virtual Screening against Phosphoglycerate Kinase 1 in Quest of Novel Apoptosis Inhibitors.",
    citation: "Xia J, Feng B, Shao Q, Yuan Y, Wang XS, Chen N, Wu S. Molecules. 2017 Jun 21;22(6). pii: E1029. doi: 10.3390/molecules22061029. PubMed PMID: 28635653; PubMed Central PMCID: PMC5720137.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28635653",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "The Development of Target-Specific Pose Filter Ensembles To Boost Ligand Enrichment for Structure-Based Virtual Screening.",
    citation: "Xia J, Hsieh JH, Hu H, Wu S, Wang XS. J Chem Inf Model. 2017 Jun 26;57(6):1414-1425. doi: 10.1021/acs.jcim.6b00749. Epub 2017 Jun 1. PubMed PMID: 28511009; PubMed Central PMCID: PMC5726860.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28511009",
  },
  {
    year: 2017,
    category: "CCBB",
    title: "A Thoroughly Validated Virtual Screening Strategy for Discovery of Novel HDAC3 Inhibitors.",
    citation: "Hu H, Xia J, Wang D, Wang XS, Wu S. Int J Mol Sci. 2017 Jan 18;18(1). pii: E137. doi: 10.3390/ijms18010137. PubMed PMID: 28106794; PubMed Central PMCID: PMC5297770.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28106794",
  },
  {
    year: 2017,
    category: "CCBB / Faculty Scholars",
    title: "Forces and Disease: Electrostatic force differences caused by mutations in kinesin motor domains can distinguish between disease-causing and non-disease-causing mutations.",
    citation: "Li L, Jia Z, Peng Y, Godar S, Getov I, Teng S, Alper J, Alexov E. Sci Rep. 2017 Aug 15;7(1):8237. doi: 10.1038/s41598-017-08419-7. PubMed PMID: 28811629; PubMed Central PMCID: PMC5557957.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28811629",
  },
  {
    year: 2017,
    category: "CCBB / Faculty Scholars",
    title: "Disrupted-in-Schizophrenia-1 (DISC1) protein disturbs neural function in multiple disease-risk pathways.",
    citation: "Shao L, Lu B, Wen Z, Teng S, Wang L, Zhao Y, Wang L, Ishizuka K, Xu X, Sawa A, Song H, Ming G, Zhong Y. Hum Mol Genet. 2017 Jul 15;26(14):2634-2648. doi: 10.1093/hmg/ddx147. PubMed PMID: 28472294; PubMed Central PMCID: PMC5886174.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28472294",
  },
  {
    year: 2017,
    category: "CCBB / Faculty Scholars",
    title: "The essential requirement of an animal heme peroxidase protein during the wing maturation process in Drosophila.",
    citation: "Bailey D, Basar MA, Nag S, Bondhu N, Teng S, Duttaroy A. BMC Dev Biol. 2017 Jan 11;17(1):1. doi: 10.1186/s12861-016-0143-8. PubMed PMID: 28077066; PubMed Central PMCID: PMC5225594.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28077066",
  },
  {
    year: 2017,
    category: "CCBB / Imaging",
    title: "MiR-124 acts as a tumor suppressor by inhibiting the expression of sphingosine kinase 1 and its downstream signaling in head and neck squamous cell carcinoma.",
    citation: "Zhao Y, Ling Z, Hao Y, Pang X, Han X, Califano JA, Shan L, Gu X. Oncotarget. 2017 Apr 11;8(15):25005-25020. doi: 10.18632/oncotarget.15334. PubMed PMID: 28212569; PubMed Central PMCID: PMC5421905.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28212569",
  },
  {
    year: 2017,
    category: "CCBB / Imaging",
    title: "Recombinant Immunotoxin Therapy of Glioblastoma: Smart Design, Key Findings, and Specific Challenges.",
    citation: "Zhu S, Liu Y, Wang PC, Gu X, Shan L. Biomed Res Int. 2017;2017:7929286. doi: 10.1155/2017/7929286. Epub 2017 Jun 29. Review. PubMed PMID: 28752098; PubMed Central PMCID: PMC5511670.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28752098",
  },
  {
    year: 2017,
    category: "CCBB / Pilot Projects",
    title: "Neuroanatomical Relationships between Orexin/Hypocretin-Containing Neurons/Nerve Fibers and Nicotine-Induced c-Fos-Activated Cells of the Reward-Addiction Neurocircuitry.",
    citation: "Dehkordi O, Rose JE, Dávila-García MI, Millis RM, Mirzaei SA, Manaye KF, Jayam-Trouth A. J Alcohol Drug Depend. 2017 Aug;5(4). pii: 273. doi: 10.4172/2329-6488.1000273. Epub 2017 Jul 20. PubMed PMID: 29038792; PubMed Central PMCID: PMC5640973.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/29038792",
  },
  {
    year: 2017,
    category: "CCBB / Pilot Projects",
    title: "Biological and historical overview of Zika virus.",
    citation: "Armstrong N, Hou W, Tang Q. World J Virol. 2017 Feb 12;6(1):1-8. doi: 10.5501/wjv.v6.i1.1. Review. PubMed PMID: 28239566; PubMed Central PMCID: PMC5303855.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28239566",
  },
  {
    year: 2017,
    category: "CCBB / Pilot Projects",
    title: "Molecular cloning and characterization of the genes encoding the proteins of Zika virus.",
    citation: "Hou W, Cruz-Cosme R, Armstrong N, Obwolo LA, Wen F, Hu W, Luo MH, Tang Q. Gene. 2017 Sep 10;628:117-128. doi: 10.1016/j.gene.2017.07.049. Epub 2017 Jul 15. PubMed PMID: 28720531; PubMed Central PMCID: PMC5729740.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28720531",
  },
  {
    year: 2017,
    category: "CCBB / Pilot Projects",
    title: "Human cytomegalovirus IE1 downregulates Hes1 in neural progenitor cells as a potential E3 ubiquitin ligase.",
    citation: "Liu XJ, Yang B, Huang SN, Wu CC, Li XJ, Cheng S, Jiang X, Hu F, Ming YZ, Nevels M, Britt WJ, Rayner S, Tang Q, Zeng WB, Zhao F, Luo MH. PLoS Pathog. 2017 Jul 27;13(7):e1006542. doi: 10.1371/journal.ppat.1006542. eCollection 2017 Jul. PubMed PMID: 28750047; PubMed Central PMCID: PMC5549770.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28750047",
  },
  {
    year: 2017,
    category: "CCBB / Pilot Projects",
    title: "Determination of the Cell Permissiveness Spectrum, Mode of RNA Replication, and RNA-Protein Interaction of Zika Virus.",
    citation: "Hou W, Armstrong N, Obwolo LA, Thomas M, Pang X, Jones KS, Tang Q. BMC Infect Dis. 2017 Mar 31;17(1):239. doi: 10.1186/s12879-017-2338-4. PubMed PMID: 28359304; PubMed Central PMCID: PMC5374689.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28359304",
  },
  {
    year: 2017,
    category: "CCBB / Pilot Projects",
    title: "Infected T98G glioblastoma cells support human cytomegalovirus reactivation from latency.",
    citation: "Cheng S, Jiang X, Yang B, Wen L, Zhao F, Zeng WB, Liu XJ, Dong X, Sun JY, Ming YZ, Zhu H, Rayner S, Tang Q, Fortunato E, Luo MH. Virology. 2017 Oct;510:205-215. doi: 10.1016/j.virol.2017.07.023. Epub 2017 Jul 24. PubMed PMID: 28750324; PubMed Central PMCID: PMC6263025.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28750324",
  },
  {
    year: 2017,
    category: "Imaging",
    title: "P-gp Inhibition and Mitochondrial Impairment by Dual-Functional Nanostructure Based on Vitamin E Derivatives To Overcome Multidrug Resistance.",
    citation: "Tuguntaev RG, Chen S, Eltahan AS, Mozhi A, Jin S, Zhang J, Li C, Wang PC, Liang XJ. ACS Appl Mater Interfaces. 2017 May 24;9(20):16900-16912. doi: 10.1021/acsami.7b03877. Epub 2017 May 10. PubMed PMID: 28463476; PubMed Central PMCID: PMC5545886.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28463476",
  },
  {
    year: 2017,
    category: "Imaging",
    title: "Transferrin-Dressed Virus-like Ternary Nanoparticles with Aggregation-Induced Emission for Targeted Delivery and Rapid Cytosolic Release of siRNA.",
    citation: "Zhang T, Guo W, Zhang C, Yu J, Xu J, Li S, Tian JH, Wang PC, Xing JF, Liang XJ. ACS Appl Mater Interfaces. 2017 May 17;9(19):16006-16014. doi: 10.1021/acsami.7b03402. Epub 2017 May 3. PubMed PMID: 28447465; PubMed Central PMCID: PMC5545884.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28447465",
  },
  {
    year: 2017,
    category: "Imaging",
    title: "Virus-Inspired Self-Assembled Nanofibers with Aggregation-Induced Emission for Highly Efficient and Visible Gene Delivery.",
    citation: "Zhang C, Zhang T, Jin S, Xue X, Yang X, Gong N, Zhang J, Wang PC, Tian JH, Xing J, Liang XJ. ACS Appl Mater Interfaces. 2017 Feb 8;9(5):4425-4432. doi: 10.1021/acsami.6b11536. Epub 2017 Jan 24. PubMed PMID: 28074644; PubMed Central PMCID: PMC5545877.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28074644",
  },
  {
    year: 2017,
    category: "Imaging",
    title: "Carrier-free, self-assembled pure drug nanorods composed of 10-hydroxycamptothecin and chlorin e6 for combinatorial chemo-photodynamic antitumor therapy in vivo.",
    citation: "Wen Y, Zhang W, Gong N, Wang YF, Guo HB, Guo W, Wang PC, Liang XJ. Nanoscale. 2017 Oct 5;9(38):14347-14356. doi: 10.1039/c7nr03129g. PubMed PMID: 28731112; PubMed Central PMCID: PMC5629108.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28731112",
  },
  {
    year: 2017,
    category: "Imaging",
    title: "Microstructural Alterations and Oligodendrocyte Dysmaturation in White Matter After Cardiopulmonary Bypass in a Juvenile Porcine Model.",
    citation: "Stinnett GR, Lin S, Korotcov AV, Korotcova L, Morton PD, Ramachandra SD, Pham A, Kumar S, Agematsu K, Zurakowski D, Wang PC, Jonas RA, Ishibashi N. J Am Heart Assoc. 2017 Aug 15;6(8). pii: e005997. doi: 10.1161/JAHA.117.005997. PubMed PMID: 28862938; PubMed Central PMCID: PMC5586442.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28862938",
  },
  {
    year: 2017,
    category: "Pilot Projects",
    title: "TrmL and TusA Are Necessary for rpoS and MiaA Is Required for hfq Expression in Escherichia coli.",
    citation: "Aubee JI, Olu M, Thompson KM. Biomolecules. 2017 May 4;7(2). pii: E39. doi: 10.3390/biom7020039. PubMed PMID: 28471404; PubMed Central PMCID: PMC5485728.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28471404",
  },
  {
    year: 2017,
    category: "Pilot Projects",
    title: "Restricted Blood Flow Exercise in Sedentary, Overweight African-American Females May Increase Muscle Strength and Decrease Endothelial Function and Vascular Autoregulation.",
    citation: "Bond V, Curry BH, Kumar K, Pemminati S, Gorantla VR, Kadur K, Millis RM. J Pharmacopuncture. 2017 Mar;20(1):23-28. doi: 10.3831/KPI.2017.20.002. PubMed PMID: 28392959; PubMed Central PMCID: PMC5374335.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28392959",
  },
  {
    year: 2017,
    category: "Proteomics",
    title: "Sex differences in the use of healthcare services among US adults with and without a cancer diagnosis.",
    citation: "Burnside C, Hudson T, Williams C, Lawson W, Laiyemo AO. Turk J Urol. 2018 Jul;44(4):298-302. doi: 10.5152/tud.2018.71205. PubMed PMID: 29932398; PubMed Central PMCID: PMC6016653.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/29932398",
  },
  {
    year: 2017,
    category: "Proteomics",
    title: "Effects of hydroxyurea on F-cells in sickle cell disease and potential impact of a second fetal globin inducer.",
    citation: "Dai Y, Sangerman J, Nouraie M, Faller AD, Oneal P, Rock A, Owoyemi O, Niu X, Nekhai S, Maharaj D, Cui S, Taylor R, Steinberg M, Perrine S. Am J Hematol. 2017 Jan;92(1):E10-E11. doi: 10.1002/ajh.24590. Epub 2016 Nov 18. PubMed PMID: 27766663; PubMed Central PMCID: PMC5167623.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27766663",
  },
  {
    year: 2017,
    category: "Proteomics",
    title: "Prospective study of thrombosis and thrombospondin-1 expression in Chuvash polycythemia.",
    citation: "Sergueeva A, Miasnikova G, Shah BN, Song J, Lisina E, Okhotin DJ, Nouraie M, Nekhai S, Ammosova T, Niu XM, Prchal JT, Zhang X, Gordeuk VR. Haematologica. 2017 May;102(5):e166-e169. doi: 10.3324/haematol.2016.158170. Epub 2017 Jan 19. PubMed PMID: 28104701; PubMed Central PMCID: PMC5477617.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28104701",
  },
  {
    year: 2017,
    category: "Proteomics",
    title: "Inhibition of HIV-1 infection in humanized mice and metabolic stability of protein phosphatase-1-targeting small molecule 1E7-03.",
    citation: "Lin X, Kumari N, DeMarino C, Kont YS, Ammosova T, Kulkarni A, Jerebtsova M, Vazquez-Meves G, Ivanov A, Dmytro K, Üren A, Kashanchi F, Nekhai S. Oncotarget. 2017 Aug 7;8(44):76749-76769. doi: 10.18632/oncotarget.19999. eCollection 2017 Sep 29. PubMed PMID: 29100346; PubMed Central PMCID: PMC5652740.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/29100346",
  },
  {
    year: 2017,
    category: "Proteomics",
    title: "Protein Phosphatase-1 -targeted Small Molecules, Iron Chelators and Curcumin Analogs as HIV-1 Antivirals.",
    citation: "Lin X, Ammosova T, Kumari N, Nekhai S. Curr Pharm Des. 2017;23(28):4122-4132. doi: 10.2174/1381612823666170704123620. Review. PubMed PMID: 28677499; PubMed Central PMCID: PMC5700866.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28677499",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Genetic Polymorphisms of TLR4 and MICA are Associated with Severity of Trachoma Disease in Tanzania.",
    citation: "Abbas M, Berka N, Khraiwesh M, Ramadan A, Apprey V, Furbert-Harris P, Quinn T, Brim H, Dunston G. Autoimmune Infect Dis. 2016 Jun;2(3). doi: 10.16966/2470-1025.116. Epub 2016 Jun 3. PubMed PMID: 27559544; PubMed Central PMCID: PMC4993598.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27559544",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Gastrokine 1 inhibits gastrin-induced cell proliferation.",
    citation: "Kim O, Yoon JH, Choi WS, Ashktorab H, Smoot DT, Nam SW, Lee JY, Park WS. Gastric Cancer. 2016 Apr;19(2):381-391. doi: 10.1007/s10120-015-0483-2. Epub 2015 Mar 10. PubMed PMID: 25752269; PubMed Central PMCID: PMC5297461.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25752269",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Genomics of Colorectal Cancer in African Americans.",
    citation: "Brim H, Ashktorab H. Next Gener Seq Appl. 2016 Sep;3(2). pii: 133. Epub 2016 Sep 21. PubMed PMID: 27917406; PubMed Central PMCID: PMC5131637.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27917406",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Reduced Representation Bisulfite Sequencing Determination of Distinctive DNA Hypermethylated Genes in the Progression to Colon Cancer in African Americans",
    citation: "Ashktorab H, Shakoori A, Zarnogi S, Sun X, Varma S, Lee E, Shokrani B, Laiyemo AO, Washington K, Brim H. Gastroenterol Res Pract. 2016;2016:2102674. doi: 10.1155/2016/2102674. Epub 2016 Sep 1. PubMed PMID: 27688749; PubMed Central PMCID: PMC5023837.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27688749",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Can optical diagnosis of small colon polyps be accurate? Comparing standard scope without narrow banding to high definition scope with narrow banding.",
    citation: "Ashktorab H, Etaati F, Rezaeean F, Nouraie M, Paydar M, Namin HH, Sanderson A, Begum R, Alkhalloufi K, Brim H, Laiyemo AO. World J Gastroenterol. 2016 Jul 28;22(28):6539-46. doi: 10.3748/wjg.v22.i28.6539. PubMed PMID: 27605888; PubMed Central PMCID: PMC4968133.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27605888",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Increased MACC1 levels in tissues and blood identify colon adenoma patients at high risk.",
    citation: "Ashktorab H, Hermann P, Nouraie M, Shokrani B, Lee E, Haidary T, Brim H, Stein U. J Transl Med. 2016 Jul 20;14(1):215. doi: 10.1186/s12967-016-0971-0. PubMed PMID: 27439755; PubMed Central PMCID: PMC4955242.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27439755",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "A meta-analysis of MSI frequency and race in colorectal cancer.",
    citation: "Ashktorab H, Ahuja S, Kannan L, Llor X, Ellis NA, Xicola RM, Laiyemo AO, Carethers JM, Brim H, Nouraie M. Oncotarget. 2016 Apr 23;7(23):34546-57. doi: 10.18632/oncotarget.8945. PubMed PMID: 27120810; PubMed Central PMCID: PMC5085175.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27120810",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Targeted Exome Sequencing Outcome Variations of Colorectal Tumors within and across Two Sequencing Platforms.",
    citation: "Ashktorab H, Azimi H, Nickerson ML, Bass S, Varma S, Brim H. Next Gener Seq Appl. 2016 Jun;3(1). pii: 123. Epub 2016 Mar 14. PubMed PMID: 27547838; PubMed Central PMCID: PMC4989921.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27547838",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Colorectal Cancer in Young African Americans: Is It Time to Revisit Guidelines and Prevention?",
    citation: "Ashktorab H, Vilmenay K, Brim H, Laiyemo AO, Kibreab A, Nouraie M. Dig Dis Sci. 2016 Oct;61(10):3026-3030. doi: 10.1007/s10620-016-4207-1. Epub 2016 Jun 9. PubMed PMID: 27278956; PubMed Central PMCID: PMC5021553.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27278956",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Global Epidemiology of Nonalcoholic Fatty Liver Disease and Perspectives on US Minority Populations.",
    citation: "Sherif ZA, Saeed A, Ghavimi S, Nouraie SM, Laiyemo AO, Brim H, Ashktorab H. Dig Dis Sci. 2016 May;61(5):1214-25. doi: 10.1007/s10620-016-4143-0. Epub 2016 Apr 1. Review. PubMed PMID: 27038448; PubMed Central PMCID: PMC4838529.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27038448",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Nonlinear Conte-Zbilut-Federici (CZF) Method of Computing LF/HF Ratio: A More Reliable Index of Changes in Heart Rate Variability.",
    citation: "Bond V Jr, Curry BH, Kumar K, Pemminati S, Gorantla VR, Kadur K, Millis RM. J Pharmacopuncture. 2016 Sep;19(3):207-212. PubMed PMID: 27695629; PubMed Central PMCID: PMC5043084.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27695629",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Cardiovascular Responses to an Isometric Handgrip Exercise in Females with Prehypertension.",
    citation: "Bond V, Curry BH, Adams RG, Obisesan T, Pemminati S, Gorantla VR, Kadur K, Millis RM.  N Am J Med Sci. 2016 Jun;8(6):243-9. doi: 10.4103/1947-2714.185032. PubMed PMID: 27500128; PubMed Central PMCID: PMC4960933.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27500128",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Beliefs and Preferences for Medical Research Among African-Americans.",
    citation: "Cain GE, Kalu N, Kwagyan J, Marshall VJ, Ewing AT, Bland WP, Hesselbrock V, Taylor RE, Scott DM. J Racial Ethn Health Disparities. 2016 Mar;3(1):74-82. doi: 10.1007/s40615-015-0117-8. Epub 2015 May 16. PubMed PMID: 26896107; PubMed Central PMCID: PMC5177967.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26896107",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Effects of a Dietary Beetroot Juice Treatment on Systemic and Cerebral Haemodynamics- A Pilot Study.",
    citation: "Curry BH, Bond V, Pemminati S, Gorantla VR, Volkova YA, Kadur K, Millis RM. J Clin Diagn Res. 2016 Jul;10(7):CC01-5. doi: 10.7860/JCDR/2016/20049.8113. Epub 2016 Jul 1. PubMed PMID: 27630836; PubMed Central PMCID: PMC5020246.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27630836",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "The Sensory Impact of Nicotine on Noradrenergic and Dopaminergic Neurons of the Nicotine Reward – Addiction Neurocircuitry.",
    citation: "Rose JE, Dehkordi O, Manaye KF, Millis RM, Cianaki SA, Jayam-Trouth A. J Addict Res Ther. 2016 Apr;7(2). pii: 274. Epub 2016 Apr 7. PubMed PMID: 27347434; PubMed Central PMCID: PMC4916769.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27347434",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "A continuum of admixture in the Western Hemisphere revealed by the African Diaspora genome.",
    citation: "Mathias RA, Taub MA, Gignoux CR, Fu W, Musharoff S, O’Connor TD, Vergara C, Torgerson DG, Pino-Yanes M, Shringarpure SS, Huang L, Rafaels N, Boorgula MP, Johnston HR, Ortega VE, Levin AM, Song W, Torres R, Padhukasahasram B, Eng C, Mejia-Mejia DA, Ferguson T, Qin ZS, Scott AF, Yazdanbakhsh M, Wilson JG, Marrugo J, Lange LA, Kumar R, Avila PC, Williams LK, Watson H, Ware LB, Olopade C, Olopade O, Oliveira R, Ober C, Nicolae DL, Meyers D, Mayorga A, Knight-Madden J, Hartert T, Hansel NN, Foreman MG, Ford JG, Faruque MU, Dunston GM, Caraballo L, Burchard EG, Bleecker E, Araujo MI, Herrera-Paz EF, Gietzen K, Grus WE, Bamshad M, Bustamante CD, Kenny EE, Hernandez RD, Beaty TH, Ruczinski I, Akey J; CAAPA., Barnes KC. Nat Commun. 2016 Oct 11;7:12522. doi: 10.1038/ncomms12522. PubMed PMID: 27725671; PubMed Central PMCID: PMC5062574.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27725671",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Analysis of Incomplete Longitudinal Binary Data-A Combined Markov’s Transition and Logistic Model for Non-ignorable Missingness.",
    citation: "Erebholo F, Bezandry P, Apprey V, Kwagyan J. Appl Appl Math. 2016 Jun;11(1):83-96. PubMed PMID: 28729894; PubMed Central PMCID: PMC5515546.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28729894",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "How quantum entanglement in DNA synchronizes double-strand breakage by type II restriction endonucleases.",
    citation: "Kurian P, Dunston G, Lindesay J. J Theor Biol. 2016 Feb 21;391:102-12. doi: 10.1016/j.jtbi.2015.11.018. Epub 2015 Dec 10. PubMed PMID: 26682627; PubMed Central PMCID: PMC4746125.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26682627",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "A Correlated Binary Model for Ignorable Missing Data: Application to Rheumatoid Arthritis Clinical Data.",
    citation: "Erebholo F, Apprey V, Bezandry P, Kwagyan J. J Data Sci. 2016 Apr;14(2):365-382. PubMed PMID: 28066502; PubMed Central PMCID: PMC5210771.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28066502",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Genome-wide analysis of Dongxiang wild rice (Oryza rufipogon Griff.) to investigate lost/acquired genes during rice domestication",
    citation: ". Zhang F, Xu T, Mao L, Yan S, Chen X, Wu Z, Chen R, Luo X, Xie J, Gao S. BMC Plant Biol. 2016 Apr 26;16:103. doi: 10.1186/s12870-016-0788-2. PubMed PMID: 27118394; PubMed Central PMCID: PMC4845489.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27118394",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Impact of a multicomponent screening, brief intervention, and referral to treatment (SBIRT) training curriculum on a medical residency program.",
    citation: "Kalu N, Cain G, McLaurin-Jones T, Scott D, Kwagyan J, Fassassi C, Greene W, Taylor RE. Subst Abus. 2016;37(1):242-7. doi: 10.1080/08897077.2015.1035841. Epub 2015 May 11. PubMed PMID: 25961140; PubMed Central PMCID: PMC5267356.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25961140",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Novel drug design for Chagas disease via targeting Trypanosoma cruzi tubulin: Homology modeling and binding pocket prediction on Trypanosoma cruzi tubulin polymerization inhibition by naphthoquinone derivatives.",
    citation: "Ogindo CO, Khraiwesh MH, George M Jr, Brandy Y, Brandy N, Gugssa A, Ashraf M, Abbas M, Southerland WM, Lee CM, Bakare O, Fang Y. Bioorg Med Chem. 2016 Aug 15;24(16):3849-55. doi: 10.1016/j.bmc.2016.06.031. Epub 2016 Jun 16. PubMed PMID: 27345756; PubMed Central PMCID: PMC4955813.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27345756",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Transcriptome guided identification of novel functions of RECQ1 helicase.",
    citation: "Lu X, Parvathaneni S, Li XL, Lal A, Sharma S. Methods. 2016 Oct 1;108:111-7. doi: 10.1016/j.ymeth.2016.04.018. Epub 2016 Apr 18. PubMed PMID: 27102625; PubMed Central PMCID: PMC5035568.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27102625",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Site-directed mutants of human RECQ1 reveal functional importance of the zinc binding domain.",
    citation: "Sami F, Gary RK, Fang Y, Sharma S. Mutat Res. 2016 Aug;790:8-18. doi: 10.1016/j.mrfmmm.2016.05.005. Epub 2016 May 17. PubMed PMID: 27248010; PubMed Central PMCID: PMC4967042.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27248010",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Differentiation of Overweight from Normal Weight Young Adults by Postprandial Heart Rate Variability and Systolic Blood Pressure.",
    citation: "Taffe L, Stancil K, Bond V, Pemminati S, Gorantla VR, Kadur K, Millis RM. J Clin Diagn Res. 2016 Aug;10(8):CC01-6. doi: 10.7860/JCDR/2016/20410.8343. Epub 2016 Aug 1. PubMed PMID: 27656434; PubMed Central PMCID: PMC5028518.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27656434",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Targeting tumor microenvironment with PEG-based amphiphilic nanoparticles to overcome chemoresistance.",
    citation: "Chen S, Yang K, Tuguntaev RG, Mozhi A, Zhang J, Wang PC, Liang XJ. Nanomedicine. 2016 Feb;12(2):269-86. doi: 10.1016/j.nano.2015.10.020. Epub 2015 Dec 17. Review. PubMed PMID: 26707818; PubMed Central PMCID: PMC4789173.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26707818",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Cheminfomatic-based Drug Discovery of Human Tyrosine Kinase Inhibitors.",
    citation: "Reid TE, Fortunak JM, Wutoh A, Simon Wang X. Curr Top Med Chem. 2016;16(13):1452-62. Review. PubMed PMID: 26369823; PubMed Central PMCID: PMC4785061.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26369823",
  },
  {
    year: 2016,
    category: "CCBB",
    title: "Challenges and disparities in the application of personalized genomic medicine to populations with African ancestry.",
    citation: "Kessler MD, Yerges-Armstrong L, Taub MA, Shetty AC, Maloney K, Jeng LJ, Ruczinski I, Levin AM, Williams LK, Beaty TH, Mathias RA, Barnes KC; Consortium on Asthma among African-ancestry Populations in the Americas (CAAPA)., O’Connor TD. Nat Commun. 2016 Oct 11;7:12521. doi: 10.1038/ncomms12521. PubMed PMID: 27725664; PubMed Central PMCID: PMC5062569.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27725664",
  },
  {
    year: 2016,
    category: "Faculty Scholars",
    title: "RNA Sequencing in Schizophrenia.",
    citation: "Li X, Teng S. Bioinform Biol Insights. 2016 Mar 31;9(Suppl 1):53-60. doi: 10.4137/BBI.S28992. eCollection 2015. Review. PubMed PMID: 27053919; PubMed Central PMCID: PMC4818022.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27053919",
  },
  {
    year: 2016,
    category: "Faculty Scholars",
    title: "Current Developments in RNA Sequence Analysis.",
    citation: "Zhang J, Teng S, Zhong C, Wang B, Wu J. Bioinform Biol Insights. 2016 May 15;9(Suppl 1):61-3. doi: 10.4137/BBI.S39980. eCollection 2015. PubMed PMID: 27199551; PubMed Central PMCID: PMC4869601.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27199551",
  },
  {
    year: 2016,
    category: "Imaging",
    title: "miRNA-15a, miRNA-15b, and miRNA-499 are Reduced in Erythrocytes of Pre-Diabetic African-American Adults.",
    citation: "Fluitt MB, Kumari N, Nunlee-Bland G, Nekhai S, Gambhir KK. Jacobs J Diabetes Endocrinol. 2016 Dec;2(1). pii: 014. Epub 2016 Nov 15. PubMed PMID: 29399662; PubMed Central PMCID: PMC5792081.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/29399662",
  },
  {
    year: 2016,
    category: "Imaging",
    title: "Tunable self-assembly of Irinotecan-fatty acid prodrugs with increased cytotoxicity to cancer cells.",
    citation: "Zhang C, Jin S, Xue X, Zhang T, Jiang Y, Wang PC, Liang XJ. J Mater Chem B. 2016 May 21;4(19):3286-3291. doi: 10.1039/c6tb00612d. Epub 2016 Apr 14. PubMed PMID: 27239311; PubMed Central PMCID: PMC4882116.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27239311",
  },
  {
    year: 2016,
    category: "Imaging",
    title: "Subcellular Behaviour Evaluation of Nanopharmaceuticals with Aggregation-Induced Emission Molecules.",
    citation: "Xue X, Xu J, Wang PC, Liang XJ. J Mater Chem C Mater. 2016 Apr 14;4(14):2719-2730. Epub 2016 Jan 27. PubMed PMID: 27042309; PubMed Central PMCID: PMC4816494.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27042309",
  },
  {
    year: 2016,
    category: "Imaging",
    title: "A Photosensitizer-Loaded DNA Origami Nanosystem for Photodynamic Therapy.",
    citation: "Zhuang X, Ma X, Xue X, Jiang Q, Song L, Dai L, Zhang C, Jin S, Yang K, Ding B, Wang PC, Liang XJ. ACS Nano. 2016 Mar 22;10(3):3486-95. doi: 10.1021/acsnano.5b07671. Epub 2016 Mar 10. PubMed PMID: 26950644; PubMed Central PMCID: PMC4837698.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26950644",
  },
  {
    year: 2016,
    category: "Imaging",
    title: "Near-Infrared Emission CuInS/ZnS Quantum Dots: All-in-One Theranostic Nanomedicines with Intrinsic Fluorescence/Photoacoustic Imaging for Tumor Phototherapy.",
    citation: "Lv G, Guo W, Zhang W, Zhang T, Li S, Chen S, Eltahan AS, Wang D, Wang Y, Zhang J, Wang PC, Chang J, Liang XJ. ACS Nano. 2016 Oct 25;10(10):9637-9645. doi: 10.1021/acsnano.6b05419. Epub 2016 Sep 20. PubMed PMID: 27623101; PubMed Central PMCID: PMC5359086.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27623101",
  },
  {
    year: 2016,
    category: "Imaging",
    title: "pH imaging of mouse kidneys in vivo using a frequency-dependent paraCEST agent.",
    citation: "Wu Y, Zhang S, Soesbe TC, Yu J, Vinogradov E, Lenkinski RE, Sherry AD. Magn Reson Med. 2016 Jun;75(6):2432-41. doi: 10.1002/mrm.25844. Epub 2015 Jul 14. PubMed PMID: 26173637; PubMed Central PMCID: PMC4713392.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26173637",
  },
  {
    year: 2016,
    category: "Pilot Projects",
    title: "Stereological analyses of reward system nuclei in maternally deprived/separated alcohol drinking rats.",
    citation: "Gondré-Lewis MC, Darius PJ, Wang H, Allard JS. J Chem Neuroanat. 2016 Oct;76(Pt B):122-132. doi: 10.1016/j.jchemneu.2016.02.004. Epub 2016 Mar 2. PubMed PMID: 26939765; PubMed Central PMCID: PMC5010523.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26939765",
  },
  {
    year: 2016,
    category: "Pilot Projects",
    title: "Two Polypyrimidine Tracts in Intron 4 of the Major Immediate Early Gene Are Critical for Gene Expression Switching from IE1 to IE2 and for Replication of Human Cytomegalovirus.",
    citation: "Hou W, Torres L, Cruz-Cosme R, Arroyo F, Irizarry L, Luciano D, Márquez A, Rivera LL, Sala AL, Luo MH, Tang Q. J Virol. 2016 Jul 27;90(16):7339-7349. doi: 10.1128/JVI.00837-16. Print 2016 Aug 15. PubMed PMID: 27252533; PubMed Central PMCID: PMC4984657.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27252533",
  },
  {
    year: 2016,
    category: "Pilot Projects",
    title: "SUMOylation of DISC1: a potential role in neural progenitor proliferation in the developing cortex.",
    citation: "Tankou S, Ishii K, Elliott C, Yalla KC, Day JP, Furukori K, Kubo KI, Brandon NJ, Tang Q, Hayward G, Nakajima K, Houslay MD, Kamiya A, Baillie G, Ishizuka K, Sawa A. Mol Neuropsychiatry. 2016 May;2(1):20-27. Epub 2016 Mar 15. PubMed PMID: 27525255; PubMed Central PMCID: PMC4979612.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27525255",
  },
  {
    year: 2016,
    category: "Proteomics",
    title: "Protein Phosphatase-1 Regulates Expression of Neuregulin-1.",
    citation: "Ammosova T, Washington K, Rotimi J, Kumari N, Smith KA, Niu X, Jerebtsova M, Nekhai S. Biology (Basel). 2016 Dec 2;5(4). pii: E49. PubMed PMID: 27918433; PubMed Central PMCID: PMC5192429.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27918433",
  },
  {
    year: 2016,
    category: "Proteomics",
    title: "Increased iron export by ferroportin induces restriction of HIV-1 infection in sickle cell disease.",
    citation: "Kumari N, Ammosova T, Diaz S, Lin X, Niu X, Ivanov A, Jerebtsova M, Dhawan S, Oneal P, Nekhai S. Blood Adv. 2016 Dec 27;1(3):170-183. doi: 10.1182/bloodadvances.2016000745. PubMed PMID: 28203649; PubMed Central PMCID: PMC5304912.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28203649",
  },
  {
    year: 2016,
    category: "Proteomics",
    title: "Therapeutic potential of the heme oxygenase-1 inducer hemin against Ebola virus infection.",
    citation: "Huang H, Konduru K, Solovena V, Zhou ZH, Kumari N, Takeda K, Nekhai S, Bavari S, Kaplan GG, Yamada KM, Dhawan S. Curr Trends Immunol. 2016;17:117-123. PubMed PMID: 28133423; PubMed Central PMCID: PMC5267496.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/28133423",
  },
  {
    year: 2016,
    category: "Proteomics",
    title: "Protein Phosphatase-1 regulates Rift Valley fever virus replication.",
    citation: "Baer A, Shafagati N, Benedict A, Ammosova T, Ivanov A, Hakami RM, Terasaki K, Makino S, Nekhai S, Kehn-Hall K. Antiviral Res. 2016 Mar;127:79-89. doi: 10.1016/j.antiviral.2016.01.007. Epub 2016 Jan 20. PubMed PMID: 26801627; PubMed Central PMCID: PMC4784696.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26801627",
  },
  {
    year: 2016,
    category: "Proteomics",
    title: "Ebola VP40 in Exosomes Can Cause Immune Cell Dysfunction.",
    citation: "Pleet ML, Mathiesen A, DeMarino C, Akpamagbo YA, Barclay RA, Schwab A, Iordanskiy S, Sampey GC, Lepene B, Nekhai S, Aman MJ, Kashanchi F. Front Microbiol. 2016 Nov 7;7:1765. eCollection 2016. Erratum in: Front Microbiol. 2018 Apr 17;9:692. PubMed PMID: 27872619; PubMed Central PMCID: PMC5098130.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27872619",
  },
  {
    year: 2016,
    category: "Proteomics",
    title: "Cellular minichromosome maintenance complex component 5 (MCM5) is incorporated into HIV-1 virions and modulates viral replication in the newly infected cells.",
    citation: "Santos S, Obukhov Y, Nekhai S, Pushkarsky T, Brichacek B, Bukrinsky M, Iordanskiy S. Virology. 2016 Oct;497:11-22. doi: 10.1016/j.virol.2016.06.023. Epub 2016 Jul 12. PubMed PMID: 27414250; PubMed Central PMCID: PMC5079758.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27414250",
  },
  {
    year: 2016,
    category: "Proteomics",
    title: "Antiretroviral Drugs-Loaded Nanoparticles Fabricated by Dispersion Polymerization with Potential for HIV/AIDS Treatment.",
    citation: "Ogunwuyi O, Kumari N, Smith KA, Bolshakov O, Adesina S, Gugssa A, Anderson WA, Nekhai S, Akala EO. Infect Dis (Auckl). 2016 Mar 20;9:21-32. doi: 10.4137/IDRT.S38108. eCollection 2016. PubMed PMID: 27013886; PubMed Central PMCID: PMC4803317.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/27013886",
  },
  {
    year: 2015,
    category: "Admin",
    title: "Alcohol and Apoptosis: Friends or Foes?",
    citation: "Rodriguez A, Chawla K, Umoh NA, Cousins VM, Ketegou A, Reddy MG, AlRubaiee M, Haddad GE, Burke MW. Biomolecules. 2015 Nov 19;5(4):3193-203. doi: 10.3390/biom5043193. PubMed PMID: 26610584; PubMed Central PMCID: PMC4693275.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26610584",
  },
  {
    year: 2015,
    category: "Admin",
    title: "Convergence of theories of alcohol administration postanabolic stimulation on mTOR signaling: lessons for exercise regimen.",
    citation: "Bamji ZD, Haddad GE. Alcohol Clin Exp Res. 2015 May;39(5):787-9. doi: 10.1111/acer.12702. Epub 2015 Apr 6. PubMed PMID: 25845444; PubMed Central PMCID: PMC4723267.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25845444",
  },
  {
    year: 2015,
    category: "Admin",
    title: "The role of coronary microvascular disorder in congestive heart failure.",
    citation: "Haddad GE, Chams S, Chams N. Am J Physiol Heart Circ Physiol. 2015 Apr 15;308(8):H814-5. doi: 10.1152/ajpheart.00118.2015. Epub 2015 Feb 27. PubMed PMID: 25724488; PubMed Central PMCID: PMC4596728.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25724488",
  },
  {
    year: 2015,
    category: "Admin",
    title: "Alcohol and inflammatory responses: summary of the 2013 Alcohol and Immunology Research Interest Group (AIRIG) meeting.",
    citation: "Morris NL, Ippolito JA, Curtis BJ, Chen MM, Friedman SL, Hines IN, Haddad GE, Chang SL, Brown LA, Waldschmidt TJ, Mandrekar P, Kovacs EJ, Choudhry MA. Alcohol. 2015 Feb;49(1):1-6. doi: 10.1016/j.alcohol.2014.07.018. Epub 2014 Nov 3. Review. PubMed PMID: 25468277; PubMed Central PMCID: PMC4314434.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25468277",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Neuroanatomical circuitry mediating the sensory impact of nicotine in the central nervous system.",
    citation: "Dehkordi O, Rose JE, Asadi S, Manaye KF, Millis RM, Jayam-Trouth A. J Neurosci Res. 2015 Feb;93(2):230-43. doi: 10.1002/jnr.23477. Epub 2014 Sep 16. PubMed PMID: 25223294; PubMed Central PMCID: PMC4270827.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25223294",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Benchmarking methods and data sets for ligand enrichment assessment in virtual screening.",
    citation: "Xia J, Tilahun EL, Reid TE, Zhang L, Wang XS. Methods. 2015 Jan;71:146-57. doi: 10.1016/j.ymeth.2014.11.015. Epub 2014 Dec 3. PubMed PMID: 25481478; PubMed Central PMCID: PMC4278665.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25481478",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Identification of novel mutations by exome sequencing in African American colorectal cancer patients.",
    citation: "Ashktorab H, Daremipouran M, Devaney J, Varma S, Rahi H, Lee E, Shokrani B, Schwartz R, Nickerson ML, Brim H. Cancer. 2015 Jan 1;121(1):34-42. doi: 10.1002/cncr.28922. Epub 2014 Sep 23. PubMed PMID: 25250560; PubMed Central PMCID: PMC4296906.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25250560",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "The fused anthranilate synthase from Streptomyces venezuelae functions as a monomer.",
    citation: "Ashenafi M, Reddy PT, Parsons JF, Byrnes WM. Mol Cell Biochem. 2015 Feb;400(1-2):9-15. doi: 10.1007/s11010-014-2256-3. Epub 2014 Oct 30. PubMed PMID: 25355158; PubMed Central PMCID: PMC4303589.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25355158",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Culturally Competent Strategies for Recruitment and Retention of African American Populations into Clinical Trials.",
    citation: "Otado J, Kwagyan J, Edwards D, Ukaegbu A, Rockcliffe F, Osafo N. Clin Transl Sci. 2015 Oct;8(5):460-6. doi: 10.1111/cts.12285. Epub 2015 May 14. PubMed PMID: 25974328; PubMed Central PMCID: PMC4626379.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25974328",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Obesity and Cardiovascular Diseases in a High-Risk Population: Evidence-Based Approach to CHD Risk Reduction.",
    citation: "Kwagyan J, Retta TM, Ketete M, Bettencourt CN, Maqbool AR, Xu S, Randall OS. Ethn Dis. 2015 Spring;25(2):208-13. PubMed PMID: 26118150; PubMed Central PMCID: PMC4487367.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26118150",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Molecular Dynamics Simulation and NMR Investigation of the Association of the β-Blockers Atenolol and Propranolol with a Chiral Molecular Micelle.",
    citation: "Morris KF, Billiot EJ, Billiot FH, Hoffman CB, Gladis AA, Lipkowitz KB, Southerland WM, Fang Y. Chem Phys. 2015 Aug 18;457:133-146. PubMed PMID: 26257464; PubMed Central PMCID: PMC4527343.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26257464",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Next-generation sequencing in African Americans with colorectal cancer.",
    citation: "Ashktorab H, Varma S, Brim H. Proc Natl Acad Sci U S A. 2015 Jun 2;112(22):E2852. doi: 10.1073/pnas.1503760112. Epub 2015 May 4. PubMed PMID: 25941412; PubMed Central PMCID: PMC4460483.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25941412",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Reply to Ashktorab et al.: Mutational landscape of colon cancers in African Americans.",
    citation: "Guda K, Veigl ML, Varadan V, Nosrati A, Ravi L, Lutterbaugh J, Beard L, Willson JK, Sedwick WD, Wang ZJ, Molyneaux N, Miron A, Adams MD, Elston RC, Markowitz SD, Willis JE. Proc Natl Acad Sci U S A. 2015 Jun 2;112(22):E2853. doi: 10.1073/pnas.1505059112. Epub 2015 May 4. PubMed PMID: 25941411; PubMed Central PMCID: PMC4460466.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25941411",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Genome-wide differentially methylated genes in prostate cancer tissues from African-American and Caucasian men.",
    citation: "Devaney JM, Wang S, Furbert-Harris P, Apprey V, Ittmann M, Wang BD, Olender J, Lee NH, Kwabi-Addo B. Epigenetics. 2015;10(4):319-28. doi: 10.1080/15592294.2015.1022019. Epub 2015 Apr 11. PubMed PMID: 25864488; PubMed Central PMCID: PMC4622564.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25864488",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Evaluation of Genome Wide Association Study Associated Type 2 Diabetes Susceptibility Loci in Sub Saharan Africans.",
    citation: "Adeyemo AA, Tekola-Ayele F, Doumatey AP, Bentley AR, Chen G, Huang H, Zhou J, Shriner D, Fasanmade O, Okafor G, Eghan B Jr, Agyenim-Boateng K, Adeleye J, Balogun W, Elkahloun A, Chandrasekharappa S, Owusu S, Amoah A, Acheampong J, Johnson T, Oli J, Adebamowo C, Collins F, Dunston G, Rotimi CN. Front Genet. 2015 Nov 24;6:335. doi: 10.3389/fgene.2015.00335. eCollection 2015. PubMed PMID: 26635871; PubMed Central PMCID: PMC4656823.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26635871",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "The human brain and face: mechanisms of cranial, neurological and facial development revealed through malformations of holoprosencephaly, cyclopia and aberrations in chromosome 18.",
    citation: "Gondré-Lewis MC, Gboluaje T, Reid SN, Lin S, Wang P, Green W, Diogo R, Fidélia-Lambert MN, Herman MM. J Anat. 2015 Sep;227(3):255-67. doi: 10.1111/joa.12343. PubMed PMID: 26278930; PubMed Central PMCID: PMC4560560.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26278930",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "A Machine Learning Approach for Accurate Annotation of Noncoding RNAs.",
    citation: "Song Y, Liu C, Wang Z. IEEE/ACM Trans Comput Biol Bioinform. 2015 May-Jun;12(3):551-9. doi: 10.1109/TCBB.2014.2366758. PubMed PMID: 26357266; PubMed Central PMCID: PMC4726481.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26357266",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "SPINK1 Promoter Variants Are Associated with Prostate Cancer Predisposing Alterations in Benign Prostatic Hyperplasia Patients.",
    citation: "Winchester D, Ricks-Santi L, Mason T, Abbas M, Copeland RL Jr, Beyene D, Jingwi EY, Dunston GM, Kanaan YM. Anticancer Res. 2015 Jul;35(7):3811-9. PubMed PMID: 26124326; PubMed Central PMCID: PMC4545211.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26124326",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Analyzing the Association of Polymorphisms in the CRYBB2 Gene with Prostate Cancer Risk in African Americans.",
    citation: "Faruque MU, Paul R, Ricks-Santi L, Jingwi EY, Ahaghotu CA, Dunston GM. Anticancer Res. 2015 May;35(5):2565-70. PubMed PMID: 25964531; PubMed Central PMCID: PMC4743665.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25964531",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Vitamin D receptor genetic polymorphisms are associated with PSA level, Gleason score and prostate cancer risk in African-American men.",
    citation: "Jingwi EY, Abbas M, Ricks-Santi L, Winchester D, Beyene D, Day A, Naab TJ, Kassim OO, Dunston GM, Copeland RL Jr, Kanaan YM. Anticancer Res. 2015 Mar;35(3):1549-58. PubMed PMID: 25750310; PubMed Central PMCID: PMC4743656.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25750310",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Association between Diverticular Disease and Pre-Neoplastic Colorectal Lesions in an Urban African-American Population.",
    citation: "Ashktorab H, Panchal H, Shokrani B, Paydar M, Sanderson A, Lee EL, Begum R, Haidary T, Laiyemo AO, McDonald-Pinkett S, Brim H, Nouraie M. Digestion. 2015;92(2):60-5. doi: 10.1159/000376574. Epub 2015 Jul 16. PubMed PMID: 26183208; PubMed Central PMCID: PMC4749474.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26183208",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Discovery of Natural Product-Derived 5-HT1A Receptor Binders by Cheminfomatics Modeling of Known Binders, High Throughput Screening and Experimental Validation.",
    citation: "Luo M, Reid TE, Wang XS. Comb Chem High Throughput Screen. 2015;18(7):685-92. PubMed PMID: 26138565; PubMed Central PMCID: PMC4667780.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26138565",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Discovery of a Novel HDAC2 Inhibitor by a Scaffold-Merging Hybrid Query.",
    citation: "Basant N, Lin X, Reid TE, Karla PK, Wang XS. Comb Chem High Throughput Screen. 2015;18(7):693-700. PubMed PMID: 26144283; PubMed Central PMCID: PMC4677828.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26144283",
  },
  {
    year: 2015,
    category: "CCBB",
    title: "Comparative modeling and benchmarking data sets for human histone deacetylases and sirtuin families.",
    citation: "Xia J, Tilahun EL, Kebede EH, Reid TE, Zhang L, Wang XS. J Chem Inf Model. 2015 Feb 23;55(2):374-88. doi: 10.1021/ci5005515. Epub 2015 Feb 9. PubMed PMID: 25633490; PubMed Central PMCID: PMC4677826.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25633490",
  },
  {
    year: 2015,
    category: "CCBB / Collaborations",
    title: "Beverage intake preference and bowel preparation laxative taste preference for colonoscopy.",
    citation: "Laiyemo AO, Burnside C, Laiyemo MA, Kwagyan J, Williams CD, Idowu KA, Ashktorab H, Kibreab A, Scott VF, Sanderson AK. World J Gastrointest Pharmacol Ther. 2015 Aug 6;6(3):84-8. doi: 10.4292/wjgpt.v6.i3.84. PubMed PMID: 26261736; PubMed Central PMCID: PMC4526843.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26261736",
  },
  {
    year: 2015,
    category: "CCBB / Collaborations",
    title: "Race and colorectal cancer screening compliance among persons with a family history of cancer.",
    citation: "Laiyemo AO, Thompson N, Williams CD, Idowu KA, Bull-Henry K, Sherif ZA, Lee EL, Brim H, Ashktorab H, Platz EA, Smoot DT. World J Gastrointest Endosc. 2015 Dec 10;7(18):1300-5. doi: 10.4253/wjge.v7.i18.1300. PubMed PMID: 26672497; PubMed Central PMCID: PMC4673393.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26672497",
  },
  {
    year: 2015,
    category: "CCBB / Imaging",
    title: "Functions of MiRNA-128 on the regulation of head and neck squamous cell carcinoma growth and apoptosis.",
    citation: "Hauser B, Zhao Y, Pang X, Ling Z, Myers E, Wang P, Califano J, Gu X. PLoS One. 2015 Mar 12;10(3):e0116321. doi: 10.1371/journal.pone.0116321. eCollection 2015. PubMed PMID: 25764126; PubMed Central PMCID: PMC4357443.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25764126",
  },
  {
    year: 2015,
    category: "CCBB / Imaging",
    title: "A bivalent recombinant immunotoxin with high potency against tumors with EGFR and EGFRvIII expression.",
    citation: "Meng J, Liu Y, Gao S, Lin S, Gu X, Pomper MG, Wang PC, Shan L. Cancer Biol Ther. 2015;16(12):1764-74. doi: 10.1080/15384047.2015.1095403. PubMed PMID: 26467217; PubMed Central PMCID: PMC4847807.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26467217",
  },
  {
    year: 2015,
    category: "CCBB / Proteomics",
    title: "Transcriptional profiling and biological pathway analysis of human equivalence PCB exposure in vitro: indicator of disease and disorder development in humans.",
    citation: "Ghosh S, Mitra PS, Loffredo CA, Trnovec T, Murinova L, Sovcikova E, Ghimbovschi S, Zang S, Hoffman EP, Dutta SK. Environ Res. 2015 Apr;138:202-16. doi: 10.1016/j.envres.2014.12.031. Epub 2015 Feb 27. PubMed PMID: 25725301; PubMed Central PMCID: PMC4739739.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25725301",
  },
  {
    year: 2015,
    category: "Imaging",
    title: "Anchoring Effects of Surface Chemistry on Gold Nanorods: Modulates Autophagy.",
    citation: "Li S, Zhang C, Cao W, Ma B, Ma X, Jin S, Zhang J, Wang PC, Li F, Liang XJ. J Mater Chem B. 2015 Apr 28;3(16):3324-3330. doi: 10.1039/C5TB00076A. Epub 2015 Mar 13. PubMed PMID: 26301093; PubMed Central PMCID: PMC4539969.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26301093",
  },
  {
    year: 2015,
    category: "Imaging",
    title: "Assessment of chemical exchange in tryptophan-albumin solution through (19)F multicomponent transverse relaxation dispersion analysis.",
    citation: "Lin PC. J Biomol NMR. 2015 Jun;62(2):121-7. doi: 10.1007/s10858-015-9929-4. Epub 2015 Apr 22. PubMed PMID: 25900068; PubMed Central PMCID: PMC4452398.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25900068",
  },
  {
    year: 2015,
    category: "Imaging",
    title: "Self-carried curcumin nanoparticles for in vitro and in vivo cancer therapy with real-time monitoring of drug release.",
    citation: "Zhang J, Li S, An FF, Liu J, Jin S, Zhang JC, Wang PC, Zhang X, Lee CS, Liang XJ. Nanoscale. 2015 Aug 28;7(32):13503-10. doi: 10.1039/c5nr03259h. Epub 2015 Jul 22. PubMed PMID: 26199064; PubMed Central PMCID: PMC4636738.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26199064",
  },
  {
    year: 2015,
    category: "Imaging",
    title: "Nanodrug Formed by Coassembly of Dual Anticancer Drugs to Inhibit Cancer Cell Drug Resistance.",
    citation: "Zhao Y, Chen F, Pan Y, Li Z, Xue X, Okeke CI, Wang Y, Li C, Peng L, Wang PC, Ma X, Liang XJ. ACS Appl Mater Interfaces. 2015 Sep 2;7(34):19295-305. doi: 10.1021/acsami.5b05347. Epub 2015 Aug 19. PubMed PMID: 26270258; PubMed Central PMCID: PMC4712650.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26270258",
  },
  {
    year: 2015,
    category: "Pilot Projects",
    title: "Enhancement of herpes simplex virus (HSV) infection by seminal plasma and semen amyloids implicates a new target for the prevention of HSV infection.",
    citation: "Torres L, Ortiz T, Tang Q. Viruses. 2015 Apr 20;7(4):2057-73. doi: 10.3390/v7042057. PubMed PMID: 25903833; PubMed Central PMCID: PMC4411690.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25903833",
  },
  {
    year: 2015,
    category: "Proteomics",
    title: "Iron, inflammation, and early death in adults with sickle cell disease.",
    citation: "van Beers EJ, Yang Y, Raghavachari N, Tian X, Allen DT, Nichols JS, Mendelsohn L, Nekhai S, Gordeuk VR, Taylor JG 6th, Kato GJ. Circ Res. 2015 Jan 16;116(2):298-306. doi: 10.1161/CIRCRESAHA.116.304577. Epub 2014 Nov 6. PubMed PMID: 25378535; PubMed Central PMCID: PMC4297524.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25378535",
  },
  {
    year: 2015,
    category: "Proteomics",
    title: "Therapeutics for postexposure treatment of Ebola virus infection.",
    citation: "Jerebtsova M, Nekhai S. Future Virol. 2015 Mar;10(3):221-232. PubMed PMID: 26213559; PubMed Central PMCID: PMC4508675.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26213559",
  },
  {
    year: 2015,
    category: "Proteomics",
    title: "Antiproliferative activities of Fagara xanthoxyloides and Pseudocedrela kotschyi against prostate cancer cell lines.",
    citation: "Kassim OO, Copeland RL, Kenguele HM, Nekhai S, Ako-Nai KA, Kanaan YM. Anticancer Res. 2015 Mar;35(3):1453-8. PubMed PMID: 25750297; PubMed Central PMCID: PMC4669679.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/25750297",
  },
  {
    year: 2015,
    category: "Proteomics",
    title: "Inhibition of HIV-1 by curcumin A, a novel curcumin analog.",
    citation: "Kumari N, Kulkarni AA, Lin X, McLean C, Ammosova T, Ivanov A, Hipolito M, Nekhai S, Nwulia E. Drug Des Devel Ther. 2015 Sep 3;9:5051-60. doi: 10.2147/DDDT.S86558. eCollection 2015. PubMed PMID: 26366056; PubMed Central PMCID: PMC4562762.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26366056",
  },
  {
    year: 2015,
    category: "Proteomics",
    title: "Genetic polymorphism of APOB is associated with diabetes mellitus in sickle cell disease.",
    citation: "Zhang X, Zhang W, Saraf SL, Nouraie M, Han J, Gowhari M, Hassan J, Miasnikova G, Sergueeva A, Nekhai S, Kittles R, Machado RF, Garcia JG, Gladwin MT, Steinberg MH, Sebastiani P, McClain DA, Gordeuk VR.  Hum Genet. 2015 Aug;134(8):895-904. doi: 10.1007/s00439-015-1572-3. Epub 2015 May 30. PubMed PMID: 26025476; PubMed Central PMCID: PMC4607040.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26025476",
  },
  {
    year: 2015,
    category: "Proteomics",
    title: "Reactivation of latent HIV-1 provirus via targeting protein phosphatase-1.",
    citation: "Tyagi M, Iordanskiy S, Ammosova T, Kumari N, Smith K, Breuer D, Ilatovskiy AV, Kont YS, Ivanov A, Üren A, Kovalskyy D, Petukhov M, Kashanchi F, Nekhai S. Retrovirology. 2015 Jul 16;12:63. doi: 10.1186/s12977-015-0190-4. PubMed PMID: 26178009; PubMed Central PMCID: PMC4504130.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26178009",
  },
  {
    year: 2015,
    category: "Proteomics",
    title: "Activation of HIV-1 with Nanoparticle-Packaged Small-Molecule Protein Phosphatase-1-Targeting Compound.",
    citation: "Smith KA, Lin X, Bolshakov O, Griffin J, Niu X, Kovalskyy D, Ivanov A, Jerebtsova M, Taylor RE, Akala E, Nekhai S. Sci Pharm. 2015 Jun 22;83(3):535-48. doi: 10.3797/scipharm.1502-01. Print 2015 Jul-Sep. PubMed PMID: 26839837; PubMed Central PMCID: PMC4727795.",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/26839837",
  },
];

export type NewsItem = {
  tag: string;
  title: string;
  body: string;
};

export const news: NewsItem[] = [
  {
    tag: "News",
    title: "RCMI investigators publish new findings on cardiovascular risk in D.C. neighborhoods",
    body: "A five-year community cohort study links housing stability to long-term cardiovascular outcomes.",
  },
  {
    tag: "Funding",
    title: "Pilot Program opens 2027 cycle",
    body: "Applications for mentored pilot awards open this fall for early-career Howard faculty.",
  },
  {
    tag: "Event",
    title: "Annual Research Symposium — October",
    body: "Core investigators and community partners present a year of translational health findings.",
  },
  {
    tag: "News",
    title: "RIC Core adds multiplex imaging capability",
    body: "New confocal and multiplex imaging systems are now available for investigator booking through the Research Infrastructure Core.",
  },
  {
    tag: "Funding",
    title: "Three RCMI-seeded studies awarded R01 grants",
    body: "Pilot-funded research on hypertension genomics, maternal health navigation, and diabetes outcomes modeling advances to full NIH funding.",
  },
  {
    tag: "Event",
    title: "Grant-Writing Workshop Series begins in September",
    body: "IDC Core opens registration for its fall cohort of specific-aims review and mock study sections.",
  },
];

export const impactStats = [
  { num: "120+", label: "Funded Pilot Projects" },
  { num: "38", label: "Extramural Awards Seeded" },
  { num: "6", label: "Shared Research Cores" },
  { num: "151", label: "Peer-Reviewed Publications" },
];

export const goals = [
  { code: "01", text: "Expand shared core facilities available to all HU investigators." },
  { code: "02", text: "Fund pilot projects that seed extramural, R01-level research." },
  { code: "03", text: "Mentor early-career and underrepresented scientists." },
  { code: "04", text: "Partner with D.C. communities on translational health research." },
];

export type StaffMember = {
  name: string;
  title: string;
  email: string;
  phone: string;
  initials: string;
  image: string;
};

export const adminStaff: StaffMember[] = [
  {
    name: "William Southerland, Ph.D.",
    title: "Principal Investigator / Program Director",
    email: "wsoutherland@howard.edu",
    phone: "202-806-9711",
    initials: "WS",
    image: "/images/william.jpg",
  },
  {
    name: "Kisha Riddick",
    title: "Administrative Director",
    email: "kisha.riddick@howard.edu",
    phone: "202-806-6647",
    initials: "KR",
    image: "/images/kisha.jpg",
  },
  {
    name: "Stacey McRae",
    title: "Program Manager",
    email: "stacey.gerald@howard.edu",
    phone: "202-806-6382",
    initials: "SM",
    image: "/images/Stacey.jpg",
  },
  {
    name: "Crystal Parks",
    title: "Administrative Assistant",
    email: "crystal.parks@howard.edu",
    phone: "202-806-6648",
    initials: "CP",
    image: "/images/Crystal.jpg",
  },
];

export const cecMission =
  "The Community Engagement Core's (CEC) overarching goal is to assure that HU RCMI-supported research addresses the needs and interests of the local surrounding community. To achieve this goal, community-academic partnerships are designed and developed for sustained effort that promotes integration between research, practice, and policy. The Core develops community-oriented small media — such as infographics — to disseminate evidence-based health information stemming from HU RCMI research and other study results that address local community health concerns.";

export const cecAims = [
  {
    code: "01",
    title: "Community Partnerships",
    text: "Establish long-term relationships with local community-based organizations to address the health-related concerns of local communities.",
  },
  {
    code: "02",
    title: "Research Participation",
    text: "Work with community partners to promote participation in research, particularly recruitment and retention of study participants in RCMI-supported research projects.",
  },
  {
    code: "03",
    title: "Research Dissemination",
    text: "Disseminate findings from HU RCMI research to relevant communities.",
  },
];

export const idcMission =
  "The Investigator Development Core (IDC) provides a comprehensive career development program that accelerates the growth of junior faculty and early-stage investigators (ESI) into independent investigators. The IDC takes a tri-faceted approach to investigator development — providing pilot seed support, coordinating comprehensive career mentoring that spans both discipline-specific research and professional advancement, and offering professional development trainings relevant to early-stage investigators, such as grantsmanship, scientific presentation skills, and scientific writing.";

export const idcAims = [
  {
    code: "01",
    title: "Pilot Seed Funding",
    text: "Provide pilot project seed funding that generates sufficient preliminary data to support external grant proposals.",
  },
  {
    code: "02",
    title: "Career Mentoring",
    text: "Coordinate mentorship support for each pilot grant awardee, combining discipline-specific research and professional advancement mentoring into a comprehensive career mentoring approach.",
  },
  {
    code: "03",
    title: "Professional Development",
    text: "Conduct a program of professional development workshops and seminars covering grantsmanship, scientific presentation skills, and scientific writing — open to the greater Howard University community of investigators.",
  },
];

export const idcContact = {
  name: "Georges Haddad, Ph.D.",
  role: "Core Contact",
  email: "ghaddad@howard.edu",
  initials: "GH",
};

export const ricMission =
  "The Howard University Research Infrastructure Core (RIC) provides a diverse cadre of services and resources to projects in the areas of biomedical, clinical, and behavioral science for the support of minority health and health disparities research.";

export const ricSubCores = [
  {
    title: "Biomedical Imaging Core",
    body: "Uses scientific expertise and state-of-the-art laboratories equipped with modern imaging equipment to support biomedical research and training at Howard University.",
  },
  {
    title: "Bioanalytical-Proteomics Core",
    body: "Uses mass spectrometry equipment to support proteomic research at Howard University, studying infectious and chronic disorders and promoting translational research.",
  },
  {
    title: "Computational Biology and Bioinformatics (CCBB)",
    body: "A state-of-the-art center equipped with the computer hardware, software, and personnel to support computational biology and bioinformatics research at Howard University.",
  },
  {
    title: "Outcomes Research Center",
    body: "The Clive O. Callender Howard-Harvard Health Sciences Outcomes Research Center fosters interdisciplinary research toward a better understanding of systems and processes that could lead to more equitable healthcare delivery.",
  },
];

export const ricAims = [
  {
    code: "01",
    title: "Core Research Services",
    text: "Provide core research services and resources in the areas of Computational Biology & Bioinformatics (CCBB), Health Informatics (Outcomes Research Center), Biomedical Imaging, and Bioanalytical Proteomics.",
  },
  {
    code: "02",
    title: "Systematic Distribution",
    text: "Systematically distribute this research support to HU RCMI investigators, their collaborators, and the entire HU research community.",
  },
  {
    code: "03",
    title: "Evaluation",
    text: "Evaluate the utilization and efficacy of the available research infrastructure support.",
  },
];

export type RicLeader = {
  name: string;
  role: string;
  email: string;
  initials: string;
  image?: string;
};

export const ricLeadership: RicLeader[] = [
  {
    name: "William Southerland, Ph.D.",
    role: "CCBB Director",
    email: "wsoutherland@howard.edu",
    initials: "WS",
    image: "/images/william.jpg",
  },
  {
    name: "Sergei Nekhai, Ph.D.",
    role: "Bioanalytical-Proteomics Director",
    email: "snekhai@howard.edu",
    initials: "SN",
  },
  {
    name: "Paul Wang, Ph.D.",
    role: "Biomedical Imaging Director",
    email: "pwang@howard.edu",
    initials: "PW",
  },
  {
    name: "Edward Cornwell III, MD",
    role: "Outcomes Research Center Director",
    email: "ecornwell@howard.edu",
    initials: "EC",
  },
];

export const adminFunctions = [
  {
    title: "Program Leadership",
    body: "Sets strategic direction for the RCMI Program and represents Howard University to NIH and NIMHD.",
  },
  {
    title: "Fiscal & Grants Administration",
    body: "Manages the program's budget, subawards, and compliance reporting across every core.",
  },
  {
    title: "Cross-Core Coordination",
    body: "Aligns activities across all six cores and the Institutional Pilot Award program.",
  },
  {
    title: "External Advisory Review",
    body: "Coordinates the External Advisory Committee's annual review of program progress.",
  },
];
