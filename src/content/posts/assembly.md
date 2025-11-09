---
title: Assembly Language Terms
published: 2025-09-04
pinned: false
description: Notes for common assembly language sets for HCS12
tags: [Assembly, Notes]
category: Notes
licenseName: "Unlicensed"
author: Oscar Wang
draft: false
---
# COE538 Assembly Basics Cheat Sheet

## Instruction Abbreviations

- **LDAA** → **LoaD Accumulator A**  
  - Example: `LDAA #55` → Load A with 55  
- **LDAB** → **LoaD Accumulator B**
- **ADDA** → **ADd to Accumulator A**  
  - Example: `ADDA $20` → A = A + value at memory address $20  
- **SUBA** → **SUBtract from Accumulator A**  
- **STAA** → **STore Accumulator A** into memory  
- **TFR** → **TRansFeR** between registers  
- **EXG** → **EXchanGe** registers  
- **INCA** → **INCrement A** → A = A + 1  
- **NOP** → **No OPeration** (do nothing)

---

## Special Symbols

- `#` → **Immediate Value**  
  - Means: "Use this number directly, not from memory."  
  - Example: `LDAA #55` → A = 55  

- `$` → **Hexadecimal Number**  
  - Means: "The following number is in hexadecimal."  
  - Example: `LDAA $20` → A = value stored at memory[0x20]  

- `@` → **Indirect Addressing** (pointer)  
  - Means: "Use the memory location stored in a register or memory cell."  
  - Example: `LDAA @X` → A = memory[X]  

---

## C Language Analogy

- `LDAA #55` → `A = 55;`  
- `LDAA $20` → `A = memory[0x20];`  
- `LDAA @X` → `A = memory[X];`  

---

## CCR (Condition Code Register) Flags

- **C (Carry):** Unsigned overflow → e.g. 255 + 1 = 0 with C = 1  
- **V (Overflow):** Signed overflow → e.g. 127 + 1 = -128 with V = 1  
- **Z (Zero):** Result is zero  
- **N (Negative):** Result is negative (most significant bit = 1)
