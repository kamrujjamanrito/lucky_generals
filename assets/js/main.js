/* ==============
 ========= js documentation ==========================

 * template name: LuckyGenerals
 * version: 1.0
 * description: A Creative Company for People on a Mission.
 * author: LuckyGenerals
 * author-url: https://luckygenerals.com/

    ==================================================

     01. navbar link hover animation
     -------------------------------------------------

    ==================================================
============== */

// (function ($) {
// 	"use strict";

// 	jQuery(function () {
// 		gsap.registerPlugin(
// 			ScrollTrigger,
// 			ScrollSmoother,
// 			ScrollToPlugin,
// 			SplitText
// 		);

// 		gsap.config({ nullTargetWarn: false });

// 		const panels = gsap.utils.toArray(".panel");
// 		let currentIndex = 0;
// 		let isScrolling = false;

// 		function setPanelHeights() {
// 			const viewportHeight = window.innerHeight;
// 			panels.forEach((panel) => {
// 				const contentHeight = panel.scrollHeight;
// 				panel.style.minHeight = Math.max(viewportHeight, contentHeight) + "px";
// 			});
// 		}

// 		// Initial setup
// 		setPanelHeights();

// 		window.addEventListener("resize", setPanelHeights);
// 		window.addEventListener("orientationchange", setPanelHeights);

// 		const smoother = ScrollSmoother.create({
// 			wrapper: ".page-wrapper",
// 			content: ".panel-wrapper",
// 			smooth: 0.5,
// 			effects: true,
// 		});

// 		function scrollToPanel(index) {
// 			index = Math.max(0, Math.min(index, panels.length - 1));
// 			if (currentIndex === index) return;

// 			isScrolling = true;

// 			gsap.to(window, {
// 				scrollTo: { y: panels[index], autoKill: false },
// 				duration: 0.6,
// 				ease: "power2.inOut",
// 				onComplete: () => {
// 					isScrolling = false;
// 					currentIndex = index;
// 				},
// 			});
// 		}

// 		let accumulatedDelta = 0;

// 		window.addEventListener(
// 			"wheel",
// 			function (e) {
// 				e.preventDefault();

// 				if (isScrolling) return;

// 				accumulatedDelta += e.deltaY;

// 				if (accumulatedDelta >= 50) {
// 					scrollToPanel(currentIndex + 1);
// 					accumulatedDelta = 0;
// 				} else if (accumulatedDelta <= -50) {
// 					scrollToPanel(currentIndex - 1);
// 					accumulatedDelta = 0;
// 				}
// 			},
// 			{ passive: false }
// 		);

// 		window.addEventListener("keydown", function (e) {
// 			if (isScrolling) return;

// 			if (e.key === "ArrowDown") scrollToPanel(currentIndex + 1);
// 			if (e.key === "ArrowUp") scrollToPanel(currentIndex - 1);
// 		});

// 		if ($(".panel-hero").length > 0) {
// 			const firstTitle = document.querySelector(".first-title");
// 			const secondTitle = document.querySelector(".second-title");
// 			let offset = window.innerHeight * 0.25;

// 			let targetScale = window.innerWidth < 992 ? 0.5 : 0.2;

// 			ScrollTrigger.create({
// 				trigger: ".panel-hero",
// 				start: `top -${offset}px`,
// 				endTrigger: ".df",
// 				end: "top top",
// 				pin: firstTitle,
// 				pinSpacing: false,

// 				onEnter: () => {
// 					gsap.to(firstTitle, {
// 						scale: targetScale,
// 						transformOrigin: "top center",
// 						duration: 0.5,
// 						ease: "power2.out",
// 					});
// 					gsap.to(secondTitle, {
// 						scale: 0,
// 						transformOrigin: "top center",
// 						opacity: 0,
// 						duration: 0.5,
// 						ease: "power2.out",
// 					});
// 				},

// 				onLeaveBack: () => {
// 					gsap.to(firstTitle, {
// 						scale: 1,
// 						transformOrigin: "top center",
// 						duration: 0.5,
// 						ease: "power2.out",
// 					});

// 					gsap.to(secondTitle, {
// 						scale: 1,
// 						opacity: 1,
// 						transformOrigin: "top center",
// 						duration: 0.5,
// 						ease: "power2.out",
// 					});
// 				},

// 				markers: true,
// 			});

// 			document.fonts.ready.then(() => {
// 				const firstTitle = document.querySelector(".first-title");
// 				const secondTitle = document.querySelector(".second-title");

// 				if (firstTitle && secondTitle) {
// 					let firstSplit = new SplitText(firstTitle, { type: "words" });
// 					let secondSplit = new SplitText(secondTitle, { type: "words" });

// 					gsap.set([firstTitle, secondTitle], {
// 						opacity: 1,
// 						visibility: "visible",
// 					});
// 					gsap.set([firstSplit.words, secondSplit.words], {
// 						opacity: 0,
// 						scale: 1,
// 					});

// 					let tl = gsap.timeline();

// 					tl.to(firstSplit.words, {
// 						opacity: 1,
// 						scale: 1,
// 						duration: 0.4,
// 						ease: "power2.out",
// 						stagger: 0.18,
// 					}).to(
// 						secondSplit.words,
// 						{
// 							opacity: 1,
// 							scale: 1,
// 							duration: 0.4,
// 							ease: "power2.out",
// 							stagger: 0.18,
// 						},
// 						"-=0.18"
// 					);
// 				}
// 			});
// 		}

// 		if ($(".panel-two").length > 0) {
// 			document.fonts.ready.then(() => {
// 				const lines = gsap.utils.toArray(".line-animation");

// 				if (lines.length) {
// 					gsap.set(lines, { opacity: 0, y: 0, visibility: "visible" });

// 					let tl = gsap.timeline({
// 						scrollTrigger: {
// 							trigger: ".sticky-line-wrapper",
// 							start: "top 80%",
// 							end: "bottom top",
// 							toggleActions: "play none none none",
// 							markers: true,
// 						},
// 						delay: 0.37,
// 					});

// 					lines.forEach((line, index) => {
// 						tl.to(
// 							line,
// 							{
// 								opacity: 1,
// 								y: 0,
// 								duration: 0.6,
// 								ease: "power2.out",
// 							},
// 							index * 0.3
// 						);
// 					});
// 				}
// 			});
// 		}

// 		if ($(".panel-three").length > 0) {
// 			const refirstTitle = document.querySelector(".stick-top");
// 			let reoffset = window.innerHeight * 0.27;

// 			let retargetScale = window.innerWidth < 992 ? 0.5 : 0.2;

// 			ScrollTrigger.create({
// 				trigger: ".panel-three",
// 				start: `top -${reoffset}px`,
// 				endTrigger: ".rcd",
// 				end: "top top",
// 				pin: refirstTitle,
// 				pinSpacing: false,

// 				onEnter: () => {
// 					gsap.to(refirstTitle, {
// 						scale: retargetScale,
// 						transformOrigin: "top center",
// 						duration: 0.5,
// 						ease: "power2.out",
// 					});
// 				},

// 				onLeaveBack: () => {
// 					gsap.to(refirstTitle, {
// 						scale: 1,
// 						transformOrigin: "top center",
// 						duration: 0.5,
// 						ease: "power2.out",
// 					});
// 				},

// 				markers: true,
// 			});
// 		}

// if ($(".horizontal-wrapper").length > 0) {
//     var horizontalSlider = new Swiper(".horizontal-slider", {
//         loop: false,
//         speed: 1000,
//         slidesPerView: 1,
//         slidesPerGroup: 1,
//         spaceBetween: 0,
//         mousewheel: {
//             invert: true,
//         },
//         parallax: true,
//         navigation: {
//             nextEl: ".next-testimonial",
//             prevEl: ".prev-testimonial",
//         },
//     });

//     let hasScrolledNextPanel = false; // flag to prevent repeated trigger
//     let horizontalInView = false; // flag to track if wrapper is visible

//     // Track if horizontal wrapper is in viewport
//     ScrollTrigger.create({
//         trigger: ".horizontal-wrapper",
//         start: "top bottom",
//         end: "bottom top",
//         onEnter: () => {
//             horizontalInView = true;
//         },
//         onLeave: () => {
//             horizontalInView = false;
//             hasScrolledNextPanel = false; // reset flag when leaving wrapper
//         },
//         onEnterBack: () => {
//             horizontalInView = true;
//         },
//         onLeaveBack: () => {
//             horizontalInView = false;
//             hasScrolledNextPanel = false; // reset flag when scrolling back up
//         }
//     });

//     function moveToNextVerticalPanel() {
//         if (horizontalInView && !hasScrolledNextPanel && panels[currentIndex + 1]) {
//             hasScrolledNextPanel = true; // prevent multiple triggers
//             scrollToPanel(currentIndex + 1);
//         }
//     }

//     // Trigger only when horizontal wrapper is visible
//     horizontalSlider.on("reachEnd", moveToNextVerticalPanel);

//     horizontalSlider.on("slideChange", function () {
//         if (horizontalSlider.isEnd) {
//             moveToNextVerticalPanel();
//         }
//     });
// }

// 		$(window).on("beforeunload", function () {
// 			$(window).scrollTop(0);
// 		});
// 	});
// })(jQuery);

(function ($) {
	"use strict";

	jQuery(function () {
		gsap.registerPlugin(
			ScrollTrigger,
			ScrollSmoother,
			ScrollToPlugin,
			SplitText
		);

		gsap.config({ nullTargetWarn: false });

		const panels = gsap.utils.toArray(".panel, .horizontal-wrapper");
		let currentIndex = 0;
		let isScrolling = false;
		let scrollEnabled = true;
		let sliderActive = false;
		let horizontalWheelLock = false;

		function setPanelHeights() {
			const viewportHeight = window.innerHeight;
			panels.forEach((panel) => {
				const contentHeight = panel.scrollHeight;
				panel.style.minHeight = Math.max(viewportHeight, contentHeight) + "px";
			});
		}

		// Initial setup
		setPanelHeights();
		window.addEventListener("resize", setPanelHeights);
		window.addEventListener("orientationchange", setPanelHeights);

		const smoother = ScrollSmoother.create({
			wrapper: ".page-wrapper",
			content: ".panel-wrapper",
			smooth: 0.8,
			effects: true,
		});

		// Smooth scroll to panel
		function scrollToPanel(index) {
			index = Math.max(0, Math.min(index, panels.length - 1));
			if (currentIndex === index) return;

			isScrolling = true;

			gsap.to(window, {
				scrollTo: { y: panels[index], autoKill: false },
				duration: 0.8,
				ease: "power2.inOut",
				onComplete: () => {
					isScrolling = false;
					currentIndex = index;

					// Pause vertical scroll on horizontal-wrapper
					if (panels[currentIndex].classList.contains("horizontal-wrapper")) {
						scrollEnabled = false;
						sliderActive = true;
					} else {
						scrollEnabled = true;
						sliderActive = false;
					}
				},
			});
		}

		let accumulatedDelta = 0;
		const horizontalWrapper = document.querySelector(".horizontal-wrapper");

		// Handle wheel scrolling
		window.addEventListener(
			"wheel",
			function (e) {
				const delta = e.deltaY;

				// Handle horizontal slider wheel
				if (
					horizontalWrapper &&
					horizontalWrapper.contains(e.target) &&
					sliderActive
				) {
					e.preventDefault();

					if (horizontalWheelLock) return; // skip if locked
					horizontalWheelLock = true; // lock immediately

					if (delta > 0) {
						if (horizontalSlider.isEnd) {
							// If at last slide, release vertical scroll
							sliderActive = false;
							scrollEnabled = true;
							scrollToPanel(currentIndex + 1);
						} else {
							horizontalSlider.slideNext();
						}
					} else if (delta < 0) {
						if (horizontalSlider.activeIndex === 0) {
							// If at first slide, allow vertical scroll up
							sliderActive = false;
							scrollEnabled = true;
							scrollToPanel(currentIndex - 1);
						} else {
							horizontalSlider.slidePrev();
						}
					}

					// Unlock after transition
					setTimeout(() => {
						horizontalWheelLock = false;
					}, 400); // slightly longer than slide speed
					return;
				}

				if (!scrollEnabled) return;

				e.preventDefault();
				if (isScrolling) return;

				accumulatedDelta += delta;

				if (accumulatedDelta >= 50) {
					scrollToPanel(currentIndex + 1);
					accumulatedDelta = 0;
				} else if (accumulatedDelta <= -50) {
					scrollToPanel(currentIndex - 1);
					accumulatedDelta = 0;
				}
			},
			{ passive: false }
		);

		// Keyboard arrows
		window.addEventListener("keydown", function (e) {
			if (!scrollEnabled || isScrolling) return;

			if (e.key === "ArrowDown") scrollToPanel(currentIndex + 1);
			if (e.key === "ArrowUp") scrollToPanel(currentIndex - 1);
		});

		// ================= Horizontal Swiper Control =================
		if (horizontalWrapper) {
			var horizontalSlider = new Swiper(".horizontal-slider", {
				loop: false,
				speed: 800,
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 0,
				mousewheel: false, // handled manually
				parallax: true,
				navigation: {
					nextEl: ".next-testimonial",
					prevEl: ".prev-testimonial",
				},
			});

			// Vertical scroll resumes after reaching end
			horizontalSlider.on("reachEnd", () => {
				// don't automatically scroll; wheel handler will handle
				sliderActive = true;
				scrollEnabled = false;
			});

			// Lock vertical scroll during slide transition
			horizontalSlider.on("slideChangeTransitionStart", () => {
				sliderActive = true;
				scrollEnabled = false;
			});

			horizontalSlider.on("slideChangeTransitionEnd", () => {
				// Allow vertical scroll if slider is at the first or last slide
				if (horizontalSlider.activeIndex === 0 || horizontalSlider.isEnd) {
					sliderActive = false;
					scrollEnabled = true;
				}
			});
		}

		// ===================== Panel Animations =====================

		if ($(".panel-hero").length > 0) {
			const firstTitle = document.querySelector(".first-title");
			const secondTitle = document.querySelector(".second-title");
			let offset = window.innerHeight * 0.25;
			let targetScale = window.innerWidth < 992 ? 0.5 : 0.2;

			// Keep your original ScrollTrigger
			ScrollTrigger.create({
				trigger: ".panel-hero",
				start: `top -${offset}px`,
				endTrigger: ".df",
				end: "top top",
				pin: firstTitle,
				pinSpacing: false,
				onEnter: () => {
					gsap.to(firstTitle, {
						scale: targetScale,
						transformOrigin: "top center",
						duration: 0.5,
						ease: "power2.out",
					});
					gsap.to(secondTitle, {
						scale: 0,
						opacity: 0,
						transformOrigin: "top center",
						duration: 0.5,
						ease: "power2.out",
					});
				},
				onLeaveBack: () => {
					gsap.to(firstTitle, {
						scale: 1,
						transformOrigin: "top center",
						duration: 0.5,
						ease: "power2.out",
					});
					gsap.to(secondTitle, {
						scale: 1,
						opacity: 1,
						transformOrigin: "top center",
						duration: 0.5,
						ease: "power2.out",
					});
				},
				markers: true,
			});

			// SplitText animation timeline
			document.fonts.ready.then(() => {
				let firstSplit = new SplitText(firstTitle, { type: "words" });
				let secondSplit = new SplitText(secondTitle, { type: "words" });

				gsap.set([firstTitle, secondTitle], {
					opacity: 1,
					visibility: "visible",
				});
				gsap.set([firstSplit.words, secondSplit.words], {
					opacity: 0,
					scale: 1,
				});

				let tl = gsap.timeline({
					onComplete: () => {
						// Auto-scroll to next section after hero animation
						const nextSection = document.querySelector(
							".panel:not(.panel-hero)"
						);
						if (nextSection) {
							gsap.to(window, {
								scrollTo: { y: nextSection, autoKill: true },
								duration: 0.4,
								ease: "power2.inOut",
							});
						}
					},
				});

				tl.to(firstSplit.words, {
					opacity: 1,
					scale: 1,
					duration: 0.4,
					ease: "power2.out",
					stagger: 0.18,
				}).to(
					secondSplit.words,
					{
						opacity: 1,
						scale: 1,
						duration: 0.4,
						ease: "power2.out",
						stagger: 0.18,
					},
					"-=0.18"
				);
			});
		}

		if ($(".panel-two").length > 0) {
			document.fonts.ready.then(() => {
				const lines = gsap.utils.toArray(".line-animation");
				if (lines.length) {
					gsap.set(lines, { opacity: 0, y: 0, visibility: "visible" });
					let tl = gsap.timeline({
						scrollTrigger: {
							trigger: ".sticky-line-wrapper",
							start: "top 80%",
							end: "bottom top",
							toggleActions: "play none none none",
							markers: true,
						},
						delay: 0.37,
					});
					lines.forEach((line, index) => {
						tl.to(
							line,
							{ opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
							index * 0.3
						);
					});
				}
			});
		}

		if ($(".panel-three").length > 0) {
			const refirstTitle = document.querySelector(".stick-top");
			let reoffset = window.innerHeight * 0.3;
			let retargetScale = window.innerWidth < 992 ? 0.7 : 0.2;

			ScrollTrigger.create({
				trigger: ".panel-three",
				start: `top -${reoffset}px`,
				endTrigger: ".rcd",
				end: "top top",
				pin: refirstTitle,
				pinSpacing: false,
				onEnter: () => {
					gsap.to(refirstTitle, {
						scale: retargetScale,
						transformOrigin: "top center",
						duration: 0.5,
						ease: "power2.out",
					});
				},
				onLeaveBack: () => {
					gsap.to(refirstTitle, {
						scale: 1,
						transformOrigin: "top center",
						duration: 0.5,
						ease: "power2.out",
					});
				},
				markers: true,
			});
		}

		if ($(".panel-six").length > 0) {
		ScrollTrigger.create({
			trigger: ".panel-six",
			start: "top center",
			onEnter: () => gsap.to(".drf", { autoAlpha: 0, duration: 0.4 }),
			onLeaveBack: () => gsap.to(".drf", { autoAlpha: 1, duration: 0.4 }),
		});

		
	}

		// ===================== Horizontal Slider =====================

		// Reset scroll on reload
		$(window).on("beforeunload", function () {
			$(window).scrollTop(0);
		});
	});
})(jQuery);
