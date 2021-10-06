<template>
	<div v-if="github_projects.length > 0">
		<div class="column-layout">
			<div class="grid-container" id="grid-container-resize">
				<div v-for="(item, index) in github_projects_top" :key="index" class="card-item">
					<div class="card-header"><h3>{{ item.name.replaceAll('-', ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) }}</h3></div>
					<div class="card-body" id="card-body"><p>{{item.description}}</p></div>
					<div class="card-link-group">
						<div class="github-button">
							<a class="github-link" :href="item.svn_url">Github</a>
						</div>
					</div>
				</div>
			</div>

			<div class="grid-container" id="grid-container-resize">
				<div v-for="(item, index) in github_projects_bottom" :key="index" class="card-item">
					<div class="card-header"><h3>{{ item.name.replaceAll('-', ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) }}</h3></div>
					<div class="card-body" id="card-body"><p>{{item.description}}</p></div>
					<div class="card-link-group">
						<div class="github-button">
							<a class="github-link" :href="item.svn_url">Github</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
	<div class="loader-container" v-else>
		<h2>Loading Github Projects...</h2>
		<div class="loader"></div>
	</div>
	<!--
	<div class="grid-container" id="grid-container-resize">
		<div v-for="(item, index) in github_projects" :key="index" class="card-item">
			<div class="card-header"><h3>{{ item.name.replaceAll('-', ' ')[0].toUpperCase() + item.name.replaceAll('-', ' ').slice(1) }}</h3></div>
			<div class="card-body" id="card-body"><p>{{item.description}}</p></div>
			<div class="card-link-group">
				<div class="github-button">
					<a class="github-link" :href="item.svn_url">Github</a>
				</div>
			</div>
		</div>
	</div>
	-->
</template>

<script>
export default {
  name: "Projects",
  created: function() {
    this.$store.dispatch('getUserProjects', 'jmoussa'); 
  },
  data() {
		return {
		}
  },
  computed: {
    github_projects: function(){ return this.$store.getters.getGithubProjects},
		github_projects_bottom: function(){ return this.$store.getters.getGithubProjects.slice((this.$store.getters.getGithubProjects.length / 2), this.$store.getters.getGithubProjects.length-1)},
		github_projects_top: function(){ return this.$store.getters.getGithubProjects.slice(0, (this.$store.getters.getGithubProjects.length / 2))},
	},
	watch: {
    github_projects: function(){ return this.$store.getters.getGithubProjects},
		github_projects_bottom: function(){ return this.$store.getters.getGithubProjects.slice((this.$store.getters.getGithubProjects.length / 2), this.$store.getters.getGithubProjects.length-1)},
		github_projects_top: function(){ return this.$store.getters.getGithubProjects.slice(0, (this.$store.getters.getGithubProjects.length / 2))},
	},
  components: {
  }
};

</script>

<style scoped lang="scss">

.loader-container {
	padding: 1rem 0;	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.loader {
	border: 14px solid #FFFFFF;
	border-top: 14px solid #EA638C;
	border-radius: 50%;	
	width: 100px;
	height: 100px;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% { transform: rotate(0deg); }
	100% {transform: rotate(360deg); }
}
.card-header {
	h3 {
		line-height: 24px;
	}
	margin: 0;
  padding: 1rem;
  //font-weight: 600;
}
.card-body {
  margin: 0;
  padding: 1rem 2rem;
}
.card-link-group {
  text-align: center;
  margin: 0;
	padding: 0;
}
.github-button {
  a {
    color: #FFFFFF;
    text-decoration: none;
		text-align: center;
		background: none;
	} 
	margin: 0 7rem;	
	background: #FFFFFF;
	cursor: pointer;
  text-align: center;
  padding: 1rem;
  background: none;
  border: 2px solid white;
  border-radius: 2rem;
}
.github-button:hover {
	a {
		color: #FFFFFF;
	}
	background: #30343F;
}

.grid-container {
	display: flex;
	flex-direction: row;	
	flex-wrap: nowrap;
	align-items: stretch;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar;
	margin: 0;
	padding: 0;
}
.card-item {
	background-color: #30343F; 
	border: 1px solid #FFFFFF;
	margin: 1rem;
	padding: 2rem 1rem;
	text-align: center;
	
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	
	-moz-transition: all .2s ease-in;
	-o-transition: all .2s ease-in;
	-webkit-transition: all .2s ease-in;
	transition: all .2s ease-in;
}
.card-item:hover {
  background-color: #FFFFFF; 
  color: #30343F;
	.github-link {
		color: #30343F;
	}
	.github-button {
		a {
			color: #30343F;
		} 
		background: #FFFFFF;
		border: 2px solid #30343F;
		transition: all .2s ease-in-out; 	
	}
	.github-button:hover {
		transform: scale(1.05);
	}
}
.github-link {
	font-family: Roboto, sans-serif;
	font-weight: normal;
	font-size: 16px;
	color: #FFFFFF;
}
.column-layout {
	display: flex;
	flex-direction: column;
	align-content: center;
}
</style>
