---
type: paper
title: "Crux: GPU-Efficient Communication Scheduling for Deep Learning Training"
publicationTitle: "#SIGCOMM"
year: "2024"
doi: 10.1145/3651890.3672239
authors:
  - Jiamin Cao
topics:
  - "#GPU"
  - "#阿里云"
  - "#Communication"
tags:
  - "#GPU"
  - "#阿里云"
  - "#Communication"
  - "#已精读"
status: "#已精读"
zoteroLink: zotero://select/library/items/4L638JWP
created: 2024-08-04
---

# Crux: GPU-Efficient Communication Scheduling for Deep Learning Training

## 一句话总结
oneSentence:: 

---

## 表格关键字段
**优点 (Pros):**
- pros:: 1.内存开销减小；2.算法更简洁；3.做了实际测试

**缺点 (Cons):**
- cons:: 
- 2
- 3

**感想 (Thoughts):**
- thoughts:: 
- 2
- 3
- 

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
- **DOI**: [10.1145/3651890.3672239](https://doi.org/10.1145/3651890.3672239)
- **期刊/会议**: Proceedings of the ACM SIGCOMM 2024 Conference
- **Zotero Link**: [Open in Zotero](zotero://select/library/items/4L638JWP)
- **PDF Link**: [Open PDF](file:///G:\research\zotero_storage\storage\J3VJ7BL8\Cao%20等%20-%202024%20-%20Crux%20GPU-Efficient%20Communication%20Scheduling%20for%20Deep%20Learning%20Training.pdf)

---
## Zotero 注释导入

%% begin annotations %%



### 新导入的注释 (2025-12-28 13:27)

  







> **笔记**: #重点/感兴趣的地方


> communication contention [p. 1](zotero://open-pdf/library/items/J3VJ7BL8?page=1&annotation=EYH44L4U)







> **笔记**: #问题/研究现状/Gap



> nfluences the overall GPU computation utilization, resulting in the low efficiency of the training cluster. [p. 1](zotero://open-pdf/library/items/J3VJ7BL8?page=1&annotation=4255KY7L)







> **笔记**: #方法/Method



> GPU intensity-aware communication scheduling [p. 1](zotero://open-pdf/library/items/J3VJ7BL8?page=1&annotation=9HK649YI)







> **笔记**: #实验/Experiment



> Our 96-GPU testbed experiments show that Crux improves 8.3% to 14.8% GPU computation utilization [p. 1](zotero://open-pdf/library/items/J3VJ7BL8?page=1&annotation=NZQY98RR)







> **笔记**: #实验/Experiment



> Crux increases GPU computation utilization by up to 23% compared with alternatives including Sincronia, TACCL, and CASSINI. [p. 1](zotero://open-pdf/library/items/J3VJ7BL8?page=1&annotation=CNC374UI)







> **笔记**: #重点/感兴趣的地方



> As a production DLT service provider, our goal is to maximize GPU computation utilization (or GPU utilization for short) of a GPU cluster, [p. 1](zotero://open-pdf/library/items/J3VJ7BL8?page=1&annotation=IAG3DN6T)







> **笔记**: #问题/研究现状/Gap



> A 9.5% decrease in GPU utilization means that 95 out of a 1,000-GPU cluster are wasted, which translates to millions of dollars. [p. 1](zotero://open-pdf/library/items/J3VJ7BL8?page=1&annotation=3ZY5YKWN)







> **笔记**: #问题/研究现状/Gap



> communication contention. [p. 1](zotero://open-pdf/library/items/J3VJ7BL8?page=1&annotation=H8ND7HQF)







> **笔记**: #值得学习的写法/写作参考



> Crux introduces the concept of GPU intensity as a measure of a job’s impact on GPU utilization. Using GPU intensity, Crux selects paths and assigns priorities for different jobs to mitigate communication contention. We make the following contributions. [p. 2](zotero://open-pdf/library/items/J3VJ7BL8?page=2&annotation=YII3JIFC)







> **笔记**: #问题/研究现状/Gap



> 36.3% of DLT jobs may experience communication contention with other jobs [p. 2](zotero://open-pdf/library/items/J3VJ7BL8?page=2&annotation=R7RM4QEH)







> **笔记**: #值得学习的写法/写作参考



> We transform the challenge of maximizing GPU utilization, which is an NP-Complete (NPC) problem, into a GPU intensity-aware communication scheduling problem [p. 2](zotero://open-pdf/library/items/J3VJ7BL8?page=2&annotation=9PPEIUEH)







> **笔记**: #贡献/Contribution



> Crux improves GPU utilization by 5% to 23% [p. 2](zotero://open-pdf/library/items/J3VJ7BL8?page=2&annotation=XPP74DGM)







> **笔记**: #值得学习的写法/写作参考



> This section first describes the background of multi-tenant DLT clusters (§2.1). Then, §2.2 shows the popularity of inter-job communication contention in the in-production cluster, illustrating how it degrades GPU utilization and training throughput. §2.3 introduces why using GPU utilization as the goal. §2.4 presents our motivation to design an inter-job communication scheduler. [p. 2](zotero://open-pdf/library/items/J3VJ7BL8?page=2&annotation=83CLEA2Z)







> **笔记**: #重点/感兴趣的地方



> Communication traffic of a DLT job usually needs to traverse NVLinks, PCIe links, and network links. [p. 2](zotero://open-pdf/library/items/J3VJ7BL8?page=2&annotation=BAXXGZ7N)







> **笔记**: #重点/感兴趣的地方



> Figure 4 shows that over 10% of jobs (belonging to GPT variant models) occupy a minimum of 128 GPUs, with the largest job consuming up to 512 GPUs. [p. 2](zotero://open-pdf/library/items/J3VJ7BL8?page=2&annotation=4827H2MU)







> **笔记**: #重点/感兴趣的地方



> the number of concurrent jobs exceeds 30, occupying 1,000+ GPUs. [p. 3](zotero://open-pdf/library/items/J3VJ7BL8?page=3&annotation=UD62IKBZ)







> **笔记**: #问题/研究现状/Gap



> Only a minority of the contention occurs on intra-host PCIe links (as shown in Figure 3(b)), which results from resource fragmentation caused by the job scheduler’s GPU allocation policies. [p. 3](zotero://open-pdf/library/items/J3VJ7BL8?page=3&annotation=CEV58HZD)







> **笔记**: #问题/研究现状/Gap



> Most contention occurs on network forwarding paths (as shown in Figure 3(a)). This is because network switches typically use Equal Cost Multi-Path (ECMP) -based forwarding by default, which inevitably leads to hash collisions and hence network link contention. [p. 3](zotero://open-pdf/library/items/J3VJ7BL8?page=3&annotation=HMMK26AR)







> **笔记**: #实验/Experiment



> As shown in Figure 7, compared with executing GPT alone, when we launch BERT together, GPT’s iteration time increases by 11.0%, from 1.53s to 1.70s during contention. The throughput of GPT and BERT reduces by 9.9% and 7.7%, respectively, which results in 9.5% reduction in GPU utilization. [p. 3](zotero://open-pdf/library/items/J3VJ7BL8?page=3&annotation=HLMS9U9F)







> **笔记**: #值得学习的写法/写作参考



> The overall GPU utilization, therefore, is the most important performance metric for our GPU cluster, which should be optimized. [p. 3](zotero://open-pdf/library/items/J3VJ7BL8?page=3&annotation=2TBNPYVD)







> **笔记**: #重点/感兴趣的地方



> Jobs with higher GPU workload usually have a greater impact on the overall GPU utilization, [p. 4](zotero://open-pdf/library/items/J3VJ7BL8?page=4&annotation=LHCJPPAZ)







> **笔记**: #方法/Method



> and thus should be scheduled with higher priorities. [p. 4](zotero://open-pdf/library/items/J3VJ7BL8?page=4&annotation=2SAUVPD8)







> **笔记**: #值得学习的写法/写作参考



> This section presents our key methodology: maximizing GPU utilization is equivalent to scheduling more data flow of GPU-intensive DLT jobs in the network (§3.1 and §3.2). Based on this methodology, §3.3 presents the Crux’s system overview. [p. 4](zotero://open-pdf/library/items/J3VJ7BL8?page=4&annotation=8EBCMAS2)







> **笔记**: #方法/Method



> Our goal is thus to maximize UT , by carefully scheduling the data flow of each DLT job [p. 4](zotero://open-pdf/library/items/J3VJ7BL8?page=4&annotation=CTBHL99Z)







> **笔记**: #重点/感兴趣的地方



> job j is always able to do Wj computation after t j communication [p. 4](zotero://open-pdf/library/items/J3VJ7BL8?page=4&annotation=U2Y93DZU)







> **笔记**: #重点/感兴趣的地方



> Based on the above, a job with higher GPU intensity is more important in communication scheduling. [p. 5](zotero://open-pdf/library/items/J3VJ7BL8?page=5&annotation=8I6N5CHG)







> **笔记**: #重点/感兴趣的地方



> If we consider the bandwidth of all other links to be infinite, since the bandwidth of the bottleneck link remains unchanged, the communication performance of each job remains the same. [p. 5](zotero://open-pdf/library/items/J3VJ7BL8?page=5&annotation=YGGXY3RR)







> **笔记**: #重点/感兴趣的地方



> prioritize GPU-intensive jobs while making full utilization of the GPU cluster network. [p. 5](zotero://open-pdf/library/items/J3VJ7BL8?page=5&annotation=9P8CHJEC)







> **笔记**: #问题/研究现状/Gap



> Because NICs  and switches support limited priority levels (e.g., no more than 8, which is much less than the number of jobs [p. 5](zotero://open-pdf/library/items/J3VJ7BL8?page=5&annotation=WPJTPLIH)







> **笔记**: #问题/研究现状/Gap



> resulting in multiple jobs being mapped to the same level. This compression unavoidably leads to performance loss. [p. 5](zotero://open-pdf/library/items/J3VJ7BL8?page=5&annotation=FBBE5AVF)







> **笔记**: #重点/感兴趣的地方



> As the number of concurrent jobs increases, hash collision is unavoidable. Consequently, careful path selection becomes critical to mitigate communication contention. [p. 5](zotero://open-pdf/library/items/J3VJ7BL8?page=5&annotation=4XG9Q5UN)







> **笔记**: #贡献/Contribution



> Consequently, the main challenge in path selection is to avoid communication contention between high-intensity jobs. [p. 5](zotero://open-pdf/library/items/J3VJ7BL8?page=5&annotation=ICVD3PN6)







> **笔记**: #重点/感兴趣的地方



> we should always assign high priorities to GPU-intensive jobs [p. 6](zotero://open-pdf/library/items/J3VJ7BL8?page=6&annotation=FJBYCTNS)







> **笔记**: #问题/研究现状/Gap



> lead to uneven network overload in time-dimension [p. 6](zotero://open-pdf/library/items/J3VJ7BL8?page=6&annotation=LGUPLJ2D)







> **笔记**: #问题/研究现状/Gap



> (e.g., sometimes there are multiple jobs contending for the network, and sometimes the network is idle for a while) [p. 6](zotero://open-pdf/library/items/J3VJ7BL8?page=6&annotation=258V75TU)







> **笔记**: #重点/感兴趣的地方



> This is because prioritizing a shorter-iteration job better utilizes the bandwidth to transmit more data, improving overall GPU utilization [p. 6](zotero://open-pdf/library/items/J3VJ7BL8?page=6&annotation=S7J5P79C)







> **笔记**: #重点/感兴趣的地方



> we assume a job starts communication when it finishes 50% computation of one iteration [p. 6](zotero://open-pdf/library/items/J3VJ7BL8?page=6&annotation=NCVHNM8R)







> **笔记**: #重点/感兴趣的地方



> his is because communication in Job 1 can be fully overlapped by its computation [p. 6](zotero://open-pdf/library/items/J3VJ7BL8?page=6&annotation=EVIXDNKG)







> **笔记**: #重点/感兴趣的地方



> Some of these levels are already reserved for dedicated usages (e.g., TCP traffic, instruction transmission, and proactive network diagnosis). [p. 6](zotero://open-pdf/library/items/J3VJ7BL8?page=6&annotation=37PN74Y9)







> **笔记**: #重点/感兴趣的地方



> CD runs as a daemon process, collecting information and making communication scheduling decisions. CT executes the scheduling decisions. [p. 8](zotero://open-pdf/library/items/J3VJ7BL8?page=8&annotation=CUD9QVMM)







> **笔记**: #贡献/Contribution



> Crux only costs <0.01% network bandwidth for these information synchronizations and scheduling decisions. In communication scheduling, Crux requires information [p. 8](zotero://open-pdf/library/items/J3VJ7BL8?page=8&annotation=65IMC9Q4)







> **笔记**: #重点/感兴趣的地方



> source port for each candidate path. To achieve this, we can send probing packets with varied source ports until all candidate paths can be reached. [p. 9](zotero://open-pdf/library/items/J3VJ7BL8?page=9&annotation=LJDFJF5S)







> **笔记**: #值得学习的写法/写作参考



> In this section, we show that:  • In a 96-GPU testbed, Crux improves GPU utilization by up to 14.8%, and reduces up to 33% job completion time (JCT) for GPUintensive jobs.  • In the 2,000-GPU production trace-based simulation, Crux improves GPU utilization by 4% to 23% compared with state-of-thearts under various network architectures.  • As a communication scheduler, Crux is compatible with stateof-the-art job schedulers, and further improves GPU utilization and DLT performance by 11% to 23%. [p. 9](zotero://open-pdf/library/items/J3VJ7BL8?page=9&annotation=C2ESFDDT)







> **笔记**: #实验/Experiment



> overall GPU utilization [p. 10](zotero://open-pdf/library/items/J3VJ7BL8?page=10&annotation=4A8HHERJ)







> **笔记**: #实验/Experiment



> evaluate the end-to-end training performance [p. 10](zotero://open-pdf/library/items/J3VJ7BL8?page=10&annotation=QMXCVGNN)







> **笔记**: #实验/Experiment



> Since GPT is more important than BERT, this reasonable trade-off significantly improves the overall GPU utilization. [p. 10](zotero://open-pdf/library/items/J3VJ7BL8?page=10&annotation=DAQ88QZM)







> **笔记**: #值得学习的写法/写作参考



> Dark color represents the data flow of jobs with higher GPU intensity and light color represents data flow of jobs with low GPU intensity. [p. 10](zotero://open-pdf/library/items/J3VJ7BL8?page=10&annotation=2ANFDA6V)







> **笔记**: #实验/Experiment



> We find that the GPU intensity distribution of Crux-PA has more dark colors, since Crux’s priority assignment (§4.2) tries to prioritize GPUintensive jobs during communication contention. [p. 10](zotero://open-pdf/library/items/J3VJ7BL8?page=10&annotation=9APY6KEW)







> **笔记**: #实验/Experiment



> first day of the trace, the baselines’ data flow distribution is generally in light color, and Crux’s color is much darker, corresponding to 26%, 14%, and 5% average GPU utilization improvement. [p. 11](zotero://open-pdf/library/items/J3VJ7BL8?page=11&annotation=WAV6RFHC)







> **笔记**: #实验/Experiment



> Focusing on the dashed rounded rectangles in Figures 24(d) and 24(e), the increase in the non-white area brings a 97% increase in network utilization. [p. 11](zotero://open-pdf/library/items/J3VJ7BL8?page=11&annotation=FJW85X8B)







> **笔记**: #问题/研究现状/Gap



> there is still a gap between our algorithm (§4) to the optimal [p. 11](zotero://open-pdf/library/items/J3VJ7BL8?page=11&annotation=3INC6JNM)







> **笔记**: #重点/感兴趣的地方



> Jobs with less overlap between computation and communication are usually much more sensitive to communication latency [p. 11](zotero://open-pdf/library/items/J3VJ7BL8?page=11&annotation=FG27JLEV)





%% end annotations %%

%% Import Date: 2025-12-28T13:44:20.670+08:00 %%
