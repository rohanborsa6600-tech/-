/* 🌌 Particles floating animation */
@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

.particle {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: -5;
  animation: float 20s linear infinite;
}

/* ✨ Scroll Reveal Cards */
.card {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease-out;
}

/* 📌 Smooth highlight after nav click */
section {
  transition: box-shadow 0.8s ease;
}

/* Hidden content initially */
.hidden {
  display: none;
}

/* Demo layout styling (optional) */
body {
  margin: 0;
  font-family: sans-serif;
  background: #0f0f1f;
  color: #fff;
  overflow-x: hidden;
}

header {
  text-align: center;
  padding: 4rem 2rem;
}

nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(15,15,31,0.8);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  z-index: 100;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}
nav a:hover {
  color: #7c3aed; /* violet hover */
}

section {
  min-height: 100vh;
  padding: 6rem 2rem;
  box-sizing: border-box;
}

/* Buttons */
button {
  background: #7c3aed;
  color: #fff;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}
button:hover {
  background: #5b21b6;
}
