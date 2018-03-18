<template>
    <div class="head-icon">
        <img class="head-img" src="../../asset/img/header.png" />
        <h1 class="major-title">钟 媛</h1>
        <h2 class="minor-title">上海交通大学</h2>
    </div>
</template>

<script>
export default {
    name: 'head-icon'
}
</script>

<style lang="less" scoped>
@import url(../../asset/style/variables.less);

.head-icon {
    box-sizing: border-box;
    width: @width-narrow;
    text-align: center;
    padding: 20px;
    .head-img {
        box-sizing: border-box;
        @size: 150px;
        height: @size;
        width: @size;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 0 0 3px @color-major;
    }
    .major-title {
        letter-spacing: .2em;
        margin: 10px 0;
        font-size: 1.6em;
    }
    .minor-title {
        margin: 0;
        font-size: 1.3em;
    }
}

@media screen and (max-width: @to-2-cols){
    .head-icon {
        width: 50%;
    }
}

@media screen and (max-width: @to-1-col){
    .head-icon {
        width: 100%;
    }
}
</style>
