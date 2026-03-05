/**
 * Utility to resolve asset paths correctly whether the app is hosted
 * in a subdirectory (like /paramount/ on Hostinger) or at the root.
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if we are currently in the /paramount/ subdirectory
  const isSubdirectory = window.location.pathname.includes('/paramount');
  
  // Return the path prefixed with the subdirectory if needed
  return isSubdirectory ? `/paramount/${cleanPath}` : `/${cleanPath}`;
};
