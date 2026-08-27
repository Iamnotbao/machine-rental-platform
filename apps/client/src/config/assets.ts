const fallbackMockImageUrl =
  'https://res.cloudinary.com/dko7da9fu/image/upload/v1786948861/logo_iauj25.png';

export const MOCK_CONTENT_IMAGE_URL =
  import.meta.env.VITE_MOCK_IMAGE_URL?.trim() || fallbackMockImageUrl;
