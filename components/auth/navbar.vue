<template>
	<div class="header fixed top-0 left-0 w-full p-4 shadow-sm">
		<div class="container mx-auto max-w-lg">
			<button class="flex items-center" @click="$router.back()">
				<span class="mr-3">
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						></path>
					</svg>
				</span>
				<p>Back</p>
			</button>
		</div>
	</div>
</template>

<script>
export default {}
</script>