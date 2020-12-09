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
					<a href="#" class="sm:text-xl text-lg font-semibold">Mutzcraft</a>
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
					<client-only>
						<div
							v-if="!currentUser || (user && !emailVerified)"
							class="login mr-2"
						>
							<button
								@click="toLogin()"
								class="text-sm text-white bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 my-auto inline-block px-4 py-2 rounded-md"
							>
								Masuk
							</button>
						</div>
						<button
							slot="placeholder"
							class="text-sm text-indigo-500 my-auto inline-block px-4 py-2 hover:text-indigo-600 hover:bg-indigo-100 transition-colors duration-200 rounded-md"
						>
							Loading
						</button>
						<div v-if="!currentUser" class="register">
							<nuxt-link
								to="/auth/register/"
								class="text-sm text-indigo-500 my-auto inline-block px-4 py-2 hover:text-indigo-600 hover:bg-indigo-100 transition-colors duration-200 rounded-md"
							>
								Daftar
							</nuxt-link>
						</div>
						<div v-if="currentUser && !emailVerified" class="verification">
							<nuxt-link
								to="/auth/register/"
								class="text-sm bg-yellow-100 text-yellow-700 my-auto inline-block px-4 py-2 hover:bg-yellow-200 transition-colors duration-200 rounded-md"
							>
								Verifikasi
							</nuxt-link>
						</div>
						<div class="logout" v-if="currentUser && emailVerified">
							<button
								@click="toggleSide()"
								class="text-xs bg-gray-100 text-gray-600 my-auto flex items-center px-4 py-2 hover:bg-gray-300 transition-colors duration-200 rounded-md"
							>
								{{ user.displayName | truncate(20) }}
								<svg
									class="w-6 h-6 ml-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 8h16M4 16h16"
									></path>
								</svg>
							</button>
						</div>
					</client-only>
				</div>
			</div>
		</div>
		<ClientSide />
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {}
	},
	computed: {
		emailVerified() {
			return this.$store.getters['users/emailVerified']
		},
		user() {
			let user = this.$store.state.users.user
			if (user) {
				return user
			} else {
				false
			}
		},
		currentUser() {
			let currentUser = this.$store.state.users.currentUser
			if (currentUser) {
				return true
			} else {
				return false
			}
		},
	},

	methods: {
		toggleSide() {
			this.$store.commit('sideHandlers/setFabClicked')
		},

		toLogin() {
			this.$router.push('/auth/login/')
		},
	},
}
</script>

<style scoped>
.nuxt-link-exact-active {
	@apply dark:bg-gray-800 dark:text-gray-200 subpixel-antialiased rounded-md inline-block my-auto px-4 py-2 bg-indigo-100 text-indigo-600;
}
</style>
