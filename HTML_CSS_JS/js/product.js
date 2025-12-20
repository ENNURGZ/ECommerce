const mainImg = document.getElementById("mainImg");
const thumbs = document.getElementById("thumbs");

thumbs.addEventListener("click", (e) => {
    const t = e.target.closest(".thumb");
    if (!t) return;

    document.querySelectorAll(".thumb").forEach(x => x.classList.remove("active"));
    t.classList.add("active");

    mainImg.src = t.dataset.full;
});

/* RENK & BEDEN ACTIVE STATE*/
function singleActive(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.addEventListener("click", (e) => {
        const chip = e.target.closest(".chip");
        if (!chip) return;

        container.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
    });
}

singleActive("colors");
singleActive("sizes");

/*ADET ARTIR / AZALT + VALIDASYON*/
const qtyInput = document.getElementById("qyt");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");

function clampQty() {
    let v = parseInt(qtyInput.value, 10);
    if (isNaN(v) || v < 1) v = 1;
    if (v > 99) v = 99;
    qtyInput.value = v;
}

incBtn.addEventListener("click", () => {
    clampQty();
    if (qtyInput.value < 99) qtyInput.value++;
});

decBtn.addEventListener("click", () => {
    clampQty();
    if (qtyInput.value > 1) qtyInput.value--;
});

qtyInput.addEventListener("input", clampQty);
qtyInput.addEventListener("blur", clampQty);

/* TOAST (BİLDİRİM) SİSTEMİ*/
function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 10);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

/* SEPETE EKLE SİMÜLASYONU*/
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
    const color = document.querySelector("#colors .chip.active")?.dataset.color;
    const size = document.querySelector("#sizes .chip.active")?.dataset.size;
    const qty = qtyInput.value;

    showToast(
        `Sepete eklendi\nRenk: ${color}\nBeden: ${size}\nAdet: ${qty}`
    );

    console.log({
        renk: color,
        beden: size,
        adet: qty
    });
});
