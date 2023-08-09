// 柱状图1模块
(function () {
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
            show: false,
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
            data: ['类型1', '类型2', '类型3', '类型4', '类型5']
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
                    color: function (params) {
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
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
)();

// 折线图1
(function () {
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
            // 离容器右侧位置
            right: '10%',
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
            data: [290, 200, 20, 132, 15, 200, 90]
        },
        /* {
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
            } ]
        }*/]
    }
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
)();

// 饼图
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".pie .chart"));

    var option = {
        // backgroundColor:"#0B1837",
        color: ["#FE5656", "#01E17E", "#3DD1F9", "#FFAD05", "#0033FF", "#FFCCFF"],

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
        }, {
            stack: 'a',
            type: 'pie',
            radius: ['20%', '80%'],
            roseType: 'area',
            zlevel: 10,

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
        },]
    }
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
)();

// 中间容器模块
/* (function() {
   
    var myChart = echarts.init(document.querySelector(".map .chart"));
    function showProvince() {
        var geoCoordMap = {
            '河池': [108.085179,24.700488],
            '柳州': [109.412578,24.354875],
            '梧州': [111.323462,23.478238],
            '南宁': [108.359656,22.81328],
            '北海': [109.171374,21.477419],
            '崇左': [107.347374,22.377503]
        };
        var data = [{
                name: '河池',
                value: 100
            },
            {
                name: '柳州',
                value: 100
            },
            {
                name: '梧州',
                value: 100
            },
            {
                name: '北海',
                value: 100
            },
            {
                name: '崇左',
                value: 100
            }
        ];
        var max = 480,
            min = 9; // todo 
        var maxSize4Pin = 100,
            minSize4Pin = 20;
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        myChart.setOption(
            option = {
            title: {
                text: '设备分布',
                subtext: '',
                x: 'center',
                textStyle: {
                    color: '#FFF'
                },
                // left: '6%',
                // top: '10%'
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1],
                inRange: {}
            },
            geo: {
                show: true,
                map: 'guangxi',
                mapType: 'guangxi',
                label: {
                    normal: {},
                    //鼠标移入后查看效果
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                //鼠标缩放和平移
                roam: true,
                itemStyle: {
                    normal: {
                        //          	color: '#ddd',
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(	47,79,79, .1)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            series: [{
                    name: 'light',
                    type: 'map',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    itemStyle: {
                        normal: {
                            color: '#F4E925'
                        }
                    }
                },
                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin',
                    symbolSize: function (val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return a * val[2] + b;
                    },
                    label: {
                        normal: {
                            // show: true,
                            // textStyle: {
                            //     color: '#fff',
                            //     fontSize: 9,
                            // }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F62157', //标志颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
                {
                    name: 'light',
                    type: 'map',
                    mapType: 'guangxi',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#FFFFFF',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                {
                    name: ' ',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#05C3F9',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    },
                    zlevel: 1
                },

            ]
        });
    }
    showProvince();

    // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
)();
 */
// 柱状图2模块
(function () {

    var parent = document.getElementById('parent');
    var child1 = document.getElementById('child1');
    var child2 = document.getElementById('child2');
    child2.innerHTML = child1.innerHTML;
    setInterval(function () {
        if (parent.scrollTop >= child1.scrollHeight) {
            parent.scrollTop = 0;
        } else {
            parent.scrollTop++;
        }
    }, 20);

}
)();

// 折线图2模块
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line1 .chart"));

    var xData = ['类型1', '类型2', '类型3'];
    var data = [2000, 1800, 2800];
    option = {
        // backgroundColor: 'none',
        grid: {
            top: '15%',
            bottom: '19%',
            left: '12%',
            right: '4%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#FF8736'
                },
            }
        },
        xAxis: {
            boundaryGap: true, // 默认，坐标轴留白策略
            axisLine: { // 坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#85B1B4'
                }
            },
            axisLabel: { // 坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#709FD9',
                    margin: 15
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false,
                alignWithLabel: true
            },
            data: xData
        },
        yAxis: {
            axisLine: {
                show: false,
            },
            axisLabel: { // 坐标轴刻度标签的相关设置
                show: true,
                textStyle: {
                    color: '#709FD9',
                    margin: 15
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        series: [{
            type: 'scatter',
            symbolSize: 10,
            itemStyle: {
                color: '#FF8736'
            },
            silent: true,
            tooltip: {
                show: false
            },
            data: [2000, 1800, 2800, 900, 1600]
        }, {
            type: 'line',
            symbol: 'circle',
            symbolSize: 20,
            symbol: 'path://M488 187.381L242.872 328.906a48 48 0 0 0-24 41.57v283.049a48 48 0 0 0 24 41.569L488 836.619a48 48 0 0 0 48 0l245.128-141.525a48 48 0 0 0 24-41.57V370.476a48 48 0 0 0-24-41.569L536 187.381a48 48 0 0 0-48 0z m32 27.713l245.128 141.525a16 16 0 0 1 8 13.856v283.05a16 16 0 0 1-8 13.856L520 808.906a16 16 0 0 1-16 0L258.872 667.381a16 16 0 0 1-8-13.856v-283.05a16 16 0 0 1 8-13.856L504 215.094a16 16 0 0 1 16 0z',
            lineStyle: {
                color: '#FF8736'
            },
            itemStyle: {
                color: '#FF8736',
                borderWidth: 1,
                borderColor: '#FF8736'
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#fff'
                }
            },

            data: data
        }]
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}

)();

// 饼图2模块
(function () {
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

        color: ['#ff8c00', '#31C5C0'],
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

        tooltip: {},
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
                name: ["异常", "正常"],
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
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}
)();