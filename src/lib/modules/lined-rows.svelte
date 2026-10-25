<script lang="ts">
  import Text from './components/inputs/text.svelte';

  interface Props {
    id: string;
    rows?: number;
    textAlign?: 'left' | 'center' | 'right';
  }

  let { id, rows = 12, textAlign = 'left' }: Props = $props();
</script>

<div class="lined-row" style="grid-template-rows: repeat({rows}, 1fr);">
  {#each { length: rows }, i}
    <div><Text id="{id}-{i + 1}" {textAlign} /></div>
  {/each}
</div>

<style>
  .lined-row div {
    border-bottom: 1px dotted var(--color-card-border);
  }
</style>
