<script lang="ts">
  import { getContext } from 'svelte';
  import { Button } from 'flowbite-svelte';
  import DownloadOutline from 'flowbite-svelte-icons/DownloadOutline.svelte';
  import { Character, characterContextKey } from '$lib/shared/characterState.svelte';

  const id = 'download-character-button';

  let character: Character = getContext(characterContextKey);

  const onclick = () => {
    const blob = new Blob([character.serialize], { type: 'application/json' });
    let fileName: string = 'character';
    if (character.slug) {
      fileName = `${character.slug}.json`;
    } else if (character.files?.[0]?.name) {
      fileName = character.files?.[0]?.name;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
</script>

<Button shadow color="purple" {id} {onclick}>
  <DownloadOutline class="me-2" />
  Download Character
</Button>
