 <template>
  <div class="content" ref="addImage">
    <div class="image-content" ref="capture">
      <p>html2canvas 能够实现在前端直接对页面进行截屏。</p>
      <p>其实现思路是html2canvas脚本将页面元素渲染为canvas，通过读取DOM并将不同的样式应用到这些元素上实现。</p>
      <p>它不需要服务端的操作，只在前端即可完成。</p>
    </div>
    <el-button type="success" @click="generatorImage" class="img-btn">生成图片</el-button>
  </div>
</template>

<script>
import html2canvas from "html2canvas"

export default {
  data() {
    return {}
  },
  methods: {
    generatorImage() {
      html2canvas(this.$refs.addImage,{useCORS:true}).then(canvas => {
        // this.$refs.addImage.append(canvas)
        let link = document.createElement("a")
        link.href = canvas.toDataURL()
        link.setAttribute("download", "图片canvas.png")
        link.style.display = "none"
        // document.body.appendChild(link)
        link.click()
      })
    }
  }
}
</script>
<style lang="scss">
.content {
  text-align: center;
}
</style>
