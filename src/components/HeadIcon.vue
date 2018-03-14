<template>
    <div class="head-icon">
        <img class="head-img" src="../asset/img/header.png" />
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
.head-icon {
    width: 30%;
    text-align: center;
    padding: 20px;
    .head-img {
        box-sizing: border-box;
        @size: 150px;
        height: @size;
        width: @size;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 0 0 3px #0171BB;
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
</style>
