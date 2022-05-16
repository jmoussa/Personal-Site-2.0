<template>
	<div class="card-container">
		<div class="left-card">
			<div class="left_content_header">
				<h6><strong>{{ left_content_header }}</strong></h6>
			</div>
			<div class="left_content_paragraph">
				<span>{{ left_content_paragraph }}</span>
			</div>
		</div>
		<div class="right-card">
			<div class="right-content right_content_header">
				<p><strong>{{ right_content_header }}</strong></p>
			</div>
			<div class="right-content right_content_paragraph">
				<p>{{ right_content_paragraph }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: {
		left_content_header: String,
		left_content_paragraph: String,
		right_content_header: String,
		right_content_paragraph: String
	},
};
</script>
<style lang="scss">
$h: 20vh;
.card-container {
	padding: 1.3rem 0;
	// height: $h;
	display: flex;
	margin: auto;
	overflow: auto;
}
.italic {
	font-style: italic;
}	
.left-card {
	width: 35%;
	float: left;
	.left_content_paragraph {
		width: 100%;
		float: left;
		text-align: justify;
	}
	.left_content_header {
		h4 {
			margin-block-end: 1rem;
		}
		float: left;
		text-align: justify;
	}
}

.right-card {
	max-width: 65%;
	width:60%;
	padding-left: 2rem;
	float: right;
	.right-content {
		text-align: justify;
		.right_content_paragraph {
			float: left;
			text-align: justify;
		}
		.right_content_header {
			float: left;
			text-align: justify;
		}
	}
}
</style>
