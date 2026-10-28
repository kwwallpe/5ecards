<script lang="ts">
  import { resolve } from '$app/paths';
  import folioPic from '$lib/assets/folio.webp';

  const folioAlt = `A trifold folio, where each panel holds a column of three index cards.
            Each index card contains some of the stats and info that go into a character.` as const;
</script>

## The Big Idea

[![{folioAlt}]({folioPic} "A trifold folio that holds 9 index cards")]({folioPic})

I've never found a character sheet for 5th edition D&D that I like. So I came up with my own solution. I print the cards from the [home page]({resolve('/')}) and place them in a 3 by 3 folio I made.

The cards use the [OpenDyslexic](https://opendyslexic.org/) by default. Please support them if you can!

The idea is to print the cards from the home page on US Letter card stock, cut them out, and write on them with pencil. You can also fill in the text boxes and/or check boxes for things you know are going to be permanent. I opted not to do any automatic calculation of stats/saves/etc. because I like to account for things like Cloaks of Protection without torturing myself. This is intended to be simple and mostly DIY.

This handles a few things that fit the way I like to play:

1. Each card is easily replaceaable with a regular index card.
2. They stand up better to erasing/rewriting than standard printer paper.
3. I can customize future cards depending on what class(es) I play. For example, adding some boxes for tracking used Ki points or Sorcery points.
4. There's plenty of extra room on the backs of cards for other notes or for info that isn't used that often.
5. I can tuck other cards behind the nine main ones, too. (There's a card tucked behind the middle column in the above photo that just lists all this character's spells.)
6. Skills organized by (color-coded) stats. Because that's how I think of them. I've been playing for some time, and I know what uses INT and what uses WIS.
7. Minimal "wasted" space on things I don't regularly use.
8. More lines than a standard index card.

Obviously, there are some things missing. It's very opinionated toward my specific style of play. It's also not
that hard to add/modify with an ink pen after printing. This is built with [svelte](https://svelte.dev/).

Dig it or don't! Cheers!
