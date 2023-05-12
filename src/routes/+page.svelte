<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import { smoothScroll } from '$lib/smoothScroll';
</script>

<div class="bg-surface-100-800-token hero-gradient">
	<div class="section-container mx-auto">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 itemsSstart">
			<div class="space-y-10 flex flex-col items-start p-6">
				<h1 class="h1 font-bold">MinMax your games</h1>
				<h3 class="h3">Use <b>reliable data</b> and <b>AI</b> to boost your game's success.</h3>
				<button class="btn variant-filled-primary" on:click={smoothScroll}>Sign Up Now</button>
			</div>
			<div class="flex flex-col card variant-glass p-4 h-2/3 w-full col-span-2">mockup image</div>
		</div>
	</div>
</div>
<div class="section-container mx-auto text-center">
	<div class="flex flex-col">
		<h1 class="h1 font-bold">Easy to use solution</h1>
		<h3 class="h2 mt-4">
			Our product is really simple.<br /> Just plug in your game's info and leave the rest to us!
		</h3>
	</div>
</div>
<div class="bg-surface-100-800-token tailwind-gradient">
	<div class="section-container mx-auto">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 items-start">
			<div class="space-y-10 flex flex-col items-start p-6">
				<h1 class="h1 font-bold">Tired of researching the market?</h1>
				<h3 class="h3">
					We give you everything in one place so <b>market research</b> has never been <b>easier</b>
				</h3>
			</div>
			<div class="flex flex-col card variant-glass p-4 h-2/3 w-full col-span-2">mockup image</div>
		</div>
	</div>
	<div class="section-container mx-auto">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 items-start">
			<div class="flex flex-col card variant-glass p-4 h-2/3 w-full col-span-2">mockup image</div>
			<div class="space-y-10 flex flex-col items-start p-6">
				<h1 class="h1 font-bold">Enhanced with AI</h1>
				<h3 class="h3">
					Personalised <b>AI</b> suggestions will guide you on what's required to ensure your
					<b>future success</b>
				</h3>
			</div>
		</div>
	</div>
</div>
<div class="section-container" id="signUpForm">
	<div class=" flex flex-col justify-center items-center text-center space-y-4 p-4 h-2/3">
		<div class="mb-6">
			<h1 class="h1 font-bold">Do you know?</h1>
			<p class="h4 pt-2">
				More than 80% of games are not profitable...<br />
				Publishers are not interested in supporting 95 - 99% of games...<br />
			</p>
		</div>
		<div class="card variant-glass p-6 text-center lg:w-1/2">
			<h3 class="h2 font-bold mb-6">Don't be a statistic. Sign up for free!</h3>
			<label class="label">
				<input class="input" type="email" placeholder="youremail@domain.com" />
			</label>
			<button class="btn variant-filled-primary mt-6 w-full">Sign Up</button>
		</div>
	</div>
</div>

<style lang="postcss">
	.hero-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
	.tailwind-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.5) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}
	.form-bg {
		background-color: rgb(var(--color-primary-500) / var(--tw-bg-opacity));
		color: rgb(var(--on-primary));
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.75) 0px,
				transparent 40%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-secondary-500) / 0.75) 0px, transparent 40%);
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
