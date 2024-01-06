export function createCounter(initValue: number = 0) {
	let count = $state(initValue);

	return {
		get count() {
			return count;
		},
		increment: () => (count += 1)
	};
}
