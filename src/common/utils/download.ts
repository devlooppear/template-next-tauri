const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "";
};

export const getDownloadLinks = () => {
  const base = getBaseUrl();
  return {
    android: `${base}/downloads/app.apk`,
    windows: `${base}/downloads/app.msi`,
    macos: `${base}/downloads/app.dmg`,
    linux: `${base}/downloads/app.AppImage`,
    ios: `${base}/downloads/ios`,
  };
};

export const isTauri = () => {
  return typeof window !== "undefined" && "__TAURI_INTERNALS__" in window;
};
