// Function to get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\$]/, '\\$').replace(/[\$]/, '\\$');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Personalized thank you messages based on category
const messages = {
    teaching: "Thank you for sharing your thoughts on teaching and learning. Your feedback helps us improve the educational experience for everyone.",
    facilities: "Thank you for your input on school facilities. We appreciate your suggestions to make our school environment safer and more comfortable.",
    programs: "Thank you for reviewing our school programs. Your ideas are valuable in enhancing our offerings and making them more engaging.",
    services: "Thank you for your feedback on student services. We're committed to supporting you better and ensuring your needs are met.",
    default: "Your feedback has been submitted anonymously. We appreciate your voice in making our school better."
};

// Update message on page load
document.addEventListener('DOMContentLoaded', function() {
    const category = getUrlParameter('category');
    const messageElement = document.getElementById('thankYouMessage');
    messageElement.textContent = messages[category] || messages.default;
});