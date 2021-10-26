import React from 'react';
import { CardActionArea, Typography, Card, CardContent, CardMedia } from '@mui/material';

export interface PrimaryActionCardProps {
  cardMedia: {
    height?: string,
    image: string,
    alt: string,
  };
  cardContent: {
    headerText: string,
    bodyText: string
  };
  onClick: Function;
}

export function PrimaryActionCard({ cardMedia, cardContent, onClick }: PrimaryActionCardProps) {
  function handleClick() {
    onClick();
  }

  return (
    <Card onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          {...cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="truncate">
            {cardContent.headerText}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardContent.bodyText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}