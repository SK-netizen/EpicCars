function loadHTML(a,id) {
    document.getElementById(id).addEventListener("click", () => {
        document.getElementById("iframe").src=a;
    });
}