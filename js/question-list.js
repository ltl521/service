/**
 * Created by moorgen on 2017/12/11.
 */
/*$.ajax({
    url:"",
    type:"post",
    dataType:"json",
    data:{"phone":phone},
    success:function(data){*/
        /*取得后台返回数据：
        *mark--问题唯一标识
        * state-跟踪状态
        * type-问题类型
        * content-问题内容
        * */
        var state="售后正在处理";
        var id="q1";
        var type='设备故障/硬件故障';
        var content='问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问问题内容问题内容内容问题内容内容问题内容内容问题内容内容问题内容内容问题内容';
        quesList(state,type,content,id);
/*    }
});*/
//加载问题列表
function quesList(state,type,content,id){
    var html0='';
    html0+='<div class="ques-list" id="';
    html0+=id;
    if(state=="已解决"){
        html0+='"><h3>跟踪状态：<span class="state-done">';
    }else{
        html0+='"><h3>跟踪状态：<span class="state-deal">';
    }
    html0+=state;
    html0+='</span></h3><img src="img/service.png" alt=""><div class="right"><h4>问题类型：<span class="ques-type"></span>';
    html0+=type;
    html0+='</h4><p>';
    html0+=content;
    html0+='</p></div></div>';
    $(".wrapper").append(html0);
}


$(".wrapper").on("click",".ques-list",function(){
   var mark=($(this).attr("id"));
    location.href="detail.html?mark="+mark;
});