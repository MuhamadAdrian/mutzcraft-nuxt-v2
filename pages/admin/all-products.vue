<template>
	<div class="all-products">
		<div class="flex justify-between items-center mb-5">
			<h1 class="text-2xl font-semibold">Semua Produk</h1>
			<nuxt-link
				to="/admin/tambah-produk/"
				class="rounded-md bg-indigo-500 text-white px-4 uppercase py-3 text-xs flex items-center hover:bg-indigo-600"
			>
				<svg
					class="fill-current"
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 0 24 24"
					width="24"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
				</svg>
				<span> Tambah Data </span>
			</nuxt-link>
		</div>
		<div class="p-5 bg-white rounded-md shadow-sm">
			<input
				type="text"
				placeholder="Cari..."
				class="px-4 py-3 text-sm bg-gray-100 rounded-md w-full"
			/>
			<table class="table-auto w-full text-center text-xs">
				<thead>
					<tr>
						<th><input type="checkbox" /></th>
						<th>Gambar</th>
						<th>Nama</th>
						<th>Harga</th>
						<th>Berat</th>
						<th>Status</th>
						<th>Tanggal Ditambahkan</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody>
					<tr
						@click="$router.push('/admin/edit-data')"
						v-for="data in products"
						:key="data.uid"
					>
						<td>
							<input
								type="checkbox"
								name=""
								:id="data.uid"
								:value="data.uid"
							/>
						</td>
						<td>
							<img
								:src="data.img"
								class="w-12 h-12 object-cover object-center mx-auto"
								alt=""
							/>
						</td>
						<td>{{ data.name }}</td>
						<td>{{ data.price }}</td>
						<td>{{ data.weight }}g</td>
						<td>
							<span class="px-2 py-1 rounded-md bg-gray-100">{{
								data.status
							}}</span>
						</td>
						<td>{{ data.date.seconds }}</td>
						<td>
							<button
								class="bg-red-100 text-red-900 px-3 py-2 text-sm rounded-md"
							>
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="flex justify-end items-center mt-5">
				<!--<label class="text-xs text-gray-400 mr-3"
					>Rows per Page :</label
				>
				<input
					type="number"
					class="w-12 border-b border-indigo-500 text-xs text-center py-2 mr-3"
					v-model="pageSize"
					@change="loadAgainWhenSizeIsChange"
				/>
				<p class="text-xs text-gray-400 mr-3">
					Ditampilkan {{ pageSize }} dari {{ maxItem }}
				</p>-->
				<button
					@click="getPrev()"
					class="w-8 h-8 mr-1 bg-indigo-500 text-white rounded-full p-2 flex items-center justify-center"
				>
					<svg
						class="fill-current transform rotate-180 w-12 h-12"
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 0 24 24"
						width="24"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
						/>
					</svg>
				</button>
				<button
					@click="getNext()"
					class="w-8 h-8 bg-indigo-500 text-white rounded-full p-2 flex items-center justify-center"
				>
					<svg
						class="fill-current w-12 h-12"
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 0 24 24"
						width="24"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
						/>
					</svg>
				</button>
			</div>
			<!--<div
				v-if="message"
				class="message flex justify-end items-center mt-3"
			>
				<p class="text-xs text-red-600">{{ message }}</p>
			</div>-->
		</div>
	</div>
</template>

<script>
import tes1 from '~/assets/img/test.png'
import tes2 from '~/assets/img/test2.png'
import tes3 from '~/assets/img/test3.png'
import { mapGetters } from 'vuex'
export default {
	layout: 'admin',
	data() {
		return {
			message: null,
			staticData: [
				{
					id: 1,
					img: tes1,
					name: 'Produk Satu',
					price: 60.0,
					weight: 300,
					status: 'Tersedia',
					date: '01-09-2020',
				},
				{
					id: 2,
					img: tes2,
					name: 'Produk Dua',
					price: 50.0,
					weight: 500,
					status: 'Pesan dahulu',
					date: '11-10-2020',
				},
				{
					id: 3,
					img: tes3,
					name: 'Produk Tiga',
					price: 70.0,
					weight: 400,
					status: 'Tidak Tersedia',
					date: '20-12-2020',
				},
			],
		}
	},

	watch: {
		pageSize(newVal) {
			if (newVal > this.maxItem) {
				this.pageSize = this.maxItem
				this.message = 'Semua sudah ditampilkan'
				setTimeout(() => {
					this.message = null
				}, 2000)
			} else if (newVal <= 0) {
				this.pageSize = 1
				this.message = 'Operasi tidak diijinkan'
				setTimeout(() => {
					this.message = null
				}, 2000)
			}
		},
	},

	computed: {
		pageSize: {
			get() {
				return this.$store.state.products.pageSize
			},
			set(value) {
				this.$store.commit('products/SET_PAGE_SIZE', value)
			},
		},
		products() {
			return this.$store.state.products.products
		},
		...mapGetters({ productLength: 'products/length' }),
		maxItem() {
			return this.productLength
		},
	},

	methods: {
		/*loadAgainWhenSizeIsChange() {
			this.$store.dispatch('products/getProductsWithFilter')
        },*/
		getNext() {},
		getPrev() {},
	},

	mounted() {
		if (this.products.length == 0) {
			this.$store.dispatch('products/getProducts', this.pageSize)
		}
	},
}
</script>

<style scoped>
tr {
	@apply border-b h-16 cursor-pointer hover:bg-gray-100;
}
</style>