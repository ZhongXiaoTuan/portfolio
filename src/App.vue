<template>
  <div id="app" class="resume-page">
    <headicon />
    <info-section v-for="(value, key) in data" :title="key" :content="value" :key="key" />
  </div>
</template>

<script>
import axios from 'axios';
import Section from '@/components/Section';
import HeadIcon from '@/components/HeadIcon';

export default {
  name: 'Resume-page',
  components: {
      'info-section': Section,
      'headicon': HeadIcon,
  },
  data() {
      return {
          data: {},
      }
  },
  created() {
      axios.get('/static/resume/resume.json').then(
          res => {
              this.data = res.data;
          },
          err => {},
      );
  },
}
</script>

<style lang="less">
@import url('./asset/style/variables.less');
@import url('./asset/iconfont/iconfont.css');

body {
  margin: 0;
}

* {
  font-weight: 400;
}

.resume-page {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    height: @h;
    justify-content: space-around;
    align-content: center;
    overflow-y: hidden;
}

@media screen and (max-width: @to-2-cols) {
    .resume-page {
        height: @h-2-cols;
    }
}


@media screen and (max-width: @to-1-col) {
    .resume-page {
        height: auto;
    }
}
</style>
