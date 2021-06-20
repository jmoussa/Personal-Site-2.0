<template>
  <div class="home">
    <div class="header">
      <h1>Joseph Moussa</h1>    
      <h2>Software Engineer.</h2>
    </div>
    <div class="generic-container">
      <div class="personal-info" id="blurb">
        <p>
          I'm an NYC-based software engineer who specializes in building complex backend frameworks and robust data pipelines.
          <br> 
          <br> 
          Currently, I'm an engineer at
          <a href="https://thewaltdisneycompany.com/">The Walt Disney Company</a> where I work on the personalization effort and data acquisition, content recommendation,
          as well as monitoring and analytics with regards to content recommendation.
        </p>
      </div>
    </div>
    <div class="generic-container">
      <div class="header">
        <h2>How I Got Started</h2>
      </div>
      <div class="personal-info" id="brief">
        <p>
          I got into softare relatively late, around my second year of college. Before that I was studying with the intention of going to dental school.
          However after sitting down and realizing that was not what I wanted, 
          and exploring other career options that matched what I found interesting and that fit my desired lifestyle I arrived at sofware.
        </p>
        <p>
          I had brief exposure to HTML/CSS and even a little bit of Python via Codeacadamy and Tumblr, so I had somewhat of a technical footing, a majority of my schoolwork was more focused on problem-solving and understanding the concepts and nuances of software in general. 
          After graduating I didn't waste any time diving into the industry and accrewed a wide array of experiences from Research and Development at AT&amp;T, to Salesforce development at a Consultancy, to data engineering at a BioTech startup, and now working for the infamous mouse.
        </p>
      </div>
    </div>
    <div class="container" @mouseleave="allOff()">
      <div class="left specialties">
        <h3 class="li-static">Areas of Expertise</h3>
        <div class="li-item" @mouseover="toggleShow('showBE', true)" @click="allOff()">Back-end API Development</div>
        <div class="li-item" @mouseover="toggleShow('showSA', true)" @click="allOff()">System Architecture</div>
        <div class="li-item" @mouseover="toggleShow('showFE', true)" @click="allOff()">Front-end Development</div>
        <div class="li-item" @mouseover="toggleShow('showDV', true)" @click="allOff()">Data Visualization</div>
      </div>
      <div class="right experiences">
        <transition name="slide" mode="out-in">
          <div v-if="showBE" class="accessory-section right" key="backend-dev">
            <h1>Back-end Development</h1>
            <div class="generic-container"> 
              <p>
                A majority of my personal and professional work reside in the back-end.
                Normally I choose FastAPI to spin up an API for a medium to large sized project. 
                For small projects that don't really require a large API I will use something like Flask.
              </p>
              <p>
                For the most part, my personal projects have to do with fetching data and visualizing it in interesting ways.
                My YouTube Recomendation API (paired with it's own 'crawler') was designed to return popular content, then start to recommend content based on tags, likes/dislikes, etc.
                The Chat App API was a basic user authentication API with a WebSocket layer to manage the group chats as well as a Twilio integration for video chat capabilities.
                My most recent project is a stock tracer that is essentially a Robinhood clone (in that it grabs from the Robinhood API), but the application will also provide additional 
                metrics and graphs to visualize the user's transations more granularly.
              </p>
            </div>
            <div class="right"> 
              <h3>Technologies</h3> 
              <ul>
                <li>Python (FastAPI)</li>
                <li>Node JS</li>
                <li>Websockets</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div class="left"> 
              <h3>Experience</h3> 
              <ul>
                <li>
                  <div>
                    <a class="white" href="https://github.com/jmoussa/aggtube-content-recommendation">YouTube Recomendation API</a>
                  </div>
                </li>
                <li><a class="white" href="https://github.com/jmoussa/chat_app_BE">Chat App API</a></li>
                <li><a class="white" href="https://github.com/jmoussa/stock-tracer-be">Stock Tracer API</a></li>
              </ul>
            </div>
          </div>
          <div v-else-if="showSA" class="accessory-section right" key="system-architecture">
            <h1>System Architecture/Piplining</h1>
            <div class="generic-container">
              <p>
                My familiarity is within data acquisition systems and analysis pipelines. What does that boil down to?
                I am able to extract the necessary data, organize it, and store it in a way that's easily accessible for another client to use and perform analytics on it.
                Sometimes this involves creating an API to work with the process, other times it could be a scheduled script that runs every hour.
                Other systems I've worked on involve websockets which enable a real-time group chat functionality I built into an application.
              </p>
            </div>
            <div class="left"> 
              <h3>I've personally worked on</h3> 
              <ul>
                <li>Crawlers/Scrapers</li>
                <li>Backend RESTful APIs</li>
                <li>Real-time Websocket Transmission</li>
                <li>Data Acquisition and Storage Pipelines</li>
              </ul>
            </div>
            <div class="right"> 
              <h3>I'm interested in working on</h3> 
              <ul>
                <li>Real-time Data Streaming (analytics purposes)</li>
                <li>Machine Learning Pipelines</li>
                <li>Distributed Applications</li>
                <li>Microservice Platforms</li>
              </ul>
            </div>
          </div>
          <div v-else-if="showFE" class="accessory-section right" key="front-end">
            <h1>Front-end Development</h1>
            <div class="generic-container">
              <p>
                I don't always work on the front-end, but when I do it's mostly for personal projects.
                I've made it a point to at least understand the concepts of each javascript framework and properly assess if it's necessary.
                My front-end projects range from data visualization to group chat applications to personal websites (what you're looking at). 
                I wouldn't call myself a designer by any means, however I do understand the importance of what information to show as well as where it should be.
              </p>
            </div>
            <div class="right"> 
              <h3>Technologies</h3> 
              <ul>
                <li>ReactJS</li>
                <li>VueJS</li>
                <li>Flux/Redux</li>
                <li>D3/Charts.js</li>
              </ul>
            </div>
            <div class="left"> 
              <h3>Experience</h3> 
              <ul>
                <li>
                  <div>
                    <a class="white" href="https://github.com/jmoussa/personal_site">Personal Website 1 (Angular)</a>
                  </div>
                </li>
                <li>
                  <div>
                    <a class="white" href="https://github.com/jmoussa/Personal-Site-2.0">Personal Website 2 (Vue)</a>
                  </div>
                </li>
                <li><a class="white" href="https://github.com/jmoussa/Chat-App-FE">Chat Application</a></li>
                <li><a class="white" href="https://github.com/jmoussa/Stock-Tracer-FE">Stock Tracer Application</a></li>
              </ul>
            </div>
          </div>
          <div v-else-if="showDV" class="accessory-section right" key="data-viz">
            <h1>Data Visualization</h1>
            <div class="generic-container">
              <p>
                My experience with data visualization has always been driven by my fascination with finding trends and correlations.
                My data visualization projects range from subjects like Spotify song analysis, 
                to stock market analysis and can go as far as visualizing any key performance indicator of content metadata.
              </p>
            </div>
            <div class="right"> 
              <h3>Technologies</h3> 
              <ul>
                <li>D3/Charts.js</li>
                <li>Altair</li>
                <li>Pandas/Matplotlib</li>
                <li>Custom Javascript Tooling</li>
              </ul>
            </div>
            <div class="left"> 
              <h3>Experience</h3> 
              <ul>
                <li>
                  <div>
                    <a class="white" href="https://github.com/jmoussa/spotify_visualizer">Spotify Visualizer</a>
                  </div>
                </li>
                <li>
                  <div>
                    <a class="white" href="https://github.com/jmoussa/d3_graphs">D3 Charts (experiment)</a>
                  </div>
                </li>
                <li><div><a class="white" href="https://github.com/jmoussa/stock-tracer-fe">Stock Tracer Application</a></div></li>
              </ul>
            </div> 
          </div>
        </transition>
        <div class="static-accessory-section">
          <h3 class="li-static">Positions Held</h3>
          <div class="li-item">Salesforce Developer @ Internet Creations</div>
          <div class="li-item">Backend Web Developer @ Genomic Predition </div>
          <div class="li-item">Software Engineer @ The Walt Disney Company</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  methods: {
    toggleShow: function (property, value) {
      this.showBE = false;
      this.showSA = false;
      this.showFE = false;
      this.showDV = false;
      this[property] = value;
    },
    allOff: function () {
      this.showBE = false;
      this.showSA = false;
      this.showFE = false;
      this.showDV = false;
    }
  },
  data() {
    return {
      showBE: false,
      showSA: false,
      showFE: false,
      showDV: false 
    }
  }
};
</script>

<style scoped lang="scss">
.static-accessory-section {
  z-index: 2;
  /*position: relative;*/
}
.accessory-section {
  z-index: 5;
  position: fixed;
  bottom: 0;
  color: white;
  background-color: rgba(0,0,0,0.95);
  margin: auto;
  p {
    font-size: calc(1vw * 1.01);
  }
  padding: 1rem;
  padding-top: 1rem;
  padding-bottom: 1.1rem;
  border-radius: 2rem 0 0 0;
  height: 600px;
  overflow: scroll;
  width: 100%;
  h3 {
    margin: 0px;
    padding: 0px; 
    padding-left: 2rem;
    font-weight: 700;
  }
}
/*Transtitions*/

.slide-enter-active, {
  transition: all .1s ease;
  right: -1000px;
}
.slide-leave-active {
  transition: all .1s ease;
}
.slide-enter-to {
  right: 0;
}
.slide-leave-to {
  transform: translate(100%, 0);
}

.right {
  margin: 0;
  width: 50%;
  float: right;
}
.left{
  margin: 0;
  width: 50%;
  float: left;
}
ul {
  text-align: left;
  list-style-type: none;
}
.home {
  margin: 0;
  width: 100%;
}
.generic-container {
  margin: 1vh 2vw;
  overflow: auto;
}
.container {
  width: 100%;
  margin-top: 10%; 
  height: 600px;
  padding: 0;
  padding-bottom: 2rem;
  background-color:rgba(0, 0, 0, 0.1);
  overflow: auto;

}
.header { 
  h1 {
    text-shadow: 0px 15px 5px rgba(0,0,0,0.1),
                 10px 20px 5px rgba(0,0,0,0.05),
                 -10px 20px 5px rgba(0,0,0,0.05);
  }
  h2 {
    text-shadow: 0px 15px 5px rgba(0,0,0,0.1),
                 10px 20px 5px rgba(0,0,0,0.05),
                 -10px 20px 5px rgba(0,0,0,0.05);
  }
  margin: 2% 0;
  font-size: 150%;
  overflow: auto;
}
.personal-info {
  z-index: 10; 
  font-size: 120%;
  margin: 5vh 15vw; 
  padding: 5rem;
  border-radius: 1rem;
  background-color: #F8F4F9;
  border: 2px solid #42b983;
}
.white {
  color: white;
}
a {
  color: inherit;
  font-weight: 450;
}
a:hover {
  font-weight: 700;
  color: #42b983;
  text-decoration: none;
}
.li-item {
  cursor: pointer;
  font-size: 130%; 
  font-weight: 500;
  margin: 0px;
  padding: 2rem 0px;
}
.li-static {
  padding: 2rem;
  margin: 0px;
  font-size: 130%;
  font-weight: 600;
  border-top: 1px solid #42b983;
  border-bottom: 1px solid #42b983;
}
.li-item:hover{
  color: white;
  background-color: #42b983;
  font-weight: 800;
  border: none;
}
</style>
