<template>
	<view class="home">
		<view class="date-wrap bg-blue">
			<view class="date-content">
			</view>
			<image src="https://image.weilanwl.com/gif/wave.gif" mode="scaleToFill" class="gif-black response img-gif"></image>
		</view>
		<my-slider></my-slider>
	</view>
</template>

<script>
	import MySlider from '../../components/slider/slider.vue'
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
		/*#ifdef H5 || APP-PLUS*/
		.date-wrap{
			margin-bottom: 20upx;
			width: 750upx;
			height: 405upx;
			box-shadow: 0px 4px 5px rgba(135,153,163,0.2);
			.date-content{
				position: relative;
				top:45%;
				left: 48%;
				transform: translate(-50%,-50%);
				width: 550rpx;
				height: 220rpx;
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
			.img-gif{
				height:185upx;
			}
		}
		/*#endif*/
		/*#ifdef MP*/
		.date-wrap{
			margin-bottom: 20upx;
			width: 750upx;
			height: 405upx;
			box-shadow: 0px 4px 5px rgba(135,153,163,0.2);
			.date-content{
				position: relative;
				top:50%;
				left: 48%;
				transform: translate(-50%,-50%);
				width: 550rpx;
				height: 230rpx;
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
			.img-gif{
				height:185upx;
			}
		}
		/*#endif*/
	}

</style>