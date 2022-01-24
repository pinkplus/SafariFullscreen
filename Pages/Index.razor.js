export function init() {
    document.getElementById('jsbutton').addEventListener('click', enterFullscreen);
}

export function enterFullscreen() {
    const element = document.getElementById('container');
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}
