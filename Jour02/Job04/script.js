document.addEventListener('keydown', function(event) {
  const keylogger = document.getElementById('keylogger');
  if (document.activeElement === keylogger) {
      keylogger.value += event.key + event.key;
  } else {
      keylogger.value += event.key;
  }
});
