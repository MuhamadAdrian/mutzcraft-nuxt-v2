<template>
	<div>
		<h1 class="text-2xl font-semibold">Edit Data</h1>
		<AdminForm :is-edit="true" :data="data"></AdminForm>
	</div>
</template>

<script>
export default {
	layout: 'admin',
	data() {
		return {
			data: {
				nani: true,
				what: 'apa',
			},
		}
	},
}
</script>