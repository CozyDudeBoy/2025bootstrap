$(document).ready(function(){

  //1. 변수선언
  //메인메뉴
  let mnu = $('nav.gnb > ul > li > a');

  //2. 메인메뉴 클릭시 서브메뉴 보이게/보일때 클릭하면 숨기게
  mnu.click(function(){
    //$('.sub').hide(); //보이는 서브메뉴는 모두 숨기고
    //$(this).next().toggle(); //선택한 메인메뉴의 다음 요소 sub가 보이거나 숨기게한다.

    //선택한 a요소의 다음요소인 .sub를 나오거나 숨기게하고 부모요소의 형제요소인 li태그의 자손 .sub를 숨긴다.
    $(this).next().toggle().parent().siblings().find('.sub').hide();
  });

  //main을 클릭하면 .sub를 숨긴다
  $('main').click(function(){
    $('.sub').hide();
  });

  // 갤러리 목록아래 '더보기 ' 버튼 클릭시 
  //ajax비동기 방식으로 json데이터
  // #list추가하기
  $('.more_btn').click(function(e){
    e.preventDefault();

    // return false; //방법1. 이벤트를 무력화

    // 비동기 방식으로 새로고침 없이 json데이터 불러오가
    $.ajax({
      url:'data/data.json', //불러올 파일 이름 지정
      type:'post',//데이터 전송방식
      dataType:'json',//데이터 파일 형식
      success:function(result){ //위 과정이 성공이면 아래 함수 내용을 실행하다.

        var t='<ul>';//시작태그
        $.each(result.product, function(i,e){
          //li태그가 json데이터 개수만큼 추가 되어야
          t+="<li><img src='./images/"+ e.path +"' alt='"+ e.tit +"'></li>";
        });

        t+"</ul>";//종료태그
        $('#list').html(t);
      }
    });

    //더보기 버튼은 숨긴다
    $(this).hide();
    $(this).css('display','none');
    $(this).slideUp();
    $(this).faedOut();
    $(this).css('width','0px');

    // $(window).scroll(function(){
    //   let s_height=$(this).scrollTop;

    //   if(s_height>=300){
    //     // 비동기 방식으로 데이터를 불러온다
    //   }
    // });
  });
  
});