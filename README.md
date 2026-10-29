# Webpost Scraper

Webpost Scraper is an Electron application designed for collecting posts from websites. application for effective web scraping.

## Development

Use Node.js 22.12 or later; verification uses Node.js 24. Run `npm ci`, then `npm run react:build` to type-check, lint, and build the renderer. The renderer uses Vite with relative asset paths so the packaged Electron application can load it from disk. `npm run dev` keeps the development server on port 3000.

The existing `react-app` lint rules are retained through `eslint-config-react-app`, with its TypeScript parser and plugin updated together for TypeScript 6. ESLint remains on version 8 because that configuration requires it.

`npm run electron:build` builds the Windows installer with publishing disabled. Linux verification uses `npx electron-builder --linux --dir --publish never`. Runtime verification intercepts automatic startup registration, update checks, and desktop notifications in a test fixture; it does not change those production behaviors. Windows installer execution and live update delivery are not verified.

## Features

- **Electron**: Facilitates the creation of native desktop applications using web technologies.
- **React**: Utilized for designing responsive and component-driven user interfaces.
- **Tailwind CSS**: Empowers rapid and scalable user interface development with its utility-first approach.

## License

Webpost Scraper is released under the GNU General Public License v3.0, adhering to the same open-source license as its foundation template. The full license details can be found in the [LICENSE](https://raw.githubusercontent.com/barbarbar338/electron-react-tailwind-template/main/LICENSE) file. Compliance with the GPL-3.0 license is required, which includes making the source of all derived works available under the same license terms.

## Acknowledgments

This project is based on the `electron-react-tailwind-template` by [barbarbar338](https://github.com/barbarbar338/electron-react-tailwind-template). Special thanks to the original author for developing the template that facilitated the creation of this application.

## Contributing

Contributions are welcome. To contribute, please fork the repository, make your changes, and submit a pull request. If you encounter issues or have suggestions, feel free to open an issue in this repository.

## Support

For assistance with setup or operation of Webpost Scraper, please open an issue in this GitHub repository. Your feedback helps improve the project for everyone.

---
