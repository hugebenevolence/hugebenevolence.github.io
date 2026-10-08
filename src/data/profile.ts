// Single source of truth for the site. Keep it in step with the CV in public/cv.pdf.

export const person = {
  name: "Trần Đại Nhân",
  latinName: "Tran Dai Nhan",
  role: "AI engineer",
  city: "Hà Nội",
  email: "nhantd.dev@gmail.com",
  github: "https://github.com/hugebenevolence",
  linkedin: "https://www.linkedin.com/in/nhantran8104/",
  orcid: "https://orcid.org/0009-0009-6020-3591",
  cv: "/cv.pdf",
  now: {
    date: "October 2026",
    text: "Team lead in the Vingroup AI Talent Program, and researcher and teaching assistant at AI VIET NAM.",
  },
};

export type Link = { label: string; href: string };

export type Experience = {
  org: string;
  title: string;
  when: string;
  where: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    org: "Vingroup AI Talent Program",
    title: "AI trainee and team lead",
    when: "Sep 2026 – now",
    where: "Hà Nội",
    points: [
      "Lead a team building a multi-agent system that checks whether a paper's results can be reproduced from its repository and issue threads.",
      "Placed 2nd in the program's mini AI hackathon with Kẻ Độc Hành, a voice tutor that makes you teach the material back.",
    ],
  },
  {
    org: "AI VIET NAM",
    title: "AI researcher and teaching assistant",
    when: "Oct 2025 – now",
    where: "Hồ Chí Minh City",
    points: [
      "Run the experiment workflow for Vietnamese VQA and NLP research: dataset curation, training runs, evaluation harnesses and reporting.",
      "Write lecture slides, lab notebooks and coding exercises for AI cohorts, and mentor learners through NLP and multimodal labs.",
    ],
  },
  {
    org: "FPT Software HCM",
    title: "Backend web developer intern",
    when: "Jan – Jul 2025",
    where: "Hồ Chí Minh City",
    points: [
      "Built modules for a course management platform in Java and Spring Boot on PostgreSQL, with Redis caching and Docker images, in Agile sprints.",
    ],
  },
];

export const education = {
  school: "FPT University",
  degree: "Bachelor of Engineering in Software Engineering",
  when: "Oct 2022 – Jan 2026",
  gpa: "3.3 / 4.0",
};

export const community = [
  {
    title: "President of FCODER, FPT University's IT club",
    when: "Oct 2023 – Oct 2025",
    text: "Ran the club's coding competitions and technical training. FCODER ranked first among the university's academic clubs in 3 of 4 terms.",
  },
  {
    title: "Research leader, FPT Research Festival",
    when: "2025",
    text: "Led a student team from problem framing to paper writing: an image labelling pipeline for breast cancer data and a clinical prediction workflow, across 2 accepted papers.",
  },
  {
    title: "Teaching assistant, AI VIET NAM",
    when: "2025 – now",
    text: "Turn current research into labs that engineers can reproduce, and review assessment material for accuracy.",
  },
];

export const awards = [
  { what: "2nd place, Mini AI Hackathon, Vingroup AI Talent Program", when: "2026", note: "Kẻ Độc Hành" },
  { what: "Top 2, FPT Cần Thơ AI Student Olympiad", when: "2026" },
  { what: "First prize (team), Coca-Cola environmental protection solution challenge", when: "" },
  { what: "Top 10, FPT Hackathon", when: "", note: "AI support platform for children with autism" },
  { what: "Provincial Excellent Student Award in Chemistry", when: "" },
];

// ---------- Work ----------

export type WorkKind = "research" | "scratch" | "product" | "more";

export type Work = {
  slug: string;
  kind: WorkKind;
  title: string;
  short: string;
  margin: string[];
  /** Bold first margin line */
  marginStrong?: string;
  lead: string;
  result?: string;
  body: string[];
  did?: string[];
  stack: string;
  links: Link[];
  /** Has its own page under /work/<slug>/ */
  page: boolean;
  authors?: string;
  venue?: string;
  bibtex?: string;
};

export const work: Work[] = [
  {
    slug: "adaptive-reasoning-vqa",
    kind: "research",
    title: "Difficulty-aware adaptive reasoning for Vietnamese VQA with GPT-OSS",
    short: "Adaptive reasoning for Vietnamese VQA",
    marginStrong: "AICI 2026",
    margin: ["Accepted", "Springer chapter", "First author"],
    authors: "Dai-Nhan Tran, Phuc-Thinh Nguyen, Tue-Anh Vu, Bao Do, Hai-Au Trinh, Anh-Khoi Nguyen",
    venue: "AICI 2026, Springer book chapter",
    lead: "Most questions about a photo don't need a model to think hard. A dense caption from Gemini 2.5 describes the image, CLIP scores how well that caption matches the picture, and GPT-OSS gets low, medium or high reasoning effort accordingly.",
    result: "On ViVQA-X the adaptive mode finished in 815 s instead of 3,317 s, and scored best on BLEU-4, ROUGE-L and METEOR.",
    body: [
      "Vietnamese VQA models either answer fast and shallow or reason at length on every question, including the ones where a good caption already contains the answer. The cost of always reasoning hard is real: on ViVQA-X it takes almost twelve times the wall-clock time of the low-effort setting.",
      "I designed the framework end to end: dense captioning, a CLIP similarity router, multi-model inference across GPT-OSS, Qwen3 and DeepSeek with vLLM and Unsloth, batch processing with resumable jobs, and the automated evaluation.",
    ],
    did: [
      "Router: CLIP image–caption similarity below 0.63 sends a question to high effort, 0.63–0.64 to medium, above 0.64 to low.",
      "Inference across GPT-OSS, Qwen3 and DeepSeek on vLLM, with periodic checkpoints so long jobs resume after interruption.",
      "Evaluation on ViVQA-X and OpenViVQA with BLEU, ROUGE-L, METEOR, CIDEr, SPICE, BERTScore, FLOPs and wall-clock time.",
    ],
    stack: "PyTorch, Transformers, vLLM, Unsloth, CLIP, Gemini 2.5",
    links: [{ label: "Code on GitHub", href: "https://github.com/hugebenevolence/ViVQA-GPT-OSS-DRA" }],
    page: true,
    bibtex: `@inproceedings{tran2026adaptive,
  title     = {Difficulty-Aware Adaptive Reasoning for Vietnamese VQA with GPT-OSS},
  author    = {Tran, Dai-Nhan and Nguyen, Phuc-Thinh and Vu, Tue-Anh and Do, Bao and Trinh, Hai-Au and Nguyen, Anh-Khoi},
  booktitle = {AICI 2026},
  year      = {2026},
  note      = {Accepted},
  url       = {https://github.com/hugebenevolence/ViVQA-GPT-OSS-DRA}
}`,
  },
  {
    slug: "multi-mode-cot",
    kind: "research",
    title: "Curating multi-mode chain of thought for efficient math reasoning with GPT-OSS",
    short: "Multi-mode CoT distillation",
    marginStrong: "ICISN 2026",
    margin: ["Accepted", "Co-author"],
    authors: "Hai-Au Trinh, Tue-Anh Vu, Dai-Nhan Tran, Uyen Khoi-Minh Huynh, Anh-Khoi Nguyen",
    venue: "ICISN 2026",
    lead: "We distilled math reasoning from a GPT-OSS teacher into Llama 3.2 3B. The teacher wrote solutions at low, medium and high reasoning budgets; we kept only traces with a verified final answer and a sensible length.",
    result: "The student trained on the shortest, low-budget traces came out best after GRPO: GSM8K 0.8006 and MATH500 0.4760 zero-shot, up from 0.7043 and 0.3960.",
    body: [
      "Distillation datasets are noisy: wrong answers with confident reasoning, and traces that ramble for pages. We bet on fewer, cleaner samples rather than more of them.",
      "I built the curation pipeline — generating multi-budget traces from the teacher, verifying final answers, filtering by length around the median — and ran the SFT and GRPO workflows on LLaMA-Factory and MS-SWIFT.",
    ],
    stack: "LLaMA-Factory, MS-SWIFT, GPT-OSS, Llama 3.2 3B, SFT, GRPO",
    links: [{ label: "Code on GitHub", href: "https://github.com/hugebenevolence/LLaMA-OSS" }],
    page: true,
    bibtex: `@inproceedings{trinh2026multimode,
  title     = {Curating Multi-Mode CoT for Efficient Math Reasoning with GPT-OSS},
  author    = {Trinh, Hai-Au and Vu, Tue-Anh and Tran, Dai-Nhan and Huynh, Uyen Khoi-Minh and Nguyen, Anh-Khoi},
  booktitle = {ICISN 2026},
  year      = {2026},
  note      = {Accepted},
  url       = {https://github.com/hugebenevolence/LLaMA-OSS}
}`,
  },
  {
    slug: "vietnamese-gpt2",
    kind: "scratch",
    title: "Vietnamese GPT-2, pretrained from scratch",
    short: "Vietnamese GPT-2",
    marginStrong: "2026",
    margin: ["Team project"],
    lead: "GPT-2's English vocabulary shreds Vietnamese: every accented letter costs two or three byte-level tokens. We trained our own byte-level BPE tokenizer with the same 50,257-token budget, spent on Vietnamese.",
    result: "On the sample sentences below, Vietnamese needs a quarter to a third of the tokens, so the same 1,024-token context holds roughly three times as much text.",
    body: [
      "We curated and deduplicated a mix of news and Wikipedia into roughly 2.64B training tokens, pretrained GPT-2 from random initialization, then continued pretraining on a corpus of five-word quatrains as a controlled study of how far continued pretraining shifts style.",
      "The model ships as a Docker trainer with a FastAPI backend and a Next.js chat interface.",
    ],
    stack: "PyTorch, Transformers, Hugging Face Tokenizers, FastAPI, Next.js, Docker",
    links: [{ label: "Code on GitHub", href: "https://github.com/hugebenevolence/vietnamese-gpt2" }],
    page: true,
  },
  {
    slug: "vietnamese-vlm",
    kind: "scratch",
    title: "A Vietnamese vision-language model, LLaVA style",
    short: "Vietnamese VLM",
    marginStrong: "2026",
    margin: ["Team project"],
    lead: "SigLIP2 sees the image, a small MLP translates what it sees into the language model's embedding space, and Llama 3.2 1B answers in Vietnamese. Training happens in two stages, and what each stage is allowed to change is the whole design.",
    body: [
      "Stage 1 aligns modalities: the vision encoder and the language model stay frozen and only the projector learns, on Vietnamese COCO captions and UIT-OpenViIC. Stage 2 unfreezes the language model for visual instruction tuning on Vietnamese VQA data, plus tourism Q&A we crawled and generated with the OpenAI Batch API.",
      "Distributed training runs on Accelerate with token-weighted loss and checkpoint-and-resume, evaluated on KTVIC captioning and Vista conversation, with Streamlit demos for captioning and chat.",
    ],
    stack: "SigLIP2, Llama 3.2 1B Instruct, PyTorch, Accelerate, Hugging Face",
    links: [{ label: "Code on GitHub", href: "https://github.com/hugebenevolence/pretrain_vlm" }],
    page: true,
  },
  {
    slug: "ke-doc-hanh",
    kind: "product",
    title: "Kẻ Độc Hành: you teach, the AI asks why",
    short: "Kẻ Độc Hành",
    marginStrong: "2nd place",
    margin: ["Vingroup AI hackathon", "Sep 2026", "Tech lead"],
    lead: "A learner picks part of a lecture slide and explains it out loud. The slide is covered, and an AI playing the student asks back wherever the explanation is thin, vague or wrong. The session only ends when the explanation holds up against the source.",
    result: "Built in 47.5 hours on a $5 API budget: an estimated $0.008 per session, and 23 of 26 golden-set cases passing the automatic checks on real providers.",
    body: [
      "We started from the course's own tutor logs. Across 13,494 turns from 1,617 learners, the tutor explained 89.9% of the time and asked a probing question 0.2% of the time. When learners offered their own understanding to be checked, it lectured them again 87% of the time.",
      "I owned the technical side: a deterministic LangGraph workflow rather than a ReAct loop, a cheap talker model that answers within about 400 ms while the grader thinks in parallel, string-matching checks that catch a learner reading the slide back before any LLM is called, prompts ordered so the stable prefix stays cached, the React frontend and the deployment.",
    ],
    did: [
      "Talker (gpt-5-nano) and reasoner (gpt-5-mini) run in parallel; the talker is forbidden from judging, because when it speaks nobody knows the verdict yet.",
      "Ports and adapters: speech, TTS, LLM and slide sources are swappable, and the whole flow runs on mocks without spending credit.",
      "A 26-case golden set with automatic checks, re-run after every prompt change.",
    ],
    stack: "LangGraph, FastAPI, WebSocket audio, OpenAI, Speechmatics, React, Vite, PyMuPDF",
    links: [{ label: "Code and spec on GitHub", href: "https://github.com/hugebenevolence/K4-3A-E403-Ke_Doc_Hanh" }],
    page: true,
  },
  {
    slug: "smile",
    kind: "product",
    title: "S.M.I.L.E: booking and payments for a dental clinic network",
    short: "S.M.I.L.E",
    marginStrong: "Capstone",
    margin: ["2026", "Booking, payment and identity"],
    lead: "A practice management platform for a multi-clinic dental network: four NestJS services on Bun, one of them the API gateway, five PostgreSQL databases, Redis and a Next.js front end. I owned the parts where a bug costs a patient money or a seat.",
    body: [
      "Booking: two patients cannot claim the same doctor's slot, even with simultaneous requests, because the check happens in the database, not in application code. Availability updates in the UI in real time.",
      "Payments: VNPay by QR or redirect, callback handling, refunds with an approval workflow, and payment history in the service's own database. A Redis-backed idempotency key means a retried request never charges twice; the VNPay callback is signature-verified and replay-guarded.",
      "Identity: a standalone Python OCR service reads Vietnamese citizen ID cards, and the IAM service uses it to gate who may book. I also shipped a LangGraph booking assistant with Qdrant retrieval for clinic policy questions.",
    ],
    stack: "NestJS, Bun, TypeORM, PostgreSQL, Redis, VNPay, LangGraph, Qdrant, FastAPI, Python OCR",
    links: [{ label: "Code on GitHub", href: "https://github.com/hugebenevolence/Smart-Medical-Intelligent-Ledger-for-E-health-S.M.I.L.E-" }],
    page: true,
  },
  {
    slug: "paper-reproduction-agents",
    kind: "product",
    title: "Agents that check whether a paper can be reproduced",
    short: "Paper reproduction agents",
    marginStrong: "Now",
    margin: ["Vingroup AI Talent Program", "Team lead"],
    lead: "Reproducing a baseline paper usually starts with a day of detective work: what the paper claims, what the repository actually contains, and which GitHub issues say it doesn't work. Four agents do that reading and hand a person one reconciled checklist.",
    body: [
      "The agents are allowed to collect and diagnose, nothing more. Writing code and the final judgment stay with the human reviewer, which keeps the system honest about what an LLM can verify on its own.",
    ],
    stack: "Multi-agent pipeline, LLM tool use, GitHub API",
    links: [],
    page: false,
  },
  {
    slug: "pawcal",
    kind: "product",
    title: "PawCal: a booking assistant for veterinary clinics",
    short: "PawCal",
    marginStrong: "Founder",
    margin: ["2025 – now", "Technical lead"],
    lead: "Vietnamese pet owners message clinics on Zalo, so that's where PawCal lives: a chatbot on Zalo OA that books appointments, sends reminders and answers routine questions, so staff spend less of the day answering messages.",
    result: "Raised about USD 2,000 in early support and validated with beta clinics.",
    body: [],
    stack: "Next.js, Supabase, n8n, Zalo OA, Vercel, Docker",
    links: [],
    page: false,
  },
  {
    slug: "rag-lab",
    kind: "more",
    title: "RAG Lab: benchmarking Vietnamese retrieval",
    short: "RAG Lab",
    marginStrong: "2026",
    margin: ["Research tooling"],
    lead: "Seven notebooks of retrieval ablations turned into a workspace: BM25, hybrid, reciprocal rank fusion, HyDE, MMR, cross-encoder reranking and semantic chunking, compared side by side on Vietnamese documents with a FastAPI backend, Redis job workers and a Next.js UI.",
    body: [],
    stack: "FastAPI, Redis, RQ, PostgreSQL, Next.js, Docker",
    links: [{ label: "Code on GitHub", href: "https://github.com/hugebenevolence/RAG-Enhancement" }],
    page: true,
  },
  {
    slug: "brainify",
    kind: "more",
    title: "Brainify: a team collaboration platform",
    short: "Brainify",
    marginStrong: "Team lead",
    margin: ["Full-stack"],
    lead: "A collaboration platform on .NET 8 microservices. I designed the service boundaries, API contracts and data flow between services, and led the team through planning and delivery.",
    body: [],
    stack: ".NET 8, Next.js, SQL Server, Redis, Docker",
    links: [],
    page: false,
  },
];

export const workBySlug = (slug: string) => work.find((w) => w.slug === slug)!;

// ---------- Numbers used by the widgets (all from the project repositories) ----------

/** ViVQA-X, from ViVQA-GPT-OSS-DRA/README.md */
export const vivqaX = [
  { mode: "Low", time: 282, bleu4: 0.135, rougeL: 0.635, meteor: 0.407 },
  { mode: "High", time: 3317, bleu4: 0.141, rougeL: 0.641, meteor: 0.413 },
  { mode: "Adaptive", time: 815, bleu4: 0.142, rougeL: 0.654, meteor: 0.421 },
];
/** src/inference/adaptive_gptoss_inference.py */
export const routerThresholds = { high: 0.63, medium: 0.64 };

/** LLaMA-OSS/README.md, Llama 3.2 3B, 0-shot */
export const cotResults = {
  baseline: { gsm8k: 0.7043, math500: 0.396 },
  grpo: {
    low: { gsm8k: 0.8006, math500: 0.476 },
    medium: { gsm8k: 0.7771, math500: 0.448 },
    high: { gsm8k: 0.7559, math500: 0.474 },
  },
};

/** RAG-Enhancement/apps/web/src/lib/strategy-benchmarks.ts */
export const ragBenchmarks = [
  { id: "Hybrid RRF", faithfulness: 0.8558, answerRelevancy: 0.5746, contextPrecision: 0.7957, contextRecall: 0.7965 },
  { id: "Semantic", faithfulness: 0.809, answerRelevancy: 0.611, contextPrecision: 0.8301, contextRecall: 0.6285 },
  { id: "HyDE", faithfulness: 0.8071, answerRelevancy: 0.4967, contextPrecision: 0.8045, contextRecall: 0.6321 },
  { id: "Hybrid", faithfulness: 0.7878, answerRelevancy: 0.5514, contextPrecision: 0.5729, contextRecall: 0.7311 },
  { id: "MMR", faithfulness: 0.7711, answerRelevancy: 0.4924, contextPrecision: 0.8029, contextRecall: 0.5951 },
  { id: "Cross-encoder", faithfulness: 0.7646, answerRelevancy: 0.6121, contextPrecision: 0.8237, contextRecall: 0.7061 },
  { id: "BM25", faithfulness: 0.4414, answerRelevancy: 0.293, contextPrecision: 0.3601, contextRecall: 0.5064 },
];

/** Golden-set transcripts, eval/results/run-20260918-1722.md (real providers) */
export const teachBack = [
  {
    id: "N02",
    label: "Explanation with a gap",
    learner: "Model đoán từ tiếp theo có xác suất cao nhất, thế là ra câu trả lời.",
    learnerEn: "The model guesses the most likely next word, and that's the answer.",
    verdict: "incomplete",
    student: "Mình chưa nối được bước tiếp theo: sau khi model chọn một từ thì chuyện gì diễn ra với đoạn văn đã có sao cho câu tiếp tục được sinh ra?",
    studentEn: "I can't connect the next step: after the model picks a word, what happens to the text so far so the sentence keeps going?",
  },
  {
    id: "N01",
    label: "Explanation that holds up",
    learner: "Model đoán một token, rồi nối token đó vào câu và chạy lại để đoán token kế tiếp, cứ thế lặp lại. Giống bàn phím điện thoại gợi ý từ này nối sang từ kia.",
    learnerEn: "The model guesses one token, appends it and runs again to guess the next, over and over. Like a phone keyboard suggesting one word after another.",
    verdict: "sufficient",
    student: "À, tới đây thì mình hiểu rồi. Cảm ơn bạn đã giảng cho mình.",
    studentEn: "Ah, now I get it. Thanks for teaching me.",
  },
];
