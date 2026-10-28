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

  <div class="grid-cols-[2.5in_1fr] gap-x-1.5">
    <div class="grid-rows-[0.25in_repeat(6,1fr)]">
      <AttrRow isHeader={true}>
        <div class="text-right pr-1.25 border-r border-dotted border-card-border"></div>
        <div class="text-right pr-1.25 border-r border-dotted border-card-border">Stat</div>
        <div class="text-right pr-1.25 border-r border-dotted border-card-border">Mod</div>
        <div>Save</div>
        <div></div>
      </AttrRow>
      {#each mainAttrs as attr, i (attr)}
        <AttrRow noBorder={i == mainAttrs.length - 1}>
          <Attr {id} {attr} />
        </AttrRow>
      {/each}
    </div>

    <div class="grid-rows-6 h-51">
      <AcEtc label="Inspiration">
        <Checkbox id="{id}-inspo" --size="0.25in" />
      </AcEtc>
      {#each acEtc as label, i (label)}
        <AcEtc {label} noBorder={i == acEtc.length - 1}>
          <Text id="{id}-{slugify(label)}" fontSize="12px" />
        </AcEtc>
      {/each}
    </div>
  </div>

  <Banner isHeader={false} columns="calc(9in / 8) 1fr">
    <div>Speeds:</div>
    <BannerInput id="{id}-footer-input" textAlign="left" />
  </Banner>
</Card>
