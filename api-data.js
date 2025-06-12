import axios from "axios";

const url = 'https://icherniakov.ru/yt-course/account/test_accounts'

// Получаем данные от сервера через fetch
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Получаем данные от сервера через async/await
const getData = async () => {
    try {
        const response = await fetch(url)
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.error(error);
    }
}
getData()

// Получаем данные от сервера через axion
const getDataAxion = async () => {
    try {
        const response = await axios.get(url)
        console.log('Данные: ', response.data)
    } catch (error) {
        console.error(error)
    }
}
getDataAxion()

// variant 2 axion
axios.get(url)
    .then(response => console.log(response.data));