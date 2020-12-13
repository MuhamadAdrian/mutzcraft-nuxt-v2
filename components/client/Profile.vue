<template>
	<transition name="layout" mode="out-in">
		<div
			v-if="showEditProfile"
			class="side-menu fixed top-0 left-0 z-50 w-4/5 md:w-1/4 h-full bg-white dark:bg-gray-900 transition-all duration-300"
		>
			<div class="container mx-auto px-4">
				<header
					class="border-b-2 border-gray-50 dark:border-gray-700 dark:border-opacity-10 transition-colors duration-300 py-2 flex items-center justify-between"
				>
					<div class="left flex items-center">
						<button class="dark:text-gray-50" @click="closeEditProfile()">
							<svg
								class="w-6 h-6 mr-3"
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
						</button>
						<h2
							class="text-gray-600 font-semibold text-xl dark:text-gray-50 py-3"
						>
							Edit Profile
						</h2>
					</div>
					<div class="right">
						<button
							class="mobile w-12 h-12 p-3 rounded-full text-sm justify-center flex items-center text-gray-200 bg-indigo-500 hover:bg-indigo-600 dark:text-gray-200 transition-colors duration-300"
							@click="updateProfile()"
						>
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
									d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
								></path>
							</svg>
						</button>
					</div>
				</header>
				<form class="form mt-5" @submit.prevent>
					<input
						@change="readFile"
						type="file"
						style="display: none"
						ref="file"
					/>
					<div class="flex items-start justify-between">
						<div class="file flex items-center mb-4">
							<div
								@click="openFolder()"
								class="chnage-image relative w-20 h-20 mr-4 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-200"
							>
								<svg
									v-if="!user.photoURL"
									class="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 0 24 24"
									width="24"
								>
									<path d="M0 0h24v24H0z" fill="none" />
									<circle cx="12" cy="12" r="3.2" />
									<path
										d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
									/>
								</svg>
								<img
									v-if="user.photoURL"
									:src="user.photoURL"
									class="object-cover object-center absolute top-0 left-0 rounded-full w-20 h-20"
									alt=""
								/>
							</div>
							<p class="text-xs text-gray-600">Change Image</p>
						</div>
					</div>
					<div class="flex flex-col mb-4">
						<label class="text-sm mb-2 dark:text-gray-400">Name</label>
						<input
							v-model="user.displayName"
							type="email"
							class="dark:bg-gray-700 bg-gray-100 dark:text-gray-50 p-3 rounded-md border-gray-200 text-sm"
							placeholder="Email"
						/>
					</div>
					<div class="flex flex-col mb-4">
						<label class="text-sm mb-2 dark:text-gray-400">Email</label>
						<input
							v-model="user.email"
							type="email"
							class="dark:bg-gray-700 bg-gray-100 dark:text-gray-50 p-3 rounded-md border-gray-200 text-sm"
							placeholder="Email"
							disabled
						/>
					</div>
					<div class="flex flex-col mb-4">
						<label class="text-sm mb-2 dark:text-gray-400">Phone</label>
						<input
							v-model="user.phoneNumber"
							type="email"
							class="dark:bg-gray-700 bg-gray-100 dark:text-gray-50 p-3 rounded-md border-gray-200 text-sm"
							placeholder="+62 ..."
						/>
					</div>
					<div class="flex flex-col mb-4">
						<label class="text-sm mb-2 dark:text-gray-400">Address</label>
						<textarea
							v-model="user.address"
							class="dark:bg-gray-700 bg-gray-100 dark:text-gray-50 p-3 rounded-md border-gray-200 text-sm"
							rows="6"
						>
						</textarea>
					</div>
				</form>
			</div>
			<div class="menu container mx-auto px-4 fixed bottom-0 left-0 p-3 w-full">
				<ul
					class="list-none divide divide-y-2 divide-gray-50 dark:divide-gray-800 divide-solid"
				>
					<li class=""></li>
				</ul>
			</div>
		</div>
	</transition>
</template>

<script>
import { uploadHandler } from '@/plugins/mixin'
export default {
	mixins: [uploadHandler],
	data() {
		return {
			user: {},
		}
	},
	computed: {
		showEditProfile() {
			return this.$store.getters['sideHandlers/showEditProfile']
		},
	},

	watch: {
		showEditProfile(val) {
			if (!val) {
				this.profile = {}
			} else if (val) {
				this.loadData()
				this.$store.commit('upload/SET_IMAGE_HAS_CHANGED', false)
			}
		},
	},

	methods: {
		closeEditProfile() {
			this.$store.commit('sideHandlers/TOGGLE_EDIT_PROFILE', false)
		},

		loadData() {
			let user = this.$fire.auth.currentUser
			if (user) {
				this.$fire.firestore
					.collection('users')
					.doc(user.uid)
					.onSnapshot((doc) => {
						this.user = doc.data()
					})
			}
		},
	},
	mounted() {
		this.loadData()
	},
}
</script>