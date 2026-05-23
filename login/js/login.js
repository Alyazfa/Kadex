document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password-field").value.trim();

    try {
        // Gunakan endpoint API sesuai instruksi LKPD
        const res = await fetch("https://herisusanta.my.id/javalogin/api/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `email=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        });

        const data = await res.json();

        if (data.status === "success") {
            // SIMPAN DATA KE STORAGE
            localStorage.setItem('user', username); 
            localStorage.setItem('isLoggedIn', 'true');

            alert("Login Berhasil!");
            window.location.href = "../index.html"; 
        } else {
            alert("Login Gagal: " + data.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Koneksi API Gagal. Pastikan URL API benar.");
    }
});
