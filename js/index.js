document.addEventListener('DOMContentLoaded', function(){
    const token = localStorage.getItem("token");
    
    if (!token) {
        // Si no hay un token, redirigir al usuario a la página de inicio de sesión
        window.location.href = "./pages/login.html";
      }
})