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

<div class="grid-cols-[calc(3.2in+(3in/16))_1fr] gap-1 align-middle mx-auto my-0">
  {#if text}
    <div class="grid-cols-4 text-right gap-1 border-b border-dotted border-card-border.">
      <div class="pr-px">{text}</div>
      <div class="border-r pr-px border-dotted border-card-border."><Text id="{id}-atk" /></div>
      <div class="border-r pr-px border-dotted border-card-border."><Text id="{id}-dmg" /></div>
      <div class="pr-px"><Text id="{id}-dc" /></div>
    </div>
  {:else}
    <div class="col-span-1"><Text id="{id}-free" textAlign="left" /></div>
  {/if}
  <div class="grid-cols-2 border-l border-dotted border-card-border.">
    <div class="mr-[0.35in] text-right">{level}</div>
    <div class="grid-cols-4 gap-0.75">
      {#each { length: spellSlots }, slot}
        <Checkbox id="{id}-sp-slot-{slot + 1}" />
      {/each}
    </div>
  </div>
</div>
