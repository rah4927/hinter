# Problem Assistant

An AI-powered assistant for mathematical problems that provides progressive hints to help students develop their problem-solving skills.

## Features

- 🧮 Beautiful LaTeX rendering for mathematical problems
- 💡 Progressive hint system that adapts to student understanding
- 🤖 AI-powered assistance using GPT-4
- 💬 Interactive chat interface
- 📝 Support for complex mathematical notation
- 🎯 Focused on developing problem-solving skills rather than providing direct answers

## Tech Stack

- **Frontend**: Next.js 15.2 with TypeScript
- **Styling**: Tailwind CSS
- **Math Rendering**: MathJax 3
- **AI Integration**: OpenAI GPT-4
- **Development**: Turbopack for fast refresh

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- OpenAI API key

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hinter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── chat/         # Chat endpoint
│   └── page.tsx          # Main page
├── components/            # React components
│   ├── Chat.tsx          # Chat interface
│   └── Problem.tsx       # Problem display
├── lib/                   # Utility functions
│   ├── config.ts         # Configuration
│   └── llm.ts            # LLM integration
└── types/                # TypeScript definitions
    ├── global.d.ts       # Global type declarations
    └── index.ts         # Type definitions
```

## Development

### Adding New Problems

Problems are currently stored in the `problemsDb` Map in `src/app/api/chat/route.ts`. To add a new problem:

1. Add a new entry to the Map with a unique ID
2. Include the problem statement in LaTeX format
3. Provide a complete solution
4. Create a series of progressive hints

Example:
```typescript
['problem-id', {
  statement: `Let \\(\\mathbb{Z}^+\\) denote...`,
  solution: `The answer is...`,
  hints: [
    "First hint...",
    "Second hint...",
    // ...more hints
  ],
}]
```

### LaTeX Support

The application uses MathJax for rendering LaTeX. Supported delimiters:
- Inline math: `\\(` and `\\)` or `$` and `$`
- Display math: `\\[` and `\\]` or `$$` and `$$`

### AI Integration

The system uses GPT-4 to:
1. Understand student questions
2. Provide contextual hints
3. Track progress through the solution
4. Maintain mathematical rigor

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

[Add your chosen license here]

## Acknowledgments

- International Mathematical Olympiad for inspiring this project
- OpenAI for providing the GPT-4 API
- MathJax for LaTeX rendering capabilities
