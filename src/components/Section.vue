<template>
    <div class="section" :class="{ wider: isArray }">
        <div class="header">
            <h3 class="title">
                <i class="iconfont icon" :class="`icon-${iconClass}`"></i>
                <span class="text">{{title}}</span>
            </h3>
            <div class="line"></div>
        </div>
        <ul class="content-list content" v-if="isArray">
            <li class="list-item" v-for="item in content" :key="item.name">
                <h4 class="name">{{item.name}}</h4>
                <h6 class="info" v-html="`${item.where} // ${item.when}`"></h6>
                <p class="detail" v-html="item.detail"></p>
            </li>
        </ul>
        <dl class="content-keys content" v-else v-for="(value, key) in content" :key="key">
            <dt class="key">{{key}}</dt>
            <dd class="value" v-html="value"></dd>
        </dl>
    </div>
</template>

<script>
import iconMap from '@/asset/iconfont/icon.map.js';

export default {
    name: 'info-section',
    props: ['title', 'content'],
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
@import url(../asset/style/variables.less);

.section {
    box-sizing: border-box;
    padding: 10px 20px;
    width: @width-narrow;
    &.wider {
        width: @width-wide;
    }
    .header {
        display: flex;
        color: @color-major;
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
            border: @bd-outter solid @color-major;
            border-radius: 50%;
            text-indent: @bd-inner;
            margin-right: 3px;
        }
        .text {
            display: inline-block;
            position: relative;
            font-size: 22px;
            top: -5px;
        }
    }
    .line {
        margin-left: 15px;
        flex-grow: 1;
        height: 5px;
        border-top: 2px solid @color-major;
    }
    .content {
        padding: 0 20px;
        font-size: 14px;
    }
    .content-list {
        margin-left: 15px;
        * {
            margin: 0;
        }
        .list-item {
            position: relative;
            margin: 7px 0;
            list-style: none;
            &::before {
                position: absolute;
                display: inline-block;
                @disc-size: 6px;
                content: '';
                width: @disc-size;
                height: @disc-size;
                border-radius: 50%;
                background: @color-major;
                left: -@disc-size - 12px;
                top: @disc-size / 2 + 5px;
            }
        }
        .name{
            color: @color-major;
            font-size: 16px;
        }
        .info {
            font-size: 14px;
            margin: 3px 0;
        }
        .detail {
            font-size: 12px;
        }
    }
    .content-keys {
        display: flex;
        margin: 7px;
        .key {
            color: @color-major;
            width: 4em;
            white-space: nowrap;
        }
        .value {
            margin-left: 25px;
        }
    }
}

@media screen and (max-width: @to-2-cols){
    .section, .section.wider {
        width: 50%;
    }
}

@media screen and (max-width: @to-1-col){
    .section, .section.wider {
        width: 100%;
    }
}

</style>
