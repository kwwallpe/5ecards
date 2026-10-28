<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    isHeader?: boolean;
    noBorder?: boolean;
    children: Snippet;
  }

  let { isHeader = false, noBorder = false, children }: Props = $props();
  let fontSize = $derived(isHeader ? 'text-[0.75em]' : 'text-[0.9em]');
</script>

<div
  class={[
    fontSize,
    'grid-cols-[0.65in_repeat(3,3fr)_2fr]',
    'text-right',
    'align-middle',
    'mx-auto',
    'my-0',
    'border-dotted border-card-border.',
    { 'border-b': !noBorder },
    { 'h-6': isHeader },
    { 'm-h-6': isHeader },
  ]}
>
  {@render children()}
</div>
