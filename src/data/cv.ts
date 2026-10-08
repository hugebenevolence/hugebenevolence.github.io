// The home page is the CV (public/cv.pdf) as a web page. Keep the two in step.
import type { ImageMetadata } from "astro";
import litreviewThumb from "../assets/thumbs/litreview.jpg";
import smileThumb from "../assets/thumbs/smile.jpg";
import kdhThumb from "../assets/thumbs/ke-doc-hanh.jpg";
import pawcalThumb from "../assets/pawcal-banner.png";

export type Link = { label: string; href: string };

export type Entry = {
  title: string;
  /** Right-aligned on the first line */
  when: string;
  subtitle?: string;
  /** Right-aligned on the second line */
  where?: string;
  points: string[];
  tech?: string[];
  links?: Link[];
  image?: { src: ImageMetadata; alt: string; href?: string };
  badge?: string;
  id?: string;
};

export const headline = "AI Engineer | Applied NLP, LLM Systems and Backend Services";

export const education: Entry[] = [
  {
    title: "FPT University",
    when: "Oct 2022 – Jan 2026",
    subtitle: "Bachelor of Engineering, Software Engineering. Major in Software Development",
    where: "GPA 3.3 / 4.0",
    points: [
      "Capstone: S.M.I.L.E, a multi-clinic dental practice management platform. Owned appointment booking, payments and identity verification across a microservice backend.",
      "Coursework: distributed systems, database systems, software architecture, machine learning, computer vision, data structures and algorithms.",
      "Produced two accepted conference papers, founded an AI startup and led the university IT club alongside full-time study.",
    ],
  },
];

export const skills = [
  { area: "Languages", items: "Python, TypeScript, Java, C#, SQL, Bash" },
  { area: "AI and ML", items: "PyTorch, Transformers, vLLM, Unsloth, LLaMA-Factory, MS-SWIFT, LangGraph, LangChain, Qdrant, Hugging Face" },
  { area: "AI practice", items: "LLM fine-tuning (SFT, GRPO), knowledge distillation, RAG and retrieval evaluation, agentic workflows, multimodal VQA, vision-language pretraining, inference cost optimisation, benchmark design" },
  { area: "Backend", items: "FastAPI, NestJS, Spring Boot, .NET, REST API design, microservices, concurrency control, PostgreSQL, Redis, TypeORM" },
  { area: "Cloud and DevOps", items: "AWS (EC2, S3, IAM), Docker, Docker Compose, GitHub Actions CI/CD, Nginx, Cloudflare, Vercel, Linux" },
  { area: "Practices", items: "Agile and Scrum, code review, automated testing (Jest, pytest, Vitest)" },
];

export const experience: Entry[] = [
  {
    title: "Vingroup AI Talent Training Program",
    when: "Sep 2026 – Present",
    subtitle: "AI Trainee, Team Lead",
    where: "Hà Nội",
    points: [
      "Led a team building a multi-agent system to validate and reproduce baseline papers, parsing paper claims, repository artifacts and GitHub issue threads into a single reconciled completeness checklist.",
      "Designed the four-stage pipeline (Paper Agent, Repo Agent, Issue Agent, Reconciler) and scoped agent authority to collection and diagnosis only, keeping code generation and final judgment with the human reviewer.",
    ],
  },
  {
    title: "AI VIET NAM",
    when: "Oct 2025 – Present",
    subtitle: "AI Researcher and Teaching Assistant",
    where: "Hồ Chí Minh City",
    points: [
      "Run the experimentation workflow for Vietnamese VQA and NLP research: dataset curation, training runs, evaluation harnesses and result reporting for the team.",
      "Mentor learners through hands-on labs in NLP and multimodal AI, translating current research into exercises engineers can reproduce.",
      "Author lecture slides, lab notebooks and coding exercises for AI training cohorts, and review assessment material for accuracy.",
    ],
  },
  {
    title: "FPT Software HCM",
    when: "Jan 2025 – Jul 2025",
    subtitle: "Web Developer Intern, Backend",
    where: "Hồ Chí Minh City",
    points: [
      "Built backend modules for a course management platform in Java and Spring Boot over PostgreSQL, adding Redis caching and Docker containerisation to improve response times and deployment consistency across Agile sprints.",
    ],
  },
];

export const publications: Entry[] = [
  {
    id: "adaptive-reasoning-vqa",
    title: "Difficulty-Aware Adaptive Reasoning for Vietnamese VQA with GPT-OSS",
    when: "AICI 2026",
    badge: "Accepted",
    subtitle: "First author. Springer book chapter.",
    tech: ["PyTorch", "Transformers", "vLLM", "Unsloth", "Gemini 2.5"],
    points: [
      "Designed a modular Vietnamese VQA framework covering dense image captioning, multi-LLM inference across GPT-OSS, Qwen3 and DeepSeek, batch processing and automated evaluation.",
      "Built a difficulty-aware router that scales inference compute per question across low, high and adaptive modes, cutting end-to-end inference from 3,317 s to 815 s, a 75 percent reduction against the high-compute baseline.",
      "Reached BLEU@4 0.142, ROUGE-L 0.654 and METEOR 0.421 on ViVQA-X at a quarter of the baseline compute budget.",
    ],
    links: [
      { label: "Details", href: "/work/adaptive-reasoning-vqa/" },
      { label: "Code", href: "https://github.com/hugebenevolence/ViVQA-GPT-OSS-DRA" },
    ],
  },
  {
    id: "multi-mode-cot",
    title: "Curating Multi-Mode CoT for Efficient Math Reasoning with GPT-OSS",
    when: "ICISN 2026",
    badge: "Accepted",
    subtitle: "Co-author.",
    tech: ["LLaMA-Factory", "MS-SWIFT", "GPT-OSS", "Llama 3.2"],
    points: [
      "Built the distillation pipeline curating low, medium and high budget reasoning traces from a GPT-OSS teacher for a Llama 3.2 3B student.",
      "Added final-answer verification and length-based filtering to strip noisy and over-long chain-of-thought supervision, prioritising sample quality over volume.",
      "Ran SFT and GRPO workflows reaching GSM8K 0-shot 0.8006 and MATH500 0-shot 0.4760.",
    ],
    links: [
      { label: "Details", href: "/work/multi-mode-cot/" },
      { label: "Code", href: "https://github.com/hugebenevolence/LLaMA-OSS" },
    ],
  },
];

export const projects: Entry[] = [
  {
    id: "litreview",
    title: "LitReview, Literature Review Agent with Verified Citations",
    when: "Sep 2026 – Present",
    subtitle: "Team Lead. Vingroup AI Talent Program, private repository.",
    tech: ["LangGraph", "FastAPI", "OpenAI", "Semantic Scholar", "OpenAlex", "arXiv", "React", "SQLite", "OpenTelemetry", "Docker", "AWS"],
    points: [
      "Designed a fixed LangGraph pipeline that turns a research question into weighted criteria, searches Semantic Scholar, OpenAlex and arXiv, screens every candidate and reads full text, with human approval before search spend and before writing.",
      "Every citation points to a verbatim quote that code verifies in the paper; quotes that fail the check are never used as evidence, and evaluation runs show zero fabricated citations.",
      "Reached recall 0.326 on RealScholarQuery and 0.197 on SPARBench, against 0.127 and 0.134 for the Asta Paper Finder baseline.",
      "Redesigned the system for production deployment on AWS: idempotent paid endpoints, a run queue with a separate worker, stop and resume from checkpoints, per-account credits and OpenTelemetry traces; 265 tests at 89% coverage.",
    ],
    links: [{ label: "Details and screens", href: "/work/litreview/" }],
    image: { src: litreviewThumb, alt: "LitReview Q&A view: an answer on BBBP benchmarks where every claim carries numbered, verified citations.", href: "/work/litreview/" },
  },
  {
    id: "smile",
    title: "S.M.I.L.E, Dental Practice Management Platform",
    when: "2026",
    subtitle: "Booking, Payment and Identity Owner. Capstone.",
    tech: ["NestJS", "Bun", "TypeORM", "PostgreSQL", "Redis", "LangGraph", "Qdrant", "Python"],
    points: [
      "Built the appointment booking APIs for a multi-clinic network, using database-level concurrency control on doctor time slots so two patients cannot claim the same slot under simultaneous requests, with realtime availability updates in the UI.",
      "Owned the payment service end to end inside a 4-service, 5-database microservice platform, covering VNPay initiation by QR and redirect, callback handling, refund approval workflow and payment history over its own PostgreSQL bounded context.",
      "Eliminated double-charge risk under client retries with Redis-backed idempotency keys, and hardened the VNPay callback with signature verification and replay protection.",
      "Shipped an agentic booking assistant on LangGraph and FastAPI, with Qdrant vector retrieval for clinic policy questions, routed through the API gateway and wired into the booking flow.",
      "Built the KYC API for Vietnamese citizen ID cards as a standalone Python OCR service extracting and validating identity fields, wired into the IAM service to gate booking eligibility.",
    ],
    links: [
      { label: "Details and screens", href: "/work/smile/" },
      { label: "Code", href: "https://github.com/hugebenevolence/Smart-Medical-Intelligent-Ledger-for-E-health-S.M.I.L.E-" },
    ],
    image: { src: smileThumb, alt: "S.M.I.L.E admin overview with 30-day revenue, paid appointments, top services and a revenue chart.", href: "/work/smile/" },
  },
  {
    id: "ke-doc-hanh",
    title: "Kẻ Độc Hành, Voice Teach-Back Tutor",
    when: "Sep 2026",
    subtitle: "Tech Lead. 2nd place, Mini AI Hackathon, Vingroup AI Talent Program.",
    tech: ["LangGraph", "FastAPI", "WebSocket audio", "OpenAI", "Speechmatics", "React"],
    points: [
      "Built a voice tutor where the learner explains a covered slide region and an AI student asks back wherever the explanation is incomplete or wrong, grounded in the source slide.",
      "Designed a deterministic LangGraph workflow with a fast talker model running in parallel with the grader for responses in about 400 ms, plus string-matching guards that catch verbatim reading before any LLM call.",
      "Shipped in 47.5 hours on a $5 API budget, an estimated $0.008 per session, passing 23 of 26 golden-set cases on real providers.",
    ],
    links: [
      { label: "Details and screens", href: "/work/ke-doc-hanh/" },
      { label: "Code", href: "https://github.com/hugebenevolence/K4-3A-E403-Ke_Doc_Hanh" },
    ],
    image: { src: kdhThumb, alt: "Kẻ Độc Hành landing page: 'Giảng được, mới là hiểu.'", href: "/work/ke-doc-hanh/" },
  },
  {
    id: "vietnamese-vlm",
    title: "Vietnamese Vision Language Model Pretraining from Scratch",
    when: "2026",
    subtitle: "Team project.",
    tech: ["SigLIP2", "MLP projector", "Llama 3.2 1B Instruct", "PyTorch", "Accelerate", "Hugging Face"],
    points: [
      "Implemented a two-stage LLaVA-style curriculum: stage 1 freezes the SigLIP2 vision encoder and the Llama decoder and trains only the MLP projector for modality alignment; stage 2 unfreezes the decoder for Vietnamese visual instruction tuning on scraped data and data generated with the OpenAI Batch API.",
      "Ran distributed training with Accelerate using checkpoint and resume handling so long runs survive interruption, then closed the loop with benchmark evaluation and working demos for captioning and visual instruction chat.",
    ],
    links: [
      { label: "Details", href: "/work/vietnamese-vlm/" },
      { label: "Code", href: "https://github.com/hugebenevolence/pretrain_vlm" },
    ],
  },
  {
    id: "vietnamese-gpt2",
    title: "Vietnamese GPT-2 Pretraining from Scratch",
    when: "2026",
    subtitle: "Team project.",
    tech: ["PyTorch", "Transformers", "FastAPI", "Docker", "Next.js"],
    points: [
      "Trained a Vietnamese subword tokenizer from scratch rather than reusing an English vocabulary, cutting token fragmentation on Vietnamese text and improving the effective context budget.",
      "Curated and deduplicated a mixed news and Wikipedia corpus into roughly 2.64B training tokens across pretraining and continued pretraining phases.",
      "Adapted the model to a narrow five-word quatrain corpus as a controlled study of how far continued pretraining shifts generation style, then packaged it for serving as a Docker-based trainer with a FastAPI backend and a Next.js chat interface.",
    ],
    links: [
      { label: "Details", href: "/work/vietnamese-gpt2/" },
      { label: "Code", href: "https://github.com/hugebenevolence/vietnamese-gpt2" },
    ],
  },
  {
    id: "pawcal",
    title: "PawCal, AI Veterinary Automation Platform",
    when: "2025 – Present",
    subtitle: "Founder and Technical Lead.",
    tech: ["Next.js", "Supabase", "n8n", "Zalo OA", "Vercel", "Docker"],
    points: [
      "Built a chatbot agent on Zalo OA handling appointment scheduling, automated reminders and customer enquiries for veterinary clinics.",
      "Secured roughly USD 2,000 in early support and validated the product with beta clinics.",
    ],
    image: { src: pawcalThumb, alt: "PawCal banner with the landing page and a Zalo appointment reminder." },
  },
];

export const leadership: Entry[] = [
  {
    title: "President, FCODER, FPT University Information Technology Club",
    when: "Oct 2023 – Oct 2025",
    points: [
      "Directed club operations, coding competitions and technical training; ranked 1st among academic clubs at FPT University in 3 of 4 terms.",
      "Proposed and led project initiatives presented to the leadership board of FPT University's academic clubs union.",
    ],
  },
  {
    title: "Research Leader, FPT Research Festival",
    when: "2025",
    points: [
      "Led a student research team through problem framing, experiment planning and paper writing, delivering an image labelling pipeline for breast cancer data and an optimised clinical prediction workflow across 2 accepted papers.",
    ],
  },
];

export const awards = [
  "2nd place, Mini AI Hackathon, Vingroup AI Talent Program, 2026 (Kẻ Độc Hành).",
  "First Prize (team), Coca-Cola environmental protection solution challenge.",
  "Top 2, FPT Cần Thơ AI Student Olympiad 2026.",
  "Top 10, FPT Hackathon (AI support platform for children with autism).",
  "Provincial Excellent Student Award, Chemistry.",
];

export const certifications =
  "Software Development Lifecycle (Coursera). MOS Word 950, Excel 975. Vietnamese native, English professional working proficiency.";
