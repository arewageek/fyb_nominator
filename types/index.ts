import type { LucideIcon } from "lucide-react";

export type AwardCategory = {
  id: string;
  name: string;
  icon: LucideIcon;
};

export type NominationInCart = {
  id: string; // Unique ID for the cart item
  nomineeName: string;
  category: AwardCategory;
  amount: number;
};

export type NomineeProfile = {
  fullName: string;
  pictureUrl: string;
  societies: string[];
  favoriteVerse: string;
  funMoment: string;
  awardReason: string;
};

export type Nominee = {
  id: string;
  name: string;
  nominations: { categoryId: string; amount: number }[]; // Simplified for summary
  profile: NomineeProfile;
};
