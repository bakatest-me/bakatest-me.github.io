<script>
	import Hero from '$lib/components/hero.svelte';
	import { createCounter } from '$lib/stores/count.svelte';
	let counter = createCounter(0);
	let todo = $state([{ value: 'world' }]);
</script>

<Hero />
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>{counter.count}</p>

<button on:click={() => counter.increment()}>Plus</button>
<button on:click={() => todo.push({ value: 'eiei' })}>ADD</button>
{#each todo as item}
	<p>{item.value}</p>
{/each}
