<script lang="ts">
  import { getContext } from "svelte";
  import { FontAccessor, FontRole, fontSettingsContextKey } from "$lib/shared/fontState.svelte";
  import Range from "$lib/modules/components/inputs/range.svelte";

  const fontAccessor: FontAccessor = $derived(new FontAccessor(getContext(fontSettingsContextKey), FontRole.input));
</script>

<Range
  id="card-input-adjust-range"
  label="Size Adjustment"
  min={0.2}
  max={2.0}
  step={0.01}
  bind:value={fontAccessor.adjust}
/>
