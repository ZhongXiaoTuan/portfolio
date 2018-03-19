<template>
    <div class="home-page">
        <div class="content intro">
            <div class="box">
                <div class="intro-text border-box col-flex grow serif">
                    <h1 class="upper bold margin-less">钟媛 x 作品集</h1>
                    <h1 class="lower margin-less">PORTFOLIO</h1>
                </div>
                <img class="intro-img" src="/static/resume/intro.jpg" alt="" />
            </div>
        </div>
        <div class="content">
            <div class="box">
                <div class="side-txt">
                    <h1 class="serif bold major-title">迪士尼<br/>小米主题</h1>
                    <h1 class="sans-serif minor-title">DISNEY x<br/>MI THEME</h1>
                </div>
                <img class="side-img box-shadow" src="/static/resume/xiaomi.png" />
            </div>
        </div>
        <div class="content">
            <div class="box space-around">
                <div class="side-txt">
                    <h3 class="sans-serif character">创意策划 & UI设计</h3>
                    <p class="sans-serif desc">
                        基于迪士尼强大的IP资源，<br/>
                        推出针对不同用户的手机个性化定制服务。<br/>
                        产品于2017年十月上线，<br/>
                        每月推出二到四款新主题，<br/>
                        将持续为期一年左右。
                    </p>
                </div>
                <img class="side-img" src="/static/resume/bb1.png" /> 
            </div>
        </div>
        <div class="content">
            <div class="box">
                <img class="side-img box-shadow" src="/static/resume/bb2.png" />
                <div class="side-txt align-r">
                    <h1 class="serif bold major-title">主题作品<br/>玫瑰寄语</h1>
                    <h1 class="sans-serif minor-title">BEAUTY AND<br/>THE BEAST</h1>
                    <h3 class="sans-serif character">策划 & UI/UX设计</h3>
                    <p class="sans-serif desc">
                        基于电影《美女与野兽》，<br/>
                        于圣诞节当天上线。<br/>
                        长按真爱玫瑰，发送卡片。<br/>
                        迪士尼专区销量Top3。
                    </p>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="box">
                <div class="side-txt">
                    <h1 class="serif bold major-title">迪士尼 × 咪咕<br/>「乐玩+」APP</h1>
                    <h1 class="sans-serif minor-title">DISNEY × MIGU</h1>
                    <h3 class="sans-serif character">产品经理助理</h3>
                    <p class="sans-serif desc">
                        「乐玩+」是一个基于迪士尼IP资源的影视及资讯服务类APP。<br/>
                        喜爱迪士尼的朋友可以通过此产品点播迪士尼影视内容，<br/>
                        获取最新的资讯，并通过论坛与其他用户交流互动。<br/>
                        产品还包括迪士尼天气/闹钟/主题等多款小应用。
                    </p>
                    <a class="link" @click.prevent="routo('Lewan')">查看详情</a>
                </div>
                <img class="side-img" src="/static/resume/lewan+1.jpg" />
            </div>
        </div>
        <div class="content">
            <div class="box">
                <img class="side-img" src="/static/resume/mickey_weather.png" />
                <div class="side-txt align-r">
                    <h1 class="serif bold major-title">迪士尼迷你APP<br/>米奇天气</h1>
                    <h1 class="sans-serif minor-title">MICKEY<br/>WEATHER</h1>
                    <h3 class="sans-serif character">创意策划 & UI设计</h3>
                    <p class="sans-serif desc">
                        「乐玩+」子产品<br/>
                        迪士尼天气/闹钟：<br/>
                        会员可付费更换皮肤，<br/>
                        不同皮肤伴随不同的交互体验。
                    </p>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="box space-around">
                <img class="side-img" src="/static/resume/familytree.png" />
                <div class="side-txt align-r">
                    <h1 class="serif bold major-title">PC端产品<br/>在线家谱树</h1>
                    <h1 class="sans-serif minor-title">FAMILY TREE<br/>ONLINE</h1>
                    <h3 class="sans-serif character">产品策划</h3>
                    <p class="sans-serif desc">
                         在线家谱书是一款支持用户<br/>
                         在线建立、编辑、保存和分享家谱的应用。<br/>
                         同时具备完善的亲属称谓计算功能，<br/>
                         是节庆走亲访友和加深家族情感的实用工具。
                    </p>
                    <a class="link" @click.prevent="to('familytree')">试一试</a>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="box">
                <div class="side-txt">
                    <h1 class="serif bold major-title">交大乐联<br/>Recho APP</h1>
                    <h1 class="sans-serif minor-title">SJTU BAND UNION</h1>
                    <h3 class="sans-serif character">产品策划</h3>
                    <p class="sans-serif desc limit">
                        RECHO是由交大乐队联盟策划开发的一款音频技术小应用，供音频技术工作者、乐手和音乐爱好者在线交流学习音频技术。
                    </p>
                </div>
                <img class="side-img small" src="/static/resume/recho.png" />
            </div>
        </div>
        <div class="content intro">
            <div class="box">
                <img class="intro-img" src="/static/resume/intro.jpg" alt="" />
                <div class="intro-text border-box col-flex grow serif">
                    <h1 class="upper bold margin-less">钟 媛   上海交通大学</h1>
                    <h1 class="lower smaller margin-less">
                        手机：13636330842<br/>
                        邮箱：zhong_yuan1213@sina.com<br/>
                        网站： www.zhongxiaotuan.com<br/>
                        <a class="link" @click.prevent="routo('Resume')">查看我的简历</a>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    methods: {
        to(url) {
            window.open(url);
        },
        routo(name) {
            this.$router.push({ name });
        },
    }
}
</script>

<style lang="less" scoped>
@import url(../asset/style/variables.less);
@import url(../asset/style/functional.less);

@major-c: #052E61;
@minor-c: #0076BA;
@txt-c: #5e5e5e;

.home-page {
    color: @txt-c;
    @img-h: 500px;
    .intro {
        .box {
            width: 1100px;
            border: 15px solid #eee;
            padding: 10px;
        }
    }
    .intro-text {
        justify-content: center;
        text-align: center;
        padding: 0 50px;
        letter-spacing: .2em;
    }
    .upper {
        font-size: 36px;
        line-height: 100px;
        white-space: nowrap;
    }
    .lower {
        font-size: 32px;
        line-height: 100px;
        border-top: 1px solid @txt-c;
        &.smaller {
            letter-spacing: .1em;
            padding-top: 25px;
            font-size: 18px;
            line-height: 30px;
            text-align: left;
        }
    }
    .intro-img {
        height: @img-h;
    }
}

.content {
    width: 100%;
    padding: 100px 0;
    &:nth-of-type(2n) {
        .bg-colored;
    }
}

.side-txt {
    .col-flex;
    justify-content: center;
}

.side-img {
    height: 650px;
    &.small {
        height: 500px;
    }
}

.box {
    .row-flex;
    justify-content: space-between;
    width: @full-w;
    margin: auto;
}

.space-around {
    justify-content: space-around;
}

.major-title {
    font-size: 40px;
    color: @major-c;
    letter-spacing: .05em;
    margin: 10px 0;
}

.minor-title {
    font-size: 32px;
    font-weight: lighter;
    letter-spacing: .05em;
    color: @major-c;
    margin: 10px 0;
}

.character {
    color: @minor-c;
}

.desc {
    font-weight: 300;
    font-size: 16px;
    &.limit {
        max-width: 360px;
    }
}

.link {
    @link-c: #2395ff;
    .sans-serif;
    font-weight: 300;
    font-size: 16px;
    cursor: pointer;
    line-height: 60px;
    color: @link-c;
    text-decoration: underline;
    &::before {
        @size: 7px;
        content: '';
        margin-right: 10px;
        display: inline-block;
        border-top: @size solid @link-c;
        border-left: @size solid transparent;
        transform: rotate(45deg);
    }
}
</style>
