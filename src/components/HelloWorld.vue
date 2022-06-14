<template>
  <div class="hello">
    <draggable class="list" v-model="data" animation="300" group="data">
      <transition-group>
        <div v-for="(item, index) in data" :key="item.value" class="item"
          :style="{width:item.width + 'px'}">
          <span>{{item.value}}</span>
          <span class="hover_cut"  @click="cut(item,index)">切分</span>
        </div>
      </transition-group>
    </draggable>
    <draggable class="sub" v-model="subData" animation="300" group="data">
      <transition-group>
        <div v-for="(item, index) in subData" :key="item.value" class="sub_item"
          :style="{width:item.width + 'px'}">
          <span>{{item.value}}</span>
          <span class="hover_cut"  @click="cut(item,index)">切分</span>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable"

export default {
  name: 'demo',
  components: {
    draggable
  },
  data () {
    return {
      data: [],
      subData: [{value: 0, width: 100}]
    }
  },
  created() {
    for (let index = 0; index < 20; index++) {
      this.data.push({
        value: index + 1,
        width: 100
      })
    }
  },
  methods: {
    cut(item,index) {

      if(item) {
        let newWidth = item.width /= 2
        this.subData.forEach(element => {
          if(element.value === item.value) {
            element.width = newWidth
          }
        });
        let newItem = {value: "cut" + item.value, width: newWidth}
        this.subData.splice(index + 1, 0, newItem)
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 100%;
  }
  .list {
    width: 1000px;
    min-height: 300px;
    margin: 0 auto;
    padding: 20px;
    display: block;
    background-color: pink;
  }
  .item {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: tan;
    position: relative;
    line-height: 100px;
  }
  .hover_cut {
    position: absolute;
    left: 0;
    top: -20px;
    background: gray;
    color: white;
    display: none;
    line-height: 20px;
  }
  .sub_item:hover .hover_cut {
    display: block;
    cursor: pointer;
  }
  .sub {
    display: block;
    width: 1040px;
    height: 100px;
    margin: 0 auto;
    background-color: grey;
    text-align: left;
  }
  .sub_item {
    display: inline-block;
    width: 100px;
    margin-right: 10px;
    background-color: tan;
    position: relative;
    line-height: 100px;
    text-align: center;
  }
</style>
