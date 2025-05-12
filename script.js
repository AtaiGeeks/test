// Задача 1: Проверка строки на только цифры
function runTask1() {
  const input = document.getElementById("digitInput").value;
  const regExp = /^\d+$/;
  const result = regExp.test(input);
  document.getElementById("result1").textContent = result
    ? "Только цифры ✅"
    : "Есть другие символы ❌";
}

// Задача 2: Каждую секунду выводить "Прошла секунда"
function runTask2() {
  setInterval(() => {
    const output = document.getElementById("intervalOutput");
    output.textContent = "Прошла секунда";
    console.log("Прошла секунда");
  }, 1000);
}

// Задача 3: Вывести от 1 до 10 с интервалом в 1 секунду
function runTask3() {
  let i = 1;
  const output = document.getElementById("intervalOutput"); // Для вывода на страницу
  const interval = setInterval(() => {
    output.textContent = `Прошла секунда: ${i}`; // Выводим результат на экран
    console.log(`Прошла секунда ${i}`);
    i++;
    if (i > 10) {
      clearInterval(interval);
    }
  }, 1000);
}

// Задача 4: Менять фон блока при клике
function runTask4() {
  const box = document.getElementById("colorBox");
  box.classList.toggle("active");
}

// Задача 5: Отправить GET-запрос и вывести данные в консоль
function runTask5() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1"); // Рабочий URL для теста
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log("Полученные данные:", data);
      alert("Запрос выполнен успешно! Проверьте консоль.");
    } else {
      console.error("Ошибка запроса:", xhr.status);
    }
  };
  xhr.send();
}
