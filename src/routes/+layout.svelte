<script>
	import Navbar from '$lib/components/navbar.svelte';
	import { useTheme } from '$lib/stores/theme.svelte';
	import '../app.css';

	let theme = useTheme('dark');
</script>

<div data-theme={theme.mode}>
	<Navbar />
	<slot />
</div>
