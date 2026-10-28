<script lang="ts">
  import Card from '$lib/modules/cards/card.svelte';
  import Banner from '$lib/modules/components/banners/banner.svelte';
  import Text from '$lib/modules/components/inputs/text.svelte';
  import LinedRows from '$lib/modules/components/lined-rows.svelte';

  const id = 'items-card';
  const mainClasses = 'text-[0.75em] text-emerald-700 ml-0.5 pb-px pr-px' as const;
</script>

<Card {id}>
  <Banner columns="0.8in repeat(4, 2em 1fr)">
    <div class="border-r border-card-border pr-px">Items</div>
    <div class={mainClasses}>PP</div>
    <div class={mainClasses}><Text id="{id}-platinum" /></div>
    <div class={mainClasses}>GP</div>
    <div class={mainClasses}><Text id="{id}-gold" /></div>
    <div class={mainClasses}>SP</div>
    <div class={mainClasses}><Text id="{id}-silver" /></div>
    <div class={mainClasses}>CP</div>
    <div class={mainClasses}><Text id="{id}-copper" /></div>
  </Banner>

  <LinedRows {id} />
</Card>
