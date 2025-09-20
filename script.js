document.getElementById("contactForm").addEventListener("submit, function(e) {e.preventDefaut() ;
    document.getElementById("confirmation").classList.remove("hidden");
    this.reset();
});