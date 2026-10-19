<script lang="ts">
  import { createContext, setContext } from "svelte";
  import AttrsCard from "$lib/modules/cards/attrs/card.svelte";
  import ColDouble from "$lib/modules/cards/col-two/card.svelte";
  import ColSingle from "$lib/modules/cards/col-one/card.svelte";
  import CombatCard from "$lib/modules/cards/combat/card.svelte";
  import Dummy from "$lib/modules/cards/dummy/card.svelte";
  import ItemsCard from "$lib/modules/cards/items/card.svelte";
  import ProfsCard from "$lib/modules/cards/profs/card.svelte";
  import SkillsCard from "$lib/modules/cards/skills/card.svelte";

  import pdf from "$lib/assets/nine_cards.pdf";

  import Bordered from "$lib/modules/ui/bordered.svelte";
  import CardLabelFontSelect from "$lib/modules/components/selects/card-label-font-select.svelte";
  import CardInputFontSelect from "$lib/modules/components/selects/card-input-font-select.svelte";
  import CardInputAdjustRange from "$lib/modules/components/ranges/card-input-adjust-range.svelte";
  import CardLabelAdjustRange from "$lib/modules/components/ranges/card-label-adjust-range.svelte";
  import CardFontResetButton from "$lib/modules/components/buttons/card-font-reset-button.svelte";
  import { FontRole, FontAccessor, fontSettingsContextKey } from "$lib/shared/fontState.svelte";
  import {
    CharacterAccessor,
    type CharacterName,
    characterCollectionContextKey,
    setCharacterName,
  } from "$lib/shared/characterState.svelte";

  let fontSettings = FontAccessor.settingsFromStorage();
  let characterCollection = CharacterAccessor.characterCollectionFromStorage();
  let characterName: CharacterName = $state({ name: "" });

  setContext(fontSettingsContextKey, fontSettings);
  setContext(characterCollectionContextKey, characterCollection);
  setCharacterName(characterName);
</script>

<svelte:head>
  <title>D&D 5e Character Index Cards</title>
</svelte:head>

<Bordered>
  <div id="intro">
    <div class="words">
      <h1>D&D 5e Character Index Cards</h1>
      <h2>tl; dr</h2>
      <ol>
        <li>
          Optional: Fill out any of the text boxes/check boxes you want to (practically anything that doesn't already
          have text).
        </li>
        <li>Print the following two pages on US Letter cardstock.</li>
        <li>Cut the cards apart.</li>
        <li>Use them as a character sheet replacement.</li>
      </ol>
      <p>
        Or just print <a href={pdf}>the PDF version</a>. There's
        <a href="/help">help and more detail</a> available if you're interested.
      </p>
    </div>
    <div class="controls" data-parent="yes">
      <div>
        <CardLabelFontSelect />
        <CardLabelAdjustRange />
        <CardFontResetButton role={FontRole.label} />
        <CardFontResetButton role={FontRole.label} all={true} />
      </div>
      <div>
        <CardInputFontSelect />
        <CardInputAdjustRange />
        <CardFontResetButton role={FontRole.input} />
        <CardFontResetButton role={FontRole.input} all={true} />
      </div>
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
    syntax: "<length>";
    inherits: true;
    initial-value: calc(5in - 2px);
  }
  @property --c-height {
    syntax: "<length>";
    inherits: true;
    initial-value: calc(3in - 2px);
  }

  :global(div) {
    display: grid;
  }

  #intro {
    grid-template-columns: 7fr 2fr;
  }

  #cards {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    gap: 0.25in;
  }

  h1,
  h2,
  ol {
    margin-top: 0;
  }

  .controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    padding-left: 20px;
  }

  .controls div {
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: top;
    gap: 10px;
    flex-basis: 70px;
  }

  .six {
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
