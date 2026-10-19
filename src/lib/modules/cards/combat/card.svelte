<script lang="ts">
  import Card from "$lib/modules/cards/card.svelte";
  import Banner from "$lib/modules/components/banners/banner.svelte";
  import CombatRow from "./combat-row.svelte";

  const id = "combat-card";
  const rows = "1fr 9fr";
  const labeledRows = ["Melee", "Magic", "Ranged"];
</script>

<Card {id} {rows}>
  <Banner columns="repeat(4, calc(13in / 16)) 1fr" textAlign="right">
    <div class="head"></div>
    <div class="head">Atk</div>
    <div class="head">Dmg</div>
    <div class="head">DC</div>
    <div class="head">Sp. Slots</div>
  </Banner>

  <div class="combat">
    {#each { length: 9 }, i}
      {@const level = i + 1}
      {@const rowId = `${id}-level-${level}`}
      {@const text = labeledRows.at(i)}
      {#if text}
        <CombatRow id={rowId} {level} {text} />
      {:else}
        <CombatRow id={rowId} {level} />
      {/if}
    {/each}
  </div>
</Card>

<style>
  .head {
    text-align: right;
    padding-right: 1px;
  }

  .combat {
    grid-template-rows: repeat(9, 1fr);
    font-size: 0.75em;
  }
</style>
