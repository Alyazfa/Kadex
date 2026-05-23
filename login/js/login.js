document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
<<<<<<< HEAD
    const password = document.getElementById("password").value.trim();

    const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    });
=======
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
>>>>>>> ed323fae4538034c61a6a365057dbda3a4ebbdc4

    const data = await res.json();

<<<<<<< HEAD
    if (data.status === "success") {
        // simpan username
            localStorage.setItem("username", data.username);
            window.location.href = "../index.html";
         
    // } else {
    //     document.getElementById("message").innerText = "Username / Password salah";alert("Login gagal");
    // }
    
    } else {
    const alertBox = document.getElementById("alertBox");
    alertBox.innerText = "Username atau Password salah, silahkan coba lagi";
    alertBox.style.display = "block";

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
} 
   
=======
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
>>>>>>> ed323fae4538034c61a6a365057dbda3a4ebbdc4
});
