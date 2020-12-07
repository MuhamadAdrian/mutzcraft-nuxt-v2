<template>
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
						<h2 class="text-gray-600 font-semibold text-2xl dark:text-gray-400">
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
					<ul class="list-none">
						<client-only placeholder="Loading">
							<li class="py-2">
								<p class="text-sm text-gray-600">{{ user.email }}</p>
								<p>test</p>
							</li>
						</client-only>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'Side',
	data() {
		return {
			darkMode: false,
		}
	},

	computed: {
		user() {
			let user = this.$store.state.user
			if (user && user.emailVerified) {
				return user
			} else {
				return ''
			}
		},
		fabClicked: {
			get() {
				return this.$store.state.sideHandlers.fabClicked
			},
			set(newValue) {
				this.$store.commit('sideHandlers/setFabClicked', newValue)
			},
		},
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