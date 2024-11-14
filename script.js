// Scroll function for hero button
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Add blog post to the blog section
function addPost() {
    const postContent = document.getElementById("newPostContent").value;
    if (postContent) {
        const postList = document.getElementById("postList");
        const post = document.createElement("div");
        post.classList.add("post");
        post.textContent = postContent;
        postList.appendChild(post);
        document.getElementById("newPostContent").value = ""; // Clear the textarea
    }
}

// Photo upload function
function uploadPhoto() {
    const fileInput = document.getElementById("photoUpload");
    const photoGallery = document.getElementById("photoGallery");
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            photoGallery.appendChild(img);
        };
        reader.readAsDataURL(file);
        fileInput.value = ""; // Clear file input after uploading
    }
}
