---
type: paper

title: "Scalable Fully Pipelined Hardware Architecture for In-Network Aggregated AllReduce Communication"

publicationTitle: "IEEE Transactions on Circuits and Systems I: Regular Papers"
venueTag: "Trans"

year: "2021"
doi: "10.1109/TCSI.2021.3098841"

authors:
  - "Yao Liu"

topics: ["reading"]
tags: ["reading"]

status: "未读"
readingStage: "未读"
recommendation: "中"
coreValue: ""
bestToLearn: ""

zoteroLink: "zotero://select/library/items/MFMTVFRA"
notelink: ""
---

# Scalable Fully Pipelined Hardware Architecture for In-Network Aggregated AllReduce Communication

## 一句话总结
oneSentence:: 

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
- **DOI**: [10.1109/TCSI.2021.3098841](https://doi.org/10.1109/TCSI.2021.3098841)
- **期刊/会议**: IEEE Transactions on Circuits and Systems I: Regular Papers
- **Zotero Link**: [Open in Zotero](zotero://select/library/items/MFMTVFRA)
- **PDF Link**: [Open PDF](file:///G:\research\zotero_storage\storage\QR4KNIYY\Liu%20等%20-%202021%20-%20Scalable%20Fully%20Pipelined%20Hardware%20Architecture%20for%20In-Network%20Aggregated%20AllReduce%20Communication.pdffile:///G:\research\zotero_storage\storage\KAZ68G67\Scalable_Fully_Pipelined_Hardware_Architecture_for_In-Network_Aggregated_AllReduce_Communication.pdf)

---

## Zotero 注释导入

%% begin annotations %%



### 新导入的注释 (2025-12-28 13:23)

  







> **笔记**: #问题/研究现状/Gap



> However, only about half of the maximum bandwidth can be achieved in the optimal condition. [p. 4194](zotero://open-pdf/library/items/QR4KNIYY?page=4194&annotation=TCQGY2IH)







> **笔记**: #重点/感兴趣的地方



> a Xilinx Ultrascale FPGA that connects to 8 working servers with 10 Gb/s network adapters, and it is able to scale to more complicated scenarios involving more workers. [p. 4194](zotero://open-pdf/library/items/QR4KNIYY?page=4194&annotation=XD56P6NP)







> **笔记**: #重点/感兴趣的地方



> he expense on AllReduce communication may even dominate the whole train process in typical tasks [p. 4194](zotero://open-pdf/library/items/QR4KNIYY?page=4194&annotation=BEB35REY)







> **笔记**: #问题/研究现状/Gap



> The architecture of iSwitch cannot avoid the bandwidth loss; [p. 4195](zotero://open-pdf/library/items/QR4KNIYY?page=4195&annotation=2P3AC66M)







> **笔记**: #问题/研究现状/Gap



> SwitchML cannot be fully customized due to the dependence on the programmable switch chip; NetReduce suffers the scalability problem that requires both the commodity network switch and the FPGA. [p. 4195](zotero://open-pdf/library/items/QR4KNIYY?page=4195&annotation=I94SIG59)







> **笔记**: #重点/感兴趣的地方



> Frames not for aggregations are directly forwarded to the target port according to the destination Media Access Control (MAC) address [p. 4195](zotero://open-pdf/library/items/QR4KNIYY?page=4195&annotation=ZZDVQ7XC)







> **笔记**: #重点/感兴趣的地方



> is divided into 4 stages, which are separated by First-In-First-Outs (FIFOs). [p. 4195](zotero://open-pdf/library/items/QR4KNIYY?page=4195&annotation=QRN9AY6X)







> **笔记**: #重点/感兴趣的地方



> The efficient bandwidth in typical node is defined by dividing the AllReduce data size with the time consumption. [p. 4195](zotero://open-pdf/library/items/QR4KNIYY?page=4195&annotation=JTDBDBJF)







> **笔记**: #重点/感兴趣的地方



> For the inter-machine connection, network communication via Network Interface Controllers (NICs) is usually employed [p. 4195](zotero://open-pdf/library/items/QR4KNIYY?page=4195&annotation=DJ7A9CIP)







> **笔记**: #重点/感兴趣的地方



> Tree topology is optimal only if the bandwidth of the internal node is larger than the sum of bandwidth of its child nodes, which is known as the fat-tree topology [p. 4196](zotero://open-pdf/library/items/QR4KNIYY?page=4196&annotation=DM4BIP9Q)







> **笔记**: #重点/感兴趣的地方



> The propagation delay of AllReduce communication in this tree is 2 logm nτ , and the bandwidth is B  2 , because the All-Reduce communication consists of aggregation and broadcast. [p. 4196](zotero://open-pdf/library/items/QR4KNIYY?page=4196&annotation=9E9JJN3B)







> **笔记**: #重点/感兴趣的地方



> The working node unidirectionally sends messages to its successive node [p. 4196](zotero://open-pdf/library/items/QR4KNIYY?page=4196&annotation=E2923TXU)







> **笔记**: #重点/感兴趣的地方



> 4 parameter sets are in the aggregation process at the same time, and the propagation times for each parameter set is 6. [p. 4196](zotero://open-pdf/library/items/QR4KNIYY?page=4196&annotation=VU75R5KV)







> **笔记**: #问题/研究现状/Gap



> the slowest node restricts the efficient bandwidth of communication. The efficient bandwidth of Ring-AllReduce communication is nBmin  2(n−1) . [p. 4196](zotero://open-pdf/library/items/QR4KNIYY?page=4196&annotation=V9Z8F7XV)







> **笔记**: #重点/感兴趣的地方



> A network switch is typically employed to support the inter-machine connection [24], as shown in Fig. 4(a), although the switch is not regarded as a communication node in the topology. [p. 4196](zotero://open-pdf/library/items/QR4KNIYY?page=4196&annotation=8JRR4G5Q)







> **笔记**: #问题/研究现状/Gap



> Since UDP does not aim for high-performance applications, iSwitch suffers several drawbacks, such as: a) CPU is involved in the data offloading; b) complex mechanisms like congestion control are not supported. [p. 4197](zotero://open-pdf/library/items/QR4KNIYY?page=4197&annotation=IBNQFULA)







> **笔记**: #问题/研究现状/Gap



> SwitchML extends the UDP protocol with the retransmission feature that needs the data caching from the worker, which introduces extra latency. [p. 4197](zotero://open-pdf/library/items/QR4KNIYY?page=4197&annotation=3J3ZVKYI)







> **笔记**: #问题/研究现状/Gap



> The hardware drawback of NetReduce is that the forwarding and aggregation flows are separately processed in a network switch and an FPGA, which restricts the scalability. [p. 4197](zotero://open-pdf/library/items/QR4KNIYY?page=4197&annotation=CDTCCDGW)







> **笔记**: #重点/感兴趣的地方



> The switch not only aggregates the aggregation frames, but also forwards other types of frames according to the destination MAC address. [p. 4198](zotero://open-pdf/library/items/QR4KNIYY?page=4198&annotation=LLJCA2PK)







> **笔记**: #重点/感兴趣的地方



> In AllReduce-Switch, the in-network aggregation supports OpCodes of “Write First”, “Write Middle”, “Write Last” and “Write Last with Immediate”. [p. 4198](zotero://open-pdf/library/items/QR4KNIYY?page=4198&annotation=L3WSHI3J)







> **笔记**: #重点/感兴趣的地方



> In the same flow, QP maintains the same [p. 4198](zotero://open-pdf/library/items/QR4KNIYY?page=4198&annotation=ID4RPB9H)







> Instead, the worker only needs to send the previous aggregation frame; [p. 4198](zotero://open-pdf/library/items/QR4KNIYY?page=4198&annotation=UBIDJK3T)







> **笔记**: #重点/感兴趣的地方



> Apparently, the processing throughput must be higher than the sum of the bandwidth of all the data flows, so that timing convergence becomes the most crucial problem in the implementation. [p. 4198](zotero://open-pdf/library/items/QR4KNIYY?page=4198&annotation=86ICSBHA)


![[image-6-x36-y276.png]]





> **笔记**: #问题：重点，分析了Netreduce和当前硬件实现的问题所在



>  [p. 4199](zotero://open-pdf/library/items/QR4KNIYY?page=4199&annotation=5VQBAINH)







> **笔记**: #问题/研究现状/Gap



> NetReduce raises harsh requirements on the memory size and speed [p. 4199](zotero://open-pdf/library/items/QR4KNIYY?page=4199&annotation=9RMGXG4H)







> **笔记**: #问题/研究现状/Gap



> the memory usage will still be the bottleneck when the port number increases [p. 4199](zotero://open-pdf/library/items/QR4KNIYY?page=4199&annotation=BRQ6WVM4)







> **笔记**: #问题/研究现状/Gap



> When the memory utilization increases, the congestion is unavoidable. In this case, some critical paths with long delay may appear, which significantly reduces the maximum operation frequency. [p. 4199](zotero://open-pdf/library/items/QR4KNIYY?page=4199&annotation=DBE973S3)







> **笔记**: #方法/Method



> The blue arrow shows the forwarding data flow, and the red arrow shows the aggregation data flow. [p. 4199](zotero://open-pdf/library/items/QR4KNIYY?page=4199&annotation=GCUNYGGX)







> **笔记**: #重点/感兴趣的地方



> TKeep is 8’h03 in the last clock cycle, which means the lower 2 bytes are valid in TData. [p. 4200](zotero://open-pdf/library/items/QR4KNIYY?page=4200&annotation=Z9CTD4I5)







> **笔记**: #重点/感兴趣的地方



> and the 32-bit floating point addition is used during the aggregation process. [p. 4204](zotero://open-pdf/library/items/QR4KNIYY?page=4204&annotation=EB2WPUVZ)





%% end annotations %%

%% Import Date: 2026-04-01T21:13:00.459+08:00 %%
