<script lang="ts">
  import { FontRole } from '$lib/shared/fontState.svelte';
  import CardFontResetButton from '$lib/modules/components/buttons/card-font-reset-button.svelte';
  import CardInputAdjustRange from '$lib/modules/components/ranges/card-input-adjust-range.svelte';
  import CardLabelAdjustRange from '$lib/modules/components/ranges/card-label-adjust-range.svelte';
  import CardInputFontSelect from '$lib/modules/components/selects/card-input-font-select.svelte';
  import CardLabelFontSelect from '$lib/modules/components/selects/card-label-font-select.svelte';
  import ClearCardsButton from '../components/buttons/clear-cards-button.svelte';
  import DownloadCharacterButton from '../components/buttons/download-character-button.svelte';
</script>

<div class="card-controls">
  <div class="font-row">
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
  <div class="character-row">
    <div class="head">Characters</div>
    <div class="buttons">
      <ClearCardsButton />
      <DownloadCharacterButton />
    </div>
  </div>
</div>

<style>
  .card-controls {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6fr 4fr;
    row-gap: 1em;
  }

  .font-row,
  .character-row .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }

  .font-row div {
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: top;
    gap: 10px;
    flex-basis: 70px;
  }

  .character-row .head {
    font-size: 19px;
    font-weight: bold;
    padding: 0;
    color: indigo;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    user-select: none;
    justify-content: center;
    align-items: center;
    margin-bottom: 1px;
  }
</style>
