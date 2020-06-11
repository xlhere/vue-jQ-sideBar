<template>
  <div>
    <el-tree :props="props" :load="loadNode" lazy show-checkbox @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      props: {
        label: "name",
        children: "zones"
      },
      count: 1,
      flag:"",
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    loadNode(node, resolve) {
      var that = this
      if (node.level === 0) {
        return resolve([{ name: "region1" }, { name: "region2" }]);
      }
      if (node.level > 3) return resolve([]);

      var hasChild;
      if (node.data.name === "region1") {
        hasChild = true;
      } else if (node.data.name === "region2") {
        hasChild = false;
      } else {
        that.flag= Math.random()
        hasChild = that.flag > 0.5;
        console.log('2',that.flag)
      }
        var dataBefore = [
          {
            name: "zone" + this.count++,
            age: 12
          },
          {
            name: "zone" + this.count++,
            age: 16
          }
        ];
        var data;
        if (hasChild) {
          data = dataBefore;
          dataBefore.push({ name: "zone" + this.count++, age: 20 });
          console.log('1',dataBefore)
        } else {
          data = [];
        }

        resolve(data);
    }
  }
};
</script>