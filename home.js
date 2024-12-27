document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const images = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;
    let currentFilter = 'cuts'; // По умолчанию показываем стрижки

    function showImage(index) {
        // Сброс индекса для текущей категории
        const filteredImages = [...images].filter(img => img.classList.contains(currentFilter));
        
        // Скрыть все изображения, а затем показать нужное
        images.forEach(img => img.classList.remove('active'));
        filteredImages[index].classList.add('active');
    }

    function updateActiveTab(filter) {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-filter') === filter) {
                tab.classList.add('active');
            }
        });
    }

    function updateFilterImages(filter) {
        currentFilter = filter;
        currentIndex = 0; // Сброс текущего индекса
        showImage(currentIndex);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            updateActiveTab(filter);
            updateFilterImages(filter);
        });
    });

    document.querySelector('.next').addEventListener('click', function () {
        const filteredImages = [...images].filter(img => img.classList.contains(currentFilter));
        currentIndex++;
        if (currentIndex >= filteredImages.length) {
            currentIndex = 0; // Вернуться к началу
        }
        showImage(currentIndex);
    });

    document.querySelector('.prev').addEventListener('click', function () {
        const filteredImages = [...images].filter(img => img.classList.contains(currentFilter));
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = filteredImages.length - 1; // Вернуться к концу
        }
        showImage(currentIndex);
    });

    // Изначально показываем только первое изображение
    showImage(currentIndex);
});
