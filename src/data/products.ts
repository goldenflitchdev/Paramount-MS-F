import { getAssetPath } from '../utils/paths';

export type Category = 'Domestic' | 'Italian' | 'Three Door' | 'Dressing' | 'Office Cabinet' | 'Office Table' | 'Storage & Racks';

export interface Product {
  id: string;
  modelNo: string;
  name: string;
  category: Category;
  description: string;
  sizes: string[];
  imageUrl: string;
}

export const products: Product[] = [
  // Domestic
  {
    id: '1', modelNo: 'VI/C/101 BY ONE', name: 'Cabinet with Locker Drawer', category: 'Domestic',
    description: 'Cabinet with Locker Drawer, Hanger and Mirror.',
    sizes: ['66" x 34" x 17"', '78" x 36" x 19"', '78" x 40" x 21"'],
    imageUrl: getAssetPath('images/Cabinet_with_Locker_Drawer.png')
  },
  {
    id: '2', modelNo: 'VI/C/102 BY TWO', name: 'Cabinet with Locker, Two Drawer', category: 'Domestic',
    description: 'Cabinet with Locker, Two Drawer, Hanger and Mirror.',
    sizes: ['78" x 36" x 19"', '78" x 40" x 21"'],
    imageUrl: getAssetPath('images/Cabinet_with_Locker_Two_Drawer.png')
  },
  {
    id: '3', modelNo: 'VI/C/103 FULL HANGER', name: 'Cabinet with Full Hanger', category: 'Domestic',
    description: 'Cabinet with Locker, Two Drawer, Full Hanger and Mirror.',
    sizes: ['78" x 36" x 19"', '78" x 40" x 21"'],
    imageUrl: getAssetPath('images/Cabinet_with_Full_Hanger.png')
  },
  {
    id: '4', modelNo: 'VI/C/104 SANGAM', name: 'Sangam Twin Cabinet', category: 'Domestic',
    description: 'Twin Cabinet for Individual use of 2 Members. Having Locker, Drawer, Hanger and Two Mirrors.',
    sizes: ['78" x 40" x 19"', '78" x 42" x 19"', '78" x 44" x 19"', '78" x 48" x 19"'],
    imageUrl: getAssetPath('images/Sangam_Twin_Cabinet.png')
  },
  {
    id: '5', modelNo: 'VI/C/105 SARI KHANA', name: 'Cabinet with Sari Box', category: 'Domestic',
    description: 'Cabinet with Sari Box with Glass Door, Having Locker, Drawer, Hanger and Mirror.',
    sizes: ['78" x 40" x 21"'],
    imageUrl: getAssetPath('images/Cabinet_with_Sari_Box.png')
  },
  // Italian
  {
    id: '6', modelNo: 'VI/I/121 ITALIAN BY ONE', name: 'Italian Cabinet', category: 'Italian',
    description: 'Italian Cabinet with Shoe Drawer, Italian Hinges, Locker, Drawer, Hanger and Mirror.',
    sizes: ['78" x 36" x 21"'],
    imageUrl: getAssetPath('images/Italian_Cabinet.png')
  },
  {
    id: '7', modelNo: 'V/I/122 ITALIAN SANGAM', name: 'Italian Sangam Twin Cabinet', category: 'Italian',
    description: 'Sangam Twin Cabinet for Individual Use of 2 Members Having Italian Hinges, Locker, Drawer, Hanger and Two Mirror.',
    sizes: ['78" x 42" x 21"'],
    imageUrl: getAssetPath('images/Italian_Sangam_Twin_Cabinet.png')
  },
  // Three Door
  {
    id: '8', modelNo: 'VI/TD/106 THREE DOOR', name: 'Three Door Cabinet', category: 'Three Door',
    description: 'Cabinet with Three Door Having Locker, Drawer, Hanger and other Side Locker, Mirror.',
    sizes: ['78" x 48" x 19"'],
    imageUrl: getAssetPath('images/Three_Door_Cabinet.png')
  },
  // Dressing
  {
    id: '9', modelNo: 'VI/C/124 SINGLE DRESSING', name: 'Single Dressing Cabinet', category: 'Dressing',
    description: 'Cabinet with Dressing Compartment having Locker, Drawer, Hanger and Mirror.',
    sizes: ['78" x 54" x 19"'],
    imageUrl: getAssetPath('images/Single_Dressing_Cabinet.png')
  },
  // Office Cabinet
  {
    id: '10', modelNo: 'VI/GD/113 GLASS DOOR', name: 'Glass Door Cabinet', category: 'Office Cabinet',
    description: 'Cabinet with 5 Shelves, having transparent Glass on Door.',
    sizes: ['78" x 36" x 19"', '78" x 36" x 24"'],
    imageUrl: getAssetPath('images/Glass_Door_Cabinet.png')
  },
  {
    id: '11', modelNo: 'VI/SW/109 STORE WELL', name: 'Store Well Cabinet', category: 'Office Cabinet',
    description: 'Cabinet with 5 Shelves.',
    sizes: ['78" x 36" x 19"'],
    imageUrl: getAssetPath('images/Store_Well_Cabinet.png')
  },
  {
    id: '12', modelNo: 'VI/FC/115 FILING CABINET', name: 'Filing Cabinet', category: 'Office Cabinet',
    description: 'Filing Cabinet having 4 Drawers.',
    sizes: ['54" x 27.5" x 18.5"'],
    imageUrl: getAssetPath('images/Filing_Cabinet.png')
  },
  // Office Table
  {
    id: '13', modelNo: 'VI/T/120 EXECUTIVE TABLE', name: 'Executive Table', category: 'Office Table',
    description: 'Table having Right Side 3 Drawers & other side Cupboard Unit with Shelf, Center Drawer, Writing Pad & Back Panel with Nova Pan Top.',
    sizes: ['60" x 36" x 30"'],
    imageUrl: getAssetPath('images/Executive_Table.png')
  },
  // Storage & Racks
  {
    id: '14', modelNo: 'VI/R/117 RACK', name: 'Slotted Angle Rack', category: 'Storage & Racks',
    description: 'Slotted angle Rack with various size of Panel made of 1mm sheet.',
    sizes: ['Custom Sizes Available'],
    imageUrl: getAssetPath('images/Slotted_Angle_Rack.png')
  }
];

export const categories: Category[] = [
  'Domestic', 'Italian', 'Three Door', 'Dressing', 'Office Cabinet', 'Office Table', 'Storage & Racks'
];
