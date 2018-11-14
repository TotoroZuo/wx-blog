// index.js
// 获取应用实例
const app = getApp()
const WxParse = require('../../utils/wxParse/wxParse.js')
Page({
  data: {
    nodata: 'https://pang.zuolongfei.me/no-data.png',
    likeicon: 'https://pang.zuolongfei.me/like.png',
    article: null
  },
  onLoad (query) {
    console.log(query)
    if (query.id) {
      this.getArticleInfo(query.id)
    }
  },
  getArticleInfo (id) {
    const content = `<p>
    <br/>
</p>
<section>
    <section>
        <p style="margin-top: 8px; font-weight: bold; line-height: 28px; max-width: 100%; color: rgb(170, 166, 149); min-height: 32px; border-bottom-width: 1.5px; border-bottom-style: solid; border-color: rgb(170, 166, 149); text-align: justify; white-space: normal;">
            <span class="" style="color: rgb(255, 255, 255); display: block; float: left; line-height: 20px; margin-right: 8px; max-width: 100%; padding: 4px 10px; word-wrap: break-word !important; background-color: rgb(170, 166, 149);">1</span><strong class="" style="border-color: rgb(170, 166, 149); color: inherit;">当自己的&nbsp;CEO，此话怎讲？给你说个故事。</strong>
        </p>
    </section>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); outline: 0px;">我有个朋友，举办个人画展最年轻的艺术家之一，作品在拍卖行被拍出上百万的价格。</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-indent: 0em;">当年，他在音乐和绘画上都极有天赋，他也面临着很多人都曾有过的人生两难：怎么选？</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-indent: 0em;">最后，他选择了绘画方向继续精进。他跟我说：音乐是个金字塔，能到达塔尖的就那一两个人。但绘画是梯形台，你的画可能卖&nbsp;5&nbsp;万一平方尺，也可能卖&nbsp;50&nbsp;万一平方尺，每一层都能养活一批画家，成功概率明显高很多。</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="text-indent: 0em; color: rgb(119, 120, 123); outline: 0px;">这背后，其实是商学里一个常见概念：</span><strong><span style="text-indent: 0em; outline: 0px; color: rgb(95, 156, 239);">头部市场和分散市场。</span></strong>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <strong><span style="text-indent: 0em; outline: 0px; color: rgb(95, 156, 239);">有些行业注定是分散的，谁都不可能占据很大的市场份额，但做得好也能很优秀，</span></strong><span style="text-indent: 0em; color: rgb(119, 120, 123); outline: 0px;">比如画画，比如开饭店。</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <strong><span style="text-indent: 0em; outline: 0px; color: rgb(95, 156, 239);">但头部市场完全不同，一旦成功就容易垄断、一家通吃，</span></strong><span style="text-indent: 0em; color: rgb(119, 120, 123); outline: 0px;">比如音乐，比如今天的很多互联网业态。</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-indent: 0em;">如果每个人都是一家“公司”，那作为 “CEO”，我这朋友无疑做出了最正确的市场选择。</span>
    </p>
    <p style="line-height: 25.6000003814697px; white-space: normal;">
        <br/>
    </p>
    <section>
        <section>
            <section>
                <section>
                    <section>
                        <p style="margin-top: 8px; font-weight: bold; line-height: 28px; max-width: 100%; color: rgb(170, 166, 149); min-height: 32px; border-bottom-width: 1.5px; border-bottom-style: solid; border-color: rgb(170, 166, 149); text-align: justify; white-space: normal;">
                            <span class="" style="color: rgb(255, 255, 255); display: block; float: left; line-height: 20px; margin-right: 8px; max-width: 100%; padding: 4px 10px; word-wrap: break-word !important; background-color: rgb(170, 166, 149);">2</span><strong class="" style="border-color: rgb(170, 166, 149); color: inherit;">今天，不管你愿不愿意，你都被卷入了一个“一切皆可经营”、“一个人就是一家公司”的时代。只不过，工商局注册的那些公司都是“有限责任”，而你“自己”这家公司是无限责任。</strong>
                        </p>
                    </section>
                    <p style="white-space: normal;">
                        <br/>
                    </p>
                </section>
            </section>
        </section>
    </section>
    <p style="line-height: normal; white-space: normal;">
        <span style="color: rgb(119, 120, 123); line-height: 25.6000003814697px;">你需要用自己一生的时间和信用来为它担保。</span>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-align: justify; text-indent: 0em;">还记得那&nbsp;4 个抢月饼被开除的阿里员工吗？前一秒还守着一份人人羡慕的工作，后一秒就因为贪小便宜出了局。</span>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-align: justify; text-indent: 0em;">谁敢说自己能稳稳当当地捧着饭碗？组织就一定可靠？</span>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <span style="color: rgb(255, 104, 39);"><strong style="text-align: justify; text-indent: 0em;"><span style="outline: 0px;">你必须像经营公司一样经营自己</span></strong></span><span style="text-align: justify; text-indent: 0em; color: rgb(119, 120, 123); outline: 0px;">：构</span><span style="text-align: justify; text-indent: 0em; color: rgb(119, 120, 123); outline: 0px;">建自己的协作关系、塑造自己的产品和服务、呵护自己的名声、把注意力投放到产出更高的地方。</span>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <span style="text-align: justify; text-indent: 0em; color: rgb(119, 120, 123); outline: 0px;">所以，人人都需要商学院的知识。</span><strong><span style="text-align: justify; text-indent: 0em; outline: 0px; color: rgb(95, 156, 239);">商业逻辑、商学概念、管理方法和实用工具，都是从人性的骨子里来、被反复验证过的套路和模式。</span></strong>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-align: justify; text-indent: 0em;">过去，用于经营公司。</span>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-align: justify; text-indent: 0em;">未来，用于经营自己。</span>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-align: justify; text-indent: 0em;">不懂这些，不做好自己的&nbsp;CEO，别人就会把你从那个位置上赶下来，把你当成小兵来使唤。</span>
    </p>
    <p style="white-space: normal;">
        <br/>
    </p>
    <section>
        <p style="margin-top: 8px; font-weight: bold; line-height: 28px; max-width: 100%; color: rgb(170, 166, 149); min-height: 32px; border-bottom-width: 1.5px; border-bottom-style: solid; border-color: rgb(170, 166, 149); text-align: justify; white-space: normal;">
            <span class="" style="color: rgb(255, 255, 255); display: block; float: left; line-height: 20px; margin-right: 8px; max-width: 100%; padding: 4px 10px; word-wrap: break-word !important; background-color: rgb(170, 166, 149);">3</span><strong class="" style="border-color: rgb(170, 166, 149); color: inherit;">过去，我是给&nbsp;CEO 讲课的。</strong>
        </p>
    </section>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <span style="color: rgb(119, 120, 123); line-height: 1.75em; text-indent: 0em; text-align: justify;">我给海尔、百度、恒基、中远这些大企业当战略顾问。去年一年，我有&nbsp;100&nbsp;多天在给企业上课，是中国最贵的商业顾问之一。</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <span style="color: rgb(119, 120, 123); line-height: 1.75em; text-indent: 0em; text-align: justify;">今年&nbsp;4 月，罗胖跟我说：刘润，就给那百十来个企业家讲课有啥意思，带着你的手艺，来「得到」开课吧。&nbsp;</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-align: justify; text-indent: 0em;">想了两个月，我想通了。</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <span style="text-align: justify; text-indent: 0em; color: rgb(119, 120, 123); outline: 0px;">从今天起，我在罗辑思维「得到」APP&nbsp;开设专栏：</span><span style="color: rgb(255, 104, 39);"><strong style="text-align: justify; text-indent: 0em;"><span style="outline: 0px;">《刘润 • 5&nbsp;分钟商学院》</span></strong></span><strong style="text-align: justify; text-indent: 0em;"><span style="outline: 0px; color: #5F9CEF;">。</span></strong>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <strong><span style="color: rgb(95, 156, 239); text-align: justify; text-indent: 0em;">未来一年，从周一到周五，每天给你讲透一个重要的商业概念。</span></strong>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-align: justify; text-indent: 0em;">下这个决心，是因为我越来越强烈地意识到，在这个时代，每个人都已经变成了自己这家“无限责任公司”的&nbsp;CEO。</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-align: justify; text-indent: 0em;">而作为 “CEO&nbsp;私人教练”，只有为你服务，才能释放出我的最大价值。</span>
    </p>
    <p style="white-space: normal;">
        <br/>
    </p>
    <section>
        <p style="margin-top: 8px; font-weight: bold; line-height: 28px; max-width: 100%; color: rgb(170, 166, 149); min-height: 32px; border-bottom-width: 1.5px; border-bottom-style: solid; border-color: rgb(170, 166, 149); text-align: justify; white-space: normal;">
            <span class="" style="color: rgb(255, 255, 255); display: block; float: left; line-height: 20px; margin-right: 8px; max-width: 100%; padding: 4px 10px; word-wrap: break-word !important; background-color: rgb(170, 166, 149);">4</span><strong class="" style="border-color: rgb(170, 166, 149); color: inherit;">传统商学院的学习方式是这样的：先交几十万学费，每个月需要四天全部用来上课学习。你甚至还要专门飞去一个地方。</strong>
        </p>
    </section>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); line-height: 1.5em;">在《刘润 • 5&nbsp;分钟商学院》里，你只需要用和朋友吃顿饭的钱（一年&nbsp;199&nbsp;元）、和洗脸刷牙的碎片时间（每天&nbsp;5&nbsp;分钟），就能系统学到最经典实用的商业基础知识。</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); text-indent: 0em;">这一年，你会学到什么？</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); line-height: 1.5em;">我认真打磨了一套商业学习的基础体系：</span>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <section>
        <section>
            <section>
                <p style="margin-top: 5px; margin-bottom: 5px; border-color: rgb(117, 117, 118); color: rgb(117, 117, 118); font-size: 20px; text-indent: 0em; line-height: normal; white-space: normal;">
                    <span style="font-size: 16px;"><strong><span style="outline: 0px; color: rgb(95, 156, 239);">每天，我会挑选一个最有用的概念，进行有趣讲述，用力扎破那层懂与不懂、会与不会的窗户纸。</span></strong></span>
                </p>
            </section>
        </section>
    </section>
    <p style="line-height: 1.5em; margin-bottom: 15px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: 1.5em; margin-bottom: 15px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; white-space: normal;">
        <span style="color: rgb(119, 120, 123); line-height: 1.5em; text-indent: 0em;">比如“我该如何给自己的产品定价”，导入概念，讲诉逻辑，给出方法。</span>
    </p>
    <p style="line-height: 1.5em; margin-bottom: 15px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; white-space: normal;">
        <br/>
    </p>
    <section>
        <section>
            <section>
                <p style="margin-top: 5px; margin-bottom: 5px; border-color: rgb(117, 117, 118); color: rgb(117, 117, 118); font-size: 20px; text-indent: 0em; line-height: normal; white-space: normal;">
                    <span style="font-size: 16px;"><strong><span style="outline: 0px; color: rgb(95, 156, 239);">每周，我会围绕一门学科，一路展开。</span></strong></span>
                </p>
            </section>
        </section>
    </section>
    <p style="line-height: 1.5em; margin-bottom: 15px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); line-height: 1.5em;">比如在“价格锚点”之外，我会接着给你讲“比例偏见”、“损失规避”等&nbsp;5&nbsp;个消费心理学的不同层面。</span>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <section>
        <section>
            <section>
                <p style="margin-top: 5px; margin-bottom: 5px; border-color: rgb(117, 117, 118); color: rgb(117, 117, 118); font-size: 20px; text-indent: 0em; line-height: normal; white-space: normal;">
                    <span style="font-size: 16px;"><strong><span style="outline: 0px; color: rgb(95, 156, 239);">每季，我会构建一个体系，覆盖&nbsp;13&nbsp;周。</span></strong></span>
                </p>
            </section>
        </section>
    </section>
    <p style="line-height: 1.5em; margin-bottom: 15px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); line-height: 1.5em;">比如在这个叫“商业”的体系中，一周“消费心理学”，一周“微观经济学”，一周“互联网营销”，等等。</span>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <section>
        <section>
            <section>
                <p style="margin-top: 5px; margin-bottom: 5px; border-color: rgb(117, 117, 118); color: rgb(117, 117, 118); font-size: 20px; text-indent: 0em; line-height: normal; white-space: normal;">
                    <span style="font-size: 16px;"><strong><span style="outline: 0px; color: rgb(95, 156, 239);">每年，四大体系合体。</span></strong></span>
                </p>
            </section>
        </section>
    </section>
    <p style="line-height: 1.5em; margin-bottom: 15px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="font-size: 16px;"><strong><span style="font-size: 16px; outline: 0px; color: rgb(95, 156, 239);">1）</span></strong></span><span style="color: rgb(119, 120, 123); line-height: 1.5em;">商业，你与企业外部的关系；</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="font-size: 16px;"><strong><span style="font-size: 16px; outline: 0px; color: rgb(95, 156, 239);">2）</span></strong></span><span style="color: rgb(119, 120, 123); line-height: 1.5em;">管理，你与企业内部的关系；</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="font-size: 16px;"><strong><span style="font-size: 16px; outline: 0px; color: rgb(95, 156, 239);">3）</span></strong></span><span style="color: rgb(119, 120, 123); line-height: 1.5em;">个人，你与自己的关系；</span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="font-size: 16px;"><strong><span style="font-size: 16px; outline: 0px; color: rgb(95, 156, 239);">4）</span></strong></span><span style="color: rgb(119, 120, 123); line-height: 1.5em;">以及提升前三者的：工具。</span>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <section>
        <section>
            <section>
                <section></section>
                <section></section>
            </section>
            <section>
                <section></section>
            </section>
        </section>
    </section>
    <section>
        <section>
            <section>
                <p style="margin-top: 8px; font-weight: bold; line-height: 28px; max-width: 100%; color: rgb(170, 166, 149); min-height: 32px; border-bottom-width: 1.5px; border-bottom-style: solid; border-color: rgb(170, 166, 149); text-align: justify; white-space: normal;">
                    <span class="" style="color: rgb(255, 255, 255); display: block; float: left; line-height: 20px; margin-right: 8px; max-width: 100%; padding: 4px 10px; word-wrap: break-word !important; background-color: rgb(170, 166, 149);">5</span><strong class="" style="border-color: rgb(170, 166, 149); color: inherit;">为什么我能做这件事？因为我读过三所商学院。</strong>
                </p>
            </section>
        </section>
    </section>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="outline: 0px; color: rgb(95, 156, 239);"><br/></span>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <strong><span style="outline: 0px; color: rgb(95, 156, 239);">第一所，复旦大学。</span></strong>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); outline: 0px;">在那里，摆满了经济、管理、财务、商业、营销、金融的梅花桩、铜人阵，你得从“扎马步”、“打木桩”、苦练基本功开始。在这里，我写了当年小有名气的《出租司机给我上的&nbsp;MBA&nbsp;课》。</span>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <strong><span style="outline: 0px; color: rgb(95, 156, 239);">第二所，微软公司。</span></strong>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); outline: 0px;">1999&nbsp;年，我作为工程师加入微软，2013&nbsp;年，作为战略合作总监离开。我在这所全球最好的企业“商学院”苦修近&nbsp;14&nbsp;年，接受非常严苛的管理、领导力、全球化视野和实战训练。</span>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <strong><span style="outline: 0px; color: rgb(95, 156, 239);">第三所，润米咨询。</span></strong>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); outline: 0px;">从微软“毕业”后，我创立了润米咨询，当过海尔、百度、恒基、中远好多企业的战略顾问。我面前的每一位企业家，都身怀绝技。我帮助他们，也向他们学习，这是最好的“实战商学院”。</span>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <strong><span style="outline: 0px; color: rgb(95, 156, 239);">17&nbsp;年，像海绵一样学习，像战士一样实践。</span></strong>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); line-height: 1.5em;">现在，我要把毕生所学，倾注针尖，扎通你商业的“任督二脉”，助你做好自己的&nbsp;CEO。<br/></span>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="white-space: normal;">
        <span style="color: rgb(119, 120, 123); outline: 0px;">今天是</span><span style="color: rgb(255, 104, 39);"><strong><span style="outline: 0px;">《刘润&nbsp;• 5&nbsp;分钟商学院》</span></strong></span><span style="color: rgb(119, 120, 123); outline: 0px;">上线第&nbsp;<strong><span style="color: rgb(255, 104, 39); outline: 0px;">1</span></strong>&nbsp;天。</span>
    </p>
    <p style="line-height: 1.75em; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-indent: 0em; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <span style="color: rgb(119, 120, 123); outline: 0px;">假设你自己这家无限责任公司已经成立，你给自己的战略目标是？</span><span style="outline: 0px; color: rgb(95, 156, 239);"></span>
    </p>
    <p style="line-height: 1.5em; margin-bottom: 15px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; white-space: normal;">
        <br/>
    </p>
    <p style="line-height: normal; margin-top: 5px; margin-bottom: 5px; outline: 0px; -webkit-tap-highlight-color: rgba(255, 255, 255, 0); text-align: justify; text-indent: 0em; white-space: normal;">
        <a style="line-height: 1.6; box-sizing: border-box;"></a>
    </p>
</section>
<p></p>`
    var that = this
    WxParse.wxParse('contents', 'html', content, that, 5)
    const articleInfo = {
      title: '测试文章标题',
      author: '左龙飞',
      time: '208-11-14 23:45:40',
      read: 0,
      cate: '面试',
      praise: 0
    }
    this.setData({
      article: articleInfo
    })
  }
})
