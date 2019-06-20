<template>
	<view class="ideaddress">
		<cu-custom bgColor="bg-white" :isBack="true"><block slot="backText">返回</block><block slot="content">编辑地址</block></cu-custom>
		<form>
			<view class="cu-form-group">
				<view class="title">收件人</view>
				<input placeholder="两字短标题" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="三字标题" name="input"></input>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">文本框</view>
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="多行文本输入框"></textarea>
			</view>
		</form>
		<view class="mpvue-picker">
			<view class="uni-padding-wrap uni-common-mt">
				<view class="uni-btn-v">
					<button type="default" @click="showMulLinkageThreePicker">三级城市联动</button>
				</view>
			</view>
			<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
			 @onConfirm="onConfirm" :pickerValueArray="pickerValueArray"></mpvue-picker>
			<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker"
			 @onConfirm="onConfirm"></mpvue-city-picker>
		</view>
	</view>
</template>

<script>
    import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
    // https://github.com/zhetengbiji/mpvue-citypicker
    import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
    import cityData from '../../common/js/city.data.js';
	export default{
		  components: {
            mpvuePicker,
            mpvueCityPicker
        },
		data(){
			return{
				region: ['广东省', '广州市', '海珠区'],
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
			},
            // 单列
            showSinglePicker() {
                this.pickerValueArray = this.pickerSingleArray
                this.mode = 'selector'
                this.deepLength = 1
                this.pickerValueDefault = [0]
                this.$refs.mpvuePicker.show()
            },
            // 二级联动选择
            showMulLinkageTwoPicker() {
                this.pickerValueArray = this.mulLinkageTwoPicker
                this.mode = 'multiLinkageSelector'
                this.deepLength = 2
                this.pickerValueDefault = [0, 0]
                this.$refs.mpvuePicker.show()
            },
            // 三级联动选择
            showMulLinkageThreePicker() {
                this.$refs.mpvueCityPicker.show()
            },
            onConfirm(e) {
                this.pickerText = JSON.stringify(e)
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

<style>
</style>
