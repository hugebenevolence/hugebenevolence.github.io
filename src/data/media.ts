// Screens and clips recorded from the running products, shared by the home page and the case studies.
import type { ImageMetadata } from "astro";

import lrReport from "../assets/shots/lr-report.png";
import lrDocs from "../assets/shots/lr-docs.png";
import lrQa from "../assets/shots/lr-qa.png";
import lrCheck from "../assets/shots/lr-quickcheck.png";
import kdhSession from "../assets/shots/kdh-session.png";
import kdhLanding from "../assets/shots/kdh-landing.png";
import smileAdmin from "../assets/shots/smile-admin.png";
import smileVnpay from "../assets/shots/smile-vnpay.png";
import smilePatient from "../assets/shots/smile-patient.png";

export type ShowcaseItem = {
  label: string;
  alt: string;
  caption: string;
  image?: ImageMetadata;
  video?: { src: string; poster: string; width: number; height: number };
};

export const litreviewShots: ShowcaseItem[] = [
  {
    label: "Replay of a run",
    video: { src: "/media/litreview-replay.mp4", poster: "/media/litreview-replay.jpg", width: 1150, height: 700 },
    alt: "LitReview's process view replaying a finished review: three criteria, ten search queries adding papers, 615 candidates screened into kept and rejected, full-text reading, and 20 papers selected.",
    caption: "The process view replaying a real review at twice the speed: 3 criteria, 615 papers found, 59 kept after screening, 30 read in full, 20 selected. The whole run took 16 minutes 49 seconds and cost $0.30.",
  },
  {
    label: "Report",
    image: lrReport,
    alt: "LitReview report: an overview based on 20 papers in 4 themes, with research gaps sent for verification and the one sentence out of 17 without a checked source flagged.",
    caption: "The report says what it has not verified: 4 research gaps not yet checked by search, and 1 of 17 sentences without a checked source, underlined in the text.",
  },
  {
    label: "Papers",
    image: lrDocs,
    alt: "LitReview papers list: 71 papers with filters for selected, to review and possibly wrongly excluded, each with full-text status and number of quotes.",
    caption: "Every paper with its verdict per criterion. A separate list holds papers that may have been wrongly excluded, found from the tables of the selected papers.",
  },
  {
    label: "Q&A",
    image: lrQa,
    alt: "LitReview Q&A answering which methods were evaluated on BBBP, with a summary and key points citing papers, built from tables, figures and quotes.",
    caption: "Questions are answered from a knowledge graph built from the selected papers' tables, figures and quotes. All 17 sentences of this answer are fully supported by a quote.",
  },
  {
    label: "Repo check",
    image: lrCheck,
    alt: "LitReview reproducibility quick check of karpathy/nanoGPT scoring 89 out of 100, with repository signals and code checks such as internal imports, dead data links and unpinned library versions.",
    caption: "The free quick check on karpathy/nanoGPT: 89/100 from the file tree and README, plus code checks that found a dead data link and unpinned library versions. No AI involved.",
  },
];

export const kdhShots: ShowcaseItem[] = [
  {
    label: "Teaching session",
    image: kdhSession,
    alt: "Kẻ Độc Hành session: the AI student asks the learner to explain 'Token là gì?', the learner's explanation, and the AI's follow-up question, with the slide's source text covered.",
    caption: "Running locally in mock mode with a demo deck. The part of the slide being explained stays covered until the session ends.",
  },
  {
    label: "Landing page",
    image: kdhLanding,
    alt: "Kẻ Độc Hành landing page with the headline 'Giảng được, mới là hiểu.'",
    caption: "“Giảng được, mới là hiểu”: if you can teach it, you understand it.",
  },
];

export const smileShots: ShowcaseItem[] = [
  {
    label: "Book and pay",
    video: { src: "/media/smile-booking.mp4", poster: "/media/smile-booking.jpg", width: 1440, height: 900 },
    alt: "A patient books an appointment in four steps at the Hà Nội clinic, sees it in the appointment list, opens the VNPay checkout, shows the QR code and confirms the payment.",
    caption: "A seeded patient books a slot at the Hà Nội clinic and pays through the VNPay mock, recorded on the local stack at twice the speed.",
  },
  {
    label: "Admin overview",
    image: smileAdmin,
    alt: "S.M.I.L.E admin overview: 30-day revenue of 353,200,000 VND, 45 paid appointments, top services by revenue and a revenue trend chart.",
    caption: "The admin overview: 30-day revenue, paid appointments and the services that earn the most, computed from the payment service's own database (seed data).",
  },
  {
    label: "VNPay checkout",
    image: smileVnpay,
    alt: "VNPay checkout for appointment APT-20261008-K51T, 250,000 VND, with a QR code and a demo-mode confirmation button.",
    caption: "Checkout: the payment service creates the VNPay QR. In demo mode there is no bank behind it, so the patient confirms the payment by hand.",
  },
  {
    label: "Patient home",
    image: smilePatient,
    alt: "S.M.I.L.E patient home with an upcoming appointment and a booking calendar.",
    caption: "The patient's home: upcoming appointments and a calendar of booked days.",
  },
];
