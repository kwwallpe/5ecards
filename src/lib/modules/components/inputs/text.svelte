<script lang="ts">
  import { Input } from 'flowbite-svelte';
  import { getContext } from 'svelte';

  import { CharacterAccessor, characterContextKey } from '$lib/shared/characterState.svelte';
  import { FontAccessor, FontRole, fontSettingsContextKey } from '$lib/shared/fontState.svelte';

  interface Props {
    id: string;
    textAlign?: 'left' | 'center' | 'right';
    fontWeight?: 'bold' | 'normal';
    fontSize?: string | null;
  }

  let { id, textAlign = 'right', fontWeight = 'normal', fontSize = null }: Props = $props();

  let fontAccessor: FontAccessor = $derived(new FontAccessor(getContext(fontSettingsContextKey), FontRole.input));
  let characterAccessor: CharacterAccessor = $derived(new CharacterAccessor(id, getContext(characterContextKey)));
</script>

<Input
  type="text"
  {id}
  bind:value={characterAccessor.text}
  style="
    font-family: {fontAccessor.font};
    text-align: {textAlign};
    font-size: {fontSize || '10px'} !important;
    font-size-adjust: {fontAccessor.adjust};
    font-weight: {fontWeight};
    word-spacing: {fontAccessor.wordSpacing};
    "
/>
