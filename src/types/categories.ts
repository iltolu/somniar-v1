export interface Category {
  id: string;
  label: string;
  description?: string;
}

export interface CategoryGroup {
  id: string;
  label: string;
  categories: Category[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: 'regions',
    label: 'Regional Gschichtli',
    categories: [
      { id: 'zurich', label: 'Züri-Gschichtli', description: 'Stories from Zurich' },
      { id: 'bern', label: 'Bärn-Gschichtli', description: 'Stories from Bern' },
      { id: 'luzern', label: 'Lozärner-Gschichtli', description: 'Stories from Lucerne' },
      { id: 'stgallen', label: 'St.Galler-Gschichtli', description: 'Stories from St. Gallen' },
      { id: 'basel', label: 'Bebbi-Gschichtli', description: 'Stories from Basel' },
      { id: 'graubuenden', label: 'Bündner-Gschichtli', description: 'Stories from Graubünden' }
    ]
  },
  {
    id: 'emotions',
    label: 'Gfühl & Stimmige',
    categories: [
      { id: 'happy', label: 'Fröhlichi Gschichtli', description: 'Happy and uplifting stories' },
      { id: 'calm', label: 'Ruehigi Gschichtli', description: 'Calming bedtime stories' },
      { id: 'brave', label: 'Muetigi Gschichtli', description: 'Stories about courage' },
      { id: 'friendship', label: 'Fründschafts-Gschichtli', description: 'Stories about friendship' },
      { id: 'adventure', label: 'Abentüür-Gschichtli', description: 'Exciting adventure stories' }
    ]
  },
  {
    id: 'themes',
    label: 'Themene',
    categories: [
      { id: 'nature', label: 'Natur-Gschichtli', description: 'Stories about nature' },
      { id: 'animals', label: 'Tier-Gschichtli', description: 'Stories about animals' },
      { id: 'fantasy', label: 'Märli', description: 'Fairy tales and fantasy stories' },
      { id: 'seasons', label: 'Jahresziite', description: 'Stories about seasons' }
    ]
  }
];