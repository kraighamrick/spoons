# Work Data Management Guide

This file explains how to manage work data for the portfolio site.

## How to Add/Edit Works

### 1. Work Data File
All work data is managed in the `/data/works.ts` file.

### 2. Steps to Add a New Work

1. Open the `/data/works.ts` file
2. Add a new work object to the end of the `works` array
3. Enter the following information:

```typescript
{
  id: 'next number',                // e.g., '7'
  title: 'Work Title',
  category: 'Category',             // 'MV', 'Commercial', 'Short Film', 'Documentary'
  year: 2024,                       // Production year
  artist: 'Artist Name',            // For MV only
  client: 'Client Name',            // For Commercial only
  duration: '3:30',                 // Video length
  thumbnail: 'Thumbnail Image URL',
  videoUrl: 'Video URL',
  description: 'Work Description',
  credits: {
    director: 'Kraig Hamrick',
    editor: 'Kraig Hamrick',
    cinematographer: 'Cinematographer Name',   // Optional
    producer: 'Production Company Name'        // Optional
  }
}
```

### 3. How to Get Images

**Thumbnail Images:**
- Select appropriate images from [Unsplash](https://unsplash.com)
- Add `?w=800&h=600&fit=crop` to the end of the URL for optimization

**Example:**
```
https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop
```

### 4. About Video URLs

The following formats are supported:
- YouTube: `https://www.youtube.com/watch?v=VIDEO_ID`
- Vimeo: `https://vimeo.com/VIDEO_ID`
- Direct video file: `https://example.com/video.mp4`

### 5. About Categories

Available categories:
- `MV` - Music Video
- `Commercial` - Commercial/Advertisement
- `Short Film` - Short Film
- `Documentary` - Documentary

## Editing Existing Works

1. Open the `/data/works.ts` file
2. Find the corresponding work object
3. Edit the necessary fields
4. Save the file

## Deleting Works

1. Open the `/data/works.ts` file
2. Delete the entire object of the work you want to remove
3. Save the file

## Important Notes

- `id` must always be a unique value
- Use video URLs that are actually accessible
- Thumbnail images should have a 16:9 aspect ratio (recommended)
- Descriptions can be written in both Japanese and English

## Changing the Hero Video

To change the background video in the hero section:
1. Open the `/data/site-config.ts` file
2. Change the `heroVideoUrl` value to the new video URL
3. Save the file

```typescript
export const siteConfig = {
  heroVideoUrl: "new video URL",
  // other settings...
}
```