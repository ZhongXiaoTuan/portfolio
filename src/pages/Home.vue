<template>
    <div class="home-page">
        <div class="col col-1">
            <headicon />
            <info-section :title="keys[0]" :content="data[keys[0]]" /> 
            <info-section :title="keys[1]" :content="data[keys[1]]" /> 
        </div>
        <div class="col col-2">
            <info-section :title="keys[2]" :content="data[keys[2]]" /> 
            <info-section :title="keys[4]" :content="data[keys[4]]" /> 
        </div>
        <div class="col col-3">
            <info-section :title="keys[3]" :content="data[keys[3]]" /> 
            <info-section :title="keys[5]" :content="data[keys[5]]" /> 
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Section from '@/components/Section';
import HeadIcon from '@/components/HeadIcon';

export default {
    name: 'home',
    components: {
        'info-section': Section,
        'headicon': HeadIcon,
    },
    data() {
        return {
            data: {},
        }
    },
    computed: {
        keys() {
            return Object.keys(this.data);
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
.home-page {
    @w1: 28%;
    @w2: 42%;
    @w3: 40%;
    display: flex;
    padding: 0 100px 0 50px;
    margin: auto;
    width: 1440px;
    height: 900px;
    box-shadow: 0 1px 7px #cccc;
    .col {
        display: flex;
        flex-direction: column;
        padding: 20px;
        justify-content: space-between;
    }
    .col-1 {
        width: @w1;
    }
    .col-2 {
        width: @w2;
    }
    .col-3 {
        width: @w3;
    }
}
</style>
