<template>
	<!--SideNav -->
	<div class="">
		<transition name="slide" mode="out-in">
			<div
				v-if="fabClicked"
				class="side-menu fixed top-0 left-0 z-50 w-4/5 md:w-1/6 h-full bg-white dark:bg-gray-900 transition-all duration-300 shadow-xl"
			>
				<div class="container mx-auto px-4">
					<header
						class="dark:border-gray-700 dark:border-opacity-10 transition-colors duration-300 py-2 flex items-center justify-between"
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
				<AdminUserInfo
					:user="user"
					:emailVerified="emailVerified"
				></AdminUserInfo>
				<ul class="list-none mb-3">
					<p class="text-xs text-gray-400 mb-2 ml-4">Menu</p>
					<DynamicLink title="Produk" hasTreeview>
						<template v-slot:icon>
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path
									d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
								/>
							</svg>
						</template>
						<template v-slot:list>
							<DynamicLink
								title="Semua Produk"
								href="/admin/produk/"
							>
								<template v-slot:icon>
									<svg
										class="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 0 24 24"
										width="24"
									>
										<path d="M0 0h24v24H0z" fill="none" />
										<path
											d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
										/>
									</svg>
								</template>
							</DynamicLink>
							<DynamicLink
								title="Produk Diskon"
								href="/admin/produk-diskon/"
							>
								<template v-slot:icon>
									<svg
										class="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 0 24 24"
										width="24"
									>
										<path d="M0 0h24v24H0z" fill="none" />
										<path
											d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"
										/>
									</svg>
								</template>
							</DynamicLink>
						</template>
					</DynamicLink>
					<DynamicLink title="Dashboard" href="/admin/">
						<template v-slot:icon>
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path
									d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
								/>
							</svg>
						</template>
					</DynamicLink>
					<DynamicLink
						title="Manage Users"
						href="/admin/manage-users"
					>
						<template v-slot:icon>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="fill-current"
								height="24"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path
									d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
								/>
							</svg>
						</template>
					</DynamicLink>
				</ul>
				<div
					class="container mx-auto px-4 absolute bottom-0 left-0 p-3 w-full"
				>
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
	</div>
</template>

<script>
import { auth } from '~/services/firebase'
import DynamicLink from '../DynamicLink.vue'
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
		fabClicked() {
			return true
		},
	},
	methods: {
		signOut() {
			auth.signOut().then(() => {
				this.$store.commit('users/SET_EMAIL_VERIFIED', false)
				this.$store.commit('users/RESET_STORE')
				this.$store.commit('users/SET_CURRENT_USER', false)
			})
		},
		toggleTheme() {
			this.darkMode = !this.darkMode
			let html = document.querySelector('html')
			html.classList.toggle('dark')
		},
	},
}
</script>

<style scoped>
</style>