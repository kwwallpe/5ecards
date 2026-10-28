<script lang="ts">
  import Card from '$lib/modules/cards/card.svelte';
  import BannerInput from '$lib/modules/components/banners/banner-input.svelte';
  import Banner from '$lib/modules/components/banners/banner.svelte';
  import LinedRows from '$lib/modules/components/lined-rows.svelte';

  interface Props {
    id: string;
    header?: string | null;
  }

  let { id, header = null }: Props = $props();
</script>

<Card {id}>
  <Banner>
    {#if header}
      <div class="bg-transparent">{header}</div>
    {:else}
      <BannerInput id="{id}-header-input" />
    {/if}
  </Banner>

  <LinedRows id="{id}-text" />
</Card>
