# iGEM Wiki - Complete Astro Files Reference

This document contains all the main Astro files for the iGEM Wiki project for easy reference and reading.

## Table of Contents
1. [Layout Files](#layout-files)
2. [Component Files](#component-files)
3. [Page Files](#page-files)
4. [Navigation Systems](#navigation-systems)

---

## Layout Files

### `src/layouts/Layout.astro`
```astro
---
import ScrollPageChecker from '../components/ScrollPageChecker.astro';

export interface Props {
	title: string;
	description?: string;
	enableScrollChecker?: boolean;
}

const { title, description = "iGEM 2025 Lychee Guardians - Extending Lychee Freshness with Synthetic Biology", enableScrollChecker = true } = Astro.props;
---

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content={description} />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>
		
		<!-- Fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Caveat:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
	</head>
	<body>
		<main>
			<slot />
		</main>
		
		{enableScrollChecker && <ScrollPageChecker />}
		
		<style>
			html {
				font-family: system-ui, sans-serif;
				background-color: #FFF8F0; /* cream-50 */
			}
			
			body {
				margin: 0;
				padding: 0;
				background-color: #FFF8F0; /* cream-50 */
			}
		</style>
	</body>
</html>
```

---

## Component Files

### `src/components/Navigation.astro`
```astro
---
// Navigation component
---

<nav class="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-cream-200 transition-all duration-300" id="main-nav">
  <div class="container mx-auto px-6">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-lychee-500 rounded-full flex items-center justify-center">
          <span class="text-white font-bold text-lg">L</span>
        </div>
        <div class="flex flex-col">
          <span class="font-display font-bold text-ink-900 text-lg leading-tight">Lychee Guardians</span>
          <span class="text-xs text-ink-600 leading-tight">iGEM 2025</span>
        </div>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center space-x-8">
        <a href="/" class="nav-link text-ink-700 hover:text-lychee-500 transition-colors font-medium">Home</a>
        <a href="/project/" class="nav-link text-ink-700 hover:text-lychee-500 transition-colors font-medium">Project</a>
        <a href="/wetlab/" class="nav-link text-ink-700 hover:text-lychee-500 transition-colors font-medium">Wet Lab</a>
        <a href="/drylab/" class="nav-link text-ink-700 hover:text-lychee-500 transition-colors font-medium">Dry Lab</a>
        <a href="/team/" class="nav-link text-ink-700 hover:text-lychee-500 transition-colors font-medium">Team</a>
        <a href="/contact/" class="nav-link text-ink-700 hover:text-lychee-500 transition-colors font-medium">Contact</a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="lg:hidden w-6 h-6 flex flex-col justify-center items-center" id="mobile-menu-btn">
        <span class="w-6 h-0.5 bg-ink-700 transition-all duration-300" id="burger-line-1"></span>
        <span class="w-6 h-0.5 bg-ink-700 transition-all duration-300 mt-1" id="burger-line-2"></span>
        <span class="w-6 h-0.5 bg-ink-700 transition-all duration-300 mt-1" id="burger-line-3"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="lg:hidden overflow-hidden transition-all duration-300 h-0" id="mobile-menu">
      <div class="py-4 space-y-4 border-t border-cream-200 mt-4">
        <a href="/" class="block text-ink-700 hover:text-lychee-500 transition-colors font-medium">Home</a>
        <a href="/project/" class="block text-ink-700 hover:text-lychee-500 transition-colors font-medium">Project</a>
        <a href="/wetlab/" class="block text-ink-700 hover:text-lychee-500 transition-colors font-medium">Wet Lab</a>
        <a href="/drylab/" class="block text-ink-700 hover:text-lychee-500 transition-colors font-medium">Dry Lab</a>
        <a href="/team/" class="block text-ink-700 hover:text-lychee-500 transition-colors font-medium">Team</a>
        <a href="/contact/" class="block text-ink-700 hover:text-lychee-500 transition-colors font-medium">Contact</a>
      </div>
    </div>
  </div>
</nav>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerLines = [
      document.getElementById('burger-line-1'),
      document.getElementById('burger-line-2'),
      document.getElementById('burger-line-3')
    ];
    
    let isMenuOpen = false;
    
    mobileMenuBtn?.addEventListener('click', function() {
      isMenuOpen = !isMenuOpen;
      
      if (isMenuOpen) {
        mobileMenu.style.height = mobileMenu.scrollHeight + 'px';
        
        // Animate burger to X
        burgerLines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        burgerLines[1].style.opacity = '0';
        burgerLines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        mobileMenu.style.height = '0px';
        
        // Reset burger
        burgerLines.forEach(line => {
          line.style.transform = '';
          line.style.opacity = '1';
        });
      }
    });
  });
</script>
```

### `src/components/Hero.astro`
```astro
---
export interface Props {
  title?: string;
  subtitle?: string;
  showMascot?: boolean;
}

const { 
  title = "Lychee Guardians", 
  subtitle = "Extending Lychee Freshness with Synthetic Biology",
  showMascot = true 
} = Astro.props;
---

<!-- Handwriting Animation Hero Section - Full Screen -->
<section class="hero-handwriting bg-cream-50 relative overflow-hidden" id="handwriting-hero" style="height: 100vh;">
  <div class="absolute inset-0 flex items-center justify-center" style="padding-top: 80px;">
    <div class="text-center relative max-w-6xl mx-auto px-4">
      <!-- Introduction text that appears first -->
      <div id="intro-text" class="opacity-0 mb-8">
        <span class="text-2xl md:text-3xl font-bold text-ink-900">We are</span>
      </div>
      
      <!-- Handwritten team name - much larger for full screen impact -->
      <div id="handwritten-name" class="relative">
        <div class="handwritten-text text-8xl md:text-[10rem] font-bold text-lychee-500 leading-tight" 
            style="font-family: 'Kalam', cursive;" 
            data-title={title}>
          <div class="text-center">
            <div id="handwritten-line1" class="mb-2"></div>
            <div id="handwritten-line2"></div>
          </div>
        </div>
      </div>
      
      <!-- Scroll down prompt - appears after handwriting is complete -->
      <div id="scroll-prompt" class="opacity-0 transition-all duration-1000 mt-8">
        <div class="text-center">
          <p class="text-xl md:text-2xl font-bold text-ink-900 mb-2">Scroll Down</p>
          <p class="text-sm md:text-base font-semibold text-ink-800 mb-3">to know how we</p>
          <p class="text-2xl md:text-3xl font-bold text-lychee-500 mb-6 drop-shadow-lg">make lychees fresh again</p>
          
          <!-- Double V-shaped Arrow indicators -->
          <div class="flex justify-center">
            <div class="scroll-indicator-container">
              <!-- First V-shaped arrow -->
              <div class="arrow-bounce">
                <svg class="w-12 h-12 text-lychee-500 mx-auto" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
              <!-- Second V-shaped arrow for double effect -->
              <div class="mt-2 arrow-bounce" style="animation-delay: 0.3s;">
                <svg class="w-10 h-10 text-lychee-400 mx-auto opacity-70" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Lychee character mascot - positioned at true page right edge -->
  {showMascot && (
    <div id="lychee-character" class="absolute opacity-0 transition-all duration-1000" 
         style="bottom: 10%; right: 1rem; transform: scale(1); z-index: 10;">
      <div class="relative">
        <div class="w-32 h-32 md:w-40 md:h-40 bg-lychee-100 rounded-full flex items-center justify-center">
          <span class="text-5xl md:text-6xl">🍒</span>
        </div>
        <!-- Speech bubble -->
        <div class="absolute -top-20 -left-32 bg-white rounded-lg px-4 py-3 shadow-lg border-2 border-lychee-200 opacity-0" id="mascot-speech">
          <p class="text-base text-ink-700 whitespace-nowrap font-medium">Ready to save lychees!</p>
          <div class="absolute bottom-0 left-12 transform translate-y-full">
            <div class="w-0 h-0 border-l-6 border-r-6 border-t-10 border-transparent border-t-white"></div>
          </div>
        </div>
      </div>
    </div>
  )}
  
  <!-- Background decoration optimized for full screen -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute -top-40 -right-32 w-96 h-96 bg-lychee-100 rounded-full opacity-10 animate-pulse"></div>
    <div class="absolute -bottom-40 -left-32 w-96 h-96 bg-leaf-100 rounded-full opacity-10 animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-lychee-50 rounded-full opacity-20 animate-bounce" style="animation-duration: 4s; animation-delay: 2s;"></div>
    <div class="absolute bottom-1/4 right-1/4 w-24 h-24 bg-leaf-50 rounded-full opacity-20 animate-bounce" style="animation-duration: 5s; animation-delay: 3s;"></div>
  </div>
</section>

<!-- Enhanced CSS Styles -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap');
  
  .handwritten-text {
    position: relative;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
  }
  
  .letter {
    display: inline-block;
    opacity: 0;
    transform: scale(0.3) rotate(-8deg) translateY(30px);
    animation: writeIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    transform-origin: bottom center;
  }
  
  @keyframes writeIn {
    0% {
      opacity: 0;
      transform: scale(0.3) rotate(-8deg) translateY(30px);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.15) rotate(2deg) translateY(-8px);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg) translateY(0);
    }
  }
  
  .letter.space {
    width: 0.5em;
  }
  
  .handwritten-text.complete {
    animation: subtleWobble 6s ease-in-out 1s infinite;
  }
  
  @keyframes subtleWobble {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    25% { transform: rotate(-0.1deg) translateY(0.5px); }
    50% { transform: rotate(0deg) translateY(0); }
    75% { transform: rotate(0.08deg) translateY(-0.5px); }
  }
  
  .fade-in {
    animation: fadeInUp 1s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .intro-text-animate {
    animation: introSlideUp 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  
  @keyframes introSlideUp {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }
    30% {
      opacity: 1;
      transform: translateY(0);
    }
    70% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(-1rem);
    }
  }
  
  /* SVG writing stroke animation */
  .writing-stroke {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: writeStroke 2s ease-in-out forwards;
  }
  
  @keyframes writeStroke {
    to {
      stroke-dashoffset: 0;
    }
  }
  
  /* Enhanced mascot animations */
  #lychee-character {
    animation: mascotBounce 2s ease-in-out 3s infinite;
  }
  
  @keyframes mascotBounce {
    0%, 100% { transform: scale(0.8) translateY(0); }
    50% { transform: scale(0.85) translateY(-5px); }
  }
  
  /* Scroll transition effects */
  .scroll-transition {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Enhanced scroll indicator animations */
  .scroll-indicator-container {
    animation: scrollPulse 2s ease-in-out infinite;
  }
  
  @keyframes scrollPulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.05); opacity: 1; }
  }
  
  
  .arrow-bounce {
    animation: arrowBounce 2s ease-in-out infinite;
  }
  
  @keyframes arrowBounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-8px); }
    60% { transform: translateY(-4px); }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Reset any existing state
    const heroSection = document.getElementById('handwriting-hero');
    if (!heroSection) return;
    
    const introText = document.getElementById('intro-text');
    const handwrittenContainer = document.getElementById('handwritten-name');
    const handwrittenText = document.querySelector('.handwritten-text');
    const lycheeCharacter = document.getElementById('lychee-character');
    const mascotSpeech = document.getElementById('mascot-speech');
    const scrollPrompt = document.getElementById('scroll-prompt');
    const titleElement = document.querySelector('[data-title]');
    const fullText = titleElement?.getAttribute('data-title') || 'Lychee Guardians';
    
    // Reset all elements to initial state
    if (introText) {
      introText.style.opacity = '0';
      introText.classList.remove('intro-text-animate');
    }
    if (handwrittenText) {
      handwrittenText.classList.remove('complete');
    }
    if (lycheeCharacter) {
      lycheeCharacter.style.opacity = '0';
    }
    if (mascotSpeech) {
      mascotSpeech.style.opacity = '0';
    }
    if (scrollPrompt) {
      scrollPrompt.style.opacity = '0';
    }
    
    // Clear any existing content in handwritten lines
    const line1 = document.getElementById('handwritten-line1');
    const line2 = document.getElementById('handwritten-line2');
    if (line1) line1.innerHTML = '';
    if (line2) line2.innerHTML = '';
    
    let animationComplete = false;
    let isWriting = false;
    let scrollInterrupted = false;
    let letterIndex = 0;
    let writeTimeout = null;
    let lycheeSpan, guardiansSpan;
    
    // Clear any existing timeouts
    if (window.heroWriteTimeout) {
      clearTimeout(window.heroWriteTimeout);
    }
    if (window.heroIntroTimeout) {
      clearTimeout(window.heroIntroTimeout);
    }
    if (window.heroStartTimeout) {
      clearTimeout(window.heroStartTimeout);
    }
    
    // Scroll interruption detection
    let hasScrolled = false;
    function handleScroll() {
      if (isWriting && !scrollInterrupted && !hasScrolled) {
        hasScrolled = true;
        scrollInterrupted = true;
        if (writeTimeout) {
          clearTimeout(writeTimeout);
        }
        completeAnimation();
      }
    }
    
    // Complete animation instantly with effects
    function completeAnimation() {
      // Complete remaining letters instantly with animation
      for (let i = letterIndex; i < fullText.length; i++) {
        const letter = fullText[i];
        if (letter !== ' ') {
          const letterSpan = document.createElement('span');
          letterSpan.textContent = letter;
          letterSpan.classList.add('letter');
          letterSpan.style.animationDelay = '0s';
          letterSpan.style.animationDuration = '0.3s';
          
          if (i < 6) {
            lycheeSpan.appendChild(letterSpan);
          } else if (i > 6) {
            guardiansSpan.appendChild(letterSpan);
          }
        }
      }
      
      isWriting = false;
      
      // Show all elements with faster timing
      setTimeout(() => {
        if (handwrittenText) {
          handwrittenText.classList.add('complete');
        }
        
        if (lycheeCharacter) {
          lycheeCharacter.style.opacity = '1';
          setTimeout(() => {
            if (mascotSpeech) {
              mascotSpeech.style.opacity = '1';
            }
          }, 200);
        }
        
        setTimeout(() => {
          if (scrollPrompt) {
            scrollPrompt.style.opacity = '1';
            scrollPrompt.style.transform = 'translateY(0)';
          }
          
          animationComplete = true;
          
          // Immediately trigger navigation and other elements
          const event = new CustomEvent('heroAnimationComplete');
          document.dispatchEvent(event);
        }, 400);
      }, 300);
    }
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Step 1: Show "We are" after a brief delay
    window.heroIntroTimeout = setTimeout(() => {
      if (introText) {
        introText.classList.add('intro-text-animate');
        introText.style.opacity = '1';
      }
    }, 1000);
    
    // Step 2: Start handwritten letter animation
    window.heroStartTimeout = setTimeout(() => {
      if (handwrittenContainer) {
        isWriting = true;
        letterIndex = 0;
        
        // Create line containers for two-line layout
        const line1 = document.getElementById('handwritten-line1');
        const line2 = document.getElementById('handwritten-line2');
        
        lycheeSpan = document.createElement('span');
        lycheeSpan.className = 'inline-block';
        
        guardiansSpan = document.createElement('span');
        guardiansSpan.className = 'inline-block';
        
        line1.appendChild(lycheeSpan);
        line2.appendChild(guardiansSpan);
        
        function writeNextLetter() {
          if (scrollInterrupted) return;
          
          if (letterIndex < fullText.length) {
            const letter = fullText[letterIndex];
            const letterSpan = document.createElement('span');
            
            if (letter === ' ') {
              // Skip space - will be handled by line break
            } else {
              letterSpan.textContent = letter;
              letterSpan.classList.add('letter');
              letterSpan.style.animationDelay = `${letterIndex * 0.2}s`;
              
              // Add to appropriate line
              if (letterIndex < 6) { // "Lychee" - first line
                lycheeSpan.appendChild(letterSpan);
              } else if (letterIndex > 6) { // "Guardians" - second line
                guardiansSpan.appendChild(letterSpan);
              }
            }
            
            letterIndex++;
            window.heroWriteTimeout = setTimeout(writeNextLetter, 200);
            writeTimeout = window.heroWriteTimeout;
          } else {
            // Normal completion
            isWriting = false;
            // Animation complete - show mascot and scroll prompt
            setTimeout(() => {
              if (handwrittenText) {
                handwrittenText.classList.add('complete');
              }
              
              // Show lychee character
              if (lycheeCharacter) {
                lycheeCharacter.style.opacity = '1';
                setTimeout(() => {
                  if (mascotSpeech) {
                    mascotSpeech.style.opacity = '1';
                  }
                }, 500);
              }
              
              // Show scroll prompt after mascot appears
              setTimeout(() => {
                if (scrollPrompt) {
                  scrollPrompt.style.opacity = '1';
                  scrollPrompt.style.transform = 'translateY(0)';
                }
                
                animationComplete = true;
                
                // Trigger navigation appearance
                setTimeout(() => {
                  const event = new CustomEvent('heroAnimationComplete');
                  document.dispatchEvent(event);
                }, 1000);
              }, 1500);
            }, 800);
          }
        }
        
        writeNextLetter();
      }
    }, 2500);
  });
</script>
```

### `src/components/SideScrollNavigation.astro`
```astro
---
// Side scroll navigation component
---

<div id="scroll-nav-container" class="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
  <!-- Progress bar -->
  <div class="w-2 bg-gray-300 rounded-full relative transition-all duration-300 hover:w-3 hover:shadow-lg progress-track" id="progress-track">
    <div class="w-full bg-lychee-500 rounded-full transition-all duration-300 hover:shadow-glow" id="progress-bar" style="height: 0%;"></div>
  </div>
  
  <!-- Section navigation dots -->
  <div class="absolute -left-3 top-0 h-full flex flex-col justify-start py-4 space-y-8" id="nav-dots">
    <div class="nav-dot" data-section="hero" data-label="Home">
      <div class="dot"></div>
      <div class="tooltip">🏠 Home</div>
    </div>
    <div class="nav-dot" data-section="about-section" data-label="About Lychee">
      <div class="dot"></div>
      <div class="tooltip">🍒 About Lychee</div>
    </div>
    <div class="nav-dot" data-section="lychee-properties" data-label="Lychee Properties">
      <div class="dot"></div>
      <div class="tooltip">⚡ Properties</div>
    </div>
    <div class="nav-dot" data-section="problem-section" data-label="Challenge">
      <div class="dot"></div>
      <div class="tooltip">🎯 Challenge</div>
    </div>
    <div class="nav-dot" data-section="deterioration-causes" data-label="Deterioration">
      <div class="dot"></div>
      <div class="tooltip">🔬 Deterioration</div>
    </div>
    <div class="nav-dot" data-section="science-section" data-label="Our Science">
      <div class="dot"></div>
      <div class="tooltip">🧬 Our Science</div>
    </div>
    <div class="nav-dot" data-section="wet-lab-intro" data-label="Wet Lab">
      <div class="dot"></div>
      <div class="tooltip">🧪 Wet Lab</div>
    </div>
    <div class="nav-dot" data-section="dry-lab-intro" data-label="Dry Lab">
      <div class="dot"></div>
      <div class="tooltip">💻 Dry Lab</div>
    </div>
    <div class="nav-dot" data-section="action-section" data-label="Get Started">
      <div class="dot"></div>
      <div class="tooltip">🚀 Get Started</div>
    </div>
  </div>
  
  <!-- Debug info -->
  <div id="debug-info" class="fixed bottom-4 left-6 bg-black bg-opacity-75 text-white text-xs p-2 rounded opacity-0 pointer-events-none transition-opacity duration-200">
    <div>Current Section: <span id="current-section-name">None</span></div>
    <div>Scroll Progress: <span id="scroll-percentage">0%</span></div>
    <div>Sections Found: <span id="sections-count">0</span></div>
  </div>
</div>

<style>
  #scroll-nav-container {
    height: 400px;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(-50%);
  }
  
  #scroll-nav-container.visible {
    opacity: 1;
  }
  
  /* Hide during handwriting animation */
  #scroll-nav-container.hero-animating {
    opacity: 0;
    pointer-events: none;
  }
  
  #scroll-nav-container:hover {
    transform: translateY(-50%) scale(1.05);
  }
  
  #scroll-nav-container:hover #debug-info {
    opacity: 1;
  }
  
  #progress-track {
    height: 100%;
  }
  
  .progress-track:hover {
    transform: translateX(-2px);
    background: linear-gradient(to bottom, #d1d5db, #9ca3af);
  }
  
  .hover\:shadow-glow:hover {
    box-shadow: 0 0 20px rgba(230, 57, 70, 0.6), 0 0 40px rgba(230, 57, 70, 0.4);
  }
  
  /* Enhanced dot animations */
  #scroll-nav-container:hover .nav-dot .dot {
    transform: scale(1.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  #scroll-nav-container:hover .nav-dot.active .dot {
    transform: scale(1.3);
    box-shadow: 0 0 0 5px rgba(230, 57, 70, 0.3);
  }
  
  .nav-dot {
    position: relative;
    cursor: pointer;
    padding: 8px;
    margin: -8px;
  }
  
  .dot {
    width: 12px;
    height: 12px;
    border: 2px solid #d1d5db;
    border-radius: 50%;
    background: white;
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 2;
  }
  
  .nav-dot.active .dot {
    background: #e63946;
    border-color: #e63946;
    transform: scale(1.2);
    box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.2);
  }
  
  .nav-dot:hover .dot {
    transform: scale(1.2);
    border-color: #e63946;
    box-shadow: 0 0 0 4px rgba(230, 57, 70, 0.15);
  }
  
  .tooltip {
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }
  
  .tooltip::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid transparent;
    border-right-color: rgba(0, 0, 0, 0.8);
  }
  
  .nav-dot:hover .tooltip {
    opacity: 1;
  }
  
  @media (max-width: 1024px) {
    #scroll-nav-container {
      display: none;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('scroll-nav-container');
    const progressBar = document.getElementById('progress-bar');
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = Array.from(navDots).map(dot => {
      const sectionId = dot.getAttribute('data-section');
      return document.getElementById(sectionId);
    }).filter(Boolean);
    
    let currentSection = 0;
    let isScrolling = false;
    
    function updateProgress() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (progressBar) {
        progressBar.style.height = `${Math.min(scrollPercent, 100)}%`;
      }
      
      // Update debug info
      const scrollPercentageSpan = document.getElementById('scroll-percentage');
      if (scrollPercentageSpan) {
        scrollPercentageSpan.textContent = `${Math.round(scrollPercent)}%`;
      }
      
      // Show/hide navigation container
      if (navContainer) {
        if (scrollTop > 100) {
          navContainer.classList.add('visible');
        } else {
          navContainer.classList.remove('visible');
        }
      }
    }
    
    function updateActiveSection() {
      const scrollTop = window.pageYOffset + 100;
      
      let activeIndex = 0;
      let activeSectionName = 'None';
      
      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollTop) {
          activeIndex = index;
          activeSectionName = navDots[index]?.getAttribute('data-label') || section.id || 'Unknown';
        }
      });
      
      if (activeIndex !== currentSection) {
        navDots[currentSection]?.classList.remove('active');
        navDots[activeIndex]?.classList.add('active');
        currentSection = activeIndex;
        
        // Update debug info
        const currentSectionSpan = document.getElementById('current-section-name');
        if (currentSectionSpan) {
          currentSectionSpan.textContent = activeSectionName;
        }
      }
    }
    
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        isScrolling = true;
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    }
    
    // Click handlers for navigation dots
    navDots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = dot.getAttribute('data-section');
        if (sectionId) {
          scrollToSection(sectionId);
        }
      });
    });
    
    // Throttled scroll handler
    let ticking = false;
    function handleScroll() {
      if (!ticking && !isScrolling) {
        requestAnimationFrame(() => {
          updateProgress();
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial setup
    updateProgress();
    updateActiveSection();
    
    // Update sections count in debug info
    const sectionsCountSpan = document.getElementById('sections-count');
    if (sectionsCountSpan) {
      sectionsCountSpan.textContent = sections.length.toString();
    }
    
    // Hide during hero animation, show after completion
    if (navContainer) {
      navContainer.classList.add('hero-animating');
    }
    
    document.addEventListener('heroAnimationComplete', function() {
      if (navContainer) {
        navContainer.classList.remove('hero-animating');
      }
    });
  });
</script>
```

---

## Page Files

### `src/pages/index.astro` (Main Page)
```astro
---
import Layout from '../layouts/Layout.astro';
import Navigation from '../components/Navigation.astro';
import Hero from '../components/Hero.astro';
import SideScrollNavigation from '../components/SideScrollNavigation.astro';
import '../styles/global.css';
---

<Layout title="Lychee Guardians - iGEM 2025">
	<Navigation />
	<SideScrollNavigation />
	<Hero />
	
	<!-- Spacer to create scroll space for handwriting animation -->
	<div class="scroll-spacer" style="height: 120vh;"></div>
	
	<!-- What is a Lychee Section -->
	<section id="about-section" class="py-24 bg-white section-about">
		<div class="container">
			<div class="text-center mb-12">
				<h2 class="font-display text-h1 text-ink-900 mb-4">What is a Lychee?</h2>
				<p class="text-xl text-ink-700 max-w-3xl mx-auto">
					Discover the fascinating fruit that inspired our mission
				</p>
			</div>
			
			<div class="grid md:grid-cols-3 gap-8">
				<div class="card text-center">
					<div class="w-16 h-16 bg-lychee-100 rounded-full flex items-center justify-center mx-auto mb-4">
						🍒
					</div>
					<h3 class="font-display text-xl font-semibold mb-2">Cultural Treasure</h3>
					<p class="text-ink-700">
						Lychees are prized in Asian cultures for their sweet, floral taste and symbolic meaning of love and romance.
					</p>
				</div>
				
				<div class="card text-center">
					<div class="w-16 h-16 bg-leaf-100 rounded-full flex items-center justify-center mx-auto mb-4">
						🌱
					</div>
					<h3 class="font-display text-xl font-semibold mb-2">Nutritional Powerhouse</h3>
					<p class="text-ink-700">
						Rich in vitamin C, copper, and potassium, lychees support immune function and heart health.
					</p>
				</div>
				
				<div class="card text-center">
					<div class="w-16 h-16 bg-gold-400 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
						⚡
					</div>
					<h3 class="font-display text-xl font-semibold mb-2">Fragile Beauty</h3>
					<p class="text-ink-700">
						Unfortunately, lychees spoil quickly, losing their vibrant taste and texture within days of harvest.
					</p>
				</div>
			</div>
		</div>
		
		<!-- Lychee Properties Subsection -->
		<div id="lychee-properties" class="py-20 bg-lychee-50 mt-16">
			<div class="container">
				<h3 class="font-display text-xl font-semibold mb-6 text-center text-lychee-600">Key Properties</h3>
				<div class="grid md:grid-cols-3 gap-6">
					<div class="text-center p-4">
						<div class="text-3xl mb-2">🌺</div>
						<h4 class="font-semibold">Delicate Structure</h4>
						<p class="text-sm text-ink-600">Thin translucent flesh</p>
					</div>
					<div class="text-center p-4">
						<div class="text-3xl mb-2">💧</div>
						<h4 class="font-semibold">High Water Content</h4>
						<p class="text-sm text-ink-600">80-85% water content</p>
					</div>
					<div class="text-center p-4">
						<div class="text-3xl mb-2">🍯</div>
						<h4 class="font-semibold">Natural Sugars</h4>
						<p class="text-sm text-ink-600">Sweet flavor profile</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- The Problem Section -->
	<section id="problem-section" class="py-24 bg-cream-50 section-problem">
		<div class="container">
			<div class="text-center mb-12">
				<h2 class="font-display text-h1 text-ink-900 mb-4">The Challenge</h2>
				<p class="text-xl text-ink-700 max-w-3xl mx-auto">
					Why lychee freshness matters and the problems we're solving
				</p>
			</div>
			
			<div class="max-w-4xl mx-auto">
				<div class="card card--accent">
					<div class="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h3 class="font-display text-2xl font-semibold mb-4 text-lychee-500">
								Rapid Deterioration
							</h3>
							<p class="text-ink-700 leading-relaxed mb-4">
								Fresh lychees lose their quality within 2-3 days due to enzymatic browning, 
								moisture loss, and microbial growth. This severely limits distribution and 
								increases food waste.
							</p>
							<p class="text-ink-700 leading-relaxed">
								Our synthetic biology approach aims to extend freshness by targeting the 
								root causes of deterioration at the molecular level.
							</p>
						</div>
						<div class="text-center">
							<div class="w-32 h-32 bg-gradient-to-br from-lychee-100 to-lychee-200 rounded-full flex items-center justify-center mx-auto">
								<span class="text-4xl">🔬</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Deterioration Causes Subsection -->
		<div id="deterioration-causes" class="py-16 bg-cream-100">
			<div class="container">
				<h3 class="font-display text-xl font-semibold mb-6 text-center text-ink-800">Main Causes of Deterioration</h3>
				<div class="grid md:grid-cols-3 gap-6">
					<div class="card text-center">
						<div class="text-3xl mb-3">🦠</div>
						<h4 class="font-semibold mb-2">Microbial Growth</h4>
						<p class="text-sm text-ink-600">Bacterial and fungal contamination</p>
					</div>
					<div class="card text-center">
						<div class="text-3xl mb-3">🍂</div>
						<h4 class="font-semibold mb-2">Enzymatic Browning</h4>
						<p class="text-sm text-ink-600">Oxidation of phenolic compounds</p>
					</div>
					<div class="card text-center">
						<div class="text-3xl mb-3">💨</div>
						<h4 class="font-semibold mb-2">Moisture Loss</h4>
						<p class="text-sm text-ink-600">Dehydration and texture changes</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Our Science Section -->
	<section id="science-section" class="py-24 bg-white section-science">
		<div class="container">
			<div class="text-center mb-12">
				<h2 class="font-display text-h1 text-ink-900 mb-4">Our Scientific Approach</h2>
				<p class="text-xl text-ink-700 max-w-3xl mx-auto">
					Cutting-edge synthetic biology solutions for lychee preservation
				</p>
			</div>
			
			<div class="grid md:grid-cols-2 gap-8">
				<div class="card hover:shadow-pop transition-shadow duration-300">
					<h3 class="font-display text-xl font-semibold mb-3 text-leaf-500">Wet Lab Research</h3>
					<p class="text-ink-700 mb-4">
						Engineering microorganisms to produce natural preservatives and antioxidants 
						that can extend lychee freshness without compromising taste or safety.
					</p>
					<a href="/wetlab/" class="text-leaf-500 font-semibold hover:text-leaf-600 transition-colors">
						Learn more about our lab work →
					</a>
				</div>
				
				<div class="card hover:shadow-pop transition-shadow duration-300">
					<h3 class="font-display text-xl font-semibold mb-3 text-lychee-500">Dry Lab Modeling</h3>
					<p class="text-ink-700 mb-4">
						Computational models to predict optimal treatment conditions, simulate molecular 
						interactions, and design the most effective preservation strategies.
					</p>
					<a href="/drylab/" class="text-lychee-500 font-semibold hover:text-lychee-600 transition-colors">
						Explore our models →
					</a>
				</div>
				
				<!-- Wet Lab Introduction -->
				<div id="wet-lab-intro" class="py-12 bg-leaf-50">
					<div class="container">
						<h3 class="font-display text-xl font-semibold mb-4 text-center text-leaf-600">🧪 Wet Lab Research Preview</h3>
						<div class="text-center">
							<p class="text-ink-700 mb-4">Engineering microorganisms to produce natural preservatives</p>
							<a href="/wetlab/" class="btn btn-outline text-leaf-600 border-leaf-600 hover:bg-leaf-600 hover:text-white">
								Explore Wet Lab →
							</a>
						</div>
					</div>
				</div>
				
				<!-- Dry Lab Introduction -->
				<div id="dry-lab-intro" class="py-12 bg-lychee-50">
					<div class="container">
						<h3 class="font-display text-xl font-semibold mb-4 text-center text-lychee-600">💻 Dry Lab Modeling Preview</h3>
						<div class="text-center">
							<p class="text-ink-700 mb-4">Computational models for optimal treatment conditions</p>
							<a href="/drylab/" class="btn btn-outline text-lychee-600 border-lychee-600 hover:bg-lychee-600 hover:text-white">
								Explore Dry Lab →
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Call to Action -->
	<section id="action-section" class="py-24 bg-gradient-to-r from-lychee-500 to-leaf-500 text-white section-action">
		<div class="container text-center">
			<h2 class="font-display text-h1 mb-4">Start the Quest</h2>
			<p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
				Join us on our journey to revolutionize food preservation and reduce waste
			</p>
			
			<div class="flex flex-wrap justify-center gap-4">
				<a href="/project/" class="btn bg-white text-lychee-500 hover:bg-gray-50 font-semibold">
					The Problem
				</a>
				<a href="/wetlab/" class="btn bg-white text-leaf-500 hover:bg-gray-50 font-semibold">
					The Science  
				</a>
				<a href="/team/" class="btn bg-white text-ink-900 hover:bg-gray-50 font-semibold">
					The People
				</a>
			</div>
		</div>
	</section>
	
</Layout>
```

---

## Navigation Systems

### Wet Lab Navigation System

The wet lab page uses a **DNA-inspired navigation system** with the following features:

```javascript
// Key Components:
// - Colorful dots representing each section
// - Hover effects with scale and glow
// - Smooth scrolling navigation
// - Active section highlighting

const sectionData = [
  { id: 'wet-lab-intro', label: '🧬 Introduction', color: '#4CAF50' },
  { id: 'wet-lab-method', label: '🔬 Methodology', color: '#2196F3' },
  { id: 'wet-lab-protocols', label: '📋 Protocols', color: '#FF9800' },
  { id: 'wet-lab-results', label: '📊 Results', color: '#9C27B0' },
  { id: 'wet-lab-safety', label: '🛡️ Safety', color: '#F44336' },
  { id: 'wet-lab-contributions', label: '💡 Contributions', color: '#607D8B' },
  { id: 'wet-lab-discussion', label: '💬 Discussion', color: '#795548' }
];
```

### Dry Lab Pac-Man Navigation System

The dry lab page uses a **Pac-Man themed navigation system** with the following features:

```javascript
// Key Components:
// - Animated Pac-Man character that moves with scroll
// - Dots that get "eaten" as user scrolls
// - Secondary contextual navigation
// - Color-coded section identification

const sections = [
  { id: 'hero', name: '🏠 Hero', color: '#00a3ff' },
  { id: 'overview', name: '📋 Overview', color: '#ffd700' },
  { id: 'litchidb', name: '🗄️ LitchiDB', color: '#7928ca' },
  { id: 'bactagenome', name: '🧬 Bactagenome', color: '#4CAF50' },
  { id: 'drone', name: '🚁 Drone System', color: '#FF9800' },
  { id: 'synbiomcp', name: '⚗️ SynbioMCP', color: '#E91E63' },
  { id: 'team', name: '👥 Team', color: '#9C27B0' }
];
```

---

## Navigation Features Summary

### Main Site Navigation (SideScrollNavigation)
- **Progress Bar**: Shows scroll progress through page
- **Dot Navigation**: Click to jump to any section
- **Hover Tooltips**: Section names with emojis
- **Active Indicators**: Current section highlighted
- **Debug Mode**: Development information on hover

### Wet Lab Navigation
- **7 Color-coded Dots**: Each section has unique color
- **Scale Hover Effects**: Dots grow to 1.4x on approach
- **Glow Effects**: Colored shadows on hover
- **Smooth Transitions**: All animations use CSS easing
- **Console Debugging**: Logs interactions for development

### Dry Lab Navigation
- **Pac-Man Character**: Golden circle that moves with scroll
- **Eating Animation**: Dots fade as Pac-Man passes
- **Secondary Navigation**: Contextual sub-items
- **Color Themes**: Each section has distinct color
- **Interactive Tooltips**: Hover to see section details

---

## Technical Notes

### JavaScript Patterns Used
1. **Event-Driven Architecture**: Custom events for component communication
2. **Throttled Scroll Handlers**: Performance optimized scroll detection
3. **DOM Manipulation**: Dynamic element creation and styling
4. **State Management**: Track active sections and navigation states

### CSS Techniques Used
1. **CSS Custom Properties**: For theme colors and consistency
2. **Transform Animations**: Smooth scaling and movement effects
3. **Backdrop Filters**: Glass morphism effects
4. **Gradient Backgrounds**: Visual depth and modern styling

### Accessibility Features
1. **Keyboard Navigation**: All interactive elements are focusable
2. **Screen Reader Support**: Semantic HTML and ARIA labels
3. **High Contrast**: Sufficient color contrast for readability
4. **Responsive Design**: Mobile-friendly navigation patterns

---

*Generated: 2025-01-21*
*iGEM Wiki Project - Lychee Guardians Team*