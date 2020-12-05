<template>
	<div class="md:hidden">
		<div
			@click="fabClick()"
			class="w-16 h-16 flex justify-center align-middle content-center fixed z-40 bottom-0 right-0 m-4 shadow-lg rounded-full transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700"
		>
			<p class="text-white my-auto">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 0 24 24"
					width="24"
					fill="white"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
				</svg>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {}
	},
	methods: {
		fabClick() {
			this.$store.commit('setFabClicked')
		},
	},
}
</script>