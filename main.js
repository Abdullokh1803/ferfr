// https://api.telegram.org/bot8020680203:AAGz4hJzIS5DFCbzcXhQ5Rz9G9saAtU849s/getUpdates

let TOKEN = "8020680203:AAGz4hJzIS5DFCbzcXhQ5Rz9G9saAtU849s";
let CHAT_ID = "2016554248";
let API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let success = document.querySelector("#success");
let form = document.querySelector("#tg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let message = `<b><i>Заявка с сайта</i></b>\n`;
  message += `<b>Отправитель:</b> ${this.username.value}\n`;
  message += `<b>Номер:</b> ${this.number.value}\n`;
  message += `<b>Почта:</b> ${this.email.value}`;
  axios
    .post(API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      (this.username.value = ""),
        (this.number.value = ""),
        (this.email.value = ""),
        (success.style.display = "block");
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => console.log("SUCCESS!"));
});

// Hello World
