---
type: paper
title: "Occamy: A Preemptive Buffer Management for On-chip Shared-memory Switches"
publicationTitle: ""
year: "2025"
doi: 10.48550/arXiv.2501.13570
authors:
  - Danfeng Shan
topics:
  - "#FPGA"
  - "#Buffer Management"
  - "#硬件实现"
tags:
  - "#FPGA"
  - "#硬件实现"
status: "#未读完 #没读实现和评估"
zoteroLink: zotero://select/library/items/KPQVUCM3
created: 2025-01-23
---

# Occamy: A Preemptive Buffer Management for On-chip Shared-memory Switches

## 一句话总结
oneSentence:: 前半部分的写法很好值得学习，后半部分没看；Occamy主要是针对buffer management进行优化，过去都是非抢占式的，而现在随着交换芯片的发展而可以做成抢占式的，所以针对抢占式硬件实现的几点难点做了分析和整体设计（论文里面的BM的分层介绍还不错），前半部分精读笔记：[[Occamy2025.canvas]]

---

## 表格关键字段
**优点 (Pros):**
- pros:: 1.写法非常好，对于bg还有overview的分析和bridge非常流畅；

**缺点 (Cons):**
- cons:: 1.并没有针对性的设计（粗略看了看好像没有，或者说设计并不是点对点突出

**感想 (Thoughts):**
- thoughts:: 写法值得借鉴，实验没看但是图很充分

---

## 详细笔记
### 关键点 (Key Points)
- 

### 方法 / 公式 (Method)
- 

### 结果 (Results)
- 

### 个人评论 / 可复现性
- 
--- 

## 引用信息
- **DOI**: [10.48550/arXiv.2501.13570](https://doi.org/10.48550/arXiv.2501.13570)
- **期刊/会议**: 
- **Zotero Link**: [Open in Zotero](zotero://select/library/items/KPQVUCM3)
- **PDF Link**: [Open PDF](file:///G:\research\zotero_storage\storage\XNC58SCJ\Shan%20等%20-%202025%20-%20Occamy%20A%20Preemptive%20Buffer%20Management%20for%20On-chip%20Shared-memory%20Switches.pdffile:///G:\research\zotero_storage\storage\ZAYHY44Z\2501.html)

---
## Zotero 注释导入

%% begin annotations %%

### 新导入的注释 (2026-01-04 22:03)




> **笔记**: #背景/Background

> non-preemptive nature of the current BM [p. 1](zotero://open-pdf/library/items/XNC58SCJ?page=1&annotation=UGNNWIC7)



> **笔记**: #背景/Background

> In such cases, non-preemptive BMs fail to adjust the buffer allocation in time, resulting in anomalous behaviors where packets are reluctantly dropped [p. 1](zotero://open-pdf/library/items/XNC58SCJ?page=1&annotation=C8ZEQEP5)


![[001_Paper_note_in/paper_figure_attachments/fig_shan2025occamy/image-2-x25-y57.png]]


> **笔记**: #背景/Background

>  [p. 2](zotero://open-pdf/library/items/XNC58SCJ?page=2&annotation=USAZAQQM)



> **笔记**: #动机/Motivation

> Thus, it is necessary to ask: is it now feasible to support preemptive operations in today’s on-chip shared-memory switch? [p. 2](zotero://open-pdf/library/items/XNC58SCJ?page=2&annotation=29ESKPUE)



> **笔记**: #贡献/Contribution

> Occamy, a simple preemptive BM that can quickly adjust buffer allocation by actively expelling packets for the over-allocated queues [p. 2](zotero://open-pdf/library/items/XNC58SCJ?page=2&annotation=YEDLYFW9)



> **笔记**: #贡献/Contribution

> Occamy decouples packet expulsion from packet enqueue, keeping enqueue operations simple. [p. 2](zotero://open-pdf/library/items/XNC58SCJ?page=2&annotation=LWUK5B3T)



> **笔记**: #贡献/Contribution

> Occamy expels packets from all over-allocated queues in a round-robin manner, avoiding the prohibitive costs of tracking the longest queue. [p. 2](zotero://open-pdf/library/items/XNC58SCJ?page=2&annotation=RZ96F5H6)


![[001_Paper_note_in/paper_figure_attachments/fig_shan2025occamy/image-2-x311-y562.png]]


> **笔记**: 这个图画的可以学习借鉴

>  [p. 2](zotero://open-pdf/library/items/XNC58SCJ?page=2&annotation=ZY6LAEIT)



> **笔记**: #背景/Background

> A typical switch chip mainly consists of three parts: Ingress Packet Processing, Traffic Manager (TM), and Egress Packet Processing. [p. 3](zotero://open-pdf/library/items/XNC58SCJ?page=3&annotation=8G3RCBRE)



> **笔记**: #重点/感兴趣的地方

> At the bottom, the cell data memory accommodates the actual packet data, which is divided into equal-sized cells [p. 3](zotero://open-pdf/library/items/XNC58SCJ?page=3&annotation=D4H9J9FS)



> **笔记**: #重点/感兴趣的地方

> Moreover, the cell pointer memory also manages the free cells through a linked list, referred to as free cell pointer list. [p. 3](zotero://open-pdf/library/items/XNC58SCJ?page=3&annotation=YBBAM5CB)



> **笔记**: #重点/感兴趣的地方

> Each packet is associated with a PD, containing the packet metadata (e.g., packet length) and the head(s) of cell pointer list(s). A queue is organized as a linked list of PDs. [p. 3](zotero://open-pdf/library/items/XNC58SCJ?page=3&annotation=VGVEU9W8)


![[001_Paper_note_in/paper_figure_attachments/fig_shan2025occamy/image-4-x44-y53.png]]


> **笔记**: #背景/Background

>  [p. 4](zotero://open-pdf/library/items/XNC58SCJ?page=4&annotation=FBWLX2DH)



> **笔记**: #方法/Method

> Pushout allows a packet to enter into the buffer whenever there is some free space. When the buffer is out of space, Pushout expels a packet from the longest queue to make room for the new arrival packet. [p. 4](zotero://open-pdf/library/items/XNC58SCJ?page=4&annotation=NHL8QDKK)



> **笔记**: #问题/研究现状/Gap

> Thus, accepting a packet may require an extra read operation2. This was unacceptable at that time because memory bandwidth was the key limiting factor of the forwarding speed for a shared-memory switch [p. 4](zotero://open-pdf/library/items/XNC58SCJ?page=4&annotation=QH9724VX)



> **笔记**: #问题/研究现状/Gap

> Consequently, the memory bandwidth was a bottleneck and memory access was at the critical path in a high-speed shared-memory switch. There is little space for buffer management to consume memory bandwidth. [p. 4](zotero://open-pdf/library/items/XNC58SCJ?page=4&annotation=FXFWT2Q4)



> **笔记**: #问题/研究现状/Gap

> enqueuing a packet may require to dequeue and drop a packet from another queue. [p. 4](zotero://open-pdf/library/items/XNC58SCJ?page=4&annotation=WAMLDZLX)



> **笔记**: #问题/研究现状/Gap

> Pushout requires extra buffer for each queue to accommodate the waiting packet. Moreover, all enqueue operations should be paused. [p. 4](zotero://open-pdf/library/items/XNC58SCJ?page=4&annotation=MILX3Z7I)



> **笔记**: #问题/研究现状/Gap

> non-preemptive BMs to suffer from the buffer choking problem [p. 5](zotero://open-pdf/library/items/XNC58SCJ?page=5&annotation=8F2QZR3I)



> **笔记**: #值得学习的写法/写作参考

> In this part, we argue that the limitation of bandwidth (i.e., Difficulty 1) is less critical with the current buffer architecture, [p. 6](zotero://open-pdf/library/items/XNC58SCJ?page=6&annotation=4NWU3REW)



> **笔记**: #值得学习的写法/写作参考

> which opens up opportunities to innovate preemptive BMs by overcoming Difficulty 2 and Difficulty 3. [p. 6](zotero://open-pdf/library/items/XNC58SCJ?page=6&annotation=4Z6TYA2D)



> **笔记**: #方法/Method

> Occamy makes the admission and expulsion mutually independent [p. 7](zotero://open-pdf/library/items/XNC58SCJ?page=7&annotation=IZ9ULSW7)



> **笔记**: #问题/研究现状/Gap

> As the enqueue operations do not wait, any arriving packet is dropped once the buffer is full. [p. 7](zotero://open-pdf/library/items/XNC58SCJ?page=7&annotation=I5Y4PLNY)



> **笔记**: #方法/Method

> Occamy only needs to reserve a small fraction of free buffer, as it can utilize head drop to quickly expel the over-allocated buffer. [p. 7](zotero://open-pdf/library/items/XNC58SCJ?page=7&annotation=G4XT4WQG)



> **笔记**: #背景/Background

> For example, with α = 8, DT allows a queue to occupy 88.9% of the buffer. [p. 7](zotero://open-pdf/library/items/XNC58SCJ?page=7&annotation=PVZN3CGW)


%% end annotations %%

%% Import Date: 2026-01-04T22:03:40.959+08:00 %%
