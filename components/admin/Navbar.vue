<template>
	<div class="navbar w-5/6 ml-auto bg-gray-50">
		<div class="container mx-auto p-4">
			<div class="flex items-center justify-between">
				<div class="left flex items-center">
					<span class="">
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
								d="M4 8h16M4 16h16"
							></path>
						</svg>
					</span>
					<div class="title ml-3 text-xl font-semibold"></div>
				</div>
				<div class="right flex items-center">
					<span class="icon-notification relative">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 0 24 24"
							width="24"
						>
							<path
								d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
							/>
						</svg>
						<div
							class="badge absolute h-4 w-4 rounded-full bg-indigo-500 text-white font-medium top-0 right-0 text-xs flex items-center justify-center"
						>
							<span>2</span>
						</div>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>