

//top-view ********************************************************************************
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    if (currentIndex === 0) {
        slides[currentIndex].classList.remove('active');
        currentIndex = 1; // 2枚目に切り替え
        slides[currentIndex].classList.add('fade-in');
    }
    setTimeout(onestep, 700);
}

// 3秒後に1枚目がフェードアウトし、2枚目を表示
setTimeout(showNextSlide, 300);

const slideTitle = document.querySelector('.firstView__text');

function showSlideTitle() {

    slideTitle.classList.add('view');
}

// test
const headerText = "Portfolio"; // H1に表示するテキスト
const paragraphText = "YUTAKA ICHIJO"; // Pに表示するテキスト

function displayText(elementId, text) {
    const container = document.getElementById(elementId);
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.textContent = text[i];
        span.classList.add("text");
        container.appendChild(span);

        // 文字が表示されるタイミングを設定
        setTimeout(() => {
            span.style.opacity = 1; // フェードイン
        }, i * 50); // 500ミリ秒ごとに表示
    }
}
function onestep() {
displayText("portfolio", headerText); // H1のテキストを表示
setTimeout(() => {
    displayText("paragraph", paragraphText); // Pのテキストを表示
}, headerText.length * 50); // H1が表示された後にPを表示
};

//FAQーアコーディオンメニュー　************************************************
$(function(){
    // アコーディオンメニューのラベルがクリックされた場合
    $("#ac-menu .label").on("click", function() {
      // labelクラスの次の要素（detailクラス）の表示・非表示を切り替える
      $(this).next().slideToggle();
      // labelクラスにopenクラスを追加したり削除したりする
      // openクラスの追加、削除を行うことでラベルの「－」と「＋」の切り替えを行う
      $(this).toggleClass("open");
    });

//scroll
    // const header = $('#header');
    // //ヘッダーを変数「header」に格納
  
    // $(window).on('scroll', function(){
    // //画面をスクロールした時に〜。スクロールイベントを取得
  
    //   const scroll = $(window).scrollTop();
    //  //スクロール量を変数「scroll」に格納
  
    //   let pastPos = 0;
    //   //今までのスクロール量。初期値は0
  
    //   const start = 300;
    //             //クラスの付け外しが行われるポイント。一番上から300スクロールしたら、実行される
      
    //   if(scroll >= pastPos && scroll >= start){ 
      
  
    //     header.addClass('hide');
    //             //ヘッダーに「hide」というクラスを付与する
  
    //   } else {
    //             //()内の条件に当てはまらなければ
  
    //     header.removeClass('hide');
    //     //ヘッダーの「hide」というクラスを削除する
    //   }
  
    //   pastPos = scroll;
    //   //今までのスクロール量に現在のスクロール量を代入する。
    // });
// header ************************************************************************************************************
    let lastScrollTop = 0;
    const headerBer = document.getElementById('header');

        window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // 下にスクロール
            headerBer.style.top = '-80px'; // ヘッダーを隠す
        } else {
            // 上にスクロール
            headerBer.style.top = '0'; // ヘッダーを表示
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // スクロール位置を更新
        });
        
});
    
    // sub_title_bar ************************************************************************************************************
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hidden');

    const options = {
    root: null, // ビューポート
    rootMargin: '0px',
    threshold: 0.6 // 10%が表示されたときに発火
    };

    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('scroll-in'); // クラスを追加
        observer.unobserve(entry.target); // 監視を解除
        }
    });
    }, options);

    elements.forEach(element => {
    observer.observe(element); // 各要素を監視
    });
});
// hunberger_Menu ******************************************
  const nav = document.querySelector('.header_container');
  const btn = document.querySelector('.toggle_btn');
  const headerNav = document.querySelector('.header_nav');
  const navBox = document.querySelector('.nav_box');
  const lists = document.querySelectorAll('.list');
  const headerBer = document.getElementById('header');
                  
  btn.addEventListener('click', function() {
    nav.classList.toggle('open');
    headerNav.classList.toggle('open');
    navBox.classList.toggle('open');
  });

  lists.forEach((list) =>{
    list.addEventListener('click', function() {
        nav.classList.remove('open');
        headerNav.classList.remove('open');
        navBox.classList.remove('open');
        headerBer.style.top = '-80px';
    });
  });
