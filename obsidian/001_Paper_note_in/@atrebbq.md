---
type: paper
title: "BBQ: A Fast and Scalable Integer Priority Queue for Hardware Packet Scheduling"
publicationTitle: "#NSDI"
year: "2024"
doi: ""
authors:
  - Nirav Atre
topics:
  - "#硬件实现"
  - "#FPGA"
  - "#优先级队列"
tags:
  - "#硬件实现"
  - "#FPGA"
  - "#优先级队列"
status: "#已读 #已精读 #评估未读"
zoteroLink: zotero://select/library/items/BNQ9E5GD
created: "Error: `format` can only be applied to dates. Tried for format object"
notelink: "[[BBQ2024Hugo.canvas]]"
---

# BBQ: A Fast and Scalable Integer Priority Queue for Hardware Packet Scheduling

## 一句话总结
oneSentence:: 考虑了网络中的包优先级出的问题，针对网络包出做了fpga流水化实现，针对其中的数据/控制输出做了针对性的常规化处理（这里我认为出彩点不高），针对高优先级包进入流水线因为深度来带的延迟出包问题引入了PIFO，这个设计我认为不错；精读笔记：[[BBQ2024Hugo.canvas]]

---

## 表格关键字段
**优点 (Pros):**
- pros:: 1.做了硬件设计分析和实现；2.针对fpga流水线中数据/控制冲突采用了预测/图着色设计，解决问题；3.针对流水线深度过深可能造成的优先级存取误差的问题，设计了PIFO在流水线之前保证最高优先级在cache中会被最先取出；4.网络和IC设计的结合，写法可以借鉴

**缺点 (Cons):**
- cons:: 1.感觉设计都是硬件中的常规设计，虽然问题是fpga流水线中的通病问题；2.在图着色处理前后时候的dequeue出最高优先级的时候tail/head的变化不会造成优先级出顺序出错吗？还是说不用考虑相同优先级下的出顺序；3.对于设计中的分层思想对检测冲突的意义我还没get到在哪，感觉是为了写paper才写上去的

**感想 (Thoughts):**
- thoughts:: 网络和IC设计的结合考虑，但是设计我认为不出擦，papar的写法很好，可能唯一出彩的地方就是针对流水线过深加入PIFO来保证最高优先级输出的问题（考虑的是特殊情况，但是做了设计了解决，这个思路很好

---

## 详细笔记
### 关键点 (Key Points)
- 精读文章：![[BBQ2024Hugo.canvas]]

### 方法 / 公式 (Method)
- 

### 结果 (Results)
- 

### 个人评论 / 可复现性
- 
--- 

## 引用信息
- **DOI**: [](https://doi.org/)
- **期刊/会议**: 
- **Zotero Link**: [Open in Zotero](zotero://select/library/items/BNQ9E5GD)
- **PDF Link**: [Open PDF](file:///G:\research\zotero_storage\storage\6KKLBJTR\Atre%20等%20-%20BBQ%20A%20Fast%20and%20Scalable%20Integer%20Priority%20Queue%20for%20Hardware%20Packet%20Scheduling.pdf)

---
## Zotero 注释导入

%% begin annotations %%

### 新导入的注释 (2025-12-31 17:19)




> **笔记**: #背景/Background

> multi-tenant cloud settings [p. 1](zotero://open-pdf/library/items/6KKLBJTR?page=1&annotation=7YF59MFX)



> **笔记**: #背景/Background

> packet scheduling in switches and programmable hardware. [p. 1](zotero://open-pdf/library/items/6KKLBJTR?page=1&annotation=8RQM6PA7)



> **笔记**: #问题/研究现状/Gap

> either do not scale to the number of elements required by these devices or fail to deliver good throughput, [p. 1](zotero://open-pdf/library/items/6KKLBJTR?page=1&annotation=A6DEENW6)



> **笔记**: #背景/Background

> Our key insight is to leverage a scheduling primitive used previously in software – called Hierarchical Find First Set – and port this to a highly pipeline-parallel hardware design. [p. 1](zotero://open-pdf/library/items/6KKLBJTR?page=1&annotation=FXI8BL3N)



> **笔记**: #贡献/Contribution

> hundreds of thousands of concurrent flows while guaranteeing 100 Gbps line rate (148.8 Mpps) on FPGAs and 1 Tbps (1,488 Mpps) line rate on ASICs. [p. 1](zotero://open-pdf/library/items/6KKLBJTR?page=1&annotation=EZA2QY27)



> **笔记**: #背景/Background

> Packet scheduling, the problem of deciding what order and/or time network packets ought to be served or transmitted, [p. 1](zotero://open-pdf/library/items/6KKLBJTR?page=1&annotation=GZKNS667)



> **笔记**: #背景/Background

> is a priority queue data-structure, which allows the scheduler to map packets’ relative order (or scheduling time) to unique priorities, sort them, and subsequently extract the highest-priority item (i.e., the next packet to schedule) from the queue. [p. 1](zotero://open-pdf/library/items/6KKLBJTR?page=1&annotation=BX5T5CKF)



> **笔记**: #背景/Background

> The key problem is the complexity associated with implementing a fast, scalable, and generic priority queue in hardware. [p. 1](zotero://open-pdf/library/items/6KKLBJTR?page=1&annotation=ETP9M26R)



> **笔记**: #问题/研究现状/Gap

> many of these solutions give up logical partitioning, a key feature of PIFO that is essential for practical switch deployment. For instance, the state-of-the-art priority queue design, BMW-Tree [47], would require 1,056 replicas in order to support a 32 × 400 Gbps output-queued switch [p. 1](zotero://open-pdf/library/items/6KKLBJTR?page=1&annotation=2JSWK9IA)



> **笔记**: #贡献/Contribution

> which guarantees constant worst-case time complexity for standard heap operations [p. 2](zotero://open-pdf/library/items/6KKLBJTR?page=2&annotation=QTN36VXA)



> **笔记**: #问题/研究现状/Gap

> avoiding data hazards (parallel reads and writes to the same data) and correctness. [p. 2](zotero://open-pdf/library/items/6KKLBJTR?page=2&annotation=HFYBSYSS)



> **笔记**: #重点/感兴趣的地方

> parallel access to shared data without sacrificing performance. [p. 2](zotero://open-pdf/library/items/6KKLBJTR?page=2&annotation=IXD7UPIN)



> **笔记**: #背景/Background

> Unfortunately, existing solutions for programmable packet scheduling in hardware fail to meet the requirements for both state-of-the-art NICs and switches. [p. 2](zotero://open-pdf/library/items/6KKLBJTR?page=2&annotation=FXX9FEE4)


![[001_Paper_note_in/paper_figure_attachments/fig_atrebbq/image-4-x42-y60.png]]


> **笔记**: #写作参考

>  [p. 4](zotero://open-pdf/library/items/6KKLBJTR?page=4&annotation=36HUUWBS)



> **笔记**: #值得学习的写法/写作参考

> circumvent the performance-scalability barrier: [p. 4](zotero://open-pdf/library/items/6KKLBJTR?page=4&annotation=64BY4KJ5)



> **笔记**: #值得学习的写法/写作参考

> we are motivated by prior work’s observation [p. 4](zotero://open-pdf/library/items/6KKLBJTR?page=4&annotation=EFQVRDPR)



> **笔记**: #值得学习的写法/写作参考

> In what follows, we describe the design of a highly scalable and performant priority queue exploring this tradeoff [p. 4](zotero://open-pdf/library/items/6KKLBJTR?page=4&annotation=TQY9SADP)



> **笔记**: #背景/Background

> (1) scalability, the maximum number of concurrent flows that the queue can support, (2) performance, the maximum steady-state packet rate that the queue can sustain, and (3) logical partitioning, the ability to multiplex several logical queues atop a single physical queue. [p. 4](zotero://open-pdf/library/items/6KKLBJTR?page=4&annotation=LN6W9638)



> **笔记**: #背景/Background

> an IPQ requires elements to map to a finite set of integer priorities, called its priority span [p. 4](zotero://open-pdf/library/items/6KKLBJTR?page=4&annotation=NQE7EKQJ)



> **笔记**: #方法/Method

> In BBQ, PBs are implemented as doubly-linked lists of QEs [p. 5](zotero://open-pdf/library/items/6KKLBJTR?page=5&annotation=VATM6Z7E)



> **笔记**: #值得学习的写法/写作参考

> Recall that we sought out to build BBQ with three key goals in mind: scalability, performance, and logical partitioning. In this section, we describe how BBQ meets these goals, and the challenges the underlying hardware architecture must address to achieve them. [p. 5](zotero://open-pdf/library/items/6KKLBJTR?page=5&annotation=EBN9KRYK)



> **笔记**: #重点/感兴趣的地方

> fmax or the maximum frequency that the queue operates at, which is dictated by its critical path (i.e., the worst-case combinational delay in the hardware circuit) [p. 5](zotero://open-pdf/library/items/6KKLBJTR?page=5&annotation=GLMLJA9B)



> **笔记**: #重点/感兴趣的地方

> (C2) the number of operations that can be issued every cycle. Given the logical complexity of the queue operations (i.e., ENQUEUE or DEQUEUE), [p. 5](zotero://open-pdf/library/items/6KKLBJTR?page=5&annotation=E9DZRHWP)



> **笔记**: #重点/感兴趣的地方

> multiple stages may simultaneously be active at the same time, [p. 6](zotero://open-pdf/library/items/6KKLBJTR?page=6&annotation=FM248HJ6)



> **笔记**: #贡献/Contribution

> we can, in fact, achieve fully-pipelined execution (i.e., guaranteed throughput of 1 operation per cycle) without compromising on the maximum clock frequency. [p. 6](zotero://open-pdf/library/items/6KKLBJTR?page=6&annotation=74NS7KMV)



> **笔记**: #贡献/Contribution

> The idea is to treat the bitmap tree as a collection of n disjoint subtrees, each of which maps to an independent BBQ. [p. 6](zotero://open-pdf/library/items/6KKLBJTR?page=6&annotation=HV9ID5NL)



> **笔记**: #贡献/Contribution

> we use a deep pipeline where individual stages are designed to do both little and roughly equal amounts of work. [p. 6](zotero://open-pdf/library/items/6KKLBJTR?page=6&annotation=PZKVA4EY)



> **笔记**: #贡献/Contribution

> thereby achieving its maximum rate of 1 op/cycle [p. 7](zotero://open-pdf/library/items/6KKLBJTR?page=7&annotation=9EYQQY3Z)



> **笔记**: #贡献/Contribution

> stall-free architecture [p. 7](zotero://open-pdf/library/items/6KKLBJTR?page=7&annotation=7BZLLQM6)



> **笔记**: #方法/Method

> Instead, StOCs allow us to divide the BBQ pipeline into independent pipeline hazard regions (PHRs) mapping to different levels of the bitmap tree, as shown in Table 2. When exiting a PHR, the outcome of every operation (either an ENQUEUE or a DEQUEUE) is committed to the StOC. This has two implications: (1) two operations can only be conflicted (i.e., have data or control dependencies between them) if they are in a PHR at the same time, and (2) conflicts are limited to intra-PHR state (e.g., the bitmap or StOC data at that tree level). As a result, we only have to address intra-PHR hazards (i.e., dependencies between active operations in the same PHR), which are far more localized – and therefore more tractable – than hazards spanning the entire pipeline. We characterize our implementation of StOCs in detail in Appendix B. [p. 7](zotero://open-pdf/library/items/6KKLBJTR?page=7&annotation=9PVZ5IE6)



> **笔记**: #贡献/Contribution

> is to perform write forwarding from a later pipeline stage to its predecessors when a read-after-write conflict occurs. [p. 7](zotero://open-pdf/library/items/6KKLBJTR?page=7&annotation=REQAQ6WM)



> **笔记**: #问题/研究现状/Gap

> However, consider what happens when two back-to-back DEQUEUE operations (say, OPA and OPB, issued in that order, respectively) land at the same priority bucket. At Stage 9, OPB is waiting on completion of the read addressed by PB.TAIL available on the previous cycle. However, OPA, now at Stage 10, modifies the TAIL pointer, causing the read issued by OPB (for QEDATA and QEPREV) to become stale. Unfortunately, write-forwarding does not help here because the stale variable (PB.TAIL) is being used to address other state, creating a control hazard. [p. 9](zotero://open-pdf/library/items/6KKLBJTR?page=9&annotation=9TJUX8IU)


%% end annotations %%

%% Import Date: 2025-12-31T17:19:07.332+08:00 %%
