<script lang="ts">
  import { Select, Label, type SelectOptionType } from 'flowbite-svelte';
  import { getContext } from 'svelte';

  import { FontAccessor, FontRole, fontSettingsContextKey } from '$lib/shared/fontState.svelte';

  interface Props {
    role: FontRole;
  }
  const { role }: Props = $props();

  const fontAccessor: FontAccessor = $derived(new FontAccessor(getContext(fontSettingsContextKey), role));
  const roleStr = $derived(role.toString().toLocaleLowerCase());
  const id = $derived(`card-${roleStr}-font`);
  const capped = $derived.by(() => {
    return roleStr ? roleStr[0].toUpperCase() + roleStr.slice(1) : '';
  });
  let items: SelectOptionType<string>[] = FontAccessor.fontNames.map((v) => ({ value: v, name: v }));
</script>

<Label for={id}>
  Card {capped} Font
  <Select {id} {items} bind:value={fontAccessor.font} classes={{ select: 'border-2 border-(--color-purple-700)' }} />
</Label>
