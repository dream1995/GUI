<template>
    <div class="lgsn-component">
        <lgsn-menu></lgsn-menu>
        <div class="component-view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'lgsn-component'
  };
</script>

<style>
    .lgsn-component {
        width: 80%;
        height: 100%;
        padding-top: 104px;
        display: flex;
        align-items: flex-start;
        .component-view{
            width: 100%;
            height: 100%;
            padding: 0 40px;
            box-sizing: border-box;
                h3 {
                    margin: 55px 0 20px;
                }
        }
    }
</style>