<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import { openForm } from '$lib/klaviyo';
	import { smoothScroll } from '$lib/smoothScroll';
	import SignUpForm from './signUpForm.svelte';
</script>

<div class="bg-surface-100-800-token hero-gradient">
	<div class="section-container mx-auto">
		<div class="flex flex-col lg:flex-row items-center">
			<div class="space-y-10 flex flex-col justify-center items-start p-6">
				<div class="h1 font-bold">MinMax your games</div>
				<div class="h3">Use <b>reliable data</b> and <b>AI</b> to boost your game's success.</div>
				<button class="btn variant-filled-primary" on:click={openForm}>Sign Up Now</button>
			</div>
			<div
				class="hidden lg:grid lg:w-1/2 grid-cols-1 grid-rows-1 card variant-glass p-4 h-1/2 w-full col-span-2"
			>
				<img class="section-image rounded-lg" src="/landing-hero.jpg" alt="hero" />
			</div>
		</div>
	</div>
</div>
<div class="section-container mx-auto text-center">
	<div class="flex flex-col">
		<div class="h1 font-bold">Easy to use solution</div>
		<div class="h2 mt-4">
			Our product is really simple.<br /> Just plug in your game's info and leave the rest to us!
		</div>
	</div>
</div>
<div class="bg-surface-100-800-token tailwind-gradient">
	<div class="section-container grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto text-center">
		<div class="card variant-glass flex flex-col p-6">
			<div class="h1 font-bold">Tired of researching the market?</div>
			<img class="section-image rounded-lg my-4" src="/landing-research.jpg" alt="analysis" />
			<div class="h3">
				We give you everything in one place so <b>market research</b> has never been <b>easier</b>
			</div>
		</div>
		<div class="card variant-glass flex flex-col p-6">
			<div class="h1 font-bold text-center">Enhanced with AI</div>
			<img class="section-image rounded-lg my-4" src="/landing-ai.jpg" alt="ai" />
			<div class="h3">
				Personalised <b>AI</b> suggestions will guide you on what's required to ensure your
				<b>future success</b>
			</div>
		</div>
	</div>
</div>
<div class="section-container" id="signUpForm">
	<div class=" flex flex-col justify-center items-center text-center space-y-4 p-4 h-2/3">
		<SignUpForm />
	</div>
</div>

<style lang="postcss">
	.section-image {
		@apply object-scale-down;
		min-height: 200px;
	}
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
