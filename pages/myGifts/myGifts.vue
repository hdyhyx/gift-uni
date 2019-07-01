<template>
	<view class="mygifts">
		<cu-custom bgColor="bg-white" :isBack="true"><block slot="backText">返回</block><block slot="content">我的礼物</block></cu-custom>
		<scroll-view scroll-x class="bg-white nav gift-nav" :style="{top:CustomBar+'px'}">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabsDataArr" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<view class="gift-content">
			<all-gifts class="all-gifts" v-if="TabCur===0"></all-gifts>
			<redeem-gifts class="redeem-gifts" v-if="TabCur===1"></redeem-gifts>
			<unredeem-gifts class="unredeem-gifts" v-if="TabCur===2"></unredeem-gifts>
		</view>
	</view>
</template>

<script>
	import AllGifts from '../../components/allGifts/allGifts.vue'
	import RedeemGifts from '../../components/redeemGifts/redeemGifts.vue'
	import UnredeemGifts from '../../components/unredeemGifts/unredeemGifts.vue'
	const All_Gifts = 0 //全部礼物
	const Redeem_Gifts = 1 //已兑换礼物
	const Unredeem_Gifts = 2 //未兑换礼物
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				CustomBar: this.CustomBar,
				tabsDataArr:['全部礼物','已兑换礼物','未兑换礼物']
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = parseInt(e.currentTarget.dataset.id);  //0:全部礼物 ， 1：已兑换礼物 2：未兑换礼物
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		},
		components:{
			AllGifts,
			RedeemGifts,
			UnredeemGifts
		},
		onLoad(options) {
			this.TabCur=parseInt(options.current) //0:全部礼物 ， 1：已兑换礼物 2：未兑换礼物
		}
	}
</script>
<style lang="scss">
	.mygifts{
		.gift-nav{
			position: fixed;
			top: 128upx;
			right: 0;
			left: 0;
		}
		.gift-content{
			margin-top:90upx;
		}
	}
</style>
