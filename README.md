# FlashFingers
FlashFingers is a typing game based on React, whose goals are to help players improve their typing speed and memorize words or paragraphs.

## Business Requirement

### Nouns & Verbs

I will highlight **nouns in bold**, and *verbs in italics*.

* **Players** are *given* **random paragraphs** and *type* them as accurately and quickly as possible.
* Players will get **immediate feedbacks** like **colors** and **sounds** while typing.
* FlashFingers will *record* the **time** and thus *calculate* the **speed (words per minute, wpm)**.
* During the game, Players can see a *progress bar* based on their average speed.
* FlashFingers can also calculate **accuracy** based on the number of times they *enter* **incorrect characters**.
* Players can *browse* their **game history**, and *replay* a specific paragraph.
* Players can *upload* their own **texts and word sets** to the game.
* FlashFingers will *offer* different **fonts** for players.

### Target audience

People who want to learn typing, increase typing speed, and improve the literacy skills of a new language.

### Rules

* All the data are stored in local storage.
* In a game, the length of text is no more than 100 words (no more than 1000 characters).
* If a game is interrupted, it won't be recorded.
* If the player didn't has any record (new player), the game will not display the progress bar.
* In the initial stages of development, only support English character input.
* The game stores up to 100 records.
* All fonts in the game should be open source.
* Players can mute the game.
* Players can upload their own text and word sets by inputting or uploading .json files. If they upload .json file, they are suppose to format the file, and upload a single file at a time.

### Challenge Questions

- Can players only play on PC browsers? If so, should the interface be responsive?
- If players don't do any other actions, they just type, one paragraph by another paragraph, would the game end?
- In terms of accuracy and speed, does the game record them for each paragraph or for all the texts?
- The game will give texts randomly by default, can players sort the "laylist"at their will? (endless and myPlaylist)
- What is the maximum size of a file that players can upload?

### Summary of Classes, Attributes and Associations

## User stories

* Children vs Adults
* **Tech vs Non-Tech**
* **Juniors vs Seniors**
* Students vs Professionals
* English vs Non-English

Sophie is a 15-year-old high school student with interests in gaming and technology. Actually, she has grown up with digital devices and often chat with her friends online. She types very fast but she feels uncomfortable writing long essays and often get points off because of typos. As a motivated student, Sophie wants to improve her typing accuracy, because FlashFingers has statistics and she can track her progress.

Aaron is a 18-year-old football player, but unfortunately, he got injured and cannot continue playing. Therefore, he is seeking out another opportunity in office. As a non-tech student, he wants to practice typing in FlashFingers, because the immediate feedbacks make him feel immersive and the endless texts encourage him to practice for a long time without even realizing it.

Usher is a retired software developer, who always has passion for technology.

## Interface low level mockups

## UML Class Diagram
