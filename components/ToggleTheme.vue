<template>
	<div class="fixed bottom-0 right-0 m-5 md:block hidden">
		<transition name="fade" mode="out-in" tag="div">
			<button
				v-if="!darkMode"
				@click="toggleTheme()"
				class="p-4 rounded-full bg-white dark:bg-gray-700 shadow-lg"
			>
				<svg
					class="w-6 h-6 dark:text-gray-100"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					></path>
				</svg>
			</button>
			<button
				v-if="darkMode"
				@click="toggleTheme()"
				class="p-4 rounded-full dark:bg-gray-700 shadow-lg"
			>
				<svg
					class="w-6 h-6 dark:text-gray-100"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					></path>
				</svg>
			</button>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'ToggleTheme',
	data() {
		return {
			darkMode: false,
		}
	},
	methods: {
		toggleTheme() {
			this.darkMode = !this.darkMode
			let html = document.querySelector('html')
			html.classList.toggle('dark')
		},
	},
}
</script>