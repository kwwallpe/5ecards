<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    print?: boolean;
    hidden?: boolean;
    children: Snippet;
  }

  let { print = false, hidden = false, children }: Props = $props();
</script>

<div class={['bordered', { print }, { hidden }]}>
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
    min-width: 5.75in;
    background-color: var(--color-neutral-primary);
    color: var(--color-body);
    border-radius: 15px 30px 5px 20px;
    border: 4px solid var(--color-brand-soft);
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
      border: 0;
      background-color: white;
      border-radius: 0;
    }
  }
</style>
