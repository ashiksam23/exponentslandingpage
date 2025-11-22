
/**
 * Haptic Feedback Utility
 * Provides tactile response for interactions on supported devices.
 * 
 * - Light: Subtle feedback for navigation/selection (10ms)
 * - Medium: Distinct feedback for buttons/toggles (30ms)
 * - Heavy: Strong feedback for critical actions/errors (50ms)
 */
export const triggerHaptic = (strength: 'light' | 'medium' | 'heavy' = 'light') => {
  // Fail safely if SSR or not supported
  if (typeof window === 'undefined' || !window.navigator?.vibrate) return;

  const patterns = {
    light: 10,    // Subtle mechanical tick
    medium: 30,   // Solid switch click
    heavy: 50     // Alert/Warning vibration
  };

  try {
    // Vibrate if the browser allows it (usually requires user interaction first)
    window.navigator.vibrate(patterns[strength]);
  } catch (e) {
    // Silently ignore errors (e.g. permissions or unsupported contexts)
  }
};
