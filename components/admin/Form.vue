<template>
	<div class="form">
		<input
			type="text"
			@change="changeHandler"
			:value="isEdit ? data.what : null"
		/>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			default: null,
			type: Object,
		},

		isEdit: {
			default: false,
			type: Boolean,
		},
	},

	data() {
		return {
			form: {
				name: null,
			},
		}
	},

	methods: {
		changeHandler(e) {
			this.$emit('change', e.target.value)
		},
	},
}
</script>