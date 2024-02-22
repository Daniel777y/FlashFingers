# FlashFingers

FlashFingers is a fun and interactive game to improve your typing speed and accuracy, offering immediate feedback on performance.

[Business Requirment](https://github.com/Daniel777y/FlashFingers/blob/main/BusinessRequirement.md)

[Video Introduction](https://youtu.be/nAP3YYFf4TI)

## Features

* **Diverse Challenges**: Each game gives you different paragraphs to type, and you can also upload your own paragraphs.
* **Real-Time Typing Feedback**: Provides real-time typing feedback with color highlights and sound effects for correct and incorrect keystrokes.
* **Progress Tracking**: Keep track of your improvement over time with a history of your wpm and accuracy.

## Getting Started

### Demo

[FlashFingers Github Page](Daniel777y.github.io)

### Run on your local machine:

```bash
git clone git@github.com:Daniel777y/FlashFingers.git
cd FlashFingers
npm install
npm run dev
```

Open your web browser and navigate to http://localhost:3000 to start playing!

## Usage

Simply start typing the text that appears on the screen by pressing any key.

The game offers endless, random paragraphs for continuous play.

If you lost the focus accidentally, please press the center area of the site.

You can upload your own paragraph in upload page, but you can only have a maximum of 100 paragraphs, and no more than 200 characters each.

The game records a maximum of 100 histories, and calculate your average wpm and accuracy based on these histories.

## TODO

- [ ] User and database
- [ ] Upload .json files
- [ ] Periodically update paragraphs
- [ ] Start a game from history or a single paragraph

## Contributing

Welcome contributions to FlashFingers! If you have suggestions for improvements or bug fixes, please open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/YourAmazingFeature).
3. Commit your changes (git commit -m 'Your amazing feature').
4. Push to the branch (git push origin feature/YourAmazingFeature).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Daniel777y/FlashFingers/blob/main/LICENSE) file for details.

## Citation

I used GPT4.0 for generating the game description in business requirement and sample paragraphs.

> **prompt:** I am creating a typing game. Specifically, I will provide paragraphs for users, and they will type those text. This game aims to help users improve their typing speed and accuracy. Users will have random paragraphs, get immediate feedbacks (colors and sounds), and can upload their own texts(paragraphs). The game can record the game histories, and will calculate the speed(wpm) and accuracy. Please describe all these features in short, and if you have other amazing ideas, feel free to show me.
> **response:** FlashFingers is an interactive typing game designed to enhance typing skills through engaging challenges and immediate feedback. Players are presented with random paragraphs to type as quickly and accurately as possible, offering a unique and dynamic experience with each session. The game provides real-time feedback through color-coded text and sound effects to indicate accuracy, along with a progress bar that reflects the player's average typing speed. Key features include the calculation of typing speed (words per minute, WPM) and accuracy, based on correct and incorrect keystrokes. Additionally, FlashFingers allows players to review their game history to track progress over time and offers the option to upload custom texts for a personalized typing experience.

> **prompt:** Please give me 20 paragraphs about whatever topics, and each of no more than 200 characters.
> **response:** Certainly! Here are 20 short paragraphs to use in your typing game. Each paragraph remains within the 200-character limit for concise practice sessions:
> "As dawn breaks, the sun paints the sky in hues of orange and pink, offering a moment of tranquility before the day begins."
> "In the heart of the forest, a gentle stream flows, whispering secrets of the ancient woods to those who listen closely."
> "The joy of reading is unparalleled, offering a gateway to untold worlds, each page a journey into the unknown."
> "Music dances through the air, a universal language that speaks directly to the soul, transcending all barriers."
> "The art of cooking is much like magic; with the right ingredients and a touch of creativity, one can conjure up delightful flavors."
> "Under the canopy of stars, the night whispers softly, a serene tapestry of darkness and light woven together."
> "With every step, the mountain reveals its challenges and rewards, teaching us that the summit is reached not by strength alone, but by perseverance."
> "The laughter of friends is a melody that uplifts the heart, turning moments into cherished memories that linger long after."
> "In the canvas of the desert, every grain of sand tells a story of time, wind, and the will to endure through the ages."
> "The sea's call is irresistible, its vast expanse a mystery that has drawn explorers and dreamers to its shores throughout history."
> "The quick brown fox jumps over the lazy dog. This classic pangram contains every letter of the alphabet."
> "A journey of a thousand miles begins with a single step. It's the first step that's often the hardest."
> "Bright stars twinkling in the night sky are like distant lighthouses guiding us through the darkness."
> "The serene beauty of a quiet lake is a reminder of the peace that nature offers to those who seek it."
> "In every walk with nature, one receives far more than he seeks. The great outdoors is a vast classroom."
> "Technology connects us across vast distances, making it possible to communicate instantly worldwide."
> "Music has the power to heal, to inspire, and to bring us together in harmony and understanding."
> "Reading opens doors to other worlds, allowing us to experience countless lives and adventures."
> "Sustainability is the key to our future on this planet and will guide us towards mindful living."
> "Art is the expression of the soul, transcending language and culture to touch the hearts of many."
