<script lang="ts">
  import Card from '$lib/modules/cards/card.svelte';
  import BannerInput from '$lib/modules/components/banners/banner-input.svelte';
  import Banner from '$lib/modules/components/banners/banner.svelte';
  import Checkbox from '$lib/modules/components/inputs/checkbox.svelte';
  import Text from '$lib/modules/components/inputs/text.svelte';
  import { mainAttrs } from '$lib/shared/attrs';
  import { characterNameId } from '$lib/shared/characterState.svelte';
  import { slugify } from '$lib/shared/utils.svelte';

  import AcEtc from './ac-etc-row.svelte';
  import AttrRow from './attr-row.svelte';
  import Attr from './attr.svelte';

  const id = 'attrs-card';
  let acEtc = ['Proficiency', 'Initiative', 'AC', 'Max HP', 'Hit Dice'];
</script>

<Card {id}>
  <Banner columns="calc(7in / 8) 1fr">
    <div>Name:</div>
    <BannerInput id={characterNameId} textAlign="left" />
  </Banner>

  <div class="card-columns">
    <div class="attributes">
      <AttrRow isHeader={true}>
        <div class="attr-head"></div>
        <div class="attr-head">Stat</div>
        <div class="attr-head">Mod</div>
        <div>Save</div>
        <div></div>
      </AttrRow>
      {#each mainAttrs as attr, i (attr)}
        <AttrRow noBorder={i == mainAttrs.length - 1}>
          <Attr {id} {attr} />
        </AttrRow>
      {/each}
    </div>

    <div class="ac-hp-etc">
      <AcEtc label="Inspiration">
        <Checkbox id="{id}-inspo" --size="calc(1in / 4)" />
      </AcEtc>
      {#each acEtc as label, i (label)}
        <AcEtc {label} noBorder={i == acEtc.length - 1}>
          <Text id="{id}-{slugify(label)}" />
        </AcEtc>
      {/each}
    </div>
  </div>

  <Banner isHeader={false} columns="calc(9in / 8) 1fr">
    <div>Speeds:</div>
    <BannerInput id="{id}-footer-input" textAlign="left" />
  </Banner>
</Card>

<style>
  .card-columns {
    grid-template-columns: 2.5in calc(2.25in - (1in / 16));
    column-gap: calc(1in / 16);
    height: calc(17in / 8);
  }

  .attributes {
    grid-template-rows: 0.25in repeat(6, calc(1.85in / 6));
  }
  .attr-head {
    text-align: right;
    padding-right: 5px;
    border-right: 1px dotted var(--color-card-border);
  }
  .attr-head:first-of-type {
    padding-right: 5px;
  }

  .ac-hp-etc {
    grid-template-rows: repeat(6, 1fr);
    height: 2.1in;
    max-height: 2.1in;
  }
</style>
