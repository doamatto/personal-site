# Personal Site
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=doamatto_personal-site&metric=alert_status)](https://sonarcloud.io/dashboard?id=doamatto_personal-site)
[![SCSS Linting](https://github.com/doamatto/doamatto.xyz/workflows/SCSS%20Linting/badge.svg)](https://github.com/doamatto/doamatto.xyz/actions?query=workflow%3A%22SCSS+Linting%22)

This utilises:
- **Zola** for page compilation,
- **Tailwind** for stylesheets,
- a self-hosted **Plausible** instance for analytics,
- **Vercel** for hosting; and:
- **GitHub Actions/SonarCloud** for code quality.

## Building
1. Install [Zola](https://www.getzola.org/documentation/getting-started/installation/)
2. Install [Node](https://nodejs.org) and [Yarn](https://yarnpkg.com) (this is used purely for Tailwind :/)
3. Install Node dependencies (`yarn`)
4. Build the site (`zola build`)
5. Build the CSS (`yarn run build:css`)

### Acknowledgments
This codebase is licensed under the BSD 3-Clause license. Content of the website, unless mentioned otherwise, are licensed under the CC-BY-4.0 license.
