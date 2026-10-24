<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';

  import { FontAccessor, FontRole, fontSettingsContextKey } from '$lib/shared/fontState.svelte';

  interface Props {
    id: string;
    children: Snippet;
    rows?: string | null;
  }

  let { id, rows = '1fr 12fr', children }: Props = $props();

  const fontAccessor: FontAccessor = $derived(new FontAccessor(getContext(fontSettingsContextKey), FontRole.label));
</script>

<div
  {id}
  class="card"
  style="
    font-size: '10px';
    font-family: {fontAccessor.font};
    font-size-adjust: {fontAccessor.adjust};
    word-spacing: {fontAccessor.wordSpacing};
  "
>
  <div class="content" style="grid-template-rows: {rows}">
    {@render children()}
  </div>
</div>

<style>
  :global(.card div) {
    display: grid;
    overflow: hidden;
    white-space: nowrap;
    background: white;
    color: black;
  }
  .card {
    aspect-ratio: var(--c-width) / var(--c-height);
    width: var(--c-width);
    min-width: var(--c-width);
    height: var(--c-height);
    max-height: var(--c-height);
    outline: 1px solid lightgray;
    margin: auto;
    display: grid;
    background-color: white;
  }

  .content {
    margin: calc(1in / 8);
    width: calc(5in - (1in / 4));
    height: calc(3in - (1in / 4));
  }

  @media print {
    .card:nth-of-type(1) {
      transform: translate(-2px, 0);
    }

    .card:nth-of-type(2) {
      transform: translate(calc(-2px - var(--c-width) - 15px), calc(var(--c-height) + 1px));
    }

    .card:nth-of-type(3) {
      transform: translate(-2px, calc(var(--c-height) + 2px - 15px));
    }

    .card:nth-of-type(4) {
      transform: translate(calc(-1px - 1in - 15px), calc(2px - 2in - 15px)) rotate(90deg);
    }

    .card:nth-of-type(5) {
      transform: translate(calc(4in - 3px), calc(6px - 0.5in + 15px)) rotate(90deg);
    }
  }
</style>
