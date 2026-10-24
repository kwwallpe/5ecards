<script lang="ts">
  import { getContext } from 'svelte';
  import { Button } from 'flowbite-svelte';
  import { CloseCircleOutline } from 'flowbite-svelte-icons';
  import { Character, characterContextKey } from '$lib/shared/characterState.svelte';

  const id = 'clear-inputs-button';

  let character: Character = getContext(characterContextKey);

  const onclick = () => {
    console.log('clearing character');
    character.clear();
    console.log('character', character.files);
  };
</script>

<Button {id} {onclick}>
  <CloseCircleOutline />
  Clear Character
</Button>
