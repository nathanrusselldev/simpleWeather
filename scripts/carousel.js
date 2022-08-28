document.querySelectorAll(".carl").forEach(carl => {
    const items = carl.querySelectorAll(".carlItem");
    const btnHtml = Array.from(items, () => {
        return `<span class="carlButton"></span>`;
    });

    carl.insertAdjacentHTML("beforeend", `
    <div class="carlNav">
    ${ btnHtml.join("") }
    </div>`);
    
    const btns = carl.querySelectorAll(".carlButton");

    btns.forEach((btn, i) => {

        btn.addEventListener("click", () => {
            // unselects all items.
            items.forEach(item => item.classList.remove("carlItem--selected")
            );
            btns.forEach(btn => btn.classList.remove("carlButton--selected")
            );

            items[i].classList.add("carlItem--selected");

            btn.classList.add("carlButton--selected");
        });
    });
    items[0].classList.add("carlItem--selected");
    btns[0].classList.add("carlButton--selected")
});