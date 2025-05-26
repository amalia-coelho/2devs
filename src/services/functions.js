function time() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function formatPath(filePath) {
  const name = filePath.split('/').pop().replace('.jsx', '');
  return name.toLowerCase() === 'home' ? '/' : `/${name.toLowerCase()}`;
}