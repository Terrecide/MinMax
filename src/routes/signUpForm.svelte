<script>
	import emailjs from '@emailjs/browser';
	import { toastStore } from '@skeletonlabs/skeleton';

	const serviceID = 'service_8pqsuxd';
	const templateID = 'template_tk8yvtp';
	const publicKey = 'NHFdosrpnpr-8mv_T';
	const patterns = {
		email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
		telephone: /^\d{11}$/
	};
	const emailRegex = new RegExp(patterns.email);
	let emailValue = '';

	async function submitForm() {
		try {
			toastStore.clear();

			if (!emailValue.length) return;

			if (!emailRegex.test(emailValue)) {
				const toast = toastTemplate('Email is not valid!', 'variant-filled-error');
				toastStore.trigger(toast);
				return;
			}

			await emailjs.send(
				serviceID,
				templateID,
				{
					email: emailValue,
					message: 'I just signed up for your awesome product'
				},
				publicKey
			);

			const toast = toastTemplate('Sign up was successful!');
			toastStore.trigger(toast);

			emailValue = '';
		} catch (error) {
			const toast = toastTemplate(error, 'variant-filled-error');
			toastStore.trigger(toast);
		}
	}

	function toastTemplate(message, variant = 'variant-filled') {
		return {
			message: message,
			background: variant,
			timeout: 5000
		};
	}
</script>

<div class="card variant-glass p-6 text-center lg:w-1/2">
	<div class="h3 font-bold mb-6">Don't be a statistic. Sign up for free!</div>
	<form>
		<label class="label">
			<input
				bind:value={emailValue}
				class="input mb-2"
				type="email"
				placeholder="youremail@domain.com"
			/>
			<button
				type="submit"
				class="btn variant-filled-primary mt-6 w-full"
				on:click={(e) => {
					e.preventDefault();
					submitForm();
				}}>Sign Up</button
			>
		</label>
	</form>
</div>
