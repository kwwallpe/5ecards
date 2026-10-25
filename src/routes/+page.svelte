<script lang="ts">
  import { setContext } from 'svelte';

  import { resolve } from '$app/paths';
  import pdf from '$lib/assets/nine_cards.pdf';
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
    <div class="page">
      <AttrsCard />
      <SkillsCard />
      <ProfsCard />
      <CombatCard />
      <ColSingle id="features-card" header="Features" />
    </div>
    <div class="page">
      <ColSingle id="actions-card" header="Actions" />
      <ColDouble id="bonus-react-card" header1="Bonus Actions" header2="Reactions" />
      <ItemsCard />
      <ColSingle id="blank-card-1" />
      <ColSingle id="blank-card-2" />
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

  .page {
    display: contents;
  }

  #cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25in;
  }

  @page {
    size: letter;
    margin: 0;
  }

  @media print {
    #cards {
      display: block;
      padding: 0;
      border-radius: 0;
    }

    .page {
      box-sizing: border-box;
      width: 8.5in;
      height: 11in;
      padding: 0.25in;
      overflow: hidden;
      display: grid;
      grid-template-columns: 5in 3in;
      grid-template-rows: repeat(10, 1in);
      break-after: page;
    }
    .page:last-child {
      break-after: auto;
    }

    .page > :global(.card) {
      margin: 1px;
      align-self: start;
      justify-self: start;
    }
    .page > :global(:nth-child(1)) {
      grid-area: 1 / 1 / 4 / 2;
    }
    .page > :global(:nth-child(2)) {
      grid-area: 4 / 1 / 7 / 2;
    }
    .page > :global(:nth-child(3)) {
      grid-area: 7 / 1 / 10 / 2;
    }
    .page > :global(:nth-child(4)) {
      grid-area: 1 / 2 / 6 / 3;
      grid-row: 1 / 6;
    }
    .page > :global(:nth-child(5)) {
      grid-area: 6 / 2 / 11 / 3;
    }
    .page > :global(:nth-child(n + 4)) {
      transform-origin: top left;
      transform: translateX(calc(3in - 2px)) rotate(90deg);
    }
  }
</style>
