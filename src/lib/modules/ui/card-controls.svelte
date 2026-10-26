<script lang="ts">
  import { FontRole } from '$lib/shared/fontState.svelte';

  import CharacterUpload from './cards/character-upload.svelte';
  import ClearButton from './cards/clear-button.svelte';
  import DownloadCharacterButton from './cards/download-character-button.svelte';
  import FontControls from './cards/font-controls.svelte';
</script>

<div class="card-controls">
  <div class="character">
    <div><h2>Characters</h2></div>
    <div class="buttons">
      <ClearButton />
      <DownloadCharacterButton />
    </div>
    <div>
      <CharacterUpload />
    </div>
    <div>Convenient emoji to copy/paste</div>
    <div class="text-sm">🔲 ◼️ - checkboxes</div>
    <div class="text-sm">◼️ 🟫 🟥 🟧 🟨 🟩 🟦 🟪</div>
    <div class="text-sm">⚫ 🟤 🔴 🟠 🟡 🟢 🔵 🟣</div>
  </div>
  <div class="font">
    <div class="spanner"><h2>Fonts</h2></div>
    <FontControls role={FontRole.label} />
    <FontControls role={FontRole.input} />
  </div>
</div>

<style>
  .card-controls {
    display: flex;
    gap: 2em;
  }

  .buttons {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
  }

  .font {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 1em;
    row-gap: 0;
  }

  .spanner {
    flex-basis: 100%;
  }
</style>
