import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServicesCardsColumns = ({
  className = '',
  group1000015039,
  iTStrategyAndArchitecture,
  onServicesCardsButtonsClick,
  isDesktop
}) => {
  const handleClick = useCallback(() => {
    if (onServicesCardsButtonsClick) {
      onServicesCardsButtonsClick();
    }
  }, [onServicesCardsButtonsClick]);

  return (
    <div className='flex justify-center mb-2'>
    <Card
      className={`border border-solid p-2 border-white bg-black text-white ${className}`}
      sx={{ width: isDesktop ? 350 : '80%', height: 240 }}
    >
      <CardMedia
        component="img"
        image={group1000015039}
        alt={iTStrategyAndArchitecture}
        sx={{
          height: 150,
          objectFit: 'cover',
          width: '100%'
        }}
      />
      <CardContent sx={{ padding: 2 }}>
        <Typography variant="body2" component="div" fontWeight="bold">
          {iTStrategyAndArchitecture}
        </Typography>
        <IconButton
          onClick={handleClick}
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center', padding: 0, marginTop: 2 }}
        >
          <Typography variant="body2" className='text-blue-700 fw-bold' component="div" sx={{ marginRight: 1 }}>
            More
          </Typography>
          <ArrowForwardIcon className='text-blue-700' fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
    </div>
  );
};

ServicesCardsColumns.propTypes = {
  className: PropTypes.string,
  group1000015039: PropTypes.string.isRequired,
  iTStrategyAndArchitecture: PropTypes.string.isRequired,
  onServicesCardsButtonsClick: PropTypes.func,
  isDesktop: PropTypes.bool
};

export default ServicesCardsColumns;
