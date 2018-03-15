<template>
    <div class="home-page">
        <headicon />
        <info-section 
            v-for="key in Object.keys(data)" 
            :key="key" 
            :title="key"
            :content="data[key]"
        />
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

<style>
.home-page {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 30%;
    height: 1000px;
    align-content: flex-start;
    justify-content: space-around;
}
</style>
