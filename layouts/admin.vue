<template>
	<div>
		<AdminNavbar />
		<div class="w-5/6 ml-auto bg-gray-50">
			<div class="container mx-auto px-8 py-8">
				<Nuxt />
			</div>
		</div>
		<AdminSide />
		<Toast class="right-0 md:mr-3" />
	</div>
</template>