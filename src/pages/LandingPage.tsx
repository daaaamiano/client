import { Link } from '@tanstack/react-router'
import { useTheme } from '../contexts/ThemeContext'
import { 
  AppRoot, 
  Section, 
  IconButton,
  Avatar,
  Card,
  Divider
} from '@telegram-apps/telegram-ui'

const photographers = [
  {
    id: 'ru-sagaris',
    name: 'Ru Sagaris',
    specialty: 'Shibari & Art Photography',
    bio: 'Capturing the essence of humanity through intimate portraits and evocative fine art imagery.',
    mood: 'Where shadows dance with light, stories unfold in silence.',
    avatar: '/artists/ru-sagaris.jpg',
    portfolioCount: 21
  }
]

export function LandingPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <AppRoot
      appearance={theme}
      platform="ios"
    >
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--tg-theme-bg-color)' }}>
        {/* Clean Header */}
        <Section>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '20px 16px' 
          }}>
            <div style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: 'var(--tg-theme-text-color)'
            }}>
              📸 Lens
            </div>
            <IconButton
              size="s"
              onClick={toggleTheme}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </IconButton>
          </div>
        </Section>

        {/* Photographer Cards Grid */}
        <Section>
          <div style={{ 
            padding: '16px',
            display: 'grid', 
            gap: '16px' 
          }}>
            {photographers.map((photographer) => (
              <Link
                key={photographer.id}
                to="/photographer/$photographerId"
                params={{ photographerId: photographer.id }}
                style={{ textDecoration: 'none' }}
              >
                <Card style={{ padding: '0', overflow: 'hidden' }}>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px'
                  }}>
                    <Avatar
                      src={photographer.avatar}
                      size={64}
                      style={{ marginRight: '16px' }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: 'var(--tg-theme-text-color)',
                        marginBottom: '4px'
                      }}>
                        {photographer.name}
                      </div>
                      <div style={{ 
                        color: 'var(--tg-theme-accent-text-color)', 
                        fontSize: '14px',
                        marginBottom: '8px'
                      }}>
                        {photographer.specialty}
                      </div>
                      <div style={{ 
                        color: 'var(--tg-theme-hint-color)', 
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span>📷 {photographer.portfolioCount} photos</span>
                        <span>•</span>
                        <span>View Portfolio</span>
                      </div>
                    </div>
                    <div style={{ 
                      color: 'var(--tg-theme-hint-color)',
                      fontSize: '18px'
                    }}>
                      ›
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>

        {/* Quick Stats Card */}
        <Section>
          <div style={{ padding: '0 16px 16px' }}>
            <Card>
              <div style={{ 
                padding: '20px',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '32px',
                  marginBottom: '8px'
                }}>
                  ✨
                </div>
                <div style={{ 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  color: 'var(--tg-theme-text-color)',
                  marginBottom: '4px'
                }}>
                  Curated Gallery
                </div>
                <div style={{ 
                  color: 'var(--tg-theme-hint-color)', 
                  fontSize: '14px'
                }}>
                  Handpicked visual stories
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </div>
    </AppRoot>
  )
}