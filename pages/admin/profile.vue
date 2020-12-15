<template>
	<div class="profile-admin">
		<div class="grid grid-cols-3 grid-flow-row">
			<div class="col-span-2">
				<div class="header">
					<h1 class="text-3xl font-semibold mb-2">Edit Profile</h1>
				</div>
				<form
					@submit.prevent
					class="mt-8 bg-white p-8 rounded-md shadow-sm relative"
				>
					<input
						@change="readFile"
						type="file"
						style="display: none"
						ref="file"
					/>
					<div class="flex items-start justify-between">
						<div class="file flex items-center mb-4">
							<div
								@click="openFolder()"
								class="chnage-image relative w-20 h-20 mr-4 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-200"
							>
								<svg
									v-if="!user.photoURL"
									class="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 0 24 24"
									width="24"
								>
									<path d="M0 0h24v24H0z" fill="none" />
									<circle cx="12" cy="12" r="3.2" />
									<path
										d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
									/>
								</svg>
								<img
									v-if="user.photoURL"
									:src="user.photoURL"
									class="object-cover object-center absolute top-0 left-0 rounded-full w-20 h-20"
									alt=""
								/>
							</div>
							<p>Change Image</p>
						</div>
						<button
							@click="updateProfile()"
							class="px-4 py-2 text-sm bg-indigo-50 text-indigo-500 rounded-md hover:bg-indigo-100"
						>
							Save
						</button>
					</div>
					<div class="flex flex-row justify-end mb-4">
						<p class="text-xs text-gray-400">
							Terakhir diupdate {{ updated_at }}
						</p>
					</div>
					<div class="flex flex-col mb-4">
						<label class="text-xs text-gray-400 mb-1">Username</label>
						<input
							type="text"
							class="py-2 border border-gray-200 focus-within:border-gray-400 focus:outline-none px-4 text-sm rounded-md"
							placeholder="Username"
							v-model="user.displayName"
						/>
					</div>
					<div class="flex flex-col mb-4">
						<label class="text-xs text-gray-400 mb-1">Email</label>
						<input
							type="text"
							class="py-2 border cursor-not-allowed border-gray-200 focus-within:border-gray-400 focus:outline-none px-4 text-sm rounded-md"
							placeholder="Email"
							v-model="user.email"
							disabled
						/>
					</div>
					<div class="flex flex-col mb-4">
						<label class="text-xs text-gray-400 mb-1">Phone</label>
						<input
							type="text"
							class="py-2 border border-gray-200 focus-within:border-gray-400 focus:outline-none px-4 text-sm rounded-md"
							placeholder="Phone"
							v-model="user.phoneNumber"
						/>
					</div>
					<Loading :show="isUpdating"></Loading>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import { uploadHandler } from '~/plugins/mixin'
import { auth, db } from '~/services/firebase'
export default {
	layout: 'admin',
	mixins: [uploadHandler],
	data() {
		return {
			user: {},
		}
	},
	computed: {
		updated_at() {
			let updated_at = this.user.updated_at
			return moment(updated_at).format('MMMM Do dddd, h:mm:ss a')
		},
		...mapGetters({ imageURL: 'upload/imageURL' }),
		...mapGetters({ isUpdating: 'profile/isUpdating' }),
	},

	created() {
		let user = auth.currentUser
		if (user) {
			this.$store.commit('upload/SET_IMAGE_HAS_CHANGED', false)
			db.collection('users')
				.doc(user.uid)
				.onSnapshot((doc) => {
					this.user = doc.data()
				})
		}
	},
}
</script>