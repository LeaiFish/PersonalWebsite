import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Layout, Head } from '@components';

const StyledPhotographyPage = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  padding: 100px 0;

  .photography-header {
    text-align: center;
    margin-bottom: 60px;

    h1 {
      margin: 0 0 20px 0;
      font-size: clamp(40px, 8vw, 80px);
      color: var(--lightest-slate);
    }

    p {
      color: var(--slate);
      font-size: var(--fz-xl);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.5;
    }
  }

  .photography-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;
    margin-top: 50px;
  }

  .photo-item {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);
    transition: var(--transition);
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      
      .photo-overlay {
        opacity: 1;
      }
    }

    .gatsby-image-wrapper {
      height: 400px;
      width: 100%;
    }

    .photo-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(2, 12, 27, 0.7) 0%,
        rgba(2, 12, 27, 0.3) 50%,
        rgba(2, 12, 27, 0.8) 100%
      );
      opacity: 0;
      transition: var(--transition);
      display: flex;
      align-items: flex-end;
      padding: 20px;

      .photo-info {
        color: var(--lightest-slate);
        
        h3 {
          margin: 0 0 5px 0;
          font-size: var(--fz-lg);
        }
        
        p {
          margin: 0;
          font-size: var(--fz-sm);
          color: var(--light-slate);
        }
      }
    }
  }

  .show-more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
    display: block;
  }

  .lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    
    .lightbox-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      
      .gatsby-image-wrapper {
        max-width: 100%;
        max-height: 90vh;
        width: auto;
        height: auto;
      }
      
      .close-button {
        position: absolute;
        top: -50px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
        padding: 10px;
        transition: var(--transition);
        
        &:hover {
          color: var(--green);
        }
      }
      
      .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(100, 255, 218, 0.1);
        border: 1px solid var(--green);
        color: var(--green);
        font-size: 20px;
        padding: 15px 20px;
        cursor: pointer;
        transition: var(--transition);
        border-radius: var(--border-radius);
        
        &:hover {
          background: rgba(100, 255, 218, 0.2);
        }
        
        &.prev {
          left: -80px;
        }
        
        &.next {
          right: -80px;
        }
      }
      
      .photo-info {
        position: absolute;
        bottom: -60px;
        left: 0;
        right: 0;
        text-align: center;
        color: white;
        
        h3 {
          margin: 0 0 5px 0;
          font-size: var(--fz-xl);
        }
        
        p {
          margin: 0;
          font-size: var(--fz-md);
          color: var(--light-slate);
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 100px 25px;
    
    .photography-grid {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
    
    .photo-item .gatsby-image-wrapper {
      height: 300px;
    }
    
    .lightbox-overlay {
      padding: 10px;
      
      .lightbox-content {
        max-width: 95vw;
        max-height: 95vh;
        
        .close-button {
          top: -40px;
          font-size: 25px;
        }
        
        .nav-button {
          font-size: 16px;
          padding: 12px 16px;
          
          &.prev {
            left: -60px;
          }
          
          &.next {
            right: -60px;
          }
        }
        
        .photo-info {
          bottom: -50px;
          
          h3 {
            font-size: var(--fz-lg);
          }
          
          p {
            font-size: var(--fz-sm);
          }
        }
      }
    }
  }
`;

const Photography = ({ data, location }) => {
  const photos = data.allFile.nodes;
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const initialPhotosCount = 6;
  
  const displayedPhotos = showAll ? photos : photos.slice(0, initialPhotosCount);

  const openLightbox = (index) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % displayedPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + displayedPhotos.length) % displayedPhotos.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevPhoto();
          break;
        case 'ArrowRight':
          nextPhoto();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  return (
    <Layout location={location}>
      <Head title="Photography" />
      
      <StyledPhotographyPage>
        <div className="photography-header">
          <h1>Photography</h1>
          <p>
            I shoot spontaneous moments from my travels and daily life, favoring quiet observations.
          </p>
        </div>

        <div className="photography-grid">
          {displayedPhotos.map((photo, index) => {
            const image = getImage(photo);
            const filename = photo.name;
            
            return (
              <div key={index} className="photo-item" onClick={() => openLightbox(index)}>
                <GatsbyImage
                  image={image}
                  alt={`Photography ${filename}`}
                  loading={index < 6 ? 'eager' : 'lazy'}
                />
                <div className="photo-overlay">
                  <div className="photo-info">
                    <h3>{filename}</h3>
                    <p>by Junyi</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {photos.length > initialPhotosCount && (
          <button 
            className="show-more-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : `Show More (${photos.length - initialPhotosCount} more)`}
          </button>
        )}

        {lightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeLightbox}>
                ×
              </button>
              
              {displayedPhotos.length > 1 && (
                <>
                  <button className="nav-button prev" onClick={prevPhoto}>
                    ‹
                  </button>
                  <button className="nav-button next" onClick={nextPhoto}>
                    ›
                  </button>
                </>
              )}
              
              <GatsbyImage
                image={getImage(displayedPhotos[currentPhotoIndex])}
                alt={`Photography ${displayedPhotos[currentPhotoIndex].name}`}
                objectFit="contain"
              />
              
              <div className="photo-info">
                <h3>{displayedPhotos[currentPhotoIndex].name}</h3>
                <p>by Junyi</p>
              </div>
            </div>
          </div>
        )}
      </StyledPhotographyPage>
    </Layout>
  );
};

export default Photography;

export const query = graphql`
  query {
    allFile(
      filter: { 
        sourceInstanceName: { eq: "images" }
        relativePath: { regex: "/photography/" }
        extension: { regex: "/(jpg|jpeg|png)/" }
      }
      sort: { fields: [name], order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 95
          )
        }
      }
    }
  }
`;