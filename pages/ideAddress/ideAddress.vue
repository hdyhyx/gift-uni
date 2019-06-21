<template>
	<view class="ideaddress">
		<cu-custom bgColor="bg-white" :isBack="true"><block slot="backText">返回</block><block slot="content">编辑地址</block></cu-custom>
		<form>
			<view class="cu-form-group form-border">
				<view class="title">收件人</view>
				<input v-model="addressFormData.recipient" placeholder="请填写收货人姓名" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input v-model="addressFormData.phone" placeholder="请填写收货人手机号码" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">所在地区</view>
				<input v-model="addressFormData.allCity"  disabled="true" name="input" @click="showMulLinkageThreePicker"></input>
				<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
				 @onConfirm="onConfirm" :pickerValueArray="pickerValueArray"></mpvue-picker>
				<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker"
				 @onConfirm="onConfirm"></mpvue-city-picker>
			</view>

			<view class="cu-form-group align-start">
				<view class="title">详情地址</view>
				<textarea v-model="addressFormData.address" maxlength="-1" placeholder="街道、楼牌号等"></textarea>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">设置默认地址</view>
				<switch class="blue checked" ></switch>
			</view>		
		</form>
		<view class="footer-wrap">
			<button class="cu-btn block create-btn shadow-blur round bg-gradual-blue lg" @click="goToIdeAddress">
				保存
			</button>
		</view>
	</view>
</template>

<script>
    import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
    import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
    import cityData from '../../common/js/city.data.js';
	export default{
		  components: {
            mpvuePicker,
            mpvueCityPicker
        },
		data(){
			return{
				addressFormData:{
					recipient:'',//收件人
					phone:'',//手机号码
					area:'',//区
					city:'',//市
					province:'',//省
					allCity:'',//全部地址
					address:''//详情地址
				},
				modalName: null,
                mulLinkageTwoPicker: cityData,
                cityPickerValueDefault: [0, 0, 1],
                themeColor: '#007AFF',
                pickerText: '',
                mode: '',
                deepLength: 1,
                pickerValueDefault: [0],
                pickerValueArray:[]
				
			}
		},
		methods:{
			RegionChange(e) {
				this.region = e.detail.value
			},
			textareaBInput(){
				console.log(this.textareaBInput)
			},
            // 三级联动选择
            showMulLinkageThreePicker() {
                this.$refs.mpvueCityPicker.show()
            },
            onConfirm(e) {
                this.addressFormData.allCity = e.label
            }
        },
        onBackPress() {
          if (this.$refs.mpvuePicker.showPicker) {
            this.$refs.mpvuePicker.pickerCancel();
            return true;
          }
          if (this.$refs.mpvueCityPicker.showPicker) {
            this.$refs.mpvueCityPicker.pickerCancel();
            return true;
          }
        }
		
	}
</script>

<style lang="scss">
	.ideaddress{
		.form-border{
			border-top:1upx solid #eeeeee;
		}
		.footer-wrap{
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
	}
</style>
