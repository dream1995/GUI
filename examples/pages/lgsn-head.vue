<template>
    <header class="lgsn-head">
        <img class="lgsn-logo" src='../assets/images/lgsn-logo.png'>
        <ul class="head-nav">
            <li>
                <router-link active-class="active" to="/lgsn/component/installation">组件</router-link>
            </li>
        </ul>
    </header>
</template>

<script>
  export default {
    name: 'lgsn-head'
  };
</script>

<style lang="scss" scoped>
    .lgsn-head {
        width: 100%;
        height: 64px;
        box-shadow: 0 2px 8px #f0f1f2;
        padding:0 20px;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        position: fixed;
        left: 0;
        top: 0;
        .lgsn-logo {
            padding-left: 20px;
            width: 140px;
            height: auto;
        }
        .head-nav {
            width:55%;
            height:64px;
            line-height:64px;
            text-align: center;
            min-width: 72px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            li {
                color: rgba(0,0,0,.85);
                font-weight: normal;
                cursor: pointer;
                &:hover
                &.active{
                    color: #409EFF;
                }
            }
        }
    }
</style>