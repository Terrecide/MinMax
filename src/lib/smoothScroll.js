import { openForm } from '$lib/klaviyo';

export function smoothScroll() {
    document.querySelector('#signUpForm').scrollIntoView({
        behavior: 'smooth'
    });
    setTimeout(() => {
        openForm()
    }, 700)
}