let lightMode = $state('light');

export function useTheme(initialValue?: string) {
	if (initialValue && initialValue != '') {
		lightMode = initialValue;
	}
	return {
		get mode() {
			return lightMode;
		},
		toggle: () => {
			if (lightMode === 'light') {
				lightMode = 'dark';
			} else {
				lightMode = 'light';
			}
			return lightMode;
		}
	};
}
