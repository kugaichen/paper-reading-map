---
type: paper
title: "BBQ: A Fast and Scalable Integer Priority Queue for Hardware Packet Scheduling"
publicationTitle: "#NSDI"
year: 2024
doi: "没有值"
authors:
  - Nirav Atre
topics:
  - 硬件实现
  - FPGA
  - 优先级队列
tags:
  - 硬件实现
  - FPGA
  - 优先级队列
status: "#已读 #已精读 #评估未读"
zoteroLink: "zotero://select/library/items/BNQ9E5GD"
created: "Error: format can only be applied to dates. Tried for format object"
notelink: "BBQ2024Hugo.canvas"
---

## 一句话总结

oneSentence:: 考虑了网络中的包优先级出包问题，针对网络包做了 fpga 流水化实现，针对其中的数据/控制输出做了针对性的常规化处理（这里我认为出来后点不高），针对高优先级包进入流水线因为深度带来的延迟出包问题引入了 FIFO，这个设计我认为不错；精读笔记：BBQ2024Hugo.canvas

---

## 表格关键字段

优点 (Pros):
- pros:: 1. 做了硬件设计分析和实现；2. 针对 fpga 流水线中数据/控制冲突采用了预测/图着色设计，解决问题；3. 针对流水线深度过深可能造成的优先级存取误差的问题，设计了 FIFO 在流水线之前保证最高优先级在 cache 中会被最先取出；4. 网络和 IC 设计的结合，写法可以借鉴。

缺点 (Cons):
- cons:: 1. 感觉设计都是硬件中的常规设计，虽然问题是 fpga 流水线中的通病问题；2. 在图着色处理前后时候的 dequeue 出最高优先级的时候 tail/head 的变化不会造成优先级出顺序出错吗？还是说不用考虑相同优先级下的出顺序；3. 对于设计中的分层思想对检测冲突的意义我还没 get 到，感觉是为了写 paper 才写上去的。

感想 (Thoughts):
- thoughts:: 网络和 IC 设计的结合考虑，但是设计我认为不出挑，paper 的写法很好，可能唯一出彩的地方就是针对流水线过深加入 FIFO 来保证最高优先级输出的问题（考虑的是特殊情况，但是做了设计了解决），这个思路很好。
