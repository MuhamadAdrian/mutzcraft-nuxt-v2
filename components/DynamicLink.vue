<template>
	<li class="treeview-button cursor-pointer">
		<nuxt-link
			v-if="!hasTreeview"
			class="mobile py-3 px-4 text-sm text-gray-600 flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 transition-colors duration-300"
			:to="href"
		>
			<slot name="icon"> </slot>

			<span class="ml-3">{{ title }}</span>
		</nuxt-link>
		<p
			v-if="hasTreeview"
			@click="toggleTreeview()"
			class="mobile py-3 px-4 text-sm text-gray-600 flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 transition-colors duration-300"
		>
			<slot name="icon"> </slot>
			<span class="ml-3">{{ title }}</span>
			<span
				class="icon ml-auto transition-transform duration-300 dark:text-white"
				:class="{ 'transform rotate-180': toggle }"
			>
				<svg
					class="fill-current"
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 0 24 24"
					width="24"
				>
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path
						d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
					/>
				</svg>
			</span>
		</p>
		<ul
			v-if="hasTreeview"
			ref="menu"
			:style="'height:' + height"
			class="list-none treeview bg-gray-50 dark:bg-gray-700"
		>
			<slot name="list"> </slot>
		</ul>
	</li>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Title',
		},

		hasTreeview: {
			type: Boolean,
			default: false,
		},
		href: {
			type: String,
		},
	},
	data() {
		return {
			toggle: false,
			height: '',
		}
	},

	methods: {
		toggleTreeview() {
			this.toggle = !this.toggle
			const menu = this.$refs.menu
			if (this.toggle) {
				this.height = menu.scrollHeight + 'px'
			} else {
				this.height = 0 + 'px'
			}
		},
	},
}
</script>

<style scoped>
.treeview-button > ul {
	height: 0;
	overflow: hidden;
	transition: height 0.25s ease-out;
}

.treeview-button > ul > li a {
	@apply pl-10 py-3 pr-4 flex items-center text-sm  text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 transition-colors duration-300;
}
.nuxt-link-exact-active {
	@apply text-indigo-500 bg-gray-100 dark:bg-gray-800;
}
.treeview-button > ul > li a.nuxt-link-exact-active {
	@apply text-indigo-500 bg-gray-100 dark:bg-gray-800;
}
</style>