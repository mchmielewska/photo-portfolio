import Link from 'next/link';
import GalleryCard from './GalleryCard';

const Gallery = () => {
  const categories = [
    { categoryName: 'weddings', subtitle: 'the day you both said yes' },
    { categoryName: 'engagements', subtitle: 'love is all around' },
    { categoryName: 'family', subtitle: 'relive all the happy moments' },
  ];

  const cardsForCategories = categories.map((category) => (
    <GalleryCard key={category.categoryName} {...category} />
  ));
  return (
    <div className="gallery-section">
      <div className="grid">{cardsForCategories}</div>
    </div>
  );
};

export default Gallery;
