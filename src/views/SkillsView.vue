<template>
	<!--
	This module was inspired by http://anaenders.com/
	-->
	<div class="resume-skills--desktop">
		<div class="resume-skills" dir="rtl">
			<ul>
				<li>expert</li>
				<li>advanced</li>
				<li>intermediate</li>
				<li>beginner</li>
			</ul>
		</div>
		<figure>
			<div class="frontend">
				<p class="category">
					Front-end
				</p>
				<div class="bar">
					<div class="advanced"></div>
					<div class="graph-header"></div>
					<label>CSS</label>
				</div>
				<div class="bar">
					<div class="advanced alt"><div><img alt="dots" src="../assets/dots.jpeg"></div></div>
					<div class="graph-header"></div>
					<label>JavaScript</label>
				</div>
				<div class="bar">
					<div class="advanced"></div>
					<div class="graph-header"></div>
					<label>Vue.js</label>
				</div>
				<div class="bar">
					<div class="intermediate alt"><div><img alt="dots" src="../assets/dots.jpeg"></div></div>
					<div class="graph-header"></div>
					<label>React</label>
				</div>
				<div class="bar">
					<div class="intermediate"></div>
					<div class="graph-header dark"></div>
					<label>SASS</label>
				</div>
			</div>
			<div class="programming">
				<p class="category">
					Back-end	
				</p>
				<div class="bar">
					<div class="intermediate alt"><div><img alt="dots" src="../assets/dots.jpeg"></div></div>
					<div class="graph-header"></div>
					<label>MongoDB</label>
				</div>
				<div class="bar">
					<div class="expert"></div>
					<div class="graph-header"></div>
					<label>MySQL</label>
				</div>
				<div class="bar">
					<div class="expert alt"><div><img alt="dots" src="../assets/dots.jpeg"></div></div>
					<div class="graph-header"></div>
					<label>Python</label>
				</div>
				<div class="bar">
					<div class="intermediate"></div>
					<div class="graph-header dark"></div>
					<label>Go</label>
				</div>
				<div class="bar">
					<div class="expert alt"><div><img alt="dots" src="../assets/dots.jpeg"></div></div>
					<div class="graph-header"></div>
					<label>PostgreSQL</label>
				</div>
			</div>
			<div class="design">
				<p class="category">
					Architecture	
				</p>
				<div class="bar">
					<div class="expert alt"><div><img alt="dots" src="../assets/dots.jpeg"></div></div>
					<div class="graph-header"></div>
					<label>RESTful APIs</label>
				</div>
				<div class="bar">
					<div class="expert"></div>
					<div class="graph-header"></div>
					<label>Docker</label>
				</div>
				<div class="bar">
					<div class="advanced alt"><div><img alt="dots" src="../assets/dots.jpeg"></div></div>
					<div class="graph-header dark"></div>
					<label>CI/CD</label>
				</div>
				<div class="bar">
					<div class="advanced"></div>
					<div class="graph-header dark"></div>
					<label>Databases</label>
				</div>
				<div class="bar">
					<div class="advanced alt"><div><img alt="dots" src="../assets/dots.jpeg"></div></div>
					<div class="graph-header dark"></div>
					<label>Data Pipelines</label>
				</div>
			</div>
			<div class="additional">
				<p class="category">
					Management
				</p>
				<div class="bar">
					<div class="intermediate alt"><div><img alt="dots" src="../assets/dots.jpeg"></div></div>
					<div class="graph-header"></div>
					<label>Project Management</label>
				</div>
				<div class="bar">
					<div class="beginner"></div>
					<div class="graph-header dark"></div>
					<label>People Management</label>
				</div>
			</div>
		</figure>
	</div> 
</template>

<script >
export default {
  name: "SkillsView"
};

</script>

<style lang="scss">
.resume-skills--desktop {
	display: flex;
	margin: 7rem 0;
}
.resume-skills {
	margin-top: -5px;
	line-height: 22px;
}
.category {
	line-height: 16px;
}
</style>
