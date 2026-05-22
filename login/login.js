document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        });

        const data = await res.json();

        if (data.status === "success") {
            // SIMPAN DATA KE STORAGE (Ini yang paling penting)
            // Kita simpan objek user atau minimal username-nya
            localStorage.setItem('user', JSON.stringify({ name: username }));
            localStorage.setItem('isLoggedIn', 'true');

            alert("Login Berhasil!");
            
            // Redirect ke halaman utama (naik satu level folder)
            window.location.href = "../index.html";
        } else {
            // Logika jika gagal
            const alertBox = document.getElementById("alertBox");
            if (alertBox) {
                alertBox.innerText = "Username atau Password salah!";
                alertBox.style.display = "block";
                setTimeout(() => { alertBox.style.display = "none"; }, 3000);
            } else {
                alert("Username atau Password salah!");
            }
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert("Gagal terhubung ke server.");
    }
});
