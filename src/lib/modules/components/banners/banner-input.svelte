<script lang="ts">
  import Text from '../inputs/text.svelte';

  interface Props {
    id: string;
    textAlign?: 'left' | 'center' | 'right';
  }

  let { id, textAlign = 'left' }: Props = $props();
</script>

<Text
  {id}
  fontWeight="bold"
  // headers/footers get the larger font from labels instead of inputs
  fontSize="16px"
  {textAlign}
/>
