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
    'bordered',
    'p-8',
    'mx-auto',
    'my-0',
    'text-body',
    'bg-linear-to-r',
    'from-neutral-primary-medium/65',
    'to-neutral-primary-medium/80',
    { print },
    { hidden },
  ]}
>
  {@render children()}
</div>

<style>
  div {
    display: grid;
  }

  .bordered {
    min-width: 5.75in;
  }

  .hidden {
    display: none;
  }

  @media print {
    div:not(.print) {
      display: none;
    }
    .bordered {
      margin: 0;
      padding: 0;
      background-color: white;
    }
  }
</style>
