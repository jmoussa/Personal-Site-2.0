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
$h: 140px;
.card-container {
	padding: 2rem 0;
	height: $h;
}
.italic {
	font-style: italic;
}	
.left-card {
	width: 35%;
	height: 100%;
	float: left;
	/*border-right: 1.5px solid rgba(255,255,255,0.35);*/
	.left_content_paragraph {
		width: 100%;
		float: left;
		text-align: left;
	}
	.left_content_header {
		h4 {
			margin-block-end: 1rem;
		}
		float: left;
		text-align: left;
	}
}

.right-card {
	max-width: 65%;
	width:60%;
	padding-left: 2rem;
	float: right;
	height: $h;
	.right-content {
		text-align: left;
		.right_content_paragraph {
			float: left;
			text-align: left;
		}
		.right_content_header {
			float: left;
			text-align: left;
		}
	}
}
</style>
