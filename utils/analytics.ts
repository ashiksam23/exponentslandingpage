/**
 * Analytics Service (ORACLE)
 * 
 * Currently acts as a logger to the console.
 * Future integration point for Mixpanel/PostHog/GA4.
 */

type AnalyticsEventProperties = Record<string, any>;

class AnalyticsService {
    private static instance: AnalyticsService;
    private isDev: boolean;

    private constructor() {
        this.isDev = import.meta.env.DEV;
    }

    public static getInstance(): AnalyticsService {
        if (!AnalyticsService.instance) {
            AnalyticsService.instance = new AnalyticsService();
        }
        return AnalyticsService.instance;
    }

    /**
     * Track an event
     * @param eventName Snake_case event name (e.g. 'hero_cta_clicked')
     * @param properties Optional properties object
     */
    public track(eventName: string, properties?: AnalyticsEventProperties): void {
        const timestamp = new Date().toISOString();

        // In a real app, we would push to window.dataLayer or call mixpanel.track() here.
        console.log(`%c[ORACLE] Track: ${eventName}`, 'color: #E24A37; font-weight: bold;', {
            timestamp,
            ...properties
        });
    }

    /**
     * Track a page view
     * @param pagePath Current path/hash
     */
    public pageView(pagePath: string): void {
        this.track('page_view', { path: pagePath });
    }
}

export const Analytics = AnalyticsService.getInstance();
