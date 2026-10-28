<script lang="ts">
  import Card from '$lib/modules/cards/card.svelte';
  import BannerInput from '$lib/modules/components/banners/banner-input.svelte';
  import Banner from '$lib/modules/components/banners/banner.svelte';
  import LinedRows from '$lib/modules/components/lined-rows.svelte';

  interface Props {
    id: string;
    header1?: string | null;
    header2?: string | null;
  }

  let { id, header1 = null, header2 = null }: Props = $props();
  const columns = '1fr 1fr';
</script>

<Card {id}>
  <Banner {columns}>
    {#if header1}
      <div>{header1}</div>
    {:else}
      <BannerInput id="{id}-header-input-1" />
    {/if}
    {#if header2}
      <div>{header2}</div>
    {:else}
      <BannerInput id="{id}-header-input-2" />
    {/if}
  </Banner>

  <div class="grid gap-(--teenth)" style:grid-template-columns={columns}>
    {#each { length: 2 }, column}
      <div>
        <LinedRows id="{id}-text-{column + 1}" />
      </div>
    {/each}
  </div>
</Card>
