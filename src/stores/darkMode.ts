import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultValue = 'light';
const initialValue = browser ? window.localStorage.getItem('dark') ?? defaultValue : defaultValue;

export const darkMode = writable<string>(initialValue);

darkMode.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('dark', value);
	}
});

export { darkMode as default };
