<script lang="ts">
  import './layout.css';
  import { Navbar, NavLi, NavUl, NavHamburger, DarkMode, Footer, ThemeProvider, Toggle } from 'flowbite-svelte';
  import { setContext, type Snippet } from 'svelte';

  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import favicon from '$lib/assets/d20.svg';
  import { ControlVisibility, controlVisibilityContextKey } from '$lib/shared/controlVisibility.svelte';

  import { THEME as theme } from './theme';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
  let activeUrl = $derived(page.url.pathname);

  let showCtrlToggle = $derived(page.route.id === '/');
  let controlVisibility = new ControlVisibility();
  setContext(controlVisibilityContextKey, controlVisibility);
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
  <Navbar fluid>
    <NavHamburger />
    <NavUl {activeUrl} classes={{ ul: 'p-0 sm:p-0' }}>
      <NavLi href={resolve('/')}>Home</NavLi>
      <NavLi href={resolve('/help/')}>Help</NavLi>
      <NavLi href={resolve('/changes/')}>Changes</NavLi>
    </NavUl>
    {#if showCtrlToggle}
      <Toggle id="control-visibility-toggle" bind:checked={controlVisibility.setting}>
        controls shown
        {#snippet offLabel()}
          controls hidden
        {/snippet}
      </Toggle>
    {/if}
    <DarkMode class="border py-1 sm:py-1" />
  </Navbar>

  <main class="flex-1">
    {@render children()}
  </main>

  <Footer class="flex items-center justify-between rounded-none">
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
</ThemeProvider>

<style>
  :global {
    body {
      display: flex;
      flex-direction: column;
      min-width: min-content;
      min-height: 100dvh;
      background-image: linear-gradient(to bottom right, hotpink, purple);
    }

    .dark body {
      background-image: linear-gradient(to bottom right, indigo, var(--color-pink-600));
    }

    @media print {
      body,
      html,
      .dark body,
      .dark html {
        display: block;
        background: white;
        background-image: none;
        padding: 0;
        margin: 0;
        border: 0;
      }

      nav,
      footer {
        display: none;
      }
    }
  }
</style>
