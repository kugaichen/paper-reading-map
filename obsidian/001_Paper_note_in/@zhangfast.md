---
type: paper
title: "Fast and Scalable In-network Lock Management Using Lock Fission"
publicationTitle: "#OSDI"
year: 2024
authors:
  - Hanze Zhang
topics: "#硬件实现 #分布式锁卸载 #系统工作通过卸载加速 #可编程交换机"
tags:
  - 交换机卸载
  - 系统
  - 硬件实现
status: "#AI读"
zoteroLink: "zotero://select/library/items/5CHGEHWD"
notelink: "Fisslock2024.canvas"
---

## 一句话总结

oneSentence:: 现代分布式内存系统里很多任务本身已经是微秒级了，但锁授予时间还是 10–100 微秒，反而成了瓶颈；作者提出 lock fission，把锁管理拆成“交换机上的同步授锁决策”和“服务器上的异步参与者维护”，从而只用很小的交换机状态就支持百万级锁，并显著降低 grant time、提高吞吐。

## 表格关键字段

优点 (Pros):
- pros:: 1. 问题定义非常好，不是泛泛说 lock manager 慢，而是明确指出现代系统真正拖后腿的是 grant time，并用实验把这个问题先钉死，再引出方法，写法很值得学；2. 核心 insight 很漂亮：grant decision 只依赖固定大小 metadata，而 holders / waiters 维护依赖可变大小 metadata，因此前者适合放到交换机，后者适合留在服务器；3. 设计完整度很高，不只是提出一个 idea，还把协议流程、agent 迁移、网络异常处理、correctness、交换机 pipeline 实现都补全了；4. 实验很扎实，既有 microbenchmark，也有 TATP、TPC-C、动态 workload 和真实应用。

缺点 (Cons):
- cons:: 1. 文章最强的是系统拆分思路和工程实现，理论或算法层面的“新公式/新模型”不多，所以 novelty 更偏系统架构层面；2. 它不以高可用为核心目标，availability 需要额外结合已有复制方案；3. 方案依赖可编程交换机，部署门槛相对纯软件方案更高。

感想 (Thoughts):
- thoughts:: 这篇文章最值得学的不是某个局部技巧，而是它的整体研究范式：先用数据说明旧方法的问题到底卡在哪，再提炼出一个简洁的结构性 insight，最后围绕这个 insight 做协议、实现和实验闭环。
