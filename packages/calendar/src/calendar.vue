<template>
  <div class="lgsn-calendar">
    <div class="calendar-title">
      <slot name="title"></slot>
    </div>

    <div class="calendar-content">
      <div class="calendar-x" ref="calendarX">
        <ul class="x-axis" :style="{ width: xWidth }">
          <li v-for="(xItem, index) in xData" :key="index">
            <span>{{ xItem.day }}</span>
            <span>{{ xItem.week }}</span>
          </li>
        </ul>
      </div>

      <div class="calendar-y" ref="calendarY" :style="{ height: viewHeight }">
        <div
          class="filming-venue-list"
          v-for="xItem in calData"
          :key="xItem.value"
        >
          <span class="y-axis-text">{{ xItem.label }}</span>
        </div>
      </div>
      <div
        class="calendar-contation"
        @scroll="scrollEvent"
        @mouseenter="showTips"
        @mouseleave="hideTips"
        :style="{ height: viewHeight }"
      >
        <div class="calendar-tips" id="calendarTips">
          <div
            v-if="tipsX"
            class="calendar-tips-x"
            ref="tipsX"
            :style="{ width: `${xData.length * 100}px` }"
          ></div>
          <div
            v-if="tipsY"
            class="calendar-tips-y"
            ref="tipsY"
            :style="{ height: `${calData.length * 60}px` }"
          ></div>
        </div>

        <template>
          <div
            class="calendar-card"
            v-for="mItem in calData"
            :key="mItem.value"
          >
            <ul :style="{ width: 31 * 100 + 'px' }">
              <li
                v-for="card in mItem.children"
                :key="card.value"
                @mouseenter="moveTips"
              >
                <template v-if="$scopedSlots.content">
                  <span class="calendar-contation-text">
                    <slot name="content" v-bind="card"></slot>
                  </span>
                </template>
                <span v-else class="calendar-contation-text">{{
                  card.label
                }}</span>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { getMonth } from 'lgsn-ui/src/utils/date.js';

export default {
  name: 'lgsn-calendar',
  props: {
    height: {
      type: Number,
      default: 400
    },
    calData: {
      type: Array,
      default: []
    },
    tipsX: {
      type: Boolean,
      default: true
    },
    tipsY: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      xData: [],
      contentData: 31
    };
  },
  computed: {
    xWidth() {
      return `${this.xData.length * 100 + 10}px`;
    },
    viewHeight() {
      return `${this.height - 61}px`;
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.xData = getMonth(new Date()).data;
    },
    scrollEvent(e) {
      this.$refs.calendarY.scrollTop = e.target.scrollTop;
      this.$refs.calendarX.scrollLeft = e.target.scrollLeft;
    },
    hideTips() {
      this.tipsX ? (this.$refs.tipsX.style.display = 'none') : '';
      this.tipsY ? (this.$refs.tipsY.style.display = 'none') : '';
    },
    showTips() {
      this.tipsX ? (this.$refs.tipsX.style.display = 'block') : '';
      this.tipsY ? (this.$refs.tipsY.style.display = 'block') : '';
    },
    moveTips(e) {
      this.tipsX
        ? (this.$refs.tipsX.style.top = `${e.target.offsetTop}px`)
        : '';
      this.tipsY
        ? (this.$refs.tipsY.style.left = `${e.target.offsetLeft}px`)
        : '';
    }
  }
};
</script>
