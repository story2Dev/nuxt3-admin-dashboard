<template>
  <div ref="lineRef" class="h-full w-full" />
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { type ECOption, useEcharts } from '~/hooks';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const lineOptions = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['Quotes', 'Invoices'],
  },
  grid: {
    left: '1%',
    right: '2%',
    bottom: '3%',
    top: '5%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: months,
      axisLine: { show: false },
      // axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
    },
  ],

  yAxis: [
    {
      type: 'value',
      axisLine: { show: false },
      // axisLabel: { show: false },
      axisTick: {
        show: false,
      },
      splitLine: {
        // show: false,
        lineStyle: {
          color: '#eee',
        },
      },
    },
  ],
  series: [
    {
      color: 'rgba(134,92,225,1)',
      name: 'Quotes',
      type: 'line',
      smooth: true,
      stack: 'Total',
      symbolSize: 10,
      // showSymbol: false,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(134,92,225,0.4)',
            },
            {
              offset: 1,
              color: 'rgba(134,92,225,0.0001)',
            },
          ],
        },
      },
      lineStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 10,
        shadowColor: 'rgba(134,92,225,0.9)',
        width: 3.5,
      },
      itemStyle: {
        color: 'rgba(134,92,225,0.9)',
        // borderColor: '#000',
        // borderWidth: 4,
        borderCap: 'round',
        borderType: 'solid',
      },
      emphasis: {
        focus: 'series',
      },

      data: [
        4623, 6145, 6268, 6411, 1890, 4251, 2978, 3880, 3606, 4311, 6411, 1890,
      ],
    },
  ],
}) as Ref<ECOption>;
const { domRef: lineRef } = useEcharts(lineOptions);
</script>
