const shareBtn = document.querySelectorAll('.share-btn');
const articleFooter = document.querySelector('.article-footer');

shareBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (articleFooter.dataset.state === 'share-clicked') {
            articleFooter.dataset.state = '';
        } else {
            articleFooter.dataset.state = 'share-clicked';
        }
    });
});
