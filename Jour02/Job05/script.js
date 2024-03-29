window.addEventListener('scroll', function() {
  const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const colorIntensity = Math.round(255 * scrollPercentage);
  document.querySelector('footer').style.backgroundColor = `rgb(${colorIntensity}, 0, ${255 - colorIntensity})`;
});
