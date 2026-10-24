<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    print?: boolean;
    children: Snippet;
  }

  let { print = false, children }: Props = $props();
  let printClass = $derived(print ? '' : 'no-print');
</script>

<div class="bordered {printClass}">
  {@render children()}
</div>

<style>
  div {
    display: grid;
  }

  .bordered {
    margin: 0 auto 20px auto;
    padding: 20px;
    border: 0;
    max-width: 15.5in;
    min-width: 5.75in;
    background-color: var(--color-neutral-primary);
    color: var(--color-body);
    border-radius: 15px 30px 5px 20px;
    border: 4px solid var(--color-brand);
  }

  @media print {
    .no-print {
      display: none;
    }
    .bordered {
      margin: 0;
      padding: 0;
      border: 0;
      background-color: white;
    }
  }
</style>
