<script lang="ts">
  import Text from './components/inputs/text.svelte';

  interface Props {
    id: string;
    rows?: number;
    textAlign?: 'left' | 'center' | 'right';
  }

  let { id, rows = 12, textAlign = 'left' }: Props = $props();
</script>

<div class="lined-row grid-rows-{rows}">
  {#each { length: rows }, i}
    <div class="border-b dot-border"><Text id="{id}-{i + 1}" {textAlign} /></div>
  {/each}
</div>
