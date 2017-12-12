/**
 * Created by 22682 on 2017/12/5.
 */

$(".ques-type").html(localStorage.getItem("quesType"));//初始化问题类型

//初始化时间
var mydate=new Date();
var date=mydate.toLocaleDateString().replace(/\//g,"-");
var h=mydate.getHours();
var m=mydate.getMinutes();
var time0=date+" "+h+":"+m;
$("#time").html(time0);


/*点击选择照片*/
var arr=[];//保存每次选择的文件
$(".submit-box").on("click",".upload",chooseFile);
$(".submit-box>form>a").on("click",chooseFile);

function chooseFile(){
    var html='';
    $('#file').replaceWith('<input id="file" runat="server" type="file" accept="image/*" capture="camera" style="width:100%" />');
    $("#file").click();
    $("#file").off("change").on("change",function(){
        var file = this.files[0];  //文件对象
        arr.push(file);
        var url=window.URL.createObjectURL(this.files[0]);
        html='<div class="picture"><img src="'+url+'"><div class="del-pic"></div></div>';
        $(".upload").before(html);
        picNum();
    })
}
$(".submit-box").on("click",".del-pic",function() {
    $(this).parent().remove();
    picNum();
});


/*检测图片数量*/
function picNum(){
    var len=$(".picture").length;
    if(len==0){
        $(".submit-box>form>a").css("display","block");
    }else{
        $(".submit-box>form>a").css("display","none")
    }
    if(len>=10){
        $(".upload").css("display","none");
    }else{
        $(".upload").css("display","block");
    }
}

/*点击图片查看大图*/
$(".submit-box").on("click",".picture>img",function(){
    var src=$(this).attr("src");
    $(".big-pic-box").show();
    $(".big-pic-box img").attr("src",src);
});
$(".big-pic-box").on("click",function(){
    $(".big-pic-box").hide();
});



/*提交*/
$(".submit").on("click",submitInfo);
function submitInfo(){
    var quesType=$(".ques-type").html();
    var quesText=$(".ques-txt").html();
    var phone=$("#phone").val();
    var time=$("#time").html();
    if(!quesText){
        alert("请输入问题描述")
    }else{
        if(!$(".picture")[0]){
            alert("请上传图片")
        }else{
            if(!phone){
                alert("请输入手机号码")
            }else{
                var reg=/^(0|86|17951)?(13[0-9]|15[0-35-9]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
                if(!(reg.test(phone))){
                    alert("请输入正确的手机号")
                }else{
                    var form=new FormData();//构造一个表单，FormData是HTML5新增的
                    for(var i=0;i<arr.length;i++){
                        form.append("file"+i,arr[i]);
                    }
                    /*ajax*/
                    /*$.ajax({
                     type:"post",
                     url:"",
                     data:{
                     "quesType":quesType,
                     "quesText":quesText,
                     "phone":phone,
                     "time":time,
                     "file":form
                     },
                     dataType:"json",
                     success:function(data){
                     location.href="index.html";
                     }
                     })*/
                    location.href="index.html";
                }
            }
        }
    }
}



