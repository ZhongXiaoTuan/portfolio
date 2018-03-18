<template>
    <div class="home-page">
        <div class="content intro">
            <div class="box">
                <div class="intro-text border-box col-flex">
                    <h1 class="upper margin-less">钟媛 x 作品集</h1>
                    <h1 class="lower margin-less">PORTFOLIO</h1>
                </div>
                <img class="intro-img" src="/static/resume/intro.jpg" alt="" />
            </div>
        </div>
        <div class="content">
            <div class="box">
                <div class="col-flex">
                    <h1>迪士尼<br/>小米主题</h1>
                    <h1>DISNEY x<br/>MI THEME</h1>
                </div>
                <img class="side-img box-shadow" src="/static/resume/xiaomi.png" />
            </div>
        </div>
        <div class="content">
            <div class="box">
                <div class="col-flex">
                    <h3>创意策划 & UI设计</h3>
                    <p>
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
                <div class="col-flex">
                    <h1>主题作品<br/>玫瑰寄语</h1>
                    <h1>BEAUTY AND<br/>THE BEAST</h1>
                    <h3>策划 & UI/UX设计</h3>
                    <p>
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
                <div class="col-flex">
                    <h1>迪士尼 × 咪咕<br/>「乐玩+」APP</h1>
                    <h1>DISNEY × MIGU</h1>
                    <h3>产品经理助理</h3>
                    <p>
                        「乐玩+」是一个基于迪士尼IP资源的影视及资讯服务类APP。<br/>
                        喜爱迪士尼的朋友可以通过此产品点播迪士尼影视内容，<br/>
                        获取最新的资讯，并通过论坛与其他用户交流互动。<br/>
                        产品还包括迪士尼天气/闹钟/主题等多款小应用。
                    </p>
                </div>
                <img class="side-img" src="/static/resume/lewan+1.jpg" />
            </div>
        </div>
        <div class="content">
            <div class="box">
                <img class="side-img" src="/static/resume/lewan+2.png" alt="">
            </div>
        </div>
        <div class="content">
            <div class="box">
                <img class="side-img" src="/static/resume/lewan+3.png" alt="">
                <img class="side-img" src="/static/resume/lewan+4.png" alt="">
            </div>
        </div>
        <div class="content">
            <div class="box">
                <img class="side-img" src="/static/resume/mickey_weather.png" />
                <div class="col-flex">
                    <h1>迪士尼迷你APP<br/>米奇天气</h1>
                    <h1>MICKEY<br/>WEATHER</h1>
                    <h3>创意策划 & UI设计</h3>
                    <p>
                        「乐玩+」子产品<br/>
                        迪士尼天气/闹钟：<br/>
                        会员可付费更换皮肤，<br/>
                        不同皮肤伴随不同的交互体验。
                    </p>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="box">
                <div class="col-flex">
                    <h1>交大乐联<br/>Recho APP</h1>
                    <h1>SJTU BAND UNION</h1>
                    <h3>产品策划</h3>
                    <p>
                        RECHO是由交大乐队联盟策划开发的一款音频技术小应用，供音频技术工作者、乐手和音乐爱好者在线交流学习音频技术。
                    </p>
                </div>
                <img class="side-img small" src="/static/resume/recho.png" />
            </div>
        </div>
        <div class="content">
            <div class="box">
                <img class="side-img" src="/static/resume/familytree.png" />
                <div class="col-flex">
                    <h1>PC端产品<br/>在线家谱树</h1>
                    <h1>FAMILY TREE<br/>ONLINE</h1>
                    <h3>产品策划</h3>
                    <p>
                         在线家谱书是一款支持用户<br/>
                         在线建立、编辑、保存和分享家谱的应用。<br/>
                         同时具备完善的亲属称谓计算功能，<br/>
                         是节庆走亲访友和加深家族情感的实用工具。
                    </p>
                    <a class="link" @click.stop="to('familytree')">试一试</a>
                </div>
            </div>
        </div>
        <div class="content intro">
            <div class="box">
                <img class="intro-img" src="/static/resume/intro.jpg" alt="" />
                <div class="intro-text border-box col-flex">
                    <h1 class="upper margin-less">钟 媛   上海交通大学</h1>
                    <router-link class="link" to="resume">查看我的简历</router-link>
                    <h1 class="lower margin-less">
                        手机：13636330842
                        邮箱：zhong_yuan1213@sina.com
                        网站： www.zhongxiaotuan.com
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
        }
    }
}
</script>

<style lang="less" scoped>
@import url(../asset/style/variables.less);
@import url(../asset/style/functional.less);

.home-page {
    .intro {
        @txt-c: #777;
        @img-h: 500px;
        .box {
            width: 1100px;
            border: 15px solid #eee;
            padding: 10px;
        }
        .intro-text {
            justify-content: center;
            text-align: center;
            padding: 0 50px;
            letter-spacing: .5em;
            color: @txt-c;
        }
        .upper {
            line-height: 100px;
            font-weight: 800;
        }
        .lower {
            line-height: 100px;
            font-family: serif;
            border-top: 1px solid @txt-c;
        }
        .intro-img {
            height: @img-h;
        }
    }
}

.content {
    width: 100%;
    padding: 100px 0;
    &:nth-of-type(2n) {
        .bg-colored;
    }
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
</style>
