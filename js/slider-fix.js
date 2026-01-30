// Исправление бесконечной прокрутки слайдера отзывов
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.review-slider');
    const mask = document.querySelector('.review-slider-mask');
    const items = document.querySelectorAll('.review-slider-item');
    
    if (slider && mask && items.length > 0) {
        // Клонируем карточки для бесконечной прокрутки
        const totalWidth = Array.from(items).reduce((sum, item) => {
            return sum + item.offsetWidth + 24; // 24px = margin-right
        }, 0);
        
        // Создаем клонированные карточки
        items.forEach((item, index) => {
            const clone = item.cloneNode(true);
            clone.setAttribute('data-clone', 'true');
            mask.appendChild(clone);
        });
        
        // Устанавливаем правильную ширину и прокрутку
        mask.style.width = totalWidth + 'px';
        mask.style.overflow = 'hidden';
        mask.style.display = 'flex';
        
        // Автоматическая прокрутка
        let currentPosition = 0;
        const scrollWidth = items[0].offsetWidth + 24; // ширина одной карточки с отступом
        
        function autoScroll() {
            currentPosition += scrollWidth;
            if (currentPosition >= totalWidth) {
                currentPosition = 0; // возвращаем в начало
            }
            mask.scrollTo({
                left: currentPosition,
                behavior: 'smooth'
            });
        }
        
        // Запускаем автопрокрутку
        setInterval(autoScroll, 3000); // каждые 3 секунды
    }
});
