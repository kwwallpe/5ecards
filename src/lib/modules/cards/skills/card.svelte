<script lang="ts">
  import Card from '$lib/modules/cards/card.svelte';
  import Banner from '$lib/modules/components/banners/banner.svelte';

  import SkillRow from './skill-row.svelte';

  const id = 'skills-card';
</script>

<Card {id}>
  <Banner>
    <div>Skills</div>
  </Banner>
  <div class="cols-2">
    <div class="skills">
      <SkillRow attr="str" name="Athletics" />
      <SkillRow attr="dex" name="Acrobatics" />
      <SkillRow attr="dex" name="Sleight o' Hand" />
      <SkillRow attr="dex" name="Stealth" />
      <SkillRow attr="int" name="Arcana" />
      <SkillRow attr="int" name="History" />
      <SkillRow attr="int" name="Investigation" />
      <SkillRow attr="int" name="Nature" />
      <SkillRow attr="int" name="Religion" noBorder={true} />
    </div>
    <div class="skills">
      <SkillRow attr="cha" name="Deception" />
      <SkillRow attr="cha" name="Intimidation" />
      <SkillRow attr="cha" name="Performance" />
      <SkillRow attr="cha" name="Persuasion" />
      <SkillRow attr="wis" name="Animal Stuff" />
      <SkillRow attr="wis" name="Insight" />
      <SkillRow attr="wis" name="Medicine" />
      <SkillRow attr="wis" name="Perception" />
      <SkillRow attr="wis" name="Survival" noBorder={true} />
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
