/**
 * @description Создаёт контент страницы в виде HTML Div,
 * id "content". Прикрепляет его в корень страницы.
 */
export function contentRender() {
  const content = document.createElement("div");
  content.id = "content";
  root.appendChild(content);
}

/**
 * @return { HTMLDivElement } Контент страницы (очищенный)
 * @description Очищает контент страницы (элемент с id "content")
 */
export function clearContent() {
  const content = document.getElementById("content");
  if (content) {
    content.innerHTML = "";
  }
  return content;
}
