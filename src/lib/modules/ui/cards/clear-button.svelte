<script lang="ts">
  import { getContext } from 'svelte';
  import { Button } from 'flowbite-svelte';
  import CloseCircleOutline from 'flowbite-svelte-icons/CloseCircleOutline.svelte';
  import { Character, characterContextKey } from '$lib/shared/characterState.svelte';

  const id = 'clear-inputs-button';

  let character: Character = getContext(characterContextKey);

  const onclick = () => {
    console.log('clearing character');
    character.clear();
    console.log('character', character.files);
  };
</script>

<Button shadow color="purple" {id} {onclick}>
  <CloseCircleOutline class="me-2" />
  Clear Character
</Button>
