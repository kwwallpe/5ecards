<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    isHeader?: boolean;
    columns?: string;
    textAlign?: "left" | "center" | "right";
    children: Snippet;
  }

  let { isHeader = true, columns = "1fr", textAlign = "left", children }: Props = $props();
  let borderClass = $derived(isHeader ? "head" : "foot");
</script>

<div class={borderClass} style="grid-template-columns: {columns}; text-align: {textAlign}">
  {@render children()}
</div>

<style>
  div {
    font-weight: bold;
    height: 0.3in;
    max-height: 0.3in;
    gap: calc(1in / 16);
  }
  .head {
    border-bottom: 1px solid lightgray;
  }
  .foot {
    border-top: 1px solid lightgray;
  }
</style>
