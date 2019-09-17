<template lang="pug">
	.com-test
		view {{ demo }}
		view {{ moduleDemoGetter }}
		view {{ 0.001456 | percent }}
		view iconfont图标：
		.u-icon.u-icon-left
		.u-icon.u-icon-right
		.u-icon.u-icon-up
		.u-icon.u-icon-down
		.u-icon.u-icon-transaction
		button(@click="change") bind click
		button(@click="doCommit") store module commit demo
		button(@click="doAction") store module action demo
</template>

<script>
	import { flattenDeep } from 'lodash-es';
	import { mapGetters } from 'vuex';
	import constants from '../../common/constants';
	export default {
		name: 'ComTest',
		data() {
			return {
				demo: 'component demo',
			};
		},
		created() {
			console.log('component created');
			console.log('flattenDeep', flattenDeep([1, [2, [3, [4]], 5]]));
		},
		mounted() {
			console.log('component mounted');
		},
		computed: {
			...mapGetters([
				'moduleDemoGetter',
			]),
		},
		methods: {
			change() {
				this.demo = 'changed via action';
			},
			doCommit() {
				this.$store.commit(constants.COMMIT_TEST, 'module state changed via commit');
			},
			doAction() {
				this.$store.dispatch(constants.ACTION_TEST, 'module state changed via action');
			},
		},
	}
</script>

<style lang="scss" scoped>
	.com-test {
		color: #999999;
		font-size: u-rem(18px);
	}
</style>
