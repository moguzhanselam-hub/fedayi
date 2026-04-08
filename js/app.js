async function urunleriYukle() {
    try {
        const cevap = await fetch('urunler.json');
        const urunler = await cevap.json();
        const liste = document.getElementById('urun-listesi');

        liste.innerHTML = urunler.map(urun => `
            <div class="product-card comic-border">
                <img src="${urun.resim}" alt="${urun.ad}">
                <h2>${urun.ad}</h2>
                <p>${urun.aciklama}</p>
                <span class="price">${urun.fiyat} TL</span>
                <button onclick="odemeGoster('${urun.ad}')">Satın Al (Havale)</button>
            </div>
        `).join('');
    } catch (hata) {
        console.error("Hata:", hata);
    }
}

function odemeGoster(urunAdi) {
    document.getElementById('secilen-urun-adi').innerText = "Seçilen Ürün: " + urunAdi;
    document.getElementById('payment-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

// Sayfa açıldığında ürünleri getir
urunleriYukle();