document.querySelectorAll(".carl").forEach(carl => {
    const items = carl.querySelectorAll(".carlItem");
    const btnHtml = Array.from(items, () => {
        return `<span class="carlButton"></span>`;
    });

    carl.insertAdjacentHTML("beforeend", `
    <div class="carlNav">
    ${ btnHtml.join("") }
    </div>`);
    
    const btn = carl.querySelectorAll(".carlButton");
    // unselects all items.
    btn.forEach((btn, i) =>{
        btn.addEventListener("click", () => {
            items.forEach(item => item.classList.remove("carlItem--selected"));
            btn.classList.remove("carlButton--selected");
            items[i].classList.add("carlItem--selected");
            btn.classList.add("carlButton--selected");
        });
    });
    items[0].classList.add("carlItem--selected");
    btn[0].classList.add("carlButton--selected")
});