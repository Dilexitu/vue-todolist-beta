<template>
  <div id="app" class="app-container">
    <div class="fireflies"></div> <!-- Vuurvliegjes container -->
    <nav class="navbar">
      <h1>To-Do List</h1>
      <ul>
        <li>
          <router-link to="/" class="nav-item">
            <i class="fas fa-list"></i> Task
          </router-link>
        </li>
        <li>
          <router-link to="/statistics" class="nav-item">
            <i class="fas fa-chart-bar"></i> statistics
          </router-link>
        </li>
        <li>
          <router-link to="/zelfzorg" class="nav-item">
            <i class="fas fa-heart"></i> Self care
          </router-link>
        </li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.createFireflies();
    this.moveFirefliesToMouse();
  },
  methods: {
    createFireflies() {
      const firefliesContainer = this.$el.querySelector('.fireflies');
      for (let i = 0; i < 100; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.top = `${Math.random() * 100}vh`;
        firefly.style.left = `${Math.random() * 100}vw`;
        firefly.style.animationDuration = `${Math.random() * 4 + 3}s`;
        this.blinkFirefly(firefly);
        firefliesContainer.appendChild(firefly);
      }
    },
    blinkFirefly(firefly) {
      setInterval(() => {
        firefly.style.opacity = 1;
        setTimeout(() => {
          firefly.style.opacity = Math.random() * 0.5;
        }, 500);
      }, Math.random() * 3000 + 2000);
    },
    moveFirefliesToMouse() {
      const firefliesContainer = this.$el.querySelector('.fireflies');
      firefliesContainer.addEventListener('mousemove', (e) => {
        const fireflies = firefliesContainer.children;
        Array.from(fireflies).forEach(firefly => {
          const offsetX = (Math.random() - 0.5) * 100;
          const offsetY = (Math.random() - 0.5) * 100;
          firefly.style.transition = 'transform 0.5s ease';
          firefly.style.transform = `translate(${e.clientX + offsetX}px, ${e.clientY + offsetY}px)`;
        });
      });
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Garamond&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.app-container {
  display: flex;
  position: relative;
  background: url('./assets/img/background.gif') no-repeat center center fixed;
  background-size: cover;
  color: #f5f5f5;
  font-family: 'Garamond', serif;
  min-height: 100vh;
}

.fireflies {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.firefly {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(212, 175, 55, 0.8);
  filter: blur(4px);
  animation: fly 5s infinite;
  opacity: 0.5;
}

@keyframes fly {
  0% {
    transform: translateY(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0.7;
  }
}

.navbar {
  width: 100%;
  max-width: 220px;
  padding: 20px;
  background-color: rgba(43, 43, 43, 0.85);
  border-right: 3px solid #d4af37;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

.navbar h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #d4af37;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.navbar ul {
  list-style-type: none;
  padding: 0;
}

.navbar li {
  margin: 15px 0;
}

.nav-item {
  color: #f5f5f5;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
}

.nav-item i {
  margin-right: 10px;
}

.nav-item:hover {
  color: #d4af37;
}

main {
  flex-grow: 1;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .navbar {
    width: 100%;
  }

  .navbar h1 {
    font-size: 24px;
  }

  .nav-item {
    padding: 8px;
  }

  main {
    padding: 10px;
  }
}
</style>
