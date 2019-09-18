<template lang="pug">
  .content
    image.logo(src="/static/logo.png")
      view
        text.title {{title}}
    com-test
</template>

<script>
import comTest from '../../components/test';

export default {
  data() {
    return {
      title: 'Hello',
    };
  },
  onLoad() {
    console.log('Page onLoad');
  },
  onReady() {
    console.log('Page onReady');
  },
  components: {
    comTest,
  },
  methods: {},
  onShareAppMessage(res) {
    if (res.from === 'button') { // 来自页面内分享按钮
      console.log(res.target);
    }
    return {
      title: 'uni-mp',
      desc: 'uni-mp',
      path: '/pages/index/index?id=123',
      imageUrl: 'https://www.baidu.com/img/bd_logo1.png?where=super',
    };
  },
};
</script>

<style lang="scss">
  .content {
    text-align: center;
    height: u-rem(200px);
  }

  .logo {
    height: u-rem(200upx);
    width: u-rem(200upx);
    margin-top: u-rem(200upx);
  }

  .title {
    font-size: u-rem(36upx);
    color: #8f8f94;
  }
</style>
