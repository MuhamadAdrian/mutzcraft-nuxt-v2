<template>
	<div>
		<h1 class="text-2xl font-semibold">Tambah Data</h1>
		<AdminForm @change="setData"></AdminForm>
	</div>
</template>

<script>
export default {
	layout: 'admin',

	data() {
		return {
			data: '',
		}
	},

	methods: {
		setData(data) {
			this.data = data
		},
	},
}
</script>