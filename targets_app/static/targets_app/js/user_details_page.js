window.onload = async () => {
    await set_profile_image();
}


async function set_profile_image() {
    let instagram_id = document.getElementById('instagram_id').value;
    let profile_image = document.getElementById('profile_image')
    await checkImageExists(`/files/profile_images/${instagram_id}.jpg`).then((finalSrc) => {
        profile_image.src = finalSrc;
    });
}

function checkImageExists(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = url;

        img.onload = () => resolve(url);
        img.onerror = () => resolve('/files/profile_images/no_img.jpg');
    });
}