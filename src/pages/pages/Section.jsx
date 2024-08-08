import React from 'react';

const Section = ({ title, subtitle, content, imgSrc, headline }) => (
  <div className="space-y-4">
    {headline && <p className="text-muted font-bold text-center">{headline}</p>}
    {imgSrc && <img src={imgSrc} alt={subtitle} className="w-full h-auto" />}
    {title && <h2 className="text-3xl font-bold">{title}</h2>}
    {subtitle && <h3 className="text-xl font-semibold">{subtitle}</h3>}
    {content && <p>{content}</p>}
  </div>
);

export default Section;
