<template>
	<!--SideNav -->
	<div class="">
		<transition name="fade" mode="out-in">
			<div
				@click="closeSide()"
				v-if="fabClicked"
				class="overlay fixed transition bg-black opacity-50 w-full h-full z-50"
			></div>
		</transition>
		<transition name="slide" mode="out-in">
			<div
				v-if="fabClicked"
				class="side-menu fixed top-0 left-0 z-50 w-4/5 md:w-1/4 h-full bg-white dark:bg-gray-900 transition-all duration-300"
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
				</div>

				<div
					@click="$router.push('/auth/login/')"
					v-if="user && !user.emailVerified"
					class="p-2 bg-indigo-500 shadow-md text-white rounded-md flex items-center"
				>
					<img
						src="@/assets/img/topography.svg"
						alt=""
						class="w-16 h-16 rounded-full object-cover object-center mr-4"
					/>
					<p>Login</p>
				</div>
				<client-only>
					<button
						v-if="user && user.emailVerified"
						@click="$store.commit('sideHandlers/TOGGLE_EDIT_PROFILE', true)"
						class="flex w-full box-border items-center dark:hover:bg-gray-800 p-4 hover:bg-gray-100"
					>
						<img
							v-if="user && !user.photoURL"
							src="@/assets/img/topography.svg"
							alt=""
							class="w-16 h-16 rounded-full object-cover object-center mr-3"
						/>
						<img
							v-if="user && user.photoURL"
							:src="user.photoURL"
							alt=""
							class="w-16 h-16 rounded-full object-cover object-center mr-3"
						/>
						<div class="desc text-left w-full">
							<p
								class="text-base font-semibold text-gray-600 truncate dark:text-gray-100"
							>
								{{ user.displayName | truncate(25) }}
							</p>
							<p class="text-xs text-gray-400 mb-3 truncate dark:text-gray-400">
								{{ user.email | truncate(35) }}
							</p>
							<div
								v-if="user && user.emailVerified"
								class="text-xs flex justify-between items-center font-semibold text-indigo-500"
							>
								<p>EXP 100</p>
								<span>
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
											d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
										></path>
									</svg>
								</span>
							</div>
						</div>
					</button>
				</client-only>

				<div
					class="menu container mx-auto px-4 absolute bottom-0 left-0 p-3 w-full"
				>
					<ul
						class="list-none divide divide-y-2 divide-gray-50 dark:divide-gray-800 divide-solid md:hidden block mb-3"
					>
						<p class="text-xs text-gray-400 mb-2">Menu</p>
						<li class="" @click="closeSide()">
							<nuxt-link
								class="mobile px-3 py-4 text-sm justify-between flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 transition-colors duration-300"
								to="/"
							>
								<span>Beranda</span>
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
										d="M9 5l7 7-7 7"
									></path>
								</svg>
							</nuxt-link>
						</li>
						<li class="" @click="closeSide()">
							<nuxt-link
								class="mobile px-3 py-4 text-sm justify-between flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 transition-colors duration-300"
								to="/produk"
							>
								<span>Produk</span>
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
										d="M9 5l7 7-7 7"
									></path>
								</svg>
							</nuxt-link>
						</li>
						<li class="" @click="closeSide()">
							<nuxt-link
								class="mobile px-3 py-4 text-sm justify-between flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 transition-colors duration-300"
								to="/kontak"
							>
								<span>Kontak</span>
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
										d="M9 5l7 7-7 7"
									></path>
								</svg>
							</nuxt-link>
						</li>
					</ul>
					<ul
						v-if="user && user.emailVerified"
						class="list-none divide divide-y-2 divide-gray-50 dark:divide-gray-800 divide-solid"
					>
						<p class="text-xs text-gray-400 mb-2">Keluar</p>
						<li class="">
							<button
								class="mobile w-full px-3 py-4 text-sm justify-between flex items-center bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-red-500 hover:text-gray-200 dark:text-gray-200 transition-colors duration-300"
								@click="signOut()"
							>
								<span class="ml-3">Logout</span>
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
										d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
									></path>
								</svg>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</transition>

		<ClientProfile />
	</div>
</template>

<script>
import { auth } from '~/services/firebase'
export default {
	name: 'Side',
	data() {
		return {
			darkMode: false,
		}
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
		asd() {
			auth.currentUser.updateProfile({
				photoURL: null,
			})
		},
		signOut() {
			auth.signOut().then(() => {
				this.closeSide()
				this.$store.commit('users/SET_EMAIL_VERIFIED', false)
				this.$store.commit('users/RESET_STORE')
				this.$store.commit('users/SET_CURRENT_USER', false)
			})
		},
		closeSide() {
			this.$store.commit('sideHandlers/setFabClicked')
			this.$store.commit('sideHandlers/TOGGLE_EDIT_PROFILE', false)
		},
		toggleTheme() {
			this.darkMode = !this.darkMode
			let html = document.querySelector('html')
			html.classList.toggle('dark')
		},
	},
}
</script>

<style>
.mobile.nuxt-link-exact-active {
	@apply text-indigo-500 bg-gray-100 dark:bg-gray-800;
}
</style>