<template lang="pug">
	.com-test
		view {{ demo }}
		button(@click="change") Action
</template>

<script>
	export default {
		name: 'ComTest',
		data() {
			return {
				demo: 'component demo',
			};
		},
		onLoad() {
			console.log('component loaded');
		},
		methods: {
			change() {
				this.demo = 'changed via action';
			},
		},
	}
</script>

<style lang="scss" scoped>
	.com-test {
		color: #999999;
		font-size: 28upx;
	}
</style>
