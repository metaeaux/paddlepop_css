window.addEventListener('load', () => {
  const meta = document.getElementsByName('theme-color')
  if (meta.length) {
    meta[0].content = '#3E478E'
  } else {
    const m = document.createElement('meta');
    m.name = 'theme-color'
    m.content = '#3E478E'
    document.head.appendChild(m);
  }
})
