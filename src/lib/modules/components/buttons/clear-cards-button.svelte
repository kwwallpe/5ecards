<script lang="ts">
  import { getContext } from 'svelte';
  import { Button } from 'flowbite-svelte';
  import CloseCircleOutline from 'flowbite-svelte-icons/CloseCircleOutline.svelte';
  import { Character, characterContextKey } from '$lib/shared/characterState.svelte';

  const id = 'clear-inputs-button';

  let character: Character = getContext(characterContextKey);

  const onclick = () => {
    character.clear();
  };
</script>

<Button shadow color="purple" {id} {onclick}>
  <CloseCircleOutline class="me-2" />
  Clear All Cards
</Button>
