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

<div class="grid grid-cols-[calc(3.2in+(3in/16))_1fr] gap-1 align-middle mx-auto my-0">
  {#if text}
    <div class="grid grid-cols-[repeat(4,calc(13in/16))] text-right gap-1 border-b dot-border">
      <div class="pr-px">{text}</div>
      <div class="border-r pr-px dot-border"><Text id="{id}-atk" /></div>
      <div class="border-r pr-px dot-border"><Text id="{id}-dmg" /></div>
      <div class="pr-px"><Text id="{id}-dc" /></div>
    </div>
  {:else}
    <div class="col-span-1"><Text id="{id}-free" textAlign="left" /></div>
  {/if}
  <div class="grid grid-cols-2 border-l dot-border">
    <div class="mr-[0.35in] text-right">{level}</div>
    <div class="grid grid-cols-4 gap-0.75">
      {#each { length: spellSlots }, slot}
        <Checkbox id="{id}-sp-slot-{slot + 1}" />
      {/each}
    </div>
  </div>
</div>
