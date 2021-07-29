import GalleryCard from './GalleryCard';

const PortfolioFullGallery = () => {
  const categories = [
    { categoryName: 'weddings', subtitle: 'the day you both said yes' },
    { categoryName: 'engagements', subtitle: 'love is all around' },
    { categoryName: 'family', subtitle: 'relive all the happy moments' },
    { categoryName: 'portraits', subtitle: 'photography is all about secrets' },
  ];

  const cardsForCategories = categories.map((category) => (
    <GalleryCard key={category.categoryName} {...category} />
  ));
  return (
    <div className="gallery-section portfolio">
      <div className="grid">{cardsForCategories}</div>
    </div>
  );
};

export default PortfolioFullGallery;
