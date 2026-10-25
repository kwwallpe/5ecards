<script lang="ts">
  import Checkbox from '$lib/modules/components/inputs/checkbox.svelte';
  import Text from '$lib/modules/components/inputs/text.svelte';

  interface Props {
    id: string;
    level: number;
    text?: string;
  }

  let { id, level, text = '' }: Props = $props();
  let spellSlots = $derived(level == 1 ? 4 : level <= 4 ? 3 : level <= 7 ? 2 : 1);
</script>

<div class="combat-row">
  {#if text}
    <div class="atk-etc">
      <div>{text}</div>
      <div><Text id="{id}-atk" /></div>
      <div><Text id="{id}-dmg" /></div>
      <div><Text id="{id}-dc" /></div>
    </div>
  {:else}
    <div class="fill"><Text id="{id}-free" textAlign="left" /></div>
  {/if}
  <div class="spells">
    <div>{level}</div>
    <div>
      {#each { length: spellSlots }, slot}
        <Checkbox id="{id}-sp-slot-{slot + 1}" />
      {/each}
    </div>
  </div>
</div>

<style>
  .combat-row {
    grid-template-columns: calc(3.2in + (3in / 16)) 1fr;
    gap: calc(1in / 16);
    text-align: left;
    vertical-align: middle;
    margin: auto 0;
  }

  .atk-etc {
    grid-template-columns: repeat(4, calc(13in / 16));
    text-align: right;
    gap: calc(1in / 16);
    border-bottom: 1px dotted var(--color-card-border);
  }
  .atk-etc div {
    border-right: 1px dotted var(--color-card-border);
    padding-right: 1px;
  }
  .atk-etc div:last-of-type,
  .atk-etc div:first-of-type {
    border-right: 0;
  }

  .spells {
    grid-template-columns: 2fr 2fr;
    border-left: 1px dotted var(--color-card-border);
  }

  .spells div:first-of-type {
    margin-right: 0.35in;
    text-align: right;
  }

  .spells div:last-of-type {
    grid-template-columns: repeat(4, 1fr);
  }

  .fill {
    grid-column: 1 / span 1;
  }
</style>
