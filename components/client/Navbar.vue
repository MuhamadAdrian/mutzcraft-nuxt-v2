<template>
	<div>
		<!--Navbar-->
		<div
			class="fixed top-0 w-full bg-white dark:bg-gray-900 transition-colors duration-300 shadow-sm p-4 z-50"
		>
			<div
				class="container mx-auto sm:px-10 px-5 flex justify-between items-center"
			>
				<ul class="list-none hidden md:flex align-middle my-auto">
					<li class="relative mx-1">
						<nuxt-link to="/" class="text-sm">Beranda</nuxt-link>
					</li>
					<li class="relative mx-1">
						<a
							href="#"
							class="subpixel-antialiased dark:text-gray-100 text-sm inline-block px-4 py-2 rounded-md hover:text-indigo-400 transition-colors duration-150"
							>Product</a
						>
					</li>
					<li class="relative mx-1">
						<a
							href="#"
							class="subpixel-antialiased dark:text-gray-100 text-sm inline-block px-4 py-2 rounded-md hover:text-indigo-400 transition-colors duration-150"
							>Contact</a
						>
					</li>
				</ul>
				<div class="brand text-indigo-400">
					<a href="3" class="sm:text-xl text-lg font-semibold">Mutzcraft</a>
				</div>
				<div class="tool flex items-center">
					<button
						class="p-3 md:block hidden rounded-full hover:bg-gray-50 transition-colors duration-200"
					>
						<svg
							class="w-6 h-6 text-gray-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							></path>
						</svg>
					</button>
					<button
						class="p-3 md:block hidden rounded-full mr-3 hover:bg-gray-50 transition-colors duration-200"
					>
						<svg
							class="w-6 h-6 text-gray-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							></path>
						</svg>
					</button>
					<div class="login mr-2">
						<button
							class="text-sm text-white bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 my-auto inline-block px-4 py-2 rounded-md"
						>
							Masuk
						</button>
					</div>
					<div class="register">
						<button
							class="text-sm text-indigo-500 my-auto inline-block px-4 py-2 hover:text-indigo-600 hover:bg-indigo-100 transition-colors duration-200 rounded-md"
						>
							Daftar
						</button>
					</div>
				</div>
			</div>
		</div>

		<!--SideNav -->
		<div class="side z-50 fixed top-0 left-0">
			<transition name="fade" mode="out-in">
				<div
					@click="fabClicked = !fabClicked"
					v-if="fabClicked"
					class="overlay fixed transition bg-black opacity-50 w-full h-full z-40"
				></div>
			</transition>
			<transition name="slide" mode="out-in">
				<div
					v-if="fabClicked"
					class="side-menu fixed top-0 left-0 z-50 w-4/5 h-full bg-white dark:bg-gray-900 transition-all duration-300"
				>
					<div class="container mx-auto px-4">
						<header
							class="border-b-2 border-gray-50 dark:border-gray-700 dark:border-opacity-10 transition-colors duration-300 py-2 flex items-center justify-between"
						>
							<h2
								class="text-gray-600 font-semibold text-2xl dark:text-gray-400"
							>
								Mutzcraft
							</h2>
							<transition name="fade" mode="out-in">
								<button
									v-if="!darkMode"
									@click="toggleTheme()"
									class="p-4 rounded-full"
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
									class="p-4 rounded-full"
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
						</header>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
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
	computed: {
		fabClicked: {
			get() {
				return this.$store.getters.fabClicked
			},
			set(newValue) {
				this.$store.commit('setFabClicked', newValue)
			},
		},
	},
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
	@apply transition-transform duration-300;
}
.slide-enter,
.slide-leave-to {
	@apply transform -translate-x-full;
}
.slide-leave,
.slide-enter-to {
	@apply transform translate-x-0;
}
.fade-enter-active,
.fade-leave-active {
	@apply transition-opacity duration-500;
}
.fade-enter,
.fade-leave-to {
	@apply opacity-0;
}
.fade-leave,
.fade-enter-to {
	@apply opacity-50;
}
.nuxt-link-exact-active {
	@apply dark:bg-gray-800 dark:text-gray-200 subpixel-antialiased rounded-md inline-block my-auto px-4 py-2 bg-indigo-100 text-indigo-600;
}
</style>
