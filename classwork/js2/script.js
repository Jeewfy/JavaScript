document.addEventListener(`DOMContentLoaded`, function()
{
    if (confirm(`Вы уверены что хотите продолжить?`)) {
        alert(`Подтвержденно`)
    } else {
        alert(`Отменено`)
    }
});