<template lang="pug">
	.content
		image.logo(src="/static/logo.png")
			view
				text.title {{title}}
		com-test
</template>

<script>
	import { flattenDeep } from 'lodash-es';
	import comTest from '../../components/test/test';
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		components: {
			comTest,
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
