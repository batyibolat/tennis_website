import React, { useState, useEffect, useRef } from 'react';
import {
  Container, Paper, TextField, Button,
  Box, Typography, List, ListItem,
  ListItemText, Avatar, CircularProgress,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { chatAPI } from '../services/api';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';

const AIChat = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchChatHistory();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchChatHistory = async () => {
    try {
      const response = await chatAPI.getHistory();
      const history = response.data.map(item => ({
        text: item.message,
        response: item.response,
        timestamp: new Date(item.created_at).toLocaleTimeString(),
      }));
      setMessages(history);
    } catch (error) {
      console.error('Error fetching chat history:', error);
      // В случае ошибки показываем приветственное сообщение
      setMessages([{
        text: '',
        response: t('welcome_ai'),
        timestamp: new Date().toLocaleTimeString(),
      }]);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message;
    setMessage('');
    setMessages(prev => [...prev, {
      text: userMessage,
      response: null,
      timestamp: new Date().toLocaleTimeString(),
      isUser: true
    }]);

    setLoading(true);

    try {
      const response = await chatAPI.sendMessage(userMessage);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].response = response.data.response;
        return newMessages;
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].response = t('error_occurred');
        return newMessages;
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Цвета для сообщений в зависимости от темы
  const getMessageColors = () => {
    if (theme.palette.mode === 'dark') {
      return {
        userBg: theme.palette.primary.main,
        userColor: '#ffffff',
        aiBg: theme.palette.grey[800],
        aiColor: '#ffffff',
        welcomeBg: theme.palette.grey[900],
        welcomeColor: 'rgba(255, 255, 255, 0.7)',
      };
    }
    return {
      userBg: theme.palette.primary.main,
      userColor: '#ffffff',
      aiBg: theme.palette.grey[100],
      aiColor: theme.palette.text.primary,
      welcomeBg: theme.palette.grey[50],
      welcomeColor: theme.palette.text.secondary,
    };
  };

  const colors = getMessageColors();

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            color: theme.palette.text.primary,
            fontWeight: 700
          }}
        >
          {t('ai')} Assistant
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ 
            color: theme.palette.text.secondary,
            mb: 3
          }}
        >
          {t('start_question')}
        </Typography>

        <Paper
          elevation={3}
          sx={{
            height: '60vh',
            display: 'flex',
            flexDirection: 'column',
            mb: 3,
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            border: theme.palette.mode === 'dark' 
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <List
            sx={{
              flexGrow: 1,
              overflow: 'auto',
              p: 2,
              backgroundColor: theme.palette.background.default
            }}
          >
            {messages.length === 0 && (
              <ListItem>
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        bgcolor: colors.welcomeBg,
                        color: colors.welcomeColor,
                        p: 3,
                        borderRadius: 2,
                        textAlign: 'center'
                      }}
                    >
                      <SmartToyIcon sx={{ fontSize: 40, mb: 2, opacity: 0.7 }} />
                      <Typography variant="h6" gutterBottom>
                        {t('welcome_ai')}
                      </Typography>
                      <Typography variant="body2">
                        {t('start_question')}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            )}

            {messages.map((msg, index) => (
              <React.Fragment key={index}>
                {msg.text && (
                  <ListItem sx={{ justifyContent: 'flex-end', mb: 2 }}>
                    <Box
                      sx={{
                        maxWidth: '70%',
                        bgcolor: colors.userBg,
                        color: colors.userColor,
                        p: 2,
                        borderRadius: 2,
                        borderTopRightRadius: 0,
                        boxShadow: 1,
                        position: 'relative',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          right: -8,
                          top: 0,
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid',
                          borderLeftColor: colors.userBg,
                          borderTop: '8px solid transparent',
                          borderBottom: '8px solid transparent',
                        }
                      }}
                    >
                      <Typography>{msg.text}</Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          opacity: 0.8, 
                          display: 'block', 
                          mt: 1,
                          color: 'rgba(255, 255, 255, 0.8)'
                        }}
                      >
                        {msg.timestamp}
                      </Typography>
                    </Box>
                    <Avatar 
                      sx={{ 
                        ml: 1, 
                        bgcolor: theme.palette.primary.dark,
                        color: '#fff'
                      }}
                    >
                      <PersonIcon />
                    </Avatar>
                  </ListItem>
                )}

                {msg.response && (
                  <ListItem sx={{ mb: 2 }}>
                    <Avatar 
                      sx={{ 
                        mr: 1, 
                        bgcolor: theme.palette.secondary.main,
                        color: '#fff'
                      }}
                    >
                      <SmartToyIcon />
                    </Avatar>
                    <Box
                      sx={{
                        maxWidth: '70%',
                        bgcolor: colors.aiBg,
                        color: colors.aiColor,
                        p: 2,
                        borderRadius: 2,
                        borderTopLeftRadius: 0,
                        boxShadow: 1,
                        position: 'relative',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          left: -8,
                          top: 0,
                          width: 0,
                          height: 0,
                          borderRight: '8px solid',
                          borderRightColor: colors.aiBg,
                          borderTop: '8px solid transparent',
                          borderBottom: '8px solid transparent',
                        }
                      }}
                    >
                      <Typography sx={{ whiteSpace: 'pre-wrap' }}>
                        {msg.response}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          opacity: 0.8, 
                          display: 'block', 
                          mt: 1,
                          color: theme.palette.mode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.6)' 
                            : theme.palette.text.secondary
                        }}
                      >
                        {msg.timestamp}
                      </Typography>
                    </Box>
                  </ListItem>
                )}

                {msg.isUser && !msg.response && loading && (
                  <ListItem sx={{ mb: 2 }}>
                    <Avatar 
                      sx={{ 
                        mr: 1, 
                        bgcolor: theme.palette.secondary.main,
                        color: '#fff'
                      }}
                    >
                      <SmartToyIcon />
                    </Avatar>
                    <Box
                      sx={{
                        bgcolor: colors.aiBg,
                        color: colors.aiColor,
                        p: 2,
                        borderRadius: 2,
                        borderTopLeftRadius: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <CircularProgress size={16} />
                      <Typography variant="body2">
                        Thinking...
                      </Typography>
                    </Box>
                  </ListItem>
                )}
              </React.Fragment>
            ))}
            <div ref={messagesEndRef} />
          </List>

          <Box sx={{ 
            p: 2, 
            borderTop: 1, 
            borderColor: 'divider',
            backgroundColor: theme.palette.background.paper
          }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('type_message')}
              disabled={loading}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.05)' 
                    : 'rgba(0, 0, 0, 0.02)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.08)' 
                      : 'rgba(0, 0, 0, 0.04)',
                  }
                },
                '& .MuiOutlinedInput-input': {
                  color: theme.palette.text.primary,
                },
                '& .MuiInputLabel-root': {
                  color: theme.palette.text.secondary,
                }
              }}
            />
            <Button
              variant="contained"
              endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendRoundedIcon />}
              onClick={handleSendMessage}
              disabled={loading || !message.trim()}
              sx={{ 
                mt: 2,
                py: 1.5,
                borderRadius: 2,
                fontSize: '1rem',
                fontWeight: 600,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 10px 25px rgba(102, 126, 234, 0.6)'
                    : '0 10px 25px rgba(102, 126, 234, 0.4)',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
                    : 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                },
                '&:disabled': {
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #555 0%, #333 100%)'
                    : 'linear-gradient(135deg, #ccc 0%, #999 100%)',
                }
              }}
              fullWidth
            >
              {loading ? t('sending') : t('send')}
            </Button>
          </Box>
        </Paper>

        <Box sx={{ 
          p: 2, 
          borderRadius: 2,
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(0, 0, 0, 0.02)',
          border: theme.palette.mode === 'dark' 
            ? '1px solid rgba(255, 255, 255, 0.1)' 
            : '1px solid rgba(0, 0, 0, 0.1)',
        }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: theme.palette.text.secondary,
              textAlign: 'center'
            }}
          >
            {t('ai_note')}
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ 
              display: 'block',
              textAlign: 'center',
              mt: 1,
              color: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.5)' 
                : theme.palette.text.disabled
            }}
          >
            AI responses may not always be accurate. Please verify important information.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AIChat;