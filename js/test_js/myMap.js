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
          value: 100
      },
      {
          name: '综保',
          value: 100
      },
     
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
                  map: '江苏',
                  mapType: '江苏',
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
              {
                  name: 'light',
                  type: 'map',
                  mapType: 'hunan',
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