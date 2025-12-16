import React, { useState, useEffect } from 'react';
import {
  Container, Grid, Card, CardContent, CardMedia,
  Typography, Box, Button, Modal, Chip
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { newsAPI } from '../services/api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const News = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState([]);
  const [featuredNews, setFeaturedNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const [allNewsResponse, featuredResponse] = await Promise.all([
        newsAPI.getAll(),
        newsAPI.getFeatured()
      ]);
      setNews(allNewsResponse.data);
      setFeaturedNews(featuredResponse.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewsClick = async (newsItem) => {
    setSelectedNews(newsItem);
    setModalOpen(true);
    // Increment views
    try {
      await newsAPI.incrementViews(newsItem.id);
    } catch (error) {
      console.error('Error incrementing views:', error);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (loading) {
    return (
      <Container>
        <Typography>{t('loading_news')}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          {t('news')}
        </Typography>

        {/* Featured News Slider */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom>
            {t('featured_news')}
          </Typography>
          <Slider {...sliderSettings}>
            {featuredNews.map((item) => (
              <div key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="400"
                    image={item.image_url || 'https://via.placeholder.com/800x400'}
                    alt={item.title}
                    onClick={() => handleNewsClick(item)}
                    style={{ cursor: 'pointer' }}
                  />
                  <CardContent>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.summary}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                      <Chip label={item.category} size="small" />
                      <Typography variant="caption">
                        {new Date(item.published_date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </Box>

        {/* All News Grid */}
        <Typography variant="h5" gutterBottom>
          {t('all_news')}
        </Typography>
        <Grid container spacing={3}>
          {news.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}
                onClick={() => handleNewsClick(item)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image_url || 'https://via.placeholder.com/400x200'}
                  alt={item.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {item.summary.length > 100 ? `${item.summary.substring(0, 100)}...` : item.summary}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip label={item.category} size="small" />
                    <Typography variant="caption" color="textSecondary">
                      {t('views')}: {item.views}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* News Detail Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="news-detail-modal"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '80%',
            maxWidth: 800,
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            overflow: 'auto',
            borderRadius: 2
          }}
        >
          {selectedNews && (
            <>
              <Typography variant="h4" gutterBottom>
                {selectedNews.title}
              </Typography>
              <img
                src={selectedNews.image_url || 'https://via.placeholder.com/800x400'}
                alt={selectedNews.title}
                style={{
                  width: '100%',
                  maxHeight: 400,
                  objectFit: 'cover',
                  borderRadius: 8,
                  marginBottom: 16
                }}
              />
              <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip label={selectedNews.category} />
                <Typography variant="body2" color="textSecondary">
                  {t('author')}: {selectedNews.author}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {t('published')}: {new Date(selectedNews.published_date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {t('views')}: {selectedNews.views}
                </Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
                {selectedNews.content}
              </Typography>
              <Button
                variant="contained"
                onClick={() => setModalOpen(false)}
                sx={{ mt: 2 }}
              >
                {t('close')}
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default News;