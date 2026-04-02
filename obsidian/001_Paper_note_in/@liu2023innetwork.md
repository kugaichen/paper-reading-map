---
type: paper
title: In-Network Aggregation with Transport Transparency for Distributed Training
publicationTitle: "#ASPLOS"
year: "2023"
doi: 10.1145/3582016.3582037
authors:
  - Shuo Liu
topics:
  - "#INA"
  - "#协议"
  - "#FPGA"
tags:
  - "#INA"
  - "#协议"
  - "#FPGA"
  - "#已读 #需精读"
status: "#已读 #需精读"
zoteroLink: zotero://select/library/items/TCW7C72H
created: 2023-03-25
---

# In-Network Aggregation with Transport Transparency for Distributed Training

## 一句话总结
oneSentence:: (在这里输入总结)

---

## 表格关键字段
**优点 (Pros):**
- pros:: 

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
- **DOI**: [10.1145/3582016.3582037](https://doi.org/10.1145/3582016.3582037)
- **期刊/会议**: Proceedings of the 28th ACM International Conference on Architectural Support for Programming Languages and Operating Systems, Volume 3
- **Zotero Link**: [Open in Zotero](zotero://select/library/items/TCW7C72H)
- **PDF Link**: [Open PDF](file:///G:\research\zotero_storage\storage\3TZHE7NV\netreduce.asplos23.pdf)

---
## Zotero 注释导入

%% begin annotations %%

### 新导入的注释 (2025-12-28 13:36)




> **笔记**: #贡献/Contribution

> We design a transport-transparent INA primitive named NetReduce for modern multi-rack data centers. [p. 1](zotero://open-pdf/library/items/3TZHE7NV?page=1&annotation=5D3MJG9R)



> **笔记**: #贡献/Contribution

> The switch performs aggregation operations but preserves data transmission connections. [p. 1](zotero://open-pdf/library/items/3TZHE7NV?page=1&annotation=E8MW5A6H)



> **笔记**: #重点/感兴趣的地方

> Connection Lookup Table (CLT) to recover the INA header for non-first packets (©A in Figure 3) [p. 6](zotero://open-pdf/library/items/3TZHE7NV?page=6&annotation=CR77B48C)



> **笔记**: #重点/感兴趣的地方

> control the number of in-flight packets not to exceed the aggregator array size [p. 6](zotero://open-pdf/library/items/3TZHE7NV?page=6&annotation=GVXZ7MG4)



> **笔记**: #贡献/Contribution

> Instead, NetReduce’s flow control module builds a message-level sliding window to control the in-flight traffic volume. [p. 6](zotero://open-pdf/library/items/3TZHE7NV?page=6&annotation=E59JA23E)



> **笔记**: #重点/感兴趣的地方

> communication pattern should take the bandwidth gap between intra- and inter-machines into consideration for better overall throughput. [p. 7](zotero://open-pdf/library/items/3TZHE7NV?page=7&annotation=EJY38PEV)



> **笔记**: #重点/感兴趣的地方

> In this pattern, the master GPUs could undertake a heavier workload than slave GPUs, causing an imbalanced usage of GPU resources. [p. 7](zotero://open-pdf/library/items/3TZHE7NV?page=7&annotation=VKJG752X)



> **笔记**: #重点/感兴趣的地方

> First, each GPU chunks its gradient of size M into n pieces, and all GPUs within a machine perform the reduce-scatter operation [p. 8](zotero://open-pdf/library/items/3TZHE7NV?page=8&annotation=Q4Y8EA8D)



> **笔记**: #重点/感兴趣的地方

> We conduct a flow-level simulation to understand the impact factors influencing communication time. [p. 8](zotero://open-pdf/library/items/3TZHE7NV?page=8&annotation=7KALTGSD)



> **笔记**: #值得学习的写法/写作参考

> We simulate a multi-GPU multi-machine cluster with n = 8 and Binter =12.5 GB/s (Ethernet), compare PN with FR and TA, and tune the intra-machine bandwidth Bintra from 15.75 GB/s (16-lane PCIe 3.0) to 100 GB/s (NVLink), total number of GPUs P from 32 to 1024, and per-hop latency on a ring α from 0.1 μs to 100 μs. [p. 8](zotero://open-pdf/library/items/3TZHE7NV?page=8&annotation=C8YPI6UW)



> **笔记**: #问题/研究现状/Gap

> has a ring structure, and the total latency on a ring is decided by the number of hops P (P/n) and the per-hop latency α [p. 8](zotero://open-pdf/library/items/3TZHE7NV?page=8&annotation=MTT7FDSV)



> **笔记**: #值得学习的写法/写作参考

> The implementation of NetReduce consumes small portions of the whole FPGA resources: 10.31% (109025), 7.91% (167554), and 26.27% (993) for LUTs, FlipFlops, and BRAM, respectively. [p. 9](zotero://open-pdf/library/items/3TZHE7NV?page=9&annotation=IBB6SEN3)



> **笔记**: #值得学习的写法/写作参考

> The bitmap, packet buffer, and value in aggregators are implemented as separate arrays — State Record, Header Buffer, Payload Buffer, and Aggregation Value. [p. 9](zotero://open-pdf/library/items/3TZHE7NV?page=9&annotation=JQ4JKMC8)



> **笔记**: #实验/Experiment

> The INA accelerator is deployed as an external middlebox attached to a commodity Ethernet switch; both sides spare six ports to connect. [p. 9](zotero://open-pdf/library/items/3TZHE7NV?page=9&annotation=IVVRUT2E)



> **笔记**: #实验/Experiment

> We compare NetReduce with Ring AllReduce, SwitchML, and Tencent AllReduce. Ring AllReduce and Tencent AllReduce are implemented by NCCL-2.4.7, while SwitchML is implemented by using a programming switch equipped with a Tofino chip. We also use a microbenchmark to compare NetReduce, ATP, and SwitchML. [p. 10](zotero://open-pdf/library/items/3TZHE7NV?page=10&annotation=49QVUPHT)



> **笔记**: #重点/感兴趣的地方

> Parameters. In the experiments, the sliding window size N = 2, each message has 170 packets, and the packet payload carries 1 KB of data. In the experiment, we also tune the parameters of batch size and value precision to observe their impact on the result. [p. 10](zotero://open-pdf/library/items/3TZHE7NV?page=10&annotation=F2TXXK52)



> **笔记**: #重点/感兴趣的地方

> using float-point number arithmetic for aggregation. [p. 10](zotero://open-pdf/library/items/3TZHE7NV?page=10&annotation=6GQWGVF8)



> **笔记**: #值得学习的写法/写作参考

> the transport transparent design of NetReduce makes it friendly for development and deployment. [p. 10](zotero://open-pdf/library/items/3TZHE7NV?page=10&annotation=N2NLR3JD)



> **笔记**: #贡献/Contribution

> The latency increased by software packetization in ATP and SwitchML even exceeds the latency introduced by two extra hops (between FPGA accelerator and switch) in NetReduce. [p. 10](zotero://open-pdf/library/items/3TZHE7NV?page=10&annotation=EPPLH9EX)



> **笔记**: #问题/研究现状/Gap

> ATP uses internal recirculation to process packets with a larger payload, the recirculation costs 50% switch internal bandwidth; [p. 10](zotero://open-pdf/library/items/3TZHE7NV?page=10&annotation=MSTQJWF9)



> **笔记**: #重点/感兴趣的地方

> NetReduce has full-length Ethernet frames and segmentation is offloaded to RoCE NIC. Third, NetReduce and SwitchML have similar performance on ResNet50. The reason is that ResNet50 is a computation-intensive model, and the communication time improvement from INA is marginal in this case. [p. 11](zotero://open-pdf/library/items/3TZHE7NV?page=11&annotation=T8IKK8ED)



> **笔记**: #值得学习的写法/写作参考

> NetReduce has full-length Ethernet frames and segmentation is offloaded to RoCE NIC. Third, NetReduce and SwitchML have similar performance on ResNet50. The reason is that ResNet50 is a computation-intensive model, and the communication time improvement from INA is marginal in this case. [p. 11](zotero://open-pdf/library/items/3TZHE7NV?page=11&annotation=548UMJCD)



> **笔记**: #重点/感兴趣的地方

> and SwitchML RDMA links non-first packets to first packets by using a sequence number as NetReduce does. [p. 13](zotero://open-pdf/library/items/3TZHE7NV?page=13&annotation=UGEN8IUE)


%% end annotations %%

%% Import Date: 2025-12-28T13:36:49.125+08:00 %%
