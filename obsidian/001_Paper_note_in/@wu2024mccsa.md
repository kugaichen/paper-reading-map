---
type: paper
title: "MCCS: A Service-based Approach to Collective Communication for Multi-Tenant Cloud"
publicationTitle: "#SIGCOMM"
year: "2024"
doi: 10.1145/3651890.3672252
authors:
  - Yongji Wu
topics:
  - "#Communication"
  - "#GPU"
  - "#Infra"
  - "#多租户"
  - "#云服务"
tags:
  - 系统
  - Infra
  - SIGCOMM
  - Communication
status: "#已精读"
zoteroLink: zotero://select/library/items/IBGIJEBF
created: 2024-08-04
---

# MCCS: A Service-based Approach to Collective Communication for Multi-Tenant Cloud

## 一句话总结
oneSentence:: 把多租户云中的 collective communication 从租户应用里拿出来，交给云侧服务 MCCS 统一实现；这样做是因为租户看不到真实拓扑和共享网络状态，导致现有库式方案很难选对算法、路径和优先级；这么做的好处是能把拓扑感知、运行时重配置、QoS 和路径工程统一起来，带来最高 2.4× 的 testbed 提升和约 3.4× 的大规模仿真收益；精读笔记：https://zhuanlan.zhihu.com/p/2028048766989612000

---

## 表格关键字段
**优点 (Pros):**
- pros:: 1.论文的introduction和desgin的细节部分引入的写法非常好，值得学习；2.论文的故事讲的很完整也很立得住，针对service的必要性讲的很流畅，可以进一步学习；3.论文实验部分的解释和场景构造是合理的，也是我缺乏的，值得学习

**缺点 (Cons):**
- cons:: 1.论文对于实现细节部分的图表阐述还是太少，文字描述太抽象，不易理解；2.论文的实验部分看起来更像仿真和模拟实验，并不一定在真实场景下立得住

**感想 (Thoughts):**
- thoughts:: 论文的故事性值得学习，实验和论文的细节图表阐述需要进一步提升

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
- **DOI**: [10.1145/3651890.3672252](https://doi.org/10.1145/3651890.3672252)
- **期刊/会议**: Proceedings of the ACM SIGCOMM 2024 Conference
- **Zotero Link**: [Open in Zotero](zotero://select/library/items/IBGIJEBF)
- **PDF Link**: [Open PDF](file:///G:\research\zotero_storage\storage\CTF2NSEF\Wu%20等%20-%202024%20-%20MCCS%20A%20Service-based%20Approach%20to%20Collective%20Communication%20for%20Multi-Tenant%20Cloud.pdf)

---
## Zotero 注释导入

%% begin annotations %%

### 新导入的注释 (2026-04-16 15:37)




> **笔记**: #动机/Motivation

> First, choosing the most efficient algorithm requires knowledge of the physical network topology and link utilization, which are not available to cloud tenants. [p. 679](zotero://open-pdf/library/items/CTF2NSEF?page=679&annotation=MK75D8MI)



> **笔记**: 这里的写法可以借鉴
 #背景/Background

>  [p. 680](zotero://open-pdf/library/items/CTF2NSEF?page=680&annotation=6Q2F6SLF)



> **笔记**: #重点/感兴趣的地方

> First, the provider can easily adopt custom, proprietary collective communication approaches without the need for changing existing user applications. Second, the provider can enforce fine-grained quality of service (QoS) policies at the level of collective operations. Third, the provider is no longer forced to choose between providing strong performance or the confidentiality of their proprietary infrastructure. [p. 680](zotero://open-pdf/library/items/CTF2NSEF?page=680&annotation=78WZCK9B)



> **笔记**: 写法可以借鉴

>  [p. 680](zotero://open-pdf/library/items/CTF2NSEF?page=680&annotation=P4TE95FP)



> **笔记**: #重点/感兴趣的地方

> enable dynamic reconfiguration of collective implementations at runtime [p. 680](zotero://open-pdf/library/items/CTF2NSEF?page=680&annotation=YUA28FAI)



> **笔记**: #重点/感兴趣的地方

> This breakdown confirms that data communication constitutes a significant portion of the training time. [p. 680](zotero://open-pdf/library/items/CTF2NSEF?page=680&annotation=X9RUYSZJ)



> **笔记**: #重点/感兴趣的地方

> This lack of visibility into the physical topology can lead to suboptimal collective algorithm selection or configuration [p. 681](zotero://open-pdf/library/items/CTF2NSEF?page=681&annotation=FGYXVWXB)



> **笔记**: #重点/感兴趣的地方

> We measure a job’s network overhead using cross-rack ratio, where is the number of cross-rack flows of the collective ring used by the job, [p. 681](zotero://open-pdf/library/items/CTF2NSEF?page=681&annotation=PTUFMEJW)



> **笔记**: #动机/Motivation

> cloud tenants face a significant challenge in selecting an optimal collective communication algorithm due to the lack of visibility into the physical network’s structure. [p. 681](zotero://open-pdf/library/items/CTF2NSEF?page=681&annotation=M6S7TBEZ)



> **笔记**: 我认为这里的分析还是挺恰当的，NCCL和MCCS之间的gap凸显出来了，有了这段分析motivation就立得住了，可以学习

>  [p. 682](zotero://open-pdf/library/items/CTF2NSEF?page=682&annotation=DZPXZYWB)



> **笔记**: #方法/Method

> where for each flow we assign it the path that has minimal excess bandwidth demand. [p. 685](zotero://open-pdf/library/items/CTF2NSEF?page=685&annotation=4EPPL3QL)


![[annotation.imageRelativePath]]


> **笔记**: #背景/Background
这个图在一定程度上其实可以解释当前跨机架的ECMP不合适，开销很大

>  [p. 686](zotero://open-pdf/library/items/CTF2NSEF?page=686&annotation=G6GHLXRP)



> **笔记**: #实验/Experiment

> The reason is that for large messages, MCCS’s performance is bottlenecked by the collective communication’s [p. 686](zotero://open-pdf/library/items/CTF2NSEF?page=686&annotation=MVZ4R58R)



> **笔记**: 这个图可以学习一下，类似于在实验中表明使用了多租户以后对于某一项测评性能整体上被提升了
#背景/Background
 #背景/Background

>  [p. 687](zotero://open-pdf/library/items/CTF2NSEF?page=687&annotation=RCZXACPB)



> **笔记**: 这里的动态重配置的实验感觉也是仿真模拟 -> 比较简单，灭有说服力

>  [p. 687](zotero://open-pdf/library/items/CTF2NSEF?page=687&annotation=MFHXY54I)


![[annotation.imageRelativePath]]


> **笔记**: #背景/Background

>  [p. 687](zotero://open-pdf/library/items/CTF2NSEF?page=687&annotation=DF44AJQS)



> **笔记**: #实验/Experiment

> For all setups, MCCS (with FFA) not only achieves the highest aggregated bus bandwidth but also ensures fairness across applications. [p. 687](zotero://open-pdf/library/items/CTF2NSEF?page=687&annotation=DJ6T48VR)


![[annotation.imageRelativePath]]


> **笔记**: #背景/Background

>  [p. 688](zotero://open-pdf/library/items/CTF2NSEF?page=688&annotation=7C8UTU4S)



> **笔记**: 这个图体现的是：重要的是PFA对比FFA和PFA + TS这样的区分和定义 + 效果：
这里对不同策略的定义比较清楚，而且为何如此这样定义阐述的比较明白，同时实验也展示了更细粒度的QoS带来的效果会更好

>  [p. 688](zotero://open-pdf/library/items/CTF2NSEF?page=688&annotation=X7YCFKEB)



> **笔记**: #背景/Background

> We assume an administrator wants to prioritize A over both B and C [p. 688](zotero://open-pdf/library/items/CTF2NSEF?page=688&annotation=NI2BJXP5)



> **笔记**: #背景/Background

> If the administer [p. 688](zotero://open-pdf/library/items/CTF2NSEF?page=688&annotation=ITN8U3BS)



> **笔记**: #背景/Background

> wants to further prioritize B over C without affecting A, flow assignment no longer works no remaining routes are available that we can dedicate B to [p. 688](zotero://open-pdf/library/items/CTF2NSEF?page=688&annotation=TS55BPPE)



> **笔记**: #背景/Background

> Hence, in this scenario, we apply our time window based traffic scheduling (PFA+TS) to prioritize B. [p. 688](zotero://open-pdf/library/items/CTF2NSEF?page=688&annotation=HZ6JN2HW)



> **笔记**: 实验描述这样写才比较好
 #背景/Background

>  [p. 689](zotero://open-pdf/library/items/CTF2NSEF?page=689&annotation=MZECS7ZS)


![[annotation.imageRelativePath]]


> **笔记**: #背景/Background

>  [p. 689](zotero://open-pdf/library/items/CTF2NSEF?page=689&annotation=3MYQDTRM)


%% end annotations %%

%% Import Date: 2026-04-16T15:38:38.713+08:00 %%
