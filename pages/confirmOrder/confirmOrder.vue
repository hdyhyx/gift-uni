<template>
	<view class="confirmorder">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">填写订单</block>
		</cu-custom>
		<view class="address-info">
			<view class="content-left">
				<view class="city">
					<view class='cu-tag address-tag bg-red sm'>默认</view>
					福建省厦门市集美区</view>
				<view class="address">中航城国际社区A区19号601</view>
				<view class="receiver">
					<text class="name">大大大</text>
					<text class="phone">18030093132</text>
				</view>
			</view>
			<view class="content-right">
				<text class="cuIcon-right"></text>
			</view>
		</view>
		<view class="pay-type margin-top">
			<view class="content-left">
				支付方式：
			</view>
			<view class="content-right">
				兑换礼券
			</view>
		</view>
		<view class="goods-info margin-top">
			<view class="content-left">
				<view class="goods-img">
					
				</view>
			</view>
			<view class="content-right">
				<view class="goods-name text-cut">三只松鼠大礼包</view>
				<view class="goods-type text-grey text-cut">
					规格：专注视觉的小程序组件库
				</view>
				<view class="goods-count text-grey text-cut">
					数量：1
				</view>
				<view class="goods-desc">
					<view class="cu-tag bg-red light sm round">干果</view>
					<view class="cu-tag bg-green light sm round">礼包</view>
				</view>
			</view>
		</view>
		<view class="goods-pack">
			<view class="content-left">
				配送方式：
			</view>
			<view class="content-right">
				快递（免邮）
			</view>			
		</view>
		<view class="goods-voucher">
			<view class="content-left">
				选择礼券：
			</view>
			<view class="content-right" data-target="bottomModal" @click="selectVoucher">
				兑换礼券
				<text class="cuIcon-right icon"></text>
			</view>			
		</view>
		<view class="goods-footer">
			<view class="content-left">
				<button class="cu-btn block create-btn shadow-blur round bg-red lg" @click="cancelOrder">
					取消兑换
				</button>
			</view>
			<view class="content-right">
				<button class="cu-btn block create-btn shadow-blur round bg-gradual-blue lg" @click="confirmOrder">
					兑换礼物
				</button>
			</view>
		</view>
		<!-- 底部弹出框 -->
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-green">确定</view>
					<view class="action text-blue" @tap="hideModal">取消</view>
				</view>
				<view class="content-wrap">
					<scroll-view scroll-x class="bg-white nav">
						<view class="flex text-center">
							<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in modalTabNameArr" :key="index" @tap="tabSelect" :data-id="index">
								{{item}}
							</view>
						</view>
					</scroll-view>
					<view class="no-content" v-if="TabCur===0">
						<scroll-view scroll-y style="height:200px">
						 暂无可用
						</scroll-view>
					</view>
					<view class="yes-conent"  v-if="TabCur===1">
						<scroll-view scroll-y style="height:200px">
						暂无不可用
						</scroll-view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				modalName:'',
				TabCur:0,
				scrollLeft:0,
				modalTabNameArr:['可用礼券','不可用礼券']
			}
		},
		methods:{
			cancelOrder(){},
			confirmOrder(){},
			selectVoucher(e){
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(){
				this.modalName = null
			},
			tabSelect(e) {
				this.TabCur = parseInt(e.currentTarget.dataset.id)
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style lang="scss" scoped>
	.confirmorder{
		.address-info{
			display: flex;
			padding: 20upx 30upx;
			align-items: center;
			background: #fff;
			background-image: url(http://doveicnew.oss-cn-shenzhen.aliyuncs.com/applet/order_bg.png);
			background-repeat: no-repeat;
			background-size:100% 2%;
			background-position: 100% bottom;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
			.content-left{
				flex: 1;
				.city{
					.address-tag{
						margin-right:10upx; 
					}
					font-size: 28upx;
					line-height: 50upx;
					color: #353535;
				}
				.address{
					font-size: 35upx;
					font-weight: 600;
					line-height: 60upx;
				}
				.receiver{
					font-size: 28upx;
					line-height: 50upx;
					color: #353535;
					.name{
						padding-right:20upx;
					}
				}
			}
			.content-right{
				flex: 0 60upx;
				text-align: center;
				font-size: 35upx;
			}
		}
		.pay-type,.goods-pack,.goods-voucher{
			display: flex;
			padding: 40upx 30upx;
			background: #fff;
			.content-left{
				flex: 0 200upx;
			}
			.content-right{
				flex: 1;
				padding-right: 20upx; 
				text-align: right;
			}
			&.goods-voucher{
				.icon{
					padding:  0 5upx;
				}
			}
		}
		.goods-info{
			display: flex;
			background: #fff;
			height: 250upx;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
			.content-left{
				flex: 0 250upx;
				padding: 15upx;
				.goods-img{
					width: 100%;
					height: 100%;
					background:red ;
				}
			}
			.content-right{
				flex: 1;
				padding: 0 20upx;
				.goods-name{
					line-height: 60upx;
					font-size: 30upx;
					font-weight: 600;
				}
				.goods-type{
					line-height: 60upx;
					font-size: 28upx;
				}
				.goods-count{
					line-height: 60upx;
					font-size: 28upx;					
				}
				.goods-desc{
					line-height: 80upx;
					font-size: 28upx;
				}
			}
		}
		.goods-footer{
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 20upx 0;
			display: flex;
			background: #fff;
			.content-left{
				flex: 1;
				padding: 0 20upx;
			}
			.content-right{
				flex:1;
				padding: 0 20upx;
			}
		}
	}
</style>
