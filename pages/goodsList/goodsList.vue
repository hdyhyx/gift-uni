<template>
	<view class="goodslist " >
			<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block>
				<block slot="content">礼物兑换</block>
			</cu-custom>			
			<view class="search-wrap">
				<view class="search-all">综合
					<text class="lg text-gray cuIcon-unfold search-icon"></text>
				</view>
				<view class="search-price">
					<view class="search-desc">
						热度
					</view>
					<view class="search-icon">
						<text class="lg text-gray cuIcon-fold price-fold"></text>
						<text class="lg text-gray cuIcon-unfold price-unfold"></text>
					</view>
				</view>
				<view class="search-more" data-target="DrawerModalR" @click="showModal">筛选
					<text class="lg text-gray cuIcon-filter search-icon"></text>
				</view>
			</view>
			<view class="goodslist-wrap" >
				<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit">
					<view class="goods-item" v-for="news in dataList" :key="news.id" @click="goToGoodsDetails">
						<view class="cu-card article" >
							<view class="cu-item shadow">
								<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
								<view class="content">
									<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
									 mode="aspectFill"></image>
									<view class="desc">
										<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
										<view>
											<view class="cu-tag bg-red light sm round">正义天使</view>
											<view class="cu-tag bg-green light sm round">史诗</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</mescroll-uni>
			</view>
		<!-- 侧边栏 -->
		<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''" @tap="hideModal" @touchmove.prevent = "handelTouch">
			<view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
				<view class="cu-list menu text-left">
					<view class="cu-item arrow" v-for="(item,index) in 5" :key="index">
						<view class="content">
							<view>Item {{index +1}}</view>
						</view>
					</view>
				</view>
			</view>
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
					modalName:null,
					checkedAddress:true,
					CustomBar: this.CustomBar,
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
				goToGoodsDetails(){
					uni.navigateTo({
						url:'../goodsDetail/goodsDetail'
					})
				},
				handelTouch(e){
					return
				  //阻止时间冒泡
				},
				showModal(e) {
					this.modalName = e.currentTarget.dataset.target
				},
				hideModal(e) {
					this.modalName = null
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
			},
			onLoad() {
			}
		}
</script>
<style lang="scss">
	.goodslist{
		.search-wrap{
			position: fixed;
			right: 0;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 90upx;
			background: #ffffff;
			text-align: center;
			box-shadow: 0px 4px 5px rgba(135,153,163,0.3);
			z-index: 666;
			.search-all{
				flex: 1;
				.search-icon{
					padding: 0 10upx;
				}
			}
			.search-price{
				flex: 1;
				.search-icon{
					position: relative;
					top:17rpx;
					display: inline-block;
					padding: 0 10upx;
					.price-fold,.price-unfold{
						display: block;
					}
				}
				.search-desc{
					display: inline-block;
					line-height: 90upx;
				}
			}
			.search-more{
				flex:1;
				.search-icon{
					padding: 0 10upx;
				}
			}
		}
		.goodslist-wrap{
			margin-top:90upx;
		}
	}
</style>
