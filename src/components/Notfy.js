import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

const notyf = new Notyf({
	position: {
		x: 'right',
		y: 'top'
	}
});

export const showNotyf = message => {
	if (message instanceof Error) {
		notyf.error(message.message);
	} else {
		notyf.success(message);
	}
};
