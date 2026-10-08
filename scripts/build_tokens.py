"""Generate src/data/tokens.json: the same text tokenized by stock GPT-2 and by
the Vietnamese tokenizer trained in hugebenevolence/vietnamese-gpt2.

Usage:
    pip install tokenizers
    python scripts/build_tokens.py <path to vietnamese-gpt2/artifacts/tokenizer/tokenizer.json>

Each token is stored as [start, end, bytes] where start/end are character
offsets into the text. GPT-2 is byte-level, so one accented Vietnamese letter
can be split across several tokens; those tokens share the same offsets and
the page draws them as stacked slices of one cell.
"""

import json
import sys
from pathlib import Path

from tokenizers import Tokenizer

TEXTS = [
    "Trần Đại Nhân",
    "Mô hình ngôn ngữ tiếng Việt",
    "Người đàn ông đang cầm gì trên tay?",
    "Câu hỏi càng khó, mô hình càng phải suy nghĩ lâu hơn.",
    "Hà Nội mùa thu, cây cơm nguội vàng.",
    "Language models think in tokens.",
]


def byte_decoder() -> dict[str, int]:
    """Inverse of GPT-2's bytes_to_unicode table."""
    bs = list(range(ord("!"), ord("~") + 1)) + list(range(ord("¡"), ord("¬") + 1)) + list(range(ord("®"), ord("ÿ") + 1))
    cs = bs[:]
    n = 0
    for b in range(256):
        if b not in bs:
            bs.append(b)
            cs.append(256 + n)
            n += 1
    return {chr(c): b for b, c in zip(bs, cs)}


def encode(tok: Tokenizer, text: str, dec: dict[str, int]) -> list[list]:
    enc = tok.encode(text)
    out = []
    for piece, (start, end) in zip(enc.tokens, enc.offsets):
        raw = bytes(dec[ch] for ch in piece)
        # Offsets include the leading space GPT-2 folds into a token; drop it so
        # the box hugs the visible letters.
        while start < end and text[start] == " ":
            start += 1
        out.append([start, end, raw.hex(" ")])
    return out


def main() -> None:
    vi = Tokenizer.from_file(sys.argv[1])
    en = Tokenizer.from_pretrained("gpt2")
    dec = byte_decoder()
    data = [
        {"text": t, "gpt2": encode(en, t, dec), "vi": encode(vi, t, dec)}
        for t in TEXTS
    ]
    out = Path(__file__).resolve().parent.parent / "src" / "data" / "tokens.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
    for d in data:
        print(len(d["gpt2"]), len(d["vi"]), d["text"].encode("unicode_escape").decode())


if __name__ == "__main__":
    main()
