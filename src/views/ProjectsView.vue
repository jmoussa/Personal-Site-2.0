<template>
  <div class="projects-view">
    <div class="grid-container" id="grid-container-resize">
      <div v-for="(item, index) in github_projects" :key="index" class="card-item">
        <div class="card-header"><h3>{{ item.name.replaceAll('-', ' ')[0].toUpperCase() + item.name.replaceAll('-', ' ').slice(1) }}</h3></div>
        <div class="card-body" id="card-body"><p>{{item.description}}</p></div>
        <div class="card-link-group">
          <button>
            <a :href="item.svn_url">Github</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "Projects",
  created: function() {
    this.$store.dispatch('getUserProjects', 'jmoussa'); 
  },
  computed: {
    github_projects: function(){ return this.$store.getters.getGithubProjects}
  }
};

</script>

<style scoped lang="scss">

.card-header {
  margin:  auto;
  padding: 1rem 0;
  font-weight: 700;
}
.card-body {
  margin: auto;
  padding: 1rem 5rem;
}
.card-link-group {
  text-align: center;
  width: 100%;
  margin: auto;
  padding: 0;
}
button {
  a {
    font-size: 120%;
    font-weight: 600;
    color: white;
    text-decoration: none;
    text-align: center;
  } 
  text-align: center;
  padding: 1rem;
  background: none;
  border: 2px solid white;
  border-radius: 2rem;
}
button:hover {
  a {
    font-weight: 700;
  }
  background: black;
  border: 3px solid white;
  border-radius: 2rem;
}
.grid-container {
  display: grid;
  margin: 0;
  justify-items: stretch;
  justify-content: space-evenly;
  align-content: space-evenly;
  align-items: stretch; 
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
}

.card-item {
  align-self: stretch;
  justify-self: stretch;
  background-color: rgba(66, 185, 131, 0.7); 
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  border-top: 3px solid rgba(66, 185, 131, 1);
}
.card-item:hover {
  background-color: rgba(66, 185, 131, 1); 
  color: white;
}
.projects-view { 
  margin: 0;
  padding: 0;
}
</style>
