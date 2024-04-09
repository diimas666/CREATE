// document.getElementById('accordion-js').querySelectorAll('.heading').forEach(function(heading) {
//     heading.addEventListener('click', function() {
//         this.classList.toggle('accord_active');
//         var content = this.nextElementSibling;
//         if (content.style.display === 'block') {
//             content.style.display = 'none';
//         } else {
//             content.style.display = 'block';
//         }
//     });
// });
// Получаем все заголовки вкладок аккордеона
var headings = document.getElementById('accordion-js').querySelectorAll('.heading');

// Закрываем все вкладки, кроме первой 
for (var i = 1; i < headings.length; i++) {
    var content = headings[i].nextElementSibling;
    content.style.display = 'none';
}

// Добавляем обработчики событий для открытия и закрытия вкладок
headings.forEach(function(heading) {
    heading.addEventListener('click', function() {
        // Закрываем все вкладки перед открытием текущей
        headings.forEach(function(h) {
            if (h !== heading) {
                h.classList.remove('accord_active');
                var c = h.nextElementSibling;
                c.style.display = 'none';
            }
        });
        
        // Открываем или закрываем текущую вкладку
        this.classList.toggle('accord_active');
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

