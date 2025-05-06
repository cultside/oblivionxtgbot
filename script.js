const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Убираем активность у всех
    buttons.forEach(btn => btn.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    // Добавляем активность к нужной
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

let selectedRating = 0;

document.querySelectorAll('#starSelect span').forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.star);
    document.querySelectorAll('#starSelect span').forEach(s => s.classList.remove('selected'));
    for (let i = 0; i < selectedRating; i++) {
      document.querySelectorAll('#starSelect span')[i].classList.add('selected');
    }
  });
});

function submitReview() {
  const text = document.getElementById('reviewText').value.trim();
  if (selectedRating === 0 || text === '') {
    alert('Пожалуйста, выберите количество звёзд и введите отзыв.');
    return;
  }
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('reviewText').value = '';
  selectedRating = 0;
  document.querySelectorAll('#starSelect span').forEach(s => s.classList.remove('selected'));
}
