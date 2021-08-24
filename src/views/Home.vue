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
		<div class="row-flow">
			<span class="about-me">
				<div class="description">
					<h3>
						About Me	
					</h3>
					<p>
						I consider myself an all-around web developer, with a specialization in data engineering.
						I've had experience working on projects of all sizes, in every layer of the stack.
						Much of my focus resides in the backend; creating APIs, and implementing various system architectures and data pipelines.
						I will also work on the front-end, and from time to time, actually enjoy it. 
						I started out using React, but my focus lately has been to leverage Vue.js' more simplified platform.
						I'm able to work alone or with a team,
						although I find working in teams is often a more efficient way to grow, and to arrive at better solutions.
					</p>
				</div>
			</span>
			<span class="profile-pic">
				<img alt="ProPic" src="../assets/headshot.jpeg" id="picture1" />
			</span> 
			<div class="details">
				<h3>
					Details	
				</h3>
				<div class="detail-item"><p><strong>Name:</strong></p><p>Joseph Moussa</p></div>
				<div class="detail-item"><p><strong>Age:</strong></p><p>{{ age }}</p></div>
				<div class="detail-item"><p><strong>Location:</strong></p><p>New York City</p></div>
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
		</div>
	</div>
	<div class="page-section-dark" id="projects">
		<div>
			<h1 class="title-text">Projects</h1>
			<ProjectsView/>
		</div>
	</div>
	<div class="page-section-light" id="contact">
		<div>
			<h1 class="title-text">Contact</h1>
		</div>
	</div>
</template>

<script>
import Card from "../components/Card.vue";
import ProjectsView from "./ProjectsView.vue";

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
		ProjectsView
	}
};
</script>

<style scoped lang="scss">
#home-screen {
	height: 100vh;
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
	/*min-height: 100vh;*/
	padding: 5rem 20rem;
	background: #F7F7F9;
	.title-text {
		border-bottom: 1px solid #000;
		border-bottom-color: rgba(0 ,0 ,0 ,0.35);
	}
}
.page-section-dark {
	/*min-height: 100vh;*/
	padding: 5rem 20rem;
	background-color: #30343F;
	color: white;
}
.row-flow {
	display: flex;
	padding-top: 20px;
	.about-me {
		text-align: justify;
		width: 33%;
		padding-right: 2rem;
	}
	.profile-pic {
		width: 34%;
	}
	.details {
		div > p {
			margin: 0;
			padding-bottom: 2px;
		}
		.detail-item {
			padding-bottom: 5px;
		}
		padding-left: 2rem;
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
  border: 3px solid #30343F;
  border-radius: 20rem;
}
.subtitle {
	text-align: left;
	margin: 0;
	display: block;
	margin-left: 4rem;
	padding-bottom: 0.5rem;
	border-bottom: 1px solid #FFFFFF;
	border-bottom-color: rgba(255,255,255,0.35);
}
img {
  width: 14vw;
}
.card-view {
	padding: 2rem 4rem;
}

</style>
