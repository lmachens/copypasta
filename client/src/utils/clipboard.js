export function copyToClipboard(value) {
  const dummy = document.createElement('input');
  document.body.appendChild(dummy);
  dummy.value = value;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}
