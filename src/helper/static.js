function createStaticData() {
  const EMAIL = 'contact@mediarchitects.in'
  const PHONE = '+91 9737883064'
  return {
    EMAIL,
    PHONE,
    ADDRESS: '711 Rio Business Hub, Yamuna Chowk, Mota Varachha, Surat',
    PHONE_REDIRECTION: `tel:${PHONE}`,
    EMAIL_REDIRECTION: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Inquiries&body=Hello`
  }
}

exports.STATIC_DATA = createStaticData()

exports.PROJECTS = [
  {
    id: 1,
    name: 'Mr. Vikasbhai Bunglows',
    projectName: 'ladvi bunglow',
    tagLine: 'A fusion of grid patterns and open space',
    title: 'Gridscape',
    description: 'Connected Spatial Harmony. This private residence seamlessly blends contemporary design with traditional materials, creating a strong connection to nature. The use of earthy textures, clean geometry, and greenery enhances both comfort and elegance. The façade combines exposed brick, concrete, and dark accents, resulting in a balanced and sophisticated look. Large glass openings allow natural light to flow in while maintaining privacy. Thoughtfully designed landscaping further integrates the home with its surroundings, offering a peaceful and timeless living experience.',
    year: 2024,
    area: '11000 sq.ft',
    location: 'Ladvi Gam, Surat',
    images: [
      '/img/project-imgs/VIKASBHAI/1.webp',
      '/img/project-imgs/VIKASBHAI/2.webp',
      '/img/project-imgs/VIKASBHAI/3.webp',
      '/img/project-imgs/VIKASBHAI/4.webp'
    ]
  },
  {
    id: 2,
    name: 'Mr. Ck Bunglows',
    projectName: 'Mr.Ck bunglow',
    tagLine: `Where fluid form, natural light, and green edges define modern living.`,
    title: 'Curvilinear Urban Retreat',
    description: 'A striking interplay of fluid geometry and modern minimalism, this corner residence redefines urban living with its bold yet organic form. The sweeping curves of the balconies soften the rigid architectural language, creating a seamless dialogue between built space and nature. The monochromatic façade, punctuated by warm earthy accents, lends a refined sophistication while maximizing natural light and ventilation. The rooftop solar canopy hints at sustainable ingenuity, merging functionality with aesthetics. Verdant planters cascade over the edges, infusing the structure with vibrancy and reinforcing its connection to the environment. Designed for those who seek a balance of elegance and efficiency, this home is a contemporary sanctuary in the heart of the city.',
    year: 2023,
    area: '3800 sq.ft',
    location: 'Katargam, Surat',
    images: [
      '/img/project-imgs/CK-BUNGLOWS/1.webp',
      '/img/project-imgs/CK-BUNGLOWS/2.webp'
    ]
  },
  {
    id: 3,
    name: 'That\'s People',
    projectName: 'that\'s people',
    tagLine: 'A workspace shaped by vision and vibrancy.',
    title: 'The Panoramic Splendor',
    description: 'Stepping into a realm where innovation meets aesthetics, this office design showcases round shapes and panoramic views. Its cutting-edge parametric features create a zestful and fluid environment that fosters creativity and collaboration. Radiating energy and vibrancy, the bright and vibrant colour shades infuse the space with a sense of liveliness and inspiration. Hence, experiencing a workspace like no other, where form and function harmoniously blend to redefine the boundaries of a modern office design.',
    year: 2021,
    area: '1000 sq.ft',
    location: 'Mota Varachha, Surat',
    images: [
      '/img/project-imgs/THATS-PEOPLE/1.webp',
      '/img/project-imgs/THATS-PEOPLE/2.webp',
      '/img/project-imgs/THATS-PEOPLE/3.webp',
      '/img/project-imgs/THATS-PEOPLE/4.webp',
      '/img/project-imgs/THATS-PEOPLE/5.webp',
      '/img/project-imgs/THATS-PEOPLE/6.webp'
    ]
  },
  {
    id: 4,
    name: 'Krishana Residency',
    projectName: 'krishna residency',
    tagLine: 'Quiet beauty crafted with thoughtful simplicity.',
    title: 'In the Modest Minimal',
    description: 'This architectural piece embraces simplicity, showcasing a clean, streamlined aesthetic that enchants the eye. Its clever variation in levels offers a dynamic living experience that transcends the ordinary. Abundant, open windows and the spaces that were made to look big by cutting down the visual barriers, craft the wideness. More like stepping into a world where minimalism meets elegance, every detail celebrates the beauty of simplicity. The Small yet Subtle is the charm.',
    year: 2020,
    area: '1700 sq.ft',
    location: 'Katargam, Surat',
    images: [
      '/img/project-imgs/KRISHANA-RESIDENCY/1.webp',
      '/img/project-imgs/KRISHANA-RESIDENCY/2.webp',
      '/img/project-imgs/KRISHANA-RESIDENCY/3.webp',
      '/img/project-imgs/KRISHANA-RESIDENCY/4.webp',
      '/img/project-imgs/KRISHANA-RESIDENCY/5.webp',
      '/img/project-imgs/KRISHANA-RESIDENCY/6.webp',
      '/img/project-imgs/KRISHANA-RESIDENCY/7.webp'
    ]
  },
  {
    id: 5,
    name: 'Sky Rise Residence',
    projectName: 'sky rise Residence',
    tagLine: 'A spacious sanctuary where openness meets elegant design.',
    title: 'Amply Open',
    description: 'This piece of architecture is designed to experience boundless openness and enhanced spaciousness with our expertly crafted space design. By artfully rearranging and merging elements to one side, we\'ve unlocked the full potential of your living area. The strategic placement of furniture and decor creates an illusion of boundless wideness, allowing you to revel in an airier, more expansive ambiance. Embracing the feeling of endless possibilities in a newly transformed space, where every corner exudes a sense of freedom and openness, one steps into a world of grandeur without compromising on style and functionality.',
    year: 2021,
    area: '2000 sq.ft',
    location: 'Mota Varachha, Surat',
    images: [
      '/img/project-imgs/SKY-RISE/1.webp',
      '/img/project-imgs/SKY-RISE/3.webp',
      '/img/project-imgs/SKY-RISE/4.webp',
      '/img/project-imgs/SKY-RISE/5.webp',
      '/img/project-imgs/SKY-RISE/6.webp',
      '/img/project-imgs/SKY-RISE/7.webp',
      '/img/project-imgs/SKY-RISE/8.webp',
      '/img/project-imgs/SKY-RISE/9.webp'
    ]
  },
  {
    id: 6,
    name: 'Mr. Devrajbhai Bunglows',
    projectName: 'Mr.Devrajbhai Bunglows',
    tagLine: 'A home that balances tradition, nature, and modern living.',
    title: 'Grounded Grace',
    description: 'Rooted in simplicity yet rich in detail, this bungalow embraces a timeless aesthetic that merges traditional warmth with contemporary clarity. Clean lines and balanced proportions anchor the home with a sense of calm permanence, while large openings blur the boundary between interior life and the outdoors. Earth-toned surfaces, textured stone, and subtle wood accents lend a tactile warmth, inviting both light and shadow to play across the spaces throughout the day. Courtyards and verandahs offer quiet moments of pause—breathing spaces within the structure that foster connection and reflection. Thoughtfully zoned for both privacy and gathering, the home flows effortlessly between solitude and celebration. It is not just a residence but a retreat—designed to age gracefully, live sustainably, and echo the quiet dignity of the family it shelters.',
    year: 2024,
    area: '10500 sq.ft',
    location: 'Ladvi Gam, Surat',
    images: [
      '/img/project-imgs/DEVRAJBHAI-BUNGLOWS/1.webp',
      '/img/project-imgs/DEVRAJBHAI-BUNGLOWS/2.webp',
      '/img/project-imgs/DEVRAJBHAI-BUNGLOWS/3.webp'
    ]
  }
]

exports.TEAMS = [
  {
    name: 'AR. PRASHANT KHUNT',
    role: 'Architect',
    qualification: 'Bachelor of Architecture',
    image: '/img/team/prashant.png'
  },
  {
    name: 'ER. JAY LAKHANI',
    role: 'Engineer',
    qualification: 'Msc Structural Engineer',
    image: '/img/team/jay.png'
  },
  {
    name: 'ID  RUCHITA PATEL',
    role: 'Interior Designer',
    qualification: 'Interior Designer',
    image: '/img/team/ruchita.png'
  },
  {
    name: 'JATIN PATEL',
    role: 'VR Expert',
    qualification: 'Virtual Reality',
    image: '/img/team/jatin.png'
  },
  {
    name: 'ER. DHAVAL BARVALIYA',
    role: 'Site Supervisor',
    qualification: 'Site Supervisor',
    image: '/img/team/dhaval.png'
  }
]
