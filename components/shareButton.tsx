import React from 'react';

type ShareButtonPropsType = {
    title?: string,
    url?: string
}

const ShareButton = ({ title, url }: ShareButtonPropsType): JSX.Element => {
  const handleClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      console.log('Web Share API not supported');
    }
  };

  return <button onClick={handleClick}>Share</button>;
};

export default ShareButton;