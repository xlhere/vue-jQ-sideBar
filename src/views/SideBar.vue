<template>
  <div class="hello">
    <div class="container">
        <div class="main_wrapper">
            <div class="sidebar">
                <ul class="menu">
                    <li class="menu_item menu_show">
                        <a>
                            <i class="tri_icon"></i>
                            <h2>开始前必读</h2>
                        </a>
                        <ul class="menu_item_child">
                            <li>
                                <a title="威廉 · 莎士比亚">
                                    <span>威廉 · 莎士比亚</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu_item">
                        <a>
                            <i class="tri_icon"></i>
                            <h2>四大喜剧</h2>
                        </a>
                        <ul class="menu_item_child">
                            <li>
                                <a>
                                    <span>仲夏夜之梦</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>皆大欢喜</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>第十二夜</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>威尼斯商人</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu_item">
                        <a>
                            <i class="tri_icon"></i>
                            <h2>四大悲剧</h2>
                        </a>
                        <ul class="menu_item_child">
                            <li>
                                <a>
                                    <span>哈姆雷特</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>奥瑟罗</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>李尔王</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>麦克白</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="breadcrumb">
                <a>开发文档</a>
                <span class="split"> / </span>
                <a>开始前必读</a>
                <span class="split last"> / </span>
                <a>威廉 · 莎士比亚</a>
            </div>
            <div class="main_con">
                <ul class="main_con_ul">
                    <li class="main_con_item">
                        <ul>
                            <li class="check">
                                <h2 class="title">William Shakespeare</h2>
                                <div class="con">
                                    <p>威廉 · 莎士比亚，（1564.04 - 1616.04）</p>
                                    <p>英国文学史上最杰出的戏剧家，也是欧洲文艺复兴时期最重要、最伟大的作家。他流传下来的作品包括38部戏剧、154首十四行诗、2首叙事诗和其他诗歌。
                                    他的戏剧有各种主要语言的译本，而且表演次数远远超过其他任何戏剧家的作品。</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="main_con_item">
                        <ul>
                            <li>
                                <h2 class="title">A Midsummer Night's Dream</h2>
                                <div class="con">
                                    <p>《仲夏夜之梦》</p>
                                    <p>是一部富有浪漫色彩的喜剧，讲述的是几个年轻人之间的爱情故事，它被公认为是莎士比亚的第一部杰作，也是演出次数最多、最受观众喜爱的喜剧。
                                    该剧创作于16世纪90年代，正是英国历史上伊丽莎白女王统治时期。这一时期政权相对巩固，社会比较稳定，资本主义经济迅速发展，英国文艺复兴运动和人文主义运动也进入繁荣昌盛阶段。</p>
                                    <p>文艺复兴使人们开始认识到自身存在的价值和意义，人权、人性、人道逐渐代替了神的统治。《仲夏夜之梦》便是一部集中体现文艺复兴精神和人文主义思想的喜剧。</p>
                                </div>
                            </li>
                            <li>
                                <h2 class="title">As you like it</h2>
                                <div class="con">
                                    <p>《皆大欢喜》</p>
                                </div>
                            </li>
                            <li>
                                <h2 class="title">Twelfth</h2>
                                <div class="con">
                                    <p>《第十二夜》</p>
                                </div>
                            </li>
                            <li>
                                <h2 class="title">The Merchant of Venice</h2>
                                <div class="con">
                                    <p>《威尼斯商人》</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="main_con_item">
                        <ul>
                            <li>
                                <h2 class="title">The Tragedy of Hamlet</h2>
                                <div class="con">
                                    <p>《哈姆雷特》</p>
                                    <p>讲述了叔叔Claudius谋害了Hamlet的父亲，篡夺了王位，并娶了国王的遗孀Gertrude,Hamlet因此为其父——前丹麦国王向叔叔报仇的故事。复仇的故事中交织着爱恨情愁，细致入微地刻画了伪装的、真实的疯癫——从悲痛欲绝到假装愤怒——探索了背叛、复仇、乱伦、堕落等主题。</p>
                                </div>
                            </li>
                            <li>《奥瑟罗》</li>
                            <li>《李尔王》</li>
                            <li>《麦克白》</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import '@/js/click.js'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
