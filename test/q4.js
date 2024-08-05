const image = document.getElementById('image');
const changeButton = document.getElementById('change-button');
let currentImage = 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg';
let nextImage = 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg';

changeButton.addEventListener('click', () => {
    if (currentImage === 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg') {
        image.src = nextImage;
        currentImage = nextImage;
        nextImage = 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg';
    } else {
        image.src = nextImage;
        currentImage = nextImage;
        nextImage = 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg';
    }
});