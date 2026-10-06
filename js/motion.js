/* ========================================
   Landing Page Motion: scroll reveal
   Adds .is-visible to .reveal elements the first
   time they enter the viewport. CSS does the animating.
   ======================================== */
(function () {
    'use strict';

    const revealElements = document.querySelectorAll('.reveal');

    const prefersReducedMotion =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Leave everything visible if there is nothing to reveal,
    // the browser is too old, or the visitor prefers reduced motion.
    if (
        revealElements.length === 0 ||
        !('IntersectionObserver' in window) ||
        prefersReducedMotion
    ) {
        return;
    }

    const STAGGER_MS = 70;      // delay between items that appear together
    const MAX_STAGGER_STEPS = 6; // caps the longest delay at about 420ms

    function showElement(element, observer, step) {
        element.style.setProperty('--reveal-delay', step * STAGGER_MS + 'ms');
        element.classList.add('is-visible');
        observer.unobserve(element); // animate only once
    }

    const observer = new IntersectionObserver(
        function (entries, observer) {
            // Elements that enter together are staggered in order.
            // One that enters alone (e.g. stacked cards on mobile) has no delay.
            let step = 0;

            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }
                showElement(entry.target, observer, Math.min(step, MAX_STAGGER_STEPS));
                step += 1;
            });
        },
        {
            threshold: 0,
            rootMargin: '0px 0px -10% 0px' // reveal a little before the element is fully on screen
        }
    );

    // Keyboard safety: if focus lands on a hidden element
    // that is already on screen, reveal it immediately.
    document.addEventListener('focusin', function (event) {
        if (!(event.target instanceof Element)) {
            return;
        }
        const element = event.target.closest('.reveal');
        if (element && !element.classList.contains('is-visible')) {
            showElement(element, observer, 0);
        }
    });

    // Turn on the hidden starting state only now that everything is ready.
    document.documentElement.classList.add('motion-enabled');
    revealElements.forEach(function (element) {
        observer.observe(element);
    });
})();