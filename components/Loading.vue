<template>
	<transition name="fade" mode="out-in">
		<div
			v-if="show"
			:class="[
				bgOverlay,
				{
					'absolute top-0 left-0 w-full h-full dark:bg-gray-800 dark:bg-opacity-10 rounded-md bg-opacity-80': isOverlay,
				},
			]"
			class="loading-overlay flex items-center justify-center"
		>
			<div class="loader flex flex-col">
				<div class="lds-ring">
					<div :class="[w, h]"></div>
					<div :class="[w, h]"></div>
					<div :class="[w, h]"></div>
				</div>
				<slot></slot>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		bgOverlay: {
			type: String,
			default: 'bg-white',
		},
		w: {
			type: String,
			default: 'w-10',
		},
		h: {
			type: String,
			default: 'h-10',
		},
		isOverlay: {
			type: Boolean,
			default: true,
		},
		show: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style scoped>
.lds-ring {
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
}
.lds-ring div {
	box-sizing: border-box;
	display: block;
	position: absolute;
	margin: 4px;
	border: 4px solid;
	border-radius: 50%;
	animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: rgb(84, 68, 233) transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
	animation-delay: -0.5s;
}
.lds-ring div:nth-child(2) {
	animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
	animation-delay: -0.1s;
}
@keyframes lds-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>