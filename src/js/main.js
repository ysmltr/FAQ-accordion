const faqAccordion = document.querySelectorAll(".faq-items");

faqAccordion.forEach((item) => {
    const faqTitle = item.querySelector(".faq-header");
    faqTitle.addEventListener("click", () => {
        const content = item.querySelector(".content");
        const contentActived = document.querySelector(".active");

        VerifyActive(item, content, contentActived);
    });
});

function VerifyActive(item, content, contentActived) {
    const iconItem = item.querySelector(".plus-icon");

    if (contentActived) {
        contentActived.style.height = 0;
        contentActived.classList.remove("active");
        iconItem.src = "./assets/images/icon-plus.svg";
    }

    if (content !== contentActived) {
        iconItem.src = "./assets/images/icon-minus.svg";
        content.classList.add("active");
        content.style.height = content.scrollHeight + "px";
    }
}
