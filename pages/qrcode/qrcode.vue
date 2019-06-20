<template>
	<view class="qrcode">
		<view class="qrcode-desc bg-blue">
			<view class="desc">
				
			</view>
		</view>
		<view class="qrcode-warp">
			<view class="qrcode-content">
				<view class="content-left" >
					<view class="scan-qrcode">
						<view class="scon-icon">
							
						</view>
					</view>
				</view>
				<view class="content-right">
					<view class="input-qrcode">
						<view class="qrcode-icon">
							
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.qrcode{
		position: absolute;
		top:0;
		left: 0;
		bottom: 0;
		right: 0;
		background: #fafafa;
		.qrcode-desc{
			position: absolute;
			top:0;
			left: 0;
			bottom: 200px;
			right: 0;
			background-image:url('https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png');
			background-size:100% 100%;
			// border-bottom-left-radius: 50px;
			z-index: 600;
			.desc{
				position: relative;
				top:50%;
				left: 50%;
				transform: translate(-50%,-50%);
				width: 500upx;
				height: 750upx;
				background: rgba(255,255,255,0.8);
				border-radius: 10px;
				box-shadow: 1px 4px 5px rgba(135,153,163,0.3);
			}
		}
		.qrcode-warp{
			position: absolute;
			left: 0;
			bottom: 50px;
			right: 0;
			height: 150px;
			background: rgb(100,109,193);
			background: linear-gradient(90deg, rgba(100,109,193,1) 50%, rgba(49,84,192,1) 100%);
			.qrcode-content{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				background: #fafafa;
				// border-top-right-radius: 50px;
				.content-left{
					flex: 1;
					height: 60px;
					.scan-qrcode{
						margin: 0 auto;
						width: 80px;
						padding: 10px;
						height: 60px;
						box-shadow: 1px 4px 5px rgba(135,153,163,0.3);
						border-radius: 5px;
						.scon-icon{
							position: relative;
							top:50%;
							left: 50%;
							transform: translate(-50%,-50%);
							width: 50px;
							height: 50px;
							background-image:url('http://doveicnew.oss-cn-shenzhen.aliyuncs.com/applet/Scan.png');
							background-size:cover;
						}
					}
				}
				.content-right{
					flex: 1;
					height: 60px;
					padding: 0 30px;
					.input-qrcode{
						margin: 0 auto;
						height: 60px;
						background: #ffffff;
						box-shadow: 1px 4px 5px rgba(135,153,163,0.3);
						border-radius: 5px;
						.qrcode-icon{
							position: relative;
							top:50%;
							left: 50%;
							transform: translate(-50%,-50%);
							width: 80px;
							height: 65px;
							background-image:url('http://doveicnew.oss-cn-shenzhen.aliyuncs.com/applet/Barcode-Scanner.png');
							background-size:100% 100%;	
						}
					}
				}
			}
		}
	}
</style>
