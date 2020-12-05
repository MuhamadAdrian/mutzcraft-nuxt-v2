<template>
	<div class="h-full">
		<img src="@/assets/img/dot.svg" class="absolute md:w-80 w-52 z-0" alt="" />
		<section
			id="banner"
			class="dark:bg-gray-900 transition-colors duration-300"
		>
			<div class="container mx-auto md:px-20 px-5">
				<div
					class="grid md:grid-cols-2 grid-cols-1 md:space-x-8 md:h-screen h-full items-center relative z-10 pb-5"
				>
					<BannerLeft />
					<BannerRight />
				</div>
			</div>
		</section>

		<section class="py-8 dark:bg-gray-900 transition-colors duration-300">
			<HowWeActuallyWork />
		</section>
	</div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
	@apply min-h-screen flex justify-center items-center text-center mx-auto;
}

*/
.dot {
	@apply text-green-400;
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
