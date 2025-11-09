---
title: HCS12 Register Summary Sheet
published: 2025-10-21
pinned: false
description: Some notes on HCS12 registers and assembly codes
tags: [Assembly, Notes]
category: Notes
licenseName: "Unlicensed"
author: Oscar Wang
draft: false
---
# 🧭 HCS12 Register Summary Sheet

---

## ⚡ Analog-to-Digital Converter (ATD)

---

### **ATDCTL2 — Control Register 2**
**Full Name:** ATD Control Register 2  
**Purpose:** Controls ADC power, fast flag clearing, external trigger, and interrupt enable.  

| Bit | Name | Function |
|-----|------|-----------|
| 7 | **ADPU** | 1 = Power up ATD (must set before use) |
| 6 | **AFFC** | Fast flag clear; 1 = read result clears flag |
| 5-4 | **ETRIGLE / ETRIGP** | Select edge/level for external trigger:<br>00 falling, 01 rising, 10 low, 11 high |
| 3 | **ETRIGE** | Enable external trigger |
| 2 | **ASCIE** | Enable ATD sequence complete interrupt |
| 1 | **ASCIF** | ATD sequence complete flag |

**Controls:** Power, interrupt, and trigger behavior.  

**Example:**
```asm
LDAA  #%10000000   ; ADPU=1 → power up ATD
STAA  ATDCTL2
```
---

### **ATDCTL3 — Control Register 3**
**Full Name:** ATD Control Register 3  
**Purpose:** Sets conversion sequence length and result register mode.  

| Bits | Name | Function |
|-------|------|-----------|
| 7-4 | **S8C–S1C** | Sequence length (0000=8 conv, 0001=1 conv …) |
| 3 | **FIFO** | 1 = FIFO mode (wrap results), 0 = normal |
| 2-0 | — | Unused |

**Controls:** Number of conversions per sequence + how results are stored.  

**Example:**
```asm
LDAA  #%00000001   ; 1 conversion, normal mode
STAA  ATDCTL3
```
---

### **ATDCTL4 — Control Register 4**
**Full Name:** ATD Control Register 4  
**Purpose:** Sets resolution, sample time, and ADC clock speed (prescaler).  

| Bit | Name | Function |
|-----|------|-----------|
| 7 | **SRES8** | 0=10-bit, 1=8-bit resolution |
| 6-5 | **SMP1:SMP0** | Sample time (00=2, 01=4, 10=8, 11=16 ATD clocks) |
| 4-0 | **PRS4–PRS0** | Prescaler (00101=÷12, 01101=÷24, 10111=÷48) |

**Controls:** Conversion precision and timing.  

**Example:**
```asm
LDAA  #%00010101   ; 10-bit, sample=2, prescaler=÷12
STAA  ATDCTL4
```
---

### **ATDCTL5 — Control Register 5**
**Full Name:** ATD Control Register 5  
**Purpose:** Starts a new conversion and selects channel/mode.  

| Bit | Name | Function |
|-----|------|-----------|
| 7 | **DJM** | 0=left-justified, 1=right-justified result |
| 6 | **DSGN** | 0=unsigned, 1=signed |
| 5 | **SCAN** | 0=single sequence, 1=continuous mode |
| 4 | **MULT** | 0=single channel, 1=multi-channel |
| 2-0 | **CC:CB:CA** | Channel select (000=AN0 → 111=AN7) |

**Controls:** Channel selection, scan mode, justification, data format.  

**Example:**
```asm
LDAA  #%10000000   ; right-justified, single conv., channel AN0
STAA  ATDCTL5
```
---

## ⏱️ Timer System Registers

---

### **TSCR1 — Timer System Control Register 1**
**Full Name:** Timer System Control Register 1  
**Purpose:** Enables the timer module and manages flag clearing.  

| Bit | Name | Function |
|-----|------|-----------|
| 7 | **TEN** | 1 = enable timer |
| 6 | **TFFCA** | 1 = fast flag clear mode |
| 5-0 | — | Unused |

**Controls:** Turns the timer on/off, sets flag behavior.  

**Example:**
```asm
BSET  TSCR1,%10000000   ; enable timer
```
---

### **TSCR2 — Timer System Control Register 2**
**Full Name:** Timer System Control Register 2  
**Purpose:** Controls prescaler and overflow interrupt behavior.  

| Bit | Name | Function |
|-----|------|-----------|
| 7 | **TOI** | Enable timer overflow interrupt |
| 5 | **TCRE** | 1 = reset TCNT after OC7 event |
| 2-0 | **PR2–PR0** | Prescaler (000=÷1, 001=÷2 … 111=÷128) |

**Controls:** Timer speed and overflow interrupt enable.  

**Example:**
```asm
LDAA  #%00000111   ; prescaler ÷128
STAA  TSCR2
```
---

### **TFLG2 — Timer Flag Register 2**
**Full Name:** Timer Flag Register 2  
**Purpose:** Indicates if the timer has overflowed.  

| Bit | Name | Function |
|-----|------|-----------|
| 7 | **TOF** | 1 = timer overflow flag |

**Controls:** Overflow event tracking.  

**Example:**
```asm
BRCLR TFLG2,$80,Wait ; loop until overflow flag set
BSET  TFLG2,$80       ; clear overflow flag
```
---

### **TIOS — Timer Input Capture / Output Compare Select**
**Full Name:** Timer I/O Select Register  
**Purpose:** Chooses whether each timer channel acts as input capture or output compare.  

| Bit | Name | Function |
|-----|------|-----------|
| 7-0 | **IOS7–IOS0** | 0 = input capture, 1 = output compare |

**Controls:** Capture/compare mode for 8 timer channels.  

**Example:**
```asm
BSET  TIOS,%00000001   ; make channel 0 output compare
```
---

## ⚙️ Combined Example: Blinking LED using Timer

```asm
BSET  DDRP,%11111111    ; Port P as output
BSET  TSCR1,%10000000   ; Enable timer
LDAA  #%00000111
STAA  TSCR2             ; Prescaler ÷128 for slower timing

Loop:
  BRCLR TFLG2,$80,Loop  ; Wait for overflow
  BSET  TFLG2,$80       ; Clear overflow flag
  EORA  #%10000000      ; Toggle LED on PP7
  STAA  PTP
  BRA   Loop
```

💡 **How it works:**  
Timer counts up → when it overflows, `TOF` flag is set → loop detects overflow, clears flag, toggles LED → repeats.

---

## ✅ Quick Summary Table

| Register | Full Name | Controls / Purpose |
|-----------|------------|--------------------|
| **ATDCTL2** | ATD Control Reg 2 | Power, trigger, interrupts |
| **ATDCTL3** | ATD Control Reg 3 | Sequence length, FIFO mode |
| **ATDCTL4** | ATD Control Reg 4 | Resolution, sample time, prescaler |
| **ATDCTL5** | ATD Control Reg 5 | Channel, justification, scan, start conversion |
| **TSCR1** | Timer System Control Reg 1 | Enable timer, fast flag clear |
| **TSCR2** | Timer System Control Reg 2 | Prescaler, overflow interrupt |
| **TFLG2** | Timer Flag Reg 2 | Overflow flag (TOF) |
| **TIOS** | Timer I/O Select | Capture vs compare mode |
