---
type: paper
title: "Roar: A Router Microarchitecture for In-network Allreduce"
publicationTitle: "#ICS"
year: "2023"
doi: 10.1145/3577193.3593711
authors:
  - Ruiqi Wang
topics:
  - "#INA"
  - "#路由器"
tags:
  - "#INA"
  - "#路由器"
  - "#未读完"
status: "#未读完"
zoteroLink: zotero://select/library/items/QTNZFP8Y
created: 2023-06-21
---

# Roar: A Router Microarchitecture for In-network Allreduce

## 一句话总结
oneSentence:: (在这里输入总结)

---

## 表格关键字段
**优点 (Pros):**
- pros:: 111

**缺点 (Cons):**
- cons:: 

**感想 (Thoughts):**
- thoughts:: 

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
- **DOI**: [10.1145/3577193.3593711](https://doi.org/10.1145/3577193.3593711)
- **期刊/会议**: Proceedings of the 37th International Conference on Supercomputing
- **Zotero Link**: [Open in Zotero](zotero://select/library/items/QTNZFP8Y)
- **PDF Link**: [Open PDF](file:///G:\research\zotero_storage\storage\Z899I7ZC\3577193.3593711.pdf)

---
## Zotero 注释导入

%% begin annotations %%

### 新导入的注释 (2025-12-28 13:36)




> **笔记**: #方法/Method

> Upon aggregation, the results are sent back to the  router input units and then forwarded to the next hop. [p. 425](zotero://open-pdf/library/items/Z899I7ZC?page=425&annotation=WEY9A5KV)



> **笔记**: #方法/Method

> and data is moved between the RNIC  and host memory through the PCIe bu [p. 425](zotero://open-pdf/library/items/Z899I7ZC?page=425&annotation=VX6LJWAL)



> **笔记**: #方法/Method

> a descriptor (as depicted in  Figure 3) is created, followed by data loading and packet generation. [p. 425](zotero://open-pdf/library/items/Z899I7ZC?page=425&annotation=3S6NZGNK)



> **笔记**: #方法/Method

> If a flit is part of packets that need to be aggregated, it will  be routed to a port connected to Roar’s unit. Otherwise it will be [p. 425](zotero://open-pdf/library/items/Z899I7ZC?page=425&annotation=AQ8MTALQ)



> **笔记**: #方法/Method

> routed directly to an output port [p. 426](zotero://open-pdf/library/items/Z899I7ZC?page=426&annotation=YHYPMPPV)



> **笔记**: #方法/Method

> first builds a reduction tree, and  each router stores information of its children or parent in the Membership Table. [p. 426](zotero://open-pdf/library/items/Z899I7ZC?page=426&annotation=LIEIP43V)



> **笔记**: #方法/Method

> by the Working Memory, which  stores the temporary result from previous steps (step 6) [p. 426](zotero://open-pdf/library/items/Z899I7ZC?page=426&annotation=62RHJJGN)



> **笔记**: #重点/感兴趣的地方

> the packet will not be fetched from  the Rx-Queue and waits to be rescheduled [p. 426](zotero://open-pdf/library/items/Z899I7ZC?page=426&annotation=GB4S54UK)



> **笔记**: #方法/Method

> Upon receiving a descriptor (step 10), a PFE loads data from  the Working Memory and generates packets. [p. 426](zotero://open-pdf/library/items/Z899I7ZC?page=426&annotation=QFS6G2RI)



> **笔记**: #方法/Method

> The sender and the receiver use Queue Pair  (QP) as connection endpoint [p. 426](zotero://open-pdf/library/items/Z899I7ZC?page=426&annotation=YTUL3ZNR)



> **笔记**: #重点/感兴趣的地方

> The dataLen field sets the length of the data to be transferred,  which should not exceed 227 bytes. If the data size exceeds this  value, different descriptors are chained into a list, and jobId can be  used to differentiate between different jobs. [p. 426](zotero://open-pdf/library/items/Z899I7ZC?page=426&annotation=MUEZ36R2)



> **笔记**: #重点/感兴趣的地方

> MPI reduction  operations exclude floating point multiplication and division, which  are computationally expensive arithmetic operations. [p. 426](zotero://open-pdf/library/items/Z899I7ZC?page=426&annotation=GEN2Z94M)


%% end annotations %%

%% Import Date: 2025-12-28T13:36:49.139+08:00 %%
