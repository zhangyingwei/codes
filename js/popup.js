$(function(){
	var index = layer.load();
	$.ajax({
		url: 'http://localhost:8080/hermes-codes/hermescode/codes',
		type: 'GET',
		dataType: 'json',
		success:function(data){
			layer.close(index);
			if(data.status==200){
				var files = data.result;
				var ul = $(".filelist");
				for(var i = 0;i<files.length;i++){
					$(ul).append('<li link="'+files[i].link+'" tag="'+files[i].tag+'"  class="fileitem">'+files[i].text+'</li>')
				}
				itemClient();
			}
		}
	})

	function itemClient(){
		$(".fileitem").click(function() {
			/* Act on the event */
			var arr = $(this).attr("link").split("/");
			var id = arr[arr.length-1];
			var url = "https://git.oschina.net/zhangyingwei/codes/"+id+"/widget_preview";
		});
	}
});