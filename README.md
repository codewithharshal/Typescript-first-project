# Reminder App

A simple reminder management application built with React, TypeScript, and Vite. This app allows users to add, view, and delete reminders using a mock API (JSONPlaceholder) for demonstration purposes.

## Features

- **Add Reminders**: Create new reminders with a title.
- **View Reminders**: Display a list of all reminders.
- **Delete Reminders**: Remove reminders from the list.
- **Responsive UI**: Styled with Bootstrap for a clean, mobile-friendly interface.
- **TypeScript Support**: Fully typed for better development experience and error prevention.
- **Mock API Integration**: Uses JSONPlaceholder for simulating backend operations.

## Tech Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.7
- **Styling**: Bootstrap 5.3.8
- **HTTP Client**: Axios 1.12.2
- **Linting**: ESLint with TypeScript support
- **Development**: Hot Module Replacement (HMR) enabled

## Project Structure

```
src/
├── components/
│   ├── NewReminder.tsx      # Form component for adding new reminders
│   └── ReminderList.tsx     # List component for displaying and deleting reminders
├── models/
│   └── Reminder.ts          # TypeScript interface for Reminder
├── services/
│   └── Reminder.ts          # Service class for API interactions
├── App.tsx                  # Main application component
├── App.css                  # Application-specific styles
├── index.css                # Global styles
└── main.tsx                 # Application entry point
```

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd ts-projects
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (or similar, check the terminal output).

## Usage

1. Open the app in your browser.
2. Enter a reminder title in the input field and click "Add Reminder".
3. View the list of reminders below.
4. Click the "Delete" button next to any reminder to remove it.

Note: This app uses JSONPlaceholder as a mock API, so changes are not persisted across sessions.

## Scripts

- `npm run dev`: Start the development server with hot reloading.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint to check for code issues.
- `npm run preview`: Preview the production build locally.

## API

The app interacts with the JSONPlaceholder API:

- **GET /todos**: Fetch all reminders.
- **POST /todos**: Add a new reminder.
- **DELETE /todos/:id**: Delete a reminder by ID.

## Development

### ESLint Configuration

The project uses ESLint with TypeScript support. To enable stricter type-aware rules, update `eslint.config.js` as shown in the original template.

### Expanding ESLint

For production apps, consider adding:

- `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- `eslint-plugin-react-x` and `eslint-plugin-react-dom` for React-specific rules.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Built following Mosh Hamedani's TypeScript tutorial.
- Uses JSONPlaceholder for mock API data.
- Styled with Bootstrap.

```

```
