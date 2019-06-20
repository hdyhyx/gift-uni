<template>
	<view class="address">
		<cu-custom bgColor="bg-white" :isBack="true"><block slot="backText">返回</block><block slot="content">收货地址</block></cu-custom>
		<view class="address-wrap">
			<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit">
				<view class="address-group" v-for="news in dataList" :key="news.id">
					<view class="address-head">
						<view class="name">
							黄黄黄
						</view>
						<view class="phone">
							18030093132
						</view>

					</view>
					<view class="address-content">
						福建省厦门市思明区软件园二期望海路1
					</view>
					<view class="address-footer">
						<view class="footer-checked">
							<checkbox class='round blue checked'  :checked="checkedAddress" value="C"></checkbox>
							<text class="checked-text">默认地址</text>
						</view>
						<view class="footer-btn-wrap">
							<button class="cu-btn footer-btn bg-blue shadow">编辑</button>
							<button class="cu-btn footer-btn btn-boder bg-white shadow">删除</button>
						</view>
					</view>
				</view>
			</mescroll-uni>
		</view>
		<view class="create-wrap">
			<button class="cu-btn block create-btn shadow-blur round bg-gradual-blue lg" @click="goToIdeAddress">
				<text class="cuIcon-upload"></text>新建收货地址</button>
		</view>
	</view>
</template>

<script>
	import MescrollUni from "mescroll-uni"; 
	export default {
			components: {
				MescrollUni,
			},
			data() {
				return {
					checkedAddress:true,
					mescroll: null, //mescroll实例对象
					downOption: {
						use:false,
						auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
					},
					upOption: {
						use:true,
						textNoMore:'暂无更多信息',
						empty:{
							use:true,
							icon:null,
							tip:'暂无相关数据',
							btnText:'',
							fixed:false,
							top:'35%',
							zIndex:99
						}
					},
					dataList: []
				}
			},
			//注册滚动到底部的事件,用于上拉加载
			onReachBottom() {
				this.mescroll && this.mescroll.onReachBottom();
			},
			//注册列表滚动事件,用于下拉刷新
			onPageScroll(e) {
				this.mescroll && this.mescroll.onPageScroll(e);
			},
			methods: {
				//跳转编辑地址
				goToIdeAddress(){
					uni.navigateTo({
						url:"../ideAddress/ideAddress"
					})
				},
				// mescroll组件初始化的回调,可获取到mescroll对象
				mescrollInit(mescroll) {
					this.mescroll = mescroll;
				},
				/*下拉刷新的回调 */
				downCallback(mescroll) {
				},
				/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
				upCallback(mescroll) {
					//联网加载数据
					this.getListDataFromNet(mescroll.num, mescroll.size, (curPageData)=>{
						//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
						//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
						console.log("mescroll.num=" + mescroll.num + ", mescroll.size=" + mescroll.size + ", curPageData.length=" + curPageData.length);
						mescroll.endSuccess(curPageData.length);

						//设置列表数据
						this.dataList=this.dataList.concat(curPageData);
					}, () => {
						//联网失败的回调,隐藏下拉刷新的状态
						mescroll.endErr();
					})
				},
				getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
					//延时一秒,模拟联网
					setTimeout(function() {
						try {
							var newArr = [];
							if (pageNum == 0) {
								//此处模拟下拉刷新返回的数据
								var id=new Date().getTime();
								var newObj = {
									id:id,
									title: "【新增新闻" + id + "】 标题",
									content: "新增新闻的内容"
								};
								newArr.push(newObj);
							} else {
								//此处模拟上拉加载返回的数据
								for (var i = 0; i < pageSize; i++) {
									var upIndex = (pageNum - 1) * pageSize + i + 1;
									var newObj = {
										id:upIndex,
										title: "【新闻" + upIndex + "】 标题标题标题标题标题",
										content: "内容内容内容内容内容内容内容内容内容"
									};
									newArr.push(newObj);
								}
							}
							//联网成功的回调
							successCallback && successCallback(newArr);
						} catch (e) {
							//联网失败的回调
							errorCallback && errorCallback();
						}
					}, 1000)
				}
			}
		}
</script>

<style lang="scss" scoped>
	.address{
		.create-wrap{
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 120upx;
			line-height: 120upx;
			padding: 0 120upx;
			background: #ffffff;
			.create-btn{
				margin-top:20upx;
				font-size: 28rpx;
			}
		}
		/*#ifdef H5 */
		.address-wrap{
			position: absolute;
			top: 80rpx;
			left: 0;
			bottom: 0;
			right:0;
			padding: 40upx 40upx 0 40upx;
				/*说明*/
			.notice{
				font-size: 30upx;
				padding: 40upx 0;
				border-bottom: 1upx solid #eee;
				text-align: center;
			}
			/*展示上拉加载的数据列表*/
			.address-group{
				width: 100%;
				margin-bottom: 30upx;
				background: #ffffff;
				box-shadow: 1px 4px 5px rgba(135,153,163,0.3);
				.address-head{
					display: flex;
					align-items: center;
					height: 60upx;
					line-height: 60upx;
					font-size: 28upx;
					padding: 0 20upx;
					.name{
						flex: 0 150upx;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					.phone{
						flex: 1;
						.addres-defuale{
							display: inline-block;
							margin-left: 10px;
							width: 40px;
							height: 25px;
							line-height: 28px;
							text-align: center;
							font-size: 26upx;
						}
					}			
				}
				.address-content{
					position: relative; 
					max-height: 100upx;
					line-height: 40upx;
					padding:10upx 20upx; 
					font-size: 28upx;
					overflow: hidden;
				}
				.address-footer{
					display: flex;
					padding: 10upx 20upx;
					align-items: center;
					border-top: 1upx solid rgba(135,153,163,0.2);
					.footer-checked{
						flex: 0 200upx;
						line-height: 80upx;
						.checked-text{
							padding-left: 20upx;
							display: inline-block;
							line-height: 80upx;
						}
					}
					.footer-btn-wrap{
						flex: 1;
						text-align: right;
						.footer-btn{
							margin: 0 20upx;

						}
						.btn-boder{
							border: 1upx solid #eee;
						}
					}
				}
			}
		}
		/*#endif */
		/* #ifdef MP */
			.address-wrap{
			position: absolute;
			top:64px;
			left: 0;
			bottom: 0;
			right:0;
			padding: 40upx 40upx 0 40upx;
				/*说明*/
			.notice{
				font-size: 30upx;
				padding: 40upx 0;
				border-bottom: 1upx solid #eee;
				text-align: center;
			}
			/*展示上拉加载的数据列表*/
			.address-group{
				width: 100%;
				margin-bottom: 40upx;
				background: #ffffff;
				box-shadow: 1px 4px 5px rgba(135,153,163,0.3);
				.address-head{
					display: flex;
					align-items: center;
					height: 60upx;
					line-height: 60upx;
					font-size: 28upx;
					padding: 0 20upx;
					.name{
						flex: 0 150upx;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					.phone{
						flex: 1;
						.addres-defuale{
							display: inline-block;
							margin-left: 10px;
							width: 40px;
							height: 25px;
							line-height: 28px;
							text-align: center;
							font-size: 26upx;
						}
					}			
				}
				.address-content{
					position: relative; 
					max-height: 100upx;
					line-height: 40upx;
					padding:10upx 20upx; 
					font-size: 26upx;
					overflow: hidden;
				}
				.address-footer{
					display: flex;
					padding: 10upx 20upx;
					align-items: center;
					border-top: 1upx solid rgba(135,153,163,0.2);
					.footer-checked{
						flex: 0 200upx;
						line-height: 80upx;
						.checked-text{
							padding-left: 20upx;
							display: inline-block;
							line-height: 80upx;
						}
					}
					.footer-btn-wrap{
						flex: 1;
						text-align: right;
						.footer-btn{
							margin: 0 20upx;
		
						}
						.btn-boder{
							border: 1upx solid #eee;
						}
					}
				}
			}
		}
		/* #endif */
	}
</style>
