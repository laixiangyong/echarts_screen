// 柱状图1模块
(function() 
{
    // 实例化对象
var myChart = echarts.init(document.querySelector(".bar .chart"));
var colorArray = [
    {
        top: '#ffa800', //黄
        bottom: 'rgba(11,42,84,.3)'
    }, {
        top: '#1ace4a', //绿
        bottom: 'rgba(11,42,84, 0.3)'
    },
    {
        top: '#4bf3ff', //蓝
        bottom: 'rgba(11,42,84,.3)'
    }, {
        top: '#4f9aff', //深蓝
        bottom: 'rgba(11,42,84,.3)'
    },
    {
        top: '#b250ff', //粉
        bottom: 'rgba(11,42,84,.3)'
    }
];
option = {
    // backgroundColor: '#0E2A43',
     tooltip: {
          show: true,
          formatter: "{b}:{c}"
        },
   grid: {
          left: '5%',
          top: '12%',
          right: '1%',
          bottom: '8%',
          containLabel: true
        },
  
    xAxis: {
        type: 'value',
        show:false,
        position: 'top',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

            },
            "splitLine": { //网格线
                "show": false
            },
            inverse: 'true', //排序
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            data: ['first', 'two', 'three', 'four', 'five']
        }

    ],
    series: [{
            name: '能耗值',
            type: 'bar',
                label: {
                normal: {
                  show: true,
                  position: 'right',
                  formatter: '{c}',
                  textStyle: {
                    color: 'white' //color of value
                  }
                }
              },
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],
                            //globalCoord: false
                        }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [60, 132, 89, 134, 60]
        }

    ]
};
// 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
}
)();

// 折线图1
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .chart"));

    var option = {
        // backgroundColor: "#404A59",
        // color: ['#ffd285', '#ff733f', '#ec4863'],
    
        title: [{
            // text: '城市宝周新增用户报表',
            left: '1%',
            top: '6%',
            textStyle: {
                color: '#fff'
            }
        }, {
            // text: '用户来源占比',
            left: '83%',
            top: '6%',
            textAlign: 'center',
            textStyle: {
                color: '#fff'
            }
        }],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // x: 300,
            // top: '7%',
            textStyle: {
                color: '#ffd285',
            },
            data: ['类型1', '类型2', '类型3']
        },
        grid: {
            left: '1%',
            right: '35%',
            top: '16%',
            bottom: '6%',
            containLabel: true
        },
        toolbox: {
            "show": false,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            "axisLine": {
                lineStyle: {
                    color: '#FF4500'
                }
            },
            "axisTick": {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            "axisLine": {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#fff'
                }
            },
            "axisTick": {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            type: 'value'
        },
        series: [{
            name: '类型1',
            smooth: true,
            type: 'line',
            symbolSize: 8,
              symbol: 'circle',
            data: [90, 50, 39, 50, 120, 82, 80]
        }, {
            name: '类型2',
            smooth: true,
            type: 'line',
            symbolSize: 8,
              symbol: 'circle',
            data: [70, 50, 50, 87, 90, 80, 70]
        }, {
            name: '类型3',
            smooth: true,
            type: 'line',
            symbolSize: 8,
              symbol: 'circle',
            data: [290, 200,20, 132, 15, 200, 90]
        }, 
        {
            type: 'pie',
            center: ['83%', '33%'],
            radius: ['25%', '30%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 335,
                name: '用户来源分析',
                itemStyle: {
                    normal: {
                        color: '#ffd285'
                    }
                },
                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            color: '#ffd285',
                            fontSize: 10
    
                        }
                    }
                }
            }, {
                value: 180,
                name: '占位',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#87CEFA'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#ffd285',
                        },
                        formatter: '\n手机号注册'
                    }
                }
            }]
        },
    
    
        {
            type: 'pie',
            center: ['83%', '72%'],
            radius: ['25%', '30%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 435,
                name: '用户来源分析',
                itemStyle: {
                    normal: {
                        color: '#ff733f'
                    }
                },
                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            color: '#ff733f',
                            fontSize: 10
    
                        }
                    }
                }
            }, {
                value: 100,
                name: '占位',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#87CEFA'
    
    
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#FF4500',
                        },
                        formatter: '\n三方快捷登陆'
                    }
                }
            }]
        }]
    }
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
    }
)();

// 饼图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".pie .chart"));

    var option = {
        // backgroundColor:"#0B1837",
        color: [ "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05","#0033FF","#FFCCFF"],
        
        grid: {
            left: -100,
            top: 50,
            bottom: 10,
            right: 10,
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        /* legend: {
            type: "scroll",
            orient: "vartical",
            // x: "right",
            top: "center",
            right: "1",
            // bottom: "0%",
            itemWidth: 10,
            itemHeight: 8,
            itemGap: 16,
            textStyle: {
                color: '#A3E2F4',
                fontSize: 12,
                fontWeight: 0
            },
            data: ['数据1', '数据2', '数据3', '数据4','数据5','数据6']
        }, */
        polar: {},
        angleAxis: {
            interval: 1,
            type: 'category',
            data: [],
            z: 10,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#0B4A6B",
                    width: 1,
                    type: "solid"
                },
            },
            axisLabel: {
                interval: 0,
                show: true,
                color: "#0B4A6B",
                margin: 8,
                fontSize: 16
            },
        },
        radiusAxis: {
            min: 40,
            max: 120,
            interval: 20,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#0B3E5E",
                    width: 1,
                    type: "solid"
                },
            },
            axisLabel: {
                formatter: '{value} %',
                show: false,
                padding: [0, 0, 20, 0],
                color: "#0B3E5E",
                fontSize: 16
            },
            splitLine: {
                lineStyle: {
                    color: "#0B3E5E",
                    width: 2,
                    type: "solid"
                }
            }
        },
        calculable: true,
        series: [{
            type: 'pie',
            radius: ["5%", "10%"],
            hoverAnimation: false,
            
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 30
                },
                emphasis: {
                    show: false
                }
            },
           /*  data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: "#0B4A6B"
                    }
                }
            }] */
        }, {
            type: 'pie',
            radius: ["90%", "95%"],
            hoverAnimation: false,
            name: "",
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: "#0B4A6B"
                    }
                }
            }]
        },{
            stack: 'a',
            type: 'pie',
            radius: ['20%', '80%'],
            roseType: 'area',
            zlevel:10,

            label: {
                normal: {
                    show: true,
                    formatter: "{c}%",
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    },
                    position: 'outside'
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                {
                    value: 25,
                    name: '数据1'
                },
                {
                    value: 20,
                    name: '数据2'
                },
                {
                    value: 15,
                    name: '数据3'
                },
                {
                    value: 15,
                    name: '数据4'
                },
                {
                    value: 10,
                    name: '数据5'
                },
                {
                    value: 15,
                    name: '数据6'
                }
            ]
        }, ]
    }
     // 把配置给实例对象
     myChart.setOption(option);
     window.addEventListener("resize", function() {
         myChart.resize();
     });
}
)();

// 中间容器模块
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".map .chart"));

    var scale = 1;
    var echartData = [{
        value: 800,
        name: '类型1'
    }, {
        value: 900,
        name: '类型2'
    }, {
        value: 170,
        name: '类型3'
    }, {
        value: 900,
        name: '类型4'
    }, {
        value: 100,
        name: '类型5'
    }, {
        value: 1001,
        name: '类型6'
    }, {
        value: 2252,
        name: '类型7'
    }, {
        value: 7738,
        name: '类型8'
    }]
    var rich = {
        yellow: {
            color: "#ffc72b",
            fontSize: 30 * scale,
            padding: [5, 4],
            align: 'center'
        },
        total: {
            color: "#ffc72b",
            fontSize: 40 * scale,
            align: 'center'
        },
        white: {
            color: "#fff",
            align: 'center',
            fontSize: 14 * scale,
            padding: [21, 0]
        },
        blue: {
            color: '#49dff0',
            fontSize: 16 * scale,
            align: 'center'
        },
        hr: {
            borderColor: '#FFFFFF',
            width: '100%',
            borderWidth: 1,
            height: 0,
        }
    }
    option = {
        // backgroundColor: '#141845',
        title: {
            text: '总量',
            left: 'center',
            top: '53%',
            padding: [24, 0],
            textStyle: {
                color: '#fff',
                fontSize: 18 * scale,
                align: 'center'
            }
        },
        legend: {
            selectedMode: false,
            formatter: function(name) {
                var total = 0; //各科正确率总和
                var averagePercent; //综合正确率
                echartData.forEach(function(value, index, array) {
                    total += value.value;
                });
                return '{total|' + total + '}';
            },
            data: [echartData[0].name],
            // data: ['高等教育学'],
            // itemGap: 50,
            left: 'center',
            top: 'center',
            icon: 'none',
            align: 'center',
            textStyle: {
                color: "#fff",
                fontSize: 16 * scale,
                rich: rich
            },
        },
        series: [{
            name: '总量',
            type: 'pie',
            roseType: 'area',
            radius: ['42%', '50%'],
            hoverAnimation: false,
            color: ['#c487ee', '#deb140', '#49dff0', 'CC66FF', '#6f81da', '#00ffb4'],
            label: {
                normal: {
                    formatter: function(params, ticket, callback) {
                        var total = 0; //考生总数量
                        var percent = 0; //考生占比
                        echartData.forEach(function(value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                    },
                    rich: rich
                },
            },
            labelLine: {
                normal: {
                    length: 55 * scale,
                    length2: 0,
                    lineStyle: {
                        color: '#FFFFFF'
                    }
                }
            },
            data: echartData
        }]
    };
    
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}
)();

// 柱状图2模块
(function() {
    
   // 实例化对象
   var myChart = echarts.init(document.querySelector(".bar1 .chart"));

   option = {
       // backgroundColor: '#0E2A43',
       title: {
           // text: "是否会跟风闯红灯",
           textStyle: {
               color: '#00FFFF',
               fontSize: 24
           }
       },
       legend: {
           // bottom: 20,
           textStyle: {
               color: '#fff',
           },
           data: ['类型1', '类型2']
       },
       grid: {
           left: '3%',
           right: '4%',
           bottom: '5%',
           containLabel: true
       },
   
       tooltip: {
           show: "true",
           trigger: 'axis',
           axisPointer: { // 坐标轴指示器，坐标轴触发有效
               type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
           }
       },
       yAxis: {
           type: 'value',
           axisTick: {
               show: false
           },
           axisLine: {
               show: false,
               lineStyle: {
                   color: '#fff',
               }
           },
           splitLine: {
               show: true,
               lineStyle: {
                   color: '#aaa',
               }
           },
       },
       xAxis: [{
               type: 'category',
               axisTick: {
                   show: false
               },
               axisLine: {
                   show: true,
                   lineStyle: {
                       color: '#fff',
                   }
               },
               data: ['数据1', '数据2', '数据3']
           }, {
               type: 'category',
               axisLine: {
                   show: false
               },
               axisTick: {
                   show: false
               },
               axisLabel: {
                   show: false
               },
               splitArea: {
                   show: false
               },
               splitLine: {
                   show: false
               },
               data: ['数据1', '数据2', '数据3']
           },
   
       ],
       series: [{
               name: '总人数',
               type: 'bar',
               xAxisIndex: 1,
   
               itemStyle: {
                   normal: {
                       show: true,
                       color: '#277ace',
                       barBorderRadius: 50,
                       borderWidth: 0,
                       borderColor: '#333',
                   }
               },
               barWidth: '20%',
               data: [33, 33, 33]
           }, {
               name: '总人数',
               type: 'bar',
               xAxisIndex: 1,
   
               itemStyle: {
                   normal: {
                       show: true,
                       color: '#277ace',
                       barBorderRadius: 50,
                       borderWidth: 0,
                       borderColor: '#333',
                   }
               },
               barWidth: '20%',
               barGap: '100%',
               data: [51, 51, 51]
           }, {
               name: '类型1',
               type: 'bar',
               itemStyle: {
                   normal: {
                       show: true,
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#00FFE6'
                       }, {
                           offset: 1,
                           color: '#007CC6'
                       }]),
                       barBorderRadius: 50,
                       borderWidth: 0,
                       borderColor: '#333',
                   }
               },
               label: {
                   normal: {
                       show: true,
                       position: 'top',
                       textStyle: {
                           color: '#fff'
                       }
                   }
               },
               barWidth: '20%',
               data: [8, 15, 10]
           }, {
               name: '类型2',
               type: 'bar',
               barWidth: '20%',
               itemStyle: {
                   normal: {
                       show: true,
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#3023AE'
                       }, {
                           offset: 1,
                           color: '#C96DD8'
                       }]),
                       barBorderRadius: 50,
                       borderWidth: 0,
                       borderColor: '#333',
                   }
               },
               label: {
                   normal: {
                       show: true,
                       position: 'top',
                       textStyle: {
                           color: '#fff'
                       }
                   }
               },
               barGap: '100%',
               data: [8, 17, 26]
           }
   
       ]
   };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

}
)();

// 折线图2模块
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line1 .chart"));

    var option = {
        // backgroundColor: '#2c343c',
        grid: {
           top: 40,
           right: 20,
           bottom: 21,
           left: 22,
           containLabel: true
        },
        xAxis: {
           axisLabel: {
              color: '#ffffff'
           },
           axisTick: {
              show: false
           },
           axisLine: {
              lineStyle: {
                 color: 'rgba(42, 236, 255, 0.44)',
                 width: 1.5
              }
           },
           data: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
        },
        yAxis: {
           type: 'value',
           splitNumber: 4,
           axisLabel: {
              color: '#ffffff'
           },
           axisTick: {
              show: false
           },
           axisLine: {
              show: true,
              lineStyle: {
                 color: 'rgba(42, 236, 255, 0.44)',
                 width: 1.5
              }
           },
           splitLine: {
              lineStyle: {
                 color: 'rgba(17,110,129,0.36)',
                 type: 'dashed'
              }
           }
        },
        series: [
           {
              data: [0, 0, 9, 56, 30, 40, 60, 42, 80, 32, 50, 10],
              type: 'line',
              symbol: 'none',
              lineStyle: {
                 color: '#ffd918'
              },
              areaStyle: {
                 color: {
                    type: 'linear',
                    x: 0,
                    y: -0.2,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                       {
                          offset: 0,
                          color: 'rgba(255, 230, 0, 0.54)'
                       },
                       {
                          offset: 1,
                          color: 'rgba(255, 230, 0, 0)'
                       }
                    ]
                 }
              }
           }
        ]
     }     
     
     // 把配置给实例对象
     myChart.setOption(option);
     window.addEventListener("resize", function() {
         myChart.resize();
     });

    }

)();

// 饼图2模块
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".pie1 .chart"));

    var data = [{
        "name": "异常",
        "value": 20
    }, {
        "name": "正常",
        "value": 80
    }]
   
   
    option = {
   
        color: ['#FF0000', '#31C5C0'],
        // backgroundColor: '#000',
        /* title: {
            text: '总数',
            subtext: 7789,
            textStyle: {
                color: '#f2f2f2',
                fontSize: 10,
                // align: 'center'
            },
            subtextStyle: {
                fontSize: 10,
                color: ['#ff9d19']
            },
            x: 'center',
            y: 'center',
        }, */

        tooltip:{},
        grid: {
            bottom: 150,
            left: 100,
            right: '10%'
        },
        legend: {
            orient: 'vertical',
            top: "middle",
            right: "5%",
            textStyle: {
                color: '#f2f2f2',
                fontSize: 10,
   
            },
            icon: 'roundRect',
            data: data,
        },
        series: [
            // 主要展示层的
            {
                radius: ['30%', '61%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    // 设置百分比
                    normal: {
                        show: true,
                        formatter: "{c}%",
                        textStyle: {
                            fontSize: 12,
                            color: '#fff'
                        },
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: true
                    }
                },
                name: ["异常","正常"],
                data: data,
   
            },
            // 边框的设置
            {
                radius: ['30%', '34%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                
                data: [{
                    value: 1,
                    itemStyle: {
                        color: "rgba(250,250,250,0.3)",
                    },
                }],
            }, {
                name: '外边框',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                center: ['50%', '50%'],
                radius: ['65%', '65%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 9,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#0b5263'
                        }
                    }
                }]
            },
        ]
    };

     // 把配置给实例对象
     myChart.setOption(option);
     window.addEventListener("resize", function() {
         myChart.resize();
     });

}
)();