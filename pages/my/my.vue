<template>
	<view class="my">
		<view class="my-head  bg-blue" >
			<view class="user-info">
				<view class="cu-avatar round avatar"  :style="[{ backgroundImage:'url(' + avatar[0] + ')' }]"></view>
				<view class="user-name">
					dage
				</view>
			</view>
			<view class="my-card">

			</view>
		</view>
		<view class="nav-wrap">
			<view class="cu-list menu card-menu margin-top">
				<view class="cu-item arrow" @click="goToAllGifts" data-index="0"> <!-- index = 0 跳转 全部礼物 -->
					<view class="content">
						<text class="cuIcon-discoverfill text-orange"></text>
						<text class="text-grey">我的礼物</text>
					</view>
				</view>
				<view class="cu-list grid col no-border col-3">
					<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" :data-index="index" v-if="index<gridCol*2" @click="goToAllGifts">
						<!-- data-index:0 全部礼物 ，1 已兑换礼物， 2 未兑换礼物 -->
						<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]"></view>
						<text>{{item.name}}</text>
					</view>
				</view>
				<view class="cu-item arrow margin-top" @click="goToAddress">
					<view class="content">
						<text class="cuIcon-discoverfill text-orange"></text>
						<text class="text-grey">收货地址</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
						<text class="cuIcon-discoverfill text-orange"></text>
						<text class="text-grey">我的收藏</text>
					</navigator>
				</view>
				<view class="cu-item arrow">
					<navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
						<text class="cuIcon-discoverfill text-orange"></text>
						<text class="text-grey">我的卡卷</text>
					</navigator>
				</view>
				<view class="cu-item arrow">
					<navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
						<text class="cuIcon-discoverfill text-orange"></text>
						<text class="text-grey">售后服务</text>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				gridCol:3,
				avatar: [
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				],
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: '全部礼物'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '已兑换礼物'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '未兑换礼物'
				},],
			}
		},
		methods:{
			goToAddress(){
				uni.navigateTo({
					url:'../address/address'
				})
			},
			goToAllGifts(e){
				const current=e.currentTarget.dataset.index
				uni.navigateTo({
					url:`../myGifts/myGifts?current=${current}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my{
		.my-head{
			padding: 30upx 40upx;
			height: 400upx;
			background-image: url('https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png');
			background-size:100% 100%;
			.user-info{
				display: flex;
				margin-top: 30upx;
				justify-content: center;
				align-items: center;
				.avatar{
					flex: 0 60px;
					width: 60px;
					height: 60px;
					display: inline-block;
				}
				.user-name{
					flex:1;
					line-height: 60px;
					padding-left:40upx;
					font-size: 30rpx;
				}
			}
			.my-card{
				display: flex;
				position: relative;
				top:40upx;
				width: 100%;
				height: 260upx;
				justify-content:center;
				align-items: center;
				background:#FFFFFF;
				border-radius: 15px;
				box-shadow: 0px 4px 5px rgba(135,153,163,0.5);
				color:#333333;
				// &:after{
				// 	content: "";
				// 	position: absolute;
				// 	z-index: -1;
				// 	background-color: #333333;
				// 	width: 100%;
				// 	height: 100%;
				// 	left: 0;
				// 	bottom: -10%;
				// 	border-radius: 5px;
				// 	opacity: 0.2;
				// 	transform: scale(0.9, 0.9);
				// }
			}
		}
		.nav-wrap{
			margin-top:60px;
		}
	}
</style>
