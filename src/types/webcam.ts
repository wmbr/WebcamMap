export interface Webcam {
    lat: number;
    lon: number;

    osmID: number;
    osmType: 'node' | 'way' | 'relation';

    address: {
        city?: string;
        county?: string;
        state?: string;
        country?: string;
    };

    osmTags: Record<string, string | undefined>;

    operator?: string;
    url: string;
}
