<template>
	<div class="container mx-auto max-w-md">
		<h2 class="text-center text-2xl font-semibold text-gray-600">Mutzcraft</h2>
		<div class="flex flex-col mb-4">
			<label class="text-sm mb-2">Email</label>
			<input
				v-model="user.email"
				type="email"
				class="p-3 border-2 rounded-md border-gray-200 text-sm"
				placeholder="Email"
			/>
		</div>
		<div class="flex flex-col mb-4">
			<label class="text-sm mb-2">Password</label>
			<input
				v-model="user.password"
				type="password"
				class="p-3 border-2 rounded-md border-gray-200 text-sm"
				placeholder="Password"
			/>
		</div>
		<div class="flex flex-col mb-4">
			<button
				@click="login()"
				class="text-sm rounded-md p-3 bg-indigo-500 text-gray-100"
			>
				Masuk
			</button>
		</div>
		<div class="flex flex-col mb-4" v-if="timer != 0 && timer != null">
			<p class="text-center text-xs text-gray-400">
				Kirim Verifikasi ulang dalam
				<span class="font-semibold">{{ timer }}</span> detik
			</p>
		</div>
		<div v-if="timer != null">
			<div
				@click="resendEmailVerification()"
				class="flex flex-col mb-4"
				v-if="timer == 0"
			>
				<button
					class="text-center text-xs hover:bg-gray-100 p-3 rounded-md transition-colors duration-400"
				>
					Kirim Verifikasi ulang sekarang
				</button>
			</div>
		</div>
		<div class="flex flex-col mb-2">
			<nuxt-link class="text-center text-xs" to="/auth/register/"
				>Belum punya akun? yuk daftar dulu</nuxt-link
			>
		</div>
	</div>
</template>

<script>
export default {
	middleware: 'authenticated',
	layout: 'auth',
	data() {
		return {
			user: {
				email: '',
				password: '',
			},
		}
	},

	computed: {
		showCountdown() {
			return this.$store.getters.showCountdown
		},
		message() {
			return this.$store.state.message
		},
		timer() {
			return this.$store.getters.timer
		},
	},
	methods: {
		login() {
			this.$store.dispatch('loginAction', this.user)
		},

		resendEmailVerification() {
			return
		},
	},
}
</script>