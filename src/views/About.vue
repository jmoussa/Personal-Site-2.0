<template>
  <div class="about">
    <span class="header">
      <img alt="Profile Picture" src="../assets/headshot.jpeg" id="picture1" />
    </span>
    <div class="bio">
      <h2>About Me</h2>
      <p id="description"> 
        Hi, I'm Joe! I currently work as a Software Engineer at
        <a href="https://thewaltdisneycompany.com/">The Walt Disney Company</a>,
        with over 3 years of experience in software development. 
        <br> 
        <br> 
        With a majority of my time focused on the backend, I'm comfortable with everything from
        API development, to system design to data pipelining. Of course I am also able to work on
        the front-end on an as-needed basis.
        <br> 
        <br> 
        I have experience building full-stack web applications particularity centered around data visualizations. 
        In my free time I enjoy reading about and picking up some of the latest trends in software development, watching/playing sports, and motorcycling.
      </p>
    </div>
    <div id="contact">
      <SocialIconSet></SocialIconSet>
    </div>
  </div>
</template>

<script>
import SocialIconSet from '../components/SocialIconSet';

export default {
  name: "About",
  components: {
    SocialIconSet
  }
};


</script>

<style scoped>
#contact {
  position: sticky;
  bottom: -200;
  margin: 0;
  padding: 0;
  width: 100%;
}
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  color: #42b983;
  font-weight: 700;
}
.about {
  margin-top: 2rem;
}
img {
  width: 20vw;
}
.header { 
  margin: 4rem 2rem;
  font-size: 150%;
  overflow: hidden;
}
.contact{
  margin: 3rem 20%;
  font-size: 110%;
  padding: 2rem;
  display: inline-grid;
}
.bio {
  margin: 3rem 20%;
  font-size: 110%;
  padding: 2rem;
  background-color: white;
  border: 2px solid #42b983;
  border-radius: 1.2rem;
}
#picture1 {
  border: 3px solid #42b983;
  border-radius: 1.5rem;
}

</style>
