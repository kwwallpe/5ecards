<script lang="ts">
  import Banner from "$lib/modules/components/banners/banner.svelte";
  import Card from "$lib/modules/cards/card.svelte";
  import Skill from "./skill-row.svelte";

  const id = "skills-card";
</script>

<Card {id}>
  <Banner>
    <div>Skills</div>
  </Banner>
  <div class="cols-2">
    <div class="skills">
      <Skill attr="str" name="Athletics" />
      <Skill attr="dex" name="Acrobatics" />
      <Skill attr="dex" name="Sleight o' Hand" />
      <Skill attr="dex" name="Stealth" />
      <Skill attr="int" name="Arcana" />
      <Skill attr="int" name="History" />
      <Skill attr="int" name="Investigation" />
      <Skill attr="int" name="Nature" />
      <Skill attr="int" name="Religion" noBorder={true} />
    </div>
    <div class="skills">
      <Skill attr="cha" name="Deception" />
      <Skill attr="cha" name="Intimidation" />
      <Skill attr="cha" name="Performance" />
      <Skill attr="cha" name="Persuasion" />
      <Skill attr="wis" name="Animal Stuff" />
      <Skill attr="wis" name="Insight" />
      <Skill attr="wis" name="Medicine" />
      <Skill attr="wis" name="Perception" />
      <Skill attr="wis" name="Survival" noBorder={true} />
    </div>
  </div>
</Card>

<style>
  .cols-2 {
    grid-template-columns: 1fr 1fr;
    column-gap: calc(1in / 16);
  }

  .skills {
    grid-template-rows: repeat(9, auto);
    font-size: 0.75em;
  }
</style>
