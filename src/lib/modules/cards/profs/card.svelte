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
  <div class="profs grid grid-cols-[2.75in_1fr] gap-x-1">
    <div class="grid grid-rows-[0.3in_0.3in_1fr]">
      <div class="grid grid-cols-[calc(15in/16)_1fr] gap-1">
        <div class="font-bold">Armor:</div>
        <div><Text id="{id}-armor" textAlign="left" /></div>
      </div>
      <div class="grid grid-cols-[calc(21in/16)_1fr] gap-1">
        <div class="font-bold">Weapons:</div>
        <div><Text id="{id}-weapons" textAlign="left" /></div>
      </div>
      <div class="grid grid-rows-[0.3in_1fr] dot-border border-t">
        <div class="font-bold">Kits etc.</div>
        <LinedRows id="{id}-kits" rows={7} />
      </div>
    </div>
    <div class="grid grid-rows-[0.3in 1fr] pl-0.5 dot-border border-l">
      <div class="font-bold">Languages</div>
      <LinedRows id="{id}-languages" rows={9} />
    </div>
  </div>
</Card>
