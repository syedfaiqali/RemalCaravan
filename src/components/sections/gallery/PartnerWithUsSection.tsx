import { Box, Button, ButtonBase, Container, Grid, Stack, Typography, TextField, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, MenuItem, Select, InputAdornment } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import MotionSection from '../../common/MotionSection'
import heroImage from '../../../assets/caravan_hero_banner_1775771753954.png'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

function PartnerWithUsSection() {
  const [activePartner, setActivePartner] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactDates, setContactDates] = useState<Record<string, Dayjs | null>>({})

  const partnerCards = [
    {
      id: 'campsite',
      title: 'Campsite Partner',
      description: 'List your campsite, welcome premium RV travelers, and grow bookings year-round.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
      detailTitle: 'Campsite Partner',
      detailSubtitle:
        'I have a beautiful property in a tranquil location and I want to collaborate with Remal Caravans for parking, stays, and guest facilities.',
      detailPoints: [
        'Showcase your location to verified RV travelers.',
        'Get booking support, pricing guidance, and marketing boosts.',
        'Receive consistent inquiries during peak seasons.',
      ],
    },
    {
      id: 'dealer',
      title: 'Dealer Partner',
      description: 'Grow sales with co-marketing, training, and a steady customer pipeline.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop',
      detailTitle: 'Dealer Partner',
      detailSubtitle:
        'I want to collaborate with Remal Caravans to sell or lease RVs with strong brand support and qualified leads.',
      detailPoints: [
        'Access a curated customer pipeline.',
        'Receive sales enablement and product training.',
        'Run joint campaigns and showroom activations.',
      ],
    },
    {
      id: 'retail',
      title: 'Retail Partner',
      description: 'Place your store in front of RV travelers and expand your local reach.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
      detailTitle: 'Retail Partner',
      detailSubtitle:
        'I want my retail brand featured for travelers who need supplies, gear, and essentials on the road.',
      detailPoints: [
        'Drive foot traffic to your store locations.',
        'Feature your offers inside partner trips.',
        'Build long-term loyalty with RV guests.',
      ],
    },
    {
      id: 'make',
      title: 'Make a Caravan',
      description: 'Build or customize caravans with our design and engineering support.',
      image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1000&auto=format&fit=crop',
      detailTitle: 'Make a Caravan',
      detailSubtitle:
        'I want to build or customize caravans with Remal Caravans and deliver premium standards.',
      detailPoints: [
        'Access design guidelines and RV build specs.',
        'Coordinate materials, fittings, and interior standards.',
        'Launch builds with Remal brand support.',
      ],
    },
    {
      id: 'attach',
      title: 'Attach my Caravan',
      description: 'List your caravan under our fleet and let us handle bookings and support.',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop',
      detailTitle: 'Attach my Caravan',
      detailSubtitle:
        'I have my own caravan and want to attach it with Remal Caravans for managed bookings and care.',
      detailPoints: [
        'Get professional photography and listing support.',
        'Receive verified bookings and maintenance scheduling.',
        'Track monthly performance with clear reporting.',
      ],
    },
    {
      id: 'agent',
      title: 'Become an Agent',
      description: 'Represent Remal Caravans in your area and earn on every successful booking.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop',
      detailTitle: 'Become an Agent',
      detailSubtitle:
        'I want to represent Remal Caravans locally and grow bookings with my network.',
      detailPoints: [
        'Earn rewards for every confirmed booking.',
        'Get marketing collateral and training.',
        'Build long-term partnerships in your region.',
      ],
    },
  ]

  const renderPartnerForm = (partnerId: string) => {
    const renderContactDatePicker = (label: string, name: string) => (
      <DatePicker
        value={contactDates[`${partnerId}-${name}`] ?? null}
        onChange={(date) =>
          setContactDates((prev) => ({
            ...prev,
            [`${partnerId}-${name}`]: date,
          }))
        }
        format="DD/MM/YYYY"
        slotProps={{
          textField: {
            fullWidth: true,
            name,
            label,
            InputLabelProps: { shrink: true },
          },
        }}
        minDate={dayjs()}
      />
    )

    switch (partnerId) {
      case 'campsite':
        return (
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                <TextField fullWidth name="name" label="1. Name" required />
                <TextField fullWidth name="campsite_property_name" label="2. Campsite Property Name" required />
                <TextField
                  fullWidth
                  label="3. Contact Number"
                  required
                  name="contact_number"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    target.value = target.value.replace(/\\D/g, '')
                  }}
                  InputProps={{ startAdornment: <InputAdornment position="start">+971</InputAdornment> }}
                />
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label="4. Email Address"
                  required
                  inputProps={{ pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$' }}
                />
                <TextField fullWidth name="campsite_address" label="5. Complete Address of the Campsite Property" required />
                <TextField fullWidth name="campsite_website" label="6. Website of the Property (if any)" />
                <TextField fullWidth name="campsite_size" label="7. Size of the proposed location" />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                <TextField fullWidth name="nearest_tourist_destinations" label="8. Nearest Famous Tourist Destinations" />
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    9. Well Connected with Motorable Road
                  </Typography>
                  <RadioGroup row name="motorable_road">
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    10. Running Water Facility Available
                  </Typography>
                  <RadioGroup row name="running_water">
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Box>
                {renderContactDatePicker('11. Suitable date & time for contact', 'contact_date')}
                <RadioGroup row name="contact_time">
                  <FormControlLabel value="8-11" control={<Radio />} label="8am-11am" />
                  <FormControlLabel value="11-2" control={<Radio />} label="11am-2pm" />
                  <FormControlLabel value="2-5" control={<Radio />} label="2pm-5pm" />
                  <FormControlLabel value="5-8" control={<Radio />} label="5pm-8pm" />
                </RadioGroup>
                <TextField
                  fullWidth
                  name="campsite_photos"
                  label="12. Upload recent pictures of the proposed campsite"
                  type="file"
                  inputProps={{ accept: 'image/png, image/jpeg' }}
                  helperText="Only PNG or JPG. One image allowed."
                />
              </Stack>
            </Grid>
          </Grid>
        )
      case 'dealer':
        return (
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                <TextField fullWidth name="name" label="1. Name" required />
                <TextField
                  fullWidth
                  label="2. Contact Number"
                  required
                  name="contact_number"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    target.value = target.value.replace(/\\D/g, '')
                  }}
                  InputProps={{ startAdornment: <InputAdornment position="start">+971</InputAdornment> }}
                />
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label="3. Email Address"
                  required
                  inputProps={{ pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$' }}
                />
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    4. I have my own office and parking space at the proposed location
                  </Typography>
                  <RadioGroup row name="has_office_and_parking">
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    5. Willing to start with number of caravans
                  </Typography>
                  <RadioGroup row name="start_caravan_count">
                    <FormControlLabel value="1-3" control={<Radio />} label="1-3" />
                    <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
                    <FormControlLabel value="5-8" control={<Radio />} label="5-8" />
                    <FormControlLabel value="8+" control={<Radio />} label="8 & above" />
                  </RadioGroup>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                {renderContactDatePicker('6. Suitable date & time for contact', 'contact_date')}
                <RadioGroup row name="contact_time">
                  <FormControlLabel value="8-11" control={<Radio />} label="8am-11am" />
                  <FormControlLabel value="11-2" control={<Radio />} label="11am-2pm" />
                  <FormControlLabel value="2-5" control={<Radio />} label="2pm-5pm" />
                  <FormControlLabel value="5-8" control={<Radio />} label="5pm-8pm" />
                </RadioGroup>
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    7. I have experience in any of the following fields
                  </Typography>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox name="experience_fields" value="Tour & Travel" />} label="Tour & Travel" />
                    <FormControlLabel control={<Checkbox name="experience_fields" value="Car Rental Business" />} label="Car Rental Business" />
                    <FormControlLabel control={<Checkbox name="experience_fields" value="Automobile Dealership" />} label="Automobile Dealership" />
                    <FormControlLabel control={<Checkbox name="experience_fields" value="Hotel / Guest House / Resort / Cottage Business" />} label="Hotel / Guest House / Resort / Cottage Business" />
                    <FormControlLabel control={<Checkbox name="experience_fields" value="Managing Foreign Travellers" />} label="Managing Foreign Travellers" />
                  </FormGroup>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        )
      case 'retail':
        return (
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                <TextField fullWidth name="name" label="1. Name" required />
                <TextField
                  fullWidth
                  label="2. Contact Number"
                  required
                  name="contact_number"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    target.value = target.value.replace(/\\D/g, '')
                  }}
                  InputProps={{ startAdornment: <InputAdornment position="start">+971</InputAdornment> }}
                />
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label="3. Email Address"
                  required
                  inputProps={{ pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$' }}
                />
                <TextField fullWidth name="business_address" label="4. Complete Address of Business / Residence with PIN Code" required />
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    5. I want to avail the Depreciation benefit
                  </Typography>
                  <RadioGroup row name="depreciation_benefit">
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    6. I have my own Parking Facility
                  </Typography>
                  <RadioGroup row name="own_parking_facility">
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                {renderContactDatePicker('6. Suitable date & time for contact', 'contact_date')}
                <RadioGroup row name="contact_time">
                  <FormControlLabel value="8-11" control={<Radio />} label="8am-11am" />
                  <FormControlLabel value="11-2" control={<Radio />} label="11am-2pm" />
                  <FormControlLabel value="2-5" control={<Radio />} label="2pm-5pm" />
                  <FormControlLabel value="5-8" control={<Radio />} label="5pm-8pm" />
                </RadioGroup>
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    7. From which source you have heard about Remal Caravans
                  </Typography>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox name="heard_from" value="Social Media" />} label="Social Media" />
                    <FormControlLabel control={<Checkbox name="heard_from" value="Family and Friends" />} label="Family and Friends" />
                    <FormControlLabel control={<Checkbox name="heard_from" value="I opted for the services" />} label="I opted for the services" />
                    <FormControlLabel control={<Checkbox name="heard_from" value="Any other platform, please specify" />} label="Any other platform, please specify" />
                  </FormGroup>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        )
      case 'make':
        return (
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                <TextField fullWidth name="name" label="1. Name" required />
                <TextField
                  fullWidth
                  label="2. Contact Number"
                  required
                  name="contact_number"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    target.value = target.value.replace(/\\D/g, '')
                  }}
                  InputProps={{ startAdornment: <InputAdornment position="start">+971</InputAdornment> }}
                />
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label="3. Email Address"
                  required
                  inputProps={{ pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$' }}
                />
                <TextField fullWidth name="home_address" label="4. Home Address" required />
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    5. Estimated Budget
                  </Typography>
                  <RadioGroup row name="estimated_budget">
                    <FormControlLabel value="0-25" control={<Radio />} label="0-25 Lacs" />
                    <FormControlLabel value="25-50" control={<Radio />} label="25-50 Lacs" />
                    <FormControlLabel value="50-1cr" control={<Radio />} label="50-1 Cr" />
                    <FormControlLabel value="5cr+" control={<Radio />} label="5 Cr+" />
                  </RadioGroup>
                </Box>
                <Select
                  fullWidth
                  name="people_count"
                  defaultValue=""
                  displayEmpty
                  renderValue={(selected) => (selected ? selected : '6. For number of people')}
                >
                  <MenuItem value="" disabled>6. For number of people</MenuItem>
                  <MenuItem value="2-3">2-3</MenuItem>
                  <MenuItem value="4-5">4-5</MenuItem>
                  <MenuItem value="6+">6+</MenuItem>
                </Select>
                <Select
                  fullWidth
                  name="time_available_months"
                  defaultValue=""
                  displayEmpty
                  renderValue={(selected) => (selected ? selected : '7. Estimated time available (in months)')}
                >
                  <MenuItem value="" disabled>7. Estimated time available (in months)</MenuItem>
                  <MenuItem value="1-2">1-2 months</MenuItem>
                  <MenuItem value="3-4">3-4 months</MenuItem>
                  <MenuItem value="5+">5+ months</MenuItem>
                </Select>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                {renderContactDatePicker('8. Suitable date & time for contact', 'contact_date')}
                <RadioGroup row name="contact_time">
                  <FormControlLabel value="8-11" control={<Radio />} label="8am-11am" />
                  <FormControlLabel value="11-2" control={<Radio />} label="11am-2pm" />
                  <FormControlLabel value="2-5" control={<Radio />} label="2pm-5pm" />
                  <FormControlLabel value="5-8" control={<Radio />} label="5pm-8pm" />
                </RadioGroup>
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    9. Size of the proposed caravan
                  </Typography>
                  <RadioGroup row name="caravan_size">
                    <FormControlLabel value="small" control={<Radio />} label="Small" />
                    <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                    <FormControlLabel value="large" control={<Radio />} label="Large" />
                    <FormControlLabel value="xl" control={<Radio />} label="Extra Large" />
                  </RadioGroup>
                </Box>
                <TextField fullWidth name="specific_requirements" label="10. Specific requirements (if any)" />
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    11. Facilities wanted in my Caravan
                  </Typography>
                  <FormGroup
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: 'repeat(1, max-content)', sm: 'repeat(2, max-content)', md: 'repeat(3, max-content)' },
                      columnGap: 3,
                      rowGap: 1,
                      alignItems: 'center',
                      '& .MuiFormControlLabel-label': {
                        whiteSpace: 'nowrap',
                      },
                    }}
                  >
                    <FormControlLabel sx={{ width: 'max-content' }} control={<Checkbox name="caravan_facilities" value="Bed option" />} label="Bed option" />
                    <FormControlLabel sx={{ width: 'max-content' }} control={<Checkbox name="caravan_facilities" value="Washroom" />} label="Washroom" />
                    <FormControlLabel sx={{ width: 'max-content' }} control={<Checkbox name="caravan_facilities" value="Kitchen" />} label="Kitchen" />
                    <FormControlLabel sx={{ width: 'max-content' }} control={<Checkbox name="caravan_facilities" value="Lounge" />} label="Lounge" />
                    <FormControlLabel sx={{ width: 'max-content' }} control={<Checkbox name="caravan_facilities" value="Dining Options" />} label="Dining Options" />
                    <FormControlLabel sx={{ width: 'max-content' }} control={<Checkbox name="caravan_facilities" value="Storage" />} label="Storage" />
                    <FormControlLabel sx={{ width: 'max-content' }} control={<Checkbox name="caravan_facilities" value="Heating" />} label="Heating" />
                    <FormControlLabel sx={{ width: 'max-content' }} control={<Checkbox name="caravan_facilities" value="Gadgets" />} label="Gadgets" />
                    <FormControlLabel sx={{ width: 'max-content' }} control={<Checkbox name="caravan_facilities" value="Water Tanks" />} label="Water Tanks" />
                    <FormControlLabel sx={{ width: 'max-content' }} control={<Checkbox name="caravan_facilities" value="Seating and Upholstery" />} label="Seating and Upholstery" />
                    <FormControlLabel sx={{ width: 'max-content' }} control={<Checkbox name="caravan_facilities" value="Entertainment System" />} label="Entertainment System" />
                  </FormGroup>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        )
      case 'attach':
        return (
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                <TextField fullWidth name="name" label="1. Name" required />
                <TextField
                  fullWidth
                  label="2. Contact Number"
                  required
                  name="contact_number"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    target.value = target.value.replace(/\\D/g, '')
                  }}
                  InputProps={{ startAdornment: <InputAdornment position="start">+971</InputAdornment> }}
                />
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label="3. Email Address"
                  required
                  inputProps={{ pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$' }}
                />
                <TextField fullWidth name="caravan_model_details" label="4. Model Name & Details of the Caravan" required />
                <TextField
                  fullWidth
                  name="vehicle_manufacture_year"
                  label="5. Year of Manufacturing of the Vehicle"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    target.value = target.value.replace(/\D/g, '')
                  }}
                />
                <TextField
                  fullWidth
                  name="caravan_fabrication_year"
                  label="6. Year of Fabrication of the Caravan"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    target.value = target.value.replace(/\D/g, '')
                  }}
                />
                <Select
                  fullWidth
                  name="registration_type"
                  defaultValue=""
                  displayEmpty
                  renderValue={(selected) => (selected ? selected : '7. Registration: Private or Commercial')}
                >
                  <MenuItem value="" disabled>7. Registration: Private or Commercial</MenuItem>
                  <MenuItem value="private">Private</MenuItem>
                  <MenuItem value="commercial">Commercial</MenuItem>
                </Select>
                <TextField fullWidth name="insurance_valid_till" label="8. Insurance Valid Till" placeholder="mm/dd/yyyy" />
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    9. Condition of the Caravan
                  </Typography>
                  <RadioGroup row name="caravan_condition">
                    <FormControlLabel value="good" control={<Radio />} label="Good" />
                    <FormControlLabel value="fair" control={<Radio />} label="Fair" />
                    <FormControlLabel value="best" control={<Radio />} label="Best" />
                  </RadioGroup>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                <Select
                  fullWidth
                  name="sitting_capacity"
                  defaultValue=""
                  displayEmpty
                  renderValue={(selected) => (selected ? selected : '10. Sitting Capacity')}
                >
                  <MenuItem value="" disabled>10. Sitting Capacity</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                </Select>
                <Select
                  fullWidth
                  name="sleeping_capacity"
                  defaultValue=""
                  displayEmpty
                  renderValue={(selected) => (selected ? selected : '11. Sleeping Capacity')}
                >
                  <MenuItem value="" disabled>11. Sleeping Capacity</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="6">6</MenuItem>
                </Select>
                <TextField fullWidth name="amenities" label="12. Amenities inside the Caravan" />
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    13. Back-Up Gen-set available
                  </Typography>
                  <RadioGroup row name="backup_genset">
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </Box>
                <TextField fullWidth name="other_issues" label="14. Any other issues with the Caravan" />
                {renderContactDatePicker('15. Suitable date & time for contact', 'contact_date')}
                <RadioGroup row name="contact_time">
                  <FormControlLabel value="8-11" control={<Radio />} label="8am-11am" />
                  <FormControlLabel value="11-2" control={<Radio />} label="11am-2pm" />
                  <FormControlLabel value="2-5" control={<Radio />} label="2pm-5pm" />
                  <FormControlLabel value="5-8" control={<Radio />} label="5pm-8pm" />
                </RadioGroup>
                <TextField
                  fullWidth
                  name="caravan_photos"
                  label="16. Upload recent pictures of the proposed Caravan"
                  type="file"
                  inputProps={{ accept: 'image/png, image/jpeg' }}
                  helperText="Only PNG, JPG or JPEG. One image allowed."
                />
              </Stack>
            </Grid>
          </Grid>
        )
      case 'agent':
        return (
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                <TextField fullWidth name="name" label="1. Name" required />
                <TextField fullWidth name="company_name" label="2. Company Name" required />
                <TextField
                  fullWidth
                  label="3. Contact Number"
                  required
                  name="contact_number"
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    target.value = target.value.replace(/\\D/g, '')
                  }}
                  InputProps={{ startAdornment: <InputAdornment position="start">+971</InputAdornment> }}
                />
                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  label="4. Email Address"
                  required
                  inputProps={{ pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$' }}
                />
                <TextField fullWidth name="office_address" label="5. Complete Address of the Office" required />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                <TextField fullWidth name="company_website" label="6. Website of the Company (if any)" />
                <TextField fullWidth name="years_in_business" label="7. No. of Years into Tours & Travel Business" />
                {renderContactDatePicker('8. Suitable date & time for contact', 'contact_date')}
                <RadioGroup row name="contact_time">
                  <FormControlLabel value="8-11" control={<Radio />} label="8am-11am" />
                  <FormControlLabel value="11-2" control={<Radio />} label="11am-2pm" />
                  <FormControlLabel value="2-5" control={<Radio />} label="2pm-5pm" />
                  <FormControlLabel value="5-8" control={<Radio />} label="5pm-8pm" />
                </RadioGroup>
                <Box>
                  <Typography sx={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, mb: 1 }}>
                    9. Expected Annual Business Volume with Remal Caravans
                  </Typography>
                  <RadioGroup row name="expected_annual_volume">
                    <FormControlLabel value="1-5" control={<Radio />} label="1-5 Cr" />
                    <FormControlLabel value="5-10" control={<Radio />} label="5-10 Cr" />
                    <FormControlLabel value="10-20" control={<Radio />} label="10-20 Cr" />
                    <FormControlLabel value="20+" control={<Radio />} label="20 Cr+" />
                  </RadioGroup>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        )
      default:
        return null
    }
  }

  const handlePartnerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!activePartner) return

    const partner = partnerCards.find((card) => card.id === activePartner)
    const formData = new FormData(e.currentTarget)
    const payload: Record<string, any> = {}

    formData.forEach((value, key) => {
      if (value instanceof File) {
        const fileName = value && value.name ? value.name : ''
        if (!payload[key]) {
          payload[key] = fileName
        } else if (Array.isArray(payload[key])) {
          payload[key].push(fileName)
        } else {
          payload[key] = [payload[key], fileName]
        }
        return
      }

      if (!payload[key]) {
        payload[key] = value
        return
      }

      if (Array.isArray(payload[key])) {
        payload[key].push(value)
      } else {
        payload[key] = [payload[key], value]
      }
    })

    setIsSubmitting(true)

    const SERVICE_ID = "service_6l2k1k9"
    const TEMPLATE_ID = "template_5jyv2h6"
    const PUBLIC_KEY = "yFMFYlO4Y0j259hfO"

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: String(payload.name || ''),
          reply_to: String(payload.email || ''),
          email: String(payload.email || ''),
          phone: String(payload.contact_number || ''),
          subject: `Partner Inquiry - ${partner?.title || 'Partner'}`,
          message: JSON.stringify(payload, null, 2),
          partner_type: partner?.title || '',
          to_name: "Remal Caravan Admin",
        },
        PUBLIC_KEY
      )
      if (response?.status === 200) {
        toast.success('Partner request sent successfully!')
        e.currentTarget.reset()
      } else {
        toast.error('Something went wrong. Please try again later.')
      }
    } catch (error) {
      console.error('EmailJS partner error:', error)
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box id="partner-with-us" sx={{ bgcolor: '#f7f1e8', pb: { xs: 10, md: 16 } }}>
        <Box
          sx={{
            minHeight: { xs: 260, md: 360 },
            display: 'flex',
            alignItems: 'center',
            backgroundImage: `linear-gradient(120deg, rgba(10, 30, 24, 0.75), rgba(10, 30, 24, 0.25)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            px: { xs: 3, md: 8 },
            py: { xs: 8, md: 12 },
          }}
        >
          <Container maxWidth="xl" sx={{ px: 0 }}>
            <MotionSection delay={100}>
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2.4rem', md: '3.8rem' },
                  color: '#f39a1e',
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                Partner with Us
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: { xs: '1rem', md: '1.35rem' },
                  color: 'rgba(255, 255, 255, 0.88)',
                  maxWidth: 640,
                }}
              >
                Help shape the future of our RV fleet with trusted partnerships, smart collaboration, and shared growth.
              </Typography>
            </MotionSection>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 8 } }}>
          <MotionSection delay={150}>
            <Box
              sx={{
                bgcolor: '#ffffff',
                borderRadius: '32px',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.08)',
                px: { xs: 3, md: 6 },
                py: { xs: 5, md: 7 },
                mt: { xs: -6, md: -10 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '1.9rem', md: '2.6rem' },
                  color: '#1f1f1f',
                  mb: 1.5,
                }}
              >
                Get associated with Remal Caravans
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  color: '#5b5b5b',
                  maxWidth: 760,
                  mb: { xs: 4, md: 6 },
                }}
              >
                We collaborate with campsites, dealers, service teams, and investors to deliver unmatched RV experiences across the UAE.
              </Typography>

              {activePartner ? (
                <Box
                  sx={{
                    bgcolor: '#fff7ee',
                    borderRadius: '24px',
                    p: { xs: 3, md: 5 },
                    '& .MuiRadioGroup-root': {
                      flexWrap: 'wrap',
                      columnGap: 2,
                      rowGap: 1,
                    },
                    '& .MuiFormGroup-root': {
                      rowGap: 1,
                    },
                  }}
                >
                  <Button
                    startIcon={<KeyboardArrowLeftIcon />}
                    onClick={() => setActivePartner(null)}
                    sx={{
                      mb: 3,
                      px: 2.5,
                      py: 1,
                      borderRadius: '999px',
                      bgcolor: '#ffffff',
                      color: '#1f1f1f',
                      textTransform: 'none',
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontWeight: 700,
                      boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
                      '&:hover': {
                        bgcolor: '#f3e4d2',
                      },
                    }}
                  >
                    Back to Partners
                  </Button>

                  {partnerCards
                    .filter((card) => card.id === activePartner)
                    .map((card) => (
                      <Box key={card.id} component="form" onSubmit={handlePartnerSubmit}>
                        <Typography
                          sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontWeight: 800,
                            fontSize: { xs: '1.9rem', md: '2.4rem' },
                            color: '#f39a1e',
                            mb: 1.5,
                          }}
                        >
                          {card.detailTitle}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: { xs: '1rem', md: '1.08rem' },
                            color: '#3d3d3d',
                            mb: 3,
                            maxWidth: 860,
                          }}
                        >
                          {card.detailSubtitle}
                        </Typography>
                        {renderPartnerForm(card.id)}
                        <Button
                          variant="contained"
                          type="submit"
                          disabled={isSubmitting}
                          sx={{
                            mt: 4,
                            bgcolor: '#f39a1e',
                            color: '#1f1f1f',
                            px: 4,
                            py: 1.6,
                            borderRadius: '14px',
                            fontFamily: '"Poppins", sans-serif',
                            fontWeight: 700,
                            textTransform: 'none',
                            '&:hover': {
                              bgcolor: '#f7b147',
                              transform: 'translateY(-2px)',
                            },
                            transition: '0.3s',
                          }}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                      </Box>
                    ))}
                </Box>
              ) : (
                <Grid container spacing={4}>
                  {partnerCards.map((card, index) => (
                    <Grid key={card.title} size={{ xs: 12, md: 6 }}>
                      <MotionSection delay={250 + index * 100}>
                        <ButtonBase
                          onClick={() => setActivePartner(card.id)}
                          sx={{
                            width: '100%',
                            textAlign: 'left',
                            borderRadius: '24px',
                          }}
                        >
                          <Box
                            sx={{
                              position: 'relative',
                              borderRadius: '24px',
                              overflow: 'hidden',
                              minHeight: 320,
                              width: '100%',
                              display: 'flex',
                              alignItems: 'flex-end',
                              backgroundImage: `linear-gradient(180deg, rgba(8, 32, 26, 0.05) 0%, rgba(8, 32, 26, 0.75) 80%), url(${card.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.12)',
                              cursor: 'pointer',
                              '&:hover .partnerOverlay': {
                                opacity: 1,
                              },
                            }}
                          >
                            <Box sx={{ p: 3, width: '100%', position: 'relative', zIndex: 1 }}>
                              <Typography
                                sx={{
                                  fontFamily: '"Poppins", sans-serif',
                                  fontWeight: 700,
                                  fontSize: '1.4rem',
                                  color: '#ffffff',
                                  mb: 1,
                                }}
                              >
                                {card.title}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                                  fontSize: '1rem',
                                  color: 'rgba(255, 255, 255, 0.9)',
                                  lineHeight: 1.6,
                                }}
                              >
                                {card.description}
                              </Typography>
                            </Box>
                            <Box
                              className="partnerOverlay"
                              sx={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: 'rgba(12, 32, 26, 0.55)',
                                color: '#ffffff',
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                letterSpacing: '0.02em',
                                opacity: 0,
                                transition: '0.3s',
                              }}
                            >
                              Click to view
                            </Box>
                          </Box>
                        </ButtonBase>
                      </MotionSection>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </MotionSection>
        </Container>
      </Box>
    </LocalizationProvider>
  )
}

export default PartnerWithUsSection
