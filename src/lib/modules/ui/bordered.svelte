<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    print?: boolean;
    hidden?: boolean;
    children: Snippet;
  }

  let { print = false, hidden = false, children }: Props = $props();
</script>

<div
  class={[
    'min-w-[5.75in]',
    'p-8',
    'print:m-0',
    'print:p-0',
    'print:bg-white',
    'mx-auto',
    'my-0',
    'text-body',
    'bg-linear-to-r',
    'from-neutral-primary-medium/65',
    'to-neutral-primary-medium/80',
    { 'print:hidden': !print },
    { hidden: hidden },
  ]}
>
  {@render children()}
</div>
