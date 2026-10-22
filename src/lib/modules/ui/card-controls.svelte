<script lang="ts">
  import { setContext } from 'svelte';
  import { FontRole } from '$lib/shared/fontState.svelte';
  import FontResetButton from '$lib/modules/ui/cards/font-reset-button.svelte';
  import InputAdjustRange from '$lib/modules/ui/cards/input-adjust-range.svelte';
  import LabelAdjustRange from '$lib/modules/ui/cards/label-adjust-range.svelte';
  import InputFontSelect from '$lib/modules/ui/cards/input-font-select.svelte';
  import LabelFontSelect from '$lib/modules/ui/cards/label-font-select.svelte';
  import ClearButton from './cards/clear-button.svelte';
  import DownloadCharacterButton from './cards/download-character-button.svelte';
  import CharacterUpload from './cards/character-upload.svelte';
</script>

<div class="card-controls">
  <div class="font-row">
    <div>
      <LabelFontSelect />
      <LabelAdjustRange />
      <FontResetButton role={FontRole.label} />
      <FontResetButton role={FontRole.label} all={true} />
    </div>
    <div>
      <InputFontSelect />
      <InputAdjustRange />
      <FontResetButton role={FontRole.input} />
      <FontResetButton role={FontRole.input} all={true} />
    </div>
  </div>
  <div class="character-row">
    <div class="head">Characters</div>
    <div class="buttons">
      <ClearButton />
      <DownloadCharacterButton />
    </div>
    <div class="upload">
      <CharacterUpload />
    </div>
  </div>
</div>

<style>
  .card-controls {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    row-gap: 1.5em;
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

  .upload {
    grid-column: 1 / -1;
  }
</style>
