document.getElementById('voiceBtn').addEventListener('click', () => {
  const language = document.getElementById('language').value;
  const location = document.getElementById('location').value || "your area";

  alert(Voice assistant activated!\nLanguage: ${language}\nLocation: ${location});
});