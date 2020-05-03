<template>
    <div class="lgsn-dome">
        <div class="lgsn-source">
            <slot name="source"></slot>
        </div>
    </div>
</template>

<script>
  // eslint-disable-line
  export default {
    name: 'lgsn-dome'
  };
</script>

<style lang="scss" scoped>
    .lgsn-dome{
        border: solid 1px #ebebeb;
        border-radius: 3px;
        transition: .2s;
        .lgsn-source{
            padding: 24px;
        }
    }
</style>