# Contributing to Community Event Planner

Thank you for considering contributing to the Community Event Planner project! Your support and involvement are greatly appreciated. This document outlines the guidelines for contributing to the project, ensuring a smooth and collaborative experience for everyone.

## Code of Conduct

By participating in this project, you agree to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand the expectations for our community.

## How to Contribute

### Reporting Issues

If you encounter any issues or have suggestions for new features, please submit an issue on our [GitHub Issues page](https://github.com/TheSaviourEking/community-event-planner/issues). When reporting an issue, please provide detailed information to help us understand and resolve it promptly.

### Forking the Repository

To contribute code, follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine:
    ```sh
    git clone https://github.com/TheSaviourEking/community-event-planner.git
    cd community-event-planner
    ```

### Setting Up the Development Environment

1. **Install dependencies**:
    ```sh
    bun install
    ```

2. **Set up environment variables**:
    - Copy `.env.example` to `.env` in both `client` and `server` directories.
    - Fill in the necessary environment variables.

3. **Start the development servers**:
    ```sh
    bun run dev
    ```

### Making Changes

1. **Create a new branch**:
    ```sh
    git checkout -b feature/your-feature-name
    ```

2. **Make your changes**:
    - Ensure your code follows the project's coding standards.
    - Include relevant tests for your changes.
    - Update documentation as needed.

3. **Commit your changes**:
    ```sh
    git commit -m "Add feature: your feature description"
    ```

4. **Push your branch to GitHub**:
    ```sh
    git push origin feature/your-feature-name
    ```

### Submitting a Pull Request

1. Go to the original repository and click on "New Pull Request".
2. Provide a clear and descriptive title for your pull request.
3. Describe your changes in detail in the description section.
4. Submit the pull request.

### Reviewing Pull Requests

- Pull requests will be reviewed by project maintainers.
- Provide constructive feedback if necessary.
- Pull requests should not be merged until they pass all required checks and receive approval from at least one maintainer.

## Style Guide

Please adhere to the following style guidelines:

- **JavaScript/TypeScript**: Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- **React Components**: Use functional components and hooks.
- **Commit Messages**: Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Testing

- Write tests for new features and bug fixes.
- Run all tests before submitting a pull request:
    ```sh
    bun run test
    ```

## Documentation

- Ensure that any new features or changes are documented in the relevant files.
- Update the README.md and any other documentation files as needed.

<!-- ## Communication

- Join our [Slack channel](https://join.slack.com/t/community-event-planner/shared_invite/...) for discussions and updates.
- Participate in bi-weekly meetings to stay informed about the project's progress and upcoming tasks. -->

## License

By contributing to the Community Event Planner project, you agree that your contributions will be licensed under the [LICENSE](LICENSE).

## Acknowledgments

Thank you to all contributors who participate in this project. Special thanks to the open-source community for the amazing tools and libraries used in this project.

---

We appreciate your contributions and look forward to collaborating with you!
