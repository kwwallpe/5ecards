<script lang="ts">
  import Card from '$lib/modules/cards/card.svelte';
  import Banner from '$lib/modules/components/banners/banner.svelte';
  import Text from '$lib/modules/components/inputs/text.svelte';
  import LinedRows from '$lib/modules/lined-rows.svelte';

  const id = 'profs-card';
</script>

<Card {id}>
  <Banner>
    <div>Proficiencies</div>
  </Banner>
  <div class="profs">
    <div>
      <div class="armor">
        <div>Armor:</div>
        <div><Text id="{id}-armor" textAlign="left" /></div>
      </div>
      <div class="weapons">
        <div>Weapons:</div>
        <div><Text id="{id}-weapons" textAlign="left" /></div>
      </div>
      <div class="kits">
        <div>Kits etc.</div>
        <LinedRows id="{id}-kits" rows={7} />
      </div>
    </div>
    <div class="languages">
      <div>Languages</div>
      <LinedRows id="{id}-languages" rows={9} />
    </div>
  </div>
</Card>

<style>
  .profs {
    grid-template-columns: 2.75in 1fr;
    column-gap: calc(1in / 16);
  }

  .profs > div:first-child {
    grid-template-rows: 0.3in 0.3in 1fr;
  }

  .armor {
    grid-template-columns: calc(15in / 16) 1fr;
    gap: 5px;
  }
  .weapons {
    grid-template-columns: calc(21in / 16) 1fr;
    gap: 5px;
  }

  .armor div:first-of-type,
  .weapons div:first-of-type {
    font-weight: bold;
  }

  .kits {
    grid-template-rows: 0.3in 1fr;
    border-top: 1px dotted var(--color-card-border);
  }

  .languages {
    grid-template-rows: 0.3in 1fr;
    padding-left: 2px;
    border-left: 1px dotted var(--color-card-border);
  }

  .kits div:first-of-type,
  .languages div:first-of-type {
    font-weight: bold;
  }
</style>
