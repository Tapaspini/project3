function showProfile(player) {
    alert("Showing profile for " + player);
}

document.getElementById('fanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const storyInput = event.target.querySelector('textarea');
    const newStory = document.createElement('div');
    newStory.textContent = storyInput.value;
    document.getElementById('stories').appendChild(newStory);
    storyInput.value = ''; // Clear the input
});