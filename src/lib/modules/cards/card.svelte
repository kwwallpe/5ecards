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
  .card {
    aspect-ratio: var(--c-width) / var(--c-height);
    width: var(--c-width);
    min-width: var(--c-width);
    height: var(--c-height);
    max-height: var(--c-height);
    outline: 1px solid var(--color-card-border);
    margin: auto;
    display: grid;
    background-color: var(--color-card);
    color: var(--color-card-fg);
  }

  .content {
    margin: calc(1in / 8);
    width: calc(5in - (1in / 4));
    height: calc(3in - (1in / 4));
  }
</style>
