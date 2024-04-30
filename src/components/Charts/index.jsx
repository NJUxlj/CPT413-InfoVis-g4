import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts'
import { Card, Button } from "antd";
import "../../style/table.less";
import rela from "../../assets/mock/relation.json";
const Charts = () => {
  const [chart, setChart] = useState("");

  const option = {
    // backgroundColor: "white",
    title: {
      // text: '',
      textStyle: {
        fontWeight: "lighter",
      }
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    legend: {
      x: "center",
      show: true,
      data: ["贾家荣国府", "贾家宁国府", "王家", "史家", "薛家", "其他", "林家"]
    },
    series: [
      {
        type: 'graph',
        // 随机布局
        layout: 'force',
        // 环形布局
        // layout: 'circular',
        symbolSize: 45,
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 4],
        focusNodeAdjacency: true, // 当选中节点时，高亮显示与该节点相连的连线
        edgeLabel: {
          normal: {
            // 关系文字常亮显示，因为环形图时会出现层叠的情况 没法直接选线
            show: true,
            textStyle: {
              fontSize: 10
            },
            formatter: "{c}"
          }
        },
        force: {
          // 力布局的大小，值越大则节点之间的距离越大
          // 解决没有定位的点如何分布
          repulsion: 2000,
          edgeLength: [10, 100]
        },
        // 拖拽
        // draggable: true,
        roam: true,
        categories: [
          {
            name: '贾家荣国府',
          },
          {
            name: '贾家宁国府',
          },
          {
            name: '王家',
          },
          {
            name: '史家',
          },
          {
            name: '薛家',
          },
          {
            name: '其他',
          },
          {
            name: '林家',
          }
        ],
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12
            },
          }
        },
        tooltip: {
          formatter: function (node) { // 区分连线和节点，节点上额外显示其他数字
            if (!node.value) {
              return node.data.name;
            } else {
              return node.data.name + ":" + node.data.showNum;
            }
          },
        },
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 1,
            curveness: 0.3
          }
        },
        nodes: rela.data.map((node, idx) => {
          node.id = idx;
          return node;
        }),
        links: rela.links,
      }
    ]
  };
  useEffect(() => {
    let node = document.getElementById("chart");
    setChart(node);
  }, []);

  // 初始化
  if (chart !== "") {
    var myChart = echarts.init(chart);
    myChart.resize({ height: "500px" });
    myChart.setOption(option);
  }

  // 切换为圆形布局
  const turnIntoCircle = () => {
    option.series[0].layout = 'circular';
    option.series[0].draggable = false;
    // 节点变小（解决重叠）
    option.series[0].symbolSize = 15;
    myChart.setOption(option);
  }

  // 切换为随机布局
  const turnIntoRandom = () => {
    option.series[0].layout = 'force';
    option.series[0].draggable = false;
    option.series[0].symbolSize = 45;
    myChart.setOption(option);
  }

  // 切换为随机布局并且可拖拽（默认状态）
  // const turnIntoDraggable = () => {
  //   option.series[0].layout = 'force';
  //   option.series[0].draggable = true;
  //   option.series[0].symbolSize = 45;
  //   myChart.setOption(option);
  // }

  return (
    <div>
      <Card bordered={false} title="Dream of the Red Chamber Character Relationship Chart" className="card-item">
        <div id="chart"></div>
        <div className='tab'>
          <Button type='primary' className='btn' onClick={turnIntoCircle}>Circle</Button>
          {/* <Button type='primary' className='btn' onClick={turnIntoDraggable}>Random & Draggable</Button> */}
          <Button type='primary' className='btn' onClick={turnIntoRandom}>Random</Button>
        </div>
      </Card>
    </div>
  );
};

export default Charts