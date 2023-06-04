export  function ShowError(isError) {
    let translateError = "";
if(isError === 'Validation Failed: {"resource":"Search","field":"q","code":"missing"}'){
    translateError = "Введите значение"
} else if(isError === 'API rate limit exceeded for user ID 119960518.'){
    translateError = "Превышен лимит запросов"
} else{
    translateError = "Неизвестная ошибка";
}
return translateError;
}