<template>
  <div ref="pieRef" class="h-full w-full" />
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { type ECOption, useEcharts } from '~/hooks';

const options = ref({
  //   title: {
  //     text: 'Quotation by category',
  //     left: 'center'
  //   },
  color: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#00D9E9'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
    show: false,
  },
  legend: {
    // orient: 'vertical',
    // left: 'right',
    top: 'bottom',
    data: ['Product', 'Service', 'Construction', 'Equipment', 'IT', 'Other'],
    itemWidth: 14,
    itemStyle: {
      shadowBlur: 6,
      shadowOffsetX: 0,
      shadowOffsetY: 2,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      fontSize: 18,
    },
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: ['30%', '50%'],
      center: ['50%', '50%'],
      //   roseType: 'area',
      avoidLabelOverlap: false,
      data: [
        { value: Math.floor(Math.random() * 1000), name: 'Product' },
        { value: Math.floor(Math.random() * 1000), name: 'Service' },
        { value: Math.floor(Math.random() * 1000), name: 'Construction' },
        { value: Math.floor(Math.random() * 1000), name: 'Equipment' },
        { value: Math.floor(Math.random() * 1000), name: 'IT' },
        { value: Math.floor(Math.random() * 1000), name: 'Other' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        label: {
          show: true,
          fontSize: 16,
          fontWeight: 'bold',
          formatter: '{b} \n{c} ({d}%)',
        },
      },
      label: {
        show: false,
        position: 'center',
      },
      labelLine: {
        show: false,
      },
      itemStyle: {
        shadowBlur: 6,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
      },
    },
  ],
}) as Ref<ECOption>;

const { domRef: pieRef } = useEcharts(options);
</script>

<style lang="scss" scoped></style>
