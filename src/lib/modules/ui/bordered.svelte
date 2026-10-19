<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    print?: boolean;
    children: Snippet;
  }

  let { print = false, children }: Props = $props();
  let printClass = $derived(print ? "" : "no-print");
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
    min-width: 700px;
    background-color: white;
    border-radius: 15px 30px 5px 20px;
    border: 4px solid transparent;
    background-image: linear-gradient(to right, whitesmoke, whitesmoke),
      linear-gradient(to bottom right, indigo, mistyrose);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }

  @media print {
    .no-print {
      display: none;
    }
    .bordered {
      margin: 0;
      padding: 0;
    }
  }
</style>
