<template>
  <div class="hello">
    <draggable class="list" v-model="data" animation="300" :move="onMove">
      <transition-group>
        <div v-for="(item, index) in data" :key="index" class="item"
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
      data: [
        {
          value: 1,
          width: 100
        },
        {
          value: 2,
          width: 100
        },
        {
          value: 3,
          width: 100
        },
        {
          value: 4,
          width: 100
        },
        {
          value: 5,
          width: 100
        },
      ]
    }
  },
  methods: {
    onMove(a,b) {
      console.log(a,b)
      console.log(this.data);
    },
    cut(item,index) {
      console.log(item);

      if(item) {
        let newWidth = item.width /= 2
        this.data.forEach(element => {
          if(element.value === item.value) {
            element.width = newWidth
          }
        });
        let newItem = {value: "cut" + item.value, width: newWidth}
        this.data.splice(index + 1, 0, newItem)
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
    height: 500px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: row;
    background-color: pink;
  }
  .item {
    display: inline-flex;
    width: 100px;
    height: 100px;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: tan;
    position: relative;
    line-height: 100px;
    justify-content: center;
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
  .item:hover .hover_cut {
    display: block;
    cursor: pointer;
  }
</style>
