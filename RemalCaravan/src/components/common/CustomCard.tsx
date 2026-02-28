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
        border: '1px solid',
        borderColor: 'rgba(25,118,210,0.12)',
        boxShadow: '0 10px 26px rgba(25,118,210,0.12)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 14px 30px rgba(25,118,210,0.2)',
        },
      }}
    >
      {image ? <CardMedia component="img" height="210" image={image} alt={title} sx={{ objectFit: 'cover' }} /> : null}
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