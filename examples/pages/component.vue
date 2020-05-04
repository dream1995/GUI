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

<style lang="scss">
    .lgsn-component {
        width: 100%;
        padding-top: 104px;
        display: flex;
        align-items: flex-start;

        .component-view {
            width: calc(100% - 240px);
            padding: 0 40px 100px 40px;
            box-sizing: border-box;
            border-left: 1px #f0f0f0 solid;

            h3 {
                margin: 55px 0 20px;
            }
        }

        table {
            border-collapse: collapse;
            width: 80%;
            background-color: #fff;
            font-size: 14px;
            margin-bottom: 45px;
            line-height: 1.5em;
            strong {
                font-weight: normal;
            }

            td, th {
                border-bottom: 1px solid #dcdfe6;
                padding: 15px;
                max-width: 250px;
            }

            th {
                text-align: left;
                white-space: nowrap;
                color: #909399;
                font-weight: normal;
            }

            td {
                color: #606266;
            }

            th:first-child, td:first-child {
                padding-left: 10px;
            }
        }
    }
</style>