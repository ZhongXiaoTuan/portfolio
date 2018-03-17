<template>
    <div class="home-page">
        <headicon />
        <info-section v-for="(value, key) in data" :title="key" :content="value" :key="key" />
    </div>
</template>

<script>
import axios from 'axios';
import Section from '@/components/Section';
import HeadIcon from '@/components/HeadIcon';

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
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    height: @h;
    // box-shadow: 0 1px 7px #cccc;
    justify-content: space-between;
}
</style>
