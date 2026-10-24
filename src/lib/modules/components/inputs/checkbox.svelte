<script lang="ts">
  import { Checkbox } from 'flowbite-svelte';
  import { getContext } from 'svelte';

  import { CharacterAccessor, characterContextKey } from '$lib/shared/characterState.svelte';

  interface Props {
    id: string;
    disabled?: boolean;
  }

  let { id, disabled = false }: Props = $props();
  let characterAccessor: CharacterAccessor = $derived(new CharacterAccessor(id, getContext(characterContextKey)));
</script>

<Checkbox {id} {disabled} bind:checked={characterAccessor.check} />
