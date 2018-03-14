<template>
    <div class="section">
        <div class="header">
            <h3 class="title">
                <i class="iconfont icon" :class="`icon-${iconClass}`"></i>
                <span class="text">{{title}}</span>
            </h3>
            <div class="line"></div>
        </div>
        <div class="content-list" v-if="isArray">
        </div>
        <div class="content-keys" v-else>
            <dl class="item" v-for="(value, key) in content" :key="key">
                <dt class="key">{{key}}</dt>
                <dd class="value" v-html="value"></dd>
            </dl>
        </div>
    </div>
</template>

<script>
import iconMap from '@/asset/iconfont/icon.map.js';

export default {
    name: 'info-section',
    props: ['title', 'content'],
    data() {
        return {
        };
    },
    computed: {
        iconClass() {
            return iconMap.get(this.title);
        },
        isArray() {
            return Array.isArray(this.content);
        }
    }
}
</script>

<style lang="less" scoped>
@color: #0171BB;
.section {
    width: 30%;
    padding: 10px 20px;
    .header {
        display: flex;
        color: @color;
        align-items: center;
    }
    .title {
        @size: 32px;
        @bd-inner: 2px;
        @bd-outter: 1px;
        letter-spacing: .1em;
        line-height: @size + 2 * @bd-inner;
        margin: 0;
        .icon {
            box-sizing: border-box;
            display: inline-block;
            font-size: @size;
            width: @size + 2 * @bd-inner + 2 * @bd-outter;
            height: @size + 2 * @bd-inner + 2 * @bd-outter;
            border: @bd-outter solid @color;
            border-radius: 50%;
            text-indent: @bd-inner;
            margin-right: 3px;
        }
        .text {
            display: inline-block;
            position: relative;
            font-size: 18px;
            top: -5px;
        }
    }
    .line {
        margin-left: 15px;
        flex-grow: 1;
        height: 5px;
        border-top: 2px solid @color;
    }
    .content-keys {
        .item {
            display: flex;
        }
        .key {
            display: flex;
            color: @color;
            width: 4em;
        }
        .value {

        }
    }
}


</style>
