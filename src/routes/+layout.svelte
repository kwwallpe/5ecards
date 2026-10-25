<script lang="ts">
  import './layout.css';
  import { Navbar, NavLi, NavUl, NavHamburger, DarkMode, Footer, ThemeProvider } from 'flowbite-svelte';
  import type { Snippet } from 'svelte';

  import { page } from '$app/state';
  import favicon from '$lib/assets/d20.svg';
  import Bordered from '$lib/modules/ui/bordered.svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
  let activeUrl = $derived(page.url.pathname);

  const theme = {
    button: { base: 'font-bold gap-1' },
    checkbox: {
      base: `rounded-none 
             w-[var(--size,calc(1in/8))]
             h-[var(--size,calc(1in/8))]
             outline-purple-500
             m-auto focus:ring-0
             bg-none checked:bg-none
             bg-transparent dark:bg-transparent
             border-gray-400 dark:border-gray-500
             text-black dark:text-white
             print:[print-color-adjust:exact]
             `,
    },
    input: {
      base: 'h-full',
      input: `box-border block w-full m-0 px-[2px] py-0
              border-0 rounded-none
              bg-transparent dark:bg-transparent text-gray-800 dark:text-gray-300
              focus:ring-0
              hover:not-disabled:bg-gray-300 hover:dark:not-disabled:bg-gray-700
              focus-visible:bg-gray-300 focus-visible:dark:bg-gray-700
              motion-reduce:transition-none
              print:bg-transparent
              print:outline-none
              print:[print-color-adjust:exact]
              print:text-gray-800
              `,
    },
    label: `font-bold text-lg m-0 p-0`,
    navbar: `p-0 sm:p-0`,
    navbarUl: {
      active: `text-gray-400 dark:text-gray-400
               hover:text-black dark:hover:text-white
               md:text-gray-500 md:dark:text-gray-400
               md:hover:text-black dark:md:hover:text-white
               font-bold
      `,
      nonActive: `text-fg-brand dark:text-fg-brand
                  hover:text-fg-brand-strong dark:hover:text-fg-brand-strong
                  md:text-fg-brand md:dark:text-fg-brand
                  md:hover:text-fg-brand-strong dark:md:hover:text-fg-brand-strong
                  `,
    },
    navbarLi: `py-0 md:py-0 text-lg`,
  };
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="stylesheet" href="/fonts/fonts.css" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Indie+Flower&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Playpen+Sans:wght@100..800&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<ThemeProvider {theme}>
  <Bordered>
    <Navbar fluid>
      <NavUl {activeUrl} classes={{ ul: 'p-0 sm:p-0' }}>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/help/">Help</NavLi>
      </NavUl>
      <NavHamburger />
      <DarkMode class="border py-1 sm:py-1" />
    </Navbar>
  </Bordered>

  {@render children()}

  <Bordered>
    <Footer
      class="flex items-center justify-between
      p-0 md:p-0 shadow-none rounded-none bg-transparent dark:bg-transparent"
    >
      <span class="text-sm">
        <a href="https://lazarusrat.carrd.co">Lazarus Rat</a> is the one what done this.
      </span>
      <span class="text-sm">
        <a href="https://ko-fi.com/lazarusrat">
          <img
            id="help-folio-image"
            src="/assets/kofi_symbol.webp"
            alt="ko-fi.com icon, a mug with a heart inside"
            class="inline-block align-middle me-1 h-6.25 aspect-321/258"
          />
          Tip the rat</a
        > <span>if you dig this.</span>
      </span>
    </Footer>
  </Bordered>
</ThemeProvider>

<style>
  :global {
    html,
    body {
      min-width: min-content;
      min-height: 100vh;
    }

    body {
      padding: 0.25in;
      background-image: linear-gradient(to bottom right, hotpink, purple);
    }

    .dark body {
      background-image: linear-gradient(to bottom right, var(--color-pink-800), purple);
    }

    @media print {
      body,
      html {
        background: white;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }
</style>
