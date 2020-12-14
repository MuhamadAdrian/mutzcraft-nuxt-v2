<template>
	<div>
		<h1>Manage User</h1>
	</div>
</template>

<script>
export default {
	layout: 'admin',
	mounted() {
		this.$axios.$post('/api/getUsers').then((result) => {
			console.log(result)
		})
	},
}
</script>