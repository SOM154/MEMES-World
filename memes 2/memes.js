// scripts.js

// Handle meme creation
document.getElementById('meme-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    const memeImage = document.getElementById('meme-image').value;

    // Create the meme preview
    const memePreview = document.createElement('div');
    memePreview.style.position = 'relative';
    memePreview.style.display = 'inline-block';

    const image = document.createElement('img');
    image.src = memeImage;
    image.alt = 'Meme Image';
    image.style.width = '300px';
    image.style.height = '300px';
    image.style.borderRadius = '8px';

    const topTextElement = document.createElement('div');
    topTextElement.innerText = topText;
    topTextElement.style.position = 'absolute';
    topTextElement.style.top = '10px';
    topTextElement.style.left = '50%';
    topTextElement.style.transform = 'translateX(-50%)';
    topTextElement.style.fontSize = '20px';
    topTextElement.style.fontWeight = 'bold';
    topTextElement.style.color = 'white';

    const bottomTextElement = document.createElement('div');
    bottomTextElement.innerText = bottomText;
    bottomTextElement.style.position = 'absolute';
    bottomTextElement.style.bottom = '10px';
    bottomTextElement.style.left = '50%';
    bottomTextElement.style.transform = 'translateX(-50%)';
    bottomTextElement.style.fontSize = '20px';
    bottomTextElement.style.fontWeight = 'bold';
    bottomTextElement.style.color = 'white';

    // Append elements to the meme preview
    memePreview.appendChild(image);
    memePreview.appendChild(topTextElement);
    memePreview.appendChild(bottomTextElement);
    document.getElementById('meme-output').innerHTML = ''; // Clear previous preview
    document.getElementById('meme-output').appendChild(memePreview);
});

// Handle meme upload
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('upload-image');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '300px';
            img.style.height = '300px';
            img.style.borderRadius = '8px';
            document.getElementById('meme-output').innerHTML = ''; // Clear previous preview
            document.getElementById('meme-output').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
// scripts.js

// Handle meme creation
document.getElementById('meme-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    const memeImage = document.getElementById('meme-image').value;

    // Create the meme preview
    const memePreview = document.createElement('div');
    memePreview.style.position = 'relative';
    memePreview.style.display = 'inline-block';

    const image = document.createElement('img');
    image.src = memeImage;
    image.alt = 'Meme Image';
    image.style.width = '300px';
    image.style.height = '300px';
    image.style.borderRadius = '8px';

    const topTextElement = document.createElement('div');
    topTextElement.innerText = topText;
    topTextElement.style.position = 'absolute';
    topTextElement.style.top = '10px';
    topTextElement.style.left = '50%';
    topTextElement.style.transform = 'translateX(-50%)';
    topTextElement.style.fontSize = '20px';
    topTextElement.style.fontWeight = 'bold';
    topTextElement.style.color = 'white';

    const bottomTextElement = document.createElement('div');
    bottomTextElement.innerText = bottomText;
    bottomTextElement.style.position = 'absolute';
    bottomTextElement.style.bottom = '10px';
    bottomTextElement.style.left = '50%';
    bottomTextElement.style.transform = 'translateX(-50%)';
    bottomTextElement.style.fontSize = '20px';
    bottomTextElement.style.fontWeight = 'bold';
    bottomTextElement.style.color = 'white';

    // Append elements to the meme preview
    memePreview.appendChild(image);
    memePreview.appendChild(topTextElement);
    memePreview.appendChild(bottomTextElement);
    document.getElementById('meme-output').innerHTML = ''; // Clear previous preview
    document.getElementById('meme-output').appendChild(memePreview);
});

// Handle meme upload
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('upload-image');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '300px';
            img.style.height = '300px';
            img.style.borderRadius = '8px';
            document.getElementById('meme-output').innerHTML = ''; // Clear previous preview
            document.getElementById('meme-output').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
