// Функция загрузки HTML-файла из подпапки
async function loadArticle(category, articleName) {
  let response = await fetch(`articles/${category}/${articleName}.html`);
  if (!response.ok) {
      console.error(`Ошибка загрузки ${category}/${articleName}: ${response.statusText}`);
      return "Статья не найдена";
  }
  return response.text();
}

// Функция показа статьи
async function showArticle(category, article) {
  let content = await loadArticle(category, article);
  document.getElementById('article').innerHTML = content;

  // Подсветка кода (если есть в статье)
  document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
  });
}

// Функция показа контента в средней панели
async function showContent(sectionName) {
  let response = await fetch(`content/${sectionName}.html`); // Загружаем HTML-файл
  if (!response.ok) {
      console.error(`Ошибка загрузки ${sectionName}: ${response.statusText}`);
      return "Контент не найден";
  }
  let content = await response.text();
  document.getElementById('content').innerHTML = content;
  document.getElementById('article').innerHTML = ''; // Очищаем статью
}

// Загружаем статью и контент по умолчанию при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  showArticle("sql_intro"); // Загружаем статью по умолчанию
  showContent("executionChronology"); // Загружаем контент по умолчанию
});


