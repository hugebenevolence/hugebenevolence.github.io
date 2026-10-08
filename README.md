# hugebenevolence.github.io

Source for [hugebenevolence.github.io](https://hugebenevolence.github.io), the portfolio of Trần Đại Nhân.

Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Editing

All content lives in [`src/data/profile.ts`](src/data/profile.ts): experience, projects, awards and the numbers the interactive figures use. The CV served at `/cv.pdf` is [`public/cv.pdf`](public/cv.pdf); keep the two in step.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Project pages under `/work/<slug>/` are generated for every entry in `work` with `page: true`.

## Where the numbers come from

| Figure | Source |
|---|---|
| Tokenizer comparison | `scripts/build_tokens.py`, run against stock GPT-2 and `vietnamese-gpt2/artifacts/tokenizer/tokenizer.json` |
| Router thresholds and ViVQA-X results | `ViVQA-GPT-OSS-DRA`: `src/inference/adaptive_gptoss_inference.py`, README |
| Teacher budget results | `LLaMA-OSS` README, Llama 3.2 3B, 0-shot |
| Teach-back dialogue | `K4-3A-E403-Ke_Doc_Hanh/eval/results/run-20260918-1722.md` |
| Kẻ Độc Hành screenshots | the app running locally with `USE_MOCKS=true` and a 3-page demo deck |
| LitReview clip and screens | the P-046 app running locally on a finished review (GNN / MoleculeNet); the repo check is the free quick check on `karpathy/nanoGPT` |
| S.M.I.L.E clip and screens | the capstone stack running locally with its own migrations and seed data; VNPay in mock mode |
| PawCal banner | provided by the PawCal team |

Clips are recorded with a CDP screencast and encoded to H.264 at twice the real speed.

To regenerate the tokenizer data:

```bash
pip install tokenizers
python scripts/build_tokens.py ../vietnamese-gpt2/artifacts/tokenizer/tokenizer.json
```
