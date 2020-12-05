<template>
	<transition name="slide-up-fade" mode="out-in">
		<div v-if="show" class="grid grid-cols-3 grid-rows-2 grid-flow-row gap-5">
			<div
				class="col-span-2 relative overflow-hidden bg-indigo-500 h-56 text-white rounded-lg shadow-lg bg-left-bottom bg-cover bg-opacity-90"
			>
				<img
					src="@/assets/img/test.png"
					class="absolute -left-11 opacity-20"
					alt=""
				/>

				<img
					src="@/assets/img/topography.svg"
					class="absolute -left-11 -bottom-14 opacity-20 transform rotate-12"
					alt=""
				/>
			</div>
			<div
				class="col-span-1 overflow-hidden relative bg-pink-500 text-white rounded-lg shadow-lg"
			>
				<img
					src="@/assets/img/test2.png"
					class="absolute -left-11 opacity-20 transform rotate-45"
					alt=""
				/>
				<div class="content absolute p-4">
					<p class="text-5xl font-semibold text-pink-500 text-shadow">
						M<span>.</span>
					</p>
				</div>

				<img
					src="@/assets/img/temple.svg"
					class="absolute -right-7 top-3 opacity-20 transform -rotate-12"
					alt=""
				/>
			</div>
			<div
				class="col-span-3 overflow-hidden relative bg-green-400 text-white rounded-lg shadow-lg"
			>
				<img
					src="@/assets/img/test3.png"
					class="absolute left-2 opacity-30 transform rotate-12"
					alt=""
				/>

				<img
					src="@/assets/img/topography.svg"
					class="absolute opacity-20 transform -rotate-45"
					alt=""
				/>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			show: false,
		}
	},
	mounted() {
		setTimeout(() => {
			this.show = true
		}, 500)
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
slide-up-fade-leave {
	@apply opacity-100 transform translate-y-0;
}
</style>