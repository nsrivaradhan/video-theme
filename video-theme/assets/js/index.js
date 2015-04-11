$(document).ready(function(){
     //console.log($('html,body'));
    $("iframe#videoWD").hide();
    $("div.headerSection").css("background-color","black");
    $("a.downward_WD").hide();
    $("a#play").hide();
    var getWidth=$(window).width();
    //console.log(getWidth);
    
                 $(window).on("load",function(){
              var getWidth=Math.max( $(window).width(), window.innerWidth);
             if (getWidth < 768){
                $("div.sharing_wd").hide();
                
         }
             });
    
    (function($){
     
         $(window).on("scroll",function(e){
             var getWidth=Math.max( $(window).width(), window.innerWidth);
            if(getWidth>767){
            var pos=$(window).scrollTop();
            // console.log(pos);
            if(pos<=50){
                $("nav").addClass("navbar-default ");
                $("nav").removeClass("navbar-default1");
                
            }else if(pos>60){
                $("nav").addClass("navbar-default1");
                $("nav").removeClass("navbar-default");
                
            }
            }
             
             $("a.page-scroll").hover(function(){
                 var getWidth=$(window).width();
                 if(getWidth>767){
                    $(this).css("color","white"); 
                 }
                 
             
             }
                 
             );
         });
                
    }(jQuery));
    
    
    
    (function($){
        $(window).on("load",function(evt){
             $("div#footer_WD").hide();
            $("a.page-scroll").css("color","white");
            $("a.page-scroll").css("font-style","bold");
            $("iframe#videoWD").show();
             $("div.headerSection").css("background-color","");
            $("div#loadingIcon").hide();
            $("div.downward_WD").show();
            $("a.downward_WD").show();
            
             var y = $(window).scrollTop();
            //console.log(y);
            if (y <=40) {
            
                
            $("div#footer_WD").fadeOut();
            } else {
          
           $("div#footer_WD").fadeIn();
            
            }
            });
            
            
             $(window).on("scroll",function(evt) {
            var y = $(window).scrollTop();
            //console.log(y);
            if (y <=40) {
            
                
            $("div#footer_WD").fadeOut();
            } else {
          
           $("div#footer_WD").fadeIn();
            
            }
   
            
        });
        
       
    
    }(jQuery));
    
    
    
    
    (function($){
        var getSectionImg=$(".sectionImg");
      //console.log(getSectionImg);
        var getP=getSectionImg.children();
     // console.log(getP);
        var lengthOfP=getP.length;
      //console.log(lengthOfP);
        var getImg=getP.children();
        var lenOfgetImg=getImg.length;
        var lenOfImgAndLink=lenOfgetImg/2;
        
        //console.log(lenOfgetImg);
        //console.log(lenOfImgAndLink);
/***********
GET H5 TAGS
***********/
        
        var getH5=document.getElementsByTagName("h5");
        var lenOfgetH5=getH5.length;
       // console.log(getH5);
        //console.log(lenOfgetH5);
/***********
GET H2 TAGS
************/
        var getH3=document.getElementsByTagName("h3");
       // console.log(getH3);

/***********
GET H6 TAGS
************/
        var getH6=document.getElementsByTagName("h6");
       // console.log(getH6);
/***********
GET H4 TAGS
************/
        var getH4=document.getElementsByTagName("h4");
        var lenOfgetH4=getH4.length;
        //var getValue=getH4.innerHTML;
        //console.log(getH4);
/***********
GET VIDEO
************/
        var getVideo=$(getP[lengthOfP-1]);
       // console.log(getVideo);
        $(getVideo).detach();
        $("section#video_WD").prepend(getVideo);
        $("getVideo").addClass("video_WD");
        var getiFrame=$("iframe#videoWD");
              //console.log(bar);
              var getSrc=getiFrame[0].src;
       
        

             
        
         (function($){
        
          $("div#blogDes").mouseenter(function(){
              $("div#blogDes").css("cursor","pointer");
              $("div#blogDes").fadeOut(1000,function(){
                  
              $("a#play").fadeIn(1000);
              
              $("a#play").attr("href",function(){
                  return getSrc;
              });
              
             //$("div.container_WD").css("padding-top","14.85%");
              
              });
              $("a#play").hover(function(){
                  $(this).css("color", "white");
                  $(this).css("text-decoration", "none");
                  
              });
                       
              });
            
            $("section#video_WD").hover(function(){
                 
                 $("div#blogDes").fadeIn(2000);
                 $("a#play").hide();
                 //$("div.container_WD").css("padding-top","0");
                
                 //$("div.bq_bd_wd").css("display","");
                 
                
            });
             

             
         

     }(jQuery));
        
/*********************
LINK TO THE HOME PAGE
*********************/

        //var getUl=$("a.home_WD");
        //var getHome=getUl[0];
        //console.log(getUl);
        $("a.home_WD,img#headerLogo").on("click", function(){
            $(this).css("cursor","pointer");
            
            $("iframe#videoWD").hide();
            $("div#loadingIcon").show();
            $("a.downward_WD").hide();
            $("div.headerSection").css("background-color","black");
            setTimeout(function(){
            $("iframe#videoWD").show();
            $("div#loadingIcon").hide(); 
            $("div.headerSection").css("background-color","");
            $("a.downward_WD").show();
            },2000);
            
        });
    
/**************************
LINK TO THE DOWNWARD ARROW
***************************/
        $("a.downward_WD").hover(function(){
            $(this).css("opacity","1");
           // var foo=$(this).attr("href","#section_4");
            $("a.downward_WD").on("click",function(event){
                $('html,body').animate({scrollTop:$("a.downward_WD").attr("href")},3000,'easeInOutExpo');
                //event.preventDefault();
            });
            
        },function(){$(this).css("opacity","0.5")});

    
       

             
         $("div.sectionImg").prepend('<div id="carousel_WD" class="carousel slide vertical slider_WD" data-ride="carousel">');
        var foo=$(getP[lenOfImgAndLink]);
        //console.log(foo);
        $("div.sectionImg").prepend("<div class='subtext_WD' id='about'>");
        $("div#about").append(foo);
       
         
/**----------------------------------------------------------------
Images,Links and Carousel
-----------------------------------------------------------------*/
        
        $("div.carousel").prepend('<div class="carousel-inner">');
        $("div.carousel").prepend('<ol class="carousel-indicators carousel_indicators_WD">');
        getImg.each(function(index){
            //console.log(index);
            if(index===0){
                $("div.carousel-inner").append('<div class="item active" id="img0">')
                $("div.active").append(getImg[1]);
                $(getImg[1]).append(getImg[0]);
                $(getImg[0]).addClass("images_about_WD");
                $("div#img0").prepend(getP[lenOfImgAndLink+1]);
                $(getP[lenOfImgAndLink+1]).addClass("title_slider_WD");
                $("div#img0").prepend(getP[lenOfImgAndLink+2]);
                $(getP[lenOfImgAndLink+2]).addClass("subtitle_slider_WD")
                $("div#img0").prepend(getP[lenOfImgAndLink+3]);
                $(getP[lenOfImgAndLink+3]).addClass("description_WD");
                $("div#img0 a").append('<input type="submit" name="link_button0" value=" " id="button0" class="button_slider_WD">');
                
                $("input#button0").attr("value",function(obj ){
               var value_button_WD=$(getP[lenOfImgAndLink+4]).detach();
               var button=value_button_WD.unwrap();
               
               return button[0].innerHTML;
           });
                $("input#button0").hover(function(){
                $(this).addClass("button_about_hover_WD");
           });
                $("input#button0").mouseleave(function(){
                $(this).removeClass("button_about_hover_WD");
           });
          
                
                
                
                $("ol.carousel-indicators").append('<li data-target="#carousel_WD" data-slide-to="0" class="active">');
                
            }else if(index%2===0){
              var counter=index;
              $("div.carousel-inner").append('<div class="item">');
                //console.log(index);
              $("div.item").attr("id",function(index){
                  if(index!==0){
                      var counter=index*2;
                      return "img"+counter;
                  }
                  
              });
             $("div#img"+counter).append (getImg[counter+1]);
             $(getImg[counter+1]).append(getImg[counter]);
             $(getImg[counter]).addClass("images_about_WD");
             $("div#img"+counter).prepend(getH5[counter/2]);
             $(getH5[counter/2]).addClass("title_slider_WD");
             $("div#img"+counter).prepend(getH3[counter/2]);
             $(getH3[counter/2]).addClass("subtitle_slider_WD");
             $("div#img"+counter).prepend(getH6[counter/2]);
             $(getH6[counter/2]).addClass("description_WD");
             $("div#img"+counter+" a").append('<input type="button" name="link_buttons" value=" "  class="button_slider_WD">');
             $("div#img"+counter+" a"+" input").attr("id",function(){
                 return "button"+counter;
             });
             $("input#button"+counter).attr("value",function(){
           // console.log(counter);
                 
             var value_button_WD=$(getH4[(counter/2)-1]);
            //console.log(value_button_WD);
             var button=value_button_WD[0].innerHTML;
            //console.log(button);
             $(getH4).hide();
                 
            //console.log(getH4[(counter/2)-1]);
             //console.log(counter);
             //console.log( button[(counter/2)-1]);
             return button;
             });
             $("input#button"+counter).hover(function(){
               $(this).addClass("button_about_hover_WD");
           });
             $("input#button"+counter).mouseleave(function(){
               $(this).removeClass("button_about_hover_WD");
           });
             
            
             
                //console.log(foo);
                //console.log(getP[lenOfgetImg]);
                //console.log("div#img"+counter);
                
                $("ol.carousel-indicators").append('<li data-target="#carousel_WD">');
                $("ol.carousel-indicators li").attr("data-slide-to",function(index){
                    if(index!==0){
                        return index;
                    }
                    
                });
                
                }
                                 
                 });
        }(jQuery));
    
/********************************************************************
NEWS SECTION
********************************************************************/
    (function($){
    var getsectionText=$(".sectionText");
    //console.log(getsectionText);
    var getChildren=getsectionText.children();
    //console.log(getChildren);
    
   
    
$(getsectionText[0]).prepend('<div  class="news_container_WD" id="news_WD" >');
/********************************************************************
IMAGES INSIDE NEWS
********************************************************************/
        
$("div#news_WD").append('<div class="row" id="news_images_WD">');
$("div#news_images_WD").append('<div class="col-xs-12  col-md-4 col-lg-4  " id="news_image0_WD">');
    
   var getImage0=$(getChildren[0]).detach();
    //console.log(getImage0);
   var getimage0Url=getImage0[0].innerHTML;
   //console.log(getimage0Url);
   $("div#news_image0_WD").prepend(getimage0Url);
   $('img[alt="image0"]').addClass("news_image0_WD");
   $('img[alt="image0"]').attr("id","news_image0_WD");
   $("div#news_image0_WD").hover(function(){
       
       $("img#news_image0_WD").addClass("opacity_WD");
   });
      
   $("div#news_image0_WD").mouseleave(function(){
       $("img#news_image0_WD").removeClass("opacity_WD");
       $("img#news_image0_WD").removeClass("opacity1_WD");
   });
   /**-----------------------------
   RESPONSIVE SECTION
   --------------------------------*/
   $(window).on("load",function(){
       var getWidth=Math.max( $(window).width(), window.innerWidth);
       //console.log(getWidth);
       if(getWidth>869){
           $("div#news_image0_WD").addClass("col-sm-4");
               
   }else{
      $("div#news_image0_WD").addClass("col-sm-12"); 
   }
   });
    $(window).resize(function(){
        var getWidth=Math.max( $(window).width(), window.innerWidth);
        //console.log(getWidth);
       if(getWidth>869){
           $("div#news_image0_WD").addClass("col-sm-4");
            $("div#news_image0_WD").removeClass("col-sm-12");
       
   }else{
       $("div#news_image0_WD").addClass("col-sm-12");
       $("div#news_image0_WD").removeClass("col-sm-4");
   }
   });
   
   
     
    
        
   
   
 $("div#news_images_WD").append('<div class="col-xs-12 col-md-4 col-lg-4  " id="news_image1_WD">');   
   var getImage1=$(getChildren[1]).detach();
    //console.log(getImage1);
   var getimage1Url=getImage1[0].innerHTML;
    //console.log(getimage0Url);
   $("div#news_image1_WD").prepend(getimage1Url);
   $('img[alt="image1"]').addClass("news_image0_WD");
   $('img[alt="image1"]').attr("id","news_image1_WD");
   $("div#news_image1_WD").hover(function(){
   $("img#news_image1_WD").addClass("opacity_WD");
   });
   $("div#news_image1_WD").mouseleave(function(){
       $("img#news_image1_WD").removeClass("opacity_WD");
   });
    /**-----------------------------
   RESPONSIVE SECTION
   --------------------------------*/
  $(window).on("load",function(){
       var getWidth=Math.max( $(window).width(), window.innerWidth);
       //console.log(getWidth);
       if(getWidth>869){
           $("div#news_image1_WD").addClass("col-sm-4");
               
   }else{
      $("div#news_image1_WD").addClass("col-sm-12"); 
   }
   });
    $(window).resize(function(){
        var getWidth=Math.max( $(window).width(), window.innerWidth);
        console.log(getWidth);
       if(getWidth>869){
           $("div#news_image1_WD").addClass("col-sm-4");
            $("div#news_image1_WD").removeClass("col-sm-12");
       
   }else{
       $("div#news_image1_WD").addClass("col-sm-12");
       $("div#news_image1_WD").removeClass("col-sm-4");
   }
   });
  
        
        
    
 $("div#news_images_WD").append('<div class=" col-xs-12 col-md-4 col-lg-4 " id="news_image2_WD">');
    
   var getImage2=$(getChildren[2]).detach();
   // console.log(getImage0);
   var getimage2Url=getImage2[0].innerHTML;
    //console.log(getimage0Url);
   $("div#news_image2_WD").prepend(getimage2Url);
   $('img[alt="image2"]').addClass("news_image0_WD");
   $('img[alt="image2"]').attr("id","news_image2_WD");
   $("div#news_image2_WD").hover(function(){
   $("img#news_image2_WD").addClass("opacity_WD");
   });
   $("div#news_image2_WD").mouseleave(function(){
       $("img#news_image2_WD").removeClass("opacity_WD");
   });
   /**-----------------------------
   RESPONSIVE SECTION
   --------------------------------*/
   $(window).on("load",function(){
       var getWidth=Math.max( $(window).width(), window.innerWidth);
       //console.log(getWidth);
       if(getWidth>869){
           $("div#news_image2_WD").addClass("col-sm-4");
               
   }else{
      $("div#news_image2_WD").addClass("col-sm-12"); 
   }
   });
    $(window).resize(function(){
        var getWidth=Math.max( $(window).width(), window.innerWidth);
        console.log(getWidth);
       if(getWidth>869){
           $("div#news_image2_WD").addClass("col-sm-4");
            $("div#news_image2_WD").removeClass("col-sm-12");
       
   }else{
       $("div#news_image2_WD").addClass("col-sm-12");
       $("div#news_image2_WD").removeClass("col-sm-4");
   }
   });
/********************************************************************
TEXT INSIDE THE IMAGES
********************************************************************/

/************
IMAGE0
*************/
    
    var getNewsTitle0= $(getChildren[3]);
   //console.log(getNewsTitle0);
    var title0_news_WD= getNewsTitle0[0].innerHTML;
    //console.log(title0_news_WD);
    $(getNewsTitle0).detach();
    $("div#news_image0_WD").append('<div class="title_news_WD" id="title0_news_WD">');
    $("div#title0_news_WD").append(title0_news_WD);
    
     var getNewsSubTitle0= $(getChildren[4]);
    //console.log(getNewsSubTitle0);
    var subTitle0_news_WD= getNewsSubTitle0[0].innerHTML;
    //console.log(subTitle0_news_WD);
    $(getNewsSubTitle0).detach();
    $("div#news_image0_WD").append('<div class="subtitle_news_WD" id="subtitle0_news_WD">');
    $("div#subtitle0_news_WD").append(subTitle0_news_WD);
        
    var getNewsDes0= $(getChildren[5]);
    //console.log(getNewsDes0);
    var des0_news_WD= getNewsDes0[0].innerHTML;
    //console.log(des0_news_WD);
    $(getNewsDes0).detach();
    $("div#news_image0_WD").append('<div class="des0_news_WD" id="des0_news_WD">');
    $("div#des0_news_WD").append(des0_news_WD);
        
    var getNewsButton0=$(getChildren[6]).detach();
    //console.log(getNewsButton0);
    var getNewsLink0=$(getChildren[7]).detach();
   // console.log(getNewsLink0);
    var getNewsATag0= getNewsLink0[0].innerHTML;
    //console.log(getNewsATag0);
    
    
var setNewsLink0=$("div#news_image0_WD").append(getNewsATag0); 
$("div#news_image0_WD a").attr("id","link0_news_WD");    
$("div#news_image0_WD a").addClass("link0_news_WD"); 
$("a#link0_news_WD").append('<input type="button" name="link_button" value=" " id="button0_news">')
        
           $("input#button0_news").attr("value",function(obj ){
               var value_button_WD=getNewsButton0[0].innerHTML;
               
               //console.log(value_button_WD);
               return value_button_WD;
     });
$("input#button0_news").addClass("submit_news_WD");
$("input#button0_news").hover(function(){
    $(this).addClass("submit_news_hover_WD");
});
$("input#button0_news").mouseleave(function(){
    $(this).removeClass("submit_news_hover_WD");
});
    
/************
IMAGE1
*************/
     
        
    var getNewsTitle1= $(getChildren[8]);
    //console.log(getNewsTitle1);
    var title1_news_WD= getNewsTitle1[0].innerHTML;
    //console.log(title1_news_WD);
    $(getNewsTitle1).detach();
    $("div#news_image1_WD").append('<div class="title_news_WD" id="title1_news_WD">');
    $("div#title1_news_WD").append(title1_news_WD);
    
     var getNewsSubTitle1= $(getChildren[9]);
    //console.log(getNewsSubTitle1);
    var subTitle1_news_WD= getNewsSubTitle1[0].innerHTML;
    //console.log(subTitle1_news_WD);
    $(getNewsSubTitle1).detach();
    $("div#news_image1_WD").append('<div class="subtitle_news_WD" id="subtitle1_news_WD">');
    $("div#subtitle1_news_WD").append(subTitle1_news_WD);
        
    var getNewsDes1= $(getChildren[10]);
    //console.log(getNewsDes1);
    var des1_news_WD= getNewsDes1[0].innerHTML;
    //console.log(des1_news_WD);
    $(getNewsDes1).detach();
    $("div#news_image1_WD").append('<div class="des0_news_WD" id="des1_news_WD">');
    $("div#des1_news_WD").append(des1_news_WD);
        
    var getNewsButton1=$(getChildren[11]).detach();
    //console.log(getNewsButton0);
    var getNewsLink1=$(getChildren[12]).detach();
   // console.log(getNewsLink0);
    var getNewsATag1= getNewsLink1[0].innerHTML;
    //console.log(getNewsATag0);
    
    
$("div#news_image1_WD").append(getNewsATag1); 
$("div#news_image1_WD a").attr("id","link1_news_WD");    
$("div#news_image1_WD a").addClass("link0_news_WD"); 
$("a#link1_news_WD").append('<input type="button" name="link_button" value=" " id="button1_news">');
        
           $("input#button1_news").attr("value",function(obj ){
               var value_button_WD=getNewsButton0[0].innerHTML;
               
               //console.log(value_button_WD);
               return value_button_WD;
     });
 $("input#button1_news").addClass("submit_news_WD");
 $("input#button1_news").hover(function(){
    $(this).addClass("submit_news_hover_WD");
   });
 $("input#button1_news").mouseleave(function(){
    $(this).removeClass("submit_news_hover_WD");
  });
    
/************
IMAGE2
*************/
     
        
    var getNewsTitle2= $(getChildren[13]);
    //console.log(getNewsTitle1);
    var title2_news_WD= getNewsTitle2[0].innerHTML;
    //console.log(title2_news_WD);
    $(getNewsTitle2).detach();
    $("div#news_image2_WD").append('<div class="title_news_WD" id="title2_news_WD">');
    $("div#title2_news_WD").append(title2_news_WD);
    
     var getNewsSubTitle2= $(getChildren[14]);
    //console.log(getNewsSubTitle2);
    var subTitle2_news_WD= getNewsSubTitle2[0].innerHTML;
    //console.log(subTitle2_news_WD);
    $(getNewsSubTitle2).detach();
    $("div#news_image2_WD").append('<div class="subtitle_news_WD" id="subtitle2_news_WD">');
    $("div#subtitle2_news_WD").append(subTitle2_news_WD);
        
    var getNewsDes2= $(getChildren[15]);
    //console.log(getNewsDes2);
    var des2_news_WD= getNewsDes2[0].innerHTML;
    //console.log(des2_news_WD);
    $(getNewsDes2).detach();
    $("div#news_image2_WD").append('<div class="des0_news_WD" id="des2_news_WD">');
    $("div#des2_news_WD").append(des2_news_WD);
        
    var getNewsButton2=$(getChildren[16]).detach();
    //console.log(getNewsButton2);
    var getNewsLink2=$(getChildren[17]).detach();
    //console.log(getNewsLink2);
    var getNewsATag2= getNewsLink2[0].innerHTML;
    //console.log(getNewsATag2);
    
    
var setNewsLink1=$("div#news_image2_WD").append(getNewsATag2); 
$("div#news_image2_WD a").attr("id","link2_news_WD");    
$("div#news_image2_WD a").addClass("link0_news_WD"); 
$("a#link2_news_WD").append('<input type="button" name="link_button" value=" " id="button2_news">');
        
           $("input#button2_news").attr("value",function(obj ){
               var value_button_WD=getNewsButton2[0].innerHTML;
               
               //console.log(value_button_WD);
               return value_button_WD;
     });
$("input#button2_news").addClass("submit_news_WD");
$("input#button2_news").hover(function(){
    $(this).addClass("submit_news_hover_WD");
});
$("input#button2_news").mouseleave(function(){
    $(this).removeClass("submit_news_hover_WD");
});
    }(jQuery));
    

(function($){
    var getsectionText=$(".sectionText");
    //console.log(getsectionText);


    
/*********************************************************************
REMOVING THE CONTACT PAGE FROM NEWS SECTION
********************************************************************/
    var getNewsSection=$(getsectionText[0]).children();
    //console.log(getNewsSection);
    $(getNewsSection[2]).remove();
    
/*********************************************************************
THE HEADLINE FOR THE NEWS SECTION
********************************************************************/
    var getHL= $(getNewsSection[1]);
    //console.log(getHL);
    var headLine=getHL[0].innerHTML;
    //$(getHL).detach();
    $("div#news_WD").prepend(getHL);
    $("div#news_WD p").addClass("headLine_WD");
    
/******************************************************************
PLACING THE ELEMENTS IN THE CONTACT US SECTION
******************************************************************/

/*********************************************************************
THE HEADLINE FOR THE CONTACT US  SECTION
********************************************************************/
    var getCUSection=$(getsectionText[1]).children();
    //console.log(getCUSection);
    $(getCUSection[0]).addClass("headLine_WD");

/********************************
REMOVING THE ADDRESS AND THE MAP
*********************************/
    var getElement1CU=$(getsectionText[1]).children();
    console.log(getElement1CU);
    $(getElement1CU[1]).remove();
    $(getElement1CU[2]).remove();
    $(getElement1CU[3]).remove();
    
        
/*********************************
PLACEMENT OF ADDRESS AND THE MAP
**********************************/
    
    var getElement2CU=$("div#container_CU_WD").children();
    console.log(getElement2CU);
    $(getElement2CU[0]).remove();
    $(getElement2CU[1]).addClass("address_WD");
    $(getElement2CU[2]).addClass("address_WD");
    $(getElement2CU[3]).addClass("address_WD");   
   
    
/***********************************************
STYLING FOR THE INPUT BOX IN CONTACT US SECTION
***********************************************/
    
       // $(this).css("border-color","red");
        $("input.textbox_WD").each(function(){
        $("input.textbox_WD").focusin(function(){
        
        $(this).keyup(function(){
             var lenTextboxValue= $(this).val().length;
              if(lenTextboxValue > 0){
       $(this).css("border-color","green");
              }
        else{
            $(this).css("border-color","red");
        }
        
      
        
        
   });
        });//function(){
            
            //$(this).css("border-color","grey");
           
            
        //});
    
    $("input.textbox_WD").focusin(function(){
         
        $(this).keyup(function(){
             var lenTextboxValue= $(this).val().length;
              if(lenTextboxValue > 0){
       $(this).css("border-color","green");
              }
        else{
            $(this).css("border-color","red");
        }
        
    });
    });
    
     $("input.textbox_WD").focusout(function(){
         
        $(this).keyup(function(){
             var lenTextboxValue= $(this).val().length;
              if(lenTextboxValue > 0){
       $(this).css("border-color","green");
              }
        else{
            $(this).css("border-color","red");
        }
        
    });
    });
    
/***********************************************
STYLING FOR THE TEXT AREA IN CONTACT US SECTION
***********************************************/
    $("textarea.textarea_WD").hover(function(){
         
        $("textarea.textarea_WD").keyup(function(){
            var lenTextareaValue=$(this).val().length;
            if(lenTextareaValue>0){
                $(this).css("border-color","green");
            }else{
                 $(this).css("border-color","red");
            }
        });
    });//function(){
        
         //$(this).css("border-color","grey");
        
   // });
        
 $(window).load(function(){
        var getWidth=Math.max( $(window).width(), window.innerWidth);
        //console.log(getWidth);
        if(getWidth<=479){
        document.getElementById("myTextarea").cols = "20";
        }else if(getWidth>=480 && getWidth<=767){
        document.getElementById("myTextarea").cols = "35";
            
        }else{
        document.getElementById("myTextarea").cols = "50";
        }
        
    
        
    });
    
/**------------------------------------------------
RESPONSIVE SECTION ON DECIDING THE BOOTSTRAP CLASS
--------------------------------------------------*/
        
 $(window).on("load",function(){
       var getWidth=Math.max( $(window).width(), window.innerWidth);
       //console.log(getWidth);
       if(getWidth>=600){
           $("div.contact_WD").addClass("col-xs-6");
               
   }else{
      $("div.contact_WD").addClass("col-xs-12"); 
   }
   });
    $(window).resize(function(){
        var getWidth=Math.max( $(window).width(), window.innerWidth);
        console.log(getWidth);
       if(getWidth>=600){
           $("div.contact_WD").addClass("col-xs-6");
            $("div.contact_WD").removeClass("col-xs-12");
       
   }else{
       $("div.contact_WD").addClass("col-xs-12");
       $("div.contact_WD").removeClass("col-xs-6");
   }
   });


        
    
            
          
        
   
        
      
    });

/*********************************
FOOTER SECTION
**********************************/
/**-----------------------------
   SUBMIT SECTION
--------------------------------*/
    $("input.submit_footer_WD").hover(function(){
        $(this).css("background-color","grey");
        $(this).css("color","white");
        $(this).css("border-color","grey");
        
    });
    $("input.submit_footer_WD").mouseleave(function(){
        $(this).css("background-color","white");
        $(this).css("color","black");
        
    });
/**-----------------------------
RESPONSIVE SECTION
--------------------------------*/
    $(window).load(function(){
         var getWidth=Math.max( $(window).width(), window.innerWidth);
         if(getWidth>869){
             $("div.sec2_WD").addClass("col-sm-4");
          }else{
             $("div.sec2_WD").addClass("col-sm-12"); 
          }
        
    });
    
     $(window).resize(function(){
         var getWidth=Math.max( $(window).width(), window.innerWidth);
         if(getWidth>869){
             $("div.sec2_WD").addClass("col-sm-4");
             $("div.sec2_WD").removeClass("col-sm-12");
          }else{
             $("div.sec2_WD").addclass("col-sm-12"); 
             $("div.sec2_WD").removeClass("col-sm-12");
             $(".email_WD").attr("width","30%");
             
              
          }
        
    });
   

 }(jQuery));

/*********************************
ANIMATING THE NAVI BUTTON
**********************************/
    var clickCounter=0;
    $("button.button_WD").click(function(){
        clickCounter=clickCounter+1;
        //console.log(clickCounter);
        $("a.home_WD").css("color","black");
        $("a.home_WD").hover("color","black");
        $("a.page-scroll").css("color","black");
        $("nav").css("border","none");
        $("ul.ul_wd").css("background-color","white");
         $("ul.ul_wd").css("top","85%");
        $("ul.ul_wd").css("height","600px");
       
        
        
        if (clickCounter%2!==0){
              $("div.container_WD").css("overflow-x","hidden");
              $("div.wrapper_wiredelta").css("overflow-x","initial");
             $("section#video_WD").animate({
            position:"relative",
            marginLeft: "20%"
        },1000);
        $("div.container_WD").animate({
            position:"relative",
            marginLeft: "20%"
        },1000);
         $("div.container1_WD").animate({
            position:"relative",
            marginLeft: "20%"
        },1000); 
        }else {
            $("div.container_WD").css("overflow-x","none");
            $("div.wrapper_wiredelta").css("overflow-x","hidden");
             $("section#video_WD").animate({
            position:"relative",
            marginLeft: ""
        },1000);
        $("div.container_WD").animate({
            position:"relative",
            marginLeft: ""
        },1000);
         $("div.container1_WD").animate({
            position:"relative",
            marginLeft: ""
        },1000); 
            
        }
          
    });
  
             $(window).on("load",function(){
              var getWidth=Math.max( $(window).width(), window.innerWidth);
             if (getWidth < 768){
                $("div.sharing_wd").hide();
                
         }
             });

/*********************************
TEXT AREA SIZE FIXING
**********************************/
   
    
    
  
    
 
    
    
   
    
    
});
            
            
          
           
        
        
      