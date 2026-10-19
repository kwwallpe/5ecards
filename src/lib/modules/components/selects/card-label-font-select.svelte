<script lang="ts">
  import { getContext } from "svelte";
  import Select from "$lib/modules/components/inputs/select.svelte";
  import { FontAccessor, FontRole, fontSettingsContextKey } from "$lib/shared/fontState.svelte";

  const fontAccessor: FontAccessor = $derived(new FontAccessor(getContext(fontSettingsContextKey), FontRole.label));
</script>

<Select
  id="card-label-font-select"
  label="Card Label Font"
  options={FontAccessor.fontNames}
  bind:value={fontAccessor.font}
></Select>
