<script lang="ts">
  import { setContext } from 'svelte';

  import { resolve } from '$app/paths';
  import pdf from '$lib/assets/nine_cards.pdf';
  import AttrsCard from '$lib/modules/cards/attrs/card.svelte';
  import ColSingle from '$lib/modules/cards/col-one/card.svelte';
  import ColDouble from '$lib/modules/cards/col-two/card.svelte';
  import CombatCard from '$lib/modules/cards/combat/card.svelte';
  import Dummy from '$lib/modules/cards/dummy/card.svelte';
  import ItemsCard from '$lib/modules/cards/items/card.svelte';
  import ProfsCard from '$lib/modules/cards/profs/card.svelte';
  import SkillsCard from '$lib/modules/cards/skills/card.svelte';
  import Bordered from '$lib/modules/ui/bordered.svelte';
  import CardControls from '$lib/modules/ui/card-controls.svelte';
  import { CharacterAccessor, characterContextKey } from '$lib/shared/characterState.svelte';
  import { FontAccessor, fontSettingsContextKey } from '$lib/shared/fontState.svelte';

  let fontSettings = FontAccessor.settingsFromStorage();
  let character = CharacterAccessor.settingsFromStorage();

  setContext(fontSettingsContextKey, fontSettings);
  setContext(characterContextKey, character);
</script>

<svelte:head>
  <title>D&D 5e Character Index Cards</title>
</svelte:head>

<Bordered>
  <div id="intro">
    <div class="words">
      <h1>D&D 5e Character Index Cards</h1>
      <h2>tl; dr</h2>
      <ol class="list-outside list-decimal ml-8">
        <li>
          Optional: Fill out any of the text boxes/check boxes you want to (practically anything that doesn't already
          have text).
        </li>
        <li>Print the following two pages on US Letter cardstock.</li>
        <li>Cut the cards apart.</li>
        <li>Use them as a character sheet replacement.</li>
      </ol>
      <p>
        <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
        Or just print <a href={pdf}>the PDF version</a>. There's
        <a href={resolve('/help')}>help and more detail</a> available if you're interested.
      </p>
    </div>
    <div class="controls">
      <CardControls />
    </div>
  </div>
</Bordered>

<Bordered print={true}>
  <div id="cards">
    <div class="six" id="page-1">
      <AttrsCard />
      <SkillsCard />
      <ProfsCard />
      <CombatCard />
      <ColSingle id="features-card" header="Features" />
      <Dummy />
    </div>
    <div class="six" id="page-2">
      <ColSingle id="actions-card" header="Actions" />
      <ColDouble id="bonus-react-card" header1="Bonus Actions" header2="Reactions" />
      <ItemsCard />
      <ColSingle id="blank-card-1" />
      <ColSingle id="blank-card-2" />
      <Dummy />
    </div>
  </div>
</Bordered>

<style>
  @property --c-width {
    syntax: '<length>';
    inherits: true;
    initial-value: calc(5in - 2px);
  }
  @property --c-height {
    syntax: '<length>';
    inherits: true;
    initial-value: calc(3in - 2px);
  }

  #intro {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;
  }

  #intro .words {
    display: block;
    flex: 1 1 450px;
  }

  #intro .controls {
    display: block;
    flex: 0 0 450px;
  }

  #cards {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    gap: 0.25in;
  }

  .six {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--c-width), 1fr));
    margin: 0;
    gap: 15px;
  }

  @media print {
    #cards {
      width: 8in;
      margin: 0;
      padding: 0;
      border-radius: 0;
    }

    .six {
      grid-template-columns: repeat(2, var(--c-width));
      grid-template-rows: repeat(3, var(--c-height));
      width: 8in;
    }

    .six:first-of-type {
      min-height: 11in;
      break-after: always;
    }
  }
</style>
