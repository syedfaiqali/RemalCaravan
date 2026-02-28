import { ReactNode } from 'react'
import { Card, CardContent, CardMedia, Chip, Stack, Typography, Box } from '@mui/material'

interface CustomCardProps {
  title: string
  description: string
  image?: string
  badge?: string
  subBadge?: string
  specs?: string[]
  children?: ReactNode
}

function CustomCard({ title, description, image, badge, subBadge, specs, children }: CustomCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1px solid rgba(25,118,210,0.12)',
        boxShadow: '0 12px 28px rgba(15,41,66,0.1)',
        transition: 'transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 18px 34px rgba(25,118,210,0.2)',
          borderColor: 'rgba(255,152,0,0.4)',
          '& .caravan-media': {
            transform: 'scale(1.04)',
          },
        },
      }}
    >
      {image ? (
        <CardMedia
          component="img"
          className="caravan-media"
          height="220"
          image={image}
          alt={title}
          sx={{ objectFit: 'cover', transition: 'transform 0.35s ease' }}
        />
      ) : null}
      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
        {(badge || subBadge) ? (
          <Stack direction="row" spacing={1} sx={{ mb: 1.4 }}>
            {badge ? <Chip size="small" label={badge} color="primary" /> : null}
            {subBadge ? <Chip size="small" label={subBadge} color="secondary" variant="outlined" /> : null}
          </Stack>
        ) : null}
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.6 }}>
          {description}
        </Typography>
        {specs && specs.length > 0 ? (
          <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ mb: 2 }}>
            {specs.map((spec) => (
              <Chip key={spec} label={spec} size="small" variant="outlined" />
            ))}
          </Stack>
        ) : null}
        <Box>{children}</Box>
      </CardContent>
    </Card>
  )
}

export default CustomCard
