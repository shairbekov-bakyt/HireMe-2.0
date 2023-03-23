export const animHome = () => {

    const h = document.querySelector("#h");
    const b = document.body;
    const a = document.querySelector("#a");
    let base = (e) => {
        var x = e.pageX / a.clientWidth - 0.5;
        var y = e.pageY / a.clientHeight - 0.5;
        h.style.transform = `
        perspective(90vw)
        rotateX(${y * 4 + 75}deg)
        rotateZ(${-x * 12 + 45}deg)
        translateZ(-9vw)
    `;
    }

    a.addEventListener("pointermove", base);
}