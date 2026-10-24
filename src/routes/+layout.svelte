<script lang="ts">
  import './layout.css';
  import { page } from '$app/state';
  import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from 'flowbite-svelte';
  import type { Snippet } from 'svelte';
  import { ThemeProvider } from 'flowbite-svelte';
  import favicon from '$lib/assets/d20.svg';
  import Bordered from '$lib/modules/ui/bordered.svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
  let activeUrl = $derived(page.url.pathname);

  const theme = {
    button: { base: 'font-bold gap-1' },
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
    <Navbar class="p-0 sm:px-0">
      <NavHamburger class="p-0" />
      <NavUl {activeUrl} classes={{ ul: 'p-0' }}>
        <NavLi class="py-1 md:py-1" href="/">Home</NavLi>
        <NavLi class="py-1 md:py-1" href="/help/">Help</NavLi>
      </NavUl>
    </Navbar>
  </Bordered>

  {@render children()}

  <Bordered>
    <Footer class="p-0 md:p-0 shadow-none rounded-none bg-transparent dark:bg-transparent">
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
    body {
      margin: 0;
      padding: 0.25in;
      border: 0;
      background-image: linear-gradient(to bottom right, hotpink, rebeccapurple);
      font-family: sans-serif;
      min-height: calc(100vh - 0.5in);
    }
  }
</style>
