import { SpotifyTrack, SpotifyProfile } from "../data/types";

// You'll need to set up a Spotify app and get these credentials
// https://developer.spotify.com/documentation/web-api
const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID || "";
const SPOTIFY_CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET || "";
const REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN || "";

// For demo purposes, you can use a public API or your own backend
const SPOTIFY_API_BASE = "https://api.spotify.com/v1";

interface SpotifyApiResponse<T> {
  ok: boolean;
  data: T;
  error: string;
}

export interface SpotifyResponse {
  repeat_state: "off" | "track" | "context";
  shuffle_state: boolean;
  progress_ms: number | null;
  item: {
    name: string;
    album: {
      name: string;
      images: { url: string }[];
      artists: { name: string }[];
    };
    preview_url: string | null;
    external_urls: { spotify: string };
    uri: string;
    duration_ms: number;
    type: "track";
  } | null;
  currently_playing_type: "track" | "episode" | "unknown";
  is_playing: boolean;
}

class SpotifyService {
  private accessToken: string = "";
  private tokenExpiry: number = 0;

  private async getAccessToken(): Promise<string> {
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    const body = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    });

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(
        `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
      )}`,
    };

    console.log("SPOTIFY_CLIENT_ID: ", SPOTIFY_CLIENT_ID);
    console.log("SPOTIFY_CLIENT_SECRET: ", SPOTIFY_CLIENT_SECRET);
    console.log("Headers: ", headers);
    console.log("Body: ", body);

    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers,
        body: body.toString(),
      });

      const data = await response.json();

      if (data.access_token) {
        this.accessToken = data.access_token;
        this.tokenExpiry = Date.now() + data.expires_in * 1000;
        return this.accessToken;
      } else {
        throw new Error("Failed to get access token");
      }
    } catch (error) {
      console.error("Error getting Spotify access token:", error);
      throw error instanceof Error ? error : new Error("Unknown error");
    }
  }

  private async makeRequest<T>(
    endpoint: string
  ): Promise<SpotifyApiResponse<T>> {
    try {
      const token = await this.getAccessToken();
      const response = await fetch(`${SPOTIFY_API_BASE}${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Spotify API error: ${response.status}`);
      }

      const data = await response.json();
      return { ok: true, data, error: "" };
    } catch (error) {
      console.error("Spotify API request failed:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return { ok: false, data: null as T, error: errorMessage };
    }
  }

  async getCurrentlyPlaying(): Promise<
    SpotifyApiResponse<SpotifyResponse | null>
  > {
    try {
      const response = await this.makeRequest("/me/player/currently-playing");

      if (!response.data) {
        return { ok: true, data: null, error: "" };
      }

      const data = response.data as SpotifyResponse;

      const trackData: SpotifyResponse = {
        repeat_state: data.repeat_state,
        shuffle_state: data.shuffle_state,
        progress_ms: data.progress_ms,
        item: data.item,
        currently_playing_type: data.currently_playing_type,
        is_playing: data.is_playing,
      };

      return { ok: true, data: trackData, error: "" };
    } catch (error) {
      return {
        ok: false,
        data: null,
        error: "Failed to fetch currently playing",
      };
    }
  }

  async getProfile(): Promise<SpotifyApiResponse<SpotifyProfile | null>> {
    const mockProfile: SpotifyProfile = {
      displayName: "atinyshrimp",
      followers: 42,
      profileUrl: "https://open.spotify.com/user/mock",
      profileImageUrl:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=center",
    };

    await new Promise((resolve) => setTimeout(resolve, 300));

    return { ok: true, data: mockProfile, error: "" };
  }

  // Real implementation would require user authorization
  async getRecentlyPlayed(): Promise<SpotifyApiResponse<SpotifyTrack[]>> {
    const mockTracks: SpotifyTrack[] = [
      {
        id: "mock-2",
        name: "Blinding Lights",
        artists: ["The Weeknd"],
        album: "After Hours",
        albumArtUrl:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
        externalUrl: "https://open.spotify.com/track/mock2",
        duration: 200000,
        isPlaying: false,
      },
      {
        id: "mock-3",
        name: "Midnight City",
        artists: ["M83"],
        album: "Hurry Up, We're Dreaming",
        albumArtUrl:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
        externalUrl: "https://open.spotify.com/track/mock3",
        duration: 245000,
        isPlaying: false,
      },
    ];

    await new Promise((resolve) => setTimeout(resolve, 400));

    return { ok: true, data: mockTracks, error: "" };
  }
}

export default new SpotifyService();
