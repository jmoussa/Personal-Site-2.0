<template>
  <div id="nav">
		<div class="route" id="home-route" @click="scrollTo('home-screen')">
			<p>Title</p>
		</div>
		<div class="route" @click="scrollTo('about-me')">
			<p>About Me</p> 
		</div> 
		<div class="route" @click="scrollTo('experience')">
			<p>Experience</p>	
		</div>
		<div class="route" @click="scrollTo('skills')">
			<p>Skills</p>	
		</div>
		<div class="route" @click="scrollTo('projects')">
			<p>Projects</p>	
		</div>
		<div class="route" @click="scrollTo('contact')">
			<p>Contact</p>	
		</div>
	</div>
  <div>
    <router-view />
  </div>
</template>
<script>
export default {
	name: "Home",
	methods: {
		scrollTo: function(id) {  
			document.getElementById(id).scrollIntoView({
				behavior: "smooth"
			});
		}
	}
}
</script>
<style lang="scss">
div, span, * {
	@import url('https://fonts.googleapis.com/css2?Montserrat:wght@100&family=Lato:wght@100&display=swap');	
	// h6 starts at $base-font-size 
	// headings grow from h6 to h1 by $heading-scale
	$base-font-size: 16px;
	$heading-scale: 2; // amount of px headings grow from h6 to h1

	@for $i from 1 through 8 {
		@if $i < 7 {
			h#{$i} {
				@if $i % 2 == 0 {
					font-family: 'Lato', sans-serif;
				}@else{
					font-family: 'Montserrat', sans-serif;
				}
				font-size: $base-font-size + $heading-scale * (8 - $i);
				margin: 0px;
				margin-block-start: 0px;
				margin-block-end: 1rem;
				margin-bottom: 30px;
				font-weight: lighter;
			}
		}@else if $i == 7{
			span {
				font-family: 'Montserrat', sans-serif;
				font-size: $base-font-size + $heading-scale * (8 - $i);
				margin-block-start: 0;
				margin-block-end: 1rem;
				margin-bottom: 1rem;
				vertical-align: baseline;
				font-weight: normal;
			}
		}@else if $i == 8{
			p {
				line-height: 22px;
				font-family: 'Lato', sans-serif;
				font-size: $base-font-size + $heading-scale * (8 - $i);
				margin-block-start: 0;
				margin-block-end: 1rem;
				margin-bottom: 1rem;
				vertical-align: baseline;
				font-weight: lighter;
			}
		}
	}

}
body {
	margin: 0;
	padding: 0;
}
html {
	margin: 0;
	min-width: 1200px; 
	padding: 0;
	width: 100%;
	overflow-x: hidden; 
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	padding: 0;
	margin: 0;
	width: 100%;
}

@media (max-width: 1200px) {
	html {
		margin: 0;
		min-width: 1200px; 
		padding: 0;
		height: 100%;	
		width: 100%;
		overflow-x: auto; 
	}
	.route{
		padding-left: 2rem;	
		font-weight: bold;
	}
	#nav {
		transform: translate(-65px, 0) scale(1.01);
	}
}

#nav {
	z-index: 20;
	margin: 0;
	border-radius: 2rem;
    padding: 1rem;
	position: fixed;
	left: 40px;
	top: 100px;
	background: #30343F;
	filter: drop-shadow(3px 3px 3px #000);
	color: white;
	float: left;	
	
	-moz-transition: all .2s ease-in;
	-o-transition: all .2s ease-in;
	-webkit-transition: all .2s ease-in;
	transition: all .2s ease-in;
	
	.route {
		p {
			font-weight: normal;
		}
		font-size: 18px;
		margin: auto;
		cursor: pointer;	
		padding: 0.7rem 0.5rem;
		font-weight: 600;
		color: white;
		text-decoration: none;
		-moz-transition: all .2s ease-in;
		-o-transition: all .2s ease-in;
		-webkit-transition: all .2s ease-in;
		transition: all .2s ease-in;
	}
	.route:hover {
		color: #EA638C;
		transform: scale(1.07);
		font-weight: bold;
	}
}

#nav a:hover {
  color: #EA638C;
}

#nav a.router-link-exact-active {
  color: #EA638C;
}
</style>
