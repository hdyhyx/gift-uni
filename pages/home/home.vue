<template>
	<view class="home">
		<view class="date-wrap bg-blue">
			<view class="date-content">
				
			</view>
		</view>
		<my-slider></my-slider>
	</view>
</template>

<script>
	import MySlider from '../../components/slider.vue'
	export default {
		data(){
			return{
				
			}
		},
		components:{
			MySlider	
		}
	}
	
</script>

<style lang="scss">
	@import "../../colorui/animation.css";
	.home{
		.date-wrap{
			margin-bottom: 50upx;
			width: 750upx;
			height: 350upx;
			box-shadow: 0px 4px 5px rgba(135,153,163,0.2);
			.date-content{
				width: 400rpx;
				height: 200rpx;
			}
		}
	}
	
	image[class*="gif-"] {
		border-radius: 6upx;
		display: block;
	}
</style>
