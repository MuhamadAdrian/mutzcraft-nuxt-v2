<template>
	<div>
		<h1>Manage User</h1>
		<button class="bg-red-700 text-white" v-if="!isMax" @click="loadData()">
			Load Again
		</button>
		<div v-for="(user, index) in users" :key="index">
			<li class="flex items-center">
				<p class="mr-3">{{ user.email }}</p>
				<button
					v-if="!user.customClaims"
					class="bg-white p-3 shadow-sm"
					@click="makeAdmin(user.email)"
				>
					make admin
				</button>
			</li>
		</div>
		<p v-if="message">{{ message }}</p>
	</div>
</template>

<script>
export default {
	layout: 'admin',
	data() {
		return {}
	},

	computed: {
		users() {
			return this.$store.state.admin.manageUser.users
		},
		nextPageToken() {
			return this.$store.state.admin.manageUser.nextPageToken
		},
		isMax() {
			return this.$store.state.admin.manageUser.isMax
		},
		message() {
			return this.$store.state.admin.manageUser.message
		},
	},
	watch: {
		isMax(isMax) {
			if (isMax) {
				this.$store.commit('admin/manageUser/SET_MESSAGE', 'Maximum')
			} else {
				this.$store.commit('admin/manageUser/SET_MESSAGE', null)
			}
		},
	},
	methods: {
		loadData() {
			if (!this.isMax) {
				this.$store.dispatch('admin/manageUser/loadData')
			}
		},

		makeAdmin(email) {
			this.$store.dispatch('admin/manageUser/makeAdmin', email)
		},
	},

	created() {
		if (this.nextPageToken == null) {
			this.loadData()
		}
	},
}
</script>