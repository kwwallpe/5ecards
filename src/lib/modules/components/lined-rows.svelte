<script lang="ts">
  import Text from './inputs/text.svelte';

  interface Props {
    id: string;
    rows?: number;
    textAlign?: 'left' | 'center' | 'right';
  }

  let { id, rows = 12, textAlign = 'left' }: Props = $props();
</script>

<div class="grid overflow-hidden h-auto" style:grid-template-rows={rows}>
  {#each { length: rows }, i}
    <div class="border-b dot-border overflow-hidden"><Text id="{id}-{i + 1}" {textAlign} /></div>
  {/each}
</div>
