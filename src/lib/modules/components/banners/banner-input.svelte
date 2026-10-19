<script lang="ts">
  import Text from "../inputs/text.svelte";

  interface Props {
    id: string;
    textAlign?: "left" | "center" | "right";
    value?: string;
  }

  let { id, textAlign = "left", value = $bindable<string>() }: Props = $props();
</script>

<Text
  {id}
  fontWeight="bold"
  color="black"
  // headers/footers get the larger font from labels instead of inputs
  fontSize={"16px"}
  {textAlign}
  bind:value
/>
