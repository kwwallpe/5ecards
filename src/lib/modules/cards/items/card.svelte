<script lang="ts">
  import Card from '$lib/modules/cards/card.svelte';
  import Banner from '$lib/modules/components/banners/banner.svelte';
  import Text from '$lib/modules/components/inputs/text.svelte';
  import LinedRows from '$lib/modules/lined-rows.svelte';

  const id = 'items-card';
</script>

<Card {id}>
  <Banner columns="0.75in repeat(4, 2em 1fr)">
    <div>Items</div>
    <div>PP</div>
    <div><Text id="{id}-platinum" /></div>
    <div>GP</div>
    <div><Text id="{id}-gold" /></div>
    <div>SP</div>
    <div><Text id="{id}-silver" /></div>
    <div>CP</div>
    <div><Text id="{id}-copper" /></div>
  </Banner>

  <LinedRows {id} />
</Card>

<style>
  div:not(:first-child) {
    font-size: 0.75em;
    color: forestgreen;
    margin-left: 2px;
    padding-right: 1px;
  }

  div:first-child {
    border-right: 1px solid var(--color-card-border);
  }
</style>
