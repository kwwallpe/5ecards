<script lang="ts">
  import FontAdjustRange from '$lib/modules/ui/cards/font-adjust-range.svelte';
  import FontResetButton from '$lib/modules/ui/cards/font-reset-button.svelte';
  import FontSelect from '$lib/modules/ui/cards/font-select.svelte';
  import { FontRole } from '$lib/shared/fontState.svelte';

  interface Props {
    role: FontRole;
  }
  const { role }: Props = $props();
</script>

<div>
  <FontSelect {role} />
  <FontAdjustRange {role} />
  <FontResetButton {role} />
  <FontResetButton {role} all={true} />
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: top;
    gap: 10px;
  }
</style>
