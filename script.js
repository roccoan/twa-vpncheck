document.addEventListener('DOMContentLoaded', () => {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip').textContent = data.ip;
            document.getElementById('country').textContent = data.country_name;
            document.getElementById('city').textContent = data.city;
            document.getElementById('isp').textContent = data.org;
        })
        .catch(error => console.error('Error fetching IP data:', error));

    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const vpnLink = document.getElementById("vpn-link");
    const closeBtn = document.getElementsByClassName("close")[0];

    document.getElementById("masked").onclick = () => {
        modal.style.display = "block";
        modalText.textContent = "Perfetto, la tua VPN sembra funzionare, puoi procedere!";
        vpnLink.style.display = "none";
    };

    document.getElementById("not-masked").onclick = () => {
        modal.style.display = "block";
        modalText.textContent = "La tua posizione non è mascherata, e scaricare file da Telegram potrebbe essere pericoloso. Controlla che la tua VPN sia ON.";
        vpnLink.style.display = "inline-block";
    };

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
