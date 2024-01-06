<script>
	import { useTheme } from '$lib/stores/theme.svelte';
	let theme = useTheme();
</script>

<div class="navbar fixed top-0 z-50 h-[112px] bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</div>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[calc(100vw-15px)]"
			>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About us</a></li>
				<li><a>Service</a></li>
				<li><a>Reviews</a></li>
				<li><a>Blog</a></li>
				<li><a>Contacts</a></li>
			</ul>
		</div>
		<a class="btn btn-ghost text-xl">daisyUI</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About us</a></li>
			<li><a>Service</a></li>
			<li><a>Reviews</a></li>
			<li><a>Blog</a></li>
			<li><a>Contacts</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<button class="btn" on:click={theme.toggle}>Button</button>
	</div>
</div>
