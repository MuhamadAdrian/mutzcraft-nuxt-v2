<template>
	<div
		class="container mx-auto max-w-md fixed bottom-0 md:px-0 sm:px-1 px-4 z-50"
	>
		<transition name="slide-up-fade">
			<div
				v-if="message"
				:class="[success ? 'bg-green-500' : 'bg-red-500']"
				class="content flex items-center rounded-md p-3 shadow-md my-3"
			>
				<span class="mr-3">
					<svg
						class="w-6 h-6 text-gray-200"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</span>
				<p class="text-xs text-gray-200">{{ message }}</p>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	computed: {
		hasLogin: {
			get() {
				return this.$store.getters['users/hasLogin']
			},
			set(newVal) {
				this.$store.commit('users/SET_HAS_LOGIN', newVal)
			},
		},
		hasRegistered: {
			get() {
				return this.$store.getters['users/hasRegistered']
			},
			set(newVal) {
				this.$store.commit('users/SET_HAS_REGISTERED', newVal)
			},
		},
		success: {
			get() {
				return this.$store.getters['users/success']
			},
		},
		message: {
			get() {
				return this.$store.getters['users/message']
			},
			set(newVal) {
				this.$store.commit('users/SET_MESSAGE', {
					success: null,
					errMsg: newVal,
				})
			},
		},
	},

	watch: {
		message(value) {
			setTimeout(() => {
				this.message = null
			}, 3000)
		},

		hasLogin(hasLogin) {
			if (hasLogin) {
				setTimeout(() => {
					this.hasLogin = false
				}, 2000)
			}
		},
		hasRegistered(hasRegistered) {
			if (hasRegistered) {
				setTimeout(() => {
					this.$router.replace('/auth/login/')
					this.hasRegistered = false
				}, 2000)
			}
		},
	},
}
</script>

<style>
.slide-up-fade-enter-active,
.slide-up-fade-leave-active {
	@apply transition-all duration-500;
}
.slide-up-fade-enter,
.slide-up-fade-leave-to {
	@apply opacity-0 transform translate-y-3;
}
.slide-up-fade-enter-to,
.slide-up-fade-leave {
	@apply opacity-100 transform translate-y-0;
}
</style>