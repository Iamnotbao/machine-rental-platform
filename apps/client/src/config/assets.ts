const fallbackMockImageUrl =
  'https://res.cloudinary.com/dko7da9fu/image/upload/v1786948861/logo_iauj25.png';

const fallbackMachineCheckerDownloadUrl =
  'https://res.cloudinary.com/dko7da9fu/raw/upload/v1787819048/Get_infor_machine_ver001_al8b11.zip';

export const MOCK_CONTENT_IMAGE_URL =
  import.meta.env.VITE_MOCK_IMAGE_URL?.trim() || fallbackMockImageUrl;

export const MACHINE_CHECKER_DOWNLOAD_URL =
  import.meta.env.VITE_MACHINE_CHECKER_DOWNLOAD_URL?.trim() || fallbackMachineCheckerDownloadUrl;
