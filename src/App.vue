<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div id="particle-container">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <router-view />
  </div>
</template>

<style lang="scss">
p, a, li, ul {
  font-size: clamp(1rem, -0.875rem + 8.333vw, 1.2rem);
}
h1  {
  font-size: clamp(1rem, -0.875rem + 8.333vw, 3rem);
}
h2 {
  font-size: clamp(1rem, -0.875rem + 8.333vw, 2rem);
}
h3 {
  font-size: clamp(1rem, -0.875rem + 8.333vw, 1.5rem);
}

@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
  
  .generic-container{
    margin: .5rem; 
    padding: 0;
  }
  
  #contact {
    .flex-center {
      flex-direction: column;
    }
  }
  
  #card-body {
    padding: 1rem; 
  }

  #blurb, #brief {
    z-index: 20; 
    margin: auto;
    padding: 0.5rem;
    background-color: #F8F4F9;
  }

  #grid-container-resize {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }

  p, a, li, ul, #nav {
    font-size: 1rem;
  }
  h1  {
    font-size: 2.3rem;
  }
  h2 {
    font-size: 1.7rem;
  }
  h3 {
    font-size: 1.1rem;
  }  
}


html {
  background-color: #F8F4F9;
}
body {
  margin: 0;
  padding: 0;
  overflow: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  z-index: 20;
  padding: 2vw;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0; 
  background: #F8F4F9;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a:hover {
  font-weight: 800;
  color: #42b983;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

.particle {
	position: absolute;
  border-radius: 50%;
  z-index: -1;
}

@for $i from 1 through 30 {
	@keyframes particle-animation-#{$i} {
		100% {
			transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		}
	}
	
	.particle:nth-child(#{$i}){
		animation: particle-animation-#{$i} 60s infinite;
		$size: random(5) + 5 + px;
		opacity: random(200)/100;
		height: $size;
		width: $size;
		animation-delay: -$i * .2s;
		transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 2px));
		background: #42b983;

	}
}
</style>
