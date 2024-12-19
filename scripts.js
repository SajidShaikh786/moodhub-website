// Handle mood selection
function updateMood(mood) {
  const moodValue = document.getElementById('mood-value');
  moodValue.innerText = "You are feeling " + mood;

  // Display recommended content based on mood
  const recommendations = document.getElementById('recommendations-list');
  let content = "";
  
  if (mood === 'Happy') {
    content = "🎶 Recommended Song: Happy - Pharrell Williams";
  } else if (mood === 'Sad') {
    content = "🎶 Recommended Song: Someone Like You - Adele";
  } else if (mood === 'Excited') {
    content = "🎶 Recommended Song: Can't Stop The Feeling - Justin Timberlake";
  } else if (mood === 'Anxious') {
    content = "🎶 Recommended Song: Weightless - Marconi Union";
  } else {
    content = "🎶 Recommended Song: Imagine - John Lennon";
  }
  recommendations.innerHTML = content;
}

// Handle mood slider
const moodSlider = document.getElementById('mood-slider');
moodSlider.addEventListener('input', function() {
  const moodValue = document.getElementById('mood-value');
  moodValue.innerText = `Mood scale: ${moodSlider.value}`;
});
