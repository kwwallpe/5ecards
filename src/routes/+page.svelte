<script lang="ts">
  import { getContext, setContext } from 'svelte';

  import AttrsCard from '$lib/modules/cards/attrs/card.svelte';
  import ColSingle from '$lib/modules/cards/col-one/card.svelte';
  import ColDouble from '$lib/modules/cards/col-two/card.svelte';
  import CombatCard from '$lib/modules/cards/combat/card.svelte';
  import ItemsCard from '$lib/modules/cards/items/card.svelte';
  import ProfsCard from '$lib/modules/cards/profs/card.svelte';
  import SkillsCard from '$lib/modules/cards/skills/card.svelte';
  import Bordered from '$lib/modules/ui/bordered.svelte';
  import CardControls from '$lib/modules/ui/card-controls.svelte';
  import { CharacterAccessor, characterContextKey } from '$lib/shared/characterState.svelte';
  import { ControlVisibility, controlVisibilityContextKey } from '$lib/shared/controlVisibility.svelte';
  import { FontAccessor, fontSettingsContextKey } from '$lib/shared/fontState.svelte';

  let fontSettings = FontAccessor.settingsFromStorage();
  let character = CharacterAccessor.settingsFromStorage();

  setContext(fontSettingsContextKey, fontSettings);
  setContext(characterContextKey, character);

  let controlVisibility: ControlVisibility = getContext(controlVisibilityContextKey);
  let hidden = $derived(!controlVisibility.setting);
  // Print layout: cards flow down the columns in markup order. The first three fill the
  // left column; the last two are rotated into the narrow right column.
  const pageClasses = `page contents box-border overflow-hidden
    print:grid print:grid-flow-col print:grid-cols-[5in_3in] print:grid-rows-[repeat(10,1in)]
    print:w-[8.5in] print:h-[11in] print:p-[0.25in]
    print:*:nth-[-n+3]:row-span-3
    print:*:nth-[n+4]:row-span-5 print:*:nth-[n+4]:origin-top-left
    print:*:nth-[n+4]:translate-x-[3in] print:*:nth-[n+4]:rotate-90` as const;
</script>

<svelte:head>
  <title>D&D 5e Character Index Cards</title>
</svelte:head>

<Bordered {hidden}>
  <div class="flex flex-col flex-wrap justify-between gap-4">
    <div><h1>D&D 5e Character Index Cards</h1></div>
    <div class="block">
      <CardControls />
    </div>
  </div>
</Bordered>

<Bordered print={true}>
  <div class="flex flex-row flex-wrap gap-6 print:block">
    <div class="{pageClasses} print:break-after-page">
      <AttrsCard />
      <SkillsCard />
      <ProfsCard />
      <CombatCard />
      <ColSingle id="features-card" header="Features" />
    </div>
    <div class="{pageClasses} print:break-after-auto">
      <ColSingle id="actions-card" header="Actions" />
      <ColDouble id="bonus-react-card" header1="Bonus Actions" header2="Reactions" />
      <ItemsCard />
      <ColSingle id="blank-card-1" />
      <ColSingle id="blank-card-2" />
    </div>
  </div>
</Bordered>
