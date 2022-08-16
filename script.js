var modal = document.getElementById('myModal');
var img = document.getElementById('Tranh1');
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];
modal.onclick = function () {
    modal.style.display = "none";
}
window.onload = () => {
    let imgs = document.getElementsByClassName("PhongTo");
    if (imgs.length > 0) {
        for (let i of imgs) {
            i.onclick = function () {
                
                modal.style.display = "block";
                modalImg.src = this.src;
            }
        }
    }
};
