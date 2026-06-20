export interface DesignItem {
  id: string;
  title: string;
  imageUrl: string;
}

export const categoryDesigns: Record<string, DesignItem[]> = {
  'wedding': [
    { id: 'wed1', title: 'Wedding 1', imageUrl: '/designs/wedding/1.png' },
    { id: 'wed2', title: 'Wedding 2', imageUrl: '/designs/wedding/2.png' },
    { id: 'wed3', title: 'Wedding 3', imageUrl: '/designs/wedding/3.png' },
    { id: 'wed4', title: 'Wedding 4', imageUrl: '/designs/wedding/4.png' },
    { id: 'wed5', title: 'Wedding 5', imageUrl: '/designs/wedding/5.png' },
    { id: 'wed6', title: 'Wedding 6', imageUrl: '/designs/wedding/6.png' },
    { id: 'wed7', title: 'Wedding 7', imageUrl: '/designs/wedding/7.png' },
    { id: 'wed8', title: 'Wedding 8', imageUrl: '/designs/wedding/8.png' },
    { id: 'wed9', title: 'Wedding 9', imageUrl: '/designs/wedding/9.png' },
    { id: 'wed10', title: 'Wedding 10', imageUrl: '/designs/wedding/a10.png' },
    { id: 'wed11', title: 'Wedding 11', imageUrl: '/designs/wedding/b11.png' },
    { id: 'wed12', title: 'Wedding 12', imageUrl: '/designs/wedding/c12.png' }
  ],
  'birthday': [
    { id: 'b1', title: 'Pink Floral Celebration', imageUrl: '/birthday/1.png' },
    { id: 'b2', title: 'Space Mission blast off', imageUrl: '/birthday/2.png' },
    { id: 'b3', title: 'Princess Rainbow', imageUrl: '/birthday/3.png' },
    { id: 'b4', title: 'Unicorn Magic', imageUrl: '/birthday/4.png' },
    { id: 'b5', title: 'Dinosaur Safari', imageUrl: '/birthday/5.png' }
  ],
  'corporate': [
    { id: 'corp1', title: 'Corporate 1', imageUrl: '/designs/corporate/1.png' },
    { id: 'corp2', title: 'Corporate 2', imageUrl: '/designs/corporate/2.png' },
    { id: 'corp3', title: 'Corporate 3', imageUrl: '/designs/corporate/3.png' },
    { id: 'corp4', title: 'Corporate 4', imageUrl: '/designs/corporate/4.png' },
    { id: 'corp5', title: 'Corporate 5', imageUrl: '/designs/corporate/5.png' },
    { id: 'corp6', title: 'Corporate 6', imageUrl: '/designs/corporate/6.png' }
  ],
  'engagement': [
    { id: 'eng1', title: 'Engagement 1', imageUrl: '/designs/engagement/1.png' },
    { id: 'eng2', title: 'Engagement 2', imageUrl: '/designs/engagement/2.png' },
    { id: 'eng3', title: 'Engagement 3', imageUrl: '/designs/engagement/3.png' },
    { id: 'eng4', title: 'Engagement 4', imageUrl: '/designs/engagement/4.png' },
    { id: 'eng5', title: 'Engagement 5', imageUrl: '/designs/engagement/5.png' },
    { id: 'eng6', title: 'Engagement 6', imageUrl: '/designs/engagement/6.png' },
    { id: 'eng7', title: 'Engagement 7', imageUrl: '/designs/engagement/7.png' }
  ],
  'baby-shower': [
    { id: 'bs1', title: 'Baby Shower 1', imageUrl: '/designs/baby-shower/1.png' },
    { id: 'bs2', title: 'Baby Shower 2', imageUrl: '/designs/baby-shower/2.png' },
    { id: 'bs3', title: 'Baby Shower 3', imageUrl: '/designs/baby-shower/3.png' },
    { id: 'bs4', title: 'Baby Shower 4', imageUrl: '/designs/baby-shower/4.png' },
    { id: 'bs5', title: 'Baby Shower 5', imageUrl: '/designs/baby-shower/5.png' },
    { id: 'bs6', title: 'Baby Shower 6', imageUrl: '/designs/baby-shower/6.png' },
    { id: 'bs7', title: 'Baby Shower 7', imageUrl: '/designs/baby-shower/7.png' },
    { id: 'bs8', title: 'Baby Shower 8', imageUrl: '/designs/baby-shower/8.png' },
    { id: 'bs9', title: 'Baby Shower 9', imageUrl: '/designs/baby-shower/9.png' },
    { id: 'bs10', title: 'Baby Shower 10', imageUrl: '/designs/baby-shower/a10.png' },
    { id: 'bs11', title: 'Baby Shower 11', imageUrl: '/designs/baby-shower/b11.png' },
    { id: 'bs12', title: 'Baby Shower 12', imageUrl: '/designs/baby-shower/c12.png' },
    { id: 'bs13', title: 'Baby Shower 13', imageUrl: '/designs/baby-shower/d13.png' }
  ],
  'custom': [
    { id: 'c1', title: 'Custom 1', imageUrl: '/designs/custom/1.png' },
    { id: 'c2', title: 'Custom 2', imageUrl: '/designs/custom/2.png' },
    { id: 'c3', title: 'Custom 3', imageUrl: '/designs/custom/3.png' },
    { id: 'c4', title: 'Custom 4', imageUrl: '/designs/custom/4.png' }
  ]
};
