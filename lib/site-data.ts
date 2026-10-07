export type IconName = "sparkle" | "moon" | "star" | "heart";

export const navigation = [
  { label: "Creations", href: "#creations" },
  { label: "Custom Orders", href: "#order" },
  { label: "Pop Ups", href: "#popups" },
  { label: "Our Story", href: "#story" },
  { label: "Instagram", href: "https://www.instagram.com/dreamysweetsbyblondee/", external: true },
];

export const categories = [
  { label: "Fan favorite", title: "Character Macarons", description: "Tiny works of edible art inspired by characters, themes and ideas.", color: "lavender", icon: "sparkle" as IconName },
  { label: "Most requested", title: "Custom Celebrations", description: "Macarons created around birthdays, events, gifts and the moments you have been imagining.", color: "pink", icon: "moon" as IconName, featured: true },
  { label: "Limited drop", title: "Pop Up Drops", description: "Limited flavors, seasonal creations and local San Antonio pop ups.", color: "yellow", icon: "star" as IconName },
];

export const galleryTiles = [
  { color: "pink", icon: "sparkle" as IconName, sticker: "Cute enough to keep", className: "gallery-tall", position: "top-left" },
  { color: "yellow", icon: "moon" as IconName, sticker: "Made by hand", className: "gallery-wide", position: "top-right" },
  { color: "mint", icon: "star" as IconName, className: "gallery-short" },
  { color: "cream", icon: "sparkle" as IconName, sticker: "Almost too pretty to eat", className: "gallery-hero", position: "bottom-right" },
  { color: "plum", icon: "moon" as IconName, className: "gallery-dark" },
  { color: "pink", icon: "heart" as IconName, sticker: "Your idea could be next", className: "gallery-small", position: "bottom-left" },
];

export const processSteps = [
  { number: "01", title: "Send the idea", text: "Share the theme, character, colors or occasion you are dreaming about.", color: "lavender", icon: "sparkle" as IconName },
  { number: "02", title: "The magic happens", text: "Your idea becomes a handcrafted macaron creation made especially for your moment.", color: "pink", icon: "moon" as IconName },
  { number: "03", title: "Celebrate", text: "Pick up your macarons and bring something completely unique to the table.", color: "yellow", icon: "star" as IconName },
];

export const socialLinks = { instagram: "https://www.instagram.com/dreamysweetsbyblondee/", handle: "@dreamysweetsbyblondee" };
