function setLegalLanguage(language) {
    const selected = language === "es" ? "es" : "en";
    document.documentElement.lang = selected;
    document.querySelectorAll("[data-legal-language]").forEach((section) => {
        section.hidden = section.dataset.legalLanguage !== selected;
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
        button.classList.toggle("active", button.dataset.language === selected);
    });
    try { localStorage.setItem("clr91dev-site-language", selected); } catch (_) {}
}

function initialLegalLanguage() {
    try {
        const saved = localStorage.getItem("clr91dev-site-language");
        if (saved === "en" || saved === "es") return saved;
    } catch (_) {}
    return (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
}

document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLegalLanguage(button.dataset.language));
});
setLegalLanguage(initialLegalLanguage());
