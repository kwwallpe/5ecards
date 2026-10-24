<script lang="ts">
  import { FontRole } from '$lib/shared/fontState.svelte';
  import ClearButton from './cards/clear-button.svelte';
  import DownloadCharacterButton from './cards/download-character-button.svelte';
  import CharacterUpload from './cards/character-upload.svelte';
  import FontControls from './cards/font-controls.svelte';
</script>

<div class="card-controls">
  <div class="font-row">
    <FontControls role={FontRole.label} />
    <FontControls role={FontRole.input} />
  </div>
  <div class="character-row">
    <div class="font-bold text-lg text-gray-700 dark:text-gray-200">Characters</div>
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
    row-gap: 2em;
  }

  .font-row,
  .character-row .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }

  .upload {
    grid-column: 1 / -1;
  }
</style>
