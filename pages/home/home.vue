<template>
	<view class="home">
		<view class="date-wrap bg-blue">
			<view class="date-content">
			</view>
			<image src="https://image.weilanwl.com/gif/wave.gif" mode="scaleToFill" class="gif-black response" style="height:180upx"></image>
		</view>
		<my-slider></my-slider>
	</view>
</template>

<script>
	import MySlider from '../../components/slider.vue'
	export default {
		data() {
			return {


			};
		},
		methods: {

		},
		components:{
			MySlider
		}
	}
</script>

<style lang="scss">

	.home{
		.date-wrap{
			margin-bottom: 20upx;
			width: 750upx;
			height: 380upx;
			box-shadow: 0px 4px 5px rgba(135,153,163,0.2);
			.date-content{
				position: relative;
				top:50%;
				left: 45%;
				transform: translate(-50%,-50%);
				width: 450rpx;
				height: 200rpx;
				background: #ffffff;
				border-radius: 5px;
				&::after{
					content: "";
					position: absolute;
					z-index: -1;
					background-color: inherit;
					width: 100%;
					height: 100%;
					left: 5%;
					bottom: -10%;
					border-radius: 10upx;
					opacity: 0.5;
					transform: scale(1, 1);
				}
			}
		}
	}

</style>