/**
 * Created by 22682 on 2017/12/6.
 */
/*点击查看大图*/
$(".pic-list").on("click",".small-pic",function(){
    var src=$(this).attr("src");
    $(".big-pic-box").show();
    $(".big-pic-box img").attr("src",src);
});
$(".big-pic-box").on("click",function(){
    $(".big-pic-box").hide();
});

//获取问题标识
var param=location.href;
var mark=param.slice(param.indexOf("?")+6,param.length);

/*$.ajax({
    url:"",
    type:"post",
    dataType:"json",
    data:{"mark":mark},
    success:function(data){*/
        /*
        * state-跟踪状态
        * type-问题类型
        * content-问题内容
        * url-问题图片
        * */
        var state="已解决";
        var type="设备故障/硬件故障";
        var content="问题内容问题内容问题内容问题问题内容问题内容问题内容问题内容问题内问题内内容问题内容问题内容问题内容问题内内容问题内容问题内容问题内容问题内容问题内容内容";
        var url=["img/pic1.png","img/pic2.png","img/pic3.png"];
        var phone="15221212121";
        var time="2017-12-11 12:00";
        if (state == "已解决") {
            $(".state0>span").addClass("state-done").html(state);
        } else {
            $(".state0>span").addClass("state-deal").html(state);
        }
        $(".ques-type").html(type);
        $(".content").html(content);
        for (var i = 0; i < url.length; i++) {
            var src = url[i];
            var html2 = '<img class="small-pic" src="' + src + '" alt="">';
            $(".pic-list").append(html2);
        }
        $("#phone").html(phone);
        $("#time").html(time);

/*    }
})*/

/*删除按钮*/
$(".delete").on("click",function(){
    /*$.ajax({
        url:"",
        type:"post",
        dataType:"json",
        data:{"mark":mark},
        success:function(data){
            location.href="question-list.html"
        }
    })*/
    location.href="question-list.html"
})