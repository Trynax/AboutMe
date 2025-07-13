import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
  Paper,
  Divider,
  Stack,
} from '@mui/material';
import { motion, Variants } from 'framer-motion';
import {
  Code as CodeIcon,
  RestaurantMenu as CookIcon,
  MusicNote as MusicIcon,
  PlaylistPlay as PlaylistIcon,
  Person as PersonIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  PhotoCamera as SnapchatIcon,
  SportsEsports as GamingIcon,
} from '@mui/icons-material';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const AboutMe: React.FC = () => {
  const skills = [
    { name: 'Go', icon: <CodeIcon />, color: '#ffffff' },
    { name: 'TypeScript', icon: <CodeIcon />, color: '#ffffff' },
    { name: 'Solidity', icon: <CodeIcon />, color: '#ffffff' },

  ];

  const interests = [
    { name: 'Cooking', icon: <CookIcon />, description: 'I love to cook occasionally - experimenting with different cuisines and flavors' },
    { name: 'Music', icon: <MusicIcon />, description: 'Ed Sheeran, Harry Styles, Wizkid, Tems - Music fuels my creativity' },
    { name: 'Gaming', icon: <GamingIcon />, description: 'Currently obsessed with FC25 (FIFA 25) - there\'s nothing like a good match to unwind after coding sessions!' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <MotionBox variants={itemVariants} textAlign="center" mb={8}>
          <Typography
            variant="h1"
            component={motion.h1}
            gutterBottom
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '4rem' },
              background: 'linear-gradient(45deg, #ffffff, #999999)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            About Me
          </Typography>
          <Typography
            component={motion.h4}
            variant="h4"
            color="text.secondary"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            sx={{
              maxWidth: 800,
              mx: 'auto',
              fontWeight: 300,
              letterSpacing: '0.01em',
            }}
          >
            If you’ve found yourself on this page, chances are you’ve asked about me.
To be honest, I got tired of saying the same things over and over (or maybe I’m just doing this for fun 😄), so I put it all here.

Either way — welcome!
          
          </Typography>
        </MotionBox>

        {/* Personal Introduction Card */}
        <MotionCard
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          sx={{
            mb: 6,
            background: 'linear-gradient(135deg, #111111 0%, #222222 100%)',
            borderRadius: 4,
            boxShadow: '0 12px 40px rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
            },
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Box display="flex" alignItems="center" mb={4}>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <PersonIcon sx={{ fontSize: 40, color: '#ffffff', mr: 3 }} />
              </motion.div>
              <Typography variant="h3" component="h2" fontWeight={700} color="white">
                Who Am I?
              </Typography>
            </Box>

            {/* Profile Section with Bitmoji */}
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" mb={4} gap={4}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.6 }
                }}
              >
                <Box
                  sx={{
                    width: { xs: 120, md: 150 },
                    height: { xs: 120, md: 150 },
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #333333, #555555)',
                    border: '3px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover::after': {
                      opacity: 1,
                    },
                  }}
                >
                  {/* Replace this URL with your actual Bitmoji URL */}
                  <Box
                    component="img"
                    src="https://sdk.bitmoji.com/render/panel/10226021-103861981361_5-s5-v1.png?transparent=1&palette=1&scale=1"
                    alt="Trynax Bitmoji"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const nextElement = target.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  <PersonIcon 
                    sx={{ 
                      fontSize: 60, 
                      color: '#ffffff',
                      display: 'none' // Hidden by default, shown if image fails
                    }} 
                  />
                </Box>
              </motion.div>
              
              <Box flex={1} textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant="h4" sx={{ lineHeight: 1.4, color: 'white', mb: 2 }}>
                  <strong>Idris "Trynax"</strong> 
                </Typography>
                <Typography variant="h6" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                  21 • 5'8"/5'9" • Software Engineer 
                </Typography>
              </Box>
            </Box>

            <Stack spacing={3}>
              <Typography variant="h5" sx={{ lineHeight: 1.6, color: 'white' }}>
                Hey there! 👋 Most people in the digital world know me as <strong>"Trynax"</strong>
              </Typography>

              <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                I'm passionate about crafting digital experiences that matter.
                My personality? Well, it pretty much revolves around being a software engineer (or so people say! 🤷‍♂️).
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                I specialize in writing robust software logic and creating beautiful, intuitive frontends.
                Whether it's building scalable backend systems, developing smart contracts for the blockchain,
                or crafting pixel-perfect user interfaces, I bring ideas to life through code.
                Every project is an opportunity to solve real problems and make someone's life a little bit easier.
              </Typography>

              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                What drives me? The satisfaction of turning complex problems into elegant solutions,
                the thrill of learning new technologies, and the joy of building things that people actually use and love.
              </Typography>
            </Stack>
          </CardContent>
        </MotionCard>

        {/* Skills Section */}
        <MotionCard
          variants={itemVariants}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
          sx={{
            mb: 6,
            background: 'linear-gradient(135deg, #111111 0%, #222222 100%)',
            borderRadius: 4,
            boxShadow: '0 12px 40px rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Typography variant="h3" component="h2" mb={4} fontWeight={700} color="white">
              Technical Arsenal
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={4}>
              The technologies I wield to bring ideas to life:
            </Typography>
            <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #222222, #333333)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: 3,
                      minWidth: '140px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #333333, #444444)',
                        boxShadow: '0 8px 25px rgba(255, 255, 255, 0.15)',
                      },
                    }}
                  >
                    <Box sx={{ color: skill.color, mb: 2 }}>
                      {skill.icon}
                    </Box>
                    <Typography variant="body1" fontWeight={600} color="white">
                      {skill.name}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Stack>
          </CardContent>
        </MotionCard>

        {/* Interests Section */}
        <MotionCard
          variants={itemVariants}
          sx={{
            mb: 6,
            background: 'linear-gradient(135deg, #111111 0%, #222222 100%)',
            borderRadius: 4,
            boxShadow: '0 12px 40px rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Typography variant="h3" component="h2" mb={4} fontWeight={700} color="white">
              Beyond the Code
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={4}>
              When I'm not building the future with code:
            </Typography>
            <Stack spacing={4}>
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      p: 3,
                      borderRadius: 3,
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Box sx={{ color: '#ffffff', mr: 3, mt: 0.5 }}>
                        {interest.icon}
                      </Box>
                    </motion.div>
                    <Box>
                      <Typography variant="h5" gutterBottom color="white" fontWeight={600}>
                        {interest.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {interest.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </CardContent>
        </MotionCard>

        {/* Music Section */}
        <MotionCard
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          sx={{
            background: 'linear-gradient(135deg, #222222 0%, #111111 100%)',
            borderRadius: 4,
            boxShadow: '0 12px 40px rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
            },
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Box display="flex" alignItems="center" mb={4}>
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <MusicIcon sx={{ fontSize: 40, color: '#ffffff', mr: 3 }} />
              </motion.div>
              <Typography variant="h3" component="h2" fontWeight={700} color="white">
                My Soundtrack
              </Typography>
            </Box>

            <Typography variant="h6" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary', mb: 4 }}>
              Music isn't just background noise for me—it's the fuel that powers my creativity and keeps me going through those long coding sessions.
              Here are the artists that soundtrack my life:
            </Typography>

            <Box mb={4}>
              {['Ed Sheeran', 'Harry Styles', 'Wizkid', 'Tems'].map((artist, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  style={{ display: 'inline-block', margin: '8px' }}
                >
                  <Chip
                    label={artist}
                    sx={{
                      background: 'linear-gradient(45deg, #ffffff, #cccccc)',
                      color: 'black',
                      fontWeight: 600,
                      fontSize: '1rem',
                      padding: '8px 16px',
                      height: 'auto',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #cccccc, #ffffff)',
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Box>

            <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

            <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={2}>
              <Typography variant="h6" color="white">
                Want to vibe with me? Check out my curated playlist:
              </Typography>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  sx={{
                    background: 'linear-gradient(45deg, #ffffff, #cccccc)',
                    color: 'black',
                    padding: 2,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #cccccc, #ffffff)',
                      transform: 'scale(1.1)',
                    },
                  }}
                  onClick={() => window.open('https://open.spotify.com/playlist/6NJjUi6rjxVQCyuFkcUsMD?si=c46958a24f2c4c9f', '_blank')}
                >
                  <PlaylistIcon sx={{ fontSize: 28 }} />
                </IconButton>
              </motion.div>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 2, fontStyle: 'italic' }}
            >
              *Playlist link can be added here - it's a journey through different moods and coding sessions
            </Typography>
          </CardContent>
        </MotionCard>

        {/* Social Media Section */}
        <MotionCard
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          sx={{
            mb: 6,
            background: 'linear-gradient(135deg, #111111 0%, #222222 100%)',
            borderRadius: 4,
            boxShadow: '0 12px 40px rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
            },
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Typography variant="h3" component="h2" mb={4} fontWeight={700} color="white" textAlign="center">
              Let's Connect
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={4} textAlign="center">
              Find me across the digital universe:
            </Typography>

            <Stack
              direction="row"
              spacing={4}
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
            >
              {[
                {
                  name: 'GitHub',
                  icon: <GitHubIcon sx={{ fontSize: 32 }} />,
                  url: 'https://github.com/Trynax',
                  color: '#ffffff',
                  hoverColor: '#f0f6ff'
                },
                {
                  name: 'X (Twitter)',
                  icon: <TwitterIcon sx={{ fontSize: 32 }} />,
                  url: 'https://x.com/trynaxprmr',
                  color: '#1DA1F2',
                  hoverColor: '#0d8bd9'
                },
                {
                  name: 'Instagram',
                  icon: <InstagramIcon sx={{ fontSize: 32 }} />,
                  url: 'https://instagram.com/trynax_',
                  color: '#E4405F',
                  hoverColor: '#d62976'
                },
                {
                  name: 'Snapchat',
                  icon: <SnapchatIcon sx={{ fontSize: 32 }} />,
                  url: 'https://snapchat.com/add/not_trynax',
                  color: '#FFFC00',
                  hoverColor: '#fff700'
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      p: 3,
                      borderRadius: 4,
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      textDecoration: 'none',
                      minWidth: '120px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        background: `rgba(${social.color === '#ffffff' ? '255, 255, 255' :
                          social.color === '#1DA1F2' ? '29, 161, 242' :
                            social.color === '#E4405F' ? '228, 64, 95' :
                              '255, 252, 0'}, 0.1)`,
                        borderColor: social.color,
                        boxShadow: `0 8px 25px rgba(${social.color === '#ffffff' ? '255, 255, 255' :
                          social.color === '#1DA1F2' ? '29, 161, 242' :
                            social.color === '#E4405F' ? '228, 64, 95' :
                              '255, 252, 0'}, 0.2)`,
                      },
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Box sx={{ color: social.color, mb: 2 }}>
                        {social.icon}
                      </Box>
                    </motion.div>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color="white"
                      textAlign="center"
                    >
                      {social.name}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>

            <Box textAlign="center" mt={4}>
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                *Feel free to reach out - I'm always up for interesting conversations about tech, music, or just life in general!
              </Typography>
            </Box>
          </CardContent>
        </MotionCard>

        {/* Footer */}
        <MotionBox
          variants={itemVariants}
          textAlign="center"
          mt={8}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            Thanks for taking the time to get to know me! 🚀
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Now you know why people say my personality revolves around being a software engineer �
          </Typography>
        </MotionBox>
      </MotionBox>
    </Container>
  );
};

export default AboutMe;
