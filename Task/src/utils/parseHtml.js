export const parseHtml = (html) => {
  if (!html) return '';
  
  let text = html.replace(/<[^>]*>/g, '');
  
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  text = textarea.value;
  
  return text.trim();
};

export const stripHtmlTags = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
};