<template>
    <section class="lgsn-menu">
        <ul class="menu-title" v-for="(menu, index) in menuData" :key="index">
            <li>
                <router-link v-if="menu.path" active-class="active" :to="defaultRouter + menu.path">{{menu.name}}</router-link>
                <a v-else>{{menu.name}}</a>
                <ul v-if="menu.children">
                    <li v-for="(item, menuIndex) in menu.children" :key="menuIndex">
                        <router-link active-class="active" :to="defaultRouter + item.path">{{item.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
  import menuData from '../router/router';
  export default {
    name: 'lgsn-menu',
    data() {
      return {
        defaultRouter: '/lgsn/component',
        menuData
      };
    }
  };
</script>

<style lang="scss" scoped>
    .lgsn-menu{
        width:260px;
        padding-left:40px;
        & .menu-title{
            color: #000;
            & li{
                & a{
                    display: block;
                    height: 40px;
                    line-height: 40px;
                    margin-bottom:10px;
                    font-size:16px;
                    color: #333;
                    font-weight: 600;
                }
                & .active{
                    color: #409eff;
                }
                & ul{
                    padding-left: 20px;
                    a{
                        display: block;
                        color: #444;
                        height: 40px;
                        line-height: 40px;
                        font-size: 14px;
                        white-space: nowrap;
                        font-weight: normal;
                    }
                }
            }
        }
    }
</style>