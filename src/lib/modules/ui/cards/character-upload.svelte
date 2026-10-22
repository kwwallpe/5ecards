<script lang="ts">
  import { Fileupload, Label, Helper } from 'flowbite-svelte';
  import { getContext } from 'svelte';
  import { Character, characterContextKey } from '$lib/shared/characterState.svelte';

  const id = 'character-upload';

  let character: Character = getContext(characterContextKey);

  const onchange = (event: Event) => {
    console.log('onchange from file upload', event.currentTarget);
    const input = event.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    console.log('file?', input.files, file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const newCharacter = Character.deserialize(e.target?.result as string);
          character.settings = newCharacter.settings;
          character.files = input.files;
        } catch (error) {
          console.error(error);
        }
      };
      reader.readAsText(file);
    }
  };

  const clearableOnClick = () => {
    character.clear();
  };
</script>

<Label for={id} class="font-bold text-[indigo] text-lg mt-4">Upload Character</Label>
<Fileupload
  clearable
  {id}
  accept=".json"
  class="cursor-pointer border-2 border-purple-200 text-[indigo]"
  {onchange}
  {clearableOnClick}
  bind:files={character.files}
/>
<Helper class="my-1">JSON file.</Helper>
