const isProd = process.env.NODE_ENV === 'production';
const REPO_NAME = '/Portfolio';

export const getPath = (path: string) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return isProd ? `${REPO_NAME}${cleanPath}` : cleanPath;
};