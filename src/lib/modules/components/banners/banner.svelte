<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    isHeader?: boolean;
    columns?: string;
    textAlign?: 'left' | 'center' | 'right';
    children: Snippet;
  }

  let { isHeader = true, columns = '1fr', textAlign = 'left', children }: Props = $props();
  let borderClass = $derived(isHeader ? 'border-b' : 'border-t');
  let alignClasses = { left: 'text-left', center: 'text-center', right: 'text-right' };
</script>

<div
  class="font-bold gap-1 h-[0.3in] border-card-border {borderClass} {alignClasses[textAlign]}"
  style:grid-template-columns={columns}
>
  {@render children()}
</div>
