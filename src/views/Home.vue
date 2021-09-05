<template>
	<div class="page-section-dark" id="home-screen">
		<div class="title">
		  <h2 id="name">Joseph Moussa</h2>    
		  <h3 id="profession">I Build Software</h3>
		</div>
	</div>
	<div class="page-section-light" id="about-me">
		<div class="header">
		  <h1 class="title-text">Software Engineer</h1>
		</div>
		<div class="about-me-content">
			<div class="row-flow">
				<div class="about-me row-col">
					<div class="fun-description">
						<h3 class="subtitle">
							Fun	
						</h3>
						<p>
							When I'm not working, I can usually be found doing one of a few things; cooking/ordering-in, reading, cleaning, working out, going for a walk outside, or working on personal software projects. For the most part, I like to keep busy and continue learning. 	
						</p>
						<p>	I've played a variety of instruments (mainly saxophone and drums) 
							and was part of the Rutgers University Marching Band from 2013-2016 and played snare drum for United Percussion's  2017 
							<a class="up-link" href="https://www.youtube.com/watch?v=D88XIqUbh5A" rel="noopener noreferrer" target="_blank">production</a> 
							(indoor percussion ensemble).
						</p>
					</div>		
				</div>
				<div class="profile-pic row-col">
					<img alt="ProPic" src="../assets/headshot.jpeg" id="picture1" />
				</div> 
				<div class="details row-col">
					<h3 class="subtitle">
						Details	
					</h3>
					<div class="detail-item"><p><strong>Name:</strong></p><p>Joseph Moussa</p></div>
					<div class="detail-item"><p><strong>Age:</strong></p><p>{{ age }}</p></div>
					<div class="detail-item"><p><strong>Location:</strong></p><p>New York City</p></div>
				</div>
			</div>
			<div class="description">
				<h3 class="subtitle">
					Work	
				</h3>
				<p>
					I consider myself an all-around web developer, with a specialization in data engineering.
					I've had experience working on projects of all sizes, in every layer of the stack.
					Much of my focus resides in the backend; creating APIs, and implementing various system architectures and data pipelines. 
					Most of this work is done with Python, I am also picking up Go as a backup compiled language and because it's simplicity appeals to me.
					I will also work on the front-end, and from time to time, actually enjoy it. 
					I started out using React, but my focus lately has been to leverage Vue.js' more simplified platform.
					I'm able to work alone or with a team,
					although I find working in teams is often a more efficient way to grow, and to arrive at better solutions.
				</p>
			</div>
		</div>
	</div>
	<div class="page-section-dark experiences" id="experience">
		<div>
			<h1 class="title-text">Job History & Education</h1>
		</div>
		<div class="header">
			<h2 class="left subtitle">Experience</h2>
		</div>
		<div class="card-view">
			<Card 
				left_content_header="The Walt Disney Company"
				right_content_header="Software Engineer - Data Platform Integrations"
				right_content_paragraph="As a member of the Data Platform Integrations team (and part of the larger Consumer Experience  division), I am responsible for building out data pipelines relating to content and personalization, as well as building platforms to leverage and visualize said data."
				left_content_paragraph="Feb 2020 - Present"
			></Card>
			<Card 
				left_content_header="Genomic Prediction"
				right_content_header="Software Engineer - Backend API Development"
				right_content_paragraph="During my time at Genomic Prediction, I was in charge of standing up backend web applications with RESTful APIs as well as database and system architecture for building out a preliminary user analytics platform. Additionally I also handled maintenance and troubleshooting for our AWS data pipelines which drove the primary business of embryo analysis."
				left_content_paragraph="Feb 2019 - Feb 2020"
			></Card>
			<Card 
				left_content_header="Internet Creations"
				right_content_header="Salesforce Developer"
				right_content_paragraph="My first full time role involved me acting as a dev/consultant for mainly Salesforce features to our client's instances. I was assigned clients as projects came in, and I would gather requirements, and develop features for the client's Salesforce instances. I communicated with multiple clients and project managers regularly about ongoing tasks and conducted tests to ensure code quality and coverage."
				left_content_paragraph="June 2018  - Feb 2019"
			></Card>
			<Card 
				left_content_header="AT&T Labs"
				right_content_header="Software Development Intern"
				right_content_paragraph="This was my first foray into the software engineering profession and it came as a co-op opportunity where I was working at AT&T full-time during the summer, and part time during my final year of my undergrad. Much of my work was focused on generating Proof Of Concepts and I had the priviledge of working with some very bright engineers. Projects consisted of a variety of peripherals centered around the new whitebox technology for AT&T networking servers. Peripherals including but not limited to an on-premise network traffic generator for testing purposes, as well as prototyping an IoT device utilizing BLE to transimit sensor data as a part of a larger server management initiative."
				left_content_paragraph="June 2017  - June 2018"
			></Card>
		</div>
		<div class="header">
			<h2 class="left subtitle">Education</h2>
		</div>
		<div class="card-view">
			<Card 
				left_content_header="Rutgers University"
				right_content_header="B.A. Information Technology & Informatics "
				right_content_paragraph="Minor: Computer Science. Notable Courses: Computer Security, Operating Systems, Database Technology."
				left_content_paragraph="Sept 2013 - May 2018"
			></Card>
		</div>
	</div>
	<div class="page-section-light" id="skills">
		<div>
			<h1 class="title-text">Skills</h1>
			<SkillsView></SkillsView>
			<div class="skills-view-explanation">
				<h3 class="subtitle">Overview</h3>
				<div class="explanation">
					<p>
						Above I've outlined my interpretation of my skills. Since I'm aware this is subjective,
						allow me to outline some key concepts that should help map the levels to something familiar.
					</p>
					<ul>
						<li><strong>Expert: </strong>I have experience working with this technology in production environments</li>
						<li><strong>Advanced: </strong>I have at least developed full MVP solutions (found on my <a class="up-link" href="https://github.com/jmoussa" rel="noopener noreferrer" target="_blank">Github</a>) using this technology</li>
						<li><strong>Intermediate: </strong>I have developed (or am currently developing) PoC projects using this technology</li>
						<li><strong>Beginner: </strong>I have read about the topic but have yet to utilize it in a project</li>
					</ul>
				</div>	
			</div>
		</div>
	</div>
	<div class="page-section-dark" id="projects">
		<div>
			<h1 class="title-text">Projects</h1>
			<ProjectsView/>
		</div>
	</div>
	<div class="page-section-light" id="contact">
		<h1 class="title-text">Contact</h1>
		<div class="description">
			<p>
				Below I've included the best links to reach me, as well as a link to my standard resume.
				If you are contacting about opportunities, I encourage you to use the email in my resume, or if you just want to grab a coffee and bounce ideas around, feel free to reach out 😊
			</p>
		</div>
		<div class="flex-social">
			<div class="flex-social-item">
				<a class="linkedin" href="https://linkedin.com/in/jmoussa" rel="noopener noreferrer" target="_blank"><span>LinkedIn</span></a>
				<span class="social-media-link">LinkedIn</span>
			</div>
			<div class="flex-social-item">
				<a class="instagram" href="https://instagram.com/jmoussa.dev" rel="noopener noreferrer" target="_blank"><span>Instagram</span></a>
				<span class="social-media-link">Instagram</span>
			</div>
			<div class="flex-social-item">
				<a class="twitter" href="https://twitter.com/j__moussa" rel="noopener noreferrer" target="_blank"><span>Twitter</span></a>
				<span class="social-media-link">Twitter</span>
			</div>
			<div class="flex-social-item">
				<a class="github" href="https://github.com/jmoussa" rel="noopener noreferrer" target="_blank"><span>Github</span></a>
				<span class="social-media-link">Github</span>
			</div>
			<div class="flex-social-item">
				<a class="my-resume" href="./resume.pdf" rel="noopener noreferrer" target="_blank"><span>Resume</span></a>
				<span class="social-media-link">Resume</span>
			</div>
			
		</div>
	</div>
</template>

<script>
import Card from "../components/Card.vue";
import ProjectsView from "./ProjectsView.vue";
import SkillsView from "./SkillsView.vue";

export default {
	name: "Home",
	methods: {
		calculateAge(birthday) { // birthday is a date
			var ageDifMs = Date.now() - birthday.getTime();
			var ageDate = new Date(ageDifMs); // miliseconds from epoch
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		}
	},
	computed: {
		age: function () {
			const d = new Date(1995, 4, 1);
			return this.calculateAge(d);
		}
	},
	components: {
		Card,
		ProjectsView,
		SkillsView
	}
};
</script>

<style scoped lang="scss">
#home-screen {
	height: 100vh;
}
#contact {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.description {
		text-align: center;
		padding: 0 5vw;
	}
}
.flex-social {
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;	
}
.flex-social-item {
	padding: 2rem;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	align-content: center;
	justify-content: center;
}

/* Labels */
.social-media-link {
	font-weight: normal;
	margin: auto;
}

/* Icons */
.flex-social > div > a {
  color: #FFFFFF;
  background: #30343F;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-family: fontawesome;

	padding: 1rem;	
	margin: 1rem;
  -o-transition:all .5s;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;
	-webkit-font-smoothing: antialiased;
}

.flex-social > div > a:hover {
  background: #EA638C;
}

/* pop-up text */

a span {
  color: #30343F;
  position:absolute;
  font-family:sans-serif;
  bottom:0;
  left:-25px;
  right:-25px;
  padding:5px 7px;
  z-index:-1;
  font-size:14px;
  border-radius:2px;
  background: #FFFFFF;
  visibility: hidden;
  opacity: 0;
  -o-transition:all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -moz-transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* pop-up text arrow */

a span:before {
  content:'';
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fff;
  position:absolute;
  bottom:-5px;
  left:40px;
}

/* text pops up when icon is in hover state */

a:hover span {
  bottom:50px;
  visibility:visible;
  opacity:1;
}

/* font awesome icons */

.facebook:before {
	content:'\f09a';
	font-size: 18px;
}
.instagram:before {
	content: '\f16d';
	font-size: 18px;
}
.twitter:before {
	content:'\f099';
	font-size: 18px;
}
.google:before {
	content:'\f0d5';
	font-size: 18px;
}
.github:before {
	content:'\f113';
	font-size: 18px;
}
.dribbble:before {
	content:'\f17d';
	font-size: 18px;
}
.codepen:before {
	content:'\f1cb';
	font-size: 18px;
}
.my-resume:before {
	content: '\f2c3';
	font-size: 16px;
}
.linkedin:before {
	content: '\f08c';
	font-size: 18px;
}

.title-text {
	font-size: 48px;
	margin: auto;
	padding-bottom: 1rem;
	margin-bottom: 5rem;
	text-align: center;
	width: 600px;
	border-bottom: 1px solid #FFFFFF;
	border-bottom-color: rgba(255,255,255,0.35);
}
#name {
	font-size: 56px;	
	margin-block-end: 0px;
	padding-bottom: 20px;
	border-bottom: 1px solid #FFFFFF;
	border-bottom-color: rgba(255,255,255,0.35);
}
#profession {
	font-size: 48px;
	padding-top: 20px;
}
.title {
	padding-top: 30vh;
	margin: auto;
	width: 800px;
	
}
.header {
	padding-bottom: 2rem; 
}
#about-me{
	min-height: 80vh;
}
.page-section-light {
	padding: 10vh 15vw;
	margin: 0;	
	background: #F7F7F9;
	.title-text {
		border-bottom: 1px solid #000;
		border-bottom-color: rgba(0 ,0 ,0 ,0.35);
	}
}
.page-section-dark {
	padding: 10vh 15vw;
	margin: 0;	
	background-color: #30343F;
	color: white;
}
.about-me-content {
	.subtitle {
		display: inline-block;
		padding-bottom: 10px;
		margin-bottom: 20px;
		line-height: 24px;	
		border-bottom: 1px solid #30343F;
	}
}
.description {
	margin: auto;
	text-align: justify;
	margin-top: 1rem;
}

.row-flow {
	display: flex;
	align-content: space-between;	
	.about-me {
		text-align: justify;
		width: 33%;
		padding-right: 2rem;
		
	}
	.profile-pic {
		width: 34%;
		align-self: center;
	}
	.details {
		align-self: flex-start;
		div > p {
			margin: 0;
			padding-bottom: 2px;
		}
		.detail-item {
			padding-bottom: 5px;
		}
		padding-left: 3rem;
		text-align: left;
		width: 33%;
	}
}

.left {
	float: left;
}
.right{
	float: right;
}
#picture1 {
	width: 300px;	
	border: 3px solid #30343F;
  border-radius: 20rem;
}
.subtitle {
	text-align: left;
	margin: auto;
	padding-bottom: 0.5rem;
	border-bottom: 1px solid #FFFFFF;
	border-bottom-color: rgba(255,255,255,0.35);
}
img {
  width: 14vw;
}
.card-view {
	padding: 2rem 0;
	overflow: auto;
	width: 100%;
}
.up-link {
	background: none;
	text-decoration: none;
	font-weight: 530;
}
.up-link:hover {
	color: #EA638C;
}
.skills-view-explanation {
	text-align: left;
	.subtitle {
		display: inline-block;
		padding-bottom: 10px;
		margin-bottom: 20px;
		border-bottom: 1px solid #30343F;
	}
	.explanation {
		padding: 1rem 3rem;
		line-height: 24px;	
	}
}

</style>
