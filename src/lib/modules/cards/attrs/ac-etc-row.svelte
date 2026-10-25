<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    label: string;
    noBorder?: boolean;
    children: Snippet;
  }

  let { label, noBorder = false, children }: Props = $props();
  let borderless = $derived(noBorder ? 'no-border' : '');
</script>

<div class={['ac-etc-row', { borderless }]}>
  <div>{label}</div>
  <div>
    {@render children()}
  </div>
</div>

<style>
  .ac-etc-row {
    grid-template-columns: 1.5in 1fr;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-image: linear-gradient(to right, transparent 0%, transparent 50%, var(--color-card-border) 100%) 1;
    gap: 5px;
  }

  .borderless {
    border: 0;
  }

  .ac-etc-row div {
    vertical-align: middle;
  }

  .ac-etc-row div:nth-child(odd) {
    text-align: right;
    padding-right: 1px;
  }
</style>
