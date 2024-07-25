# Community Event Planner

## Project Overview

Community Event Planner is a full-stack web application designed to facilitate the creation, management, and participation in local community events. This platform serves as a central hub for community members, event organizers, and administrators to coordinate and engage in various local activities.

## Features

- User authentication and role-based access control
- Event creation and management
- RSVP system with capacity management
- Location services with map integration
- Discussion boards for each event
- Notification system for event updates and reminders
- Advanced search and filter capabilities

## Tech Stack

- Frontend: React with TypeScript
- Backend: Node.js with Express.js, TypeScript
- Database: PostgreSQL
- ORM: TypeORM
- API: RESTful
- Authentication: JWT
- State Management: Redux Toolkit
- UI Framework: Material-UI or Chakra UI
- Runtime: Bun

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Bun runtime
- PostgreSQL
- Docker and Docker Compose (optional)

### Installation

1. Clone the repository:
```sh
git clone https://github.com/your-username/community-event-planner.git

cd community-event-planner
```

2. Install dependencies:
```sh
bun install
```

3. Set up environment variables:
- Copy `.env.example` to `.env` in both `client` and `server` directories
- Fill in the necessary environment variables

4. Start the development servers:
```sh
bu run dev
```

## Project Structure
```sh
community-event-planner/
├── client/                 # React frontend
├── server/                 # Node.js backend
├── shared/                 # Shared TypeScript types
├── docker-compose.yml
├── .github/
│   └── workflows/          # GitHub Actions workflows
└── README.md
```
## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who participate in this project.
- Special thanks to the open-source community for the amazing tools and libraries used in this project.
