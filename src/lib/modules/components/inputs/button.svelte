<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import Icon from "@iconify/svelte";

  export interface ButtonAppearance {
    title: string;
    icon?: string;
  }

  interface Props {
    id: string;
    label: string;
    appearances: ButtonAppearance[];
    onclick?: MouseEventHandler<HTMLButtonElement> | null;
  }

  let index = $state(0);
  let { id, label, appearances, onclick = null }: Props = $props();
  let { title, icon } = $derived(appearances[index]);
</script>

<button {id} aria-label={label} {title} {onclick}>
  <span class="btn-text">
    {#if icon}
      <span class="btn-icon"><Icon {icon} /></span>
    {/if}
    {title}
  </span>
</button>

<style>
  button span {
    font-size: 18px;
    vertical-align: middle;
  }

  button {
    appearance: button;
    position: relative;
    border-radius: 10px;
    padding: 0;
    width: 225px;
    height: 40px;
    color: indigo;
    border-style: solid;
    border-color: darkviolet;
    border-width: 2px 2px 4px 2px;
    background: white;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  @media (hover: hover) {
    button:hover {
      background: linear-gradient(ivory, mistyrose);
      transform: scale(105%);
    }
  }

  button:focus {
    background: linear-gradient(ivory, mistyrose);
    transform: scale(105%);
  }

  .btn-text {
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: left;
    align-items: center;
  }

  .btn-icon {
    margin: auto 10px auto 15px;
    font-size: 1.25em;
    height: 100%;
    display: flex;
    align-items: center;
  }

  button:active {
    border-width: 4px 2px 2px 2px;
    background: linear-gradient(mistyrose, ivory);
  }

  button:disabled {
    pointer-events: none;
    opacity: 0.65;
    color: gray;
    background: silver;
    box-shadow: none;
  }
</style>
