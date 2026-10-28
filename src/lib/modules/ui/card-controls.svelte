<script lang="ts">
  import { FontRole } from '$lib/shared/fontState.svelte';

  import CharacterUpload from './cards/character-upload.svelte';
  import ClearButton from './cards/clear-button.svelte';
  import DownloadCharacterButton from './cards/download-character-button.svelte';
  import FontControls from './cards/font-controls.svelte';
</script>

<div class="flex flex-row flex-wrap gap-6">
  <div>
    <div><h2>Characters</h2></div>
    <div class="flex flex-row flex-wrap gap-4">
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
  <div class="flex flex-row flex-wrap gap-x-4 gap-y-0">
    <div class="basis-full"><h2>Fonts</h2></div>
    <FontControls role={FontRole.label} />
    <FontControls role={FontRole.input} />
  </div>
</div>
