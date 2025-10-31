export function actionTimer() {
    const timerElement = document.querySelector('.commercial-proposal__timer_js');
    
    if (!timerElement) { return null }

    const endTimeString = timerElement.textContent.trim();
    
    // Функция для парсинга формата DD.MM.YYYY HH:MM:SS
    function parseCustomDateFormat(dateString) {
        const [datePart, timePart] = dateString.split(' ');
        const [day, month, year] = datePart.split('.');
        const [hours, minutes, seconds] = timePart.split(':');
        
        // Создаем Date объект (месяцы начинаются с 0)
        return new Date(year, month - 1, day, hours, minutes, seconds);
    }

    const endTime = parseCustomDateFormat(endTimeString);
    
    if (isNaN(endTime.getTime())) {
        console.error('Неверный формат даты:', endTimeString);
        return;
    }

    function updateTimer() {
        const now = new Date();
        const timeDifference = endTime - now;
        
        if (timeDifference <= 0) {
            let parentBlock = document.querySelector(".commercial-proposal");
            parentBlock.classList.remove("active");
            timerElement.textContent = "00 : 00 : 00";
            return;
        }
        
        // Вычисляем общее количество часов, минут и секунд
        const totalHours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        // Форматируем с ведущими нулями
        const formattedHours = totalHours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        
        // Выводим в формате ЧЧ:ММ:СС
        timerElement.textContent = `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
        setTimeout(updateTimer, 1000);
    }
    
    updateTimer();
}

actionTimer();