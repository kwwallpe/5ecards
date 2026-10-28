<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    label: string;
    noBorder?: boolean;
    children: Snippet;
  }

  let { label, noBorder = false, children }: Props = $props();
</script>

<div class={['grid', 'gap-1', 'ac-etc-row', 'grid-cols-[1.5in_1fr]', 'grad-border', { 'border-b': !noBorder }]}>
  <div class="text-right p-px align-middle">{label}</div>
  <div class="align-middle">
    {@render children()}
  </div>
</div>
