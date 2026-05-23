document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password-field").value.trim(); // Sesuaikan dengan ID di HTML

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
            // SIMPAN DATA (Gunakan kunci 'user' agar simpel)
            localStorage.setItem('user', username); 
            localStorage.setItem('isLoggedIn', 'true');

            alert("Login Berhasil!");
            window.location.href = "../index.html"; 
        } else {
            alert("Login Gagal: " + (data.message || "Username/Password salah"));
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert("Gagal terhubung ke server API.");
    }
});
