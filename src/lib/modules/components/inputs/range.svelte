<script lang="ts">
  import type { ChangeEventHandler } from "svelte/elements";

  interface Props {
    id: string;
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: any;
    onchange?: ChangeEventHandler<HTMLInputElement> | null;
  }

  let {
    id,
    label = "",
    min = 1,
    max = 100,
    step = 1,
    value = $bindable<string>(),
    onchange: onchange = null,
  }: Props = $props();

  let percent = $derived((value * 100).toFixed(0) + "%");
</script>

<div class="range">
  <div class="info">
    <div>
      <label for={id}>{label}</label>
    </div>
    <div>{percent}</div>
  </div>
  <input type="range" {id} {min} {max} {step} bind:value {onchange} />
</div>

<style>
  .info {
    display: grid;
    grid-template-columns: 1fr fit-content(1em);
    margin-bottom: 5px;
  }
  .info div:last-of-type {
    text-align: right;
  }
  label {
    display: inline;
    font-size: 19px;
    font-weight: bold;
    padding: 0;
    color: indigo;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    user-select: none;
    justify-content: center;
    align-items: left;
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    background-image: linear-gradient(linen, darkorchid);
    border: 2px solid indigo;
    border-radius: 5px;
    height: 1.25rem;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -0.4125rem;
    background-color: linen;
    border: 2px solid darkorchid;
    border-radius: 0.5rem;
    height: 2rem;
    width: 15px;
  }

  input[type="range"]:focus::-webkit-slider-thumb {
    outline: 3px solid darkorchid;
    outline-offset: 0.125rem;
  }

  /*********** Firefox styles ***********/
  /* slider track */
  input[type="range"]::-moz-range-track {
    background-color: plum;
    border-radius: 0rem;
    height: 1.5rem;
  }

  /* slider thumb */
  input[type="range"]::-moz-range-thumb {
    background-color: darkorchid;
    border: none; /*Removes extra border that FF applies*/
    border-radius: 0.5rem;
    height: 2rem;
    width: 10.5px;
  }

  input[type="range"]:focus::-moz-range-thumb {
    outline: 3px solid linen;
    outline-offset: 0.125rem;
  }
</style>
