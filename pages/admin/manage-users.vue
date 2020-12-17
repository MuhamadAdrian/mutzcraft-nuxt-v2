<template>
	<div>
		<h1>Manage User</h1>
	</div>
</template>

<script>
export default {
	layout: 'admin',
	data() {
		return {}
	},

	computed: {},

	methods: {
		makeAdmin(email) {
			this.$store.dispatch('admin/manageUser/makeAdmin', email)
		},
	},

	created() {},
}
</script>