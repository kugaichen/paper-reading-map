---
type: paper
title: Fast and Scalable In-network Lock Management Using Lock Fission
publicationTitle: "#OSDI"
year: "2024"
doi: ""
authors:
  - Hanze Zhang
topics:
  - "#硬件实现"
  - "#分布式锁卸载"
  - "#系统工作通过卸载加速"
  - "#可编程交换机"
tags:
  - 交换机卸载
  - 系统
  - 硬件实现
status: "#AI读"
zoteroLink: zotero://select/library/items/5CHGEHWD
created: "Error: `format` can only be applied to dates. Tried for format object"
---

# Fast and Scalable In-network Lock Management Using Lock Fission

## 一句话总结
oneSentence:: 现代分布式内存系统里很多任务本身已经是微秒级了，但锁授予时间还是 10–100 微秒，反而成了瓶颈；作者提出 lock fission，把锁管理拆成“交换机上的同步授锁决策”和“服务器上的异步参与者维护”，从而只用很小的交换机状态就支持百万级锁，并显著降低 grant time、提高吞吐。

---

## 表格关键字段
**优点 (Pros):**
- pros:: 1.问题定义非常好，不是泛泛说lock manager慢，而是明确指出现代系统里真正拖后腿的是grant time，并用实验把这个问题先钉死，再引出方法，写法很值得学；2.核心insight很漂亮：grant decision 只依赖固定大小 metadata，而 holders/ waiters维护依赖可变大 metadata，因此前者适合放到交换机，后者适合留在服务器，这个拆分非常自然，也很有系统味道；3.设计完整度很高，不只是提出一个 idea，还把协议流程、agent 迁移、网络异常处理、correctness、交换机 pipeline 实现都补全了，属于能真正落地的系统设计；4.实验很扎实，既有microbenchmark，也有 TATP、TPC-C、动态 workload 和真实应用 mobile banking，论证链条比较完整。

**缺点 (Cons):**
- cons:: 1.它不以高可用为核心目标，论文也明确说不像 Zookeeper、Chubby 那类可靠但粗粒度的协调服务；availability 需要额外结合已有的复制方案（Zookeeper、Chubby 更像“稳妥的调度中心”。哪怕慢一点，也要尽量保证服务一直在线、状态不丢、故障后能继续对外提供协调能力。FISSLOCK 更像“极致加速的锁通道”。  它的重点是把锁授予这条关键路径压到微秒级，所以把很多设计资源都放在了交换机卸载、协议拆分、低延迟处理上。）；2.这篇文章更适合“锁请求高频、任务本身很短、对尾延迟敏感”的场景；如果本身就是粗粒度协调，收益未必会像文中这么明显；

**感想 (Thoughts):**
- thoughts:: 这篇paper先用数据说明旧方法的问题到底卡在哪，再提炼出一个很简洁的结构性 insight，最后围绕这个 insight 做协议、实现和实验闭环。lock fission 这个点我觉得很漂亮，本质上是在重划系统职责边界：把真正必须同步、必须快的最小闭环抽到交换机上，把复杂但不必阻塞关键路径的部分留给服务器。这种“顺着硬件特性重构系统”的思路，对做在网计算、交换机卸载、甚至存算分工类工作都很有启发

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
- **DOI**: [](https://doi.org/)
- **期刊/会议**: 
- **Zotero Link**: [Open in Zotero](zotero://select/library/items/5CHGEHWD)
- **PDF Link**: [Open PDF](file:///G:\research\zotero_storage\storage\7IZJRU8A\Zhang和Cheng%20-%20Fast%20and%20Scalable%20In-network%20Lock%20Management%20Using%20Lock%20Fission.pdf)

---
## Zotero 注释导入

%% begin annotations %%

### 新导入的注释 (2026-03-31 15:59)




> **笔记**: #重点/感兴趣的地方

> This section describes the lock fission protocol implemented by FISSLOCK. [p. 255](zotero://open-pdf/library/items/7IZJRU8A?page=255&annotation=AJSUZ6D2)


%% end annotations %%

%% Import Date: 2026-03-31T15:59:50.566+08:00 %%
