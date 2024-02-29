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

[FlashFingers Github Page](https://daniel777y.github.io/)

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

You can find the prompts and responses [here](https://github.com/Daniel777y/FlashFingers/blob/main/GPTRecords.md);
