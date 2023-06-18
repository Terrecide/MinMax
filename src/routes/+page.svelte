<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import { openForm } from '$lib/klaviyo';
	import { smoothScroll } from '$lib/smoothScroll';
	import SignUpForm from './signUpForm.svelte';
</script>

<div class="bg-surface-100-800-token hero-gradient relative">
	<div class="section-hero lg:hidden" />
	<div class="section-container mx-auto !z-10">
		<div class="flex flex-col lg:flex-row items-center">
			<div class="space-y-10 flex flex-col justify-center items-start p-6 lg:w-2/4">
				<div class="h1 font-bold"><b>Minimize Risks</b> and <b>Maximize Returns</b></div>
				<div class="h3">
					The first cash flow <b>AI</b> analysis tool for the gaming industry.
				</div>
				<button class="btn variant-filled-primary" on:click={smoothScroll}>Sign Up Now</button>
			</div>
			<div class="hidden lg:grid lg:w-1/2 grid-cols-1 grid-rows-1 p-4 h-1/2 w-full col-span-2">
				<img class="section-image rounded-lg" src="/landing-hero-2.png" alt="hero" />
			</div>
		</div>
	</div>
</div>
<div class="section-container mx-auto text-center">
	<div class="flex flex-col p-6">
		<div class="h1 font-bold">Tired of juggling countless Excel sheets?</div>
		<div class="h2 mt-4">
			Say goodbye to manual spreadsheets and welcome a simplified, accurate, and efficient way to
			analyze cash flow.
		</div>
	</div>
</div>
<div class="bg-surface-100-800-token tailwind-gradient">
	<div class="section-container grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto text-center">
		<div class="card variant-glass flex flex-col p-6">
			<div class="h1 font-bold text-center pb-6">Tag study</div>
			<div class="h3">
				Get a comprehensive view of price and revenue distributions based on analyzed tags. Estimate
				potential earnings over specific time periods and save your analyses for future reference.
			</div>
		</div>
		<div class="card variant-glass flex flex-col p-6">
			<div class="h1 font-bold text-center pb-6">Cashflow</div>
			<div class="h3">
				Estimate project costs, select revenue projections, and add/manage expenses for accurate
				cash flow calculations. View different projection cases graphically and make data-driven
				decisions.
			</div>
		</div>
		<div class="card variant-glass flex flex-col p-6">
			<div class="h1 font-bold text-center pb-6">Compare</div>
			<div class="h3">
				Effortlessly compare multiple analyses side by side with MinMaxed intuitive compare feature.
				Gain valuable insights, identify trends, and make informed decisions to maximize your game
				project's success.
			</div>
		</div>
	</div>
</div>
<div class="section-container">
	<div class=" flex flex-col justify-center items-center text-center space-y-4 p-4 h-2/3">
		<SignUpForm />
	</div>
</div>
<div class="p-4 pl-16 bg-surface-100-800-token">@ 2023, MinMaxed. All rights reserved</div>

<style lang="postcss">
	:root {
		--color-secondary-custom: 255 0 150;
	}
	.section-image {
		@apply object-scale-down;
		min-height: 200px;
	}
	.section-container {
		z-index: 10;
		position: relative;
	}
	.section-hero {
		position: absolute;
		background-image: url(landing-hero.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		/* opacity: 0.1; */
		background-color: rgba(0, 0, 0, 100);
		width: 100%;
		height: 100%;
		z-index: 1;
		box-shadow: inset 0 0 0 2000px rgba(255, 0, 150, 0.2);
	}
	.hero-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-custom) / 0.2) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
	.tailwind-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-custom) / 0.2) 0px,
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
