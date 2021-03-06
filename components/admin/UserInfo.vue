<template>
	<div>
		<client-only>
			<div
				slot="placeholder"
				class="w-full h-20 bg-gray-100 animate-pulse"
			></div>
			<li
				v-if="user && user.emailVerified"
				class="treeview-button cursor-pointer list-none"
			>
				<div
					@click="toggleTreeview()"
					class="flex justify-between items-center w-full p-4 dark:hover:bg-gray-800 active:bg-gray-100"
				>
					<img
						v-if="user && !user.photoURL"
						src="@/assets/img/topography.svg"
						alt=""
						class="w-12 h-12 rounded-full object-cover object-center mr-3"
					/>
					<img
						v-if="user && user.photoURL"
						:src="user.photoURL"
						alt=""
						class="w-12 h-12 rounded-full object-cover object-center mr-3"
					/>
					<div class="desc text-left">
						<p
							class="text-base font-semibold text-gray-600 truncate dark:text-gray-100"
						>
							{{ user.displayName | truncate(10) }}
						</p>
						<p
							class="text-xs text-gray-400 mb-3 truncate dark:text-gray-400"
						>
							{{ user.email | truncate(20) }}
						</p>
					</div>
					<div
						class="icon transition-transform duration-300 dark:text-white"
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
					</div>
				</div>

				<ul
					:style="'height:' + height"
					class="list-none treeview bg-gray-50 mb-5 dark:bg-gray-700"
				>
					<DynamicLink title="Profile" href="/admin/profile/">
						<template v-slot:icon>
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path
									d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
								/>
							</svg>
						</template>
					</DynamicLink>
					<DynamicLink title="Settings" href="/admin/settings/">
						<template v-slot:icon>
							<svg
								class="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								enable-background="new 0 0 24 24"
								height="24"
								viewBox="0 0 24 24"
								width="24"
							>
								<g>
									<path d="M0,0h24v24H0V0z" fill="none" />
									<path
										d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
									/>
								</g>
							</svg>
						</template>
					</DynamicLink>
				</ul>
			</li>
		</client-only>
	</div>
</template>

<script>
export default {
	props: ['user', 'emailVerified'],
	name: 'UserInfo',
	data() {
		return {
			toggle: false,
			height: '',
		}
	},

	methods: {
		toggleTreeview() {
			this.toggle = !this.toggle
			const list = document.querySelector('.treeview-button > ul')
			if (this.toggle) {
				this.height = list.scrollHeight + 'px'
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
</style>