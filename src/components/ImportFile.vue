<template>
  <div class="import-file">
    <el-button @click="handleInsert" icon="el-icon-plus" size="mini" type="primary">{{$t('insert')}}</el-button>
    <el-button @click="changeLang()">切换</el-button>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        :model="temp"
        :rules="rules"
        label-position="left"
        label-width="70px"
        ref="temp"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="父节点" prop="superiorId">
          <el-select placeholder="父节点" v-model="temp.superiorId">
            <el-option
              :key="item.id"
              :label="item.label"
              :value="item.id"
              v-for="(item) in optionParentNode"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门" prop="name">
          <el-input v-model="temp.name"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="description">
          <el-input v-model="temp.description"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="dialogFormVisible = false">{{$t('table.cancel')}}</el-button>
        <el-button
          @click="insertRow"
          type="primary"
          v-if="dialogStatus=='insert'"
        >{{$t('table.confirm')}}</el-button>
        <el-button @click="updateRow" type="primary" v-else>{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionParentNode: [],
      temp: {
        superiorId: "",
        organizationStructureId: "",
        name: "",
        description: "",
        amenderName: "系统管理员",
        amendTime: ""
      },
      dialogFormVisible: false,
      dialogStatus: "insert",
      textMap: {
        update: "修改",
        insert: "新增"
      },
      rules: {
        name: [{ required: true, message: "不能为空", trigger: "blur" }]
      }
    }
  },
  methods: {
    handleInsert() {
      this.dialogFormVisible = true
      this.dialogStatus = "insert"
      // this.resetTemp(null)
    },
    insertRow() {
      this.$refs.temp.validate(valid => {
        if (valid) {
          ajax("/zyfx-pc-web/organization/insert.do", this.temp).then(res => {
            this.dialogFormVisible = false
            this.$message.success({ message: res.message, duration: 1500 })

            this.freshTree()
          })
        }
      })
    },
    changeLang() {
      const lang = this.$i18n.locale
      this.$i18n.locale = lang==='zh'?'en':'zh'
    }
  }
}
</script>

<style lang="">
.import-file {
  padding: 10px;
}
</style>
