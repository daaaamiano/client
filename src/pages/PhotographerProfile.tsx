import { useParams, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { 
  AppRoot, 
  Section, 
  IconButton,
  Avatar,
  Card,
  Placeholder
} from '@telegram-apps/telegram-ui'

const photographersData = {
  'ru-sagaris': {
    name: 'Ru Sagaris',
    specialty: 'Portrait & Fine Art Photography',
    location: 'Barcelona, Spain',
    bio: 'Ru Sagaris is a visionary photographer whose work transcends traditional boundaries between portrait and fine art photography. With an eye for the extraordinary in the ordinary, Ru captures intimate moments that reveal the profound beauty of human experience.',
    mood: 'Where shadows dance with light, stories unfold in silence.',
    philosophy: 'Photography is not about the camera, but about the connection between the photographer, the subject, and the moment. Every portrait is a conversation without words.',
    avatar: '/artists/ru-sagaris.jpg',
    portfolio: [
      '/portfolio1/DAMIANO-8259.jpg',
      '/portfolio1/DAMIANO-8257.jpg',
      '/portfolio1/DAMIANO-8357.jpg',
      '/portfolio1/DAMIANO-8286.jpg',
      '/portfolio1/DAMIANO-8288.jpg',
      '/portfolio1/DAMIANO-8315.jpg',
      '/portfolio1/DAMIANO-8314.jpg',
      '/portfolio1/DAMIANO-8348.jpg',
      '/portfolio1/DAMIANO-8254.jpg',
      '/portfolio1/DAMIANO-8349.jpg',
      '/portfolio1/DAMIANO-8256.jpg',
      '/portfolio1/DAMIANO-8278.jpg',
      '/portfolio1/DAMIANO-8355.jpg',
      '/portfolio1/DAMIANO-8255.jpg',
      '/portfolio1/DAMIANO-8331.jpg',
      '/portfolio1/DAMIANO BNW-8346.jpg',
      '/portfolio1/DAMIANO BNW-8267.jpg',
      '/portfolio1/DAMIANO BNW-8278.jpg',
      '/portfolio1/DAMIANO BNW-8261.jpg',
      '/portfolio1/DAMIANO BNW-8335.jpg',
      '/portfolio1/DAMIANO BNW-8263.jpg'
    ]
  }
}

export function PhotographerProfile() {
  const params = useParams({ from: '/photographer/$photographerId' })
  const { theme, toggleTheme } = useTheme()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const photographer = photographersData[params.photographerId as keyof typeof photographersData]

  if (!photographer) {
    return (
      <AppRoot appearance={theme} platform="ios">
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--tg-theme-bg-color)' }}>
          <Section>
            <Placeholder
              header="Photographer Not Found"
              description="The photographer you're looking for doesn't exist."
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                🚫
              </div>
            </Placeholder>
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <IconButton size="l">
                  ← Back to Home
                </IconButton>
              </Link>
            </div>
          </Section>
        </div>
      </AppRoot>
    )
  }

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        handleCloseModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <AppRoot appearance={theme} platform="ios">
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--tg-theme-bg-color)' }}>
        {/* Clean Header */}
        <Section>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '20px 16px' 
          }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <IconButton size="s">
                ←
              </IconButton>
            </Link>
            <IconButton
              size="s"
              onClick={toggleTheme}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </IconButton>
          </div>
        </Section>

        {/* Profile Card */}
        <Section>
          <div style={{ padding: '16px' }}>
            <Card>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                padding: '24px'
              }}>
                <Avatar
                  src={photographer.avatar}
                  size={80}
                  style={{ marginRight: '20px' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontSize: '20px', 
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
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span>📍 {photographer.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* Portfolio Grid */}
        <Section>
          <div style={{ padding: '16px' }}>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                color: 'var(--tg-theme-text-color)'
              }}>
                Portfolio
              </div>
              <div style={{ 
                color: 'var(--tg-theme-hint-color)', 
                fontSize: '14px'
              }}>
                {photographer.portfolio.length} photos
              </div>
            </div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '8px' 
            }}>
              {photographer.portfolio.map((imageSrc, index) => (
                <Card
                  key={index}
                  style={{ 
                    padding: '0',
                    cursor: 'pointer',
                    aspectRatio: '1',
                    overflow: 'hidden'
                  }}
                  onClick={() => handleImageClick(imageSrc)}
                >
                  <img
                    src={imageSrc}
                    alt={`Photo ${index + 1}`}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                    loading="lazy"
                  />
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Image Modal Overlay */}
        {isModalOpen && selectedImage && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={handleCloseModal}
          >
            {/* Close button */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px'
            }}>
              <IconButton
                size="l"
                onClick={handleCloseModal}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              >
                ✕
              </IconButton>
            </div>
            
            {/* Image */}
            <img
              src={selectedImage}
              alt="Portfolio image"
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Tap to close hint */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              Tap anywhere to close
            </div>
          </div>
        )}
      </div>
    </AppRoot>
  )
}