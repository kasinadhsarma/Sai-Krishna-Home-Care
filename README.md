# Sai Krishna Home Care

[![GitHub license](https://img.shields.io/github/license/kasinadhsarma/Sai-Krishna-Home-Care)](https://github.com/kasinadhsarma/Sai-Krishna-Home-Care/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/kasinadhsarma/Sai-Krishna-Home-Care)](https://github.com/kasinadhsarma/Sai-Krishna-Home-Care/issues)
[![GitHub stars](https://img.shields.io/github/stars/kasinadhsarma/Sai-Krishna-Home-Care)](https://github.com/kasinadhsarma/Sai-Krishna-Home-Care/stargazers)

A modern healthcare service website built with Next.js, offering comprehensive home care services.

## Features

- 🏥 Complete healthcare service information
- 👥 Team member profiles and expertise
- 📱 Responsive design for all devices
- 🌓 Light/Dark mode support
- 📝 Contact form for inquiries
- ⚡ Fast page loads with Next.js
- 🎨 Modern UI components with Tailwind CSS

## Tech Stack

- Framework: Next.js 14
- Styling: Tailwind CSS
- UI Components: Shadcn/ui
- Form Handling: Server Actions
- Environment Variables Management
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/kasinadhsarma/Sai-Krishna-Home-Care.git
cd sai-krishna-home-care
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Configure environment variables
```bash
cp .env.example .env.local
```
Add your environment variables in `.env.local`

4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # UI components
│   ├── header.tsx      # Site header
│   └── ...             # Other components
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## Environment Variables

Required environment variables:

```
# Contact Form
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email contact@saihomecare.com or raise an issue in the repository.
