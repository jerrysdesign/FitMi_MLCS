//===================================================================
// $(function(){
//   $(function(){
//     if($(window).innerWidth() < 992){
//       $('.freetry_wrapper').html('');
//     }
//   });
//   $(window).resize(function(){
//     if($(window).innerWidth() < 992){
//       $('.freetry_wrapper').html('');
//     }else{
//       $('.freetry_wrapper').html('<div class="envelopes"><div class="envelopeCover in"><img src="images/freetry/envelope_cover_in.png"></div><img src="images/freetry/envelope_in.png" class="envelopeIn"><div class="letterWrapper" style="top: -128px;"><div class="letter"><form target="_blank" onsubmit="" method="POST" id="ss-form" action="https://docs.google.com/forms/d/1jSaSTtDpTt6nqEJPEbFSjPKpLywTLtBjKcY5d-RSIdM/formResponse?embedded=true" novalidate="novalidate"><div class="letterBackground"><img src="images/freetry/letter.png"><div class="shape"></div></div><div class="letterContent"><div class="dearBoyCoy handwrittenFont">我要預約體驗課程</div><div class="lineWrapper handwrittenFont ss-form-question"><div class="line ss-item ss-item-required ss-text"><label for="entry_941879327" class="text ss-q-item-label"><div class="ss-q-title">稱呼<span class="ss-required-asterisk">*</span></div></label><div class="text textFillWidth"><div class="textContentWrapper"><input type="text" value="" required="required" name="entry.941879327" id="entry_941879327" dir="auto" class="ss-q-short" aria-required="true"><div class="underline"></div></div></div></div></div><div class="lineWrapper handwrittenFont ss-form-question"><div class="line ss-item ss-item-required ss-text"><label for="entry_1522921143" class="text ss-q-item-label"><div class="ss-q-title">聯絡電話<span class="ss-required-asterisk">*</span></div></label><div class="text textFillWidth"><div class="textContentWrapper"><input type="text" value="" required="required" name="entry.1522921143" id="entry_1522921143" dir="auto" class="ss-q-short" aria-required="true"><div class="underline"></div></div></div></div></div><div class="lineWrapper handwrittenFont ss-form-question"><div class="line ss-item ss-item-required ss-text"><label for="entry_852293836" class="text ss-q-item-label"><div class="ss-q-title">年齡<span class="ss-required-asterisk">*</span></div></label><div class="text textFillWidth"><div class="textContentWrapper"><select required="required" name="entry.852293836" id="entry_852293836" class="valid" aria-required="true"><option value="">請選擇</option><option value="20歲（含）以下">20歲（含）以下</option><option value="21-25歲">21-25歲</option><option value="26-35歲">26-35歲</option><option value="36-45歲">36-45歲</option><option value="46-55歲">46-55歲</option><option value="56歲以上">56歲以上</option></select><div class="underline"></div></div></div></div></div><div class="lineWrapper handwrittenFont ss-form-question"><div class="line ss-item ss-item-required ss-text"><label for="entry_122263781" class="text ss-q-item-label"><div class="ss-q-title">電子郵件<span class="ss-required-asterisk"></span></div></label><div class="text textFillWidth"><div class="textContentWrapper"><input type="text" value="" name="entry.122263781" id="entry_122263781" dir="auto" class="ss-q-short" aria-required="true"><div class="underline"></div></div></div></div></div><div class="lineWrapper handwrittenFont ss-form-question"><div class="line ss-item ss-item-required ss-text"><label for="entry_162146956" class="text ss-q-item-label"><div class="ss-q-title">line id</div></label><div class="text textFillWidth"><div class="textContentWrapper"><input type="text" value="" name="entry.162146956" id="entry_162146956" dir="auto" class="ss-q-short" aria-required="true"><div class="underline"></div></div></div></div></div><div class="letterForeground"><div class="mailSendWrapper centerText"><div class="mailSendContainer"><input type="hidden" value="[]" name="draftResponse"><input type="hidden" value="0" name="pageHistory"><div class="ss-item ss-navigate"><div id="navigation-buttons" class="ss-form-entry"><input type="submit" value="提交" name="submit" id="ss-submit"></div></div></div></div></div></div></form></div></div><div class="envelopeOut"><img src="images/freetry/envelope_out_top.png" class="envelopeOutTop"><img src="images/freetry/envelope_out_bottom.png" class="envelopeOutBottom"></div></div>');
//     }
//   });
// });

//===================================================================
// scrollTo
//===================================================================
$(function(){

  var
      HEADER  = $("header"),
      FOOTER  = $("footer"),
      WINDOWh = $(window).height(),
      HEADERh = HEADER.innerHeight(),
      FOOPOS  = FOOTER.offset().top,
      FOOINH  = FOOTER.innerHeight();
      /*
      PSCHOW = $("#How").offset().top-30,
      PSCPRC = $("#Process").offset().top-30,
      USER01 = $("#User01").offset().top-30;
      */
  // $(window).scroll(function(){

  //   if ($(window).scrollTop() >= 38 ){
  //     $('header').addClass('small');
  //   }
  //   if ($(window).scrollTop() < 38 ){
  //     $('header').removeClass('small');
  //   }

  // });

  $(document).on("scroll",function(){
    if($(document).scrollTop()>38){
      $("header").removeClass("large").addClass("small");
    }
    else{
      $("header").removeClass("small").addClass("large");
    }
  });

  $("#ToTop").removeClass().css({"display":"none"});
  $(window).scroll(function(){

    if( $(window).scrollTop() < HEADERh ){
      $("#ToTop").removeClass().addClass("fade-out").addClass("visible-lg");
    }
    else {
      $("#ToTop").removeClass().addClass("fade-in").addClass("visible-lg");
    }

  });

  $(window).scroll(function(){

    if( $(window).scrollTop() < FOOPOS-WINDOWh+100 ){
      $("#GoFreeTry").removeClass().addClass("fade-in");
    }
    else {
      $("#GoFreeTry").removeClass().addClass("fade-out");
    }

  });

  $(window).scroll(function(){

    if( $(window).scrollTop() < FOOPOS-WINDOWh+130 ){
      $(".sidenav").fadeIn();
    }
    else {
      $(".sidenav").fadeOut();
    }

  });

  $("#ToTop").click(function(){

    $("html,body").stop(true,false).animate({scrollTop:0},400);

  });

  $(".gofreetry").click(function(){

     $("html,body").stop(true,true).animate({scrollTop:FOOPOS},400);

  });

});

//===================================================================
// characteristic-page
//===================================================================

function FEATURE(){

  $(".feature-content").hide();

  $(".feature-content").eq(0).slideDown(0);
  $(".feature").eq(0).addClass('feature_active');

  $(".feature").click(function(){

    $(this).find(".feature-content").slideDown(300).end().siblings().find(".feature-content").slideUp(300);
    $('.feature:not(this)').removeClass('feature_active').addClass('feature');
    $(this).addClass('feature_active');

  });

  $("#viewall").click(function(){
    $(".feature-content").slideDown(200);
    $(".feature").addClass('feature_active');
  });

}

//===================================================================
// service-page
//===================================================================

function SERVICE_SCROLL() {

  var PSCHOW = $("#How").offset().top-80,
      PSCPRC = $("#Process").offset().top-80,
      PSCCOM = $("#Compare").offset().top-80;
  $("#GoHow").click(function goTop(){
    $("html,body").stop(true,true).animate({scrollTop:PSCHOW},300);
  });
  $("#GoProc").click(function goTop(){
    $("html,body").stop(true,true).animate({scrollTop:PSCPRC},300);
  });
  $("#GoCompare").click(function goTop(){
    $("html,body").stop(true,true).animate({scrollTop:PSCCOM},300);
  });
}

//===================================================================

function STEPGOGO() {

  var NN=0;
  var MOVE=0;
  var TT=0;

  $("#STEP li").eq(0).addClass("active");

  function GOGO(){

    $("#BANNER ol").animate({top:MOVE},800);
    $("#STEP li").removeClass().eq(NN).addClass("active");

    if(NN<3){
      NN += 1;
      MOVE = NN*183*-1;
    }else{
      NN=0;
      MOVE=0;
    }

    TT = setTimeout(GOGO, 2300);
  }
  GOGO();
  //===================================================================
  $("#BANNER,#STEP").hover(function(){
    clearTimeout(TT);
  },function(){
    TT = setTimeout(GOGO, 2300);
  });
  //===================================================================
  $("#STEP li").click( function(){
    NN = $(this).index();
    MOVE = NN*183*-1;
    $("#BANNER ol").animate({top:MOVE},800);
    $(this).addClass("active").siblings().removeClass();
  });

}

//===================================================================
// feedback-page
//===================================================================

function GOUSER() {
  var USER01 = $("#User01").offset().top-69,
      USER02 = $("#User02").offset().top-69,
      USER03 = $("#User03").offset().top-69,
      USER04 = $("#User04").offset().top-69,
      USER05 = $("#User05").offset().top-69;
  $("#GoUser01").click(function goTop(){
    $("html,body").stop(true,true).animate({scrollTop:USER01},300);
  });
  $("#GoUser02").click(function goTop(){
    $("html,body").stop(true,true).animate({scrollTop:USER02},300);
  });
  $("#GoUser03").click(function goTop(){
    $("html,body").stop(true,true).animate({scrollTop:USER03},300);
  });
  $("#GoUser04").click(function goTop(){
    $("html,body").stop(true,true).animate({scrollTop:USER04},300);
  });
  $("#GoUser05").click(function goTop(){
    $("html,body").stop(true,true).animate({scrollTop:USER05},300);
  });
}
//===================================================================
function beforeafter_hand() {
  var IMG1 = 'images/beforeafter_hand_0';
  var divs = $('div[id^="beforeafter_hand_"]');
  var num = divs.length;

  $("#beforeafter_hand_01").hover(function(){
    $(this).attr("src" , IMG1+"1_"+".png");
  },function(){
    $(this).attr("src" , "images/beforeafter_hand_01.png");
  });
  $("#beforeafter_hand_02").hover(function(){
    $(this).attr("src" , "images/beforeafter_hand_02_.png");
  },function(){
    $(this).attr("src" , "images/beforeafter_hand_02.png");
  });
  $("#beforeafter_hand_03").hover(function(){
    $(this).attr("src" , "images/beforeafter_hand_03_.png");
  },function(){
    $(this).attr("src" , "images/beforeafter_hand_03.png");
  });
  $("#beforeafter_hand_04").hover(function(){
    $(this).attr("src" , "images/beforeafter_hand_04_.png");
  },function(){
    $(this).attr("src" , "images/beforeafter_hand_04.png");
  });
  $("#beforeafter_hand_05").hover(function(){
    $(this).attr("src" , "images/beforeafter_hand_05_.png");
  },function(){
    $(this).attr("src" , "images/beforeafter_hand_05.png");
  });
}
//===================================================================
function FANCYBOX() {
  $('.fancybox').fancybox();
}

//===================================================================
// 共用
//===================================================================
// 表單動畫
//===================================================================
$(function(){

  $(".freetry_wrapper").hover(function(){

    $(".letterWrapper").stop(true,false).animate({top:-128},600,"easeOutBounce");
    },function(){
    $(".letterWrapper").stop(true,false).animate({top:-128},600,"easeOutBounce");//38

  });

  $(".freetry_wrapper").hover(function(){

    $(".getInTouch").attr("src","images/freetry/getintouch.png");
    },function(){
    $(".getInTouch").attr("src","images/freetry/getintouch.gif");

  });

});
//===================================================================
// 表單驗證
//===================================================================
function FREETRY_VALIDATE(){
  // validate signup form on keyup and submit
  $('#ss-form').validate({
    rules: {
      "entry.941879327": {
        required: true,
        minlength: 2
      },
      "entry.1522921143": {
        required: true,
        minlength: 7
      },
      "entry.852293836":'required',
      "entry.122263781": {
        email: true
      }
    }, //end rules
    messages: {
      "entry.941879327": {
        required: "必填欄位",
        minlength: "最少2個字"
      },
      "entry.1522921143": {
        required: "必填欄位",
        minlength: "手機或市話,最少7碼,格式如 02-9999-9999"
      },
       "entry.852293836": {
        required: "請選擇您的年齡範圍"
      },
      "entry.122263781": {
        email: "需符合email格式"
      }
    } //end rmessages
  }); // end validate 
}
//須與form表單ID名稱相同
// required：必填欄位
// email：格式要符合E-Mail格式
// url：格式要符合網址格式，如：http://www.minwt.com
// number：數字格包含小數點
// digits：數字為正整數
// date：日期格式
// dataISO：日期格式，格式必需為YYYY/MM/DD、YYYY-MM-DD、YYYYMMDD
// equalTo：與某一欄位值相同

// minValue：最小字元長度
// maxValue：最大字元長度
// rangeValue：字元長度區間長度

// minLength：最小字元長度(漢字算一個字符)
// maxLength：最大字元長度(漢字算一個字符)
// rangeLength：字元長度區間長度(漢字算一個字符)

// $.validator.setDefaults({
//   submitHandler: function() { alert("submitted!"); }
// });

//===================================================================

// $(function(){

//   $('#ss-form :submit').attr('disabled',true);
//   $('#ss-form input[type="text"]').keyup(function() {
//     if(
//       $('#entry_941879327').val().length >= 2 &&
//       $('#entry_1522921143').val().length >= 7 &&
//       $('#entry_852293836').val().length >= 1
//       ) {
//       $('#ss-form :submit').removeAttr('disabled');
//     }
//     else {
//       $('#ss-form :submit').attr('disabled',true);
//     }
//   });

// });