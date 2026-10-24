<script lang="ts">
  import { getContext } from 'svelte';
  import { FontAccessor, FontRole, fontSettingsContextKey } from '$lib/shared/fontState.svelte';
  import Range from '$lib/modules/components/inputs/range.svelte';

  interface Props {
    role: FontRole;
  }
  const { role }: Props = $props();

  const fontAccessor: FontAccessor = $derived(new FontAccessor(getContext(fontSettingsContextKey), role));
  const id = $derived(`card-${role.toString().toLowerCase()}-adjust-range`);
</script>

<Range {id} label="Size Adjustment" min={0.2} max={2.0} step={0.01} bind:value={fontAccessor.adjust} />
