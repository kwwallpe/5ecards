<script lang="ts">
  import { FontRole } from '$lib/shared/fontState.svelte';
  import FontResetButton from '$lib/modules/ui/cards/font-reset-button.svelte';
  import FontAdjustRange from '$lib/modules/ui/cards/font-adjust-range.svelte';
  import FontSelect from '$lib/modules/ui/cards/font-select.svelte';

  interface Props {
    role: FontRole;
  }
  const { role }: Props = $props();
</script>

<div>
  <FontSelect role={FontRole.label} />
  <FontAdjustRange role={FontRole.label} />
  <FontResetButton role={FontRole.label} />
  <FontResetButton role={FontRole.label} all={true} />
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
