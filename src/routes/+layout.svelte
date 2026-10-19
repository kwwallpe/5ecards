<script lang="ts">
  import type { Snippet } from "svelte";
  import favicon from "$lib/assets/d20.svg";
  import Bordered from "$lib/modules/ui/bordered.svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
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

<Bordered>
  <nav>
    <a href="/">home</a>
    <a href="/help">help</a>
  </nav>
</Bordered>

{@render children()}

<Bordered>
  <footer>
    <span class="lefty">
      <a href="https://lazarusrat.carrd.co">Lazarus Rat</a> is the one what done this.
    </span>
    <span class="righty">
      <a href="https://ko-fi.com/lazarusrat"
        ><img id="help-folio-image" src="/assets/kofi_symbol.webp" alt="ko-fi.com icon, a mug with a heart inside" />
        Tip the rat</a
      > if you dig this.
    </span>
  </footer>
</Bordered>

<style>
  :global {
    html {
      margin: 0;
      padding: 0;
      border: 0;
    }
    body {
      margin: 0;
      padding: 0.25in;
      border: 0;
      background-image: linear-gradient(to bottom right, hotpink, rebeccapurple);
      font-family: sans-serif;
      min-height: calc(100vh - 0.5in);
    }

    a {
      text-decoration: none;
    }

    a:link,
    a:visited {
      color: darkorchid;
    }
    @media (hover: hover) {
      a:hover {
        color: darkviolet;
        background-image: linear-gradient(ivory, mistyrose);
      }
    }
    a:active {
      color: darkviolet;
      background-image: linear-gradient(mistyrose, ivory);
    }
  }

  nav {
    word-spacing: -1em;
  }

  nav a {
    padding: 0 0.5em;
    border-right: 3px solid lightpink;
  }

  nav a:first-of-type {
    padding-left: 0;
  }

  nav a:last-of-type {
    border: none;
    padding-right: 0;
  }

  footer {
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
  }

  .righty {
    display: inline-block;
    vertical-align: middle;
  }
  .righty img {
    display: inline-block;
    vertical-align: middle;
    height: 25px;
    aspect-ratio: 321 / 258;
    margin: auto 5px;
  }
</style>
