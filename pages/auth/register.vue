<template>
	<div class="container mx-auto max-w-md">
		<h2 class="text-center text-2xl font-semibold text-gray-600">Mutzcraft</h2>
		<div class="flex flex-col mb-4">
			<label class="text-sm mb-2">Username</label>
			<input
				v-model="user.username"
				type="text"
				class="p-3 border-2 rounded-md border-gray-200 text-sm"
				placeholder="Username"
			/>
		</div>
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
		<div class="flex flex-col mb-5">
			<button
				@click="createUser()"
				class="text-sm rounded-md p-3 bg-indigo-500 text-gray-100"
			>
				Register
			</button>
		</div>
		<div class="flex flex-col mb-2">
			<nuxt-link class="text-center text-xs" to="/"
				>Sudah Mempunyai Akun? Masuk Sekarang</nuxt-link
			>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'auth',
	data() {
		return {
			user: {
				username: '',
				email: '',
				password: '',
			},
		}
	},

	computed: {
		message() {
			return this.$store.state.auth.message
		},
	},
	methods: {
		createUser() {
			if (this.message == null) {
				this.$store.dispatch('auth/createNewUser', this.user)
			}
			return

			/*this.$fire.auth
				.createUserWithEmailAndPassword(this.user.email, this.user.password)
				.then((result) => {
					console.log(result.user)
				})*/
		},
	},
}
</script>