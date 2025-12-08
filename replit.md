# Dra. Raquel Saraiva Landing Page

## Overview

This is a professional landing page for Dr. Raquel Saraiva, a specialist in orofacial harmonization, facial aesthetics, and oral rehabilitation in Brasília, Brazil. The site showcases her expertise, services, and the Orallis Unique clinic where she practices.

The application is built as a modern, responsive single-page website with smooth animations, elegant UI components, and a sophisticated design inspired by premium healthcare and beauty brands. All content is in Brazilian Portuguese, targeting a female demographic aged 30-45 years.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter (lightweight alternative to React Router).

**UI Component Library**: Shadcn/ui components based on Radix UI primitives, providing accessible and customizable components with consistent styling.

**Styling Approach**: 
- Tailwind CSS for utility-first styling
- CSS custom properties (CSS variables) for theming
- Design system based on Orallis brand colors (Verde Orallis, Caramelo/Dourado, Rosa Blush, etc.)
- Responsive design with mobile-first approach

**State Management**: TanStack Query (React Query) for server state management and data fetching.

**Component Architecture**:
- Modular section-based components (HeroSection, AboutSection, TreatmentsSection, etc.)
- Reusable UI primitives from shadcn/ui
- Custom hooks for scroll animations and responsive behavior
- Example components provided for development/testing purposes

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**API Strategy**: RESTful API with routes prefixed with `/api`. Currently minimal backend implementation with extensible route registration system.

**Build Process**: 
- ESBuild for server bundling with selective dependency bundling (allowlist approach)
- Vite for client bundling
- Production builds combine both into a single distributable

**Development Mode**: Vite middleware integration for HMR (Hot Module Replacement) and development server.

**Storage Layer**: Abstracted storage interface (IStorage) with in-memory implementation (MemStorage). Designed to be swappable with database implementations.

### Data Storage Solutions

**ORM**: Drizzle ORM configured for PostgreSQL dialect.

**Schema Design**: Simple user schema defined in `shared/schema.ts` with:
- UUID primary keys
- Username/password authentication fields
- Zod validation schemas for type safety

**Database Configuration**: Environment-based DATABASE_URL configuration, prepared for PostgreSQL deployment.

**Migration Strategy**: Drizzle Kit for schema migrations stored in `/migrations` directory.

**Current Implementation**: In-memory storage for development, with database schema ready for production deployment.

### Authentication and Authorization

**Current State**: Basic authentication scaffolding with user schema defined, but authentication middleware not yet implemented.

**Planned Implementation**: Passport.js dependencies included for local authentication strategy.

**Session Management**: express-session with connect-pg-simple for PostgreSQL-backed sessions (when database is connected).

### Design System and UX

**Typography**: Poppins/Montserrat family for modern, elegant look with clear hierarchy.

**Color Palette**: 
- Primary (Verde Orallis): `hsl(152 32% 45%)`
- Secondary (Caramelo): `hsl(30 35% 60%)`
- Accent (Rosa Blush): `hsl(350 35% 96%)`
- Neutral tones for backgrounds and text

**Animation Strategy**: 
- Intersection Observer-based scroll animations
- Smooth transitions on hover/active states
- Micro-interactions on buttons and cards
- Custom animation utilities in Tailwind config

**Accessibility**: Radix UI primitives ensure ARIA compliance and keyboard navigation support.

## External Dependencies

### Third-Party UI Libraries

- **Radix UI**: Comprehensive set of accessible UI primitives (dialogs, dropdowns, accordions, etc.)
- **Lucide React**: Icon library for modern, consistent iconography
- **React Icons**: Additional icons, specifically Font Awesome for WhatsApp icon
- **cmdk**: Command palette component
- **Embla Carousel**: Carousel/slider functionality for testimonials and results sections

### Development Tools

- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the application
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **ESBuild**: High-performance JavaScript bundler for production

### Form Handling and Validation

- **React Hook Form**: Form state management
- **Zod**: Runtime type validation and schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Utilities

- **class-variance-authority**: Type-safe variant styling
- **clsx** + **tailwind-merge**: Conditional className composition
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation

### Backend Services (Prepared but Not Active)

- **PostgreSQL**: Relational database (via pg driver)
- **Drizzle ORM**: Type-safe SQL query builder
- **express-session**: Session management
- **connect-pg-simple**: PostgreSQL session store

### Communication Integrations

**WhatsApp**: Direct integration via WhatsApp Web API link (`https://wa.me/5561982184800`) for appointment scheduling and customer contact.

**Forms**: Contact form component prepared for backend integration (currently mock implementation).

### Deployment Considerations

- Environment variables expected: `DATABASE_URL`, `NODE_ENV`
- Replit-specific plugins included for development environment
- Static file serving from `dist/public` in production
- Fallback routing to index.html for SPA behavior