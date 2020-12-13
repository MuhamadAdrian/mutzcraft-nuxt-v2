<template>
	<div class="flex-col container mb-11 md:mb-0 md:pt-0 pt-32 mx-auto px-2">
		<h1
			class="sm:text-4xl sm:leading-relaxed leading-normal text-3xl font-semibold text-indigo-500 antialiased mb-5"
		>
			Designed To Be
			<span class="relative"
				>Convenient
				<div
					class="absolute opacity-50 bottom-0 left-0 w-full h-4 bg-green-300"
				></div>
			</span>
			And Convenient
			<span class="relative"
				>By Choice
				<div
					class="absolute opacity-50 bottom-0 left-0 w-full h-4 bg-yellow-300"
				></div
			></span>
		</h1>
		<p
			class="mb-6 antialiased text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
		>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente sed
			quos sunt aperiam delectus laborum saepe. Ullam aspernatur ut, dolore
			minima aperiam deserunt odio a eveniet pariatur cum repellat aut.
		</p>
		<button
			class="px-4 relative py-2 rounded-md bg-pink-500 text-white flex items-center"
		>
			<span @click="request()" class="mr-3">Produk Kami </span>
			<svg
				class="w-6 h-6 relative"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17 8l4 4m0 0l-4 4m4-4H3"
				></path>
			</svg>
			<span
				class="rounded-full absolute bottom-0 right-0 h-5 w-5 bg-indigo-500 opacity-25 animate-ping"
			></span>
		</button>
	</div>
</template>

<script>
export default {
	methods: {
		request() {
			this.$axios({
				method: 'post',
				url: '/api/create-custom-claims',
				headers: {},
				data: {
					uid: 'anu',
					test: 'asdasdasd',
				},
			}).then((res) => console.log(res))
		},
	},
}
</script>