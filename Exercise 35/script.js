function changeImage() {
    const image = document.querySelector("#myImage");
    const imageUrl = prompt("Enter a new image URL:");
    const borderColor = prompt("Enter the border color:");
    const imageWidth = prompt("Enter the image width in pixels:");
    const imageHeight = prompt("Enter the image height in pixels:");
    const borderRadius = prompt("Enter the border radius in pixels:");

    image.setAttribute('src', imageUrl);
    image.style.border = `2px solid ${borderColor}`;
    image.style.width = `${imageWidth}px`;
    image.style.height = `${imageHeight}px`;
    image.style.borderRadius = `${borderRadius}px`;
    image.style.padding = "10px";
    image.style.backgroundColor = '#2a7efc';
}