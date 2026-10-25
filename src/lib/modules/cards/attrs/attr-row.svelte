<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    isHeader?: boolean;
    noBorder?: boolean;
    children: Snippet;
  }

  let { isHeader = false, noBorder = false, children }: Props = $props();
  let rowClass = $derived(isHeader ? 'attr-header' : 'attr-row');
</script>

<div class={[rowClass, { borderless: noBorder }]}>
  {@render children()}
</div>

<style>
  .attr-row,
  .attr-header {
    grid-template-columns: 0.65in repeat(3, 3fr) 2fr;
    text-align: right;
    vertical-align: middle;
    font-size: 0.9em;
    margin: auto 0;
    border-bottom: 1px dotted var(--color-card-border);
  }
  .attr-header {
    font-size: 0.75em;
    height: 0.25in;
    max-height: 0.25in;
  }

  .borderless {
    border: 0;
  }
</style>
