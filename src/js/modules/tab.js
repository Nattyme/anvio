function tab() {
    // Находим все табы
    const tabs = document.querySelectorAll('[data-control="tab"]');
    
    tabs.forEach(function (tab) {
        const tabButtons = tab.querySelectorAll('[data-control="tab-button"]');
        const tabBlocks = tab.querySelectorAll('[data-control="tab-block"]');

        tabButtons.forEach(function (item, index) {
            item.addEventListener('click', function(){
                const currentButton = item; // Кнопка по которой кликнули
                const contentBlocks = tab.querySelectorAll('[data-control="tab-block"]'); // block который надо показать
                const currentBlock = contentBlocks[index];

                if (!currentButton.classList.contains('tab__nav-btn--active')) {
                    tabButtons.forEach(function(item){
                        item.classList.remove('tab__nav-btn--active');
                    });

                    tabBlocks.forEach(function (item) {
                        item.classList.remove('tab__block--active');
                    });
                };

                //Добалвяем активный класс к кнопке по которой кликнули 
                currentButton.classList.add('tab__nav-btn--active');
                //Добавляем активный класс к блоку, который нужно показать
                currentBlock.classList.add('tab__block--active');
            });
        });
    });
}

export default tab;