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
  