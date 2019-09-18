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
