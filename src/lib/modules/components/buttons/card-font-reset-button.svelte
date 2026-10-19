<script lang="ts">
  import { getContext } from "svelte";

  import Button from "$lib/modules/components/inputs/button.svelte";
  import type { ButtonAppearance } from "$lib/modules/components/inputs/button.svelte";
  import { FontRole, FontAccessor, fontSettingsContextKey } from "$lib/shared/fontState.svelte";

  interface Props {
    role: FontRole;
    all?: boolean;
  }

  let { role, all = false }: Props = $props();

  let roleText = $derived(String(role).toLowerCase());
  let resetType = $derived(all ? "all" : "current");
  let id = $derived(`card-${role}-reset-${resetType}-button`);
  let label = $derived(
    all ? `Reset all ${roleText} font adjustments` : `Reset the ${roleText} adjustment for the current font`,
  );
  let title = $derived(all ? "Reset All" : "Reset Adjustment");
  let icon = $derived(all ? "pajamas:clear-all" : "pajamas:clear");
  let appearances: ButtonAppearance[] = $derived([{ title: title, icon: icon }]);

  const fontAccessor: FontAccessor = $derived(new FontAccessor(getContext(fontSettingsContextKey), role));

  function handleClick() {
    fontAccessor.resetAdjustment(all);
  }
</script>

<Button {id} {label} {appearances} onclick={() => handleClick()} />
