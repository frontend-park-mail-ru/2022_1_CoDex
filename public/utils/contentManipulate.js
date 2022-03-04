export function contentRender() {
  const content = document.createElement('div');
  content.id = 'content';
  root.appendChild(content);
}

export function clearContent() {
  const content = document.getElementById('content');
  if (content) {
    content.innerHTML = '';
  }
  return content;
}
