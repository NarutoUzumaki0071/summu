document.getElementById('noteBtn').addEventListener('click', () => {
  const hiddenNote = document.getElementById('hiddenNote');
  hiddenNote.style.display = hiddenNote.style.display === 'none' ? 'block' : 'none';
});
