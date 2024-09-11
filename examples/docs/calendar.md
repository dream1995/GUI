## 日历表
以X, Y轴为时间线展示。

### 基础用法

:::lgsn
```html
    <template>
        <g-calendar :height="400" :calData="dataDome">
                <template #title>
                    日历表
                </template>
            </g-calendar>
    </template>
    <script>
        
        export default{
           data() {
            return {
               dataDome: []
            }
           },
           created() {
             let arrayData = [
                {
                  value: 1,
                  label: '张三',
                  children: []
                },
                {
                  value: 2,
                  label: '李四',
                  children: []
                },
                {
                  value: 3,
                  label: '张飞',
                  children: []
                },
                {
                  value: 4,
                  label: '小黄',
                  children: []
                },
                {
                  value: 5,
                  label: '小红',
                  children: []
                },
                {
                  value: 6,
                  label: '小黑',
                  children: []
                },
                {
                  value: 7,
                  label: '嘿呦',
                  children: []
                },
                {
                  value: 8,
                  label: '嘿嘿',
                  children: []
                },
              ]
              const date = new Date();
              const month = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
              arrayData.forEach(v => {
              for(let i=0; i<=month; i++) {
                v.children.push({
                  value: i,
                  label: `${v.label}收入${Math.round(Math.random()*1000)}元`
                })
              }
             })
             this.dataDome = arrayData
           }
        };
        
    </script>
```
:::

### 自定义模板

:::lgsn 
```html
    <style>
        .calendar-rise{
          width:100%;
          height:100%;
          background: #409eff;
          border-radius: 4px;
          padding:4px;
          box-sizing: border-box;
          color:#fff;
        }
        .calendar-drop{
           width:100%;
           height:100%;
           background: #F56C6C;
           border-radius: 4px;
           padding:4px;
           box-sizing: border-box;
           color:#fff;
         }
    </style>
    <template>
        <g-calendar :height="400" :calData="dataDome" :tipsY="false">
                <template #content="card">
                    <div :class="card.money > 600 ? 'calendar-rise' : 'calendar-drop'">{{card.label}}</div>
                </template>
            </g-calendar>
    </template>
    <script>
        
        export default{
           data() {
            return {
               dataDome: []
            }
           },
           created() {
             let arrayData = [
                {
                  value: 1,
                  label: '张三',
                  children: []
                },
                {
                  value: 2,
                  label: '李四',
                  children: []
                },
                {
                  value: 3,
                  label: '张飞',
                  children: []
                },
                {
                  value: 4,
                  label: '小黄',
                  children: []
                },
                {
                  value: 5,
                  label: '小红',
                  children: []
                },
                {
                  value: 6,
                  label: '小黑',
                  children: []
                },
                {
                  value: 7,
                  label: '嘿呦',
                  children: []
                },
                {
                  value: 8,
                  label: '嘿嘿',
                  children: []
                },
              ]
             arrayData.forEach(v => {
              for(let i=0; i<31; i++) {
                let money = Math.round(Math.random()*1000)
                v.children.push({
                  value: i,
                  label: `${v.label}收入${money}元`,
                  money
                })
              }
             })
             this.dataDome = arrayData
           }
        };
        
    </script>
```
:::

### calendar 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| calData | 绑定值 | Array | — | — |
| height | 高度 | Number | — | 400 |
| tipsX | 横向悬浮条 | Boolean | — | true |
| tipsY | 纵向悬浮条 | Boolean | — | true |

### calData 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 唯一标识 必填 | String / Number | — | — |
| label | 左侧（y轴）默认显示内容 | String / Number | — | - |
| children | 右侧默认显示内容 | Array | — | - |

### 自定义内容(Slot)
| name | 说明 |
|------|--------|
| title | 左上角内容 |
| content | 右侧内容 参数 {card} 相对应数据  |

