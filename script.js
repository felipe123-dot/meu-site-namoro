function calculateTime() {
    let startDate = document.getElementById("startDate").value;
    if (startDate) {
        let start = new Date(startDate);
        let now = new Date();
        let diff = now - start;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let months = Math.floor(days / 30);
        let years = Math.floor(months / 12);

        document.getElementById("result").innerHTML = 
            `Estamos juntos há ${years} anos, ${months % 12} meses e ${days % 30} dias!`;
    }
}

// Upload de imagens
document.getElementById("upload").addEventListener("change", function(event) {
    let files = event.target.files;
    let gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    for (let i = 0; i < files.length; i++) {
        let img = document.createElement("img");
        img.src = URL.createObjectURL(files[i]);
        gallery.appendChild(img);
    }
});
