(function () {

    var myChart = echarts.init(document.querySelector(".map .chart"));
    // echarts.registerMap('jiangsu',geo.data.data)
    function showProvince() {
        var geoCoordMap = {
            '巴城': [120.879060, 31.456180],
            '综保': [120.951940, 31.408630],

        };
        var data = [{
            name: '巴城',
            value: 150
        },
        {
            name: '综保',
            value: 150
        },

        ];
        var max = 480,
            min = 9; // todo 
        var maxSize4Pin = 100,
            minSize4Pin = 20;
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];//[120.879060, 31.456180]
                if (geoCoord) {
                    res.push({
                        name: data[i].name,//巴城
                        value: geoCoord.concat(data[i].value)//[120.879060, 31.456180,100]
                    });
                }
            }
            return res;
        };

        $.get('../json/320583.json', function (kunJson) {
            echarts.registerMap('昆山', kunJson);
            myChart.setOption(
                option = {
                    title: {
                        text: '立臻厂区',
                        subtext: '',
                        x: 'center',
                        top: 15,
                        textStyle: {
                            color: '#FFF'
                        },
                        // left: '6%',
                        // top: '10%'
                    },
                   /*  tooltip: {
                        trigger: 'item',
                        alwaysShowContent: true,
                        formatter: function (params) {
                            var res = `
                              <div>
                                <div
                                  style='display: inline-block;
                                  width:  10px;
                                  height: 20px;
                                  color: ${params.color}'
                                  >●</div>
                                <span>${'时间：2023-03-01 16:57:07'}</span>
                              </div>
                              <div>
                                <div
                                  style='display: inline-block;
                                  width: 10px;
                                  height: 20px;
                                  color: ${params.color}'
                                >●</div>
                                <span>${'成功率：10.00%'}</span>
                              </div>
                              <div>
                                <div
                                  style='display: inline-block;
                                  width: 10px;
                                  height: 20px;
                                  color: ${params.color}'
                                >●</div>
                                <span>${'订单总数量：0'}</span>
                              </div>
                              <div>
                                <div
                                  style='display: inline-block;
                                  width: 10px;
                                  height: 20px;
                                  color: ${params.color}'
                                >●</div>
                                <span>${'订单成功数量：0'}</span>
                              </div>
                            `
                            return params.name + res
                        }
                    }, */
                    // legend: {
                    //     orient: 'vertical',
                    //     y: 'bottom',
                    //     x: 'right',
                    //     data: ['pm2.5'],
                    //     textStyle: {
                    //         color: '#fff'
                    //     }
                    // },
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
                        map: '昆山',
                        // center:[120.951940, 31.408630],
                        zoom: 1.25,
                        label: {
                            show: true,
                            normal: {},
                            //鼠标移入后查看效果
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },

                        roam: true, //鼠标缩放和平移
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
                    series: [
                        {
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
                        // 红色标点
                       /*  {
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
                                    //   show: true,
                                    //   textStyle: {
                                    //       color: '#fff',
                                    //       fontSize: 9,
                                    //   }
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
                        // 打点点位 */
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
                            //   设置提示框组件

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
                                    // shadowColor: '#05C3F9'
                                }
                            },
                            zlevel: 1,

                            /* tooltip: {
                                trigger:'item',
                                alwaysShowContent:true,
                                formatter: function(params) {
                                    var res = `
                                      <div>
                                        <div
                                          style='display: inline-block;
                                          width:  10px;
                                          height: 20px;
                                          color: ${params.color}'
                                          >●</div>
                                        <span>${'时间：2023-03-01 16:57:07'}</span>
                                      </div>
                                      <div>
                                        <div
                                          style='display: inline-block;
                                          width: 10px;
                                          height: 20px;
                                          color: ${params.color}'
                                        >●</div>
                                        <span>${'成功率：10.00%'}</span>
                                      </div>
                                      <div>
                                        <div
                                          style='display: inline-block;
                                          width: 10px;
                                          height: 20px;
                                          color: ${params.color}'
                                        >●</div>
                                        <span>${'订单总数量：0'}</span>
                                      </div>
                                      <div>
                                        <div
                                          style='display: inline-block;
                                          width: 10px;
                                          height: 20px;
                                          color: ${params.color}'
                                        >●</div>
                                        <span>${'订单成功数量：0'}</span>
                                      </div>
                                    `
                                    return params.name + res
                                  }
                            }, */
                        },
                        {
                            type: 'lines',
                            symbol: 'none',
                            color: '#ff8003',
                            // opactity: 1,
                            label: {
                                show: true,
                                // padding: [40, 60],
                                color: '#fff',
                                backgroundColor: '#eee',
                                // opacity: 0.5,
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#fff',
                                rich: {
                                    title: {
                                        color: '#eee',
                                        align: 'center',
                                        // width:'100%'
                                    },
                                    abg: {
                                        backgroundColor: '#333',
                                        width: '100%',
                                        align: 'right',
                                        height: 25,
                                        borderRadius: [4, 4, 0, 0]
                                    },
                                    typeHead: {
                                        color: '#fff',
                                        // 文字内边距上右下左
                                        padding: [5, 40, 5, 10],
                                        // top:10,
                                        height: 20,
                                        align: 'left',
                                    },
                                    valueHead: {
                                        color: '#fff',
                                        // 文字内边距上右下左
                                        padding: [5, 10, 5, 0],
                                        // top:10,
                                        height: 20,
                                        align: 'left',
                                    },

                                }

                            },
                            lineStyle: {
                                type: 'solid',
                                // 透明度
                                opacity: 0.6,
                                // 引导线颜色
                                color: '#fff',
                            },
                            data: [
                                {
                                    name: '巴城',
                                    value: '巴城',
                                    coords: [[120.879060, 31.456180], [120.822020, 31.432140]],
                                    label: {

                                        formatter: [
                                            '{title|{b}}{abg|}',
                                            '  {typeHead|类型}{valueHead|数据}',
                                        ].join('\n'),
                                    },

                                },
                                {
                                    name: '综保',
                                    value: '综保',
                                    coords: [[120.951940, 31.408630], [121.041940, 31.408630]],
                                    label: {
                                        formatter: [
                                            '{title|{b}}{abg|}',
                                            '  {typeHead|类型}{valueHead|数据}',
                                        ].join('\n'),
                                       
                                    },
                                },
                            ]
                        }
                        /* {
                            type:'lines', 
                            color:'#fff',
                            symbol:'circle',
                            symbolSize:[6,3],
                            data: [{
                                name: '巴城',
                                value: 150
                            },
                            {
                                name: '综保',
                                value: 150
                            },
                    
                            ],
                            label: {
                                formatter: '{b}',
                                show: true,
                                fontSize:16,
                                fontWeight: 'bold',
                                backgroundColor:'#fff',
                                padding: 6,
                            },
                            lineStyle:{
                                type:'solid',
                                color:'#fff',
                                backgroundColor:'#fff'
                            },
                        } */

                    ]
                });
        })

    }
    showProvince();

    // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}
)();