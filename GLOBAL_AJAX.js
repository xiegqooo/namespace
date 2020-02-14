//=================================================================
// ajax 请求
// 谢广泉
// email:xieguangquan@cfpamf.org.cn
// 时间：2016年06月13日
//=================================================================
GLOBAl_SX.namespace('ajax');
GLOBAl_SX.ajax = {
	//,
	base:''
	// 判断手机是否 并发送 验证码
	,mobile:function(params,callback){
		$.ajax({
			url:this.base+'/sendVerifyCodeWithNoForward',
			type:'POST',
			dataType:'json',
			data:params,
			async:true,
			success:callback
		});  
	}
}
