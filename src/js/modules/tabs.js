function tabs() {
    const tabButtons = document.querySelectorAll('.events-tab__btn');
    const tabBlocks = document.querySelectorAll('.events-tab-block');

    tabButtons.forEach(function(item){
        item.addEventListener('click', function(){
            const currentButton = item;
            const blockIdSelector = currentButton.getAttribute('data-tab');
            const currentBlock = document.querySelector(blockIdSelector);

            tabButtons.forEach(function (item){
                item.classList.remove('events-tab__btn--active');
            });

            tabBlocks.forEach(function(item){
                item.classList.remove('events-tab-block--active');
            });

            currentButton.classList.add('events-tab__btn--active');
            currentBlock.classList.add('events-tab-block--active');
        });
    });

    //Fake click
    document.querySelector('.events-tab__btn').click();
}

export default tabs;