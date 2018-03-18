<template>
    <div class="home-page">
        <headicon />
        <info-section v-for="(value, key) in data" :title="key" :content="value" :key="key" />
    </div>
</template>

<script>
import axios from 'axios';
import Section from '@/components/resume/Section';
import HeadIcon from '@/components/resume/HeadIcon';

export default {
    name: 'resume',
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
        axios.get('/static/data.json').then(
            res => {
                this.data = res.data;
            },
            err => {},
        );
    },
}
</script>

<style lang="less">
@import url(../asset/style/variables.less);

.home-page {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    height: @h;
    // box-shadow: 0 1px 7px #cccc;
    justify-content: space-around;
    align-content: center;
    overflow-y: hidden;
    // margin-top: 5vh;
}

@media screen and (max-width: @to-2-cols) {
    .home-page {
        height: @h-2-cols;
    }
}


@media screen and (max-width: @to-1-col) {
    .home-page {
        height: auto;
    }
}
</style>
