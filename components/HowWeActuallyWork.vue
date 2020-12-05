<template>
	<div class="container mx-auto md:px-20 sm:px-10 px-5">
		<h2 class="text-xl font-semibold text-gray-600 mb-5">
			How We Actually Work <span class="text-green-500">?</span>
		</h2>
		<div
			class="grid md:grid-rows-1 bg-opacity-20 relative md:grid-cols-3 md:grid-flow-col grid-rows-3 grid-cols-1 grid-flow-row gap-3 bg-indigo-500 text-gray-200 rounded-lg p-4"
		>
			<div
				class="bg opacity-90 rounded-lg absolute top-0 left-0 w-full h-full"
			></div>
			<div class="col-span-1 text-center p-7 relative z-10">
				<h3 class="text-lg font-semibold text-white">Discuss</h3>
				<span class="flex justify-center">
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
						></path>
					</svg>
				</span>
				<p>
					Pertama, kamu pilih produk kamu dan bicarakan produk seperti rajutan
					seperti apa yang kamu inginkan
				</p>
			</div>
			<div class="col-span-1 text-center p-7 relative z-10">
				<h3 class="text-lg font-semibold text-white">We made it</h3>
				<span class="flex justify-center">
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
						></path>
					</svg>
				</span>
				<p>
					Kedua, kami coba buat produkk rajutan sesuai dengan yang Anda tentukan
				</p>
			</div>
			<div class="col-span-1 text-center p-7 relative z-10">
				<h3 class="text-lg font-semibold text-white">Deal</h3>
				<span class="flex justify-center">
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
						></path>
					</svg>
				</span>
				<p>Ketiga, Produk sudah jadi dan masuk ke dalam tahap pembayaran</p>
			</div>
		</div>
	</div>
</template>

<style>
.bg {
	background: linear-gradient(
			to left,
			rgba(99, 102, 241, 0),
			rgba(99, 102, 241, 1)
		),
		url('~assets/img/batik.svg');
}
</style>