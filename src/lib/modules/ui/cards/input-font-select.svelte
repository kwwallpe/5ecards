<script lang="ts">
  import { getContext } from 'svelte';
  import { Select, Label, type SelectOptionType } from 'flowbite-svelte';
  import { FontAccessor, FontRole, fontSettingsContextKey } from '$lib/shared/fontState.svelte';

  const fontAccessor: FontAccessor = $derived(new FontAccessor(getContext(fontSettingsContextKey), FontRole.input));
  const id = 'card-input-font';
  let items: SelectOptionType<string>[] = FontAccessor.fontNames.map((v) => ({ value: v, name: v }));
</script>

<Label class="font-bold text-lg" for={id}>
  Card Input Font
  <Select {id} {items} bind:value={fontAccessor.font} classes={{ select: 'border-2 border-(--color-purple-700)' }} />
</Label>
