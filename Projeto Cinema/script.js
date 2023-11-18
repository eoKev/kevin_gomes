const container = document.querySelectorAll(".container");

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("assento") && !e.target.classList.contains("ocupado")) {
        e.target.classList.toggle("selecionado");

    }
});

document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("tr[data-href");
    rows.forEach(row => {
        row.addEventListener("click", () =>{
            window.location.href = row.dataset.href;
        });
    });
});



